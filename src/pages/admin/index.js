import React from 'react';
import { useSelector } from 'react-redux'

import FileUpload from './components/FileUpload'
import TableView from './components/TableView'

import { Container, Row } from 'react-bootstrap';

const Admin = (props) => {

  const items = useSelector(state => state.products.excel_products)
  const data = useSelector(state => state.test.list)
  console.log(data)
  return (
    <Container fluid>
      <Row>
        <FileUpload items={items} />
      </Row>
      {items.length > 0 &&
        <Row>
          <TableView items={items} />
        </Row>}
    </Container>
  );
}

export default Admin;