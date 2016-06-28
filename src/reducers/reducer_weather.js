import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // 여기서 state.push 를 할 경우 state mutation 이 일어날 수 있다.
    // concat 을 사용하면 mutation 을 방지할 수 있다.
    // return state.concat(action.payload.data);
    // --> return state.concat([action.payload.data]);
    return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [ city, city ] ]
  }
  return state;
}