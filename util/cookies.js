import Cookies from 'js-cookie';

// to keep track of the amount for a single product

export function incrementAmountByProduct(productCookieValue, productName) {
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

/* export function setAmountCookieClientSide(newAmount) {
  Cookies.set('amount', newAmount);
} does this have to be here or at the very end?*/

export function decreaseAmountByProduct(productCookieValue, productName) {
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
        amount: 0,
      },
    ];
  }

  return productCookieValue.map((productNameAmount) => {
    if (productName === productNameAmount.productName) {
      productNameAmount.amount = productNameAmount.amount - 1;
    }
    return productNameAmount;
  });
}

export function setAmountCookieClientSide(newAmount) {
  Cookies.set('amount', newAmount);
}

export function getCookieValue() {
  return;
}
