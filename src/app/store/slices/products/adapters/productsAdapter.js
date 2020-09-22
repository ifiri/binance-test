import { numberToString } from 'app/utils';

const productsAdapter = rawProducts => {
  return rawProducts.reduce((accumulator, product) => ({
    ...accumulator,
    [product.s]: {
      'pair': `${product.b}/${product.q}`,
      'lastPrice': numberToString(product.c),
    },
  }), {});
};

export default productsAdapter;
