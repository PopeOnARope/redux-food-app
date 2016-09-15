import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions'
import { clone } from 'lodash'
import RecipeDashboard from './RecipeDashboard'

class RecipeBody extends Component {
  componentWillMount () {
    // console.log('props from recipe', this.props)
    this.props.dispatch(fetchRecipe (this.props.id))
  }
  render () {
    if(this.props.currentRecipe) {
      console.log('recipe body pros', this.props.currentRecipe.data)
      let props = this.props.currentRecipe.data
      let imageUrl = props.images && props.images[0] && props.images[0].hostedLargeUrl ? `${props.images[0].hostedLargeUrl.substring(0, props.images[0] && props.images[0].hostedLargeUrl.length - 4)}s730-e365` : ""

      return (
        <div>
          <div className="jumbotron recipe-header">
            <div className="row">
              <div className="col-md-6 recipe-header-block">
                <h3>{props.name}</h3>
                <span className="recipe-subheading">from <a href={props.source.sourceRecipeUrl}>{props.source.sourceDisplayName}</a></span>
              </div>
              <div className="col-md-6 recipe-header-img">
              <div className="arrow arrow-right"></div>
                <img src={imageUrl}/>
              </div>
            </div>
          </div>
          <div className="recipe-body container">
            <RecipeDashboard totalTime={props.totalTime} yield={props.yield} ingredientLines= {props.ingredientLines} rating={props.rating}/>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
	let currentRecipe = state.currentRecipe
	return {
    currentRecipe
	}
}

RecipeBody = connect(mapStateToProps)(RecipeBody)


export default RecipeBody;
