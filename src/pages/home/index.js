import React, { Fragment } from 'react';

import { useSelector } from 'react-redux'

import Promotion from './components/Promotion'
import Items from './components/Items'
import ToastUi from '../../shared/ui/ToastUi'

import { Container, Row, Col } from 'react-bootstrap'

const Home = (props) => {

  const products = useSelector(state => state.products.products);

  return (
    <Fragment>
      <ToastUi
        status='Sukses'
        title='Notifikasi'
        message='Produk baru berhasil di masukkan keranjang'
      />
      <Container fluid>
        <Row>
          <Col><Promotion /></Col>
        </Row>
        <Row className="mt-3">
          <Items products={products} />
        </Row>
      </Container >
    </Fragment>


  );
}

export default Home;