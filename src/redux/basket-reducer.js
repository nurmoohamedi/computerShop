import {shopAPI} from "../service/service";

const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const COMPUTE_BASKET = 'COMPUTE_BASKET'
const COMPUTE_TOTALS = 'COMPUTE_TOTALS'
const CLEAR_BASKET = 'CLEAR_BASKET'

let initialState = {
    basketItems: [],
    totalCostItems: [],
    totalCount: 0,
    totalPrice: 0
    // basketItems: [],
    // totalCostItems: [
    //     {id: 1, count: 2, price: 25600},
    //     {id: 3, count: 1, price: 3500},
    //     {id: 5, count: 4, price: 600},
    // ],
    // totalCount: 7,
    // totalPrice: 29700
}

const basketReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                basketItems: [...state.basketItems, action.item]
            }
        case DELETE_ITEM:
            return {
                ...state,
                basketItems: [...state.basketItems.filter(item => item.id !== action.itemId)]
            }
        case COMPUTE_BASKET:

            let stateCopy = {...state, totalCostItems: [...state.totalCostItems] }

            if (stateCopy.length === 0)
                stateCopy.totalCostItems.push({id:action.id, count: action.count, price: action.price})
            else
            {
                for (let i=0; i<stateCopy.totalCostItems.length; i++){
                    if (stateCopy.totalCostItems[i].id === action.id ){

                        stateCopy.totalCostItems[i].count = action.count
                        stateCopy.totalCostItems[i].price = action.price

                        return stateCopy;
                    }
                }
                stateCopy.totalCostItems.push({id:action.id, count: action.count, price: action.price})
            }
            return stateCopy;
        case COMPUTE_TOTALS:

            let totalCount = 0
            for (let i=0;i<state.totalCostItems.length; i++)
                totalCount += state.totalCostItems[i].count

            let totalPrice = 0
            for (let i=0;i<state.totalCostItems.length; i++)
                totalPrice += state.totalCostItems[i].price

            return {...state, totalCount: totalCount, totalPrice: totalPrice}
        case CLEAR_BASKET:
            return {...state, basketItems: [], totalCount: 0, totalPrice: 0}
        default:
            return state;
    }

}

const addItem = (item) => ({type: ADD_ITEM, item})
const deleteItem = (itemId) => ({type: DELETE_ITEM, itemId})
const computeBasket = (id, count, price) => ({type: COMPUTE_BASKET, id, count, price})
const computeTotals = () => ({type: COMPUTE_TOTALS})
const clear = () => ({type: CLEAR_BASKET})

export const addItemToBasket = (item) => {
    return (dispatch) => {
        dispatch(addItem(item))
    }
}
export const deleteItemFromBasket = (id) => {
    return (dispatch) => {
        dispatch(deleteItem(id))
    }
}

export const computeBasketCost = (id, count, price) => {
    return (dispatch) => {
        dispatch(computeBasket(id, count, price));
        dispatch(computeTotals());
    }
}

export const clearBasket = () => {
    return (dispatch) => {
        dispatch(clear());
    }
}

export default basketReducer;