import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from 'react-redux';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import  {CartIconContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer className="cart-icon" onClick={() => toggleCartHidden()}>
        <ShoppingIcon/>
        <ItemCountContainer className="item-count">{itemCount}</ItemCountContainer>
    </CartIconContainer>
);



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

