import React from 'react';
import { Link } from 'react-router-dom'

import { Container, Row, Col, Button } from 'react-bootstrap'

const OrderSummary = (props) => {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-md-center mb-5">
        <Col md="auto">
          <h5>Ringkasan Belanja</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6>
            Subtotal
          </h6>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <p>Rp.{props.total}</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center mb-5">
        <Container>
          <Button variant="dark" block as={Link} to="/order">Order</Button>
        </Container>

      </Row>
    </Container>
  );
}

export default OrderSummary;