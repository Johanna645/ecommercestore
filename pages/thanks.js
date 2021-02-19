import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';

const textStyles = css`
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

export default function Thanks() {
  return (
    <Layout>
      <Head>
        <title>Thank You</title>
      </Head>
      <div css={textStyles}>
        <h1>Thank You for your purchase at Haystack Needlework.</h1>
        <br />
        <p>
          We will inform you when your order has been made and is ready to be
          delivered.
        </p>
      </div>
    </Layout>
  );
}
