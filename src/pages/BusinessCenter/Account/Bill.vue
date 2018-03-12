<template>
  <div>
    <!--账单统计-->
    <div :class="[{'bill-total':true}]" v-for="(item,index) in mouseBills" :key="index">
      <div >
        <h3 class="title">12月份账单</h3>
        <!--总计-->
        <ul class="bill-count clearfix">
          <li class="l" v-for="(data,index) in data1" :key="index">
            <p>{{data.info}}</p>
            <p>{{data.money}}元</p>
          </li>
        </ul>
      </div>
      <!--账单详情-->
      <div class="bill-detail clearfix">
        <!--top-->
        <div class="top clearfix">
          <div class="l tab-show" @click="tabDetail(index)">
            <span>账单详情</span>
            <i class="iconfont icon-xiangshang"></i>
          </div>
          <p class="r">账单号：34567876543456</p>
        </div>
          <ul class="my-table" v-show="item.isShow">
            <!--表头-->
            <li class="table-header">
              <ol class="table-row">
                <li v-for="(item,index) in titles" :key="index">{{item}}</li>
              </ol>
            </li>
            <!--表格内容-->
            <li class="[{'table-detail':true}]" v-for="(info,index) in billInfos" :key="index">
              <ol class="table-row">
                <li>{{info.time}}</li>
                <li>{{info.num}}</li>
                <li>{{info.home}}</li>
                <li>{{info.status}}</li>
                <li>{{info.price}}</li>
              </ol>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'',
    data(){
      return{
        //详细账单的内容数据
        data1:[
          {info:'共计扣款15笔',money:10000},
          {info:'共收退款15笔',money:10000},
          {info:'申诉处理中15笔',money:10000},
        ],
      //  判断是否显示下拉框  因为要进行循环创建 todo 怎么分别判断不同盒子的状态
      //   isShow:false,

      //  每个月的账单总信息
        mouseBills:[{data:'',isShow:false},{data:'',isShow:false}],
        //每个月单独的订单信息
        titles:['时间','订单号','户型','类型','金额'],
        billInfos:[{time:'2017-11-11 11:11',num:'123123123123',home:'两局',status:'扣款',price:'-123'},{time:'2017-11-11 11:11',num:'123123123123',home:'两局',status:'扣款',price:'-123'},{}],
        //
      }
    },
    methods:{
      tabDetail(index){
        var nowIs = this.mouseBills[index].isShow;
        this.mouseBills[index].isShow = !nowIs;
      }
    }
  }
</script>
<style lang="scss">

  /*账单总*/
  .bill-total{
    background: #fff;
    margin-bottom: 40px;
  }
  /*title*/
  .title{
    padding-top:20px ;
    padding-left: 20px;
    font-size: 16px;
  }
  /*账单统计*/
  .bill-count{
    padding-top: 30px;
    border-bottom: 1px solid #d6d6d6;
    padding-left: 30px;
    li{
      width: 33.3%;
      text-align: center;
      p{
        padding-bottom: 30px;
      }
      p:first-child{
        font-size: 16px;
      }
      p:last-child{
        font-size: 28px;
      }
    }
  }
  /*账单详情 */
  .bill-detail{
    padding: 20px;
    .top{
      font-size: 16px;
    }
    /*表格行 比例*/
    .table-row{
      li{
        &:nth-child(1){width: 20%;}
        &:nth-child(2){width: 20%;}
        &:nth-child(3){width: 30%;}
        &:nth-child(4){width: 20%;}
      }
    }
    .tab-show{
      cursor:pointer;
    }


    /*
   .active{
     .my-table{display: block}
   }*/
  }



</style>
