import React from 'react';
import Movie from './movie'
import * as MovieAPI from './MovieAPI';

class App extends React.Component {
  state ={
    movies : []
  }

  componentDidMount = () => {
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
      <div className="titleList">
         <div className="title">
            <div className="titles-wrapper">
              <div className="movie"></div>
      {this.state.movies.map(
        movie => (
          <div key={movie.title}>
          <Movie movie={movie}/>
          </div>
          )

          )
        }
        </div>
        </div>
        </div>
      </>
      
    );
  }
}

export default App;
