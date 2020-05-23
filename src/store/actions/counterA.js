import * as actionTypes from './actionTypes';


//action creator is function which returns an action (or creates an action)

//camel case convention
export const increment= () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement= () => {
    return {
        type: actionTypes.DECREMENT    };
};

export const add= (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    };
};
export const subtract= (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val:value
    };
};