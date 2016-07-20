import React, { Component } from 'react'
import SearchResults from '../SearchResults'

class Home extends Component {
  render() {
    console.log('home')
    return (
      <div>
        <SearchResults/>
      </div>
    )
  }
}

export default Home
