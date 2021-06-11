import React from "react";

import Product from "./Product";

import { Col } from "react-bootstrap";

const FilteredProducts = (props) => {
  return props.filteredProducts.map((product) => (
    <Col>
      <Product
        key={product.id}
        id={product.id}
        image={product.image}
        label={product.label}
        price={product.price}
      />
    </Col>
  ));
};

export default FilteredProducts;
