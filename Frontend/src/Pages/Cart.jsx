import React, { useContext } from 'react'
import Layout from '../Components/Layout/Layout'
import {Shopcontext} from '../Context/Webshopcontext'
import { ITEMS } from '../Components/Items';
import Item from '../Components/Item';
import { useNavigate} from 'react-router-dom';


import '../Styles/cart.css'


const Cart = () => {

  const {cartItems, getTotalCartAmount, checkout}=useContext(Shopcontext);

  const totalAmount=getTotalCartAmount();

  const navigate = useNavigate();

  //<Item data={item}/>

  return (
    <Layout>
      <div className="cart">
        <div>
        <h1>Shopping Cart</h1>
        </div>

        <div className="cart">
          {ITEMS.map((item)=>{
            const cartItemAmount = cartItems[item.item_id];
            if(cartItems[item.item_id]!==0){
              return  <div key={item.item_id}>
            <Item data={item} showButtons={false} />
              <p>Quantity: {cartItemAmount}</p>
            </div>;
            }
          })}
        </div>
        {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/webshop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      </div>
      
      
    </Layout>
  );
};

export default Cart;






