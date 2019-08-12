import React from 'react';
import Card from './Card';

import './Hand.css';

class Hand extends React.Component {

    render(){
        return <div className="hand-container">
            {this.props.cards.map((card, index)=>{
                let transform = `translateY(${35 * index}px`;
                let visible = this.props.visibleLastCard || index < 4;
                return <Card value={card.value} type={card.type} style={{transform}} visible={visible}/>
            })}
        </div>
    }
}

export default Hand;