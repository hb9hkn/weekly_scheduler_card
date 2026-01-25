!function(t){"use strict";function e(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,n)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:y}=Object,f=globalThis,_=f.trustedTypes,g=_?_.emptyScript:"",b=f.reactiveElementPolyfillSupport,v=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);n?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...u(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(i)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=s.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const o=n.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const o=this.constructor;if(!1===i&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??$)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,b?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.2");const E=globalThis,S=t=>t,C=E.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+T,M=`<${D}>`,P=document,O=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,R="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,V=/>/g,W=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),J=new WeakMap,K=P.createTreeWalker(P,129);function X(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(r.lastIndex=d,l=r.exec(s),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=z:void 0!==l[1]?r=V:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=W):void 0!==l[3]&&(r=W):r===W?">"===l[0]?(r=n??N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?W:'"'===l[3]?I:j):r===I||r===j?r=W:r===z||r===V?r=N:(r=W,n=void 0);const h=r===W&&t[e+1].startsWith("/>")?" ":"";o+=r===N?s+M:c>=0?(i.push(a),s.slice(0,c)+k+s.slice(c)+T+h):s+T+(-2===c?e:h)}return[X(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=Z.createElement(l,s),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(k)){const e=c[o++],s=i.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?st:"?"===r[1]?it:"@"===r[1]?nt:et}),i.removeAttribute(t)}else t.startsWith(T)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),K.nextNode(),a.push({type:2,index:++n});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===D)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:n}),t+=T.length-1}n++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function G(t,e,s=t,i){if(e===q)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=G(t,n._$AS(t,e.values),n,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);K.currentNode=i;let n=K.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this._$AV.push(e),a=s[++r]}o!==a?.index&&(n=K.nextNode(),o++)}return K.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(X(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=J.get(t.strings);return void 0===e&&J.set(t.strings,e=new Z(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new tt(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const i=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,i[s+r],e,r),a===q&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class nt extends et{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??F)===q)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const rt=E.litHtmlPolyfillSupport;rt?.(Z,tt),(E.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class lt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new tt(e.insertBefore(O(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}lt._$litElement$=!0,lt.finalized=!0,at.litElementHydrateSupport?.({LitElement:lt});const ct=at.litElementPolyfillSupport;ct?.({LitElement:lt}),(at.litElementVersions??=[]).push("4.2.2");const dt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:$},ht=(t=dt,e,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ut(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return ut({...t,state:!0,attribute:!1})}const yt=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ft={monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"};function _t(t){const e=t%2*30;return`${Math.floor(t/2).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}function gt(t){const[e,s]=t.split(":").map(Number);return 2*e+Math.floor(s/30)}function bt(){const t=(new Date).getDay();return yt[0===t?6:t-1]}function vt(){const t=new Date;return 2*t.getHours()+Math.floor(t.getMinutes()/30)}function mt(t){const e={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]};for(const s of yt)e[s]=t[s].map(t=>({...t}));return e}function $t(t,e,s,i,n){const o=mt(t),r=_t(s),a=i>=48?"00:00":_t(i);o[e]=o[e].filter(t=>{const e=gt(t.start);return("00:00"===t.end?48:gt(t.end))<=s||e>=i});const l=[];for(const n of t[e]){const t=gt(n.start),e="00:00"===n.end?48:gt(n.end);t<s&&e>s&&l.push({start:n.start,end:_t(s),value:n.value}),t<i&&e>i&&l.push({start:_t(i),end:n.end,value:n.value})}return o[e].push({start:r,end:a,value:n}),o[e].push(...l),o[e]=function(t){if(0===t.length)return[];const e=[{...t[0]}];for(let s=1;s<t.length;s++){const i=e[e.length-1],n=t[s];("00:00"===i.end?48:gt(i.end))===gt(n.start)&&i.value===n.value?e[e.length-1]={start:i.start,end:n.end,value:i.value}:e.push({...n})}return e}(o[e].sort((t,e)=>gt(t.start)-gt(e.start))),o}function xt(t,e,s,i){const n=mt(t),o=[];for(const t of n[e]){const e=gt(t.start),n="00:00"===t.end?48:gt(t.end);n<=s||e>=i?o.push(t):(e<s&&o.push({start:t.start,end:_t(s),value:t.value}),n>i&&o.push({start:_t(i),end:t.end,value:t.value}))}return n[e]=o.sort((t,e)=>gt(t.start)-gt(e.start)),n}function wt(t,e,s){for(const i of t[e]){const t=gt(i.start),e="00:00"===i.end?48:gt(i.end);if(s>=t&&s<e)return i.value}return null}function Et(t,e,s){return null!==wt(t,e,s)}function St(t,e,s){const i=mt(t),n=i[e].map(t=>({...t}));for(const t of s)t!==e&&(i[t]=n.map(t=>({...t})));return i}function Ct(t,e){return{isSelecting:!0,startDay:t,startSlot:e,endDay:t,endSlot:e}}function At(t,e,s){return t.isSelecting?{...t,endDay:e,endSlot:s}:t}function kt(t,e){const s=e.getBoundingClientRect();let i,n;if("touches"in t){if(0===t.touches.length)return null;i=t.touches[0].clientX,n=t.touches[0].clientY}else i=t.clientX,n=t.clientY;const o=i-s.left,r=n-s.top,a=o-50;if(a<0)return null;const l=(s.width-50)/7,c=Math.floor(a/l);if(c<0||c>=7)return null;const d=r-37+e.scrollTop;if(d<0)return null;const h=(e.scrollHeight-37)/48,u=Math.floor(d/h);return u<0||u>=48?null:{day:yt[c],slot:u}}class Tt extends lt{constructor(){super(...arguments),this.schedule={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},this.helperType="input_number",this.defaultValue=50,this._selection={isSelecting:!1,startDay:null,startSlot:null,endDay:null,endSlot:null},this._currentSlot=vt(),this._currentDay=bt(),this._slotProgress=0,this._handleMouseMove=t=>{const e=this.shadowRoot?.querySelector(".grid-container");if(!e)return;const s=kt(t,e);s&&(this._selection=At(this._selection,s.day,s.slot))},this._handleMouseUp=()=>{document.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),document.body.style.userSelect="",document.body.style.webkitUserSelect="",this._finishSelection()}}connectedCallback(){super.connectedCallback(),this._startTimeUpdates()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimeUpdates()}_startTimeUpdates(){this._updateCurrentTime(),this._timeUpdateInterval=window.setInterval(()=>{this._updateCurrentTime()},3e4)}_stopTimeUpdates(){this._timeUpdateInterval&&clearInterval(this._timeUpdateInterval)}_updateCurrentTime(){this._currentSlot=vt(),this._currentDay=bt(),this._slotProgress=(new Date).getMinutes()%30/30}_handleMouseDown(t){const e=this.shadowRoot?.querySelector(".grid-container");if(!e)return;const s=kt(t,e);s&&(t.preventDefault(),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",this._selection=Ct(s.day,s.slot),document.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp))}_handleTouchStart(t){const e=this.shadowRoot?.querySelector(".grid-container");if(!e)return;const s=kt(t,e);s&&(t.preventDefault(),this._selection=Ct(s.day,s.slot))}_handleTouchMove(t){const e=this.shadowRoot?.querySelector(".grid-container");if(!e)return;const s=kt(t,e);s&&(t.preventDefault(),this._selection=At(this._selection,s.day,s.slot))}_handleTouchEnd(){this._finishSelection()}_finishSelection(){const t=function(t){if(!t.startDay||null===t.startSlot||!t.endDay||null===t.endSlot)return null;const e=yt.indexOf(t.startDay),s=yt.indexOf(t.endDay),i=Math.min(e,s),n=Math.max(e,s);return{days:yt.slice(i,n+1),startSlot:Math.min(t.startSlot,t.endSlot),endSlot:Math.max(t.startSlot,t.endSlot)+1}}(this._selection);if(this._selection={isSelecting:!1,startDay:null,startSlot:null,endDay:null,endSlot:null},!t)return;let e=!1;for(const s of t.days){for(let i=t.startSlot;i<t.endSlot;i++)if(Et(this.schedule,s,i)){e=!0;break}if(e)break}this.dispatchEvent(new CustomEvent("selection-complete",{detail:{days:t.days,startSlot:t.startSlot,endSlot:t.endSlot,action:e?"remove":"add"},bubbles:!0,composed:!0}))}_getIntensityClass(t){return null===t?"":"boolean"==typeof t?t?"intensity-high":"":t<=33?"intensity-low":t<=66?"intensity-medium":"intensity-high"}_renderTimeLabel(t){const e=_t(t);return B`
      <div class="time-label ${t%4==0?"even-hour":""}">
        ${t%2==0?e:B`&nbsp;`}
      </div>
    `}_renderCell(t,e){const s=wt(this.schedule,t,e),i=null!==s,n=function(t,e,s){if(!t.isSelecting||!t.startDay||null===t.startSlot||!t.endDay||null===t.endSlot)return!1;const i=yt.indexOf(t.startDay),n=yt.indexOf(t.endDay),o=Math.min(i,n),r=Math.max(i,n),a=yt.indexOf(e);if(a<o||a>r)return!1;const l=Math.min(t.startSlot,t.endSlot),c=Math.max(t.startSlot,t.endSlot);return s>=l&&s<=c}(this._selection,t,e),o=t===this._currentDay&&e===this._currentSlot,r=["cell",i?"active":"",i?this._getIntensityClass(s):"",n?"selected":"",o?"now-row":""].filter(Boolean).join(" ");return B`
      <div class="${r}" data-day="${t}" data-slot="${e}">
        ${o?B`<div
              class="now-indicator"
              style="top: ${100*this._slotProgress}%"
            ></div>`:""}
        ${i&&"input_number"===this.helperType&&"number"==typeof s?B`<span class="cell-value">${Math.round(s)}</span>`:""}
      </div>
    `}render(){const t=Array.from({length:48},(t,e)=>e);return B`
      <div
        class="grid-container"
        @mousedown=${this._handleMouseDown}
        @touchstart=${this._handleTouchStart}
        @touchmove=${this._handleTouchMove}
        @touchend=${this._handleTouchEnd}
      >
        <!-- Corner cell -->
        <div class="corner-cell"></div>

        <!-- Day headers -->
        ${yt.map(t=>B`
            <div class="header-cell ${t===this._currentDay?"today":""}">
              ${ft[t]}
            </div>
          `)}

        <!-- Grid rows -->
        ${t.map(t=>B`
            ${this._renderTimeLabel(t)}
            ${yt.map(e=>this._renderCell(e,t))}
          `)}
      </div>
    `}}Tt.styles=a`
    :host {
      display: block;
      --grid-bg: #fafafa;
      --grid-border: #e8e8e8;
      --header-bg: #f0f0f0;
      --cell-active: #5c9ece;
      --cell-hover: #f0f4f8;
      --cell-selected: rgba(92, 158, 206, 0.25);
      --now-indicator: #e57373;
      --text-primary: #37474f;
      --text-secondary: #78909c;
      --shadow-color: rgba(0, 0, 0, 0.08);
    }

    .grid-container {
      display: grid;
      grid-template-columns: 50px repeat(7, 1fr);
      grid-template-rows: 36px repeat(48, minmax(14px, 1fr));
      gap: 1px;
      background: var(--grid-border);
      border: 1px solid var(--grid-border);
      border-radius: 8px;
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 600px;
      max-height: 80vh;
      user-select: none;
      box-shadow: 0 2px 8px var(--shadow-color);
    }

    .header-cell {
      background: var(--header-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--text-primary);
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .header-cell.today {
      background: var(--cell-active);
      color: white;
    }

    .time-label {
      background: var(--grid-bg);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      font-size: 9px;
      color: var(--text-secondary);
      padding-top: 3px;
      position: sticky;
      left: 0;
      z-index: 1;
      min-height: 14px;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .time-label.even-hour {
      font-weight: 600;
      color: var(--text-primary);
    }

    .cell {
      background: var(--grid-bg);
      position: relative;
      cursor: pointer;
      transition: background-color 0.15s ease;
      min-height: 12px;
    }

    .cell:hover {
      background: var(--cell-hover);
    }

    .cell.active {
      background: var(--cell-active);
    }

    .cell.active.intensity-low {
      background: #a5c9e2;
    }

    .cell.active.intensity-medium {
      background: #7ab3d6;
    }

    .cell.active.intensity-high {
      background: var(--cell-active);
    }

    .cell.selected {
      background: var(--cell-selected) !important;
    }

    .cell.now-row {
      position: relative;
    }

    .now-indicator {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--now-indicator);
      z-index: 3;
      pointer-events: none;
      box-shadow: 0 0 4px var(--now-indicator);
    }

    .corner-cell {
      background: var(--header-bg);
      position: sticky;
      top: 0;
      left: 0;
      z-index: 3;
    }

    .cell-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 8px;
      color: white;
      font-weight: 600;
      pointer-events: none;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    /* Touch improvements */
    @media (pointer: coarse) {
      .cell {
        min-height: 16px;
      }
    }
  `,e([ut({type:Object})],Tt.prototype,"schedule",void 0),e([ut({type:String})],Tt.prototype,"helperType",void 0),e([ut({type:Number})],Tt.prototype,"defaultValue",void 0),e([pt()],Tt.prototype,"_selection",void 0),e([pt()],Tt.prototype,"_currentSlot",void 0),e([pt()],Tt.prototype,"_currentDay",void 0),e([pt()],Tt.prototype,"_slotProgress",void 0),customElements.get("schedule-grid")||customElements.define("schedule-grid",Tt);class Dt extends lt{constructor(){super(...arguments),this.enabled=!0,this.helperType="input_number",this.currentValue=50,this.helperEntity="",this._selectedDay="monday",this._inputValue=50}_handleCopyToAll(){this.dispatchEvent(new CustomEvent("copy-to-all",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleCopyToWorkdays(){this.dispatchEvent(new CustomEvent("copy-to-workdays",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleCopyToWeekend(){this.dispatchEvent(new CustomEvent("copy-to-weekend",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleClearDay(){this.dispatchEvent(new CustomEvent("clear-day",{detail:{day:this._selectedDay},bubbles:!0,composed:!0}))}_handleClearAll(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_handleToggleEnabled(){this.dispatchEvent(new CustomEvent("toggle-enabled",{detail:{enabled:!this.enabled},bubbles:!0,composed:!0}))}_handleValueChange(t){const e=t.target;this._inputValue=Number(e.value)}_handleValueConfirm(){this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}_handleDayChange(t){const e=t.target;this._selectedDay=e.value}render(){return B`
      <div class="toolbar">
        <!-- Enable/Disable toggle -->
        <div class="section enable-toggle">
          <span class="section-label">Schedule</span>
          <label class="toggle-switch">
            <input
              type="checkbox"
              .checked=${this.enabled}
              @change=${this._handleToggleEnabled}
            />
            <span class="toggle-slider"></span>
          </label>
          <span class="section-label">${this.enabled?"On":"Off"}</span>
        </div>

        <div class="divider"></div>

        <!-- Value input (for input_number only) -->
        ${"input_number"===this.helperType?B`
              <div class="section">
                <span class="section-label">Value:</span>
                <input
                  type="number"
                  class="value-input"
                  .value=${String(this._inputValue)}
                  @input=${this._handleValueChange}
                  @change=${this._handleValueConfirm}
                  min="0"
                  max="100"
                />
              </div>
              <div class="divider"></div>
            `:""}

        <!-- Day selection -->
        <div class="section">
          <span class="section-label">Copy from:</span>
          <select class="day-select" @change=${this._handleDayChange}>
            ${yt.map(t=>B`
                <option value="${t}" ?selected=${t===this._selectedDay}>
                  ${ft[t]}
                </option>
              `)}
          </select>
        </div>

        <!-- Copy buttons -->
        <div class="section">
          <button class="btn btn-primary" @click=${this._handleCopyToAll}>
            Copy to All
          </button>
          <button class="btn btn-primary" @click=${this._handleCopyToWorkdays}>
            Copy to Workdays
          </button>
          <button class="btn btn-primary" @click=${this._handleCopyToWeekend}>
            Copy to Weekend
          </button>
        </div>

        <div class="divider"></div>

        <!-- Clear buttons -->
        <div class="section">
          <button class="btn btn-secondary" @click=${this._handleClearDay}>
            Clear ${ft[this._selectedDay]}
          </button>
          <button class="btn btn-secondary" @click=${this._handleClearAll}>
            Clear All
          </button>
        </div>

        <!-- Helper info -->
        <div class="helper-info">
          Controlling: ${this.helperEntity}
        </div>
      </div>
    `}}Dt.styles=a`
    :host {
      display: block;
      --toolbar-bg: #f5f5f5;
      --toolbar-border: #e0e0e0;
      --btn-bg: #5c9ece;
      --btn-text: white;
      --btn-hover: #4a8ab8;
      --btn-secondary-bg: #e8e8e8;
      --btn-secondary-hover: #d0d0d0;
      --text-primary: #37474f;
      --text-secondary: #78909c;
      --input-bg: #ffffff;
      --shadow-color: rgba(0, 0, 0, 0.06);
    }

    .toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      padding: 14px 16px;
      background: var(--toolbar-bg);
      border: 1px solid var(--toolbar-border);
      border-radius: 8px;
      margin-bottom: 12px;
      align-items: center;
      box-shadow: 0 1px 4px var(--shadow-color);
    }

    .section {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-label {
      font-size: 12px;
      font-weight: 500;
      color: var(--text-secondary);
      white-space: nowrap;
    }

    .day-select {
      padding: 7px 12px;
      border: 1px solid var(--toolbar-border);
      border-radius: 6px;
      font-size: 13px;
      background: var(--input-bg);
      color: var(--text-primary);
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .day-select:focus {
      outline: none;
      border-color: var(--btn-bg);
    }

    .btn {
      padding: 7px 14px;
      border: none;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
      white-space: nowrap;
    }

    .btn:active {
      transform: scale(0.98);
    }

    .btn-primary {
      background: var(--btn-bg);
      color: var(--btn-text);
    }

    .btn-primary:hover {
      background: var(--btn-hover);
    }

    .btn-secondary {
      background: var(--btn-secondary-bg);
      color: var(--text-primary);
    }

    .btn-secondary:hover {
      background: var(--btn-secondary-hover);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .value-input {
      width: 60px;
      padding: 7px 10px;
      border: 1px solid var(--toolbar-border);
      border-radius: 6px;
      font-size: 13px;
      text-align: center;
      background: var(--input-bg);
      color: var(--text-primary);
      transition: border-color 0.2s;
    }

    .value-input:focus {
      outline: none;
      border-color: var(--btn-bg);
    }

    .enable-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .toggle-switch {
      position: relative;
      width: 42px;
      height: 22px;
    }

    .toggle-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #bdbdbd;
      transition: 0.3s;
      border-radius: 22px;
    }

    .toggle-slider:before {
      position: absolute;
      content: '';
      height: 18px;
      width: 18px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .toggle-switch input:checked + .toggle-slider {
      background-color: var(--btn-bg);
    }

    .toggle-switch input:checked + .toggle-slider:before {
      transform: translateX(20px);
    }

    .helper-info {
      font-size: 11px;
      color: var(--text-secondary);
      margin-left: auto;
      font-style: italic;
    }

    .divider {
      width: 1px;
      height: 24px;
      background: var(--toolbar-border);
    }

    @media (max-width: 600px) {
      .toolbar {
        flex-direction: column;
        align-items: stretch;
      }

      .section {
        justify-content: space-between;
      }

      .helper-info {
        margin-left: 0;
        text-align: center;
      }

      .divider {
        display: none;
      }
    }
  `,e([ut({type:Boolean})],Dt.prototype,"enabled",void 0),e([ut({type:String})],Dt.prototype,"helperType",void 0),e([ut({type:Number})],Dt.prototype,"currentValue",void 0),e([ut({type:String})],Dt.prototype,"helperEntity",void 0),e([pt()],Dt.prototype,"_selectedDay",void 0),e([pt()],Dt.prototype,"_inputValue",void 0),customElements.get("schedule-toolbar")||customElements.define("schedule-toolbar",Dt);const Mt="0.2.5";window.customCards=window.customCards||[];const Pt=window.customCards.find(t=>"weekly-scheduler-card"===t.type);function Ot(t){return`switch.weekly_schedule_${t.split(".").pop()||""}`}Pt?Pt.version=Mt:window.customCards.push({type:"weekly-scheduler-card",name:"Weekly Scheduler Card",description:"A card for managing weekly schedules for input helpers",preview:!0,version:Mt}),console.info(`%c WEEKLY-SCHEDULER-CARD %c v${Mt} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");class Ut extends lt{constructor(){super(...arguments),this._schedule={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},this._enabled=!0,this._helperType="input_number",this._helperEntity="",this._currentValue=50,this._defaultValue=50,this._scheduleEntity="",this._isCreating=!1}setConfig(t){if(!t.entity&&!t.helper_entity)throw new Error("Please define a helper_entity or entity");this.config=t}getCardSize(){return 8}updated(t){super.updated(t),t.has("hass")&&this.hass&&this.config&&this._updateFromEntity()}_getScheduleEntityId(){return this.config?.entity?this.config.entity:this.config?.helper_entity?Ot(this.config.helper_entity):""}_scheduleExists(){const t=this._getScheduleEntityId();return""!==t&&void 0!==this.hass?.states[t]}_updateFromEntity(){if(!this.hass||!this.config)return;const t=this._getScheduleEntityId();this._scheduleEntity=t;const e=this.hass.states[t];if(!e)return void(this.config.helper_entity&&(this._helperEntity=this.config.helper_entity,this._helperEntity.startsWith("input_number.")?this._helperType="input_number":this._helperEntity.startsWith("input_boolean.")&&(this._helperType="input_boolean")));const s=e.attributes;if(s.schedule&&(this._schedule=s.schedule),s.helper_type&&(this._helperType=s.helper_type),s.helper_entity&&(this._helperEntity=s.helper_entity),this._enabled="on"===e.state,this._helperEntity&&this.hass.states[this._helperEntity]){const t=this.hass.states[this._helperEntity];"input_number"===this._helperType&&(this._currentValue=parseFloat(t.state)||0)}}async _createSchedule(){if(this.hass&&this.config?.helper_entity){this._isCreating=!0;try{await this.hass.callService("weekly_scheduler","create_schedule",{helper_entity:this.config.helper_entity}),await new Promise(t=>setTimeout(t,1e3)),this._updateFromEntity()}catch(t){console.error("Failed to create schedule:",t)}finally{this._isCreating=!1}}}async _updateSchedule(t){if(this.hass&&this._scheduleEntity){this._schedule=t;try{await this.hass.callService("weekly_scheduler","set_schedule",{entity_id:this._scheduleEntity,schedule:t})}catch(t){console.error("Failed to update schedule:",t)}}}async _handleSelectionComplete(t){const{days:e,startSlot:s,endSlot:i,action:n}=t.detail;let o=mt(this._schedule);for(const t of e)if("add"===n){o=$t(o,t,s,i,"input_boolean"===this._helperType||this._defaultValue)}else o=xt(o,t,s,i);await this._updateSchedule(o)}async _handleCopyToAll(t){const{sourceDay:e}=t.detail,s=St(this._schedule,e,yt);await this._updateSchedule(s)}async _handleCopyToWorkdays(t){const{sourceDay:e}=t.detail,s=St(this._schedule,e,["monday","tuesday","wednesday","thursday","friday"]);await this._updateSchedule(s)}async _handleCopyToWeekend(t){const{sourceDay:e}=t.detail,s=St(this._schedule,e,["saturday","sunday"]);await this._updateSchedule(s)}async _handleClearDay(t){const{day:e}=t.detail,s=mt(this._schedule);s[e]=[],await this._updateSchedule(s)}async _handleClearAll(){await this._updateSchedule({monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]})}async _handleToggleEnabled(t){if(!this.hass||!this._scheduleEntity)return;const{enabled:e}=t.detail;try{await this.hass.callService("switch",e?"turn_on":"turn_off",{entity_id:this._scheduleEntity})}catch(t){console.error("Failed to toggle schedule:",t)}}_handleValueChange(t){this._defaultValue=t.detail.value}_renderCreateSchedule(){const t=this.config?.helper_entity||"",e=this.hass?.states[t],s=e?.attributes?.friendly_name||t;return B`
      <ha-card>
        <div class="card">
          <div class="header">
            <div class="title">${this.config?.title||"Weekly Schedule"}</div>
          </div>

          <div class="create-schedule">
            <div class="create-schedule-icon">
              <ha-icon icon="mdi:calendar-plus"></ha-icon>
            </div>
            <div class="create-schedule-helper">
              Helper: <strong>${s}</strong>
            </div>
            <div class="create-schedule-text">
              No schedule exists for this helper yet.
            </div>
            <button
              class="create-button"
              @click=${this._createSchedule}
              ?disabled=${this._isCreating}
            >
              <ha-icon icon="mdi:plus"></ha-icon>
              ${this._isCreating?"Creating...":"Create Schedule"}
            </button>
          </div>
        </div>
      </ha-card>
    `}render(){if(!this.config)return B`<div class="error">Invalid configuration</div>`;if(!this.hass)return B`<div class="error">Home Assistant not available</div>`;if(this.config.helper_entity){if(!this.hass.states[this.config.helper_entity])return B`<div class="error">
          Helper entity not found: ${this.config.helper_entity}
        </div>`}if(!this._scheduleExists())return this.config.helper_entity?this._renderCreateSchedule():B`<div class="error">
        Entity not found: ${this.config.entity}
      </div>`;const t=this.hass.states[this._scheduleEntity];if(!t)return B`<div class="error">
        Entity not found: ${this._scheduleEntity}
      </div>`;const e=this.config.title||t.attributes.friendly_name||"Weekly Schedule";return B`
      <ha-card>
        <div class="card">
          <div class="header">
            <div class="title">${e}</div>
            <div class="status ${this._enabled?"":"disabled"}">
              ${this._enabled?"Active":"Disabled"}
            </div>
          </div>

          <schedule-toolbar
            .enabled=${this._enabled}
            .helperType=${this._helperType}
            .currentValue=${this._currentValue}
            .helperEntity=${this._helperEntity}
            @copy-to-all=${this._handleCopyToAll}
            @copy-to-workdays=${this._handleCopyToWorkdays}
            @copy-to-weekend=${this._handleCopyToWeekend}
            @clear-day=${this._handleClearDay}
            @clear-all=${this._handleClearAll}
            @toggle-enabled=${this._handleToggleEnabled}
            @value-change=${this._handleValueChange}
          ></schedule-toolbar>

          <schedule-grid
            .schedule=${this._schedule}
            .helperType=${this._helperType}
            .defaultValue=${this._defaultValue}
            @selection-complete=${this._handleSelectionComplete}
          ></schedule-grid>
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("weekly-scheduler-card-editor")}static getStubConfig(){return{helper_entity:"",title:"Weekly Schedule"}}}Ut.styles=a`
    :host {
      display: block;
      --card-bg: #ffffff;
      --text-primary: #37474f;
      --text-secondary: #78909c;
      --accent-color: #5c9ece;
      --success-color: #66bb6a;
      --disabled-color: #b0bec5;
      --shadow-color: rgba(0, 0, 0, 0.1);
    }

    .card {
      padding: 20px;
      background: var(--card-bg);
      border-radius: 12px;
      box-shadow: 0 2px 12px var(--shadow-color);
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      color: var(--text-primary);
      letter-spacing: -0.3px;
    }

    .status {
      font-size: 11px;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 16px;
      background: var(--success-color);
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .status.disabled {
      background: var(--disabled-color);
    }

    .error {
      padding: 20px;
      color: #e57373;
      text-align: center;
      font-weight: 500;
    }

    .create-schedule {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      text-align: center;
    }

    .create-schedule-icon {
      font-size: 48px;
      margin-bottom: 16px;
      opacity: 0.6;
    }

    .create-schedule-text {
      font-size: 14px;
      color: var(--text-secondary);
      margin-bottom: 20px;
    }

    .create-schedule-helper {
      font-size: 12px;
      color: var(--text-secondary);
      margin-bottom: 8px;
    }

    .create-schedule-helper strong {
      color: var(--text-primary);
    }

    .create-button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 24px;
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    .create-button:hover {
      background: #4a8bb8;
    }

    .create-button:disabled {
      background: var(--disabled-color);
      cursor: not-allowed;
    }

    .create-button ha-icon {
      --mdc-icon-size: 20px;
    }
  `,e([ut({attribute:!1})],Ut.prototype,"hass",void 0),e([ut({type:Object})],Ut.prototype,"config",void 0),e([pt()],Ut.prototype,"_schedule",void 0),e([pt()],Ut.prototype,"_enabled",void 0),e([pt()],Ut.prototype,"_helperType",void 0),e([pt()],Ut.prototype,"_helperEntity",void 0),e([pt()],Ut.prototype,"_currentValue",void 0),e([pt()],Ut.prototype,"_defaultValue",void 0),e([pt()],Ut.prototype,"_scheduleEntity",void 0),e([pt()],Ut.prototype,"_isCreating",void 0);class Ht extends lt{constructor(){super(...arguments),this._helperEntitiesCache=[]}_updateHelperEntitiesCache(){if(!this.hass)return;const t=Object.keys(this.hass.states).filter(t=>t.startsWith("input_number.")||t.startsWith("input_boolean.")).sort();JSON.stringify(t)!==JSON.stringify(this._helperEntitiesCache)&&(this._helperEntitiesCache=t)}firstUpdated(){this._updateHelperEntitiesCache()}updated(t){super.updated(t),t.has("hass")&&this.hass&&this._updateHelperEntitiesCache()}setConfig(t){this._config=t}_getHelperEntities(){return this._helperEntitiesCache.length>0?this._helperEntitiesCache:this.hass?Object.keys(this.hass.states).filter(t=>t.startsWith("input_number.")||t.startsWith("input_boolean.")).sort():[]}_hasSchedule(t){if(!this.hass)return!1;const e=Ot(t);return void 0!==this.hass.states[e]}_getScheduleEntities(){return this.hass?Object.keys(this.hass.states).filter(t=>t.startsWith("switch.")&&void 0!==this.hass.states[t].attributes?.schedule):[]}_valueChanged(t){if(!this._config)return;const e=t.target;let s={...this._config};s="helper_entity"===e.name?{...s,helper_entity:e.value,entity:void 0}:"entity"===e.name?{...s,entity:e.value,helper_entity:void 0}:"checkbox"===e.type?{...s,[e.name]:e.checked}:{...s,[e.name]:e.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}render(){if(!this.hass)return B``;const t=this._getHelperEntities(),e=this._getScheduleEntities();return this._config?.entity&&this._config,B`
      <div class="editor">
        <div class="row">
          <label>Helper Entity (Recommended)</label>
          <select
            name="helper_entity"
            .value=${this._config?.helper_entity||""}
            @change=${this._valueChanged}
          >
            <option value="">Select a helper entity...</option>
            ${t.map(t=>{const e=this.hass.states[t],s=e?.attributes?.friendly_name||t,i=this._hasSchedule(t);return B`
                <option
                  value="${t}"
                  ?selected=${t===this._config?.helper_entity}
                >
                  ${s} ${i?"(has schedule)":""}
                </option>
              `})}
          </select>
          <div class="info-text">
            Select the input_number or input_boolean you want to schedule.
            A schedule will be created automatically if it doesn't exist.
          </div>
        </div>

        ${e.length>0?B`
              <div class="row">
                <label>Or select existing schedule (Legacy)</label>
                <select
                  name="entity"
                  .value=${this._config?.entity||""}
                  @change=${this._valueChanged}
                >
                  <option value="">Select an existing schedule...</option>
                  ${e.map(t=>B`
                      <option
                        value="${t}"
                        ?selected=${t===this._config?.entity}
                      >
                        ${this.hass.states[t].attributes?.friendly_name||t}
                      </option>
                    `)}
                </select>
              </div>
            `:""}

        <div class="row">
          <label>Title (optional)</label>
          <input
            type="text"
            name="title"
            .value=${this._config?.title||""}
            @input=${this._valueChanged}
            placeholder="Weekly Schedule"
          />
        </div>
      </div>
    `}}Ht.styles=a`
    .editor {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    label {
      font-size: 12px;
      font-weight: 500;
      color: var(--secondary-text-color);
    }

    input,
    select {
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      font-size: 14px;
    }

    .helper-option {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .has-schedule {
      color: var(--success-color, #66bb6a);
      font-size: 11px;
    }

    .info-text {
      font-size: 11px;
      color: var(--secondary-text-color);
      margin-top: 4px;
      font-style: italic;
    }
  `,e([ut({attribute:!1})],Ht.prototype,"hass",void 0),e([ut({type:Object})],Ht.prototype,"_config",void 0),e([pt()],Ht.prototype,"_helperEntitiesCache",void 0),customElements.get("weekly-scheduler-card")||customElements.define("weekly-scheduler-card",Ut),customElements.get("weekly-scheduler-card-editor")||customElements.define("weekly-scheduler-card-editor",Ht),t.CARD_VERSION=Mt,t.WeeklySchedulerCard=Ut,t.WeeklySchedulerCardEditor=Ht}({});
