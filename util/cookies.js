import Cookies from 'js-cookie';

export function getAmountOfProductsInCart() {
  let cartCounter = 0;
  let cartCookie = Cookies.get('amount');
  if (cartCookie != null) {
    console.log('cartCookie is', cartCookie);

    cartCookie = JSON.parse(cartCookie);
    for (let i = 0; i < cartCookie.length; i++) {
      cartCounter = cartCounter + cartCookie[i].amount;
      console.log(cartCounter);
      console.log(cartCookie[i].amount);
    }
    return cartCounter;
  }
  return;
}
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

export function decreaseAmountByProduct(cartCookieValue, id) {
  const isIdInArray = cartCookieValue.some(
    (productAmount) => productAmount.productId === id,
  );
  // if the array doesn't have the match for the productName, add a new array element at the end
  // if there is a match, this if is jumped over and the next return goes on
  if (!isIdInArray) {
    return [
      ...cartCookieValue,
      {
        productId: id,
        amount: 0,
      },
    ];
  }

  return cartCookieValue.filter((productAmount) => {
    if (id === productAmount.productId) {
      if (productAmount.amount === 1) {
        const newCookie = JSON.parse(Cookies.get('amount')).filter(
          (cookieProduct) => cookieProduct.id !== id,
        );
        Cookies.set('amount', JSON.stringify(newCookie));
        return false; //this returns nothing
      } else {
        productAmount.amount = productAmount.amount - 1;
      }
    }
    return true; //this returns productAmount
  });
}

export function setAmountCookieClientSide(newAmount) {
  Cookies.set('amount', newAmount);
}
