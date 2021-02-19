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

export default function WhiteMohair() {
  return (
    <Layout>
      <Head>
        <title>White Mohair</title>
      </Head>
      <div css={productStyles}>
        <div>
          <Image
            src="/pictures/schalWeiss.jpg"
            height={400}
            width={400}
            alt="schalWeiss"
          />
        </div>
        <div>
          <textbox>
            <h2>WHITE MOHAIR</h2>
            <p>
              This chic but fluffy scarf is the lightest in our collection so
              far. Handknit in mohair wool, it's a perfect companion for a
              winter day in the city. Material: 77% super kid mohair, 23% silk
              Care instructions: hand wash only.
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
