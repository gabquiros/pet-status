import { getStore } from '../../store';
import ACTIONS from './actions';

const store = getStore();

export const loadPets = () => {
  const pets = [ 'Luli', 'Chiqui', 'Berny' ];
  store.dispatch({
    type: ACTIONS.LOAD_PETS,
    pets
  })
}
