<template>
  <div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="新密码" prop="pass">
        <el-input class="mp-input" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input class="mp-input" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  label="图形码" prop="img_code">
        <el-input class="mp-input" v-model="ruleForm2.img_code"></el-input>
        <el-button @click='createCode'>{{checkCode}}</el-button>
        <!--<img class="code-img" :src="img_code_url" alt="" @clicl="reGetPicCode">-->
      </el-form-item>
      <el-form-item label="短信验证码" prop="msg_code">
        <el-input class="mp-input" v-model.number="ruleForm2.msg_code"></el-input>
        <el-button @click="postMsgCodeToTel" :disabled="disabled">{{sendMsgText}}</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      </el-form-item>
    </el-form>
    <!--<timer-btn ref="timerbtn" class="btn btn-default" v-on:run="sendCode"-->
               <!--:disabled="disabled" :second="60"></timer-btn>-->
    <!--todo 短信验证码-->
    <!--<message-code ref="timerbtn" class="btn btn-default" v-on:run="sendCode" ></message-code>-->

  </div>
</template>
<script>
  var code;
  var times = 5
  import {getPicCode,getMsgCode} from '@/api/api'
  export default {
    data() {
      var checkImgCode = (rule, value, callback) => {
        // 失焦验证图和密码
        value.toUpperCase();//取得输入的验证码并转化为大写
        console.log(value)
        if(value == '') {
          return callback(new Error('请输入验证码'));

        }else if(value.toUpperCase() != this.checkCode ) { //若输入的验证码与产生的验证码不一致时
          console.log( value.toUpperCase())
          console.log(code)
          this.createCode();//刷新验证码
          this.ruleForm2.img_code = '';
          return callback(new Error('验证码不正确'))

        }else { //输入正确时
          callback();
          // $(".login_content1 span:eq(2)").addClass("disappear");
          // $(".login_content1 span:eq(2)").text("请输入验证码")
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateMsg = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入短信验证码'));
        } else {
          callback();
        }
      };
      return {
        disabled:false,
        sendMsgText:'发送短信验证码',
        checkCode:'',
        img_code_url:'',
        ruleForm2: {
          pass: '',
          checkPass: '',
          img_code: '',
          msg_code:''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          img_code: [
            { validator: checkImgCode, trigger: 'blur' }
          ],
          msg_code:[
            { validator: validateMsg, trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      // this.getPicCodeData()
      this.createCode()
    },
    methods: {
      // 图片验证码
      createCode(){
        code = "";
        var codeLength = 4;//验证码的长度
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
          'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {//循环操作
          var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
          code += random[index];//根据索引取得随机数加到code上
        }
        this.checkCode = code;//把code值赋给验证码
      },
      //  刷新图片二维码 前端实现
      reGetPicCode(){
        this.getPicCodeData()
      },
      // 获取图片二维码 前端实现了
      getPicCodeData(){
        getPicCode()
          .then((result)=>{
            console.log(result);
          })
      },
      postMsgCodeToTel(){
        let params = {}
        // getMsgCode(params)
        //   .then((result)=>{
        //     console.log(result)
        //   })
        this.disabled = true
        this.sendMsgText =times + 's'
        var timer = setInterval(()=>{
          times--
          this.sendMsgText =times + 's'
          if(times == -1){
            clearTimeout(timer)
            this.disabled = false
            this.sendMsgText ='重新发送验证码'
            return
          }
        },1000)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {

            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style lang="scss" scoped >
  .mp-input{
    width: 200px;
  }
  .code-img{
    display: inline-block;
    margin-left: 30px;
    width: 80px;
    height: 30px;
    vertical-align: middle;
    background: #0099ff;
  }
</style>
