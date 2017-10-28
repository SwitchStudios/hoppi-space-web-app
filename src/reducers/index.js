import { combineReducers } from 'redux';
import spaceSearch from './spaceSearchReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  spaceSearch,
  routing: routerReducer
});

export default rootReducer;
