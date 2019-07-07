import { createAction, handleActions } from 'redux-actions';
import { fetchGlobalStats } from 'store/api';

// SYNC ACTIONS

export const setGlobalStats = createAction('setGlobalStats');

// ASYNC ACTIONS

export const getGlobalStats = () => async dispatch => {
  const res = await fetchGlobalStats();
  dispatch(setGlobalStats({ ...res }));
};

const initialState = {
  isLoading: true,
};

export default handleActions(
  {
    [setGlobalStats]: (state, { payload }) => {
      const { result } = payload.data;

      return {
        ...state,
        isLoading: false,
        data: result,
      };
    },
  },
  initialState
);

export const selectGlobalStats = state => state.global.globalStats;
