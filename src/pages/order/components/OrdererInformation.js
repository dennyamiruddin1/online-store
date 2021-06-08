import React, { Fragment } from "react";

import { Row, Col } from "react-bootstrap";

const OrdererInformation = (props) => {
  return (
    <Fragment>
      <Row className="mt-5">
        <Col>
          <b>Nomor Order:</b> {props.id}
        </Col>
        <Col>
          <b>Tanggal:</b> {props.date}
        </Col>
      </Row>
      <Row>
        <Col colSpan="2">
          <b>Pengorder:</b> {props.name} ({props.phone})
        </Col>
      </Row>
      <Row>
        <Col colSpan="2">
          <b>Alamat:</b> {props.address}
        </Col>
      </Row>
      <Row>
        <Col colSpan="2">
          <b>Email:</b> {props.email}
        </Col>
      </Row>
    </Fragment>
  );
};

export default OrdererInformation;
