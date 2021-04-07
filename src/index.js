import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  Provider } from 'react-redux';
import combineReducer from './combineReducer/combineReducer';
import { createStore } from 'redux';
const studentStore=createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(

    <Provider store={studentStore}>
    <App/>
    </Provider>
  ,
  document.getElementById('root')
);

