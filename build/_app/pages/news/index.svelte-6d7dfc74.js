import{S as E,i as M,s as S,_ as q,v as u,j as _,w as h,l as w,x as b,f as p,p as v,n as d,A as g,d as l,M as x,e as j,t as z,c as k,a as T,g as A,b as C,D as B,h as D,X as H}from"../../chunks/vendor-cc5ddd86.js";import{T as L}from"../../chunks/Tab-0a64ee46.js";import{N as R}from"../../chunks/News-7864a68a.js";import{s as X,b as y}from"../../chunks/stores-37973b72.js";import"../../chunks/8-2f1e7ec7.js";function F(f){let s,r,a=f[0]("news.archive.title")+"",i,e,n,m,c,$;return n=new R({}),{c(){s=j("h1"),r=j("b"),i=z(a),e=_(),u(n.$$.fragment),m=_(),c=j("br"),this.h()},l(t){s=k(t,"H1",{class:!0});var o=T(s);r=k(o,"B",{});var N=T(r);i=A(N,a),N.forEach(l),o.forEach(l),e=w(t),h(n.$$.fragment,t),m=w(t),c=k(t,"BR",{}),this.h()},h(){C(s,"class","cover-heading")},m(t,o){p(t,s,o),B(s,r),B(r,i),p(t,e,o),b(n,t,o),p(t,m,o),p(t,c,o),$=!0},p(t,o){(!$||o&1)&&a!==(a=t[0]("news.archive.title")+"")&&D(i,a)},i(t){$||(v(n.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),$=!1},d(t){t&&l(s),t&&l(e),g(n,t),t&&l(m),t&&l(c)}}}function G(f){let s,r,a,i;return s=new q({props:{title:f[0]("news.archive.meta.title"),description:f[0]("news.archive.meta.description")}}),a=new L({props:{oversize:!0,$$slots:{default:[F]},$$scope:{ctx:f}}}),{c(){u(s.$$.fragment),r=_(),u(a.$$.fragment)},l(e){h(s.$$.fragment,e),r=w(e),h(a.$$.fragment,e)},m(e,n){b(s,e,n),p(e,r,n),b(a,e,n),i=!0},p(e,[n]){const m={};n&1&&(m.title=e[0]("news.archive.meta.title")),n&1&&(m.description=e[0]("news.archive.meta.description")),s.$set(m);const c={};n&3&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){i||(v(s.$$.fragment,e),v(a.$$.fragment,e),i=!0)},o(e){d(s.$$.fragment,e),d(a.$$.fragment,e),i=!1},d(e){g(s,e),e&&l(r),g(a,e)}}}function I(f,s,r){let a;return x(f,H,i=>r(0,a=i)),X.set(!1),y.set(!1),[a]}class U extends E{constructor(s){super();M(this,s,I,G,S,{})}}export{U as default};