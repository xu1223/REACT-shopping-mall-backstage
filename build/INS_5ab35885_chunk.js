(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1717:function(e,t,n){},1729:function(e,t,n){"use strict";n.r(t);n(191);var a=n(114),r=n.n(a),l=(n(82),n(41)),i=n.n(l),c=(n(73),n(30)),o=n.n(c),s=(n(88),n(39),n(25)),u=n.n(s),m=n(20),p=n.n(m),d=n(26),f=n.n(d),E=n(22),v=n.n(E),h=n(16),g=n.n(h),y=(n(121),n(45)),w=n.n(y),N=n(1),b=n.n(N),k=(n(1717),n(731));function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g()(e);if(t){var r=g()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v()(this,n)}}var R=w.a.Item,S=function(e){f()(n,e);var t=D(n);function n(e,a){var r;return u()(this,n),(r=t.call(this,e,a)).componentDidMount=function(){k.a.order.get_setting_list({type:2}).then((function(e){e&&r.setState({setting:e.resultData.setting})}))},r.save=function(){r.props.form.validateFields((function(e,t){}))},r.state={loading:!1},r}return p()(n,[{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,n=this.state,a=n.loading,l=n.setting,c=void 0===l?{}:l;return b.a.createElement(r.a,{spinning:a},b.a.createElement("div",{className:"header-tool"},b.a.createElement("p",null,"营销抽奖")),b.a.createElement("div",{className:"Basic-main"},b.a.createElement(w.a,null,b.a.createElement("div",{className:"Parameter-item",id:"link1"},b.a.createElement("p",null,"INS账号信息"),b.a.createElement("div",null,b.a.createElement("div",{style:{width:"50%"}},b.a.createElement(R,{label:"INS账号"},t("open",{initialValue:c.open||"",rules:[{required:!0,message:"请输入INS账号 "}]})(b.a.createElement(o.a,null))),b.a.createElement(R,{label:"账号地址"},t("open",{initialValue:c.open||""})(b.a.createElement(o.a,null)))))),b.a.createElement("div",{className:"Parameter-item",id:"link1"},b.a.createElement("p",null,"授权配置"),b.a.createElement("div",{style:{width:"50%"}},b.a.createElement(R,{label:"app-id"},t("open",{initialValue:c.open||"",rules:[{required:!0,message:"请输入app-id "}]})(b.a.createElement(o.a,null))),b.a.createElement(R,{label:"app-secret"},t("open",{initialValue:c.open||"",rules:[{required:!0,message:"请输入app-secret "}]})(b.a.createElement(o.a,null))))),b.a.createElement("div",{className:"shop-footer-btn"},b.a.createElement(i.a,{type:"primary",onClick:function(){return e.save()}},"保存")))))}}]),n}(b.a.Component);t.default=w.a.create()(S)}}]);