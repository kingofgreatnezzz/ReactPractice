import React ,{useContext}from 'react'
import { countCOntext } from '../../App'

function CompoC() {
    const setcount = useContext(countCOntext)
  return (
    <div>
      CompoC
      <div>
      <button onClick={() => setcount.dispatch("increament")}> incresss</button>
      <button onClick={() => setcount.dispatch("decrement")}> decress</button>
      <button onClick={() => setcount.dispatch("reset")}> reset</button>
    </div>
    </div>
  )
}

export default CompoC
