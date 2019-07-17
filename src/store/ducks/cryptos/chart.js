import { createAction, handleActions } from 'redux-actions';
import { fetchSymbolChart } from 'store/api';
import { timeRanges } from 'helpers/constants';

// SYNC ACTIONS

export const setSymbolChart = createAction('setSymbolChart');

// ASYNC ACTIONS

export const getSymbolChart = (
  symbols,
  range = timeRanges[1]
) => async dispatch => {
  const res = await fetchSymbolChart(symbols, range);

  dispatch(setSymbolChart({ ...res }));
};

const initialState = {};

export default handleActions(
  {
    [setSymbolChart]: (state, { payload }) => {
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

export const selectSymbolChart = state => state.cryptos.chart;

// ranges: ['24h', '7d', '1m', '3m', '6m','1y', 'ytd', 'all']
