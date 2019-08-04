import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSymbol, selectSymbol } from 'store/ducks/cryptos/symbol';

const withSymbol = ChildComponent => {
  return props => {
    const dispatch = useDispatch();

    const connectRedux = {
      dispatch,
      getSymbol,
      symbolData: useSelector(selectSymbol),
    };
    return <ChildComponent {...connectRedux} {...props} />;
  };
};

export { withSymbol };
