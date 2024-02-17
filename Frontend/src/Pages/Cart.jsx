import React from 'react'
import Layout from '../Components/Layout/Layout'


const Cart = ({ cart }) => {
  return (
    <Layout>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Cart;






