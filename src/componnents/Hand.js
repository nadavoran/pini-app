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
    addCard(card, cardElement, posGoal, forced) {
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
            let handPos = this.getPos();
            let x = getCenterX(handPos) - getCenterX(posGoal);
            let y = getCenterY(handPos) - getCenterY(posGoal) + (35 * (this.cardCount));
            let timer = Math.max(300, Math.sqrt(x) * 2 + 350);
            cardElement.style.setProperty("--tran-time", timer + "ms");
            console.log("tran time changed", timer);
            let clearTimer = window.setTimeout(() => {
                onCardMoveEnd({ animationName: "trans-animate" })
            }, timer);
            cardElement.classList.add("trans-animate");
            // cardElement.classList.add("animate");
            cardElement.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 10px)`;
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
                let transform = `translateY(${35 * index}px`;
                let visible = this.props.visibleLastCard || index < 4;
                return <Card card={card} key={card.toString() + index} index={index} value={card.valueString} type={card.typeString} style={{ transform }} visible={visible} />
            })}
            {this.renderHand()}
        </div>      
    }
}

export default Hand;