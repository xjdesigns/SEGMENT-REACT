import { TESTING } from './actionType';

export var initialState = {
  testing: false
};

export default function lState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  console.warn('working');
  switch (action.type) {
    case TESTING:
      {
        var newState = Object.assign({}, state, {
          testing: action.payload.vis
        });
        return newState;
      }
    default:
      {
        return state;
      }
  }
}