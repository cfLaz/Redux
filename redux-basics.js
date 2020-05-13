//showing how to execute redux with Node.js
/*It's independent from React*/

/* const redux = require('redux');
const createStore = redux.createStore; */
const createStore = require('redux').createStore; // I put it like this
const initialState ={
    counter:0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state, // because state is not immutable, ALWAYS DO THIS IMMUTABLY
            counter: state.counter + 1,//override counter
        }
    }
    if(action.type === 'ADD_COUNTER') {
        return {
            ...state, // because state is not immutable, ALWAYS DO THIS IMMUTABLY
            counter: state.counter + action.value,//override counter
        }
    }
    return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState()); //$ node redux-basics.js

//Subscription  
        //subscribe takes function which will be executed whenever the state is updated (whenever acton reached the reducer)
store.subscribe(() => {
     console.log('Subscription', store.getState())
    });

//Dispatching Actions
store.dispatch({type: 'INC_COUNTER'}); //type is mandatory on any action we dispatch
store.dispatch({type: 'ADD_COUNTER', value: 8});
console.log(store.getState());

