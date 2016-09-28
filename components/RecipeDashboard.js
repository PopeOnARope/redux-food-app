import React, { Component } from 'react'
import { each } from 'lodash'
import { saveRecipe, fetchRecipe } from '../actions'

class RecipeDashboard extends Component {
  constructor () {
    super()
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this)
  }
  handleSaveButtonClick (e) {
    e.preventDefault()
    console.log('props from recipe dashboard save', this.props.id)
    var props = this.props;
    this.props.dispatch(fetchRecipe, props.id)
  }
  render () {

    return (
      <div>
        <div className="row">
          <div className="col-sm-3 col-xs-3">
          <h5 className="dashboard-label text-muted">Total Time</h5>
            {this.props.totalTime}
          </div>
          <div className="col-sm-3 col-xs-3">
          <h5 className="dashboard-label text-muted">Yield</h5>
            {this.props.yield}
          </div>
          <div className="col-sm-3 col-xs-3">
          <h5 className="dashboard-label text-muted">Ingreedient Count</h5>
            {this.props.ingredientLines.length}
          </div>
          <div className="col-sm-3 col-xs-3">
          <h5 className="dashboard-label text-muted">Rating</h5>
            {this.props.rating}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary btn-block" onClick={this.handleSaveButtonClick}>save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeDashboard;
