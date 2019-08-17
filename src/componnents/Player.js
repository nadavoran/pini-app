import React from 'react';
import Hand from './Hand';

import './Player.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hands: [{}, {}, {}, {}, {}]
    };
    this.hands = [];
  }
  static getDerivedStateFromProps(props, state) {
    if (!state.name) {
      return {
          name: props.name
      };
    }

    // Return null to indicate no change to state.
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.cardData !== this.props.cardData) {
      let cardPos = this.props.cardData.pos;
      let cardRealPos = this.props.cardData.cardElement.getBoundingClientRect();
      if (this.props.ignoreCard) return false;
      if (!cardPos) {
        // player 2 add card
        let i = 0;
        while (
          !this.props.player.addCard(this.props.cardData.card, i) &&
          i < 5
        ) {
          i += 1;
        }
        this.hands[i]
          .addCard(
            this.props.cardData.card,
            this.props.cardData.cardElement,
            cardRealPos,
            this.props.cardData.cardIndex,
            this.props.cardData.flip,
            true
          )
          .then(this.props.cardData.cb);
        return;
      }

      let addedPromises = this.hands.map((hand, index) => {
        let handPos = hand.getPos();
        // console.log(`cb:${cardPos.x} > ht:${handPos.top} && ct:${cardPos.top} < hb:${handPos.height + handPos.top} &&
        //     cl:${cardPos.left} < hr:${handPos.right} && cr:${cardPos.right} > hl:${handPos.left}`);
        if (
          cardPos.y > handPos.top &&
          cardPos.y < handPos.bottom &&
          cardPos.x < handPos.right &&
          cardPos.x > handPos.left &&
          this.props.player.round > hand.cardCount
        ) {
          let forced = this.props.player.addCard(
            this.props.cardData.card,
            index
          );
          return hand.addCard(
            this.props.cardData.card,
            this.props.cardData.cardElement,
            cardRealPos,
            this.props.cardData.cardIndex,
            this.props.cardData.flip,
            forced
          );
        }
        return Promise.resolve(false);
      });
      Promise.all(addedPromises)
        .then(results => {
          let result = results.some(result => result);
          this.props.cardData.cb(result);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
  modifyName = e => {
    this.props.player.name = e.target.value;
    this.setState({
      name: this.props.player.name
    });
  };
  reset() {
    this.hands.forEach(hand => {
      hand.reset();
    });
  }
  render() {
    return (
      <div className="player-container">
        <div
          className={
            "player-name" +
            ((this.props.winner &&
            this.props.winner === this.props.id) ||
            (!this.props.winner && this.props.currentPlayer)
              ? " active"
              : "")
          }
        >
          <div>{this.state.name}</div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.modifyName}
          />
        </div>
        <div className="hands-container">
          {this.props.player.hands.map((hand, index) => {
            return (
              <Hand
                ref={r => {
                  this.hands[index] = r;
                }}
                twoPlayers={this.props.twoPlayers}
                key={this.props.name + index}
                round={this.props.player.round}
                hand={hand}
                visibleLastCard={this.props.visible || this.props.winner}
              />
            );
          })}
        </div>
        {this.props.winner && this.props.winner === this.props.id ? (
          <div className="winner-banner">WINNER</div>
        ) : null}
      </div>
    );
  }
}

export default Player;