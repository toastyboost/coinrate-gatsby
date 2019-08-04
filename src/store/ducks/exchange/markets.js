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
                PRICECRYPTO: item.PRICE,
                PRICEUSD: item.PRICEUSD,
                MARKETVOLUME24HOUR: item.VOLUME24HOUR,
                CHANGE24HOUR: item.CHANGE24HOUR,
                FSYM: crypto.toLocaleLowerCase().replace('.', '-'),
                TSYM: currency.toLocaleLowerCase().replace('.', '-'),
                FSYMID: item.FSYMID.toLocaleLowerCase().replace('.', '-'),
                TSYMID: item.TSYMID.toLocaleLowerCase().replace('.', '-'),
              })
            );
          }
        }
      }

      return {
        result: markets,
      };
    },
  },
  initialState
);

export const selectExchangeMarkets = state => state.exchange.markets;
