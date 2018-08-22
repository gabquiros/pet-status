import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import petsReducer from '../state/reducers/pets/reducer';

const reducers = combineReducers({
  petsReducer
});

export default function configureStore() {
 return createStore(
  reducers,
   applyMiddleware(thunk)
 );
}
