import React from 'react';

import './Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }
    }

    getSymbol(type){
        switch (type){
            case "hearts":
                return "♥";
            case "clubs":
                return "♣";
            case "spades":
                return "♠";
            case "diams":
                return "♦";
            default: 
                return "No"
        }
    }

    renderCorner(val, type, pos) {
        return <div className={"small "+pos}>
            <div className="small-number">{val}</div>
            <div className="small-symbol">{type}</div>
        </div>
    }
    render() {
        let visible = "card-container" + (this.props.visible || this.state.visible ? "" : " back");
        return (
            <div className={visible} style={this.props.style}>
                <span>
                    {this.renderCorner(this.props.value || "A", this.getSymbol(this.props.type || "clubs"), "top")}
                    <div className="middle"><div>{this.props.value || "A"}</div></div>
                    {this.renderCorner(this.props.value || "A", this.getSymbol(this.props.type || "clubs"), "bottom")}
                </span>
            </div>
        );
    }
}


export default Card;

