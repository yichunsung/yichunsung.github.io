!function(t){var e={};function a(s){if(e[s])return e[s].exports;var d=e[s]={i:s,l:!1,exports:{}};return t[s].call(d.exports,d,d.exports,a),d.l=!0,d.exports}a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var d in t)a.d(s,d,function(e){return t[e]}.bind(null,d));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";window.addEventListener("scroll",(function(){var t,e,a,s,d,n,i,o,l,c,u,r,f,m,L,p,y,g,v,I,O;t=document.body,e=document.documentElement,a=document.getElementById("logo"),s=document.getElementById("buttonA"),d=document.getElementById("buttonB"),n=document.getElementById("buttonC"),i=document.getElementById("partC"),o=document.getElementById("partC1"),l=document.getElementById("partC2"),c=document.getElementById("partC3"),u=document.getElementById("partA"),r=document.getElementById("partB"),f=s.getBoundingClientRect().top,m=d.getBoundingClientRect().top,L=n.getBoundingClientRect().top,p=i.getBoundingClientRect().top,y=o.getBoundingClientRect().top,g=l.getBoundingClientRect().top,v=c.getBoundingClientRect().top,I=u.getBoundingClientRect().top,O=r.getBoundingClientRect().top,console.log(O),0!=t.scrollTop||0!=e.scrollTop?(a.classList.add("animated"),a.classList.add("fadeOut"),f<350&&(s.style.opacity=1,s.classList.add("animated"),s.classList.remove("fadeOut"),s.classList.add("fadeIn")),m<350&&(d.style.opacity=1,d.classList.add("animated"),d.classList.remove("fadeOut"),d.classList.add("fadeIn")),L<350&&(n.style.opacity=1,n.classList.add("animated"),n.classList.remove("fadeOut"),n.classList.add("fadeIn")),p<350&&(i.style.opacity=1,i.classList.add("animated"),i.classList.remove("fadeOutLeft"),i.classList.add("fadeInLeft")),y<350&&(o.style.opacity=1,o.classList.add("animated"),o.classList.remove("fadeOut"),o.classList.add("fadeIn")),g<350&&(l.style.opacity=1,l.classList.add("animated"),l.classList.remove("fadeOut"),l.classList.add("fadeIn")),v<350&&(c.style.opacity=1,c.classList.add("animated"),c.classList.remove("fadeOut"),c.classList.add("fadeIn")),I<350&&(u.style.opacity=1,u.classList.add("animated"),u.classList.remove("fadeOutRight"),u.classList.add("fadeInRight")),O<550&&(r.style.opacity=1,r.classList.add("animated"),r.classList.remove("fadeOutLeft"),r.classList.add("fadeInLeft"))):(a.classList.remove("fadeOut"),a.classList.add("fadeIn"),s.classList.remove("fadeIn"),s.classList.add("fadeOut"),d.classList.remove("fadeIn"),d.classList.add("fadeOut"),n.classList.remove("fadeIn"),n.classList.add("fadeOut"),i.classList.remove("fadeInLeft"),i.classList.add("fadeOutLeft"),o.classList.remove("fadeIn"),o.classList.add("fadeOut"),l.classList.remove("fadeIn"),l.classList.add("fadeOut"),c.classList.remove("fadeIn"),c.classList.add("fadeOut"),u.classList.remove("fadeInRight"),u.classList.add("fadeOutRight"),r.classList.remove("fadeInLeft"),r.classList.add("fadeOutLeft"))}))}]);