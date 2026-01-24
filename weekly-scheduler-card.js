!function(e){"use strict";function t(e,t,s,i){var n,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(r<3?n(o):r>3?n(t,s,o):n(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o}"function"==typeof SuppressedError&&SuppressedError;const s=globalThis,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new o(s,e,n)},l=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:u,getOwnPropertySymbols:p,getPrototypeOf:y}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,v=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},$=(e,t)=>!d(e,t),x={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);n?.call(this,t),this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),n=s.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:m;this._$Em=i;const r=n.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){const r=this.constructor;if(!1===i&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??$)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,b?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.2");const S=globalThis,E=e=>e,C=S.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+T,M=`<${D}>`,P=document,O=()=>P.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,W=Array.isArray,H="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,V=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),K=new WeakMap,X=P.createTreeWalker(P,129);function Y(e,t){if(!W(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const J=(e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",o=R;for(let t=0;t<s;t++){const s=e[t];let a,l,d=-1,c=0;for(;c<s.length&&(o.lastIndex=c,l=o.exec(s),null!==l);)c=o.lastIndex,o===R?"!--"===l[1]?o=z:void 0!==l[1]?o=N:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=V):void 0!==l[3]&&(o=V):o===V?">"===l[0]?(o=n??R,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?V:'"'===l[3]?I:j):o===I||o===j?o=V:o===z||o===N?o=R:(o=V,n=void 0);const h=o===V&&e[t+1].startsWith("/>")?" ":"";r+=o===R?s+M:d>=0?(i.push(a),s.slice(0,d)+k+s.slice(d)+T+h):s+T+(-2===d?t:h)}return[Y(e,r+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Z{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,d]=J(e,t);if(this.el=Z.createElement(l,s),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=X.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(k)){const t=d[r++],s=i.getAttribute(e).split(T),o=/([.?@])?(.*)/.exec(t);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?se:"?"===o[1]?ie:"@"===o[1]?ne:te}),i.removeAttribute(e)}else e.startsWith(T)&&(a.push({type:6,index:n}),i.removeAttribute(e));if(L.test(i.tagName)){const e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=C?C.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],O()),X.nextNode(),a.push({type:2,index:++n});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===D)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(T,e+1));)a.push({type:7,index:n}),e+=T.length-1}n++}}static createElement(e,t){const s=P.createElement("template");return s.innerHTML=e,s}}function G(e,t,s=e,i){if(t===q)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=U(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=G(e,n._$AS(e,t.values),n,i)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??P).importNode(t,!0);X.currentNode=i;let n=X.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new ee(n,n.nextSibling,this,e):1===a.type?t=new a.ctor(n,a.name,a.strings,this,e):6===a.type&&(t=new re(n,this,e)),this._$AV.push(t),a=s[++o]}r!==a?.index&&(n=X.nextNode(),r++)}return X.currentNode=P,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),U(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>W(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=Z.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Q(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Z(e)),t}k(e){W(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new ee(this.O(O()),this.O(O()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=G(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==q,r&&(this._$AH=e);else{const i=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=G(this,i[s+o],t,o),a===q&&(a=this._$AH[o]),r||=!U(a)||a!==this._$AH[o],a===F?e=F:e!==F&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ie extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ne extends te{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??F)===q)return;const s=this._$AH,i=e===F&&s!==F||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const oe=S.litHtmlPolyfillSupport;oe?.(Z,ee),(S.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;class le extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new ee(t.insertBefore(O(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}le._$litElement$=!0,le.finalized=!0,ae.litElementHydrateSupport?.({LitElement:le});const de=ae.litElementPolyfillSupport;de?.({LitElement:le}),(ae.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:$},ue=(e=he,t,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};function pe(e){return(t,s)=>"object"==typeof s?ue(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}function ye(e){return pe({...e,state:!0,attribute:!1})}const ge=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],fe={monday:"Mon",tuesday:"Tue",wednesday:"Wed",thursday:"Thu",friday:"Fri",saturday:"Sat",sunday:"Sun"};function _e(e){const t=e%2*30;return`${Math.floor(e/2).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function be(e){const[t,s]=e.split(":").map(Number);return 2*t+Math.floor(s/30)}function ve(){const e=(new Date).getDay();return ge[0===e?6:e-1]}function me(){const e=new Date;return 2*e.getHours()+Math.floor(e.getMinutes()/30)}function $e(e){const t={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]};for(const s of ge)t[s]=e[s].map(e=>({...e}));return t}function xe(e,t,s,i,n){const r=$e(e),o=_e(s),a=i>=48?"00:00":_e(i);r[t]=r[t].filter(e=>{const t=be(e.start);return("00:00"===e.end?48:be(e.end))<=s||t>=i});const l=[];for(const n of e[t]){const e=be(n.start),t="00:00"===n.end?48:be(n.end);e<s&&t>s&&l.push({start:n.start,end:_e(s),value:n.value}),e<i&&t>i&&l.push({start:_e(i),end:n.end,value:n.value})}return r[t].push({start:o,end:a,value:n}),r[t].push(...l),r[t]=function(e){if(0===e.length)return[];const t=[{...e[0]}];for(let s=1;s<e.length;s++){const i=t[t.length-1],n=e[s];("00:00"===i.end?48:be(i.end))===be(n.start)&&i.value===n.value?t[t.length-1]={start:i.start,end:n.end,value:i.value}:t.push({...n})}return t}(r[t].sort((e,t)=>be(e.start)-be(t.start))),r}function we(e,t,s,i){const n=$e(e),r=[];for(const e of n[t]){const t=be(e.start),n="00:00"===e.end?48:be(e.end);n<=s||t>=i?r.push(e):(t<s&&r.push({start:e.start,end:_e(s),value:e.value}),n>i&&r.push({start:_e(i),end:e.end,value:e.value}))}return n[t]=r.sort((e,t)=>be(e.start)-be(t.start)),n}function Se(e,t,s){for(const i of e[t]){const e=be(i.start),t="00:00"===i.end?48:be(i.end);if(s>=e&&s<t)return i.value}return null}function Ee(e,t,s){return null!==Se(e,t,s)}function Ce(e,t,s){const i=$e(e),n=i[t].map(e=>({...e}));for(const e of s)e!==t&&(i[e]=n.map(e=>({...e})));return i}function Ae(e,t){return{isSelecting:!0,startDay:e,startSlot:t,endDay:e,endSlot:t}}function ke(e,t,s){return e.isSelecting?{...e,endDay:t,endSlot:s}:e}function Te(e,t){const s=t.getBoundingClientRect();let i,n;if("touches"in e){if(0===e.touches.length)return null;i=e.touches[0].clientX,n=e.touches[0].clientY}else i=e.clientX,n=e.clientY;const r=i-s.left,o=n-s.top,a=r-50;if(a<0)return null;const l=(s.width-50)/7,d=Math.floor(a/l);if(d<0||d>=7)return null;const c=o-37+t.scrollTop;if(c<0)return null;const h=(t.scrollHeight-37)/48,u=Math.floor(c/h);return u<0||u>=48?null:{day:ge[d],slot:u}}let De=class extends le{constructor(){super(...arguments),this.schedule={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},this.helperType="input_number",this.defaultValue=50,this._selection={isSelecting:!1,startDay:null,startSlot:null,endDay:null,endSlot:null},this._currentSlot=me(),this._currentDay=ve(),this._slotProgress=0,this._handleMouseMove=e=>{const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Te(e,t);s&&(this._selection=ke(this._selection,s.day,s.slot))},this._handleMouseUp=()=>{document.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),document.body.style.userSelect="",document.body.style.webkitUserSelect="",this._finishSelection()}}connectedCallback(){super.connectedCallback(),this._startTimeUpdates()}disconnectedCallback(){super.disconnectedCallback(),this._stopTimeUpdates()}_startTimeUpdates(){this._updateCurrentTime(),this._timeUpdateInterval=window.setInterval(()=>{this._updateCurrentTime()},3e4)}_stopTimeUpdates(){this._timeUpdateInterval&&clearInterval(this._timeUpdateInterval)}_updateCurrentTime(){this._currentSlot=me(),this._currentDay=ve(),this._slotProgress=(new Date).getMinutes()%30/30}_handleMouseDown(e){const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Te(e,t);s&&(e.preventDefault(),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",this._selection=Ae(s.day,s.slot),document.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp))}_handleTouchStart(e){const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Te(e,t);s&&(e.preventDefault(),this._selection=Ae(s.day,s.slot))}_handleTouchMove(e){const t=this.shadowRoot?.querySelector(".grid-container");if(!t)return;const s=Te(e,t);s&&(e.preventDefault(),this._selection=ke(this._selection,s.day,s.slot))}_handleTouchEnd(){this._finishSelection()}_finishSelection(){const e=function(e){if(!e.startDay||null===e.startSlot||!e.endDay||null===e.endSlot)return null;const t=ge.indexOf(e.startDay),s=ge.indexOf(e.endDay),i=Math.min(t,s),n=Math.max(t,s);return{days:ge.slice(i,n+1),startSlot:Math.min(e.startSlot,e.endSlot),endSlot:Math.max(e.startSlot,e.endSlot)+1}}(this._selection);if(this._selection={isSelecting:!1,startDay:null,startSlot:null,endDay:null,endSlot:null},!e)return;let t=!1;for(const s of e.days){for(let i=e.startSlot;i<e.endSlot;i++)if(Ee(this.schedule,s,i)){t=!0;break}if(t)break}this.dispatchEvent(new CustomEvent("selection-complete",{detail:{days:e.days,startSlot:e.startSlot,endSlot:e.endSlot,action:t?"remove":"add"},bubbles:!0,composed:!0}))}_getIntensityClass(e){return null===e?"":"boolean"==typeof e?e?"intensity-high":"":e<=33?"intensity-low":e<=66?"intensity-medium":"intensity-high"}_renderTimeLabel(e){const t=_e(e);return B`
      <div class="time-label ${e%4==0?"even-hour":""}">
        ${e%2==0?t:B`&nbsp;`}
      </div>
    `}_renderCell(e,t){const s=Se(this.schedule,e,t),i=null!==s,n=function(e,t,s){if(!e.isSelecting||!e.startDay||null===e.startSlot||!e.endDay||null===e.endSlot)return!1;const i=ge.indexOf(e.startDay),n=ge.indexOf(e.endDay),r=Math.min(i,n),o=Math.max(i,n),a=ge.indexOf(t);if(a<r||a>o)return!1;const l=Math.min(e.startSlot,e.endSlot),d=Math.max(e.startSlot,e.endSlot);return s>=l&&s<=d}(this._selection,e,t),r=e===this._currentDay&&t===this._currentSlot,o=["cell",i?"active":"",i?this._getIntensityClass(s):"",n?"selected":"",r?"now-row":""].filter(Boolean).join(" ");return B`
      <div class="${o}" data-day="${e}" data-slot="${t}">
        ${r?B`<div
              class="now-indicator"
              style="top: ${100*this._slotProgress}%"
            ></div>`:""}
        ${i&&"input_number"===this.helperType&&"number"==typeof s?B`<span class="cell-value">${Math.round(s)}</span>`:""}
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
        ${ge.map(e=>B`
            <div class="header-cell ${e===this._currentDay?"today":""}">
              ${fe[e]}
            </div>
          `)}

        <!-- Grid rows -->
        ${e.map(e=>B`
            ${this._renderTimeLabel(e)}
            ${ge.map(t=>this._renderCell(t,e))}
          `)}
      </div>
    `}};De.styles=a`
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
  `,t([pe({type:Object})],De.prototype,"schedule",void 0),t([pe({type:String})],De.prototype,"helperType",void 0),t([pe({type:Number})],De.prototype,"defaultValue",void 0),t([ye()],De.prototype,"_selection",void 0),t([ye()],De.prototype,"_currentSlot",void 0),t([ye()],De.prototype,"_currentDay",void 0),t([ye()],De.prototype,"_slotProgress",void 0),De=t([ce("schedule-grid")],De),customElements.get("schedule-grid")||customElements.define("schedule-grid",De);let Me=class extends le{constructor(){super(...arguments),this.enabled=!0,this.helperType="input_number",this.currentValue=50,this.helperEntity="",this._selectedDay="monday",this._inputValue=50}_handleCopyToAll(){this.dispatchEvent(new CustomEvent("copy-to-all",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleCopyToWorkdays(){this.dispatchEvent(new CustomEvent("copy-to-workdays",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleCopyToWeekend(){this.dispatchEvent(new CustomEvent("copy-to-weekend",{detail:{sourceDay:this._selectedDay},bubbles:!0,composed:!0}))}_handleClearDay(){this.dispatchEvent(new CustomEvent("clear-day",{detail:{day:this._selectedDay},bubbles:!0,composed:!0}))}_handleClearAll(){this.dispatchEvent(new CustomEvent("clear-all",{bubbles:!0,composed:!0}))}_handleToggleEnabled(){this.dispatchEvent(new CustomEvent("toggle-enabled",{detail:{enabled:!this.enabled},bubbles:!0,composed:!0}))}_handleValueChange(e){const t=e.target;this._inputValue=Number(t.value)}_handleValueConfirm(){this.dispatchEvent(new CustomEvent("value-change",{detail:{value:this._inputValue},bubbles:!0,composed:!0}))}_handleDayChange(e){const t=e.target;this._selectedDay=t.value}render(){return B`
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
            ${ge.map(e=>B`
                <option value="${e}" ?selected=${e===this._selectedDay}>
                  ${fe[e]}
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
            Clear ${fe[this._selectedDay]}
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
    `}};Me.styles=a`
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
  `,t([pe({type:Boolean})],Me.prototype,"enabled",void 0),t([pe({type:String})],Me.prototype,"helperType",void 0),t([pe({type:Number})],Me.prototype,"currentValue",void 0),t([pe({type:String})],Me.prototype,"helperEntity",void 0),t([ye()],Me.prototype,"_selectedDay",void 0),t([ye()],Me.prototype,"_inputValue",void 0),Me=t([ce("schedule-toolbar")],Me),customElements.get("schedule-toolbar")||customElements.define("schedule-toolbar",Me);const Pe="0.2.1";function Oe(e){return`switch.weekly_schedule_${e.split(".").pop()||""}`}window.customCards=window.customCards||[],window.customCards.push({type:"weekly-scheduler-card",name:"Weekly Scheduler Card",description:"A card for managing weekly schedules for input helpers",preview:!0,version:Pe}),console.info(`%c WEEKLY-SCHEDULER-CARD %c v${Pe} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;"),e.WeeklySchedulerCard=class extends le{constructor(){super(...arguments),this._schedule={monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]},this._enabled=!0,this._helperType="input_number",this._helperEntity="",this._currentValue=50,this._defaultValue=50,this._scheduleEntity="",this._isCreating=!1}setConfig(e){if(!e.entity&&!e.helper_entity)throw new Error("Please define a helper_entity or entity");this.config=e}getCardSize(){return 8}updated(e){super.updated(e),e.has("hass")&&this.hass&&this.config&&this._updateFromEntity()}_getScheduleEntityId(){return this.config?.entity?this.config.entity:this.config?.helper_entity?Oe(this.config.helper_entity):""}_scheduleExists(){const e=this._getScheduleEntityId();return""!==e&&void 0!==this.hass?.states[e]}_updateFromEntity(){if(!this.hass||!this.config)return;const e=this._getScheduleEntityId();this._scheduleEntity=e;const t=this.hass.states[e];if(!t)return void(this.config.helper_entity&&(this._helperEntity=this.config.helper_entity,this._helperEntity.startsWith("input_number.")?this._helperType="input_number":this._helperEntity.startsWith("input_boolean.")&&(this._helperType="input_boolean")));const s=t.attributes;if(s.schedule&&(this._schedule=s.schedule),s.helper_type&&(this._helperType=s.helper_type),s.helper_entity&&(this._helperEntity=s.helper_entity),this._enabled="on"===t.state,this._helperEntity&&this.hass.states[this._helperEntity]){const e=this.hass.states[this._helperEntity];"input_number"===this._helperType&&(this._currentValue=parseFloat(e.state)||0)}}async _createSchedule(){if(this.hass&&this.config?.helper_entity){this._isCreating=!0;try{await this.hass.callService("weekly_scheduler","create_schedule",{helper_entity:this.config.helper_entity}),await new Promise(e=>setTimeout(e,1e3)),this._updateFromEntity()}catch(e){console.error("Failed to create schedule:",e)}finally{this._isCreating=!1}}}async _updateSchedule(e){if(this.hass&&this._scheduleEntity){this._schedule=e;try{await this.hass.callService("weekly_scheduler","set_schedule",{entity_id:this._scheduleEntity,schedule:e})}catch(e){console.error("Failed to update schedule:",e)}}}async _handleSelectionComplete(e){const{days:t,startSlot:s,endSlot:i,action:n}=e.detail;let r=$e(this._schedule);for(const e of t)if("add"===n){r=xe(r,e,s,i,"input_boolean"===this._helperType||this._defaultValue)}else r=we(r,e,s,i);await this._updateSchedule(r)}async _handleCopyToAll(e){const{sourceDay:t}=e.detail,s=Ce(this._schedule,t,ge);await this._updateSchedule(s)}async _handleCopyToWorkdays(e){const{sourceDay:t}=e.detail,s=Ce(this._schedule,t,["monday","tuesday","wednesday","thursday","friday"]);await this._updateSchedule(s)}async _handleCopyToWeekend(e){const{sourceDay:t}=e.detail,s=Ce(this._schedule,t,["saturday","sunday"]);await this._updateSchedule(s)}async _handleClearDay(e){const{day:t}=e.detail,s=$e(this._schedule);s[t]=[],await this._updateSchedule(s)}async _handleClearAll(){await this._updateSchedule({monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[],sunday:[]})}async _handleToggleEnabled(e){if(!this.hass||!this._scheduleEntity)return;const{enabled:t}=e.detail;try{await this.hass.callService("switch",t?"turn_on":"turn_off",{entity_id:this._scheduleEntity})}catch(e){console.error("Failed to toggle schedule:",e)}}_handleValueChange(e){this._defaultValue=e.detail.value}_renderCreateSchedule(){const e=this.config?.helper_entity||"",t=this.hass?.states[e],s=t?.attributes?.friendly_name||e;return B`
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
    `}static getConfigElement(){return document.createElement("weekly-scheduler-card-editor")}static getStubConfig(){return{helper_entity:"",title:"Weekly Schedule"}}},e.WeeklySchedulerCard.styles=a`
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
  `,t([pe({attribute:!1})],e.WeeklySchedulerCard.prototype,"hass",void 0),t([pe({type:Object})],e.WeeklySchedulerCard.prototype,"config",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_schedule",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_enabled",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_helperType",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_helperEntity",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_currentValue",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_defaultValue",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_scheduleEntity",void 0),t([ye()],e.WeeklySchedulerCard.prototype,"_isCreating",void 0),e.WeeklySchedulerCard=t([ce("weekly-scheduler-card")],e.WeeklySchedulerCard),e.WeeklySchedulerCardEditor=class extends le{setConfig(e){this._config=e}_getHelperEntities(){if(!this.hass)return console.log("[weekly-scheduler-card] _getHelperEntities: hass is undefined"),[];console.log("[weekly-scheduler-card] _getHelperEntities: hass.states =",this.hass.states),console.log("[weekly-scheduler-card] _getHelperEntities: typeof hass.states =",typeof this.hass.states);const e=Object.keys(this.hass.states);console.log("[weekly-scheduler-card] _getHelperEntities: all entity keys count =",e.length),console.log("[weekly-scheduler-card] _getHelperEntities: first 10 keys =",e.slice(0,10));const t=e.filter(e=>e.startsWith("input_number.")||e.startsWith("input_boolean."));return console.log("[weekly-scheduler-card] _getHelperEntities: filtered helpers =",t),t.sort()}_hasSchedule(e){if(!this.hass)return!1;const t=Oe(e);return void 0!==this.hass.states[t]}_getScheduleEntities(){return this.hass?Object.keys(this.hass.states).filter(e=>e.startsWith("switch.")&&void 0!==this.hass.states[e].attributes?.schedule):[]}_valueChanged(e){if(!this._config)return;const t=e.target;let s={...this._config};s="helper_entity"===t.name?{...s,helper_entity:t.value,entity:void 0}:"entity"===t.name?{...s,entity:t.value,helper_entity:void 0}:"checkbox"===t.type?{...s,[t.name]:t.checked}:{...s,[t.name]:t.value},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}render(){if(console.log("[weekly-scheduler-card-editor] render: this.hass =",this.hass),console.log("[weekly-scheduler-card-editor] render: this._config =",this._config),!this.hass)return console.log("[weekly-scheduler-card-editor] render: hass is falsy, returning empty"),B``;const e=this._getHelperEntities(),t=this._getScheduleEntities();return console.log("[weekly-scheduler-card-editor] render: helperEntities =",e),this._config?.entity&&this._config,B`
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
    `}},e.WeeklySchedulerCardEditor.styles=a`
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
  `,t([pe({attribute:!1})],e.WeeklySchedulerCardEditor.prototype,"hass",void 0),t([pe({type:Object})],e.WeeklySchedulerCardEditor.prototype,"_config",void 0),e.WeeklySchedulerCardEditor=t([ce("weekly-scheduler-card-editor")],e.WeeklySchedulerCardEditor),customElements.get("weekly-scheduler-card")||customElements.define("weekly-scheduler-card",e.WeeklySchedulerCard),customElements.get("weekly-scheduler-card-editor")||customElements.define("weekly-scheduler-card-editor",e.WeeklySchedulerCardEditor),e.CARD_VERSION=Pe}({});
