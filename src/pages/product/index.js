import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { productsActions } from "../../store/products-slice";

import ProductOverview from "./components/ProductOverview";
import ProductRecomendation from "./components/ProductRecomendation";

import { Container } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  dispatch(productsActions.selectProduct(productId));
  const product = useSelector((state) => state.products.product);
  const recomendedProducts = useSelector(
    (state) => state.products.products
  ).filter((item) => item.type === product.type && item.id !== product.id);

  return (
    <Container fluid="xl">
      <ProductOverview product={product} />
      <div className="border-top mt-5">
        <ProductRecomendation recomendedProducts={recomendedProducts} />
      </div>
    </Container>
  );
};

export default Product;
