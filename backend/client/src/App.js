import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
import NavBar from './components/NavBar';


export default class App extends Component{

  render(){
    return(
      <BrowserRouter>
      <div className="container">
        
      <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/adduser" exact component={AddUser}></Route>
        <Route path="/editUser/:id" exact component={EditUser}></Route>
        

      </div>
      </BrowserRouter>
    )
  }
}