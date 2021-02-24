import Cookies from 'js-cookie';

// to keep track of the amount for a single product

const productCookieValue = [
  {
    productName: 'FLASHY MITTENS',
    amount: 0,
  },

  { productName: 'COOL GREY', amount: 0 },
];

export function incrementAmountByProduct(amountCookieValue, productName) {
  const isNameInArray = productCookieValue.some(
    (productAmount) => productAmount.productName === productName,
  );

  // if the array doesn't have the match for the productName, add a new array element at the end
  // if there is a match, this if is jumped over and the next return goes on
  if (!isNameInArray) {
    return [
      ...productCookieValue,
      {
        productName: productName,
        amount: 1,
      },
    ];
  }

  return productCookieValue.map((productNameAmount) => {
    if (productName === productNameAmount.productName) {
      productNameAmount.amount = productNameAmount.amount + 1;
    }
    return productNameAmount;
  });
}

export function setAmountCookieClientSide(newAmount) {
  Cookies.set('amount', newAmount);
}
