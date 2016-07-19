import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'


class SearchBar extends Component {
  constructor () {
    super()
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleParamsChange = this.handleParamsChange.bind(this)
  }
  handleButtonClick (e) {
    e.preventDefault()
    //this can probably be moved to mapdispatchtoprops
    this.props.dispatch(fetchItems(this.state.searchParams))
  }
  handleParamsChange (e) {
    this.setState({searchParams: e.target.value})
  }
  render () {
    return (
      <form>
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" onClick={this.handleButtonClick} >Go!</button>
          </span>
          <input type="text" className="form-control" value={this.props.params} onChange={this.handleParamsChange}/>
        </div>
      </form>
    )
  }
}

SearchBar = connect()(SearchBar)

export default SearchBar
