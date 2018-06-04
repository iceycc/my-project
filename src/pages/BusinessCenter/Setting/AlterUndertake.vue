<template>
  <div>
    <h3 class="small-title">承接管理信息</h3>
    <!--主要表单区-->
    <div class="ut-form">
      <!-- 选择承接方式 -->

      <!--{{formData.undertake_way}}-->
      <div class="form-box">
        <h4>选择承接方式</h4>
        <!--<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="undertake_way">
          <el-checkbox label="1">半包</el-checkbox>
          <el-checkbox label="2">全包</el-checkbox>
        </el-checkbox-group>

      </div>
      <!-- 选择承接类型 -->
      <div class="form-box">
        <h4>选择承接类型</h4>
        <div class="box-flex">
          <!-- 期房 -->
          <div class="box-l">
            <h5>期房</h5>
            <div>
              <div class="ut-t">
                <div class="ut-l">
                  <el-radio v-model="formData.period_home" label="1">承接</el-radio>
                </div>
                <div class="ut-l">
                  <!---->
                  <el-select v-model="formData.period_condition" clearable placeholder="请选择" size="mini"
                             :disabled="qifangDisabled">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="ut-t">
                <el-radio v-model="formData.period_home" label="2">不承接</el-radio>
              </div>
            </div>
          </div>
          <!-- 局部改造 -->
          <div class="box-l">
            <h5>局部改造</h5>
            <div>
              <div class="ut-t">
                <div class="ut-l">
                  <el-radio v-model="formData.local_remould" label="1">承接</el-radio>
                </div>
                <div class="ut-l">
                </div>
              </div>
              <div class="ut-t">
                <el-radio v-model="formData.local_remould" label="2">不承接</el-radio>
              </div>
            </div>
          </div>
          <!-- 室外工程 -->
          <div class="box-l">
            <h5>室外工程</h5>
            <div>
              <div class="ut-t">
                <div class="ut-l">
                  <el-radio v-model="formData.outdoor_project" label="1">承接</el-radio>
                </div>
                <div class="ut-l">
                </div>
              </div>
              <div class="ut-t">
                <el-radio v-model="formData.outdoor_project" label="2">不承接</el-radio>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 区域、房屋类型、面积与金额 -->
      <div class="form-box">
        <h4>区域、房屋类型、面积与金额</h4>
        <!-- 承接区域 -->
        <div class="ut-area">
          <h5>承接区域</h5>
          <!-- <myAddress></myAddress> -->
          <div>
            <!--formData.areaid_1-->
            <el-select v-model="provence" placeholder="请选择省" size="mini">
              <el-option
                v-for="item in provences"
                :key="item.lid"
                :label="item.name"
                :value="item.lid">
              </el-option>
            </el-select>
          </div>
          <div>
            <!--formData.areaid_2-->
            <el-select v-model="city" placeholder="请选择市" size="mini" :disabled="disabledCity">
              <el-option
                v-for="item in cities"
                :key="item.lid"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </div>

        </div>
        <!-- 承接详情 -->
        <div class="ut-detail">
          <h5>承接详情</h5>
          <ul class="ut-quxian">
            <li style="background: #f0f0f0;padding-left: 10px">这里是区/县</li>
            <li
              :class="{active:showLi == index}"
              :style="{cursor:'pointer',paddingLeft:' 10px'}"
              v-for="(item,index) in distrusts"
              :key="index"
              @click='selectDistrusts(index)'
            >{{item.name}}
              <i class="iconfont icon-yuangou" style="float: right"
                 v-show="distrustsInfo[index]===true"
                 @click="distrustSelectHandle(item.name,index)"
              ></i>
            </li>
          </ul>

          <div class="cart-detail">
            <div v-for="item,index in distrusts"
                 :key="index"
                 v-show="showLi == index"
            >
              <p>请设置以下承接选项</p>
              <div class="house-detail">
                <!-- 承接详情选项卡 -->
                <!--'pt'=>'普通住房:(一居-六居以上)',-->
                <!--'gy'=>'公寓:(公寓)',-->
                <!--'fs'=>'复式:(复式 跃层 叠加)',-->
                <!--'bs'=>'别墅:(别墅 loft 独栋 联排 四合院 庭院)-->
                <!--{{pt}}-->
                <!--{{xModel}}-->
                <div class="house-left">

                  <my-checkbox :xModel="xModel" @getInfos="getInfos" :index="index" :distrust="item.name"
                               :lid="item.lid"></my-checkbox>
                  <!--<my-checkbox house="公寓" :xModel="gy" :yModel="item.isSelected"></my-checkbox>-->
                  <!--<my-checkbox house="复式：复式、跃层、叠加" :xModel="fs" :yModel="item.isSelected"></my-checkbox>-->
                  <!--<my-checkbox house="别墅：别墅、loft、独联排、四合院、、庭院" :xModel="bs" :yModel="item.isSelected"></my-checkbox>-->
                </div>
                <!-- <div class="house-right"></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--提交-->
    <div class="ut-submit">
      <el-button type="primary" @click="goTake">确定修改</el-button>
    </div>
  </div>
