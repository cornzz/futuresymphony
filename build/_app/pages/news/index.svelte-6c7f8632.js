import{S as k,i as N,s as T,ai as B,v as p,j as u,w as _,l as h,x as w,f as $,p as v,n as b,A as d,d as l,L as E,e as g,t as L,c as j,a as S,g as q,b as x,E as z,h as A,X as C}from"../../chunks/vendor-e7083a84.js";import{T as H}from"../../chunks/Tab-30019d99.js";import{N as M}from"../../chunks/News-69fc7852.js";import{s as R,c as X}from"../../chunks/stores-bf8d9b2c.js";import"../../chunks/9-19a0e722.js";function y(f){let s,r=f[0]("news.archive.title")+"",a,i,e,n,m,c;return e=new M({}),{c(){s=g("h1"),a=L(r),i=u(),p(e.$$.fragment),n=u(),m=g("br"),this.h()},l(t){s=j(t,"H1",{class:!0});var o=S(s);a=q(o,r),o.forEach(l),i=h(t),_(e.$$.fragment,t),n=h(t),m=j(t,"BR",{}),this.h()},h(){x(s,"class","cover-heading")},m(t,o){$(t,s,o),z(s,a),$(t,i,o),w(e,t,o),$(t,n,o),$(t,m,o),c=!0},p(t,o){(!c||o&1)&&r!==(r=t[0]("news.archive.title")+"")&&A(a,r)},i(t){c||(v(e.$$.fragment,t),c=!0)},o(t){b(e.$$.fragment,t),c=!1},d(t){t&&l(s),t&&l(i),d(e,t),t&&l(n),t&&l(m)}}}function D(f){let s,r,a,i;return s=new B({props:{title:f[0]("news.archive.meta.title"),description:f[0]("news.archive.meta.description")}}),a=new H({props:{oversize:!0,$$slots:{default:[y]},$$scope:{ctx:f}}}),{c(){p(s.$$.fragment),r=u(),p(a.$$.fragment)},l(e){_(s.$$.fragment,e),r=h(e),_(a.$$.fragment,e)},m(e,n){w(s,e,n),$(e,r,n),w(a,e,n),i=!0},p(e,[n]){const m={};n&1&&(m.title=e[0]("news.archive.meta.title")),n&1&&(m.description=e[0]("news.archive.meta.description")),s.$set(m);const c={};n&3&&(c.$$scope={dirty:n,ctx:e}),a.$set(c)},i(e){i||(v(s.$$.fragment,e),v(a.$$.fragment,e),i=!0)},o(e){b(s.$$.fragment,e),b(a.$$.fragment,e),i=!1},d(e){d(s,e),e&&l(r),d(a,e)}}}function F(f,s,r){let a;return E(f,C,i=>r(0,a=i)),R.set(!1),X.set(!1),[a]}class P extends k{constructor(s){super();N(this,s,F,D,T,{})}}export{P as default};