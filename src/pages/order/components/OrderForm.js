import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { orderActions } from "../../../store/order-slice";

import { Button, Container, Form, Row } from "react-bootstrap";

const OrderForm = (props) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("Denny Amiruddin");
  const [email, setEmail] = useState("dennyamiruddin@outlook.com");
  const [phone, setPhone] = useState("0413841560");
  const [address, setAddress] = useState("Jalan Demak Selatan 6/16");
  const [province, setProvince] = useState("");
  const [postcode, setPostcode] = useState("66871");

  const nameOnChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailOnChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneOnChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const addressOnChangeHandler = (event) => {
    setAddress(event.target.value);
  };
  const provinceOnChangeHandler = (event) => {
    setProvince(event.target.value);
  };
  const postcodeOnChangeHandler = (event) => {
    setPostcode(event.target.value);
  };

  const submitHandler = () => {
    dispatch(
      orderActions.addOrder({
        id: "oid" + uuid(),
        name: name,
        address: address + " " + province + " " + postcode,
        email: email,
        phone: phone,
        date: new Date().toString(),
        orderedCart: props.cart,
      })
    );
  };

  return (
    <Fragment>
      <Row className="justify-content-md-center mt-4">
        <h5>Informasi Pengiriman</h5>
      </Row>
      <Row className="mt-4">
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control
          onChange={nameOnChangeHandler}
          type="text"
          placeholder="Isi nama lengkap"
          value={name}
        />
      </Row>
      <Row className="mt-4">
        <Form.Label>Alamat Email</Form.Label>
        <Form.Control
          onChange={emailOnChangeHandler}
          type="text"
          placeholder="Isi alamat email"
          value={email}
        />
      </Row>
      <Row className="mt-4">
        <Form.Label>Nomor Handphone</Form.Label>
        <Form.Control
          onChange={phoneOnChangeHandler}
          type="text"
          placeholder="No.handphone"
          value={phone}
        />
      </Row>
      <Row className="mt-4">
        <Form.Label>Alamat</Form.Label>
        <Form.Control
          onChange={addressOnChangeHandler}
          type="textarea"
          placeholder="Isi alamat tinggal"
          value={address}
        />
      </Row>
      <Row className="mt-4">
        <Form.Label>Provinsi</Form.Label>
        <Form.Control
          onChange={provinceOnChangeHandler}
          as="select"
          value={province}
        >
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
        <Form.Control
          onChange={postcodeOnChangeHandler}
          type="textarea"
          placeholder="Isi kode pos wilayah anda"
          value={postcode}
        />
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Container>
          <Button
            onClick={submitHandler}
            className="mt-3"
            variant="dark"
            block
            as={Link}
            to="/order"
          >
            Masukan informasi
          </Button>
        </Container>
      </Row>
    </Fragment>
  );
};

export default OrderForm;
