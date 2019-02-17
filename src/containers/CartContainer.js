import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import Cart from './../components/Cart';
import CartResult from './../components/CartResult';
import * as actions from './../actions/index';

class CartContainer extends Component {
  
  showCart(cart) 
  {
    var result = Message.MSG_CART_EMPTY;
    var {onDeleteProductInCart,onChangeMessage,onUpdateQuantity} = this.props;
    if(cart.length >0)
    {
      result = cart.map((item,index)=>
    {
      return  <CartItem key={index} item={item} onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} onUpdateQuantity={onUpdateQuantity} />
    });
    }
    return result;
  } 


  showTotalAmout(cart)
  {
    var result = null;
    if(cart.length >0)
    {
      return  <CartResult cart={cart} />
    }
    
    return result;
  }

  render() {
    var { cart } = this.props;
    return (
      <div>
         <Cart>
           {this.showCart(cart)}
           {this.showTotalAmout(cart)}
         </Cart> 
        </div>
    );
  }
}

CartContainer.propTypes={
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product:PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory:PropTypes.number.isRequired,
        rating:PropTypes.number.isRequired
      }),
      quantity:PropTypes.number.isRequired
    })
  ).isRequired


}


const mapStateToProps = (state) => (
  {
    cart: state.cart

  });

  const mapDispatchToProps = (dispatch) =>(
    {
      onDeleteProductInCart:(product) =>
      {
        dispatch(actions.actDeleteProductInCart(product));
      },
      onChangeMessage:(message) =>
      {
        dispatch(actions.MessageDeleteProductIncart(message));
      },
      onUpdateQuantity:(product,quantity) =>
      {
        dispatch(actions.actUpdateProductIncart(product,quantity));
      }

    });


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
