import React, { Component } from 'react'
import { Link } from 'react-router'
// import SearchBar from '../containers/SearchBar'

class Card extends Component {
  render () {
    console.log('card props', this.props.smallImageUrls[0])
    var props=this.props
    var imageUrl = props.smallImageUrls ? `${props.smallImageUrls[0].substring(0, props.smallImageUrls[0].length - 4)}=s480-c-e365` : ""
    console.log('img', imageUrl)
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 pan">
        <a href="#">
          <div className="card">
            <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
            <div className="card-block">
              <p className="card-text">{props.recipeName}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default Card;
