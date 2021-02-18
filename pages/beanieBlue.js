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

export default function BeanieBlue() {
  return (
    <Layout>
      <Head>
        <title>BeanieBlue</title>
      </Head>
      <div css={productStyles}>
        <div>
          <Image
            src="/pictures/haubeBlau.jpg"
            height={400}
            width={400}
            alt="haubeBlau"
          />
        </div>
        <div>
          <textbox>
            <h2>BEANIE BLUE</h2>
            <p>
              This thin and chic but warm beanie is a perfect fit for a day in
              the city.
              <br />
              Handknit with a decorative pattern.
              <br />
              Size: One size fits most.
              <br />
              Material: 100%soft cashmire wool
              <br />
              Care instructions: handwash only
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
