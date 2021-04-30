import React from 'react';

function Rainy (props) {

    return (
        <div>
            <h2>Rainy Day: {props.state.rainy}</h2>
            <button onClick={() => props.dispatch({"type": "increment5"})}>Add Rainy Day</button>
            <button onClick={() => props.dispatch({"type": "decrement5"})}>Remove Rainy Day</button>
        </div>
    )
}

export default Rainy;