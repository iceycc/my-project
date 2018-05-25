/**
 *@author wangbingyang
 *@date 2018/03/03 13:20:25
 *@desc
 */
// 各个路由板块------B-----
// 申请页面哎
  let pages = {
  // 申请页面哎
  Login:resolve => require(['@/pages/Main/Login'], resolve),
  // 未申请前的页面
  BeforeJoin:resolve => require(['@/pages/Main/BeforeJoin'], resolve),
  // 申请后的页面
  AfterJoin:resolve => require(['@/pages/Main/AfterJoin'], resolve),
  // apply板块
  ApplyJoin:resolve => require(['@/pages/BusinessCenter/ApplyJoin/ApplyJoin'], resolve),
  ApplyInfo:resolve => require(['@/pages/BusinessCenter/ApplyJoin/ApplyInfo'], resolve),
  BaseInfo:resolve => require(['@/pages/BusinessCenter/ApplyJoin/BaseInfo'], resolve),
  ApplySuccess:resolve => require(['@/pages/BusinessCenter/ApplyJoin/ApplySuccess'], resolve),
  DetailInfo:resolve => require(['@/pages/BusinessCenter/ApplyJoin/DetailInfo'], resolve),
  // 登陆后的首页
  JoinedIndex:resolve => require(['@/pages/BusinessCenter/Index/Index'], resolve),
  OrderDetail1:resolve => require(['@/pages/BusinessCenter/Index/OrderDetail'], resolve),
  // notice通知
  Notice:resolve => require(['@/pages/BusinessCenter/Notice/Notice'], resolve),
  NoticeDetail:resolve => require(['@/pages/BusinessCenter/Notice/NoticeDetail'], resolve),
  // orderMangement 订单管理模块
  OrderManagement:resolve => require(['@/pages/BusinessCenter/OrderManagement/OrderManagement'], resolve),
  OrderDetail2:resolve => require(['@/pages/BusinessCenter/OrderManagement/OrderDetail'], resolve),
  // AccountCenter账户中心
  AccountCenter:resolve => require(['@/pages/BusinessCenter/Account/AccountCenter'], resolve),
  Bill:resolve => require(['@/pages/BusinessCenter/Account/Bill'], resolve),
  Recharge:resolve => require(['@/pages/BusinessCenter/Account/Recharge'], resolve),
  Account:resolve => require(['@/pages/BusinessCenter/Account/Account'], resolve),
  // setting板块
  Undertake:resolve => require(['@/pages/BusinessCenter/Setting/Undertake'], resolve),
  AlterUndertake:resolve => require(['@/pages/BusinessCenter/Setting/AlterUndertake'], resolve),
  AccountData:resolve => require(['@/pages/BusinessCenter/Setting/AccountData'], resolve),
  SafeCenter:resolve => require(['@/pages/BusinessCenter/Setting/Safe/SafeCenter'], resolve),
  BindingWx:resolve => require(['@/pages/BusinessCenter/Setting/Safe/BindingWx'], resolve),
  ScanCode:resolve => require(['@/pages/BusinessCenter/Setting/Safe/ScanCode'], resolve),
  ModifyPassword:resolve => require(['@/pages/BusinessCenter/Setting/Safe/ModifyPassword'], resolve),
  // 意见反馈
  Options:resolve => require(['@/pages/BusinessCenter/Options/Options'], resolve)
}

export default pages
