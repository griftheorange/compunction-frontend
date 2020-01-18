import React, { Component } from 'react'
import Tile from './Tile' 
import Dice from './Dice'



export default class Board extends Component {

    


    render() {

        return (
            <div>
                <Tile roll={this.props.roll} sprites={this.props.sprites} />
                <Dice handleRoll={this.props.handleRoll}/>
            </div>
        )
    }
}
