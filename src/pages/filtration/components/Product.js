import React from "react";
import { Link } from "react-router-dom";

import { Card, Row, Col, Button } from "react-bootstrap";

const Product = (props) => {
  return (
    <div>
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
        <Button block variant="dark" className="mt-2">
          + Masukkan Keranjang
        </Button>
      </Card>
    </div>
  );
};

export default Product;
