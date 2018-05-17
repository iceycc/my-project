<template>
    <div id='example-3'>

        <!-- <div v-for="(v,index) in dataList" :key="index">
          <input type="checkbox" :id="v" :value="v" v-model="checkedNames">
          <label :for="v">{{v}}</label>
        </div> -->

        <div v-for="(house,index) in houseList" :key="index" class="flexbox one-box">
          <div class="flex1">
            <input type="checkbox" :id="index" :value="house.house" v-model="detailCardList">
            <label :for="house.house">{{house.house}}</label>
          </div>
          <div class="flex1">
            <el-select v-model="house.eara" placeholder="面积不限" size="mini" :key="index">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="flex1">
            <el-select v-model="house.money" placeholder="金额不限" size="mini" :key="index">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
    </div>

</template>
<script>
export default {
  name: "my-checkbox", // setting alter 选项卡组件

  props: ["options", "houseList"],
  data() {
    return {
      // TODO: 怎么讲数据传回父组件
      detailCardList: []
    };
  }
};
</script>
<style lang="scss" scoped>
.flexbox {
  margin-bottom: 20px;
}
.flex1 {
  font-size: 0;
  color: #696969;
  font-size: 14px;
  vertical-align: middle;
  height: 28px;
  line-height: 28px;
  padding-right: 10px;
  input {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
