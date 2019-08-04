import { createAction, handleActions } from 'redux-actions';
import { fetchMarketData } from 'store/api';

// SYNC ACTIONS

export const setMarketData = createAction('setMarketData');

// ASYNC ACTIONS

export const getMarketData = ({ start = 0, limit = 0 }) => async dispatch => {
  const res = await fetchMarketData(start, limit);
  dispatch(setMarketData({ ...res }));
};

const initialState = {};

export default handleActions(
  {
    [setMarketData]: (state, { payload }) => {
      const { result } = payload.data;

      const parsedResult = result.map(item => ({
        CAP: item.CAP,
        CHANGE7DAYS: item.CHANGE7DAYS,
        CHANGE24HOUR: item.CHANGE24HOUR,
        ID: item.ID,
        TICKER: item.TICKER,
        NAME: item.NAME,
        PRICE: item.PRICE,
        RANK: item.RANK,
        SHARE: item.SHARE,
        VOLUME24HOUR: item.VOLUME24HOUR,
        CHANGE1HOUR: item.CHANGE1HOUR,
      }));

      return {
        result: parsedResult,
      };
    },
  },
  initialState
);

export const selectMarketData = state => state.cryptos.market;
