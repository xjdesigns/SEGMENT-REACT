import { TESTING } from './actionType';

export function openSidebar(vis) {
  return {
    type: TESTING,
    payload: {
      vis: vis
    }
  };
}