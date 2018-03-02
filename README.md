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
            Account   账户中心
                AccountCenter 账户
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
## 从less改到scss  安装
## css建议书写顺序
```
  /* 位置属性 */
  position, top, right, z-index, display, float
  
  /* 大小 */
  width, height, padding, margin
  
  /* 文字系列 */
  font, line-height,  color, text-align
  
  /* 背景 */
  background, border
  
  /* 其他 */
  animation, transition
```
### scss 目录构建
·https://www.w3cplus.com/preprocessor/architecture-sass-project.html·
## 抽离的公共组件
*   头部 Header.vue  bc-header 
*   底部 footer.vue  bc-footer
*   左侧 LeftBar.vue left-bar
*   单选+下拉 MyCheckBox.vue   my-checkbox
*   信息盒子InfoBox.vue   info-box

## 计划
 * 路由配置
 * 组件抽离
 * 静态页面完成
 * request函数封装
 * 前端校验
 * 全局守卫
 * 尝试重构

## phpstorm
### php配置
* 内置svn和git 超级强大  ctrl+k调出git提交窗口 
###快捷键
1. 项目名右键选择"Local History | Show History"可查看本地修改记录
2. Ctrl + E 可查看最近打开文件或项目
3. 打开File | Setting | Editor，选择Appearance下面的Show Method Separators。它会将你的代码按方法，用灰色线框进行智能分割。你还可以使用：alt+↑或↓，在方法之间进行跳转
4. Ctrl + Shift + V，可选择要粘贴的最近内容
5. Ctrl + D，复制粘贴选中的文本
6. Ctrl + Y，删除当前行或选中行
7. Ctrl + Alt + 左右方向键，定位到上一次编辑的位置
8. Alt + 上下方向键，跳转到上/下函数
9. Alt + 左右方向键，导航标签切换
10. Ctrl + N，根据类名称查找
11. Ctrl + Shift + N，根据文件名查找
12. Ctrl + Shift + Alt + N，根据函数名查找
13. Ctrl + Shift + F，Find in Path
14. Ctrl + Shift + I，查看变量初始化的值
15. Ctrl + F12，快速查看当前文件的所有方法
16. Ctrl + /，单行注释
17. Ctrl + Shift + /，多行注释
18. 修改默认打开的文件模版："file" ---> "setting" ---> "file and code template"
19. /** + Enter，自动生成注释
20. Ctrl + Alt + L，格式化代码

### 前端校验 
* 参考 VeeValidate 
* http://blog.csdn.net/docallen/article/details/73650179


