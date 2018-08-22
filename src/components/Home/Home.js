import React from 'react';
import { connect } from 'react-redux'

import { go } from '../../state/reducers/nav/nav';
import { loadPets } from '../../state/reducers/pets/pets';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <p>{props.pets.length ? `My Pets: ${props.pets.join(' - ')}` : 'No Pets'}</p>
    <button onClick={loadPets}>Load Pets</button>
    <button onClick={() => go('/about-us')}>Go to about page via redux</button>
  </div>
);

const mapStateToProps = ({ pets }) => ({
  pets
})

export default connect(mapStateToProps)(Home);
