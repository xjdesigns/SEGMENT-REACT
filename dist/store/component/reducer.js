import { TESTING } from './actionType';
export const initialState = {
  testing: false
};
export default function lState(state = initialState, action) {
  switch (action.type) {
    case TESTING:
      {
        const newState = { ...state,
          testing: action.payload.vis
        };
        return newState;
      }

    default:
      {
        return state;
      }
  }
}