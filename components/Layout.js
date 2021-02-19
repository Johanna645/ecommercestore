import Link from 'next/link';
import Head from 'next/head';
import { css } from '@emotion/react';
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

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Haystack Needlework</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
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
                  <a>HOME</a>
                </Link>{' '}
                <Link href="/products">
                  <a>PRODUCTS</a>
                </Link>
                <Link href="/products/beanies">
                  <a>BEANIES</a>
                </Link>{' '}
                <Link href="/products/scarves">
                  <a>SCARVES</a>
                </Link>{' '}
                <Link href="/products/gloves">
                  <a>GLOVES</a>
                </Link>{' '}
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>{' '}
                <Link href="/shoppingcart">
                  <a>CART</a>
                </Link>
              </p>
            </div>
          </div>
        </nav>
      </header>

      {props.children}

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
