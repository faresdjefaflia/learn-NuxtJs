(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{280:function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,required:!0}}},l=n(22),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex justify-between items-center w-44"},[n("img",{staticClass:"rounded-full w-14",attrs:{src:t.author.image}}),t._v(" "),n("h1",{staticClass:"text-lg font-black"},[t._v(t._s(t.author.name))])])])}),[],!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(49),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).fetch();case 3:return l=e.sent,e.abrupt("return",{blog:l});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(22),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",{staticClass:"max-w-7xl m-auto p-6"},[n("div",{staticClass:"text-center py-5"},[n("h1",{staticClass:"font-bold text-4xl"},[t._v(t._s(t.blog.title))]),t._v(" "),n("p",{staticClass:"text-3xl"},[t._v(t._s(t.blog.description))])]),t._v(" "),n("author",{attrs:{author:t.blog.author}}),t._v(" "),n("div",{staticClass:"w-4/5 m-auto my-5"},[n("nuxt-content",{attrs:{document:t.blog}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Author:n(280).default})}}]);