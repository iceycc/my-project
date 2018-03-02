<template>
  <div>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="新密码" prop="pass">
        <el-input class="mp-input" type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input class="mp-input" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  label="图形码" prop="age">
        <el-input class="mp-input" v-model.number="ruleForm2.age"></el-input>
        <img class="code-img" src="" alt="">
      </el-form-item>
      <el-form-item label="短信验证码" prop="age">
        <el-input class="mp-input" v-model.number="ruleForm2.age"></el-input>
        <a class="send-code" href="javascript:;">发送验证码</a>
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
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
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
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      sendCode:function(){
        var _this= this;
        this.$refs.timerbtn.setDisabled(true); //设置按钮不可用
        this.$axios.get('/user?ID=12345')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        // this.$axios.get("sys/sendCode?_"+$.now(),function(data){
        //   if(data.status){
        //     _this.$refs.timerbtn.start(); //启动倒计时
        //   }else{
        //     _this.$refs.timerbtn.stop(); //停止倒计时
        //   }
        // });
      },
    }
  }
</script>

<style lang="scss">



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
  .send-code{
    color: #0099ff;
    margin-left: 30px;
  }
</style>
