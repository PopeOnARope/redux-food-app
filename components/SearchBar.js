import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'


class SearchBar extends Component {
  constructor () {
    super()
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleParamsChange = this.handleParamsChange.bind(this)
  }
  componentDidMount () {
    let preferences = this.props.preferences
    this.props.dispatch(fetchItems({searchParams: '', preferences}))
  }
  handleButtonClick (e) {
    e.preventDefault()
    let searchParams = this.state.searchParams
    let searchUrl = this.props.searchParams
    let preferences = this.props.preferences
    //this can probably be moved to mapdispatchtoprops
    this.props.dispatch(fetchItems({searchParams, searchUrl, preferences}))
  }
  handleParamsChange (e) {
    this.setState({searchParams: e.target.value})
  }
  render () {
    return (
      <form className="form-inline pull-xs-right">
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

const mapStateToProps = (state) => {
  let searchUrl = state.searchUrl
  let preferences = state.preferences
  return {
    searchUrl,
    preferences
  }
}

SearchBar = connect(mapStateToProps)(SearchBar)

export default SearchBar
