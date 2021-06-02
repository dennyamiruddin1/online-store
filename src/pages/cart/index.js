import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import CartItems from './components/CartItems'
import OrderSummary from './components/OrderSummary'

let isInitial = true;

const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  const total = useSelector(state => state.cart.total)

  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch('https://online-shop-41c7f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    }
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      console.log(error)
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      <CartItems cart={cart} />
      <OrderSummary total={total} />
    </Fragment>
  );
}

export default Cart;