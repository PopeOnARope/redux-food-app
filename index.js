import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import state from './reducers'
import App from './components/App'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

const store = createStore(
  state,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
