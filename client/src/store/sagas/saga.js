import * as actionTypes from "../actions/actionTypes";
import {call ,put} from "redux-saga/effects";
import axios from '../../api/HttpClient'
import * as actions from '../actions/index';


export function* createPostSaga(action) {
  console.log("create Post Saga action");
    const userData = action.userName
    try {;
      const response = yield call(axios.post,"/user", userData)
      yield put({ type: actionTypes.ADD_USER, response })
    } catch (error) {
      yield put({ type: actionTypes.POST_ERROR, error })
    }
  }
  
  export function* getusers() {

    try {
        const resp = yield axios.get('/user');
        yield put(actions.getAllUsers(resp.data));
        } catch (error) {
           console.log(error); 
   }
  }

  export function* helloSaga() {
    console.log('Hello Sagas!')
  }

 