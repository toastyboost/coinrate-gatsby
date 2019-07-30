import { combineReducers } from 'redux';

import symbol from './symbol';
import chart from './chart';
import market from './market';
import symbolMarkets from './symbolMarkets';

export default combineReducers({
  symbol,
  chart,
  market,
  symbolMarkets,
});
