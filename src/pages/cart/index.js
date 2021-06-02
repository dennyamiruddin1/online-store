import React, { Fragment } from 'react';
import { useSelector } from 'react-redux'

import CartItems from './components/CartItems'
import OrderSummary from './components/OrderSummary'

const Cart = (props) => {

  const cart = useSelector(state => state.cart.cart)
  const total = useSelector(state => state.cart.total)
  return (
    <Fragment>
      <CartItems cart={cart} />
      <OrderSummary total={total} />
    </Fragment>
  );
}

export default Cart;