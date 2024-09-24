import { combineReducers } from 'redux';
import contactReducer from './contacts/slice';

const rootReducer = combineReducers({
  contacts: contactReducer,
});

export default rootReducer;
