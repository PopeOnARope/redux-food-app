import React, { Component } from 'react'
import Wrapper from './Wrapper'
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'
import Home from './views/Home'
import Search from './views/Search'
import styles from '../sass/main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Router history={hashHistory}>
            <Route path="/" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
          </Router>
        </Wrapper>
      </div>
    )
  }
}

export default App
