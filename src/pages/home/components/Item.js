import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { uiActions } from "../../../store/ui-slice";

import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Item = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(props));
    dispatch(uiActions.showNotification());
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.label}</Card.Title>
        <Container fluid="xxl">
          <Row>
            <Col>{props.description}</Col>
            <Col>Rp.{props.price}</Col>
          </Row>
        </Container>
        <Button variant="dark" onClick={addToCartHandler} className="mt-2">
          + Masukkan Keranjang
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
