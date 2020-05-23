import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import { Provider} from 'react-redux'; //Helper component that helps us to 'inject' store into our react components
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
});
//middleware is also very useful for debugging
//it's launched every time we do dispatch an action [16.3]
const logger = store => {
    return next => {
        return action => {
            //running the code in between the action and reducer
            console.log('[Middleware] Dispatching', action);
            //continue action to reducer
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};     
//compose combines enhancers.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//can apply list of middlewares (logger,...) (executed in order)
// connecting browser extension to our store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)) );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();