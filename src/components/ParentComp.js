import React, { Component } from 'react'
import ChildComp from './ChildComp'

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parent: "Parent"
      }
      this.greetPartent = this.greetPartent.bind(this)
    }
    

    greetPartent (){
        alert(`hello${this.state.parent}`)
    }


  render() {
    return (
      <div>
      <ChildComp greethandler={this.greetPartent}/>
        
      </div>
    )
  }
}

export default ParentComp
