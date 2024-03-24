
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const loadCartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || '[]')
  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.itemId}>
            <img src={item.image} alt="" />
            <div>{item.title}</div>
            <div>{item.price}</div>
            <div>{item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
