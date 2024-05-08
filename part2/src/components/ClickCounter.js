import React, { Component } from 'react'

class ClickCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    handlecount = () => {
        this.setState({
            count: this.state.count + 1
    })
    }
  render() {
    return (
      <div>
        <button onClick={this.handlecount}> click {this.state.count} </button>
      </div>
    )
  }
}

export default ClickCounter
