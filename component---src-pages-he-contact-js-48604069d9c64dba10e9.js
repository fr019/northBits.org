(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(204),i=a(210),o=a(208);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Contact",keywords:["north","bits","portfolio","developer"]}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Hi from the ContactPage HEBREW"),r.a.createElement("p",null,"Welcome to ContactPage"),r.a.createElement(c.a,{to:"/"},"Go back to the homepage")))}},203:function(e,t,a){var n;e.exports=(n=a(207))&&n.default||n},204:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(66),i=a.n(c);a.d(t,"a",function(){return i.a});a(203),a(7).default.enqueue;var o=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,i=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,i&&c(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||c,staticQueryData:e})})}},205:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMDAiPgogICAgPHBhdGggZD0iTTYwMCAwQzI2OC42IDAgMCAyNjguNiAwIDYwMHMyNjguNiA2MDAgNjAwIDYwMCA2MDAtMjY4LjYgNjAwLTYwMFM5MzEuNCAwIDYwMCAwek0yNjYuNiA5MzMuM0MxNzYuMSA4NDIuOCAxMzEgNzI0LjYgMTI5LjYgNjA2TDU5NCAxMDcwLjRjLTExOC42LTEuNC0yMzYuOC00Ni41LTMyNy40LTEzNy4xem00MzcuNyAxMjYuMUwxNDAuNiA0OTUuN2M0Ny41LTIxMC4xIDIzNS0zNjcuMSA0NTkuNC0zNjcuMSAxNTYuOSAwIDI5NS41IDc3IDM4MS4yIDE5NC45TDkxNS42IDM3OUM4NDUuOCAyNzkuNSA3MzAuNSAyMTQuMyA2MDAgMjE0LjNjLTE2Ny43IDAtMzEwLjMgMTA3LjctMzYzLjMgMjU3LjVsNDkxLjYgNDkxLjZjMTIzLjQtNDMuNyAyMTgtMTQ4LjIgMjQ3LjYtMjc3LjZINzcxLjRWNjAwaDMwMGMwIDIyNC41LTE1NyA0MTEuOS0zNjcuMSA0NTkuNHoiIGZpbGw9IiM2MzkiLz4KPC9zdmc+Cg=="},206:function(e){e.exports={data:{allUrlsJson:{edges:[{node:{id:"b19fa80a-e00e-5301-987a-0ff8978f185a",name:"Home",path:"/",lang:"en"}},{node:{id:"266e921d-2483-5af5-a8b9-8916f1c590b2",name:"About",path:"/about/",lang:"en"}},{node:{id:"59097271-b144-51f0-81ef-c25159199ab9",name:"Contacts",path:"/contacts/",lang:"en"}}]}}}},207:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},208:function(e,t,a){"use strict";var n=a(209),r=a(0),c=a.n(r),i=a(213),o=a.n(i);function l(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,u=n.data.site,s=t||u.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s "+(u.siteMetadata.title.length?" | "+u.siteMetadata.title:""),meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},t.a=l},209:function(e){e.exports={data:{site:{siteMetadata:{title:"Vakera Andriyanov",description:"Middle software engineer. React, and Node.js developer from Haifa.",author:{name:"Vakera Andriyanov",bio:"",homeCity:"Moscow",email:"mprint85@gmail.com",twitter:"fr019",defaultLink:"https://github.com/fr019"}}}}}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(211),function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},"NorthBits")))});c.defaultProps={siteTitle:""};var i=c,o=a(205),l=a.n(o),u=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"made"},"Made with",r.a.createElement("a",{className:"link-icon",href:"https://gatsbyjs.org"},r.a.createElement("img",{src:l.a,alt:"gatsbyjs-icon"})),"by Valera Andriyanov, "," "+(new Date).getFullYear())))},s=(a(38),a(206)),m=a(204),d=(a(212),function(){var e=s.data;return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-menu"},e.allUrlsJson.edges.filter(function(e){return"en"===e.node.lang}).map(function(e){var t=e.node,a=t.id,n=t.name,c=t.path;return r.a.createElement("li",{key:a},r.a.createElement(m.a,{className:"nav-menu__item",to:c,activeClassName:"active"},n))})))});t.a=function(e){var t=e.children;return[r.a.createElement(i,{key:0}),r.a.createElement("main",{key:1},r.a.createElement("div",{className:"container"},r.a.createElement(d,null),t)),r.a.createElement(u,{key:2})]}}}]);
//# sourceMappingURL=component---src-pages-he-contact-js-48604069d9c64dba10e9.js.map