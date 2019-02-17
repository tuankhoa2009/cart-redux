import * as types from './../constants/ActioneType';
import * as Message from './../constants/Message';
export const actAddToCart = (product, quantity) => (
        {
                type: types.ADD_TO_CART,
                product: product,
                quantity: quantity

        });


export const actChangeMessage = (message) => (
        {
                type: types.CHANGE_MESSAGE,
                message: Message.MSG_ADD_TO_CART_SUCCESS
        });

export const actDeleteProductInCart = (product) =>(
{
        type:types.DELETE_IN_CART,
        product:product
});

export const MessageDeleteProductIncart = (message) => (
        {
                type: types.CHANGE_MESSAGE_DELETE,
                message:message
        });
export const actUpdateProductIncart = (product,quantity) =>({

        type:types.UPDATE_IN_CART,
        product:product,
        quantity:quantity

})