(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,a){"use strict";a.r(t);a(159);var n=a(162),r=a(0),i=a.n(r),s=a(158),o=a(163),l=a(156);t.default=function(){var e=n.data;return i.a.createElement(s.a,null,i.a.createElement(l.a,{title:"Home",keywords:["north","bits","portfolio","developer"]}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(o.a,null),i.a.createElement("ul",null,e.allProjectsJson.edges.map(function(e){var t=e.node,a=t.id,n=t.name,r=t.site;return i.a.createElement("li",{key:a},i.a.createElement("a",{href:r},n))})))))}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.navigate});a(152);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},155:function(e){e.exports={data:{allUrlsJson:{edges:[{node:{id:"b19fa80a-e00e-5301-987a-0ff8978f185a",name:"Home",path:"/en/",lang:"en"}},{node:{id:"266e921d-2483-5af5-a8b9-8916f1c590b2",name:"About",path:"/en/about",lang:"en"}},{node:{id:"59097271-b144-51f0-81ef-c25159199ab9",name:"Contact",path:"/en/contact",lang:"en"}},{node:{id:"98060285-1e57-548b-a09b-c0d10abdab0d",name:"Home",path:"/he/",lang:"he"}},{node:{id:"964c9ba1-08f3-53dd-903c-3b282888c834",name:"About",path:"/he/about",lang:"he"}},{node:{id:"a1ae9622-2278-576b-9674-5d2b9d049170",name:"קשר",path:"/he/contact",lang:"he"}}]},site:{siteMetadata:{title:"My portfolio"}}}}},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(161),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=c},157:function(e){e.exports={data:{site:{siteMetadata:{title:"My portfolio",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@fr019"}}}}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=(a(160),a(159),a(74),a(75),a(76),a(155)),l=a(153),d=a(14),c=function(e){e.preventDefault();var t=d.globalHistory.location.pathname.split("/"),a=1;d.globalHistory.location.pathname.includes("northBits")&&(a=2),t[a]=e.target.dataset.lang,Object(l.c)(t.join("/"))},u=function(){var e=d.globalHistory.location.pathname.includes("northBits")?2:1,t=d.globalHistory.location.pathname.split("/",3)[e],a=o.data;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-menu"},a.allUrlsJson.edges.filter(function(e){return e.node.lang===t}).map(function(e){var t=e.node,a=t.id,n=t.name,i=t.path;return r.a.createElement("li",{key:a},r.a.createElement(l.a,{className:"nav-menu__item",to:i,activeClassName:"active"},n))})),r.a.createElement("ul",{className:"nav-menu lang"},r.a.createElement("li",{key:"eng"},r.a.createElement("a",{href:"","data-lang":"en",onClick:function(e){return c(e)},className:"nav-menu__item"},"En")),r.a.createElement("li",{key:"heb"},r.a.createElement("a",{href:"","data-lang":"he",onClick:function(e){return c(e)},className:"nav-menu__item"},"He"))))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var f=u,p=function(){return r.a.createElement("footer",{className:"container"},(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},h=function(e){var t=e.children;return[r.a.createElement(f,{key:"1"}),r.a.createElement("main",{key:"2"},t),r.a.createElement(p,{key:"3"})]};h.propTypes={children:s.a.node.isRequired};t.a=h},162:function(e){e.exports={data:{allProjectsJson:{edges:[{node:{id:"d74c10c8-fc24-550b-8a3b-a99c548a5863",name:"1 site",site:"http://www.first.com"}},{node:{id:"9f9674a7-1c00-5849-b3f4-e01b16196eb6",name:"2 site",site:"http://www.second.com"}},{node:{id:"83a08851-24d9-5f8b-8698-a7f7af63bd1f",name:"3 site",site:"http://www.first.com"}},{node:{id:"9dacb8fa-1779-5604-9438-60be35a53ae9",name:"4 site",site:"http://www.second.com"}}]}}}},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),s=a(153),o=a(165),l=a.n(o);t.a=function(){return i.a.createElement(s.b,{query:"2011440971",render:function(e){return i.a.createElement(l.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:n})}},164:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/northBits/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},165:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(35)),o=n(a(77)),l=n(a(78)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+n+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,w=e.Tag,E=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:S?1:0,transition:R?"opacity "+v+"ms":"none"},o),L="boolean"==typeof y?"lightgray":y,A={transitionDelay:v+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&A,o,f),N={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(h){var O=h;return d.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},d.default.createElement(w,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),L&&d.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&A)}),O.base64&&d.default.createElement(b,(0,l.default)({src:O.base64},N)),O.tracedSVG&&d.default.createElement(b,(0,l.default)({src:O.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,O.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}if(m){var C=m,q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},L&&d.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:L,width:C.width,opacity:this.state.imgLoaded?0:1,height:C.height},R&&A)}),C.base64&&d.default.createElement(b,(0,l.default)({src:C.base64},N)),C.tracedSVG&&d.default.createElement(b,(0,l.default)({src:C.tracedSVG},N)),this.state.isVisible&&d.default.createElement("picture",null,C.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),d.default.createElement(b,{alt:a,title:t,width:C.width,height:C.height,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},C))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-he-js-0c0232dbbee0ee033ecb.js.map