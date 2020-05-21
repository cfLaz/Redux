import * as actionTypes from '../actions/actions'; // doing this because it's easier to find mispell errors

const initialState = {
    counter:0,
}

const reducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionTypes.INCREMENT:// ...state not necessary because we are ccopying it anyway here bcz counter is only property...now changed because of addes results: []
//the way it was before: return {counter:state.counter +1}
                    //cloning old object in immuatable way
            const newState = Object.assign({}, state);
            newState.counter = state.counter+1;
            return newState;
        case actionTypes.DECREMENT:
            return {//or like this
                ...state,
                counter:state.counter -1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter:state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter:state.counter -action.value
            }
        }
    return state;
};

export default reducer;