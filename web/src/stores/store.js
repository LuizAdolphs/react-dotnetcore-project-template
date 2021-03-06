import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import rootReducer from '../reducers/rootReducer';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middlewares = [
    thunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if(typeof devToolsExtension === '') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnchancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnchancers
)

export default store;