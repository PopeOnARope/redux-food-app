import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions'
import { clone } from 'lodash'

class RecipeBody extends Component {
  componentDidMount () {
    // console.log('props from recipe', this.props)
    this.props.dispatch(fetchRecipe (this.props.id))
  }
  render () {
    return (
        <h1> RecipeBody </h1>
    )
  }
}

const mapStateToProps = (state) => {
	let _state = clone(state)
	return {
		_state
	}
}

RecipeBody = connect(mapStateToProps)(RecipeBody)


export default RecipeBody;
