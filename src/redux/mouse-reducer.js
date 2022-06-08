import {shopAPI} from "../service/service";

const GET_MOUSE = 'GET_MOUSE'

let initialState = {
    mouses: [
        {
            id:117,
            "model":"Logitech",
            "description":"Мышка игровая проводная USB Logitech G102 LIGHTSYNC, Black",
            "country":"Japan",
            "price":14490,
            count:10,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/1515966223525046794.jpg"
            }
        },
        {
            id:227,
            model:"Logitech",
            description:"Мышка игровая проводная USB Logitech G102 LIGHTSYNC, Lilac",
            country:"USA",
            price:14490,
            count:2,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452479838201.jpg"
            }
        },
        {
            id:337,
            model:"Red Square",
            description:"Мышка игровая проводная USB Red Square MIMIC ESSENTIAL (RSQ-10016)",
            country:"Taiwan",
            price:6490,
            count:4,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452475676399.jpg"
            }
        },
        {
            id:447,
            model:"Trust GXT",
            description:"Мышка игровая проводная USB Trust GXT 105 IZZA LED, Black",
            country:"Taiwan",
            price:3990,
            count:4,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/1515966223509089875.jpg"
            }
        }
    ]
}

const mouseReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOUSE:
            return {
                ...state,
                monitors: [...state.mouses, ...action.data]
            }
        default:
            return state;
    }

}

const getMousesAC = (data) => ({type: GET_MOUSE, data})

export const getMouses = () => {
    return (dispatch) => {
        shopAPI.getKeyboards().then(data => {
            dispatch(getMousesAC(data));
        })
    }
}

export default mouseReducers;