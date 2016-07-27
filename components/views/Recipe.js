import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchItems } from '../actions'
import { clone } from 'lodash'
import RecipeBody from '../RecipeBody'

class Recipe extends Component {
  render () {
    console.log('props from recipe', this.props)
    return (
      <div>
        <h1> Recipe </h1>
        <RecipeBody id={this.props.params.id}/>
      </div>
    )
  }
}

export default Recipe;
