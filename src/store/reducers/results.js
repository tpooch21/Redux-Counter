import * as actionTypes from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
  results: [],
  teams: []
};

const deleteResult = (state, action) => {
  return state.results.filter(result => result.id !== action.id);
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results: state.results.concat({id: new Date(), value: action.counter})});
    case actionTypes.DELETE_RESULT:
      return updateObject(state, {results: deleteResult(state, action)});
    case actionTypes.GET_NBA_TEAMS:
      return updateObject(state, {teams: action.data});
    default:
      return state;
    }
};

export default resultsReducer;