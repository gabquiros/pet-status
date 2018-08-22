import { getStore } from '../../store';
import { push } from 'connected-react-router';

const store = getStore();

export const go = url => {
  store.dispatch(push(url));
};
