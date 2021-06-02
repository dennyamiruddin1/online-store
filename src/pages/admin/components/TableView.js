import React from 'react';

import { Row, Table } from 'react-bootstrap'

const TableView = (props) => {
  return (
    <Row>
      <Table responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Label</th>
            <th>Type</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map(item =>
            <tr key={item.id}>
              <td>
                {item.id}
              </td>
              <td>
                {item.label}
              </td>
              <td>
                {item.type}
              </td>
              <td>
                {item.price}
              </td>
              <td>
                {item.description}
              </td>
              <td>
                {item.image}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Row>
  );
}

export default TableView;