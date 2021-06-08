import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../../store/cart-slice";

import { Row, Col, Image, Card, Button } from "react-bootstrap";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(props));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(props));
  };

  return (
    <Row>
      <Col>
        <Image src={props.image} thumbnail />
      </Col>
      <Col xs={6}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.label}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Rp.{props.price} x{props.quantity}
            </Card.Subtitle>
            <Card.Text>{props.description}</Card.Text>
            <Button variant="dark" onClick={removeFromCartHandler}>
              -
            </Button>
            <Button variant="dark" onClick={addToCartHandler}>
              +
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <h6>Total harga produk</h6> Rp.{props.totalPrice}
      </Col>
    </Row>
  );
};
export default CartItem;
