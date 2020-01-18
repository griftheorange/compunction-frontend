import React, { Component } from 'react'

export default class Tile extends Component {

    //We have an array of white tiles = 52  
    //Figure out a way to handle them for 4 users 
    state ={
        whiteTiles : 0,
    }

    setFirstSpriteOnFirstTile = (sprit) =>{
        //currentRollFunction call 
            if(this.props.roll === 6){ 
                //put the first sprite[1] on first white tile on the board and set whiteTile = 0 start point
                //set srpite[1] pozition
                //rollAgain 
                if( this.props.roll !== 6 ){
                    // whiteTiles : this.state.whiteTiles + this.props.roll 
                    // put sprites on whiteTile .
                    if(this.state.whiteTiles <= 52){
                        //pass sprite 1 to the winning tiles 
                    }    
                }
            }
            else {
                //pass to other user 
            }

            //return firtst stripe
    }

    setSecondSpriteOnFirstTile = () =>{

    }

    setThirdSpriteOnFirstTile = () =>{
        
    }
    setFourthSpriteOnFirstTile = () =>{
        
    }

    



    render() {
        console.log(this.state.whiteTiles)
        console.log(this.props.roll)
        return (
            <div>
               {this.setFirstSpriteOnFirstTile()}
            </div>
        )
    }
}
