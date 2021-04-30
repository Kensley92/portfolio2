import React from 'react';

function Snowy (props) {

    return (
        <div>
            <h2>Snowy Day: {props.state.snowy}</h2>
            <button onClick={() => props.dispatch({"type": "increment6"})}>Add Snowy Day</button>
            <button onClick={() => props.dispatch({"type": "decrement6"})}>Remove Snowy Day</button>
        </div>
    )
}

export default Snowy;