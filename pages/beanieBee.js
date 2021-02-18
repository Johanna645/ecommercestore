import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

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
`;

export default function BeanieBee() {
  return (
    <Layout>
      <Head>
        <title>BeanieBee</title>
      </Head>
      <div css={productStyles}>
        <span>
          <Image
            src="/pictures/haubeGestreift.jpg"
            height={400}
            width={400}
            alt="haubeGestreift"
          />
        </span>
        <div>
          <textbox>
            <h2>BEANIE BEE</h2>
            <p>
              This chunky unisex beanie is a must-have!
              <br />
              Handknit in super soft wool, it's perfect for the winter season.
              <br />
              Size: One size fits most.
              <br />
              Material: 100%soft wool
              <br />
              Care instructions: handwash only
            </p>
          </textbox>
        </div>
      </div>
    </Layout>
  );
}
