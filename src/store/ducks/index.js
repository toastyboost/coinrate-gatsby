import { combineReducers } from 'redux';

import global from './global';
import cryptos from './cryptos';
import exchange from './exchange';

export default combineReducers({
  global,
  cryptos,
  exchange,
});
