/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */

let initialState= {
    persons: []
};

const reducer = (state=initialState,action) => {

    switch(action.type){
        
        case 'ADD': {
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age,
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        };
    
        case 'DELETE': {
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.id)
            }
        };
        // eslint-disable-next-line no-unreachable
    };
    return state; //wast in the switch statement and it was not working
};

export default reducer;