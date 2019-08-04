import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getExchangeMarkets,
  selectExchangeMarkets,
} from 'store/ducks/exchange/markets';

const withExchangeMarkets = ChildComponent => props => {
  const dispatch = useDispatch();
  const store = useSelector(selectExchangeMarkets);

  const connectRedux = {
    dispatch,
    getExchangeMarkets,
    exchangeMarketsData: store.result,
  };
  return <ChildComponent {...connectRedux} {...props} />;
};

export { withExchangeMarkets };
