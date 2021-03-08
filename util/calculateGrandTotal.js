export function calculateGrandTotal(finalCart) {
  let total = 0;

  finalCart.forEach((productFromCookie) => {
    total = total + productFromCookie.productPrice * productFromCookie.amount;
  });
  const grandTotal = total + 8;
  return grandTotal;
}
