import { combineReducers } from 'redux';
import contactReducer from './contacts/slice';
import filterReducer from './filter/slice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
