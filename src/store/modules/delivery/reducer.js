import produce from 'immer';

const INITIAL_STATE = {
  setTakeOrder: false,
  setProblem: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/TAKE_ORDER_REQUEST': {
        draft.setTakeOrder = false;
        break;
      }
      case '@delivery/TAKE_ORDER_REQUEST_SUCCESS': {
        draft.setTakeOrder = true;
        break;
      }
      case '@delivery/TAKE_ORDER_REQUEST_FAILURE': {
        draft.setTakeOrder = false;
        break;
      }
      case '@delivery/SET_PROBLEM_REQUEST': {
        draft.setProblem = false;
        break;
      }
      case '@delivery/SET_PROBLEM_REQUEST_SUCCESS': {
        draft.setProblem = true;
        break;
      }
      case '@delivery/SET_PROBLEM_REQUEST_FAILURE': {
        draft.setProblem = false;
        break;
      }
      default:
    }
  });
}
