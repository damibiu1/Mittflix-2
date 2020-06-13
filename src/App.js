import React from 'react';
import MovieList from './movieList'
import * as MovieAPI from './MovieAPI';

class App extends React.Component {
  state ={
    movies : [],
    genres : [],

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
        console.log(genres)
        this.setState({genres})
      }
    )
    MovieAPI.getAll().then(
      movies => {
        this.setState({movies})
        console.log(movies)
      }
      )
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
            <input type="search" placeholder="Search for a title..." value="" />
            <div className="searchResults"></div>
          </form>
        </header>
        <MovieList genres={this.state.genres} movies={this.state.movies}/>


      </>

    );
  }
}

export default App;
