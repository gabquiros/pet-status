import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { getStore, getHistory } from './state/store';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';

import './index.css';

const target = document.getElementById('root');
const store = getStore();
const history = getHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

registerServiceWorker();
