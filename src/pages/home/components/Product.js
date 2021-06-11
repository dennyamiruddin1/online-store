import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import { uiActions } from "../../../store/ui-slice";

import { Card, Button, Row, Col } from "react-bootstrap";

const Product = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        label: props.label,
        price: props.price,
        description: props.description,
        image: props.image,
        quantity: 1,
        totalPrice: props.price,
      })
    );
    dispatch(uiActions.showNotification());
  };

  return (
    <Fragment>
      <Card className="text-dark" as={Link} to={`/product/${props.id}`}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.label}</Card.Title>
          <Row>
            <Col>Rp.{props.price}</Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Button
          block
          variant="dark"
          onClick={addToCartHandler}
          className="mt-2"
        >
          + Masukkan Keranjang
        </Button>
      </Card>
    </Fragment>
  );
};

export default Product;
