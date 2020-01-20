import React, { Component } from 'react'
import Tile from './Tile' 
import Dice from './Dice'
import * as d3 from 'd3'
import rd3 from 'react-d3-library';


const RD3Component = rd3.Component;




export default class Board extends Component {

    

    state= {
         data : ''
    }


    splitTilesToBlocks = (arr) => {
        let fourth = arr.length/4
        let splitArr = []
        for(let i = 0; i < 4; i++){
            splitArr.push(arr.slice(i*fourth, (i+1)*fourth))
        }
        return splitArr
    }
    


    componentDidMount(){
        // this.draw()
        this.setState({
            data : this.draw()
        })
        
    }


    draw =() =>{
        const size = 900
        const edge = size/15
        const colors = ["red", "green", "blue", "yellow"]
        const test1 = [0, 0, 0, 0, 0]
        const borderColor = "black"


        let node = document.createElement('div')
            // .attr("id", "canvas")

        let svg = d3.select(node).append("svg")
            .attr("width", size)
            .attr("height", size)
            
        let backFill = svg.append("rect")
            .attr("height", "100%")
            .attr("width", "100%")
            .style("stroke", borderColor)
            .style("stroke-width", "2px")
            .style("fill", "none")

        let colorBlockGen = svg.selectAll(".startAreas")
            .data(colors)
            .enter()

        colorBlockGen.append("rect")
            .attr("height", 6*edge)
            .attr("width", 6*edge)
            .attr("x", function(d, i){
                if(i%2 == 0){
                    return 0
                } else {
                    return 9*edge
                }
            })
            .attr("y", function(d, i){
                if(i <= 1){
                    return 0
                } else {
                    return 9*edge
                }
            })
            .style("fill", function(d){
                return d
            })
            .attr("stroke", borderColor)
            .attr("stroke-width", "1px")


        colorBlockGen.append("rect")
            .attr("height", 5*edge)
            .attr("width", 5*edge)
            .attr("rx", 20)
            .attr("ry", 20)
            .attr("x", function(d, i){
                if(i%2 == 0){
                    return 0 + 0.5*edge
                } else {
                    return 9*edge + 0.5*edge
                }
            })
            .attr("y", function(d, i){
                if(i <= 1){
                    return 0 + 0.5*edge
                } else {
                    return 9*edge + 0.5*edge
                }
            })
            .style("fill", "white")
            .attr("stroke", borderColor)
            .attr("stroke-width", "5px")

        for(let i = 0; i < 4; i++){
            let hb = this.props.homeBases
            let xs = null
            if(i%2 == 0){
                xs =  0
            } else {
                xs = 9*edge
            }
            let ys = null
            if(i <= 1){
                ys = 0
            } else {
                ys = 9*edge
            }
            let color = null
            if(i%2 == 0 && i <= 1){
                color = "red"
            } else if(i%2 == 0 && i > 1){
                color = "blue"
            } else if(i%2 != 0 && i <= 1){
                color = "green"
            } else {
                color = "yellow"
            }
            for(let j = 0; j < 4; j++){
                svg.append("circle")
                    .attr("r", edge/1.8)
                    .attr("cx", function(){
                        if(j%2 == 0){
                            hb[color][j].x = xs+edge*2
                            return xs+edge*2
                        } else {
                            hb[color][j].x = xs+edge*4
                            return xs+edge*4
                        }
                    })
                    .attr("cy", function(){
                        if(j <= 1){
                            hb[color][j].y = ys+edge*2
                            return ys+edge*2
                        } else {
                            hb[color][j].y = ys+edge*4
                            return ys+edge*4
                        }
                    })
                    .attr("style", "color: light-gray; opacity: 0.25;")
            }
        }

        

        colorBlockGen.append("polygon")
            .attr("points", function(d, i){
                switch(i){
                    case 0:

                        return `${6*edge},${9*edge} ${6*edge},${6*edge} ${size/2-10},${size/2}`
                        break;
                    case 1:
                        return `${6*edge},${6*edge} ${9*edge},${6*edge} ${size/2},${size/2-10}`
                        break;
                    case 2:
                        return `${9*edge},${9*edge} ${6*edge},${9*edge} ${size/2},${size/2+10}`
                        break;
                    case 3:
                        return `${9*edge},${6*edge} ${9*edge},${9*edge} ${size/2+10},${size/2}`
                        break;
                }
            })
            .attr("fill", function(d){return d})
            .attr("stroke", borderColor)
            .attr("stroke-width", "1px")

        let xs = 1*edge
        let ys = 7*edge

        let red = this.props.finishLine.red
        let yellow = this.props.finishLine.yellow
        let blue = this.props.finishLine.blue
        let green= this.props.finishLine.green


        svg.selectAll(".tiles")
            .data(test1)
            .enter()
                .append("rect")
                .attr("width", `${edge}`)
                .attr("height", `${edge}`)
                .attr("x", function(d, i){
                    red[i].x = i*edge + xs
                    return i*edge + xs
                })
                .attr("y", function(d, i){
                    red[i].y = ys
                    return ys
                })
                .attr("fill", "red")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")

        ////////////////////////////////

        xs = 7*edge
        ys = 1*edge

        svg.selectAll(".tiles")
            .data(test1)
            .enter()
                .append("rect")
                .attr("width", `${edge}`)
                .attr("height", `${edge}`)
                .attr("x", function(d, i){
                    green[i].x = xs
                    return xs
                })
                .attr("y", function(d, i){
                    green[i].y = i*edge + ys
                    return i*edge + ys
                })
                .attr("fill", "green")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")

        xs = 13*edge
        ys = 7*edge

        svg.selectAll(".tiles")
            .data(test1)
            .enter()
                .append("rect")
                .attr("width", `${edge}`)
                .attr("height", `${edge}`)
                .attr("x", function(d, i){
                    yellow[i].x = -i*edge + xs
                    return -i*edge + xs
                })
                .attr("y", function(d, i){
                    yellow[i].y = ys
                    return ys
                })
                .attr("fill", "yellow")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")

        xs = 7*edge
        ys = 13*edge

        svg.selectAll(".tiles")
            .data(test1)
            .enter()
                .append("rect")
                .attr("width", `${edge}`)
                .attr("height", `${edge}`)
                .attr("x", function(d, i){
                    blue[i].x = xs
                    return xs
                })
                .attr("y", function(d, i){
                    blue[i].y= -i*edge + ys
                    return -i*edge + ys
                })
                .attr("fill", "blue")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")


        let split = this.splitTilesToBlocks(this.props.whiteTiles)

        // split[0]
        let midpoint = Math.ceil(split[0].length/2-1)

        ///////////////////////////

        xs = 5*edge
        ys = 8*edge
        let first = split[0].slice(0, midpoint)
        let second = split[0][midpoint]
        let third = split[0].slice(midpoint+1)

        first.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    first[i].x = -i*edge + xs
                    return -i*edge + xs
                })
                .attr("y", function(){
                    first[i].y = ys
                    return ys
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        svg.append("rect")
            .attr("x", function(){
                second.x = -(midpoint-1)*edge + xs
                return -(midpoint-1)*edge + xs
            })
            .attr("y", function(){
                second.y = ys - edge
                return ys - edge
            })
            .attr("width", edge)
            .attr("height", edge)
            .attr("fill", "white")
            .attr("stroke", borderColor)
            .attr("stroke-width", "1px")

        third.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    third[i].x = -(midpoint-1-i)*edge + xs
                    return -(midpoint-i-1)*edge + xs
                })
                .attr("y", function(){
                    third[i].y = ys-2*edge
                    return ys-2*edge
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        //////////////////////////////////////

        xs = 9*edge
        ys = 6*edge
        first = split[2].slice(0, midpoint)
        second = split[2][midpoint]
        third = split[2].slice(midpoint+1)

        first.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    first[i].x = i*edge + xs
                    return i*edge + xs
                })
                .attr("y", function(){
                    first[i].y = ys
                    return ys
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        svg.append("rect")
            .attr("x", function(){
                second.x = (midpoint-1)*edge + xs
                return (midpoint-1)*edge + xs
            })
            .attr("y", function(){
                second.y = ys + edge
                return ys + edge
            })
            .attr("width", edge)
            .attr("height", edge)
            .attr("fill", "white")
            .attr("stroke", borderColor)
            .attr("stroke-width", "1px")

        third.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    third[i].x = (midpoint-1-i)*edge + xs
                    return (midpoint-i-1)*edge + xs
                })
                .attr("y", function(){
                    third[i].y = ys+2*edge
                    return ys+2*edge
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        ///////////////////////////////////////////////

        xs = 6*edge
        ys = 5*edge
        first = split[1].slice(0, midpoint)
        second = split[1][midpoint]
        third = split[1].slice(midpoint+1)

        first.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    first[i].x = xs
                    return xs
                })
                .attr("y", function(){
                    first[i].y = -i*edge + ys
                    return -i*edge + ys
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        svg.append("rect")
            .attr("x", function(){
                second.x = xs + edge
                return xs + edge
            })
            .attr("y", function(){
                second.y = -(midpoint-1)*edge + ys
                return -(midpoint-1)*edge + ys
            })
            .attr("width", edge)
            .attr("height", edge)
            .attr("fill", "white")
            .attr("stroke", borderColor)
            .attr("stroke-width", "1px")

        third.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    third[i].x = xs+2*edge
                    return xs+2*edge
                })
                .attr("y", function(){
                    third[i].y = -(midpoint-i-1)*edge + ys
                    return -(midpoint-i-1)*edge + ys
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        ////////////////////////////////////////

        xs = 8*edge
        ys = 9*edge
        first = split[3].slice(0, midpoint)
        second = split[3][midpoint]
        third = split[3].slice(midpoint+1)

        first.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    first[i].x = xs
                    return xs
                })
                .attr("y", function(){
                    first[i].y = i*edge + ys
                    return i*edge + ys
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        svg.append("rect")
            .attr("x", function(){
                second.x = xs - edge
                return xs - edge
            })
            .attr("y", function(){
                second.y = (midpoint-1)*edge + ys
                return (midpoint-1)*edge + ys
            })
            .attr("width", edge)
            .attr("height", edge)
            .attr("fill", "white")
            .attr("stroke", borderColor)
            .attr("stroke-width", "1px")

        third.forEach((tile, i) => {
            svg.append("rect")
                .attr("x", function(){
                    third[i].x = xs-2*edge
                    return xs-2*edge
                })
                .attr("y", function(){
                    third[i].y = (midpoint-i)*edge + ys
                    return (midpoint-i)*edge + ys
                })
                .attr("width", edge)
                .attr("height", edge)
                .attr("fill", "white")
                .attr("stroke", borderColor)
                .attr("stroke-width", "1px")
        })

        return node

            // console.log(first)
            // console.log(second)
            // console.log(third)

    }
    
    


    render() {  
        console.log(this.props.finishLine)
        return (
            <div id="board">
                <Tile />
                <RD3Component  data={this.state.data}/>
                <Dice />
            </div>
        )
    }
}
