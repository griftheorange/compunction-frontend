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
        .then(r => r.json())
        .then(user => this.props.setLoggedIn(user))
    }

    handleLogin = () => {
    }

    render() {
        return (
            <div>
                <p>Login or Create New User</p>
                <label>Username:</label>
                <input name="userField" onChange={this.handleChange} value={this.state.userField}></input>
                <label>Password:</label>
                <input name="passField" onChange={this.handleChange} value={this.state.passField}></input>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleCreate}>Create New User</button>
            </div>
        );
    }
}

export default Login;