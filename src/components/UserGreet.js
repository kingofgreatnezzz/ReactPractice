import React, { Component } from "react";

class UserGreet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    this.state.isLoggedIn && <div>Welcome  Hotibouyyyyy</div>
    // return(
    //     this.state.isLoggedIn?
    //     <div> Welcome Hotibouyyyyy </div>
    //     :
    //     <div> Welcome motherfucker GUest</div>
    // )

    // let Message 
    // if (this.state.isLoggedIn){
    //     Message = <div>Welcome  Hotibouyyyyy </div>
    // }
    //     else{
    //         Message = <div> Welcome motherfucking GUest </div>
    //     }
    //     return(
    //         <div>
    //             {Message}
    //         </div>
    //     )




    // if (this.state.isLoggedIn) {
    //   return <div> Welcome Hotibouyyyyy </div>
    // } else {
    //   return <div> Welcome GUest  motherfucker</div>
    // }



    // return(
    //     <div>
    //     <div> Welcome Vishwas</div>
    //     <div> Welcome Guest</div>
    //     </div>
    // )

  }
}

export default UserGreet;
