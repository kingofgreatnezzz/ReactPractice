import React, { Component } from 'react'

class ClassCLick extends Component {
    clickhandler(){
        console.log("clicked button mf")
    }
  render() {
    return (
      <div>
      <button onClick={this.clickhandler}>CLick Me</button>
        
      </div>
    )
  }
}

export default ClassCLick
