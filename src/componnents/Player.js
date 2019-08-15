import React from 'react';
import Hand from './Hand';

import './Player.css';

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state={
            hands: [
                { },
                { },
                { },
                { },
                { }
            ]
        };
        this.hands = [];
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.cardData !== this.props.cardData){
            let cardPos = this.props.cardData.pos;
            let cardRealPos = this.props.cardData.cardElement.getBoundingClientRect();
            if (!cardPos){
                // player 2 add card
                let i = 0;
                while (!this.props.player.addCard(this.props.cardData.card, i) && i< 5){
                    i += 1;
                }
                // let handPos = this.hands[i].getPos();
                // let x = getCenterX(handPos) - getCenterX(cardRealPos);
                // let y = getCenterY(handPos) - getCenterY(cardRealPos) + (35 * (this.hands[i].cardCount));
                this.hands[i].addCard(this.props.cardData.card, this.props.cardData.cardElement, cardRealPos, true).then(this.props.cardData.cb);
                return;
            }

            let addedPromises = this.hands.map((hand, index) => {
                let handPos = hand.getPos();
                // console.log(`cb:${cardPos.x} > ht:${handPos.top} && ct:${cardPos.top} < hb:${handPos.height + handPos.top} &&
                //     cl:${cardPos.left} < hr:${handPos.right} && cr:${cardPos.right} > hl:${handPos.left}`);
                if (cardPos.y > handPos.top && cardPos.y < handPos.bottom &&
                    cardPos.x < handPos.right && cardPos.x > handPos.left &&
                    this.props.player.round > hand.cardCount) {
                    let forced = this.props.player.addCard(this.props.cardData.card, index);
                    // let x = getCenterX(handPos) - getCenterX(cardRealPos) + 1;
                    // let y = getCenterY(handPos) - getCenterY(cardRealPos) - (35 * (hand.cardCount) + 1);
                    return hand.addCard(this.props.cardData.card, this.props.cardData.cardElement, cardRealPos, forced);
                    // let hands = [...this.state.hands];
                    // hands[index].cards.push(this.props.cardData.card);
                    // this.setState({hands});
                }
                return Promise.resolve(false);
            });
            Promise.all(addedPromises).then(results=>{
                let result = results.some((result) => result);
                this.props.cardData.cb(result);
            }).catch(e=>{
                console.log(e);
            })
            // this.props.cardData.cb(this.hands.some((hand, index) => {
            //     let handPos = hand.getPos();
            //     // console.log(`cb:${cardPos.x} > ht:${handPos.top} && ct:${cardPos.top} < hb:${handPos.height + handPos.top} &&
            //     //     cl:${cardPos.left} < hr:${handPos.right} && cr:${cardPos.right} > hl:${handPos.left}`);
            //     if (cardPos.y > handPos.top && cardPos.y < handPos.bottom &&
            //       cardPos.x < handPos.right && cardPos.x > handPos.left && 
            //         this.props.player.round > hand.cardCount) 
            //       {
            //         let forced = this.props.player.addCard(this.props.cardData.card, index);
            //         let x = getCenterX(handPos) - getCenterX(cardRealPos);
            //         let y = getCenterY(handPos) - getCenterY(cardRealPos) + (35 * (hand.cardCount - 1));
            //         return hand.addCard(this.props.cardData.card, this.props.cardData.cardElement, { x, y }, forced);
            //         // let hands = [...this.state.hands];
            //         // hands[index].cards.push(this.props.cardData.card);
            //         // this.setState({hands});
            //     }
            //     return false;
            // }));
        }
    }
    reset(){
        this.hands.forEach(hand=>{
            hand.reset();
        })
    }
    render() {
        return <div className="player-container">
            { this.props.player.hands.map((hand, index) => {
                return <Hand ref={(r)=>{
                    this.hands[index] = r;
                }} key={this.props.name+index} round={this.props.player.round} hand={hand} visibleLastCard={this.props.currentPlayer || this.props.winner} />
            })
            }
            {this.props.winner && this.props.winner === this.props.id ? (<div className="winner-banner">WINNER</div>): null}
        </div>
    }
}

export default Player;