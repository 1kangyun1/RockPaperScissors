import React, { Component } from 'react'
import Card from './Card';

export class Opponent extends Component {
  randomPick = () => {
    if(this.props.OpponentTurn){
      this.props.OpponentPick(Math.floor(Math.random()*3)+1)
    }
  }

  componentDidUpdate(){
    this.randomPick()
  }

  render() {
    return (
      <div>
        <Card PlayerCard={false} ID={this.props.OpponentChoice} />
      </div>
    )
  }
}

export default Opponent
