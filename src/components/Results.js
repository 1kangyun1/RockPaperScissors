import React, { Component } from 'react'

export class Results extends Component {
  CalculateResult = (PChoice, OChoice) => {
    /*no pick has been made*/
    if(PChoice === 4){
      return "Please select one of the card"
    }

    /*return draw*/
    else if(PChoice === OChoice){
      return "Draw!"
    }

    /*return player win*/
    else if(PChoice === 1 && OChoice === 3){
      return "Player Wins!"
    }
    else if(PChoice === 2 && OChoice === 1){
      return "Player Wins!"
    }
    else if(PChoice === 3 && OChoice === 2){
      return "Player Wins!"
    }

    /*return opponent win*/
    else{
      return "Opponent Wins!"
    }
  }

  render() {
    return (
      <div>
        {this.CalculateResult(this.props.PlayerChoice, 
                              this.props.OpponentChoice)}
      </div>
    )
  }
}

export default Results
