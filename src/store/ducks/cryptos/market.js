import { createAction, handleActions } from 'redux-actions';
import { fetchMarketData } from 'store/api';

import { getSymbolChart } from './chart';

// SYNC ACTIONS

export const setMarketData = createAction('setMarketData');

// ASYNC ACTIONS

export const getMarketData = ({
  start = 0,
  limit = 0,
  withCharts = false,
}) => async dispatch => {
  const res = await fetchMarketData(start, limit);

  if (withCharts) {
    const symbols = res.data.result.splice(start, limit).map(({ ID }) => ID);
    dispatch(getSymbolChart(symbols, '7d'));
  }

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
