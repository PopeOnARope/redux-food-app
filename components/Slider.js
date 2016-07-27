import React, { Component } from 'react'


class Slider extends Component {
  render () {
    return (
      <div className="col-sm-10">
        <div className="form-group">
          <label htmlFor={this.props.property} className="col-sm-2 form-control-label">{this.props.property}</label>
          <input type="range" className="form-control" id={this.props.property} min="0" max="1" step="0.1" onChange={this.props.onChange}/>
        </div>
      </div>
    )
  }
}

export default Slider
