<template>
  <div id="container">
  </div>
</template>

<script>
  import BMap from 'BMap'

  export default {
    name: "",
    mounted() {
      var map = new BMap.Map("map-container");
      // 创建地图实例
      var point = new BMap.Point(116.404, 39.915);
      // 创建点坐标
      map.centerAndZoom(point, 15);
      // 初始化地图，设置中心点坐标和地图级别
    }
  }
</script>

<style lang="scss" scoped>
  #container{
    width: 100%;
    height: 100%;

  }

</style>
