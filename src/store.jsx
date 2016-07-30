import { createStore, combineReducers } from 'redux';
import clicks from './reducers/clicks';

const appReducer = combineReducers({
  clicks
});

let store = createStore(appReducer);

export default store;
