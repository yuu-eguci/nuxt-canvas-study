(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{355:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({name:"TheSampleView",props:{getRandomData:{type:Function,required:!0},alan:{type:String,required:!0}},computed:{randomData:function(){return this.getRandomData()},fodaofjdsa:function(){return this.getRandomData()},a:function(){return this.alan}},methods:{foo:function(){console.info(this.getRandomData())},getAlan:function(){console.info(this.alan)}}}),r=e(73),l=e(102),c=e.n(l),d=e(359),f=e(369),m=e(370),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",[e("v-col",{staticClass:"text-center"},[e("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),t._v(" "),e("blockquote",{staticClass:"blockquote"},[t._v("\n      “First, solve the problem. Then, write the code.”\n      "),e("footer",[e("small",[e("em",[t._v("—John Johnson")]),t._v(" "+t._s(t.randomData)+"\n        ")]),t._v(" "),e("v-btn",{on:{click:t.foo}},[t._v("\n          Foo って console するよ\n        ")])],1)])])],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:d.a,VCol:f.a,VRow:m.a})},367:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(355),l=o.a.extend({methods:{getRandomData:function(){return"foo"}},render:function(t){return t(r.default,{props:{getRandomData:this.getRandomData,alan:"alan"}})}}),c=e(73),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);