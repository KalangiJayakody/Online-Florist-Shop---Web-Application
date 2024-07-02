// Item.js

import React, { useContext } from 'react';
import { Shopcontext } from '../Context/Webshopcontext';
import "../Styles/Item.css";

const Item = ({ data, onItemClick,showButtons }) => {
  const { item_id, item_name, item_price, item_image } = data;
  const { addToCart, cartItems, removeFromCart } = useContext(Shopcontext);
  const cartItemAmount = cartItems[item_id] || 0;

  return (
    <div className='item'>
      <img src={item_image} onClick={() => onItemClick(data)} />
      <div className='description' style={{textAlign:'center'}}>
        <p style={{marginTop:'5%'}}><b>{item_name}</b></p>
        <p style={{marginBottom:'5%',marginTop:'3%'}}>${item_price}</p>
        {showButtons && (
          <div className="buttonContainer">
            <button className='addToCartButton' onClick={() => addToCart(item_id)}>+</button>
            <p style={{ fontFamily: 'Poppins', fontWeight: 'bold', paddingBottom: '1vh', paddingRight: '1vh', paddingLeft: '1vh' }}>{cartItemAmount > 0 && cartItemAmount}</p>
            <button className='addToCartButton' onClick={() => removeFromCart(item_id)}>-</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
