export function takeOrderRequest(deliverymanId, orderId) {
  return {
    type: '@delivery/TAKE_ORDER_REQUEST',
    payload: {
      deliverymanId,
      orderId,
    },
  };
}

export function takeOrderRequestSuccess() {
  return {
    type: '@delivery/TAKE_ORDER_REQUEST_SUCCESS',
  };
}

export function takeOrderRequestFailure() {
  return {
    type: '@delivery/TAKE_ORDER_REQUEST_FAILURE',
  };
}

export function setProblemRequest(id, description) {
  return {
    type: '@delivery/SET_PROBLEM_REQUEST',
    payload: {
      id,
      description,
    },
  };
}

export function setProblemSuccess() {
  return {
    type: '@delivery/SET_PROBLEM_REQUEST_SUCCESS',
  };
}

export function setProblemFailure() {
  return {
    type: '@delivery/SET_PROBLEM_REQUEST_FAILURE',
  };
}
