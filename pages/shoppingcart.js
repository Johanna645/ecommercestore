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

  table {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
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
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <tr />
            <tr />
            <tr />
            <tr />
          </table>
          <table>
            <tr />
            <tr />
            <tr />
            <tr>Shipping cost 8.00€</tr>
          </table>
          <table>
            <tr />
            <tr />
            <tr />
            <tr>
              <strong>Grand total: €</strong>
            </tr>
          </table>
        </div>
        <div>
          <Link href="/checkout">
            <button type="button">Go to checkout</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
