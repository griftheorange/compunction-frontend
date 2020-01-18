import React, { Component } from 'react'
import Tile from './Tile' 
import Dice from 'Dice'



export default class Board extends Component {
    render() {
        return (
            <div>
                <Tile />
                <Dice />
            </div>
        )
    }
}
