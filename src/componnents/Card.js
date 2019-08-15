import React from 'react';

import './Card.css';

class Card extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pos: {
                x: 0,
                y: 0
            }
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
    onMouseDown=(e)=>{
        if (!this.props.onMouseDown) return;
        // let pos = this.card.getBoundingClientRect();
        document.addEventListener("mousemove", this.moveCard);
        document.addEventListener("mouseup", this.stopListen);
        e.stopPropagation();
        e.preventDefault();
        // console.log("stratX: ", e.pageX - pos.left)
        this.setState({
            visible: true,
            // dragging: true,
            animate: !this.state.visible,
            rel: {
                x: e.pageX - this.state.pos.x,
                y: e.pageY - this.state.pos.y   
            } });
    }
    moveCard = (e) => {
        this.setState({
            pos: {
                x: e.pageX - this.state.rel.x,
                y: e.pageY - this.state.rel.y
            }
        })
        e.stopPropagation();
        e.preventDefault();
    }
    stopListen=(e)=>{
        document.removeEventListener("mouseup", this.stopListen);
        document.removeEventListener("mousemove", this.moveCard);
        this.props.mouseUp && this.props.mouseUp({
            x: e.pageX,
            y: e.pageY
        }, this.props.card, this.card, this.props.index);
    }
    animationEnd = () => {
        this.setState({
            animate: false
        });
    }
    showCard() {

        console.log("flipping card 2");
        this.card.classList.add("animate");
        this.card.classList.remove("hidden");
    }
    
    get element(){
        return this.card;
    }
    renderCorner(val, type, pos) {
        return <div className={"small "+pos}>
            <div className="small-number">{val}</div>
            <div className="small-symbol">{type}</div>
        </div>
    }
    render() {
        let visible = "card-container" + (this.props.visible || this.state.visible ? "" : " hidden") + (this.state.animate? " animate" : "");
        let style = Object.assign({
            left: this.state.pos.x + "px",
            top: this.state.pos.y + "px",
            color: this.props.card.color === "r" ? "#d12d36" : "#333"
        }, 
            this.props.style);
        return (
            <div ref={((r)=>this.card = r)} className={visible} style={style} onMouseDown={this.onMouseDown} onAnimationEnd={this.animationEnd}>
                <div className="side front">
                    {/* {this.renderCorner(this.props.value, this.getSymbol(this.props.type), "top")} */}
                    <div className={"small top"}>
                        <div className="small-number">{this.props.value}</div>
                        <div className="small-symbol">{this.getSymbol(this.props.type)}</div>
                    </div>
                    <div className="middle"><div>{this.props.value}</div></div>
                    {/* {this.renderCorner(this.props.value, this.getSymbol(this.props.type), "bottom")} */}
                    <div className={"small bottom"}>
                        <div className="small-number">{this.props.value}</div>
                        <div className="small-symbol">{this.getSymbol(this.props.type)}</div>
                    </div>
                </div>
                <div className="side back"></div>
            </div>
        );
    }
}


export default Card;

