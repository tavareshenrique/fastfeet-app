import { takeLatest, call, put, all } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import { translateErrorMessages } from 'fastfeet-translation-errors';

import api from '~/services/api';

import {
  takeOrderRequestSuccess,
  takeOrderRequestFailure,
  setProblemSuccess,
  setProblemFailure,
  confirmDeliverySuccess,
  confirmDeliveryFailure,
} from './actions';

export function* takeOrder({ payload }) {
  try {
    const { deliverymanId, orderId } = payload;
    const start_date = new Date();

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
      description: translateErrorMessages(err.response.data.error),
      type: 'danger',
    });
    yield put(takeOrderRequestFailure());
  }
}

export function* setProblem({ payload }) {
  try {
    const { id, description } = payload;

    yield call(api.post, `delivery/${id}/problems`, {
      description,
    });

    yield put(setProblemSuccess());
    showMessage({
      message: 'Obrigado!',
      description: 'Problema informado!',
      type: 'success',
    });
  } catch (err) {
    showMessage({
      message: 'Ops!',
      description: 'Falha ao informar o problema',
      type: 'danger',
    });
    yield put(setProblemFailure());
  }
}

export function* confirmDelivery({ payload }) {
  try {
    const { deliverymanId, orderId, signature_id } = payload;
    const end_date = new Date();

    yield call(
      api.put,
      `deliverymen/${deliverymanId}/orders/${orderId}/status`,
      { end_date, signature_id },
    );

    yield put(confirmDeliverySuccess());
    showMessage({
      message: 'Parabéns',
      description: 'Obrigado por entregar a encomenda!',
      type: 'success',
    });
  } catch (err) {
    showMessage({
      message: 'Ops!',
      description:
        'Houve um problema ao marcar essa encomenda como entregeu, tente novamente!',
      type: 'danger',
    });
    yield put(confirmDeliveryFailure());
  }
}

export default all([
  takeLatest('@delivery/TAKE_ORDER_REQUEST', takeOrder),
  takeLatest('@delivery/SET_PROBLEM_REQUEST', setProblem),
  takeLatest('@delivery/CONFIRM_DELIVERY_REQUEST', confirmDelivery),
]);
