import { numberToString } from 'app/utils';

export const productsAdapter = rawProducts => {
  return rawProducts.reduce((accumulator, product) => ({
    ...accumulator,
    [product.s]: {
      'pair': `${product.b}/${product.q}`,
      'lastPrice': numberToString(product.c),
    },
  }), {});
};
