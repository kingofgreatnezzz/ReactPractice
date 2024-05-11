import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buycake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numberOfcakes = useSelector(state => state.cake.numberOfcakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>NUmber of cakes - {numberOfcakes}</h2>
      <button onClick={() => dispatch(buycake())}> BUy Cake</button> 
    </div>
  )
}

export default HooksCakeContainer
