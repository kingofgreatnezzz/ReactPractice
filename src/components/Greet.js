import React from "react";


// function Greet(){
//     return(
//         <>
//         Hello motherfuckers
//         </>
//     )

// }

// export default Greet;

const Greet = (props) => {
    return(
        <>
        <h1> {props.name} a.k.a {props.nickName}</h1>
        <p>{props.children}</p>
        </>
    )
}

export default Greet