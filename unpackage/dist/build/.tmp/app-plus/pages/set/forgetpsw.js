(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/forgetpsw"],{"170a":function(t,e,n){"use strict";n.r(e);var a=n("d51d"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},7733:function(t,e,n){"use strict";var a=n("7bcd"),i=n.n(a);i.a},"7bcd":function(t,e,n){},8799:function(t,e,n){"use strict";(function(t){n("42df"),n("921b");a(n("66fd"));var e=a(n("aa74"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},aa74:function(t,e,n){"use strict";n.r(e);var a=n("e750"),i=n("170a");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("7733");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"5a3117c1",null);e["default"]=o.exports},d51d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("be84"));function i(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{email:"",password:"",password2:"",emailCodes:"",tabIndex:0,navList:[{text:"手机号",state:"0"},{text:"邮箱号",state:"1"}],status:"获取验证码",account:"",repwd2:"",pwd2:"",verifycode:""}},methods:{changeTab:function(t){this.tabClick(t.target.current)},tabClick:function(t){this.change(t)},change:function(t){this.type=this.navList[t].type,this.tabIndex=t},jump:function(e){t.navigateTo({url:e})},count:function(){this.status>0||a.default.auth(this,a.default.api.reg.code,"GET",{mobile:this.account,temp:"sms_forget"},function(e,n){e.status=60;var a=setInterval(function(){e.status--,0==e.status&&(clearInterval(a),e.status="重新获取")},1e3);t.showToast({title:n.info,icon:"none"})})},emailCode:function(){this.status>0||a.default.auth(this,a.default.api.reg.sendEmailCode,"GET",{email:this.email},function(e,n){e.status=60;var a=setInterval(function(){e.status--,0==e.status&&(clearInterval(a),e.status="重新获取")},1e3);t.showToast({title:n.info,icon:"none"})})},btns:function(){a.default.auth(this,a.default.api.set.forget2,"POST",{verifycode:this.verifycode,repwd2:this.repwd2,pwd2:this.pwd2,account:this.account,type:2},function(e,n){t.showToast({title:n.info,icon:"none"}),setTimeout(function(){t.switchTab({url:"/pages/main/my"})},1500)})},emailBtns:function(){a.default.auth(this,a.default.api.set.forget2,"POST",{verifycode:this.emailCodes,repwd2:this.password2,pwd2:this.password,email:this.email,type:1},function(e,n){t.showToast({title:n.info,icon:"none"}),setTimeout(function(){t.switchTab({url:"/pages/main/my"})},1500)})}}};e.default=s}).call(this,n("6e42")["default"])},e750:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}},[["8799","common/runtime","common/vendor"]]]);