import Head from 'next/head';
import { css } from '@emotion/react';
import Layout from '../components/Layout';
import Link from 'next/link';

const formStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //grid-gap: 40px;
  grid-row-gap: 10px;
  text-align: left;
  line-height: 1.1;
  font-family: Arial, Helvetica, sans-serif;

  margin-left: 120px;
  //margin-right: 40px;
`;

export default function Checkout() {
  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>

      <div>
        <div>
          <h2>The grand total of your order is: </h2>

          <h3>Please fill out the form underneath to continue.</h3>
        </div>

        <div css={formStyle}>
          <div>
            <h2>Shipping:</h2>
            <br />

            <p>
              <div for="first_name">First Name</div>

              <input type="text" name="first_name" />
            </p>
            <p>
              <div for="last_name">Last Name</div>

              <input type="text" name="last_name" />
            </p>

            <p>
              <div for="mail">Email</div>

              <input type="email" id="mail" name="user_email" />
            </p>

            <p>
              <div for="street">Street name and number</div>

              <input type="text" id="street" />
            </p>
            <p>
              <div for="city">Postal code and City</div>

              <input type="text" id="city" />
            </p>
          </div>

          <div>
            <h2>Payment:</h2>
            <br />
            <p>
              Card {''}
              <select id="card">
                <option>Master Card</option>
                <option>Visa</option>
              </select>
            </p>
            <p>
              <div for="number">Card number</div>

              <input type="number" id="number" />
            </p>
            <p>
              <div for="owner">Card owner (Last name First name)</div>

              <input type="text" id="owner" />
            </p>
            <p>
              <div for="valid">Valid through (MM/YY)</div>

              <input type="text" id="valid" />
            </p>
            <p>
              <div for="secret">CVV2 code</div>

              <input type="text" id="secret" />
            </p>
            <br />
            <br />
            <div>
              <Link href="/thanks">
                <button type="button">Submit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
