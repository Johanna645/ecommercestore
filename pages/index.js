import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import postgres from 'postgres';
// import { timingSafeEqual } from 'crypto';
// require('dotenv-safe').config();
import Link from 'next/link';
import Layout from '../components/Layout';

// const sql = postgres();

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Haystack Needlework</title>
      </Head>

      <h1>Where tradition meets trend</h1>
    </Layout>
  );
}
