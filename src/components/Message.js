import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {message: "welcome to motherfucking South Africa"}
    }

    Changemessage(){
        this.setState({message: "Thank you for subcribing"})
    }
    
    render(){
        return(
            <>
            <h1> {this.state.message}</h1>
            <button onClick={() => this.Changemessage()}> Subscribe Puta</button>
            </>
        )
    }
}

export default Message