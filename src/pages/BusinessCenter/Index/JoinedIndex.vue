<template>
  <div>
    <!--顶部信息栏-->
    <div class="infos">
      <div class="left">
        <i class="iconfont icon-gonggao"></i>
        <p class="news"><b v-if="meassages.is_read == 0">NEW</b>{{meassages.title}}</p>
      </div>
      <div class="right">
        <span class="time">{{meassages.addtime | momentTime}}</span>
        <router-link class="click-more" :to="{name:'info'}">更多</router-link>
      </div>
    </div>
    <!-- 进度 信息展示-->
    <info-card :info_titile="info_titile"
               v-if="settled_progress == 1 || settled_progress == 2 || settled_progress == 4">
      <!--<i slot="icon" class="iconfont icon-shanchu"></i>-->
      <p class="wenzi" slot="info_text">
        您已提交申请修改账户资料，平台将在提交日期后的1-3个工作日内完成审核，请注意登陆后台查看审核结果，审核期间无法接收新订单。如想加快审核速度，请联系平台工作人员</p>
      <p class="wenzi" slot="apply_time">提交时间：<span>2017/12/18</span></p>
    </info-card>
    <!--可以设置的选项卡-->
    <div>
      <info-card info_titile="完善承接信息" v-if="isSet">
        <p class="wenzi" slot="info_text">未完善承接信息将无法接单，点击设置
          <router-link :to="{name:'alterundertake'}">承接信息</router-link>
        </p>
      </info-card>
      <info-card info_titile="充值提示" v-if="ifWalletEnough">

        <p class="wenzi" slot="info_text">账户余额不足，暂时无法接单，点击充值
          <router-link :to="{name:'account.recharge'}">账户余额</router-link>
        </p>
      </info-card>
      <info-card info_titile="绑定微信" v-if="isBindWechat">
        <p class="wenzi" slot="info_text">当前账户未绑定微信，优装美家无法在微信中向你推送新订单通知，点击
          <router-link :to="{name:'bindingwx'}">绑定微信</router-link>
        </p>
      </info-card>
    </div>
    <!--近期订单-->
    <div class="order-info-box">
      <!--头部信息-->
      <div class="order-top">
        <div class="order-count">
          <el-row>
            <el-col :span="12">
              <h5 class="order-h5">
                <i class="iconfont icon-jinqidingdan order-icon"></i>近期订单（<i>15</i>）
              </h5>
            </el-col>
            <el-col :span="12">
              <el-input
                placeholder="订单号（可申诉订单）"
                prefix-icon="el-icon-search"
                v-model="input">
              </el-input>
            </el-col>

          </el-row>
        </div>
      </div>
      <!--订单列表-->
      <el-table
        :data="orderList"
        border
        style="width: 100%"
        :show-header="false"
        :row-style="rowStyle()"

      >
        <el-table-column>
          <template slot-scope="scope">
            <p>户型：<span>{{scope.row.homestyle}}</span></p>
            <p>业主：<span>{{scope.row.title}}</span></p>
            <p>电话：<span>{{scope.row.telephone}}</span></p>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <p>{{scope.row.add_time}}</p>
            <p>订单号：<span>{{scope.row.orderno}}</span></p>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              @click="handleShensu(scope.row.id)"
              v-if="scope.row.status =='可申诉'">{{scope.row.status}}
            </el-button>
            <p v-if="scope.row.status == '可申诉'">72h后失效</p>
            <el-button>{{scope.row.status}}</el-button>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              @click="goDetailHandle(scope.row.id)">查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
    <!--无订单时显示-->
    <p class="no-order">暂无订单</p>
  </div>
