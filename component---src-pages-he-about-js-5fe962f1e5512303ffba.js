(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(152),o=a(157),c=a(155);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"About",keywords:["north","bits","portfolio","developer"]}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Hi from the AboutPage HEBREW"),r.a.createElement("p",null,"Welcome to AboutPage"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage")))}},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},152:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.navigate});a(151);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e){e.exports={data:{allUrlsJson:{edges:[{node:{id:"b19fa80a-e00e-5301-987a-0ff8978f185a",name:"Home",path:"/",lang:"en"}},{node:{id:"266e921d-2483-5af5-a8b9-8916f1c590b2",name:"About",path:"/about/",lang:"en"}},{node:{id:"59097271-b144-51f0-81ef-c25159199ab9",name:"Contact",path:"/contact/",lang:"en"}},{node:{id:"98060285-1e57-548b-a09b-c0d10abdab0d",name:"Home",path:"/he/",lang:"he"}},{node:{id:"964c9ba1-08f3-53dd-903c-3b282888c834",name:"About",path:"/he/about/",lang:"he"}},{node:{id:"a1ae9622-2278-576b-9674-5d2b9d049170",name:"קשר",path:"/he/contact/",lang:"he"}}]},site:{siteMetadata:{title:"My portfolio"}}}}},154:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(160),s=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},156:function(e){e.exports={data:{site:{siteMetadata:{title:"My portfolio",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@fr019"}}}}},157:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=(a(159),a(158),a(74),a(75),a(76),a(153)),l=a(152),s=a(14),u=function(e){e.preventDefault(),console.log("click");var t=s.globalHistory.location.pathname.split("/");"en"!==e.target.dataset.lang&&(t[1]=e.target.dataset.lang),Object(l.c)(t.join("/"))},d=function(){var e="en";s.globalHistory.location.pathname.split("/",3)[1].includes("he")&&(e="he");var t=c.data;return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-menu"},t.allUrlsJson.edges.filter(function(t){return t.node.lang===e}).map(function(e){var t=e.node,a=t.id,n=t.name,i=t.path;return r.a.createElement("li",{key:a},r.a.createElement(l.a,{className:"nav-menu__item",to:i,activeClassName:"active"},n))})),r.a.createElement("ul",{className:"nav-menu lang"},r.a.createElement("li",{key:"eng"},r.a.createElement(l.a,{to:"/",className:"nav-menu__item",onClick:function(e){return u(e)},"data-lang":"en"},"Eng")),r.a.createElement("li",{key:"heb"},r.a.createElement(l.a,{to:"/he/",className:"nav-menu__item",onClick:function(e){return u(e)},"data-lang":"he"},"He"))))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var m=d,p=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},(new Date).getFullYear(),", Built with"," ",r.a.createElement("div",null,"site portfolio ")))},f=function(e){var t=e.children;return[r.a.createElement(m,{key:"1"}),r.a.createElement("main",{key:"2"},t),r.a.createElement(p,{key:"3"})]};f.propTypes={children:o.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-he-about-js-5fe962f1e5512303ffba.js.map