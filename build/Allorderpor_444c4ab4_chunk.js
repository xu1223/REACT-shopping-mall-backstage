(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1577:function(e,t,a){e.exports=a.p+"./vip.png?c23b9e6c862388ad5d651bdc8607312b"},1578:function(e,t,a){e.exports=a.p+"./p_template.xlsx"},1735:function(e,t,a){"use strict";a.r(t);a(121);var n=a(45),r=a.n(n),i=a(28),o=a.n(i),s=(a(190),a(87)),c=a.n(s),l=(a(122),a(42)),d=a.n(l),u=(a(221),a(125)),p=a.n(u),m=a(3),h=a.n(m),f=(a(88),a(39)),g=a.n(f),_=a(53),y=a.n(_),b=a(25),v=a.n(b),E=a(20),x=a.n(E),w=a(26),D=a.n(w),S=a(22),k=a.n(S),O=a(16),C=a.n(O),P=(a(374),a(220)),j=a.n(P),R=a(1),N=a.n(R),I=(a(116),a(67),a(218)),q=(a(1491),a(1492)),T=a.n(q),z=(a(1502),a(1503)),F=a.n(z),M=(a(378),a(126)),A=a.n(M),W=(a(82),a(41)),V=a.n(W),K=(a(89),a(40)),B=a.n(K),Y=(a(73),a(30)),L=a.n(Y),U=a(59),H=a(55),J=a(10),G=a(1577),Z=a.n(G),Q=(a(281),a(113)),X=a.n(Q),$=a(219);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}var ne=r.a.Item,re=B.a.Option,ie=function(e){D()(a,e);var t=ae(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).beforeCallback=function(e,t){r.context.information.id?(r.props.changeadder(e,!0),r.context.toggleWin("addvisible")):Object(J.b)(H.a.add_customer,e).then((function(e){if(e&&200==e.resultId){var t=te(te({},e.resultData.customer),{},{addresses:e.resultData.address});r.props.changeadder(t),r.context.toggleWin("addvisible")}}))},r.onChange=function(e){Object(J.b)(H.a.get_zones_list,{country_id:e}).then((function(e){e&&r.setState({zoneArea:e.resultData})}))},r.onCancel=function(){r.context.toggleWin("addvisible")},r.state={},r}return x()(a,[{key:"componentDidMount",value:function(){var e=this,t=this.context.information,a=void 0===t?{}:t;a.addresses&&a.addresses.country_id&&Object(J.b)(H.a.get_zones_list,{country_id:a.addresses?a.addresses.country_id:""}).then((function(t){t&&e.setState({zoneArea:t.resultData})}))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.zoneArea,a=void 0===t?[]:t,n=this.context,i=n.storagecountry,s=(n.addmembder,n.information),l=!!s.id,u=te({beforeCallback:this.beforeCallback,title:l?"编辑会员":"新增会员",method:l?"编辑会员":H.a.add_customer,visible:this.context.addvisible,onCancel:this.onCancel,form:this.props.form},this.context.batConfig);return N.a.createElement($.ModalComp,u,N.a.createElement(r.a,{className:"bulletbox-form"},N.a.createElement("div",{className:"collapse-style"},N.a.createElement(c.a,{style:{marginTop:"16px",padding:"20px"}},N.a.createElement(d.a,{span:24},N.a.createElement(d.a,{span:12},N.a.createElement(ne,o()({label:"名字"},U.a),e(l?"firstname":"first_name",{initialValue:s.addresses?s.addresses.firstname:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,null)))),N.a.createElement(d.a,{span:12},N.a.createElement(ne,o()({label:"姓氏"},U.a),e(l?"lastname":"last_name",{initialValue:s.addresses?s.addresses.lastname:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,null))))),N.a.createElement(d.a,{span:24},N.a.createElement(ne,o()({label:"电子邮件"},U.d),e(l?"contactemail":"email",{initialValue:s?s.email:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,null)))),N.a.createElement(d.a,{span:24},N.a.createElement(ne,o()({label:"会员是否接受订阅"},U.a),e("newsletter",{initialValue:s.addresses?s.addresses.default:""})(N.a.createElement(X.a,null)))),N.a.createElement(d.a,{span:24},N.a.createElement(d.a,{span:12},N.a.createElement(ne,o()({label:"电话号码"},U.a),e("mobile",{initialValue:s.addresses?s.addresses.mobile:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,{type:"number"})))),N.a.createElement(d.a,{span:12},N.a.createElement(ne,o()({label:"邮编"},U.a),e("postcode",{initialValue:s.addresses?s.addresses.postcode:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,null))))),N.a.createElement(d.a,{span:24},N.a.createElement(ne,o()({label:"地址"},U.d),e("address_1",{initialValue:s.addresses?s.addresses.address_1:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,null)))),N.a.createElement(d.a,{span:24},N.a.createElement(d.a,{span:12},N.a.createElement(ne,o()({label:"国家"},U.a),e("country_id",{initialValue:s.addresses?s.addresses.country_id:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(B.a,{showSearch:!0,optionFilterProp:"children",onChange:this.onChange},i.map((function(e){return N.a.createElement(re,{name:e.name,value:e.id},e.name)})))))),N.a.createElement(d.a,{span:12},N.a.createElement(ne,o()({label:"州"},U.a),e("zone_id",{initialValue:s.addresses?s.addresses.zone_id:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(B.a,{showSearch:!0,optionFilterProp:"children"},a.map((function(e){return N.a.createElement(re,{name:e.name,value:e.id},e.name)}))))))),N.a.createElement(d.a,{span:24},N.a.createElement(ne,o()({label:"市"},U.d),e("city",{initialValue:s.addresses?s.addresses.city:"",rules:[{required:!0,message:"必填项"}]})(N.a.createElement(L.a,null))))))))}}]),a}(R.Component);ie.defaultProps={},ie.contextType=I.a;var oe=r.a.create()(ie),se=a(5),ce=a.n(se),le=a(1508);function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}var ue=r.a.Item,pe=L.a.TextArea,me=L.a.Search,he=B.a.Option,fe=function(e){D()(a,e);var t=de(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).order_status_type=function(){r.context.order_status,r.setState({orderstate:"未支付"})},r.Searchchange=function(e){""!=e?Object(J.a)(H.a.get_customer_and_address,{email:e,default:1}).then((function(e){e.resultData instanceof Array?g.a.warning("没有此邮箱"):r.context.toggadder(e.resultData,!0)})):g.a.warning("邮箱不能为空")},r.changeadder=function(e,t){t?(r.context.information.addresses=e,r.context.toggadder(r.context.information),r.setState({type:!r.state.type})):(r.context.toggadder(e),r.setState({type:!0}))},r.informationlist=function(e){var t=r.context.information;return t.addresses instanceof Array&&(t.addresses=t.addresses[0]||""),N.a.createElement("div",{className:"inforammain"},N.a.createElement("div",{className:"top"},N.a.createElement("p",null,t.lastname||"**"," ",t.firstname||"**"),N.a.createElement("span",null,t.email),t.contactemail?N.a.createElement("p",{style:{fontSize:"12px"}},"联系邮箱：",t.contactemail):""),N.a.createElement("div",{className:"bottom"},t.addresses?N.a.createElement("div",{style:{wordWrap:"break-word;"}},t.addresses.country_name," ",t.addresses.zone_name," ",t.addresses.city," ",t.addresses.address_1,t.addresses.postcode," ",t.addresses.mobile," ",t.addresses.lastname," ",t.addresses.firstname):""),"add"==r.context.operType?N.a.createElement("i",{onClick:function(){return r.colse()},className:"iconfont order-ico-qingkong close"}):"","check"==r.context.operType||"unpaid"!=r.context.order_status&&"add"!=r.context.operType?"":N.a.createElement(V.a,{round:!0,className:"button",onClick:function(){return r.context.toggleWin("addvisible",{addmembder:r.state.information})}},"修改信息"))},r.onBlur=function(e,t){r.context.togginitData(e.target.value,t)},r.payvalues=function(e){r.context.paydata(e),r.setState({orderstate1:"已付款"})},r.state={information:"",informationedit:"",orderstate:"未付款",type:!1},r}return x()(a,[{key:"componentDidMount",value:function(){this.order_status_type()}},{key:"colse",value:function(){this.setState({information:""}),this.context.toggadder({})}},{key:"render",value:function(){var e=this,t=this.context,a=t.loading,n=t.initData,r=void 0===n?{}:n,i=t.information,s=t.paylist,l=t.order_status,u=t.operType,p=t.get_manager_list,m=void 0===p?[]:p,h=t.get_geo_zones_pager,f=void 0===h?[]:h,g=this.props.form,_=this.state,y=_.orderstate,b=_.orderstate1,v=g.getFieldDecorator,E="check"==u,x="add"!=u,w="edit"!=u,D=0;r.total_price&&(D=parseFloat(r.total_price).toFixed(2));return y="processing"==l?"处理中":"unpaid"==l?"未支付":"paid"==l?"已支付":"partial"==l?"部分支付":"shipped"==l?"已发货":"canceled"==l?"已取消":"completed"==l?"已完成":"refunded"==l?"已退款":"partially_refunded"==l?"部分退款":"未支付",N.a.createElement("div",{className:"card-body content-main-card"},N.a.createElement(T.a,{title:N.a.createElement("span",null,N.a.createElement("i",{className:"iconfont shop_ziyuan16"})," 订单信息 ")},N.a.createElement(c.a,{type:"flex",justify:"space-between",style:{padding:"40px 0"}},N.a.createElement(d.a,{span:6},"add"==u?N.a.createElement("div",{className:"h-l-s"},N.a.createElement(me,{placeholder:"",onSearch:function(t){return e.Searchchange(t)},style:{marginRight:"10px"}})," ",N.a.createElement(V.a,{style:{minWidth:"88px"},type:"primary",onClick:function(){return e.context.toggleWin("addvisible")}},"添加会员")):"",N.a.createElement("div",null,"add"==u?i.email?this.informationlist():N.a.createElement("img",{src:Z.a}):this.informationlist(r))),N.a.createElement(d.a,{span:12},N.a.createElement(F.a,{paragraph:{rows:3},loading:a},N.a.createElement(c.a,null,N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"订单编号"}),N.a.createElement("p",{style:{color:"#C9C9C9"}},r.invoice_no||"创建成功后自动生成系统订单编号"))),N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"下单时间"}),v("created_at",{rules:[{required:!0,message:"请填写下单时间"}],initialValue:r.created_at?ce()(r.created_at,"YYYY-MM-DD HH:mm:ss"):""})(N.a.createElement(A.a,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",disabled:x,style:{width:"100%"}}))))),N.a.createElement(c.a,null,N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"支付方式"}),v("payment_method",{rules:[{required:!0,message:"请填写支付方式"}],initialValue:r.payment_method||""})(N.a.createElement(B.a,{getFieldDecorator:r.payment_method,disabled:E,showSearch:!0,optionFilterProp:"name"},s.map((function(e){return N.a.createElement(he,{name:e.label,value:e.value},e.label)})))))),N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"物流方式"}),v("shipment_method",{rules:[{required:!0,message:"请填写物流方式"}],initialValue:r.shipment_method||""})(N.a.createElement(B.a,{disabled:E,showSearch:!0,optionFilterProp:"name"},f.map((function(e){return N.a.createElement(he,{name:e,value:e},e)}))))))),N.a.createElement(c.a,null,N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"客服"}),v("manager_id",{initialValue:r.manager_id||""})(N.a.createElement(B.a,{disabled:!0,showSearch:!0,optionFilterProp:"name"},m.map((function(e){return N.a.createElement(he,{name:e.name,value:e.id},e.name)}))))))),N.a.createElement(c.a,null,N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"买家留言"}),v("note",{initialValue:r.note||""})(N.a.createElement(pe,{disabled:E})))),N.a.createElement(d.a,{span:12},N.a.createElement(ue,o()({},U.c,{label:"订单备注"}),v("memo",{initialValue:r.memo||""})(N.a.createElement(pe,{disabled:E}))))))),N.a.createElement(d.a,{span:4},N.a.createElement("div",{className:"status-p"},N.a.createElement("div",{class:"background-main"},N.a.createElement("div",{class:"b-m-h"},N.a.createElement("p",null,N.a.createElement("span",{style:{color:"#333333",fontSize:"14px",fontWeight:"500"}},b||y)),"add"==u||"unpaid"==l&&"check"!=u?N.a.createElement("span",{onClick:function(){e.context.toggleWin("visibleLog")}},"标记付款"):""),N.a.createElement("div",{class:"background-total"},N.a.createElement("div",{class:"b-t-f"},N.a.createElement("p",null,N.a.createElement("label",null,"商品总数："),N.a.createElement("span",null,r.total_number||0)),N.a.createElement("p",null,N.a.createElement("label",null,"商品总重："),N.a.createElement("span",null,r.total_weight||0)),N.a.createElement("p",null,N.a.createElement("label",null,"商品总额："),N.a.createElement("span",null,r.subtotal_price||0)),N.a.createElement(ue,o()({},U.c,{label:"金额调整："}),v("total_discount",{initialValue:r.total_discount||""})(N.a.createElement(L.a,{disabled:w,onBlur:function(t){return e.onBlur(t,"total_discount")},style:{width:"85px"}}))),N.a.createElement("p",null,N.a.createElement("label",null,"优惠劵金额："),N.a.createElement("span",null,r.coupon_history||0)),N.a.createElement("p",null,N.a.createElement("label",null,"活动优惠金额："),N.a.createElement("span",null,r.activity_history||0)),N.a.createElement(ue,o()({},U.c,{label:"运费："}),v("shipping_fee",{initialValue:r.shipping_fee||""})(N.a.createElement(L.a,{disabled:E,onBlur:function(t){return e.onBlur(t,"shipping_fee")},style:{width:"85px"}}))),N.a.createElement(ue,o()({},U.c,{label:"支付手续费："}),v("payment_fee",{initialValue:r.payment_fee||""})(N.a.createElement("span",null,r.payment_fee||0))),N.a.createElement("p",null,N.a.createElement("label",null,"实际支付金额："),N.a.createElement("span",null,D))))))))),this.context.visibleLog&&N.a.createElement(le.a,{paystate:!0,payvalues:this.payvalues}),this.context.addvisible&&N.a.createElement(oe,{changeadder:this.changeadder}))}}]),a}(R.Component);fe.contextType=I.a;a(1510);var ge,_e,ye,be=a(1489),ve=a(1497),Ee=a(1578),xe=a.n(Ee),we=(a(1499),a(1500)),De=a.n(we),Se=a(1494);function ke(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}B.a.Option;var Oe,Ce,Pe,je=(_e=ge=r.a.create()(ye=function(e){D()(a,e);var t=ke(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).state={},r.handleFormData=function(e){r.props.changeSearch(e)},r.state={allStorageList:[]},r}return x()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return N.a.createElement(Se.a,{loading:this.props.loading,SearchConf:[{isExact:"is_like",labelConf:[{name:"SKU",key:"sku"},{name:"SPU",key:"spu"},{name:"商品名称",key:"name"}],type:"input",span:6}],handleFormData:this.handleFormData})}}]),a}(R.Component))||ye,ge.defaultProps={},_e),Re=a(1490),Ne=a(1493),Ie=a(1501);function qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}var ze=(Ce=Oe=Object(Re.a)({toolConfig:{list:{action:"get_option_products"}}})(Pe=function(e){D()(a,e);var t=Te(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).beforeCallback=function(e){var t=r.props,a=t.selectedRows,n=t.shopdata;if(0==a.length||!a)return g.a.error("请至少选择一项"),!1;var i=[];a.map((function(e){n.map((function(t){t.product_id==e.product_id&&(e.isshow=!0)})),e.isshow||(e.id=0,e.quantity=1,e.transactionprice=e.quantity*e.price,e.total_weight=e.quantity*e.weight,i.push(e))})),r.props.toggshop(i),r.props.toggleWin("addshop")},r.onCancel=function(){r.props.toggleWin("addshop")},r.handleClick=function(e,t){var a=r.state,n=(a.listParams,a.activeKey,{category_id:e.parent_cate||e.son_cate});r.props.changeSearch(n)},r.clearCategory=function(){r.setState({categoryId:""},(function(){r.props.changeSearch({categoryId:""},r.state.activeKey)}))},r.state={categroyList:[],stage:!0,stageid:"",supdata:[]},r.columns=[{title:"缩略图",dataIndex:"img_m",width:80,render:function(e,t,a){return N.a.createElement("a",{href:t.image},N.a.createElement("img",{src:e,style:{width:"60px"}}))}},{title:"商品信息",dataIndex:"sku",width:150,render:function(e,t,a){return N.a.createElement("div",null,t.spu?N.a.createElement("p",null,"SPU:",t.spu):"",N.a.createElement("p",null,"SKU:",t.sku),N.a.createElement("p",null,"COLOR:",t.color),N.a.createElement("p",null,"SIZE:",t.size))}},{title:"商品名称",dataIndex:"name",width:200},{title:"商品展示价格(USD)",dataIndex:"show_price",width:100,render:function(e,t){var a;return a=parseFloat(e).toFixed(2),N.a.createElement("span",null,a)}},{title:"商品销售价格(USD)",dataIndex:"price",width:100,render:function(e,t,a){var n;return n=parseFloat(e).toFixed(2),N.a.createElement("span",null,n)}}],r}return x()(a,[{key:"componentDidMount",value:function(){var e=this;Object(J.b)(H.a.get_category_tree_list).then((function(t){200==t.resultId&&(t.resultData.forEach((function(e){e.children=e.children,e.cate_name=e.name,e.review_status_num=e.parent_id,e.children&&e.children.forEach((function(e){e.children=e.children?e.children:[],e.cate_name=e.name,e.review_status_num=e.parent_id,e.children&&e.children.forEach((function(e){e.children=e.children?e.children:[],e.cate_name=e.name,e.review_status_num=e.parent_id}))}))})),e.setState({categroyList:t.resultData}))}))}},{key:"render",value:function(){var e=this,t=this.state.categroyList,a=this.props,n=(a.dataS,a.addshop,{beforeCallback:this.beforeCallback,title:!1,method:H.a.add_customer,visible:this.props.addshop,onCancel:this.onCancel,form:this.props.form,winType:3}),r={handleClick:this.handleClick,categroyList:t,clearCategory:this.clearCategory,type:"dev",ref:function(t){return e.child=t}},i=this.props.tableConfig;i.dataSource&&i.dataSource.map((function(e){e.selechange=0}));var s=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({columns:this.columns},i);return N.a.createElement($.ModalComp,n,N.a.createElement(je,{changeSearch:this.props.changeSearch}),N.a.createElement(c.a,{style:{padding:"20px"}},N.a.createElement(d.a,{span:6,style:{marginRight:"10px"}},N.a.createElement(De.a,{offsetTop:94},N.a.createElement(Ie.a,r))),N.a.createElement(d.a,{span:17},N.a.createElement("div",{className:"content-table"},N.a.createElement(Ne.a,o()({},s,{selectedRowKeys:this.state.listSelData,className:"table-main-test"}))))))}}]),a}(R.Component))||Pe,Oe.contextType=I.a,Ce);function Fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}var Ae=r.a.Item,We=function(e){D()(a,e);var t=Me(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).beforeCallback=function(e,t){Object(J.b)(H.a.get_customer_carts,e).then((function(e){if(e)if(200==e.resultId){var t=r.context.shopdata,a=[],n=e.resultData;if(0==n.length)return g.a.error("购物车数量为空"),!1;n.map((function(e){t.map((function(t){t.product_id==e.product_id&&(e.isshow=!0)})),e.isshow||(e.id=0,e.quantity=1,e.transactionprice=e.quantity*e.price,e.total_weight=e.quantity*e.weight,a.push(e))})),r.context.toggshop(a),r.context.toggleWin("visibleMark")}else g.a.error("邮箱不存在")}))},r}return x()(a,[{key:"render",value:function(){var e=this,t=this.context.visibleMark,a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({beforeCallback:this.beforeCallback,title:!1,visible:t,winType:1,onCancel:function(){return e.context.toggleWin("visibleMark")},method:H.a.get_customer_carts,form:this.props.form},this.context.batConfig),n=this.props.form.getFieldDecorator;return N.a.createElement($.ModalComp,a,N.a.createElement(r.a,{style:{padding:"20px"}},N.a.createElement("p",null,"购物车"),N.a.createElement(Ae,null,n("email",{rules:[{required:!0,message:"请输入邮箱"}]})(N.a.createElement(L.a,null)))))}}]),a}(R.Component);We.defaultProps={},We.contextType=I.a;var Ve=r.a.create()(We);function Ke(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}var Be=function(e){D()(a,e);var t=Ke(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).add=function(){},r.colse=function(){var e=r.props.selectedRowKeys,t=[],a=[];t=JSON.parse(JSON.stringify(r.context.shopdata)),e.map((function(e){delete t[e]})),t.map((function(e){e&&a.push(e)})),r.context.shopdata=a,r.context.shopedit(r.context.shopdata)},r.filedata=function(e){var t=r.context.shopdata,a=[];e.map((function(e){t.map((function(t){t.product_id==e.product_id&&(e.isshow=!0)})),e.isshow||(e.id=0,e.quantity=1,e.transactionprice=e.quantity*e.price,e.total_weight=e.quantity*e.weight,a.push(e))})),r.context.toggshop(a)},r.columns={},r}return x()(a,[{key:"render",value:function(){var e=this,t=this.context,a=(t.activeKey,t.shoptable,{config:[{title:"添加商品",onAuth:"add",noCheck:!0,onClick:function(){return e.context.toggleWin("addshop")}},{title:"移除商品",onAuth:"add",noCheck:!0,onClick:function(){return e.colse()}},{title:"引用购物车商品",onAuth:"add",noCheck:!0,onClick:function(){return e.context.toggleWin("visibleMark")}}],unicode:"order_id|id",batConfig:{listSelData:[],selectedRows:[]}});return N.a.createElement("div",{className:"action-bar"},N.a.createElement(c.a,{type:"flex",justify:"space-between",align:"middle",gutter:10},N.a.createElement(d.a,null,N.a.createElement("div",{style:{display:"flex"}},N.a.createElement(be.a,a),N.a.createElement("div",{style:{marginLeft:"10px"}},N.a.createElement(ve.a,{upLoadUrl:"/api/admin/batch_add_product_to_order",title:"导入商品",name:"file",upLoadFile:xe.a,uploadParamas:{access_token:localStorage.getItem("ACCESS_TOKEN")},showImportBtn:!0,filedata:function(t){return e.filedata(t)}}))))),this.context.addshop&&N.a.createElement(ze,{toggshop:this.context.toggshop,shopdata:this.context.shopdata,addshop:this.context.addshop,toggleWin:this.context.toggleWin}),this.context.visibleMark&&N.a.createElement(Ve,null))}}]),a}(R.Component);function Ye(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}Be.defaultProps={},Be.contextType=I.a;r.a.Item,B.a.Option;var Le=function(e){D()(a,e);var t=Ye(a);function a(e,n){var r;return v()(this,a),(r=t.call(this,e,n)).colse=function(e,t){r.context.shopdata.splice(t,1),r.context.shopedit(r.context.shopdata)},r.onBlurprice=function(e,t,a){t.transactionprice=e.target.value,r.context.shopdata[a].transactionprice=e.target.value,r.context.shopedit(r.context.shopdata)},r.onBlur=function(e,t,a){r.context.shopdata[a].total_weight=parseFloat(e.target.value*t.weight).toFixed(2),r.context.shopdata[a].quantity=e.target.value,r.context.shopedit(r.context.shopdata)},r.onSelectChange=function(e){r.setState({selectedRowKeys:e})},r.onCancel=function(){r.context.toggleWin("shopinfo")},r.state={selectedRowKeys:[],type:!0,columnstype:!0},r.columns=[{title:"图片",dataIndex:"img_m",width:80,render:function(e,t,a){return N.a.createElement("a",{href:t.image},N.a.createElement("img",{src:e,style:{width:"60px"}}))}},{title:"商品信息",dataIndex:"sku",width:150,render:function(e,t,a){return N.a.createElement("div",null,N.a.createElement("p",null,"SKU:",t.sku),N.a.createElement("p",null,"COLOR:",t.color),N.a.createElement("p",null,"SIZE:",t.size))}},{title:"商品名称",dataIndex:"name",width:300,render:function(e,t){return N.a.createElement("a",{target:"_blank",href:t.product_url},e)}},{title:"重量（KG）",dataIndex:"weight",width:200},{title:"重量小计（KG）",dataIndex:"total_weight",width:200,render:function(e,t,a){return N.a.createElement("div",null,e)}},{title:"商品销售价格(USD)",dataIndex:"price",width:200,render:function(e,t,a){var n;return n=parseFloat(e).toFixed(2),N.a.createElement("span",null,n)}},{title:"商品展示价格(USD)",dataIndex:"show_price",width:200,render:function(e,t){var a;return a=parseFloat(e).toFixed(2),N.a.createElement("span",null,a)}},{title:"商品成交价格(USD)",dataIndex:"transactionprice",width:200,render:function(e,t,a){var n=e||t.price;return N.a.createElement("span",null,N.a.createElement(L.a,{disabled:"check"==r.context.operType||"paid"==r.context.order_status,value:n,onChange:function(e){return r.onBlurprice(e,t,a)}}))}},{title:"下单数",dataIndex:"quantity",width:200,render:function(e,t,a){return N.a.createElement("span",null,N.a.createElement(L.a,{disabled:"check"==r.context.operType||"paid"==r.context.order_status,defaultValue:e,onBlur:function(e){return r.onBlur(e,t,a)}}))}},{title:"合计",dataIndex:"color",width:200,render:function(e,t){var a=t.transactionprice?t.transactionprice*t.quantity:t.price*t.quantity,n=t.price*t.quantity;return a=100*Number(a)/100,n=100*Number(n)/100,N.a.createElement("span",null,N.a.createElement("p",null,"销售价：",n),N.a.createElement("p",null,"成交价：",a))}}],r._batProps=function(e,t){return{config:[{title:"移除",noCheck:!0,size:"small",ghost:!0,onClick:function(){return r.colse(e,t)}}],rowData:e,unicode:"id|id",batConfig:{listSelData:[],selectedRows:[]}}},r}return x()(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedRowKeys,n=t.columnstype,r=this.context,i=r.shopdata,o=void 0===i?[]:i,s=r.order_status,c=r.operType,l=(this.props.rowData,{selectedRowKeys:a,onChange:this.onSelectChange});return n&&("check"==c||"unpaid"!=this.context.order_status&&"add"!=this.context.operType||(this.setState({columnstype:!1}),this.columns.push({title:"操作",dataIndex:"id",ColSpan:0,width:100,fixed:"right",render:function(t,a,n){return N.a.createElement("div",{className:"operatingButton",style:{display:"flex"}},N.a.createElement(be.a,e._batProps(a,n)))}}))),N.a.createElement("div",{className:"allmain"},"check"==c||"unpaid"!=s&&"add"!=c?"":N.a.createElement(Be,{selectedRowKeys:a}),N.a.createElement(p.a,{style:{marginTop:"20px"},rowSelection:l,pagination:!1,columns:this.columns,dataSource:o}))}}]),a}(R.Component);Le.defaultProps={},Le.contextType=I.a;var Ue=r.a.create()(Le),He=a(1509);function Je(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Je(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Je(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ze(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C()(e);if(t){var r=C()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return k()(this,a)}}var Qe=j.a.TabPane,Xe=function(e){D()(a,e);var t=Ze(a);function a(e,n){var r;v()(this,a),(r=t.call(this,e,n)).onChangePlat=function(e){var t=Array.isArray(e)?e.join(","):e;Object(J.b)(H.a.getAllStoreList,{platform:t}).then((function(e){r.setState({storeList:e.resultData.data.list})}))},r.toggadder=function(e){r.setState({information:e})},r.toggshop=function(e){var t=r.state.shopdata;0!=e.length&&(e.map((function(e){e.transactionprice=e.price})),t.push.apply(t,y()(e)),r.number(t),r.setState({shopdata:t}))},r.shopedit=function(e){r.setState({shopdata:e}),r.number(e)},r.number=function(e){var t=r.state.initData;t.total_number="",t.total_weight="",t.subtotal_price="",e.map((function(e){t.total_number=Number(t.total_number||0)+Number(e.quantity),t.total_weight=Number(t.total_weight||0)+Number(e.total_weight),t.subtotal_price=Number(t.subtotal_price||0)+Number(e.transactionprice)})),t.total_price=Number(t.subtotal_price||0)-Number(t.coupon_history||0)-Number(t.activity_history||0)+Number(t.payment_fee||0)+Number(t.shipping_fee||0)+Number(t.total_discount||0),t.total_weight=Math.round(100*t.total_weight)/100,t.subtotal_price=Math.round(100*t.subtotal_price)/100,t.total_price=Math.round(100*t.total_price)/100,r.setState({initData:t})},r.togginitData=function(e,t){var a=r.state.initData;if(a[t]=e,a.total_price=Number(a.subtotal_price||0)-Number(a.coupon_history||0)-Number(a.activity_history||0)+Number(a.payment_fee||0)+Number(a.shipping_fee||0)+Number(a.total_discount||0),Number(a.total_price)<0)return g.a.error("优惠金额不能超过支付金额"),!1;r.setState({initData:a})},r.edit_shop=function(e){if("completed"==r.state.order_status)return g.a.error("完成订单无法发货"),!1;r.toggleWin("shipments",{shipmentsedit:e})},r.toggleWin=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"visible",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.state.otherConfig,i=void 0===n?{}:n;i=Ge(Ge(Ge({},i),a),{},h()({},t,!r.state[t])),r.setState((e={},h()(e,t,!r.state[t]),h()(e,"otherConfig",i),e))},r.closePage=function(){r.props.goBack()},r.shopclose=function(){r.props.goBack()},r.paydata=function(e){r.setState({paydata:e})},r.handleSubmit=function(){var e=r.state,t=e.information,a=e.shopdata,n=e.paydata;r.props.form.validateFields((function(e,i){if(!e){if(0==a.length)return g.a.error("请选择商品"),!1;if(!t.email)return g.a.error("请填写收货地址"),!1;var o=i;for(var s in i)i[s]&&(o[s]=i[s]);if(o.products=[],a.map((function(e){o.products.push({id:e.id?e.id:0,product_id:e.product_id,option_value_name:e.size,quantity:e.quantity,price:e.transactionprice?e.transactionprice:e.price})})),n){for(var c in n)n[c]&&(o[c]=n[c]);o.order_status="paid"}o.customer_id=t.id||t.customer_id,o.email=t.email,o.shipment_firstname=t.addresses.firstname,o.shipment_lastname=t.addresses.lastname,o.shipment_mobile=t.addresses.mobile,o.shipment_country_id=t.addresses.country_id,o.shipment_zone_id=t.addresses.zone_id,o.shipment_address_1=t.addresses.address_1,o.shipment_city=t.addresses.city,o.shipment_postcode=t.addresses.postcode,o.created_at=ce()(o.created_at).format("YYYY-MM-DD HH:mm:ss"),o.products=JSON.stringify(o.products),o.payment_name=o.shipment_firstname+o.shipment_lastname,!o.payment_time&&o.payment_code&&(o.payment_time=ce()().format("YYYY-MM-DD HH:mm:ss")),0!=r.id&&(o.order_id=r.id),Object(J.b)(H.a.save_order,o).then((function(e){e&&(200==e.resultId?(g.a.success(e.resultMsg),r.props.goBack()):g.a.error(e.resultMsg))}))}}))},r._batProps=function(e){return{config:[{title:"保存",noCheck:!0,ghost:!0,visible:"check"!=r.operType,onClick:function(){r.handleSubmit()}},{title:"更多",noCheck:!0,ghost:!0,visible:"check"==r.operType,children:[{title:"星标订单",visible:"unpaid"==e.order_status||"paid"==e.order_status,onAuth:"add",method:H.a.add_star_order},{title:"取消订单",visible:"unpaid"==e.order_status||"paid"==e.order_status,onAuth:"add",method:H.a.order_cancle},{title:"完成订单",visible:"completed"==e.order_status,onAuth:"add",method:H.a.finish_order},{title:"激活订单",visible:"canceled"==e.order_status,onAuth:"add",method:H.a.activation_order},{title:"催款通知",visible:"unpaid"==e.order_status,onAuth:"add",method:H.a.send_payment_notice},{title:"收款通知",visible:"paid"==e.order_status,onAuth:"add",method:H.a.send_confirm_payment},{title:"发货通知",visible:"shipped"==e.order_status,onAuth:"add",method:H.a.send_deliver_goods_notice}]},{title:"关闭",noCheck:!0,ghost:!0,onClick:function(){r.shopclose()}}],unicode:"order_id|id",batConfig:{listSelData:[],selectedRows:[]},rowData:e}},r.state={visible:!1,loading:!0,addvisible:!1,shopinfo:!1,addshop:!1,paylist:[],information:{},shopdata:[],initData:{},paydata:""};var i=e.params,o=i.type,s=i.id;return r.operType=o,r.id="0"==s?parseInt(s):s,r.batProps=function(e){return{config:[{title:"编辑",noCheck:!0,ghost:!0,onClick:function(){r.edit_shop(e)}}],unicode:"order_id|id",batConfig:{listSelData:[],selectedRows:[]},rowData:e}},r.columns2=[{title:"交易ID",dataIndex:"payment_code",width:200},{title:"交易金额",dataIndex:"total_price",width:200},{title:"币种",dataIndex:"code",width:200},{title:"交易时间",dataIndex:"payment_time",width:200},{title:"交易方式",dataIndex:"payment_method",width:200},{title:"手动标记付款",dataIndex:"payment_status",width:200,render:function(e,t){var a="manual_paid"==e?"是":"否";return N.a.createElement("div",null,a)}},{title:"交易备注",dataIndex:"receipt_remarks",width:200}],r.columns3=[{title:"物流单号",dataIndex:"shipment_code",width:200},{title:"物流方式",dataIndex:"shipment_method",width:200},{title:"发货时间",dataIndex:"sent_at",width:200},{title:"操作",dataIndex:"id",width:200,render:function(e,t){return N.a.createElement(be.a,r.batProps(t))}}],r.columns4=[{title:"SKU",dataIndex:"zsku",width:200},{title:"下单数量",dataIndex:"quantity",width:200},{title:"本次发货数量",dataIndex:"quantity_shipped",width:200},{title:"剩余未发货数量",dataIndex:"id",width:200,render:function(e,t){var a=Number(t.quantity)-Number(t.quantity_shipped);return N.a.createElement("div",null,a)}}],r}return x()(a,[{key:"componentDidMount",value:function(){var e=this;this.id?(Object(J.a)(H.a.get_order,{order_id:this.id}).then((function(t){if(t){var a=t.resultData,n={};n.id=a.id,n.order_status=a.order_status,n.payment_method=a.payment_method,n.created_at=a.created_at,n.shipment_method=a.shipment_method,n.manager_id=a.manager_id,n.note=a.note,n.memo=a.memo,n.total_number=a.total_number||0,n.total_weight=a.total_weight||0,n.subtotal_price=a.subtotal_price||0,n.total_discount=a.total_discount||0,n.coupon_history=a.coupon_history?a.coupon_history.amount:0,n.activity_history=a.activity_history?a.activity_history.amount:0,n.shipping_fee=a.shipping_fee||0,n.payment_fee=a.payment_fee||0,n.total_price=a.total_price||0,n.invoice_no=a.invoice_no||"",e.toggshop(a.products);var r={id:a.customer_id,firstname:"",lastname:"",email:a.email,avatar:"",addresses:[{customer_id:a.id,firstname:a.shipment_firstname,lastname:a.shipment_lastname,mobile:a.shipment_mobile,address_1:a.payment_address_1,city:a.shipment_city,postcode:a.shipment_postcode,country_id:a.shipment_country_id,zone_id:a.shipment_zone_id}]};e.setState({loading:!1,information:r,initData:n,order_status:a.order_status,table2:[{payment_code:a.payment_code,total_price:a.total_price,code:"USD",payment_time:a.payment_time,payment_method:a.payment_method,payment_status:a.payment_status,receipt_remarks:a.receipt_remarks}]})}})),this.get_marked_deliver_goods_list()):this.setState({loading:!1}),Object(J.a)(H.a.get_pay_method,{}).then((function(t){if(t){t.data;e.setState({paylist:t.resultData})}})),Object(J.b)(H.a.get_countrys_list,{}).then((function(t){t&&e.setState({storagecountry:t.resultData?t.resultData:[]})})),Object(J.b)(H.a.get_all_geo_zone_name,{}).then((function(t){t&&e.setState({get_geo_zones_pager:t.resultData?t.resultData:[]})})),Object(J.b)(H.a.get_manager_list,{}).then((function(t){t&&e.setState({get_manager_list:t.resultData?t.resultData:[]})}))}},{key:"get_marked_deliver_goods_list",value:function(){var e=this;Object(J.b)(H.a.get_marked_deliver_goods_list,{order_id:this.id}).then((function(t){t&&e.setState({table3:t.resultData?t.resultData.order_shippings:[],table4:t.resultData?t.resultData.to_be_shipped:[]})}))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.initData,n=void 0===a?{}:a,i=e.paylist,s=e.addvisible,l=e.zoneArea,u=e.storagecountry,m=e.shopinfo,h=e.information,f=e.addshop,g=e.order_status,_=e.table4,y=e.table2,b=void 0===y?[]:y,v=e.table3,E=this.props,x=E.form,w=E.local,D=void 0===w?{}:w,S=Ge({toggleWin:this.toggleWin,operType:this.operType,initData:n,order_status:g,addvisible:s,batConfig:this.props.batConfig,shopinfo:m,get_manager_list:this.state.get_manager_list,loading:t,paylist:i,get_geo_zones_pager:this.state.get_geo_zones_pager,platData:D.platData,closePage:this.closePage,togginitData:this.togginitData,information:h,toggadder:this.toggadder,shopdata:this.state.shopdata,toggshop:this.toggshop,shopedit:this.shopedit,paydata:this.paydata,zoneArea:l,addshop:f,storagecountry:u},this.state.otherConfig);return N.a.createElement("div",{style:{marginTop:0,paddingBottom:80}},N.a.createElement(I.a.Provider,{value:S},N.a.createElement(r.a,{onFinish:this.shopclose,onSubmit:this.handleSubmit},N.a.createElement(fe,{form:x,onChangePlat:this.onChangePlat}),N.a.createElement("div",{className:"tabSwitching"},N.a.createElement(j.a,{defaultActiveKey:"1"},N.a.createElement(Qe,{key:"1",tab:N.a.createElement("span",null,N.a.createElement("i",{style:{marginRight:"3px"},className:"iconfont order-ico-dingdanhuoqu"}),"商品信息")},N.a.createElement(Ue,null)),"check"==this.operType?N.a.createElement(Qe,{key:"2",tab:N.a.createElement("span",null,N.a.createElement("i",{style:{marginRight:"3px"},className:"iconfont order-ico-shouru"}),"支付信息")},N.a.createElement("div",{className:"allmain"},N.a.createElement(p.a,{columns:this.columns2,dataSource:b,pagination:!1}))):"","check"==this.operType?N.a.createElement(Qe,{key:"3",tab:N.a.createElement("span",null,N.a.createElement("i",{style:{marginRight:"3px"},className:"iconfont order-ico-xiugaiwuliu"}),"物流信息")},N.a.createElement(c.a,{span:24,className:"allmain"},N.a.createElement(d.a,{span:12,style:{padding:"0 20px"}},N.a.createElement(p.a,{pagination:!1,columns:this.columns3,dataSource:v})),N.a.createElement(d.a,{span:12,style:{padding:"0 20px"}},N.a.createElement(p.a,{pagination:!1,columns:this.columns4,dataSource:_})))):"")),N.a.createElement("div",{className:"shop-footer-btn"},N.a.createElement("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"flex-end"}},N.a.createElement(be.a,o()({style:{display:"flex",justifyContent:"flex-end"}},this._batProps(n)))))),this.state.shipments&&N.a.createElement(He.a,{id:this.id,get_marked_deliver_goods_list:this.get_marked_deliver_goods_list})))}}]),a}(R.Component);t.default=r.a.create()(Xe)}}]);