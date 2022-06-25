import{_ as z,a as F,b as J,c as O,d as P,e as U,f as X,g as G,h as K,i as Q}from"../../chunks/9-89318159.js";import{am as R,S as W,i as Y,s as Z,ae as x,v as S,j as T,w as D,l as H,x as A,f as g,p as I,n as M,A as B,d as m,J as C,e as v,a8 as ee,c as d,a as h,a9 as se,b as E,F as N,k as y,X as ae,M as te}from"../../chunks/vendor-2afdf9ad.js";import{T as ne}from"../../chunks/Tab-04a5156c.js";import{I as re}from"../../chunks/Image-a4b2a1e8.js";import{s as le,b as ie}from"../../chunks/stores-5e02f367.js";const oe=()=>{const s=R("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}},_e={subscribe(s){return oe().page.subscribe(s)}};function me(s){var V;let r,i=s[2].title[s[1]]+"",t,n,e,o=s[2].date[s[1]]+"",u,l,p,f,L,b,j=s[2].content.full[s[1]]+"",c;return f=new re({props:{src:`/images/news/${s[2].images.small}`,alt:"News subject",bigsrc:s[2].images.regular?`/images/news/${s[2].images.regular}`:"",caption:(V=s[2].images.caption)==null?void 0:V[s[1]]}}),{c(){r=v("h1"),t=T(),n=v("span"),e=v("i"),u=T(),l=v("div"),p=v("div"),S(f.$$.fragment),L=T(),b=new ee,this.h()},l(a){r=d(a,"H1",{class:!0});var _=h(r);_.forEach(m),t=H(a),n=d(a,"SPAN",{class:!0});var $=h(n);e=d($,"I",{});var w=h(e);w.forEach(m),$.forEach(m),u=H(a),l=d(a,"DIV",{class:!0});var k=h(l);p=d(k,"DIV",{class:!0});var q=h(p);D(f.$$.fragment,q),q.forEach(m),L=H(k),b=se(k),k.forEach(m),this.h()},h(){E(r,"class","cover-heading"),E(n,"class","date svelte-1mb1ln9"),E(p,"class","news-image svelte-1mb1ln9"),b.a=null,E(l,"class","content svelte-1mb1ln9")},m(a,_){g(a,r,_),r.innerHTML=i,g(a,t,_),g(a,n,_),N(n,e),e.innerHTML=o,g(a,u,_),g(a,l,_),N(l,p),A(f,p,null),N(l,L),b.m(j,l),c=!0},p(a,_){var w;(!c||_&2)&&i!==(i=a[2].title[a[1]]+"")&&(r.innerHTML=i),(!c||_&2)&&o!==(o=a[2].date[a[1]]+"")&&(e.innerHTML=o);const $={};_&2&&($.caption=(w=a[2].images.caption)==null?void 0:w[a[1]]),f.$set($),(!c||_&2)&&j!==(j=a[2].content.full[a[1]]+"")&&b.p(j)},i(a){c||(I(f.$$.fragment,a),c=!0)},o(a){M(f.$$.fragment,a),c=!1},d(a){a&&m(r),a&&m(t),a&&m(n),a&&m(u),a&&m(l),B(f)}}}function ue(s){let r,i,t=s[2]&&me(s);return{c(){t&&t.c(),r=y()},l(n){t&&t.l(n),r=y()},m(n,e){t&&t.m(n,e),g(n,r,e),i=!0},p(n,e){n[2]&&t.p(n,e)},i(n){i||(I(t),i=!0)},o(n){M(t),i=!1},d(n){t&&t.d(n),n&&m(r)}}}function fe(s){let r,i,t,n;return r=new x({props:{title:s[0]("news.slug.meta.title"),description:s[2]&&s[2].meta?s[2].meta[s[1]]:""}}),t=new ne({props:{oversize:!0,$$slots:{default:[ue]},$$scope:{ctx:s}}}),{c(){S(r.$$.fragment),i=T(),S(t.$$.fragment)},l(e){D(r.$$.fragment,e),i=H(e),D(t.$$.fragment,e)},m(e,o){A(r,e,o),g(e,i,o),A(t,e,o),n=!0},p(e,[o]){const u={};o&1&&(u.title=e[0]("news.slug.meta.title")),o&2&&(u.description=e[2]&&e[2].meta?e[2].meta[e[1]]:""),r.$set(u);const l={};o&34&&(l.$$scope={dirty:o,ctx:e}),t.$set(l)},i(e){n||(I(r.$$.fragment,e),I(t.$$.fragment,e),n=!0)},o(e){M(r.$$.fragment,e),M(t.$$.fragment,e),n=!1},d(e){B(r,e),e&&m(i),B(t,e)}}}function ce(s,r,i){let t,n,e;C(s,_e,l=>i(3,t=l)),C(s,ae,l=>i(0,n=l)),C(s,te,l=>i(1,e=l)),le.set(!1),ie.set(!1);let u=Object.values({"./articles/1.json":z,"./articles/10.json":F,"./articles/2.json":J,"./articles/3.json":O,"./articles/4.json":P,"./articles/5.json":U,"./articles/6.json":X,"./articles/7.json":G,"./articles/8.json":K,"./articles/9.json":Q}).find(l=>l.slug===t.params.slug);return[n,e,u]}class de extends W{constructor(r){super();Y(this,r,ce,fe,Z,{})}}export{de as default};