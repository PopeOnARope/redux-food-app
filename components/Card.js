import React, { Component } from 'react'
import { Link } from 'react-router'
import LazyLoad from 'react-lazy-load'
// import SearchBar from '../containers/SearchBar'

class Card extends Component {
  render () {
    var props=this.props
    var imageUrl = props.smallImageUrls ? `${props.smallImageUrls[0].substring(0, props.smallImageUrls[0].length - 4)}=s480-c-e365` : ""
    return (
      <LazyLoad offset={100}>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 pan">
          <a href={`/#/${props.id}`}>
            <div className="card">
              <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
              <div className="card-block">
              <h4 className="card-text">{props.recipeName}</h4>
              </div>
            </div>
          </a>
        </div>
      </LazyLoad>
    )
  }
}

export default Card;