</template>
<script>
  import EventBus from '@/config/EventBus'

  const waysOptions = [1, 2];// 半包全包
  import {getProvence, getCity, getDistrust, postSetupPerfect} from '@/api/api'

  export default {
    name: "under-take",
    data() {
      return {
        xModel: {
          isSelect: false,
          data: {}
        },

        distrustsInfo: {},// 存储选择的城市 区县的设置 index : true/false
        distrustsBase: {},// 存储选择的城市 所传的数据 便于增删改查
        pt: {
          area: '',
          house: 'pt',
          money: '',
          isSelected: false
        },
        gy: {
          area: '',
          house: 'gy',
          money: ''
        },
        fs: {
          area: '',
          house: 'fs',
          money: ''
        },
        bs: {
          area: '',
          house: 'bs',
          money: ''
        },

        showLi: -1,
        provence: '',
        city: '',
        distrusts: '',
        undertake_way: [],
        formData: {
          period_condition: '',
          undertake_way: [],
          areaid_1: '',
          areaid_2: '',
          local_remould: '',
          outdoor_project: '',
          period_condition: '',
          period_home: '',
          area: [
            // {
            //   areaid: '',
            //   basis: [
            //     {
            //       area: '',
            //       house: '',
            //       money: ''
            //     }
            //   ],
            // }
          ],
        },
        options: [],
        disabledCity: true,
        // 多选框
        checkAll: false,
        ways: waysOptions,
        isIndeterminate: true,

        // 公共 下拉框 数据
        options1: [// 期房 承接管理
          {
            value: "1",
            label: "三个月内装修"
          },
          {
            value: "2",
            label: "六个月内装修"
          },
          {
            value: "3",
            label: "六个月以上装修"
          }
        ],
        provences: [],
        cities: [],
        distrusts: [],
        // 承接详情选项卡
        detailCardList: [],
        isSelected: false
      };
    },
    computed: {
      qifangDisabled: function () {
        if (this.formData.period_home == 1) {
          return false
        } else {
          return true
        }
      }
    },
    watch: {
      // showLi(newVal,oldVal){
      //
      // },
      provence: function (newVal, oldVal) {
        // console.log(newVal);
        if (newVal != '') {
          this.disabledCity = false
          let params = {
            id: newVal
          }
          // this.city = ''
          // this.distrusts = []
          getCity(params)
            .then((result) => {
              this.cities = result
            })
        }
      },
      city: function (newVal, oldVal) {
        console.log(newVal);
        let _this = this
        setTimeout(() => {
          console.log('_this.cities');
          console.log(_this.cities);
          let cityIndex = _this.cities.findIndex((value, index, arr) => {
            return value.name == newVal
          })
          let cityLid = _this.cities[cityIndex].lid
          console.log(cityLid);
          if (cityLid != '') {
            let params = {
              id: cityLid
            }
            getDistrust(params)
              .then((result) => {
                _this.distrusts = result.map((item) => {
                  return Object.assign({isSelected: false}, item)
                })
                console.log('distrusts');
                console.log(_this.distrusts);
                _this.distrustsInfo = {}
              })
          }
        }, 1200)
      }
    },
    created() {
      EventBus.$on('checkboxSelect', (res) => {
        // console.log(res);
      })

      let preData = this.$route.params
      console.log(JSON.stringify(preData) !== "{}");
      console.log(preData);
      if (JSON.stringify(preData) !== "{}") {
        console.log(1333);
        this.undertake_way = preData.undertake_way
        this.formData.period_home = preData.period_home
        this.formData.period_condition = preData.period_home == 1 ? preData.period_condition : ''
        this.formData.local_remould = preData.local_remould
        this.formData.outdoor_project = preData.outdoor_project
        let pre_provence = preData.tableData[0].areaid_1
        let pre_city = preData.tableData[0].areaid_2
        this.city = preData.tableData[0].areaid_2
        let _this = this
        getProvence()
          .then((result) => {
            this.provences = result
            let provence_index = _this.provences.findIndex((value, index, arr) => {
              return value.name == pre_provence
            }) //
            // console.log(this.provences);
            // console.log('a');
            return _this.provences[provence_index]
          }).then((res) => {
          _this.provence = res.lid

        })
      } else {
        getProvence()
          .then((result) => {
            this.provences = result
          })
      }


    },
    methods: {
      // 点击区县的图标选择  todo: 这个咋整
      distrustSelectHandle(val,index) {
        // 删除数据
        // let curtIndex = this.formData.area.findIndex((value, index, arr) => {
        //   return value.areaid == val.distrust
        // })
        this.distrustsInfo[index]=false
        console.log('=========')
        console.log(this.formData.area);
        console.log(val);
        console.log('=========')
        this.formData.area = this.formData.area.filter(item => {
          if (item.areaid !== val) {
            return item
          }
        })
      },
      // 监听子组件传递的值
      getInfos(val) {
        this.distrustsInfo[val.index] = val.isSelect

        if (this.formData.area.findIndex((value, index, arr) => {
          return value.areaid == val.distrust
        }) === -1 && val.isSelect) {
          // 增加数据
          this.formData.area.push({
            areaid: val.distrust,
            basis: val.data
          })
        }
        else if (!val.isSelect) {
          // 删除数据
          // let curtIndex = this.formData.area.findIndex((value, index, arr) => {
          //   return value.areaid == val.distrust
          // })
          console.log(this.formData.area);
          this.formData.area = this.formData.area.filter(item => {
            if (item.areaid !== val.distrust) {
              return item
            }
          })
        }

      },
      selectDistrusts(index) {
        console.log(index)
        EventBus.$on('checkboxSelect', (val) => {
          console.log(val);
        })
        // this.formData.distrust.push(distrustId)
        this.showLi = index
      },
      // 选择方式方法
      // handleCheckAllChange(val) {
      //   this.formData.undertake_way = val ? waysOptions : [];
      //   this.isIndeterminate = false;
      // },
      // handleCheckedCitiesChange(value) {
      //   let checkedCount = value.length;
      //   this.checkAll = checkedCount === this.ways.length;
      //   this.isIndeterminate =
      //     checkedCount > 0 && checkedCount < this.ways.length;
      // },
      //  点击提交
      goTake() {
        let _this = this
        let params = {
          areaid_1: this.provence,
          areaid_2: this.city
        }
        this.formData.undertake_way = this.undertake_way.toString()
        params = Object.assign(this.formData, params)
        console.log(params);
        EventBus.$emit('notice', {
          type: 'confirm',
          title: '确定提交吗',
          success() {
            postSetupPerfect(params)
              .then((result) => {
                console.log(result);
                // if()
                _this.$router.push({name: 'undertake'})
              })
          }
        })
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import '~@/assets/scss/main.scss';

  .ut-form {
    margin-top: 50px;
    font-size: 18px;
    color: #000;
  }

  .ut-title {
    font-size: 22px;
    color: #000;
  }

  .form-box {
    @extend .box-hover-shadow;
    // --
    margin-top: 1px;
    border-top: 2px solid #eee;
    // 标题
    h4 {
      font-size: 18px;
      color: #000;
      font-weight: 550;
      margin-bottom: 30px;
    }
    h5 {
      font-size: 16px;
      color: #666;
    }

    //
    .box-flex {
      display: flex;
      .box-l {
        flex: 1;
      }
    }
    .ut-t {
      height: 28px;
      line-height: 28px;
      width: 100%;
      margin-top: 20px;
    }
    .ut-l {
      float: left;
      width: 40%;
      height: 100%;
      box-sizing: border-box;
      &:last-child {
        font-size: 12px;
      }
    }

    // 承接区域
    .ut-area {
      display: flex;
      padding-right: 50px;
      font-size: 0;

      h5 {
        flex: 1;
        text-align: left;
        height: 28px;
        line-height: 28px;
        vertical-align: middle;
        color: #000;
      }
      & > div {
        flex: 3;
        padding: 0 4px;
        height: 28px;
      }
    }
    // 承接详情
    .ut-detail {
      display: flex;
      margin-top: 50px;
      h5 {
        flex: 1;
        text-align: left;
        height: 28px;
        line-height: 28px;
        vertical-align: middle;
        color: #000;
      }
      .ut-quxian {
        flex: 1;
        max-height: 400px;
        overflow-y: auto;
        font-size: 14px;
        color: #666;
        li {
          position: relative;
          height: 28px;
          font-size: 16px;
          line-height: 28px;
        }
        .active {
          background: #e0e0e0;
        }
        i::before {
          font-size: 16px;
          vertical-align: middle;
          color: #0099ff;
        }

      }
      .cart-detail {
        flex: 5;
        border-radius: 2px;
        padding: 10px;
        font-size: 14px;
        p {
          color: #aaa;
          margin-bottom: 20px;
        }
      }
      .el-checkbox__label {
        display: block;
        word-wrap: break-all !important;
        width: 120px;
      }
    }
  }

  /*提交*/
  .ut-submit {
    padding-top: 30px;
    text-align: center;
    .submit-btn {

      width: 150px;

    }
  }
</style>
