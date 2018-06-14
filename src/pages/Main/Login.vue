<template>
  <div style="background: #f5f5f5">
    <div class="main">
      <div class="login-box">
        <h3 style="margin-bottom: 20px;text-align: center">商户账号登录</h3>
        <el-form :model="loginFormData" status-icon :rules="rules2" ref="loginFormData" label-width="80px"
                 class="demo-ruleForm">
          <el-form-item label="邮箱" prop="email">

            <el-input type="email" v-model="loginFormData.email" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginFormData.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="img_code">
            <div style="display: flex">
              <el-input v-model.number="loginFormData.img_code" style="display: inline-block;flex: 1"></el-input>
              <!--<el-button>AAAA</el-button>-->
              <el-button @click='createCode'>{{checkCode}}</el-button>

              <!--<img class="code-img" :src="img_code_url" alt="" @click="reGetPicCode" style="display: inline-block;width: 70px;height: 40px;background: #1afa29">-->
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
               style="width: 100%"
               @click="submitForm('loginFormData')">登陆</el-button>
            <el-checkbox v-model="loginFormData.isread" label="1">下次自动登陆</el-checkbox> <span style="margin: 0 10px;cursor: pointer;" @click="goRegister">注册</span><span
            @click="goFindPass" style="cursor: pointer">忘记密码</span>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  import store from '../../store'
  import {Request} from '../../config/index'
  import {getCookie, setCookie} from "../../config/util";
  import {getIndexInfos,doLogin} from '@/api/api'
  import EventBus from '@/config/EventBus'
  const imgUrl = 'http://merchant.uzhuang.com/v1/companysetup/showimg&rd=' //
  var code
  export default {

    data() {
      // 设置校验规则
      var checkPass = (rule, value, callback) => {
        // 失焦验证图和密码
        if(value == '') {
          return callback(new Error('请输入'));
        }else {
          callback()
        }

      }
      // 设置校验规则
      var checkImgCode = (rule, value, callback) => {
        // 失焦验证图和密码
        value = value + ''
        value.toUpperCase();//取得输入的验证码并转化为大写
        console.log(value)
        if(value == '') {
          return callback(new Error('请输入验证码'));

        }else if(value.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
          console.log( value.toUpperCase())
          console.log(code)
          this.createCode();//刷新验证码
          this.loginFormData.img_code = '';
          return callback(new Error('验证码不正确'))

        }else { //输入正确时
          callback();
        }

      }
      var checkEmail = (rule,value,callback)=>{
        let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if(value == ''){
         return callback(new Error('请输入邮箱'))
       } else if(!reg.test(value)){
          callback(new Error('邮箱格式错误'));
        }else {
          callback()
        }
      }
      return {
        checked: true,
        checkCode:'',
        img_code_url: imgUrl + Math.random(),
        settled_progress: 0,
        loginFormData: {
          password: '',
          email: '',
          img_code: '',
        },
        rules2: {
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          password: [
            { validator: checkPass, trigger: 'blur' }
          ],
          img_code: [
            { validator: checkImgCode, trigger: 'blur' }
          ],
        }
      }
    },
    created() {
      this.createCode()
      this.$store.commit('putData',{key:'uid',value:'22'}) //
      // 获取登陆状态：
      // let token_key = getCookie('bId_token_key')
      // if (!token_key) {
      //   // window.location = 'https://www.baidu.com/'
      // }
      //
      // // 1:请补全信息,2:等待审核通过,3:审核通过,4:审核未通过,5：审核通过
      // if (token_key) {
      //   getIndexInfos()
      //     .then((result) => {
      //       console.log(result);
      //       let status = result.settled_progress
      //       if (status == 1 || status == 2 || status == 4) {
      //         // this.$router.replace({name:'apply.join'})
      //       }
      //       if (status == 3 || status == 5) {
      //         // this.$router.replace({name:'joined.index'})
      //       }
      //     })
      // }
      // this.token_key = token_key
      // this.process = process
      // process  1  2  3  4  5
      // 1请完善信息
      // 2审核中
      // 4审核未通过

      // 3审核通过
      // 5审核通过

    },
    computed: {},
    methods: {
      // 图片验证码
      createCode() {
        code = "";
        var codeLength = 4;// 验证码的长度
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数
        for (var i = 0; i < codeLength; i++) {//循环操作
          var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
          code += random[index];//根据索引取得随机数加到code上
        }
        this.checkCode = code;//把code值赋给验证码
      },
      //  刷新图片二维码 前端实现
      // reGetPicCode() {
      //   this.img_code_url = imgUrl + Math.random()
      //   // console.log(11)
      //   // this.getPicCodeData()
      // },

      checkLogin() {
      },
      submitForm(formName) {
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(ruleForm2);
            let params = {
              code: _this.loginFormData.img_code,
              password: _this.loginFormData.password,
              username:_this.loginFormData.email
            }
            doLogin(params)
              .then((result) => {
                  window.localStorage.setItem('X-status',result.data.settled_progress)
                  window.localStorage.setItem('X-email',result.data.email)
                  let status = result.data.settled_progress
                  if (status == 1 || status == 2 || status == 4|| status == 6 ) {
                    this.$router.replace({name:'apply.join'})
                  }
                  else if (status == 5|| status == 3) {
                    this.$router.replace({name:'joined.index'})
                  }else{
                    EventBus.$emit('notice',{
                      type:'message',
                      message:'状态异常'
                    })
                  }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      //  刷新图片二维码 前端实现
      reGetPicCode() {
        this.img_code_url = imgUrl + Math.random()
      },
      goRegister(){
        this.$router.push({
          name:'register'
        })
      },
      goFindPass(){
        this.$router.push({
          name:'findpassword'
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
    background: url("../../assets/img/Banner.jpg");
    .login-box {
      position: absolute;
      top: 10px;
      right: 0;
      box-sizing: border-box;
      background: #fff;
      padding-right: 20px;
      padding-top: 20px;
      width: 320px;
    }
  }


</style>
