import React, { Component } from 'react'
import { Link } from 'react-router'
// import SearchBar from '../containers/SearchBar'

class Wrapper extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className="active"><a href="/#">Home <span className="sr-only">(current)</span></a></li>
            <li className=""><a href="/#meals">Your Meals <span className="sr-only">(current)</span></a></li>
            <li className=""><a href="/#search">Search <span className="sr-only">(current)</span></a></li>
          </ul>
        </nav>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper;
