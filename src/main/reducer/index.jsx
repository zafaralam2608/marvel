import { combineReducers } from 'redux-immutable';
import albumReducer from './albumReducer';

const reducer = combineReducers({
  album: albumReducer,
});

export default reducer;
