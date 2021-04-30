import React from 'react';

function Hot (props) {

    return (
        <div>
            <h2>Hot Nights: {props.state.hot}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add Hot Night</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Hot Night</button>
        </div>
    )
}

export default Hot;