import React, { Component } from 'react'
import { Link } from 'react-router'
import SearchBar from './SearchBar'

class Wrapper extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-inline flex">
          <ul className="nav navbar-nav">
            <li className="nav-item"><a href="/#">Home <span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a href="/#meals">Your Meals <span className="sr-only">(current)</span></a></li>
          </ul>
          <SearchBar/>
        </nav>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper;
