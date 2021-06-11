import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../../store/cart-slice";

import {
  Image,
  Row,
  Col,
  Card,
  ButtonGroup,
  Button,
  InputGroup,
} from "react-bootstrap";

const ProductOverview = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addHandler = () => {
    setQuantity(quantity + 1);
  };

  const minusHandler = () => {
    if (quantity >> 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.product.id,
        label: props.product.label,
        price: props.product.price,
        description: props.product.description,
        image: props.product.image,
        quantity: quantity,
        totalPrice: props.product.price * quantity,
      })
    );
  };

  return (
    <Row>
      <Col>
        <Image className="img-fluid" src={props.product.image} rounded />
      </Col>
      <Col>
        <Card>
          <Card.Header>{props.product.label}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{props.product.description}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Rp. {props.product.price}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <p className="mt-3">Qty</p>
        <ButtonGroup aria-label="Basic example">
          <Button variant="dark" onClick={minusHandler}>
            -
          </Button>
          <InputGroup.Text>{quantity}</InputGroup.Text>
          <Button variant="dark" onClick={addHandler}>
            +
          </Button>
        </ButtonGroup>
        <Button
          onClick={addToCartHandler}
          block
          className="mt-3"
          variant="dark"
        >
          Tambahkan ke keranjang
        </Button>
      </Col>
    </Row>
  );
};

export default ProductOverview;
