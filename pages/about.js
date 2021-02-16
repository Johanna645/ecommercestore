import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About us</h1>
      <p>
        Haystack Needlework knitwear is an ever-growing collection designed and
        inspired by textiles from around the world that introduce unusual colour
        combinations and motifs and knitting them into simple shapes.
      </p>
      <p>
        Our main goal is to develop and create knitwear that combines timeless
        chic and designs with comfort and quality. Every item is crafted by
        hand, we work on demand, which means a knit is only made as soon as your
        order comes in. We're striving to work with a very clean supply chain.
        The animals that provide the wool are looked after by small family
        farms. First, the animals are shorn - no mulesing involved. The yarns
        tops are then dyed using low impact dyes certified by both REACH and
        Oeko Tex. The yarn we use is not vegan.
      </p>
    </Layout>
  );
}
