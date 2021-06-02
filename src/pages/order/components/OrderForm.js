import React from 'react';

import { Container, Form, Row } from 'react-bootstrap'

const OrderForm = (props) => {
  return (
    <Container fluid="xl">
      <Form.Group>
        <Row className="mt-4">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text" placeholder="Isi nama lengkap" />
        </Row>
        <Row className="mt-4">
          <Form.Label>Alamat Email</Form.Label>
          <Form.Control type="text" placeholder="Isi alamat email" />
        </Row>
        <Row className="mt-4">
          <Form.Label>Nomor Handphone</Form.Label>
          <Form.Control type="text" placeholder="No.handphone" />
        </Row>
        <Row className="mt-4">
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="textarea" placeholder="Isi alamat tinggal" />
        </Row>
        <Row className="mt-4">
          <Form.Label>Provinsi</Form.Label>
          <Form.Control as="select">
            <option>Banten</option>
            <option>DKI Jakarta</option>
            <option>Jawa Barat</option>
            <option>Jawa Tengah</option>
            <option>DI Yogyakarta</option>
            <option>Jawa Timur</option>
          </Form.Control>
        </Row>
        <Row className="mt-4">
          <Form.Label>Kode Pos</Form.Label>
          <Form.Control type="textarea" placeholder="Normal text" />
        </Row>
      </Form.Group>
    </Container>

  );
}

export default OrderForm;

