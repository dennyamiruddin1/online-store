import React from "react";

import { Row, Col } from "react-bootstrap";
import { facebook_icon, twitter_icon, instagram_icon } from "../../../icon";

const Links = () => {
  return (
    <div className="p-2" style={{ fontSize: 14 }}>
      <Row>
        <Col>About</Col>
        <Col>Contact</Col>
      </Row>
      <Row className="mt-5">
        <Col>Konek dengan kami</Col>
      </Row>
      <Row className="mt-2">
        <Col xs={2}>{facebook_icon}</Col>
        <Col xs={2}>{twitter_icon}</Col>
        <Col xs={2}>{instagram_icon}</Col>
      </Row>
    </div>
  );
};

export default Links;
