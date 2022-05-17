import {combineReducers, createStore, applyMiddleware} from "redux";
import keyboardReducers from "./keyboard-reducer";
import thunk from "redux-thunk";
import basketReducer from "./basket-reducer";
import checkoutReducer from "./checkout-reducer";

let reducers = combineReducers({
    keyboard: keyboardReducers,
    basket: basketReducer,
    checkout: checkoutReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;