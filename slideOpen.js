!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var i='\n\t<div class="'.concat("pixnet-slideopen-root",'">\n\t\t<div class="pixnet-slideopen-frame">\n\n\t\t\t<div class="pixnet-slideopen-materialframe">\n\t\t\t\t<a class="pixnet-slideopen-link" target="_blank">\n\t\t\t    \t<img class="').concat("pixnet-slideopen-bg",'">  \n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="pixnet-slideopen-videoframe">\n\t\t\t\t<div class="').concat("pixnet-slideopen-video",'"></div>\n\t\t\t</div>\n    \t\t\n  \t\t</div>\n    \n    \n\t</div>\n'),s=(new RegExp(/\.(jpg|png|gif|htm|html|mp4)\?*.*$/),new RegExp(/\.(jpg|png|gif)\?*.*$/)),o=new RegExp(/\.(mp4)\?*.*$/),l=(new RegExp(/\.(htm|html)\?*.*$/),{value:""}),a={createTracker:function(){window.ga=window.ga||function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(ga.q=ga.q||[]).push(t)},ga("create","UA-126760750-1","auto");var e=document.createElement("script");if(e.async=!0,e.src="https://www.google-analytics.com/analytics.js",document.head.appendChild(e),!window._piq){window._piq=[["setCustomVar","venue","pixnet"],["setCustomVar","visitor_id",""],["setCustomVar","label",""]];var t=document.createElement("script");t.async=!0,t.src="https://s.pixanalytics.com/js/pi.min.js",document.head.appendChild(t)}},setLabel:function(e){l.value=e},sendEvent:function(e,t){ga("send","event","slideopen_ad",e,l.value,t),_piq.push(["trackEvent","slideopen_ad",e,l.value,t])}};function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c="pixnet-ad-video-control-hide",d="pixnet-ad-video-control-play",u="pixnet-ad-video-control-replay",p="pixnet-ad-video-control-pause",v="pixnet-ad-video-control-soundon",m="pixnet-ad-video-control-soundoff",f="pixnet-ad-video-control-expand",h=1e3,g=function(){var e,t,n;function i(e,t,n,s,o){var l=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),this.root=e,this.callbackUrl=s,this.progressRecord=[],e.innerHTML='<div class="pixnet-ad-video">\n            <video src="'.concat(t,'" poster="').concat(n,'" muted playsinline controlslist="nodownload" autoplay></video>\n           \n            <button class="').concat(f,'">\n                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">\n                    <path fill="#FFF" stroke="#FFF" d="M10.3033009,14.0606602 L6.02944531,18.3345157\n                    L4.47833694,13.2380168 C4.41426173,13.027484 4.22006751,12.8835976 4,12.8835976\n                    C3.72385763,12.8835976 3.5,13.1074552 3.5,13.3835976 L3.5,22.2797387 C3.5,22.5558811\n                    3.72385763,22.7797387 4,22.7797387 L12.8961411,22.7797387 C13.1162086,22.7797387\n                    13.3104028,22.6358523 13.374478,22.4253195 C13.4548801,22.1611413 13.3059001,21.8818038\n                    13.0417219,21.8014018 L8.26038841,20.3462133 L12.4246212,16.1819805\n                    C12.6198833,15.9867184 12.6198833,15.6701359 12.4246212,15.4748737\n                    L11.0104076,14.0606602 C10.8151455,13.865398 10.498563,13.865398 10.3033009,14.0606602\n                    Z M16.1819805,12.078859 L20.2657603,7.99507917 L21.8016951,13.0417219\n                    C21.8657703,13.2522547 22.0599645,13.3961411 22.280032,13.3961411 C22.5561744,13.3961411\n                    22.780032,13.1722835 22.780032,12.8961411 L22.780032,4 C22.780032,3.72385763\n                    22.5561744,3.5 22.280032,3.5 L13.3838909,3.5 C13.1638234,3.5 12.9696292,3.64388636\n                    12.905554,3.85441919 C12.8251519,4.11859739 12.9741319,4.39793488 13.2383101,4.47833694\n                    L18.0694998,5.94869902 L14.0606602,9.95753862 C13.865398,10.1528008 13.865398,10.4693833\n                    14.0606602,10.6646454 L15.4748737,12.078859 C15.6701359,12.2741211 15.9867184,12.2741211\n                    16.1819805,12.078859 Z"/>\n                </svg>\n            </button>\n            <button class="').concat(p,'">\n                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">\n                    <g fill="none" fill-rule="evenodd">\n                        <rect width="5" height="18" x="6" y="4" fill="#FFF" fill-rule="nonzero" rx="2"/>\n                        <rect width="5" height="18" x="15" y="4" fill="#FFF" fill-rule="nonzero" rx="2"/>\n                    </g>\n                </svg>\n            </button>\n            <button class="').concat(c," ").concat(d,'">\n                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">\n                    <path fill="#FFF" d="M21.0481282,14.7047814 L8.04812819,22.7033786 C6.71564067,23.5232271\n                    5,22.5647035 5,21.0001703 L5,5.00297592 C5,3.43844273 6.71564067,2.47991907\n                    8.04812819,3.2997676 L21.0481282,11.2983648 C22.3172906,12.0792509 22.3172906,13.9238953\n                    21.0481282,14.7047814 Z"/>\n                </svg>\n            </button>\n            <button class="').concat(c," ").concat(u,'">\n                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">\n                    <path fill="#FFF" d="M13.1967399,2.80492098 C15.6900027,2.80560985 18.1158817,3.75492969\n                    19.9492516,5.43779963 L21.7453382,3.62335438 C21.9191375,3.44311812 22.1908966,3.3871677\n                    22.414283,3.48297474 C22.6462839,3.57662648 22.8041202,3.80407878 22.8041202,4.05544692\n                    L22.8041202,9.93213049 C22.8041202,10.8698893 22.2724674,11.2250508 21.3752201,11.2250508\n                    L15.7173592,11.2250508 C15.3651224,11.2250508 15.083262,10.951518 15.083262,10.6034368\n                    C15.083262,10.3976726 15.1873404,10.2078292 15.3537109,10.09409 L17.0864742,8.3402931\n                    C16.0010904,7.38996363 14.6377583,6.88090751 13.1508535,6.88090319 C9.90341219,6.89934839\n                    7.26938309,9.56348833 7.26937457,12.8459311 C7.29430922,16.0744271 9.93528896,18.6917164\n                    13.1883676,18.715914 C15.1032091,18.6129864 16.8706939,17.590262 17.9092948,15.9473493\n                    C18.2032274,15.4823914 18.8128803,15.1888751 19.434782,15.4357339 C19.6433242,15.518513\n                    19.8210085,15.593518 19.9946216,15.6716965 C20.0503579,15.6967947 20.1061731,15.7224415\n                    20.1636309,15.7493276 C20.27765,15.8026804 20.3922563,15.8580345 20.5582137,15.9394952\n                    C20.4949233,15.9084289 20.9056584,16.1104717 21.0337542,16.1729911\n                    C21.6725468,16.4901825 21.8738656,17.0293828 21.5738542,17.703075 C19.3905865,21.3879677\n                    16.1067407,23.1333545 12.3991483,22.7529258 C7.25049534,22.3433872 3.23067875,18.0282198\n                    3.19588003,12.7994008 C3.19471201,7.33304744 7.6368027,2.85527303 13.1086067,2.80518252\n                    C13.1466779,2.80379326 13.1647846,2.80383116 13.1967399,2.80492098 Z"\n                    transform="matrix(0 -1 -1 0 25.804 25.804)"/>\n                </svg>\n            </button>\n            <button class="').concat(m,'">\n                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">\n                    <path fill="#FFF" d="M6,11.917976 L14,19.917976 L14,22.935611 C14,23.4878957 13.5522847,\n                    23.935611 13,23.935611 C12.7393455,23.935611 12.4889921,23.8338379 12.3022696,23.6519714\n                    L6.95022856,18.439118 L4,18.439118 C2.8954305,18.439118 2,17.5436875 2,16.439118 \n                    L2,10.439118 C2,9.87405224 2.23433856,9.36371919 2.61113454,9 L6,12.3888655 L6,11.917976\n                    Z M9.21231181,5.23079286 L12.3098034,2.27637982 C12.7094488,1.89519478 \n                    13.3424369,1.91015983 13.7236219,2.30980519 C13.9010267,2.49580142 14,2.74296666\n                    14,3.00000175 L14,10.0184811 L9.21231181,5.23079286 Z M19.3494638,15.3679448\n                    L17.8427062,13.8611872 C17.9447022,13.5594339 18,13.2361657 18,12.8999819 C18,11.5937631\n                    17.1651924,10.482524 16,10.0706876 L16,8 C18.2822403,8.46327033 20,10.481024\n                    20,12.8999819 C20,13.7975061 19.763518,14.6397971 19.3494637,15.3679448 Z\n                    M22.1264159,18.144897 L20.7050917,16.7235728 C21.5158537,15.7004807 22,14.4067796 22,13\n                    C22,9.6862915 19.3137085,7 16,7 L16,5 C20.418278,5 24,8.581722 24,13 C24,14.9592618 \n                    23.2956788,16.7540207 22.1264159,18.1448969 Z M3.06066017,4.06066017 \n                    C3.64644661,3.47487373 4.59619408,3.47487373 5.18198052,4.06066017 \n                    L20.7383297,19.6170094 C21.3241161,20.2027958 21.3241161,21.1525433 20.7383297,21.7383297\n                    C20.1525433,22.3241161 19.2027958,22.3241161 18.6170094,21.7383297 L3.06066017,6.18198052\n                    C2.47487373,5.59619408 2.47487373,4.64644661 3.06066017,4.06066017 Z"/>\n                </svg>\n            </button>\n            <button class="').concat(c," ").concat(v,'">\n                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">\n                    <path fill="#FFF" d="M6.34230552,8 L12.3098034,2.3081513 C12.7094488,1.92696626\n                    13.3424369,1.94193131 13.7236219,2.34157667 C13.9010267,2.5275729 14,2.77473814\n                    14,3.03177323 L14,22.9673824 C14,23.5196672 13.5522847,23.9673824 13,23.9673824\n                    C12.7393455,23.9673824 12.4889921,23.8656094 12.3022696,23.6837429 L6.46676593,18\n                    L4,18 C2.8954305,18 2,17.1045695 2,16 L2,10 C2,8.8954305 2.8954305,8 4,8 L6.34230552,8\n                    Z M16,8 C18.2822403,8.46327033 20,10.481024 20,12.8999819 C20,15.3189398\n                    18.2822403,17.3366934 16,17.7999638 L16,15.7292762 C17.1651924,15.3174398 18,14.2062007\n                    18,12.8999819 C18,11.5937631 17.1651924,10.482524 16,10.0706876 L16,8 Z M16,5\n                    C20.418278,5 24,8.581722 24,13 C24,17.418278 20.418278,21 16,21 L16,19 C19.3137085,19\n                    22,16.3137085 22,13 C22,9.6862915 19.3137085,7 16,7 L16,5 Z"/>\n                </svg>\n            </button>\n        </div>'),setTimeout(function(){l.ListenerScroll(o);var t=e.getElementsByClassName(d)[0],n=e.getElementsByClassName(u)[0],i=e.getElementsByClassName(p)[0],s=e.getElementsByClassName(v)[0],r=e.getElementsByClassName(m)[0],g=e.getElementsByClassName(f)[0];a.setLabel(o),a.createTracker(),l.player=e.getElementsByTagName("video")[0];var C=l.player;C.addEventListener("ended",function(e){l.sendCallBack(100),n.classList.remove(c),i.classList.add(c),t.classList.add(c),document.exitFullscreen&&document.exitFullscreen(),C.webkitExitFullscreen&&C.webkitExitFullscreen()}),C.addEventListener("playing",function(e){n.classList.add(c),i.classList.remove(c),t.classList.add(c)}),C.addEventListener("play",function(e){i.classList.remove(c)}),C.addEventListener("click",function(e){i.classList.remove(c)});var y=function(){if(4===C.readyState){var e=C.play();a.sendEvent("click_on_video_play"),e.catch(function(e){})}};t.onclick=y,n.onclick=y,i.onclick=function(){n.classList.add(c),i.classList.add(c),t.classList.remove(c),a.sendEvent("click_on_video_pause"),C.pause()},s.onclick=function(){C.muted=!0,s.classList.add(c),r.classList.remove(c),a.sendEvent("click_on_video_soundOn")},r.onclick=function(){C.muted=!1,r.classList.add(c),s.classList.remove(c),a.sendEvent("click_on_video_soundOff")},g.onclick=function(){a.sendEvent("click_on_video_exapnd"),C.webkitRequestFullscreen?C.webkitRequestFullscreen():C.webkitEnterFullscreen?C.webkitEnterFullscreen():C.msRequestFullscreen?C.msRequestFullscreen():C.mozRequestFullScreen?C.mozRequestFullScreen():C.requestFullscreen&&C.requestFullscreen()},l.checkVideoProgress=setInterval(l.checkloop(),h)},0)}return e=i,(t=[{key:"sendCallBack",value:function(e){try{var t=new XMLHttpRequest;t.open("GET","".concat(this.callbackUrl,"&t=").concat(e)),t.send(),this.progressRecord.push(e)}catch(e){}}},{key:"checkloop",value:function(){var e=this,t=[5,10],n=[50,70];return function(){if(e.progressRecord.length>=5)clearInterval(e.checkVideoProgress);else{for(var i=e.player.currentTime,s=e.player.duration,o=0,l=t.length;o<l;o++){var a=t[o];if(Math.abs(i-a)<.5){if(e.progressRecord.includes(a))return;e.sendCallBack(a);break}}for(var r=0,c=n.length;r<c;r++){var d=n[r];if(Math.abs(s*d/100-i)<.5){if(e.progressRecord.includes(d))return;e.sendCallBack(d);break}}}}}},{key:"ListenerScroll",value:function(e){var t=0,n=null,i=this.root.getElementsByClassName("pixnet-ad-video")[0].getElementsByTagName("video")[0];window.addEventListener("scroll",function(){var e=i.getBoundingClientRect();e.top<-360||e.top>window.innerHeight?i.pause():(clearTimeout(n),i.pause(),n=setTimeout(function(){(document.documentElement.scrollTop||document.body.scrollTop)==t&&i.play()},500),t=document.documentElement.scrollTop||document.body.scrollTop)})}}])&&r(e.prototype,t),n&&r(e,n),i}();function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t;var s=this.root.dataset;this.hashid=s.hashid,this.root.innerHTML=i,a.setLabel(this.hashid),a.createTracker(),this.type=s.type,this.clickUrl=s.clickUrl,this.file=s.file,this.videofile=s.videofile,this.videofilePoster=s.videofilePoster,this.videoAlign=s.videoAlign,this.videoCallbackUrl=s.videoCallbackUrl,setTimeout(function(){try{n.setContent(n.file,n.videofile,n.hashid,n.type);var e=n.root.getElementsByTagName("a");e[0].href=n.clickUrl,e[0].addEventListener("click",function(){a.sendEvent("click_on_img_material")}),n.scrollToSlideOpen()}catch(e){throw e}},0)}var t,n,l;return t=e,(n=[{key:"getIframeUrl",value:function(e){var t=e.includes("?")?"&":"?";return"".concat(e).concat(t,"clickTAG=").concat(encodeURIComponent(this.clickUrl))}},{key:"setContent",value:function(e,t,n,i){if("image"===i){if(!e)return;var l,a;l=s.test(e)?"img":"iframe";var r=this.root.getElementsByClassName("pixnet-slideopen-link")[0];if(a=r.getElementsByTagName(l)[0],"iframe"===l){var c=document.createElement("iframe");c.src="".concat(e,"?clickTAG=").concat(this.clickUrl),c.style.width="640px",c.style.height="480px",c.style.zIndex=3,c.style.position="relative",c.style.top="-480px",r.appendChild(c)}else a.src="iframe"===l?this.getIframeUrl(e):e}else if("video"===i){if(!e)return;var d,u;d=s.test(e)?"img":"iframe";var p=this.root.getElementsByClassName("pixnet-slideopen-root")[0].getElementsByClassName("pixnet-slideopen-frame")[0].getElementsByClassName("pixnet-slideopen-materialframe")[0];if(u=p.getElementsByTagName(d)[0],"iframe"===d){var v=document.createElement("iframe");v.src="".concat(e,"?clickTAG=").concat(this.clickUrl),v.style.width="640px",v.style.height="480px",v.style.position="relative",v.style.top="-480px",p.appendChild(v)}else u.src="iframe"===d?this.getIframeUrl(e):e;if(o.test(t)){var m=this.root.getElementsByClassName("pixnet-slideopen-root")[0].getElementsByClassName("pixnet-slideopen-frame")[0].getElementsByClassName("pixnet-slideopen-videoframe")[0],f=m.getElementsByClassName("pixnet-slideopen-video")[0];return"top"===this.videoAlign?m.style.alignItems="flex-start":"center"===this.videoAlign?m.style.alignItems="center":"bottom"===this.videoAlign&&(m.style.alignItems="flex-end"),f.style.display="initial",new g(f,t,this.videofilePoster,this.videoCallbackUrl,n),void(this.videoRoot=f)}}}},{key:"scrollToSlideOpen",value:function(){this.root;var e=this.root.getElementsByClassName("pixnet-slideopen-root")[0].getElementsByClassName("pixnet-slideopen-frame")[0],t=window.setInterval(function(){e.getBoundingClientRect().top<=window.innerHeight-288&&(e.style.height="480px",e.style.width="640px",a.sendEvent("show_on_ad"),window.clearInterval(t))},50)}}])&&C(t.prototype,n),l&&C(t,l),e}())((document.currentScript||document.scripts[document.scripts.length-1]).parentNode)},function(e,t){}]);