import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducer from './ducks';

const logger = createLogger({
  collapsed: true,
});

const middleware = promiseMiddleware({
  promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAIL'],
});

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, middleware, logger)
  );
};

export { configureStore };
