import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const productStyles = css`
  margin: 20px;
  Image {
    padding: 20px; // funktioniert noch nicht
  }
`;

export default function Beanies() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <div css={productStyles}>
        <h2>Have a look at our marvelous products on one go:</h2>
        <div>
          <Link href="/products/beanies">
            <Image
              src="/pictures/haubeBlau.jpg"
              height={144}
              width={144}
              alt="haubeBlau"
            />
          </Link>

          <Link href="/products/beanies">
            <Image
              src="/pictures/haubeGestreift.jpg"
              height={144}
              width={144}
              alt="haubeGestreift"
            />
          </Link>

          <Link href="/products/beanies">
            <Image
              src="/pictures/haubeGrau.jpg"
              height={144}
              width={144}
              alt="haubeGrau"
            />
          </Link>
        </div>
        <div>
          <Link href="/products/gloves">
            <Image
              src="/pictures/glovesGelb.jpg"
              height={144}
              width={144}
              alt="glovesGelb"
            />
          </Link>

          <Link href="/products/gloves">
            <Image
              src="/pictures/glovesGrau.jpg"
              height={144}
              width={144}
              alt="glovesGrau"
            />
          </Link>

          <Link href="/products/gloves">
            <Image
              src="/pictures/flashyMittens.jpg"
              height={144}
              width={144}
              alt="flashyMittens"
            />
          </Link>
        </div>

        <div>
          <Link href="/products/scarves">
            <Image
              src="/pictures/schalWeiss.jpg"
              height={144}
              width={144}
              alt="schalWeiss"
            />
          </Link>

          <Link href="/products/scarves">
            <Image
              src="/pictures/schalTube.jpg"
              height={144}
              width={144}
              alt="schalTube"
            />
          </Link>

          <Link href="/products/scarves">
            <Image
              src="/pictures/schalGestreift.jpg"
              height={144}
              width={144}
              alt="schalGestreift"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
