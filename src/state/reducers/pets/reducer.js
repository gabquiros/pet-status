import PETS_ACTIONS from './actions';

export default (state = [], action) => {
  switch (action.type) {
    case PETS_ACTIONS.LOAD_PETS:
      return [
        ...action.pets
      ]
    default:
      return state
  }
}
