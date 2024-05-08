import React, { useState } from "react";

function  HookCounter () {
    const initalCount = 0 
 const [count, setCount] = useState(initalCount)

return(
    <div>
    Count : {count}
    <button onClick={() => setCount(initalCount)}>Reset </button>
    <button onClick={() => setCount(count +1)}> INcrease</button>
    <button onClick={() => setCount(count -1)}> Decrese</button>
    </div>
)
}

export default HookCounter