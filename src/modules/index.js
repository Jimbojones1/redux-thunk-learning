import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';

console.log(counter)

export default combineReducers({
  routing: routerReducer,
  counter
})
