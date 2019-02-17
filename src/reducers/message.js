import * as types from './../constants/ActioneType';
import *  as Message from './../constants/Message';

var initialState = Message.MSG_WELLCOME;


const cart = (state = initialState, action) => {
  
    switch (action.type) {
        case types.CHANGE_MESSAGE:
        return action.message
        case types.CHANGE_MESSAGE_DELETE:
        return action.message;
        default: return  [...state];
        

    }
}

export default cart;