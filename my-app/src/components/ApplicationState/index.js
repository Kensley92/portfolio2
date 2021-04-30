let state = {
    cold: 0,
    hot: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment1':
            return {hot: state.hot + 1, cold: state.cold}
        case 'increment2':
            return {hot: state.hot, cold: state.cold + 1};
        case 'decrement1':
            return {hot: state.hot - 1, cold: state.cold};
        case 'decrement2':
            return {hot: state.hot, cold: state.cold - 1};
        default:
            throw new Error();
        }
}

export {state, reducer};