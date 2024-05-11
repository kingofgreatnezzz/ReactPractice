import React from "react";
import { connect } from "react-redux";
import { buycake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h1> Number of Avaliable cakes - {props.numberOfcakes}</h1>
      <button onClick={props.buycake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfcakes: state.cake.numberOfcakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buycake: () => dispatch(buycake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
