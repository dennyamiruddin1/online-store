import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { orderActions } from "../../../store/order-slice";

import { Container, Row, Col, Button } from "react-bootstrap";

const OrderSummary = (props) => {
  const dispatch = useDispatch();

  const orderHandler = () => {
    if (props.order !== null) {
      dispatch(orderActions.replaceOrderedCart(props.cart));
    } else {
      return;
    }
  };

  return (
    <Fragment>
      <Row className="justify-content-md-center mt-5 mb-5">
        <Col md="auto">
          <h5>Ringkasan Total Belanja</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>Subtotal</h6>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <p>Rp.{props.total}</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5">
        <Container>
          <Button
            onClick={orderHandler}
            className="mt-3"
            variant="dark"
            block
            as={Link}
            to="/order"
          >
            Pesan
          </Button>
        </Container>
      </Row>
    </Fragment>
  );
};

export default OrderSummary;
