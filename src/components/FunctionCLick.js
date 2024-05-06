import React from 'react'



function clickhandler(){
    console.log("Button Clicked")
}
function FunctionCLick() {
  return (
    <div>
      <button onClick={clickhandler}> CLIck</button>
    </div>
  )
}

export default FunctionCLick
