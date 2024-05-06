import React, { Component } from "react";

class EnventBinder extends Component {
//   clickhandler() {
//     this.setState({
//         message: "Wellcom tho mother fucking south africa"
//     })
//     console.log(this);
//   }

  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.clickhandler = this.clickhandler.bind(this);
  }

  clickhandler = () =>{
    this.setState({
        message: "goodbye motherfucker"
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
       {/*  <button onClick={this.clickhandler.bind(this)}>CLICK Envent Binder</button>  */}
        <button onClick={() => this.clickhandler()}>CLICK Envent Binder</button>
      </div>
    );
  }
}

export default EnventBinder;
