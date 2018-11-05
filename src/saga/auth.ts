import { call, put } from 'redux-saga/effects';

import { getUser, handleOAuthLogin } from '../util/firebase/auth';
import { SagaIterator } from 'redux-saga';
import { loginStateChanged } from '../actions/auth';

export function* handleOAuthAndSignIn(): SagaIterator {
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  if (code) {
    yield call(handleOAuthLogin, code);
  }

  const u: firebase.User | null = yield call(getUser);
  yield put(loginStateChanged(u));
}
