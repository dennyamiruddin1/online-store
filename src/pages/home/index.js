import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import Promotion from "./components/Promotion";
import Products from "./components/Products";
import ToastUi from "../../shared/ui/ToastUi";

import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const cartQuantity = useSelector((state) => state.cart.quantity);

  return (
    <Fragment>
      <ToastUi
        status="Sukses"
        title="Notifikasi"
        message={`(${cartQuantity}) produk baru berhasil di masukkan keranjang`}
      />
      <Container fluid="xl">
        <Row>
          <Col>
            <Promotion />
          </Col>
        </Row>
        <Row className="mt-3" md={3}>
          <Products products={products} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
