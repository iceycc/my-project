<template>
  <div id="app">
    <bc-header></bc-header>
    <div class='bc-main'>
      <router-view class="bc-w2000"></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

  #app{
    padding-top:20px;
    padding-bottom:20px;
    height: 100%;

  }
  .bc-main{
    height: 100%;
    background:#eee;
  }
  .bc-w2000{
    width:1360px;
    height: 100%;
    margin: 0 auto;
  }
</style>
