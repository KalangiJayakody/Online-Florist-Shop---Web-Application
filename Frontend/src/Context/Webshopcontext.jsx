import React, { createContext, useState } from 'react'
import { ITEMS } from '../Components/Items';
import {Item} from '../Components/Item';
import {item} from '../Pages/Webshop';

export const Shopcontext = createContext(null);


const getDefaultCart = () =>{
    let cart ={};
    for(let i=1;i<ITEMS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

const Webshopcontext = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = ()=>{
      let totalAmount =0;
      for(const it in cartItems){
        if(cartItems[it]>0){
          let itemInfo = ITEMS.find((item)=>item.item_id===Number(it));
          totalAmount+=cartItems[it]*itemInfo.item_price;
        }
      }
      return totalAmount;
    };


    const addToCart = (item_id)=>{
      setCartItems((prev)=>({...prev,[item_id]:prev[item_id]+1}))
    };

    const removeFromCart = (item_id)=>{
      setCartItems((prev)=>({...prev,[item_id]:prev[item_id]-1}))
    };

    

    const updateCartItemCount = (newAmount,item_id)=>{
      setCartItems((prev)=>({...prev,[item_id]:newAmount}));
    }

    const checkout =()=>{
      setCartItems(getDefaultCart());
    }

    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount,getTotalCartAmount,checkout};

    

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  )
}

export default Webshopcontext
