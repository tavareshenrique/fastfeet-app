import produce from 'immer';

const INITIAL_STATE = {
  setTakeOrder: false,
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
      default:
    }
  });
}
