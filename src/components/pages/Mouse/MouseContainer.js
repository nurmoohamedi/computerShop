import * as React from "react";
import {connect} from "react-redux";
import {addItemToBasket} from "../../../redux/basket-reducer";
import MouseList from "./Mouse";

const MouseContainer = ({ addItemToBasket, mouses, showSnack }) => {
  return (
      <MouseList
        addToBasket={addItemToBasket}
        mouses={mouses}
        showSnack={showSnack}
      />
  )
};

const mapStateToProps = (state) => ({
    mouses: state.mouse.mouses
})

export default connect(mapStateToProps, {addItemToBasket} )(MouseContainer);