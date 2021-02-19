import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const textStyles = css`
  font-family: Arial, Helvetica, sans-serif;
`;

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  grid-row-gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
`;

export default function Gloves() {
  return (
    <Layout>
      <Head>
        <title>Gloves</title>
      </Head>
      <h1 css={textStyles}>GLOVES</h1>
      <div css={productStyles}>
        <div>
          <Image
            src="/pictures/glovesGelb.jpg"
            height={144}
            width={144}
            alt="glovesGelb"
          />
          <p>SUNNY METALLIC</p>
        </div>

        <div>
          <Image
            src="/pictures/glovesGrau.jpg"
            height={144}
            width={144}
            alt="glovesGrau"
          />
          <p>COOL GREY</p>
        </div>

        <div>
          <Image
            src="/pictures/flashyMittens.jpg"
            height={144}
            width={144}
            alt="flashyMittens"
          />
          <p>FLASHY MITTENS</p>
        </div>
      </div>
    </Layout>
  );
}
