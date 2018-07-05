<template>
  <div style="background: #f5f5f5">
    <div class="main">
      <!--发送邮件成功-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status == 1">
        <p style="padding-top: 100px;color: #1afa29">已经发送验证邮件至: <a href="">您的邮箱</a></p>
        <p>验证邮件24小时内有效</p>
        <p>登陆邮箱激活账号，激活后去
          <router-link :to="{name:'login'}" style="color:red">登陆</router-link>
        </p>
      </div>
      <!--发送邮件失败-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status == 2">
        <p style="padding-top: 100px">发送邮件失败, <el-button style="color: red" @click="rePost">重新发送?</el-button></p>
      </div>
      <!--该链接已失效-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status ==3 ">
        <p style="padding-top: 100px">该链接已失效, <el-button style="color: red" @click="rePost">重新发送?</el-button></p>
      </div>
      <!--激活成功-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status==4">
        <p style="padding-top: 100px">邮件激活成功 <router-link :to="{name:'login'}" style="color: red">去登陆</router-link></p>
      </div>
      <!--已经激活-->
      <div style="text-align: center;font-size: 20px;margin-top: 20px" v-if="status==5">
        <p style="padding-top: 100px">邮箱已经激活 <router-link :to="{name:'login'}" style="color: red">去登陆</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
  import {checkEmailHandel,activeRegister} from '@/api/api'
  import EventBus from '@/config/EventBus'

  export default {
    name: "",
    data() {
      return {
        status: 0,
        email:'',
        uid:''
      }
    },
    created() {
      //
      function getUrl(para){
        var paraArr = location.hash.split('?')[1].substring(0).split('&');
        for(var i = 0;i < paraArr.length;i++){
          if(para == paraArr[i].split('=')[0]){
            return paraArr[i].split('=')[1];
          }
        }
        return '';
      }
      // 注册后跳转 判断
      let isFromLogin = this.$route.params.isFromLogin || false
      if (isFromLogin) {
        // 拿到注册后是否发送邮件成功的状态 分成功和失败
        this.status = 1
      }
      // 来自邮件的激活状态
      else {
        // 从url取出激活的参数
        // 获取url参数代码

        let params = {
          email: getUrl('email'),
          uid:getUrl('uid'),
          time:getUrl('time')
        }
        // console.log(name);
        checkEmailHandel(params)
          .then((result)=>{
            // console.log(result);
            if(result.data){
              this.email = result.data.email
              this.uid = result.data.uid
            }
            EventBus.$emit('notice',{
              type:'message',
              message:result.message
            })
            if(result.code==0 && result.message =='激活链接过期'){
              this.status = 3
            }
            if(result.code == 1){// 邮箱已经激活
              this.status = 5
            }
            if(result.code == 2){// 邮箱已经激活
              this.status = 4
            }
          })
      }


    },
    methods:{
      rePost(){
        let params = {
          email:this.email,
          uid:this.uid
        }
        activeRegister(params)
          .then((result)=>{
            // console.log(result);
            EventBus.$emit('notice',{
              type:'message',
              message:result.message
            })
          })
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
