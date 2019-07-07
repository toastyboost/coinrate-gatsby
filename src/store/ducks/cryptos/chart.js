import { createAction, handleActions } from 'redux-actions';
import { fetchSymbolChart } from 'store/api';

// SYNC ACTIONS

export const setSymbolChart = createAction('setSymbolChart');

// ASYNC ACTIONS

export const getSymbolChart = (symbol, range = '7d') => async dispatch => {
  const res = await fetchSymbolChart(symbol, range);

  dispatch(setSymbolChart({ ...res, symbol }));
};

const initialState = {};

export default handleActions(
  {
    [setSymbolChart]: (state, { payload }) => {
      const { data, symbol } = payload;
      const { result } = data;

      return {
        ...state,
        [symbol]: result[symbol],
      };
    },
  },
  initialState
);

export const selectSymbolChart = state => state.cryptos.chart;

// ranges: ['24h', '7d', '1m', '3m', '6m','1y', 'ytd', 'all']
