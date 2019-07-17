import { createAction, handleActions } from 'redux-actions';
import { fetchMarketData } from 'store/api';

import { getSymbolChart } from './chart';
// SYNC ACTIONS

export const setMarketData = createAction('setMarketData');

// ASYNC ACTIONS

export const getMarketData = (start, limit) => async dispatch => {
  const res = await fetchMarketData(start, limit);

  const symbols = res.data.result
    .filter((item, key) => key < 45)
    .map(({ ID }) => ID);

  dispatch(getSymbolChart(symbols, '7d'));
  dispatch(setMarketData({ ...res }));
};

const initialState = {};

export default handleActions(
  {
    [setMarketData]: (state, { payload }) => {
      const { data } = payload;
      const { result } = data;

      return {
        ...state,
        ...result,
      };
    },
  },
  initialState
);

export const selectMarketData = state => state.cryptos.market;
