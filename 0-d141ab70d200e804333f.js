(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,r){"use strict";r(8),r(6),r(2),r(60),r(102),r(212);var n=r(27);t.__esModule=!0,t.default=void 0;var i,a=n(r(50)),o=n(r(78)),u=n(r(144)),s=n(r(42)),l=n(r(1)),c=n(r(26)),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},h=Object.create({}),p=function(e){var t=d(e),r=f(t);return h[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,v=m&&window.IntersectionObserver,y=new WeakMap;function b(e){return e.map(function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:a}),l.default.createElement("source",{media:i,srcSet:r,sizes:a}))})}function w(e){var t=[],r=[];return e.forEach(function(e){return(e.media?t:r).push(e)}),t.concat(r)}function S(e){return e.map(function(e){var t=e.src,r=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:n})})}function O(e){return e.map(function(e){var t=e.src,r=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:n})})}function V(e,t){var r=e.srcSet,n=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:r)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var k=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),i);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",u=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?V(e,!0):"")+V(e)}).join("")+"<img "+l+o+u+r+n+t+a+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,a=l.default.createElement(x,(0,s.default)({src:t},i));return r.length>1?l.default.createElement("picture",null,n(r),a):a},x=l.default.forwardRef(function(e,t){var r=e.sizes,n=e.srcSet,i=e.src,a=e.style,o=e.onLoad,c=e.onError,d=e.loading,f=e.draggable,h=(0,u.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,s.default)({sizes:r,srcSet:n,src:i},h,{onLoad:o,onError:c,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=m&&p(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!g&&v&&!t.critical&&!r.seenBefore;var n=t.critical||m&&(g||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,a.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,u=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,V=e.loading,k=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,s.default)({opacity:A?1:0,transition:R?"opacity "+v+"ms":"none"},u),L="boolean"==typeof m?"lightgray":m,I={transitionDelay:v+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},R&&I,u,f),T={title:t,alt:this.state.isVisible?"":r,style:P,className:h};if(p){var q=p,z=q[0];return l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),L&&l.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&I)}),z.base64&&l.default.createElement(j,{src:z.base64,spreadProps:T,imageVariants:q,generateSources:O}),z.tracedSVG&&l.default.createElement(j,{src:z.tracedSVG,spreadProps:T,imageVariants:q,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,b(q),l.default.createElement(x,{alt:r,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:V,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:r,title:t,loading:V},z,{imageVariants:q}))}}))}if(g){var F=g,M=F[0],W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},a);return"inherit"===a.display&&delete W.display,l.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},L&&l.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:L,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&I)}),M.base64&&l.default.createElement(j,{src:M.base64,spreadProps:T,imageVariants:F,generateSources:O}),M.tracedSVG&&l.default.createElement(j,{src:M.tracedSVG,spreadProps:T,imageVariants:F,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,b(F),l.default.createElement(x,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:V,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,s.default)({alt:r,title:t,loading:V},M,{imageVariants:F}))}}))}return null},t}(l.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:R,sizes:C,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var L=A;t.default=L},212:function(e,t,r){"use strict";r(213)("fixed",function(e){return function(){return e(this,"tt","","")}})},213:function(e,t,r){var n=r(15),i=r(16),a=r(49),o=/"/g,u=function(e,t,r,n){var i=String(a(e)),u="<"+t;return""!==r&&(u+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),u+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(u),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},216:function(e,t,r){var n=r(15);n(n.P,"Array",{fill:r(225)}),r(79)("fill")},217:function(e,t,r){var n=r(18),i=r(43),a=r(44),o=r(63).f;e.exports=function(e){return function(t){for(var r,u=a(t),s=i(u),l=s.length,c=0,d=[];l>c;)r=s[c++],n&&!o.call(u,r)||d.push(e?[r,u[r]]:u[r]);return d}}},225:function(e,t,r){"use strict";var n=r(31),i=r(146),a=r(30);e.exports=function(e){for(var t=n(this),r=a(t.length),o=arguments.length,u=i(o>1?arguments[1]:void 0,r),s=o>2?arguments[2]:void 0,l=void 0===s?r:i(s,r);l>u;)t[u++]=e;return t}},226:function(e,t,r){"use strict";var n=r(15),i=r(81)(6),a="findIndex",o=!0;a in[]&&Array(1)[a](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(79)(a)},227:function(e,t,r){"use strict";var n=r(15),i=r(30),a=r(105),o="".startsWith;n(n.P+n.F*r(106)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},228:function(e,t,r){var n=r(15),i=r(217)(!0);n(n.S,"Object",{entries:function(e){return i(e)}})},229:function(e,t,r){var n=r(12),i=r(51).onFreeze;r(147)("freeze",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},230:function(e,t,r){var n=r(15),i=r(217)(!1);n(n.S,"Object",{values:function(e){return i(e)}})},235:function(e,t,r){"use strict";r(64),r(20),r(80),r(226),r(103),r(216),r(227),r(149),r(228),r(52),r(150),r(11),r(45),r(32),r(229),r(230),r(19),r(82),r(8),r(6),r(60),r(104),r(41),r(2);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var a=r(1),o=r.n(a);function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}r.d(t,"a",function(){return be}),r.d(t,"b",function(){return H});var c={arr:Array.isArray,obj:function(e){return"[object Object]"===Object.prototype.toString.call(e)},fun:function(e){return"function"==typeof e},str:function(e){return"string"==typeof e},num:function(e){return"number"==typeof e},und:function(e){return void 0===e},nul:function(e){return null===e},set:function(e){return e instanceof Set},map:function(e){return e instanceof Map},equ:function(e,t){if(typeof e!=typeof t)return!1;if(c.str(e)||c.num(e))return e===t;if(c.obj(e)&&c.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;var r;for(r in e)if(!(r in t))return!1;for(r in t)if(e[r]!==t[r])return!1;return!c.und(r)||e===t}};function d(){var e=Object(a.useState)(!1)[1];return Object(a.useCallback)(function(){return e(function(e){return!e})},[])}function f(e,t){return c.und(e)||c.nul(e)?t:e}function h(e){return c.und(e)?[]:c.arr(e)?e:[e]}function p(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return c.fun(e)?e.apply(void 0,r):e}function g(e){var t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,i(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(c.und(t))return n({to:t},e);var r=Object.keys(e).reduce(function(r,i){var a;return c.und(t[i])?n({},r,((a={})[i]=e[i],a)):r},{});return n({to:t},r)}var m,v,y=function(){function e(){this.payload=void 0,this.children=[]}var t=e.prototype;return t.getAnimatedValue=function(){return this.getValue()},t.getPayload=function(){return this.payload||this},t.attach=function(){},t.detach=function(){},t.getChildren=function(){return this.children},t.addChild=function(e){0===this.children.length&&this.attach(),this.children.push(e)},t.removeChild=function(e){var t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()},e}(),b=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).payload=[],t.attach=function(){return t.payload.forEach(function(e){return e instanceof y&&e.addChild(s(t))})},t.detach=function(){return t.payload.forEach(function(e){return e instanceof y&&e.removeChild(s(t))})},t}return l(t,e),t}(y),w=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).payload={},t.attach=function(){return Object.values(t.payload).forEach(function(e){return e instanceof y&&e.addChild(s(t))})},t.detach=function(){return Object.values(t.payload).forEach(function(e){return e instanceof y&&e.removeChild(s(t))})},t}l(t,e);var r=t.prototype;return r.getValue=function(e){void 0===e&&(e=!1);var t={};for(var r in this.payload){var n=this.payload[r];(!e||n instanceof y)&&(t[r]=n instanceof y?n[e?"getAnimatedValue":"getValue"]():n)}return t},r.getAnimatedValue=function(){return this.getValue(!0)},t}(y);function S(e,t){m={fn:e,transform:t}}function O(e){v=e}var V,k=function(e){return"undefined"!=typeof window?window.requestAnimationFrame(e):-1};function E(e){V=e}var j=function(){return Date.now()};function x(e){e}var A,R,C=function(e){return e.current};function L(e){A=e}var I=function(e){function t(t,r){var i;return(i=e.call(this)||this).update=void 0,i.payload=t.style?n({},t,{style:A(t.style)}):t,i.update=r,i.attach(),i}return l(t,e),t}(w),P=!1,T=new Set,q=function e(){if(!P)return!1;var t=j(),r=T,n=Array.isArray(r),i=0;for(r=n?r:r[Symbol.iterator]();;){var a;if(n){if(i>=r.length)break;a=r[i++]}else{if((i=r.next()).done)break;a=i.value}for(var o=a,u=!1,s=0;s<o.configs.length;s++){for(var l=o.configs[s],c=void 0,d=void 0,f=0;f<l.animatedValues.length;f++){var h=l.animatedValues[f];if(!h.done){var p=l.fromValues[f],g=l.toValues[f],m=h.lastPosition,v=g instanceof y,b=Array.isArray(l.initialVelocity)?l.initialVelocity[f]:l.initialVelocity;if(v&&(g=g.getValue()),l.immediate)h.setValue(g),h.done=!0;else if("string"!=typeof p&&"string"!=typeof g){if(void 0!==l.duration)m=p+l.easing((t-h.startTime)/l.duration)*(g-p),c=t>=h.startTime+l.duration;else if(l.decay)m=p+b/(1-.998)*(1-Math.exp(-(1-.998)*(t-h.startTime))),(c=Math.abs(h.lastPosition-m)<.1)&&(g=m);else{d=void 0!==h.lastTime?h.lastTime:t,b=void 0!==h.lastVelocity?h.lastVelocity:l.initialVelocity,t>d+64&&(d=t);for(var w=Math.floor(t-d),S=0;S<w;++S){m+=1*(b+=1*((-l.tension*(m-g)+-l.friction*b)/l.mass)/1e3)/1e3}var O=!(!l.clamp||0===l.tension)&&(p<g?m>g:m<g),V=Math.abs(b)<=l.precision,E=0===l.tension||Math.abs(g-m)<=l.precision;c=O||V&&E,h.lastVelocity=b,h.lastTime=t}v&&!l.toValues[f].done&&(c=!1),c?(h.value!==g&&(m=g),h.done=!0):u=!0,h.setValue(m),h.lastPosition=m}else h.setValue(g),h.done=!0}}o.props.onFrame&&(o.values[l.name]=l.interpolation.getValue())}o.props.onFrame&&o.props.onFrame(o.values),u||(T.delete(o),o.stop(!0))}return T.size?R?R():k(e):P=!1,P};function z(e,t,r){if("function"==typeof e)return e;if(Array.isArray(e))return z({range:e,output:t,extrapolate:r});if(V&&"string"==typeof e.output[0])return V(e);var n=e,i=n.output,a=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",u=n.extrapolateRight||n.extrapolate||"extend",s=n.easing||function(e){return e};return function(e){var t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,a);return function(e,t,r,n,i,a,o,u,s){var l=s?s(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>r){if("identity"===u)return l;"clamp"===u&&(l=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?l=-l:r===1/0?l-=t:l=(l-t)/(r-t);l=a(l),n===-1/0?l=-l:i===1/0?l+=n:l=l*(i-n)+n;return l}(e,a[t],a[t+1],i[t],i[t+1],s,o,u,n.map)}}var F=function(e){function t(r,n,i,a){var o;return(o=e.call(this)||this).calc=void 0,o.payload=r instanceof b&&!(r instanceof t)?r.getPayload():Array.isArray(r)?r:[r],o.calc=z(n,i,a),o}l(t,e);var r=t.prototype;return r.getValue=function(){return this.calc.apply(this,u(this.payload.map(function(e){return e.getValue()})))},r.updateConfig=function(e,t,r){this.calc=z(e,t,r)},r.interpolate=function(e,r,n){return new t(this,e,r,n)},t}(b);var M=function(e){function t(t){var r,n;return r=e.call(this)||this,n=s(r),r.animatedStyles=new Set,r.value=void 0,r.startPosition=void 0,r.lastPosition=void 0,r.lastVelocity=void 0,r.startTime=void 0,r.lastTime=void 0,r.done=!1,r.setValue=function(e,t){void 0===t&&(t=!0),n.value=e,t&&n.flush()},r.value=t,r.startPosition=t,r.lastPosition=t,r}l(t,e);var r=t.prototype;return r.flush=function(){0===this.animatedStyles.size&&function e(t,r){"update"in t?r.add(t):t.getChildren().forEach(function(t){return e(t,r)})}(this,this.animatedStyles),this.animatedStyles.forEach(function(e){return e.update()})},r.clearStyles=function(){this.animatedStyles.clear()},r.getValue=function(){return this.value},r.interpolate=function(e,t,r){return new F(this,e,t,r)},t}(y),W=function(e){function t(t){var r;return(r=e.call(this)||this).payload=t.map(function(e){return new M(e)}),r}l(t,e);var r=t.prototype;return r.setValue=function(e,t){var r=this;void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach(function(e,n){return r.payload[n].setValue(e,t)}):this.payload.forEach(function(r){return r.setValue(e,t)})},r.getValue=function(){return this.payload.map(function(e){return e.getValue()})},r.interpolate=function(e,t){return new F(this,e,t)},t}(b),N=0,G=function(){function e(){var e=this;this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=function(){return e.interpolations},this.id=N++}var t=e.prototype;return t.update=function(e){if(!e)return this;var t=g(e),r=t.delay,a=void 0===r?0:r,o=t.to,u=i(t,["delay","to"]);if(c.arr(o)||c.fun(o))this.queue.push(n({},u,{delay:a,to:o}));else if(o){var s={};Object.entries(o).forEach(function(e){var t,r=e[0],i=e[1],o=n({to:(t={},t[r]=i,t),delay:p(a,r)},u),l=s[o.delay]&&s[o.delay].to;s[o.delay]=n({},s[o.delay],o,{to:n({},l,o.to)})}),this.queue=Object.values(s)}return this.queue=this.queue.sort(function(e,t){return e.delay-t.delay}),this.diff(u),this},t.start=function(e){var t,r=this;if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach(function(e){var t=e.from,i=void 0===t?{}:t,a=e.to,o=void 0===a?{}:a;c.obj(i)&&(r.merged=n({},i,r.merged)),c.obj(o)&&(r.merged=n({},r.merged,o))});var a=this.local=++this.guid,o=this.localQueue=this.queue;this.queue=[],o.forEach(function(t,n){var u=t.delay,s=i(t,["delay"]),l=function(t){n===o.length-1&&a===r.guid&&t&&(r.idle=!0,r.props.onRest&&r.props.onRest(r.merged)),e&&e()},d=c.arr(s.to)||c.fun(s.to);u?setTimeout(function(){a===r.guid&&(d?r.runAsync(s,l):r.diff(s).start(l))},u):d?r.runAsync(s,l):r.diff(s).start(l)})}else c.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,T.has(t)||T.add(t),P||(P=!0,k(R||q));return this},t.stop=function(e){return this.listeners.forEach(function(t){return t(e)}),this.listeners=[],this},t.pause=function(e){var t;return this.stop(!0),e&&(t=this,T.has(t)&&T.delete(t)),this},t.runAsync=function(e,t){var r=this,a=this,o=(e.delay,i(e,["delay"])),u=this.local,s=Promise.resolve(void 0);if(c.arr(o.to))for(var l=function(e){var t=e,i=n({},o,g(o.to[t]));c.arr(i.config)&&(i.config=i.config[t]),s=s.then(function(){if(u===r.guid)return new Promise(function(e){return r.diff(i).start(e)})})},d=0;d<o.to.length;d++)l(d);else if(c.fun(o.to)){var f,h=0;s=s.then(function(){return o.to(function(e){var t=n({},o,g(e));if(c.arr(t.config)&&(t.config=t.config[h]),h++,u===r.guid)return f=new Promise(function(e){return r.diff(t).start(e)})},function(e){return void 0===e&&(e=!0),a.stop(e)}).then(function(){return f})})}s.then(t)},t.diff=function(e){var t=this;this.props=n({},this.props,e);var r=this.props,i=r.from,a=void 0===i?{}:i,o=r.to,u=void 0===o?{}:o,s=r.config,l=void 0===s?{}:s,d=r.reverse,g=r.attach,m=r.reset,y=r.immediate;if(d){var b=[u,a];a=b[0],u=b[1]}this.merged=n({},a,this.merged,u),this.hasChanged=!1;var w=g&&g(this);if(this.animations=Object.entries(this.merged).reduce(function(e,r){var i=r[0],o=r[1],u=e[i]||{},s=c.num(o),d=c.str(o)&&!o.startsWith("#")&&!/\d/.test(o)&&!v[o],g=c.arr(o),b=!s&&!g&&!d,S=c.und(a[i])?o:a[i],O=s||g?o:d?o:1,k=p(l,i);w&&(O=w.animations[i].parent);var E,x=u.parent,A=u.interpolation,R=h(w?O.getPayload():O),C=o;b&&(C=V({range:[0,1],output:[o,o]})(1));var L,I=A&&A.getValue(),P=!c.und(x)&&u.animatedValues.some(function(e){return!e.done}),T=!c.equ(C,I),q=!c.equ(C,u.previous),z=!c.equ(k,u.config);if(m||q&&T||z){var F;if(s||d)x=A=u.parent||new M(S);else if(g)x=A=u.parent||new W(S);else if(b){var N=u.interpolation&&u.interpolation.calc(u.parent.value);N=void 0===N||m?S:N,u.parent?(x=u.parent).setValue(0,!1):x=new M(0);var G={output:[N,o]};u.interpolation?(A=u.interpolation,u.interpolation.updateConfig(G)):A=x.interpolate(G)}return R=h(w?O.getPayload():O),E=h(x.getPayload()),m&&!b&&x.setValue(S,!1),t.hasChanged=!0,E.forEach(function(e){e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=P?e.lastVelocity:void 0,e.lastTime=P?e.lastTime:void 0,e.startTime=j(),e.done=!1,e.animatedStyles.clear()}),p(y,i)&&x.setValue(b?O:o,!1),n({},e,((F={})[i]=n({},u,{name:i,parent:x,interpolation:A,animatedValues:E,toValues:R,previous:C,config:k,fromValues:h(x.getValue()),immediate:p(y,i),initialVelocity:f(k.velocity,0),clamp:f(k.clamp,!1),precision:f(k.precision,.01),tension:f(k.tension,170),friction:f(k.friction,26),mass:f(k.mass,1),duration:k.duration,easing:f(k.easing,function(e){return e}),decay:k.decay}),F))}return T?e:(b&&(x.setValue(1,!1),A.updateConfig({output:[C,C]})),x.done=!0,t.hasChanged=!0,n({},e,((L={})[i]=n({},e[i],{previous:C}),L)))},this.animations),this.hasChanged)for(var S in this.configs=Object.values(this.animations),this.values={},this.interpolations={},this.animations)this.interpolations[S]=this.animations[S].interpolation,this.values[S]=this.animations[S].interpolation.getValue();return this},t.destroy=function(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0},e}(),_=function(e,t){var r=Object(a.useRef)(!1),n=Object(a.useRef)(),i=c.fun(t),o=Object(a.useMemo)(function(){var r;return n.current&&(n.current.map(function(e){return e.destroy()}),n.current=void 0),[new Array(e).fill().map(function(e,n){var a=new G,o=i?p(t,n,a):t[n];return 0===n&&(r=o.ref),a.update(o),r||a.start(),a}),r]},[e]),u=o[0],s=o[1];n.current=u;Object(a.useImperativeHandle)(s,function(){return{start:function(){return Promise.all(n.current.map(function(e){return new Promise(function(t){return e.start(t)})}))},stop:function(e){return n.current.forEach(function(t){return t.stop(e)})},get controllers(){return n.current}}});var l=Object(a.useMemo)(function(){return function(e){return n.current.map(function(t,r){t.update(i?p(e,r,t):e[r]),s||t.start()})}},[e]);Object(a.useEffect)(function(){r.current?i||l(t):s||n.current.forEach(function(e){return e.start()})}),Object(a.useEffect)(function(){return r.current=!0,function(){return n.current.forEach(function(e){return e.destroy()})}},[]);var d=n.current.map(function(e){return e.getValues()});return i?[d,l,function(e){return n.current.forEach(function(t){return t.pause(e)})}]:d},H=function(e){var t=c.fun(e),r=_(1,t?e:[e]),n=r[0],i=r[1],a=r[2];return t?[n[0],i,a]:n};var D=function(e){function t(t){var r;return void 0===t&&(t={}),r=e.call(this)||this,!t.transform||t.transform instanceof y||(t=m.transform(t)),r.payload=t,r}return l(t,e),t}(w),U={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},B="[-+]?\\d*\\.?\\d+",J=B+"%";function Q(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}var $=new RegExp("rgb"+Q(B,B,B)),Z=new RegExp("rgba"+Q(B,B,B,B)),K=new RegExp("hsl"+Q(B,J,J)),X=new RegExp("hsla"+Q(B,J,J,B)),Y=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ee=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,te=/^#([0-9a-fA-F]{6})$/,re=/^#([0-9a-fA-F]{8})$/;function ne(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ie(e,t,r){var n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,a=ne(i,n,e+1/3),o=ne(i,n,e),u=ne(i,n,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*u)<<8}function ae(e){var t=parseInt(e,10);return t<0?0:t>255?255:t}function oe(e){return(parseFloat(e)%360+360)%360/360}function ue(e){var t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function se(e){var t=parseFloat(e);return t<0?0:t>100?1:t/100}function le(e){var t,r,n="number"==typeof(t=e)?t>>>0===t&&t>=0&&t<=4294967295?t:null:(r=te.exec(t))?parseInt(r[1]+"ff",16)>>>0:U.hasOwnProperty(t)?U[t]:(r=$.exec(t))?(ae(r[1])<<24|ae(r[2])<<16|ae(r[3])<<8|255)>>>0:(r=Z.exec(t))?(ae(r[1])<<24|ae(r[2])<<16|ae(r[3])<<8|ue(r[4]))>>>0:(r=Y.exec(t))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+"ff",16)>>>0:(r=re.exec(t))?parseInt(r[1],16)>>>0:(r=ee.exec(t))?parseInt(r[1]+r[1]+r[2]+r[2]+r[3]+r[3]+r[4]+r[4],16)>>>0:(r=K.exec(t))?(255|ie(oe(r[1]),se(r[2]),se(r[3])))>>>0:(r=X.exec(t))?(ie(oe(r[1]),se(r[2]),se(r[3]))|ue(r[4]))>>>0:null;return null===n?e:"rgba("+((4278190080&(n=n||0))>>>24)+", "+((16711680&n)>>>16)+", "+((65280&n)>>>8)+", "+(255&n)/255+")"}var ce=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,de=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,fe=new RegExp("("+Object.keys(U).join("|")+")","g"),he={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","Ms","Moz","O"];function ge(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}he=Object.keys(he).reduce(function(e,t){return pe.forEach(function(r){return e[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(r,t)]=e[t]}),e},he);var me={};L(function(e){return new D(e)}),x("div"),E(function(e){var t=e.output.map(function(e){return e.replace(de,le)}).map(function(e){return e.replace(fe,le)}),r=t[0].match(ce).map(function(){return[]});t.forEach(function(e){e.match(ce).forEach(function(e,t){return r[t].push(+e)})});var i=t[0].match(ce).map(function(t,i){return z(n({},e,{output:r[i]}))});return function(e){var r=0;return t[0].replace(ce,function(){return i[r++](e)}).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,function(e,t,r,n,i){return"rgba("+Math.round(t)+", "+Math.round(r)+", "+Math.round(n)+", "+i+")"})}}),O(U),S(function(e,t){if(!e.nodeType||void 0===e.setAttribute)return!1;var r=t.style,n=t.children,a=t.scrollTop,o=t.scrollLeft,u=i(t,["style","children","scrollTop","scrollLeft"]),s="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;for(var l in void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==n&&(e.textContent=n),r)if(r.hasOwnProperty(l)){var c=0===l.indexOf("--"),d=ge(l,r[l],c);"float"===l&&(l="cssFloat"),c?e.style.setProperty(l,d):e.style[l]=d}for(var f in u){var h=s?f:me[f]||(me[f]=f.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()}));void 0!==e.getAttribute(h)&&e.setAttribute(h,u[f])}},function(e){return e});var ve,ye,be=(ve=function(e){return Object(a.forwardRef)(function(t,r){var u=d(),s=Object(a.useRef)(!0),l=Object(a.useRef)(null),f=Object(a.useRef)(null),h=Object(a.useCallback)(function(e){var t=l.current;l.current=new I(e,function(){var e=!1;f.current&&(e=m.fn(f.current,l.current.getAnimatedValue())),f.current&&!1!==e||u()}),t&&t.detach()},[]);Object(a.useEffect)(function(){return function(){s.current=!1,l.current&&l.current.detach()}},[]),Object(a.useImperativeHandle)(r,function(){return C(f,s,u)}),h(t);var p,g=l.current.getValue(),v=(g.scrollTop,g.scrollLeft,i(g,["scrollTop","scrollLeft"])),y=(p=e,!c.fun(p)||p.prototype instanceof o.a.Component?function(e){return f.current=function(e,t){return t&&(c.fun(t)?t(e):c.obj(t)&&(t.current=e)),e}(e,r)}:void 0);return o.a.createElement(e,n({},v,{ref:y}))})},void 0===(ye=!1)&&(ye=!0),function(e){return(c.arr(e)?e:Object.keys(e)).reduce(function(e,t){var r=ye?t[0].toLowerCase()+t.substring(1):t;return e[r]=ve(r),e},ve)})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);
//# sourceMappingURL=0-d141ab70d200e804333f.js.map