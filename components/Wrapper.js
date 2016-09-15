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
  toggleSpinner (isFetching) {
    let $ = (id) => {
      return document.getElementById(id)
    }
    console.log('toggle spinner', isFetching);
    let loader = document.createElement('div')
    loader.className = 'loader'
    loader.id = 'loader'
    let backdrop = document.createElement('div')
    backdrop.className = 'loader-backdrop'
    backdrop.id = 'backdrop'

    if(isFetching) {
      console.log('SHOW SPINNER', $('app'));
      $('app').appendChild(backdrop);
      $('app').appendChild(loader);
    } else {
      console.log('SHOW SPINNER', $('app'));
      if($('loader')) {
        $('app').removeChild($('loader'));
        $('app').removeChild($('backdrop'));
      }
    }
  }

  render () {
    console.log('rendering');
    this.toggleSpinner(this.props.isFetching)
    let drawerColumnOpenState = this.props.drawerColumnIsOpen ? 'open' : 'closed'
    let drawerColumnClassName = `drawer-column-container ${drawerColumnOpenState}`
    return (
      <div className={drawerColumnOpenState}>
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
        <div className="drawer-column-container">
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
  let drawerColumnIsOpen = state.drawerColumnIsOpen
  let isFetching = state.isFetching
  // console.log('state from mapStateToProps', state)
  return {
    drawerColumnIsOpen,
    isFetching
  }
}

Wrapper = connect(mapStateToProps)(Wrapper)
export default Wrapper
