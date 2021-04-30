import React from 'react';

function Clear (props) {

    return (
        <div>
            <h2>Clear Day: {props.state.clear}</h2>
            <button onClick={() => props.dispatch({"type": "increment3"})}>Add Clear Day</button>
            <button onClick={() => props.dispatch({"type": "decrement3"})}>Remove Clear Day</button>
        </div>
    )
}

export default Clear;