import React from 'react';
import { useSelector } from 'react-redux'

import FileUpload from './components/FileUpload'
import TableView from './components/TableView'

import { Container } from 'react-bootstrap';

const Admin = (props) => {

  const items = useSelector(state => state.products.excel_products)
  return (
    <Container fluid>
      <FileUpload items={items} />
      {items.length > 0 && <TableView items={items} />}
    </Container>
  );
}

export default Admin;