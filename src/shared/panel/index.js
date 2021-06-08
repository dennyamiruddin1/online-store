import React from "react";
import { useSelector } from "react-redux";

import Navigation from "./components/Navigation";
import Search from "./components/Search";

import { Container } from "react-bootstrap";

const Panel = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <Container fluid>
      <Navigation />
      <Search products={products} />
    </Container>
  );
};

export default Panel;
