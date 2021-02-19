import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

const aboutStyles = css`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <div css={aboutStyles}>
        <div>
          <h1>ABOUT US</h1>
          <p>
            Haystack Needlework knitwear is an ever-growing collection designed
            and inspired by textiles from around the world that introduce
            unusual colour combinations and motifs and knitting them into simple
            shapes.
          </p>
          <p>
            Our main goal is to develop and create knitwear that combines
            timeless chic and designs with comfort and quality.
            <br />
            Every item is crafted by hand, we work on demand, which means a knit
            is only made as soon as your order comes in.
            <br />
            We're striving to work with a very clean supply chain. The animals
            that provide the wool are looked after by small family farms and the
            yarns tops are then dyed using low impact dyes certified by both
            REACH and Oeko Tex.
            <br />
            The yarn we use is not vegan.
          </p>
        </div>

        <div>
          <br />
          <Image
            src="/pictures/peopleKnittingOnStairs.jpg"
            height={400}
            width={600}
            alt="people knitting on stairs"
          />
        </div>
      </div>
    </Layout>
  );
}
