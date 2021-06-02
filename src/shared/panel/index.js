import React from 'react';

import Navigation from './components/Navigation'
import Search from './components/Search'

import { Container } from 'react-bootstrap'

const index = (props) => {
  return (
    <Container fluid="xxl">
      <Navigation />
      <Search />
    </Container>

  );
}

export default index;