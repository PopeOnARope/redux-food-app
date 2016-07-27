import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../actions'
import { filter } from 'lodash'
import Slider from './Slider'


class DrawerColumn extends Component {
  constructor () {
    super()
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }
  handleSliderChange (e) {
    e.preventDefault()
    let flavor = e.target.attributes.id.nodeValue
    let max = e.target.value
    let min = e.target.value - 0.5 >= 0 ? e.target.value - 0.5 : 0
    let preferences = this.props.preferences
    preferences.flavors = filter(preferences.flavors, (obj) => {
      return obj['flavor'] !== flavor
    })
    preferences.flavors.push({flavor, max, min})
    let searchUrl = this.props.searchUrl
    let searchParams = this.props.searchParams
    this.props.dispatch(fetchItems({searchUrl, preferences, searchParams}))
  }
  render () {
    return (
      <div className="drawer-column col-md-12">
        <form className="plm">
          <section id="filters">
          <h3>Filters</h3>
          <div className="divider"></div>
          <Slider onChange={this.handleSliderChange} property="salty"/>
          <Slider onChange={this.handleSliderChange} property="sweet"/>
          <Slider onChange={this.handleSliderChange} property="meaty"/>
          <Slider onChange={this.handleSliderChange} property="piquant"/>
          <Slider onChange={this.handleSliderChange} property="sour"/>
          </section>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let searchUrl = state.searchUrl
  let preferences = state.preferences
  let searchParams = state.searchParams
  return {
    searchUrl,
    preferences,
    searchParams
  }
}

DrawerColumn = connect(mapStateToProps)(DrawerColumn)

export default DrawerColumn
