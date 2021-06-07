import React from 'react'

import { Table, Row } from 'react-bootstrap'

const OrderProducts = (props) => {
  return (
    <Row className="mt-5">
      <Table variant="dark">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Kuantitas</th>
            <th>Harga</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.orderedCart.map(item =>
            <tr key={item.id}>
              <td>{item.label}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.totalPrice}</td>
            </tr>
          )}
          <tr>
            <td colSpan="4"></td>
          </tr>
          <tr>
            <td colSpan="3">
              Total
            </td>
            <td>
              {props.total}
            </td>
          </tr>
        </tbody>
      </Table>
    </Row>
  )
}

export default OrderProducts