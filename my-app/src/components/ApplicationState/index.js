let state = {
    cold: 0,
    hot: 0,
    clear: 0,
    cloudy: 0,
    rainy: 0,
    snowy: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment1':
            return {hot: state.hot + 1, cold: state.cold, clear: state.clear, cloudy: state.cloudy, rainy: state.rainy, snowy: state.snowy}
        case 'increment2':
            return {hot: state.hot , cold: state.cold+ 1 , clear: state.clear , cloudy: state.cloudy , rainy: state.rainy , snowy: state.snowy };
        case 'increment3':
                return {hot: state.hot , cold: state.cold , clear: state.clear+ 1 , cloudy: state.cloudy , rainy: state.rainy , snowy: state.snowy };
        case 'increment4':
            return {hot: state.hot , cold: state.cold, clear: state.clear, cloudy: state.cloudy+ 1, rainy: state.rainy, snowy: state.snowy}
        case 'increment5':
            return {hot: state.hot , cold: state.cold , clear: state.clear , cloudy: state.cloudy , rainy: state.rainy + 1, snowy: state.snowy };
        case 'increment6':
                return {hot: state.hot , cold: state.cold , clear: state.clear , cloudy: state.cloudy , rainy: state.rainy , snowy: state.snowy+ 1 };
        case 'decrement1':
            return {hot: state.hot - 1, cold: state.cold , clear: state.clear , cloudy: state.cloudy , rainy: state.rainy , snowy: state.snowy };
        case 'decrement2':
            return {hot: state.hot, cold: state.cold- 1, clear: state.clear, cloudy: state.cloudy, rainy: state.rainy, snowy: state.snowy };
        case 'decrement3':
            return {hot: state.hot, cold: state.cold, clear: state.clear- 1, cloudy: state.cloudy, rainy: state.rainy, snowy: state.snowy };    
        case 'decrement4':
            return {hot: state.hot, cold: state.cold, clear: state.clear, cloudy: state.cloudy- 1, rainy: state.rainy, snowy: state.snowy };    
        case 'decrement5':
            return {hot: state.hot, cold: state.cold, clear: state.clear, cloudy: state.cloudy, rainy: state.rainy- 1, snowy: state.snowy };    
        case 'decrement6':
            return {hot: state.hot, cold: state.cold, clear: state.clear, cloudy: state.cloudy, rainy: state.rainy, snowy: state.snowy- 1 };   
        default:
            throw new Error();
        }
}

export {state, reducer};