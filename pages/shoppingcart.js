import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

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

export default function Shoppingcart() {
  return (
    <Layout>
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
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
            <tr />
            <tr />
            <tr />
            <tr />
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
              <strong>GRAND TOTAL: €</strong>
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
