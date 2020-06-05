import React from 'react';
import { connect} from 'react-redux'

import{toggleCartHiden} from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon} from '../../assets/shoppingBag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHiden}) => (
    <div className='cart-icon' onClick={toggleCartHiden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatToProps = dispatch => ({
    toggleCartHiden: () => dispatch(toggleCartHiden())
});

export default connect(null,mapDispatToProps)(CartIcon);