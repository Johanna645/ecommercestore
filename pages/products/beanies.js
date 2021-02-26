import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  grid-row-gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
`;

const textStyles = css`
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Beanies() {
  return (
    <Layout>
      <Head>
        <title>Beanies</title>
      </Head>
      <h1 css={textStyles}>BEANIES</h1>
      <div css={productStyles}>
        <div>
          <Link href="/products/2">
            <Image
              src="/pictures/2.jpg"
              height={144}
              width={144}
              alt="haubeBlau"
            />
          </Link>
          <p>BEANIE BLUE</p>
        </div>

        <div>
          <Link href="/products/3">
            <Image
              src="/pictures/3.jpg"
              height={144}
              width={144}
              alt="haubeGestreift"
            />
          </Link>
          <p>BEANIE BEE</p>
        </div>

        <div>
          <Link href="/products/1">
            <Image
              src="/pictures/1.jpg"
              height={144}
              width={144}
              alt="haubeGrau"
            />
          </Link>
          <p>BEANIE BASIC</p>
        </div>
      </div>
    </Layout>
  );
}
