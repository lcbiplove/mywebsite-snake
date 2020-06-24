var SNAKE=SNAKE||{};SNAKE.addEventListener=window.addEventListener?function(e,t,n,a){e.addEventListener(t,n,a)}:window.attachEvent?function(e,t,n){e.attachEvent("on"+t,n)}:void 0,SNAKE.removeEventListener=window.removeEventListener?function(e,t,n,a){e.removeEventListener(t,n,a)}:window.detachEvent?function(e,t,n){e.detachEvent("on"+t,n)}:void 0,SNAKE.Snake=SNAKE.Snake||function(){var e=[],t=function(){this.elm=null,this.elmStyle=null,this.row=-1,this.col=-1,this.xPos=-1e3,this.yPos=-1e3,this.next=null,this.prev=null};return function(n){if(n&&n.playingBoard){void 0===localStorage.jsSnakeHighScore&&localStorage.setItem("jsSnakeHighScore",1);var a=this,o=n.playingBoard,d=(0,1),l=-1,i=!0,r=!0,s=-1,c=[0,1,0,-1],u=[-1,0,1,0],m=[],g=[],h=80,p=!1,k=!1,y=document.getElementById("selectMode");y&&y.addEventListener("change",function(e){var t=(e=e||{}).target?parseInt(e.target.value):75;isNaN(t)?t=75:t<50&&(t=75),h=t,setTimeout(function(){document.getElementById("game-area").focus()},10)}),a.snakeBody={},a.snakeBody.b0=new t,a.snakeBody.b0.row=n.startRow||1,a.snakeBody.b0.col=n.startCol||1,a.snakeBody.b0.xPos=a.snakeBody.b0.row*o.getBlockWidth(),a.snakeBody.b0.yPos=a.snakeBody.b0.col*o.getBlockHeight(),a.snakeBody.b0.elm=f(),a.snakeBody.b0.elmStyle=a.snakeBody.b0.elm.style,o.getBoardContainer().appendChild(a.snakeBody.b0.elm),a.snakeBody.b0.elm.style.left=a.snakeBody.b0.xPos+"px",a.snakeBody.b0.elm.style.top=a.snakeBody.b0.yPos+"px",a.snakeBody.b0.next=a.snakeBody.b0,a.snakeBody.b0.prev=a.snakeBody.b0,a.snakeLength=1,a.snakeHead=a.snakeBody.b0,a.snakeTail=a.snakeBody.b0,a.snakeHead.elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),a.snakeHead.elm.className+=" snake-snakebody-alive",a.setPaused=function(e){k=e},a.getPaused=function(){return k},a.handleArrowKeys=function(e){if(p||k)return;a.snakeLength;let t=-1;switch(e){case 37:case 65:t=3;break;case 38:case 87:t=0;break;case 39:case 68:t=1;break;case 40:case 83:t=2}s!==d&&(l=t),(2!==Math.abs(t-d)&&i||r)&&(s=t,i=!1,r=!1)},a.go=function(){var e=a.snakeHead,t=a.snakeTail,n=o.grid;if(!0!==k){if(a.snakeTail=t.prev,a.snakeHead=t,n[t.row]&&n[t.row][t.col]&&(n[t.row][t.col]=0),-1!==s&&(d=s,-1!==l&&(s=l,l=-1)),i=!0,t.col=e.col+c[d],t.row=e.row+u[d],t.xPos=e.xPos+m[d],t.yPos=e.yPos+g[d],t.elmStyle||(t.elmStyle=t.elm.style),t.elmStyle.left=t.xPos+"px",t.elmStyle.top=t.yPos+"px",0===n[t.row][t.col])n[t.row][t.col]=1,setTimeout(function(){a.go()},h);else if(n[t.row][t.col]>0)a.handleDeath();else if(n[t.row][t.col]===o.getGridFoodValue()){if(n[t.row][t.col]=1,!a.eatFood())return void a.handleWin();setTimeout(function(){a.go()},h)}}else setTimeout(function(){a.go()},h)},a.eatFood=function(){e.length<=5&&v(10);for(var t,n=e.splice(0,5),d=n.length,l=a.snakeTail;d--;)t="b"+a.snakeLength++,a.snakeBody[t]=n[d],a.snakeBody[t].prev=l,a.snakeBody[t].elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),a.snakeBody[t].elm.className+=" snake-snakebody-alive",l.next=a.snakeBody[t],l=a.snakeBody[t];return a.snakeTail=a.snakeBody[t],a.snakeTail.next=a.snakeHead,a.snakeHead.prev=a.snakeTail,!!o.foodEaten()&&(new Audio("audio/eat.mp3").play(),!0)},a.handleDeath=function(){w(o.handleDeath)},a.handleWin=function(){w(o.handleWin)},a.rebirth=function(){p=!1,i=!0,r=!0,l=-1},a.reset=function(){if(!1!==p){for(var t,d=[],l=a.snakeHead.next;l!==a.snakeHead;)t=l.next,l.prev=null,l.next=null,d.push(l),l=t;a.snakeHead.next=a.snakeHead,a.snakeHead.prev=a.snakeHead,a.snakeTail=a.snakeHead,a.snakeLength=1;for(var i=0;i<d.length;i++)d[i].elm.style.left="-1000px",d[i].elm.style.top="-1000px",d[i].elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),d[i].elm.className+=" snake-snakebody-alive";e.concat(d),a.snakeHead.elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-dead\b/,""),a.snakeHead.elm.className+=" snake-snakebody-alive",a.snakeHead.row=n.startRow||1,a.snakeHead.col=n.startCol||1,a.snakeHead.xPos=a.snakeHead.row*o.getBlockWidth(),a.snakeHead.yPos=a.snakeHead.col*o.getBlockHeight(),a.snakeHead.elm.style.left=a.snakeHead.xPos+"px",a.snakeHead.elm.style.top=a.snakeHead.yPos+"px"}},v(10),m[0]=0,m[1]=o.getBlockWidth(),m[2]=0,m[3]=-1*o.getBlockWidth(),g[0]=-1*o.getBlockHeight(),g[1]=0,g[2]=o.getBlockHeight(),g[3]=0}function f(){var e=document.createElement("div");return e.className="snake-snakebody-block",e.style.left="-1000px",e.style.top="-1000px",e.style.width=o.getBlockWidth()+"px",e.style.height=o.getBlockHeight()+"px",e}function v(n){for(var a,d=f(),l=1;l<n;l++)(a=new t).elm=d.cloneNode(!0),a.elmStyle=a.elm.style,o.getBoardContainer().appendChild(a.elm),e[e.length]=a;(a=new t).elm=d,o.getBoardContainer().appendChild(a.elm),e[e.length]=a}function w(e){var t;t=localStorage.jsSnakeHighScore,a.snakeLength>t&&localStorage.setItem("jsSnakeHighScore",a.snakeLength),a.snakeHead.elm.style.zIndex=function(e){var t,n=0,a=0;for(t in e)e[t].elm.currentStyle?a=parseFloat(e[t].elm.style["z-index"],10):window.getComputedStyle&&(a=parseFloat(document.defaultView.getComputedStyle(e[t].elm,null).getPropertyValue("z-index"),10)),!isNaN(a)&&a>n&&(n=a);return n+1}(a.snakeBody),a.snakeHead.elm.className=a.snakeHead.elm.className.replace(/\bsnake-snakebody-alive\b/,""),a.snakeHead.elm.className+=" snake-snakebody-dead",p=!0,new Audio("audio/dead.mp3").play(),e()}}}(),SNAKE.Food=SNAKE.Food||function(){var e=0;function t(e,t){return Math.floor(Math.random()*(t+1-e))+e}return function(n){if(n&&n.playingBoard){var a,o,d=n.playingBoard,l=e++,i=document.createElement("div");i.setAttribute("id","snake-food-"+l),i.className="snake-food-block",i.style.width=d.getBlockWidth()+"px",i.style.height=d.getBlockHeight()+"px",i.style.left="-1000px",i.style.top="-1000px",d.getBoardContainer().appendChild(i),this.getFoodElement=function(){return i},this.randomlyPlaceFood=function(){d.grid[a]&&d.grid[a][o]===d.getGridFoodValue()&&(d.grid[a][o]=0);for(var e=0,n=0,l=0,r=d.grid.length-1,s=d.grid[0].length-1;0!==d.grid[e][n];)if(e=t(1,r),n=t(1,s),++l>2e4)return!1;return d.grid[e][n]=d.getGridFoodValue(),a=e,o=n,i.style.top=e*d.getBlockHeight()+"px",i.style.left=n*d.getBlockWidth()+"px",!0}}}}(),SNAKE.Board=SNAKE.Board||function(){var e=0;function t(e){var t,n=0,a=0;for(t in e)e[t].elm.currentStyle?a=parseFloat(e[t].elm.style["z-index"],10):window.getComputedStyle&&(a=parseFloat(document.defaultView.getComputedStyle(e[t].elm,null).getPropertyValue("z-index"),10)),!isNaN(a)&&a>n&&(n=a);return n+1}function n(){var e=0;return"number"==typeof window.innerWidth?e=window.innerWidth:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?e=document.documentElement.clientWidth:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(e=document.body.clientWidth),e}function a(){var e=0;return"number"==typeof window.innerHeight?e=window.innerHeight:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?e=document.documentElement.clientHeight:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(e=document.body.clientHeight),e}return function(o){var d,l,i,r,s,c,u,m,g,h,p,k=this,y=e++,f=o||{},v=250,w=250,B=1,E=!1;function S(){(s=document.createElement("div")).setAttribute("id","playingField"),s.className="snake-playing-field",SNAKE.addEventListener(s,"click",function(){r.focus()},!1),(p=document.createElement("div")).className="snake-pause-screen",p.innerHTML="<div style='padding:10px;'>[Paused]<p/>Press [space] to unpause.</div>",(c=document.createElement("div")).className="snake-panel-component",c.innerHTML="Score: 1",(u=document.createElement("div")).className="snake-panel-component",u.innerHTML="Highscore: "+(void 0===localStorage.jsSnakeHighScore||0==localStorage.jsSnakeHighScore?1:localStorage.jsSnakeHighScore),m=function(){var e=document.createElement("div");e.id="sbWelcome"+y,e.className="snake-welcome-dialog";var t=document.createElement("div"),n="";document.getElementById("game-pad-wrapper").style.display="flex",f.fullScreen&&(n="On Windows, press F11 to play in Full Screen mode.",document.getElementById("game-pad-wrapper").style.display="none");t.innerHTML="<p></p>Use the <strong>arrow keys</strong> on your keyboard to play the game. "+n+"<p></p>";var a=document.createElement("button");a.appendChild(document.createTextNode("Play Game"));var o=function(){SNAKE.removeEventListener(window,"keyup",d,!1),e.style.display="none",k.setBoardState(1),k.getBoardContainer().focus(),document.getElementById("pause").style.display="inline-block"},d=function(e){if(!e)var e=window.event;var t=e.which?e.which:e.keyCode;32!==t&&13!==t||o()};return SNAKE.addEventListener(window,"keyup",d,!1),SNAKE.addEventListener(a,"click",o,!1),e.appendChild(t),e.appendChild(a),e}(),g=b("You died :(","sbTryAgain","snake-try-again-dialog"),h=b("You win! :D","sbWin","snake-win-dialog"),SNAKE.addEventListener(r,"keyup",function(e){if(!e)e=window.event;return e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},!1),r.className="snake-game-container",p.style.zIndex=1e4,r.appendChild(p),r.appendChild(s),r.appendChild(c),r.appendChild(u),r.appendChild(m),r.appendChild(g),r.appendChild(h),l=new SNAKE.Snake({playingBoard:k,startRow:2,startCol:2}),d=new SNAKE.Food({playingBoard:k}),m.style.zIndex=1e3}function b(e,t,n){var a=document.createElement("div");a.id=t+y,a.className=n;var o=document.createElement("div");o.innerHTML="<p></p>"+e+"<p></p>";var d=document.createElement("button");d.appendChild(document.createTextNode("Play Again?"));var l=function(){return a.style.display="none",k.resetBoard(),k.setBoardState(1),k.getBoardContainer().focus(),location.reload(),!1};return SNAKE.addEventListener(window,"keyup",function(e){if(0===B&&"block"===a.style.display){e||(e=window.event);var t=e.which?e.which:e.keyCode;32!==t&&13!==t||l()}},!0),SNAKE.addEventListener(d,"click",l,!1),a.appendChild(o),a.appendChild(d),a}function H(e){var n=Math.max(t(l.snakeBody),t({tmp:{elm:d.getFoodElement()}}));r.removeChild(e),r.appendChild(e),e.style.zIndex=n,e.style.display="block",k.setBoardState(0)}function N(e){document.getElementById("style").setAttribute("href",e)}function x(e){document.cookie=e+"=; Max-Age=-99999999;"}k.grid=[],k.setPaused=function(e){E=e,l.setPaused(e),E?(p.style.display="block",document.getElementById("pause").innerHTML="Play"):(p.style.display="none",document.getElementById("pause").innerHTML="Pause")},k.getPaused=function(){return E},k.resetBoard=function(){SNAKE.removeEventListener(r,"keydown",i,!1),l.reset(),c.innerHTML="Score: 1",k.setupPlayingField()},k.getBoardState=function(){return B},k.setBoardState=function(e){B=e},k.getGridFoodValue=function(){return-1},k.getPlayingFieldElement=function(){return s},k.setBoardContainer=function(e){"string"==typeof e&&(e=document.getElementById(e)),e!==r&&(r=e,s=null,k.setupPlayingField())},k.getBoardContainer=function(){return r},k.getBlockWidth=function(){return 20},k.getBlockHeight=function(){return 20},k.setupPlayingField=function(){var e,t,o,m;s||S(),!0===f.fullScreen?(o=0,m=0,e=n()-20,t=a()-20):(o=f.top,m=f.left,e=f.width,t=f.height);var g=2*k.getBlockWidth()+e%k.getBlockWidth(),h=Math.min(v*k.getBlockWidth()-g,e-g),p=3*k.getBlockHeight()+t%k.getBlockHeight(),y=Math.min(w*k.getBlockHeight()-p,t-p);r.style.left=m+"px",r.style.top=o+"px",r.style.width=e+"px",r.style.height=t+"px",s.style.left=k.getBlockWidth()+"px",s.style.top=k.getBlockHeight()+"px",s.style.width=h+"px",s.style.height=y+"px";var B=p-k.getBlockHeight(),E=k.getBlockHeight()+y+Math.round((B-30)/2)+"px";c.style.top=E,c.style.left="0px",u.style.top=E,u.style.right="0px",k.grid=[];for(var b=h/k.getBlockWidth()+2,H=y/k.getBlockHeight()+2,N=0;N<H;N++){k.grid[N]=[];for(var x=0;x<b;x++)k.grid[N][x]=0===x||0===N||x===b-1||N===H-1?1:0}function A(e){var t=0;switch(e){case"up":t=38;break;case"right":t=39;break;case"down":t=40;break;case"left":t=37;break;case"pause":t=32}return t}d.randomlyPlaceFood(),i=function(e){if(!e)e=window.event;var t=e.which?e.which:e.keyCode;if("up"!=e.target.id&&"right"!=e.target.id&&"down"!=e.target.id&&"left"!=e.target.id&&"pause"!=e.target.id||(t=A(e.target.id)),1===k.getBoardState()){if(!(t>=37&&t<=40)&&87!==t&&65!==t&&83!==t&&68!==t)return;SNAKE.removeEventListener(r,"keydown",i,!1),SNAKE.removeEventListener(document.getElementById("pause"),"click",i,!1),document.querySelectorAll("#game-pad-wrapper span").forEach(function(e){SNAKE.removeEventListener(e,"click",i,!1)}),i=function(e){if(!e)e=window.event;var t=e.which?e.which:e.keyCode;return"up"!=e.target.id&&"right"!=e.target.id&&"down"!=e.target.id&&"left"!=e.target.id&&"pause"!=e.target.id||(t=A(e.target.id)),32===t&&(0!=k.getBoardState()&&k.setPaused(!k.getPaused()),setTimeout(function(){document.getElementById("game-area").focus()},10)),l.handleArrowKeys(t),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},SNAKE.addEventListener(r,"keydown",i,!1),document.querySelectorAll("#game-pad-wrapper span").forEach(function(e){SNAKE.addEventListener(e,"click",i,!1)}),SNAKE.addEventListener(document.getElementById("pause"),"click",i,!1),l.rebirth(),l.handleArrowKeys(t),k.setBoardState(2),l.go()}return e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),!1},SNAKE.addEventListener(r,"keydown",i,!1),SNAKE.addEventListener(document.getElementById("pause"),"click",i,!1),document.querySelectorAll("#game-pad-wrapper span").forEach(function(e){SNAKE.addEventListener(e,"click",i,!1)})},k.foodEaten=function(){(c.innerHTML="Score: "+l.snakeLength,l.snakeLength>localStorage.jsSnakeHighScore)&&(new Audio("audio/highscore.mp3").play(),localStorage.setItem("jsSnakeHighScore",l.snakeLength),u.innerHTML="Highscore: "+localStorage.jsSnakeHighScore);return!!d.randomlyPlaceFood()},k.handleDeath=function(){H(g)},k.handleWin=function(){H(h)},f.fullScreen=void 0!==f.fullScreen&&f.fullScreen,f.top=void 0===f.top?0:f.top,f.left=void 0===f.left?0:f.left,f.width=void 0===f.width?n()-20:f.width,a()<=640?f.height=void 0===f.height?Math.round(a()/1.45):f.height:f.height=void 0===f.height?Math.round(a()/1.35):f.height,f.fullScreen&&SNAKE.addEventListener(window,"resize",function(){k.setupPlayingField()},!1),k.setBoardState(0),f.boardContainer&&k.setBoardContainer(f.boardContainer),"null"===function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var o=n[a];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}("ck__th")&&(N("css/dark-theme.css?"+Math.random()),document.querySelector("#select option:last-child").setAttribute("selected",""),document.querySelector("#select option:first-child").removeAttribute("selected")),document.getElementById("select").onchange=function(){switch(console.log(),document.getElementById("select").selectedIndex){case 0:N("css/light-theme.css?"+Math.random()),x("ck__th");break;case 1:N("css/dark-theme.css?"+Math.random()),function(e,t,n){var a="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),a="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+a+";"}("ck__th","null",365);break;default:N("css/light-theme.css?"+Math.random()),x("ck__th")}setTimeout(function(){document.getElementById("game-area").focus()},10)}}}();