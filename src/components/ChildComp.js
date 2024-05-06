import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={props.greethandler}> Greet Parent Comp</button>
    </div>
  )
}

export default ChildComp