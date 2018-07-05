<template>

  <div>

    <div
      class="registration">

      <div
        class="registration_logo">

        <div></div>

      </div>


      <!--输入信息-->

      <div
        class="registration_account login_content1">

        <div
          class="registration_phone_number">

          <!--<i class="ico ico_user"></i>-->

          <img
            class="ico_user"
            src="../../static/img/product_07.jpg"
            alt=""/>

          <input
            class="registration_user_number"
            v-model= "LUserPhone"
            @blur="checkLPhone"
            type="text"
            value="请输入您的手机号码："/>

          <span
            class="tishixiaoxi disappear">请输入手机号。</span>


        </div>

        <div
          class="registration_you_password">

          <img
            class="ico_you"
            src="../../static/img/product_07.jpg"
            alt=""/>

          <input
            class="registration_number_password"
            v-model="LUserPsd"
            @blur="checkLPsd"
            type="text"
            value="请输入您的密码："/>

          <span
            class="tishixiaoxi disappear">请输入密码。</span>


        </div>

        <input
          type="text"
          placeholder="请输入验证码"
          class="yanzhengma_input"
          @blur="checkLpicma"
          v-model="picLyanzhengma"><input
        type="button"
        id="code"
        @click="createCode"
        class="verification1"
        v-model="checkCode"/>
        <br>

        <span
          class="tishixiaoxi disappear">请输入验证码。</span>

        <div
          class="registration_account_password">

          <input
            class="registration_account_input"
            type="checkbox"/>

          <p
            class="registration_password">记住密码</p>

        </div>

      </div>


      <!--登录按钮-->

      <div
        style="text-align:center;">

        <input
          class="registration_button"
          @click="Login"
          type="button"
          value="登 录"/>

      </div>

      <!--快捷登录-->

      <div
        style="text-align:center;">

        <input
          class="registration_shortcut_button"
          type="button"
          value="快 捷"/>

      </div>


      <!--忘记-->

      <div
        class="registration_bom_password">

        <p
          class="registration_accounts">还没有账号</p>

        <a
          class="registration_speediness"
          href="">快速注册</a>

        <a
          class="registration_forget"
          href="">忘记密码</a>

      </div>

    </div>

  </div>


</template>


<script>

  //import Nav from '../components/Nav.vue'

  import '../../static/css/registration.css'

  import '../../static/js/jquery-1.7.2.min.js'

  var code ;
  //在全局定义验证码


  export default {

    name: 'login',

    data () {

      return {

        userPhone:'',

        dialog: false,

        LUserPhone:'',

        LUserPsd:'',

        picLyanzhengma:'',

        checkCode:''


      }

    },

    methods:{

      goto_protocol(){

        this.$router.push({path:"/protocol"})


      },

      checkUserPhone(){

        if(this.userPhone ==
          ''){

          // console.log(111)

          $(".hiddenTanchuang").removeClass('hiddenTanchuang')

        }

      },

      hiddenTanchuang(){

        $(".tanchuang").addClass("hiddenTanchuang")

      },


// 验证登陆手机号格式

      checkLPhone(){

        if(this.LUserPhone ==
          ''){

          $(".login_content1 span:eq(0)").removeClass("disappear");

          $(".login_content1 span:eq(0)").text("请输入手机号。")


        }else if(this.LUserPhone.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==0){

          $(".login_content1 span:eq(0)").addClass("disappear")

          return true;


        }else{

          $(".login_content1 span:eq(0)").removeClass("disappear");

          $(".login_content1 span:eq(0)").text("请输入正确手机号。")

        }

      },

//验证登陆密码格式

      checkLPsd(){

        if(this.LUserPsd ==
          ''){

          $(".login_content1 span:eq(1)").text("请输入密码");

          $(".login_content1 span:eq(1)").removeClass("disappear")


        }else if(this.LUserPsd.search(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/)
          == 0){

          $(".login_content1 span:eq(1)").addClass("disappear")

          return true;



        }else{

          $(".login_content1 span:eq(1)").removeClass("disappear");

          $(".login_content1 span:eq(1)").text("密码必须6-20位，包含字母与数字")


        }

      },

// 图片验证码

      createCode(){

        code = "";

        var codeLength =
          4;//验证码的长度

        var random =
          new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',

            'S','T','U','V','W','X','Y','Z');//随机数

        for(var
              i = 0;
            i < codeLength;
            i++) {//循环操作

          var index =
            Math.floor(Math.random()*36);//取得随机数的索引（0~35）

          code += random[index];//根据索引取得随机数加到code上

        }

        this.checkCode =
          code;//把code值赋给验证码

      },

// 失焦验证图和密码

      checkLpicma(){


        this.picLyanzhengma.toUpperCase();//取得输入的验证码并转化为大写

        if(this.picLyanzhengma ==
          '') {

          $(".login_content1 span:eq(2)").text("请输入验证码")

          $(".login_content1 span:eq(2)").removeClass("disappear");


        }else if(this.picLyanzhengma.toUpperCase() !=
          this.checkCode ) {
//若输入的验证码与产生的验证码不一致时

          // console.log(
            this.picLyanzhengma.toUpperCase())

          // console.log(code)

          $(".login_content1 span:eq(2)").text("验证码不正确")

          $(".login_content1 span:eq(2)").removeClass("disappear");

          this.createCode();//刷新验证码

          this.picLyanzhengma =
            '';

        }else { //输入正确时

          alert("验证码正确")

          $(".login_content1 span:eq(2)").addClass("disappear");

          $(".login_content1 span:eq(2)").text("请输入验证码")

          return true;


        }


      },

      Login(){

        if(this.checkLPhone() ==true &&
          this.checkLPsd() ==
          true && this.checkLpicma() ==
          true){

          var that =
            this;

          $.ajax({

            type:"POST",

            url:this.HOST+"/user/logincheck",

            data:{"loginmobileNo":this.LUserPhone,"loginpassword":this.LUserPsd},

            dataType:"json",

            success:function(data){

              // console.log(data);

              if(data.resultflag ==
                "F"){

                $(".login_content1 span:eq(0)").removeClass("disappear");

                $(".login_content1 span:eq(0)").text("手机号或密码错误。")

              }else{

                that.$router.push({path:"/brain-assetList1"})

              }

            }

          })

        }

      }


    },

    created(){

      this.createCode();

    }

  }

</script>


<style
  scoped>

  .yanzhengma_input{

    width: 170px;

    padding: 5px
    0 5px
    10px;

    margin-left:
      30px;

    height: 30px;

    /* margin-top: 25px; */

    border: 1px
    solid #e6e6e6;


  }

  .disappear{

    visibility:hidden;

  }

  .verification1{

    vertical-align:
      middle;

    transform: translate(-15px,0);

    width: 102px;

  }

  .tishixiaoxi{

    font-size: 14px;

    color:#ed711f;

    display: block;

    margin-left:
      30px;

    line-height:
      30px;


  }

  #code{

    font-size: 18px;

    letter-spacing:3px;

    color: #053d84;

    background: #f2f2f5;

    margin-left:
      20px

  }

</style>
