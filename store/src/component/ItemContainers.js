import React from 'react'
import { connect } from 'react-redux'
import { buycake } from '../redux/cake/cakeActions'
import {buyIcecream} from "../redux/icecream/iceCreamAction"

function ItemContainers(props) {
  return (
    <div>
      <h2>items- {props.item}</h2>
      <button onClick={props.buyitem}> BUY Items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
    ? state.cake.numberOfcakes
    : state.icecream.numberOfIcecream
    return{
        item: itemState
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buycake())
    : ()=> dispatch(buyIcecream())
    return{
        buyitem: dispatchFunction
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(ItemContainers)
