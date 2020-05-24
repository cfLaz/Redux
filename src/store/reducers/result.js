/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes'; // doing this because it's easier to find spelling errors
import updateObject from '../utility';
const initialState = {
        results: [],
}
const deleteResult= (state, action) => {
    const updatedArray = state.results.filter(result => result.id!==action.resultElid);
    return updateObject (state, {updatedArray});
};

const reducer = (state = initialState, action) => {
    // console.log(state.results)
    
    switch (action.type) {

        case actionTypes.STORE_RESULT:
            return  { 
                ...state, //concat is same as push except it gives a new array (doing it here because of immutability)
                results: state.results.concat({id: new Date(), value: action.result /2}), //changing in reducer (/2) because sometimes we want to change the value before we pass it on
            }

        case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    
           /*  const id =2;
            //state.results.splice(id,1); mutates the original array
            const newArray = [...state.results]; // elements in state.results are objects and we didn't copy them,but that's okay since we are not accessing them, we just want to delete those objects here.
            newArray.splice(id,1) */
                                    // filter takes a function which is executed on each element of the array and is added to the new array(updated Array here) if condition in function is fulfulled // here, every element will fulfill( => true ) because we just want to make a copy of the array
//            const updatedArray = state.results.filter(results => true);
    }    
           
    
    return state;
};

export default reducer;