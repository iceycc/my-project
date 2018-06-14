<template>
  <div class="main" style="background: #f5f5f5">
    <el-row>
      <el-col :span="12" style="padding-top:30px;padding-left: 50px;font-size: 14px">
        <div style="width:70%;border-right: 1px solid #fff;padding-right: 20px;box-sizing: border-box" >
          <h4 style="font-size: 20px;margin-bottom: 30px">忘记密码了？</h4>
          <p>如果你忘记优装美家账号密码，请填写你的注册邮箱，根据提示即可完成密码重设。</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="login-box">
          <h3 style="padding-bottom: 10px;margin-bottom:10px;border-bottom: 1px solid #fff">重置密码</h3>

          <el-form :model="loginFormData" status-icon :rules="rules" ref="loginFormData" label-width="100px" class="demo-ruleForm">
            <el-form-item label="Email" prop="email">
              <el-input class="mp-input" type="text" v-model="loginFormData.email" auto-complete="off" placeholder="输入Email"></el-input>
              <el-button @click="postMsgCodeToTel" :disabled="disabled">{{sendMsgText}}</el-button>
            </el-form-item>
            <el-form-item label="邮件验证码" prop="msg_code">
              <el-input class="mp-input" v-model.number="loginFormData.msg_code" placeholder="输入邮箱验证码"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
              <el-input class="mp-input" type="password" v-model="loginFormData.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input class="mp-input" type="password" v-model="loginFormData.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         style="width: 100%"
                         @click="submitForm('loginFormData')">确定提交</el-button>
            </el-form-item>
          </el-form>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {rePassword,sendEmail} from '@/api/api'
  import EventBus from '@/config/EventBus'
  var times = 5
  export default {
    name: "",
    data(){
      // 设置校验规则
      var validateEmail = (rule, value, callback) => {
        let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if (value === '') {
          callback(new Error('请输入Email'));
        }else if(!reg.test(value)) {
          callback(new Error('邮箱格式错误'));

        } else
         {
          callback();
        }
      };
      var validateImg = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginFormData.checkPass !== '') {
            this.$refs.loginFormData.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginFormData.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
        msgTime: times,
        disabled: false,
        sendMsgText: '发送邮件验证码',
        dialogTableVisible:false,
        loginFormData:{
          email:'',
          msg_code:'',
          pass:'',
          checkPass:''
        },
        rules: {
          email: [
            { validator: validateEmail, trigger: 'blur' }
          ],
          msg_code: [
            { validator: validateImg, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      }
    },
    methods:{


      submitForm(formName) {
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(ruleForm2);
            let params = {
              email: _this.loginFormData.email,
              code: _this.loginFormData.msg_code,
              pwd: _this.loginFormData.checkPass
            }
            rePassword(params)
              .then((result) => {
                console.log(result);
                if(result.code == 0){
                  this.$router.push({name:'login'})
                  EventBus.$emit('notice',{
                    type:'message',
                    message:result.message
                  })
                }
                else {
                  this.loginFormData.msg_code = ''
                  EventBus.$emit('notice',{
                    type:'message',
                    message:result.message + '请重新获取验证码'
                  })
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      postMsgCodeToTel() {

        this.msgTime = times
        let msgtime = this.msgTime
        if (this.loginFormData.email == '') {
          return
        }
        let reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if (!reg.test(this.loginFormData.email)) {
          return
        }
        let params = {
          email: this.loginFormData.email
        }
        sendEmail(params)
          .then((result) => {
            console.log(result)
            EventBus.$emit('notice',{
              type:'message',
              message:result.message
            })
          })
        this.disabled = true
        this.sendMsgText = msgtime + 's'
        var timer = setInterval(() => {
          msgtime--
          this.sendMsgText = msgtime + 's'
          if (msgtime == -1) {
            clearTimeout(timer)
            this.disabled = false
            this.sendMsgText = '重新发送验证码'
            return
          }
        }, 1000)
      },
    }
  }
</script>

<style lang="scss" scoped>

  .main {
    background: #fff;
    width: 1220px;
    height: 480px;
    margin: 10px auto;
    background: #3a8ee6;
    .login-box{
      box-sizing: border-box;
      padding-right: 20px;
      padding-top: 20px;
      width:400px;

    }
  }
</style>
