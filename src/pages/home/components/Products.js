import React from "react";

import Product from "./Product";

import { Col } from "react-bootstrap";

const Products = (props) => {
  return props.products.map((product) => (
    <Col key={product.id}>
      <Product
        id={product.id}
        label={product.label}
        description={product.description}
        image={product.image}
        price={product.price}
      />
    </Col>
  ));
};

export default Products;
