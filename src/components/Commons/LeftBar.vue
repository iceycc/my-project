
<template>
  <div class="bc-lfbar">
      <ul>
          <li class="bc-lf-list" v-for= "(ele,index) in lists" :key="index">              
              <i class="el-icon-edit"></i>
              <a class="bc-a" href="javscript:;">{{ele}}</a>
          </li>
      </ul>
  </div>
</template>

<script>
    export default{
        name: 'left-bar',
        props:{

        },
        data(){
            return {
                lists:['首页','意见反馈']
            }
        }
    }
</script>

<style scoped>
    .bc-lfbar{
        width:300px;
        height:100%;
    }
    .bc-lfbar ul{        
        height: 100%;
        padding-left:74px;
        padding-top:7px;
    }
    .bc-lf-list{
        height: 68px;
        line-height:68px;
        font-size:18px;
        color: #5a5a5a;
    }
    .bc-a{
        display:inline-block;
        width: 150px;
        height:100%;
        margin-left:10px;
        border-bottom:1px solid #ccc;

    }
</style>
