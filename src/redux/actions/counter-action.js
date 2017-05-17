import { INCREMENT, DECREMENT } from './actionCreators';

export function increment(payload) {
  return {
    type: INCREMENT,
    payload,
  };
}

export function decrement(payload) {
  return {
    type: DECREMENT,
    payload,
  };
}
