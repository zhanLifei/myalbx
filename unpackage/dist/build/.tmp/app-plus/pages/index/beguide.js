(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/beguide"],{"030d":function(e,t,n){"use strict";var i=n("1633"),a=n.n(i);a.a},1633:function(e,t,n){},"3c9a":function(e,t,n){"use strict";n.r(t);var i=n("d652"),a=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);t["default"]=a.a},"41fd":function(e,t,n){"use strict";n.r(t);var i=n("e99a"),a=n("3c9a");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("030d");var o=n("2877"),d=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=d.exports},"53d6":function(e,t,n){"use strict";(function(e){n("42df"),n("921b");i(n("66fd"));var t=i(n("41fd"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},d652:function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("be84"));function u(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{navs:[{id:1,name:"百问百答"},{id:2,name:"视频专区"}],id:1,viedos:[],prolist:"",curentId:"",scroll:!1}},methods:{select:function(t){this.id=t,this.prolist="",console.log(e(t,"sajfksadjfka"," at pages\\index\\beguide.vue:94")),a.default.auth(this,a.default.api.index.articleCate,"GET",{page:1,limit:15,type:t},function(t,n){console.log(e(n," at pages\\index\\beguide.vue:100")),t.prolist=n.data,console.log(e(t.prolist," at pages\\index\\beguide.vue:102"))}),this.$forceUpdate()},jump:function(e){i.navigateTo({url:e})},jum:function(e){i.switchTab({url:e})},PlayVideo:function(e){this.scroll=!0,this.curentId=e}},onReady:function(e){this.videoContext=i.createVideoContext("myVideo")},onPageScroll:function(e){this.scroll=!1},onShow:function(){a.default.auth(this,a.default.api.index.articleCate,"GET",{page:1,limit:15,type:1},function(t,n){console.log(e(n," at pages\\index\\beguide.vue:135")),t.prolist=n.data,console.log(e(t.prolist," at pages\\index\\beguide.vue:137"))})}};t.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},e99a:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}},[["53d6","common/runtime","common/vendor"]]]);