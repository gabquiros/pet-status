import React from 'react';

import { go } from '../../state/reducers/nav/nav';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => go('/about-us')}>Go to about page via redux</button>
  </div>
);

export default Home;
