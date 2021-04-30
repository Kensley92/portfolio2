import React from 'react';

function Cloudy (props) {

    return (
        <div>
            <h2>Cloudy Day: {props.state.cloudy}</h2>
            <button onClick={() => props.dispatch({"type": "increment4"})}>Add Cloudy Day</button>
            <button onClick={() => props.dispatch({"type": "decrement4"})}>Remove Cloudy Day</button>
        </div>
    )
}

export default Cloudy;