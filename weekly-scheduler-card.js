/*! weekly-scheduler-card v0.3.5 */
!function(e){"use strict";function t(e,t,s,i){var n,o=arguments.length,r=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(o<3?n(r):o>3?n(t,s,r):n(t,s))||r);return o>3&&r&&Object.defineProperty(t,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new r(s,e,n)},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:y}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},$=(e,t)=>!d(e,t),x={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const o=i?.call(this);n?.call(this,t),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),n=s.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:m;this._$Em=i;const o=n.fromAttribute(t,e.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){const o=this.constructor;if(!1===i&&(n=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??$)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,b?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,E=e=>e,C=S.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+T,M=`<${D}>`,O=document,P=()=>O.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,N=/>/g,W=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),J=new WeakMap,K=O.createTreeWalker(O,129);function Y(e,t){if(!H(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const X=(e,t)=>{const s=e.length-1,i=[];let n,o=2===t?"<svg>":3===t?"<math>":"",r=z;for(let t=0;t<s;t++){const s=e[t];let a,l,d=-1,c=0;for(;c<s.length&&(r.lastIndex=c,l=r.exec(s),null!==l);)c=r.lastIndex,r===z?"!--"===l[1]?r=V:void 0!==l[1]?r=N:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=W):void 0!==l[3]&&(r=W):r===W?">"===l[0]?(r=n??z,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?W:'"'===l[3]?I:j):r===I||r===j?r=W:r===V||r===N?r=z:(r=W,n=void 0);const h=r===W&&e[t+1].startsWith("/>")?" ":"";o+=r===z?s+M:d>=0?(i.push(a),s.slice(0,d)+k+s.slice(d)+T+h):s+T+(-2===d?t:h)}return[Y(e,o+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Z{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const r=e.length-1,a=this.parts,[l,d]=X(e,t);if(this.el=Z.createElement(l,s),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(k)){const t=d[o++],s=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:r[2],strings:s,ctor:"."===r[1]?se:"?"===r[1]?ie:"@"===r[1]?ne:te}),i.removeAttribute(e)}else e.startsWith(T)&&(a.push({type:6,index:n}),i.removeAttribute(e));if(L.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],P()),K.nextNode(),a.push({type:2,index:++n});i.append(e[t],P())}}}else if(8===i.nodeType)if(i.data===D)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)a.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const s=O.createElement("template");return s.innerHTML=e,s}}function G(e,t,s=e,i){if(t===q)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=G(e,n._$AS(e,t.values),n,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??O).importNode(t,!0);K.currentNode=i;let n=K.nextNode(),o=0,r=0,a=s[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new ee(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new oe(n,this,e)),this._$AV.push(t),a=s[++r]}o!==a?.index&&(n=K.nextNode(),o++)}return K.currentNode=O,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),U(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>H(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=Z.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new Z(e)),t}k(e){H(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new ee(this.O(P()),this.O(P()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(void 0===n)e=G(this,e,t,0),o=!U(e)||e!==this._$AH&&e!==q,o&&(this._$AH=e);else{const i=e;let r,a;for(e=n[0],r=0;r<n.length-1;r++)a=G(this,i[s+r],t,r),a===q&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===F?e=F:e!==F&&(e+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ie extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ne extends te{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??F)===q)return;const s=this._$AH,i=e===F&&s!==F||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const re=S.litHtmlPolyfillSupport;re?.(Z,ee),(S.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;class le extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new ee(t.insertBefore(P(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}le._$litElement$=!0,le.finalized=!0,ae.litElementHydrateSupport?.({LitElement:le});const de=ae.litElementPolyfillSupport;de?.({LitElement:le}),(ae.litElementVersions??=[]).push("4.2.2");const ce={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:$},he=(e=ce,t,s)=>{const{kind:i,metadata:n}=s;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),o.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ue(e){return(t,s)=>"object"==typeof s?he(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function pe(e){return ue({...e,state:!0,attribute:!1})}const ye=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],ge={monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"};function fe(e){const t=e%2*30;return`${Math.floor(e/2).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function _e(e){const[t,s]=e.split(":").map(Number);return 2*t+Math.floor(s/30)}function be(){const e=(new Date).getDay();return ye[0===e?6:e-1]}function ve(){const e=new Date;return 2*e.getHours()+Math.floor(e.getMinutes()/30)}function me(e){const t={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]};for(const s of ye)t[s]=e[s].map(e=>({...e}));return t}function $e(e,t,s,i,n){const o=me(e),r=fe(s),a=i>=48?"00:00":fe(i);o[t]=o[t].filter(e=>{const t=_e(e.start);return("00:00"===e.end?48:_e(e.end))<=s||t>=i});const l=[];for(const n of e[t]){const e=_e(n.start),t="00:00"===n.end?48:_e(n.end);e<s&&t>s&&l.push({start:n.start,end:fe(s),value:n.value}),e<i&&t>i&&l.push({start:fe(i),end:n.end,value:n.value})}return o[t].push({start:r,end:a,value:n}),o[t].push(...l),o[t]=function(e){if(0===e.length)return[];const t=[{...e[0]}];for(let s=1;s<e.length;s++){const i=t[t.length-1],n=e[s];("00:00"===i.end?48:_e(i.end))===_e(n.start)&&i.value===n.value?t[t.length-1]={start:i.start,end:n.end,value:i.value}:t.push({...n})}return t}(o[t].sort((e,t)=>_e(e.start)-_e(t.start))),o}function xe(e,t,s,i){const n=me(e),o=[];for(const e of n[t]){const t=_e(e.start),n="00:00"===e.end?48:_e(e.end);n<=s||t>=i?o.push(e):(t<s&&o.push({start:e.start,end:fe(s),value:e.value}),n>i&&o.push({start:fe(i),end:e.end,value:e.value}))}return n[t]=o.sort((e,t)=>_e(e.start)-_e(t.start)),n}function we(e,t,s){for(const i of e[t]){const e=_e(i.start),t="00:00"===i.end?48:_e(i.end);if(s>=e&&s<t)return i.value}return null}function Se(e,t,s){const i=me(e),n=i[t].map(e=>({...e}));for(const e of s)e!==t&&(i[e]=n.map(e=>({...e})));return i}function Ee(e,t){return{isSelecting:!0,startDay:e,startSlot:t,endDay:e,endSlot:t}}function Ce(e,t,s){return e.isSelecting?{...e,endDay:t,endSlot:s}:e}function Ae(e,t){const s=t.getBoundingClientRect();let i,n;if("touches"in e){if(0===e.touches.length)return null;i=e.touches[0].clientX,n=e.touches[0].clientY}else i=e.clientX,n=e.clientY;const o=i-s.left,r=n-s.top,a=o-50;if(a<0)return null;const l=(s.width-50)/7,d=Math.floor(a/l);if(d<0||d>=7)return null;const c=r-37+t.scrollTop;if(c<0)return null;const h=(t.scrollHeight-37)/48,u=Math.floor(c/h);return u<0||u>=48?null:{day:ye[d],slot:u}}class ke extends le{constructor(){super(...arguments),this.schedule={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},this.helperType="input_number",this.defaultValue=50,this._selection={isSelecting:!1,startDay:null,startSlot:null,endDay:null,endSlot:null},this._currentSlot=ve(),this._currentDay=be(),this._slotProgress=0,this._handleMouseMove=e=>{const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Ae(e,t);s&&(this._selection=Ce(this._selection,s.day,s.slot))},this._handleMouseUp=()=>{document.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),document.body.style.userSelect="",document.body.style.webkitUserSelect="",this._finishSelection()}}connectedCallback(){super.connectedCallback(),this._startTimeUpdates()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimeUpdates()}_startTimeUpdates(){this._updateCurrentTime(),this._timeUpdateInterval=window.setInterval(()=>{this._updateCurrentTime()},3e4)}_stopTimeUpdates(){this._timeUpdateInterval&&clearInterval(this._timeUpdateInterval)}_updateCurrentTime(){this._currentSlot=ve(),this._currentDay=be(),this._slotProgress=(new Date).getMinutes()%30/30}_handleMouseDown(e){const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Ae(e,t);s&&(e.preventDefault(),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",this._selection=Ee(s.day,s.slot),document.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp))}_handleTouchStart(e){const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Ae(e,t);s&&(e.preventDefault(),this._selection=Ee(s.day,s.slot))}_handleTouchMove(e){const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Ae(e,t);s&&(e.preventDefault(),this._selection=Ce(this._selection,s.day,s.slot))}_handleTouchEnd(){this._finishSelection()}_finishSelection(){const e=function(e){if(!e.startDay||null===e.startSlot||!e.endDay||null===e.endSlot)return null;const t=ye.indexOf(e.startDay),s=ye.indexOf(e.endDay),i=Math.min(t,s),n=Math.max(t,s);return{days:ye.slice(i,n+1),startSlot:Math.min(e.startSlot,e.endSlot),endSlot:Math.max(e.startSlot,e.endSlot)+1}}(this._selection);if(this._selection={isSelecting:!1,startDay:null,startSlot:null,endDay:null,endSlot:null},!e)return;const t=e.days[0],s=e.startSlot,i=we(this.schedule,t,s);let n;n="input_boolean"===this.helperType?"toggle":"add",this.dispatchEvent(new CustomEvent("selection-complete",{detail:{days:e.days,startSlot:e.startSlot,endSlot:e.endSlot,action:n,currentValue:i},bubbles:!0,composed:!0}))}_getIntensityClass(e){return null===e?"":"boolean"==typeof e?e?"boolean-on":"boolean-off":e<=33?"intensity-low":e<=66?"intensity-medium":"intensity-high"}_formatValue(e){if(Number.isInteger(e))return String(e);const t=Math.round(10*e)/10;return String(t)}_renderTimeLabel(e){const t=fe(e);return B`
      <div class="time-label ${e%4==0?"even-hour":""}">
        ${e%2==0?t:B`&nbsp;`}
      </div>
    `}_renderCell(e,t){const s=we(this.schedule,e,t),i=null!==s,n=function(e,t,s){if(!e.isSelecting||!e.startDay||null===e.startSlot||!e.endDay||null===e.endSlot)return!1;const i=ye.indexOf(e.startDay),n=ye.indexOf(e.endDay),o=Math.min(i,n),r=Math.max(i,n),a=ye.indexOf(t);if(a<o||a>r)return!1;const l=Math.min(e.startSlot,e.endSlot),d=Math.max(e.startSlot,e.endSlot);return s>=l&&s<=d}(this._selection,e,t),o=e===this._currentDay&&t===this._currentSlot,r=["cell",i?"active":"",i?this._getIntensityClass(s):"",n?"selected":"",o?"now-row":""].filter(Boolean).join(" ");return B`
      <div class="${r}" data-day="${e}" data-slot="${t}">
        ${o?B`<div
              class="now-indicator"
              style="top: ${100*this._slotProgress}%"
            ></div>`:""}
        ${i&&"input_number"===this.helperType&&"number"==typeof s?B`<span class="cell-value">${this._formatValue(s)}</span>`:""}
        ${i&&"input_boolean"===this.helperType&&"boolean"==typeof s?B`<span class="cell-value">${s?"ON":"OFF"}</span>`:""}
      </div>
    `}render(){const e=Array.from({length:48},(e,t)=>t);return B`
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
        ${ye.map(e=>B`
            <div class="header-cell ${e===this._currentDay?"today":""}">
              ${ge[e]}
            </div>
          `)}

        <!-- Grid rows -->
        ${e.map(e=>B`
            ${this._renderTimeLabel(e)}
            ${ye.map(t=>this._renderCell(t,e))}
          `)}
      </div>
    `}}ke.styles=a`
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
      padding-top: 0;
      margin-top: -5px;
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

    .cell.active.boolean-off {
      background: #e88a5c;
    }

    .cell.active.boolean-on {
      background: #66bb6a;
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
      font-size: 7px;
      color: white;
      font-weight: 600;
      pointer-events: none;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 90%;
    }

    /* Touch improvements */
    @media (pointer: coarse) {
      .cell {
        min-height: 16px;
      }
    }
  `,t([ue({type:Object})],ke.prototype,"schedule",void 0),t([ue({type:String})],ke.prototype,"helperType",void 0),t([ue({type:Number})],ke.prototype,"defaultValue",void 0),t([pe()],ke.prototype,"_selection",void 0),t([pe()],ke.prototype,"_currentSlot",void 0),t([pe()],ke.prototype,"_currentDay",void 0),t([pe()],ke.prototype,"_slotProgress",void 0),customElements.get("schedule-grid")||customElements.define("schedule-grid",ke);class Te extends le{constructor(){super(...arguments),this.enabled=!0,this.helperType="input_number",this.currentValue=50,this.helperEntity="",this._selectedDay="monday",this._inputValue=50}_handleCopyToAll(){this.dispatchEvent(new CustomEvent("copy-to-all",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleCopyToWorkdays(){this.dispatchEvent(new CustomEvent("copy-to-workdays",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleCopyToWeekend(){this.dispatchEvent(new CustomEvent("copy-to-weekend",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleClearDay(){this.dispatchEvent(new CustomEvent("clear-day",{detail:{day:this._selectedDay},bubbles:!0,composed:!0}))}_handleClearAll(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_handleToggleEnabled(){this.dispatchEvent(new CustomEvent("toggle-enabled",{detail:{enabled:!this.enabled},bubbles:!0,composed:!0}))}_handleValueChange(e){const t=e.target;this._inputValue=Number(t.value)}_handleValueConfirm(){this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}_handleDayChange(e){const t=e.target;this._selectedDay=t.value}render(){return B`
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

        <!-- Value input (for input_number only, boolean uses toggle) -->
        ${"input_number"===this.helperType?B`
              <div class="section">
                <span class="section-label">Value:</span>
                <input
                  type="number"
                  class="value-input"
                  .value=${String(this._inputValue)}
                  @input=${this._handleValueChange}
                  @change=${this._handleValueConfirm}
                  step="any"
                />
              </div>
              <div class="divider"></div>
            `:""}

        <!-- Day selection -->
        <div class="section">
          <span class="section-label">Copy from:</span>
          <select class="day-select" @change=${this._handleDayChange}>
            ${ye.map(e=>B`
                <option value="${e}" ?selected=${e===this._selectedDay}>
                  ${ge[e]}
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
            Clear ${ge[this._selectedDay]}
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
    `}}Te.styles=a`
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
      width: 80px;
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
        padding: 12px;
        gap: 10px;
      }

      .section {
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 6px;
      }

      .helper-info {
        margin-left: 0;
        text-align: center;
      }

      .divider {
        display: none;
      }

      .btn {
        padding: 8px 10px;
        font-size: 11px;
        flex: 1;
        min-width: 0;
      }

      .day-select {
        flex: 1;
        min-width: 80px;
      }
    }

    @media (max-width: 400px) {
      .toolbar {
        padding: 10px;
        gap: 8px;
      }

      .section {
        gap: 4px;
      }

      .section-label {
        font-size: 11px;
      }

      .btn {
        padding: 6px 8px;
        font-size: 10px;
      }

      .value-input {
        width: 65px;
        padding: 6px 8px;
        font-size: 12px;
      }

      .day-select {
        padding: 6px 8px;
        font-size: 12px;
      }
    }
  `,t([ue({type:Boolean})],Te.prototype,"enabled",void 0),t([ue({type:String})],Te.prototype,"helperType",void 0),t([ue({type:Number})],Te.prototype,"currentValue",void 0),t([ue({type:String})],Te.prototype,"helperEntity",void 0),t([pe()],Te.prototype,"_selectedDay",void 0),t([pe()],Te.prototype,"_inputValue",void 0),customElements.get("schedule-toolbar")||customElements.define("schedule-toolbar",Te);const De="0.3.5";window.customCards=window.customCards||[];const Me=window.customCards.find(e=>"weekly-scheduler-card"===e.type);function Oe(e){return`switch.weekly_schedule_${e.split(".").pop()||""}`}Me?Me.version=De:window.customCards.push({type:"weekly-scheduler-card",name:"Weekly Scheduler Card",description:"A card for managing weekly schedules for input helpers",preview:!0,version:De}),console.info(`%c WEEKLY-SCHEDULER-CARD %c v${De} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");class Pe extends le{constructor(){super(...arguments),this._schedule={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},this._enabled=!0,this._helperType="input_number",this._helperEntity="",this._currentValue=50,this._defaultValue=50,this._scheduleEntity="",this._isCreating=!1}setConfig(e){if(!e.entity&&!e.helper_entity)throw new Error("Please define a helper_entity or entity");this.config=e}getCardSize(){return 8}updated(e){super.updated(e),e.has("hass")&&this.hass&&this.config&&this._updateFromEntity()}_getScheduleEntityId(){return this.config?.entity?this.config.entity:this.config?.helper_entity?Oe(this.config.helper_entity):""}_scheduleExists(){const e=this._getScheduleEntityId();return""!==e&&void 0!==this.hass?.states[e]}_updateFromEntity(){if(!this.hass||!this.config)return;const e=this._getScheduleEntityId();this._scheduleEntity=e;const t=this.hass.states[e];if(!t)return void(this.config.helper_entity&&(this._helperEntity=this.config.helper_entity,this._helperEntity.startsWith("input_number.")?this._helperType="input_number":this._helperEntity.startsWith("input_boolean.")&&(this._helperType="input_boolean")));const s=t.attributes;if(s.schedule&&(this._schedule=s.schedule),s.helper_type&&(this._helperType=s.helper_type),s.helper_entity&&(this._helperEntity=s.helper_entity),this._enabled="on"===t.state,this._helperEntity&&this.hass.states[this._helperEntity]){const e=this.hass.states[this._helperEntity];"input_number"===this._helperType&&(this._currentValue=parseFloat(e.state)||0)}}async _createSchedule(){if(this.hass&&this.config?.helper_entity){this._isCreating=!0;try{await this.hass.callService("weekly_scheduler","create_schedule",{helper_entity:this.config.helper_entity}),await new Promise(e=>setTimeout(e,1e3)),this._updateFromEntity()}catch(e){console.error("Failed to create schedule:",e)}finally{this._isCreating=!1}}}async _updateSchedule(e){if(this.hass&&this._scheduleEntity){this._schedule=e;try{await this.hass.callService("weekly_scheduler","set_schedule",{entity_id:this._scheduleEntity,schedule:e})}catch(e){console.error("Failed to update schedule:",e)}}}async _handleSelectionComplete(e){const{days:t,startSlot:s,endSlot:i,action:n,currentValue:o}=e.detail;let r=me(this._schedule);for(const e of t)if("toggle"===n){r=$e(r,e,s,i,!0!==o)}else r="add"===n?$e(r,e,s,i,this._defaultValue):xe(r,e,s,i);await this._updateSchedule(r)}async _handleCopyToAll(e){const{sourceDay:t}=e.detail,s=Se(this._schedule,t,ye);await this._updateSchedule(s)}async _handleCopyToWorkdays(e){const{sourceDay:t}=e.detail,s=Se(this._schedule,t,["monday","tuesday","wednesday","thursday","friday"]);await this._updateSchedule(s)}async _handleCopyToWeekend(e){const{sourceDay:t}=e.detail,s=Se(this._schedule,t,["saturday","sunday"]);await this._updateSchedule(s)}async _handleClearDay(e){const{day:t}=e.detail,s=me(this._schedule);s[t]=[],await this._updateSchedule(s)}async _handleClearAll(){await this._updateSchedule({monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]})}async _handleToggleEnabled(e){if(!this.hass||!this._scheduleEntity)return;const{enabled:t}=e.detail;try{await this.hass.callService("switch",t?"turn_on":"turn_off",{entity_id:this._scheduleEntity})}catch(e){console.error("Failed to toggle schedule:",e)}}_handleValueChange(e){this._defaultValue=e.detail.value}_renderCreateSchedule(){const e=this.config?.helper_entity||"",t=this.hass?.states[e],s=t?.attributes?.friendly_name||e;return B`
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
      </div>`;const e=this.hass.states[this._scheduleEntity];if(!e)return B`<div class="error">
        Entity not found: ${this._scheduleEntity}
      </div>`;const t=this.config.title||e.attributes.friendly_name||"Weekly Schedule";return B`
      <ha-card>
        <div class="card">
          <div class="header">
            <div class="title">${t}</div>
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
    `}static getConfigElement(){return document.createElement("weekly-scheduler-card-editor")}static getStubConfig(){return{helper_entity:"",title:"Weekly Schedule"}}}Pe.styles=a`
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
  `,t([ue({attribute:!1})],Pe.prototype,"hass",void 0),t([ue({type:Object})],Pe.prototype,"config",void 0),t([pe()],Pe.prototype,"_schedule",void 0),t([pe()],Pe.prototype,"_enabled",void 0),t([pe()],Pe.prototype,"_helperType",void 0),t([pe()],Pe.prototype,"_helperEntity",void 0),t([pe()],Pe.prototype,"_currentValue",void 0),t([pe()],Pe.prototype,"_defaultValue",void 0),t([pe()],Pe.prototype,"_scheduleEntity",void 0),t([pe()],Pe.prototype,"_isCreating",void 0);class Ue extends le{constructor(){super(...arguments),this._helperEntitiesCache=[]}_updateHelperEntitiesCache(){if(!this.hass)return;const e=Object.keys(this.hass.states).filter(e=>e.startsWith("input_number.")||e.startsWith("input_boolean.")).sort();JSON.stringify(e)!==JSON.stringify(this._helperEntitiesCache)&&(this._helperEntitiesCache=e)}firstUpdated(){this._updateHelperEntitiesCache()}updated(e){super.updated(e),e.has("hass")&&this.hass&&this._updateHelperEntitiesCache()}setConfig(e){this._config=e}_getHelperEntities(){return this._helperEntitiesCache.length>0?this._helperEntitiesCache:this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith("input_number.")||e.startsWith("input_boolean.")).sort():[]}_hasSchedule(e){if(!this.hass)return!1;const t=Oe(e);return void 0!==this.hass.states[t]}_getScheduleEntities(){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith("switch.")&&void 0!==this.hass.states[e].attributes?.schedule):[]}_valueChanged(e){if(!this._config)return;const t=e.target;let s={...this._config};s="helper_entity"===t.name?{...s,helper_entity:t.value,entity:void 0}:"entity"===t.name?{...s,entity:t.value,helper_entity:void 0}:"checkbox"===t.type?{...s,[t.name]:t.checked}:{...s,[t.name]:t.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}render(){if(!this.hass)return B``;const e=this._getHelperEntities(),t=this._getScheduleEntities();return this._config?.entity&&this._config,B`
      <div class="editor">
        <div class="row">
          <label>Helper Entity (Recommended)</label>
          <select
            name="helper_entity"
            .value=${this._config?.helper_entity||""}
            @change=${this._valueChanged}
          >
            <option value="">Select a helper entity...</option>
            ${e.map(e=>{const t=this.hass.states[e],s=t?.attributes?.friendly_name||e,i=this._hasSchedule(e);return B`
                <option
                  value="${e}"
                  ?selected=${e===this._config?.helper_entity}
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

        ${t.length>0?B`
              <div class="row">
                <label>Or select existing schedule (Legacy)</label>
                <select
                  name="entity"
                  .value=${this._config?.entity||""}
                  @change=${this._valueChanged}
                >
                  <option value="">Select an existing schedule...</option>
                  ${t.map(e=>B`
                      <option
                        value="${e}"
                        ?selected=${e===this._config?.entity}
                      >
                        ${this.hass.states[e].attributes?.friendly_name||e}
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
    `}}Ue.styles=a`
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
  `,t([ue({attribute:!1})],Ue.prototype,"hass",void 0),t([ue({type:Object})],Ue.prototype,"_config",void 0),t([pe()],Ue.prototype,"_helperEntitiesCache",void 0);const He="__weeklySchedulerCardVersion",Re="weekly-scheduler-card-reloaded",ze=window[He],Ve=customElements.get("weekly-scheduler-card");if(ze&&ze!==De||Ve&&!ze)if(sessionStorage.getItem(Re))console.warn("Weekly Scheduler Card: Version mismatch persists after reload. Please clear browser cache and refresh (Ctrl+Shift+R)."),sessionStorage.removeItem(Re);else{const e=ze||"unknown (pre-0.2.6)";console.info(`%c WEEKLY-SCHEDULER-CARD %c Version upgrade detected (${e} → ${De}), reloading...`,"color: white; background: #e67e22; font-weight: bold;","color: #e67e22; background: white; font-weight: bold;"),sessionStorage.setItem(Re,"true"),window.location.reload()}else sessionStorage.removeItem(Re),customElements.get("weekly-scheduler-card")||customElements.define("weekly-scheduler-card",Pe),customElements.get("weekly-scheduler-card-editor")||customElements.define("weekly-scheduler-card-editor",Ue),window[He]=De;e.CARD_VERSION=De,e.WeeklySchedulerCard=Pe,e.WeeklySchedulerCardEditor=Ue}({});
