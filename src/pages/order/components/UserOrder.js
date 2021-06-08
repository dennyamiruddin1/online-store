import React, { Fragment } from "react";
import jsPDF from "jspdf";

import OrdererInformation from "./OrdererInformation";
import OrderProducts from "./OrderProducts";

import { Row, Col, Button } from "react-bootstrap";

const UserOrder = (props) => {
  const placeOrderHandler = () => {
    const doc = new jsPDF("p", "pt", "a2");
    doc.html(document.querySelector("#content"), {
      callback: (pdf) => {
        pdf.save("mypdf.pdf");
      },
      x: 150,
      y: 10,
    });
  };

  return (
    <Fragment>
      <div id="content">
        <Row className="justify-content-md-center">
          <h5>Order Belanja Anda</h5>
        </Row>
        <OrdererInformation
          id={props.order.id}
          name={props.order.name}
          phone={props.order.phone}
          email={props.order.email}
          address={props.order.address}
          date={props.order.date}
        />
        <OrderProducts
          orderedCart={props.order.orderedCart}
          total={props.total}
        />
      </div>
      <Row>
        <Col>
          <Button block variant="danger">
            Gagalkan
          </Button>
        </Col>
        <Col sm={6}>
          <Button onClick={placeOrderHandler} block variant="dark">
            Pesan
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UserOrder;
