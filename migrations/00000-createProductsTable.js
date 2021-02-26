exports.up = async (sql) => {
  await sql`
    CREATE TABLE products (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      product_name VARCHAR(100),
      product_price INTEGER,
			product_info TEXT
    )
  `;
};

exports.down = async (sql) => {
  await sql`
    DROP TABLE products
  `;
};
