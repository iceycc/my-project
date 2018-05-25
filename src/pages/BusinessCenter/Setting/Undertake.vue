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
            <span v-for="item,index in undertake_way" :key="index">{{item | undertake_way_filter}}</span>
        </div>
      </div>
      <!--承接类型-->
      <div class="ut-box">
        <div class="box-top">
          <i class="iconfont icon-chengjieleixing ut-cjlx"></i>
          <span class="biaoti">承接类型</span>
        </div>
        <div class="ut-content">
          <p>期房 <span class="qf-content">六个月以上（含六个月）装修</span></p>
          <p>局部改造</p>
          <p>室外工程</p>
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
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="province"
              label="省份">
            </el-table-column>
            <el-table-column
              prop="city"
              label="城市">
            </el-table-column>
            <el-table-column
              prop="address"
              label="区/县城">
            </el-table-column>
            <el-table-column
              label="房屋类型">
              <template slot-scope="scope">
                <p v-for="item,index in scope.row.data" :key="index">
                  {{item.housing_type}}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="承接面积">
              <template slot-scope="scope">
                <p v-for="item,index in scope.row.data" :key="index">
                  {{item.area}}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="承接金额">
              <template slot-scope="scope">
                <p v-for="item,index in scope.row.data" :key="index">
                  {{item.money}}
                </p>
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
        undertake_way:[],
        picked1: '',
        qymjInfos:['','',''],
        isShow:true,
        tableData: [{
          province: '北京',
          city: '北京',
          address: '北京',
          data:[
            {
              housing_type:'普通住房',
              area:'不限',
              money:'不限'
            },
            {
              housing_type:'公寓',
              area:'不限',
              money:'不限'
            },
          ]
        }]
      }
    },
    filters:{
      undertake_way_filter:function (val) {
        if(val ==1 ){
          return '半包'
        }
        if(val ==2 ){
          return '全包'
        }
      }
    },
    created(){
      getCompanysSetup().then((result)=>{
        console.log(result);
        this.undertake_way = result.undertake_way
      })

    },
    methods:{
      goAlterInfo(){
        this.$router.push({name:'setting.alter'})
      }
    }
  }
</script>
<style lang="scss" scoped >
  @import "../../../assets/style/config";

  /*1 信息盒子*/
  .ut-box {
    @extend .box-hover-shadow;
    padding: 20px;
    margin-top: 1px;
    border-top: 2px solid #eee;
    font-size: 20px;
    /*上部的标题栏*/
    .box-top{
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
    font-size:18px;
    padding-top: 10px;
    p{
      padding-left: 30px;
      padding-top: 20px;
    }
    .qf-content{
      margin-left: 150px;
    }
  }
  /*4 区域 房屋类型 面积 与 金额*/
  .qy-table{
    height:500px ;
    .table-row{
      li{
        &:nth-child(1){width: 15%;}
        &:nth-child(2){width: 15%;}
        &:nth-child(3){width: 15%;}
        &:nth-child(4){width: 25%;}
        &:nth-child(5){width: 15%;}
        &:nth-child(6){width: 15%;}
      }
    }
  }
  /*5 无信息时显示*/
  .ut-empty{
    padding-top: 100px;
    font-size: 18px;
    text-align: center;
    p{
      padding-bottom: 30px;
    }
  }
</style>
