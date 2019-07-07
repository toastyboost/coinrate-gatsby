import { combineReducers } from 'redux';

import global from './global';
import cryptos from './cryptos';

export default combineReducers({
  global,
  cryptos,
});
