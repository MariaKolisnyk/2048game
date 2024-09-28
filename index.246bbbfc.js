!function(){var e=new/*#__PURE__*/(function(){var e;function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.board=e||[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.score=0,this.status="idle",this.size=this.board.length,this.addRandomTile(),this.addRandomTile()}return e=[{key:"addRandomTile",value:function(){for(var e=[],t=0;t<this.size;t++)for(var r=0;r<this.size;r++)0===this.board[t][r]&&e.push({row:t,col:r});if(e.length>0){var s=e[Math.floor(Math.random()*e.length)],i=s.row,a=s.col;this.board[i][a]=.9>Math.random()?2:4}}},{key:"moveLeft",value:function(){for(var e=this,t=!1,r=0;r<this.size;r++)!function(r){for(var s=e.board[r].filter(function(e){return e}),i=0;i<s.length-1;i++)s[i]===s[i+1]&&(s[i]*=2,e.score+=s[i],s.splice(i+1,1));for(;s.length<e.size;)s.push(0);e.board[r].every(function(e,t){return e===s[t]})||(e.board[r]=s,t=!0),t&&(e.addRandomTile(),e.checkGameOver())}(r)}},{key:"moveRight",value:function(){for(var e=this,t=!1,r=0;r<this.size;r++)!function(r){for(var s=e.board[r].filter(function(e){return e}).reverse(),i=0;i<s.length-1;i++)s[i]===s[i+1]&&(s[i]*=2,e.score+=s[i],s.splice(i+1,1));for(;s.length<e.size;)s.push(0);s.reverse(),e.board[r].every(function(e,t){return e===s[t]})||(e.board[r]=s,t=!0)}(r);t&&(this.addRandomTile(),this.checkGameOver())}},{key:"moveUp",value:function(){for(var e=!1,t=0;t<this.size;t++){for(var r=[],s=0;s<this.size;s++)0!==this.board[s][t]&&r.push(this.board[s][t]);for(var i=0;i<r.length-1;i++)r[i]===r[i+1]&&(r[i]*=2,this.score+=r[i],r.splice(i+1,1));for(;r.length<this.size;)r.push(0);for(var a=0;a<this.size;a++)this.board[a][t]!==r[a]&&(this.board[a][t]=r[a],e=!0)}e&&(this.addRandomTile(),this.checkGameOver())}},{key:"moveDown",value:function(){for(var e=!1,t=0;t<this.size;t++){for(var r=[],s=3;s>=0;s--)0!==this.board[s][t]&&r.push(this.board[s][t]);for(var i=0;i<r.length-1;i++)r[i]===r[i+1]&&(r[i]*=2,this.score+=r[i],r.splice(i+1,1));for(;r.length<this.size;)r.push(0);r.reverse();for(var a=0;a<this.size;a++)this.board[a][t]!==r[a]&&(this.board[a][t]=r[a],e=!0)}e&&(this.addRandomTile(),this.checkGameOver())}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.board}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.score=0,this.board=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){return this.start()}},{key:"checkGameOver",value:function(){for(var e=0;e<this.size;e++)for(var t=0;t<this.size;t++)if(0===this.board[e][t]||t<3&&this.board[e][t]===this.board[e][t+1]||e<3&&this.board[e][t]===this.board[e+1][t])return;this.status="lose"}}],function(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}(t.prototype,e),t}()),t=document.querySelector(".start"),r=document.querySelector(".message-start"),s=document.querySelector(".message-win"),i=document.querySelector(".message-lose");function a(){var t=e.getState(),a=e.getScore(),o=e.getStatus();document.querySelector(".game-score").textContent=a;for(var n=0;n<4;n++)for(var c=0;c<4;c++){var d=document.querySelector(".field-row:nth-child(".concat(n+1,") .field-cell:nth-child(").concat(c+1,")"));d.textContent=0===t[n][c]?"":t[n][c],d.className="field-cell field-cell--".concat(t[n][c])}"playing"===o?r.classList.add("hidden"):"win"===o?(s.classList.remove("hidden"),document.querySelector(".restart").addEventListener("click",function(){s.classList.add("hidden")})):"lose"===o?(i.classList.remove("hidden"),document.querySelector(".restart").addEventListener("click",function(){i.classList.add("hidden")})):(s.classList.add("hidden"),i.classList.add("hidden"))}t.addEventListener("click",function(){e.start(),a(),t.textContent="Restart",t.classList.add("restart"),t.classList.remove("start")}),document.addEventListener("keydown",function(t){if("playing"===e.getStatus()){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown()}a()}})}();
//# sourceMappingURL=index.246bbbfc.js.map
