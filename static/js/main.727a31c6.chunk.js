(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(21).concat([function(e,t,n){e.exports=n(46)},,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(9),o=n.n(r),i=(n(26),n(1)),c=n(2),l=n(5),u=n(3),h=n(4),d=n(11),m=n(10),v=(n(31),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"header"},s.a.createElement("img",{className:"logo",alt:"Logo",src:"assets/Logo.png"}))}}]),t}(s.a.Component)),f=(n(32),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("a",{alt:"About",href:"https://github.com/bvelt/mastermind"},"About"))}}]),t}(s.a.Component)),p=n(12),g=n(6),E=(n(33),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,n=e.value,a=void 0===n?t.EMPTY_VALUE:n,r=e.isClickable,o=void 0!==r&&r,i=e.onClick,c=void 0===i?function(){return!1}:i,l=t.colorOf(a);return s.a.createElement("span",{className:"codePeg codePeg__".concat(l," ").concat(o?"codePeg__selectable":""),onClick:o?function(){return c(a)}:function(){return!1}})}}],[{key:"defaultValue",value:function(){return t.EMPTY_VALUE}},{key:"colors",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?t.EMPTY_VALUE+1:t.EMPTY_VALUE;return t.COLORS.slice(0,e)}},{key:"colorOf",value:function(e){return t.COLORS[e]}}]),t}(s.a.Component));E.COLORS=["blue","green","orange","purple","red","yellow","empty"],E.EMPTY_VALUE=6;var b=E,k=(n(34),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isDisabled,a=void 0!==n&&n,r=e.onClick,o=void 0===r?function(){return!1}:r;return s.a.createElement("button",{type:"button",title:t,className:"iconButton ".concat(t," ").concat(a?"iconButton__disabled":""),disabled:a,onClick:a?function(){return!1}:o},s.a.createElement("img",{src:"assets/".concat(t,".png"),alt:t}))}}]),t}(s.a.Component));k.ICONS=["check","delete","random","reset","close","info"];var O=k,y=(n(35),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.values,n=void 0===t?Object(p.a)(b.colors().keys()):t,a=e.isSelectable,r=void 0!==a&&a,o=e.onSelect,i=void 0===o?function(){return!1}:o,c=e.onCheck,l=void 0===c?function(){return!1}:c,u=e.onDelete,h=void 0===u?function(){return!1}:u,d=e.onRandom,m=void 0===d?function(){return!1}:d,v=e.onReset,f=void 0===v?function(){return!1}:v,g=[],E=0;E<n.length;E++)g.push(s.a.createElement("li",{key:E},s.a.createElement(b,{value:n[E],isClickable:r,onClick:i})));return s.a.createElement("div",{className:"codePegList"},s.a.createElement("ul",{className:"picker"},g,s.a.createElement("li",{key:n.length,className:"check"},s.a.createElement(O,{icon:"check",isDisabled:r,onClick:l}))),s.a.createElement("ul",{className:"buttons"},s.a.createElement("li",null,s.a.createElement(O,{icon:"random",onClick:m})),s.a.createElement("li",null,s.a.createElement(O,{icon:"delete",onClick:h})),s.a.createElement("li",null,s.a.createElement(O,{icon:"reset",onClick:f}))))}}]),t}(s.a.Component)),C=n(20),j=(n(36),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.value,n=void 0===e?t.defaultValue():e;return s.a.createElement("span",{className:"keyPeg keyPeg__".concat(t.NAMES[n])})}}],[{key:"defaultValue",value:function(){return t.NAMES.indexOf("none")}},{key:"valueOf",value:function(e){return t.NAMES.indexOf(e)}}]),t}(s.a.Component));j.NAMES=["position","color","none"];var G=j,N=(n(37),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.answer;t=void 0===t?[0,0]:t;for(var n=Object(C.a)(t,2),a=n[0],r=n[1],o=e.length,i=void 0===o?4:o,c=Array(i).fill(G.defaultValue());r-- >0;)c.unshift(G.valueOf("color"));for(;a-- >0;)c.unshift(G.valueOf("position"));for(var l=[],u=0;u<i;u++)l.push(s.a.createElement("li",{key:u},s.a.createElement(G,{value:c[u]})));return s.a.createElement("ul",{className:"keyPegGrid"},l)}}]),t}(s.a.Component)),w=(n(38),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.remainingGuessCount,n=void 0===t?0:t,a=e.guesses,r=void 0===a?[]:a,o=e.answers,i=void 0===o?[]:o,c=[],l=0;l<r.length;l++){var u=[];u.push(s.a.createElement("td",{key:"h$(i}",className:"rowHead"},l+1));for(var h=0;h<r[l].length;h++)u.push(s.a.createElement("td",{key:"cp".concat(h)},s.a.createElement(b,{value:r[l][h]})));u.push(s.a.createElement("td",{key:"kg".concat(l),className:"keys"},s.a.createElement(N,{answer:i[l],length:r[l].length})));var d=i[l][0]===r[l].length;c.push(s.a.createElement("tr",{className:"decodeRow ".concat(!0===d?"solution":""),key:l},u))}return s.a.createElement("div",{className:"decodeGrid"},s.a.createElement("div",{className:"caption"},s.a.createElement("span",null,n," guess",1!==n?"es":""," remaining")),s.a.createElement("table",null,s.a.createElement("tbody",null,c)))}}]),t}(s.a.Component)),_=(n(39),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.isDisabled,a=void 0!==n&&n,r=e.onClick,o=void 0===r?function(){return!1}:r;return s.a.createElement("button",{type:"button",className:"button ".concat(a?"button__disabled":""),disabled:a,onClick:a?function(){return!1}:o},t)}}]),t}(s.a.Component)),A=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.DEFAULT_CODE_LENGTH,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.DEFAULT_CODE_MAXIMUM_DIGIT,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.DEFAULT_MAXIMUM_GUESS_COUNT;Object(i.a)(this,e),this.codeLength=t,this.codeMaximumDigit=n,this.maximumGuessCount=a};A.DEFAULT_CODE_LENGTH=4,A.DEFAULT_CODE_MAXIMUM_DIGIT=5,A.DEFAULT_MAXIMUM_GUESS_COUNT=10;var S=new A,T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;Object(i.a)(this,e),this.settings=t}return Object(c.a)(e,[{key:"checkGuess",value:function(e,t){if(e.length!==t.length)throw new Error("Guess length ".concat(t.length," must be equal to code length ").concat(e.length));for(var n=[0,0],a=[],s=[],r=0;r<e.length;r++)e[r]===t[r]?n[0]++:(a.push(e[r]),s.push(t[r]));for(;a.length>0;)for(var o=a.shift(),i=0;i<s.length;i++){var c=s.shift();if(o===c){n[1]++;break}s.push(c)}return n}}]),e}(),D=n(19),R=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;Object(i.a)(this,e),this.settings=t}return Object(c.a)(e,[{key:"generatePermutations",value:function(){for(var e=[],t=0;t<=this.settings.codeMaximumDigit;t++)e.push(t);var n=this.settings.codeLength;return D.enumeratePermutations(e,n,!0)}},{key:"filterPermutationsByAnswer",value:function(e,t,n){var a=new T(this.settings),s=[],r=!0,o=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value,h=a.checkGuess(u,t);h[0]===n[0]&&h[1]===n[1]&&s.push(u)}}catch(d){o=!0,i=d}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return s}},{key:"reducePermutations",value:function(e,t,n){for(var a=e,s=0;s<t.length;s++)a=this.filterPermutationsByAnswer(a,t[s],n[s]);return a}},{key:"pivot",value:function(e){for(var t=this.settings.codeLength+1,n=this.settings.codeMaximumDigit+1,a=[],s=0;s<n;s++)a.push(Array(t).fill(0));for(var r=0;r<e.length;r++){for(var o=0;o<e[r].length;o++)a[e[r][o]][o]++;for(var i=0;i<n;i++)e[r].indexOf(i)>-1&&a[i][t-1]++}return a}}]),e}(),M=(n(41),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleToggle=n.handleToggle.bind(Object(g.a)(n)),n.state={opened:e.opened||!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleToggle",value:function(){var e=this,t=this.props.onToggle,n=void 0===t?function(){return!1}:t,a=!1===this.state.opened;this.setState(function(){return Object.assign({},e.state,{opened:a})}),n(a)}},{key:"render",value:function(){for(var e=this.props.possibleCodes,t=void 0===e?[]:e,n=this.state.opened,a=(new R).pivot(t),r=[],o=0;o<a.length;o++)r.push(s.a.createElement("tr",{key:o+1},s.a.createElement("td",{key:"0"},s.a.createElement(b,{value:o})),a[o].map(function(e,t){return s.a.createElement("td",{key:t+1},e)})));for(var i=[],c=0;c<t.length&&c<50;c++)i.push(s.a.createElement("li",{key:c},t[c].map(function(e,t){return s.a.createElement("span",{key:t,className:"codePeg codePeg__".concat(b.colorOf(e))})})));return s.a.createElement("div",{className:"assistWrap"},s.a.createElement("div",{className:"".concat(!1===n?"toggleButton":"toggleHidden")},!1===n?s.a.createElement(O,{icon:"info",onClick:this.handleToggle}):""),s.a.createElement("div",{className:"assist ".concat(!1===n?"closed":"")},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",null,"COLOR"),s.a.createElement("td",null,s.a.createElement(b,null)),s.a.createElement("td",null,s.a.createElement(b,null)),s.a.createElement("td",null,s.a.createElement(b,null)),s.a.createElement("td",null,s.a.createElement(b,null)),s.a.createElement("td",null,"TOTAL"))),s.a.createElement("tbody",null,r),s.a.createElement("tfoot",null,s.a.createElement("tr",{className:"total"},s.a.createElement("td",{colSpan:"5"},"Possible codes remaining:"),s.a.createElement("td",null,t.length)))),s.a.createElement("ul",{className:"possible"},i)),!0===n?s.a.createElement("div",{className:"toggleButton"},s.a.createElement(O,{icon:"close",onClick:this.handleToggle})):"")}}]),t}(s.a.Component)),x={CHECK_GUESS:"breaker/check",REMOVE_GUESS_TOKEN:"breaker/remove-guess-token",NEW_GAME:"breaker/new-game",RANDOM_GUESS:"breaker/random-guess",RESET_GUESS:"breaker/reset-guess",APPEND_GUESS_TOKEN:"breaker/append-guess-token"},P={REMOVE_CODE_TOKEN:"maker/remove-code-token",RANDOM_CODE:"maker/random-code",RESET_CODE:"maker/reset-code",SAVE_CODE:"maker/save-code",APPEND_CODE_TOKEN:"maker/append-code-token"};function U(){return{type:x.NEW_GAME}}n(42);var L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSelect=n.handleSelect.bind(Object(g.a)(n)),n.handleReset=n.handleReset.bind(Object(g.a)(n)),n.handleRandom=n.handleRandom.bind(Object(g.a)(n)),n.handleDelete=n.handleDelete.bind(Object(g.a)(n)),n.handleCheck=n.handleCheck.bind(Object(g.a)(n)),n.handleNewGame=n.handleNewGame.bind(Object(g.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleSelect",value:function(e){var t=this.props,n=t.nextGuess,a=t.length,s=t.dispatch;n.length<a&&s(function(e){return{type:x.APPEND_GUESS_TOKEN,value:e}}(e))}},{key:"handleDelete",value:function(){var e=this.props,t=e.nextGuess,n=e.dispatch;t.length>0&&n({type:x.REMOVE_GUESS_TOKEN})}},{key:"handleReset",value:function(){var e=this.props,t=e.nextGuess,n=e.dispatch;t.length>0&&n({type:x.RESET_GUESS})}},{key:"handleRandom",value:function(){(0,this.props.dispatch)({type:x.RANDOM_GUESS})}},{key:"handleCheck",value:function(){var e=this.props,t=e.maximumGuessCount,n=e.prevGuesses,a=e.nextGuess,s=e.length,r=e.dispatch;a.length===s&&n.length<t&&r({type:x.CHECK_GUESS})}},{key:"handleNewGame",value:function(){(0,this.props.dispatch)(U())}},{key:"padRight",value:function(e,t,n){for(var a=Array.from(e);a.length<t;)a.push(n);return a}},{key:"render",value:function(){var e=this.props,t=e.code,n=e.possibleCodes,a=e.maximumGuessCount,r=e.length,o=e.nextGuess,i=e.prevGuesses,c=e.prevAnswers,l=e.broken,u=Array.from(i),h=Array.from(c),d=!l&&i.length<a,m="You broke the code!";for(d||l?d&&(u.push(this.padRight(o,r,b.defaultValue())),h.push([0,0])):(u.push(t),h.push([4,0]),m="Bummer. You failed.");u.length<a;)u.push(Array(r).fill(b.defaultValue())),h.push([0,0]);var v="";return d||(v=s.a.createElement("div",{className:"gameover"},s.a.createElement("div",{className:"message"},s.a.createElement("span",{className:"emoji",role:"img","aria-label":"Face"},!0===l?"\ud83d\ude03":"\ud83d\ude41"),s.a.createElement("span",{className:"text"},m)),s.a.createElement(_,{key:7,label:"TRY AGAIN",onClick:this.handleNewGame}))),s.a.createElement("div",{className:"decodeEditor"},s.a.createElement("div",{className:"c1"},s.a.createElement(y,{key:1,values:Object(p.a)(b.colors().keys()),isSelectable:d&&o.length<r,onSelect:this.handleSelect,onCheck:this.handleCheck,onDelete:this.handleDelete,onRandom:this.handleRandom,onReset:this.handleReset}),s.a.createElement(w,{key:6,remainingGuessCount:a-i.length,guesses:u,answers:h}),v),s.a.createElement("div",{className:"c2"},s.a.createElement(M,{possibleCodes:n})))}}]),t}(s.a.Component),V=Object(d.b)(function(e){return{code:e.code,possibleCodes:e.possibleCodes,nextGuess:e.nextGuess,maximumGuessCount:e.settings.maximumGuessCount,length:e.settings.codeLength,prevGuesses:e.prevGuesses,prevAnswers:e.prevAnswers,broken:e.broken}})(L),K=(n(43),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleRules=n.toggleRules.bind(Object(g.a)(n)),n.state={open:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleRules",value:function(){var e=this.state.open;this.setState({open:!e})}},{key:"render",value:function(){var e=this.state.open;return s.a.createElement("div",{className:"rules"},s.a.createElement("span",{className:"rulesToggle",onClick:this.toggleRules},e?"Hide ":"Rules"),s.a.createElement("p",{className:e?"":"hide"},"A codemaker has created a secret pattern of 4 colored pegs. A single color can be used more than once. Guess the pegs within 10 turns. A black peg is returned for each peg in your guess that matches the color and position of one peg in the pattern. A gray peg is returned for each peg that is the correct color of one peg in the pattern but the incorrect position. A match is counted only once."))}}]),t}(s.a.Component)),I=(n(44),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(K,null),s.a.createElement(V,null))}}]),t}(s.a.Component)),B=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];Object(i.a)(this,e),this.settings=t,this.code=n,this.possibleCodes=a,this.nextGuess=s,this.prevGuesses=r,this.prevAnswers=o,this.broken=c},F=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;Object(i.a)(this,e),this.settings=t}return Object(c.a)(e,[{key:"createRandom",value:function(){for(var e=[],t=0;t<this.settings.codeLength;t++)e.push(this.randomDigit());return e}},{key:"createManual",value:function(e){var t=Array.from(e);return this.validateCode(t),t}},{key:"resetCode",value:function(e){if(0===e.length)throw new Error("Code is aleady empty");return[]}},{key:"appendCodeToken",value:function(e,t){if(!(e.length<this.settings.codeLength))throw new RangeError("Code is at maximum length ".concat(this.settings.codeLength));this.validateCodeToken(t);var n=Array.from(e);return n.push(t),n}},{key:"removeCodeToken",value:function(e){if(0===e.length)throw new RangeError("Code is already empty");var t=Array.from(e);return t.pop(),t}},{key:"randomDigit",value:function(){return Math.floor(Math.random()*(this.settings.codeMaximumDigit+1))}},{key:"validateCodeToken",value:function(e){if(!(e>=0&&e<=this.settings.codeMaximumDigit))throw new Error("Code token must be digit between 0 and ".concat(this.settings.codeMaximumDigit))}},{key:"validateCode",value:function(e){var t=this;if(e.length!==this.settings.codeLength)throw new Error("Code must be array of length ".concat(this.settings.codeLength));e.forEach(function(e){t.validateCodeToken(e)})}}]),e}(),H=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new B;Object(i.a)(this,e),this.state=t}return Object(c.a)(e,[{key:"isActive",value:function(){return this.state.code.length>0&&!0!==this.state.broken&&this.state.prevGuesses.length<this.state.settings.maximumGuessCount}},{key:"isSuccess",value:function(){return!0===this.state.broken}},{key:"isFailure",value:function(){return!0!==this.state.broken&&this.state.prevGuesses.length>=this.state.settings.maximumGuessCount}},{key:"copyAndPush",value:function(e,t){var n=Array.from(e);return n.push(Array.from(t)),n}},{key:"checkGuess",value:function(){var e=this.state,t=e.settings,n=e.code,a=e.possibleCodes,s=e.nextGuess,r=new T(t).checkGuess(n,s),o=r[0]===t.codeLength,i=new R(t);this.state=Object.assign({},this.state,{possibleCodes:i.filterPermutationsByAnswer(a,s,r),nextGuess:[],prevGuesses:this.copyAndPush(this.state.prevGuesses,s),prevAnswers:this.copyAndPush(this.state.prevAnswers,r),broken:o})}},{key:"removeGuessToken",value:function(){var e=new F(this.state.settings).removeCodeToken(this.state.nextGuess);this.state=Object.assign({},this.state,{nextGuess:e})}},{key:"newGame",value:function(){var e=new F(this.state.settings).createRandom(),t=new R(this.state.settings).generatePermutations();this.state=new B(this.state.settings,e,t)}},{key:"randomGuess",value:function(){var e=new F(this.state.settings).createRandom();this.state=Object.assign({},this.state,{nextGuess:e})}},{key:"resetGuess",value:function(){var e=new F(this.state.settings).resetCode(this.state.nextGuess);this.state=Object.assign({},this.state,{nextGuess:e})}},{key:"appendGuessToken",value:function(e){var t=new F(this.state.settings).appendCodeToken(this.state.nextGuess,e);this.state=Object.assign({},this.state,{nextGuess:t})}},{key:"removeCodeToken",value:function(){var e=new F(this.state.settings).removeCodeToken(this.state.code);this.state=Object.assign({},this.state,{code:e})}},{key:"randomCode",value:function(){var e=new F(this.state.settings).createRandom();this.state=Object.assign({},this.state,{code:e})}},{key:"resetCode",value:function(){var e=new F(this.state.settings).resetCode(this.state.code);this.state=Object.assign({},this.state,{code:e})}},{key:"saveCode",value:function(){var e=new F(this.state.settings).createManual(this.state.code);this.state=Object.assign({},this.state,{code:e})}},{key:"appendCodeToken",value:function(e){var t=new F(this.state.settings).appendCodeToken(this.state.code,e);this.state=Object.assign({},this.state,{code:t})}}]),e}();var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new B,t=arguments.length>1?arguments[1]:void 0,n=new H(e);switch(t.type){case x.CHECK_GUESS:return n.checkGuess(),n.state;case x.REMOVE_GUESS_TOKEN:return n.removeGuessToken(),n.state;case x.NEW_GAME:return n.newGame(),n.state;case x.RANDOM_GUESS:return n.randomGuess(),n.state;case x.RESET_GUESS:return n.resetGuess(),n.state;case x.APPEND_GUESS_TOKEN:return n.appendGuessToken(t.value),n.state;case P.REMOVE_CODE_TOKEN:return n.removeCodeToken(),n.state;case P.RANDOM_CODE:return n.randomCode(),n.state;case P.RESET_CODE:return n.resetCode(),n.state;case P.SAVE_CODE:return n.saveCode(),n.state;case P.APPEND_CODE_TOKEN:return n.appendCodeToken(t.value),n.state;default:return e}},W=(n(45),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).store=Object(m.b)(Y),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.store.dispatch(U())}},{key:"render",value:function(){return s.a.createElement(d.a,{store:this.store},s.a.createElement("div",{className:"App"},s.a.createElement(v,null),s.a.createElement(I,null),s.a.createElement(f,null)))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[21,1,2]]]);
//# sourceMappingURL=main.727a31c6.chunk.js.map