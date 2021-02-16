import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import postgres from 'postgres';
// import { timingSafeEqual } from 'crypto';
// require('dotenv-safe').config();
import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';

// const sql = postgres();

const landingPage = css`
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  position: relative;
  text-align: center;
  color: white;
  font-size: 60px;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Haystack Needlework</title>
      </Head>
      <div css={landingPage}>
        <div>
          <Image
            src="/pictures/bluePictureWool.jpg"
            alt="bluePictureWool"
            height={600}
            width={1500}
            // layout="fill"
            // objectFit="contain"
            // objectPosition="center"
          />
        </div>
        <div>
          <p>Where tradition meets trend</p>
        </div>
      </div>
    </Layout>
  );
}
