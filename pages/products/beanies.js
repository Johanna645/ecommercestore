import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';

export default function Beanies() {
  return (
    <Layout>
      <Head>
        <title>Beanies</title>
      </Head>
      <h1>Beanies</h1>
      <span>
        <Image
          src="/pictures/haubeBlau.jpg"
          height={144}
          width={144}
          alt="haubeBlau"
        />

        <Image
          src="/pictures/haubeGestreift.jpg"
          height={144}
          width={144}
          alt="haubeGestreift"
        />

        <Image
          src="/pictures/haubeGrau.jpg"
          height={144}
          width={144}
          alt="haubeGrau"
        />
      </span>
      <p></p>
    </Layout>
  );
}
