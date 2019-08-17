import React from 'react';
import Card from './Card';

import './Hand.css';

class Hand extends React.Component {

    constructor(props){
        super(props);
        this.state={
            cards: []
        }
    }
    componentDidMount(){
    }
    addCard(card, cardElement, posGoal, cardIndex, flip, forced) {
        // let cards = [...this.state.cards];
        if (this.props.hand.addCard(card) || forced) {
            function getCenterX(pos) {
                return pos.x + (pos.width / 2);
            }
            function getCenterY(pos) {
                return pos.y + (pos.height / 2);
            }
            // cards.push(card);
            // pos goal shold be the transform = translate3d(posGoal.x+"px", posGoal.y + "px", 10px )
            let onCardMoveEnd = (e)=>{
                if (e.animationName === "trans-animate"){
                    clearTimer && window.clearTimeout(clearTimer);
                    cardElement.classList.remove("trans-animate");
                    cardElement.removeEventListener("animattionend", onCardMoveEnd);
                    this.resolve(true);
                    this.setState({ cards: [...this.props.hand.cards] });
                }
            }
            cardElement.addEventListener("animationend", onCardMoveEnd);
            // cardElement
            let flipAnimate = "";
            let fixSpace = 0.28;
            if (flip) {
              flipAnimate = "rotate(180deg)";
              fixSpace *= -1;
            } 
            let handPos = this.getPos();
            let x = getCenterX(handPos) - getCenterX(posGoal);
            let y =
              getCenterY(handPos) -
              getCenterY(posGoal) +
              posGoal.height * fixSpace * this.cardCount;
            let timer = Math.max(300, Math.sqrt(Math.abs(y)) * 2 + 350);
            cardElement.style.setProperty("--tran-time", timer + "ms");
            let clearTimer = window.setTimeout(() => {
                onCardMoveEnd({ animationName: "trans-animate" })
            }, timer);
            cardElement.classList.add("trans-animate");
                y = y - 0.25 * cardIndex;
            // cardElement.style.transform = `translate3d(${x - (0.25 * cardIndex)}px, ${y}px, 10px) ${this.props.twoPlayers ? " rotate(180deg)" : ""}`;
            cardElement.style.transform = `translate3d(${x - 0.25 * cardIndex}px, ${y}px, 10px) ${flipAnimate}`;
            return new Promise((resolve, reject)=>{
                this.resolve = resolve;
            });
        }
        return Promise.resolve(false);
    }
    reset(){
        this.setState({ 
            cards: []
        });
    }
    calcSpace(){
        return Math.min(window.innerWidth * 0.05, 35);
    }
    get cardCount(){
        return this.state.cards.length;
    }
    getPos(){
        return this.hand.getBoundingClientRect();
    }
    renderHand(){
        if (this.props.visibleLastCard && this.state.cards.length === 5 ){
            return <div className="hand-result">{this.props.hand.solved.name}</div>
        }
    }
    render(){
        let style= {
            "borderColor": this.props.round > this.state.cards.length ? "green" : "red"    
        }
        return <div ref={(r) => this.hand = r} style={style} className="hand-container">
            {this.state.cards.map((card, index)=>{
                let transform = `translateY(${28 * index}%)`;
                let visible = this.props.visibleLastCard || index < 4;
                return <Card card={card} key={card.toString() + index} index={index} value={card.valueString} type={card.typeString} style={{ transform }} visible={visible} />
            })}
            {this.renderHand()}
        </div>      
    }
}

export default Hand;