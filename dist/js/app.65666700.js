(function(t){function e(e){for(var n,r,h=e[0],o=e[1],l=e[2],u=0,f=[];u<h.length;u++)r=h[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,h=1;h<i.length;h++){var o=i[h];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var h=window["webpackJsonp"]=window["webpackJsonp"]||[],o=h.push.bind(h);h.push=e,h=h.slice();for(var l=0;l<h.length;l++)e(h[l]);var c=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"21ed":function(t,e,i){"use strict";var n=i("80a4"),a=i.n(n);a.a},"80a4":function(t,e,i){},c821:function(t,e,i){},cac0:function(t,e,i){"use strict";var n=i("c821"),a=i.n(n);a.a},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"maze-container"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.difficulty,expression:"difficulty"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.difficulty=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"easy"}},[t._v("Easy")]),i("option",{attrs:{value:"normal"}},[t._v("Normal")]),i("option",{attrs:{value:"hard"}},[t._v("Hard")])]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.strategy,expression:"strategy"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.strategy=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"cluster"}},[t._v("cluster")]),i("option",{attrs:{value:"dig"}},[t._v("dig")])]),i("div",{staticClass:"time"},[t._v(t._s(t.time)+"ms")]),i("maze",{style:t.mazeStyle,attrs:{strategy:t.strategy,difficulty:t.difficulty,historyMode:!1},on:{start:t.onStart,finish:t.onFinish,init:t.onInit}})],1),t._v(" `, ")])},s=[],r=i("d4ec"),h=i("bee2"),o=i("262e"),l=i("2caf"),c=i("9ab4"),u=i("60a3"),f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"maze",attrs:{tabindex:"-1"},on:{keyup:t.onKeyUp}},[i("canvas",{ref:"mazeCanvas",attrs:{width:t.width,height:t.height}}),i("canvas",{ref:"goalCanvas",attrs:{width:t.width,height:t.height}}),i("canvas",{ref:"effectCanvas",style:t.effectStyle,attrs:{width:t.width,height:t.height}}),i("canvas",{ref:"playerCanvas",attrs:{width:t.width,height:t.height},on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,mousemove:t.onMouseMove}}),t.cache?i("div",{style:t.dotStyle}):t._e()])},d=[],g=(i("45fc"),i("b85c")),y=function(){function t(e,i){Object(r["a"])(this,t);for(var n=(e+1)*i,a=e*(i+1),s=e*i,h=new Array(n),o=0;o<h.length;o++)h[o]=!1;for(var l=new Array(a),c=0;c<l.length;c++)l[c]=!1;for(var u=new Array(s),f=0;f<u.length;f++)u[f]=f;this.lx=e,this.ly=i,this.bondH=h,this.bondV=l,this.point=u,this.goal={x:this.lx-1,y:this.ly-1},this.makeMaze()}return Object(h["a"])(t,[{key:"getClusterIndex",value:function(t,e){var i=this.lx*e+t;while(i!==this.point[i])i=this.point[i];return i}},{key:"connect",value:function(t,e,i,n){var a=this.getClusterIndex(t,e),s=this.getClusterIndex(i,n);a<s?this.point[s]=a:this.point[a]=s}},{key:"makeMazeSub",value:function(t){for(var e=0;e<this.ly;e++)for(var i=0;i<this.lx-1;i++){var n=Math.random();n<t||this.getClusterIndex(i,e)===this.getClusterIndex(i+1,e)||(this.bondH[this.lx*e+e+i+1]=!0,this.connect(i,e,i+1,e))}for(var a=0;a<this.ly-1;a++)for(var s=0;s<this.lx;s++){var r=Math.random();r<t||this.getClusterIndex(s,a)===this.getClusterIndex(s,a+1)||(this.bondV[(a+1)*this.lx+s]=!0,this.connect(s,a,s,a+1))}}},{key:"makeMaze",value:function(){for(var t=0;t<10;t++)this.makeMazeSub(.8);this.makeMazeSub(1),this.bondH[0]=!0,this.bondH[(this.lx+1)*this.ly-1]=!0,this.goal={x:this.lx-1,y:this.ly-1}}}]),t}(),v=y,p=(i("4de4"),function(){function t(e,i){var n=this;Object(r["a"])(this,t),this.isOpen=function(t,e){return n.isOpenArr[e*n.lx+t]};for(var a=(e+1)*i,s=e*(i+1),h=e*i,o=new Array(a),l=0;l<o.length;l++)o[l]=!1;for(var c=new Array(s),u=0;u<c.length;u++)c[u]=!1;for(var f=new Array(h),d=0;d<h;d++)f[d]=!1;this.lx=e,this.ly=i,this.bondH=o,this.bondV=c,this.isOpenArr=f,this.makeMaze(),this.goal={x:this.lx-1,y:this.ly-1}}return Object(h["a"])(t,[{key:"makeMaze",value:function(){var t=[];t.push(Math.floor(Math.random()*this.isOpenArr.length));while(t.length>0){var e=t.pop();if(null==e)break;var i=e%this.lx,n=Math.floor(e/this.lx);this.isOpenArr[e]=!0;var a=this.getDirectionCandidate(i,n);if(!this.isDeadEnd(a)){t.push(e);var s=this.getNeighbor(i,n,this.getRandomDirection(a));t.push(s.iy*this.lx+s.ix)}}this.bondH[0]=!0,this.bondH[(this.lx+1)*this.ly-1]=!0}},{key:"isDeadEnd",value:function(t){return 0===t.north&&0===t.south&&0===t.west&&0===t.east}},{key:"getDirectionCandidate",value:function(t,e){var i=e>0&&!this.isOpen(t,e-1),n=e<this.ly-1&&!this.isOpen(t,e+1),a=t>0&&!this.isOpen(t-1,e),s=t<this.lx-1&&!this.isOpen(t+1,e),r=[i,n,a,s].filter((function(t){return t})).length,h=r>0?1/r:0;return{north:i?h:0,south:n?h:0,west:a?h:0,east:s?h:0}}},{key:"getRandomDirection",value:function(t){var e=t.north+t.south+t.west+t.east;if(0===e)throw new Error("No direction available");var i=Math.random()*e,n=0;for(var a in t){var s=t[a];if(n+=s,i<n)return a}throw new Error("Something wrong")}},{key:"getNeighbor",value:function(t,e,i){var n={ix:t,iy:e};switch(i){case"north":n.iy-=1,this.bondV[e*this.lx+t]=!0;break;case"south":n.iy+=1,this.bondV[(e+1)*this.lx+t]=!0;break;case"east":n.ix+=1,this.bondH[e*(this.lx+1)+t+1]=!0;break;case"west":n.ix-=1,this.bondH[e*(this.lx+1)+t]=!0;break;default:throw new Error("Something wrong")}return n}}]),t}()),m=p,x=i("e0a7"),w=i.n(x),b=i("e5ad"),A=i.n(b),C=(i("cb29"),function(){function t(e,i,n,a,s){Object(r["a"])(this,t),this.ctx=e,this.unitWidth=i,this.unitHeight=n,this.offsetLeft=a,this.offsetTop=s,this.wallWidth=2}return Object(h["a"])(t,[{key:"clear",value:function(t,e){this.ctx.clearRect(0,0,t,e)}},{key:"setColor",value:function(t,e){this.ctx.fillStyle=t,this.ctx.strokeStyle=e}},{key:"beginPath",value:function(){this.ctx.beginPath()}},{key:"stroke",value:function(){this.ctx.stroke()}},{key:"drawImage",value:function(t,e,i){var n=this.unitWidth/i.width,a=this.unitHeight/i.height,s=t*this.unitWidth/n+this.offsetLeft/n,r=e*this.unitHeight/a+this.offsetTop/a;this.ctx.save(),this.ctx.scale(n,a),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(i,s,r),this.ctx.restore()}},{key:"drawCircle",value:function(t,e,i){this.ctx.beginPath();var n=t*this.unitWidth+this.unitWidth/2+this.offsetLeft,a=e*this.unitHeight+this.unitHeight/2+this.offsetTop;i=null!=i?i:Math.min(this.unitWidth,this.unitHeight)/2-this.wallWidth,this.ctx.arc(n,a,i,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke()}},{key:"drawLine",value:function(t,e,i,n){var a=this.offsetLeft+t*this.unitWidth,s=this.offsetTop+e*this.unitHeight,r=this.offsetLeft+i*this.unitWidth,h=this.offsetTop+n*this.unitHeight;this.ctx.moveTo(a,s),this.ctx.lineTo(r,h)}},{key:"drawText",value:function(t,e,i){var n=e*this.unitWidth+this.offsetLeft,a=i*this.unitHeight+this.offsetTop;this.ctx.fillStyle="black",this.ctx.fillText(t,n,a)}}]),t}()),M=C,k={dig:m,cluster:v},H={name:"maze",data:function(){return{pathHistory:[],cache:null,dotPos:{offsetX:null,offsetY:null},width:null,height:null,margin:5,image:null,goalImage:null,maze:{bondH:[],bondV:[],goal:{x:null,y:null}},player:{id:"00",x:0,y:0},isFinished:!1,seed:Date.now()}},props:{difficulty:{default:"normal",type:String},imagePath:{default:w.a,type:String},goalImagePath:{default:A.a,type:String},strategy:{default:"cluster",type:String},finishWords:{type:Array,default:function(){return["BooYah!","Wow!","I did it!","Woohoo!"]}},historyMode:{type:Boolean,default:!1}},computed:{marginTop:function(){return(this.height-this.ly*this.cellHeight)/2},marginLeft:function(){return(this.width-this.lx*this.cellWidth)/2},cellWidth:function(){switch(this.difficulty){case"easy":return 50;case"hard":return 10;default:return 20}},cellHeight:function(){switch(this.difficulty){case"easy":return 50;case"hard":return 10;default:return 20}},lx:function(){return Math.max(1,Math.floor((this.width-2*this.margin)/this.cellWidth))},ly:function(){return Math.max(1,Math.floor((this.height-2*this.margin)/this.cellHeight))},effectStyle:function(){return this.isFinished?{display:"inline"}:{display:"none"}},dotStyle:function(){return{position:"absolute",backgroundColor:"black",height:"5px",width:"5px",opacity:.5,borderRadius:"50%",top:this.dotPos.offsetY+"px",left:this.dotPos.offsetX+"px"}}},mounted:function(){var t=this;this.height=this.$el.offsetHeight-this.margin,this.width=this.$el.offsetWidth-this.margin;var e=new Image;e.addEventListener("load",(function(){t.image=e})),e.src=this.imagePath;var i=new Image;i.addEventListener("load",(function(){t.goalImage=i})),i.src=this.goalImagePath,window.addEventListener("resize",(function(){t.height=t.$el.offsetHeight,t.width=t.$el.offsetWidth}))},watch:{height:function(){this.renderMaze()},width:function(){this.renderMaze()},lx:function(){this.resetMaze()},ly:function(){this.resetMaze()},maze:function(){this.$emit("init"),this.renderMaze()},player:function(){this.renderPlayer()},image:function(){this.renderPlayer()},goalImage:function(){this.renderGoal()},strategy:function(){this.$emit("init"),this.resetMaze()},isFinished:function(){this.isFinished&&(this.renderConguraturations(),setTimeout(this.resetMaze,800))}},methods:{onTouchStart:function(t){t.preventDefault(),t.stopPropagation();var e=t.touches[0];this.cache={},this.cache.rect=this.cache.avatorPosition=this.cache.originalPosition=n["a"].set(this,"cache",{rect:e.target.getBoundingClientRect(),avatorPosition:{x:this.player.x*this.cellWidth+this.marginLeft+this.cellWidth/2,y:this.player.y*this.cellHeight+this.marginTop+this.cellHeight/2},originalPosition:{x:e.clientX,y:e.clientY},pos:{offsetX:e.clientX,offsetY:e.clientY}})},onTouchMove:function(t){t.preventDefault(),t.stopPropagation();var e=t.touches[0],i=this.cache.avatorPosition,a=this.cache.originalPosition;n["a"].set(this,"dotPos",{offsetX:e.clientX-a.x+i.x,offsetY:e.clientY-a.y+i.y}),this.handleMove(this.dotPos)},onTouchEnd:function(t){t.preventDefault(),t.stopPropagation(),this.cache=null},onMouseMove:function(t){this.handleMove(t)},handleMove:function(t){var e=t.offsetX,i=t.offsetY,n=Math.floor((e-this.marginLeft)/this.cellWidth),a=Math.floor((i-this.marginTop)/this.cellHeight),s=n-this.player.x,r=a-this.player.y;Math.abs(s)+Math.abs(r)<=2&&this.moveBy(s,r)},onKeyUp:function(t){switch(t.keyCode){case 37:this.goLeft();break;case 38:this.goUp();break;case 39:this.goRight();break;case 40:this.goDown()}},goUp:function(){this.moveBy(0,-1)},goDown:function(){this.moveBy(0,1)},goLeft:function(){this.moveBy(-1,0)},goRight:function(){this.moveBy(1,0)},moveBy:function(t,e){var i=this.player.x+t,n=this.player.y+e;this.moveTo(i,n)},canReach:function(t,e,i,n){if(t===i&&e===n)return!0;var a=i>t?1:-1,s=n>e?1:-1,r=i>t?(this.lx+1)*e+t+a:(this.lx+1)*e+t,h=n>e?this.lx*(e+s)+t:this.lx*e+t;return!(t===i||!this.maze.bondH[r]||!this.canReach(t+a,e,i,n))||!(e===n||!this.maze.bondV[h]||!this.canReach(t,e+s,i,n))},moveTo:function(t,e){var i=this.player.x,a=this.player.y;if(!(t<0||t>=this.lx||e<0||e>=this.ly)&&this.canReach(i,a,t,e)){n["a"].set(this,"player",{x:t,y:e}),this.isStarted||(this.isStarted=!0,this.$emit("start")),t!==this.maze.goal.x||e!==this.maze.goal.y||this.isFinished||(this.isFinished=!0,this.$emit("finish"));var s={x:t,y:e},r=this.pathHistory.some((function(t){return t.x===s.x&&t.y===s.y}));r||this.pathHistory.push(s)}},renderPathHistory:function(t){if(this.historyMode){var e=new M(this.$refs.playerCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop);e.clear(this.width,this.height),e.setColor("#ff1900","#222");var i,n=Object(g["a"])(this.pathHistory);try{for(n.s();!(i=n.n()).done;){var a=i.value;t.x==a.x&&t.y==a.y||e.drawCircle(a.x,a.y)}}catch(s){n.e(s)}finally{n.f()}}},resetMaze:function(){var t=this.lx,e=this.ly,i=this.seed++;if(t>0&&e>0){var a=k[this.strategy],s=new a(t,e,i);n["a"].set(this,"maze",s),n["a"].set(this,"player",{x:0,y:0}),n["a"].set(this,"pathHistory",[]),this.isStarted=!1,this.isFinished=!1}},renderPlayer:function(){var t=new M(this.$refs.playerCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop),e=this.player;t.clear(this.width,this.height),t.ctx=this.$refs.playerCanvas.getContext("2d"),t.setColor("#FF9800","#222"),this.renderPathHistory(e),null!=this.image?t.drawImage(e.x,e.y,this.image):t.drawCircle(e.x,e.y)},renderGoal:function(){var t=new M(this.$refs.goalCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop),e=this.maze,i=e.goal;t.ctx=this.$refs.goalCanvas.getContext("2d"),t.clear(this.width,this.height),t.setColor("#4CAF50","#222"),null!=this.goalImage?t.drawImage(i.x,i.y,this.goalImage):t.drawCircle(i.x,i.y)},renderConguraturations:function(){var t=new M(this.$refs.effectCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop);t.clear(this.width,this.height);var e=this.finishWords,i=e[Math.floor(e.length*Math.random())];t.drawText(i,this.player.x,this.player.y)},renderMaze:function(){var t=this;this.$nextTick((function(){var e=new M(t.$refs.mazeCanvas.getContext("2d"),t.cellWidth,t.cellHeight,t.marginLeft,t.marginTop),i=t.lx,n=t.maze,a=n.bondH,s=n.bondV;e.clear(t.width,t.height),e.setColor(null,"#222"),e.beginPath();for(var r=0;r<a.length;r++)if(!a[r]){var h=r%(i+1),o=Math.floor(r/(i+1)),l=h,c=o+1;e.drawLine(h,o,l,c)}for(var u=0;u<s.length;u++)if(!s[u]){var f=u%i,d=Math.floor(u/i),g=f+1,y=d;e.drawLine(f,d,g,y)}e.stroke(),t.renderPlayer(),t.renderGoal()}))}}},O=H,P=(i("21ed"),i("2877")),S=Object(P["a"])(O,f,d,!1,null,"4d5eb4e5",null),T=S.exports,z=function(){var t=function(t){Object(o["a"])(i,t);var e=Object(l["a"])(i);function i(){var t;return Object(r["a"])(this,i),t=e.apply(this,arguments),t.mazeStyle={width:"100%",height:"100%"},t.startTime=0,t.time=0,t.difficulty="normal",t.strategy="cluster",t}return Object(h["a"])(i,[{key:"onStart",value:function(){this.startTime=Date.now()}},{key:"onFinish",value:function(){this.time=Date.now()-this.startTime}},{key:"onInit",value:function(){this.startTime=0}}]),i}(u["b"]);return t=Object(c["a"])([Object(u["a"])({components:{Maze:T}})],t),t}(),W=z,I=W,j=(i("cac0"),Object(P["a"])(I,a,s,!1,null,"2034642f",null)),E=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(E)}}).$mount("#app")},e0a7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAaElEQVR42r3UwQ7AIAgDUP7/p7vTDrqixeJMSDzoC0og4ucFEgYEfOMA5hCHm7AC2gqOB1eIiFLg3Z1kmWJLNAFrf3cVTFC9CBZYyXxCvSeXULMVNWxugm3H6IWAOwvtuRjkMjqmtgw+kPJUyDu8u0QAAAAASUVORK5CYII="},e5ad:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAYElEQVR42mNgoCP4Ly0t/R9EI2HKDHz79i3YoDfxEEypwRgGYjH4P1UMJNdwogxEM3jUQBwGImNqGYgijicpkWUgVoOpYSCKwSQlbKoVDoPawP9Ykg3lBlK1LKS2gWQDALw+C1ZIx81EAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.65666700.js.map