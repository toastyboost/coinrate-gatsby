import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducer from './ducks';

const initStore = () =>
  createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      promiseMiddleware({
        promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'FAIL'],
      }),
      createLogger({ collapsed: true })
    )
  );

const store = initStore();
// eslint-disable-next-line react/display-name
export default ({ element }) => <Provider store={store}> {element}</Provider>;
