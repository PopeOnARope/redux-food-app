import React, { Component } from 'react'
import { Link } from 'react-router'
// import SearchBar from '../containers/SearchBar'

class Card extends Component {
  render () {
    console.log('card props', this.props.smallImageUrls[0])
    var props=this.props
    var imageUrl = props.smallImageUrls ? props.smallImageUrls[0].substring(0, props.smallImageUrls[0].length - 4) : ""
    console.log('img', imageUrl)
    return (
      <div className="card col-md-3 col-sm-6 col-xs-12">
        <img className="card-img" src={imageUrl} alt="Card image cap"/>
      </div>
    )
  }
}

export default Card;
