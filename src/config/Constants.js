/**
 * Created by zhangweiwei on 16/9/7.
 */

const BASE_URL = 'http://m.uzhuang.com/index.php?m=wenda&';
// const BASE_URL = 'http://127.0.0.1:3000/';


//用于管理项目请求地址
export const Method = {
    Login: BASE_URL + "login",
  get_hot_words: BASE_URL + "f=question_list&v=get_hot_words",



};

//用于管理router中页面名称
export const PageName = {
  index: 'index',
  template: 'template',
  main: 'main',
  qaIndex: 'qaindex',
  qaknowledge: 'qaknowledge',
  qaList: 'qalist',
  qaLogin: 'qalogin',
  qaWallet: 'qaWallet',
  qaWalletDetail: 'qawalletdetail',
  qaWithdraw: 'qaWithdraw',
  qaUser: 'qauser',
  qaDetail: 'qadetail',
  qaComment: 'qacomment',
  qaSearch: 'qasearch',
  qaAsk: 'qaask',
  qaResponse: 'qaresponse',
  qaNotice: 'qanotice'
};

//用于管理router中页面名称
export const LocalStorage = {
  test: 'test',
  uid: 'uid',
  user: 'user',
  searchHistory: 'searchHistory',
};


//用于管理EventBus中的事件key
export const EventBus = {
  showToast: 'showToast',
  login: 'login',
  toggleDrawer: 'toggleDrawer',
  toggleMusic: 'toggleMusic',
  userLogin: 'userLogin',
  setTitle: 'setTitle',
  setTitleLeftIcon: 'setTitleLeftIcon',
  update_main_tab_index: 'update_main_tab_index'
};
