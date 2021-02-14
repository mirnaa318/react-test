import logo from './logo.svg';
import {Provider} from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import displayCards from './js/components/displayCards';
import ReactDOM from 'react-dom'
//import TodoApp from './TodoApp'
import store from './redux/store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <displayCards />
  </Provider>,
  rootElement
)
