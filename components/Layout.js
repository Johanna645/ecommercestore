import Link from 'next/link';
import Head from 'next/head';
import { css } from '@emotion/react';
import Image from 'next/image';

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
          </div>
          <h2>
            {' '}
            <Link href="/">
              <a>home</a>
            </Link>{' '}
            <Link href="/products/beanies">
              <a>beanies</a>
            </Link>{' '}
            <Link href="/products/scarves">
              <a>scarves</a>
            </Link>{' '}
            <Link href="/products/gloves">
              <a>gloves</a>
            </Link>{' '}
            <Link href="/about">
              <a>about</a>
            </Link>
          </h2>
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
