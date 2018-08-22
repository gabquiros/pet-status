import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import petsReducer from '../state/reducers/pets/reducer';

const REDUX_LOGGER_ENABLED = true;

const history = createHistory();

const initialState = {};

const getMiddleWare = () => {
  if (REDUX_LOGGER_ENABLED) {
      return applyMiddleware(routerMiddleware(history), thunk, createLogger());
  }
  return applyMiddleware(routerMiddleware(history), thunk);
};

const reducers = combineReducers({
  pets: petsReducer
});

const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  getMiddleWare()
);

export const getStore = () => store;
export const getState = () => store.getState();
export const getHistory = () => history;
