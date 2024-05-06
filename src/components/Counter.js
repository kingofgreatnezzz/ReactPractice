import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // incremwnt(){
  //     this.state.count = this.state.count +1
  //     console.log(this.state.count)
  // }

  incremwnt() {
//     this.setState(
//       {count: this.state.count + 1,},
//       () => {console.log("callback Value", this.state.count + 1);}
//     );

//     console.log(this.state.count);
//   
  this.setState((prevState) => ({
    count: prevState.count + 1

  }))
  console.log(this.state.count)
 }
 incremwntFive(){
    this.incremwnt()
    this.incremwnt()
    this.incremwnt()
    this.incremwnt()
    this.incremwnt()
    this.incremwnt()
 }

  render() {
    return (
      <div>
        <h1>counter - {this.state.count}</h1>
        <button onClick={() => this.incremwntFive   ()}>INcrement</button>
      </div>
    );
  }
}

export default Counter;
