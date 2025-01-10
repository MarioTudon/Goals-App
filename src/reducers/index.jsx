// reducers/index.js
import { combineReducers } from 'redux';
import metaReducer from './metaReducer';

const rootReducer = combineReducers({
  metas: metaReducer
});

export default rootReducer;
