import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';

export default function Gloves() {
  return (
    <Layout>
      <Head>
        <title>Gloves</title>
      </Head>
      <h1>Gloves</h1>
      <span>
        <Image
          src="/pictures/glovesGelb.jpg"
          height={144}
          width={144}
          alt="glovesGelb"
        />

        <Image
          src="/pictures/glovesGrau.jpg"
          height={144}
          width={144}
          alt="glovesGrau"
        />

        <Image
          src="/pictures/flashyMittens.jpg"
          height={144}
          width={144}
          alt="flashyMittens"
        />
      </span>
    </Layout>
  );
}
