import React from 'react';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

import App from '../components/App/App';

export default () => {
  return (
      <Switch>
        <Route path="/" component={App} />
        <Redirect to="/" />
      </Switch>
  );
};
