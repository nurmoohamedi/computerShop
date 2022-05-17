import {shopAPI} from "../service/service";

const ADD_SHIPPING_DATA = 'ADD_SHIPPING_DATA'
const ADD_PAYMENT_DATA = 'ADD_PAYMENT_DATA'


let initialState = {
    shippingData: {},
    paymentData: {}
}

const checkoutReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_SHIPPING_DATA:
            return {
                ...state,
                shippingData: action.data
            }
        case ADD_PAYMENT_DATA:
            return {
                ...state,
                paymentData: action.data
            }
        default:
            return state;
    }

}

const addShipping = (data) => ({type: ADD_SHIPPING_DATA, data})
const addPayment = (data) => ({type: ADD_PAYMENT_DATA, data})

export const addShippingData = (data) => (dispatch) => {
    dispatch(addShipping(data));
}

export const addPaymentData = (data) => (dispatch) => {
    dispatch(addPayment(data));
}

export default checkoutReducer;