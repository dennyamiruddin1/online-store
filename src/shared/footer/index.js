import React from "react";

import Copyrights from "./components/Copyrights";
import EmailForm from "./components/EmailForm";
import Links from "./components/Links";

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid="xl"
      className="mt-5 bg-dark text-light"
      style={{ minHeight: "250px", marginTop: "1000px" }}
    >
      <Row>
        <Col md={8}>
          <EmailForm />
        </Col>
        <Col>
          <Links />
        </Col>
      </Row>
      <Row>
        <Copyrights />
      </Row>
    </Container>
  );
};

export default Footer;
