# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## src目录结构
    assets 静态文件
        img
        css
    components  vue组件
    pages 项目页面
        Main 主站
             Login  申请
        BusinessCenter
            ApplyJoin  申请入驻
                ApplyInfo 申请提示
                BaseInfo 基础信息
                Detailnfo 资质信息
                ApplySuccess 申请成功
            Index  首页（已/待审核状态）
                OrderDetail 订单详情
            Notice 通知 
                NoticeDetail 通知详情
            OrderManagement  订单管理
                OrderDetail  订单详情
            AccountCenter   账户中心
                Account 账户
                Recharge 充值
                Bill  账单
            Setting  设置
                Undertake  承接管理
                AlterUndertake 修改承接信息
                AccountData 账户资料
                Safe 安全中心
                    BindingWx  绑定微信
                    ScanCode  扫描二维码
                    ModifyPassword  修改密码
            Opinions 意见

## vue自动讲px转rem
## 抽离的公共组件
*   头部 Header.vue  bc-header 
*   底部 footer.vue  bc-footer
*   左侧 LeftBar.vue left-bar
*   单选+下拉 MyCheckBox.vue   my-checkbox
*   信息盒子InfoBox.vue   info-box




