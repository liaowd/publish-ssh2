(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf73ac8e"],{"0ecb":function(t,e,a){"use strict";var o=a("7bb1"),n=a.n(o);n.a},"7bb1":function(t,e,a){},"9eb2":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-content",[a("m-form",[a("m-form-row",{attrs:{label:"联系人姓名"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.contactName,expression:"model.contactName"}],staticClass:"credit-input",attrs:{type:"text",placeholder:"请输入联系人姓名"},domProps:{value:t.model.contactName},on:{blur:function(e){return t.removeSpace("model.contactName",e)},input:function(e){e.target.composing||t.$set(t.model,"contactName",e.target.value)}}})]),a("m-form-row",{attrs:{label:"身份证号码"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.contactIdNo,expression:"model.contactIdNo"}],staticClass:"credit-input",attrs:{type:"text",placeholder:"请输入身份证号码"},domProps:{value:t.model.contactIdNo},on:{blur:function(e){return t.removeSpace("model.contactIdNo",e)},input:function(e){e.target.composing||t.$set(t.model,"contactIdNo",e.target.value)}}})]),a("m-form-row",{attrs:{label:"身份证有效期"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.contactExpiry,expression:"model.contactExpiry"}],staticClass:"credit-input",attrs:{type:"text",placeholder:"请输入身份证有效期"},domProps:{value:t.model.contactExpiry},on:{blur:function(e){return t.removeSpace("model.contactExpiry",e)},input:function(e){e.target.composing||t.$set(t.model,"contactExpiry",e.target.value)}}})]),a("m-form-row",{attrs:{label:"身份证签发地址"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.contactAdress,expression:"model.contactAdress"}],staticClass:"address-input credit-input",attrs:{placeholder:"请输入身份证签发地址"},domProps:{value:t.model.contactAdress},on:{blur:function(e){return t.removeSpace("model.contactAdress",e)},input:function(e){e.target.composing||t.$set(t.model,"contactAdress",e.target.value)}}})]),a("m-form-row",{attrs:{label:"联系人手机号"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.contactPhone,expression:"model.contactPhone"}],staticClass:"credit-input",attrs:{type:"tel",placeholder:"请输入联系人手机号"},domProps:{value:t.model.contactPhone},on:{blur:function(e){return t.onlyNum("model.contactPhone",e)},input:function(e){e.target.composing||t.$set(t.model,"contactPhone",e.target.value)}}})]),a("m-form-row",{attrs:{label:"联系人邮箱"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.contactEmail,expression:"model.contactEmail"}],staticClass:"credit-input",attrs:{type:"email",placeholder:"请输入联系人邮箱"},domProps:{value:t.model.contactEmail},on:{blur:function(e){return t.removeSpace("model.contactEmail",e)},input:function(e){e.target.composing||t.$set(t.model,"contactEmail",e.target.value)}}})])],1),a("p",{staticClass:"tips mt-30 mr-20",on:{click:function(e){return t.$router.$goBack()}}},[t._v("如果信息有误，可重新扫描或修改信息"),a("i",{staticClass:"iconfont icon-camera ml-20"})]),a("button",{staticClass:"btn btn-lg btn-blue btn-radius btn-center mt-80",attrs:{type:"button",disabled:t.isCheckForm},on:{click:t.submit}},[t._v("下一步")])],1)},n=[],c=a("cebc"),r=a("d225"),i=a("b0b4"),s=a("308d"),l=a("6bb5"),m=a("4e2b"),u=a("9ab4"),d=a("60a3"),p=a("a840"),f=a("8fb6"),b=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.model={isContact:0,contactName:"",contactIdNo:"",contactBorthDate:"",contactAdress:"",contactPhone:"",contactEmail:"",contactIssuingAuthority:"",contactExpiry:"",contactIdFrontSideImgId:"",contactIdReverseSideImgId:""},t}return Object(m["a"])(e,t),Object(i["a"])(e,[{key:"created",value:function(){this.getInfoByAjax()}},{key:"getInfoByAjax",value:function(){var t=this;this.$post(this.api.loadEnterprise).then(function(e){if(!e.isSuccess)return t.$toast(e.message);if(!e.data.contactIdFrontSideImgId)return t.$toast("异常：接口没有返回contactIdFrontSideImgId");if(!e.data.contactIdReverseSideImgId)return t.$toast("异常：接口没有返回contactIdReverseSideImgId");if(e.data)for(var a in t.model)e.data[a]&&(t.model[a]=e.data[a])})}},{key:"submit",value:function(){var t=this;this.$post(this.api.storeEnterprise,Object(c["a"])({},this.model)).then(function(e){e.isSuccess||t.$toast(e.message),t.$router.$push("/certify/bankAccount")})}},{key:"isCheckForm",get:function(){return!f["a"].checkForm(this.model)}}]),e}(d["d"]);b=u["a"]([Object(d["a"])({mixins:[p["a"]]})],b);var v=b,h=v,g=(a("0ecb"),a("2877")),S=Object(g["a"])(h,o,n,!1,null,"1f067c07",null);e["default"]=S.exports},a840:function(t,e,a){"use strict";a("a481"),a("ac6a"),a("28a5");var o=a("d225"),n=a("b0b4"),c=a("308d"),r=a("6bb5"),i=a("4e2b"),s=a("9ab4"),l=a("60a3"),m=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(i["a"])(e,t),Object(n["a"])(e,[{key:"setInstanceVal",value:function(t,e){var a=t.split("."),o=a.length,n=this;a.forEach(function(t,a){a!==o-1?n=n[t]:n[t]=e})}},{key:"removeSpace",value:function(t,e){this.setInstanceVal(t,e.target.value.replace(/\s+/g,""))}},{key:"onlyNum",value:function(t,e){this.setInstanceVal(t,e.target.value.replace(/[^0-9]/gi,""))}}]),e}(l["d"]);m=s["a"]([l["a"]],m),e["a"]=m},ac6a:function(t,e,a){for(var o=a("cadf"),n=a("0d58"),c=a("2aba"),r=a("7726"),i=a("32e9"),s=a("84f2"),l=a("2b4c"),m=l("iterator"),u=l("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(p),b=0;b<f.length;b++){var v,h=f[b],g=p[h],S=r[h],y=S&&S.prototype;if(y&&(y[m]||i(y,m,d),y[u]||i(y,u,h),s[h]=d,g))for(v in o)y[v]||c(y,v,o[v],!0)}}}]);