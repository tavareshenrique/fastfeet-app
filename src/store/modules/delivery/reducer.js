import produce from 'immer';

const INITIAL_STATE = {
  setTakeOrder: false,
  setProblem: false,
  confirmDelivery: false,
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
      case '@delivery/RESET_TAKE_ORDER': {
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
      case '@delivery/RESET_PROBLEM_REQUEST': {
        draft.setProblem = false;
        break;
      }
      case '@delivery/CONFIRM_DELIVERY_REQUEST': {
        draft.confirmDelivery = false;
        break;
      }
      case '@delivery/CONFIRM_DELIVERY_SUCCESS': {
        draft.confirmDelivery = true;
        break;
      }
      case '@delivery/CONFIRM_DELIVERY_FAILURE': {
        draft.confirmDelivery = false;
        break;
      }
      case '@delivery/RESET_CONFIRM_DELIVERY': {
        draft.confirmDelivery = false;
        break;
      }
      default:
    }
  });
}
