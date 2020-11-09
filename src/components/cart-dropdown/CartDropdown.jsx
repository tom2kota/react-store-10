import React, {useContext} from "react";
import {CustomButton} from "../custom-button/CustomButton";
import {CartItem} from "../cart-item/CartItem";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cartActions";
import {CartContext} from "../../providers/cart/cartProvider";
import './CartDropdown.scss'

const CartDropdown = ({history, dispatch}) => {
    const {cartItems} = useContext(CartContext)

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) :
                        (<span className='empty-message'>Your cart is empty</span>)

                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>Go to checkout</CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown)

