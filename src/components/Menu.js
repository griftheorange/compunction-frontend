import React, { Component } from 'react'
import Game from './Game'
import NewGameForm from './NewGameForm'


export default class Menu extends Component {

    state = {
        renderingGameForm: true,
        runningGame: false,
        players: null
    }

    handleGameGen = () => {
        this.setState({
            renderingGameForm: true
        })
    }

    genDefaultContent = () => {
        return (
            <>
            {this.props.user ? <h1>Hello {this.props.user.username.charAt(0).toUpperCase() + this.props.user.username.slice(1)}, welcome to COMPUNCTION!</h1> : null}
            <h2>Introduction</h2>
            <p>We made an application mimicing a mobile version of Sorry! We hope you enjoy it!</p>
            </>
        )
    }

    genLoggedInContent = () => {
        return (
            <>
            <button onClick={this.handleGameGen}>Start New Game</button>
            {this.state.renderingGameForm ? <NewGameForm startGame={this.startGame}/> : null}
            </>
        )
    }

    genGameOrMain = () => {
        if(this.state.runningGame){
            return (
                <Game players={this.state.players}/>
            )
        } else {
            return (
                <>
                {this.genDefaultContent()}
                {this.props.user ? this.genLoggedInContent() : null}
                </>
            )
        }
    }

    startGame = (players) => {
        this.setState({
            players: players,
            runningGame: true
        })
    }

    render() {
        return (
            <div className="bottomComponent">
                {this.genGameOrMain()}
            </div>
        )
    }
}
