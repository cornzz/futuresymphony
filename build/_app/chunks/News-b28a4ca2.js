import{_ as U,a as W,b as Y,c as Z,d as $,e as x,f as ee,g as se,h as le,i as te,j as ae,k as re,l as ne}from"./9-9547351d.js";import{S as oe,i as ie,s as _e,e as v,j as T,c as b,a as g,l as S,d as u,D as G,b as d,E as V,f as N,F as m,k as P,H as z,ac as ce,J as B,X as fe,M as de,t as C,g as F,G as ue,h as J}from"./vendor-56e6ddcf.js";function X(r,s,t){const a=r.slice();return a[7]=s[t].article,a[9]=t,a}function y(r){let s,t,a,n,_,i,l,e,c,o=r[7].date[r[4]]+"",w,j,k,M=r[7].title[r[4]]+"",A,p,H=(r[7].content.short?r[7].content.short[r[4]]:r[7].content.full[r[4]])+"",I,D;return{c(){s=v("a"),t=v("div"),a=v("img"),i=T(),l=v("div"),e=v("div"),c=v("i"),w=T(),j=v("span"),k=v("b"),A=T(),p=v("div"),this.h()},l(f){s=b(f,"A",{href:!0,class:!0});var h=g(s);t=b(h,"DIV",{class:!0,"data-readmore":!0});var L=g(t);a=b(L,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,loading:!0}),i=S(L),l=b(L,"DIV",{class:!0});var E=g(l);e=b(E,"DIV",{class:!0});var O=g(e);c=b(O,"I",{});var K=g(c);K.forEach(u),O.forEach(u),w=S(E),j=b(E,"SPAN",{class:!0});var q=g(j);k=b(q,"B",{});var Q=g(k);Q.forEach(u),q.forEach(u),A=S(E),p=b(E,"DIV",{class:!0});var R=g(p);R.forEach(u),E.forEach(u),L.forEach(u),h.forEach(u),this.h()},h(){G(a.src,n=`/images/news/${r[7].images.small}`)||d(a,"src",n),d(a,"alt",_=r[7].images.small),d(a,"width","248"),d(a,"height","350"),d(a,"class","news-image-small svelte-119b49t"),d(a,"loading","lazy"),d(e,"class","date svelte-119b49t"),d(j,"class","title svelte-119b49t"),d(p,"class","text svelte-119b49t"),d(l,"class","news-content svelte-119b49t"),d(t,"class","news-item dropshadow svelte-119b49t"),d(t,"data-readmore",I=r[3]("news.readmore")),d(s,"href",D=`/news/${r[7].slug}`),d(s,"class","news-link svelte-119b49t"),V(s,"fixed",!r[0]),V(s,"hidden",r[9]>=r[1])},m(f,h){N(f,s,h),m(s,t),m(t,a),m(t,i),m(t,l),m(l,e),m(e,c),c.innerHTML=o,m(l,w),m(l,j),m(j,k),k.innerHTML=M,m(l,A),m(l,p),p.innerHTML=H},p(f,h){h&4&&!G(a.src,n=`/images/news/${f[7].images.small}`)&&d(a,"src",n),h&4&&_!==(_=f[7].images.small)&&d(a,"alt",_),h&20&&o!==(o=f[7].date[f[4]]+"")&&(c.innerHTML=o),h&20&&M!==(M=f[7].title[f[4]]+"")&&(k.innerHTML=M),h&20&&H!==(H=(f[7].content.short?f[7].content.short[f[4]]:f[7].content.full[f[4]])+"")&&(p.innerHTML=H),h&8&&I!==(I=f[3]("news.readmore"))&&d(t,"data-readmore",I),h&4&&D!==(D=`/news/${f[7].slug}`)&&d(s,"href",D),h&1&&V(s,"fixed",!f[0]),h&2&&V(s,"hidden",f[9]>=f[1])},d(f){f&&u(s)}}}function he(r){let s,t=r[3]("news.showOlder")+"",a,n,_;return{c(){s=v("span"),a=C(t),this.h()},l(i){s=b(i,"SPAN",{class:!0});var l=g(s);a=F(l,t),l.forEach(u),this.h()},h(){d(s,"class","center link older svelte-119b49t")},m(i,l){N(i,s,l),m(s,a),n||(_=ue(s,"click",r[5]),n=!0)},p(i,l){l&8&&t!==(t=i[3]("news.showOlder")+"")&&J(a,t)},d(i){i&&u(s),n=!1,_()}}}function me(r){let s,t,a=r[3]("news.older")+"",n;return{c(){s=v("div"),t=v("a"),n=C(a),this.h()},l(_){s=b(_,"DIV",{class:!0});var i=g(s);t=b(i,"A",{href:!0,class:!0});var l=g(t);n=F(l,a),l.forEach(u),i.forEach(u),this.h()},h(){d(t,"href","/news"),d(t,"class","link"),d(s,"class","center svelte-119b49t")},m(_,i){N(_,s,i),m(s,t),m(t,n)},p(_,i){i&8&&a!==(a=_[3]("news.older")+"")&&J(n,a)},d(_){_&&u(s)}}}function ve(r){let s,t,a=r[2],n=[];for(let e=0;e<a.length;e+=1)n[e]=y(X(r,a,e));function _(e,c){if(e[0])return me;if(e[1]<e[2].length)return he}let i=_(r),l=i&&i(r);return{c(){for(let e=0;e<n.length;e+=1)n[e].c();s=T(),l&&l.c(),t=P()},l(e){for(let c=0;c<n.length;c+=1)n[c].l(e);s=S(e),l&&l.l(e),t=P()},m(e,c){for(let o=0;o<n.length;o+=1)n[o].m(e,c);N(e,s,c),l&&l.m(e,c),N(e,t,c)},p(e,[c]){if(c&31){a=e[2];let o;for(o=0;o<a.length;o+=1){const w=X(e,a,o);n[o]?n[o].p(w,c):(n[o]=y(w),n[o].c(),n[o].m(s.parentNode,s))}for(;o<n.length;o+=1)n[o].d(1);n.length=a.length}i===(i=_(e))&&l?l.p(e,c):(l&&l.d(1),l=i&&i(e),l&&(l.c(),l.m(t.parentNode,t)))},i:z,o:z,d(e){ce(n,e),e&&u(s),l&&l.d(e),e&&u(t)}}}function be(r,s,t){let a,n;B(r,fe,o=>t(3,a=o)),B(r,de,o=>t(4,n=o));let{latest:_=!1}=s;const i={"../../routes/news/articles/1.json":U,"../../routes/news/articles/10.json":W,"../../routes/news/articles/11.json":Y,"../../routes/news/articles/12.json":Z,"../../routes/news/articles/13.json":$,"../../routes/news/articles/2.json":x,"../../routes/news/articles/3.json":ee,"../../routes/news/articles/4.json":se,"../../routes/news/articles/5.json":le,"../../routes/news/articles/6.json":te,"../../routes/news/articles/7.json":ae,"../../routes/news/articles/8.json":re,"../../routes/news/articles/9.json":ne};let l=10,e=Object.entries(i).map(([o,w])=>({id:o.match(/\d+/)[0],article:w}));e.sort((o,w)=>Number(w.id)-Number(o.id)),e=_?e.slice(0,3):e;const c=()=>t(1,l+=5);return r.$$set=o=>{"latest"in o&&t(0,_=o.latest)},[_,l,e,a,n,c]}class pe extends oe{constructor(s){super();ie(this,s,be,ve,_e,{latest:0})}}export{pe as N};
