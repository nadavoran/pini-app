(window["webpackJsonppini-app"]=window["webpackJsonppini-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(36)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(14),o=a.n(s),i=(a(21),a(1)),c=a(2),d=a(4),l=a(3),u=a(5),p=(a(22),a(15)),m=(a(23),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).onMouseDown=function(e){a.props.onMouseDown&&(document.addEventListener("mousemove",a.moveCard),document.addEventListener("mouseup",a.stopListen),e.stopPropagation(),e.preventDefault(),a.setState({visible:!0,animate:!a.state.visible,rel:{x:e.pageX-a.state.pos.x,y:e.pageY-a.state.pos.y}}))},a.moveCard=function(e){a.setState({pos:{x:e.pageX-a.state.rel.x,y:e.pageY-a.state.rel.y}}),e.stopPropagation(),e.preventDefault()},a.stopListen=function(e){document.removeEventListener("mouseup",a.stopListen),document.removeEventListener("mousemove",a.moveCard),a.props.mouseUp&&a.props.mouseUp({x:e.pageX,y:e.pageY},a.props.card,a.card,a.props.index)},a.animationEnd=function(){a.setState({animate:!1})},a.state={pos:{x:0,y:0}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getSymbol",value:function(e){switch(e){case"hearts":return"\u2665";case"clubs":return"\u2663";case"spades":return"\u2660";case"diams":return"\u2666";default:return"No"}}},{key:"showCard",value:function(){console.log("flipping card 2"),this.card.classList.add("animate"),this.card.classList.remove("hidden")}},{key:"renderCorner",value:function(e,t,a){return r.a.createElement("div",{className:"small "+a},r.a.createElement("div",{className:"small-number"},e),r.a.createElement("div",{className:"small-symbol"},t))}},{key:"render",value:function(){var e=this,t="card-container"+(this.props.visible||this.state.visible?"":" hidden")+(this.state.animate?" animate":""),a=Object.assign({left:this.state.pos.x+"px",top:this.state.pos.y+"px",color:"r"===this.props.card.color?"#d12d36":"#333"},this.props.style);return r.a.createElement("div",{ref:function(t){return e.card=t},className:t,style:a,onMouseDown:this.onMouseDown,onAnimationEnd:this.animationEnd},r.a.createElement("div",{className:"side front"},r.a.createElement("div",{className:"small top"},r.a.createElement("div",{className:"small-number"},this.props.value),r.a.createElement("div",{className:"small-symbol"},this.getSymbol(this.props.type))),r.a.createElement("div",{className:"middle"},r.a.createElement("div",null,this.props.value)),r.a.createElement("div",{className:"small bottom"},r.a.createElement("div",{className:"small-number"},this.props.value),r.a.createElement("div",{className:"small-symbol"},this.getSymbol(this.props.type)))),r.a.createElement("div",{className:"side back"}))}},{key:"element",get:function(){return this.card}}]),t}(r.a.Component)),h=(a(24),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={cards:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"addCard",value:function(e,t,a,n){var r=this;if(this.props.hand.addCard(e)||n){var s=function(e){return e.x+e.width/2},o=function(e){return e.y+e.height/2},i=function e(a){"trans-animate"===a.animationName&&(m&&window.clearTimeout(m),t.classList.remove("trans-animate"),t.removeEventListener("animattionend",e),r.resolve(!0),r.setState({cards:Object(p.a)(r.props.hand.cards)}))};t.addEventListener("animationend",i);var c=this.getPos(),d=s(c)-s(a),l=o(c)-o(a)+35*this.cardCount,u=Math.max(300,2*Math.sqrt(d)+350);t.style.setProperty("--tran-time",u+"ms"),console.log("tran time changed",u);var m=window.setTimeout(function(){i({animationName:"trans-animate"})},u);return t.classList.add("trans-animate"),t.style.transform="translate3d(".concat(d-2,"px, ").concat(l-2,"px, 10px)"),new Promise(function(e,t){r.resolve=e})}return Promise.resolve(!1)}},{key:"reset",value:function(){this.setState({cards:[]})}},{key:"getPos",value:function(){return this.hand.getBoundingClientRect()}},{key:"renderHand",value:function(){if(this.props.visibleLastCard&&5===this.state.cards.length)return r.a.createElement("div",{className:"hand-result"},this.props.hand.solved.name)}},{key:"render",value:function(){var e=this,t={borderColor:this.props.round>this.state.cards.length?"green":"red"};return r.a.createElement("div",{ref:function(t){return e.hand=t},style:t,className:"hand-container"},this.state.cards.map(function(t,a){var n="translateY(".concat(35*a,"px"),s=e.props.visibleLastCard||a<4;return r.a.createElement(m,{card:t,key:t.toString()+a,index:a,value:t.valueString,type:t.typeString,style:{transform:n},visible:s})}),this.renderHand())}},{key:"cardCount",get:function(){return this.state.cards.length}}]),t}(r.a.Component)),f=(a(25),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={hands:[{},{},{},{},{}]},a.hands=[],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(e.cardData!==this.props.cardData){var r=this.props.cardData.pos,s=this.props.cardData.cardElement.getBoundingClientRect();if(!r){for(var o=0;!this.props.player.addCard(this.props.cardData.card,o)&&o<5;)o+=1;return void this.hands[o].addCard(this.props.cardData.card,this.props.cardData.cardElement,s,!0).then(this.props.cardData.cb)}var i=this.hands.map(function(e,t){var a=e.getPos();if(r.y>a.top&&r.y<a.bottom&&r.x<a.right&&r.x>a.left&&n.props.player.round>e.cardCount){var o=n.props.player.addCard(n.props.cardData.card,t);return e.addCard(n.props.cardData.card,n.props.cardData.cardElement,s,o)}return Promise.resolve(!1)});Promise.all(i).then(function(e){var t=e.some(function(e){return e});n.props.cardData.cb(t)}).catch(function(e){console.log(e)})}}},{key:"reset",value:function(){this.hands.forEach(function(e){e.reset()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"player-container"},this.props.player.hands.map(function(t,a){return r.a.createElement(h,{ref:function(t){e.hands[a]=t},key:e.props.name+a,round:e.props.player.round,hand:t,visibleLastCard:e.props.currentPlayer||e.props.winner})}),this.props.winner&&this.props.winner===this.props.id?r.a.createElement("div",{className:"winner-banner"},"WINNER"):null)}}]),t}(r.a.Component)),v=(a(26),a(9).CardData),y=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).releaseCard=function(e,t,n,r){a.props.moveCardToHand(e,t,n,r,function(e){e&&(r-=1,a.props.p2Card(a.state.cards[r],a.cards[r].element,function(){Promise.resolve(1).then(function(){return a.setState({lastCardIndex:r})})}),Promise.resolve(1).then(function(){return a.cards[r].showCard()}))})};var n=a.createCards();return a.state={cards:a.shuffle(n),lastCardIndex:n.length},a.cards=[],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"createCards",value:function(){var e=[];return v.VALUES.forEach(function(t,a){a&&v.TYPES.forEach(function(a){e.push(new v.Card(t,a))})}),e}},{key:"shuffle",value:function(e){return e.sort(function(){return Math.random()-.5})}},{key:"resetDeck",value:function(){this.setState({cards:this.shuffle(this.state.cards),lastCardIndex:this.state.cards.length})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"deck-container"},this.state.cards.map(function(t,a){if(a<e.state.lastCardIndex){var n=a===e.state.lastCardIndex-1;return r.a.createElement(m,{ref:function(t){t&&(e.cards[a]=t)},card:t,key:t.toString()+a,index:a,value:t.valueString,type:t.typeString,onMouseDown:n,mouseUp:e.releaseCard})}return null}))}}]),t}(r.a.Component),b=a(9).Board,g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).moveCardToHand=function(e,t,n,r,s){a.setState({cardData:{pos:e,card:t,cardElement:n,cardIndex:r,cb:s}})},a.addCardToPlayer2=function(e,t,n){a.setState({p2CardData:{pos:!1,card:e,cardElement:t,cb:function(){n(),a.board.gameEnded()&&a.checkWinner()}}})},a.checkWinner=function(){try{var e=a.board.winner();console.log(e),a.setState({p2Visible:!0,winner:e})}catch(t){-1===t.message.indexOf("h.qualifiesHigh is not a function")&&console.log(t.message)}},a.reset=function(){a.deck.resetDeck(),a.board=new b,a.player1.reset(),a.player2.reset(),a.setState({p2Visible:!1,winner:null})},a.state={},a.board=new b,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"board"},r.a.createElement(f,{ref:function(t){return e.player1=t},currentPlayer:!0,id:1,winner:this.state.winner,player:this.board.player1,cardData:this.state.cardData,name:"Player1"}),r.a.createElement(f,{ref:function(t){return e.player2=t},name:"Player2",id:-1,winner:this.state.winner,visible:this.state.p2Visible,cardData:this.state.p2CardData,player:this.board.player2})),r.a.createElement(y,{ref:function(t){return e.deck=t},moveCardToHand:this.moveCardToHand,p2Card:this.addCardToPlayer2}),r.a.createElement("button",{className:"check-button",style:{top:"75px"},name:"finish",onClick:this.reset},"New Game"))}}]),t}(r.a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");console.log("service window loaded"),w?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.5c354ca6.chunk.js.map