</template>
<script>
  import * as components from '@/components/index.js'
  import {getIndexInfos, getOrderList} from '../../../api/api'
  import EventBus from '@/config/EventBus';

  export default {
    components: {
      "info-card": components.contents.InfoCard
    },
    name: '',
    data() {
      return {
        total: 0,
        currentPage: 5,
        small: '',
        input: '',
        orders: [{}, {}, {}],
        orderList: [],
        addTime: '',
        ifWalletEnough: false,
        isBindWechat: false,
        isSet: false,
        settled_progress: 5,
        meassages: {},
        info_titile: ''
      }
    },
    created() {
      this.init()
      // var date = new Date()
      // todo
      // console.log(moment().weekday(-7)); // last Monday
      // console.log(11); // last Monday
    },
    destory() {
      EventBus.$off('apeal')
    },
    methods: {
      handleShensu(val) {
        console.log(val);
        EventBus.$emit('apeal', val)
      },
      // 数据
      init() {
        let data = {
          isindex: 1,
          page: 1
        }
        this.getData(data)
        this.getInfo({uid: 1})
      },
      getInfo(params) {
        getIndexInfos(params).then((result) => {
          console.log(result)
          this.ifWalletEnough = result.balance == 1 ? true : false
          this.isBindWechat = result.isBindWechat == 2 ? true : false
          this.isSet = result.isSet == 1 ? true : false
          this.meassages = result.meassages
          this.settled_progress = result.settled_progress
          switch (Number(this.settled_progress)) {
            case 1:
              this.info_titile = '请补全信息'
              break;
            case 2:
              this.info_titile = '等待审核通过'
              break;
            case 3:
              this.info_titile = '审核通过'
              break;
            case 4:
              this.info_titile = '审核未通过'
              break;
            case 5:
              this.info_titile = '审核通过'
              break;
            default:
              break
          }
        })
      },
      getData(params) {
        getOrderList(params).then((res) => {
          console.log(res);
          this.orderList = res.data.data
          this.total = res.data.total
        })
      },
      // 样式
      rowStyle() {
        return {
          textAlign: 'center',
          // background:'red'
        }
      },
      // 交互
      goDetailHandle(id) {
        this.$router.push({name: 'index.detail', params: {id, canAppeal: true}})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

    }

  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/config";

  .el-pagination {
    padding: 10px 0;
    text-align: center;
  }

  .infos {
    height: 50px;
    background: #fff;
    margin-bottom: 20px;
    font-size: 0;
    .left {
      float: left;
    }
    .right {
      float: right;
      padding-right: 30px;
      line-height: 50px;
    }
    i {
      display: inline-block;
      width: 40px;
      line-height: 50px;
      text-align: center;
    }
    .news {
      display: inline-block;
      font-size: 16px;
      b {
        color: #ff0000;
        font-size: 20px;
        padding-right: 10px;
      }
    }
    .time {
      font-size: 16px;
      color: #5a5a5a;
    }
    .click-more {
      padding-left: 20px;
      font-size: 16px;
      color: $aColor;
    }
  }

  /* 信息卡中的p标签文字*/
  .wenzi {
    font-size: 16px;
    margin-top: 15px;
    span {
      color: #5a5a5a;
    }
    a {
      color: #0099ff;
      cursor: pointer
    }

  }

  .order-info-box {
    background: #fff;
    /*头部*/
    .order-top {
      height: 40px;
      padding: 10px 0;
      border-bottom: 1px solid $gray;
      .order-h5 {
        position: relative;
      }
      .order-icon::before {
        position: absolute;
        top: 0px;
        left: -25px;
        font-size: 20px;
        line-height: 40px;
        color: #1afa29;
      }
      .order-count {
        padding: 0 40px;
        line-height: 40px;
      }
    }
    /*订单详情*/
    .order-list {
      background: #fff;
      .order-detail {
        border-bottom: 1px solid #d6d6d6;
        padding: 10px 20px;
      }
    }

  }

  .no-order {
    margin-top: 30px;
    font-size: 18px;
    text-align: center;
  }

  /**/
  .index-page {
    margin-top: 30px;
    margin-left: 200px;
  }

</style>
