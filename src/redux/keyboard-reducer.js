import {shopAPI} from "../service/service";

const GET_KEYBOARDS = 'GET_KEYBOARDS'
const DELETE_KEYBOARD = 'DELETE_KEYBOARD'

let initialState = {
    keyboards: [
        {
            id:121,
            "model":"HyperX",
            "description":"Клавиатура игровая проводная HyperX Alloy Core RGB",
            "country":"Japan",
            "price":28900,
            count:10,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/1515966223509260041.jpg"
            }
        },
        {
            id:212,
            model:"Logitech",
            description:"Клавиатура игровая проводная Logitech Core RGB",
            country:"USA",
            price:35000,
            count:1,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452487450512.jpg"
            }
        },
        {
            id:313,
            model:"Genius",
            description:"Клавиатура игровая проводная Genius Crud Core RGB",
            country:"Taiwan",
            price:24900,
            count:4,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/1515966223509089427.jpg"
            }
        },
        {
            id:414,
            model:"Genius",
            description:"Клавиатура игровая проводная Genius Crud Core RGB",
            country:"Taiwan",
            price:24900,
            count:4,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452475802536.jpg"
            }
        }
    ]
}

const keyboardReducers = (state = initialState, action) => {

    switch (action.type) {
        case DELETE_KEYBOARD:
            return {
                ...state,
                keyboards: state.keyboards.filter(item => item.id !== action.itemId)
            }
        case GET_KEYBOARDS:
            return {
                ...state,
                keyboards: [...state.keyboards, ...action.data]
            }
        default:
            return state;
    }

}

const getKeyboardsAC = (data) => ({type: GET_KEYBOARDS, data})
const deleteKeyboardAC = (itemId) => ({type: DELETE_KEYBOARD, itemId})

export const getKeyboards = () => {
    return (dispatch) => {
        shopAPI.getKeyboards().then(data => {
            dispatch(getKeyboardsAC(data));
        })
    }
}
export const deleteKeyboard = (id) => {
    return (dispatch) => {
        dispatch(deleteKeyboardAC(id))
        // shopAPI.deleteKeyboard(id)
        //     .then(data=>alert(data));
        alert("Item with id - " + id + " deleted!")
        // getKeyboards();
    }
}

export default keyboardReducers;