import React, { Component } from 'react'
import Board from './Board'
import Pieces from './Pieces'
import Players from './Players'
import Tile from './Tile'
import { Animate } from 'react-move'

export default class Game extends Component {

    constructor(props){
        super(props)

        let hb = this.genHomeBases(props.players)
        let pieces = this.genPieces(hb)

        this.state = {
            currentRoll:null,
            playerTurn: null,

            players: props.players,
            activePieces: [],
            pieces: pieces,
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
            },
            turnCount: 0
        }
    }

    handlePieceToMove = (clickedPiece) => {
        let newPieces = [...this.state.pieces]
        let newWhiteTiles = [...this.state.whiteTiles]
        let newHomeBases = {...this.state.homeBases}

        let found = newPieces.find((piece) => {
            return piece.array == clickedPiece.array && piece.index == clickedPiece.index
        })
        found.array = this.state.whiteTiles
        found.index = 0
        this.setState({
            pieces: newPieces
        })
    }

    genPieces = (hb) => {
        let pieces = []
        this.props.players.forEach(player => {
            for(let i = 0; i < 4; i++){
                let piece = {
                    array: hb[player.color],
                    index: i,
                    color: player.color
                }
                hb[player.color][i].occupied = piece
                pieces.push(piece)
            }
        })
        return pieces
    }
    
    genHomeBases = (players) => {
        let hb = {
            red: this.genTiles(4),
            green: this.genTiles(4),
            yellow: this.genTiles(4),
            blue: this.genTiles(4)
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
        return (
            <div>   
                <Board  roll={this.state.currentRoll} 
                        handleRoll={this.handleRoll}  
                        sprites={this.state.sprites}
                        whiteTiles={this.state.whiteTiles}
                        pieces={this.state.pieces}
                        homeBases={this.state.homeBases}
                        finishLine={this.state.finishLine}
                        endBox={this.state.endBox}
                        handlePieceToMove={this.handlePieceToMove}/>
                {/* <Animate
                    show={true}
                    start={{
                        x: ,
                        y: 
                    }}>
                    
                </Animate> */}
                <Players/>          
            </div>
        )
    }
}
