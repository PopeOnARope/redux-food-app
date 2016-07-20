import React, { Component } from 'react'
import SearchBar from '../SearchBar'
import SearchResults from '../SearchResults'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Search</h3>
          <SearchBar/>
          <SearchResults/>
        </div>
      </div>
    )
  }
}

export default Home
