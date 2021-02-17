import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

const footerStyles = css`
  border-bottom: 8px solid #ffe570;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;

  p {
    margin-left: 15px;
  }
`;

const headerStyles = css`
  border-top: 8px solid #ffe570;

  a + a {
    margin-left: 15px;
  }
`;

const logoStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50% 50%;
  color: white;
  font-size: 16;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #dedede;
  width: 300px;

  padding: 20px;
`;

export default function Checkout() {
  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <header css={headerStyles}>
        <nav>
          <div css={logoStyle}>
            <div>
              <Image
                src="/pictures/haystack.jpg"
                height={80}
                width={80}
                alt="haystack"
              />
            </div>
            <div>
              <p>
                Haystack <br /> Needlework
              </p>
            </div>

            <p>
              <Link href="/">
                <a>home</a>
              </Link>
            </p>
          </div>
        </nav>
      </header>
      <div>
        <p>The grand total of your order is: </p>
        <br />
        <p>Please fill out the form underneath to continue.</p>
      </div>
      <div>
        <h2>Shipping:</h2>
        <br />

        <p>
          <div for="first_name">First Name</div>
          <br />
          <input type="text" name="first_name" />
        </p>
        <p>
          <div for="last_name">Last Name</div>
          <br />
          <input type="text" name="last_name" />
        </p>

        <p>
          <div for="mail">Email</div>
          <br />
          <input type="email" id="mail" name="user_email" />
        </p>

        <p>
          <div for="street">Street name and number</div>
          <br />
          <input type="text" id="street" />
        </p>
        <p>
          <div for="city">Postal code and City</div>
          <br />
          <input type="text" id="city" />
        </p>

        <br />
        <br />
        <h2>Payment:</h2>
        <br />
        <p>
          <div for="card">Select credit card</div>
          <br />
          <select id="card">
            <option>Master Card</option>
            <option>Visa</option>
          </select>
        </p>
        <p>
          <br />
          <div for="number">Card number</div>
          <br />
          <input type="number" id="number" />
        </p>
        <p>
          <br />
          <div for="owner">Card owner (Last name First name)</div>
          <br />
          <input type="text" id="owner" />
        </p>
        <p>
          <br />
          <div for="valid">Valid through (MM/YY)</div>
          <br />
          <input type="text" id="valid" />
        </p>
        <p>
          <br />
          <div for="secret">CVV2 code</div>
          <br />
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
      <footer css={footerStyles}>
        <p>
          {' '}
          Haystack Needlework
          <br />
          Highway to Hay, 90120 Haywood
        </p>
        <p>tel: 0800-123-456</p>
        <p>contact@haystackneedlework.com</p>
      </footer>
    </div>
  );
}
