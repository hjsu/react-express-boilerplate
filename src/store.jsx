import { createStore, combineReducers } from 'redux';
import { click } from './reducers/click';

const appReducer = combineReducers({
  click
});

let store = createStore(appReducer);

export default store;
