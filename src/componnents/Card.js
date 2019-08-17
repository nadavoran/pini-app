import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: {
        x: 0,
        y: 0
      }
    };
  }

  getSymbol(type) {
    switch (type) {
      case "hearts":
        return "♥";
      case "clubs":
        return "♣";
      case "spades":
        return "♠";
      case "diams":
        return "♦";
      default:
        return "No";
    }
  }
  onMouseDown = e => {
    if (!this.props.onMouseDown) return;
    let pos = this.card.getBoundingClientRect();
    document.addEventListener("mousemove", this.moveCard);
    document.addEventListener("mouseup", this.stopListen);
    document.addEventListener("touchmove", this.moveCard);
    document.addEventListener("touchend", this.stopListen);
    if (e.touches) {
      e = e.touches[0];
    } else {
      e.stopPropagation();
      e.preventDefault();
    }
    // console.log("stratX: ", e.pageX - pos.left)
    this.setState({
      visible: true,
      // dragging: true,
      animate: !this.state.visible,
      rel: {
        x: e.pageX - this.state.pos.x,
        y: e.pageY - this.state.pos.y,
        leftEdge: (e.pageX - pos.x),
        topEdge: (e.pageY - pos.y),
        rightEdge: window.innerWidth - pos.width + (e.pageX - pos.x),
        bottomEdge: window.innerHeight - pos.height + (e.pageY - pos.y)
      }
    });
  };
  moveCard = e => {
    if (e.touches) {
      e = e.touches[0];
    } else {
      e.stopPropagation();
      e.preventDefault();
    }
    let x = e.pageX - this.state.rel.x;
    if (x < 0){
        x = Math.max(this.state.rel.leftEdge, e.pageX) - this.state.rel.x;
    } else {
        x = Math.min(this.state.rel.rightEdge, e.pageX) - this.state.rel.x;
    }
    let y = e.pageY - this.state.rel.y;
    if (y < 0) {
      y = Math.max(this.state.rel.topEdge, e.pageY) - this.state.rel.y;
    } else {
      y = Math.min(this.state.rel.bottomEdge, e.pageY) - this.state.rel.y;
    }
    this.setState({
      pos: {
        x: x,
        y: y
      }
    });
  };
  stopListen = e => {
    document.removeEventListener("mouseup", this.stopListen);
    document.removeEventListener("mousemove", this.moveCard);
    document.removeEventListener("touchend", this.stopListen);
    document.removeEventListener("touchmove", this.moveCard);
    e = e.touches ? e.changedTouches[0] : e;
    this.props.mouseUp &&
      this.props.mouseUp(
        {
          x: e.pageX,
          y: e.pageY
        },
        this.props.card,
        this.card,
        this.props.index
      );
  };
  animationEnd = () => {
    this.setState({
      animate: false
    });
  };
  showCard() {
    this.card.classList.add("animate");
    this.card.classList.remove("hidden");
  }

  get element() {
    return this.card;
  }
  renderCorner(val, type, pos) {
    return (
      <div className={"small " + pos}>
        <div className="small-number">{val}</div>
        <div className="small-symbol">{type}</div>
      </div>
    );
  }
  render() {
    let visible =
      "card-container" +
      (this.props.visible || this.state.visible ? "" : " hidden") +
      (this.state.animate ? " animate" : "");
    let style = Object.assign(
      {
        left: this.state.pos.x ? this.state.pos.x + "px" : "initial",
        top: this.state.pos.y ? this.state.pos.y + "px" : "initial",
        color: this.props.card.color === "r" ? "#d12d36" : "#333"
      },
      this.props.style
    );
    return (
      <div
        ref={r => (this.card = r)}
        className={visible}
        style={style}
        onTouchStart={this.onMouseDown}
        onMouseDown={this.onMouseDown}
        onAnimationEnd={this.animationEnd}
      >
        <div className="side front">
          {/* {this.renderCorner(this.props.value, this.getSymbol(this.props.type), "top")} */}
          <div className={"small top"}>
            <div className="small-number">{this.props.value}</div>
            <div className="small-symbol">
              {this.getSymbol(this.props.type)}
            </div>
          </div>
          <div className="middle">
            <div>{this.props.value}</div>
          </div>
          {/* {this.renderCorner(this.props.value, this.getSymbol(this.props.type), "bottom")} */}
          <div className={"small bottom"}>
            <div className="small-number">{this.props.value}</div>
            <div className="small-symbol">
              {this.getSymbol(this.props.type)}
            </div>
          </div>
        </div>
        <div className="side back" />
      </div>
    );
  }
}

export default Card;
