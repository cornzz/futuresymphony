import{S as j,i as w,s as E,j as N,v as S,Q as T,d as _,l as q,w as A,f as $,x as B,p as D,n as F,A as z,M as C,e as v,t as p,c as b,a as g,g as f,b as k,D as d,H,h as y,X as I}from"../chunks/vendor-cc5ddd86.js";import{T as L}from"../chunks/Tab-39a2bbbb.js";import{s as M}from"../chunks/stores-37973b72.js";function P(o){let t,r=o[0]("error.pageNotFound")+"",s,n,e,a=o[0]("error.goBack")+"",i,u,m;return{c(){t=v("div"),s=p(r),n=p(`.
        `),e=v("span"),i=p(a),this.h()},l(c){t=b(c,"DIV",{class:!0});var l=g(t);s=f(l,r),n=f(l,`.
        `),e=b(l,"SPAN",{class:!0});var h=g(e);i=f(h,a),h.forEach(_),l.forEach(_),this.h()},h(){k(e,"class","link"),k(t,"class","error svelte-1gyadft")},m(c,l){$(c,t,l),d(t,s),d(t,n),d(t,e),d(e,i),u||(m=H(e,"click",o[1]),u=!0)},p(c,l){l&1&&r!==(r=c[0]("error.pageNotFound")+"")&&y(s,r),l&1&&a!==(a=c[0]("error.goBack")+"")&&y(i,a)},d(c){c&&_(t),u=!1,m()}}}function Q(o){let t,r,s,n;return document.title=t=o[0]("error.title"),s=new L({props:{$$slots:{default:[P]},$$scope:{ctx:o}}}),{c(){r=N(),S(s.$$.fragment)},l(e){T('[data-svelte="svelte-1e1z7lp"]',document.head).forEach(_),r=q(e),A(s.$$.fragment,e)},m(e,a){$(e,r,a),B(s,e,a),n=!0},p(e,[a]){(!n||a&1)&&t!==(t=e[0]("error.title"))&&(document.title=t);const i={};a&5&&(i.$$scope={dirty:a,ctx:e}),s.$set(i)},i(e){n||(D(s.$$.fragment,e),n=!0)},o(e){F(s.$$.fragment,e),n=!1},d(e){e&&_(r),z(s,e)}}}function V(o,t,r){let s;return C(o,I,e=>r(0,s=e)),M.set(!1),[s,()=>history.back()]}class J extends j{constructor(t){super();w(this,t,V,Q,E,{})}}export{J as default};
