import {combineReducers, createStore, applyMiddleware} from "redux";
import keyboardReducers from "./keyboard-reducer";
import thunk from "redux-thunk";
import basketReducer from "./basket-reducer";
import checkoutReducer from "./checkout-reducer";
import monitorReducers from "./monitor-reducer";
import mouseReducers from "./mouse-reducer";

let reducers = combineReducers({
    keyboard: keyboardReducers,
    monitor: monitorReducers,
    mouse: mouseReducers,
    basket: basketReducer,
    checkout: checkoutReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;