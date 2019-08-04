import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  getSymbolMarkets,
  selectSymbolMarkets,
} from 'store/ducks/cryptos/symbolMarkets';

const withSymbolMarkets = ChildComponent => {
  return props => {
    const dispatch = useDispatch();

    const connectRedux = {
      dispatch,
      getSymbolMarkets,
      symbolMarkets: useSelector(selectSymbolMarkets),
    };

    return <ChildComponent {...connectRedux} {...props} />;
  };
};

export { withSymbolMarkets };
