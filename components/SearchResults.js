import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'
import { each } from 'lodash'
import Card from './Card'


class SearchResults extends Component {

	componentWillReceiveProps (newProps) {
	}
  render () {
		let items = this.props.searchResults && this.props.searchResults.length ? this.props.searchResults.map((item) => {
			return <Card key={item.key} {...item}></Card>
		}) : ""
    return (
      <div>
				<div className="row">
    			{items}
    		</div>
			</div>
    )
  }
}

const mapStateToProps = (state) => {
	let searchResults = state.searchResults
	return {
		searchResults
	}
}

SearchResults = connect(mapStateToProps)(SearchResults)

export default SearchResults
