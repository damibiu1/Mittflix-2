import React, { Component } from 'react'
import * as MovieAPI from './MovieAPI';
import Movie from './movie';
import MovieList from './movieList';

export default class MyMovieList extends Component {
  state = {
    my_list: [],
    searchValue: '',
    searchCount: 0
  }
  componentDidMount = () => {
  this.getMyList()

  }

  getMyList= () => {
    MovieAPI.getAll().then( movies => {
        this.setState({my_list: movies})
    })

  }

  performSearch = (event) => {
    let searchedMovies = this.state.my_list.filter(movie => movie.my_list && movie.title.includes(event.target.value))
   let  count = searchedMovies.length
   this.setState({searchValue: event.target.value, my_list: searchedMovies, searchCount: count})
  }

  toggleMyList = (movie) => {
    movie.my_list ? MovieAPI.removeFromList(movie).then(res => this.getMyList())
    : MovieAPI.addToList(movie).then(res => this.getMyList)
  }

  render() {
    const {my_list} = this.state
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
    <div className="titleList">
         <div className="title">
           <h1>My List</h1>
            <div className="titles-wrapper">
              {my_list.filter(movie => movie.my_list).map(movie => <Movie movie={movie} key={movie.id} toggleMyList={this.toggleMyList}/>)}
              </div>
              </div>
              </div>
    </>
    )
  }
}
