import { createAction, handleActions } from 'redux-actions';
import { fetchSymbol } from 'store/api';

// SYNC ACTIONS

export const setSymbol = createAction('setSymbol');

// ASYNC ACTIONS

export const getSymbol = crypto => async dispatch => {
  const res = await fetchSymbol(crypto);
  dispatch(setSymbol({ ...res, crypto }));
};

const initialState = {};

export default handleActions(
  {
    [setSymbol]: (state, { payload }) => {
      const { data, crypto } = payload;
      const { result } = data;

      return {
        ...state,
        [crypto]: result[0],
      };
    },
  },
  initialState
);

export const selectSymbol = state => state.cryptos.symbol;
