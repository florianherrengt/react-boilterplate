import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import user from '../modules/user';
console.log(user)
const rootReducer = combineReducers({
    user
});

const initialState = {};

export default function configureStore() {
    const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunkMiddleware), f=>f
    ));
    return store;
}

