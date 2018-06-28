<template>
    <div id="container">

        <baidu-map class="bm-view" ak="BiYl0zyGXDl3E67wPxyGYGyP">
            <bm-view class="map"></bm-view>

            <bm-local-search :panel='true' :pageCapacity="2" :auto-viewport="true" :keyword="searchKeyored" :location="searchLocation"></bm-local-search>
        </baidu-map>
    </div>
</template>
<script>
    // todo map
    import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
    import {BmView,BmLocalSearch} from 'vue-baidu-map'

    // import BMap from 'BMap'

    export default {
        name: "",
        props:{
            location: {
                type: null,
                default: '北京市'
            },
            keyword: {
                type: null,
                default: '天安门'
            },
        },
        data(){
            return{
                // keyword:'招商',
                // location:'北京市'
            }
        },
        computed:{
            searchLocation:function () {
                return this.location
            },
            searchKeyored:function () {
                return this.keyword
            }
        },
        components: {
            BaiduMap,
            BmLocalSearch,
            BmView
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
    #container {
        width: 100%;
        height: 100%;
    }

    .bm-view {
        width: 100%;
        height: 100%;
    }
    .map{
        width: 100%;
        height: 100%;
    }

</style>
