<template>
  <div class="bf">
    <el-steps :active="1" simple>
      <el-step title="填写基本信息" icon="el-icon-edit"></el-step>
      <el-step title="填写资质信息" icon="el-icon-upload"></el-step>
      <el-step title="等待审核" icon="el-icon-upload"></el-step>
    </el-steps>
    <div class="ai-main">
      <!--form信息盒子-->

      <div class="ai-box">
        <!--公司名称-->
        <div class="small-box">
        <el-row>
          <el-col :span="6"><h3 class="title">公司名称</h3></el-col>
          <el-col :span="18">
            <el-input v-model="input" placeholder="请与执照一致"></el-input>
          </el-col>
        </el-row>
        </div>
        <!--店铺负责人-->
        <div class="small-box">
          <el-row>
            <el-col :span="6"><h3 class="title">商铺负责人</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="业务对接人姓名"></el-input>
              <el-input v-model="input" placeholder="手机号"></el-input>
            </el-col>
          </el-row>
        </div>
        <!--公司开户银行-->
        <div class="small-box">
          <!--开户银行-->
          <el-row>
            <el-col :span="6"><h3 class="title">公司开户银行</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="请于执照一致"></el-input>
            </el-col>
          </el-row>
          <!--开户账号-->
          <el-row>
            <el-col :span="6"><h3 class="title">开户账号</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="输入卡号"></el-input>
            </el-col>
          </el-row>
          <!--开户地址-->
          <el-row>
            <el-col :span="6"><h3 class="title">开户地址</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="请于执照一致"></el-input>
            </el-col>
          </el-row>
        </div>
        <!--公司地址-->
        <div class="small-box">
          <el-row>
            <el-col :span="6"><h3 class="title">公司地址</h3></el-col>
            <el-col :span="18">
                <el-cascader
                  placeholder="请选择省市区"
                  :options="options"
                  filterable
                  change-on-select
                ></el-cascader>
              <el-input v-model="input" placeholder="详细地址，请与执照地址一致"></el-input>
              <div class="map-box" id="map-container">
                <map-box></map-box>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="small-box">
          <h4 class="info-title">以下为选填</h4>
          <el-row>
            <el-col :span="6"><h3 class="title">施工等级资质</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="请于执照一致"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6"><h3 class="title">公司座机</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="区号+座机号"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6"><h3 class="title">公司邮箱</h3></el-col>
            <el-col :span="18">
              <el-input v-model="input" placeholder="公司指定联系邮箱"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="ai-btn">
      <el-button @click="goApplyInfo">上一步</el-button>
      <el-button @click="goDetailInfo" size="medium" type="primary">下一步</el-button>
    </div>
  </div>
</template>
<script>
  import {commons} from '@/components/index.js'
  export default {
    // name: 'base-info'1,
    data() {
      return {
        input:'',
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      };
    },
    created(){

    },
    components:{
      'map-box':commons.MapBox
    },
    methods: {
      goApplyInfo(){
        this.$router.push({name:'apply.info'})
      },
      goDetailInfo(){
        this.$router.push({name:'apply.detailinfo'})
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../assets/style/config";
  // 标题
  .el-input,.el-cascader{
    margin-bottom: 20px;
  }
  .el-steps{
    background: #eeeeee;
    padding: 10px 4%;
  }
  .info-title {
    width: 25%;
    text-align: center;
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .ai-main {
    // height: 100px;
    margin-top: 20px;
    background: #fff;
    .small-box{
      @extend .box-hover-shadow;
      border-bottom: 1px solid #ddd;
      border-top: 1px solid #ddd;
    }
    .title {
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
    input {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #999;
      border-radius: 6px;
      height: 30px;
      padding-left: 10px;
      // line-height: 24px;
    }
    .left-empty {
    }
    .right-box {
      input {
        width: 100%;
      }
    }
    .map-box {
      margin-top: 15px;
      width: 100%;
      height: 400px;
      border: 1px solid #999;
      border-radius: 6px;
    }

  }

  .ai-btn {
    margin-top: 20px;
    padding-left: 25% !important;
    button {
      width: 150px;
    }
  }
</style>
