import React from 'react';

import CartItem from './CartItem'

import { Container, Row, Col } from 'react-bootstrap'

const CartItems = (props) => {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-md-center mb-5">
        <Col md="auto">
          <h5>Keranjang Belanja</h5>
        </Col>
      </Row>
      {props.cart.length > 0 ?
        props.cart.map(cartItem =>
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            label={cartItem.label}
            price={cartItem.price}
            description={cartItem.description}
            quantity={cartItem.quantity}
            image={cartItem.image}
            totalprice={cartItem.totalprice}
          />
        )
        : <Row className="justify-content-md-center">
          <Col md="auto">
            <h6>Maaf, keranjang anda kosong!</h6>
          </Col>
        </Row>
      }
    </Container >
  );
}

export default CartItems;