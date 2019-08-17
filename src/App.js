import React from 'react';
import './App.css';
import Player from './componnents/Player';
import Deck from './componnents/Deck';
import './reponsive.css';

const { Board } = require('pini');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      player1: true
    };
    this.board = new Board();
    this.twoPlayers = props.location.search.includes("twoPlayers=true");
  }

  moveCardToHand = (pos, card, cardElement, cardIndex, cb)=>{
    this.setState({
      cardData: {
        pos,
        card,
        cardElement,
        cardIndex,
        flip: !this.state.player1,
        cb: runPlayer2 => {
          cb(runPlayer2);
          if (!runPlayer2) return;
          if (!this.twoPlayers) {
            this.deck.sendNextCard(
              this.board.player2.round < 5,
              this.addCardToPlayer2
            );
          } else {
            
          if (this.board.gameEnded()) {
            this.checkWinner();
          } else {
            this.setState({
              player1: !this.state.player1
            });
          }
        }
          // cb(runPlayer2, this.board.player2.round < 5);
        }
      }
    });
  }
  addCardToPlayer2 = (p2Card, cardElement, cardIndex, callback) => {
    this.setState({
      p2CardData: {
        pos: false, card: p2Card, cardElement, cardIndex, flip:true, cb: () => {
          callback();
          if (this.board.gameEnded()) {
            this.checkWinner();
          }
        }
      }
    });
  }

  checkWinner=()=>{
    // need to call this function when last card is placed
    try{
      let winner = this.board.winner(); 
      console.log(winner);
      this.setState({
        p2Visible: true,
        winner
      })
    } catch(e){
      if (e.message.indexOf("h.qualifiesHigh is not a function") === -1){
        console.log(e.message);
      }
    } 
    // reveale player 2 hands + results
    // display winner

  }
  reset=()=>{
    this.deck.resetDeck();
    this.board = new Board();
    this.player1.reset();
    this.player2.reset();
    this.setState({
      p2Visible: false,
      winner: null
    })
  }

  renderControls(){
    return (
      <div className="controls-container">
        <button className="check-button" name="finish" onClick={this.reset}>
          New Game
        </button>
        <Deck
          ref={r => (this.deck = r)}
          player2={!this.state.player1}
          moveCardToHand={this.moveCardToHand}
          p2Card={this.addCardToPlayer2}
        />
      </div>
    );
  }

  render(){
    return (
      <div className="App">
        <div className={"board"}>
          <Player
            ref={r => (this.player2 = r)}
            id={1}
            currentPlayer={!this.state.player1}
            name={this.board.player2.name}
            winner={this.state.winner}
            player={this.board.player2}
            visible={this.state.p2Visible}
            ignoreCard={this.twoPlayers && this.state.player1}
            cardData={
              this.twoPlayers ? this.state.cardData : this.state.p2CardData
            }
          />
          {this.renderControls()}
          <Player
            ref={r => (this.player1 = r)}
            id={-1}
            currentPlayer={this.state.player1}
            name={this.board.player1.name}
            winner={this.state.winner}
            player={this.board.player1}
            visible={!this.twoPlayers}
            ignoreCard={this.twoPlayers && !this.state.player1}
            cardData={this.state.cardData}
          />
        </div>
        {/* <button className="check-button" name="check" onClick={this.checkWinner}>Check</button> */}
        {/* <button className="check-button" style={{ top: "100px" }} name="finish" onClick={this.addCardToPlayer2}>Player2</button> */}
        <div className="alert">
          <span>Thank you for running this game on landscape</span>
        </div>
      </div>
    );
  }
}

export default App;

// {/* hands={[
//             { cards: [] },
//             { cards: [] },
//             { cards: [{ valueString: "A", typeString: "diams" }] },
//             { cards: [{ valueString: "A", typeString: "diams" }, { valueString: "10", typeString: "diams" }, { valueString: "A", typeString: "diams" }, { valueString: "10", typeString: "diams" }, { valueString: "10", typeString: "diams" }] },
//             { cards: [{ valueString: "A", typeString: "diams" }, { valueString: "10", typeString: "diams" }] }
//           ]} */}
// {/* hands={[
//             { cards: [] },
//             { cards: [] },
//             { cards: [{ valueString: "A", typeString: "diams" }] },
//             { cards: [] },
//             { cards: [{ valueString: "A", typeString: "diams" }, { valueString: "10", typeString: "diams" }, { valueString: "A", typeString: "diams" }, { valueString: "10", typeString: "diams" }, { valueString: "10", typeString: "diams" }] }
//           ]} */}
// {/* <Hand cards={[]} /> */ }
// {/* <Hand cards={[{ valueString: "A", typeString: "diams" }]} /> */ }
// {/* <Hand cards={[{ valueString: "A", typeString: "diams" }, { valueString: "10", typeString: "diams" }]} /> */ }