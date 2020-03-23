import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

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

    console.tron.log('response', response.data);

    if (response.data.length === 0) {
      yield put(signFailure());
      Alert.alert('Falha na autenticação', 'ID de cadastro não encontrado');
      return;
    }

    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados',
    );
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
