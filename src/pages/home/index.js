import React from 'react';

import { useSelector } from 'react-redux'

import Promotion from './components/Promotion'
import Items from './components/Items'

import { Container, Row, Col } from 'react-bootstrap'

const Home = (props) => {

  const products = useSelector(state => state.products.products);

  return (
    <Container fluid>
      <Row >
        <Col><Promotion /></Col>
      </Row>
      <Row className="mt-3">
        <Items products={products} />
      </Row>
    </Container >

  );
}

export default Home;