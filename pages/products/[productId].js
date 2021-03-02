import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  incrementAmountByProduct,
  setAmountCookieClientSide,
  decreaseAmountByProduct,
} from '../../util/cookies';

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  grid-row-gap: 10px;
  text-align: left;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;

  margin-left: 40px;
  margin-right: 40px;

  .button {
    float: left;
    border: 1px solid black;
  }
`;

export default function SingleProduct(props) {
  // state variable with the value from the cookie read in getServerSideProps
  const [amount, setAmount] = useState(props.productCookieValue);

  // every time the state variable updates, set a new value to the cookie, sent also to server when refreshed or loaded
  useEffect(() => {
    Cookies.set('amount', amount);
  }, [amount]);

  const amountForProductCookie = amount.find(
    (productFromCookie) =>
      console.log(
        'abc',
        amount,
        productFromCookie.productId,
        props.product.id,
      ) || productFromCookie.productId === props.product.id,
  ); // here has to be something wrong, it's logging out array of objects with all products and their amount. So this is like the entire cart cookie.
  console.log(amount);

  return (
    <Layout>
      <Head>
        <title>{props.product.productName}</title>
      </Head>
      <div css={productStyles}>
        <div>
          <Image
            src={`/pictures/${props.product.id}.jpg`}
            height={400}
            width={400}
            alt=""
          />
        </div>
        <div>
          <textbox>
            <h2>{props.product.productName}</h2>
            <p>{props.product.productPrice}€</p>
            <p>{props.product.productInfo}</p>
          </textbox>

          <div>
            {/* show the value of visits. "?."" is a test if value is null or undefined and won't cause an error, but just return undefined if there is nothing */}
            <div>Current amount: {amountForProductCookie?.amount || 0}</div>{' '}
            {/* current amount is not updating. it is all the time 0 */}
            <button
              onClick={() => {
                const newAmount = incrementAmountByProduct(
                  amount,
                  props.product.id,
                  console.log('props', props.product),
                );

                setAmount(newAmount);
                // setAmountCookieClientSide(amount);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setAmountCookieClientSide(amount);
              }}
            >
              Add to cart {/* this doesn't seem to do anything  */}
            </button>
            <button
              onClick={() => {
                const newAmount = decreaseAmountByProduct(
                  amount,
                  props.product.id,
                );

                setAmount(newAmount);
                // setAmountCookieClientSide(amount);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getSingleProduct } = await import('../../util/database');

  const id = context.query.productId;

  const product = await getSingleProduct(id);

  // const product = products.find((product) => product.productName === name);

  // This is the first thing that actually happens. Cookie is read the first time, JSON.parse reads a complex value, and if there is no value, it will start an empty array - so to props is passed on either the value of the visits or an empty array
  const amount = context.req.cookies.amount;
  const productCookieValue = amount ? JSON.parse(amount) : [];

  return {
    props: {
      product: product,
      productCookieValue: productCookieValue,
    },
  };
}
