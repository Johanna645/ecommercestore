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

export default function Scarves() {
  return (
    <Layout>
      <Head>
        <title>Scarves</title>
      </Head>
      <h1 css={textStyles}>SCARVES</h1>
      <div css={productStyles}>
        <div>
          <Link href="/products/7">
            <Image
              src="/pictures/7.jpg"
              height={144}
              width={144}
              alt="schalWeiss"
            />
          </Link>
          <p>WHITE MOHAIR</p>
        </div>

        <div>
          <Link href="/products/8">
            <Image
              src="/pictures/8.jpg"
              height={144}
              width={144}
              alt="schalTube"
            />
          </Link>
          <p>LOOP SMART</p>
        </div>

        <div>
          <Link href="/products/9">
            <Image
              src="/pictures/9.jpg"
              height={144}
              width={144}
              alt="schalGestreift"
            />
          </Link>
          <p>SCARF AND STRIPES</p>
        </div>
      </div>
    </Layout>
  );
}
