import{S as j,i as w,s as E,j as F,v as N,R as S,d as _,l as T,w as q,f as $,x as A,p as B,n as z,A as C,J as D,e as v,t as d,c as g,a as b,g as p,b as k,F as f,G,h as y,X as I}from"../chunks/vendor-5baa542f.js";import{T as J}from"../chunks/Tab-fb09bfa1.js";import{s as L}from"../chunks/stores-fd589e4a.js";function P(o){let t,r=o[0]("error.pageNotFound")+"",a,n,e,s=o[0]("error.goBack")+"",i,u,m;return{c(){t=v("div"),a=d(r),n=d(`.
        `),e=v("span"),i=d(s),this.h()},l(c){t=g(c,"DIV",{class:!0});var l=b(t);a=p(l,r),n=p(l,`.
        `),e=g(l,"SPAN",{class:!0});var h=b(e);i=p(h,s),h.forEach(_),l.forEach(_),this.h()},h(){k(e,"class","link"),k(t,"class","error svelte-1gyadft")},m(c,l){$(c,t,l),f(t,a),f(t,n),f(t,e),f(e,i),u||(m=G(e,"click",o[1]),u=!0)},p(c,l){l&1&&r!==(r=c[0]("error.pageNotFound")+"")&&y(a,r),l&1&&s!==(s=c[0]("error.goBack")+"")&&y(i,s)},d(c){c&&_(t),u=!1,m()}}}function R(o){let t,r,a,n;return document.title=t=o[0]("error.title"),a=new J({props:{$$slots:{default:[P]},$$scope:{ctx:o}}}),{c(){r=F(),N(a.$$.fragment)},l(e){S('[data-svelte="svelte-1e1z7lp"]',document.head).forEach(_),r=T(e),q(a.$$.fragment,e)},m(e,s){$(e,r,s),A(a,e,s),n=!0},p(e,[s]){(!n||s&1)&&t!==(t=e[0]("error.title"))&&(document.title=t);const i={};s&5&&(i.$$scope={dirty:s,ctx:e}),a.$set(i)},i(e){n||(B(a.$$.fragment,e),n=!0)},o(e){z(a.$$.fragment,e),n=!1},d(e){e&&_(r),C(a,e)}}}function V(o,t,r){let a;return D(o,I,e=>r(0,a=e)),L.set(!1),[a,()=>history.back()]}class K extends j{constructor(t){super();w(this,t,V,R,E,{})}}export{K as default};