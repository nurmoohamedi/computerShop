import KeyboardList from "./Keyboard";
import {Box} from "@mui/material";
import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import {deleteKeyboard, getKeyboards} from "../../../redux/keyboard-reducer";
import {addItemToBasket} from "../../../redux/basket-reducer";

const KeyboardContainer = ({keyboards, addItemToBasket, getKeyboards, deleteKeyboard, showSnack}) => {

    useEffect(() => {
        getKeyboards()
    }, [])

    return (
        <Box
            sx={{
                // padding: '20px 20px',
                // backgroundColor:'#fff',
                // borderRadius: '6px'
            }}
        >
            {/*<Search/>*/}
            <KeyboardList
                addToBasket={addItemToBasket}
                keyboards={keyboards}
                deleteItem={deleteKeyboard}
                showSnack={showSnack}
            />
        </Box>
    )
}

const mapStateToProps = (state) => ({
        keyboards: state.keyboard.keyboards
    }
)

export default connect(mapStateToProps, {addItemToBasket, getKeyboards, deleteKeyboard})(KeyboardContainer);