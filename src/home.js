import React, { Component } from 'react'
import MovieList from './movieList'
import * as MovieAPI from './MovieAPI';

export default class Home extends Component {
  state ={
    allmovies: [],
    movies : [],
    genres : [],
    searchCount: 0,
    searchValue:''
  }

  componentDidMount = () => {
    MovieAPI.genres().then(
      genres => {
        genres.sort((a,b) => {
          if(a.name.toUpperCase() < b.name.toUpperCase()){
            return -1;
          }
          else if (b.name.toUpperCase() > a.name.toUpperCase()){
            return 1;
          }
          return 0;
        } )
        this.setState({genres})
      }

    )
    this.getAllMovies();

  }
  toggleMyList = (movie) => {
    movie.my_list ? MovieAPI.removeFromList(movie).then(res => this.getAllMovies())
    : MovieAPI.addToList(movie).then(res => this.getAllMovies())
  }

  getAllMovies= ()=>{
    MovieAPI.getAll().then(
      movies => {
        this.setState({movies, allmovies: movies})
      }
      )

  }

  performSearch = (event)  =>{
    let searchedMovies = this.state.allmovies.filter(movie =>
       movie.title.includes(this.state.searchValue
        ))
    this.setState({searchValue: event.target.value, movies: searchedMovies , searchCount: searchedMovies.length})

  }

  render = () => {


    return (
      <>
       <header className="header">
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
          </a>
          <div id="navigation" className="navigation">
            <nav>
              <ul>
                <li><a href="/myList">My List</a></li>
              </ul>
            </nav>
          </div>
          <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." value={this.state.searchValue} onChange={this.performSearch}/>
            <div className="searchResults">
            {this.state.searchValue !== ''? `Found ${this.state.searchCount} movies with the query "${this.state.searchValue}"`: ''}
            </div>
          </form>
        </header>
        <MovieList genres={this.state.genres} movies={this.state.movies} toggleMyList={this.toggleMyList}/>


      </>

    );
  }
}
