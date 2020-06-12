import React, { Component } from 'react'

export default class Movie extends Component {

  render() {
   const  {movie} = this.props
    console.log(this.props)
    return (
     <div className="movie">
                <img
                  src = {this.props.movie.poster_path}
                />
                <div className="overlay">
                  <div className="title">{movie.title}</div>
                  <div className="rating">{movie.rating}</div>
                  <div className="plot">
                    {movie.overview}
                  </div>
                  <div data-toggled="false" className="listToggle">
                    <div>
                      <i className="fa fa-fw fa-plus"></i
                      ><i className="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}