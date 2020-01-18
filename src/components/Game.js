import React, { Component } from 'react'
import Board from './Board'
import Pieces from './Pieces'
import Players from './Players'
import Tile from './Tile'

export default class Game extends Component {

    state = {
        currentRoll:0,
        players : [],
        sprites : {
            sprite: [1,2,3,4]
        },
        whiteTiles : [],
        homeBases:[],
        
        finishLine: {
            color : []
        }
    }

    handleRoll = (dice) =>{
        this.setState({
            currentRoll : dice 
        })
    }

    initializePlayerTiles  = () => {

    }

    componentDidMount(){
        //fetch 
    }

    checkGameOptions = () => {

    }

    startGame = () =>{
        //Get user from login 
        //Pass the player to  a house
        //Pass Dice from Borad.state as a random number 
        //depending on dice if dice = 6 put it on the first white tile. 
        // && sprites
    }


    finishGame = () =>{

    }
    

    componentDidUpdate(){
        // update Player or end Game 
    }


    winnigDashboard = ()=>{
    }


    


    // let tileTracker = {
    //     whiteTiles: [{}, {} ...],
    //     homeBases: [{
    //         color: "",
    //         tiles: [{},{}...]
    //     }, {}, {}, {}],
    //     finishLines: [{
    //         color: "",
    //         tiles: [{},{}...]
    //     }, {}, {}, {}]
    // }

    // tileTracker["whiteTiles"][8].x

    
    

    
    render(){
        
        console.log(this.props.players)
        return (
            <div>   
                <Board  roll={this.state.currentRoll} handleRoll={this.handleRoll}  sprites={this.state.sprites}/>
            
                <Players/>          
            </div>
        )
    }
}
