import { FILTERS_MAP } from 'app/constants';

export const selectSort = state => state.products.sort;
export const selectFilter = state => state.products.filter;
export const selectSearch = state => state.products.search;
export const selectLoadingState = state => state.products.isLoading;

export const selectProductsExistence = state => {
  const { products } = state;

  return products.data && Object.keys(products.data).length;
};

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