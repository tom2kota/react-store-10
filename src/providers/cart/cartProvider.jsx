import React, {createContext, useState, useEffect} from "react";
import {addItemToCart, filterItemFromCart, removeItemFromCart} from "./cartUtils";


export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {
    },
    cartItems: [],
    addItem: () => {
    },
    removeItem: () => {
    },
    clearItemFromCart: () => {
    },
    cartItemsCount: 0
})

export const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const addItem = item => setCartItems(addItemToCart(cartItems, item))
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden)
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))

    return <CartContext.Provider
        value={{hidden, toggleHidden, cartItems, addItem, removeItem, cartItemsCount, clearItemFromCart}}>
        {children}
    </CartContext.Provider>
}
