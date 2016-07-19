import React, { Component } from 'react'
import SearchBar from '../SearchBar'

class Home extends Component {
  render() {
    console.log('home')
    return (
      <div className="panel">
        <h3>Search</h3>
        <SearchBar/>
      </div>
    )
  }
}

export default Home
