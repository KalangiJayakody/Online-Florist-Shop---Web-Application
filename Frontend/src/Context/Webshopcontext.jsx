import React, { createContext, useState } from 'react'
import { ITEMS } from '../Components/Items';

export const Shopcontext = createContext(null);


const getDefaultCart = () =>{
    let cart ={}
    for(let i=1;i<ITEMS.length+1;i++){
        cart[i]=0;
    }
    return cart;

}

const Webshopcontext = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (item_id)=>{
      setCartItems((prev)=>({...prev,[item_id]:prev[item_id]+1}))
    }

    const removeFromCart = (item_id)=>{
      setCartItems((prev)=>({...prev,[item_id]:prev[item_id]+1}))
    }

  return (

    <Shopcontext.Provider>
      {props.children}
    </Shopcontext.Provider>
  )
}

export default Webshopcontext
