(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1715:function(e,t,a){},1774:function(e,t,a){"use strict";a.r(t);a(191);var n=a(114),r=a.n(n),l=(a(82),a(41)),i=a.n(l),o=(a(73),a(30)),c=a.n(o),u=(a(732),a(375)),s=a.n(u),p=(a(124),a(64)),m=a.n(p),d=(a(81),a(18)),f=a.n(d),h=a(28),v=a.n(h),y=(a(1495),a(1496)),g=a.n(y),E=(a(88),a(39)),w=a.n(E),C=a(25),x=a.n(C),b=a(20),S=a.n(b),k=a(26),N=a.n(k),R=a(22),V=a.n(R),D=a(16),I=a.n(D),P=(a(121),a(45)),L=a.n(P),_=(a(89),a(40)),B=a.n(_),O=a(1),T=a.n(O),j=a(59),q=(a(1715),a(123),a(51)),F=a.n(q),A=(a(734),a(377)),J=a.n(A),M=a(74),z=a.n(M),G=a(376),K=a.n(G),U=a(218),H=a(24);function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=I()(e);if(t){var r=I()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return V()(this,a)}}var W=function(e){N()(a,e);var t=Q(a);function a(e,n){var r;return x()(this,a),(r=t.call(this,e,n)).componentDidMount=function(){r.props.image&&r.setState({fileList:[{uid:"-1",name:"image.png",status:"done",url:r.props.image}]})},r.handlePreview=function(){var e=K()(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,getBase64(t.originFileObj);case 3:t.preview=e.sent;case 4:r.setState({previewImage:t.url||t.preview,previewVisible:!0});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.fileList;r.setState({fileList:t});var a="";t.map((function(e){a=e.response.resultData})),0==t.length&&(a=""),r.props.uploadchange(a,r.props.index)},r.handleCancel=function(){r.setState({previewVisible:!r.state.previewVisible})},r.state={fileList:[]},r}return S()(a,[{key:"render",value:function(){Object(H.j)().accessToken;var e=this.state,t=e.previewImage,a=void 0===t?"":t,n=e.fileList,r=e.previewVisible,l={Authorization:"Bearer ".concat(localStorage.getItem("ACCESS_TOKEN"))},i=T.a.createElement("div",null,T.a.createElement(f.a,{type:"plus"}),T.a.createElement("div",{className:"ant-upload-text"},"Upload"));return T.a.createElement("div",null,T.a.createElement(J.a,{action:"https://api.ohhmail.com/api/admin/template_image_upload",listType:"picture-card",headers:l,fileList:n,onPreview:this.handlePreview,onChange:this.handleChange},n.length>=1?null:i),T.a.createElement(F.a,{visible:r,footer:null,onCancel:this.handleCancel},T.a.createElement("img",{alt:"example",style:{width:"100%"},src:a})))}}]),a}(O.Component);W.defaultProps={},W.contextType=U.a;var X=W,Y=a(731);function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=I()(e);if(t){var r=I()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return V()(this,a)}}var $=B.a.Option,ee=L.a.Item,te=function(e){N()(a,e);var t=Z(a);function a(e,n){var r;return x()(this,a),(r=t.call(this,e,n)).componentDidMount=function(){Y.a.order.get_setting_list({type:2}).then((function(e){e&&r.setState({setting:e.resultData.setting})}))},r.save=function(){r.props.form.validateFields((function(e,t){var a=r.state.lotterydata,n=0;a.map((function(e){n+=Number(e.mony)})),100==n||w.a.error("请设置中奖率等于100")}))},r.handleChange=function(e,t){var a=r.state.lotterydata;a[t].coupons=e,r.setState({lotterydata:a})},r.InputChange=function(e,t){var a=r.state.lotterydata;a[t].mony=e.target.value,r.setState({lotterydata:a})},r.delete=function(e){var t=r.state.lotterydata;r.setState({lotterydata:t.splice(1,e)})},r.addlottery=function(){var e=r.state.lotterydata;e.length>19?w.a.error("最多添加20条数据"):(e.push({mony:"",coupons:""}),r.setState({lotterydata:e}))},r.onChangeRadio=function(e){r.setState({ordertype:e.target.value})},r.uploadchange=function(e,t){var a=r.state.lotterydata;a[t].mony=e,r.setState({lotterydata:a})},r.state={loading:!1,lotterydata:[{mony:"1",coupons:"22"},{mony:"1",coupons:"22"}]},r}return S()(a,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state,n=a.setting,l=void 0===n?{}:n,o=a.loading,u=a.lotterydata,p=void 0===u?[]:u,d=a.ordertype,h=void 0===d?1:d;return T.a.createElement(r.a,{spinning:o},T.a.createElement("div",{className:"header-tool"},T.a.createElement("p",null,"实时订单")),T.a.createElement("div",{className:"Basic-main"},o?"":T.a.createElement(L.a,{className:"Basic-form"},T.a.createElement("div",{className:"Parameter-item",id:"link1"},T.a.createElement("p",null,"开关控制"),T.a.createElement("div",{style:{width:"15%"}},T.a.createElement(ee,v()({label:"前台浮窗开关"},j.e),t("open",{initialValue:l.open||""})(T.a.createElement(g.a,{defaultChecked:1==l.open}))))),T.a.createElement("div",{className:"Parameter-item",id:"link2"},T.a.createElement("p",null,"订单数据",T.a.createElement(m.a,{placement:"topLeft",title:"最多可设置5个奖项，所有奖项的中奖概率值之和需为100%"},T.a.createElement(f.a,{className:"parameter-question",type:"question-circle"}))),T.a.createElement("div",{style:{width:"50%"}},T.a.createElement(ee,v()({label:"数据来源"},j.b),t("order",{initialValue:1})(T.a.createElement(s.a.Group,{onChange:this.onChangeRadio},T.a.createElement(s.a,{value:1},"最新订单"),T.a.createElement(s.a,{value:2},"指定订单"))))),T.a.createElement("div",{style:{width:"50%"}},T.a.createElement(ee,v()({label:"订单选择"},j.b),1==h?T.a.createElement("div",null,t("open",{initialValue:l.open||""})(T.a.createElement(B.a,{style:{width:"150px"}},T.a.createElement($,{value:"11"},"11"),T.a.createElement($,{value:"22"},"22")))):T.a.createElement("div",null,p.map((function(t,a){return T.a.createElement("div",{className:"lottery-item"},T.a.createElement(c.a,{style:{width:"150px",margin:"0 15px"},defaultValue:t.mony,onChange:function(t){return e.InputChange(t,a)}}),T.a.createElement(c.a,{style:{width:"150px",margin:"0 15px"},defaultValue:t.mony,onChange:function(t){return e.InputChange(t,a)}}),T.a.createElement(c.a,{style:{width:"150px",margin:"0 15px"},defaultValue:t.mony,onChange:function(t){return e.InputChange(t,a)}}),T.a.createElement(c.a,{style:{width:"150px",margin:"0 15px"},defaultValue:t.mony,onChange:function(t){return e.InputChange(t,a)}}),T.a.createElement(X,{uploadchange:e.uploadchange,index:a,image:t.mony}),T.a.createElement(f.a,{onClick:function(){return e.delete(a)},type:"delete"}))})),T.a.createElement("a",{className:"lottery-add",onClick:function(){return e.addlottery()}},T.a.createElement(f.a,{type:"plus-square"})))))),T.a.createElement("div",{className:"shop-footer-btn"},T.a.createElement(i.a,{type:"primary",onClick:function(){return e.save()}},"保存")))))}}]),a}(T.a.Component);t.default=L.a.create()(te)}}]);