import React, { Component } from 'react'
import Board from './Board'
import Pieces from './Pieces'
import Players from './Players'

export default class Game extends Component {

    state = {
        players : [],
        // pieces : [],
        // board :null
        whiteTiles : [],
        homeBases:[],
        
        finishLine: {
            color : []
        }
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
        // && 
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
                <Board/>
                <Players/>          
            </div>
        )
    }
}
