import React, { Component } from 'react';
import Card from './Card';

export class CardDeck extends Component {

  render() {
    return (
      <div>
        <Card PlayerCard={true} ID={1} PlayerPick={this.props.PlayerPick} />
        <Card PlayerCard={true} ID={2} PlayerPick={this.props.PlayerPick} />
        <Card PlayerCard={true} ID={3} PlayerPick={this.props.PlayerPick} />
      </div>
    )
  }
}

export default CardDeck
