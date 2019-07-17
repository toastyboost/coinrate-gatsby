import { createAction, handleActions } from 'redux-actions';
import { fetchExchanges } from 'store/api';

// SYNC ACTIONS

export const setExchanges = createAction('setExchanges');

// ASYNC ACTIONS

export const getExchanges = () => async dispatch => {
  const res = await fetchExchanges();
  dispatch(setExchanges({ ...res }));
};

const initialState = {};

export default handleActions(
  {
    [setExchanges]: (state, { payload }) => {
      const { result } = payload.data;

      return {
        ...state,
        data: result,
      };
    },
  },
  initialState
);

export const selectExchanges = state => state.exchange.exchanges;
