import React from 'react';
import Card from './Card';
// import { CardData } from 'pini';

import './Deck.css';

const { CardData }= require('pini');

class Deck extends React.Component {

    constructor(props){
        super(props);
        let cards = this.createCards();
        this.state = {
            cards: this.shuffle(cards),
            lastCardIndex: cards.length
        }
        this.cards = [];
    }
    createCards(){
        let res = [];
        CardData.VALUES.forEach((value, index) => {
            if (!index) return;
            CardData.TYPES.forEach(type => {
                res.push(new CardData.Card(value, type));
            }); 
        });
        return res;
    }
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    sendNextCard(animateFlip, cb = ()=>{}){
        let cardIndex = this.state.lastCardIndex - 1;
        cb(this.state.cards[cardIndex], this.cards[cardIndex].element, cardIndex, ()=>{
                Promise.resolve(1).then(()=>this.setState({ lastCardIndex: cardIndex }));
            });
        // visible && this.cards[cardIndex].showCard();
        animateFlip &&
          Promise.resolve(1).then(() =>
            this.cards[cardIndex].showCard()
          );
    }
    releaseCard = (pos, card, cardElement, cardIndex)=>{
        this.props.moveCardToHand(pos, card, cardElement, cardIndex, (success, visible) => {
            if (success) {
                // remove current card and add card for p2
                // Promise.resolve(1).then(()=>{
                // this.props.p2Card(this.state.cards[--cardIndex], cardElement);
                // cardIndex -= 1;
                // this.props.p2Card(this.state.cards[cardIndex], this.cards[cardIndex].element, cardIndex, ()=>{
                        // Promise.resolve(1).then(()=>this.setState({ lastCardIndex: cardIndex }));
                this.setState({ lastCardIndex: cardIndex });
                    // });
                // visible && this.cards[cardIndex].showCard();
                // visible && Promise.resolve(1).then(()=>this.cards[cardIndex].showCard());
                // });
            }
        });
    }

    resetDeck(){
        this.setState({
            cards: this.shuffle(this.state.cards),
            lastCardIndex: this.state.cards.length
        })
    }

    render() {
        return <div className="deck-container">
            {this.state.cards.map((card, index) => {
                let transform = `translate(-${0.25 * index}px, -${0.25 * index}px) ${this.props.player2? "rotate(180deg)" : ""}`;
                if (index < this.state.lastCardIndex){
                    let mouseEvent = index === this.state.lastCardIndex - 1;
                    return <Card ref={(r) => r && (
                            this.cards[index] = r)} card={card} key={card.toString() + index} style={{ transform}} index={index} value={card.valueString} type={card.typeString} onMouseDown={mouseEvent} mouseUp={this.releaseCard} />
                }
                return null;
            })}
        </div>
    }
}

export default Deck;