(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/onsale"],{"0e86":function(e,t,n){"use strict";(function(e){n("42df"),n("921b");i(n("66fd"));var t=i(n("bef4"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"13dd":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("be84"));function a(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{type:"",ds_money:"",verifycode:"",countdown:62,num:"",psw:"",code:"",captcha:"",uniqid:"",price:"",money:"",id:"",verification:[{name:"num",title:"请输入数量"},{name:"psw",title:"请输入置换密码"},{name:"code",title:"请输入验证码"}]}},methods:{codetime:function(e,t){e.countdown=t<10?"0"+t:t,t--,t<0?e.countdown=61:setTimeout(function(){e.codetime(e,t)},1e3)},send:function(){var t=this;e.request({url:o.default.api.index.verifycode,method:"GET",data:{temp:"sms_sell"},header:{Authorization:"Bearer "+e.getStorageSync("token")},success:function(n){n=n.data;1==n.code?(e.showToast({icon:"none",title:n.info}),t.codetime(t,60)):e.showToast({icon:"none",title:n.info})}})},emailValue:function(){var t=this;e.request({url:o.default.api.reg.sendEmailCode,method:"GET",data:{email:e.getStorageSync("member").email},success:function(n){console.log(i(n," at pages\\center\\onsale.vue:214"));n=n.data;1==n.code?(e.showToast({icon:"none",title:n.info}),t.codetime(t,60)):e.showToast({icon:"none",title:n.info})}})},jump:function(t){e.switchTab({url:t})},submit:function(){var t=this,n=this.verification.some(function(n){return""==t[n.name]&&e.showToast({icon:"none",title:n.title}),""==t[n.name]});n||(this.captchas(),e.request({url:this.$service.api.center.claimPurchasingOrder,method:"POST",data:{num:this.num,password:this.psw,verifycode:this.code,uniqid:this.uniqid,id:this.id,type:this.type},header:{Authorization:"Bearer "+e.getStorageSync("token")},success:function(t){t=t.data;1==t.code?(e.showToast({icon:"none",title:t.info}),setTimeout(function(){e.navigateTo({url:"/pages/center/my_deal?type=1"})},600)):e.showToast({icon:"none",title:t.info,duration:2e3})},complete:function(t){t=t.data;e.showToast({icon:"none",title:t.info,duration:2e3})}}))},captchas:function(){var t=this;e.request({url:this.$service.api.home.captcha,method:"GET",header:{Authorization:"Bearer "+e.getStorageSync("token")},success:function(e){e=e.data;t.captcha=e.data.image,t.uniqid=e.data.uniqid}})}},onShow:function(){this.captchas();var t=e.getStorageSync("type");this.type=t},onLoad:function(t){this.num=t.A,this.price=t.c,this.money_ss=t.b,this.id=t.id;var n=e.getStorageSync("tr");this.ds_money=Number(this.num*this.money_ss).toFixed(2),this.money=Number(this.ds_money*n).toFixed(2)}};t.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])},"4c9d":function(e,t,n){"use strict";var i=n("a358"),o=n.n(i);o.a},"7ca7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},a358:function(e,t,n){},bef4:function(e,t,n){"use strict";n.r(t);var i=n("7ca7"),o=n("dee0");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("4c9d");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=s.exports},dee0:function(e,t,n){"use strict";n.r(t);var i=n("13dd"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}},[["0e86","common/runtime","common/vendor"]]]);