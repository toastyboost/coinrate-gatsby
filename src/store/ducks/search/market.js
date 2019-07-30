import { createAction, handleActions } from 'redux-actions';
import { fetchMarketData } from 'store/api';

// SYNC ACTIONS

export const setSearchData = createAction('setSearchData');

// ASYNC ACTIONS

export const getSearchData = () => async dispatch => {
  const res = await fetchMarketData();

  dispatch(setSearchData({ ...res }));
};

const initialState = {};

export default handleActions(
  {
    [setSearchData]: (state, { payload }) => {
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

export const selectSearchData = state => state.search.market;
