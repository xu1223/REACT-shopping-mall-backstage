(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1711:function(e,t,n){},1755:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ce}));n(1491);var a,r,o,i=n(1492),c=n.n(i),l=n(373),s=n.n(l),u=(n(73),n(30)),p=n.n(u),f=(n(1495),n(1496)),d=n.n(f),h=n(3),m=n.n(h),g=(n(88),n(39)),v=n.n(g),b=n(25),y=n.n(b),w=n(20),O=n.n(w),E=n(26),j=n.n(E),P=n(22),C=n.n(P),D=n(16),S=n.n(D),x=(n(374),n(220)),_=n.n(x),k=n(1),R=n.n(k),V=n(731),I=n(1493),N=(n(121),n(45)),L=n.n(N),T=n(1494);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=S()(e);if(t){var r=S()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return C()(this,n)}}var B=(r=a=L.a.create()(o=function(e){j()(n,e);var t=W(n);function n(e,a){var r;return y()(this,n),(r=t.call(this,e,a)).state={},r.handleFormData=function(e){r.props.changeSearch(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},r.state={},r}return O()(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=[{type:"input",labelConf:{name:"支付名称",key:"name"},span:6},{labelConf:{name:"状态",key:"status"},span:6,data:[{name:"启用",id:"2"},{name:"禁用",id:"3"}]||[]}];return R.a.createElement(T.a,{loading:this.props.loading,SearchConf:e,handleFormData:this.handleFormData})}}]),n}(k.Component))||o,a.defaultProps={},r),M=n(1490),q=n(218),A=(n(190),n(87)),J=n.n(A),z=(n(732),n(375)),G=n.n(z),K=(n(122),n(42)),U=n.n(K),H=n(28),Q=n.n(H),X=n(69),Y=n.n(X),Z=n(219),$=n(59),ee=(n(123),n(51)),te=n.n(ee),ne=(n(734),n(377)),ae=n.n(ne),re=(n(81),n(18)),oe=n.n(re),ie=n(74),ce=n.n(ie),le=n(376),se=n.n(le),ue=n(24);function pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=S()(e);if(t){var r=S()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return C()(this,n)}}var fe=function(e){j()(n,e);var t=pe(n);function n(e,a){var r;return y()(this,n),(r=t.call(this,e,a)).componentDidMount=function(){r.props.value&&r.setState({fileList:[{uid:"-1",name:"image.png",status:"done",url:r.props.value}]})},r.handlePreview=function(){var e=se()(ce.a.mark((function e(t){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,getBase64(t.originFileObj);case 3:t.preview=e.sent;case 4:r.setState({previewImage:t.url||t.preview,previewVisible:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.fileList;r.setState({fileList:t});var n={};t.map((function(e){n[r.props.id]=e.response?e.response.resultData:""})),0==t.length&&(n[r.props.id]=""),r.props.uploadchange(n)},r.handleCancel=function(){r.setState({previewVisible:!r.state.previewVisible})},r.state={fileList:[]},r}return O()(n,[{key:"render",value:function(){Object(ue.j)().accessToken;var e=this.state,t=e.previewImage,n=void 0===t?"":t,a=e.fileList,r=e.previewVisible,o={Authorization:"Bearer ".concat(localStorage.getItem("ACCESS_TOKEN"))},i=R.a.createElement("div",null,R.a.createElement(oe.a,{type:"plus"}),R.a.createElement("div",{className:"ant-upload-text"},"Upload"));return R.a.createElement("div",null,R.a.createElement(ae.a,{action:"https://api.ohhmail.com/api/admin/template_image_upload",listType:"picture-card",headers:o,fileList:a,onPreview:this.handlePreview,onChange:this.handleChange},a.length>=1?null:i),R.a.createElement(te.a,{visible:r,footer:null,onCancel:this.handleCancel},R.a.createElement("img",{alt:"example",style:{width:"100%"},src:n})))}}]),n}(k.Component);fe.defaultProps={},fe.contextType=q.a;var de=fe;function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=S()(e);if(t){var r=S()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return C()(this,n)}}var ve=L.a.Item,be=function(e){j()(n,e);var t=ge(n);function n(e,a){var r;return y()(this,n),(r=t.call(this,e,a)).beforeCallback=function(e,t){var n=r.context.rowData,a=void 0===n?{}:n,o={config:{}};Object.entries(e).map((function(e){var t=Y()(e,2),n=t[0],a=t[1];if(-1!=n.indexOf("##")){var r=new RegExp("##",""),i=n.replace(r,"");o.config[i]=a}else o[n]=a})),o.id=a.id,V.a.order.edit_myapp(me({},o)).then((function(e){e&&(r.props.changeSearch(),r.context.toggleWin("Setting"))}))},r.onCancel=function(){r.context.toggleWin("Setting")},r.uploadchange=function(e){r.props.form.setFieldsValue(me({},e))},r.state={},r}return O()(n,[{key:"componentDidMount",value:function(){this.context.rowData}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.context.rowData,n=void 0===t?{}:t,a=n.config,r=void 0===a?{}:a,o=me({beforeCallback:this.beforeCallback,title:"登陆详情",method:V.a.save_message_sign,visible:this.context.Setting,onCancel:this.onCancel,form:this.props.form},this.context.batConfig);return R.a.createElement(Z.ModalComp,o,R.a.createElement(L.a,{className:"bulletbox-form"},R.a.createElement("div",{className:"collapse-style",style:{padding:"20px"}},R.a.createElement(J.a,{style:{marginTop:"16px"}},R.a.createElement(U.a,{span:24},R.a.createElement(ve,Q()({label:"登录方式名称"},$.d),e("name",{initialValue:n.name?n.name:"",rules:[{required:!0,message:'请输入支付方式名称" '}]})(R.a.createElement(p.a,null)))),R.a.createElement(U.a,{span:24},R.a.createElement(ve,Q()({label:"接口名称"},$.d),e("name",{initialValue:n.name?n.name:"",rules:[{required:!0,message:'请输入支付方式名称" '}]})(R.a.createElement(p.a,null)))),R.a.createElement(U.a,{span:24},R.a.createElement(ve,Q()({label:"图片上传"},$.d),e("image",{initialValue:n.img_m?n.img_m:"",rules:[{required:!0,message:'请输入支付方式名称" '}]})(R.a.createElement(de,{uploadchange:this.uploadchange})))),Object.entries(r).map((function(t){var n=Y()(t,2),a=n[0],r=n[1];return R.a.createElement(U.a,{span:24},R.a.createElement(ve,Q()({label:a},$.d),e("".concat(a,"##"),{initialValue:r||"",rules:[{required:!0,message:"请输入".concat(a)}]})(R.a.createElement(p.a,null))))})),R.a.createElement(U.a,{span:24},R.a.createElement(ve,Q()({label:"排序"},$.d),e("sort_order",{initialValue:n.sort_order?n.sort_order:""})(R.a.createElement(p.a,null)))),R.a.createElement(U.a,{span:24},R.a.createElement(ve,Q()({label:"状态"},$.d),e("status",{initialValue:n.status?n.status+"":"2"})(R.a.createElement(G.a.Group,null,R.a.createElement(G.a,{value:"2"},"启用"),R.a.createElement(G.a,{value:"3"},"禁用")))))))))}}]),n}(k.Component);be.defaultProps={},be.contextType=q.a;var ye,we=L.a.create()(be),Oe=n(1489);n(1711);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=S()(e);if(t){var r=S()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return C()(this,n)}}_.a.TabPane;var Ce=Object(M.a)({toolConfig:{list:{action:"get_myapp_list"}}})(ye=function(e){j()(n,e);var t=Pe(n);function n(e,a){var r;y()(this,n),(r=t.call(this,e,a)).onBlur=function(e,t,n){e.target.value!=n&&V.a.order.set_app_sort_order({id:t,sort_order:e.target.value}).then((function(e){e&&(r.props.changeSearch({}),v.a.success("修改成功"))}))},r.onChange=function(e,t){V.a.order.set_app_enable_disable({id:t,status:e?2:3}).then((function(e){e&&(r.props.changeSearch({}),v.a.success("修改成功"))}))},r.morelink=function(e,t,n){var a="/"+e+"/"+n;r.props.goLink(a,{title:t})},r.componentDidMount=function(){r.props.changeSearch({category:"loginway"})},r.toggleWin=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"visible",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.state.otherConfig,o=void 0===a?{}:a;o=m()({rowData:n},t,!r.state[t]),r.setState((e={},m()(e,t,!r.state[t]),m()(e,"otherConfig",o),m()(e,"rowData",n),e))},r.jumpPage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"add",a=e+"/"+t+"/"+n,r=window.location.origin+"/#/"+a;window.open(r)},r.listdata=[],r.state={areaList:[],channel_contrast:[],listdata:[]};return r.columns=[{title:"登录方式",dataIndex:"name"},{title:"接口名称",dataIndex:"name"},{title:"图片",dataIndex:"image",render:function(e,t){return R.a.createElement("img",{src:t.image,style:{width:"50px",height:"50px"}})}},{title:"状态",dataIndex:"status",width:100,render:function(e,t){return R.a.createElement(d.a,{defaultChecked:2==e,onChange:function(e){return r.onChange(e,t.id)}})}},{title:"排序",dataIndex:"sort_order",width:100,render:function(e,t){return R.a.createElement(p.a,{defaultValue:e,onBlur:function(n){return r.onBlur(n,t.id,e)}})}},{title:"操作",dataIndex:"id",width:300,fixed:"right",render:function(e,t){return R.a.createElement(Oe.a,(n=t,{config:[{title:"编辑",onAuth:"add",noCheck:!0,onClick:function(){return r.toggleWin("Setting",n)}}],batConfig:r.props.batConfig,rowData:n,paramData:{is_column:1,id:n.id}}));var n}}],r}return O()(n,[{key:"render",value:function(){var e=this.state,t=e.channel_contrast,n=e.rowData,a=je({columns:this.columns},this.props.tableConfig);s()(this.props);var r=je(je({},this.state.otherConfig),{},{toggleWin:this.toggleWin,jumpPage:this.jumpPage,batConfig:this.props.batConfig,channel_contrast:t,changeSearch:this.props.changeSearch,rowData:n});return R.a.createElement("div",{className:"tabSwitching"},R.a.createElement("div",{className:"userStyle listStyle"},R.a.createElement(q.a.Provider,{value:r},R.a.createElement(B,{changeSearch:this.props.changeSearch,channel_contrast:t}),R.a.createElement("div",{className:"header-tool"},R.a.createElement("p",null,"联合方式")),R.a.createElement(c.a,{className:"content-main"},R.a.createElement("div",{className:"content-table"},R.a.createElement(I.a,a))),this.state.Setting&&R.a.createElement(we,{changeSearch:this.props.changeSearch}))))}}]),n}(k.Component))||ye}}]);