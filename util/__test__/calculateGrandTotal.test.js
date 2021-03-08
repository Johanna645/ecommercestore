import { calculateGrandTotal } from '../calculateGrandTotal';

// test for sum-function in shoppingcart, notice that grand total has shipping costs of 8 extra

test('add two product sums', () => {
  const cartCookieValue = [
    { productId: 1, amount: 1, productPrice: 5 },
    { productId: 2, amount: 2, productPrice: 5 },
  ];
  const result = calculateGrandTotal(cartCookieValue);

  expect(result).toEqual(23);
});
