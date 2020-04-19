(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{196:function(e,t,a){"use strict";a.r(t);a(38);var r=a(227),n=a(0),i=a.n(n),s=a(210),o=a(214),d=a(208);t.default=function(){var e=r.data;return i.a.createElement(s.a,null,i.a.createElement(d.a,{title:"Home",keywords:["north","bits","portfolio","developer"]}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(o.a,null),i.a.createElement("ul",null,e.allProjectsJson.edges.map(function(e){var t=e.node,a=t.id,r=t.name,n=t.site;return i.a.createElement("li",{key:a},i.a.createElement("a",{href:n},r))})))))}},203:function(e,t,a){var r;e.exports=(r=a(207))&&r.default||r},204:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),n=a.n(r),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(203),a(7).default.enqueue;var o=n.a.createContext({});function d(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,s=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,s&&i(s),!s&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(o.Consumer,null,function(e){return n.a.createElement(d,{data:t,query:a,render:r||i,staticQueryData:e})})}},205:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPgogICAgPHBhdGggZD0iTTYwMCAwQzI2OC42IDAgMCAyNjguNiAwIDYwMHMyNjguNiA2MDAgNjAwIDYwMCA2MDAtMjY4LjYgNjAwLTYwMFM5MzEuNCAwIDYwMCAwek0yNjYuNiA5MzMuM0MxNzYuMSA4NDIuOCAxMzEgNzI0LjYgMTI5LjYgNjA2TDU5NCAxMDcwLjRjLTExOC42LTEuNC0yMzYuOC00Ni41LTMyNy40LTEzNy4xem00MzcuNyAxMjYuMUwxNDAuNiA0OTUuN2M0Ny41LTIxMC4xIDIzNS0zNjcuMSA0NTkuNC0zNjcuMSAxNTYuOSAwIDI5NS41IDc3IDM4MS4yIDE5NC45TDkxNS42IDM3OUM4NDUuOCAyNzkuNSA3MzAuNSAyMTQuMyA2MDAgMjE0LjNjLTE2Ny43IDAtMzEwLjMgMTA3LjctMzYzLjMgMjU3LjVsNDkxLjYgNDkxLjZjMTIzLjQtNDMuNyAyMTgtMTQ4LjIgMjQ3LjYtMjc3LjZINzcxLjRWNjAwaDMwMGMwIDIyNC41LTE1NyA0MTEuOS0zNjcuMSA0NTkuNHoiIGZpbGw9IiM2MzkiLz4KPC9zdmc+Cg=="},206:function(e){e.exports={data:{allUrlsJson:{edges:[{node:{id:"b19fa80a-e00e-5301-987a-0ff8978f185a",name:"Home",path:"/",lang:"en"}},{node:{id:"266e921d-2483-5af5-a8b9-8916f1c590b2",name:"About",path:"/about/",lang:"en"}},{node:{id:"59097271-b144-51f0-81ef-c25159199ab9",name:"Contacts",path:"/contacts/",lang:"en"}}]}}}},207:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),i=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e,t,a){"use strict";var r=a(209),n=a(0),i=a.n(n),s=a(213),o=a.n(s);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,d=e.title,c=r.data.site,l=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s "+(c.siteMetadata.title.length?" | "+c.siteMetadata.title:""),meta:[{name:"description",content:l},{property:"og:title",content:d},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:l}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=d},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Vakera Andriyanov",description:"Middle software engineer. React, and Node.js developer from Haifa.",author:{name:"Vakera Andriyanov",bio:"",homeCity:"Moscow",email:"mprint85@gmail.com",twitter:"fr019",defaultLink:"https://github.com/fr019"}}}}}},210:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=(a(211),function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"logo"},"NorthBits")))});i.defaultProps={siteTitle:""};var s=i,o=a(205),d=a.n(o),c=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"made"},"Made with",n.a.createElement("a",{className:"link-icon",href:"https://gatsbyjs.org"},n.a.createElement("img",{src:d.a,alt:"gatsbyjs-icon"})),"by Valera Andriyanov, "," "+(new Date).getFullYear())))},l=(a(38),a(206)),u=a(204),f=(a(212),function(){var e=l.data;return n.a.createElement("nav",null,n.a.createElement("ul",{className:"nav-menu"},e.allUrlsJson.edges.filter(function(e){return"en"===e.node.lang}).map(function(e){var t=e.node,a=t.id,r=t.name,i=t.path;return n.a.createElement("li",{key:a},n.a.createElement(u.a,{className:"nav-menu__item",to:i,activeClassName:"active"},r))})))});t.a=function(e){var t=e.children;return[n.a.createElement(s,{key:0}),n.a.createElement("main",{key:1},n.a.createElement("div",{className:"container"},n.a.createElement(f,null),t)),n.a.createElement(c,{key:2})]}},214:function(e,t,a){"use strict";var r=a(215),n=a(0),i=a.n(n),s=a(204),o=a(216),d=a.n(o);t.a=function(){return i.a.createElement(s.b,{query:"2011440971",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:r})}},215:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},216:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(217);var r=a(14);t.__esModule=!0,t.default=void 0;var n,i=r(a(68)),s=r(a(69)),o=r(a(136)),d=r(a(137)),c=r(a(0)),l=r(a(52)),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function M(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?M(e,!0):"")+M(e)}).join("")+"<img "+c+s+o+a+r+t+i+n+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(L,(0,d.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},L=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,l=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,d.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:l,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});L.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,l=e.placeholderStyle,f=void 0===l?{}:l,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,M=e.loading,N=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:j?1:0,transition:z?"opacity "+b+"ms":"none"},o),T="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},O=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&x,o,f),R={title:t,alt:this.state.isVisible?"":a,style:O,className:g};if(p){var D=p,V=D[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),T&&c.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&x)}),V.base64&&c.default.createElement(I,{src:V.base64,spreadProps:R,imageVariants:D,generateSources:S}),V.tracedSVG&&c.default.createElement(I,{src:V.tracedSVG,spreadProps:R,imageVariants:D,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(D),c.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:M,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,d.default)({alt:a,title:t,loading:M},V,{imageVariants:D}))}}))}if(m){var k=m,Y=k[0],q=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},i);return"inherit"===i.display&&delete q.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},T&&c.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:T,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},z&&x)}),Y.base64&&c.default.createElement(I,{src:Y.base64,spreadProps:R,imageVariants:k,generateSources:S}),Y.tracedSVG&&c.default.createElement(I,{src:Y.tracedSVG,spreadProps:R,imageVariants:k,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(k),c.default.createElement(L,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:M,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,d.default)({alt:a,title:t,loading:M},Y,{imageVariants:k}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});j.propTypes={resolutions:z,sizes:C,fixed:l.default.oneOfType([z,l.default.arrayOf(z)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var T=j;t.default=T},217:function(e,t,a){"use strict";a(218)("fixed",function(e){return function(){return e(this,"tt","","")}})},218:function(e,t,a){var r=a(1),n=a(8),i=a(32),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},227:function(e){e.exports={data:{allProjectsJson:{edges:[{node:{id:"d74c10c8-fc24-550b-8a3b-a99c548a5863",name:"1 site",site:"http://www.first.com"}},{node:{id:"9f9674a7-1c00-5849-b3f4-e01b16196eb6",name:"2 site",site:"http://www.second.com"}},{node:{id:"83a08851-24d9-5f8b-8698-a7f7af63bd1f",name:"3 site",site:"http://www.first.com"}},{node:{id:"9dacb8fa-1779-5604-9438-60be35a53ae9",name:"4 site",site:"http://www.second.com"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-he-index-he-js-8d5245490c18410bffd2.js.map