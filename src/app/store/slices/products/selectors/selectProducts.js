import { FILTERS_MAP } from 'app/constants';

import { selectFilter } from 'app/store/slices/filter/selectors';
import { selectSearch } from 'app/store/slices/search/selectors';
import { selectSort } from 'app/store/slices/sort/selectors';

import { selectProductsExistence } from './selectProductsExistence';

export const selectProducts = state => {
  const { products } = state;
  const areProductsExists = selectProductsExistence(state);

  if (areProductsExists) {
    const filter = selectFilter(state);
    const search = selectSearch(state);
    const sort = selectSort(state);

    if (!filter && !search && !sort.column) {
      return Object.values(products.data);
    }

    let selected = Object.values(products.data);

    if (filter) {
      const mappedFilter = FILTERS_MAP[filter];

      const regexp = new RegExp(
        Array.isArray(mappedFilter) ? mappedFilter.join('|') : mappedFilter,
      'i');

      selected = selected.filter(product => {
        return regexp.test(product.pair);
      });
    }

    if (search) {
      const regexp = new RegExp(search, 'i');

      selected = selected.filter(product => {
        return regexp.test(product.pair);
      });
    }

    if (sort.column && sort.type) {
      selected.sort((a, b) => {
        switch(sort.column) {
          case 'pair':
            if (sort.type === 'desc') {
              return b.pair.localeCompare(a.pair);
            }

            return a.pair.localeCompare(b.pair);

          case 'lastPrice':
            if (sort.type === 'desc') {
              return parseFloat(b.lastPrice) > parseFloat(a.lastPrice);
            }

            return parseFloat(a.lastPrice) > parseFloat(b.lastPrice);

          default:
            return 0;
        }
      });
    }

    return selected;
  }

  return [];
};
