import { combineReducers } from 'redux';

import global from './global';
import cryptos from './cryptos';
import exchange from './exchange';
import search from './search';

export default combineReducers({
  global,
  cryptos,
  exchange,
  search,
});
