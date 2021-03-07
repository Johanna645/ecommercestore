import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { getAmountOfProductsInCart } from '../../util/cookies';

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

// this function is for server only, for example connect to database
export async function getServerSideProps() {
  const { getProducts } = await import('../../util/database');
  const products = await getProducts();

  return { props: { products: products } };
}

export default function Products(props) {
  return (
    <Layout cartCounter={getAmountOfProductsInCart()}>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <div css={textStyles}>
          <h1>ALL PRODUCTS</h1>
        </div>
        <div css={productStyles}>
          <ul>
            {props.products.map((product) => (
              <li key={`product-${product.productName}`}>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={`/pictures/${product.id}.jpg`}
                    height={144}
                    width={144}
                    alt=""
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
