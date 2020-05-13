const initialState = {
    counter:0,
    results: [],
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCREMENT':// ...state not necessary because we are ccopying it anyway here bcz counter is only property...now changed because of addes results: []
//the way it was before: return {counter:state.counter +1}
                    //cloning old object in immuatable way
            const newState = Object.assign({}, state);
            newState.counter = state.counter+1;
            return newState;
        case 'DECREMENT':
            return {//or like this
                ...state,
                counter:state.counter -1
            }
        case 'ADD':
            return {
                ...state,
                counter:state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter:state.counter -action.value
            }

        case 'STORE_RESULT':
            return {
                ...state, //concat is same as push except it gives a new array (doing it here because of immutability)
                results: state.results.concat({id: new Date(), value:state.counter})
            }
    }
    return state;
};

export default reducer;