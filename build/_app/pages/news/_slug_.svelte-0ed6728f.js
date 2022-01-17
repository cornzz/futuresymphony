import{_ as J,a as K,b as Q,c as W,d as Y,e as x,f as ee,g as se}from"../../chunks/8-2f1e7ec7.js";import{a1 as ae,S as te,i as le,s as ie,_ as re,e as p,j as k,c as b,a as h,l as M,d as u,F as N,b as v,f as d,D as $,H as A,Z as ne,v as P,w as q,x as y,p as C,n as F,A as G,M as L,V as z,k as O,X as oe,N as _e,P as ue}from"../../chunks/vendor-cc5ddd86.js";import{T as fe}from"../../chunks/Tab-0a64ee46.js";import{s as ce,b as me}from"../../chunks/stores-37973b72.js";const ge=()=>{const s=ae("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},pe={subscribe(s){return ge().page.subscribe(s)}};function be(s){let a,t,i,r,_,n,e;return{c(){a=p("div"),t=p("img"),r=k(),_=p("span"),this.h()},l(o){a=b(o,"DIV",{class:!0});var f=h(a);t=b(f,"IMG",{src:!0,alt:!0,class:!0}),r=M(f),_=b(f,"SPAN",{class:!0}),h(_).forEach(u),f.forEach(u),this.h()},h(){N(t.src,i=`/images/news/${s[4].images.regular}`)||v(t,"src",i),v(t,"alt","News subject"),v(t,"class","svelte-1urilhp"),v(_,"class","image-frame-close svelte-1urilhp"),v(a,"class","image-frame svelte-1urilhp")},m(o,f){d(o,a,f),$(a,t),$(a,r),$(a,_),s[5](a),n||(e=A(a,"click",s[3]),n=!0)},p:ne,d(o){o&&u(a),s[5](null),n=!1,e()}}}function ve(s){let a,t,i=s[4].title[s[2]]+"",r,_,n,e=s[4].date[s[2]]+"",o,f,m,c,w,D,R,H,j,T=s[4].content.full[s[2]]+"",I,S;return{c(){a=p("h1"),t=p("b"),r=k(),_=p("span"),n=p("i"),o=p("br"),f=k(),m=p("div"),c=p("div"),w=p("img"),H=k(),j=p("div"),this.h()},l(l){a=b(l,"H1",{class:!0});var g=h(a);t=b(g,"B",{});var U=h(t);U.forEach(u),g.forEach(u),r=M(l),_=b(l,"SPAN",{class:!0});var V=h(_);n=b(V,"I",{});var X=h(n);X.forEach(u),V.forEach(u),o=b(l,"BR",{}),f=M(l),m=b(l,"DIV",{});var E=h(m);c=b(E,"DIV",{});var B=h(c);w=b(B,"IMG",{class:!0,src:!0,alt:!0}),B.forEach(u),H=M(E),j=b(E,"DIV",{style:!0});var Z=h(j);Z.forEach(u),E.forEach(u),this.h()},h(){v(a,"class","cover-heading"),v(_,"class","date svelte-1urilhp"),v(w,"class","news-image svelte-1urilhp"),N(w.src,D=`/images/news/${s[4].images.small}`)||v(w,"src",D),v(w,"alt",R=s[4].images.small),z(j,"line-height","1.65"),z(j,"overflow","hidden")},m(l,g){d(l,a,g),$(a,t),t.innerHTML=i,d(l,r,g),d(l,_,g),$(_,n),n.innerHTML=e,d(l,o,g),d(l,f,g),d(l,m,g),$(m,c),$(c,w),$(m,H),$(m,j),j.innerHTML=T,I||(S=A(c,"click",s[3]),I=!0)},p(l,g){g&4&&i!==(i=l[4].title[l[2]]+"")&&(t.innerHTML=i),g&4&&e!==(e=l[4].date[l[2]]+"")&&(n.innerHTML=e),g&4&&T!==(T=l[4].content.full[l[2]]+"")&&(j.innerHTML=T)},d(l){l&&u(a),l&&u(r),l&&u(_),l&&u(o),l&&u(f),l&&u(m),I=!1,S()}}}function de(s){let a,t=s[4]&&ve(s);return{c(){t&&t.c(),a=O()},l(i){t&&t.l(i),a=O()},m(i,r){t&&t.m(i,r),d(i,a,r)},p(i,r){i[4]&&t.p(i,r)},d(i){t&&t.d(i),i&&u(a)}}}function he(s){let a,t,i,r,_;a=new re({props:{title:s[1]("news.slug.meta.title"),description:s[4]&&s[4].meta?s[4].meta[s[2]]:""}});let n=s[4].images.regular&&be(s);return r=new fe({props:{oversize:!0,$$slots:{default:[de]},$$scope:{ctx:s}}}),{c(){P(a.$$.fragment),t=k(),n&&n.c(),i=k(),P(r.$$.fragment)},l(e){q(a.$$.fragment,e),t=M(e),n&&n.l(e),i=M(e),q(r.$$.fragment,e)},m(e,o){y(a,e,o),d(e,t,o),n&&n.m(e,o),d(e,i,o),y(r,e,o),_=!0},p(e,[o]){const f={};o&2&&(f.title=e[1]("news.slug.meta.title")),o&4&&(f.description=e[4]&&e[4].meta?e[4].meta[e[2]]:""),a.$set(f),e[4].images.regular&&n.p(e,o);const m={};o&260&&(m.$$scope={dirty:o,ctx:e}),r.$set(m)},i(e){_||(C(a.$$.fragment,e),C(r.$$.fragment,e),_=!0)},o(e){F(a.$$.fragment,e),F(r.$$.fragment,e),_=!1},d(e){G(a,e),e&&u(t),n&&n.d(e),e&&u(i),G(r,e)}}}function $e(s,a,t){let i,r,_;L(s,pe,c=>t(6,i=c)),L(s,oe,c=>t(1,r=c)),L(s,_e,c=>t(2,_=c));let n;ce.set(!1),me.set(!1);function e(){f.images.regular&&n.classList.toggle("active")}let f=Object.values({"./articles/1.json":J,"./articles/2.json":K,"./articles/3.json":Q,"./articles/4.json":W,"./articles/5.json":Y,"./articles/6.json":x,"./articles/7.json":ee,"./articles/8.json":se}).find(c=>c.slug===i.params.slug);function m(c){ue[c?"unshift":"push"](()=>{n=c,t(0,n)})}return[n,r,_,e,f,m]}class Te extends te{constructor(a){super();le(this,a,$e,he,ie,{})}}export{Te as default};