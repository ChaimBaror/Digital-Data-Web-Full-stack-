import * as actionTypes from "../actions/actionTypes";
import { call, put } from "redux-saga/effects";
import axios from '../../api/HttpClient'
import * as actions from '../actions/index';


export function* createPostSaga(action) {
  console.log("create Post Saga action");
  const userData = action.payload;
  try {
    const response = yield call(axios.post,"/user", userData)
    yield put({ type: actionTypes.POST_SUCCESS, response })
  } catch (error) {
    console.log("Status: " + error + ", Message: " + error.message);
    yield put({ type: actionTypes.POST_ERROR, error })
  }
}


export function* getUsers() {
  try {
    const resp = yield axios.get('/user');
    const payload = [];
    for (let key in resp.data) {
      payload.push({
        ...resp.data[key],
      });
    }
    yield put({ type: actionTypes.POST_SUCCESS, payload })
  } catch (error) {
    yield put({ type: actionTypes.POST_ERROR, error })
  }
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}

