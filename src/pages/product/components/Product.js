import React from "react";

import { Card, Row, Col } from "react-bootstrap";

const Product = (props) => {
  return (
    <Card style={{ width: "10rem", margin: "20px" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.label}</Card.Title>
        <Row>
          <Col>Rp. {props.price}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
