import{S as k,i as N,s as T,ae as B,v as p,j as u,w as _,l as h,x as w,f as $,p as b,n as v,A as g,d as l,J as S,e as d,t as q,c as j,a as x,g as z,b as A,F as C,h as E,X as F}from"../../chunks/vendor-3b8c650a.js";import{T as H}from"../../chunks/Tab-fe19bf4c.js";import{N as J}from"../../chunks/News-92a9666c.js";import{s as L,b as M}from"../../chunks/stores-600db517.js";import"../../chunks/9-20492057.js";function R(f){let s,r=f[0]("news.archive.title")+"",a,i,e,n,m,c;return e=new J({}),{c(){s=d("h1"),a=q(r),i=u(),p(e.$$.fragment),n=u(),m=d("br"),this.h()},l(t){s=j(t,"H1",{class:!0});var o=x(s);a=z(o,r),o.forEach(l),i=h(t),_(e.$$.fragment,t),n=h(t),m=j(t,"BR",{}),this.h()},h(){A(s,"class","cover-heading")},m(t,o){$(t,s,o),C(s,a),$(t,i,o),w(e,t,o),$(t,n,o),$(t,m,o),c=!0},p(t,o){(!c||o&1)&&r!==(r=t[0]("news.archive.title")+"")&&E(a,r)},i(t){c||(b(e.$$.fragment,t),c=!0)},o(t){v(e.$$.fragment,t),c=!1},d(t){t&&l(s),t&&l(i),g(e,t),t&&l(n),t&&l(m)}}}function X(f){let s,r,a,i;return s=new B({props:{title:f[0]("news.archive.meta.title"),description:f[0]("news.archive.meta.description")}}),a=new H({props:{oversize:!0,$$slots:{default:[R]},$$scope:{ctx:f}}}),{c(){p(s.$$.fragment),r=u(),p(a.$$.fragment)},l(e){_(s.$$.fragment,e),r=h(e),_(a.$$.fragment,e)},m(e,n){w(s,e,n),$(e,r,n),w(a,e,n),i=!0},p(e,[n]){const m={};n&1&&(m.title=e[0]("news.archive.meta.title")),n&1&&(m.description=e[0]("news.archive.meta.description")),s.$set(m);const c={};n&3&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){i||(b(s.$$.fragment,e),b(a.$$.fragment,e),i=!0)},o(e){v(s.$$.fragment,e),v(a.$$.fragment,e),i=!1},d(e){g(s,e),e&&l(r),g(a,e)}}}function y(f,s,r){let a;return S(f,F,i=>r(0,a=i)),L.set(!1),M.set(!1),[a]}class P extends k{constructor(s){super();N(this,s,y,X,T,{})}}export{P as default};
