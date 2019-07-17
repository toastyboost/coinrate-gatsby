import { createAction, handleActions } from 'redux-actions';
import { fetchSymbolMarket } from 'store/api';

// SYNC ACTIONS

export const setSymbolMarkets = createAction('setSymbolMarkets');

// ASYNC ACTIONS

export const getSymbolMarkets = (symbol, start, limit) => async dispatch => {
  const res = await fetchSymbolMarket(symbol, start, limit);
  dispatch(setSymbolMarkets({ ...res, symbol }));
};

const initialState = {};

export default handleActions(
  {
    [setSymbolMarkets]: (state, { payload }) => {
      const { data, symbol } = payload;
      const { result } = data;

      const markets = [];

      // refactor this

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
                FSYM: exchange.toLowerCase(),
                TSYM: currency.toLowerCase(),
                FSYMID: item.FSYMID.toLowerCase(),
                TSYMID: item.TSYMID.toLowerCase(),
              })
            );
          }
        }
      }

      return {
        ...state,
        [symbol]: markets,
      };
    },
  },
  initialState
);

export const selectSymbolMarkets = state => state.cryptos.symbolMarkets;
