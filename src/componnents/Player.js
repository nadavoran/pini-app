import React from 'react';
import Hand from './Hand';

import './Player.css';

class Player extends React.Component {

    render() {
        return <div className="player-container">
            {this.props.hands.map((hand, index) => {
                return <Hand cards={hand.cards} visibleLastCard={this.props.currentPlayer || this.props.gameEnd} />
            })}
        </div>
    }
}

export default Player;