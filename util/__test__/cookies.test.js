import { incrementAmountByProduct } from '../cookies';

import { decreaseAmountByProduct } from '../cookies';

// test for an empty array, does a product get added

test('add new product to an empty cookie', () => {
  const productIdToAdd = 1;
  const cartCookieValue = [];
  const result = incrementAmountByProduct(cartCookieValue, productIdToAdd);

  expect(result).toEqual([{ productId: productIdToAdd, amount: 1 }]);
});

// test for array not being empty, does the product that is not in get added

test('add new product to the cookie', () => {
  const productIdToAdd = 1;
  const cartCookieValue = [{ productId: 2, amount: 2 }];
  const result = incrementAmountByProduct(cartCookieValue, productIdToAdd);

  expect(result).toEqual([
    ...cartCookieValue,
    { productId: productIdToAdd, amount: 1 },
  ]);
});

// test when product already exists in array, does its amount increase

test('increment product amount', () => {
  const productIdToAdd = 1;
  const cartCookieValue = [{ productId: 1, amount: 2 }];
  const result = incrementAmountByProduct(cartCookieValue, productIdToAdd);

  expect(result).toEqual([{ productId: productIdToAdd, amount: 3 }]);
});

// test does the product amount decrease

test('decrease product amount', () => {
  const productIdToReduce = 1;
  const cartCookieValue = [{ productId: 1, amount: 3 }];
  const result = decreaseAmountByProduct(cartCookieValue, productIdToReduce);

  expect(result).toEqual([{ productId: productIdToReduce, amount: 2 }]);
});

// test does the product get filtered from array when amount goes to 0

test('decrease product amount to zero', () => {
  const productIdToReduce = 1;
  const cartCookieValue = [
    { productId: 1, amount: 1 },
    { productId: 2, amount: 2 },
  ];
  const result = decreaseAmountByProduct(cartCookieValue, productIdToReduce);

  expect(result).toEqual([{ productId: 2, amount: 2 }]);
});
