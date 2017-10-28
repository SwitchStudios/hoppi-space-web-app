import * as types from '../actions/actionTypes';

const initialState = {
  list: []
};

export default function fuelSavingsReducer(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_SEARCH_RESULTS:
      return state;

    case types.RECEIVE_SEARCH_RESULTS:
      return state;

    default:
      return state;
  }
}
