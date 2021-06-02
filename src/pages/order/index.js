import React from 'react';

import OrderForm from './components/OrderForm'

import { Container } from 'react-bootstrap'

const UserForm = (props) => {
  return (
    <Container fluid>
      <OrderForm />
    </Container>
  );
}

export default UserForm;