(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1749:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return me}));a(1491);var n=a(1492),r=a.n(n),o=(a(73),a(30)),i=a.n(o),c=a(3),l=a.n(c),s=a(25),u=a.n(s),p=a(20),f=a.n(p),d=a(26),m=a.n(d),g=a(22),h=a.n(g),b=a(16),y=a.n(b),v=a(1),O=a.n(v),E=a(55),_=(a(44),a(190),a(87)),D=a.n(_),w=(a(122),a(42)),j=a.n(w),C=a(218),P=(a(281),a(113)),S=a.n(P),x=a(28),k=a.n(x),R=(a(89),a(40)),I=a.n(R),M=(a(121),a(45)),V=a.n(M),q=a(10),N=a(219),z=a(59);a(1504);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}var Y=V.a.Item,T=(i.a.TextArea,I.a.Option),W=function(e){m()(a,e);var t=F(a);function a(e,n){var r;return u()(this,a),(r=t.call(this,e,n)).beforeCallback=function(e,t){var a=r.context.rowData,n=void 0===a?{}:a;n.id&&(e.id=n.id),t(e)},r.handleChange=function(e){Object(q.b)(E.a.get_zones_pager,{page_size:9999,country_id:e}).then((function(e){e&&r.setState({zoneArea:e.resultData.data})}))},r.zone_Store=function(){},r.onCancel=function(){r.context.toggleWin("visible")},r.state={},r}return f()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.props.storagecountry,n=void 0===a?[]:a,r=this.state.zoneArea,o=void 0===r?[]:r,c=this.context.rowData,s=void 0===c?{}:c,u=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({beforeCallback:this.beforeCallback,title:"新增会员",method:E.a.add_customer,visible:this.context.visible,onCancel:this.onCancel,form:this.props.form},this.context.batConfig);return O.a.createElement(N.ModalComp,u,O.a.createElement(V.a,{className:"bulletbox-form"},O.a.createElement("div",{className:"collapse-style",style:{padding:"20px"}},O.a.createElement(D.a,{style:{marginTop:"16px"}},O.a.createElement(j.a,{span:24},O.a.createElement(j.a,{span:12},O.a.createElement(Y,k()({label:"名字"},z.a),t("first_name",{initialValue:s.first_name||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null)))),O.a.createElement(j.a,{span:12},O.a.createElement(Y,k()({label:"姓氏"},z.a),t("last_name",{initialValue:s.last_name||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null))))),O.a.createElement(j.a,{span:24},O.a.createElement(Y,k()({label:"电子邮件"},z.d),t("email",{initialValue:s.email?s.storage_area_id:"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null)))),O.a.createElement(j.a,{span:24},O.a.createElement(Y,k()({label:"会员是否接受订阅"},z.a),t("newsletter",{initialValue:s.newsletter||""})(O.a.createElement(S.a,null)))),O.a.createElement(j.a,{span:24},O.a.createElement(j.a,{span:12},O.a.createElement(Y,k()({label:"电话号码"},z.a),t("mobile",{initialValue:s.mobile||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null)))),O.a.createElement(j.a,{span:12},O.a.createElement(Y,k()({label:"邮编"},z.a),t("postcode",{initialValue:s.postcode||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null))))),O.a.createElement(j.a,{span:24},O.a.createElement(Y,k()({label:"地址"},z.d),t("address_1",{initialValue:s.address_1||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null)))),O.a.createElement(j.a,{span:24},O.a.createElement(j.a,{span:12},O.a.createElement(Y,k()({label:"国家"},z.a),t("country_id",{initialValue:s.country_id||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(I.a,{showSearch:!0,optionFilterProp:"children",onChange:function(t){return e.handleChange(t)}},n.map((function(e){return O.a.createElement(T,{name:e.name,value:e.id},e.name)})))))),O.a.createElement(j.a,{span:12},O.a.createElement(Y,k()({label:"州"},z.a),t("zone_id",{initialValue:s.zone_id||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(I.a,{showSearch:!0,optionFilterProp:"children"},o.map((function(e){return O.a.createElement(T,{name:e.name,value:e.id},e.name)}))))))),O.a.createElement(j.a,{span:24},O.a.createElement(Y,k()({label:"市"},z.d),t("city",{initialValue:s.city||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(i.a,null))))))))}}]),a}(v.Component);W.defaultProps={},W.contextType=C.a;var L=V.a.create()(W);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}var U=V.a.Item,G=(i.a.TextArea,I.a.Option),H=function(e){m()(a,e);var t=J(a);function a(e,n){var r;return u()(this,a),(r=t.call(this,e,n)).beforeCallback=function(e,t){var a="";r.props.listSelData.map((function(e){a+=e})),e.customer_ids=a,t(e)},r.onCancel=function(){r.context.toggleWin("visibleSku")},r.state={},r}return f()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.storagemanager,a=void 0===t?[]:t,n=this.context.rowData,r=void 0===n?{}:n,o=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({beforeCallback:this.beforeCallback,title:"转移客服",method:E.a.transfer_to_manager,visible:this.context.visibleSku,onCancel:this.onCancel,form:this.props.form},this.context.batConfig);return O.a.createElement(N.ModalComp,o,O.a.createElement(V.a,{className:"bulletbox-form"},O.a.createElement("div",{className:"collapse-style",style:{padding:"40px"}},O.a.createElement(D.a,{style:{marginTop:"16px"}},O.a.createElement(j.a,{span:24},O.a.createElement(U,k()({label:"客服"},z.d),e("manager_id",{initialValue:r.manager_id||"",rules:[{required:!0,message:"必填项"}]})(O.a.createElement(I.a,{showSearch:!0,optionFilterProp:"children"},a.map((function(e){return O.a.createElement(G,{name:e.name,value:e.id},e.name)}))))))))))}}]),a}(v.Component);H.defaultProps={},H.contextType=C.a;var K=V.a.create()(H),Q=a(1489);a(1497);function X(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}var Z=function(e){m()(a,e);var t=X(a);function a(e,n){var r;return u()(this,a),(r=t.call(this,e,n)).dealUploadData=function(e){r.context.batConfig.changeSearch()},r}return f()(a,[{key:"render",value:function(){var e=this,t=this.props.selectdata,a=void 0===t?{}:t,n={config:[{title:"新增",noAuth:"add",noCheck:!0,onClick:function(){return e.context.toggleWin("visible",{rowData:{},type:"add"})}},{title:"转移客服",noAuth:"add",onClick:function(){return e.context.toggleWin("visibleSku")}}],method:"",batConfig:this.context.batConfig};return O.a.createElement("div",{className:"action-bar"},O.a.createElement(D.a,{type:"flex",justify:"space-between",align:"middle",gutter:10},O.a.createElement(j.a,null,O.a.createElement(Q.a,n))),this.context.visible&&O.a.createElement(L,{storagecountry:a.storagecountry}),this.context.visibleSku&&O.a.createElement(K,{storagemanager:a.storagemanager,listSelData:this.props.listSelData}))}}]),a}(v.Component);Z.defaultProps={},Z.contextType=C.a;var $,ee,te,ae=a(1493),ne=a(1494),re=a(5),oe=a.n(re);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ce(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}var le,se=(ee=$=V.a.create()(te=function(e){m()(a,e);var t=ce(a);function a(e,n){var r;return u()(this,a),(r=t.call(this,e,n)).state={},r.getAllStorage=function(){Object(q.a)(api.getAllStorage).then((function(e){r.setState({allStorageList:e.resultData.data.list})}))},r.handleFormData=function(e){e.time_type?(e.date_start=oe()(e.time_type[0]).format("YYYY-MM-DD")+" 00:00:00",e.date_end=oe()(e.time_type[1]).format("YYYY-MM-DD")+" 23:59:59"):(e.date_start="",e.date_end=""),e.time_type="1",r.props.changeSearch(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))},r.state={allStorageList:[]},r}return f()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=(e.dictData,e.selectdata),a=void 0===t?{}:t,n=[{type:"input",labelConf:{name:"会员名称",key:"email"},span:6},{labelConf:{name:"注册国家",key:"register_country_id"},span:6,data:a.storagecountry||[]},{labelConf:{name:"会员等级",key:"customer_group_id"},span:6,data:a.storagegroup||[]},{labelConf:{name:"客服",key:"manager_id"},span:6,data:a.storagemanager||[]},{labelConf:{name:"渠道来源",key:"sources_channel_id"},span:6,data:a.storagecontrast||[]},{labelConf:[{name:"注册时间",key:"time_type"}],span:6,type:"range"}];return O.a.createElement(ne.a,{loading:this.props.loading,SearchConf:n,handleFormData:this.handleFormData})}}]),a}(v.Component))||te,$.defaultProps={},ee),ue=a(1490);function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y()(e);if(t){var r=y()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return h()(this,a)}}var me=Object(ue.a)({toolConfig:{list:{action:"get_customers_pager",params:{}}}})(le=function(e){m()(a,e);var t=de(a);function a(e,n){var r;u()(this,a),(r=t.call(this,e,n)).onsortBlur=function(e,t,a){e.target.value},r.jumpPage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add",n=e+"/"+t+"/"+a,r=window.location.origin+"/#/"+n;window.open(r)},r.componentDidMount=function(){var e=r.props.params.id,t=r.props.params;r.props.changeSearch({storage_id:t.id,email:e}),r.country_idsetore()},r.country_idsetore=function(){Object(q.b)(E.a.get_countrys_pager,{page_size:"9999"}).then((function(e){e&&r.setState({storagecountry:e.resultData?e.resultData.data:[]})})),Object(q.b)(E.a.get_manager_list,{}).then((function(e){e&&r.setState({storagemanager:e.resultData})})),Object(q.b)(E.a.get_customers_group_pager,{}).then((function(e){e&&r.setState({storagegroup:e.resultData})})),Object(q.b)(E.a.get_sources_channel_contrast_pager,{}).then((function(e){e&&r.setState({storagecontrast:e.resultData.data})}))},r.toggleWin=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"visible",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.state.otherConfig,o=void 0===n?{}:n;o=fe(fe(fe({},o),a),{},l()({},t,!r.state[t])),r.setState((e={},l()(e,t,!r.state[t]),l()(e,"otherConfig",o),e))},r.state={areaList:[]};return r.columns=[{title:"会员邮箱",dataIndex:"email",width:200},{title:"会员等级",dataIndex:"customer_group_name",width:100},{title:"购物车数量",dataIndex:"cart_count",width:100},{title:"订单总数",dataIndex:"order_count",width:100},{title:"支付总额（＄）",dataIndex:"pay_total",width:100,render:function(e,t){var a=Math.floor(100*e)/100;return O.a.createElement("div",null,a)}},{title:"注册时间",dataIndex:"created_at",width:100},{title:"最近加购时间",dataIndex:"cart_recent_time",width:100},{title:"最近下单时间",dataIndex:"order_recent_time",width:100},{title:"客服",dataIndex:"manager_name",width:100},{title:"渠道来源",dataIndex:"channel_name",width:100},{title:"排序",dataIndex:"sort_order",width:180,render:function(e,t){return O.a.createElement(i.a,{defaultValue:e,onBlur:function(a){return r.onsortBlur(a,t.id,e)}})}},{title:"操作",dataIndex:"id",width:200,render:function(e,t){return O.a.createElement(Q.a,(a=t,{config:[{title:"查看",noCheck:!0,ghost:!0,onClick:function(){r.jumpPage("Memberinfoproedit",a.id,"check")}}],batConfig:r.props.batConfig,rowData:a}));var a}}],r}return f()(a,[{key:"render",value:function(){var e=fe({columns:this.columns},this.props.tableConfig),t=this.props.local,a=void 0===t?{}:t,n=a.storageInitData,o=void 0===n?{}:n,i=a.storageList,c=o.area,l=void 0===c?[]:c,s=this.state,u={storagecontrast:s.storagecontrast,storagemanager:s.storagemanager,storagegroup:s.storagegroup,storagecountry:s.storagecountry},p=fe(fe({},this.state.otherConfig),{},{toggleWin:this.toggleWin,dictData:l,storageList:i,batConfig:this.props.batConfig,changeSearch:this.props.changeSearch});return O.a.createElement("div",{className:"userStyle"},O.a.createElement(C.a.Provider,{value:p},O.a.createElement(se,{selectdata:u,changeSearch:this.props.changeSearch,dictData:l,storageList:i}),O.a.createElement("div",{className:"header-tool"},O.a.createElement("p",null,"会员信息"),O.a.createElement(Z,{selectdata:u,listSelData:this.props.listSelData,values:this.props.values})),O.a.createElement(r.a,{className:"content-main"},O.a.createElement("div",{className:"content-table"},O.a.createElement(ae.a,e)))))}}]),a}(v.Component))||le}}]);