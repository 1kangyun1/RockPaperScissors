import React, { Component } from 'react'
import CardDeck from './components/CardDeck';
import Results from './components/Results';
import Opponent from './components/Opponent';

export class App extends Component {
  state = {
    PlayerChoice: 4,
    OpponentChoice: 4,
    OpponentTurn: false
  }

  PlayerPick = (choice) => {
    this.setState({PlayerChoice: choice, OpponentTurn: true})
  }

  OpponentPick = (choice) => {
    this.setState({OpponentChoice: choice, OpponentTurn: false})
  }


  render() {
    return (
      <div  style={{ textAlign:"center" }}>
        <Opponent OpponentChoice={this.state.OpponentChoice} 
                  OpponentTurn={this.state.OpponentTurn} 
                  OpponentPick={this.OpponentPick} />
        <Results PlayerChoice={this.state.PlayerChoice} 
                  OpponentChoice={this.state.OpponentChoice} />
        <CardDeck PlayerPick={this.PlayerPick} />
      </div>
    )
  }
}

export default App
