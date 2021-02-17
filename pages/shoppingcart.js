import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Shoppingcart() {
  return (
    <Layout>
      <Head>
        <title>Cart</title>
      </Head>
      <div>
        <div>
          <button>Proceed to checkout</button>
        </div>
        <div>
          <table>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <tr>Shipping costs: 20.00€</tr>
            <tr>Grand total: €</tr>
          </table>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </Layout>
  );
}
