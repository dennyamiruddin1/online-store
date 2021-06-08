import React from "react";

import { Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";

const EmailForm = () => {
  return (
    <div className="p-2">
      <div className="border">
        <Row className="p-4">
          <Col>
            <b>Jadi pertama yang tahu...</b> <br />
            Daftar segera dengan email anda!
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl placeholder="Masukan alamat email anda..." />
            </InputGroup>
            <Button variant="light" block>
              Berlanggan
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EmailForm;
