import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getMarketData, selectMarketData } from 'store/ducks/cryptos/market';

const withMarketData = ChildComponent => props => {
  const dispatch = useDispatch();
  const store = useSelector(selectMarketData);

  const connectRedux = {
    dispatch,
    getMarketData,
    marketData: store.result,
  };

  return <ChildComponent {...connectRedux} {...props} />;
};

export { withMarketData };
