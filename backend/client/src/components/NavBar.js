import React, {Component} from 'react';
import logo from './user logo.png';

export default class NavBar extends Component{

  render(){
    
      return(
        <div>
           <nav className="navbar navbar-light bg-light">
              <form className="container-fluid justify-content-start">

              
              <img src={logo} alt="" width="60" height="50" class="d-inline-block align-text-top"/>
             <a className ="nav-link" aria-current="page" href="http://localhost:3000/"><b>USERS</b></a>
            
            </form>
             
          </nav>
  
        </div>
      )
    }
  }