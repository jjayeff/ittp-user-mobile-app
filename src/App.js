import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reduxModules';
import Router from './router';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

export default class App extends Component {
  render() {
    sagaMiddleware.run(rootSaga);    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
