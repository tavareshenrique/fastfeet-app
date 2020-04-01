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

export function resetTakeOrder() {
  return {
    type: '@delivery/RESET_TAKE_ORDER',
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

export function confirmDeliveryRequest(deliverymanId, orderId, signature_id) {
  return {
    type: '@delivery/CONFIRM_DELIVERY_REQUEST',
    payload: {
      deliverymanId,
      orderId,
      signature_id,
    },
  };
}

export function confirmDeliverySuccess() {
  return {
    type: '@delivery/CONFIRM_DELIVERY_SUCCESS',
  };
}

export function confirmDeliveryFailure() {
  return {
    type: '@delivery/CONFIRM_DELIVERY_FAILURE',
  };
}

export function resetConfirmDelivery() {
  return {
    type: '@delivery/RESET_CONFIRM_DELIVERY',
  };
}
