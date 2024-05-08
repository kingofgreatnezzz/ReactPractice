import React, { useEffect, useState } from 'react'

function Hookereffect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
        console.log(count)
    }
    )
  return (
    <div>
    <h2>count u made</h2>
    <button onClick={() => setCount(count +1)}> click {count}</button>
      
    </div>
  )
}

export default Hookereffect
