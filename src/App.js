import React from 'react';
import './App.css';
import Player from './componnents/Player';
import Deck from './componnents/Deck';

const { Board } = require('pini');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
    this.board = new Board();
  }

  moveCardToHand = (pos, card, cardElement, cardIndex, cb)=>{
    this.setState({
      cardData:{
        pos, card, cardElement, cardIndex, cb
      }
    })
  }
  addCardToPlayer2 = (p2Card, cardElement, callback) => {
    this.setState({
      p2CardData: {
        pos: false, card: p2Card, cardElement, cb: () => {
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

  render(){
    return (  
      <div className="App">
        {/* <header className="App-header">
        </header> */}
        <div className="board">
          <Player ref={(r) => this.player1 = r} currentPlayer id={1} winner={this.state.winner} player={this.board.player1} cardData={this.state.cardData} name="Player1" />
          <Player ref={(r) => this.player2 = r} name="Player2" id={-1} winner={this.state.winner} visible={this.state.p2Visible} cardData={this.state.p2CardData} player={this.board.player2} />
        </div>
        <Deck ref={(r) => this.deck = r} moveCardToHand={this.moveCardToHand} p2Card={this.addCardToPlayer2} />
        <button className="check-button" style={{ top: "75px" }} name="finish" onClick={this.reset}>New Game</button>
        {/* <button className="check-button" name="check" onClick={this.checkWinner}>Check</button> */}
        {/* <button className="check-button" style={{ top: "100px" }} name="finish" onClick={this.addCardToPlayer2}>Player2</button> */}
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