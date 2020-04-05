import { takeLatest, call, put, all } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import { translateErrorMessages } from 'fastfeet-translation-errors';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, 'deliverymen', {
      params: {
        id,
      },
    });

    if (response.data.length === 0) {
      yield put(signFailure());
      showMessage({
        message: 'Falha na autenticação!',
        description: 'ID de cadastro não encontrado!',
        type: 'danger',
      });
      return;
    }

    yield put(signInSuccess(response.data));
  } catch (err) {
    showMessage({
      message: 'Falha na autenticação!',
      description: translateErrorMessages(err.response.data.error),
      type: 'danger',
    });
    yield put(signFailure());
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
