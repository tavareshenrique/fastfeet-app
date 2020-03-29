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
