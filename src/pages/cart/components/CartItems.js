import React, { Fragment } from 'react';

import CartItem from './CartItem'

import { Row, Col } from 'react-bootstrap'

const CartItems = (props) => {
  return (
    <Fragment>
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
            totalPrice={cartItem.totalPrice}
          />
        )
        : <Row className="justify-content-md-center">
          <Col md="auto">
            <h6>Maaf, keranjang anda kosong!</h6>
          </Col>
        </Row>
      }
    </Fragment>
  );
}

export default CartItems;