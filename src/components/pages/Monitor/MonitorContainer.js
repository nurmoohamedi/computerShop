import * as React from "react";
import {connect} from "react-redux";
import {addItemToBasket} from "../../../redux/basket-reducer";
import MonitorList from "./Monitor";

const MonitorContainer = ({ addItemToBasket, monitors, showSnack }) => {
  return (
      <MonitorList
        addToBasket={addItemToBasket}
        monitors={monitors}
        showSnack={showSnack}
      />
  )
};

const mapStateToProps = (state) => ({
    monitors: state.monitor.monitors
})

export default connect(mapStateToProps, {addItemToBasket} )(MonitorContainer);