<template>

  <div>
    <h1>商铺登陆</h1>
    <div class="join-from">
      <label for=""><span>账号</span><input type="text"> <br></label>
      <label for=""><span>密码</span><input type="password"> <br></label>
      <label for=""><input type="radio"> 下次自动登陆 <br></label>
      <button>登陆</button>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .join-from{
    margin: 0 auto;
    padding: 50px;
    width: 600px;
    background: #fff;
    label{
      height: 32px;
      line-height: 32px;
    }
    input{
      vertical-align: middle;
      font-size: 16px;
      width: 100px;
      height: 30px;
      background: #eee;
      border: 1px solid #5a5a5a;
      margin: 5px;
    }

  }
</style>
