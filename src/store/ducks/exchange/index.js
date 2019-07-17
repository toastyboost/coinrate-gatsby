import { combineReducers } from 'redux';

import exchanges from './exchanges';
import markets from './markets';

export default combineReducers({
  exchanges,
  markets,
});
