import React from 'react';
import { connect} from 'react-redux'

import{toggleCartHiden} from '../../redux/cart/cart.actions'
import { selectCartItemsCount} from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon} from '../../assets/shoppingBag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHiden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHiden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatToProps = dispatch => ({
    toggleCartHiden: () => dispatch(toggleCartHiden())
});

const mapStateToProps = (state) =>({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatToProps)(CartIcon);