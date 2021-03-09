import Head from 'next/head';
import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';

const headerStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 20% 80%;
  border-top: 8px solid #ffe570;
  //text-align: left;

  color: #005f6a;
  font-size: 24;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;

  margin-bottom: 10px;

  a {
    color: #005f6a;
    margin-left: 10px;
  }
`;

const textStyles = css`
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

const logoStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50% 50%;
  color: white;
  font-size: 16;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #cccccc;
  width: 220px;

  padding: 20px;
`;

const footerStyles = css`
  border-bottom: 8px solid #ffe570;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;

  p {
    margin-left: 15px;
  }
`;

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You</title>
      </Head>

      <div css={headerStyles}>
        <span css={logoStyle}>
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
        </span>
        <div>
          <p>
            <br />
            <br />
            <br />
            <br />{' '}
            <Link href="/">
              <a>RETURN TO SHOP</a>
            </Link>{' '}
          </p>
        </div>
      </div>

      <div css={textStyles}>
        <h1>Thank You for your purchase at Haystack Needlework.</h1>
        <br />
        <p>
          We will inform you when your order has been made and is ready to be
          delivered.
        </p>
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
    </>
  );
}
