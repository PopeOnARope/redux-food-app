import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'


class DrawerColumn extends Component {
  render () {
    return (
      <div className="drawer-column">
        <h4>Filters</h4>
        <form className="plm">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">Salty</label>
            <div className="col-sm-10">
              <input type="range" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

DrawerColumn = connect()(DrawerColumn)

export default DrawerColumn
