import{S as b,i as h,s as y,V as g,e as v,c as B,a as j,d,b as c,aj as m,K as r,f as k,F as S,Z as T,_ as q,$ as C,p as E,n as F,M as K}from"./vendor-e7083a84.js";function M(a){let e,f,i,u,o;const _=a[5].default,l=g(_,a,a[4],null);return{c(){e=v("button"),l&&l.c(),this.h()},l(s){e=B(s,"BUTTON",{class:!0,style:!0});var t=j(e);l&&l.l(t),t.forEach(d),this.h()},h(){c(e,"class",f=""+(m(a[0])+" svelte-1rp9ef5")),e.disabled=a[2],c(e,"style",a[3]),r(e,"slim",a[1])},m(s,t){k(s,e,t),l&&l.m(e,null),i=!0,u||(o=S(e,"click",a[6]),u=!0)},p(s,[t]){l&&l.p&&(!i||t&16)&&T(l,_,s,s[4],i?C(_,s[4],t,null):q(s[4]),null),(!i||t&1&&f!==(f=""+(m(s[0])+" svelte-1rp9ef5")))&&c(e,"class",f),(!i||t&4)&&(e.disabled=s[2]),(!i||t&8)&&c(e,"style",s[3]),t&3&&r(e,"slim",s[1])},i(s){i||(E(l,s),i=!0)},o(s){F(l,s),i=!1},d(s){s&&d(e),l&&l.d(s),u=!1,o()}}}function N(a,e,f){let{$$slots:i={},$$scope:u}=e,{type:o="outline"}=e,{slim:_=!1}=e,{disabled:l=!1}=e,{style:s=""}=e;function t(n){K.call(this,a,n)}return a.$$set=n=>{"type"in n&&f(0,o=n.type),"slim"in n&&f(1,_=n.slim),"disabled"in n&&f(2,l=n.disabled),"style"in n&&f(3,s=n.style),"$$scope"in n&&f(4,u=n.$$scope)},[o,_,l,s,u,i,t]}class U extends b{constructor(e){super();h(this,e,N,M,y,{type:0,slim:1,disabled:2,style:3})}}export{U as B};