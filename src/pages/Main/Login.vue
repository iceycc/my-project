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
              <img class="code-img" :src="img_code_url" alt="" @click="reGetPicCode" style="display: inline-block;width: 70px;height: 40px;background: #1afa29">
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
  export default {

    data() {
      // 设置校验规则
      var checkImgCode = (rule, value, callback) => {
        // 失焦验证图和密码
        if(value == '') {
          return callback(new Error('请输入'));
        }else {
          callback()
        }

      };
      return {
        checked: true,
        img_code_url: imgUrl + Math.random(),
        settled_progress: 0,
        loginFormData: {
          password: '',
          email: '',
          img_code: ''
        },
        rules2: {
          email: [
            { validator: checkImgCode, trigger: 'blur' }
          ],
          password: [
            { validator: checkImgCode, trigger: 'blur' }
          ],
          img_code: [
            { validator: checkImgCode, trigger: 'blur' }
          ],
        }
      }
    },
    created() {
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

      // 5审核通过
      // 3补全信息

    },
    computed: {},
    methods: {
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
                console.log(result);
                if(result.code ==0){
                  EventBus.$emit('notice',{
                    type:'message',
                    message:result.message
                  })
                  window.localStorage.setItem('X-email',result.data.email)
                  window.localStorage.setItem('X-status',result.data.settled_progress)
                  let status = result.data.settled_progress
                  if (status == 1 || status == 2 || status == 4) {
                    this.$router.replace({name:'apply.join'})
                  }
                  if (status == 3 || status == 5) {
                    this.$router.replace({name:'joined.index'})
                  }
                }else {
                  EventBus.$emit('notice',{
                    type:'message',
                    message:result.message
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
