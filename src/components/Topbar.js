import React, { Component } from 'react';

class Topbar extends Component {

    handleLoginClick = () => {
        this.props.setAttemptingLogin(true)
    }

    handleLogoutClick = () => {
        this.props.setLoggedIn(null)
    }

    genLogButton = () => {
        return this.props.loggedIn ? <button onClick={this.handleLogoutClick}>Logout</button> : <button onClick={this.handleLoginClick}>Login</button>
    }

    render() {
        return (
            <div className="topbar">
                {this.genLogButton()}
            </div>
        );
    }
}

export default Topbar;