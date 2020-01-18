import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login'
import Mendu from './components/Menu'

class App extends Component {

  state = {
    loggedIn: null
  }

  setLoggedIn = (user) => {
    this.setState({
      loggedIn: user
    }, ()=>{console.log(this.state)})
  }

  render(){
    return (
      <div>
      <Login setLoggedIn={this.setLoggedIn}/>
      {/* Login/SignIn */}
      <Menu  />
      </div>
    );
  }
}

export default App;
