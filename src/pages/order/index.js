import React from "react";
import { useSelector } from "react-redux";

import OrderForm from "./components/OrderForm";
import UserOrder from "./components/UserOrder";

import { Container } from "react-bootstrap";

const Order = () => {
  const order = useSelector((state) => state.order.order);
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);

  return (
    <Container fluid="xl">
      {order === null ? (
        <OrderForm cart={cart} />
      ) : (
        <UserOrder order={order} total={total} />
      )}
    </Container>
  );
};

export default Order;
