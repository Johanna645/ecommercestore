import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import Cookies from 'js-cookie';
import {
  incrementAmountByProduct,
  setAmountCookieClientSide,
  decreaseAmountByProduct,
} from '../util/cookies';
import { getAmountOfProductsInCart } from '../util/cookies';

const cartStyle = css`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  table {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
  }

  button {
    background-color: #005f6a;
    color: white;
    //height: 80px;
    padding: 10px;
    font-size: 50;
    border-radius: 8px;
  }
`;

export default function Shoppingcart(props) {
  let total = 0;

  function calculateGrandTotal() {
    props.finalCart.forEach((productFromCookie) => {
      total =
        total + productFromCookie.productPrice * productFromCookie.quantity;
    });
    const grandTotal = total + 8;
    return grandTotal;
  }

  // function handleClickToRemove() {
  // const newFinalCart = props.finalCart.filter(function (productToBeRemoved) {
  //   return product.id !== productToBeRemoved.id;

  //   const newCookie = JSON.parse(Cookies.get('amount')).filter(
  //     (cookieProduct) => cookieProduct.id !== id,
  //   );
  //   Cookies.set('amount', JSON.stringify(newCookie));
  // });

  return (
    <Layout cartCounter={getAmountOfProductsInCart()}>
      <Head>
        <title>Cart</title>
      </Head>
      <div css={cartStyle}>
        <Image
          src="/pictures/shoppingcart.png"
          alt="shoppingcart"
          height={150}
          width={200}
        />

        <div>
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {props.finalCart.map((productFromCookie) => (
                <tr key={productFromCookie.productId}>
                  <td>{productFromCookie.productName}</td>
                  <td>{productFromCookie.productPrice}</td>
                  <td>{productFromCookie.quantity}</td>
                  <td>
                    <button
                      // onClick={() => handleClickToRemove(productFromCookie.productId)}
                      value="Remove"
                    >
                      REMOVE FROM CART
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table>
            <tr />
            <tr />
            <tr />
            <tr>SHIPPING COSTS 8.00€</tr>
          </table>
          <table>
            <tr />
            <tr />
            <tr />
            <tr>
              <strong>GRAND TOTAL: {calculateGrandTotal()} €</strong>
            </tr>
          </table>
        </div>
        <div>
          <Link href="/checkout">
            <button type="button">GO TO CHECKOUT</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../util/database');
  const products = await getProducts();

  const amount = context.req.cookies.amount;
  const cart = amount ? JSON.parse(amount) : [];

  const finalCart = [];

  cart.forEach((productFromCookie) => {
    const singleProduct = products.find(
      (product) => product.id === productFromCookie.productId,
    );
    if (singleProduct !== undefined) {
      const productAndAll = {
        productId: productFromCookie.productId,
        productName: singleProduct.productName,
        productPrice: singleProduct.productPrice,
        quantity: productFromCookie.amount,
      };
      if (productFromCookie.amount !== 0) {
        finalCart.push(productAndAll);
      }
    }
  });
  return { props: { finalCart: finalCart } };
}
