import React from "react";
import { useSelector } from "react-redux";

import CartItems from "./components/CartItems";
import OrderSummary from "./components/OrderSummary";

import { Container } from "react-bootstrap";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const order = useSelector((state) => state.order.order);

  return (
    <Container fluid="xl">
      <CartItems cart={cart} />
      {cart.length > 0 && (
        <OrderSummary cart={cart} total={total} order={order} />
      )}
    </Container>
  );
};

export default Cart;
