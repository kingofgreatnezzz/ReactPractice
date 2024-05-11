import React,{useContext} from 'react'
import { countCOntext } from '../../App'



function CompoB() {
    const setcount = useContext(countCOntext)
  return (
    <div>
      CompoB
      <div>
      <button onClick={() => setcount.dispatch("increament")}> incresss</button>
      <button onClick={() => setcount.dispatch("decrement")}> decress</button>
      <button onClick={() => setcount.dispatch("reset")}> reset</button>
    </div>
    </div>
  )
}

export default CompoB
