import{U as i}from"./vendor-cc5ddd86.js";function h(){window.location.href=`mailto:${this.dataset.user}@futuresymphony.lt`}function d(o,{delay:n=0}){const t=parseInt(getComputedStyle(o).height);return{delay:n,duration:(e=>e<300?500:e<500?750:1e3)(t),easing:i,css:e=>`height: ${e*t}px`}}function m(){document.querySelectorAll('a[href*="#"]').forEach(o=>o.addEventListener("click",n=>{let t=n.target;if(location.pathname.replace(/^\//,"")==t.pathname.replace(/^\//,"")&&location.hostname==t.hostname){let a=document.querySelector(t.hash);n.preventDefault(),t.parentElement.classList.add("clicked");let e=a.offsetTop-document.querySelector(".masthead").clientHeight;s(e,1e3),window.setTimeout(function(){t.parentElement.classList.remove("clicked")},1e3),history.pushState(null,null,t.hash=="#start"?" ":t.hash)}}))}function s(o,n=0,t=document.scrollingElement){if(t.scrollTop===o)return;const a=(t.scrollTop-o)/2;let e=0,l=null;function c(r){if(l!==null){if(e+=Math.PI*(r-l)/n,e>=Math.PI)return t.scrollTop=o;t.scrollTop=a+o+a*Math.cos(e)}l=r,window.requestAnimationFrame(c)}window.requestAnimationFrame(c)}export{d as f,m as i,h as m};
