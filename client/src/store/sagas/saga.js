import * as actionTypes from "../actions/actionTypes";
import { call, put } from "redux-saga/effects";
import axios from '../../api/HttpClient'
import * as actions from '../actions/index';


export function* createPostSaga(action) {
  console.log("create Post Saga action");
  const userData = action.payload
  try {
    ;
    const response = yield axios.post("/user", userData)
    yield put({ type: actionTypes.POST_SUCCESS, response })
  } catch (error) {
    console.log("Status: " + error + ", Message: " + error.message);
    yield put({ type: actionTypes.POST_ERROR, error })
  }
}


export function* getusers() {
console.log("getusers");
  try {
    const resp = yield axios.get('/user');
    const usersdb = [];
    for (let key in resp.data) {
      usersdb.push({
        ...resp.data[key],
      });
    }
    yield put(actions.getAllUsers(usersdb));
  } catch (error) {
    yield put({ type: actionTypes.POST_ERROR, error })
  }
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}

