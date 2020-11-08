import React, {useContext, useState} from "react";
import {UserContext} from "../../contexts/user/userContext";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from './headerStyles';
import {auth} from '../../firebase/firebase.utils';
import {CartIcon} from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import imgLogo from '../../images/logo192.png'
import {CartContext} from "../../contexts/cart/cartContext";

export const Header = () => {
    const currentUser = useContext(UserContext)
    const [hidden, setHidden] = useState(true)
    const toggleHidden = () => setHidden(!hidden)

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <img src={imgLogo} alt='Logo'/>
            </LogoContainer>

            <OptionsContainer>
                <OptionsLink to='/'>
                    Home
                </OptionsLink>
                <OptionsLink to='/shop'>
                    Shop
                </OptionsLink>
                <OptionsLink to='/contact'>
                    Contact
                </OptionsLink>
                {!currentUser ?
                    <OptionsLink to='/signin'>
                        Sign In
                    </OptionsLink>
                    :
                    <OptionsLink as='div' onClick={() => auth.signOut()}>
                        Sign Out
                    </OptionsLink>
                }
                <CartContext.Provider value={{hidden, toggleHidden}}>
                    <CartIcon/>
                </CartContext.Provider>
            </OptionsContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    )
}
