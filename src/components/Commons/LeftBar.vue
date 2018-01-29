
<template>
  <div class="bc-lfbar">
      <ul>
          <li v-for= "(ele,index) in lists" :key="index">              
              <i class="el-icon-edit"></i>
              <a href="javscript:;">{{ele}}</a>
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

</style>
