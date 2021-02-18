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

export default function CoolGrey() {
  return (
    <Layout>
      <Head>
        <title>Cool Grey</title>
      </Head>
      <div css={productStyles}>
        <div>
          <Image
            src="/pictures/glovesGrau.jpg"
            height={400}
            width={400}
            alt="glovesGrau"
          />
        </div>
        <div>
          <textbox>
            <h2>COOL GREY</h2>
            <p>
              These classy thin gloves will keep your fingers warm!
              <br />
              Handknit in soft wool.
              <br />
              Size: Classic glove size M with palm length of 19cm.
              <br />
              Please let us know per e-mail if you need changes to the length.
              <br />
              Material: 100% soft wool
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
