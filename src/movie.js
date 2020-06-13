import React, { Component } from 'react'

export default class Movie extends Component {

  render() {
   const  {movie, toggleMyList} = this.props
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
                  <div data-toggled={movie.my_list} className="listToggle" onClick={() => toggleMyList(movie)}>
                    <div >
                      <i className="fa fa-fw fa-plus"></i>
                      <i className="fa fa-fw fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}
