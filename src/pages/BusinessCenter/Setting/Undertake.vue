<template>
  <div>
    <h3 class="small-title">承接管理</h3>
    <!--有信息时展示-->
    <div class="ut-main" v-if="isShow">
      <!--承接方式-->
      <div class="ut-box">
        <div class="box-top">
          <i class="iconfont icon-chengjiefangshi ut-xgxx"></i>
          <span class="biaoti">承接方式</span>
          <el-button class="ut-btn r" type="primary" @click="goAlterInfo">修改信息</el-button>
        </div>
        <div class="cjfs-selected">
          <span v-for="item,index in undertakeInfo.undertake_way" :key="index">{{item | undertake_way_filter}}</span>
        </div>
      </div>
      <!--承接类型-->
      <div class="ut-box">
        <div class="box-top">
          <i class="iconfont icon-chengjieleixing ut-cjlx"></i>
          <span class="biaoti">承接类型</span>
        </div>
        <div class="ut-content">
          <p>期房：<span>{{undertakeInfo.period_home ==1?'承接':'不承接'}}</span> <span class="qf-content">{{undertakeInfo.period_condition | period_conditionFilter}}</span></p>
          <p>局部改造：<span>{{undertakeInfo.local_remould ==1?'承接':'不承接'}}</span></p>
          <p>室外工程：<span>{{undertakeInfo.outdoor_project ==1?'承接':'不承接'}}</span></p>
        </div>
      </div>
      <!--区域、房屋、面积与金额-->
      <div class="ut-box">
        <div class="box-top">
          <i class="iconfont icon-quyufangwuleixingmianjiyujine ut-qymj"></i>
          <span class="biaoti">区域、房屋类型、面积与金额</span>
        </div>
        <!--区域面积table-->
        <div class="qy-table">
          <el-table
            :data="undertakeInfo.tableData"
            border
            style="width: 100%">
            <el-table-column
              width="100px"
              prop="areaid_1"
              label="省份">
            </el-table-column>
            <el-table-column
              width="100px"
              prop="areaid_2"
              label="城市">
            </el-table-column>
            <el-table-column
              width="150px"
              label="区/县城">
              <template slot-scope="scope">

                <div style="display: flex;flex-direction:column;">
                  <p v-for="item,index in scope.row.area" :key="index" style="border-bottom: 1px solid #fff;flex: 1;height: 100px;line-height: 100px;border-bottom: 1px solid #ccc">
                    {{item.areaid}}
                  </p>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              width="300px"
              label="房屋类型">
              <template slot-scope="scope">
                <div v-for="item,index in scope.row.area" :key="index" style="padding-bottom: 10px;height: 100px;display: flex;flex-direction: column;border-bottom: 1px solid #ccc">
                  <p v-for="li,index in item.basis" :key="index" style="flex: 1">
                    {{ li.house | houseFilter}}
                  </p>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="承接面积">
              <template slot-scope="scope">
                <div v-for="item,index in scope.row.area" :key="index" style="padding-bottom: 10px;height: 100px;display: flex;flex-direction: column;border-bottom: 1px solid #ccc">
                  <p v-for="li,index in item.basis" :key="index" style="flex: 1">
                    {{ li.area | areaFilter}}
                  </p>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              label="承接金额">
              <template slot-scope="scope">
                <div v-for="item,index in scope.row.area" :key="index" style="padding-bottom: 10px;height: 100px;display: flex;flex-direction: column;border-bottom: 1px solid #ccc">
                  <p v-for="li,index in item.basis" :key="index" style="flex: 1">
                    {{ li.money | moneyFilter }}
                  </p>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!--没设置承接信息时展示-->
    <div class="ut-empty" v-else>
      <p>未设置承接信息，无法接单</p>
      <el-button type="primary">现在设置</el-button>
    </div>
  </div>
