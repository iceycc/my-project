<template>
  <div style="background: #f5f5f5">
    <div class="main">
      <!--发送邮件成功-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status == 1">
        <p style="padding-top: 100px;color: #1afa29">已经发送验证邮件至: <a href="">您的邮箱</a></p>
        <p>验证邮件24小时内有效</p>
      </div>
      <!--发送邮件失败-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status == 2">
        <p style="padding-top: 100px">发送邮件失败, <a href="" style="color: red">重新发送?</a></p>
      </div>
      <!--该链接已失效-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status ==3 ">
        <p style="padding-top: 100px">该链接已失效, <a href="" style="color: red">重新发送?</a></p>
      </div>
      <!--激活成功-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status==4">
        <p style="padding-top: 100px">邮件激活成功: <a href="">重新登陆</a></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "",
      data(){
          return {
            status:1
          }
      },
      created(){
        //
        function GetRequest() {
          var url = location.hash; //获取url中"?"符后的字串
          var theRequest = new Object();
          if (url.indexOf("?") != -1) {
            var str = url.substr(3);
            var strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
              theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
          }
          return theRequest;
        }

          // 注册后跳转 判断
        let isFromLogin = this.$route.params.isFromLogin || true
        if(isFromLogin){
          // 拿到注册后是否发送邮件成功的状态 分成功和失败
          // if()
        }
        // 来着邮件的激活状态
        else {
          // 从url取出激活的参数
          // 获取url参数代码
          var Request = new Object();
          Request = util.GetRequest();
          let uid = Request['uid']
          let rtime = Request['rtime']
          let femail = Request['femail']
        }
      }
    }
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    background: #fff;
    width: 1220px;
    height: 480px;
    margin: 0 auto;
    /*background: url("../../assets/img/Banner.jpg");*/
  }
</style>
