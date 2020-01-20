import React, { Component } from 'react'
import Board from './Board'
import Pieces from './Pieces'
import Players from './Players'
import Tile from './Tile'

export default class Game extends Component {

    constructor(props){
        super(props)

        let hb = this.genHomeBases(props.players)

        this.state = {
            currentRoll:null,
            playerTurn: null,
            players: props.players,
            activePieces: [],
            whiteTiles: this.genTiles(52),
            homeBases: hb,
            finishLine: {
                red: this.genTiles(5),
                green: this.genTiles(5),
                yellow: this.genTiles(5),
                blue: this.genTiles(5)
            },
            endBox: {
                red: [],
                green: [],
                yellow: [],
                blue: []
            }
        }
    }
    
    genHomeBases = (players) => {
        let hb = {
            red: this.genTiles(4),
            green: this.genTiles(4),
            yellow: this.genTiles(4),
            blue: this.genTiles(4)
        }
        for(let i = 0; i < players.length; i++){
            for(let j = 0; j < 4; j++){
                hb[players[i]["color"]][j]["occupied"] = {
                    x:0,
                    y:0,
                    color: players[i]["color"]
                }
            }
        }
        return hb
    }

    genTiles = (num) => {
        let arr = []
        for(let i = 0; i < num; i++){
            arr.push({
                x: 0,
                y: 0,
                occupied: null
            })
        }
        return arr
    }
    

    handleRoll = (dice) =>{
        this.setState({
            currentRoll : dice 
        })
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
        console.log(this.state)
        return (
            <div>   
                <Board  roll={this.state.currentRoll} handleRoll={this.handleRoll}  sprites={this.state.sprites}/>
            
                <Players/>          
            </div>
        )
    }
}
