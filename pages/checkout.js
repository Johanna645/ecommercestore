import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';

export default function Checkout() {
  return (
    <div>
      <h2>Shipping:</h2>
      <form>
        <label>Title</label>
        <br />
      </form>
      <h2>Billing:</h2>
      <h2>Payment:</h2>
    </div>
  );
}
