import React from "react";


// function Greet(){
//     return(
//         <>
//         Hello motherfuckers
//         </>
//     )

// }

// export default Greet;

// const Greet = ({props}) => {
//     return(
//         <>
//         <h1> {props.name} a.k.a {props.nickName}</h1>
//         <p>{props.children}</p>
//         </>
//     )
// }

// const Greet = ({name, nickName}) => {
//     return(
//         <>
//         <h1>Welcome to south Africa {name} is a.k.a {nickName} </h1>
//         </>
//     )
// }

const Greet = (props) => {
    const {name, nickName} = props
    return(
        <>
        <h1> Welcome to Mexico {name} a.k.a {nickName}</h1>
        </>
    )
}

export default Greet