import React from 'react';

import Item from './Item'

import { Col } from 'react-bootstrap'

const Items = (props) => {
  return (
    props.products.map(product =>
      <Col key={product.id}>
        <Item
          id={product.id}
          label={product.label}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      </Col>
    )
  );
}

export default Items;