</template>
<script>
  import {getCompanysSetup} from '@/api/api'

  export default {
    name: '',
    data() {
      return {
        picked1: '',
        qymjInfos: ['', '', ''],
        isShow: true,
        resultData:[],
        undertakeInfo: {
          undertake_way: [],
          tableData: [],
          local_remould: '0',// 局部装修
          outdoor_project: '0',//  室外工程
          period_condition: '0',// 期房承接范围（period_home=1成立)
          period_home: '0',// 期房是否承接（1：是，2：否）
        }
      }
    },
    filters: {
      undertake_way_filter: function (val) {
        if (val == 1) {
          return '半包'
        }
        if (val == 2) {
          return '全包'
        }
      },
      moneyFilter(val){
        //     0=>'不限',
        //     1=>'1万以上',
        //     2=>'2万以上',
        //     3=>'3万以上',
        //     4=>'4万以上',
        //     5=>'5万以上',
        //     6=>'6万以上',
        //     7=>'7万以上',
        //     8=>'8万以上',
        //     9=>'9万以上',
        //     10=>'10万以上',
        //     11=>'15万以上',
        //     12=>'20万以上',
        switch (Number(val)) {
          case  0:
            return "不限"
            break;
          case  1:
            return "1万以上"
            break;
          case  2:
            return "2万以上"
            break;
          case  3:
            return "3万以上"
            break;
          case  4:
            return "4万以上"
            break;
          case  5:
            return "5万以上"
            break;
          case  6:
            return "6万以上"
            break;
          case  7:
            return "7万以上"
            break;
          case  8:
            return "8万以上"
            break;
          case  9:
            return "9万以上"
            break;
          case  10:
            return "10万以上"
            break;
        }


      },
      areaFilter:function (val) {
        switch (Number(val)) {
          case  0:
            return "不限"
          break;
          case  1:
            return "30平米以上"
          break;
          case  2:
            return "40平米以上"
          break;
          case  3:
            return "50平米以上"
          break;
          case  4:
            return "60平米以上"
          break;
          case  5:
            return "80平米以上"
          break;
          case  6:
            return "90平米以上"
          break;
          case  7:
            return "100平米以上"
          break;
          case  8:
            return "120平米以上"
          break;
          case  9:
            return "130平米以上"
          break;
          case  10:
            return "150平米以上"
          break;
        }
        //     0=>'不限',
        //     1=>'30平米以上',
        //     2=>'40平米以上',
        //     3=>'50平米以上',
        //     4=>'60平米以上',
        //     5=>'80平米以上',
        //     6=>'90平米以上',
        //     7=>'100平米以上',
        //     8=>'120平米以上',
        //     9=>'130平米以上',
        //     10=>'150平米以上',

      },
      houseFilter(val){
        switch (val) {
          case 'pt':
            return '普通住房:(一居-六居以上)'
          break;
          case 'gy':
            return '公寓:(公寓)'
          break;
          case 'fs':
            return '复式:(复式 跃层 叠加)'
          break;
          case 'bs':
            return '别墅:(别墅 loft 独栋 联排 四合院 庭院)'
          break;
        }
        // <!-- 承接详情选项卡 -->
        // <!--'pt'=>'普通住房:(一居-六居以上)',-->
        // <!--'gy'=>'公寓:(公寓)',-->
        // <!--'fs'=>'复式:(复式 跃层 叠加)',-->
        // <!--'bs'=>'别墅:(别墅 loft 独栋 联排 四合院 庭院)-->
      },
      period_conditionFilter(val){
        // 期房承接范围（承接状态：1=三个月内装修，2=六个月内装修，3=六个月以上(含六个月)装修）
        switch (Number(val)) {
          case 1:
            return '三个月内装修'
          break;
          case 2:
            return '六个月内装修'
          break;
          case 3:
            return '六个月以上(含六个月)装修'
          break
        }
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        let params = {
          isUpdate:0,
        }
        getCompanysSetup(params).then((result) => {
          console.log(result);
          if(result == null){
            return
          }
          this.resultData = result
          this.undertakeInfo = {

            undertake_way: result.undertake_way,
            tableData: [result.allarea],
            local_remould: result.local_remould,// 局部装修
            outdoor_project: result.outdoor_project,//  室外工程
            period_condition: result.period_condition,// 期房承接范围（period_home=1成立)
            period_home: result.period_home,// 期房是否承接（1：是，2：否）
          }

        })
      },
      goAlterInfo() {

        this.$router.push({name: 'alterundertake', params: {isUpdate:1}})
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/config";

  /*1 信息盒子*/
  .ut-box {
    @extend .box-hover-shadow;
    padding: 20px;
    margin-top: 1px;
    border-top: 2px solid #eee;
    font-size: 20px;
    /*上部的标题栏*/
    .box-top {
      .iconfont:before {
        font-size: 20px;
        /*background-color: ;*/
      }
      /*字体图标颜色*/
      .ut-xgxx {
        color: red;
      }
      .ut-cjlx {
        color: #25dae8;
      }
      .ut-qymj {
        color: #20fa2e;
      }
      /*标题文字*/
      .biaoti {
        font-size: 18px;
        font-weight: bold;
      }
      /*控制承接方式按钮样式*/
      .ut-btn {
        width: 100px;
      }
    }
  }

  /*2 承接管理的 选择区域样式*/
  .cjfs-selected {
    padding: 30px 0 10px 30px;
    span {
      display: inline-block;
      /*margin-left: 30px;*/
      margin-right: 20px;
      width: 60px;
      height: 30px;
      font-size: 18px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #5a5a5a;
      border-radius: 5px;
    }
    .active {
      color: #0099ff;
      border: 1px solid #0099ff;
    }
    input[type='radio'] {
      display: none;
    }

  }

  /*3 承接类型内容区域*/
  .ut-content {
    font-size: 18px;
    padding-top: 10px;
    p {
      padding-left: 30px;
      padding-top: 20px;
    }
    .qf-content {
      margin-left: 150px;
    }
  }

  /*4 区域 房屋类型 面积 与 金额*/
  .qy-table {

    .table-row {
      li {
        &:nth-child(1) {
          width: 15%;
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 25%;
        }
        &:nth-child(5) {
          width: 15%;
        }
        &:nth-child(6) {
          width: 15%;
        }
      }
    }
  }

  /*5 无信息时显示*/
  .ut-empty {
    padding-top: 100px;
    font-size: 18px;
    text-align: center;
    p {
      padding-bottom: 30px;
    }
  }
</style>
