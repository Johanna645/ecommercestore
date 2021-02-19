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

  .button {
    float: left;
    border: 1px solid black;
  }
`;

export default function ScarfAndStripes() {
  return (
    <Layout>
      <Head>
        <title>Scarf And Stripes</title>
      </Head>
      <div css={productStyles}>
        <div>
          <Image
            src="/pictures/schalGestreift.jpg"
            height={400}
            width={400}
            alt="schalGestreift"
          />
        </div>
        <div>
          <textbox>
            <h2>SCARF AND STRIPES</h2>
            <p>
              This classic scarf got playfullness from the sripes.
              <br />
              Handknit in soft mixed wool, it's great against the wind and
              weather.
              <br />
              Size: Length of the scarf is 170cm.
              <br />
              Material: 100% soft mixed wool
              <br />
              Care instructions: Maschine washable in 30'. Dry Flat.
            </p>
          </textbox>

          <div>
            <button /* onClick={() => {
              setCount(count + 1);
              // setPositiveValues(getPositiveValues(count, count2));
            }} */
            >
              +
            </button>

            <button /* onClick then somehow send info to the cart */>
              Add to cart
            </button>

            <button /* onClick={() => {
              setCount(count - 1);
              // setPositiveValues(getPositiveValues(count, count2));
            }} */
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
