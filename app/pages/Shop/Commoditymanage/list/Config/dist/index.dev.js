"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsConfig = exports["default"] = void 0;
var _default = {
  toolConfig: {
    "list": {
      action: "get_products_pager",
      params: {}
    },
    "categorys": {
      action: 'get_categorys_pager',
      params: {}
    }
  }
};
exports["default"] = _default;
var TabsConfig = [{
  id: "1",
  name: "全部商品",
  status: "",
  key: '1',
  icon: 'exclamation-circle'
}, {
  id: "0",
  name: "已下架",
  status: "0",
  key: '0',
  icon: 'close-circle'
}, {
  id: "1",
  name: "已上架",
  status: "1",
  key: '1',
  icon: 'check-circle'
}];
exports.TabsConfig = TabsConfig;