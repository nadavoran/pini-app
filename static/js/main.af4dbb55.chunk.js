(window["webpackJsonppini-app"]=window["webpackJsonppini-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),o=a.n(s),i=(a(36),a(5)),c=a(6),d=a(8),l=a(7),u=a(9),p=(a(37),a(30)),h=(a(38),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).onMouseDown=function(e){if(a.props.onMouseDown){var t=a.card.getBoundingClientRect();document.addEventListener("mousemove",a.moveCard),document.addEventListener("mouseup",a.stopListen),document.addEventListener("touchmove",a.moveCard),document.addEventListener("touchend",a.stopListen),e.touches?e=e.touches[0]:(e.stopPropagation(),e.preventDefault()),a.setState({visible:!0,animate:!a.state.visible,rel:{x:e.pageX-a.state.pos.x,y:e.pageY-a.state.pos.y,leftEdge:e.pageX-t.x,topEdge:e.pageY-t.y,rightEdge:window.innerWidth-t.width+(e.pageX-t.x),bottomEdge:window.innerHeight-t.height+(e.pageY-t.y)}})}},a.moveCard=function(e){e.touches?e=e.touches[0]:(e.stopPropagation(),e.preventDefault());var t=e.pageX-a.state.rel.x;t=t<0?Math.max(a.state.rel.leftEdge,e.pageX)-a.state.rel.x:Math.min(a.state.rel.rightEdge,e.pageX)-a.state.rel.x;var n=e.pageY-a.state.rel.y;n=n<0?Math.max(a.state.rel.topEdge,e.pageY)-a.state.rel.y:Math.min(a.state.rel.bottomEdge,e.pageY)-a.state.rel.y,a.setState({pos:{x:t,y:n}})},a.stopListen=function(e){document.removeEventListener("mouseup",a.stopListen),document.removeEventListener("mousemove",a.moveCard),document.removeEventListener("touchend",a.stopListen),document.removeEventListener("touchmove",a.moveCard),e=e.touches?e.changedTouches[0]:e,a.props.mouseUp&&a.props.mouseUp({x:e.pageX,y:e.pageY},a.props.card,a.card,a.props.index)},a.animationEnd=function(){a.setState({animate:!1})},a.state={pos:{x:e.x,y:e.y}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getSymbol",value:function(e){switch(e){case"hearts":return"\u2665";case"clubs":return"\u2663";case"spades":return"\u2660";case"diams":return"\u2666";default:return"No"}}},{key:"showCard",value:function(){this.card.classList.add("animate"),this.card.classList.remove("hidden")}},{key:"renderCorner",value:function(e,t,a){return r.a.createElement("div",{className:"small "+a},r.a.createElement("div",{className:"small-number"},e),r.a.createElement("div",{className:"small-symbol"},t))}},{key:"render",value:function(){var e=this,t="card-container"+(this.props.visible||this.state.visible?"":" hidden")+(this.state.animate?" animate":""),a=Object.assign({left:this.state.pos.x+"px",top:this.state.pos.y+"px",color:"r"===this.props.card.color?"#d12d36":"#333"},this.props.style);return this.props.rotate&&(a.transform?a.transform.includes("rotate(180deg)")||(a.transform+=" rotate(180deg)"):a.transform="rotate(180deg)"),r.a.createElement("div",{ref:function(t){return e.card=t},className:t,style:a,onTouchStart:this.onMouseDown,onMouseDown:this.onMouseDown,onAnimationEnd:this.animationEnd},r.a.createElement("div",{className:"side front"},r.a.createElement("div",{className:"small top"},r.a.createElement("div",{className:"small-number"},this.props.value),r.a.createElement("div",{className:"small-symbol"},this.getSymbol(this.props.type))),r.a.createElement("div",{className:"middle"},r.a.createElement("div",null,this.props.value)),r.a.createElement("div",{className:"small bottom"},r.a.createElement("div",{className:"small-number"},this.props.value),r.a.createElement("div",{className:"small-symbol"},this.getSymbol(this.props.type)))),r.a.createElement("div",{className:"side back"}))}},{key:"element",get:function(){return this.card}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.x?null:{x:e.x,y:e.y}}}]),t}(r.a.Component)),m=(a(39),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={cards:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"addCard",value:function(e,t,a,n,r){var s=this;if(this.props.hand.addCard(e)||r){var o=function(e){return e.x+e.width/2},i=function(e){return e.y+e.height/2},c=function e(a){"trans-animate"===a.animationName&&(v&&window.clearTimeout(v),t.classList.remove("trans-animate"),t.removeEventListener("animattionend",e),s.resolve(!0),s.setState({cards:Object(p.a)(s.props.hand.cards)}))};t.addEventListener("animationend",c);var d="",l=.28;n&&(d="rotate(180deg)",l*=-1);var u=this.getPos(),h=o(u)-o(a),m=i(u)-i(a)+a.height*l*this.cardCount,f=Math.max(300,2*Math.sqrt(Math.abs(m))+350);t.style.setProperty("--tran-time",f+"ms");var v=window.setTimeout(function(){c({animationName:"trans-animate"})},f);return t.classList.add("trans-animate"),t.style.transform="translate3d(".concat(h,"px, ").concat(m,"px, 10px) ").concat(d),new Promise(function(e,t){s.resolve=e})}return Promise.resolve(!1)}},{key:"reset",value:function(){this.setState({cards:[]})}},{key:"calcSpace",value:function(){return Math.min(.05*window.innerWidth,35)}},{key:"getPos",value:function(){return this.hand.getBoundingClientRect()}},{key:"renderHand",value:function(){if(this.props.visibleLastCard&&5===this.state.cards.length)return r.a.createElement("div",{className:"hand-result"},this.props.hand.solved.name)}},{key:"render",value:function(){var e=this,t={borderColor:this.props.round>this.state.cards.length?"green":"red"};return r.a.createElement("div",{ref:function(t){return e.hand=t},style:t,className:"hand-container"},this.state.cards.map(function(t,a){var n="translateY(".concat(28*a,"%)"),s=e.props.visibleLastCard||a<4;return r.a.createElement(h,{card:t,key:t.toString()+a,index:a,value:t.valueString,type:t.typeString,style:{transform:n},visible:s})}),this.renderHand())}},{key:"cardCount",get:function(){return this.state.cards.length}}]),t}(r.a.Component)),f=(a(40),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).modifyName=function(e){a.props.player.name=e.target.value,a.setState({name:a.props.player.name})},a.state={hands:[{},{},{},{},{}]},a.hands=[],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(this.props.cardData&&e.cardData!==this.props.cardData){var r=this.props.cardData.pos,s=this.props.cardData.cardElement.getBoundingClientRect();if(this.props.ignoreCard)return!1;if(!r){for(var o=0;!this.props.player.addCard(this.props.cardData.card,o)&&o<5;)o+=1;return void this.hands[o].addCard(this.props.cardData.card,this.props.cardData.cardElement,s,this.props.cardData.flip,!0).then(this.props.cardData.cb)}var i=this.hands.map(function(e,t){var a=e.getPos(),r=s.x+s.width/2;if(s.bottom>a.top&&s.top<a.bottom+35*e.cardCount&&r<a.right&&r>a.left&&n.props.player.round>e.cardCount){var o=n.props.player.addCard(n.props.cardData.card,t);return e.addCard(n.props.cardData.card,n.props.cardData.cardElement,s,n.props.cardData.flip,o)}return Promise.resolve(!1)});Promise.all(i).then(function(e){var t=e.some(function(e){return e});n.props.cardData.cb(t)}).catch(function(e){console.log(e)})}}},{key:"reset",value:function(){this.hands.forEach(function(e){e.reset()})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"player-container"},r.a.createElement("div",{className:"player-name"+(this.props.winner&&this.props.winner===this.props.id||!this.props.winner&&this.props.currentPlayer?" active":"")},r.a.createElement("div",null,this.state.name),r.a.createElement("input",{type:"text",value:this.state.name,onChange:this.modifyName})),r.a.createElement("div",{className:"hands-container"},this.props.player.hands.map(function(t,a){return r.a.createElement(m,{ref:function(t){e.hands[a]=t},twoPlayers:e.props.twoPlayers,key:e.props.name+a,round:e.props.player.round,hand:t,visibleLastCard:e.props.visible||e.props.winner})})),this.props.winner&&this.props.winner===this.props.id?r.a.createElement("div",{className:"winner-banner"},"WINNER"):null)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.name?null:{name:e.name}}}]),t}(r.a.Component)),v=(a(41),a(19).CardData),y=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).releaseCard=function(e,t,n,r){a.props.moveCardToHand(e,t,n,r,function(e,t){e&&a.setState({lastCardIndex:r})})};var n=a.createCards();return a.state={cards:a.shuffle(n),lastCardIndex:n.length},a.cards=[],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"createCards",value:function(){var e=[];return v.VALUES.forEach(function(t,a){a&&v.TYPES.forEach(function(a){e.push(new v.Card(t,a))})}),e}},{key:"shuffle",value:function(e){return e.sort(function(){return Math.random()-.5})}},{key:"sendNextCard",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=this.state.lastCardIndex-1;a(this.state.cards[r],this.cards[r].element,r,function(){t.setState({lastCardIndex:r},n)}),e&&this.cards[r].showCard()}},{key:"resetDeck",value:function(){this.setState({cards:this.shuffle(this.state.cards),lastCardIndex:this.state.cards.length})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"deck-container"},this.state.cards.map(function(t,a){if(a<e.state.lastCardIndex){var n=a===e.state.lastCardIndex-1;return r.a.createElement(h,{ref:function(t){return t&&(e.cards[a]=t)},card:t,key:t.toString()+a,index:a,x:-.25*a,y:-.25*a,value:t.valueString,type:t.typeString,rotate:e.props.player2,onMouseDown:n,mouseUp:e.releaseCard})}return null}))}}]),t}(r.a.Component),g=a(26),b=a.n(g),w=(a(52),a(19).Board),E=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).dealFirstRound=function(){a.board.player2.round<2?a.deck.sendNextCard(!0,function(e,t,n,r){a.setState({cardData:{pos:!1,card:e,cardElement:t,cardIndex:n,flip:!a.state.player1,cb:r}})},function(){Promise.resolve(1).then(a.setState({player1:!a.state.player1},a.dealFirstRound))}):a.setState({firstRound:!1})},a.moveCardToHand=function(e,t,n,r,s){a.setState({cardData:{pos:e,card:t,cardElement:n,cardIndex:r,flip:!a.state.player1,cb:function(e){s(e),e&&(a.state.twoPlayers?a.board.gameEnded()?a.checkWinner():a.setState({player1:!a.state.player1}):a.deck.sendNextCard(a.board.player2.round<5,a.addCardToPlayer2))}}})},a.addCardToPlayer2=function(e,t,n,r){a.setState({p2CardData:{pos:!1,card:e,cardElement:t,cardIndex:n,flip:!0,cb:function(){r(),a.board.gameEnded()&&a.checkWinner()}}})},a.checkWinner=function(){try{var e=a.board.winner();console.log(e),a.setState({p2Visible:!0,winner:e})}catch(t){-1===t.message.indexOf("h.qualifiesHigh is not a function")&&console.log(t.message)}},a.switchPlayers=function(){a.state.twoPlayers&&!a.state.player1?a.deck.sendNextCard(a.board.player2.round<5,a.addCardToPlayer2,function(){a.setState({twoPlayers:!a.state.twoPlayers,player1:!0})}):a.setState({twoPlayers:!a.state.twoPlayers,player1:!0})},a.reset=function(){a.deck.resetDeck(),a.board=new w,a.player1.reset(),a.player2.reset(),a.setState({p2Visible:!1,winner:null})};var n=e.location.search.includes("twoPlayers=true");return a.state={player1:!0,firstRound:!0,twoPlayers:n},a.board=new w,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.dealFirstRound()}},{key:"renderControls",value:function(){var e=this;return r.a.createElement("div",{className:"controls-container"},r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{className:"check-button",name:"finish",onClick:this.reset},"New Game"),r.a.createElement("label",{className:"switch-container"},r.a.createElement(b.a,{checked:this.state.twoPlayers,uncheckedIcon:!1,checkedIcon:!1,height:22,onColor:"#32ff73",onChange:this.switchPlayers}),r.a.createElement("span",{className:"switch-label"},"2 Players"))),r.a.createElement(y,{ref:function(t){return e.deck=t},player2:!this.state.player1,moveCardToHand:this.moveCardToHand}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"board"},r.a.createElement(f,{ref:function(t){return e.player2=t},id:1,currentPlayer:!this.state.firstRound&&!this.state.player1,name:this.board.player2.name,winner:this.state.winner,player:this.board.player2,visible:this.state.p2Visible,ignoreCard:(this.state.firstRound||this.state.twoPlayers)&&this.state.player1,cardData:this.state.firstRound||this.state.twoPlayers?this.state.cardData:this.state.p2CardData}),this.renderControls(),r.a.createElement(f,{ref:function(t){return e.player1=t},id:-1,currentPlayer:!this.state.firstRound&&this.state.player1,name:this.board.player1.name,winner:this.state.winner,player:this.board.player1,visible:!this.state.twoPlayers,ignoreCard:(this.state.firstRound||this.state.twoPlayers)&&!this.state.player1,cardData:this.state.cardData})),r.a.createElement("div",{className:"alert"},r.a.createElement("span",null,"Thank you for running this game on landscape")))}}]),t}(r.a.Component),C=a(27),k=a(10),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(C.a,null,r.a.createElement(k.a,{path:"/",component:E})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pini-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pini-app","/service-worker.js");console.log("service window loaded"),x?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):N(t,e)})}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.af4dbb55.chunk.js.map