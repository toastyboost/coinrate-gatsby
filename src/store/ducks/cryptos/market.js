import { createAction, handleActions } from 'redux-actions';
import { fetchMarketData } from 'store/api';

// SYNC ACTIONS

export const setMarketData = createAction('setMarketData');

// ASYNC ACTIONS

export const getMarketData = (start, limit) => async dispatch => {
  const res = await fetchMarketData(start, limit);
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
