import postgres from 'postgres';
require('dotenv-safe').config();
const camelcaseKeys = require('camelcase-keys');

// const sql = postgres();

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: true });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

const sql = connectOneTimeToDatabase();

function camelcaseRecords(records) {
  return records.map((record) => camelcaseKeys(record));
}

export async function getProducts() {
  const products = await sql`SELECT * FROM products`;
  return camelcaseRecords(products);
}

export async function getSingleProduct(id) {
  const product = await sql`SELECT * FROM products WHERE id = ${id}`;
  return camelcaseRecords(product)[0];
}
