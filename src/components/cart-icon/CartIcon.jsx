import React, {useContext} from "react";
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";
import {CartContext} from "../../contexts/cart/cartContext";
import './CartIcon.scss';

export const CartIcon = ({itemCount}) => {
    const {toggleHidden} = useContext(CartContext)

    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
