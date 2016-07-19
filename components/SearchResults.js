import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'


class SearchResults extends Component {
	constructor () {
		super()
		var self = this
		var reportState = function () {
			setTimeout(function () {
				console.log('results state, props', self.state, self.props, self)
				reportState()
				self.render()
			}, 3000);
		}
		reportState()
	}
	componentWillReceiveProps (newProps) {
		console.log('new props', newProps)
	}
  render () {
    return (
      <div>
				<h3>Results</h3>
			</div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		items: state.searchResults
	}
}

SearchResults = connect(mapStateToProps)(SearchResults)

export default SearchResults
