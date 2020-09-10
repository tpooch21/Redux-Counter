const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer - only thing that may update the state
const rootReducer = (state = initialState, action) => {
  let newState = {...state};

  switch (action.type) {
    case 'INC_COUNTER':
      newState.counter++;
      break;
    case 'ADD_COUNTER':
      newState.counter += action.value;
      break;
  }

  return newState;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
