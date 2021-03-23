import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from "../actions/actionTypes";
import { createPostSaga , getUsers } from './saga';


export function* watchUsers() {
    yield takeEvery(actionTypes.ADD_USER, createPostSaga);
    yield takeEvery(actionTypes.GET_USERS, getUsers);
 
  }