import Cookies from 'js-cookie';

// to keep track of the visits for a single product

const visitCookieValue = [
  {
    productName: 'FLASHY MITTENS',
    visits: 0,
  },

  { productName: 'COOL GREY', visits: 0 },
];

export function incrementVisitsByProduct(visitsCookieValue, productName) {
  const isNameInArray = visitCookieValue.some(
    (productVisits) => productVisits.productName === productName,
  );

  // if the array doesn't have the match for the productName, add a new array element at the end
  // if there is a match, this if is jumped over and the next return goes on
  if (!isNameInArray) {
    return [
      ...visitCookieValue,
      {
        productName: productName,
        visits: 1,
      },
    ];
  }

  return visitCookieValue.map((productNameVisits) => {
    if (productName === productNameVisits.productName) {
      productNameVisits.visits = productNameVisits.visits + 1;
    }
    return productNameVisits;
  });
}

export function setVisitCookieClientSide(newVisits) {
  Cookies.set('visits', newVisits);
}
