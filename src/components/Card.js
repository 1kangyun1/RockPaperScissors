import React, { Component } from 'react';
import rock from '../images/1.png';
import paper from '../images/2.png';
import scissors from '../images/3.png';
import mystery from '../images/4.png';

import './Card.css'

export class Card extends Component {
  showImage = (ID) => {
    if(ID === 1){
      return (<img src={rock} alt=''></img>)
    }
    else if(ID === 2){
      return (<img src={paper} alt=''></img>)
    }
    else if(ID === 3){
      return (<img src={scissors} alt=''></img>)
    }
    else{
      return (<img src={mystery} alt=''></img>)
    }
  }

  pickCard = (PlayerCard) => {
    if(PlayerCard){
      this.props.PlayerPick(this.props.ID)
    }
  }

  render() {
    return (
      <button onClick={() => this.pickCard(this.props.PlayerCard)} 
              disabled={!this.props.PlayerCard}>
        {this.showImage(this.props.ID)}
      </button>
    )
  }
}

export default Card
