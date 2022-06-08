import {shopAPI} from "../service/service";

const GET_MONITORS = 'GET_MONITORS'
// const DELETE_KEYBOARD = 'DELETE_KEYBOARD'

let initialState = {
    monitors: [
        {
            id:111,
            "model":"Samsung",
            "description":"Монитор Игровой 26.9\" Samsung LC27G55TQWIXCI 2560х1440 16:9 VA 144ГЦ (HDMI+DP) Curved Black",
            "country":"Japan",
            "price":161900,
            count:10,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452477512159.jpg"
            }
        },
        {
            id:222,
            model:"Asus",
            description:"Монитор Игровой 27\" Asus TUF Gaming VG27BQ 2560x1440 16:9 TN 165Гц (2HDMI+DP) Black",
            country:"USA",
            price:215600,
            count:1,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/1515966223509117179.jpg"
            }
        },
        {
            id:333,
            model:"Samsung",
            description:"Монитор Игровой 23.8\" Samsung LS24R356FHIXCI 1920x1080 16:9 IPS 75ГЦ (HDMI) Dark Blue",
            country:"Taiwan",
            price:89990,
            count:4,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452485814745.jpg"
            }
        },
        {
            id:444,
            model:"Samsung",
            description:"Монитор Игровой 27\" Samsung LF27G33TFWIXCI 1920x1080 16:9 VA 144ГЦ (HDMI+DP) Black",
            country:"Taiwan",
            price:145490,
            count:4,
            img: {
                small: "https://pictures.r46.technodom.kz/resize-images/220/74fd3b613553b97107bc4502752749/2388434452481751907.jpg"
            }
        }
    ]
}

const monitorReducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_MONITORS:
            return {
                ...state,
                monitors: [...state.monitors, ...action.data]
            }
        default:
            return state;
    }

}

const getMonitorsAC = (data) => ({type: GET_MONITORS, data})

export const getMonitors = () => {
    return (dispatch) => {
        shopAPI.getKeyboards().then(data => {
            dispatch(getMonitorsAC(data));
        })
    }
}

export default monitorReducers;