import React, { useContext } from 'react';
import Layout from '../Components/Layout/Layout';
import { Shopcontext } from '../Context/Webshopcontext';
import { ITEMS } from '../Components/Items';
import Item from '../Components/Item';
import { useNavigate } from 'react-router-dom';
import '../Styles/cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(Shopcontext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <Layout>
      <div id='cart-title'>
          <h1>Shopping Cart</h1>
        </div>
      <div className="cart">
        

        <div className="cart-items">
          {ITEMS.map((item) => {
            const cartItemAmount = cartItems[item.item_id];
            if (cartItems[item.item_id] !== 0) {
              return (
                <div key={item.item_id} className="cart-item">
                  <div className="item-details">
                  <Item data={item}  showButtons={false} />

                    <p>Quantity: {cartItemAmount}</p>
                  </div>
                  <div className="item-total">
                    <p>${item.item_price * cartItemAmount}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <div className="subtotal">
              <p>Subtotal: ${totalAmount}</p>
            </div>
            <div className="buttons">
              <button onClick={() => navigate("/webshop")}>Continue Shopping</button>
              <button onClick={() => { checkout(); navigate("/checkout"); }}>Checkout</button>
            </div>
          </div>
        ) : (
          <h1>Your Shopping Cart is Empty</h1>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
