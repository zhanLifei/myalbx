(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-everyoneg"],{"0ded":function(t,i,e){"use strict";e.r(i);var a=e("a100"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},"2a31":function(t,i,e){"use strict";e.r(i);var a=e("8da9"),n=e("0ded");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("e27c");var l,o=e("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"152ae71a",null,!1,a["a"],l);i["default"]=r.exports},"2ac0":function(t,i,e){"use strict";var a=e("3322"),n=e.n(a);n.a},"30ae":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("headers",{attrs:{url_ri:t.url_ri,subtitle:t.subtitle,Htitle:t.Htitle,Hlicon:t.Hlicon,url_le:t.url_left}}),e("v-uni-view",{staticClass:"top_nav"},t._l(t.navlist,(function(i,a){return e("v-uni-view",{key:i.id,class:["nav_it",{nav_action:i.id==t.navid}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navevent(i.id)}}},[e("v-uni-text",[t._v(t._s(i.name))])],1)})),1),e("v-uni-view",{staticClass:"details"},[e("v-uni-view",{staticClass:"details_it , item1 "},[e("v-uni-view",{staticClass:"detail_num1"},[e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.total_nums))]),e("v-uni-text",{staticStyle:{"font-size":"20upx"}},[t._v("（笔）")])],1),e("v-uni-view",{staticClass:"detail_name"},[1==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险总成交数量")]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险总成交数量")]):t._e()],1)],1),e("v-uni-view",{staticClass:"details_it , item2 "},[e("v-uni-view",{staticClass:"detail_num1"},[1==t.navid?e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.help_study))]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.subvention))]):t._e(),e("v-uni-text",{staticStyle:{"font-size":"20upx"}},[t._v("（元）")])],1),e("v-uni-view",{staticClass:"detail_name"},[1==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("捐资助学累计捐赠")]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险累计补助金")]):t._e()],1)],1),e("v-uni-view",{staticClass:"details_it , item3 "},[e("v-uni-view",{staticClass:"detail_num1"},[1==t.navid?e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.insurance_help))]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.insurance_subvention))]):t._e(),e("v-uni-text",{staticStyle:{"font-size":"20upx"}},[t._v("（元）")])],1),e("v-uni-view",{staticClass:"detail_name"},[1==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险累计捐赠")]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交通救济金捐赠")]):t._e()],1)],1),e("v-uni-view",{staticClass:"details_it , item4 "},[e("v-uni-view",{staticClass:"detail_num1"},[e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.yesterday_nums))]),e("v-uni-text",{staticStyle:{"font-size":"20upx"}},[t._v("（笔）")])],1),e("v-uni-view",{staticClass:"detail_name"},[1==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险昨日成交数量")]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险昨日成交数量")]):t._e()],1)],1),e("v-uni-view",{staticClass:"details_it , item5 "},[e("v-uni-view",{staticClass:"detail_num1"},[e("v-uni-text",{staticStyle:{"font-size":"46upx"}},[t._v(t._s(t.datass.yesterday_subvention))]),e("v-uni-text",{staticStyle:{"font-size":"20upx"}},[t._v("（元）")])],1),e("v-uni-view",{staticClass:"detail_name"},[1==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险昨日补助金")]):t._e(),2==t.navid?e("v-uni-text",{staticStyle:{color:"#828282","font-size":"22upx"}},[t._v("交强险昨日补助金")]):t._e()],1)],1)],1),e("v-uni-view",[t._l(t.textlist,(function(i,a){return e("v-uni-view",{key:i.id,staticClass:"textlist",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jum(i.id,i.type)}}},[e("v-uni-view",{staticClass:"textlist_img"},[e("v-uni-image",{attrs:{src:i.thumb,mode:""}})],1),e("v-uni-view",{staticClass:"textlist_detail"},[e("v-uni-view",{staticClass:"detail_title"},[e("v-uni-text",[t._v(t._s(i.title))])],1),e("v-uni-view",{staticClass:"detail_cont"},[e("div",{domProps:{innerHTML:t._s(i.content)}})]),e("v-uni-view",{staticClass:"detail_time"},[e("v-uni-text",[t._v(t._s(i.createtime))])],1)],1)],1)})),t.loadshow?e("v-uni-view",{staticClass:"loadclass"},[e("v-uni-text",[t._v("正在加载")])],1):e("v-uni-view",{staticClass:"loadclass"},[e("v-uni-text",[t._v("数据已加载完毕")])],1)],2)],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},3322:function(t,i,e){var a=e("97f6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("764fd705",a,!0,{sourceMap:!1,shadowMode:!1})},"34cb":function(t,i,e){"use strict";var a=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("2a31")),s=a(e("46db")),l={components:{headers:n.default},data:function(){return{Htitle:"人人公益",Hlicon:"../../static/icon/left_whitch.png",subtitle:"申请救济",trading:"",trading_price:"",yesterday_subsidize:"",yesterday_trading:"",subsidize:"",url_ri:"/pages/index/pir",page:0,pages:1,showload:!0,loadshow:!1,datass:"",textid:"",url_left:"/pages/main/index",navlist:[{id:1,name:"捐资助学"},{id:2,name:"交通救济金"}],navid:1,detaillist:[],textlist:[]}},methods:{jum:function(t,i){uni.navigateTo({url:"/pages/index/article?id="+t+"&&type="+i})},navevent:function(t){this.navid=t,s.default.auth(this,s.default.api.index.insurance_details,"GET","",(function(t,i){})),s.default.auth(this,s.default.api.index.getArticle,"GET",{type:t},(function(t,i){console.log(i),t.textlist=[],t.textlist=i.data.list,console.log(i.data.list,11)}))},lower:function(){}},onLoad:function(){s.default.auth(this,s.default.api.index.insurance_details,"GET","",(function(t,i){t.datass=i.data})),s.default.auth(this,s.default.api.index.getArticle,"GET",{type:1},(function(t,i){t.textlist=i.data.list}))}};i.default=l},"67f6":function(t,i,e){"use strict";e.r(i);var a=e("30ae"),n=e("c248");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("2ac0");var l,o=e("f0c5"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"aba7825e",null,!1,a["a"],l);i["default"]=r.exports},"80e8":function(t,i,e){var a=e("a33c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("f4ff8286",a,!0,{sourceMap:!1,shadowMode:!1})},"8da9":function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"header",style:t.hstyle},[e("v-uni-view",{staticClass:"left_icon",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jump(t.url_le)}}},[e("v-uni-image",{attrs:{src:t.Hlicon,mode:""}})],1),e("v-uni-view",{staticClass:"center_title"},[e("v-uni-text",[t._v(t._s(t.Htitle))])],1),e("v-uni-view",{staticClass:"right_subtitle",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.jum(t.url_ri)}}},[t._v(t._s(t.subtitle)),t.Hricon?[e("v-uni-view",{staticClass:"right_icon"},[e("v-uni-image",{attrs:{src:t.Hricon,mode:""}})],1)]:t._e()],2)],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},"97f6":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".top_nav[data-v-aba7825e]{color:#666;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around;padding:0 %?40?%;background-color:#fff}.nav_it[data-v-aba7825e]{padding:%?30?% 0}.nav_action[data-v-aba7825e]{color:#2189ff;\n\t/* font:  #2189FF; */border-bottom:%?4?% solid #2189ff;box-sizing:initial}.details[data-v-aba7825e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff;margin:%?30?% auto}.details_it[data-v-aba7825e]{text-align:center;width:33.3%;padding:%?40?% %?12?%;box-sizing:border-box}.detail_num1[data-v-aba7825e]{color:#fbb35a}.item1[data-v-aba7825e]{border-right:%?2?% solid #eaeaea;border-bottom:%?2?% solid #eaeaea}.item2[data-v-aba7825e]{border-right:%?2?% solid #eaeaea;border-bottom:%?2?% solid #eaeaea}.item3[data-v-aba7825e]{\n\t/* border-right: 2upx solid #EAEAEA; */border-bottom:%?2?% solid #eaeaea}.item4[data-v-aba7825e]{\n\t/* border-right: 2upx solid #EAEAEA; */\n\t/* border-bottom: 2upx solid #EAEAEA; */border-right:%?2?% solid #eaeaea}.item5[data-v-aba7825e]{\n\t/* border-right: 2upx solid #EAEAEA; */\n\t/* border-bottom: 2upx solid #EAEAEA; */border-right:%?2?% solid #eaeaea}.scroll_list[data-v-aba7825e]{margin-top:%?30?%;background-color:#fff;width:100%;height:55%}.textlist[data-v-aba7825e]{\n\t/* margin-top:30upx ; */background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?30?%;border-bottom:%?2?% solid #f4f4f4}.textlist_img[data-v-aba7825e]{width:%?202?%;height:%?152?%}.textlist_detail[data-v-aba7825e]{margin-left:%?30?%;width:60%;height:%?152?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.detail_title[data-v-aba7825e]{color:#333;font-size:%?28?%}.detail_cont[data-v-aba7825e]{overflow:hidden;text-overflow:ellipsis;white-space:2;color:#666;font-size:%?24?%;height:%?70?%}.detail_time[data-v-aba7825e]{color:#999;font-size:%?20?%}.loadclass[data-v-aba7825e]{width:100%;text-align:center;font-size:%?24?%;padding:%?10?%;box-sizing:border-box}",""]),t.exports=i},a100:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={props:{Hlicon:{type:String},Htitle:{type:String},subtitle:{type:String},Hricon:{type:String},hstyle:{type:String},url_le:{String:String},url_ri:{String:String}},data:function(){return{}},methods:{jump:function(t){t?""==t?uni.navigateBack({delta:1}):"/pages/main/tradingCenter"==t||"/pages/main/my"==t||"/pages/main/index"==t||"/pages/main/financial"==t||"carService"==t?uni.switchTab({url:t}):uni.navigateTo({url:t}):uni.navigateBack({delta:1})},jum:function(t){t?""==t?uni.navigateBack({delta:1}):"/pages/main/tradingCenter"==t||"/pages/main/my"==t||"/pages/main/index"==t||"/pages/main/financial"==t||"carService"==t?uni.switchTab({url:t}):uni.navigateTo({url:t}):uni.navigateBack({delta:1})}}};i.default=a},a33c:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".header[data-v-152ae71a]{\n\t/* background-color: #2575FE; */background-color:#2189ff;height:calc(%?102?% + 0px);position:fixed;top:0;left:0;z-index:105;display:-webkit-box;display:-webkit-flex;display:flex;\n\t/* justify-content: space-between; */-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%\n\t/* background-color:transparent; */\n\t/* background: transparent; */}uni-image[data-v-152ae71a]{width:%?36?%;height:%?36?%}.left_icon[data-v-152ae71a]{margin-top:%?12?%;width:20%;text-align:center;box-sizing:border-box}.right_subtitle[data-v-152ae71a]{width:20%;text-align:start;color:#fff;font-size:%?28?%}.right_icon[data-v-152ae71a]{margin-top:%?12?%;box-sizing:border-box;text-align:center}.center_title[data-v-152ae71a]{font-size:%?36?%;color:#fff;text-align:center;width:60%}",""]),t.exports=i},c248:function(t,i,e){"use strict";e.r(i);var a=e("34cb"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},e27c:function(t,i,e){"use strict";var a=e("80e8"),n=e.n(a);n.a}}]);