import React, { Component } from 'react';
import userAdapter from '../adaptors/userFetch'

class Login extends Component {

    state = {
        userField: "",
        passField: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleCreate = (evt) => {
        userAdapter.createUser(this.state.userField, this.state.passField)
        .then(user => this.props.setLoggedIn(user))
    }

    handleLogin = () => {
        userAdapter.getUsers()
        .then((users) => {
            let found = users.find((user) => {
                return user.username == this.state.userField
            })
            if(found){
                if(found.password == this.state.passField){
                    this.props.setLoggedIn(found)
                } else {
                    this.props.setLoggedIn({error: "That password is incorrect"})
                }
            } else {
                this.props.setLoggedIn({error: "No user found matching that username"})
            }
        })
    }

    handleLogout = () => {

    }

    render() {
        return (
            <div>
                <p>Login or Create New User</p>
                <label>Username:</label>
                <input name="userField" onChange={this.handleChange} value={this.state.userField}></input>
                <label>Password:</label>
                <input type="password" name="passField" onChange={this.handleChange} value={this.state.passField}></input>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleCreate}>Create New User</button>
            </div>
        );
    }
}

export default Login;