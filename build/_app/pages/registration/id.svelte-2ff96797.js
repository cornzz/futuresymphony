var ae=Object.defineProperty;var x=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var ee=(i,t,r)=>t in i?ae(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,te=(i,t)=>{for(var r in t||(t={}))ue.call(t,r)&&ee(i,r,t[r]);if(x)for(var r of x(t))ce.call(t,r)&&ee(i,r,t[r]);return i};import{S as _e,i as pe,s as me,e as B,t as y,j as F,k as G,c as C,a as U,g as v,d as m,l as S,b as M,f as h,F as L,h as O,n as w,o as W,p as $,J as Y,u as de,m as X,X as ge,T as re,ag as V,U as Z,H as q,v as N,w as E,x as I,A as R,ah as le,ai as oe,aa as be}from"../../chunks/vendor-7dd77b39.js";import{b as he,R as ke,a as K}from"../../chunks/RegistrationForm-b8431402.js";import{B as ie}from"../../chunks/Button-a1778a41.js";import{b as $e,l as J,c as we}from"../../chunks/stores-e65e49c8.js";import"../../chunks/index-a0c257e2.js";function ne(i,t,r){const e=i.slice();return e[19]=t[r],e}function ye(i){let t,r=i[9]("registration.notfound")+"",e,l,n,o=i[9]("error.goBack")+"",s;return{c(){t=B("div"),e=y(r),l=F(),n=B("a"),s=y(o),this.h()},l(_){t=C(_,"DIV",{class:!0});var a=U(t);e=v(a,r),l=S(a),n=C(a,"A",{href:!0,class:!0});var f=U(n);s=v(f,o),f.forEach(m),a.forEach(m),this.h()},h(){M(n,"href","/"),M(n,"class","link"),M(t,"class","center svelte-3a7dix")},m(_,a){h(_,t,a),L(t,e),L(t,l),L(t,n),L(n,s)},p(_,a){a&512&&r!==(r=_[9]("registration.notfound")+"")&&O(e,r),a&512&&o!==(o=_[9]("error.goBack")+"")&&O(s,o)},i:q,o:q,d(_){_&&m(t)}}}function ve(i){let t,r,e,l,n,o,s,_,a,f=!i[10]&&Oe(i);const k=[De,Se],c=[];function g(u,b){return u[4].length===0?0:1}r=g(i),e=c[r]=k[r](i);let p=i[5]&&fe(i);function Q(u){i[15](u)}function z(u){i[16](u)}let T={disabled:i[3],$$slots:{default:[Le]},$$scope:{ctx:i}};return i[0]!==void 0&&(T.dto=i[0]),i[6]!==void 0&&(T.changed=i[6]),o=new ke({props:T}),i[14](o),Z.push(()=>le(o,"dto",Q)),Z.push(()=>le(o,"changed",z)),{c(){f&&f.c(),t=F(),e.c(),l=F(),p&&p.c(),n=F(),N(o.$$.fragment)},l(u){f&&f.l(u),t=S(u),e.l(u),l=S(u),p&&p.l(u),n=S(u),E(o.$$.fragment,u)},m(u,b){f&&f.m(u,b),h(u,t,b),c[r].m(u,b),h(u,l,b),p&&p.m(u,b),h(u,n,b),I(o,u,b),a=!0},p(u,b){u[10]||f.p(u,b);let A=r;r=g(u),r===A?c[r].p(u,b):(X(),w(c[A],1,1,()=>{c[A]=null}),W(),e=c[r],e?e.p(u,b):(e=c[r]=k[r](u),e.c()),$(e,1),e.m(l.parentNode,l)),u[5]?p?(p.p(u,b),b&32&&$(p,1)):(p=fe(u),p.c(),$(p,1),p.m(n.parentNode,n)):p&&(X(),w(p,1,1,()=>{p=null}),W());const D={};b&8&&(D.disabled=u[3]),b&4195307&&(D.$$scope={dirty:b,ctx:u}),!s&&b&1&&(s=!0,D.dto=u[0],oe(()=>s=!1)),!_&&b&64&&(_=!0,D.changed=u[6],oe(()=>_=!1)),o.$set(D)},i(u){a||($(f),$(e),$(p),$(o.$$.fragment,u),a=!0)},o(u){w(f),w(e),w(p),w(o.$$.fragment,u),a=!1},d(u){f&&f.d(u),u&&m(t),c[r].d(u),u&&m(l),p&&p.d(u),u&&m(n),i[14](null),R(o,u)}}}function Oe(i){let t,r;return t=new K({props:{type:"info",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,l){I(t,e,l),r=!0},p(e,l){const n={};l&4194816&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Fe(i){let t=i[9]("registration.editingAllowedUntil")+"",r,e,l=i[9]("registration.confirmationAfterDeadline")+"",n;return{c(){r=y(t),e=F(),n=y(l)},l(o){r=v(o,t),e=S(o),n=v(o,l)},m(o,s){h(o,r,s),h(o,e,s),h(o,n,s)},p(o,s){s&512&&t!==(t=o[9]("registration.editingAllowedUntil")+"")&&O(r,t),s&512&&l!==(l=o[9]("registration.confirmationAfterDeadline")+"")&&O(n,l)},d(o){o&&m(r),o&&m(e),o&&m(n)}}}function Se(i){let t,r;return t=new K({props:{type:"warning",$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,l){I(t,e,l),r=!0},p(e,l){const n={};l&4194832&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function De(i){let t,r;return t=new K({props:{type:"success",$$slots:{default:[Ee]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,l){I(t,e,l),r=!0},p(e,l){const n={};l&4194816&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function se(i){let t,r=i[9](i[19])+"",e;return{c(){t=B("li"),e=y(r),this.h()},l(l){t=C(l,"LI",{class:!0});var n=U(t);e=v(n,r),n.forEach(m),this.h()},h(){M(t,"class","svelte-3a7dix")},m(l,n){h(l,t,n),L(t,e)},p(l,n){n&528&&r!==(r=l[9](l[19])+"")&&O(e,r)},d(l){l&&m(t)}}}function Ne(i){let t=i[9]("registration.missingForComplete")+"",r,e,l,n=i[4],o=[];for(let s=0;s<n.length;s+=1)o[s]=se(ne(i,n,s));return{c(){r=y(t),e=F(),l=B("ul");for(let s=0;s<o.length;s+=1)o[s].c()},l(s){r=v(s,t),e=S(s),l=C(s,"UL",{});var _=U(l);for(let a=0;a<o.length;a+=1)o[a].l(_);_.forEach(m)},m(s,_){h(s,r,_),h(s,e,_),h(s,l,_);for(let a=0;a<o.length;a+=1)o[a].m(l,null)},p(s,_){if(_&512&&t!==(t=s[9]("registration.missingForComplete")+"")&&O(r,t),_&528){n=s[4];let a;for(a=0;a<n.length;a+=1){const f=ne(s,n,a);o[a]?o[a].p(f,_):(o[a]=se(f),o[a].c(),o[a].m(l,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(s){s&&m(r),s&&m(e),s&&m(l),be(o,s)}}}function Ee(i){let t=i[9]("registration.complete")+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&512&&t!==(t=e[9]("registration.complete")+"")&&O(r,t)},d(e){e&&m(r)}}}function fe(i){let t,r;return t=new K({props:{type:"error",$$slots:{default:[Ie]},$$scope:{ctx:i}}}),{c(){N(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,l){I(t,e,l),r=!0},p(e,l){const n={};l&4194848&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ie(i){let t=i[9](...i[5])+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&544&&t!==(t=e[9](...e[5])+"")&&O(r,t)},d(e){e&&m(r)}}}function Re(i){let t;return{c(){t=B("div")},l(r){t=C(r,"DIV",{}),U(t).forEach(m)},m(r,e){h(r,t,e)},p:q,i:q,o:q,d(r){r&&m(t)}}}function je(i){let t,r;return t=new ie({props:{type:"outline",disabled:i[8],$$slots:{default:[Be]},$$scope:{ctx:i}}}),t.$on("click",i[12]),{c(){N(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,l){I(t,e,l),r=!0},p(e,l){const n={};l&256&&(n.disabled=e[8]),l&4194816&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Be(i){let t=i[9]("registration.form.cancel")+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&512&&t!==(t=e[9]("registration.form.cancel")+"")&&O(r,t)},d(e){e&&m(r)}}}function Ce(i){let t,r;return t=new ie({props:{type:"primary",disabled:i[8],$$slots:{default:[Ue]},$$scope:{ctx:i}}}),t.$on("click",i[13]),{c(){N(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,l){I(t,e,l),r=!0},p(e,l){const n={};l&256&&(n.disabled=e[8]),l&4194824&&(n.$$scope={dirty:l,ctx:e}),t.$set(n)},i(e){r||($(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){R(t,e)}}}function Ue(i){let t=(i[3]?i[9]("registration.form.edit"):i[9]("registration.form.save"))+"",r;return{c(){r=y(t)},l(e){r=v(e,t)},m(e,l){h(e,r,l)},p(e,l){l&520&&t!==(t=(e[3]?e[9]("registration.form.edit"):e[9]("registration.form.save"))+"")&&O(r,t)},d(e){e&&m(r)}}}function Le(i){let t,r,e,l,n;const o=[je,Re],s=[];function _(f,k){return f[3]?1:0}t=_(i),r=s[t]=o[t](i);let a=!i[10]&&Ce(i);return{c(){r.c(),e=F(),a&&a.c(),l=G()},l(f){r.l(f),e=S(f),a&&a.l(f),l=G()},m(f,k){s[t].m(f,k),h(f,e,k),a&&a.m(f,k),h(f,l,k),n=!0},p(f,k){let c=t;t=_(f),t===c?s[t].p(f,k):(X(),w(s[c],1,1,()=>{s[c]=null}),W(),r=s[t],r?r.p(f,k):(r=s[t]=o[t](f),r.c()),$(r,1),r.m(e.parentNode,e)),f[10]||a.p(f,k)},i(f){n||($(r),$(a),n=!0)},o(f){w(r),w(a),n=!1},d(f){s[t].d(f),f&&m(e),a&&a.d(f),f&&m(l)}}}function Je(i){let t,r=i[9]("registration.yourRegistration")+"",e,l,n,o,s,_;const a=[ve,ye],f=[];function k(c,g){return c[0]?0:c[2]?1:-1}return~(n=k(i))&&(o=f[n]=a[n](i)),{c(){t=B("h1"),e=y(r),l=F(),o&&o.c(),s=G(),this.h()},l(c){t=C(c,"H1",{class:!0});var g=U(t);e=v(g,r),g.forEach(m),l=S(c),o&&o.l(c),s=G(),this.h()},h(){M(t,"class","cover-heading")},m(c,g){h(c,t,g),L(t,e),h(c,l,g),~n&&f[n].m(c,g),h(c,s,g),_=!0},p(c,[g]){(!_||g&512)&&r!==(r=c[9]("registration.yourRegistration")+"")&&O(e,r);let p=n;n=k(c),n===p?~n&&f[n].p(c,g):(o&&(X(),w(f[p],1,1,()=>{f[p]=null}),W()),~n?(o=f[n],o?o.p(c,g):(o=f[n]=a[n](c),o.c()),$(o,1),o.m(s.parentNode,s)):o=null)},i(c){_||($(o),_=!0)},o(c){w(o),_=!1},d(c){c&&m(t),c&&m(l),~n&&f[n].d(c),c&&m(s)}}}function Te(i,t,r){let e,l,n;Y(i,J,d=>r(8,e=d)),Y(i,we,d=>r(18,l=d)),Y(i,ge,d=>r(9,n=d));let{dto:o=null}=t;$e.set(!0);let s,_,a=!1,f=!1,k=[],c=null,g=!1,p=null,Q=new Date>new Date("Jun 30 2022 23:59:59 GMT+0200");async function z(){if(r(5,c=null),await re(),s.reportValidity("#firstName, #lastName, #email, #dateOfBirth, #country, #idCopy, #pieceScore, #pieceDemo, #proofOfPayment")){console.log(`saving registration ${_}`),V(J,e=!0,e);let d=await fetch(new URL("registration.php",l).toString(),{method:"POST",body:JSON.stringify(o)});if(d.status===200){let j=new FormData;j.append("reg_key",_);for(let H of Object.entries(o.files))H[1]&&j.append(H[0],H[1][0]);if(d=await fetch(new URL(`files.php?key=${_}`,l).toString(),{method:"POST",body:j}),d.status===200)return r(0,o.files.idCopyFile=void 0,o),r(0,o.files.pieceDemoFile=void 0,o),r(0,o.files.pieceScoreFile=void 0,o),r(0,o.files.proofOfPaymentFile=void 0,o),r(6,g=!1),V(J,e=!1,e),r(4,k=s.getInvalid()),!0}let P=await d.text();if(P==="Invalid form.")r(5,c=["registration.form.error.invalidForm",{}]);else if(P.startsWith("Invalid file type or size:")){let j=P.split(": ").pop();r(5,c=["registration.form.error.fileError",{values:{files:j}}])}else r(5,c=["registration.form.error.errorOccurred",{}]);V(J,e=!1,e)}return!1}de(async()=>{if(V(J,e=!0,e),_=window.location.search.substring(1),console.log(`loading registration ${_}`),_==="1")r(0,o=JSON.parse('{"reg_key":"1","firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"2001-01-11","country":"DE","pieceTitle":"My piece","pieceDemo":"","pieceScore":"score.pdf","idCopy":"","instrumentation":[[true],[true],[true],[true],[true],[true],[true],[true,true],[false,true],[false],[true],[false],[true,true],[false],[false],[false],[false],[false],[true],[true,true,true,true,true,true],[true,true,true,true,false],[true,true,true,true],[true,false,false],[false,false]],"scoreConfirmations":[true,false,false],"proofOfPayment":"","files":{"idCopyFile":null,"pieceScoreFile":null,"pieceDemoFile":null,"proofOfPaymentFile":null}}'));else{const d=await fetch(new URL(`registration.php?key=${_}`,l).toString());if(d.status===200){let P=JSON.parse(await d.text());r(0,o=Object.assign(new he,Object.fromEntries(Object.entries(P).filter(([j,H])=>H!==null))))}}V(J,e=!1,e),r(2,a=!0),await re(),s&&(r(4,k=s.getInvalid()),r(3,f=!0))});const T=()=>{r(3,f=!0),r(5,c=null),r(0,o=te({},p))},u=async()=>{r(3,f=!f&&(!g||await z())),(f||c)&&document.getElementById("back").click(),f&&s.closeSubsections(),r(7,p=!f&&!c?JSON.parse(JSON.stringify(o)):p)};function b(d){Z[d?"unshift":"push"](()=>{s=d,r(1,s)})}function A(d){o=d,r(0,o)}function D(d){g=d,r(6,g)}return i.$$set=d=>{"dto"in d&&r(0,o=d.dto)},[o,s,a,f,k,c,g,p,e,n,Q,z,T,u,b,A,D]}class ze extends _e{constructor(t){super();pe(this,t,Te,Je,me,{dto:0})}}export{ze as default};