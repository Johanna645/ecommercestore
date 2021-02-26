exports.up = async (sql) => {
  await sql`
    INSERT INTO products (product_name, product_price, product_info)
    VALUES
  ('BEANIE BASIC', 20, 'This cosy basic beanie made of soft mixed wool is a winter classic. One size fits most. Care instructions: Maschine wash cold with wool wash program.'),

  ('BEANIE BLUE', 20, 'This thin, chic and warm beanie with a beautiful decorative pattern is a perfect fit for a day in the city. Care instructions: Hand wash only.'),

  ('BEANIE BEE', 22, 'This chunky unisex beanie is made of super soft wool and is a must-have for the winter season. One size fits most. Care instructions: Maschine wash cold with wool wash program.'),

  ('COOL GREY', 20, 'These classy thin soft wool gloves will keep your fingers warm. Size: Comparable with classic glove size M with palm length of 19cm.Care instructions: Maschine wash cold with wool wash program.'),

  ('FLASHY MITTENS', 20, 'These colourful and playful soft mixed wool mittens cheer up the day. Size: Comparable with classic glove size M with palm length of 19cm. Care instructions: Hand wash only.'),

  ('SUNNY METALLIC', 22, 'These bright thin gloves will keep your fingers warm! They are made of soft mixed wool and the colour has a hint of a metallic shine that comes from the yarn used. Size: Comparable with classic glove size M with palm length of 19cm. Care instructions: Hand wash only.'),

  ('WHITE MOHAIR', 20, 'This chic but fluffy mohair scarf is the lightest in our collection. Material: 77% super kid mohair, 23% silk. Care instructions: hand wash only.'),

  ('LOOP SMART', 20, 'This super soft and chunky loop scarf is the perfect for the winter season. One size fits most. Care instructions: hand wash only.'),

  ('SCARF AND STRIPES', 22, 'This classic scarf made of soft mixed wool got playfullness from the sripes and it is great against the wind and weather. Care instructions: Maschine wash cold with wool wash program. Dry flat.')

  `;
};

exports.down = async (sql) => {
  await sql`
    DELETE FROM products
    WHERE
    (product_name = 'BEANIE BASIC' AND product_price = 20 AND product_info = 'This cosy basic beanie made of soft mixed wool is a winter classic. One size fits most. Care instructions: Maschine wash cold with wool wash program.') OR

  (product_name = 'BEANIE BLUE' AND product_price = 20 AND product_info = 'This thin, chic and warm beanie with a beautiful decorative pattern is a perfect fit for a day in the city. Care instructions: Hand wash only.') OR

  (product_name = 'BEANIE BEE' AND product_price = 22 AND product_info = 'This chunky unisex beanie is made of super soft wool and is a must-have for the winter season. One size fits most. Care instructions: Maschine wash cold with wool wash program.') OR

  (product_name = 'COOL GREY' AND product_price = 20 AND product_info = 'These classy thin soft wool gloves will keep your fingers warm. Size: Comparable with classic glove size M with palm length of 19cm.Care instructions: Maschine wash cold with wool wash program.') OR

  (product_name = 'FLASHY MITTENS' AND product_price = 20 AND product_info = 'These colourful and playful soft mixed wool mittens cheer up the day. Size: Comparable with classic glove size M with palm length of 19cm. Care instructions: Hand wash only.') OR

  (product_name = 'SUNNY METALLIC' AND product_price = 22 AND product_info = 'These bright thin gloves will keep your fingers warm! They are made of soft mixed wool and the colour has a hint of a metallic shine that comes from the yarn used. Size: Comparable with classic glove size M with palm length of 19cm. Care instructions: Hand wash only.') OR

  (product_name = 'WHITE MOHAIR' AND product_price = 20 AND product_info = 'This chic but fluffy mohair scarf is the lightest in our collection. Material: 77% super kid mohair, 23% silk. Care instructions: hand wash only.') OR

  (product_name = 'LOOP SMART' AND product_price = 20 AND product_info = 'This super soft and chunky loop scarf is the perfect for the winter season. One size fits most. Care instructions: hand wash only.') OR

  (product_name = 'SCARF AND STRIPES' AND product_price = 22 AND product_info = 'This classic scarf made of soft mixed wool got playfullness from the sripes and it is great against the wind and weather. Care instructions: Maschine wash cold with wool wash program. Dry flat.')

  `;
};

/*  commenting this version out, tried it out and something is not working the way it should. in order to get on with the project, i'll just do the manual version of adding the products at the momentyarn

const products = [{
    product_name: 'BEANIE BASIC',
    product_price: 20,
    product_info:
      'This cosy basic beanie made of soft mixed wool is a winter classic.',
  },

and here the other products the same way ]

exports.up = async (sql) => {
  await sql`
    INSERT INTO products ${sql(
      products,
      'product_name',
      'product_price',
      'product_info',
    )}
  `;
};

exports.down = async (sql) => {
  for (const product of products) {
    await sql`
      DELETE FROM
        products
      WHERE
        product_name = ${products.product_name} AND product_price = ${products.product_price}
    `;
  }
}; */
