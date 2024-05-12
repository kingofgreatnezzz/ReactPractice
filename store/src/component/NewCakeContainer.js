import React, { useState } from "react";
import { connect } from "react-redux";
import { buycake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);

    // Function to handle input value change
    const handleInputChange = (e) => {
        setNumber(e.target.value);
    };

    return (
        <div>
            <h1> Number of Available cakes - {props.numberOfcakes}</h1>
            {/* Use onChange event instead of onClick */}
            <input type="text" value={number} onChange={handleInputChange} />
            <button onClick={() => props.buycake(number)}>Buy {number} Cake</button>
        </div>
    );
}

// Map state to props
const mapStateToProps = (state) => {
    return {
        numberOfcakes: state.cake.numberOfcakes,
    };
};

// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        buycake: (number) => dispatch(buycake(number)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
