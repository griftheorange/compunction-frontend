import React, { Component } from 'react';
import './App.css';

import Login from './components/Login'
import Menu from './components/Menu'
import Topbar from './components/Topbar'
import userAdapter from './adaptors/userFetch'

class App extends Component {

  state = {
    loggedIn: null,
    attemptingLogin: false
  }

  setDefaultState = () => {
    userAdapter.getUsers()
    .then((users) => {
      let found = users.find((user) => {
        return user.username == "griffin"
      })
      this.setState({
        loggedIn: found
      })
    })
  }

  setLoggedIn = (user) => {
    if(user){
      if(user["error"]){
        alert(user["error"])
      } else {
        this.setState({
          loggedIn: user,
          attemptingLogin: false
        })
      }
    } else {
      this.setState({
        loggedIn: null,
        attemptingLogin: false
      })
    }
  }

  setAttemptingLogin = (bool) => {
    this.setState({
      attemptingLogin: bool
    })
  }

  menuOrLogin = () => {
    if(this.state.attemptingLogin){
      return <Login setLoggedIn={this.setLoggedIn}/>
    } else {
      return (
        <>
        <Topbar setAttemptingLogin={this.setAttemptingLogin}
                loggedIn={this.state.loggedIn}
                setLoggedIn={this.setLoggedIn}/>
        <Menu user={this.state.loggedIn}/>
        </>
      )
    }
  }

  // componentDidMount(){
  //   this.setDefaultState()
  // }

  render(){
    return (
      <div>
        {this.menuOrLogin()}
      </div>
    );
  }
}

export default App;
