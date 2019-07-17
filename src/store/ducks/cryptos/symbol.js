import { createAction, handleActions } from 'redux-actions';
import { fetchSymbol } from 'store/api';

// SYNC ACTIONS

export const setSymbol = createAction('setSymbol');

// ASYNC ACTIONS

export const getSymbol = symbol => async dispatch => {
  const res = await fetchSymbol(symbol);
  dispatch(setSymbol({ ...res, symbol }));
};

const initialState = {};

export default handleActions(
  {
    [setSymbol]: (state, { payload }) => {
      const { data, symbol } = payload;
      const { result } = data;

      return {
        ...state,
        [symbol]: result[0],
      };
    },
  },
  initialState
);

export const selectSymbol = state => state.cryptos.symbol;
