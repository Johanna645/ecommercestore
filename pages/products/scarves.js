import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';

export default function Scarves() {
  return (
    <Layout>
      <Head>
        <title>Scarves</title>
      </Head>
      <h1>Scarves</h1>
      <span>
        <Image
          src="/pictures/schalWeiss.jpg"
          height={144}
          width={144}
          alt="schalWeiss"
        />

        <Image
          src="/pictures/schalTube.jpg"
          height={144}
          width={144}
          alt="schalTube"
        />

        <Image
          src="/pictures/schalGestreift.jpg"
          height={144}
          width={144}
          alt="schalGestreift"
        />
      </span>
      <h2>
        Cosy, super fluffy and our lightest tube scarf so far. Material: 77%
        super kid mohair, 23% silk Care instructions: hand wash only Size: Your
        knit is made as soon as your order is placed. We are happy to adjust
        sizing according to your needs and wishes. Every item is hand knit when
        the order is placed. Please allow 2 workingdays for creating this item.{' '}
      </h2>
    </Layout>
  );
}
