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
`;

const textStyles = css`
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Products() {
  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <div css={textStyles}>
          <h1>ALL PRODUCTS</h1>
        </div>
        <div css={productStyles}>
          <div>
            <div>
              <Link href="/beanieBlue">
                <Image
                  src="/pictures/haubeBlau.jpg"
                  height={144}
                  width={144}
                  alt="haubeBlau"
                />
              </Link>
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
              <Link href="/beanieBasic">
                <Image
                  src="/pictures/haubeGrau.jpg"
                  height={144}
                  width={144}
                  alt="haubeGrau"
                />
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Link href="/sunnyMetallic">
                <Image
                  src="/pictures/glovesGelb.jpg"
                  height={144}
                  width={144}
                  alt="glovesGelb"
                />
              </Link>
            </div>
            <div>
              <Link href="/coolGrey">
                <Image
                  src="/pictures/glovesGrau.jpg"
                  height={144}
                  width={144}
                  alt="glovesGrau"
                />
              </Link>
            </div>
            <div>
              <Link href="/flashyMittens">
                <Image
                  src="/pictures/flashyMittens.jpg"
                  height={144}
                  width={144}
                  alt="flashyMittens"
                />
              </Link>
            </div>
          </div>

          <div>
            <div>
              <Link href="/whiteMohair">
                <Image
                  src="/pictures/schalWeiss.jpg"
                  height={144}
                  width={144}
                  alt="schalWeiss"
                />
              </Link>
            </div>
            <div>
              <Link href="/loopSmart">
                <Image
                  src="/pictures/schalTube.jpg"
                  height={144}
                  width={144}
                  alt="schalTube"
                />
              </Link>
            </div>
            <div>
              <Link href="/scarfAndStripes">
                <Image
                  src="/pictures/schalGestreift.jpg"
                  height={144}
                  width={144}
                  alt="schalGestreift"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
