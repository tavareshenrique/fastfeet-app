import { takeLatest, call, put, all } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

import api from '~/services/api';

import { takeOrderRequestSuccess, takeOrderRequestFailure } from './actions';

export function* takeOrder({ payload }) {
  try {
    const { deliverymanId, orderId } = payload;
    const date = new Date();
    const dateTimezone = date.setHours(date.getHours() - 3);
    const start_date = new Date(dateTimezone);

    yield call(
      api.put,
      `deliverymen/${deliverymanId}/orders/${orderId}/status`,
      { start_date },
    );

    yield put(takeOrderRequestSuccess());
    showMessage({
      message: 'Ótimo',
      description: 'Encomenda retirada com sucesso!',
      type: 'success',
    });
  } catch (err) {
    showMessage({
      message: 'Ops!',
      description:
        'Você já atingiu o maximo de retirada de encomendas por dia(5) ou a horário de retirada não permitido, tente mais tarde!',
      type: 'danger',
    });
    yield put(takeOrderRequestFailure());
  }
}

export default all([takeLatest('@delivery/TAKE_ORDER_REQUEST', takeOrder)]);