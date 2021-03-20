import * as actions from "../actions/index";
import axios from '../../api/HttpClient'

import { takeEvery ,call } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions



export function* createPostSaga(action) {
    const userData = {
        email: action.email,
        name: action.password,
        age: action.age
      };
    try {
      yield call(axios.post, "/user", userData);
    } catch (error) {
      console.log(error);
    }
  }

  export function* getusers() {

    console.log('Hello getusers Sagas!')
  }

  export function* helloSaga() {
    console.log('Hello Sagas!')
  }

  export function* watchAuth() {
    yield takeEvery(actionTypes.ADD_USER, createPostSaga);
    yield takeEvery(actionTypes.GET_USERS, getusers);
 
  }