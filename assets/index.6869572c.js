const Xm=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),yu={},Zm="/",He=function(e,n){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=`${Zm}${s}`,s in yu)return;yu[s]=!0;const i=s.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Xm,i||(o.as="script",o.crossOrigin=""),o.href=s,document.head.appendChild(o),i)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function Oo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const e_="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",t_=Oo(e_),n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s_=Oo(n_);function Gf(t){return!!t||t===""}function Mo(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Se(s)?o_(s):Mo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Se(t))return t;if(ye(t))return t}}const i_=/;(?![^(]*\))/g,r_=/:(.+)/;function o_(t){const e={};return t.split(i_).forEach(n=>{if(n){const s=n.split(r_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Do(t){let e="";if(Se(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Do(t[n]);s&&(e+=s+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Sk(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Se(e)&&(t.class=Do(e)),n&&(t.style=Mo(n)),t}function a_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Cn(t[s],e[s]);return n}function Cn(t,e){if(t===e)return!0;let n=bu(t),s=bu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$i(t),s=$i(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?a_(t,e):!1;if(n=ye(t),s=ye(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Cn(t[o],e[o]))return!1}}return String(t)===String(e)}function Lo(t,e){return t.findIndex(n=>Cn(n,e))}const Rk=t=>Se(t)?t:t==null?"":q(t)||ye(t)&&(t.toString===Qf||!te(t.toString))?JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>e&&e.__v_isRef?Yf(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:os(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!q(e)&&!Jf(e)?String(e):e,he={},Ss=[],Ct=()=>{},l_=()=>!1,c_=/^on[^a-z]/,lr=t=>c_.test(t),Kl=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Gl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},u_=Object.prototype.hasOwnProperty,ce=(t,e)=>u_.call(t,e),q=Array.isArray,Rs=t=>cr(t)==="[object Map]",os=t=>cr(t)==="[object Set]",bu=t=>cr(t)==="[object Date]",te=t=>typeof t=="function",Se=t=>typeof t=="string",$i=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",Yl=t=>ye(t)&&te(t.then)&&te(t.catch),Qf=Object.prototype.toString,cr=t=>Qf.call(t),d_=t=>cr(t).slice(8,-1),Jf=t=>cr(t)==="[object Object]",Ql=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},f_=/-(\w)/g,ft=Fo(t=>t.replace(f_,(e,n)=>n?n.toUpperCase():"")),h_=/\B([A-Z])/g,xt=Fo(t=>t.replace(h_,"-$1").toLowerCase()),Uo=Fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wr=Fo(t=>t?`on${Uo(t)}`:""),Us=(t,e)=>!Object.is(t,e),ks=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Xr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},In=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Eu;const p_=()=>Eu||(Eu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let it;class Xf{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}run(e){if(this.active){const n=it;try{return it=this,e()}finally{it=n}}}on(){it=this}off(){it=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function Zf(t){return new Xf(t)}function eh(t,e=it){e&&e.active&&e.effects.push(t)}function kk(){return it}function Pk(t){it&&it.cleanups.push(t)}const Jl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},th=t=>(t.w&Tn)>0,nh=t=>(t.n&Tn)>0,g_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tn},m_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];th(i)&&!nh(i)?i.delete(t):e[n++]=i,i.w&=~Tn,i.n&=~Tn}e.length=n}},Za=new WeakMap;let Ei=0,Tn=1;const el=30;let yt;const Vn=Symbol(""),tl=Symbol("");class $o{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eh(this,s)}run(){if(!this.active)return this.fn();let e=yt,n=gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yt,yt=this,gn=!0,Tn=1<<++Ei,Ei<=el?g_(this):wu(this),this.fn()}finally{Ei<=el&&m_(this),Tn=1<<--Ei,yt=this.parent,gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(wu(this),this.onStop&&this.onStop(),this.active=!1)}}function wu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function Ak(t,e){t.effect&&(t=t.effect.fn);const n=new $o(t);e&&(Ae(n,e),e.scope&&eh(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function xk(t){t.effect.stop()}let gn=!0;const sh=[];function as(){sh.push(gn),gn=!1}function ls(){const t=sh.pop();gn=t===void 0?!0:t}function ot(t,e,n){if(gn&&yt){let s=Za.get(t);s||Za.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Jl()),ih(i)}}function ih(t,e){let n=!1;Ei<=el?nh(t)||(t.n|=Tn,n=!th(t)):n=!t.has(yt),n&&(t.add(yt),yt.deps.push(t))}function Kt(t,e,n,s,i,r){const o=Za.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t))o.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Ql(n)&&a.push(o.get("length")):(a.push(o.get(Vn)),Rs(t)&&a.push(o.get(tl)));break;case"delete":q(t)||(a.push(o.get(Vn)),Rs(t)&&a.push(o.get(tl)));break;case"set":Rs(t)&&a.push(o.get(Vn));break}if(a.length===1)a[0]&&nl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);nl(Jl(l))}}function nl(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Cu(s);for(const s of n)s.computed||Cu(s)}function Cu(t,e){(t!==yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const __=Oo("__proto__,__v_isRef,__isVue"),rh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($i)),v_=Bo(),y_=Bo(!1,!0),b_=Bo(!0),E_=Bo(!0,!0),Iu=w_();function w_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ue(this);for(let r=0,o=this.length;r<o;r++)ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ue)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const s=ue(this)[e].apply(this,n);return ls(),s}}),t}function Bo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?fh:dh:e?uh:ch).get(s))return s;const o=q(s);if(!t&&o&&ce(Iu,i))return Reflect.get(Iu,i,r);const a=Reflect.get(s,i,r);return($i(i)?rh.has(i):__(i))||(t||ot(s,"get",i),e)?a:ke(a)?o&&Ql(i)?a:a.value:ye(a)?t?hh(a):xn(a):a}}const C_=oh(),I_=oh(!0);function oh(t=!1){return function(n,s,i,r){let o=n[s];if($s(o)&&ke(o)&&!ke(i))return!1;if(!t&&(!Zr(i)&&!$s(i)&&(o=ue(o),i=ue(i)),!q(n)&&ke(o)&&!ke(i)))return o.value=i,!0;const a=q(n)&&Ql(s)?Number(s)<n.length:ce(n,s),l=Reflect.set(n,s,i,r);return n===ue(r)&&(a?Us(i,o)&&Kt(n,"set",s,i):Kt(n,"add",s,i)),l}}function T_(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kt(t,"delete",e,void 0),s}function S_(t,e){const n=Reflect.has(t,e);return(!$i(e)||!rh.has(e))&&ot(t,"has",e),n}function R_(t){return ot(t,"iterate",q(t)?"length":Vn),Reflect.ownKeys(t)}const ah={get:v_,set:C_,deleteProperty:T_,has:S_,ownKeys:R_},lh={get:b_,set(t,e){return!0},deleteProperty(t,e){return!0}},k_=Ae({},ah,{get:y_,set:I_}),P_=Ae({},lh,{get:E_}),Xl=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function kr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ue(t),r=ue(e);n||(e!==r&&ot(i,"get",e),ot(i,"get",r));const{has:o}=Ho(i),a=s?Xl:n?Zl:Bi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Pr(t,e=!1){const n=this.__v_raw,s=ue(n),i=ue(t);return e||(t!==i&&ot(s,"has",t),ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ar(t,e=!1){return t=t.__v_raw,!e&&ot(ue(t),"iterate",Vn),Reflect.get(t,"size",t)}function Tu(t){t=ue(t);const e=ue(this);return Ho(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function Su(t,e){e=ue(e);const n=ue(this),{has:s,get:i}=Ho(n);let r=s.call(n,t);r||(t=ue(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Us(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function Ru(t){const e=ue(this),{has:n,get:s}=Ho(e);let i=n.call(e,t);i||(t=ue(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Kt(e,"delete",t,void 0),r}function ku(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function xr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ue(o),l=e?Xl:t?Zl:Bi;return!t&&ot(a,"iterate",Vn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Nr(t,e,n){return function(...s){const i=this.__v_raw,r=ue(i),o=Rs(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Xl:e?Zl:Bi;return!e&&ot(r,"iterate",l?tl:Vn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function A_(){const t={get(r){return kr(this,r)},get size(){return Ar(this)},has:Pr,add:Tu,set:Su,delete:Ru,clear:ku,forEach:xr(!1,!1)},e={get(r){return kr(this,r,!1,!0)},get size(){return Ar(this)},has:Pr,add:Tu,set:Su,delete:Ru,clear:ku,forEach:xr(!1,!0)},n={get(r){return kr(this,r,!0)},get size(){return Ar(this,!0)},has(r){return Pr.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:xr(!0,!1)},s={get(r){return kr(this,r,!0,!0)},get size(){return Ar(this,!0)},has(r){return Pr.call(this,r,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Nr(r,!1,!1),n[r]=Nr(r,!0,!1),e[r]=Nr(r,!1,!0),s[r]=Nr(r,!0,!0)}),[t,n,e,s]}const[x_,N_,O_,M_]=A_();function Wo(t,e){const n=e?t?M_:O_:t?N_:x_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const D_={get:Wo(!1,!1)},L_={get:Wo(!1,!0)},F_={get:Wo(!0,!1)},U_={get:Wo(!0,!0)},ch=new WeakMap,uh=new WeakMap,dh=new WeakMap,fh=new WeakMap;function $_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:$_(d_(t))}function xn(t){return $s(t)?t:jo(t,!1,ah,D_,ch)}function H_(t){return jo(t,!1,k_,L_,uh)}function hh(t){return jo(t,!0,lh,F_,dh)}function Nk(t){return jo(t,!0,P_,U_,fh)}function jo(t,e,n,s,i){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=B_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function mn(t){return $s(t)?mn(t.__v_raw):!!(t&&t.__v_isReactive)}function $s(t){return!!(t&&t.__v_isReadonly)}function Zr(t){return!!(t&&t.__v_isShallow)}function ph(t){return mn(t)||$s(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function Dt(t){return Xr(t,"__v_skip",!0),t}const Bi=t=>ye(t)?xn(t):t,Zl=t=>ye(t)?hh(t):t;function ec(t){gn&&yt&&(t=ue(t),ih(t.dep||(t.dep=Jl())))}function Vo(t,e){t=ue(t),t.dep&&nl(t.dep)}function ke(t){return!!(t&&t.__v_isRef===!0)}function Nt(t){return gh(t,!1)}function W_(t){return gh(t,!0)}function gh(t,e){return ke(t)?t:new j_(t,e)}class j_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:Bi(e)}get value(){return ec(this),this._value}set value(e){const n=this.__v_isShallow||Zr(e)||$s(e);e=n?e:ue(e),Us(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Bi(e),Vo(this))}}function Ok(t){Vo(t)}function qn(t){return ke(t)?t.value:t}const V_={get:(t,e,n)=>qn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ke(i)&&!ke(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function mh(t){return mn(t)?t:new Proxy(t,V_)}class q_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>ec(this),()=>Vo(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function Mk(t){return new q_(t)}function z_(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=G_(t,n);return e}class K_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function G_(t,e,n){const s=t[e];return ke(s)?s:new K_(t,e,n)}var _h;class Y_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[_h]=!1,this._dirty=!0,this.effect=new $o(e,()=>{this._dirty||(this._dirty=!0,Vo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ue(this);return ec(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_h="__v_isReadonly";function Q_(t,e,n=!1){let s,i;const r=te(t);return r?(s=t,i=Ct):(s=t.get,i=t.set),new Y_(s,i,r||!i,n)}const Ri=[];function J_(t,...e){as();const n=Ri.length?Ri[Ri.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=X_();if(s)qt(s,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:r})=>`at <${Zh(n,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${t}`,...e];i.length&&r.push(`
`,...Z_(i)),console.warn(...r)}ls()}function X_(){let t=Ri[Ri.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const s=t.component&&t.component.parent;t=s&&s.vnode}return e}function Z_(t){const e=[];return t.forEach((n,s)=>{e.push(...s===0?[]:[`
`],...ev(n))}),e}function ev({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",s=t.component?t.component.parent==null:!1,i=` at <${Zh(t.component,t.type,s)}`,r=">"+n;return t.props?[i,...tv(t.props),r]:[i+r]}function tv(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(s=>{e.push(...vh(s,t[s]))}),n.length>3&&e.push(" ..."),e}function vh(t,e,n){return Se(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:ke(e)?(e=vh(t,ue(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):te(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ue(e),n?e:[`${t}=`,e])}function qt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Zs(r,e,n)}return i}function ut(t,e,n,s){if(te(t)){const r=qt(t,e,n,s);return r&&Yl(r)&&r.catch(o=>{Zs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function Zs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){qt(l,null,10,[t,o,a]);return}}nv(t,n,i,s)}function nv(t,e,n,s=!0){console.error(t)}let Hi=!1,sl=!1;const je=[];let Pt=0;const Ps=[];let Bt=null,Bn=0;const yh=Promise.resolve();let tc=null;function qo(t){const e=tc||yh;return t?e.then(this?t.bind(this):t):e}function sv(t){let e=Pt+1,n=je.length;for(;e<n;){const s=e+n>>>1;Wi(je[s])<t?e=s+1:n=s}return e}function zo(t){(!je.length||!je.includes(t,Hi&&t.allowRecurse?Pt+1:Pt))&&(t.id==null?je.push(t):je.splice(sv(t.id),0,t),bh())}function bh(){!Hi&&!sl&&(sl=!0,tc=yh.then(wh))}function iv(t){const e=je.indexOf(t);e>Pt&&je.splice(e,1)}function Eh(t){q(t)?Ps.push(...t):(!Bt||!Bt.includes(t,t.allowRecurse?Bn+1:Bn))&&Ps.push(t),bh()}function Pu(t,e=Hi?Pt+1:0){for(;e<je.length;e++){const n=je[e];n&&n.pre&&(je.splice(e,1),e--,n())}}function eo(t){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,Bt){Bt.push(...e);return}for(Bt=e,Bt.sort((n,s)=>Wi(n)-Wi(s)),Bn=0;Bn<Bt.length;Bn++)Bt[Bn]();Bt=null,Bn=0}}const Wi=t=>t.id==null?1/0:t.id,rv=(t,e)=>{const n=Wi(t)-Wi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wh(t){sl=!1,Hi=!0,je.sort(rv);const e=Ct;try{for(Pt=0;Pt<je.length;Pt++){const n=je[Pt];n&&n.active!==!1&&qt(n,null,14)}}finally{Pt=0,je.length=0,eo(),Hi=!1,tc=null,(je.length||Ps.length)&&wh()}}let ui,Or=[];function ov(t,e){var n,s;ui=t,ui?(ui.enabled=!0,Or.forEach(({event:i,args:r})=>ui.emit(i,...r)),Or=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{ov(r,e)}),setTimeout(()=>{ui||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Or=[])},3e3)):Or=[]}function av(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:f}=s[u]||he;f&&(i=n.map(p=>p.trim())),d&&(i=n.map(In))}let a,l=s[a=Wr(e)]||s[a=Wr(ft(e))];!l&&r&&(l=s[a=Wr(xt(e))]),l&&ut(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,i)}}function Ch(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=Ch(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ye(t)&&s.set(t,null),null):(q(r)?r.forEach(l=>o[l]=null):Ae(o,r),ye(t)&&s.set(t,o),o)}function Ko(t,e){return!t||!lr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,xt(e))||ce(t,e))}let Ve=null,Go=null;function ji(t){const e=Ve;return Ve=t,Go=t&&t.type.__scopeId||null,e}function Dk(t){Go=t}function Lk(){Go=null}const Fk=t=>Ih;function Ih(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Wu(-1);const r=ji(e);let o;try{o=t(...i)}finally{ji(r),s._d&&Wu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function jr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:y}=t;let C,v;const g=ji(t);try{if(n.shapeFlag&4){const I=i||s;C=rt(u.call(I,I,d,r,p,f,m)),v=l}else{const I=e;C=rt(I.length>1?I(r,{attrs:l,slots:a,emit:c}):I(r,null)),v=e.props?l:cv(l)}}catch(I){Pi.length=0,Zs(I,t,1),C=Ie(Ge)}let b=C;if(v&&y!==!1){const I=Object.keys(v),{shapeFlag:R}=b;I.length&&R&7&&(o&&I.some(Kl)&&(v=uv(v,o)),b=Gt(b,v))}return n.dirs&&(b=Gt(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),C=b,ji(g),C}function lv(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Qn(s)){if(s.type!==Ge||s.children==="v-if"){if(e)return;e=s}}else return}return e}const cv=t=>{let e;for(const n in t)(n==="class"||n==="style"||lr(n))&&((e||(e={}))[n]=t[n]);return e},uv=(t,e)=>{const n={};for(const s in t)(!Kl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function dv(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Au(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!Ko(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Au(s,o,c):!0:!!o;return!1}function Au(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ko(n,r))return!0}return!1}function nc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Th=t=>t.__isSuspense,fv={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?hv(e,n,s,i,r,o,a,l,c):pv(t,e,n,s,i,o,a,l,c)},hydrate:gv,create:sc,normalize:mv},Uk=fv;function Vi(t,e){const n=t.props&&t.props[e];te(n)&&n()}function hv(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),f=t.suspense=sc(t,i,s,e,d,n,r,o,a,l);c(null,f.pendingBranch=t.ssContent,d,null,s,f,r,o),f.deps>0?(Vi(t,"onPending"),Vi(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),As(f,t.ssFallback)):f.resolve()}function pv(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:m,pendingBranch:y,isInFallback:C,isHydrating:v}=d;if(y)d.pendingBranch=f,At(f,y)?(l(y,f,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0?d.resolve():C&&(l(m,p,n,s,i,null,r,o,a),As(d,p))):(d.pendingId++,v?(d.isHydrating=!1,d.activeBranch=y):c(y,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),C?(l(null,f,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0?d.resolve():(l(m,p,n,s,i,null,r,o,a),As(d,p))):m&&At(f,m)?(l(m,f,n,s,i,d,r,o,a),d.resolve(!0)):(l(null,f,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0&&d.resolve()));else if(m&&At(f,m))l(m,f,n,s,i,d,r,o,a),As(d,f);else if(Vi(e,"onPending"),d.pendingBranch=f,d.pendingId++,l(null,f,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0)d.resolve();else{const{timeout:g,pendingId:b}=d;g>0?setTimeout(()=>{d.pendingId===b&&d.fallback(p)},g):g===0&&d.fallback(p)}}function sc(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:d,m:f,um:p,n:m,o:{parentNode:y,remove:C}}=c,v=In(t.props&&t.props.timeout),g={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1){const{vnode:I,activeBranch:R,pendingBranch:N,pendingId:P,effects:E,parentComponent:L,container:$}=g;if(g.isHydrating)g.isHydrating=!1;else if(!b){const Q=R&&N.transition&&N.transition.mode==="out-in";Q&&(R.transition.afterLeave=()=>{P===g.pendingId&&f(N,$,T,0)});let{anchor:T}=g;R&&(T=m(R),p(R,L,g,!0)),Q||f(N,$,T,0)}As(g,N),g.pendingBranch=null,g.isInFallback=!1;let H=g.parent,F=!1;for(;H;){if(H.pendingBranch){H.effects.push(...E),F=!0;break}H=H.parent}F||Eh(E),g.effects=[],Vi(I,"onResolve")},fallback(b){if(!g.pendingBranch)return;const{vnode:I,activeBranch:R,parentComponent:N,container:P,isSVG:E}=g;Vi(I,"onFallback");const L=m(R),$=()=>{!g.isInFallback||(d(null,b,P,L,N,null,E,a,l),As(g,b))},H=b.transition&&b.transition.mode==="out-in";H&&(R.transition.afterLeave=$),g.isInFallback=!0,p(R,N,null,!0),H||$()},move(b,I,R){g.activeBranch&&f(g.activeBranch,b,I,R),g.container=b},next(){return g.activeBranch&&m(g.activeBranch)},registerDep(b,I){const R=!!g.pendingBranch;R&&g.deps++;const N=b.vnode.el;b.asyncDep.catch(P=>{Zs(P,b,0)}).then(P=>{if(b.isUnmounted||g.isUnmounted||g.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:E}=b;ul(b,P,!1),N&&(E.el=N);const L=!N&&b.subTree.el;I(b,E,y(N||b.subTree.el),N?null:m(b.subTree),g,o,l),L&&C(L),nc(b,E.el),R&&--g.deps===0&&g.resolve()})},unmount(b,I){g.isUnmounted=!0,g.activeBranch&&p(g.activeBranch,n,b,I),g.pendingBranch&&p(g.pendingBranch,n,b,I)}};return g}function gv(t,e,n,s,i,r,o,a,l){const c=e.suspense=sc(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function mv(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=xu(s?n.default:n),t.ssFallback=s?xu(n.fallback):Ie(Ge)}function xu(t){let e;if(te(t)){const n=Yn&&t._c;n&&(t._d=!1,Zo()),t=t(),n&&(t._d=!0,e=et,jh())}return q(t)&&(t=lv(t)),t=rt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Sh(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Eh(t)}function As(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,nc(s,i))}function Vr(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function dt(t,e,n=!1){const s=Oe||Ve;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(s.proxy):e}}function $k(t,e){return ur(t,null,e)}function _v(t,e){return ur(t,null,{flush:"post"})}function Bk(t,e){return ur(t,null,{flush:"sync"})}const Nu={};function xs(t,e,n){return ur(t,e,n)}function ur(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=he){const a=Oe;let l,c=!1,u=!1;if(ke(t)?(l=()=>t.value,c=Zr(t)):mn(t)?(l=()=>t,s=!0):q(t)?(u=!0,c=t.some(v=>mn(v)||Zr(v)),l=()=>t.map(v=>{if(ke(v))return v.value;if(mn(v))return Wn(v);if(te(v))return qt(v,a,2)})):te(t)?e?l=()=>qt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),ut(t,a,3,[f])}:l=Ct,e&&s){const v=l;l=()=>Wn(v())}let d,f=v=>{d=C.onStop=()=>{qt(v,a,4)}};if(Hs)return f=Ct,e?n&&ut(e,a,3,[l(),u?[]:void 0,f]):l(),Ct;let p=u?[]:Nu;const m=()=>{if(!!C.active)if(e){const v=C.run();(s||c||(u?v.some((g,b)=>Us(g,p[b])):Us(v,p)))&&(d&&d(),ut(e,a,3,[v,p===Nu?void 0:p,f]),p=v)}else C.run()};m.allowRecurse=!!e;let y;i==="sync"?y=m:i==="post"?y=()=>Fe(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),y=()=>zo(m));const C=new $o(l,y);return e?n?m():p=C.run():i==="post"?Fe(C.run.bind(C),a&&a.suspense):C.run(),()=>{C.stop(),a&&a.scope&&Gl(a.scope.effects,C)}}function vv(t,e,n){const s=this.proxy,i=Se(t)?t.includes(".")?Rh(s,t):()=>s[t]:t.bind(s,s);let r;te(e)?r=e:(r=e.handler,n=e);const o=Oe;Sn(this);const a=ur(i,r.bind(s),n);return o?Sn(o):_n(),a}function Rh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Wn(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))Wn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)Wn(t[n],e);else if(os(t)||Rs(t))t.forEach(n=>{Wn(n,e)});else if(Jf(t))for(const n in t)Wn(t[n],e);return t}function kh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qo(()=>{t.isMounted=!0}),Jo(()=>{t.isUnmounting=!0}),t}const at=[Function,Array],yv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},setup(t,{slots:e}){const n=pt(),s=kh();let i;return()=>{const r=e.default&&ic(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==Ge){o=y;break}}const a=ue(t),{mode:l}=a;if(s.isLeaving)return Ia(o);const c=Ou(o);if(!c)return Ia(o);const u=qi(c,a,s,n);Bs(c,u);const d=n.subTree,f=d&&Ou(d);let p=!1;const{getTransitionKey:m}=c.type;if(m){const y=m();i===void 0?i=y:y!==i&&(i=y,p=!0)}if(f&&f.type!==Ge&&(!At(c,f)||p)){const y=qi(f,a,s,n);if(Bs(f,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update()},Ia(o);l==="in-out"&&c.type!==Ge&&(y.delayLeave=(C,v,g)=>{const b=Ah(s,f);b[String(f.key)]=f,C._leaveCb=()=>{v(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return o}}},Ph=yv;function Ah(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function qi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:y,onAppear:C,onAfterAppear:v,onAppearCancelled:g}=e,b=String(t.key),I=Ah(n,t),R=(E,L)=>{E&&ut(E,s,9,L)},N=(E,L)=>{const $=L[1];R(E,L),q(E)?E.every(H=>H.length<=1)&&$():E.length<=1&&$()},P={mode:r,persisted:o,beforeEnter(E){let L=a;if(!n.isMounted)if(i)L=y||a;else return;E._leaveCb&&E._leaveCb(!0);const $=I[b];$&&At(t,$)&&$.el._leaveCb&&$.el._leaveCb(),R(L,[E])},enter(E){let L=l,$=c,H=u;if(!n.isMounted)if(i)L=C||l,$=v||c,H=g||u;else return;let F=!1;const Q=E._enterCb=T=>{F||(F=!0,T?R(H,[E]):R($,[E]),P.delayedLeave&&P.delayedLeave(),E._enterCb=void 0)};L?N(L,[E,Q]):Q()},leave(E,L){const $=String(t.key);if(E._enterCb&&E._enterCb(!0),n.isUnmounting)return L();R(d,[E]);let H=!1;const F=E._leaveCb=Q=>{H||(H=!0,L(),Q?R(m,[E]):R(p,[E]),E._leaveCb=void 0,I[$]===t&&delete I[$])};I[$]=t,f?N(f,[E,F]):F()},clone(E){return qi(E,e,n,s)}};return P}function Ia(t){if(dr(t))return t=Gt(t),t.children=null,t}function Ou(t){return dr(t)?t.children?t.children[0]:void 0:t}function Bs(t,e){t.shapeFlag&6&&t.component?Bs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ic(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===We?(o.patchFlag&128&&i++,s=s.concat(ic(o.children,e,a))):(e||o.type!==Ge)&&s.push(a!=null?Gt(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ei(t){return te(t)?{setup:t,name:t.name}:t}const zn=t=>!!t.type.__asyncLoader;function Hk(t){te(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const d=()=>(u++,l=null,f()),f=()=>{let p;return l||(p=l=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),a)return new Promise((y,C)=>{a(m,()=>y(d()),()=>C(m),u+1)});throw m}).then(m=>p!==l&&l?l:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),c=m,m)))};return ei({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const p=Oe;if(c)return()=>Ta(c,p);const m=g=>{l=null,Zs(g,p,13,!s)};if(o&&p.suspense||Hs)return f().then(g=>()=>Ta(g,p)).catch(g=>(m(g),()=>s?Ie(s,{error:g}):null));const y=Nt(!1),C=Nt(),v=Nt(!!i);return i&&setTimeout(()=>{v.value=!1},i),r!=null&&setTimeout(()=>{if(!y.value&&!C.value){const g=new Error(`Async component timed out after ${r}ms.`);m(g),C.value=g}},r),f().then(()=>{y.value=!0,p.parent&&dr(p.parent.vnode)&&zo(p.parent.update)}).catch(g=>{m(g),C.value=g}),()=>{if(y.value&&c)return Ta(c,p);if(C.value&&s)return Ie(s,{error:C.value});if(n&&!v.value)return Ie(n)}}})}function Ta(t,{vnode:{ref:e,props:n,children:s,shapeFlag:i},parent:r}){const o=Ie(t,n,s);return o.ref=e,o}const dr=t=>t.type.__isKeepAlive,bv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=pt(),s=n.ctx;if(!s.renderer)return()=>{const g=e.default&&e.default();return g&&g.length===1?g[0]:g};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=s,f=d("div");s.activate=(g,b,I,R,N)=>{const P=g.component;c(g,b,I,0,a),l(P.vnode,g,b,I,P,a,R,g.slotScopeIds,N),Fe(()=>{P.isDeactivated=!1,P.a&&ks(P.a);const E=g.props&&g.props.onVnodeMounted;E&&Xe(E,P.parent,g)},a)},s.deactivate=g=>{const b=g.component;c(g,f,null,1,a),Fe(()=>{b.da&&ks(b.da);const I=g.props&&g.props.onVnodeUnmounted;I&&Xe(I,b.parent,g),b.isDeactivated=!0},a)};function p(g){Sa(g),u(g,n,a,!0)}function m(g){i.forEach((b,I)=>{const R=ro(b.type);R&&(!g||!g(R))&&y(I)})}function y(g){const b=i.get(g);!o||b.type!==o.type?p(b):o&&Sa(o),i.delete(g),r.delete(g)}xs(()=>[t.include,t.exclude],([g,b])=>{g&&m(I=>wi(g,I)),b&&m(I=>!wi(b,I))},{flush:"post",deep:!0});let C=null;const v=()=>{C!=null&&i.set(C,Ra(n.subTree))};return Qo(v),rc(v),Jo(()=>{i.forEach(g=>{const{subTree:b,suspense:I}=n,R=Ra(b);if(g.type===R.type){Sa(R);const N=R.component.da;N&&Fe(N,I);return}p(g)})}),()=>{if(C=null,!e.default)return null;const g=e.default(),b=g[0];if(g.length>1)return o=null,g;if(!Qn(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let I=Ra(b);const R=I.type,N=ro(zn(I)?I.type.__asyncResolved||{}:R),{include:P,exclude:E,max:L}=t;if(P&&(!N||!wi(P,N))||E&&N&&wi(E,N))return o=I,b;const $=I.key==null?R:I.key,H=i.get($);return I.el&&(I=Gt(I),b.shapeFlag&128&&(b.ssContent=I)),C=$,H?(I.el=H.el,I.component=H.component,I.transition&&Bs(I,I.transition),I.shapeFlag|=512,r.delete($),r.add($)):(r.add($),L&&r.size>parseInt(L,10)&&y(r.values().next().value)),I.shapeFlag|=256,o=I,Th(b.type)?b:I}}},Wk=bv;function wi(t,e){return q(t)?t.some(n=>wi(n,e)):Se(t)?t.split(",").includes(e):t.test?t.test(e):!1}function Ev(t,e){xh(t,"a",e)}function wv(t,e){xh(t,"da",e)}function xh(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Yo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)dr(i.parent.vnode)&&Cv(s,e,n,i),i=i.parent}}function Cv(t,e,n,s){const i=Yo(e,t,s,!0);Xo(()=>{Gl(s[e],i)},n)}function Sa(t){let e=t.shapeFlag;e&256&&(e-=256),e&512&&(e-=512),t.shapeFlag=e}function Ra(t){return t.shapeFlag&128?t.ssContent:t}function Yo(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Sn(n);const a=ut(e,n,t,o);return _n(),ls(),a});return s?i.unshift(r):i.push(r),r}}const Xt=t=>(e,n=Oe)=>(!Hs||t==="sp")&&Yo(t,(...s)=>e(...s),n),Iv=Xt("bm"),Qo=Xt("m"),Tv=Xt("bu"),rc=Xt("u"),Jo=Xt("bum"),Xo=Xt("um"),Sv=Xt("sp"),Rv=Xt("rtg"),kv=Xt("rtc");function Pv(t,e=Oe){Yo("ec",t,e)}function Nh(t,e){const n=Ve;if(n===null)return t;const s=ta(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=he]=e[r];te(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(as(),ut(l,n,8,[t.el,a,t,e]),ls())}}const oc="components",Av="directives";function xv(t,e){return ac(oc,t,!0,e)||t}const Oh=Symbol();function jk(t){return Se(t)?ac(oc,t,!1)||t:t||Oh}function Vk(t){return ac(Av,t)}function ac(t,e,n=!0,s=!1){const i=Ve||Oe;if(i){const r=i.type;if(t===oc){const a=ro(r,!1);if(a&&(a===e||a===ft(e)||a===Uo(ft(e))))return r}const o=Mu(i[t]||r[t],e)||Mu(i.appContext[t],e);return!o&&s?r:o}}function Mu(t,e){return t&&(t[e]||t[ft(e)]||t[Uo(ft(e))])}function qk(t,e,n,s){let i;const r=n&&n[s];if(q(t)||Se(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ye(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function zk(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(q(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function Kk(t,e,n={},s,i){if(Ve.isCE||Ve.parent&&zn(Ve.parent)&&Ve.parent.isCE)return Ie("slot",e==="default"?null:{name:e},s&&s());let r=t[e];r&&r._c&&(r._d=!1),Zo();const o=r&&Mh(r(n)),a=dc(We,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Mh(t){return t.some(e=>Qn(e)?!(e.type===Ge||e.type===We&&!Mh(e.children)):!0)?t:null}function Gk(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Wr(s)]=t[s];return n}const il=t=>t?Yh(t)?ta(t)||t.proxy:il(t.parent):null,to=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>il(t.parent),$root:t=>il(t.root),$emit:t=>t.emit,$options:t=>lc(t),$forceUpdate:t=>t.f||(t.f=()=>zo(t.update)),$nextTick:t=>t.n||(t.n=qo.bind(t.proxy)),$watch:t=>vv.bind(t)}),rl={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==he&&ce(s,e))return o[e]=1,s[e];if(i!==he&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==he&&ce(n,e))return o[e]=4,n[e];ol&&(o[e]=0)}}const u=to[e];let d,f;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==he&&ce(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==he&&ce(i,e)?(i[e]=n,!0):s!==he&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==he&&ce(t,o)||e!==he&&ce(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(to,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Nv=Ae({},rl,{get(t,e){if(e!==Symbol.unscopables)return rl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!t_(e)}});let ol=!0;function Ov(t){const e=lc(t),n=t.proxy,s=t.ctx;ol=!1,e.beforeCreate&&Du(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:y,deactivated:C,beforeDestroy:v,beforeUnmount:g,destroyed:b,unmounted:I,render:R,renderTracked:N,renderTriggered:P,errorCaptured:E,serverPrefetch:L,expose:$,inheritAttrs:H,components:F,directives:Q,filters:T}=e;if(c&&Mv(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const be in o){const ge=o[be];te(ge)&&(s[be]=ge.bind(n))}if(i){const be=i.call(n,n);ye(be)&&(t.data=xn(be))}if(ol=!0,r)for(const be in r){const ge=r[be],gt=te(ge)?ge.bind(n,n):te(ge.get)?ge.get.bind(n,n):Ct,On=!te(ge)&&te(ge.set)?ge.set.bind(n):Ct,mt=Z({get:gt,set:On});Object.defineProperty(s,be,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Je=>mt.value=Je})}if(a)for(const be in a)Dh(a[be],s,n,be);if(l){const be=te(l)?l.call(n):l;Reflect.ownKeys(be).forEach(ge=>{Vr(ge,be[ge])})}u&&Du(u,t,"c");function se(be,ge){q(ge)?ge.forEach(gt=>be(gt.bind(n))):ge&&be(ge.bind(n))}if(se(Iv,d),se(Qo,f),se(Tv,p),se(rc,m),se(Ev,y),se(wv,C),se(Pv,E),se(kv,N),se(Rv,P),se(Jo,g),se(Xo,I),se(Sv,L),q($))if($.length){const be=t.exposed||(t.exposed={});$.forEach(ge=>{Object.defineProperty(be,ge,{get:()=>n[ge],set:gt=>n[ge]=gt})})}else t.exposed||(t.exposed={});R&&t.render===Ct&&(t.render=R),H!=null&&(t.inheritAttrs=H),F&&(t.components=F),Q&&(t.directives=Q)}function Mv(t,e,n=Ct,s=!1){q(t)&&(t=al(t));for(const i in t){const r=t[i];let o;ye(r)?"default"in r?o=dt(r.from||i,r.default,!0):o=dt(r.from||i):o=dt(r),ke(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Du(t,e,n){ut(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dh(t,e,n,s){const i=s.includes(".")?Rh(n,s):()=>n[s];if(Se(t)){const r=e[t];te(r)&&xs(i,r)}else if(te(t))xs(i,t.bind(n));else if(ye(t))if(q(t))t.forEach(r=>Dh(r,e,n,s));else{const r=te(t.handler)?t.handler.bind(n):e[t.handler];te(r)&&xs(i,r,t)}}function lc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>no(l,c,o,!0)),no(l,e,o)),ye(e)&&r.set(e,l),l}function no(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&no(t,r,n,!0),i&&i.forEach(o=>no(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Dv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Dv={data:Lu,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Fn,directives:Fn,watch:Fv,provide:Lu,inject:Lv};function Lu(t,e){return e?t?function(){return Ae(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Lv(t,e){return Fn(al(t),al(e))}function al(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Ae(Ae(Object.create(null),t),e):e}function Fv(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function Uv(t,e,n,s=!1){const i={},r={};Xr(r,ea,1),t.propsDefaults=Object.create(null),Lh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:H_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function $v(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ue(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ko(t.emitsOptions,f))continue;const p=e[f];if(l)if(ce(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const m=ft(f);i[m]=ll(l,a,m,p,t,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Lh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=xt(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ll(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d)&&!0)&&(delete r[d],c=!0)}c&&Kt(t,"set","$attrs")}function Lh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Si(l))continue;const c=e[l];let u;i&&ce(i,u=ft(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ko(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ue(n),c=a||he;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ll(i,l,d,c[d],t,!ce(c,d))}}return o}function ll(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&te(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Sn(i),s=c[n]=l.call(null,e),_n())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===xt(n))&&(s=!0))}return s}function Fh(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!te(t)){const u=d=>{l=!0;const[f,p]=Fh(d,e,!0);Ae(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ye(t)&&s.set(t,Ss),Ss;if(q(r))for(let u=0;u<r.length;u++){const d=ft(r[u]);Fu(d)&&(o[d]=he)}else if(r)for(const u in r){const d=ft(u);if(Fu(d)){const f=r[u],p=o[d]=q(f)||te(f)?{type:f}:f;if(p){const m=Bu(Boolean,p.type),y=Bu(String,p.type);p[0]=m>-1,p[1]=y<0||m<y,(m>-1||ce(p,"default"))&&a.push(d)}}}const c=[o,a];return ye(t)&&s.set(t,c),c}function Fu(t){return t[0]!=="$"}function Uu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function $u(t,e){return Uu(t)===Uu(e)}function Bu(t,e){return q(e)?e.findIndex(n=>$u(n,t)):te(e)&&$u(e,t)?0:-1}const Uh=t=>t[0]==="_"||t==="$stable",cc=t=>q(t)?t.map(rt):[rt(t)],Bv=(t,e,n)=>{if(e._n)return e;const s=Ih((...i)=>cc(e(...i)),n);return s._c=!1,s},$h=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Uh(i))continue;const r=t[i];if(te(r))e[i]=Bv(i,r,s);else if(r!=null){const o=cc(r);e[i]=()=>o}}},Bh=(t,e)=>{const n=cc(e);t.slots.default=()=>n},Hv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),Xr(e,"_",n)):$h(e,t.slots={})}else t.slots={},e&&Bh(t,e);Xr(t.slots,ea,1)},Wv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ae(i,e),!n&&a===1&&delete i._):(r=!e.$stable,$h(e,i)),o=e}else e&&(Bh(t,e),o={default:1});if(r)for(const a in i)!Uh(a)&&!(a in o)&&delete i[a]};function Hh(){return{app:null,config:{isNativeTag:l_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jv=0;function Vv(t,e){return function(s,i=null){te(s)||(s=Object.assign({},s)),i!=null&&!ye(i)&&(i=null);const r=Hh(),o=new Set;let a=!1;const l=r.app={_uid:jv++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:uy,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&te(c.install)?(o.add(c),c.install(l,...u)):te(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const f=Ie(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,ta(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function so(t,e,n,s,i=!1){if(q(t)){t.forEach((f,p)=>so(f,e&&(q(e)?e[p]:e),n,s,i));return}if(zn(s)&&!i)return;const r=s.shapeFlag&4?ta(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===he?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,ce(d,c)&&(d[c]=null)):ke(c)&&(c.value=null)),te(l))qt(l,a,12,[o,u]);else{const f=Se(l),p=ke(l);if(f||p){const m=()=>{if(t.f){const y=f?ce(d,l)?d[l]:u[l]:l.value;i?q(y)&&Gl(y,r):q(y)?y.includes(r)||y.push(r):f?(u[l]=[r],ce(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,ce(d,l)&&(d[l]=o)):p&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Fe(m,n)):m()}}}let en=!1;const Mr=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Dr=t=>t.nodeType===8;function qv(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(v,g)=>{if(!g.hasChildNodes()){n(null,v,g),eo(),g._vnode=v;return}en=!1,d(g.firstChild,v,null,null,null),eo(),g._vnode=v,en&&console.error("Hydration completed but contains mismatches.")},d=(v,g,b,I,R,N=!1)=>{const P=Dr(v)&&v.data==="[",E=()=>y(v,g,b,I,R,P),{type:L,ref:$,shapeFlag:H,patchFlag:F}=g;let Q=v.nodeType;g.el=v,F===-2&&(N=!1,g.dynamicChildren=null);let T=null;switch(L){case zi:Q!==3?g.children===""?(l(g.el=i(""),o(v),v),T=v):T=E():(v.data!==g.children&&(en=!0,v.data=g.children),T=r(v));break;case Ge:Q!==8||P?T=E():T=r(v);break;case Ns:if(P&&(v=r(v),Q=v.nodeType),Q===1||Q===3){T=v;const J=!g.children.length;for(let se=0;se<g.staticCount;se++)J&&(g.children+=T.nodeType===1?T.outerHTML:T.data),se===g.staticCount-1&&(g.anchor=T),T=r(T);return P?r(T):T}else E();break;case We:P?T=m(v,g,b,I,R,N):T=E();break;default:if(H&1)Q!==1||g.type.toLowerCase()!==v.tagName.toLowerCase()?T=E():T=f(v,g,b,I,R,N);else if(H&6){g.slotScopeIds=R;const J=o(v);if(e(g,J,null,b,I,Mr(J),N),T=P?C(v):r(v),T&&Dr(T)&&T.data==="teleport end"&&(T=r(T)),zn(g)){let se;P?(se=Ie(We),se.anchor=T?T.previousSibling:J.lastChild):se=v.nodeType===3?Kh(""):Ie("div"),se.el=v,g.component.subTree=se}}else H&64?Q!==8?T=E():T=g.type.hydrate(v,g,b,I,R,N,t,p):H&128&&(T=g.type.hydrate(v,g,b,I,Mr(o(v)),R,N,t,d))}return $!=null&&so($,null,I,g),T},f=(v,g,b,I,R,N)=>{N=N||!!g.dynamicChildren;const{type:P,props:E,patchFlag:L,shapeFlag:$,dirs:H}=g,F=P==="input"&&H||P==="option";if(F||L!==-1){if(H&&kt(g,null,b,"created"),E)if(F||!N||L&48)for(const T in E)(F&&T.endsWith("value")||lr(T)&&!Si(T))&&s(v,T,null,E[T],!1,void 0,b);else E.onClick&&s(v,"onClick",null,E.onClick,!1,void 0,b);let Q;if((Q=E&&E.onVnodeBeforeMount)&&Xe(Q,b,g),H&&kt(g,null,b,"beforeMount"),((Q=E&&E.onVnodeMounted)||H)&&Sh(()=>{Q&&Xe(Q,b,g),H&&kt(g,null,b,"mounted")},I),$&16&&!(E&&(E.innerHTML||E.textContent))){let T=p(v.firstChild,g,v,b,I,R,N);for(;T;){en=!0;const J=T;T=T.nextSibling,a(J)}}else $&8&&v.textContent!==g.children&&(en=!0,v.textContent=g.children)}return v.nextSibling},p=(v,g,b,I,R,N,P)=>{P=P||!!g.dynamicChildren;const E=g.children,L=E.length;for(let $=0;$<L;$++){const H=P?E[$]:E[$]=rt(E[$]);if(v)v=d(v,H,I,R,N,P);else{if(H.type===zi&&!H.children)continue;en=!0,n(null,H,b,null,I,R,Mr(b),N)}}return v},m=(v,g,b,I,R,N)=>{const{slotScopeIds:P}=g;P&&(R=R?R.concat(P):P);const E=o(v),L=p(r(v),g,E,b,I,R,N);return L&&Dr(L)&&L.data==="]"?r(g.anchor=L):(en=!0,l(g.anchor=c("]"),E,L),L)},y=(v,g,b,I,R,N)=>{if(en=!0,g.el=null,N){const L=C(v);for(;;){const $=r(v);if($&&$!==L)a($);else break}}const P=r(v),E=o(v);return a(v),n(null,g,E,P,b,I,Mr(E),R),P},C=v=>{let g=0;for(;v;)if(v=r(v),v&&Dr(v)&&(v.data==="["&&g++,v.data==="]")){if(g===0)return r(v);g--}return v};return[u,d]}const Fe=Sh;function zv(t){return Wh(t)}function Kv(t){return Wh(t,qv)}function Wh(t,e){const n=p_();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Ct,insertStaticContent:m}=t,y=(h,_,w,S=null,A=null,D=null,W=!1,M=null,U=!!_.dynamicChildren)=>{if(h===_)return;h&&!At(h,_)&&(S=B(h),Je(h,A,D,!0),h=null),_.patchFlag===-2&&(U=!1,_.dynamicChildren=null);const{type:x,ref:K,shapeFlag:V}=_;switch(x){case zi:C(h,_,w,S);break;case Ge:v(h,_,w,S);break;case Ns:h==null&&g(_,w,S,W);break;case We:F(h,_,w,S,A,D,W,M,U);break;default:V&1?R(h,_,w,S,A,D,W,M,U):V&6?Q(h,_,w,S,A,D,W,M,U):(V&64||V&128)&&x.process(h,_,w,S,A,D,W,M,U,de)}K!=null&&A&&so(K,h&&h.ref,D,_||h,!_)},C=(h,_,w,S)=>{if(h==null)s(_.el=a(_.children),w,S);else{const A=_.el=h.el;_.children!==h.children&&c(A,_.children)}},v=(h,_,w,S)=>{h==null?s(_.el=l(_.children||""),w,S):_.el=h.el},g=(h,_,w,S)=>{[h.el,h.anchor]=m(h.children,_,w,S,h.el,h.anchor)},b=({el:h,anchor:_},w,S)=>{let A;for(;h&&h!==_;)A=f(h),s(h,w,S),h=A;s(_,w,S)},I=({el:h,anchor:_})=>{let w;for(;h&&h!==_;)w=f(h),i(h),h=w;i(_)},R=(h,_,w,S,A,D,W,M,U)=>{W=W||_.type==="svg",h==null?N(_,w,S,A,D,W,M,U):L(h,_,A,D,W,M,U)},N=(h,_,w,S,A,D,W,M)=>{let U,x;const{type:K,props:V,shapeFlag:G,transition:ne,dirs:le}=h;if(U=h.el=o(h.type,D,V&&V.is,V),G&8?u(U,h.children):G&16&&E(h.children,U,null,S,A,D&&K!=="foreignObject",W,M),le&&kt(h,null,S,"created"),V){for(const me in V)me!=="value"&&!Si(me)&&r(U,me,null,V[me],D,h.children,S,A,j);"value"in V&&r(U,"value",null,V.value),(x=V.onVnodeBeforeMount)&&Xe(x,S,h)}P(U,h,h.scopeId,W,S),le&&kt(h,null,S,"beforeMount");const Ee=(!A||A&&!A.pendingBranch)&&ne&&!ne.persisted;Ee&&ne.beforeEnter(U),s(U,_,w),((x=V&&V.onVnodeMounted)||Ee||le)&&Fe(()=>{x&&Xe(x,S,h),Ee&&ne.enter(U),le&&kt(h,null,S,"mounted")},A)},P=(h,_,w,S,A)=>{if(w&&p(h,w),S)for(let D=0;D<S.length;D++)p(h,S[D]);if(A){let D=A.subTree;if(_===D){const W=A.vnode;P(h,W,W.scopeId,W.slotScopeIds,A.parent)}}},E=(h,_,w,S,A,D,W,M,U=0)=>{for(let x=U;x<h.length;x++){const K=h[x]=M?on(h[x]):rt(h[x]);y(null,K,_,w,S,A,D,W,M)}},L=(h,_,w,S,A,D,W)=>{const M=_.el=h.el;let{patchFlag:U,dynamicChildren:x,dirs:K}=_;U|=h.patchFlag&16;const V=h.props||he,G=_.props||he;let ne;w&&Mn(w,!1),(ne=G.onVnodeBeforeUpdate)&&Xe(ne,w,_,h),K&&kt(_,h,w,"beforeUpdate"),w&&Mn(w,!0);const le=A&&_.type!=="foreignObject";if(x?$(h.dynamicChildren,x,M,w,S,le,D):W||ge(h,_,M,null,w,S,le,D,!1),U>0){if(U&16)H(M,_,V,G,w,S,A);else if(U&2&&V.class!==G.class&&r(M,"class",null,G.class,A),U&4&&r(M,"style",V.style,G.style,A),U&8){const Ee=_.dynamicProps;for(let me=0;me<Ee.length;me++){const xe=Ee[me],_t=V[xe],fs=G[xe];(fs!==_t||xe==="value")&&r(M,xe,_t,fs,A,h.children,w,S,j)}}U&1&&h.children!==_.children&&u(M,_.children)}else!W&&x==null&&H(M,_,V,G,w,S,A);((ne=G.onVnodeUpdated)||K)&&Fe(()=>{ne&&Xe(ne,w,_,h),K&&kt(_,h,w,"updated")},S)},$=(h,_,w,S,A,D,W)=>{for(let M=0;M<_.length;M++){const U=h[M],x=_[M],K=U.el&&(U.type===We||!At(U,x)||U.shapeFlag&70)?d(U.el):w;y(U,x,K,null,S,A,D,W,!0)}},H=(h,_,w,S,A,D,W)=>{if(w!==S){if(w!==he)for(const M in w)!Si(M)&&!(M in S)&&r(h,M,w[M],null,W,_.children,A,D,j);for(const M in S){if(Si(M))continue;const U=S[M],x=w[M];U!==x&&M!=="value"&&r(h,M,x,U,W,_.children,A,D,j)}"value"in S&&r(h,"value",w.value,S.value)}},F=(h,_,w,S,A,D,W,M,U)=>{const x=_.el=h?h.el:a(""),K=_.anchor=h?h.anchor:a("");let{patchFlag:V,dynamicChildren:G,slotScopeIds:ne}=_;ne&&(M=M?M.concat(ne):ne),h==null?(s(x,w,S),s(K,w,S),E(_.children,w,K,A,D,W,M,U)):V>0&&V&64&&G&&h.dynamicChildren?($(h.dynamicChildren,G,w,A,D,W,M),(_.key!=null||A&&_===A.subTree)&&uc(h,_,!0)):ge(h,_,w,K,A,D,W,M,U)},Q=(h,_,w,S,A,D,W,M,U)=>{_.slotScopeIds=M,h==null?_.shapeFlag&512?A.ctx.activate(_,w,S,W,U):T(_,w,S,A,D,W,U):J(h,_,U)},T=(h,_,w,S,A,D,W)=>{const M=h.component=Gh(h,S,A);if(dr(h)&&(M.ctx.renderer=de),Qh(M),M.asyncDep){if(A&&A.registerDep(M,se),!h.el){const U=M.subTree=Ie(Ge);v(null,U,_,w)}return}se(M,h,_,w,A,D,W)},J=(h,_,w)=>{const S=_.component=h.component;if(dv(h,_,w))if(S.asyncDep&&!S.asyncResolved){be(S,_,w);return}else S.next=_,iv(S.update),S.update();else _.el=h.el,S.vnode=_},se=(h,_,w,S,A,D,W)=>{const M=()=>{if(h.isMounted){let{next:K,bu:V,u:G,parent:ne,vnode:le}=h,Ee=K,me;Mn(h,!1),K?(K.el=le.el,be(h,K,W)):K=le,V&&ks(V),(me=K.props&&K.props.onVnodeBeforeUpdate)&&Xe(me,ne,K,le),Mn(h,!0);const xe=jr(h),_t=h.subTree;h.subTree=xe,y(_t,xe,d(_t.el),B(_t),h,A,D),K.el=xe.el,Ee===null&&nc(h,xe.el),G&&Fe(G,A),(me=K.props&&K.props.onVnodeUpdated)&&Fe(()=>Xe(me,ne,K,le),A)}else{let K;const{el:V,props:G}=_,{bm:ne,m:le,parent:Ee}=h,me=zn(_);if(Mn(h,!1),ne&&ks(ne),!me&&(K=G&&G.onVnodeBeforeMount)&&Xe(K,Ee,_),Mn(h,!0),V&&ie){const xe=()=>{h.subTree=jr(h),ie(V,h.subTree,h,A,null)};me?_.type.__asyncLoader().then(()=>!h.isUnmounted&&xe()):xe()}else{const xe=h.subTree=jr(h);y(null,xe,w,S,h,A,D),_.el=xe.el}if(le&&Fe(le,A),!me&&(K=G&&G.onVnodeMounted)){const xe=_;Fe(()=>Xe(K,Ee,xe),A)}(_.shapeFlag&256||Ee&&zn(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&h.a&&Fe(h.a,A),h.isMounted=!0,_=w=S=null}},U=h.effect=new $o(M,()=>zo(x),h.scope),x=h.update=()=>U.run();x.id=h.uid,Mn(h,!0),x()},be=(h,_,w)=>{_.component=h;const S=h.vnode.props;h.vnode=_,h.next=null,$v(h,_.props,S,w),Wv(h,_.children,w),as(),Pu(),ls()},ge=(h,_,w,S,A,D,W,M,U=!1)=>{const x=h&&h.children,K=h?h.shapeFlag:0,V=_.children,{patchFlag:G,shapeFlag:ne}=_;if(G>0){if(G&128){On(x,V,w,S,A,D,W,M,U);return}else if(G&256){gt(x,V,w,S,A,D,W,M,U);return}}ne&8?(K&16&&j(x,A,D),V!==x&&u(w,V)):K&16?ne&16?On(x,V,w,S,A,D,W,M,U):j(x,A,D,!0):(K&8&&u(w,""),ne&16&&E(V,w,S,A,D,W,M,U))},gt=(h,_,w,S,A,D,W,M,U)=>{h=h||Ss,_=_||Ss;const x=h.length,K=_.length,V=Math.min(x,K);let G;for(G=0;G<V;G++){const ne=_[G]=U?on(_[G]):rt(_[G]);y(h[G],ne,w,null,A,D,W,M,U)}x>K?j(h,A,D,!0,!1,V):E(_,w,S,A,D,W,M,U,V)},On=(h,_,w,S,A,D,W,M,U)=>{let x=0;const K=_.length;let V=h.length-1,G=K-1;for(;x<=V&&x<=G;){const ne=h[x],le=_[x]=U?on(_[x]):rt(_[x]);if(At(ne,le))y(ne,le,w,null,A,D,W,M,U);else break;x++}for(;x<=V&&x<=G;){const ne=h[V],le=_[G]=U?on(_[G]):rt(_[G]);if(At(ne,le))y(ne,le,w,null,A,D,W,M,U);else break;V--,G--}if(x>V){if(x<=G){const ne=G+1,le=ne<K?_[ne].el:S;for(;x<=G;)y(null,_[x]=U?on(_[x]):rt(_[x]),w,le,A,D,W,M,U),x++}}else if(x>G)for(;x<=V;)Je(h[x],A,D,!0),x++;else{const ne=x,le=x,Ee=new Map;for(x=le;x<=G;x++){const nt=_[x]=U?on(_[x]):rt(_[x]);nt.key!=null&&Ee.set(nt.key,x)}let me,xe=0;const _t=G-le+1;let fs=!1,mu=0;const ci=new Array(_t);for(x=0;x<_t;x++)ci[x]=0;for(x=ne;x<=V;x++){const nt=h[x];if(xe>=_t){Je(nt,A,D,!0);continue}let Rt;if(nt.key!=null)Rt=Ee.get(nt.key);else for(me=le;me<=G;me++)if(ci[me-le]===0&&At(nt,_[me])){Rt=me;break}Rt===void 0?Je(nt,A,D,!0):(ci[Rt-le]=x+1,Rt>=mu?mu=Rt:fs=!0,y(nt,_[Rt],w,null,A,D,W,M,U),xe++)}const _u=fs?Gv(ci):Ss;for(me=_u.length-1,x=_t-1;x>=0;x--){const nt=le+x,Rt=_[nt],vu=nt+1<K?_[nt+1].el:S;ci[x]===0?y(null,Rt,w,vu,A,D,W,M,U):fs&&(me<0||x!==_u[me]?mt(Rt,w,vu,2):me--)}}},mt=(h,_,w,S,A=null)=>{const{el:D,type:W,transition:M,children:U,shapeFlag:x}=h;if(x&6){mt(h.component.subTree,_,w,S);return}if(x&128){h.suspense.move(_,w,S);return}if(x&64){W.move(h,_,w,de);return}if(W===We){s(D,_,w);for(let V=0;V<U.length;V++)mt(U[V],_,w,S);s(h.anchor,_,w);return}if(W===Ns){b(h,_,w);return}if(S!==2&&x&1&&M)if(S===0)M.beforeEnter(D),s(D,_,w),Fe(()=>M.enter(D),A);else{const{leave:V,delayLeave:G,afterLeave:ne}=M,le=()=>s(D,_,w),Ee=()=>{V(D,()=>{le(),ne&&ne()})};G?G(D,le,Ee):Ee()}else s(D,_,w)},Je=(h,_,w,S=!1,A=!1)=>{const{type:D,props:W,ref:M,children:U,dynamicChildren:x,shapeFlag:K,patchFlag:V,dirs:G}=h;if(M!=null&&so(M,null,w,h,!0),K&256){_.ctx.deactivate(h);return}const ne=K&1&&G,le=!zn(h);let Ee;if(le&&(Ee=W&&W.onVnodeBeforeUnmount)&&Xe(Ee,_,h),K&6)k(h.component,w,S);else{if(K&128){h.suspense.unmount(w,S);return}ne&&kt(h,null,_,"beforeUnmount"),K&64?h.type.remove(h,_,w,A,de,S):x&&(D!==We||V>0&&V&64)?j(x,_,w,!1,!0):(D===We&&V&384||!A&&K&16)&&j(U,_,w),S&&ds(h)}(le&&(Ee=W&&W.onVnodeUnmounted)||ne)&&Fe(()=>{Ee&&Xe(Ee,_,h),ne&&kt(h,null,_,"unmounted")},w)},ds=h=>{const{type:_,el:w,anchor:S,transition:A}=h;if(_===We){Rr(w,S);return}if(_===Ns){I(h);return}const D=()=>{i(w),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(h.shapeFlag&1&&A&&!A.persisted){const{leave:W,delayLeave:M}=A,U=()=>W(w,D);M?M(h.el,D,U):U()}else D()},Rr=(h,_)=>{let w;for(;h!==_;)w=f(h),i(h),h=w;i(_)},k=(h,_,w)=>{const{bum:S,scope:A,update:D,subTree:W,um:M}=h;S&&ks(S),A.stop(),D&&(D.active=!1,Je(W,h,_,w)),M&&Fe(M,_),Fe(()=>{h.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},j=(h,_,w,S=!1,A=!1,D=0)=>{for(let W=D;W<h.length;W++)Je(h[W],_,w,S,A)},B=h=>h.shapeFlag&6?B(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el),z=(h,_,w)=>{h==null?_._vnode&&Je(_._vnode,null,null,!0):y(_._vnode||null,h,_,null,null,null,w),Pu(),eo(),_._vnode=h},de={p:y,um:Je,m:mt,r:ds,mt:T,mc:E,pc:ge,pbc:$,n:B,o:t};let Te,ie;return e&&([Te,ie]=e(de)),{render:z,hydrate:Te,createApp:Vv(z,Te)}}function Mn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function uc(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=on(i[r]),a.el=o.el),n||uc(o,a))}}function Gv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Yv=t=>t.__isTeleport,ki=t=>t&&(t.disabled||t.disabled===""),Hu=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,cl=(t,e)=>{const n=t&&t.to;return Se(n)?e?e(n):null:n},Qv={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:y,createComment:C}}=c,v=ki(e.props);let{shapeFlag:g,children:b,dynamicChildren:I}=e;if(t==null){const R=e.el=y(""),N=e.anchor=y("");p(R,n,s),p(N,n,s);const P=e.target=cl(e.props,m),E=e.targetAnchor=y("");P&&(p(E,P),o=o||Hu(P));const L=($,H)=>{g&16&&u(b,$,H,i,r,o,a,l)};v?L(n,N):P&&L(P,E)}else{e.el=t.el;const R=e.anchor=t.anchor,N=e.target=t.target,P=e.targetAnchor=t.targetAnchor,E=ki(t.props),L=E?n:N,$=E?R:P;if(o=o||Hu(N),I?(f(t.dynamicChildren,I,L,i,r,o,a),uc(t,e,!0)):l||d(t,e,L,$,i,r,o,a,!1),v)E||Lr(e,n,R,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const H=e.target=cl(e.props,m);H&&Lr(e,H,null,c,0)}else E&&Lr(e,N,P,c,1)}},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=t;if(d&&r(u),(o||!ki(f))&&(r(c),a&16))for(let p=0;p<l.length;p++){const m=l[p];i(m,e,n,!0,!!m.dynamicChildren)}},move:Lr,hydrate:Jv};function Lr(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&s(o,e,n),(!d||ki(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);d&&s(a,e,n)}function Jv(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=cl(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(ki(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=d;else{e.anchor=o(t);let f=d;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(d,e,u,n,s,i,r)}}return e.anchor&&o(e.anchor)}const Yk=Qv,We=Symbol(void 0),zi=Symbol(void 0),Ge=Symbol(void 0),Ns=Symbol(void 0),Pi=[];let et=null;function Zo(t=!1){Pi.push(et=t?null:[])}function jh(){Pi.pop(),et=Pi[Pi.length-1]||null}let Yn=1;function Wu(t){Yn+=t}function Vh(t){return t.dynamicChildren=Yn>0?et||Ss:null,jh(),Yn>0&&et&&et.push(t),t}function Qk(t,e,n,s,i,r){return Vh(zh(t,e,n,s,i,r,!0))}function dc(t,e,n,s,i){return Vh(Ie(t,e,n,s,i,!0))}function Qn(t){return t?t.__v_isVNode===!0:!1}function At(t,e){return t.type===e.type&&t.key===e.key}function Jk(t){}const ea="__vInternal",qh=({key:t})=>t!=null?t:null,qr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Se(t)||ke(t)||te(t)?{i:Ve,r:t,k:e,f:!!n}:t:null;function zh(t,e=null,n=null,s=0,i=null,r=t===We?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qh(e),ref:e&&qr(e),scopeId:Go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(fc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Yn>0&&!o&&et&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&et.push(l),l}const Ie=Xv;function Xv(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Oh)&&(t=Ge),Qn(t)){const a=Gt(t,e,!0);return n&&fc(a,n),Yn>0&&!r&&et&&(a.shapeFlag&6?et[et.indexOf(t)]=a:et.push(a)),a.patchFlag|=-2,a}if(ay(t)&&(t=t.__vccOpts),e){e=Zv(e);let{class:a,style:l}=e;a&&!Se(a)&&(e.class=Do(a)),ye(l)&&(ph(l)&&!q(l)&&(l=Ae({},l)),e.style=Mo(l))}const o=Se(t)?1:Th(t)?128:Yv(t)?64:ye(t)?4:te(t)?2:0;return zh(t,e,n,s,i,o,r,!0)}function Zv(t){return t?ph(t)||ea in t?Ae({},t):t:null}function Gt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?ey(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&qh(a),ref:e&&e.ref?n&&i?q(i)?i.concat(qr(e)):[i,qr(e)]:qr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gt(t.ssContent),ssFallback:t.ssFallback&&Gt(t.ssFallback),el:t.el,anchor:t.anchor}}function Kh(t=" ",e=0){return Ie(zi,null,t,e)}function Xk(t,e){const n=Ie(Ns,null,t);return n.staticCount=e,n}function Zk(t="",e=!1){return e?(Zo(),dc(Ge,null,t)):Ie(Ge,null,t)}function rt(t){return t==null||typeof t=="boolean"?Ie(Ge):q(t)?Ie(We,null,t.slice()):typeof t=="object"?on(t):Ie(zi,null,String(t))}function on(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gt(t)}function fc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ea in e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[Kh(e)]):n=8);t.children=e,t.shapeFlag|=n}function ey(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Do([e.class,s.class]));else if(i==="style")e.style=Mo([e.style,s.style]);else if(lr(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Xe(t,e,n,s=null){ut(t,e,7,[n,s])}const ty=Hh();let ny=0;function Gh(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ty,r={uid:ny++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fh(s,i),emitsOptions:Ch(s,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=av.bind(null,r),t.ce&&t.ce(r),r}let Oe=null;const pt=()=>Oe||Ve,Sn=t=>{Oe=t,t.scope.on()},_n=()=>{Oe&&Oe.scope.off(),Oe=null};function Yh(t){return t.vnode.shapeFlag&4}let Hs=!1;function Qh(t,e=!1){Hs=e;const{props:n,children:s}=t.vnode,i=Yh(t);Uv(t,n,i,e),Hv(t,s);const r=i?sy(t,e):void 0;return Hs=!1,r}function sy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Dt(new Proxy(t.ctx,rl));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Xh(t):null;Sn(t),as();const r=qt(s,t,0,[t.props,i]);if(ls(),_n(),Yl(r)){if(r.then(_n,_n),e)return r.then(o=>{ul(t,o,e)}).catch(o=>{Zs(o,t,0)});t.asyncDep=r}else ul(t,r,e)}else Jh(t,e)}function ul(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=mh(e)),Jh(t,n)}let io,dl;function eP(t){io=t,dl=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Nv))}}const tP=()=>!io;function Jh(t,e,n){const s=t.type;if(!t.render){if(!e&&io&&!s.render){const i=s.template||lc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ae(Ae({isCustomElement:r,delimiters:a},o),l);s.render=io(i,c)}}t.render=s.render||Ct,dl&&dl(t)}Sn(t),as(),Ov(t),ls(),_n()}function iy(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function Xh(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=iy(t))},slots:t.slots,emit:t.emit,expose:e}}function ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(mh(Dt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)}}))}const ry=/(?:^|[-_])(\w)/g,oy=t=>t.replace(ry,e=>e.toUpperCase()).replace(/[-_]/g,"");function ro(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function Zh(t,e,n=!1){let s=ro(e);if(!s&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&t&&t.parent){const i=r=>{for(const o in r)if(r[o]===e)return o};s=i(t.components||t.parent.type.components)||i(t.appContext.components)}return s?oy(s):n?"App":"Anonymous"}function ay(t){return te(t)&&"__vccOpts"in t}const Z=(t,e)=>Q_(t,e,Hs);function nP(){return null}function sP(){return null}function iP(t){}function rP(t,e){return null}function oP(){return ep().slots}function aP(){return ep().attrs}function ep(){const t=pt();return t.setupContext||(t.setupContext=Xh(t))}function lP(t,e){const n=q(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?q(i)||te(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function cP(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function uP(t){const e=pt();let n=t();return _n(),Yl(n)&&(n=n.catch(s=>{throw Sn(e),s})),[n,()=>Sn(e)]}function ee(t,e,n){const s=arguments.length;return s===2?ye(e)&&!q(e)?Qn(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Qn(n)&&(n=[n]),Ie(t,e,n))}const ly=Symbol(""),dP=()=>{{const t=dt(ly);return t||J_("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function fP(){}function hP(t,e,n,s){const i=n[s];if(i&&cy(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function cy(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Us(n[s],e[s]))return!1;return Yn>0&&et&&et.push(t),!0}const uy="3.2.41",dy={createComponentInstance:Gh,setupComponent:Qh,renderComponentRoot:jr,setCurrentRenderingInstance:ji,isVNode:Qn,normalizeVNode:rt},pP=dy,gP=null,mP=null,fy="http://www.w3.org/2000/svg",Hn=typeof document!="undefined"?document:null,ju=Hn&&Hn.createElement("template"),hy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Hn.createElementNS(fy,t):Hn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ju.innerHTML=s?`<svg>${t}</svg>`:t;const a=ju.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function py(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gy(t,e,n){const s=t.style,i=Se(n);if(n&&!i){for(const r in n)fl(s,r,n[r]);if(e&&!Se(e))for(const r in e)n[r]==null&&fl(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Vu=/\s*!important$/;function fl(t,e,n){if(q(n))n.forEach(s=>fl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=my(t,e);Vu.test(n)?t.setProperty(xt(s),n.replace(Vu,""),"important"):t[s]=n}}const qu=["Webkit","Moz","ms"],ka={};function my(t,e){const n=ka[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return ka[e]=s;s=Uo(s);for(let i=0;i<qu.length;i++){const r=qu[i]+s;if(r in t)return ka[e]=r}return e}const zu="http://www.w3.org/1999/xlink";function _y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zu,e.slice(6,e.length)):t.setAttributeNS(zu,e,n);else{const r=s_(e);n==null||r&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vy(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Gf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ht(t,e,n,s){t.addEventListener(e,n,s)}function yy(t,e,n,s){t.removeEventListener(e,n,s)}function by(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Ey(e);if(s){const c=r[e]=Iy(s,i);Ht(t,a,c,l)}else o&&(yy(t,a,o,l),r[e]=void 0)}}const Ku=/(?:Once|Passive|Capture)$/;function Ey(t){let e;if(Ku.test(t)){e={};let s;for(;s=t.match(Ku);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xt(t.slice(2)),e]}let Pa=0;const wy=Promise.resolve(),Cy=()=>Pa||(wy.then(()=>Pa=0),Pa=Date.now());function Iy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(Ty(s,n.value),e,5,[s])};return n.value=t,n.attached=Cy(),n}function Ty(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Gu=/^on[a-z]/,Sy=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?py(t,s,i):e==="style"?gy(t,n,s):lr(e)?Kl(e)||by(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ry(t,e,s,i))?vy(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),_y(t,e,s,i))};function Ry(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Gu.test(e)&&te(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Gu.test(e)&&Se(n)?!1:e in t}function ky(t,e){const n=ei(t);class s extends hc{constructor(r){super(n,r,e)}}return s.def=n,s}const _P=t=>ky(t,Gy),Py=typeof HTMLElement!="undefined"?HTMLElement:class{};class hc extends Py{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,qo(()=>{this._connected||(rd(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=s=>{const{props:i,styles:r}=s,o=!q(i),a=i?o?Object.keys(i):i:[];let l;if(o)for(const c in this._props){const u=i[c];(u===Number||u&&u.type===Number)&&(this._props[c]=In(this._props[c]),(l||(l=Object.create(null)))[c]=!0)}this._numberProps=l;for(const c of Object.keys(this))c[0]!=="_"&&this._setProp(c,this[c],!0,!1);for(const c of a.map(ft))Object.defineProperty(this,c,{get(){return this._getProp(c)},set(u){this._setProp(c,u)}});this._applyStyles(r),this._update()},n=this._def.__asyncLoader;n?n().then(e):e(this._def)}_setAttr(e){let n=this.getAttribute(e);this._numberProps&&this._numberProps[e]&&(n=In(n)),this._setProp(ft(e),n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(xt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(xt(e),n+""):n||this.removeAttribute(xt(e))))}_update(){rd(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ie(this._def,Ae({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0,n.emit=(i,...r)=>{this.dispatchEvent(new CustomEvent(i,{detail:r}))};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof hc){n.parent=s._instance;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function vP(t="$style"){{const e=pt();if(!e)return he;const n=e.type.__cssModules;if(!n)return he;const s=n[t];return s||he}}function yP(t){const e=pt();if(!e)return;const n=()=>hl(e.subTree,t(e.proxy));_v(n),Qo(()=>{const s=new MutationObserver(n);s.observe(e.subTree.el.parentNode,{childList:!0}),Xo(()=>s.disconnect())})}function hl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{hl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Yu(t.el,e);else if(t.type===We)t.children.forEach(n=>hl(n,e));else if(t.type===Ns){let{el:n,anchor:s}=t;for(;n&&(Yu(n,e),n!==s);)n=n.nextSibling}}function Yu(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const tn="transition",di="animation",pc=(t,{slots:e})=>ee(Ph,np(t),e);pc.displayName="Transition";const tp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ay=pc.props=Ae({},Ph.props,tp),Dn=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qu=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function np(t){const e={};for(const F in t)F in tp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=xy(i),y=m&&m[0],C=m&&m[1],{onBeforeEnter:v,onEnter:g,onEnterCancelled:b,onLeave:I,onLeaveCancelled:R,onBeforeAppear:N=v,onAppear:P=g,onAppearCancelled:E=b}=e,L=(F,Q,T)=>{rn(F,Q?u:a),rn(F,Q?c:o),T&&T()},$=(F,Q)=>{F._isLeaving=!1,rn(F,d),rn(F,p),rn(F,f),Q&&Q()},H=F=>(Q,T)=>{const J=F?P:g,se=()=>L(Q,F,T);Dn(J,[Q,se]),Ju(()=>{rn(Q,F?l:r),$t(Q,F?u:a),Qu(J)||Xu(Q,s,y,se)})};return Ae(e,{onBeforeEnter(F){Dn(v,[F]),$t(F,r),$t(F,o)},onBeforeAppear(F){Dn(N,[F]),$t(F,l),$t(F,c)},onEnter:H(!1),onAppear:H(!0),onLeave(F,Q){F._isLeaving=!0;const T=()=>$(F,Q);$t(F,d),ip(),$t(F,f),Ju(()=>{!F._isLeaving||(rn(F,d),$t(F,p),Qu(I)||Xu(F,s,C,T))}),Dn(I,[F,T])},onEnterCancelled(F){L(F,!1),Dn(b,[F])},onAppearCancelled(F){L(F,!0),Dn(E,[F])},onLeaveCancelled(F){$(F),Dn(R,[F])}})}function xy(t){if(t==null)return null;if(ye(t))return[Aa(t.enter),Aa(t.leave)];{const e=Aa(t);return[e,e]}}function Aa(t){return In(t)}function $t(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function rn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ny=0;function Xu(t,e,n,s){const i=t._endId=++Ny,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=sp(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),r()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function sp(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(tn+"Delay"),r=s(tn+"Duration"),o=Zu(i,r),a=s(di+"Delay"),l=s(di+"Duration"),c=Zu(a,l);let u=null,d=0,f=0;e===tn?o>0&&(u=tn,d=o,f=r.length):e===di?c>0&&(u=di,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?tn:di:null,f=u?u===tn?r.length:l.length:0);const p=u===tn&&/\b(transform|all)(,|$)/.test(n[tn+"Property"]);return{type:u,timeout:d,propCount:f,hasTransform:p}}function Zu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ed(n)+ed(t[s])))}function ed(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ip(){return document.body.offsetHeight}const rp=new WeakMap,op=new WeakMap,Oy={name:"TransitionGroup",props:Ae({},Ay,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=pt(),s=kh();let i,r;return rc(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Uy(i[0].el,n.vnode.el,o))return;i.forEach(Dy),i.forEach(Ly);const a=i.filter(Fy);ip(),a.forEach(l=>{const c=l.el,u=c.style;$t(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,rn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=ue(t),a=np(o);let l=o.tag||We;i=r,r=e.default?ic(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Bs(u,qi(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Bs(u,qi(u,a,s,n)),rp.set(u,u.el.getBoundingClientRect())}return Ie(l,null,r)}}},My=Oy;function Dy(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Ly(t){op.set(t,t.el.getBoundingClientRect())}function Fy(t){const e=rp.get(t),n=op.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Uy(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=sp(s);return i.removeChild(s),r}const Rn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>ks(e,n):e};function $y(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Rn(i);const r=s||i.props&&i.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=In(a)),t._assign(a)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",$y),Ht(t,"compositionend",td),Ht(t,"change",td))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Rn(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&In(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},ap={deep:!0,created(t,e,n){t._assign=Rn(n),Ht(t,"change",()=>{const s=t._modelValue,i=Ws(t),r=t.checked,o=t._assign;if(q(s)){const a=Lo(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(os(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(cp(t,r))})},mounted:nd,beforeUpdate(t,e,n){t._assign=Rn(n),nd(t,e,n)}};function nd(t,{value:e,oldValue:n},s){t._modelValue=e,q(e)?t.checked=Lo(e,s.props.value)>-1:os(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Cn(e,cp(t,!0)))}const lp={created(t,{value:e},n){t.checked=Cn(e,n.props.value),t._assign=Rn(n),Ht(t,"change",()=>{t._assign(Ws(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Rn(s),e!==n&&(t.checked=Cn(e,s.props.value))}},By={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=os(e);Ht(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?In(Ws(o)):Ws(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Rn(s)},mounted(t,{value:e}){sd(t,e)},beforeUpdate(t,e,n){t._assign=Rn(n)},updated(t,{value:e}){sd(t,e)}};function sd(t,e){const n=t.multiple;if(!(n&&!q(e)&&!os(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Ws(r);if(n)q(e)?r.selected=Lo(e,o)>-1:r.selected=e.has(o);else if(Cn(Ws(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ws(t){return"_value"in t?t._value:t.value}function cp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Hy={created(t,e,n){Fr(t,e,n,null,"created")},mounted(t,e,n){Fr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Fr(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Fr(t,e,n,s,"updated")}};function up(t,e){switch(t){case"SELECT":return By;case"TEXTAREA":return pl;default:switch(e){case"checkbox":return ap;case"radio":return lp;default:return pl}}}function Fr(t,e,n,s,i){const o=up(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}function Wy(){pl.getSSRProps=({value:t})=>({value:t}),lp.getSSRProps=({value:t},e)=>{if(e.props&&Cn(e.props.value,t))return{checked:!0}},ap.getSSRProps=({value:t},e)=>{if(q(t)){if(e.props&&Lo(t,e.props.value)>-1)return{checked:!0}}else if(os(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Hy.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=up(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const jy=["ctrl","shift","alt","meta"],Vy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jy.some(n=>t[`${n}Key`]&&!e.includes(n))},bP=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Vy[e[i]];if(r&&r(n,e))return}return t(n,...s)},qy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},EP=(t,e)=>n=>{if(!("key"in n))return;const s=xt(n.key);if(e.some(i=>i===s||qy[i]===s))return t(n)},zy={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):fi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),fi(t,!0),s.enter(t)):s.leave(t,()=>{fi(t,!1)}):fi(t,e))},beforeUnmount(t,{value:e}){fi(t,e)}};function fi(t,e){t.style.display=e?t._vod:"none"}function Ky(){zy.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const dp=Ae({patchProp:Sy},hy);let Ai,id=!1;function fp(){return Ai||(Ai=zv(dp))}function hp(){return Ai=id?Ai:Kv(dp),id=!0,Ai}const rd=(...t)=>{fp().render(...t)},Gy=(...t)=>{hp().hydrate(...t)},pp=(...t)=>{const e=fp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=gp(s);if(!i)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},wP=(...t)=>{const e=hp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=gp(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function gp(t){return Se(t)?document.querySelector(t):t}let od=!1;const CP=()=>{od||(od=!0,Wy(),Ky())};function na(t,e,n,s){return Object.defineProperty(t,e,{get:n,set:s,enumerable:!0}),t}function IP(t,e){for(const n in e)na(t,n,e[n]);return t}const Jn=Nt(!1);let sa;function Yy(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function Qy(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const mp="ontouchstart"in window||window.navigator.maxTouchPoints>0;function Jy(t){sa={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function Xy(t){const e=t.toLowerCase(),n=Qy(e),s=Yy(e,n),i={};s.browser&&(i[s.browser]=!0,i.version=s.version,i.versionNumber=parseInt(s.versionNumber,10)),s.platform&&(i[s.platform]=!0);const r=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return r===!0||e.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,s.browser="edge"):i.crios?(i.chrome=!0,s.browser="chrome"):i.fxios&&(i.firefox=!0,s.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||i.mobile===!0&&i.ios!==!0&&r!==!0)&&(i.webkit=!0),i.edg&&(s.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(s.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(s.browser="playbook",i.playbook=!0),i.opr&&(s.browser="opera",i.opera=!0),i.safari&&i.android&&(s.browser="android",i.android=!0),i.safari&&i.kindle&&(s.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(s.browser="silk",i.silk=!0),i.vivaldi&&(s.browser="vivaldi",i.vivaldi=!0),i.name=s.browser,i.platform=s.platform,e.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(window.Capacitor!==void 0?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),mp===!0&&i.mac===!0&&(i.desktop===!0&&i.safari===!0||i.nativeMobile===!0&&i.android!==!0&&i.ios!==!0&&i.ipad!==!0)&&Jy(i)),i}const ad=navigator.userAgent||navigator.vendor||window.opera,Zy={has:{touch:!1,webStorage:!1},within:{iframe:!1}},Et={userAgent:ad,is:Xy(ad),has:{touch:mp},within:{iframe:window.self!==window.top}},gl={install(t){const{$q:e}=t;Jn.value===!0?(t.onSSRHydrated.push(()=>{Jn.value=!1,Object.assign(e.platform,Et),sa=void 0}),e.platform=xn(this)):e.platform=this}};{let t;na(Et.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),Et.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),Jn.value===!0?Object.assign(gl,Et,sa,Zy):Object.assign(gl,Et)}var ia=(t,e)=>{const n=xn(t);for(const s in t)na(e,s,()=>n[s],i=>{n[s]=i});return e};const Xn={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(Xn,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function Ki(){}function TP(t){return t.button===0}function eb(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function SP(t){if(t.path)return t.path;if(t.composedPath)return t.composedPath();const e=[];let n=t.target;for(;n;){if(e.push(n),n.tagName==="HTML")return e.push(document),e.push(window),e;n=n.parentElement}}function _p(t){t.stopPropagation()}function ml(t){t.cancelable!==!1&&t.preventDefault()}function hs(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function RP(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?s=>{s.__dragPrevented=!0,s.addEventListener("dragstart",ml,Xn.notPassiveCapture)}:s=>{delete s.__dragPrevented,s.removeEventListener("dragstart",ml,Xn.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function tb(t,e,n){const s=`__q_${e}_evt`;t[s]=t[s]!==void 0?t[s].concat(n):n,n.forEach(i=>{i[0].addEventListener(i[1],t[i[2]],Xn[i[3]])})}function nb(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(s=>{s[0].removeEventListener(s[1],t[s[2]],Xn[s[3]])}),t[n]=void 0)}function sb(t,e=250,n){let s;function i(){const r=arguments,o=()=>{s=void 0,n!==!0&&t.apply(this,r)};clearTimeout(s),n===!0&&s===void 0&&t.apply(this,r),s=setTimeout(o,e)}return i.cancel=()=>{clearTimeout(s)},i}const xa=["sm","md","lg","xl"],{passive:ld}=Xn;var ib=ia({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:Ki,setDebounce:Ki,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,s=n||window,i=document.scrollingElement||document.documentElement,r=n===void 0||Et.is.mobile===!0?()=>[Math.max(window.innerWidth,i.clientWidth),Math.max(window.innerHeight,i.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-i.clientWidth,n.height*n.scale+window.innerHeight-i.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=d=>{const[f,p]=r();if(p!==this.height&&(this.height=p),f!==this.width)this.width=f;else if(d!==!0)return;let m=this.sizes;this.gt.xs=f>=m.sm,this.gt.sm=f>=m.md,this.gt.md=f>=m.lg,this.gt.lg=f>=m.xl,this.lt.sm=f<m.sm,this.lt.md=f<m.md,this.lt.lg=f<m.lg,this.lt.xl=f<m.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,m=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",m!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${m}`)),this.name=m)};let a,l={},c=16;this.setSizes=d=>{xa.forEach(f=>{d[f]!==void 0&&(l[f]=d[f])})},this.setDebounce=d=>{c=d};const u=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&xa.forEach(f=>{this.sizes[f]=parseInt(d.getPropertyValue(`--q-size-${f}`),10)}),this.setSizes=f=>{xa.forEach(p=>{f[p]&&(this.sizes[p]=f[p])}),this.__update(!0)},this.setDebounce=f=>{a!==void 0&&s.removeEventListener("resize",a,ld),a=f>0?sb(this.__update,f):this.__update,s.addEventListener("resize",a,ld)},this.setDebounce(c),Object.keys(l).length>0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Jn.value===!0?e.push(u):u()}});const Be=ia({isActive:!1,mode:!1},{__media:void 0,set(t){Be.mode=t,t==="auto"?(Be.__media===void 0&&(Be.__media=window.matchMedia("(prefers-color-scheme: dark)"),Be.__updateMedia=()=>{Be.set("auto")},Be.__media.addListener(Be.__updateMedia)),t=Be.__media.matches):Be.__media!==void 0&&(Be.__media.removeListener(Be.__updateMedia),Be.__media=void 0),Be.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){Be.set(Be.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:s}=t.config;if(t.dark=this,this.__installed===!0&&s===void 0)return;this.isActive=s===!0;const i=s!==void 0?s:!1;if(Jn.value===!0){const r=a=>{this.__fromSSR=a},o=this.set;this.set=r,r(i),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(i)}}),vp=()=>!0;function rb(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function ob(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function ab(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return vp;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(rb).map(ob)),()=>e.includes(window.location.hash)}var lb={__history:[],add:Ki,remove:Ki,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=Et.is;if(e!==!0&&n!==!0)return;const s=t.config[e===!0?"cordova":"capacitor"];if(s!==void 0&&s.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=vp),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const i=ab(Object.assign({backButtonExit:!0},s)),r=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else i()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",r,!1)}):window.Capacitor.Plugins.App.addListener("backButton",r)}},cd={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function ud(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const an=ia({__langPack:{}},{getLocale:ud,set(t=cd,e){const n={...t,rtl:t.rtl===!0,getLocale:ud};{const s=document.documentElement;s.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),s.setAttribute("lang",n.isoName),n.set=an.set,Object.assign(an.__langPack,n),an.props=n,an.isoName=n.isoName,an.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=an.__langPack,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||cd)}});function cb(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let yp=!1;function ub(t){yp=t.isComposing===!0}function db(t){return yp===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function _l(t,e){return db(t)===!0?!1:[].concat(e).includes(t.keyCode)}function fb(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function hb({is:t,has:e,within:n},s){const i=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const r=fb(t);r!==void 0&&i.push("platform-"+r)}if(t.nativeMobile===!0){const r=t.nativeMobileWrapper;i.push(r),i.push("native-mobile"),t.ios===!0&&(s[r]===void 0||s[r].iosStatusBarPadding!==!1)&&i.push("q-ios-padding")}else t.electron===!0?i.push("electron"):t.bex===!0&&i.push("bex");return n.iframe===!0&&i.push("within-iframe"),i}function pb(){const t=document.body.className;let e=t;sa!==void 0&&(e=e.replace("desktop","platform-ios mobile")),Et.has.touch===!0&&(e=e.replace("no-touch","touch")),Et.within.iframe===!0&&(e+=" within-iframe"),t!==e&&(document.body.className=e)}function gb(t){for(const e in t)cb(e,t[e])}var mb={install(t){if(this.__installed!==!0){if(Jn.value===!0)pb();else{const{$q:e}=t;e.config.brand!==void 0&&gb(e.config.brand);const n=hb(Et,e.config);document.body.classList.add.apply(document.body.classList,n)}Et.is.ios===!0&&document.body.addEventListener("touchstart",Ki),window.addEventListener("keydown",ub,!0)}}},_b={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const oo=ia({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=oo.set,Object.assign(oo.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,na(t,"iconMapFn",()=>this.iconMapFn,s=>{this.iconMapFn=s}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||_b)}}),vb="_q_",kP="_q_s_",PP="_q_l_",AP="_q_pc_",xP="_q_fo_",NP=()=>{},ao={};let bp=!1;function yb(){bp=!0}function Na(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,s;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(s=n;s--!==0;)if(Na(t[s],e[s])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;for(s=t.entries().next();s.done!==!0;){if(e.has(s.value[0])!==!0)return!1;s=s.next()}for(s=t.entries().next();s.done!==!0;){if(Na(s.value[1],e.get(s.value[0]))!==!0)return!1;s=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;for(s=t.entries().next();s.done!==!0;){if(e.has(s.value[0])!==!0)return!1;s=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(s=n;s--!==0;)if(t[s]!==e[s])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const i=Object.keys(t).filter(r=>t[r]!==void 0);if(n=i.length,n!==Object.keys(e).filter(r=>e[r]!==void 0).length)return!1;for(s=n;s--!==0;){const r=i[s];if(Na(t[r],e[r])!==!0)return!1}return!0}return t!==t&&e!==e}function Gi(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}function OP(t){return Object.prototype.toString.call(t)==="[object Date]"}function MP(t){return typeof t=="number"&&isFinite(t)}const dd=[gl,mb,Be,ib,lb,an,oo];function bb(t,e){const n=pp(t);n.config.globalProperties=e.config.globalProperties;const{reload:s,...i}=e._context;return Object.assign(n._context,i),n}function fd(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Eb(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(vb,n.$q),fd(n,dd),e.components!==void 0&&Object.values(e.components).forEach(s=>{Gi(s)===!0&&s.name!==void 0&&t.component(s.name,s)}),e.directives!==void 0&&Object.values(e.directives).forEach(s=>{Gi(s)===!0&&s.name!==void 0&&t.directive(s.name,s)}),e.plugins!==void 0&&fd(n,Object.values(e.plugins).filter(s=>typeof s.install=="function"&&dd.includes(s)===!1)),Jn.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(s=>{s()}),n.$q.onSSRHydrated=()=>{}})}var wb=function(t,e={}){const n={version:"2.10.1"};bp===!1?(e.config!==void 0&&Object.assign(ao,e.config),n.config={...ao},yb()):n.config=e.config||{},Eb(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},Cb={version:"2.10.1",install:wb,lang:an,iconSet:oo},Ib=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n};const Tb=ei({name:"App"});function Sb(t,e,n,s,i,r){const o=xv("router-view");return Zo(),dc(o)}var Rb=Ib(Tb,[["render",Sb]]);function DP(t){return t}var kb=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Ep;const ra=t=>Ep=t,wp=Symbol();function vl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xi||(xi={}));function Pb(){const t=Zf(!0),e=t.run(()=>Nt({}));let n=[],s=[];const i=Dt({install(r){ra(i),i._a=r,r.provide(wp,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!kb?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Cp=()=>{};function hd(t,e,n,s=Cp){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&pt()&&Xo(i),i}function ps(t,...e){t.slice().forEach(n=>{n(...e)})}function yl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];vl(i)&&vl(s)&&t.hasOwnProperty(n)&&!ke(s)&&!mn(s)?t[n]=yl(i,s):t[n]=s}return t}const Ab=Symbol();function xb(t){return!vl(t)||!t.hasOwnProperty(Ab)}const{assign:ln}=Object;function Nb(t){return!!(ke(t)&&t.effect)}function Ob(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=z_(n.state.value[t]);return ln(u,r,Object.keys(o||{}).reduce((d,f)=>(d[f]=Dt(Z(()=>{ra(n);const p=n._s.get(t);return o[f].call(p,p)})),d),{}))}return l=Ip(t,c,e,n,s,!0),l.$reset=function(){const d=i?i():{};this.$patch(f=>{ln(f,d)})},l}function Ip(t,e,n={},s,i,r){let o;const a=ln({actions:{}},n),l={deep:!0};let c,u,d=Dt([]),f=Dt([]),p;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),Nt({});let y;function C(P){let E;c=u=!1,typeof P=="function"?(P(s.state.value[t]),E={type:xi.patchFunction,storeId:t,events:p}):(yl(s.state.value[t],P),E={type:xi.patchObject,payload:P,storeId:t,events:p});const L=y=Symbol();qo().then(()=>{y===L&&(c=!0)}),u=!0,ps(d,E,s.state.value[t])}const v=Cp;function g(){o.stop(),d=[],f=[],s._s.delete(t)}function b(P,E){return function(){ra(s);const L=Array.from(arguments),$=[],H=[];function F(J){$.push(J)}function Q(J){H.push(J)}ps(f,{args:L,name:P,store:R,after:F,onError:Q});let T;try{T=E.apply(this&&this.$id===t?this:R,L)}catch(J){throw ps(H,J),J}return T instanceof Promise?T.then(J=>(ps($,J),J)).catch(J=>(ps(H,J),Promise.reject(J))):(ps($,T),T)}}const I={_p:s,$id:t,$onAction:hd.bind(null,f),$patch:C,$reset:v,$subscribe(P,E={}){const L=hd(d,P,E.detached,()=>$()),$=o.run(()=>xs(()=>s.state.value[t],H=>{(E.flush==="sync"?u:c)&&P({storeId:t,type:xi.direct,events:p},H)},ln({},l,E)));return L},$dispose:g},R=xn(I);s._s.set(t,R);const N=s._e.run(()=>(o=Zf(),o.run(()=>e())));for(const P in N){const E=N[P];if(ke(E)&&!Nb(E)||mn(E))r||(m&&xb(E)&&(ke(E)?E.value=m[P]:yl(E,m[P])),s.state.value[t][P]=E);else if(typeof E=="function"){const L=b(P,E);N[P]=L,a.actions[P]=E}}return ln(R,N),ln(ue(R),N),Object.defineProperty(R,"$state",{get:()=>s.state.value[t],set:P=>{C(E=>{ln(E,P)})}}),s._p.forEach(P=>{ln(R,o.run(()=>P({store:R,app:s._a,pinia:s,options:a})))}),m&&r&&n.hydrate&&n.hydrate(R.$state,m),c=!0,u=!0,R}function gc(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=pt();return a=a||c&&dt(wp),a&&ra(a),a=Ep,a._s.has(s)||(r?Ip(s,e,i,a):Ob(s,i,a)),a._s.get(s)}return o.$id=s,o}var Oa=()=>Pb();/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window!="undefined";function Mb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Ma(t,e){const n={};for(const s in e){const i=e[s];n[s]=Tt(i)?i.map(t):t(i)}return n}const Ni=()=>{},Tt=Array.isArray,Db=/\/$/,Lb=t=>t.replace(Db,"");function Da(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Bb(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Fb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ub(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&js(e.matched[s],n.matched[i])&&Tp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$b(t[n],e[n]))return!1;return!0}function $b(t,e){return Tt(t)?gd(t,e):Tt(e)?gd(e,t):t===e}function gd(t,e){return Tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Bb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Yi;(function(t){t.pop="pop",t.push="push"})(Yi||(Yi={}));var Oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Oi||(Oi={}));function Hb(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lb(t)}const Wb=/^[^#]+#/;function jb(t,e){return t.replace(Wb,"#")+e}function Vb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const oa=()=>({left:window.pageXOffset,top:window.pageYOffset});function qb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Vb(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function md(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function zb(t,e){bl.set(t,e)}function Kb(t){const e=bl.get(t);return bl.delete(t),e}let Gb=()=>location.protocol+"//"+location.host;function Sp(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),pd(l,"")}return pd(n,t)+s+i}function Yb(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=Sp(t,location),m=n.value,y=e.value;let C=0;if(f){if(n.value=p,e.value=f,o&&o===m){o=null;return}C=y?f.position-y.position:0}else s(p);i.forEach(v=>{v(n.value,m,{delta:C,type:Yi.pop,direction:C?C>0?Oi.forward:Oi.back:Oi.unknown})})};function l(){o=n.value}function c(f){i.push(f);const p=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:oa()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function _d(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?oa():null}}function Qb(t){const{history:e,location:n}=window,s={value:Sp(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Gb()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=pe({},e.state,_d(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=pe({},i.value,e.state,{forward:l,scroll:oa()});r(u.current,u,!0);const d=pe({},_d(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Jb(t){t=Hb(t);const e=Qb(t),n=Yb(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:jb.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Xb(t){return typeof t=="string"||t&&typeof t=="object"}function Rp(t){return typeof t=="string"||typeof t=="symbol"}const nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kp=Symbol("");var vd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vd||(vd={}));function Vs(t,e){return pe(new Error,{type:t,[kp]:!0},e)}function Ut(t,e){return t instanceof Error&&kp in t&&(e==null||!!(t.type&e))}const yd="[^/]+?",Zb={sensitive:!1,strict:!1,start:!0,end:!0},eE=/[.+*?^${}()[\]/\\]/g;function tE(t,e){const n=pe({},Zb,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(eE,"\\$&"),p+=40;else if(f.type===1){const{value:m,repeatable:y,optional:C,regexp:v}=f;r.push({name:m,repeatable:y,optional:C});const g=v||yd;if(g!==yd){p+=10;try{new RegExp(`(${g})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${m}" (${g}): `+I.message)}}let b=y?`((?:${g})(?:/(?:${g}))*)`:`(${g})`;d||(b=C&&c.length<2?`(?:/${b})`:"/"+b),C&&(b+="?"),i+=b,p+=20,C&&(p+=-8),y&&(p+=-20),g===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",m=r[f-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:y,optional:C}=p,v=m in c?c[m]:"";if(Tt(v)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const g=Tt(v)?v.join("/"):v;if(!g)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=g}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function nE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=nE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(bd(s))return 1;if(bd(i))return-1}return i.length-s.length}function bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iE={type:0,value:""},rE=/[a-zA-Z0-9_]/;function oE(t){if(!t)return[[]];if(t==="/")return[[iE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:rE.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function aE(t,e,n){const s=tE(oE(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function lE(t,e){const n=[],s=new Map;e=Cd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,f){const p=!f,m=cE(u);m.aliasOf=f&&f.record;const y=Cd(e,u),C=[m];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const I of b)C.push(pe({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m}))}let v,g;for(const b of C){const{path:I}=b;if(d&&I[0]!=="/"){const R=d.record.path,N=R[R.length-1]==="/"?"":"/";b.path=d.record.path+(I&&N+I)}if(v=aE(b,d,y),f?f.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),p&&u.name&&!wd(v)&&o(u.name)),m.children){const R=m.children;for(let N=0;N<R.length;N++)r(R[N],v,f&&f.children[N])}f=f||v,l(v)}return g?()=>{o(g)}:Ni}function o(u){if(Rp(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&sE(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Pp(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!wd(u)&&s.set(u.record.name,u)}function c(u,d){let f,p={},m,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Vs(1,{location:u});y=f.record.name,p=pe(Ed(d.params,f.keys.filter(g=>!g.optional).map(g=>g.name)),u.params&&Ed(u.params,f.keys.map(g=>g.name))),m=f.stringify(p)}else if("path"in u)m=u.path,f=n.find(g=>g.re.test(m)),f&&(p=f.parse(m),y=f.record.name);else{if(f=d.name?s.get(d.name):n.find(g=>g.re.test(d.path)),!f)throw Vs(1,{location:u,currentLocation:d});y=f.record.name,p=pe({},d.params,u.params),m=f.stringify(p)}const C=[];let v=f;for(;v;)C.unshift(v.record),v=v.parent;return{name:y,path:m,params:p,matched:C,meta:dE(C)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ed(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dE(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Cd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Pp(t,e){return e.children.some(n=>n===t||Pp(t,n))}const Ap=/#/g,fE=/&/g,hE=/\//g,pE=/=/g,gE=/\?/g,xp=/\+/g,mE=/%5B/g,_E=/%5D/g,Np=/%5E/g,vE=/%60/g,Op=/%7B/g,yE=/%7C/g,Mp=/%7D/g,bE=/%20/g;function mc(t){return encodeURI(""+t).replace(yE,"|").replace(mE,"[").replace(_E,"]")}function EE(t){return mc(t).replace(Op,"{").replace(Mp,"}").replace(Np,"^")}function El(t){return mc(t).replace(xp,"%2B").replace(bE,"+").replace(Ap,"%23").replace(fE,"%26").replace(vE,"`").replace(Op,"{").replace(Mp,"}").replace(Np,"^")}function wE(t){return El(t).replace(pE,"%3D")}function CE(t){return mc(t).replace(Ap,"%23").replace(gE,"%3F")}function IE(t){return t==null?"":CE(t).replace(hE,"%2F")}function lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function TE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(xp," "),o=r.indexOf("="),a=lo(o<0?r:r.slice(0,o)),l=o<0?null:lo(r.slice(o+1));if(a in e){let c=e[a];Tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Id(t){let e="";for(let n in t){const s=t[n];if(n=wE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(s)?s.map(r=>r&&El(r)):[s&&El(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function SE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const RE=Symbol(""),Td=Symbol(""),aa=Symbol(""),_c=Symbol(""),wl=Symbol("");function hi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Vs(4,{from:n,to:e})):d instanceof Error?a(d):Xb(d)?a(Vs(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function La(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(kE(a)){const c=(a.__vccOpts||a)[e];c&&i.push(cn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Mb(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&cn(f,n,s,r,o)()}))}}return i}function kE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sd(t){const e=dt(aa),n=dt(_c),s=Z(()=>e.resolve(qn(t.to))),i=Z(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(js.bind(null,u));if(f>-1)return f;const p=Rd(l[c-2]);return c>1&&Rd(u)===p&&d[d.length-1].path!==p?d.findIndex(js.bind(null,l[c-2])):f}),r=Z(()=>i.value>-1&&NE(n.params,s.value.params)),o=Z(()=>i.value>-1&&i.value===n.matched.length-1&&Tp(n.params,s.value.params));function a(l={}){return xE(l)?e[qn(t.replace)?"replace":"push"](qn(t.to)).catch(Ni):Promise.resolve()}return{route:s,href:Z(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const PE=ei({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sd,setup(t,{slots:e}){const n=xn(Sd(t)),{options:s}=dt(aa),i=Z(()=>({[kd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[kd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ee("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),AE=PE;function xE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Tt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kd=(t,e,n)=>t!=null?t:e!=null?e:n,OE=ei({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dt(wl),i=Z(()=>t.route||s.value),r=dt(Td,0),o=Z(()=>{let c=qn(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Z(()=>i.value.matched[o.value]);Vr(Td,Z(()=>o.value+1)),Vr(RE,a),Vr(wl,i);const l=Nt();return xs(()=>[l.value,a.value,t.name],([c,u,d],[f,p,m])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!js(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Pd(n.default,{Component:f,route:c});const p=d.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,C=ee(f,pe({},m,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Pd(n.default,{Component:C,route:c})||C}}});function Pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ME=OE;function DE(t){const e=lE(t.routes,t),n=t.parseQuery||TE,s=t.stringifyQuery||Id,i=t.history,r=hi(),o=hi(),a=hi(),l=W_(nn);let c=nn;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ma.bind(null,k=>""+k),d=Ma.bind(null,IE),f=Ma.bind(null,lo);function p(k,j){let B,z;return Rp(k)?(B=e.getRecordMatcher(k),z=j):z=k,e.addRoute(z,B)}function m(k){const j=e.getRecordMatcher(k);j&&e.removeRoute(j)}function y(){return e.getRoutes().map(k=>k.record)}function C(k){return!!e.getRecordMatcher(k)}function v(k,j){if(j=pe({},j||l.value),typeof k=="string"){const h=Da(n,k,j.path),_=e.resolve({path:h.path},j),w=i.createHref(h.fullPath);return pe(h,_,{params:f(_.params),hash:lo(h.hash),redirectedFrom:void 0,href:w})}let B;if("path"in k)B=pe({},k,{path:Da(n,k.path,j.path).path});else{const h=pe({},k.params);for(const _ in h)h[_]==null&&delete h[_];B=pe({},k,{params:d(k.params)}),j.params=d(j.params)}const z=e.resolve(B,j),de=k.hash||"";z.params=u(f(z.params));const Te=Fb(s,pe({},k,{hash:EE(de),path:z.path})),ie=i.createHref(Te);return pe({fullPath:Te,hash:de,query:s===Id?SE(k.query):k.query||{}},z,{redirectedFrom:void 0,href:ie})}function g(k){return typeof k=="string"?Da(n,k,l.value.path):pe({},k)}function b(k,j){if(c!==k)return Vs(8,{from:j,to:k})}function I(k){return P(k)}function R(k){return I(pe(g(k),{replace:!0}))}function N(k){const j=k.matched[k.matched.length-1];if(j&&j.redirect){const{redirect:B}=j;let z=typeof B=="function"?B(k):B;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=g(z):{path:z},z.params={}),pe({query:k.query,hash:k.hash,params:"path"in z?{}:k.params},z)}}function P(k,j){const B=c=v(k),z=l.value,de=k.state,Te=k.force,ie=k.replace===!0,h=N(B);if(h)return P(pe(g(h),{state:typeof h=="object"?pe({},de,h.state):de,force:Te,replace:ie}),j||B);const _=B;_.redirectedFrom=j;let w;return!Te&&Ub(s,z,B)&&(w=Vs(16,{to:_,from:z}),On(z,z,!0,!1)),(w?Promise.resolve(w):L(_,z)).catch(S=>Ut(S)?Ut(S,2)?S:gt(S):be(S,_,z)).then(S=>{if(S){if(Ut(S,2))return P(pe({replace:ie},g(S.to),{state:typeof S.to=="object"?pe({},de,S.to.state):de,force:Te}),j||_)}else S=H(_,z,!0,ie,de);return $(_,z,S),S})}function E(k,j){const B=b(k,j);return B?Promise.reject(B):Promise.resolve()}function L(k,j){let B;const[z,de,Te]=LE(k,j);B=La(z.reverse(),"beforeRouteLeave",k,j);for(const h of z)h.leaveGuards.forEach(_=>{B.push(cn(_,k,j))});const ie=E.bind(null,k,j);return B.push(ie),gs(B).then(()=>{B=[];for(const h of r.list())B.push(cn(h,k,j));return B.push(ie),gs(B)}).then(()=>{B=La(de,"beforeRouteUpdate",k,j);for(const h of de)h.updateGuards.forEach(_=>{B.push(cn(_,k,j))});return B.push(ie),gs(B)}).then(()=>{B=[];for(const h of k.matched)if(h.beforeEnter&&!j.matched.includes(h))if(Tt(h.beforeEnter))for(const _ of h.beforeEnter)B.push(cn(_,k,j));else B.push(cn(h.beforeEnter,k,j));return B.push(ie),gs(B)}).then(()=>(k.matched.forEach(h=>h.enterCallbacks={}),B=La(Te,"beforeRouteEnter",k,j),B.push(ie),gs(B))).then(()=>{B=[];for(const h of o.list())B.push(cn(h,k,j));return B.push(ie),gs(B)}).catch(h=>Ut(h,8)?h:Promise.reject(h))}function $(k,j,B){for(const z of a.list())z(k,j,B)}function H(k,j,B,z,de){const Te=b(k,j);if(Te)return Te;const ie=j===nn,h=bs?history.state:{};B&&(z||ie?i.replace(k.fullPath,pe({scroll:ie&&h&&h.scroll},de)):i.push(k.fullPath,de)),l.value=k,On(k,j,B,ie),gt()}let F;function Q(){F||(F=i.listen((k,j,B)=>{if(!Rr.listening)return;const z=v(k),de=N(z);if(de){P(pe(de,{replace:!0}),z).catch(Ni);return}c=z;const Te=l.value;bs&&zb(md(Te.fullPath,B.delta),oa()),L(z,Te).catch(ie=>Ut(ie,12)?ie:Ut(ie,2)?(P(ie.to,z).then(h=>{Ut(h,20)&&!B.delta&&B.type===Yi.pop&&i.go(-1,!1)}).catch(Ni),Promise.reject()):(B.delta&&i.go(-B.delta,!1),be(ie,z,Te))).then(ie=>{ie=ie||H(z,Te,!1),ie&&(B.delta&&!Ut(ie,8)?i.go(-B.delta,!1):B.type===Yi.pop&&Ut(ie,20)&&i.go(-1,!1)),$(z,Te,ie)}).catch(Ni)}))}let T=hi(),J=hi(),se;function be(k,j,B){gt(k);const z=J.list();return z.length?z.forEach(de=>de(k,j,B)):console.error(k),Promise.reject(k)}function ge(){return se&&l.value!==nn?Promise.resolve():new Promise((k,j)=>{T.add([k,j])})}function gt(k){return se||(se=!k,Q(),T.list().forEach(([j,B])=>k?B(k):j()),T.reset()),k}function On(k,j,B,z){const{scrollBehavior:de}=t;if(!bs||!de)return Promise.resolve();const Te=!B&&Kb(md(k.fullPath,0))||(z||!B)&&history.state&&history.state.scroll||null;return qo().then(()=>de(k,j,Te)).then(ie=>ie&&qb(ie)).catch(ie=>be(ie,k,j))}const mt=k=>i.go(k);let Je;const ds=new Set,Rr={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,hasRoute:C,getRoutes:y,resolve:v,options:t,push:I,replace:R,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ge,install(k){const j=this;k.component("RouterLink",AE),k.component("RouterView",ME),k.config.globalProperties.$router=j,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>qn(l)}),bs&&!Je&&l.value===nn&&(Je=!0,I(i.location).catch(de=>{}));const B={};for(const de in nn)B[de]=Z(()=>l.value[de]);k.provide(aa,j),k.provide(_c,xn(B)),k.provide(wl,l);const z=k.unmount;ds.add(k),k.unmount=function(){ds.delete(k),ds.size<1&&(c=nn,F&&F(),F=null,l.value=nn,Je=!1,se=!1),z()}}};return Rr}function gs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function LE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>js(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>js(c,l))||i.push(l))}return[n,s,i]}function LP(){return dt(aa)}function FP(){return dt(_c)}var FE=[{path:"/login",component:()=>He(()=>import("./MainLayout.86acace1.js"),["assets/MainLayout.86acace1.js","assets/MainLayout.df7762aa.css","assets/QPage.9ea109dd.js","assets/QLayout.e8ed1f52.js","assets/scroll.9c3e2207.js"]),children:[{path:"",name:"login",component:()=>He(()=>import("./LoginPage.7768ab61.js"),["assets/LoginPage.7768ab61.js","assets/QForm.c26b8b90.js","assets/use-dark.5e043d57.js","assets/QCard.e47de17a.js"])}]},{path:"/forgot-password",component:()=>He(()=>import("./MainLayout.86acace1.js"),["assets/MainLayout.86acace1.js","assets/MainLayout.df7762aa.css","assets/QPage.9ea109dd.js","assets/QLayout.e8ed1f52.js","assets/scroll.9c3e2207.js"]),children:[{name:"passwordReset",path:"",component:()=>He(()=>import("./ResetPage.33993fb8.js"),["assets/ResetPage.33993fb8.js","assets/QForm.c26b8b90.js","assets/use-dark.5e043d57.js","assets/QCard.e47de17a.js"])}]},{path:"/registration",component:()=>He(()=>import("./MainLayout.86acace1.js"),["assets/MainLayout.86acace1.js","assets/MainLayout.df7762aa.css","assets/QPage.9ea109dd.js","assets/QLayout.e8ed1f52.js","assets/scroll.9c3e2207.js"]),children:[{name:"registration",path:"",component:()=>He(()=>import("./RegistrationPage.5e21f685.js"),["assets/RegistrationPage.5e21f685.js","assets/QForm.c26b8b90.js","assets/use-dark.5e043d57.js","assets/QCard.e47de17a.js"])}]}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw ti(e)},ti=function(t){return new Error("Firebase Database ("+Dp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[d],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Fp=function(t){const e=Lp(t);return vc.encodeByteArray(e,!0)},co=function(t){return Fp(t).replace(/\./g,"")},uo=function(t){try{return vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){return Up(void 0,t)}function Up(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BE(n)||(t[n]=Up(t[n],e[n]));return t}function BE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function HE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WE(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bp(){return Dp.NODE_ADMIN===!0}function jE(){return typeof indexedDB=="object"}function VE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function qE(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=()=>qE().__FIREBASE_DEFAULTS__,KE=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GE=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uo(t[1]);return e&&JSON.parse(e)},bc=()=>{try{return zE()||KE()||GE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hp=t=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YE=t=>{const e=Hp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},QE=()=>{var t;return(t=bc())===null||t===void 0?void 0:t.config},Wp=t=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[co(JSON.stringify(n)),co(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE="FirebaseError";class Nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=XE,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ZE(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,a,s)}}function ZE(t,e){return t.replace(ew,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ew=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){return JSON.parse(t)}function Me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Qi(uo(r[0])||""),n=Qi(uo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},tw=function(t){const e=jp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nw=function(t){const e=jp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ad(r)&&Ad(o)){if(!ho(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ad(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function iw(t,e){const n=new rw(t,e);return n.subscribe.bind(n)}class rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Fa),i.error===void 0&&(i.error=Fa),i.complete===void 0&&(i.complete=Fa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}function la(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,O(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ca=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uw(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cw(t){return t===Un?void 0:t}function uw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const fw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},hw=ve.INFO,pw={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},gw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pw[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=hw,this._logHandler=gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const mw=(t,e)=>e.some(n=>t instanceof n);let xd,Nd;function _w(){return xd||(xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vp=new WeakMap,Il=new WeakMap,qp=new WeakMap,Ua=new WeakMap,wc=new WeakMap;function yw(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vp.set(n,t)}).catch(()=>{}),wc.set(e,t),e}function bw(t){if(Il.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Il.set(t,e)}let Tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ew(t){Tl=t(Tl)}function ww(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($a(this),e,...n);return qp.set(s,e.sort?e.sort():[e]),vn(s)}:vw().includes(t)?function(...e){return t.apply($a(this),e),vn(Vp.get(this))}:function(...e){return vn(t.apply($a(this),e))}}function Cw(t){return typeof t=="function"?ww(t):(t instanceof IDBTransaction&&bw(t),mw(t,_w())?new Proxy(t,Tl):t)}function vn(t){if(t instanceof IDBRequest)return yw(t);if(Ua.has(t))return Ua.get(t);const e=Cw(t);return e!==t&&(Ua.set(t,e),wc.set(e,t)),e}const $a=t=>wc.get(t);function Iw(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(vn(o.result),l.oldVersion,l.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Tw=["get","getKey","getAll","getAllKeys","count"],Sw=["put","add","delete","clear"],Ba=new Map;function Od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ba.get(e))return Ba.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tw.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ba.set(e,r),r}Ew(t=>({...t,get:(e,n,s)=>Od(e,n)||t.get(e,n,s),has:(e,n)=>!!Od(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sl="@firebase/app",Md="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Ec("@firebase/app"),Pw="@firebase/app-compat",Aw="@firebase/analytics-compat",xw="@firebase/analytics",Nw="@firebase/app-check-compat",Ow="@firebase/app-check",Mw="@firebase/auth",Dw="@firebase/auth-compat",Lw="@firebase/database",Fw="@firebase/database-compat",Uw="@firebase/functions",$w="@firebase/functions-compat",Bw="@firebase/installations",Hw="@firebase/installations-compat",Ww="@firebase/messaging",jw="@firebase/messaging-compat",Vw="@firebase/performance",qw="@firebase/performance-compat",zw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Gw="@firebase/storage",Yw="@firebase/storage-compat",Qw="@firebase/firestore",Jw="@firebase/firestore-compat",Xw="firebase",Zw="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="[DEFAULT]",eC={[Sl]:"fire-core",[Pw]:"fire-core-compat",[xw]:"fire-analytics",[Aw]:"fire-analytics-compat",[Ow]:"fire-app-check",[Nw]:"fire-app-check-compat",[Mw]:"fire-auth",[Dw]:"fire-auth-compat",[Lw]:"fire-rtdb",[Fw]:"fire-rtdb-compat",[Uw]:"fire-fn",[$w]:"fire-fn-compat",[Bw]:"fire-iid",[Hw]:"fire-iid-compat",[Ww]:"fire-fcm",[jw]:"fire-fcm-compat",[Vw]:"fire-perf",[qw]:"fire-perf-compat",[zw]:"fire-rc",[Kw]:"fire-rc-compat",[Gw]:"fire-gcs",[Yw]:"fire-gcs-compat",[Qw]:"fire-fst",[Jw]:"fire-fst-compat","fire-js":"fire-js",[Xw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map,kl=new Map;function tC(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zs(t){const e=t.name;if(kl.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;kl.set(e,t);for(const n of po.values())tC(n,t);return!0}function Cc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yn=new hr("app","Firebase",nC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=Zw;function zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=QE()),!n)throw yn.create("no-options");const r=po.get(i);if(r){if(ho(n,r.options)&&ho(s,r.config))return r;throw yn.create("duplicate-app",{appName:i})}const o=new dw(i);for(const l of kl.values())o.addComponent(l);const a=new sC(n,s,o);return po.set(i,a),a}function Kp(t=Rl){const e=po.get(t);if(!e&&t===Rl)return zp();if(!e)throw yn.create("no-app",{appName:t});return e}function bn(t,e,n){var s;let i=(s=eC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}zs(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="firebase-heartbeat-database",rC=1,Ji="firebase-heartbeat-store";let Ha=null;function Gp(){return Ha||(Ha=Iw(iC,rC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ji)}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function oC(t){var e;try{return(await Gp()).transaction(Ji).objectStore(Ji).get(Yp(t))}catch(n){if(n instanceof Nn)es.warn(n.message);else{const s=yn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});es.warn(s.message)}}}async function Dd(t,e){var n;try{const i=(await Gp()).transaction(Ji,"readwrite");return await i.objectStore(Ji).put(e,Yp(t)),i.done}catch(s){if(s instanceof Nn)es.warn(s.message);else{const i=yn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});es.warn(i.message)}}}function Yp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1024,lC=30*24*60*60*1e3;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=lC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ld(),{heartbeatsToSend:n,unsentEntries:s}=uC(this._heartbeatsCache.heartbeats),i=co(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ld(){return new Date().toISOString().substring(0,10)}function uC(t,e=aC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fd(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jE()?VE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fd(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){zs(new Zn("platform-logger",e=>new Rw(e),"PRIVATE")),zs(new Zn("heartbeat",e=>new cC(e),"PRIVATE")),bn(Sl,Md,t),bn(Sl,Md,"esm2017"),bn("fire-js","")}fC("");function Ic(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Qp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hC=Qp,Jp=new hr("auth","Firebase",Qp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Ec("@firebase/auth");function zr(t,...e){Ud.logLevel<=ve.ERROR&&Ud.error(`Auth (${pr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,...e){throw Tc(t,...e)}function Ot(t,...e){return Tc(t,...e)}function pC(t,e,n){const s=Object.assign(Object.assign({},hC()),{[e]:n});return new hr("auth","Firebase",s).create(e,{appName:t.name})}function Tc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Jp.create(t,...e)}function Y(t,e,...n){if(!t)throw Tc(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zr(e),new Error(e)}function Yt(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map;function jt(t){Yt(t instanceof Function,"Expected a class definition");let e=$d.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$d.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t,e){const n=Cc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ho(r,e!=null?e:{}))return i;St(i,"already-initialized")}return n.initialize({options:e})}function mC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _C(){return Bd()==="http:"||Bd()==="https:"}function Bd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_C()||HE()||"connection"in navigator)?navigator.onLine:!0}function yC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=yc()||$p()}get(){return vC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=new gr(3e4,6e4);function si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ii(t,e,n,s,i={}){return Zp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Xp.fetch()(eg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Zp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bC),e);try{const i=new wC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ur(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ur(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ur(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pC(t,u,c);St(t,u)}}catch(i){if(i instanceof Nn)throw i;St(t,"network-request-failed")}}async function mr(t,e,n,s,i={}){const r=await ii(t,e,n,s,i);return"mfaPendingCredential"in r&&St(t,"multi-factor-auth-required",{_serverResponse:r}),r}function eg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Sc(t.config,i):`${t.config.apiScheme}://${i}`}class wC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),EC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ur(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ot(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function IC(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TC(t,e=!1){const n=Qe(t),s=await n.getIdToken(e),i=Rc(s);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Mi(Wa(i.auth_time)),issuedAtTime:Mi(Wa(i.iat)),expirationTime:Mi(Wa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wa(t){return Number(t)*1e3}function Rc(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const r=uo(s);return r?JSON.parse(r):(zr("Failed to decode base64 JWT payload"),null)}catch(r){return zr("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function SC(t){const e=Rc(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nn&&RC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function RC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Xi(t,IC(n,{idToken:s}));Y(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xC(r.providerUserInfo):[],a=AC(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new tg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function PC(t){const e=Qe(t);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function xC(t){return t.map(e=>{var{providerId:n}=e,s=Ic(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){const n=await Zp(t,{},async()=>{const s=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=eg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):SC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await NC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Zi;return s&&(Y(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Y(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ic(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xi(this,CC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:I,isAnonymous:R,providerData:N,stsTokenManager:P}=n;Y(b&&P,e,"internal-error");const E=Zi.fromJSON(this.name,P);Y(typeof b=="string",e,"internal-error"),sn(d,e.name),sn(f,e.name),Y(typeof I=="boolean",e,"internal-error"),Y(typeof R=="boolean",e,"internal-error"),sn(p,e.name),sn(m,e.name),sn(y,e.name),sn(C,e.name),sn(v,e.name),sn(g,e.name);const L=new Kn({uid:b,auth:e,email:f,emailVerified:I,displayName:d,isAnonymous:R,photoURL:m,phoneNumber:p,tenantId:y,stsTokenManager:E,createdAt:v,lastLoginAt:g});return N&&Array.isArray(N)&&(L.providerData=N.map($=>Object.assign({},$))),C&&(L._redirectEventId=C),L}static async _fromIdTokenResponse(e,n,s=!1){const i=new Zi;i.updateFromServerResponse(n);const r=new Kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await go(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ng.type="NONE";const Hd=ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Kr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Os(jt(Hd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||jt(Hd);const o=Kr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Kn._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Os(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Os(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ag(e))return"Blackberry";if(lg(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||ig(e))&&!e.includes("edge/"))return"Chrome";if(og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function sg(t=qe()){return/firefox\//i.test(t)}function kc(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ig(t=qe()){return/crios\//i.test(t)}function rg(t=qe()){return/iemobile/i.test(t)}function og(t=qe()){return/android/i.test(t)}function ag(t=qe()){return/blackberry/i.test(t)}function lg(t=qe()){return/webos/i.test(t)}function ua(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OC(t=qe()){var e;return ua(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MC(){return WE()&&document.documentMode===10}function cg(t=qe()){return ua(t)||og(t)||lg(t)||ag(t)||/windows phone/i.test(t)||rg(t)}function DC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e=[]){let n;switch(t){case"Browser":n=Wd(qe());break;case"Worker":n=`${Wd(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jd(this),this.idTokenSubscription=new jd(this),this.beforeStateQueue=new LC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await go(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function _r(t){return Qe(t)}class jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function UC(t,e,n){const s=_r(t);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=dg(e),{host:o,port:a}=$C(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BC()}function dg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $C(t){const e=dg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Vd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Vd(o)}}}function Vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function HC(t,e){return ii(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e){return mr(t,"POST","/v1/accounts:signInWithPassword",si(t,e))}async function jC(t,e){return ii(t,"POST","/v1/accounts:sendOobCode",si(t,e))}async function VC(t,e){return jC(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return mr(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}async function zC(t,e){return mr(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Pc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new er(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new er(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return WC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qC(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return HC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zC(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return mr(t,"POST","/v1/accounts:signInWithIdp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="http://localhost";class ts extends Pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ic(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ts(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:KC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YC(t){const e=Ci(Ii(t)).link,n=e?Ci(Ii(e)).deep_link_id:null,s=Ci(Ii(t)).deep_link_id;return(s?Ci(Ii(s)).link:null)||s||n||e||t}class Ac{constructor(e){var n,s,i,r,o,a;const l=Ci(Ii(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=GC((i=l.mode)!==null&&i!==void 0?i:null);Y(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=YC(e);try{return new Ac(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(e,n){return er._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ac.parseLink(n);return Y(s,"argument-error"),er._fromEmailAndCode(e,s.code,s.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends vr{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.FACEBOOK_SIGN_IN_METHOD="facebook.com";un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return dn.credential(n,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends vr{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends vr{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(t,e){return mr(t,"POST","/v1/accounts:signUp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Kn._fromIdTokenResponse(e,s,i),o=qd(s);return new ns({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=qd(s);return new ns({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Nn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new mo(e,n,s,i)}}function hg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(t,r,e,s):r})}async function JC(t,e,n=!1){const s=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const o=await Xi(t,hg(i,r,e,t),n);Y(o.idToken,i,"internal-error");const a=Rc(o.idToken);Y(a,i,"internal-error");const{sub:l}=a;return Y(t.uid===l,i,"user-mismatch"),ns._forOperation(t,r,o)}catch(o){throw((s=o)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&St(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e,n=!1){const s="signIn",i=await hg(t,s,e),r=await ns._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function ZC(t,e){return pg(_r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e,n){var s;Y(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),Y(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Y(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Y(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(t,e,n){const s=Qe(t),i={requestType:"PASSWORD_RESET",email:e};n&&eI(s,i,n),await VC(s,i)}async function nI(t,e,n){const s=_r(t),i=await QC(s,{returnSecureToken:!0,email:e,password:n}),r=await ns._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function sI(t,e,n){return ZC(Qe(t),ri.credential(e,n))}function iI(t,e,n,s){return Qe(t).onIdTokenChanged(e,n,s)}function rI(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(){const t=qe();return kc(t)||ua(t)}const aI=1e3,lI=10;class mg extends gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oI()&&DC(),this.fallbackToPolling=cg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);MC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mg.type="LOCAL";const cI=mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_g.type="SESSION";const vg=_g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new da(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await uI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=xc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function fI(t){Mt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){return typeof Mt().WorkerGlobalScope!="undefined"&&typeof Mt().importScripts=="function"}async function hI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gI(){return yg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="firebaseLocalStorageDb",mI=1,vo="firebaseLocalStorage",Eg="fbase_key";class yr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fa(t,e){return t.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function _I(){const t=indexedDB.deleteDatabase(bg);return new yr(t).toPromise()}function Al(){const t=indexedDB.open(bg,mI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vo,{keyPath:Eg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vo)?e(s):(s.close(),await _I(),e(await Al()))})})}async function zd(t,e,n){const s=fa(t,!0).put({[Eg]:e,value:n});return new yr(s).toPromise()}async function vI(t,e){const n=fa(t,!1).get(e),s=await new yr(n).toPromise();return s===void 0?null:s.value}function Kd(t,e){const n=fa(t,!0).delete(e);return new yr(n).toPromise()}const yI=800,bI=3;class wg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(gI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hI(),!this.activeServiceWorker)return;this.sender=new dI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await zd(e,_o,"1"),await Kd(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>vI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fa(i,!1).getAll();return new yr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wg.type="LOCAL";const EI=wg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function CI(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ot("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",wI().appendChild(s)})}function II(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e){return e?jt(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SI(t){return pg(t.auth,new Nc(t),t.bypassAuthState)}function RI(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),XC(n,new Nc(t),t.bypassAuthState)}async function kI(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),JC(n,new Nc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SI;case"linkViaPopup":case"linkViaRedirect":return kI;case"reauthViaPopup":case"reauthViaRedirect":return RI;default:St(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new gr(2e3,1e4);class Cs extends Cg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,PI.get())};e()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="pendingRedirect",Gr=new Map;class xI extends Cg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const s=await NI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NI(t,e){const n=DI(e),s=MI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function OI(t,e){Gr.set(t._key(),e)}function MI(t){return jt(t._redirectPersistence)}function DI(t){return Kr(AI,t.config.apiKey,t.name)}async function LI(t,e,n=!1){const s=_r(t),i=TI(s,e),o=await new xI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=10*60*1e3;class UI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$I(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ig(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ig({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $I(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ig(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WI=/^https?/;async function jI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await BI(t);for(const n of e)try{if(VI(n))return}catch{}St(t,"unauthorized-domain")}function VI(t){const e=Pl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!WI.test(n))return!1;if(HI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new gr(3e4,6e4);function Yd(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zI(t){return new Promise((e,n)=>{var s,i,r;function o(){Yd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yd(),n(Ot(t,"network-request-failed"))},timeout:qI.get()})}if(!((i=(s=Mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Mt().gapi)===null||r===void 0)&&r.load)o();else{const a=II("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},CI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yr=null,e})}let Yr=null;function KI(t){return Yr=Yr||zI(t),Yr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new gr(5e3,15e3),YI="__/auth/iframe",QI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZI(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sc(e,QI):`https://${t.config.authDomain}/${YI}`,s={apiKey:e.apiKey,appName:t.name,v:pr},i=XI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ni(s).slice(1)}`}async function eT(t){const e=await KI(t),n=Mt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:ZI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Mt().setTimeout(()=>{r(o)},GI.get());function l(){Mt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nT=500,sT=600,iT="_blank",rT="http://localhost";class Qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oT(t,e,n,s=nT,i=sT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=qe().toLowerCase();n&&(a=ig(c)?iT:n),sg(c)&&(e=e||rT,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(OC(c)&&a!=="_self")return aT(e||"",a),new Qd(null);const d=window.open(e||"",a,u);Y(d,t,"popup-blocked");try{d.focus()}catch{}return new Qd(d)}function aT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="__/auth/handler",cT="emulator/auth/handler";function Jd(t,e,n,s,i,r){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:pr,eventId:i};if(e instanceof fg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof vr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${uT(t)}?${ni(a).slice(1)}`}function uT({config:t}){return t.emulator?Sc(t,cT):`https://${t.authDomain}/${lT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class dT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vg,this._completeRedirectFn=LI,this._overrideRedirectResult=OI}async _openPopup(e,n,s,i){var r;Yt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Jd(e,n,s,Pl(),i);return oT(e,o,xc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),fI(Jd(e,n,s,Pl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await eT(e),s=new UI(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ja];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cg()||kc()||ua()}}const fT=dT;var Xd="@firebase/auth",Zd="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gT(t){zs(new Zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{Y(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),Y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ug(t)},u=new FC(a,l,c);return mC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),zs(new Zn("auth-internal",e=>{const n=_r(e.getProvider("auth").getImmediate());return(s=>new hT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Xd,Zd,pT(t)),bn(Xd,Zd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=5*60,_T=Wp("authIdTokenMaxAge")||mT;let ef=null;const vT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_T)return;const i=n==null?void 0:n.token;ef!==i&&(ef=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yT(t=Kp()){const e=Cc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gC(t,{popupRedirectResolver:fT,persistence:[EI,cI,vg]}),s=Wp("authTokenSyncURL");if(s){const r=vT(s);rI(n,r,()=>r(n.currentUser)),iI(n,o=>r(o))}const i=Hp("auth");return i&&UC(n,`http://${i}`),n}gT("Browser");var bT="firebase",ET="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(bT,ET,"app");const tf="@firebase/database",nf="0.13.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tg="";function wT(t){Tg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CT(e)}}catch{}return new IT},jn=Sg("localStorage"),xl=Sg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Ec("@firebase/database"),TT=function(){let t=1;return function(){return t++}}(),Rg=function(t){const e=aw(t),n=new sw;n.update(e);const s=n.digest();return vc.encodeByteArray(s)},br=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=br.apply(null,s):typeof s=="object"?e+=Me(s):e+=s,e+=" "}return e};let Gn=null,sf=!0;const ST=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ds.logLevel=ve.VERBOSE,Gn=Ds.log.bind(Ds),e&&xl.set("logging_enabled",!0)):typeof t=="function"?Gn=t:(Gn=null,xl.remove("logging_enabled"))},Ue=function(...t){if(sf===!0&&(sf=!1,Gn===null&&xl.get("logging_enabled")===!0&&ST(!0)),Gn){const e=br.apply(null,t);Gn(e)}},Er=function(t){return function(...e){Ue(t,...e)}},Nl=function(...t){const e="FIREBASE INTERNAL ERROR: "+br(...t);Ds.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${br(...t)}`;throw Ds.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+br(...t);Ds.warn(e)},RT=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Oc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ks="[MIN_NAME]",ss="[MAX_NAME]",cs=function(t,e){if(t===e)return 0;if(t===Ks||e===ss)return-1;if(e===Ks||t===ss)return 1;{const n=rf(t),s=rf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},PT=function(t,e){return t===e?0:t<e?-1:1},pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Me(e))},Mc=function(t){if(typeof t!="object"||t===null)return Me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Me(e[s]),n+=":",n+=Mc(t[e[s]]);return n+="}",n},kg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Pg=function(t){O(!Oc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},AT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const OT=new RegExp("^-?(0*)\\d{1,10}$"),MT=-2147483648,DT=2147483647,rf=function(t){if(OT.test(t)){const e=Number(t);if(e>=MT&&e<=DT)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},LT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Di=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class Ls{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ls.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="5",Ag="v",xg="s",Ng="r",Og="f",Mg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dg="ls",Lg="p",Ol="ac",Fg="websocket",Ug="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $T(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Bg(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let s;if(e===Fg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ug)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$T(t)&&(n.ns=t.namespace);const i=[];return $e(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.counters_={}}incrementCounter(e,n=1){Lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $E(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={},qa={};function Lc(t){const e=t.toString();return Va[e]||(Va[e]=new BT),Va[e]}function HT(t,e){const n=t.toString();return qa[n]||(qa[n]=e()),qa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&oi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="start",jT="close",VT="pLPCommand",qT="pRTLPCB",Hg="id",Wg="pw",jg="ser",zT="cb",KT="seg",GT="ts",YT="d",QT="dframe",Vg=1870,qg=30,JT=Vg-qg,XT=25e3,ZT=3e4;class Is{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Er(e),this.stats_=Lc(n),this.urlFn=l=>(this.appCheckToken&&(l[Ol]=this.appCheckToken),Bg(n,Ug,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZT)),kT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===of)this.id=a,this.password=l;else if(o===jT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[of]="t",s[jg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zT]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ag]=Dc,this.transportSessionId&&(s[xg]=this.transportSessionId),this.lastSessionId&&(s[Dg]=this.lastSessionId),this.applicationId&&(s[Lg]=this.applicationId),this.appCheckToken&&(s[Ol]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Mg.test(location.hostname)&&(s[Ng]=Og);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Is.forceAllow_=!0}static forceDisallow(){Is.forceDisallow_=!0}static isAvailable(){return Is.forceAllow_?!0:!Is.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!AT()&&!xT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Fp(n),i=kg(s,JT);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[QT]="t",s[Hg]=e,s[Wg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TT(),window[VT+this.uniqueCallbackIdentifier]=e,window[qT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fc.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;r='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ue("frame writing exception"),a.stack&&Ue(a.stack),Ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hg]=this.myID,e[Wg]=this.myPW,e[jg]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qg+s.length<=Vg;){const o=this.pendingSegs.shift();s=s+"&"+KT+i+"="+o.seg+"&"+GT+i+"="+o.ts+"&"+YT+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(XT)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=16384,tS=45e3;let yo=null;typeof MozWebSocket!="undefined"?yo=MozWebSocket:typeof WebSocket!="undefined"&&(yo=WebSocket);class bt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Er(this.connId),this.stats_=Lc(n),this.connURL=bt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ag]=Dc,typeof location!="undefined"&&location.hostname&&Mg.test(location.hostname)&&(o[Ng]=Og),n&&(o[xg]=n),s&&(o[Dg]=s),i&&(o[Ol]=i),r&&(o[Lg]=r),Bg(e,Fg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jn.set("previous_websocket_failure",!0);try{let s;Bp(),this.mySock=new yo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&yo!==null&&!bt.forceDisallow_}static previouslyFailed(){return jn.isInMemoryStorage||jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Qi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kg(n,eS);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Is,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=bt&&bt.isAvailable();let s=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[bt];else{const i=this.transports_=[];for(const r of tr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);tr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=6e4,sS=5e3,iS=10*1024,rS=100*1024,za="t",af="d",oS="s",lf="r",aS="e",cf="o",uf="a",df="n",ff="p",lS="h";class cS{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Er("c:"+this.id+":"),this.transportManager_=new tr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Di(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(za in e){const n=e[za];n===uf?this.upgradeIfSecondaryHealthy_():n===lf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=pi("t",e),s=pi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ff,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:df,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=pi("t",e),s=pi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=pi(za,e);if(af in e){const s=e[af];if(n===lS)this.onHandshake_(s);else if(n===df){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oS?this.onConnectionShutdown_(s):n===lf?this.onReset_(s):n===aS?Nl("Server Error: "+s):n===cf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dc!==s&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Di(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Di(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ff,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends Kg{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bo}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=32,pf=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new _e("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kn(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function Uc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Gg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new _e(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return Ke(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dS(t,e){const n=nr(t,0),s=nr(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=cs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function $c(t,e){if(kn(t)!==kn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ct(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kn(t)>kn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class fS{constructor(e,n){this.errorPrefix_=n,this.parts_=nr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ca(this.parts_[s]);Yg(this)}}function hS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ca(e),Yg(t)}function pS(t){const e=t.parts_.pop();t.byteLength_-=ca(e),t.parts_.length>0&&(t.byteLength_-=1)}function Yg(t){if(t.byteLength_>pf)throw new Error(t.errorPrefix_+"has a key path longer than "+pf+" bytes ("+t.byteLength_+").");if(t.parts_.length>hf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hf+") or object contains a cycle "+$n(t))}function $n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends Kg{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Bc}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=1e3,gS=60*5*1e3,gf=30*1e3,mS=1.3,_S=3e4,vS="server_kill",mf=3;class zt extends zg{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zt.nextPersistentConnectionId_++,this.log_=Er("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gi,this.maxReconnectDelay_=gS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Bp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Me(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new fr,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;zt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Lt(e,"w")){const s=qs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nl("Unrecognized action received from server: "+Me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_S&&(this.reconnectDelay_=gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ue("getToken() completed but was canceled"):(Ue("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new cS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ye(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(vS)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ye(d),l())}}}interrupt(e){Ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cl(this.interruptReasons_)&&(this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mf&&(this.reconnectDelay_=gf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Tg.replace(/\./g,"-")]=1,yc()?e["framework.cordova"]=1:$p()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return Cl(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Ks,e),i=new oe(Ks,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r;class Qg extends ha{static get __EMPTY_NODE(){return $r}static set __EMPTY_NODE(e){$r=e}compare(e,n){return cs(e.name,n.name)}isDefinedOn(e){throw ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ss,$r)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,$r)}toString(){return".key"}}const Fs=new Qg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Le.RED,this.left=i!=null?i:tt.EMPTY_NODE,this.right=r!=null?r:tt.EMPTY_NODE}copy(e,n,s,i,r){return new Le(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class yS{copy(e,n,s,i,r){return this}insert(e,n,s){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class tt{constructor(e,n=tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Br(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Br(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Br(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Br(this.root_,null,this.comparator_,!0,e)}}tt.EMPTY_NODE=new yS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e){return cs(t.name,e.name)}function Hc(t,e){return cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ml;function ES(t){Ml=t}const Jg=function(t){return typeof t=="number"?"number:"+Pg(t):"string:"+t},Xg=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Lt(e,".sv"),"Priority must be a string or number.")}else O(t===Ml||t.isEmpty(),"priority of unexpected type.");O(t===Ml||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _f;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xg(this.priorityNode_)}static set __childrenNodeConstructor(e){_f=e}static get __childrenNodeConstructor(){return _f}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:re(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(O(s!==".priority"||kn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Pg(this.value_):e+=this.value_,this.lazyHash_=Rg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),r=De.VALUE_TYPE_ORDER.indexOf(s);return O(i>=0,"Unknown leaf type: "+n),O(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zg,em;function wS(t){Zg=t}function CS(t){em=t}class IS extends ha{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?cs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ss,new De("[PRIORITY-POST]",em))}makePost(e,n){const s=Zg(e);return new oe(n,new De("[PRIORITY-POST]",s))}toString(){return".priority"}}const Pe=new IS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=Math.log(2);class SS{constructor(e){const n=r=>parseInt(Math.log(r)/TS,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Eo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Le(f,d.node,Le.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=i(l,p),y=i(p+1,c);return d=t[p],f=n?n(d):d,new Le(f,d.node,Le.BLACK,m,y)}},r=function(l){let c=null,u=null,d=t.length;const f=function(m,y){const C=d-m,v=d;d-=m;const g=i(C+1,v),b=t[C],I=n?n(b):b;p(new Le(I,b.node,y,null,g))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),C=Math.pow(2,l.count-(m+1));y?f(C,Le.BLACK):(f(C,Le.BLACK),f(C,Le.RED))}return u},o=new SS(t.length),a=r(o);return new tt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;const ms={};class Vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(ms&&Pe,"ChildrenNode.ts has not been loaded"),Ka=Ka||new Vt({".priority":ms},{".priority":Pe}),Ka}get(e){const n=qs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof tt?n:null}hasIndex(e){return Lt(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Eo(s,e.getCompare()):a=ms;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Vt(u,c)}addToIndexes(e,n){const s=fo(this.indexes_,(i,r)=>{const o=qs(this.indexSet_,r);if(O(o,"Missing index implementation for "+r),i===ms)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Eo(a,o.getCompare())}else return ms;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new Vt(s,this.indexSet_)}removeFromIndexes(e,n){const s=fo(this.indexes_,i=>{if(i===ms)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new Vt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mi;class X{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Xg(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mi||(mi=new X(new tt(Hc),null,Vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mi}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mi:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mi:this.priorityNode_;return new X(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{O(re(e)!==".priority"||kn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Pe,(o,a)=>{n[o]=a.val(e),s++,r&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jg(this.getPriority().val())+":"),this.forEachChild(Pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Rg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wr?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Pe),i=n.getIterator(Pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class RS extends X{constructor(){super(new tt(Hc),X.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const wr=new RS;Object.defineProperties(oe,{MIN:{value:new oe(Ks,X.EMPTY_NODE)},MAX:{value:new oe(ss,wr)}});Qg.__EMPTY_NODE=X.EMPTY_NODE;De.__childrenNodeConstructor=X;ES(wr);CS(wr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=!0;function Ne(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,Ne(e))}if(!(t instanceof Array)&&kS){const n=[];let s=!1;if($e(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ne(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return X.EMPTY_NODE;const r=Eo(n,bS,o=>o.name,Hc);if(s){const o=Eo(n,Pe.getCompare());return new X(r,Ne(e),new Vt({".priority":o},{".priority":Pe}))}else return new X(r,Ne(e),Vt.Default)}else{let n=X.EMPTY_NODE;return $e(t,(s,i)=>{if(Lt(t,s)&&s.substring(0,1)!=="."){const r=Ne(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ne(e))}}wS(Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS extends ha{constructor(e){super(),this.indexPath_=e,O(!ae(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?cs(e.name,n.name):r}makePost(e,n){const s=Ne(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,wr);return new oe(ss,e)}toString(){return nr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS extends ha{compare(e,n){const s=e.node.compareTo(n.node);return s===0?cs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=Ne(e);return new oe(n,s)}toString(){return".value"}}const xS=new AS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",NS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=vf.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=vf.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){return{type:"value",snapshotNode:t}}function Gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ir(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(sr(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gs(n,s)):o.trackChildChange(ir(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(sr(i,r))}),n.isLeafNode()||n.forEachChild(Pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ir(i,r,o))}else s.trackChildChange(Gs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.indexedFilter_=new Wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rr.getStartPost_(e),this.endPost_=rr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new oe(n,s))||(s=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const r=this;return n.forEachChild(Pe,(o,a)=>{r.matches(new oe(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.rangedFilter_=new rr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new oe(n,s))||(s=X.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let r,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(f,p)=>d(p,f)}else l=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let c=0,u=!1;for(;l.hasNext();){const d=l.getNext();!u&&a(r,d)<=0&&(u=!0),u&&c<this.limit_&&a(d,o)<=0?c++:i=i.updateImmediateChild(d.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const l=new oe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ir(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(sr(n,d));const y=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Gs(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(sr(c.name,c.node)),r.trackChildChange(Gs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ks}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new jc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DS(t){return t.loadsAllData()?new Wc(t.getIndex()):t.hasLimit()?new MS(t):new rr(t)}function yf(t){const e={};if(t.isDefault())return e;let n;return t.index_===Pe?n="$priority":t.index_===xS?n="$value":t.index_===Fs?n="$key":(O(t.index_ instanceof PS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Me(n),t.startSet_&&(e.startAt=Me(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Me(t.indexStartName_))),t.endSet_&&(e.endAt=Me(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Me(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends zg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Er("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wo.getListenId_(e,s),a={};this.listens_[o]=a;const l=yf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),qs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=wo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yf(e._queryParams),s=e._path.toString(),i=new fr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qi(a.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(){return{value:null,children:new Map}}function nm(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,Co());const i=t.children.get(s);e=Ce(e),nm(i,e,n)}}function Dl(t,e,n){t.value!==null?n(e,t.value):FS(t,(s,i)=>{const r=new _e(e.toString()+"/"+s);Dl(i,r,n)})}function FS(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$e(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=10*1e3,$S=30*1e3,BS=5*60*1e3;class HS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new US(e);const s=Ef+($S-Ef)*Math.random();Di(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;$e(e,(i,r)=>{r>0&&Lt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Di(this.reportStats_.bind(this),Math.floor(Math.random()*2*BS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Vc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=wt.ACK_USER_WRITE,this.source=Vc()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Io(fe(),n,this.revert)}}else return O(re(this.path)===e,"operationForChild called for unrelated child."),new Io(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new or(this.source,fe()):new or(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=wt.OVERWRITE}operationForChild(e){return ae(this.path)?new is(this.source,fe(),this.snap.getImmediateChild(e)):new is(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=wt.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new is(this.source,fe(),n.value):new Ys(this.source,fe(),n)}else return O(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ys(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jS(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(OS(o.childName,o.snapshotNode))}),_i(t,i,"child_removed",e,s,n),_i(t,i,"child_added",e,s,n),_i(t,i,"child_moved",r,s,n),_i(t,i,"child_changed",e,s,n),_i(t,i,"value",e,s,n),i}function _i(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>qS(t,a,l)),o.forEach(a=>{const l=VS(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qS(t,e,n){if(e.childName==null||n.childName==null)throw ti("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e){return{eventCache:t,serverCache:e}}function Li(t,e,n,s){return pa(new Pn(e,n,s),t.serverCache)}function sm(t,e,n,s){return pa(t.eventCache,new Pn(e,n,s))}function To(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;const zS=()=>(Ga||(Ga=new tt(PT)),Ga);class we{constructor(e,n=zS()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return $e(e,(s,i)=>{n=n.set(new _e(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(ae(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ce(e),n);return r!=null?{path:Re(new _e(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new we(null)}}set(e,n){if(ae(e))return new we(n,this.children);{const s=re(e),r=(this.children.get(s)||new we(null)).set(Ce(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ae(e))return n;{const s=re(e),r=(this.children.get(s)||new we(null)).setTree(Ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Ce(e),Re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Ce(e),Re(n,i),s):new we(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new we(null))}}function Fi(t,e,n){if(ae(e))return new It(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ke(i,e);return r=r.updateChild(o,n),new It(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new It(r)}}}function Ll(t,e,n){let s=t;return $e(n,(i,r)=>{s=Fi(s,Re(e,i),r)}),s}function wf(t,e){if(ae(e))return It.empty();{const n=t.writeTree_.setTree(e,new we(null));return new It(n)}}function Fl(t,e){return us(t,e)!=null}function us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function Cf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function En(t,e){if(ae(e))return t;{const n=us(t,e);return n!=null?new It(new we(n)):new It(t.writeTree_.subtree(e))}}function Ul(t){return t.writeTree_.isEmpty()}function Qs(t,e){return im(fe(),t.writeTree_,e)}function im(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=im(Re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Re(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e){return lm(e,t)}function KS(t,e,n,s,i){O(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Fi(t.visibleWrites,e,n)),t.lastWriteId=s}function GS(t,e,n,s){O(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ll(t.visibleWrites,e,n),t.lastWriteId=s}function YS(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function QS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JS(a,s.path)?i=!1:ct(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return XS(t),!0;if(s.snap)t.visibleWrites=wf(t.visibleWrites,s.path);else{const a=s.children;$e(a,l=>{t.visibleWrites=wf(t.visibleWrites,Re(s.path,l))})}return!0}else return!1}function JS(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(Re(t.path,n),e))return!0;return!1}function XS(t){t.visibleWrites=rm(t.allWrites,ZS,fe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZS(t){return t.visible}function rm(t,e,n){let s=It.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ct(n,o)?(a=Ke(n,o),s=Fi(s,a,r.snap)):ct(o,n)&&(a=Ke(o,n),s=Fi(s,fe(),r.snap.getChild(a)));else if(r.children){if(ct(n,o))a=Ke(n,o),s=Ll(s,a,r.children);else if(ct(o,n))if(a=Ke(o,n),ae(a))s=Ll(s,fe(),r.children);else{const l=qs(r.children,re(a));if(l){const c=l.getChild(Ce(a));s=Fi(s,fe(),c)}}}else throw ti("WriteRecord should have .snap or .children")}}return s}function om(t,e,n,s,i){if(!s&&!i){const r=us(t.visibleWrites,e);if(r!=null)return r;{const o=En(t.visibleWrites,e);if(Ul(o))return n;if(n==null&&!Fl(o,fe()))return null;{const a=n||X.EMPTY_NODE;return Qs(o,a)}}}else{const r=En(t.visibleWrites,e);if(!i&&Ul(r))return n;if(!i&&n==null&&!Fl(r,fe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},a=rm(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Qs(a,l)}}}function e0(t,e,n){let s=X.EMPTY_NODE;const i=us(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=En(t.visibleWrites,e);return n.forEachChild(Pe,(o,a)=>{const l=Qs(En(r,new _e(o)),a);s=s.updateImmediateChild(o,l)}),Cf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=En(t.visibleWrites,e);return Cf(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function t0(t,e,n,s,i){O(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Re(e,n);if(Fl(t.visibleWrites,r))return null;{const o=En(t.visibleWrites,r);return Ul(o)?i.getChild(n):Qs(o,i.getChild(n))}}function n0(t,e,n,s){const i=Re(e,n),r=us(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=En(t.visibleWrites,i);return Qs(o,s.getNode().getImmediateChild(n))}else return null}function s0(t,e){return us(t.visibleWrites,e)}function i0(t,e,n,s,i,r,o){let a;const l=En(t.visibleWrites,e),c=us(l,fe());if(c!=null)a=c;else if(n!=null)a=Qs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function r0(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function So(t,e,n,s){return om(t.writeTree,t.treePath,e,n,s)}function Kc(t,e){return e0(t.writeTree,t.treePath,e)}function If(t,e,n,s){return t0(t.writeTree,t.treePath,e,n,s)}function Ro(t,e){return s0(t.writeTree,Re(t.treePath,e))}function o0(t,e,n,s,i,r){return i0(t.writeTree,t.treePath,e,n,s,i,r)}function Gc(t,e,n){return n0(t.writeTree,t.treePath,e,n)}function am(t,e){return lm(Re(t.treePath,e),t.writeTree)}function lm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ir(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,sr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Gs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ir(s,e.snapshotNode,i.oldSnap));else throw ti("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const cm=new l0;class Yc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rs(this.viewCache_),r=o0(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){return{filter:t}}function u0(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function d0(t,e,n,s,i){const r=new a0;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=$l(t,e,c.path,c.snap,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=ko(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=h0(t,e,c.path,c.children,s,i,r):(O(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=m0(t,e,c.path,s,i,r):o=p0(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===wt.LISTEN_COMPLETE)o=g0(t,e,n.path,s,r);else throw ti("Unknown operation type: "+n.type);const l=r.getChanges();return f0(e,o,l),{viewCache:o,changes:l}}function f0(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=To(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(tm(To(e)))}}function um(t,e,n,s,i,r){const o=e.eventCache;if(Ro(s,n)!=null)return e;{let a,l;if(ae(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=rs(e),u=c instanceof X?c:X.EMPTY_NODE,d=Kc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=So(s,rs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){O(kn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=If(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ce(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=If(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Gc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Li(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function ko(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&kn(n)>1)return e;const m=Ce(n),C=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),C):c=u.updateChild(l.getNode(),p,C,m,cm,null)}const d=sm(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),f=new Yc(i,d,r);return um(t,d,n,i,f,a)}function $l(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Yc(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Li(e,c,!0,t.filter.filtersNodes());else{const d=re(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Li(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ce(n),p=a.getNode().getImmediateChild(d);let m;if(ae(f))m=s;else{const y=u.getCompleteChild(d);y!=null?Uc(f)===".priority"&&y.getChild(Gg(f)).isEmpty()?m=y:m=y.updateChild(f,s):m=X.EMPTY_NODE}if(p.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),d,m,f,u,o);l=Li(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tf(t,e){return t.eventCache.isCompleteForChild(e)}function h0(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Re(n,l);Tf(e,re(u))&&(a=$l(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Re(n,l);Tf(e,re(u))||(a=$l(t,a,u,c,i,r,o))}),a}function Sf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Bl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=Sf(t,p,f);l=ko(t,l,new _e(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),y=Sf(t,m,f);l=ko(t,l,new _e(d),y,i,r,o,a)}}),l}function p0(t,e,n,s,i,r,o){if(Ro(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ko(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new we(null);return l.getNode().forEachChild(Fs,(u,d)=>{c=c.set(new _e(u),d)}),Bl(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,d)=>{const f=Re(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Bl(t,e,n,c,i,r,a,o)}}function g0(t,e,n,s,i){const r=e.serverCache,o=sm(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return um(t,o,n,s,cm,i)}function m0(t,e,n,s,i,r){let o;if(Ro(s,n)!=null)return e;{const a=new Yc(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=So(s,rs(e));else{const d=e.serverCache.getNode();O(d instanceof X,"serverChildren would be complete if leaf node"),u=Kc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let d=Gc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,X.EMPTY_NODE,Ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=So(s,rs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ro(s,fe())!=null,Li(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wc(s.getIndex()),r=DS(s);this.processor_=c0(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new Pn(l,o.isFullyInitialized(),i.filtersNodes()),d=new Pn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=pa(d,u),this.eventGenerator_=new WS(this.query_)}get query(){return this.query_}}function v0(t){return t.viewCache_.serverCache.getNode()}function y0(t){return To(t.viewCache_)}function b0(t,e){const n=rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function Rf(t){return t.eventRegistrations_.length===0}function E0(t,e){t.eventRegistrations_.push(e)}function kf(t,e,n){const s=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Pf(t,e,n,s){e.type===wt.MERGE&&e.source.queryId!==null&&(O(rs(t.viewCache_),"We should always have a full cache before handling merges"),O(To(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=d0(t.processor_,i,e,n,s);return u0(t.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,dm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function w0(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(r,o)=>{s.push(Gs(r,o))}),n.isFullyInitialized()&&s.push(tm(n.getNode())),dm(t,s,n.getNode(),e)}function dm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return jS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po;class fm{constructor(){this.views=new Map}}function C0(t){O(!Po,"__referenceConstructor has already been defined"),Po=t}function I0(){return O(Po,"Reference.ts has not been loaded"),Po}function T0(t){return t.views.size===0}function Qc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return O(r!=null,"SyncTree gave us an op for an invalid query."),Pf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Pf(o,e,n,s));return r}}function hm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=So(n,i?s:null),l=!1;a?l=!0:s instanceof X?(a=Kc(n,s),l=!1):(a=X.EMPTY_NODE,l=!1);const c=pa(new Pn(a,l,!1),new Pn(s,i,!1));return new _0(e,c)}return o}function S0(t,e,n,s,i,r){const o=hm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),E0(o,n),w0(o,n)}function R0(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=An(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(kf(c,n,s)),Rf(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(kf(l,n,s)),Rf(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!An(t)&&r.push(new(I0())(e._repo,e._path)),{removed:r,events:o}}function pm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wn(t,e){let n=null;for(const s of t.views.values())n=n||b0(s,e);return n}function gm(t,e){if(e._queryParams.loadsAllData())return ma(t);{const s=e._queryIdentifier;return t.views.get(s)}}function mm(t,e){return gm(t,e)!=null}function An(t){return ma(t)!=null}function ma(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;function k0(t){O(!Ao,"__referenceConstructor has already been defined"),Ao=t}function P0(){return O(Ao,"Reference.ts has not been loaded"),Ao}let A0=1;class Af{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=r0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _m(t,e,n,s,i){return KS(t.pendingWriteTree_,e,n,s,i),i?ai(t,new is(Vc(),e,n)):[]}function x0(t,e,n,s){GS(t.pendingWriteTree_,e,n,s);const i=we.fromObject(n);return ai(t,new Ys(Vc(),e,i))}function pn(t,e,n=!1){const s=YS(t.pendingWriteTree_,e);if(QS(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(fe(),!0):$e(s.children,o=>{r=r.set(new _e(o),!0)}),ai(t,new Io(s.path,r,n))}else return[]}function Cr(t,e,n){return ai(t,new is(qc(),e,n))}function N0(t,e,n){const s=we.fromObject(n);return ai(t,new Ys(qc(),e,s))}function O0(t,e){return ai(t,new or(qc(),e))}function M0(t,e,n){const s=Xc(t,n);if(s){const i=Zc(s),r=i.path,o=i.queryId,a=Ke(r,e),l=new or(zc(o),a);return eu(t,r,l)}else return[]}function xo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||mm(o,e))){const l=R0(o,e,n,s);T0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,p)=>An(p));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=F0(f);for(let m=0;m<p.length;++m){const y=p[m],C=y.query,v=Em(t,y);t.listenProvider_.startListening(Ui(C),ar(t,C),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ui(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(_a(f));t.listenProvider_.stopListening(Ui(f),p)}))}U0(t,c)}return a}function vm(t,e,n,s){const i=Xc(t,s);if(i!=null){const r=Zc(i),o=r.path,a=r.queryId,l=Ke(o,e),c=new is(zc(a),l,n);return eu(t,o,c)}else return[]}function D0(t,e,n,s){const i=Xc(t,s);if(i){const r=Zc(i),o=r.path,a=r.queryId,l=Ke(o,e),c=we.fromObject(n),u=new Ys(zc(a),l,c);return eu(t,o,u)}else return[]}function Hl(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const m=Ke(f,i);r=r||wn(p,m),o=o||An(p)});let a=t.syncPointTree_.get(i);a?(o=o||An(a),r=r||wn(a,fe())):(a=new fm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,m)=>{const y=wn(m,fe());y&&(r=r.updateImmediateChild(p,y))}));const c=mm(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=_a(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=$0();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=ga(t.pendingWriteTree_,i);let d=S0(a,e,n,u,r,l);if(!c&&!o&&!s){const f=gm(a,e);d=d.concat(B0(t,e,f))}return d}function Jc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ke(o,e),c=wn(a,l);if(c)return c});return om(i,e,r,n,!0)}function L0(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ke(c,n);s=s||wn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||wn(i,fe()):(i=new fm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Pn(s,!0,!1):null,a=ga(t.pendingWriteTree_,e._path),l=hm(i,e,a,r?o.getNode():X.EMPTY_NODE,r);return y0(l)}function ai(t,e){return ym(e,t.syncPointTree_,null,ga(t.pendingWriteTree_,fe()))}function ym(t,e,n,s){if(ae(t.path))return bm(t,e,n,s);{const i=e.get(fe());n==null&&i!=null&&(n=wn(i,fe()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=am(s,o);r=r.concat(ym(a,l,c,u))}return i&&(r=r.concat(Qc(i,t,s,n))),r}}function bm(t,e,n,s){const i=e.get(fe());n==null&&i!=null&&(n=wn(i,fe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=am(s,o),u=t.operationForChild(o);u&&(r=r.concat(bm(u,a,l,c)))}),i&&(r=r.concat(Qc(i,t,s,n))),r}function Em(t,e){const n=e.query,s=ar(t,n);return{hashFn:()=>(v0(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?M0(t,n._path,s):O0(t,n._path);{const r=NT(i,n);return xo(t,n,null,r)}}}}function ar(t,e){const n=_a(e);return t.queryToTagMap.get(n)}function _a(t){return t._path.toString()+"$"+t._queryIdentifier}function Xc(t,e){return t.tagToQueryMap.get(e)}function Zc(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function eu(t,e,n){const s=t.syncPointTree_.get(e);O(s,"Missing sync point for query tag that we're tracking");const i=ga(t.pendingWriteTree_,e);return Qc(s,n,i,null)}function F0(t){return t.fold((e,n,s)=>{if(n&&An(n))return[ma(n)];{let i=[];return n&&(i=pm(n)),$e(s,(r,o)=>{i=i.concat(o)}),i}})}function Ui(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(P0())(t._repo,t._path):t}function U0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=_a(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function $0(){return A0++}function B0(t,e,n){const s=e._path,i=ar(t,e),r=Em(t,n),o=t.listenProvider_.startListening(Ui(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)O(!An(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!ae(c)&&u&&An(u))return[ma(u).query];{let f=[];return u&&(f=f.concat(pm(u).map(p=>p.query))),$e(d,(p,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ui(u),ar(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new tu(n)}node(){return this.node_}}class nu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new nu(this.syncTree_,n)}node(){return Jc(this.syncTree_,this.path_)}}const H0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xf=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return W0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return j0(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},W0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},j0=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&O(!1,"Unexpected increment value: "+s);const i=e.node();if(O(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},wm=function(t,e,n,s){return su(e,new nu(n,t),s)},Cm=function(t,e,n){return su(t,new tu(e),n)};function su(t,e,n){const s=t.getPriority().val(),i=xf(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=xf(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new De(a,Ne(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new De(i))),o.forEachChild(Pe,(a,l)=>{const c=su(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ru(t,e){let n=e instanceof _e?e:new _e(e),s=t,i=re(n);for(;i!==null;){const r=qs(s.node.children,i)||{children:{},childCount:0};s=new iu(i,s,r),n=Ce(n),i=re(n)}return s}function li(t){return t.node.value}function Im(t,e){t.node.value=e,Wl(t)}function Tm(t){return t.node.childCount>0}function V0(t){return li(t)===void 0&&!Tm(t)}function va(t,e){$e(t.node.children,(n,s)=>{e(new iu(n,t,s))})}function Sm(t,e,n,s){n&&!s&&e(t),va(t,i=>{Sm(i,e,!0,s)}),n&&s&&e(t)}function q0(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ir(t){return new _e(t.parent===null?t.name:Ir(t.parent)+"/"+t.name)}function Wl(t){t.parent!==null&&z0(t.parent,t.name,t)}function z0(t,e,n){const s=V0(n),i=Lt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=/[\[\].#$\/\u0000-\u001F\u007F]/,G0=/[\[\].#$\u0000-\u001F\u007F]/,Ya=10*1024*1024,ou=function(t){return typeof t=="string"&&t.length!==0&&!K0.test(t)},Rm=function(t){return typeof t=="string"&&t.length!==0&&!G0.test(t)},Y0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rm(t)},Q0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Oc(t)||t&&typeof t=="object"&&Lt(t,".sv")},km=function(t,e,n,s){s&&e===void 0||ya(la(t,"value"),e,n)},ya=function(t,e,n){const s=n instanceof _e?new fS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$n(s));if(typeof e=="function")throw new Error(t+"contains a function "+$n(s)+" with contents = "+e.toString());if(Oc(e))throw new Error(t+"contains "+e.toString()+" "+$n(s));if(typeof e=="string"&&e.length>Ya/3&&ca(e)>Ya)throw new Error(t+"contains a string greater than "+Ya+" utf8 bytes "+$n(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if($e(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ou(o)))throw new Error(t+" contains an invalid key ("+o+") "+$n(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hS(s,o),ya(t,a,s),pS(s)}),i&&r)throw new Error(t+' contains ".value" child '+$n(s)+" in addition to actual children.")}},J0=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=nr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ou(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(dS);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ct(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},X0=function(t,e,n,s){if(s&&e===void 0)return;const i=la(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];$e(e,(o,a)=>{const l=new _e(o);if(ya(i,a,Re(n,l)),Uc(l)===".priority"&&!Q0(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),J0(i,r)},Pm=function(t,e,n,s){if(!(s&&n===void 0)&&!Rm(n))throw new Error(la(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Z0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pm(t,e,n,s)},Am=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},eR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ou(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Y0(n))throw new Error(la(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ba(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!$c(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function xm(t,e,n){ba(t,n),Nm(t,s=>$c(s,e))}function ht(t,e,n){ba(t,n),Nm(t,s=>ct(s,e)||ct(e,s))}function Nm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(nR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Gn&&Ue("event: "+n.toString()),oi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR="repo_interrupt",iR=25;class rR{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Co(),this.transactionQueueTree_=new iu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function oR(t,e,n){if(t.stats_=Lc(t.repoInfo_),t.forceRestClient_||LT())t.server_=new wo(t.repoInfo_,(s,i,r,o)=>{Nf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Of(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new zt(t.repoInfo_,e,(s,i,r,o)=>{Nf(t,s,i,r,o)},s=>{Of(t,s)},s=>{aR(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=HT(t.repoInfo_,()=>new HS(t.stats_,t.server_)),t.infoData_=new LS,t.infoSyncTree_=new Af({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Cr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),au(t,"connected",!1),t.serverSyncTree_=new Af({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ht(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Om(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ea(t){return H0({timestamp:Om(t)})}function Nf(t,e,n,s,i){t.dataUpdateCount++;const r=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=fo(n,c=>Ne(c));o=D0(t.serverSyncTree_,r,l,i)}else{const l=Ne(n);o=vm(t.serverSyncTree_,r,l,i)}else if(s){const l=fo(n,c=>Ne(c));o=N0(t.serverSyncTree_,r,l)}else{const l=Ne(n);o=Cr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Js(t,r)),ht(t.eventQueue_,a,o)}function Of(t,e){au(t,"connected",e),e===!1&&dR(t)}function aR(t,e){$e(e,(n,s)=>{au(t,n,s)})}function au(t,e,n){const s=new _e("/.info/"+e),i=Ne(n);t.infoData_.updateSnapshot(s,i);const r=Cr(t.infoSyncTree_,s,i);ht(t.eventQueue_,s,r)}function lu(t){return t.nextWriteId_++}function lR(t,e,n){const s=L0(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ne(i).withIndex(e._queryParams.getIndex());Hl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Cr(t.serverSyncTree_,e._path,r);else{const a=ar(t.serverSyncTree_,e);o=vm(t.serverSyncTree_,e._path,r,a)}return ht(t.eventQueue_,e._path,o),xo(t.serverSyncTree_,e,n,null,!0),r},i=>(Tr(t,"get for query "+Me(e)+" failed: "+i),Promise.reject(new Error(i))))}function cR(t,e,n,s,i){Tr(t,"set",{path:e.toString(),value:n,priority:s});const r=Ea(t),o=Ne(n,s),a=Jc(t.serverSyncTree_,e),l=Cm(o,a,r),c=lu(t),u=_m(t.serverSyncTree_,e,l,c,!0);ba(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const m=f==="ok";m||Ye("set at "+e+" failed: "+f);const y=pn(t.serverSyncTree_,c,!m);ht(t.eventQueue_,e,y),jl(t,i,f,p)});const d=uu(t,e);Js(t,d),ht(t.eventQueue_,d,[])}function uR(t,e,n,s){Tr(t,"update",{path:e.toString(),value:n});let i=!0;const r=Ea(t),o={};if($e(n,(a,l)=>{i=!1,o[a]=wm(Re(e,a),Ne(l),t.serverSyncTree_,r)}),i)Ue("update() called with empty data.  Don't do anything."),jl(t,s,"ok",void 0);else{const a=lu(t),l=x0(t.serverSyncTree_,e,o,a);ba(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ye("update at "+e+" failed: "+c);const f=pn(t.serverSyncTree_,a,!d),p=f.length>0?Js(t,e):e;ht(t.eventQueue_,p,f),jl(t,s,c,u)}),$e(n,c=>{const u=uu(t,Re(e,c));Js(t,u)}),ht(t.eventQueue_,e,[])}}function dR(t){Tr(t,"onDisconnectEvents");const e=Ea(t),n=Co();Dl(t.onDisconnect_,fe(),(i,r)=>{const o=wm(i,r,t.serverSyncTree_,e);nm(n,i,o)});let s=[];Dl(n,fe(),(i,r)=>{s=s.concat(Cr(t.serverSyncTree_,i,r));const o=uu(t,i);Js(t,o)}),t.onDisconnect_=Co(),ht(t.eventQueue_,fe(),s)}function fR(t,e,n){let s;re(e._path)===".info"?s=Hl(t.infoSyncTree_,e,n):s=Hl(t.serverSyncTree_,e,n),xm(t.eventQueue_,e._path,s)}function Mf(t,e,n){let s;re(e._path)===".info"?s=xo(t.infoSyncTree_,e,n):s=xo(t.serverSyncTree_,e,n),xm(t.eventQueue_,e._path,s)}function hR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sR)}function Tr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ue(n,...e)}function jl(t,e,n,s){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Mm(t,e,n){return Jc(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function cu(t,e=t.transactionQueueTree_){if(e||wa(t,e),li(e)){const n=Lm(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pR(t,Ir(e),n)}else Tm(e)&&va(e,n=>{cu(t,n)})}function pR(t,e,n){const s=n.map(c=>c.currentWriteId),i=Mm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ke(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Tr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(pn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();wa(t,ru(t.transactionQueueTree_,e)),cu(t,t.transactionQueueTree_),ht(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)oi(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ye("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Js(t,e)}},o)}function Js(t,e){const n=Dm(t,e),s=Ir(n),i=Lm(t,n);return gR(t,i,s),s}function gR(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ke(n,l.path);let u=!1,d;if(O(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(pn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=iR)u=!0,d="maxretry",i=i.concat(pn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Mm(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ya("transaction failed: Data returned ",p,l.path);let m=Ne(p);typeof p=="object"&&p!=null&&Lt(p,".priority")||(m=m.updatePriority(f.getPriority()));const C=l.currentWriteId,v=Ea(t),g=Cm(m,f,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=g,l.currentWriteId=lu(t),o.splice(o.indexOf(C),1),i=i.concat(_m(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(pn(t.serverSyncTree_,C,!0))}else u=!0,d="nodata",i=i.concat(pn(t.serverSyncTree_,l.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}wa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)oi(s[a]);cu(t,t.transactionQueueTree_)}function Dm(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&li(s)===void 0;)s=ru(s,n),e=Ce(e),n=re(e);return s}function Lm(t,e){const n=[];return Fm(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Fm(t,e,n){const s=li(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);va(e,i=>{Fm(t,i,n)})}function wa(t,e){const n=li(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Im(e,n.length>0?n:void 0)}va(e,s=>{wa(t,s)})}function uu(t,e){const n=Ir(Dm(t,e)),s=ru(t.transactionQueueTree_,e);return q0(s,i=>{Qa(t,i)}),Qa(t,s),Sm(s,i=>{Qa(t,i)}),n}function Qa(t,e){const n=li(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(pn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Im(e,void 0):n.length=r+1,ht(t.eventQueue_,Ir(e),i);for(let o=0;o<s.length;o++)oi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _R(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const Df=function(t,e){const n=vR(t),s=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $g(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new _e(n.pathString)}},vR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=mR(t.substring(u,d)));const f=_R(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Me(this.snapshot.exportVal())}}class $m{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:Uc(this._path)}get ref(){return new Ft(this._repo,this._path)}get _queryIdentifier(){const e=bf(this._queryParams),n=Mc(e);return n==="{}"?"default":n}get _queryObject(){return bf(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof du))return!1;const n=this._repo===e._repo,s=$c(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uS(this._path)}}class Ft extends du{constructor(e,n){super(e,n,new jc,!1)}get parent(){const e=Gg(this._path);return e===null?null:new Ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=Jt(this.ref,e);return new Xs(this._node.getChild(n),s,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xs(i,Jt(this.ref,s),Pe)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function st(t,e){return t=Qe(t),t._checkNotDeleted("ref"),e!==void 0?Jt(t._root,e):t._root}function Jt(t,e){return t=Qe(t),re(t._path)===null?Z0("child","path",e,!1):Pm("child","path",e,!1),new Ft(t._repo,Re(t._path,e))}function yR(t,e){t=Qe(t),Am("push",t._path),km("push",e,t._path,!0);const n=Om(t._repo),s=NS(n),i=Jt(t,s),r=Jt(t,s);let o;return e!=null?o=Hm(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Hm(t,e){t=Qe(t),Am("set",t._path),km("set",e,t._path,!1);const n=new fr;return cR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Hr(t,e){X0("update",e,t._path,!1);const n=new fr;return uR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Lf(t){t=Qe(t);const e=new Bm(()=>{}),n=new Ca(e);return lR(t._repo,t,n).then(s=>new Xs(s,new Ft(t._repo,t._path),t._queryParams.getIndex()))}class Ca{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Um("value",this,new Xs(e.snapshotNode,new Ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $m(this,e,n):null}matches(e){return e instanceof Ca?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $m(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const s=Jt(new Ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Um(e.type,this,new Xs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function bR(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,d)=>{Mf(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Bm(n,r||void 0),a=e==="value"?new Ca(o):new fu(e,o);return fR(t._repo,t,a),()=>Mf(t._repo,t,a)}function vi(t,e,n,s){return bR(t,"value",e,n,s)}C0(Ft);k0(Ft);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="FIREBASE_DATABASE_EMULATOR_HOST",Vl={};let wR=!1;function CR(t,e,n,s){t.repoInfo_=new $g(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function IR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ue("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Df(r,i),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[ER]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Df(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ls(Ls.OWNER):new UT(t.name,t.options,e);eR("Invalid Firebase Database URL",o),ae(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=SR(a,t,u,new FT(t.name,n));return new RR(d,t)}function TR(t,e){const n=Vl[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),hR(t),delete n[t.key]}function SR(t,e,n,s){let i=Vl[e.name];i||(i={},Vl[e.name]=i);let r=i[t.toURLString()];return r&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new rR(t,wR,n,s),i[t.toURLString()]=r,r}class RR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(oR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ft(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function kR(t=Kp(),e){const n=Cc(t,"database").getImmediate({identifier:e}),s=YE("database");return s&&PR(n,...s),n}function PR(t,e,n,s={}){t=Qe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ls(Ls.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:JE(s.mockUserToken,t.app.options.projectId);r=new Ls(o)}CR(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){wT(pr),zs(new Zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return IR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),bn(tf,nf,t),bn(tf,nf,"esm2017")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AR();const xR={apiKey:"AIzaSyDgWq0nrcfVinWWSp_3vDfpdji9J6ITRUc",authDomain:"dreammanor-ed9ac.firebaseapp.com",projectId:"dreammanor-ed9ac",storageBucket:"dreammanor-ed9ac.appspot.com",messagingSenderId:"406501789962",appId:"1:406501789962:web:c0e0bd99abc8026201aaf3",databaseURL:"https://dreammanor-ed9ac-default-rtdb.europe-west1.firebasedatabase.app/"},Wm=zp(xR),Es=yT(Wm),Ze=kR(Wm);var NR=Object.freeze(Object.defineProperty({__proto__:null,db:Ze,auth:Es},Symbol.toStringTag,{value:"Module"})),yi={async login(t){return await sI(Es,t.email,t.password)},async logout(){return await Es.signOut()},async forgotPassword(t){return await api.get("/sanctum/csrf-cookie"),api.post("/forgot-password",t)},async getAuthUser(){return new Promise((t,e)=>{const n=Es.onAuthStateChanged(s=>{n(),t(s)},e)})},async resetPassword(t){return await tI(Es,t)},async registerUser(t){return await nI(Es,t.email,t.password)},sendVerification(t){return api.post("/email/verification-notification",t)}},Ff={createUser(t,e){return Hm(st(Ze,"users/"+t),{name:e.name,email:e.email,online:!0})},async getCurrentUser(t){const e=st(Ze);return await Lf(Jt(e,`users/${t}`))},async getAllUsers(){const t=st(Ze);return await Lf(Jt(t,"users"))}};const ql={xs:18,sm:24,md:32,lg:38,xl:46},hu={size:String};function pu(t,e=ql){return Z(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const Sr=t=>Dt(ei(t)),OR=t=>Dt(t);function MR(t,e){return t!==void 0&&t()||e}function UP(t,e){if(t!==void 0){const n=t();if(n!=null)return n.slice()}return e}function Ti(t,e){return t!==void 0?e.concat(t()):e}function DR(t,e){return t===void 0?e:e!==void 0?e.concat(t()):t()}function $P(t,e,n,s,i,r){e.key=s+i;const o=ee(t,e,n);return i===!0?Nh(o,r()):o}const Uf="0 0 24 24",$f=t=>t,Ja=t=>`ionicons ${t}`,jm={"mdi-":t=>`mdi ${t}`,"icon-":$f,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":Ja,"ion-ios":Ja,"ion-logo":Ja,"iconfont ":$f,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},Vm={o_:"-outlined",r_:"-round",s_:"-sharp"},qm={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},LR=new RegExp("^("+Object.keys(jm).join("|")+")"),FR=new RegExp("^("+Object.keys(Vm).join("|")+")"),Bf=new RegExp("^("+Object.keys(qm).join("|")+")"),UR=/^[Mm]\s?[-+]?\.?\d/,$R=/^img:/,BR=/^svguse:/,HR=/^ion-/,WR=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var No=Sr({name:"QIcon",props:{...hu,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=pt(),s=pu(t),i=Z(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),r=Z(()=>{let o,a=t.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const u=n.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(UR.test(a)===!0){const[u,d=Uf]=a.split("|");return{svg:!0,viewBox:d,nodes:u.split("&&").map(f=>{const[p,m,y]=f.split("@@");return ee("path",{style:m,d:p,transform:y})})}}if($R.test(a)===!0)return{img:!0,src:a.substring(4)};if(BR.test(a)===!0){const[u,d=Uf]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:d}}let l=" ";const c=a.match(LR);if(c!==null)o=jm[c[1]](a);else if(WR.test(a)===!0)o=a;else if(HR.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(Bf.test(a)===!0){o="notranslate material-symbols";const u=a.match(Bf);u!==null&&(a=a.substring(6),o+=qm[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(FR);u!==null&&(a=a.substring(2),o+=Vm[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:i.value,style:s.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?ee(t.tag,o,MR(e.default)):r.value.img===!0?ee("span",o,Ti(e.default,[ee("img",{src:r.value.src})])):r.value.svg===!0?ee("span",o,Ti(e.default,[ee("svg",{viewBox:r.value.viewBox||"0 0 24 24"},r.value.nodes)])):r.value.svguse===!0?ee("span",o,Ti(e.default,[ee("svg",{viewBox:r.value.viewBox},[ee("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(o.class+=" "+r.value.cls),ee(t.tag,o,Ti(e.default,[r.value.content])))}}}),jR=Sr({name:"QAvatar",props:{...hu,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(t,{slots:e}){const n=pu(t),s=Z(()=>"q-avatar"+(t.color?` bg-${t.color}`:"")+(t.textColor?` text-${t.textColor} q-chip--colored`:"")+(t.square===!0?" q-avatar--square":t.rounded===!0?" rounded-borders":"")),i=Z(()=>t.fontSize?{fontSize:t.fontSize}:null);return()=>{const r=t.icon!==void 0?[ee(No,{name:t.icon})]:void 0;return ee("div",{class:s.value,style:n.value},[ee("div",{class:"q-avatar__content row flex-center overflow-hidden",style:i.value},DR(e.default,r))])}}});const VR={size:{type:[Number,String],default:"1em"},color:String};function qR(t){return{cSize:Z(()=>t.size in ql?`${ql[t.size]}px`:t.size),classes:Z(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var zm=Sr({name:"QSpinner",props:{...VR,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:n}=qR(t);return()=>ee("svg",{class:n.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[ee("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function zR(t,e){const n=t.style;for(const s in e)n[s]=e[s]}function BP(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const e=qn(t);if(e)return e.$el||e}function HP(t,e){if(t==null||t.contains(e)===!0)return!0;for(let n=t.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(e))return!0;return!1}function KR(t,e=250){let n=!1,s;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},e),s=t.apply(this,arguments)),s}}function Hf(t,e,n,s){n.modifiers.stop===!0&&_p(t);const i=n.modifiers.color;let r=n.modifiers.center;r=r===!0||s===!0;const o=document.createElement("span"),a=document.createElement("span"),l=eb(t),{left:c,top:u,width:d,height:f}=e.getBoundingClientRect(),p=Math.sqrt(d*d+f*f),m=p/2,y=`${(d-p)/2}px`,C=r?y:`${l.left-c-m}px`,v=`${(f-p)/2}px`,g=r?v:`${l.top-u-m}px`;a.className="q-ripple__inner",zR(a,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${C},${g},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const b=()=>{o.remove(),clearTimeout(I)};n.abort.push(b);let I=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${y},${v},0) scale3d(1,1,1)`,a.style.opacity=.2,I=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,I=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(b),1)},275)},250)},50)}function Wf(t,{modifiers:e,value:n,arg:s}){const i=Object.assign({},t.cfg.ripple,e,n);t.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||s,keyCodes:[].concat(i.keyCodes||13)}}var GR=OR({name:"ripple",beforeMount(t,e){const n=e.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const s={cfg:n,enabled:e.value!==!1,modifiers:{},abort:[],start(i){s.enabled===!0&&i.qSkipRipple!==!0&&i.type===(s.modifiers.early===!0?"pointerdown":"click")&&Hf(i,t,s,i.qKeyEvent===!0)},keystart:KR(i=>{s.enabled===!0&&i.qSkipRipple!==!0&&_l(i,s.modifiers.keyCodes)===!0&&i.type===`key${s.modifiers.early===!0?"down":"up"}`&&Hf(i,t,s,!0)},300)};Wf(s,e),t.__qripple=s,tb(s,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const n=t.__qripple;n!==void 0&&(n.enabled=e.value!==!1,n.enabled===!0&&Object(e.value)===e.value&&Wf(n,e))}},beforeUnmount(t){const e=t.__qripple;e!==void 0&&(e.abort.forEach(n=>{n()}),nb(e,"main"),delete t._qripple)}});const Km={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},YR=Object.keys(Km),QR={align:{type:String,validator:t=>YR.includes(t)}};function JR(t){return Z(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Km[e]}`})}function WP(t){if(Object(t.$parent)===t.$parent)return t.$parent;let{parent:e}=t.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Gm(t,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(n=>{Gm(t,n)}):t.add(e)}function jP(t){const e=new Set;return t.forEach(n=>{Gm(e,n)}),Array.from(e)}function XR(t){return t.appContext.config.globalProperties.$router!==void 0}function VP(t){return t.isUnmounted===!0||t.isDeactivated===!0}function jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function Vf(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ZR(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(Array.isArray(i)===!1||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function qf(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function ek(t,e){return Array.isArray(t)===!0?qf(t,e):Array.isArray(e)===!0?qf(e,t):t===e}function tk(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(ek(t[n],e[n])===!1)return!1;return!0}const nk={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function sk({fallbackTag:t,useDisableForRouterLinkProps:e=!0}={}){const n=pt(),{props:s,proxy:i,emit:r}=n,o=XR(n),a=Z(()=>s.disable!==!0&&s.href!==void 0),l=Z(e===!0?()=>o===!0&&s.disable!==!0&&a.value!==!0&&s.to!==void 0&&s.to!==null&&s.to!=="":()=>o===!0&&a.value!==!0&&s.to!==void 0&&s.to!==null&&s.to!==""),c=Z(()=>l.value===!0?g(s.to):null),u=Z(()=>c.value!==null),d=Z(()=>a.value===!0||u.value===!0),f=Z(()=>s.type==="a"||d.value===!0?"a":s.tag||t||"div"),p=Z(()=>a.value===!0?{href:s.href,target:s.target}:u.value===!0?{href:c.value.href,target:s.target}:{}),m=Z(()=>{if(u.value===!1)return-1;const{matched:R}=c.value,{length:N}=R,P=R[N-1];if(P===void 0)return-1;const E=i.$route.matched;if(E.length===0)return-1;const L=E.findIndex(Vf.bind(null,P));if(L>-1)return L;const $=jf(R[N-2]);return N>1&&jf(P)===$&&E[E.length-1].path!==$?E.findIndex(Vf.bind(null,R[N-2])):L}),y=Z(()=>u.value===!0&&m.value!==-1&&ZR(i.$route.params,c.value.params)),C=Z(()=>y.value===!0&&m.value===i.$route.matched.length-1&&tk(i.$route.params,c.value.params)),v=Z(()=>u.value===!0?C.value===!0?` ${s.exactActiveClass} ${s.activeClass}`:s.exact===!0?"":y.value===!0?` ${s.activeClass}`:"":"");function g(R){try{return i.$router.resolve(R)}catch{}return null}function b(R,{returnRouterError:N,to:P=s.to,replace:E=s.replace}={}){if(s.disable===!0)return R.preventDefault(),Promise.resolve(!1);if(R.metaKey||R.altKey||R.ctrlKey||R.shiftKey||R.button!==void 0&&R.button!==0||s.target==="_blank")return Promise.resolve(!1);R.preventDefault();const L=i.$router[E===!0?"replace":"push"](P);return N===!0?L:L.then(()=>{}).catch(()=>{})}function I(R){if(u.value===!0){const N=P=>b(R,P);r("click",R,N),R.defaultPrevented!==!0&&N()}else r("click",R)}return{hasRouterLink:u,hasHrefLink:a,hasLink:d,linkTag:f,resolvedLink:c,linkIsActive:y,linkIsExactActive:C,linkClass:v,linkAttrs:p,getLink:g,navigateToRouterLink:b,navigateOnClick:I}}const zf={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ik={xs:8,sm:10,md:14,lg:20,xl:24},rk=["button","submit","reset"],ok=/[^\s]\/[^\s]/,ak=["flat","outline","push","unelevated"],lk=(t,e)=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":e,ck={...hu,...nk,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ak.reduce((t,e)=>(t[e]=Boolean)&&t,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...QR.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function uk(t){const e=pu(t,ik),n=JR(t),{hasRouterLink:s,hasLink:i,linkTag:r,linkAttrs:o,navigateOnClick:a}=sk({fallbackTag:"button"}),l=Z(()=>{const C=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},C,{padding:t.padding.split(/\s+/).map(v=>v in zf?zf[v]+"px":v).join(" "),minWidth:"0",minHeight:"0"}):C}),c=Z(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),u=Z(()=>t.disable!==!0&&t.loading!==!0),d=Z(()=>u.value===!0?t.tabindex||0:-1),f=Z(()=>lk(t,"standard")),p=Z(()=>{const C={tabindex:d.value};return i.value===!0?Object.assign(C,o.value):rk.includes(t.type)===!0&&(C.type=t.type),r.value==="a"?(t.disable===!0?C["aria-disabled"]="true":C.href===void 0&&(C.role="button"),s.value!==!0&&ok.test(t.type)===!0&&(C.type=t.type)):t.disable===!0&&(C.disabled="",C["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(C,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),C}),m=Z(()=>{let C;t.color!==void 0?t.flat===!0||t.outline===!0?C=`text-${t.textColor||t.color}`:C=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(C=`text-${t.textColor}`);const v=t.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":t.square===!0?" q-btn--square":""}`;return`q-btn--${f.value} q-btn--${v}`+(C!==void 0?" "+C:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")+(t.square?" q-btn--square":"")}),y=Z(()=>n.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:m,style:l,innerClasses:y,attributes:p,hasLink:i,linkTag:r,navigateOnClick:a,isActionable:u}}const{passiveCapture:lt}=Xn;let _s=null,vs=null,ys=null;var dk=Sr({name:"QBtn",props:{...ck,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(t,{slots:e,emit:n}){const{proxy:s}=pt(),{classes:i,style:r,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:d}=uk(t),f=Nt(null),p=Nt(null);let m=null,y,C;const v=Z(()=>t.label!==void 0&&t.label!==null&&t.label!==""),g=Z(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),b=Z(()=>({center:t.round})),I=Z(()=>{const T=Math.max(0,Math.min(100,t.percentage));return T>0?{transition:"transform 0.6s",transform:`translateX(${T-100}%)`}:{}}),R=Z(()=>{if(t.loading===!0)return{onMousedown:Q,onTouchstart:Q,onClick:Q,onKeydown:Q,onKeyup:Q};if(d.value===!0){const T={onClick:P,onKeydown:E,onMousedown:$};if(s.$q.platform.has.touch===!0){const J=t.onTouchstart!==void 0?"":"Passive";T[`onTouchstart${J}`]=L}return T}return{onClick:hs}}),N=Z(()=>({ref:f,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:r.value,...a.value,...R.value}));function P(T){if(f.value!==null){if(T!==void 0){if(T.defaultPrevented===!0)return;const J=document.activeElement;if(t.type==="submit"&&J!==document.body&&f.value.contains(J)===!1&&J.contains(f.value)===!1){f.value.focus();const se=()=>{document.removeEventListener("keydown",hs,!0),document.removeEventListener("keyup",se,lt),f.value!==null&&f.value.removeEventListener("blur",se,lt)};document.addEventListener("keydown",hs,!0),document.addEventListener("keyup",se,lt),f.value.addEventListener("blur",se,lt)}}u(T)}}function E(T){f.value!==null&&(n("keydown",T),_l(T,[13,32])===!0&&vs!==f.value&&(vs!==null&&F(),T.defaultPrevented!==!0&&(f.value.focus(),vs=f.value,f.value.classList.add("q-btn--active"),document.addEventListener("keyup",H,!0),f.value.addEventListener("blur",H,lt)),hs(T)))}function L(T){f.value!==null&&(n("touchstart",T),T.defaultPrevented!==!0&&(_s!==f.value&&(_s!==null&&F(),_s=f.value,m=T.target,m.addEventListener("touchcancel",H,lt),m.addEventListener("touchend",H,lt)),y=!0,clearTimeout(C),C=setTimeout(()=>{y=!1},200)))}function $(T){f.value!==null&&(T.qSkipRipple=y===!0,n("mousedown",T),T.defaultPrevented!==!0&&ys!==f.value&&(ys!==null&&F(),ys=f.value,f.value.classList.add("q-btn--active"),document.addEventListener("mouseup",H,lt)))}function H(T){if(f.value!==null&&!(T!==void 0&&T.type==="blur"&&document.activeElement===f.value)){if(T!==void 0&&T.type==="keyup"){if(vs===f.value&&_l(T,[13,32])===!0){const J=new MouseEvent("click",T);J.qKeyEvent=!0,T.defaultPrevented===!0&&ml(J),T.cancelBubble===!0&&_p(J),f.value.dispatchEvent(J),hs(T),T.qKeyEvent=!0}n("keyup",T)}F()}}function F(T){const J=p.value;T!==!0&&(_s===f.value||ys===f.value)&&J!==null&&J!==document.activeElement&&(J.setAttribute("tabindex",-1),J.focus()),_s===f.value&&(m!==null&&(m.removeEventListener("touchcancel",H,lt),m.removeEventListener("touchend",H,lt)),_s=m=null),ys===f.value&&(document.removeEventListener("mouseup",H,lt),ys=null),vs===f.value&&(document.removeEventListener("keyup",H,!0),f.value!==null&&f.value.removeEventListener("blur",H,lt),vs=null),f.value!==null&&f.value.classList.remove("q-btn--active")}function Q(T){hs(T),T.qSkipRipple=!0}return Jo(()=>{F(!0)}),Object.assign(s,{click:P}),()=>{let T=[];t.icon!==void 0&&T.push(ee(No,{name:t.icon,left:t.stack===!1&&v.value===!0,role:"img","aria-hidden":"true"})),v.value===!0&&T.push(ee("span",{class:"block"},[t.label])),T=Ti(e.default,T),t.iconRight!==void 0&&t.round===!1&&T.push(ee(No,{name:t.iconRight,right:t.stack===!1&&v.value===!0,role:"img","aria-hidden":"true"}));const J=[ee("span",{class:"q-focus-helper",ref:p})];return t.loading===!0&&t.percentage!==void 0&&J.push(ee("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[ee("span",{class:"q-btn__progress-indicator fit block",style:I.value})])),J.push(ee("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},T)),t.loading!==null&&J.push(ee(pc,{name:"q-transition--fade"},()=>t.loading===!0?[ee("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[ee(zm)])]:null)),Nh(ee(c.value,N.value,J),[[GR,g.value,void 0,b.value]])}}});let fk=document.body;function hk(t){const e=document.createElement("div");if(t!==void 0&&(e.id=t),ao.globalNodes!==void 0){const n=ao.globalNodes.class;n!==void 0&&(e.className=n)}return fk.appendChild(e),e}function qP(t){t.remove()}let pk=0;const Qr={},Jr={},vt={},Ym={},gk=/^\s*$/,Qm=[],gu=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],mk=["top-left","top-right","bottom-left","bottom-right"],ws={positive:{icon:t=>t.iconSet.type.positive,color:"positive"},negative:{icon:t=>t.iconSet.type.negative,color:"negative"},warning:{icon:t=>t.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:t=>t.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function Jm(t,e,n){if(!t)return bi("parameter required");let s;const i={textColor:"white"};if(t.ignoreDefaults!==!0&&Object.assign(i,Qr),Gi(t)===!1&&(i.type&&Object.assign(i,ws[i.type]),t={message:t}),Object.assign(i,ws[t.type||i.type],t),typeof i.icon=="function"&&(i.icon=i.icon(e)),i.spinner?(i.spinner===!0&&(i.spinner=zm),i.spinner=Dt(i.spinner)):i.spinner=!1,i.meta={hasMedia:Boolean(i.spinner!==!1||i.icon||i.avatar),hasText:Kf(i.message)||Kf(i.caption)},i.position){if(gu.includes(i.position)===!1)return bi("wrong position",t)}else i.position="bottom";if(i.timeout===void 0)i.timeout=5e3;else{const l=parseInt(i.timeout,10);if(isNaN(l)||l<0)return bi("wrong timeout",t);i.timeout=l}i.timeout===0?i.progress=!1:i.progress===!0&&(i.meta.progressClass="q-notification__progress"+(i.progressClass?` ${i.progressClass}`:""),i.meta.progressStyle={animationDuration:`${i.timeout+1e3}ms`});const r=(Array.isArray(t.actions)===!0?t.actions:[]).concat(t.ignoreDefaults!==!0&&Array.isArray(Qr.actions)===!0?Qr.actions:[]).concat(ws[t.type]!==void 0&&Array.isArray(ws[t.type].actions)===!0?ws[t.type].actions:[]),{closeBtn:o}=i;if(o&&r.push({label:typeof o=="string"?o:e.lang.label.close}),i.actions=r.map(({handler:l,noDismiss:c,...u})=>({flat:!0,...u,onClick:typeof l=="function"?()=>{l(),c!==!0&&a()}:()=>{a()}})),i.multiLine===void 0&&(i.multiLine=i.actions.length>1),Object.assign(i.meta,{class:`q-notification row items-stretch q-notification--${i.multiLine===!0?"multi-line":"standard"}`+(i.color!==void 0?` bg-${i.color}`:"")+(i.textColor!==void 0?` text-${i.textColor}`:"")+(i.classes!==void 0?` ${i.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(i.multiLine===!0?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(i.multiLine===!0?"":" col"),leftClass:i.meta.hasText===!0?"additional":"single",attrs:{role:"alert",...i.attrs}}),i.group===!1?(i.group=void 0,i.meta.group=void 0):((i.group===void 0||i.group===!0)&&(i.group=[i.message,i.caption,i.multiline].concat(i.actions.map(l=>`${l.label}*${l.icon}`)).join("|")),i.meta.group=i.group+"|"+i.position),i.actions.length===0?i.actions=void 0:i.meta.actionsClass="q-notification__actions row items-center "+(i.multiLine===!0?"justify-end":"col-auto")+(i.meta.hasMedia===!0?" q-notification__actions--with-media":""),n!==void 0){clearTimeout(n.notif.meta.timer),i.meta.uid=n.notif.meta.uid;const l=vt[i.position].value.indexOf(n.notif);vt[i.position].value[l]=i}else{const l=Jr[i.meta.group];if(l===void 0){if(i.meta.uid=pk++,i.meta.badge=1,["left","right","center"].indexOf(i.position)!==-1)vt[i.position].value.splice(Math.floor(vt[i.position].value.length/2),0,i);else{const c=i.position.indexOf("top")>-1?"unshift":"push";vt[i.position].value[c](i)}i.group!==void 0&&(Jr[i.meta.group]=i)}else{if(clearTimeout(l.meta.timer),i.badgePosition!==void 0){if(mk.includes(i.badgePosition)===!1)return bi("wrong badgePosition",t)}else i.badgePosition=`top-${i.position.indexOf("left")>-1?"right":"left"}`;i.meta.uid=l.meta.uid,i.meta.badge=l.meta.badge+1,i.meta.badgeClass=`q-notification__badge q-notification__badge--${i.badgePosition}`+(i.badgeColor!==void 0?` bg-${i.badgeColor}`:"")+(i.badgeTextColor!==void 0?` text-${i.badgeTextColor}`:"")+(i.badgeClass?` ${i.badgeClass}`:"");const c=vt[i.position].value.indexOf(l);vt[i.position].value[c]=Jr[i.meta.group]=i}}const a=()=>{_k(i),s=void 0};if(i.timeout>0&&(i.meta.timer=setTimeout(()=>{a()},i.timeout+1e3)),i.group!==void 0)return l=>{l!==void 0?bi("trying to update a grouped one which is forbidden",t):a()};if(s={dismiss:a,config:t,notif:i},n!==void 0){Object.assign(n,s);return}return l=>{if(s!==void 0)if(l===void 0)s.dismiss();else{const c=Object.assign({},s.config,l,{group:!1,position:i.position});Jm(c,e,s)}}}function _k(t){clearTimeout(t.meta.timer);const e=vt[t.position].value.indexOf(t);if(e!==-1){t.group!==void 0&&delete Jr[t.meta.group];const n=Qm[""+t.meta.uid];if(n){const{width:s,height:i}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=s,n.style.height=i}vt[t.position].value.splice(e,1),typeof t.onDismiss=="function"&&t.onDismiss()}}function Kf(t){return t!=null&&gk.test(t)!==!0}function bi(t,e){return console.error(`Notify: ${t}`,e),!1}function vk(){return Sr({name:"QNotifications",devtools:{hide:!0},setup(){return()=>ee("div",{class:"q-notifications"},gu.map(t=>ee(My,{key:t,class:Ym[t],tag:"div",name:`q-notification--${t}`},()=>vt[t].value.map(e=>{const n=e.meta,s=[];if(n.hasMedia===!0&&(e.spinner!==!1?s.push(ee(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+n.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?s.push(ee(No,{class:"q-notification__icon q-notification__icon--"+n.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&s.push(ee(jR,{class:"q-notification__avatar q-notification__avatar--"+n.leftClass},()=>ee("img",{src:e.avatar,"aria-hidden":"true"})))),n.hasText===!0){let r;const o={class:"q-notification__message col"};if(e.html===!0)o.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const a=[e.message];r=e.caption?[ee("div",a),ee("div",{class:"q-notification__caption"},[e.caption])]:a}s.push(ee("div",o,r))}const i=[ee("div",{class:n.contentClass},s)];return e.progress===!0&&i.push(ee("div",{key:`${n.uid}|p|${n.badge}`,class:n.progressClass,style:n.progressStyle})),e.actions!==void 0&&i.push(ee("div",{class:n.actionsClass},e.actions.map(r=>ee(dk,r)))),n.badge>1&&i.push(ee("div",{key:`${n.uid}|${n.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[n.badge])),ee("div",{ref:r=>{Qm[""+n.uid]=r},key:n.uid,class:n.class,...n.attrs},[ee("div",{class:n.wrapperClass},i)])}))))}})}var Ts={setDefaults(t){Gi(t)===!0&&Object.assign(Qr,t)},registerType(t,e){Gi(e)===!0&&(ws[t]=e)},install({$q:t,parentApp:e}){if(t.notify=this.create=n=>Jm(n,t),t.notify.setDefaults=this.setDefaults,t.notify.registerType=this.registerType,t.config.notify!==void 0&&this.setDefaults(t.config.notify),this.__installed!==!0){gu.forEach(s=>{vt[s]=Nt([]);const i=["left","center","right"].includes(s)===!0?"center":s.indexOf("top")>-1?"top":"bottom",r=s.indexOf("left")>-1?"start":s.indexOf("right")>-1?"end":"center",o=["left","right"].includes(s)?`items-${s==="left"?"start":"end"} justify-center`:s==="center"?"flex-center":`items-${r}`;Ym[s]=`q-notifications__list q-notifications__list--${i} fixed column no-wrap ${o}`});const n=hk("q-notify");bb(vk(),e).mount(n)}}};const zl=gc("userStore",{state:()=>({user:null,error:null,loading:!1}),actions:{async createUser(t,e){try{await Ff.createUser(t,e)}catch(n){console.log(n.message)}},async getCurrentUser(t){try{let e=await Ff.getCurrentUser(t);this.user=e.val()||null}catch(e){console.log(e)}}}});var yk=[{path:"",meta:{requiresAuth:!0},component:()=>He(()=>import("./MainLayout.51da041f.js"),["assets/MainLayout.51da041f.js","assets/format.c3a2eafd.js","assets/scroll.9c3e2207.js","assets/QSeparator.a2357e79.js","assets/use-dark.5e043d57.js","assets/QLayout.e8ed1f52.js","assets/QList.5e86dcfc.js"]),children:[{path:"",name:"form",component:()=>He(()=>import("./IndexPage.2faa380a.js"),["assets/IndexPage.2faa380a.js","assets/IndexPage.ac95b426.css","assets/format.c3a2eafd.js","assets/scroll.9c3e2207.js","assets/QBanner.58f48df7.js","assets/use-dark.5e043d57.js","assets/QPage.9ea109dd.js","assets/QList.5e86dcfc.js","assets/QForm.c26b8b90.js","assets/QCard.e47de17a.js","assets/QCardActions.21b13877.js","assets/QSeparator.a2357e79.js","assets/vue3-apexcharts.common.bb5fee99.js"])},{path:"/result-all",name:"listAll",component:()=>He(()=>import("./ListPage.e30ceb05.js"),["assets/ListPage.e30ceb05.js","assets/ListPage.9a432514.css","assets/QSeparator.a2357e79.js","assets/use-dark.5e043d57.js","assets/QBanner.58f48df7.js","assets/QCard.e47de17a.js","assets/QCardActions.21b13877.js","assets/word.3bd3a871.js"])},{path:"/result/:currentAnimal",name:"resultOneAnimal",component:()=>He(()=>import("./FullPage.0d14b86c.js"),["assets/FullPage.0d14b86c.js","assets/QSeparator.a2357e79.js","assets/use-dark.5e043d57.js","assets/QCard.e47de17a.js","assets/QList.5e86dcfc.js","assets/QCardActions.21b13877.js","assets/word.3bd3a871.js"])},{path:"/stat/:animal/:part",name:"stat",component:()=>He(()=>import("./StatPage.19e408fa.js"),["assets/StatPage.19e408fa.js","assets/StatPage.998e57f7.css","assets/QSeparator.a2357e79.js","assets/use-dark.5e043d57.js","assets/QCard.e47de17a.js","assets/vue3-apexcharts.common.bb5fee99.js"])}]}];const zP=gc("controlStore",{state:()=>({currentAnimal:null,currentPart:null,allAnimals:[],allParts:[],countAnimals:null,oldAnimals:null,midleVes:null,allVes:[],step:1,tempOnResult:null,resultGraphOptions:[],resultGraphSeries:[],resultGraph:[],allResults:[],listPartsResult:[],error:null,loading:!1}),actions:{async getSistemAnimals(){const t=st(Ze,"animals");try{await vi(t,e=>{e.forEach(n=>{const s=n.val();this.allAnimals.push(s)})}),await this.getUserAmimals()}catch(e){console.log(e)}},async getUserAmimals(){const t=Ln(),e=st(Ze,"users/"+t.user.uid+"/animals/meta");try{await vi(e,n=>{n.forEach(s=>{const i=s.val();this.allAnimals.every(o=>o.label!==i.label)&&this.allAnimals.push(i)})})}catch(n){console.log(n)}},async addAnimals(t){const e=Ln(),n=zl();try{const s={};n.user&&n.user.admin?(s["/animals/"+t.label]=t,await Hr(st(Ze),s)):(s["users/"+e.user.uid+"/animals/meta/"+t.label]=t,await Hr(st(Ze),s)),this.allAnimals.every(r=>r.label!==t.label)&&this.allAnimals.push(t),Ts.create({message:"\u041D\u043E\u0432\u043E\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E!",color:"green"})}catch(s){console.log(s)}},async getListParts(){const t=Ln(),e=st(Ze,"users/"+t.user.uid+"/animals/"+this.currentAnimal.label+"/animal-parts/");this.allParts=[];try{await vi(e,n=>{n.forEach(s=>{const i=s.key,r=s.val();this.allParts.push({id:i,...r})})})}catch(n){console.log(n)}},async addPart(t){const e=Ln();this.allParts=[];const n=yR(Jt(st(Ze),"users/"+e.user.uid+"/animals/"+this.currentAnimal.label+"/animal-parts/")).key,s={};s["users/"+e.user.uid+"/animals/"+this.currentAnimal.label+"/animal-parts/"+n]=t,await Hr(st(Ze),s)},async addHistoryVes(){const t=Ln(),e={animal:this.currentAnimal,part:this.currentPart.label,days:this.oldAnimals,count:this.countAnimals,scope:this.midleVes,allVes:this.allVes},n={};n["/animals-history/"+t.user.uid+"/"+this.currentAnimal.label+"/"+this.currentPart.label+"/"+this.oldAnimals]=e,await Hr(st(Ze),n)},async getListHistory(t,e){return new Promise(n=>{const s=Ln(),i=st(Ze,"animals-history/"+s.user.uid+"/"+t+"/"+e);this.resultGraphOptions=[],this.resultGraphSeries=[],this.currentAnimal=null,vi(i,r=>{r.forEach(o=>{const a=o.key,l=o.val();this.resultGraph.push(l),this.currentAnimal||(this.currentAnimal=l.animal),this.resultGraphOptions.push(l.scope),this.resultGraphSeries.push({x:Number(a)+" \u0434\u043D\u0435\u0439",y:Number(l.scope)})})}),n(!0)})},async getListAllResult(){const t=Ln(),e=st(Ze,"animals-history/"+t.user.uid+"/");this.allResults=[];try{await vi(e,n=>{n.forEach(s=>{const i=s.key,r=s.val();this.allResults.push({animal:i,parts:r})})})}catch(n){console.log(n)}}},getters:{}}),Ln=gc("authStore",{state:()=>({user:null,error:null,loading:!1}),actions:{async login(t){try{const e=await yi.login(t);return this.user=e,e}catch(e){Ts.create({message:e.code})}},async logout(){try{const t=zl();await yi.logout(),this.user=null,t.user=null,this.router.push({path:"/login"})}catch(t){this.user=null,this.error=getError(t)}},async getAuthUser(){try{return this.loading=!0,this.user=await yi.getAuthUser(),this.loading=!1,this.user}catch(t){this.user=null,this.loading=!1,this.error=getError(t)}},async registration(t){try{const e=zl(),n=await yi.registerUser(t);return this.user=n.user,await e.createUser(this.user.uid,t),this.user}catch(e){Ts.create({message:e.code})}},async resetPassword(t){try{const e=await yi.resetPassword(t);Ts.create({message:"\u0414\u043B\u044F \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u0442\u0435 \u0432\u0430\u0448 \u043F\u043E\u0447\u0442\u043E\u0432\u044B\u0439 \u044F\u0449\u0438\u043A"})}catch(e){Ts.create({message:e.code})}}},getters:{loggedIn:t=>!!t.user,isAdmin:t=>t.user?t.user.isAdmin:!1}}),bk=[{path:"/",component:()=>He(()=>import("./MainLayout.51da041f.js"),["assets/MainLayout.51da041f.js","assets/format.c3a2eafd.js","assets/scroll.9c3e2207.js","assets/QSeparator.a2357e79.js","assets/use-dark.5e043d57.js","assets/QLayout.e8ed1f52.js","assets/QList.5e86dcfc.js"])},{path:"/:catchAll(.*)*",component:()=>He(()=>import("./ErrorNotFound.3678be84.js"),[])}];var Ek=[...bk,...FE,...yk],Xa=function(){return DE({scrollBehavior:()=>({left:0,top:0}),routes:Ek,history:Jb("/")})};async function wk(t,e){const n=t(Rb);n.use(Cb,e);const s=typeof Oa=="function"?await Oa({}):Oa;n.use(s);const i=Dt(typeof Xa=="function"?await Xa({store:s}):Xa);return s.use(({store:r})=>{r.router=i}),{app:n,store:s,router:i}}var Ck={config:{},plugins:{Notify:Ts}};const Ik="/";async function Tk({app:t,router:e,store:n},s){let i=!1;const r=l=>{try{return e.resolve(l).href}catch{}return Object(l)===l?null:l},o=l=>{if(i=!0,typeof l=="string"&&/^https?:\/\//.test(l)){window.location.href=l;return}const c=r(l);c!==null&&(window.location.href=c)},a=window.location.href.replace(window.location.origin,"");for(let l=0;i===!1&&l<s.length;l++)try{await s[l]({app:t,router:e,store:n,ssrContext:null,redirect:o,urlPath:a,publicPath:Ik})}catch(c){if(c&&c.url){o(c.url);return}console.error("[Quasar] boot error:",c);return}i!==!0&&(t.use(e),t.mount("#q-app"))}wk(pp,Ck).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",s=>s.map(i=>{if(i.status==="rejected"){console.error("[Quasar] boot error:",i.reason);return}return i.value.default})]:["all",s=>s.map(i=>i.default)];return Promise[e]([He(()=>import("./axios.964166b2.js"),[]),He(()=>Promise.resolve().then(function(){return NR}),void 0),He(()=>import("./middleware.375316fa.js"),[])]).then(s=>{const i=n(s).filter(r=>typeof r=="function");Tk(t,i)})});export{xn as $,Qo as A,qo as B,Nh as C,$P as D,dc as E,Ih as F,xv as G,Zo as H,Ie as I,Kh as J,qn as K,Zk as L,lb as M,XR as N,Xn as O,SP as P,dk as Q,GR as R,wv as S,VP as T,gl as U,nk as V,sk as W,_l as X,Vr as Y,AP as Z,Jn as _,zl as a,W_ as a$,Xo as a0,Ti as a1,BP as a2,zR as a3,Ib as a4,ei as a5,Qk as a6,zh as a7,vb as a8,LP as a9,ue as aA,MP as aB,OP as aC,Gi as aD,IP as aE,Rk as aF,Dk as aG,Lk as aH,QR as aI,JR as aJ,Xf as aK,$o as aL,Mk as aM,Ak as aN,Zf as aO,kk as aP,ph as aQ,mn as aR,$s as aS,ke as aT,Zr as aU,Dt as aV,Pk as aW,mh as aX,hh as aY,H_ as aZ,Nk as a_,Ts as aa,xP as ab,sb as ac,na as ad,Tv as ae,Ev as af,No as ag,zm as ah,pc as ai,db as aj,jP as ak,Wk as al,kP as am,hu as an,pu as ao,DR as ap,WP as aq,Yk as ar,hk as as,qP as at,HP as au,Iv as av,rc as aw,Na as ax,zP as ay,We as az,DP as b,$k as b$,xk as b0,G_ as b1,z_ as b2,Ok as b3,ft as b4,Uo as b5,Do as b6,Sk as b7,Mo as b8,Wr as b9,lP as bA,ey as bB,Pv as bC,kv as bD,Rv as bE,Sv as bF,Eh as bG,eP as bH,qk as bI,Kk as bJ,Vk as bK,jk as bL,gP as bM,qi as bN,Wu as bO,ov as bP,Bs as bQ,ly as bR,pP as bS,Gk as bT,Jk as bU,aP as bV,dP as bW,oP as bX,kh as bY,uy as bZ,J_ as b_,Ph as ba,Ge as bb,Ns as bc,Uk as bd,zi as be,ut as bf,qt as bg,Gt as bh,mP as bi,Kv as bj,cP as bk,zv as bl,zk as bm,Xk as bn,Hk as bo,sP as bp,iP as bq,nP as br,ui as bs,ic as bt,Zv as bu,Zs as bv,fP as bw,cy as bx,tP as by,Qn as bz,Sr as c,_v as c0,Bk as c1,uP as c2,rP as c3,hP as c4,Fk as c5,My as c6,hc as c7,pp as c8,wP as c9,ky as ca,_P as cb,Gy as cc,CP as cd,rd as ce,vP as cf,yP as cg,ap as ch,Hy as ci,lp as cj,By as ck,pl as cl,zy as cm,EP as cn,bP as co,FP as cp,Z as d,MR as e,NP as f,UP as g,ee as h,dt as i,pt as j,OR as k,PP as l,Et as m,Ki as n,Jo as o,TP as p,tb as q,Nt as r,RP as s,ml as t,Ln as u,_p as v,xs as w,eb as x,nb as y,hs as z};
