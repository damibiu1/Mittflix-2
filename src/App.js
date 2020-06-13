import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import MyMovieList from './myMovieList';

class App extends React.Component {
 render(){
   return(
     <>
     <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/myList' exact component={MyMovieList}/>

     </Switch>
     </>

   )


 }
}

export default App;
