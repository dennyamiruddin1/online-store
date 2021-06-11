import React from "react";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation";
import Search from "./components/Search";

import { Container } from "react-bootstrap";

const Panel = () => {
  const products = useSelector((state) => state.products.products);
  const cartQuantity = useSelector((state) => state.cart.quantity);

  return (
    <Container fluid>
      <Navigation cartQuantity={cartQuantity} />
      <Search products={products} />
    </Container>
  );
};

export default Panel;
