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
          <Image
            src="/pictures/schalWeiss.jpg"
            height={144}
            width={144}
            alt="schalWeiss"
          />
          <p>WHITE MOHAIR</p>
        </div>

        <div>
          <Image
            src="/pictures/schalTube.jpg"
            height={144}
            width={144}
            alt="schalTube"
          />
          <p>LOOP SMART</p>
        </div>

        <div>
          <Image
            src="/pictures/schalGestreift.jpg"
            height={144}
            width={144}
            alt="schalGestreift"
          />
          <p>SCARF AND STRIPES</p>
        </div>
      </div>
    </Layout>
  );
}
