import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { productsActions } from "../../store/products-slice";

import FilterPanel from "./components/FilterPanel";
import FilteredProduct from "./components/FilteredProducts";

import { Container, Row, Col } from "react-bootstrap";

const Filtration = () => {
  const dispatch = useDispatch();
  const productType = +useParams().filter;

  useEffect(() => {
    dispatch(productsActions.filterProducts(productType));
  }, [dispatch, productType]);

  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );

  console.log(filteredProducts);
  return (
    <Container fluid="xxl">
      <Row>
        <Col>
          <Row className="mt-3" md={2}>
            {filteredProducts.length > 0 ? (
              <FilteredProduct filteredProducts={filteredProducts} />
            ) : (
              <h5>Nothing much to see here!</h5>
            )}
          </Row>
        </Col>

        <Col>
          <FilterPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default Filtration;
