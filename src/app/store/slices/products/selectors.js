import { FILTERS_MAP } from 'app/constants';

export const selectFilter = state => state.products.search.filter;
export const selectSearchResults = state => state.products.search.results;
export const selectLoadingState = state => state.products.isLoading;

export const selectProductsExistence = state => {
  const { products } = state;

  return products.data && Object.keys(products.data).length;
};

export const selectProducts = state => {
  const { products } = state;
  const areProductsExists = selectProductsExistence(state);
  const searchResults = selectSearchResults(state);

  if (searchResults) {
    return searchResults;
  }

  if (areProductsExists) {
    const filter = selectFilter(state);

    if (filter) {
      const mappedFilter = FILTERS_MAP[filter];

      const regexp = new RegExp(
        Array.isArray(mappedFilter) ? mappedFilter.join('|') : mappedFilter,
      'i');

      return Object.values(products.data).filter(product => {
        return regexp.test(product.pair);
      });
    }

    return Object.values(products.data);
  }

  return [];
};