import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
export function increment(value) {
  return { type: INCREMENT, value: value };
}
export function decrement() {
  return { type: DECREMENT };
}

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.value };
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));

export default store;
