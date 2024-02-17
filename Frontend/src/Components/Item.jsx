import React from 'react'
import { Link } from 'react-router-dom'
import Webshopcontext from '../Context/Webshopcontext';

const Item = (props) => {
    const {item_id,item_name ,item_price,item_image} =props.data;
    
  return (
    <div className='item'>
      <img src={item_image} />
      <div className='description'>
        <p><b>{item_name}</b></p>
        <p>${item_price}</p>
      </div>
      <Link to="/cart">
        <button className='addToCartButton'>Add to Cart</button>
        </Link>
    </div>
  )
}

export default Item
