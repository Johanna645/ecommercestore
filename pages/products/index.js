import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  grid-row-gap: 10px;

  margin-left: 20px;
  margin-right: 20px;
`;

export default function Beanies() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <h2>Have a look at our marvelous products on one go:</h2>
        <div css={productStyles}>
          <div>
            <div>
              <Link href="/products/beanies">
                <Image
                  src="/pictures/haubeBlau.jpg"
                  height={144}
                  width={144}
                  alt="haubeBlau"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
            <div>
              <Link href="/beanieBee">
                <Image
                  src="/pictures/haubeGestreift.jpg"
                  height={144}
                  width={144}
                  alt="haubeGestreift"
                />
              </Link>
            </div>
            <div>
              <Link href="/products/beanies">
                <Image
                  src="/pictures/haubeGrau.jpg"
                  height={144}
                  width={144}
                  alt="haubeGrau"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
          </div>
          <div>
            <div>
              <Link href="/products/gloves">
                <Image
                  src="/pictures/glovesGelb.jpg"
                  height={144}
                  width={144}
                  alt="glovesGelb"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
            <div>
              <Link href="/products/gloves">
                <Image
                  src="/pictures/glovesGrau.jpg"
                  height={144}
                  width={144}
                  alt="glovesGrau"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
            <div>
              <Link href="/products/gloves">
                <Image
                  src="/pictures/flashyMittens.jpg"
                  height={144}
                  width={144}
                  alt="flashyMittens"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
          </div>

          <div>
            <div>
              <Link href="/products/scarves">
                <Image
                  src="/pictures/schalWeiss.jpg"
                  height={144}
                  width={144}
                  alt="schalWeiss"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
            <div>
              <Link href="/products/scarves">
                <Image
                  src="/pictures/schalTube.jpg"
                  height={144}
                  width={144}
                  alt="schalTube"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
            <div>
              <Link href="/products/scarves">
                <Image
                  src="/pictures/schalGestreift.jpg"
                  height={144}
                  width={144}
                  alt="schalGestreift"
                />
              </Link>
              <button>currently out of stock</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
