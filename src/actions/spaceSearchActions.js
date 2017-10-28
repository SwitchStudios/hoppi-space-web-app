import * as types from './actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function searchSpaces(location, spaceType, startDate, endDate) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    dispatch({
      type: types.REQUEST_SEARCH_RESULTS,
      dateModified: getFormattedDateTime(),
      location,
      spaceType,
      startDate,
      endDate
    });

    return dispatch({
      type: types.RECEIVE_SEARCH_RESULTS,
      list: [{id: 1, name: 'Space One'}, {id: 2, name: 'Space Two'}]
    });
  };
}
