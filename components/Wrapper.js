import React, { Component } from 'react'
import { Link } from 'react-router'
import SearchBar from './SearchBar'
import DrawerColumn from './DrawerColumn'
import { toggleDrawerColumn } from '../actions'
import { connect } from 'react-redux'

class Wrapper extends Component {
  constructor () {
    super()
    this.toggleDrawerColumn = this.toggleDrawerColumn.bind(this)
  }
  toggleDrawerColumn (e) {
    e.preventDefault()
    this.props.dispatch(toggleDrawerColumn(!this.props.drawerColumnIsOpen))
  }
  componentWillReceiveProps (newProps) {
    console.log(newProps)
  }
  render () {
    let drawerColumnOpenState = this.props.drawerColumnIsOpen ? 'open' : 'closed'
    let drawerColumnClassName = `drawer-column-container ${drawerColumnOpenState}`
    console.log(drawerColumnOpenState)
    return (
      <div>
        <div className="app-header-container">
          <nav className="navbar navbar-inline flex mtm">
            <ul className="nav navbar-nav">
              <li className="nav-item"><a href="#" onClick={this.toggleDrawerColumn}><span className="underline">=</span></a></li>
              <li className="nav-item"><a href="/#">Home <span className="sr-only">(current)</span></a></li>
              <li className="nav-item"><a href="/#meals">Your Meals <span className="sr-only">(current)</span></a></li>
            </ul>
            <SearchBar/>
          </nav>
        </div>
        <div className="container-fluid">
        <div className={drawerColumnClassName}>
          <DrawerColumn/>
        </div>
        <div className="main">
          {this.props.children}
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  var drawerColumnIsOpen = state.drawerColumnIsOpen
  return {
    drawerColumnIsOpen: drawerColumnIsOpen
  }
}

Wrapper = connect(mapStateToProps)(Wrapper)
export default Wrapper
