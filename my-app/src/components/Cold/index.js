import React from 'react';

function Cold (props) {

    return (
        <div>
            <h2>Cold Day: {props.state.cold}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Cold Day</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Cold Day</button>
        </div>
    )
}

export default Cold;