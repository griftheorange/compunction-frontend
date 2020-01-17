import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login'


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
      <Login setLoggedIn={this.setLoggedIn}/>
    );
  }
}

export default App;
