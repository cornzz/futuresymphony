import{S as k,i as N,s as T,ac as B,v as p,j as u,w as _,l as h,x as w,f as $,p as v,n as b,A as g,d as l,J as S,e as d,t as q,c as j,a as x,g as z,b as A,F as C,h as E,X as F}from"../../chunks/vendor-cb23235c.js";import{T as H}from"../../chunks/Tab-ce4344d6.js";import{N as J}from"../../chunks/News-0671cee7.js";import{s as L,b as M}from"../../chunks/stores-3386f144.js";import"../../chunks/9-89318159.js";function R(m){let s,r=m[0]("news.archive.title")+"",a,i,e,n,c,f;return e=new J({}),{c(){s=d("h1"),a=q(r),i=u(),p(e.$$.fragment),n=u(),c=d("br"),this.h()},l(t){s=j(t,"H1",{class:!0});var o=x(s);a=z(o,r),o.forEach(l),i=h(t),_(e.$$.fragment,t),n=h(t),c=j(t,"BR",{}),this.h()},h(){A(s,"class","cover-heading")},m(t,o){$(t,s,o),C(s,a),$(t,i,o),w(e,t,o),$(t,n,o),$(t,c,o),f=!0},p(t,o){(!f||o&1)&&r!==(r=t[0]("news.archive.title")+"")&&E(a,r)},i(t){f||(v(e.$$.fragment,t),f=!0)},o(t){b(e.$$.fragment,t),f=!1},d(t){t&&l(s),t&&l(i),g(e,t),t&&l(n),t&&l(c)}}}function X(m){let s,r,a,i;return s=new B({props:{title:m[0]("news.archive.meta.title"),description:m[0]("news.archive.meta.description")}}),a=new H({props:{oversize:!0,$$slots:{default:[R]},$$scope:{ctx:m}}}),{c(){p(s.$$.fragment),r=u(),p(a.$$.fragment)},l(e){_(s.$$.fragment,e),r=h(e),_(a.$$.fragment,e)},m(e,n){w(s,e,n),$(e,r,n),w(a,e,n),i=!0},p(e,[n]){const c={};n&1&&(c.title=e[0]("news.archive.meta.title")),n&1&&(c.description=e[0]("news.archive.meta.description")),s.$set(c);const f={};n&3&&(f.$$scope={dirty:n,ctx:e}),a.$set(f)},i(e){i||(v(s.$$.fragment,e),v(a.$$.fragment,e),i=!0)},o(e){b(s.$$.fragment,e),b(a.$$.fragment,e),i=!1},d(e){g(s,e),e&&l(r),g(a,e)}}}function y(m,s,r){let a;return S(m,F,i=>r(0,a=i)),L.set(!1),M.set(!1),[a]}class P extends k{constructor(s){super();N(this,s,y,X,T,{})}}export{P as default};
