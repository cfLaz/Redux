import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    const updatedResult = 3*res;
    return {
        type: actionTypes.STORE_RESULT,
        result: updatedResult,
    }
}
// won't show in redux devtools because it's using asynchronous code
export const storeResult= (res) => {
            //by redux thunk
    return (dispatch, getState) => { 
        
        setTimeout( () => {
            const oldCounter = getState().ctr.counter; //don't overuse
            console.log(oldCounter);
            dispatch(saveResult(res))
        }, 2000);
    }

    /* return {
        type: STORE_RESULT,
        result: res,
    }; */
};
export const deleteResult= (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId,
    };
};