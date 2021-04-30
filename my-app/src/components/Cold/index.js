import React from 'react';

function Cold (props) {

    return (
        <div>
            <h2>Cold Nights: {props.state.cold}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add Cold Night</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Cold Night</button>
        </div>
    )
}

export default Cold;