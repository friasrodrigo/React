import React, { createContext, useState } from 'react'
import {BALLS} from '../API-Backend/balls'
import {RACKETS} from '../API-Backend/rackets'
import {SHOES} from '../API-Backend/shoes'


const allTennisProducts = [...BALLS, ...RACKETS, ...SHOES];

const getDefaultCart = () => {
    let cart = {}
    for(let i=1; i < allTennisProducts.length + 1; i++){
            cart[i] = 0
    }
    return cart
}

export const ShopContext = createContext(null)



export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())

  // Dentro de ShopContextProvider
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = allTennisProducts.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  // añadir al carrito
  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };
  
  // sacar del carrito
  const removeFromCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems( (prev) => ({...prev, [itemId]: newAmount}))
  }
  
  const contexVale = {cartItems, addToCart,removeFromCart, updateCartItemCount, getTotalCartAmount}

  return (
    <ShopContext.Provider value={contexVale}>
        {props.children}
    </ShopContext.Provider>
  )
}
