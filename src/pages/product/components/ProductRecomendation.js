import React, { Fragment } from "react";

import Product from "./Product";

import { Row } from "react-bootstrap";

const ProductRecomendation = (props) => {
  return (
    <Fragment>
      <Row className="justify-content-md-center mt-4">
        <h5>Rekomendasi produk berikut</h5>
      </Row>
      <Row className="justify-content-md-center">
        {props.recomendedProducts
          .slice(0, props.recomendedProducts.length)
          .map((product) => (
            <Product
              key={product.id}
              label={product.label}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
      </Row>
    </Fragment>
  );
};

export default ProductRecomendation;
