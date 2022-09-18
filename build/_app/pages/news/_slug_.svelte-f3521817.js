import{_ as z,a as O,b as P,c as R,d as U,e as X,f as F,g as G,h as J,i as K,j as Q,k as W,l as Y,m as Z,n as x}from"../../chunks/9-e5a87b1b.js";import{ap as ee,S as se,i as ae,s as te,ai as ne,v as S,j as T,w as D,l as H,x as A,f,p as E,n as I,A as B,d as c,L as C,e as v,ac as le,c as d,a as j,ad as re,b as L,E as N,k as y,X as ie,R as oe}from"../../chunks/vendor-e7083a84.js";import{T as _e}from"../../chunks/Tab-30019d99.js";import{I as ce}from"../../chunks/Image-4aaacceb.js";import{s as me,c as ue}from"../../chunks/stores-bf8d9b2c.js";const ge=()=>{const s=ee("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},fe={subscribe(s){return ge().page.subscribe(s)}};function pe(s){var V;let l,i=s[2].title[s[1]]+"",t,n,e,o=s[2].date[s[1]]+"",m,r,p,u,M,b,h=s[2].content.full[s[1]]+"",g;return u=new ce({props:{src:`/images/news/${s[2].images.small}`,alt:"News subject",bigsrc:s[2].images.regular?`/images/news/${s[2].images.regular}`:"",caption:(V=s[2].images.caption)==null?void 0:V[s[1]]}}),{c(){l=v("h1"),t=T(),n=v("span"),e=v("i"),m=T(),r=v("div"),p=v("div"),S(u.$$.fragment),M=T(),b=new le,this.h()},l(a){l=d(a,"H1",{class:!0});var _=j(l);_.forEach(c),t=H(a),n=d(a,"SPAN",{class:!0});var $=j(n);e=d($,"I",{});var w=j(e);w.forEach(c),$.forEach(c),m=H(a),r=d(a,"DIV",{class:!0});var k=j(r);p=d(k,"DIV",{class:!0});var q=j(p);D(u.$$.fragment,q),q.forEach(c),M=H(k),b=re(k),k.forEach(c),this.h()},h(){L(l,"class","cover-heading"),L(n,"class","date svelte-1c1p85p"),L(p,"class","news-image svelte-1c1p85p"),b.a=null,L(r,"class","content svelte-1c1p85p")},m(a,_){f(a,l,_),l.innerHTML=i,f(a,t,_),f(a,n,_),N(n,e),e.innerHTML=o,f(a,m,_),f(a,r,_),N(r,p),A(u,p,null),N(r,M),b.m(h,r),g=!0},p(a,_){var w;(!g||_&2)&&i!==(i=a[2].title[a[1]]+"")&&(l.innerHTML=i),(!g||_&2)&&o!==(o=a[2].date[a[1]]+"")&&(e.innerHTML=o);const $={};_&2&&($.caption=(w=a[2].images.caption)==null?void 0:w[a[1]]),u.$set($),(!g||_&2)&&h!==(h=a[2].content.full[a[1]]+"")&&b.p(h)},i(a){g||(E(u.$$.fragment,a),g=!0)},o(a){I(u.$$.fragment,a),g=!1},d(a){a&&c(l),a&&c(t),a&&c(n),a&&c(m),a&&c(r),B(u)}}}function be(s){let l,i,t=s[2]&&pe(s);return{c(){t&&t.c(),l=y()},l(n){t&&t.l(n),l=y()},m(n,e){t&&t.m(n,e),f(n,l,e),i=!0},p(n,e){n[2]&&t.p(n,e)},i(n){i||(E(t),i=!0)},o(n){I(t),i=!1},d(n){t&&t.d(n),n&&c(l)}}}function $e(s){let l,i,t,n;return l=new ne({props:{title:s[0]("news.slug.meta.title"),description:s[2]&&s[2].meta?s[2].meta[s[1]]:""}}),t=new _e({props:{oversize:!0,$$slots:{default:[be]},$$scope:{ctx:s}}}),{c(){S(l.$$.fragment),i=T(),S(t.$$.fragment)},l(e){D(l.$$.fragment,e),i=H(e),D(t.$$.fragment,e)},m(e,o){A(l,e,o),f(e,i,o),A(t,e,o),n=!0},p(e,[o]){const m={};o&1&&(m.title=e[0]("news.slug.meta.title")),o&2&&(m.description=e[2]&&e[2].meta?e[2].meta[e[1]]:""),l.$set(m);const r={};o&34&&(r.$$scope={dirty:o,ctx:e}),t.$set(r)},i(e){n||(E(l.$$.fragment,e),E(t.$$.fragment,e),n=!0)},o(e){I(l.$$.fragment,e),I(t.$$.fragment,e),n=!1},d(e){B(l,e),e&&c(i),B(t,e)}}}function ve(s,l,i){let t,n,e;C(s,fe,r=>i(3,t=r)),C(s,ie,r=>i(0,n=r)),C(s,oe,r=>i(1,e=r)),me.set(!1),ue.set(!1);let m=Object.values({"./articles/1.json":z,"./articles/10.json":O,"./articles/11.json":P,"./articles/12.json":R,"./articles/13.json":U,"./articles/14.json":X,"./articles/15.json":F,"./articles/2.json":G,"./articles/3.json":J,"./articles/4.json":K,"./articles/5.json":Q,"./articles/6.json":W,"./articles/7.json":Y,"./articles/8.json":Z,"./articles/9.json":x}).find(r=>r.slug===t.params.slug);return[n,e,m]}class Te extends se{constructor(l){super();ae(this,l,ve,$e,te,{})}}export{Te as default};