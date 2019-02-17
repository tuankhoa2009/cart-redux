import * as types from './../constants/ActioneType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data: [];


const cart = (state = initialState, action) => {
    var product = action.product;
    var quantity = action.quantity;
    var index = -1; // -1 neu không tìm thấy
    switch (action.type) {
        case types.ADD_TO_CART:
        index = findProductInCart(state,product)
        if(index !== -1)
        {
            state[index].quantity += quantity;
        }
        else
        {
            state.push({
                product,
                quantity
            });
        }
        localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.DELETE_IN_CART:
        index = findProductInCart(state,product)
        if(index !== -1)
        {
            state.splice(index,1);
        }
         localStorage.setItem('CART',JSON.stringify(state));
         return [...state];
        case types.UPDATE_IN_CART:
        index = findProductInCart(state,product)
        if(index !==-1)
        {
            state[index].quantity = quantity;
        }
        localStorage.setItem('CART',JSON.stringify(state));
        return [...state];
        default: return  [...state];

    }
}


var findProductInCart = (cart,product) =>
{
    var index = -1;
    if(cart.length>0)
    {
        for (var i=0;i < cart.length; i++) {
            if(cart[i].product.id === product.id)
            {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;