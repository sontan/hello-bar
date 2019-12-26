/*!
 * 
 *   hello-bar v1.3.0
 *   https://github.com/AnandChowdhary/hello-bar
 * 
 *   Copyright (c) Anand Chowdhary (https://github.com/AnandChowdhary)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define("HelloBar",[],t):"object"===typeof exports?exports.HelloBar=t():e.HelloBar=t()}(window,(function(){return function(e){var t={};function __webpack_require__(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,i){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(__webpack_require__.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(i,n,function(t){return e[t]}.bind(null,n));return i},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=2)}([function(e,t){e.exports=function(e,t,i){var n=/#/.test(e),r=void 0!==t&&void 0!==i,o=Array.isArray(e),s="#ffffff",a=0;if(n)a=hexToDec(e.substr(1,2)),t=hexToDec(e.substr(3,2)),i=hexToDec(e.substr(5,2));else if(r)a=parseInt(e),t=parseInt(t),i=parseInt(i);else{if(!o)return s;a=parseInt(e[0]),t=parseInt(e[1]),i=parseInt(e[2])}return Math.sqrt(a*a*.241+t*t*.691+i*i*.068)>130&&(s="#000000"),s};var hexToDec=function(e){var t=e.replace(/[^a-f0-9]/gi,"");return parseInt(t,16)}},function(e,t){function debounce(e,t,i){var n,r,o,s,a;function later(){var c=Date.now()-s;c<t&&c>=0?n=setTimeout(later,t-c):(n=null,i||(a=e.apply(o,r),o=r=null))}null==t&&(t=100);var debounced=function(){o=this,r=arguments,s=Date.now();var c=i&&!n;return n||(n=setTimeout(later,t)),c&&(a=e.apply(o,r),o=r=null),a};return debounced.clear=function(){n&&(clearTimeout(n),n=null)},debounced.flush=function(){n&&(a=e.apply(o,r),o=r=null,clearTimeout(n),n=null)},debounced}debounce.debounce=debounce,e.exports=debounce},function(e,t,i){e.exports=i(4)},function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(3);var n=i(0),r=i.n(n),o=i(1),s=i.n(o),a=["BE","BG","CZ","DK","DE","EE","IE","EL","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","UK"];function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function App(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,App),e=e||{},this.settings=e,["i18n","targeting"].forEach((function(e){t.settings[e]=t.settings[e]||{}})),this.settings.targeting.location=this.settings.targeting.location||{},this.settings.targeting.params=this.settings.targeting.params||{},this.settings.targeting.time=this.settings.targeting.time||{},this.settings.targeting.time.before=this.settings.targeting.time.before||{},this.settings.targeting.time.after=this.settings.targeting.time.after||{},this.id="helloBar_"+Math.random().toString(36).substr(2),this.settings.id&&(this.id=this.settings.id),this.bar=document.createElement("div"),this.bar.setAttribute("id",this.id),"object"===_typeof(this.settings.text)?this.text=this.settings.text[Math.floor(Math.random()*this.settings.text.length)]:this.text=this.settings.text,this.bar.innerHTML='<div class="hello-bar-container"><p class="hello-bar-text">'.concat(this.text,'</p></div><div class="hello-bar-text--after"></div>'),this.settings.hideClose||(this.bar.innerHTML+='<button class="hello-bar-button" aria-controls="'.concat(this.id,'" aria-expanded="true" aria-label="').concat(this.settings.i18n.hideText||"Hide announcement",'">\n        <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">\n            <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>\n        </svg>\n      </button>')),this.bar.classList.add("hello-bar"),this.settings.fixed&&this.bar.classList.add("hello-bar--is-fixed"),this.settings.multiline&&this.bar.classList.add("hello-bar--is-multiline"),"bottom"===this.settings.position?(this.bar.classList.add("hello-bar--is-bottom"),this.marginProp="marginBottom"):this.marginProp="marginTop",this.events={},window.addEventListener("resize",s()((function(){document.querySelector("#".concat(t.id))&&(t.$emit("window-resize"),t.unMove(),t.calculateHeight(),t.settings.disableBodyMove||t.moveElements(document.body),t.moveElements(t.settings.move),t.colorizeBar())}),200)),this.confirmShow().then((function(){t.$emit("before-created"),t.insertBar(),t.functionBar(),t.calculateHeight(),t.colorizeBar(),t.settings.disableBodyMove||t.moveElements(document.body),t.moveElements(t.settings.move),t.showBar(),t.$emit("after-created")})).catch((function(){t.$emit("not-created")}))}var e,t,i;return e=App,(t=[{key:"on",value:function(e,t){this.events[e]=t}},{key:"$emit",value:function(e,t){this.events[e]&&"function"===typeof this.events[e]&&this.events[e](t)}},{key:"confirmShow",value:function(){var e=this;return new Promise((function(t,i){var finishConfirmation=function(){if(e.settings.targeting.once&&sessionStorage.getItem("hello-bar-".concat(e.id,"--session-showed")))return i();if(e.settings.targeting.onceUser&&localStorage.getItem("hello-bar-".concat(e.id,"--user-showed")))return i();if(Object.keys(e.settings.targeting.time).length){var n={year:"getFullYear",month:"getMonth",day:"getDate",dayOfWeek:"getDay",hour:"getHours",minute:"getMinutes",second:"getSeconds"},r=["getMonth","getDay"];["year","month","day","hour","minute","second"].forEach((function(t){var o=new Date;if(e.settings.targeting.time.after[t]){var s=o[n[t]]();if(r.includes(t)&&(s+=1),s<=e.settings.targeting.time.after[t])return i()}if(e.settings.targeting.time.before[t]){var a=o[n[t]]();if(r.includes(t)&&(a+=1),a>=e.settings.targeting.time.after[t])return i()}}))}return e.settings.targeting.params&&Object.keys(e.settings.targeting.params).forEach((function(t){var n=function(e){var t=window.location.href;e=e.replace(/[[\]]/g,"\\$&");var i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);if(i&&i[2])return decodeURIComponent(i[2].replace(/\+/g," "))}(t);if(n&&n!==e.settings.targeting.params[t])return i()})),e.settings.targeting.pathname&&window.location.pathname!==e.settings.targeting.pathname?i():e.settings.targeting.href&&window.location.href!==e.settings.targeting.href?i():void t()};if(e.settings.hide)return i();Object.keys(e.settings.targeting.location).length?e.getIpInfo().then((function(t){if(e.settings.targeting.location.eu&&!a.includes(t.country))return i();["country","city","ip","postal","region"].forEach((function(n){if(e.settings.targeting.location[n]&&e.settings.targeting.location[n].constructor===Array&&!e.settings.targeting.location[n].includes(t[n]))return i()})),finishConfirmation()})):finishConfirmation()}))}},{key:"showBar",value:function(){var e=this;document.querySelector("#".concat(this.id))&&(this.bar.style.transition=(this.settings.duration||500)+"ms",setTimeout((function(){e.bar.classList.add("hello-bar--is-visible")}),this.settings.delay||1),this.$emit("show-bar",this.bar))}},{key:"unMove",value:function(){for(var e=document.querySelectorAll(".hello-bar--has-moved"),t=0;t<e.length;t++){var i=parseInt(e[t].style[this.marginProp]);e[t].style[this.marginProp]="".concat(i-this.height,"px"),e[t].classList.remove("hello-bar--has-moved")}}},{key:"hideBar",value:function(){var e=this;document.querySelector("#".concat(this.id))&&(this.bar.classList.remove("hello-bar--is-visible"),sessionStorage.setItem("hello-bar-".concat(this.id,"--session-showed"),!0),localStorage.setItem("hello-bar-".concat(this.id,"--user-showed"),!0),this.unMove(),setTimeout((function(){e.bar.parentNode.removeChild(e.bar)}),(this.settings.duration||500)+1),this.$emit("hide-bar",this.bar))}},{key:"functionBar",value:function(){var e=this;document.querySelector(".hello-bar button.hello-bar-button")&&document.querySelector(".hello-bar button.hello-bar-button").addEventListener("click",(function(){e.$emit("close-bar",e.bar),e.hideBar()}));var t={mouseenter:"mouse-enter",mouseleave:"mouse-leave",click:"mouse-click",mouseup:"mouse-up",mousedown:"mouse-down"},i=document.querySelector(".hello-bar .cta");Object.keys(t).forEach((function(n){e.bar.addEventListener(n,(function(){return e.$emit(t[n],e.bar)})),i&&i.addEventListener(n,(function(){return e.$emit("cta-".concat(t[n]),i)}))}))}},{key:"colorizeBar",value:function(){if(document.querySelector("#".concat(this.id))){var e=this.settings.background||"#eeeeee",t=this.settings.textColor||r()(e);this.bar.style.backgroundColor=e,document.querySelector(".hello-bar .hello-bar-text--after")&&(document.querySelector(".hello-bar .hello-bar-text--after").style.background="linear-gradient(to right, rgba(255, 255, 255, 0), ".concat(e,")")),this.bar.style.color=t,this.bar.style.textAlign=this.settings.align||"center",document.querySelector(".hello-bar p.hello-bar-text .cta")&&(document.querySelector(".hello-bar p.hello-bar-text .cta").style.color=this.settings.background||"#eeeeee",document.querySelector(".hello-bar p.hello-bar-text .cta").style.background=t,this.$emit("color-bar",{backgroundColor:e,textColor:t}))}}},{key:"calculateHeight",value:function(){document.querySelector("#".concat(this.id))&&(this.settings.size&&this.bar.classList.add("hello-bar--size-".concat(this.settings.size)),"function"===typeof this.bar.getBoundingClientRect&&this.bar.getBoundingClientRect().height?this.height=this.bar.getBoundingClientRect().height:this.height=this.bar.offsetHeight,this.height=parseInt(this.height),this.$emit("calculate-height",this.height))}},{key:"insertBar",value:function(){var e=document.querySelector("body > *");e?document.body.insertBefore(this.bar,e):document.body.appendChild(this.bar),this.$emit("created",this.bar)}},{key:"moveElements",value:function(e){if(e)if("string"===typeof e)for(var t=document.querySelectorAll(e),i=0;i<t.length;i++)this.moveElements(t[i]);else if(e.constructor===Array&&e.length)for(var n=0;n<e.length;n++)this.moveElements(e[n]);else"object"===_typeof(e)&&("object"!==_typeof(e.classList)||"function"!==typeof e.classList.add||e.classList.contains("hello-bar--has-moved")||(e.style[this.marginProp]="".concat(this.height,"px"),this.$emit("move-element",e),e.classList.add("hello-bar--has-moved")))}},{key:"getIpInfo",value:function(){var e=this;return this.$emit("start-ip-info"),new Promise((function(t,i){var n,r;(n=e.settings.ipEndpoint||"https://ipinfo.io/json",new Promise((function(e,t){var i="hello_bar_cache_".concat(n).concat(r?"_"+JSON.stringify(r):"");if(localStorage.getItem(i))try{var o=JSON.parse(localStorage.getItem(i));if(o.expires_at>(new Date).getTime())return e(o.cache_value)}catch(s){}fetch(n,r).then((function(e){return e.json()})).then((function(t){localStorage.setItem(i,JSON.stringify({created_at:(new Date).getTime(),expires_at:(new Date).getTime()+6048e5,cache_value:t})),e(t)})).catch((function(e){return t(e)}))}))).then((function(i){e.$emit("fetch-ip-info",i),t(i)})).catch((function(t){e.$emit("error-ip-info",t),i(t)}))}))}}])&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),App}();t.default=c}])}));
//# sourceMappingURL=index.js.map