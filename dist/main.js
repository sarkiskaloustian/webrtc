(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(15),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body{\n    margin: 0px;\n}\n\n.controls-wrapper{\n    margin-left:auto;\n    margin-right:auto;\n    width:400px;\n\n}\n.controls-inside-wrapper {\n    width:400px;\n    margin:3px;\n}\n\n#callButton {\n    -webkit-appearance: none;\n    font-size: 22px;\n    width: 48%;\n    height: 100px;\n}\n\n#endButton {\n    -webkit-appearance: none;\n    font-size: 22px;\n    width: 48%;\n    height: 100px;\n}\n\n#video-wrapper {\n    width: 100%;\n    position: relative;\n}\n\n#remoteVideo {\n    margin: 0;\n    width: 100%;\n    vertical-align: text-top;\n}\n\n#localVideo {\n    margin: 0px;\n    width: 100%;\n}\n\n.video-wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: 200px;\n    width:100%;\n    height:100%;\n}\n\n.box1 {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n}\n\n.box2 {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    grid-row-end: 4;\n}\n\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;;AAEf;AACA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,eAAe;IACf,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,wBAAwB;AAC5B;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,qBAAqB;IACrB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,eAAe;AACnB",sourcesContent:["body{\n    margin: 0px;\n}\n\n.controls-wrapper{\n    margin-left:auto;\n    margin-right:auto;\n    width:400px;\n\n}\n.controls-inside-wrapper {\n    width:400px;\n    margin:3px;\n}\n\n#callButton {\n    -webkit-appearance: none;\n    font-size: 22px;\n    width: 48%;\n    height: 100px;\n}\n\n#endButton {\n    -webkit-appearance: none;\n    font-size: 22px;\n    width: 48%;\n    height: 100px;\n}\n\n#video-wrapper {\n    width: 100%;\n    position: relative;\n}\n\n#remoteVideo {\n    margin: 0;\n    width: 100%;\n    vertical-align: text-top;\n}\n\n#localVideo {\n    margin: 0px;\n    width: 100%;\n}\n\n.video-wrapper {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: 200px;\n    width:100%;\n    height:100%;\n}\n\n.box1 {\n    grid-column-start: 2;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 4;\n}\n\n.box2 {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    grid-row-end: 4;\n}\n\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}n.exports=function(n){var t,o,r=(o=4,function(n){if(Array.isArray(n))return n}(t=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}}(t,o)||function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],a=r[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),s="/*# ".concat(d," */"),l=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([s]).join("\n")}return[i].join("\n")}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],d=e.base?c[0]+e.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=a(l),A={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(A)):i.push({identifier:l,updater:g(A,e),references:1}),o.push(l)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function A(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,f=0;function g(n,e){var t,o,r;if(e.singleton){var i=f++;t=p||(p=d(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=d(e),o=A.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(n,e),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(28);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,navigator.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia,window.RTCPeerConnection=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,window.RTCIceCandidate=window.RTCIceCandidate||window.mozRTCIceCandidate||window.webkitRTCIceCandidate,window.RTCSessionDescription=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription,window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition||window.mozSpeechRecognition||window.msSpeechRecognition||window.oSpeechRecognition;var r={video:!0,audio:!0},i=null,a=null,c=null,d=null,s=null,l=null,u=new WebSocket("wss://192.168.0.194/myWebSocket"),A={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};function p(){(l=new RTCPeerConnection(A)).onicecandidate=f,l.ontrack=g}function f(n){n&&n.candidate&&u.send(JSON.stringify({candidate:n.candidate}))}function g(n){a.setAttribute("disabled",!0),c.removeAttribute("disabled"),s.srcObject=n.streams[0]}function w(){a.removeAttribute("disabled"),c.setAttribute("disabled",!0),d.srcObject.getTracks().forEach((function(n){return n.stop()})),l=null,s&&(s.srcObject=null),d&&(d.srcObject=null)}a=document.getElementById("callButton"),c=document.getElementById("endButton"),d=document.getElementById("localVideo"),s=document.getElementById("remoteVideo"),a.removeAttribute("disabled"),a.addEventListener("click",(function(){p(),navigator.mediaDevices.getUserMedia(r).then((function(n){i=n,d.srcObject=i,i.getTracks().forEach((function(n){return l.addTrack(n,i)})),l.createOffer().then((function(n){var e=new RTCSessionDescription(n);return l.setLocalDescription(e),e})).then((function(n){console.log("createAndSendOffer3 :",n),u.send(JSON.stringify({sdp:n}))})).catch((function(n){console.log("error",n)}))})).catch((function(n){console.error("Error accessing media devices.",n)}))})),c.addEventListener("click",(function(n){w(),u.send(JSON.stringify({closeConnection:!0}))})),u.onmessage=function(n){var e;l||(p(),navigator.mediaDevices.getUserMedia(r).then((function(n){i=n,d.srcObject=i,i.getTracks().forEach((function(n){return l.addTrack(n,i)})),l.createAnswer().then((function(n){var e=new RTCSessionDescription(n);return l.setLocalDescription(e),e})).then((function(n){u.send(JSON.stringify({sdp:n}))})).catch((function(n){console.log("errorAns",n)}))})).catch((function(n){console.error("Error accessing media devices.",n)}))),e=JSON.parse(n.data),"closed"==l.connectionState&&p(),e.sdp?(console.log("Received SDP from remote peer.",l),l.setRemoteDescription(new RTCSessionDescription(e.sdp))):e.candidate?(console.log("Received ICECandidate from remote peer."),l.addIceCandidate(new RTCIceCandidate(e.candidate))):e.closeConnection&&(console.log("Received 'close call' signal from remote peer."),w())},document.body.appendChild(document.createElement("div"))})()})();
//# sourceMappingURL=main.js.map