// 各个路由板块------B-----
// 申请页面哎
import Login from "@/pages/Main/Login";
// 未申请前的页面
import BeforeJoin from "@/pages/Main/BeforeJoin";
// 申请后的页面
import AfterJoin from "@/pages/Main/AfterJoin";
// apply板块
import ApplyJoin from "@/pages/BusinessCenter/ApplyJoin/ApplyJoin";
import ApplyInfo from "@/pages/BusinessCenter/ApplyJoin/ApplyInfo";
import BaseInfo from "@/pages/BusinessCenter/ApplyJoin/BaseInfo";
import ApplySuccess from "@/pages/BusinessCenter/ApplyJoin/ApplySuccess";
import DetailInfo from "@/pages/BusinessCenter/ApplyJoin/DetailInfo";
// 登陆后的首页
import JoinedIndex from "@/pages/BusinessCenter/Index/Index";
import OrderDetail1 from "@/pages/BusinessCenter/Index/OrderDetail";
// notice通知
import Notice from "@/pages/BusinessCenter/Notice/Notice";
import NoticeDetail from "@/pages/BusinessCenter/Notice/NoticeDetail";

// orderMangement 订单管理模块
import OrderManagement from "@/pages/BusinessCenter/OrderManagement/OrderManagement";
import OrderDetail2 from "@/pages/BusinessCenter/OrderManagement/OrderDetail";
// AccountCenter账户中心
import AccountCenter from "@/pages/BusinessCenter/Account/AccountCenter";
import Bill from "@/pages/BusinessCenter/Account/Bill";
import Recharge from "@/pages/BusinessCenter/Account/Recharge";
import Account from "@/pages/BusinessCenter/Account/Account";

// setting板块
import Undertake from "@/pages/BusinessCenter/Setting/Undertake"; // 承接管理
import AlterUndertake from "@/pages/BusinessCenter/Setting/AlterUndertake"; // 修改承接管理
import AccountData from "@/pages/BusinessCenter/Setting/AccountData";  // 账户资料
import SafeCenter from "@/pages/BusinessCenter/Setting/Safe/SafeCenter";  // 绑定微信
import BindingWx from "@/pages/BusinessCenter/Setting/Safe/BindingWx";  // 绑定微信
import ScanCode from "@/pages/BusinessCenter/Setting/Safe/ScanCode"; // 扫描二维码
import ModifyPassword from "@/pages/BusinessCenter/Setting/Safe/ModifyPassword";  // 修改密码

// 意见反馈
import Options from "@/pages/BusinessCenter/Options/Options" ; // 修改密码

export default {
  Login,
  BeforeJoin,
  AfterJoin,
  ApplyJoin,
  ApplyInfo,
  BaseInfo,
  ApplySuccess,
  DetailInfo,
  JoinedIndex,
  OrderDetail1,
  Notice,
  NoticeDetail,
  OrderManagement,
  OrderDetail2,
  AccountCenter,
  Bill,
  Recharge,
  Account,
  Undertake,
  AlterUndertake,
  AccountData,
  SafeCenter,
  BindingWx,
  ScanCode,
  ModifyPassword,
  Options
}
