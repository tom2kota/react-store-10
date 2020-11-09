import React, {useContext} from "react";
import {connect} from "react-redux";
import {clearItemFromCart} from "../../redux/cart/cartActions";
import {CartContext} from "../../providers/cart/cartProvider";
import './CheckoutItem.scss'

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, image, price, quantity} = cartItem
    const {addItem, removeItem} = useContext(CartContext)

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={image} alt='item'/>
            </div>
            <span className='name'>{name}</span>

            <span className='quantity'>
                 <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'> {quantity}</span>
             <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>

            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
