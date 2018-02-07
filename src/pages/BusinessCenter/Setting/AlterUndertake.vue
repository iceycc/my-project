<template>
  <div>
    <h3 class="ui-title">修改承接管理</h3>
    <div class="ut-form">
      <!-- 选择承接方式 -->
      <div class="form-box">
        <h4>选择承接方式</h4>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="ways in cities" :label="ways" :key="ways">{{ways}}</el-checkbox>
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
              <el-radio v-model="radio1" label="1">承接</el-radio>
              </div>
              <div class="ut-l">
                <el-select v-model="qifang" clearable placeholder="请选择" size="mini">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="ut-t">
            <el-radio v-model="radio1" label="2">不承接</el-radio>             
            </div>
          </div>
        </div>
        <!-- 局部改造 -->
        <div class="box-l">
          <h5>局部改造</h5>
          <div>
            <div class="ut-t">
              <div class="ut-l">
              <el-radio v-model="radio2" label="1">承接</el-radio>
              </div>
              <div class="ut-l"> 
              </div>
            </div>
            <div class="ut-t">
            <el-radio v-model="radio2" label="2">不承接</el-radio>             
            </div>
          </div>
        </div>
        <!-- 室外工程 -->
        <div class="box-l">
          <h5>室外工程</h5>
          <div>
            <div class="ut-t">
              <div class="ut-l">
              <el-radio v-model="radio3" label="1">承接</el-radio>
              </div>
              <div class="ut-l">
              </div>
            </div>
            <div class="ut-t">
            <el-radio v-model="radio3" label="2">不承接</el-radio>             
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
            <el-select v-model="sheng" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-select v-model="shi" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-select v-model="quxian" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 承接详情 -->
        <div class="ut-detail">
          <h5>承接详情</h5>
          <ul class="ut-quian">
            <li>这里是区/县</li>
            <li>这里是区/县</li>
            <li>这里是区/县</li>
            <li>这里是区/县</li>            
          </ul>
          <div class="cart-detail">
            <p>请设置以下承接选项</p>
            <div class="house-detail">
              <!-- 承接详情选项卡 -->
              <div class="house-left">
                <my-checkbox :options="options" :houseList="houseList"></my-checkbox>
              </div>
              <!-- <div class="house-right"></div> -->
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const waysOptions = ["清包", "半包", "全包"];
export default {
  name: "under-take",
  data() {
    return {
      // 多选框
      checkAll: false,
      checkedCities: [],
      cities: waysOptions,
      isIndeterminate: true,
      // 公共 下拉框 数据
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],

      // 下拉框选择☞
      qifang: "",
      sheng: "",
      shi: "",
      quxian: "",

      // 单选框
      radio1: "",
      radio2: "",
      radio3: "",
      // 承接详情选项卡
      detailCardList: [],
      houseList: [
        {
          house: "普通住宅：一至六居室",
          eara: "",
          money:""
        },
        {
          house: "公寓",
          eara: "",
          money:""
        },
        {
          house: "复式：复式、跃层、叠加",
          eara: "",
          money:""
        },
        {
          house: "别墅：别墅、loft、独联排、四合院、、庭院",
          eara: "",
          money:""
        }
      ]
    };
  },
  methods: {
    // 选择方式方法
    handleCheckAllChange(val) {
      this.checkedCities = val ? waysOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style lang="scss">
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
  // TODO:1-盒子公共样式
  position: relative;
  top: 0;
  width: 100%;
  border-radius: 3px;
  background: #fff;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #ccc;
  transition: all 0.2s;
  &:hover {
    top: -5px;
    box-shadow: 5px 5px 5px #aaa;
  }
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
      color:#000;
    }
    & > div {
      flex: 2;
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
      color:#000;
    }
    & .ut-quian {
      flex: 1;
      font-size: 14px;
      color: #666;
      li{
        height: 28px;
        line-height: 28px;
      }
    }
    & > div {
      flex: 5;
      border: 1px solid #ccc;
      border-radius: 2px;
      padding: 10px;
    }
    .cart-detail {
      font-size: 14px;
      p {
        color: #aaa;
        margin-bottom: 20px;
      }
    }
    .el-checkbox__label{
      display: block;
      word-wrap: break-all !important;
      width: 120px;
    }
  }
}
</style>
