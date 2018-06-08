<template>
  <div id="container">
    <baidu-map class="bm-view" ak="BiYl0zyGXDl3E67wPxyGYGyP" center="北京">
    </baidu-map>
  </div>
</template>
<script>
  // todo map

  import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
  // import BMap from 'BMap'

  export default {
    name: "",
    components: {
      BaiduMap
    },
    mounted() {
      // var map = new BMap.Map("map-container");
      // // 创建地图实例
      // var point = new BMap.Point(116.404, 39.915);
      // // 创建点坐标
      // map.centerAndZoom(point, 15);
      // // 初始化地图，设置中心点坐标和地图级别
    }
  }
</script>

<style lang="scss" scoped>
  #container{
    width: 100%;
    height: 100%;
  }
  .bm-view {
    width: 100%;
    height: 100%;
  }

</style>
