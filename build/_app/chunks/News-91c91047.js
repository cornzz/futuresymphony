import{_ as R,a as U,b as W,c as Y,d as Z,e as $,f as y,g as x}from"./8-2f1e7ec7.js";import{S as ee,i as se,s as ae,e as v,j as D,c as u,a as w,l as L,d as f,b as _,D as B,E as C,f as T,F as h,t as le,g as te,h as re,k as F,H as G,a0 as ne,J,X as ie,M as oe}from"./vendor-5baa542f.js";function O(o,t,r){const n=o.slice();return n[5]=t[r].article,n}function P(o){let t,r,n,i,l,e,s,a,m,E=o[5].date[o[3]]+"",V,p,b,k=o[5].title[o[3]]+"",A,g,M=o[5].content.short[o[3]]+"",N,H;return{c(){t=v("a"),r=v("div"),n=v("img"),e=D(),s=v("div"),a=v("div"),m=v("i"),V=D(),p=v("span"),b=v("b"),A=D(),g=v("div"),this.h()},l(c){t=u(c,"A",{href:!0,class:!0});var d=w(t);r=u(d,"DIV",{class:!0});var I=w(r);n=u(I,"IMG",{class:!0,src:!0,alt:!0}),e=L(I),s=u(I,"DIV",{class:!0,"data-readmore":!0});var j=w(s);a=u(j,"DIV",{class:!0});var S=w(a);m=u(S,"I",{});var z=w(m);z.forEach(f),S.forEach(f),V=L(j),p=u(j,"SPAN",{class:!0});var q=w(p);b=u(q,"B",{});var K=w(b);K.forEach(f),q.forEach(f),A=L(j),g=u(j,"DIV",{class:!0});var Q=w(g);Q.forEach(f),j.forEach(f),I.forEach(f),d.forEach(f),this.h()},h(){_(n,"class","news-image-small svelte-1wmnfhv"),B(n.src,i=`/images/news/${o[5].images.small}`)||_(n,"src",i),_(n,"alt",l=o[5].images.small),_(a,"class","date svelte-1wmnfhv"),_(p,"class","title svelte-1wmnfhv"),_(g,"class","text svelte-1wmnfhv"),_(s,"class","news-content svelte-1wmnfhv"),_(s,"data-readmore",N=o[2]("news.readmore")),_(r,"class","news-item dropshadow svelte-1wmnfhv"),_(t,"href",H=`/news/${o[5].slug}`),_(t,"class","news-link svelte-1wmnfhv"),C(t,"fixed",!o[0])},m(c,d){T(c,t,d),h(t,r),h(r,n),h(r,e),h(r,s),h(s,a),h(a,m),m.innerHTML=E,h(s,V),h(s,p),h(p,b),b.innerHTML=k,h(s,A),h(s,g),g.innerHTML=M},p(c,d){d&2&&!B(n.src,i=`/images/news/${c[5].images.small}`)&&_(n,"src",i),d&2&&l!==(l=c[5].images.small)&&_(n,"alt",l),d&10&&E!==(E=c[5].date[c[3]]+"")&&(m.innerHTML=E),d&10&&k!==(k=c[5].title[c[3]]+"")&&(b.innerHTML=k),d&10&&M!==(M=c[5].content.short[c[3]]+"")&&(g.innerHTML=M),d&4&&N!==(N=c[2]("news.readmore"))&&_(s,"data-readmore",N),d&2&&H!==(H=`/news/${c[5].slug}`)&&_(t,"href",H),d&1&&C(t,"fixed",!c[0])},d(c){c&&f(t)}}}function X(o){let t,r,n=o[2]("news.older")+"",i;return{c(){t=v("div"),r=v("a"),i=le(n),this.h()},l(l){t=u(l,"DIV",{class:!0});var e=w(t);r=u(e,"A",{href:!0,class:!0});var s=w(r);i=te(s,n),s.forEach(f),e.forEach(f),this.h()},h(){_(r,"href","/news"),_(r,"class","link"),_(t,"class","center svelte-1wmnfhv")},m(l,e){T(l,t,e),h(t,r),h(r,i)},p(l,e){e&4&&n!==(n=l[2]("news.older")+"")&&re(i,n)},d(l){l&&f(t)}}}function _e(o){let t,r,n=o[1],i=[];for(let e=0;e<n.length;e+=1)i[e]=P(O(o,n,e));let l=o[0]&&X(o);return{c(){for(let e=0;e<i.length;e+=1)i[e].c();t=D(),l&&l.c(),r=F()},l(e){for(let s=0;s<i.length;s+=1)i[s].l(e);t=L(e),l&&l.l(e),r=F()},m(e,s){for(let a=0;a<i.length;a+=1)i[a].m(e,s);T(e,t,s),l&&l.m(e,s),T(e,r,s)},p(e,[s]){if(s&15){n=e[1];let a;for(a=0;a<n.length;a+=1){const m=O(e,n,a);i[a]?i[a].p(m,s):(i[a]=P(m),i[a].c(),i[a].m(t.parentNode,t))}for(;a<i.length;a+=1)i[a].d(1);i.length=n.length}e[0]?l?l.p(e,s):(l=X(e),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null)},i:G,o:G,d(e){ne(i,e),e&&f(t),l&&l.d(e),e&&f(r)}}}function ce(o,t,r){let n,i;J(o,ie,a=>r(2,n=a)),J(o,oe,a=>r(3,i=a));let{latest:l=!1}=t,s=Object.entries({"../routes/news/articles/1.json":R,"../routes/news/articles/2.json":U,"../routes/news/articles/3.json":W,"../routes/news/articles/4.json":Y,"../routes/news/articles/5.json":Z,"../routes/news/articles/6.json":$,"../routes/news/articles/7.json":y,"../routes/news/articles/8.json":x}).map(([a,m])=>({id:a.match(/\d+/)[0],article:m}));return s.sort((a,m)=>Number(m.id)-Number(a.id)),s=l?s.slice(0,3):s,o.$$set=a=>{"latest"in a&&r(0,l=a.latest)},[l,s,n,i]}class de extends ee{constructor(t){super();se(this,t,ce,_e,ae,{latest:0})}}export{de as N};