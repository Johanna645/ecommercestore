import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import {
  incrementVisitsByProduct,
  setVisitsCookieClientSide,
} from '../../util/cookies';

const productStyles = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  grid-row-gap: 10px;
  text-align: left;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;

  margin-left: 40px;
  margin-right: 40px;

  .button {
    float: left;
    border: 1px solid black;
  }
`;

export default function SingleProduct(props) {
  // state variable with the value from the cookie read in getServerSideProps
  const [visit, setVisits] = useState(props.visitsCookieValue);

  // every time the state variable updates, set a new value to the cookie, sent also to server when refreshed or loaded
  useEffect(() => {
    Cookies.set('visits', visits);
  }, [visits]);

  const visitsForProduct = visits.find(
    (productVisits) => productVisits.productName === props.product.productName,
  );

  return (
    <Layout>
      <Head>
        <title>{props.productName}</title>
      </Head>
      <div css={productStyles}>
        <div>
          {/* <Image
            src=`/pictures/${props.picture}`
            height={400}
            width={400}
            alt=""
          />
          How do i get the picture here? */}
        </div>
        <div>
          <textbox>
            <h2>{props.productName}</h2>
            <p>{props.price}</p>
            <p>{props.productInfo}</p>
          </textbox>

          <div>
            {/* show the value of visits. "?."" is a test if value is null or undefined and won't cause an error, but just return undefined */}
            <div>number of visits: {visitsForProduct?.visits || 0}</div>{' '}
            {/*  can i get this into a button? */}
            <button
              onClick={() => {
                const newVisits = incrementVisitsByProduct(
                  visits,
                  props.product.productName,
                );

                setVisits(newVisits);
              }}
            >
              increase visits
            </button>
            <button /* onClick={() => {
              setCount(count + 1);
              // setPositiveValues(getPositiveValues(count, count2));
            }} */
            >
              +
            </button>
            <button /* onClick then somehow send info to the cart */>
              Add to cart
            </button>
            <button /* onClick={() => {
              setCount(count - 1);
              // setPositiveValues(getPositiveValues(count, count2));
            }} */
            >
              -
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getProducts } = await import('../../util/database');

  const name = context.query.singleProduct;

  const products = await getProducts(name);

  // const product = products.find((product) => product.productName === name);

  // This is the first thing that actually happens. Cookie is read the first time, JSON.parse reads a complex value, and if there is no value, it will start an empty array - so to props is passed on either the value of the visits or an empty array
  const visits = context.req.cookies.visits;
  const visitsCookieValue = visits ? JSON.parse(visits) : [];

  return {
    props: {
      product: products,
      visitsCokieValue: visitsCookieValue,
    },
  };
}
