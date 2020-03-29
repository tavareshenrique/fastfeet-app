import { combineReducers } from 'redux';

import auth from './auth/reducer';
import delivery from './delivery/reducer';

export default combineReducers({
  auth,
  delivery,
});
