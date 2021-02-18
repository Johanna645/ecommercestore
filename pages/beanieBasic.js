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

export default function BeanieBasic() {
  return (
    <Layout>
      <Head>
        <title>BeanieBasic</title>
      </Head>
      <div css={productStyles}>
        <div>
          <Image
            src="/pictures/haubeGrau.jpg"
            height={400}
            width={400}
            alt="haubeGrau"
          />
        </div>
        <div>
          <textbox>
            <h2>BEANIE BASIC</h2>
            <p>
              This cosy basic beanie is a classic!
              <br />
              Handknit in soft mixed wool, it's perfect for the winter outing.
              <br />
              Size: One size fits most.
              <br />
              Material: 100% mixed wool
              <br />
              Care instructions: Maschine washable in 30' wool wash program.
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
