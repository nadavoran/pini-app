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
    releaseCard = (pos, card, cardElement, cardIndex)=>{
        this.props.moveCardToHand(pos, card, cardElement, cardIndex, (success) => {
            if (success) {
                // remove current card and add card for p2
                // Promise.resolve(1).then(()=>{
                // this.props.p2Card(this.state.cards[--cardIndex], cardElement);
                cardIndex -= 1;
                this.props.p2Card(this.state.cards[cardIndex], this.cards[cardIndex].element, ()=>{
                        Promise.resolve(1).then(()=>this.setState({ lastCardIndex: cardIndex }));
                    });
                Promise.resolve(1).then(()=>this.cards[cardIndex].showCard());
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
                {/* let transform = `translate(-${0.5 * index}px, -${0.5 * index}px)`; */}
                if (index < this.state.lastCardIndex){
                    let mouseEvent = index === this.state.lastCardIndex - 1;
                    return <Card ref={(r) => {
                        if (r){
                            this.cards[index] = r;
                        }
                    }} card={card} key={card.toString()+index} index={index} value={card.valueString} type={card.typeString} onMouseDown={mouseEvent} mouseUp={this.releaseCard} />
                }
                return null;
            })}
        </div>
    }
}

export default Deck;