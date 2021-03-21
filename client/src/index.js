import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import reducer from './store/reducers/users';
import createSagaMiddleware from 'redux-saga';

import { watchUsers } from './store/sagas/index'
const sagaMiddleware = createSagaMiddleware()
// const store = createStore(reducer)

const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchUsers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
