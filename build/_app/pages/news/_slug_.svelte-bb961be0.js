import{_ as z,a as F,b as J,c as O,d as P,e as U,f as X,g as G,h as K,i as Q,j as R,k as W}from"../../chunks/9-20492057.js";import{ao as Y,S as Z,i as x,s as ee,ae as se,v as S,j as T,w as D,l as H,x as A,f as g,p as I,n as M,A as B,d as m,J as C,e as v,a8 as ae,c as d,a as j,a9 as te,b as E,F as N,k as y,X as ne,M as le}from"../../chunks/vendor-3b8c650a.js";import{T as re}from"../../chunks/Tab-fe19bf4c.js";import{I as ie}from"../../chunks/Image-24d5c65a.js";import{s as oe,b as _e}from"../../chunks/stores-600db517.js";const me=()=>{const s=Y("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},ce={subscribe(s){return me().page.subscribe(s)}};function ue(s){var V;let l,i=s[2].title[s[1]]+"",t,n,e,o=s[2].date[s[1]]+"",c,r,p,u,L,b,h=s[2].content.full[s[1]]+"",f;return u=new ie({props:{src:`/images/news/${s[2].images.small}`,alt:"News subject",bigsrc:s[2].images.regular?`/images/news/${s[2].images.regular}`:"",caption:(V=s[2].images.caption)==null?void 0:V[s[1]]}}),{c(){l=v("h1"),t=T(),n=v("span"),e=v("i"),c=T(),r=v("div"),p=v("div"),S(u.$$.fragment),L=T(),b=new ae,this.h()},l(a){l=d(a,"H1",{class:!0});var _=j(l);_.forEach(m),t=H(a),n=d(a,"SPAN",{class:!0});var $=j(n);e=d($,"I",{});var w=j(e);w.forEach(m),$.forEach(m),c=H(a),r=d(a,"DIV",{class:!0});var k=j(r);p=d(k,"DIV",{class:!0});var q=j(p);D(u.$$.fragment,q),q.forEach(m),L=H(k),b=te(k),k.forEach(m),this.h()},h(){E(l,"class","cover-heading"),E(n,"class","date svelte-1mb1ln9"),E(p,"class","news-image svelte-1mb1ln9"),b.a=null,E(r,"class","content svelte-1mb1ln9")},m(a,_){g(a,l,_),l.innerHTML=i,g(a,t,_),g(a,n,_),N(n,e),e.innerHTML=o,g(a,c,_),g(a,r,_),N(r,p),A(u,p,null),N(r,L),b.m(h,r),f=!0},p(a,_){var w;(!f||_&2)&&i!==(i=a[2].title[a[1]]+"")&&(l.innerHTML=i),(!f||_&2)&&o!==(o=a[2].date[a[1]]+"")&&(e.innerHTML=o);const $={};_&2&&($.caption=(w=a[2].images.caption)==null?void 0:w[a[1]]),u.$set($),(!f||_&2)&&h!==(h=a[2].content.full[a[1]]+"")&&b.p(h)},i(a){f||(I(u.$$.fragment,a),f=!0)},o(a){M(u.$$.fragment,a),f=!1},d(a){a&&m(l),a&&m(t),a&&m(n),a&&m(c),a&&m(r),B(u)}}}function fe(s){let l,i,t=s[2]&&ue(s);return{c(){t&&t.c(),l=y()},l(n){t&&t.l(n),l=y()},m(n,e){t&&t.m(n,e),g(n,l,e),i=!0},p(n,e){n[2]&&t.p(n,e)},i(n){i||(I(t),i=!0)},o(n){M(t),i=!1},d(n){t&&t.d(n),n&&m(l)}}}function ge(s){let l,i,t,n;return l=new se({props:{title:s[0]("news.slug.meta.title"),description:s[2]&&s[2].meta?s[2].meta[s[1]]:""}}),t=new re({props:{oversize:!0,$$slots:{default:[fe]},$$scope:{ctx:s}}}),{c(){S(l.$$.fragment),i=T(),S(t.$$.fragment)},l(e){D(l.$$.fragment,e),i=H(e),D(t.$$.fragment,e)},m(e,o){A(l,e,o),g(e,i,o),A(t,e,o),n=!0},p(e,[o]){const c={};o&1&&(c.title=e[0]("news.slug.meta.title")),o&2&&(c.description=e[2]&&e[2].meta?e[2].meta[e[1]]:""),l.$set(c);const r={};o&34&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(I(l.$$.fragment,e),I(t.$$.fragment,e),n=!0)},o(e){M(l.$$.fragment,e),M(t.$$.fragment,e),n=!1},d(e){B(l,e),e&&m(i),B(t,e)}}}function pe(s,l,i){let t,n,e;C(s,ce,r=>i(3,t=r)),C(s,ne,r=>i(0,n=r)),C(s,le,r=>i(1,e=r)),oe.set(!1),_e.set(!1);let c=Object.values({"./articles/1.json":z,"./articles/10.json":F,"./articles/11.json":J,"./articles/12.json":O,"./articles/2.json":P,"./articles/3.json":U,"./articles/4.json":X,"./articles/5.json":G,"./articles/6.json":K,"./articles/7.json":Q,"./articles/8.json":R,"./articles/9.json":W}).find(r=>r.slug===t.params.slug);return[n,e,c]}class he extends Z{constructor(l){super();x(this,l,pe,ge,ee,{})}}export{he as default};
