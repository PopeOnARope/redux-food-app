import React, { Component } from 'react'
import { each } from 'lodash'

class RecipeDashboard extends Component {
  render () {

    return (
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
    )
  }
}

export default RecipeDashboard;
