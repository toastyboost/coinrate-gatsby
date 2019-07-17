import { createAction, handleActions } from 'redux-actions';
import { fetchExchangeMarkets } from 'store/api';

// SYNC ACTIONS

export const setExchangeMarkets = createAction('setExchangeMarkets');

// ASYNC ACTIONS

export const getExchangeMarkets = name => async dispatch => {
  const res = await fetchExchangeMarkets(name);
  dispatch(setExchangeMarkets({ ...res }));
};

const initialState = {};

export default handleActions(
  {
    [setExchangeMarkets]: (state, { payload }) => {
      const { result } = payload.data;

      const markets = [];

      for (let exchange in result) {
        for (let crypto in result[exchange]) {
          for (let currency in result[exchange][crypto]) {
            const market = [result[exchange][crypto][currency]];

            market.map(item =>
              markets.push({
                RANK: item.RANK,
                PRICE: item.PRICE,
                PRICEUSD: item.PRICEUSD,
                VOLUME24HOUR: item.VOLUME24HOUR,
                CHANGE24HOUR: item.CHANGE24HOUR,
                FSYM: crypto.toLocaleLowerCase(),
                TSYM: currency.toLocaleLowerCase(),
                FSYMID: item.FSYMID.toLocaleLowerCase(),
                TSYMID: item.TSYMID.toLocaleLowerCase(),
              })
            );
          }
        }
      }

      return {
        ...state,
        data: markets,
      };
    },
  },
  initialState
);

export const selectExchangeMarkets = state => state.exchange.markets;
