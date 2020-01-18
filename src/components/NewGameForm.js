import React, { Component } from 'react';

class NewGameForm extends Component {

    state = {
        gameName: "First Game Whattup",
        numPlayers: "2",
        playerTypes: {
            1: "human",
            2: "cpu",
            3: "human",
            4: "human"
        }
    }

    handleNameChange = (evt) => {
        this.setState({
            gameName: evt.target.value
        })
    }

    handlePlayerChange = (evt) => {
        this.setState({
            numPlayers: evt.target.value
        })
    }

    handlePlayerTypeChange = (playerNum, evt) => {
        let newPlayerTypes = {...this.state.playerTypes}
        newPlayerTypes[playerNum] = evt.target.value
        this.setState({
            playerTypes: newPlayerTypes
        })
    }

    genPlayerTypeDeterminers = () => {
        let num = parseInt(this.state.numPlayers)
        let arr = []
        let hash = {}
        for(let i = 0; i < num; i++){
            hash[i+1] = "human"
            arr.push(i+1)
        }
        return arr.map((playerNum, i) => {
            return (
                <div key={i} id={`player${playerNum}type`}>
                    <label>{`Player ${playerNum}: `}</label>
                    <input onChange={(evt)=>{this.handlePlayerTypeChange(i+1, evt)}} value="human" type="radio" checked={this.state.playerTypes[i+1] == "human"}></input>
                    <input onChange={(evt)=>{this.handlePlayerTypeChange(i+1, evt)}} value="cpu" type="radio" checked={this.state.playerTypes[i+1] == "cpu"}></input>
                </div>
            )
        })
    }

    handleGameStart = (evt) => {
        evt.preventDefault()
        let players = []
        let colors = ["blue", "green", "red", "yellow"]
        let num = parseInt(this.state.numPlayers)
        for(let i = 0; i < num; i++){
            players.push({
                human: this.state.playerTypes[i+1] == "human",
                color: colors[i]
            })
        }
        this.props.startGame(players)
    }

    render() {
        return (
            <form onSubmit={this.handleGameStart} id="newGameForm">
                <div id="gameNameInput">
                    <label>Game Name: </label>
                    <input onChange={this.handleNameChange} name="gameName" value={this.state.gameName}></input>
                </div>
                <div id="numPlayersInput">
                    <label>Number of Players:</label>
                    <label>1</label>
                    <input onChange={this.handlePlayerChange} type="radio" value="1" checked={this.state.numPlayers == "1"}></input>
                    <label>2</label>
                    <input onChange={this.handlePlayerChange} type="radio" value="2" checked={this.state.numPlayers == "2"}></input>
                    <label>3</label>
                    <input onChange={this.handlePlayerChange} type="radio" value="3" checked={this.state.numPlayers == "3"}></input>
                    <label>4</label>
                    <input onChange={this.handlePlayerChange} type="radio" value="4" checked={this.state.numPlayers == "4"}></input>
                </div>
                <div id="playerTypes">
                    {this.state.numPlayers != "" ? this.genPlayerTypeDeterminers() : null}
                </div>
                <div id="gameStart">
                    <button>Open the Game!</button>
                </div>
            </form>
        );
    }
}

export default NewGameForm;