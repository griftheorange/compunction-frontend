import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login'
import Menu from './components/Menu'

class App extends Component {

  state = {
    loggedIn: null
  }

  setLoggedIn = (user) => {
    if(user["error"]){
      alert(user["error"])
    } else this.setState({
      loggedIn: user
    })
  }

  loggedInDeterminer = () => {
    if(this.state.loggedIn){
      
    } else {
      return <Login setLoggedIn={this.setLoggedIn}/>
    }
  }

  render(){
    return (
      // this.loggedInDeterminer()
      <div>
      <Login setLoggedIn={this.setLoggedIn}/>
      {/* Login/SignIn */}
        <Menu/>
      </div>
    );
  }
}

export default App;
