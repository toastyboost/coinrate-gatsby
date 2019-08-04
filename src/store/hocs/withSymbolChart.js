import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSymbolChart, selectSymbolChart } from 'store/ducks/cryptos/chart';

const withSymbolChart = ChildComponent => {
  return props => {
    const dispatch = useDispatch();

    const connectRedux = {
      dispatch,
      getSymbolChart,
      symbolChart: useSelector(selectSymbolChart),
    };
    return <ChildComponent {...connectRedux} {...props} />;
  };
};

export { withSymbolChart };
