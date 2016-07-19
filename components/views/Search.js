import React, { Component } from 'react'
import SearchBar from '../SearchBar'
import SearchResults from '../SearchResults'

class Home extends Component {
  render() {
    console.log('home')
    return (
      <div className="panel">
        <div className="panelBody">
          <h3>Search</h3>
          <SearchBar/>
          <SearchResults/>
        </div>
      </div>
    )
  }
}

export default Home
