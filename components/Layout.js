import Link from 'next/link';
import Head from 'next/head';
import { css } from '@emotion/react';

const headerStyles = css`
  border: '1 px solid black';
  border-radius: 5;
  padding: 8;

  a + a {
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
          <h1 className="title">
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
            </Link>
          </h1>
        </nav>
      </header>

      {props.children}

      <footer>Footer</footer>
    </>
  );
}
