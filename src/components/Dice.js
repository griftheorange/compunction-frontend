import React, { Component } from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

export default class Dice extends Component {


    rollAll(){
        this.reactDice.rollAll()
    }
    
    rollDoneCallback = (num) =>{     
        this.props.handleRoll(num)
    }


    renderDice = () =>{
        return   <ReactDice
        numDice={1}
        faceColor={'black'}
        dotColor ={'white'}
        dieSize = {40}
        rollDone={this.rollDoneCallback}
        ref={dice => this.reactDice = dice } 
        />
    }


    componentDidUpdate() {
      
    }
  

    render() {

        return (
            <div>
                {this.renderDice()}
            </div>

        )
    }
}
