(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{289:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("502c2df2",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n.r(e);var r={name:"Header",props:{title:{type:String,default:"Title"}}},o=(n(291),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("header",[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("nav",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("NuxtLink",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("NuxtLink",{attrs:{to:"/photos"}},[t._v("Photos")])],1)])}),[],!1,null,"55384edb",null);e.default=component.exports;installComponents(component,{Header:n(290).default})},291:function(t,e,n){"use strict";n(289)},292:function(t,e,n){var r=n(47)(!1);r.push([t.i,"header[data-v-55384edb]{margin:100px 0}header h1[data-v-55384edb]{font-size:2em;font-weight:500}nav[data-v-55384edb]{margin-top:10px}nav a[data-v-55384edb]{font-size:1em;color:#666;margin-right:10px;transition:color .2s ease-in-out}nav a.nuxt-link-exact-active[data-v-55384edb],nav a[data-v-55384edb]:hover{color:#000}",""]),t.exports=r},293:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("48182d91",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";n(293)},298:function(t,e,n){var r=n(47)(!1);r.push([t.i,"main[data-v-2049bdd8]{width:800px}.article[data-v-2049bdd8]{margin-top:30px;margin-bottom:30px}.article a[data-v-2049bdd8]{font-size:18px;color:#000;transition:color .2s ease-in-out}.article a[data-v-2049bdd8]:hover{color:#00a0d2}.article p[data-v-2049bdd8]{font-size:16px;color:#666}",""]),t.exports=r},323:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(49),{name:"Blog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").sortBy("createdAt").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},filters:{date:function(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"})}}}),l=(n(297),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("main",[e("Header",{attrs:{title:"Blog"}}),t._v(" "),t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"article"},[e("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[t._v(t._s(article.title))]),t._v(" "),e("p",[t._v(t._s(t._f("date")(article.createdAt)))])],1)}))],2)}),[],!1,null,"2049bdd8",null);e.default=component.exports;installComponents(component,{Header:n(290).default})}}]);