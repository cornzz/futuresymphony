import{V as i}from"./vendor-21361551.js";function h(){window.location.href=`mailto:${this.dataset.user}@futuresymphony.lt`}function m(e,{delay:l=0}){const t=parseInt(getComputedStyle(e).height);return{delay:l,duration:(o=>o<300?500:o<500?750:1e3)(t),easing:i,css:o=>`height: ${o*t}px`}}function d(e){e.style.backgroundColor="yellow",setTimeout(()=>e.style.backgroundColor="",1e3)}function f(){document.querySelectorAll('a[href*="#"]').forEach(e=>e.addEventListener("click",l=>{let t=l.target;if(location.pathname.replace(/^\//,"")==t.pathname.replace(/^\//,"")&&location.hostname==t.hostname){let n=document.querySelector(t.hash);l.preventDefault(),t.parentElement.classList.add("clicked");let o=n.offsetTop-document.querySelector(".masthead").clientHeight+1;s(o,1e3),window.setTimeout(function(){t.parentElement.classList.remove("clicked")},1e3),history.pushState(null,null,t.hash=="#start"?" ":t.hash)}}))}function s(e,l=0,t=document.scrollingElement){if(t.scrollTop===e)return;const n=(t.scrollTop-e)/2;let o=0,a=null;function r(c){if(a!==null){if(o+=Math.PI*(c-a)/l,o>=Math.PI)return t.scrollTop=e;t.scrollTop=n+e+n*Math.cos(o)}a=c,window.requestAnimationFrame(r)}window.requestAnimationFrame(r)}export{m as f,d as h,f as i,h as m};