import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getExchanges, selectExchanges } from 'store/ducks/exchange/exchanges';

const withExchanges = ChildComponent => props => {
  const dispatch = useDispatch();
  const store = useSelector(selectExchanges);

  const connectRedux = {
    dispatch,
    getExchanges,
    exchangesData: store.result,
  };
  return <ChildComponent {...connectRedux} {...props} />;
};

export { withExchanges };
