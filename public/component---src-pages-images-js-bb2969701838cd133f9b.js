(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,y=E&&window.IntersectionObserver,S=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+o+l+s+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=o.default.createElement(V,(0,d.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),s):s})),V=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:E}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,R=e.draggable,x=p||h;if(!x)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,d.default)({opacity:C?1:0,transition:H?"opacity "+E+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,k={transitionDelay:E+"ms"},P=(0,d.default)({opacity:this.state.imgLoaded?0:1},H&&k,s,f),W={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:S},j=this.state.isHydrated?g(x):x[0];if(p)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),T&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&k)}),j.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:x,generateSources:L}),j.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:x,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,v(x),o.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:x}))}}));if(h){var q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete q.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},H&&k)}),j.base64&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:W,imageVariants:x,generateSources:L}),j.tracedSVG&&o.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:W,imageVariants:x,generateSources:I}),this.state.isVisible&&o.default.createElement("picture",null,v(x),o.default.createElement(V,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:R})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:a,title:t,loading:w},j,{imageVariants:x}))}}))}return null},t}(o.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:H,sizes:N,fixed:T(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:T(u.default.oneOfType([N,u.default.arrayOf(N)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var k=C;t.default=k},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=function(){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/blog/"},"Blogs")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/products"},"Products")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/examples"},"Examples")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/images"},"Images"))))},s=function(){return i.a.createElement("div",null,i.a.createElement("p",null,"Hello from footer"))};a("8ypT"),t.a=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,null),i.a.createElement("main",null,t),i.a.createElement(s,null))}},I0Nt:function(e,t,a){e.exports=a.p+"static/imagen-4-d73c737e78a6fb0828b59ba2e3319fe7.png"},"ta+j":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("Wbzz"),s=a("I0Nt"),d=a.n(s),o=a("9eSz"),u=a.n(o),c=function(){var e=Object(l.d)("1536512042");return console.log(e),i.a.createElement("section",{className:"images"},i.a.createElement("article",{className:"single-image"},i.a.createElement("h3",null,"basic image"),i.a.createElement("img",{src:d.a,width:"100%"}),i.a.createElement("h2",null,"Content")),i.a.createElement("article",{className:"single-image"},i.a.createElement("h3",null,"fixed image/blur"),i.a.createElement(u.a,{fixed:e.fixed.childImageSharp.fixed}),i.a.createElement("h2",null,"Content")),i.a.createElement("article",{className:"single-image"},i.a.createElement("h3",null,"fluid image/svg"),i.a.createElement(u.a,{fluid:e.fluid.childImageSharp.fluid}),i.a.createElement("h2",null,"Content"),i.a.createElement("div",{className:"small"},i.a.createElement(u.a,{fluid:e.fluid.childImageSharp.fluid}),i.a.createElement("h2",null,"Content")),i.a.createElement(u.a,{fluid:e.example.childImageSharp.fluid})))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-images-js-bb2969701838cd133f9b.js.map