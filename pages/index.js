import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { getAmountOfProductsInCart } from '../util/cookies';

const landingPage = css`
  p {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, Helvetica, sans-serif;
  }

  position: relative;
  text-align: center;
  color: white;
  font-size: 60px;

  button {
    background-color: #005f6a;
    color: white;
    //height: 80px;
    padding: 10px;
    font-size: 50;
    border-radius: 8px;
  }
`;

export default function Home() {
  // function getAmountOfProductsInCart() {
  //   let cartCounter = 0;
  //   let cartCookie = Cookies.get('amount');
  //   if (cartCookie !== undefined) {
  //     cartCookie = JSON.parse(cartCookie);
  //     for (let i = 0; i < cartCookie.length; i++) {
  //       cartCounter = cartCounter + cartCookie[i].amount;
  //       console.log(cartCounter);
  //       console.log(cartCookie[i].amount);
  //     }
  //   }
  //   return cartCounter;
  // }

  return (
    // 3 is just an example for now
    <Layout cartCounter={getAmountOfProductsInCart()}>
      <Head>
        <title>Haystack Needlework</title>
      </Head>

      <div css={landingPage}>
        <div>
          <Image
            src="/pictures/yarnOnTable.jpg"
            alt="yarnOnTable"
            height={600}
            width={1500}
            //layout="fill"
            //objectFit="contain"
            //objectPosition="center"
          />
        </div>
        <div>
          <p>WHERE TRADITION MEETS TREND</p>
        </div>
        <div>
          <Link href="/products">
            <button type="button">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
