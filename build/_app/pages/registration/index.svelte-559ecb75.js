import{S as ae,i as ue,s as _e,k as Z,f as w,m as G,n as R,o as X,p as v,d as k,J as M,M as me,X as pe,u as ce,ai as te,e as O,j as T,c as q,a as Y,l as N,b as z,E as re,V as Ie,F as C,W as ge,Z as ie,t as U,g as D,G as de,h as j,H as ne,U as L,aj as W,v as B,w as V,x as F,ak as J,A as H,ae as ye,a8 as le,a9 as oe}from"../../chunks/vendor-3b8c650a.js";import{I as Se,a as ee}from"../../chunks/selectData-be498bc2.js";import{R as Te,a as Ne}from"../../chunks/RegistrationForm-50074901.js";import{B as be}from"../../chunks/Button-17e544cc.js";import{l as Q,c as ke,d as Ue}from"../../chunks/stores-600db517.js";import{f as se}from"../../chunks/index-8490d5e5.js";import{d as De}from"../../chunks/env-b8be748f.js";function je(n){let e,r,t,i,s,a,u,f;const p=[Fe,Ve],_=[];function b(d,o){return d[3]?1:0}return s=b(n),a=_[s]=p[s](n),{c(){e=O("div"),r=O("hr"),t=T(),i=O("div"),a.c(),this.h()},l(d){e=q(d,"DIV",{style:!0});var o=Y(e);r=q(o,"HR",{}),t=N(o),i=q(o,"DIV",{class:!0});var g=Y(i);a.l(g),g.forEach(k),o.forEach(k),this.h()},h(){z(i,"class","resend svelte-rart3l"),re(i,"success",n[3]),Ie(e,"overflow","hidden")},m(d,o){w(d,e,o),C(e,r),C(e,t),C(e,i),_[s].m(i,null),f=!0},p(d,o){let g=s;s=b(d),s===g?_[s].p(d,o):(G(),R(_[g],1,1,()=>{_[g]=null}),X(),a=_[s],a?a.p(d,o):(a=_[s]=p[s](d),a.c()),v(a,1),a.m(i,null)),o&8&&re(i,"success",d[3])},i(d){f||(v(a),ge(()=>{u||(u=ie(e,se,{},!0)),u.run(1)}),f=!0)},o(d){R(a),u||(u=ie(e,se,{},!1)),u.run(0),f=!1},d(d){d&&k(e),_[s].d(),d&&u&&u.end()}}}function Be(n){let e=n[6](`registration.resend.${n[1]}`)+"",r,t,i,s=n[6]("registration.resend.here")+"",a,u,f,p;return{c(){r=U(e),t=T(),i=O("span"),a=U(s),u=U("."),this.h()},l(_){r=D(_,e),t=N(_),i=q(_,"SPAN",{class:!0});var b=Y(i);a=D(b,s),b.forEach(k),u=D(_,"."),this.h()},h(){z(i,"class","link")},m(_,b){w(_,r,b),w(_,t,b),w(_,i,b),C(i,a),w(_,u,b),f||(p=de(i,"click",n[11]),f=!0)},p(_,b){b&66&&e!==(e=_[6](`registration.resend.${_[1]}`)+"")&&j(r,e),b&64&&s!==(s=_[6]("registration.resend.here")+"")&&j(a,s)},i:ne,o:ne,d(_){_&&k(r),_&&k(t),_&&k(i),_&&k(u),f=!1,p()}}}function Ve(n){let e=n[6]("registration.resend.success")+"",r,t,i=n[6]("registration.resend.sendAgain")+"",s,a,u,f=n[6]("registration.resend.here")+"",p,_,b=(n[4]>0?`(${Math.floor(n[4]/60)}:${("0"+n[4]%60).slice(-2)})`:"")+"",d,o,g;return{c(){r=U(e),t=T(),s=U(i),a=T(),u=O("span"),p=U(f),_=U(`.
                `),d=U(b),this.h()},l(c){r=D(c,e),t=N(c),s=D(c,i),a=N(c),u=q(c,"SPAN",{class:!0});var m=Y(u);p=D(m,f),m.forEach(k),_=D(c,`.
                `),d=D(c,b),this.h()},h(){z(u,"class","link svelte-rart3l"),re(u,"disabled",n[4]>0)},m(c,m){w(c,r,m),w(c,t,m),w(c,s,m),w(c,a,m),w(c,u,m),C(u,p),w(c,_,m),w(c,d,m),o||(g=de(u,"click",n[14]),o=!0)},p(c,m){m&64&&e!==(e=c[6]("registration.resend.success")+"")&&j(r,e),m&64&&i!==(i=c[6]("registration.resend.sendAgain")+"")&&j(s,i),m&64&&f!==(f=c[6]("registration.resend.here")+"")&&j(p,f),m&16&&re(u,"disabled",c[4]>0),m&16&&b!==(b=(c[4]>0?`(${Math.floor(c[4]/60)}:${("0"+c[4]%60).slice(-2)})`:"")+"")&&j(d,b)},i:ne,o:ne,d(c){c&&k(r),c&&k(t),c&&k(s),c&&k(a),c&&k(u),c&&k(_),c&&k(d),o=!1,g()}}}function Fe(n){let e,r=n[6]("registration.resend.enterYourEmail")+"",t,i,s,a,u,f,p,_;function b(o){n[12](o)}let d={type:"email",name:"resendEmail",placeholder:n[6]("registration.resend.yourEmail")};return n[0]!==void 0&&(d.value=n[0]),a=new Se({props:d}),L.push(()=>W(a,"value",b)),a.$on("keyup",n[13]),p=new be({props:{type:"primary",slim:!0,disabled:n[5],$$slots:{default:[He]},$$scope:{ctx:n}}}),p.$on("click",n[7]),{c(){e=O("span"),t=U(r),i=U(":"),s=T(),B(a.$$.fragment),f=T(),B(p.$$.fragment),this.h()},l(o){e=q(o,"SPAN",{class:!0});var g=Y(e);t=D(g,r),i=D(g,":"),g.forEach(k),s=N(o),V(a.$$.fragment,o),f=N(o),V(p.$$.fragment,o),this.h()},h(){z(e,"class","svelte-rart3l")},m(o,g){w(o,e,g),C(e,t),C(e,i),w(o,s,g),F(a,o,g),w(o,f,g),F(p,o,g),_=!0},p(o,g){(!_||g&64)&&r!==(r=o[6]("registration.resend.enterYourEmail")+"")&&j(t,r);const c={};g&64&&(c.placeholder=o[6]("registration.resend.yourEmail")),!u&&g&1&&(u=!0,c.value=o[0],J(()=>u=!1)),a.$set(c);const m={};g&32&&(m.disabled=o[5]),g&524352&&(m.$$scope={dirty:g,ctx:o}),p.$set(m)},i(o){_||(v(a.$$.fragment,o),v(p.$$.fragment,o),_=!0)},o(o){R(a.$$.fragment,o),R(p.$$.fragment,o),_=!1},d(o){o&&k(e),o&&k(s),H(a,o),o&&k(f),H(p,o)}}}function He(n){let e=n[6]("registration.form.submit")+"",r;return{c(){r=U(e)},l(t){r=D(t,e)},m(t,i){w(t,r,i)},p(t,i){i&64&&e!==(e=t[6]("registration.form.submit")+"")&&j(r,e)},d(t){t&&k(r)}}}function Le(n){let e,r,t,i;const s=[Be,je],a=[];function u(f,p){return f[2]?1:0}return e=u(n),r=a[e]=s[e](n),{c(){r.c(),t=Z()},l(f){r.l(f),t=Z()},m(f,p){a[e].m(f,p),w(f,t,p),i=!0},p(f,[p]){let _=e;e=u(f),e===_?a[e].p(f,p):(G(),R(a[_],1,1,()=>{a[_]=null}),X(),r=a[e],r?r.p(f,p):(r=a[e]=s[e](f),r.c()),v(r,1),r.m(t.parentNode,t))},i(f){i||(v(r),i=!0)},o(f){R(r),i=!1},d(f){a[e].d(f),f&&k(t)}}}function Pe(n,e,r){let t,i,s,a;M(n,Q,l=>r(5,t=l)),M(n,ke,l=>r(16,i=l)),M(n,me,l=>r(17,s=l)),M(n,pe,l=>r(6,a=l));let{type:u}=e,{existingEmail:f=""}=e,{email:p=""}=e,{error:_}=e,{warning:b}=e,d=!1,o=!1,g=0,c;function m(l){r(4,g=new Date(new Date().getTime()+l).getTime()-new Date().getTime()),c=setInterval(()=>{g>0?r(4,g--,g):clearInterval(c)},1e3)}async function S(){r(8,_=""),r(9,b="");const l=document.getElementById("resendEmail");if(l&&l.reportValidity()||!l&&p){te(Q,t=!0,t);let h=new URLSearchParams({email:p,lang:s});const K=await fetch(new URL("base_registration.php?"+h,i));if(K.ok)r(3,o=!0),m(5*60);else{let P=await K.text();P==="Email not found."?r(8,_="registration.resend.notFound"):P==="Error sending confirmation email."?r(8,_="registration.form.error.emailError"):P==="Too many requests."?r(9,b="registration.resend.pleaseWait"):r(8,_="registration.form.error.errorOccurred"),r(3,o=!1)}te(Q,t=!1,t)}}ce(()=>r(0,p=f));const E=()=>r(2,d=!d);function A(l){p=l,r(0,p)}const I=l=>l.key==="Enter"&&S(),y=()=>g<=0&&S();return n.$$set=l=>{"type"in l&&r(1,u=l.type),"existingEmail"in l&&r(10,f=l.existingEmail),"email"in l&&r(0,p=l.email),"error"in l&&r(8,_=l.error),"warning"in l&&r(9,b=l.warning)},[p,u,d,o,g,t,a,S,_,b,f,E,A,I,y]}class he extends ae{constructor(e){super();ue(this,e,Pe,Le,_e,{type:1,existingEmail:10,email:0,error:8,warning:9})}}function Me(n){let e,r;return e=new ee({props:{type:"info",$$slots:{default:[qe]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){F(e,t,i),r=!0},p(t,i){const s={};i&33554994&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Oe(n){let e,r;return e=new ee({props:{type:"success",$$slots:{default:[We]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){F(e,t,i),r=!0},p(t,i){const s={};i&33554995&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function qe(n){let e,r=n[9]("registration.firstStep")+"",t,i=n[9]("registration.editingAllowedUntil")+"",s,a,u,f,p,_,b;function d(m){n[14](m)}function o(m){n[15](m)}function g(m){n[16](m)}let c={type:"alreadyRegistered"};return n[1]!==void 0&&(c.email=n[1]),n[5]!==void 0&&(c.error=n[5]),n[4]!==void 0&&(c.warning=n[4]),u=new he({props:c}),L.push(()=>W(u,"email",d)),L.push(()=>W(u,"error",o)),L.push(()=>W(u,"warning",g)),{c(){e=new le,t=T(),s=U(i),a=T(),B(u.$$.fragment),this.h()},l(m){e=oe(m),t=N(m),s=D(m,i),a=N(m),V(u.$$.fragment,m),this.h()},h(){e.a=t},m(m,S){e.m(r,m,S),w(m,t,S),w(m,s,S),w(m,a,S),F(u,m,S),b=!0},p(m,S){(!b||S&512)&&r!==(r=m[9]("registration.firstStep")+"")&&e.p(r),(!b||S&512)&&i!==(i=m[9]("registration.editingAllowedUntil")+"")&&j(s,i);const E={};!f&&S&2&&(f=!0,E.email=m[1],J(()=>f=!1)),!p&&S&32&&(p=!0,E.error=m[5],J(()=>p=!1)),!_&&S&16&&(_=!0,E.warning=m[4],J(()=>_=!1)),u.$set(E)},i(m){b||(v(u.$$.fragment,m),b=!0)},o(m){R(u.$$.fragment,m),b=!1},d(m){m&&e.d(),m&&k(t),m&&k(s),m&&k(a),H(u,m)}}}function We(n){let e,r=n[9]("registration.success",{values:{email:n[0].email}})+"",t,i,s,a,u,f;function p(o){n[11](o)}function _(o){n[12](o)}function b(o){n[13](o)}let d={type:"didNotReceive",existingEmail:n[0].email};return n[1]!==void 0&&(d.email=n[1]),n[5]!==void 0&&(d.error=n[5]),n[4]!==void 0&&(d.warning=n[4]),i=new he({props:d}),L.push(()=>W(i,"email",p)),L.push(()=>W(i,"error",_)),L.push(()=>W(i,"warning",b)),{c(){e=new le,t=T(),B(i.$$.fragment),this.h()},l(o){e=oe(o),t=N(o),V(i.$$.fragment,o),this.h()},h(){e.a=t},m(o,g){e.m(r,o,g),w(o,t,g),F(i,o,g),f=!0},p(o,g){(!f||g&513)&&r!==(r=o[9]("registration.success",{values:{email:o[0].email}})+"")&&e.p(r);const c={};g&1&&(c.existingEmail=o[0].email),!s&&g&2&&(s=!0,c.email=o[1],J(()=>s=!1)),!a&&g&32&&(a=!0,c.error=o[5],J(()=>a=!1)),!u&&g&16&&(u=!0,c.warning=o[4],J(()=>u=!1)),i.$set(c)},i(o){f||(v(i.$$.fragment,o),f=!0)},o(o){R(i.$$.fragment,o),f=!1},d(o){o&&e.d(),o&&k(t),H(i,o)}}}function we(n){let e,r,t,i;return r=new ee({props:{type:"warning",$$slots:{default:[Je]},$$scope:{ctx:n}}}),{c(){e=O("div"),B(r.$$.fragment),this.h()},l(s){e=q(s,"DIV",{class:!0});var a=Y(e);V(r.$$.fragment,a),a.forEach(k),this.h()},h(){z(e,"class","blockedInfobox svelte-1iclxit")},m(s,a){w(s,e,a),F(r,e,null),i=!0},p(s,a){const u={};a&33554944&&(u.$$scope={dirty:a,ctx:s}),r.$set(u)},i(s){i||(v(r.$$.fragment,s),ge(()=>{t||(t=ie(e,se,{},!0)),t.run(1)}),i=!0)},o(s){R(r.$$.fragment,s),t||(t=ie(e,se,{},!1)),t.run(0),i=!1},d(s){s&&k(e),H(r),s&&t&&t.end()}}}function Je(n){let e,r=n[9]("registration.outlookBlocked")+"",t;return{c(){e=new le,t=Z(),this.h()},l(i){e=oe(i),t=Z(),this.h()},h(){e.a=t},m(i,s){e.m(r,i,s),w(i,t,s)},p(i,s){s&512&&r!==(r=i[9]("registration.outlookBlocked")+"")&&e.p(r)},d(i){i&&k(t),i&&e.d()}}}function $e(n){let e,r;return e=new ee({props:{type:"warning",$$slots:{default:[Ke]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){F(e,t,i),r=!0},p(t,i){const s={};i&33554960&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Ke(n){let e=n[9](n[4])+"",r;return{c(){r=U(e)},l(t){r=D(t,e)},m(t,i){w(t,r,i)},p(t,i){i&528&&e!==(e=t[9](t[4])+"")&&j(r,e)},d(t){t&&k(r)}}}function ve(n){let e,r;return e=new ee({props:{type:"error",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){F(e,t,i),r=!0},p(t,i){const s={};i&33554976&&(s.$$scope={dirty:i,ctx:t}),e.$set(s)},i(t){r||(v(e.$$.fragment,t),r=!0)},o(t){R(e.$$.fragment,t),r=!1},d(t){H(e,t)}}}function Ye(n){let e=n[9](n[5])+"",r;return{c(){r=U(e)},l(t){r=D(t,e)},m(t,i){w(t,r,i)},p(t,i){i&544&&e!==(e=t[9](t[5])+"")&&j(r,e)},d(t){t&&k(r)}}}function Ee(n){let e,r,t,i;function s(f){n[19](f)}function a(f){n[20](f)}let u={newRegistration:!0,$$slots:{default:[Ge]},$$scope:{ctx:n}};return n[0]!==void 0&&(u.dto=n[0]),n[3]!==void 0&&(u.regulationsAccepted=n[3]),e=new Te({props:u}),n[18](e),L.push(()=>W(e,"dto",s)),L.push(()=>W(e,"regulationsAccepted",a)),{c(){B(e.$$.fragment)},l(f){V(e.$$.fragment,f)},m(f,p){F(e,f,p),i=!0},p(f,p){const _={};p&33555208&&(_.$$scope={dirty:p,ctx:f}),!r&&p&1&&(r=!0,_.dto=f[0],J(()=>r=!1)),!t&&p&8&&(t=!0,_.regulationsAccepted=f[3],J(()=>t=!1)),e.$set(_)},i(f){i||(v(e.$$.fragment,f),i=!0)},o(f){R(e.$$.fragment,f),i=!1},d(f){n[18](null),H(e,f)}}}function Ce(n){let e=n[9]("registration.form.submit")+"",r;return{c(){r=U(e)},l(t){r=D(t,e)},m(t,i){w(t,r,i)},p(t,i){i&512&&e!==(e=t[9]("registration.form.submit")+"")&&j(r,e)},d(t){t&&k(r)}}}function Ge(n){let e,r,t,i;return t=new be({props:{type:"primary",disabled:!n[3]||n[8],$$slots:{default:[Ce]},$$scope:{ctx:n}}}),t.$on("click",n[17]),{c(){e=O("div"),r=T(),B(t.$$.fragment)},l(s){e=q(s,"DIV",{}),Y(e).forEach(k),r=N(s),V(t.$$.fragment,s)},m(s,a){w(s,e,a),w(s,r,a),F(t,s,a),i=!0},p(s,a){const u={};a&264&&(u.disabled=!s[3]||s[8]),a&33554944&&(u.$$scope={dirty:a,ctx:s}),t.$set(u)},i(s){i||(v(t.$$.fragment,s),i=!0)},o(s){R(t.$$.fragment,s),i=!1},d(s){s&&k(e),s&&k(r),H(t,s)}}}function Xe(n){let e,r,t,i=n[9]("registration.title")+"",s,a,u,f,p,_,b,d,o,g;e=new ye({props:{title:n[9]("registration.meta.title"),description:n[9]("registration.meta.description")}});const c=[Oe,Me],m=[];function S(l,h){return l[6]?0:1}u=S(n),f=m[u]=c[u](n);let E=n[7]&&we(n),A=n[4]&&$e(n),I=n[5]&&ve(n),y=!n[6]&&Ee(n);return{c(){B(e.$$.fragment),r=T(),t=O("h1"),s=U(i),a=T(),f.c(),p=T(),E&&E.c(),_=T(),A&&A.c(),b=T(),I&&I.c(),d=T(),y&&y.c(),o=Z(),this.h()},l(l){V(e.$$.fragment,l),r=N(l),t=q(l,"H1",{class:!0});var h=Y(t);s=D(h,i),h.forEach(k),a=N(l),f.l(l),p=N(l),E&&E.l(l),_=N(l),A&&A.l(l),b=N(l),I&&I.l(l),d=N(l),y&&y.l(l),o=Z(),this.h()},h(){z(t,"class","cover-heading")},m(l,h){F(e,l,h),w(l,r,h),w(l,t,h),C(t,s),w(l,a,h),m[u].m(l,h),w(l,p,h),E&&E.m(l,h),w(l,_,h),A&&A.m(l,h),w(l,b,h),I&&I.m(l,h),w(l,d,h),y&&y.m(l,h),w(l,o,h),g=!0},p(l,[h]){const K={};h&512&&(K.title=l[9]("registration.meta.title")),h&512&&(K.description=l[9]("registration.meta.description")),e.$set(K),(!g||h&512)&&i!==(i=l[9]("registration.title")+"")&&j(s,i);let P=u;u=S(l),u===P?m[u].p(l,h):(G(),R(m[P],1,1,()=>{m[P]=null}),X(),f=m[u],f?f.p(l,h):(f=m[u]=c[u](l),f.c()),v(f,1),f.m(p.parentNode,p)),l[7]?E?(E.p(l,h),h&128&&v(E,1)):(E=we(l),E.c(),v(E,1),E.m(_.parentNode,_)):E&&(G(),R(E,1,1,()=>{E=null}),X()),l[4]?A?(A.p(l,h),h&16&&v(A,1)):(A=$e(l),A.c(),v(A,1),A.m(b.parentNode,b)):A&&(G(),R(A,1,1,()=>{A=null}),X()),l[5]?I?(I.p(l,h),h&32&&v(I,1)):(I=ve(l),I.c(),v(I,1),I.m(d.parentNode,d)):I&&(G(),R(I,1,1,()=>{I=null}),X()),l[6]?y&&(G(),R(y,1,1,()=>{y=null}),X()):y?(y.p(l,h),h&64&&v(y,1)):(y=Ee(l),y.c(),v(y,1),y.m(o.parentNode,o))},i(l){g||(v(e.$$.fragment,l),v(f),v(E),v(A),v(I),v(y),g=!0)},o(l){R(e.$$.fragment,l),R(f),R(E),R(A),R(I),R(y),g=!1},d(l){H(e,l),l&&k(r),l&&k(t),l&&k(a),m[u].d(l),l&&k(p),E&&E.d(l),l&&k(_),A&&A.d(l),l&&k(b),I&&I.d(l),l&&k(d),y&&y.d(l),l&&k(o)}}}function Ze(n,e,r){let t,i,s,a,u,f;M(n,Ue,$=>r(22,i=$)),M(n,Q,$=>r(8,s=$)),M(n,ke,$=>r(23,a=$)),M(n,me,$=>r(24,u=$)),M(n,pe,$=>r(9,f=$));let{dto:p=new Ne}=e,_,b=De,d="",o="",g=!1,c="",m;async function S(){if(r(5,o=""),r(4,d=""),_.reportValidity()){te(Q,s=!0,s),r(0,p.lang=u,p);const $="base_registration.php"+(m?`?admin=${m}`:""),fe=await fetch(new URL($,a),{method:"POST",body:JSON.stringify(p)}),x=await fe.text();fe.ok&&x==="Registration successful."?(r(6,g=!0),localStorage.removeItem("newRegistrationDto")):x==="Email already used."?r(4,d="registration.form.error.emailUsed"):x==="Invalid form."?r(5,o="registration.form.error.invalidForm"):x==="Error sending confirmation email."?r(5,o="registration.form.error.emailError"):x==="Too many requests."?r(4,d="registration.form.error.pleaseWait"):r(5,o="registration.form.error.errorOccurred"),te(Q,s=!1,s)}}ce(()=>{m=localStorage.getItem("adminKey"),i&&!m&&(window.location.href="/#participants")});function E($){c=$,r(1,c)}function A($){o=$,r(5,o)}function I($){d=$,r(4,d)}function y($){c=$,r(1,c)}function l($){o=$,r(5,o)}function h($){d=$,r(4,d)}const K=()=>S();function P($){L[$?"unshift":"push"](()=>{_=$,r(2,_)})}function Re($){p=$,r(0,p)}function Ae($){b=$,r(3,b)}return n.$$set=$=>{"dto"in $&&r(0,p=$.dto)},n.$$.update=()=>{n.$$.dirty&3&&r(7,t=[p.email,c].some($=>$.match(/outlook\.|live\.|hotmail\.|msn\.|passport\./)))},[p,c,_,b,d,o,g,t,s,f,S,E,A,I,y,l,h,K,P,Re,Ae]}class nt extends ae{constructor(e){super();ue(this,e,Ze,Xe,_e,{dto:0})}}export{nt as default};