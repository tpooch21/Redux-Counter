import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.counter})
      }
    case actionTypes.DELETE_RESULT:
      const updatedResults = state.results.filter(result => result.id !== action.id);
      return {
        ...state,
        results: updatedResults
      }
    }
  return state;
};

export default resultsReducer;