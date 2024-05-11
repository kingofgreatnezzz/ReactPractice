import React, {useContext} from 'react'
import { countCOntext } from '../../App'

function CompoA() {
    const setcount = useContext(countCOntext)
  return (
    <div>

      CompoA
      <div>
      <button onClick={() => setcount.dispatch("increament")}> incresss</button>
      <button onClick={() => setcount.dispatch("decrement")}> decress</button>
      <button onClick={() => setcount.dispatch("reset")}> reset</button>
    </div>
    </div>
  )
}

export default CompoA
