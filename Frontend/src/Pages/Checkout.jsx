import React, { useContext } from 'react';
import Layout from '../Components/Layout/Layout';
import { Shopcontext } from '../Context/Webshopcontext';
//import '../Styles/checkout.css';

const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(Shopcontext);
  const totalAmount = getTotalCartAmount();

  return (
    <Layout>
      <div className="checkout-container">
        <h1>Checkout</h1>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <ul>
            {Object.keys(cartItems).map((itemId) => {
              const item = cartItems[itemId];
              return (
                <li key={itemId}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              );
            })}
          </ul>
          <p>Total: ${totalAmount}</p>
        </div>
        <div className="checkout-form">
          {/* Your checkout form inputs and fields */}
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            {/* Add more form fields as needed */}
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
