import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchItems } from '../actions'
import { clone } from 'lodash'
import RecipeBody from '../RecipeBody'

class Recipe extends Component {
  render () {
    // console.log('props from recipe', this.props)
    return (
      <RecipeBody id={this.props.params.id}/>
    )
  }
}

export default Recipe;
