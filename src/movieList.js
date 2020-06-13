import React, { Component } from 'react'
import Movie from './movie'

export default class MovieList extends Component {
  render() {
    const {genres, movies, toggleMyList} = this.props

    return (
      <>

      {genres.map(
        genre=> (
          <div key={genre.id} className="titleList">
         <div className="title">
           <h1>{genre.name}</h1>
            <div className="titles-wrapper">

            {movies.filter(movie  => movie.genre_ids.includes(genre.id)).map(movie => (
              <Movie movie={movie} key={movie.id} toggleMyList={this.props.toggleMyList}/>
            ))}

          </div>
          </div>
        </div>

          )

          )
        }
        </>
    )
  }
}
