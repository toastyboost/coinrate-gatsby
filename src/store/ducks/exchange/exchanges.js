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

      // COUNTRY: "cn"
      // ID: "binance"
      // MARKETS: 461
      // NAME: "Binance"
      // RANK: 1
      // VOLUME24HOUR: 996268287.81592
      // VOLUME24HOURPCT: 1.84769051873394

      const parcedResult = result.map(item => ({
        RANK: item.RANK,
        COUNTRY: item.COUNTRY,
        ID: item.ID,
        EXCHANGEMARKETS: item.MARKETS,
        EXCHANGENAME: item.NAME.toLowerCase().replace('.', '-'),
        EXCHANGEVOLUME: item.VOLUME24HOUR,
        EXCHANGESHARE: item.VOLUME24HOURPCT * 10,
      }));

      return {
        result: parcedResult,
      };
    },
  },
  initialState
);

export const selectExchanges = state => state.exchange.exchanges;
