import React from 'react';

function Hot (props) {

    return (
        <div>
            <h2>Hot Day: {props.state.hot}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add Hot Day</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Hot Day</button>
        </div>
    )
}

export default Hot;