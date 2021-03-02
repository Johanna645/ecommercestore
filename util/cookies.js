import Cookies from 'js-cookie';

// to keep track of the amount for a single product

export function incrementAmountByProduct(cartCookieValue, productId) {
  const isIdInArray = cartCookieValue.some(
    (productAmount) => productAmount.productId === productId,
  );

  // if the array doesn't have the match for the productName, add a new array element at the end
  // if there is a match, this if is jumped over and the next return goes on
  if (!isIdInArray) {
    return [
      ...cartCookieValue,
      {
        productId: productId,
        amount: 1,
      },
    ];
  }

  return cartCookieValue.map((productAmount) => {
    if (productId === productAmount.productId) {
      productAmount.amount = productAmount.amount + 1;
    }
    return productAmount;
  });
}

/* export function setAmountCookieClientSide(newAmount) {
  Cookies.set('amount', newAmount);
} does this have to be here or at the very end?*/

export function decreaseAmountByProduct(cartCookieValue, productId) {
  const isIdInArray = cartCookieValue.some(
    (productAmount) => productAmount.productId === productId,
  );
  // if the array doesn't have the match for the productName, add a new array element at the end
  // if there is a match, this if is jumped over and the next return goes on
  if (!isIdInArray) {
    return [
      ...cartCookieValue,
      {
        productId: productId,
        amount: 0,
      },
    ];
  }

  return cartCookieValue.map((productAmount) => {
    if (productId === productAmount.productId) {
      if (productAmount.amount === 0) {
        return productAmount;
      } else {
        productAmount.amount = productAmount.amount - 1;
      }
    }
    return productAmount;
  });
}

// which cookie is set here, the cart or is there now a cookie for the single product?
export function setAmountCookieClientSide(newAmount) {
  Cookies.set('amount', newAmount);
}
