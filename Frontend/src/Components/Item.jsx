import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Webshopcontext from '../Context/Webshopcontext';
import {Shopcontext} from '../Context/Webshopcontext'

const Item = (props) => {
    const {item_id,item_name ,item_price,item_image} =props.data;

    const {addToCart,cartItems, removeFromCart}=useContext(Shopcontext);

    const cartItemAmount=cartItems[item_id];
    
  return (
    <div className='item'>
      <img src={item_image} />
      <div className='description'>
        <p>
          <b>{item_name}</b>
        </p>
        <p>{item_price}</p>

        <div>
         <button onClick={()=>addToCart(item_id)}>Add to Cart {cartItemAmount > 0}</button>
         <p>{cartItemAmount>0 && <>{cartItemAmount}</>}</p>
         <button onClick={()=>removeFromCart(item_id)}>Remove to Cart{cartItemAmount > 0} </button>
        </div>
      </div>
      
    </div>
  )
}

export default Item
