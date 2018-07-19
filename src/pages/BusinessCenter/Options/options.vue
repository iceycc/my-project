<template>
  <div>
    <h3 class="small-title">意见反馈</h3>
    <div class="text-box">
      <el-input
        class="text-tarea"
        type="textarea"
        :rows="10"
        placeholder="如果您在使用中有任何问题，可以写下来反馈给我们，我们将持续改进"
        v-model="textarea">
      </el-input>
      <el-input v-model="telephone" placeholder="您可以留下电话，方便我们联系您"></el-input>
    </div>

    <div class="op-btn">
      <el-button type="primary" @click="submitFeedBack">提交</el-button>
    </div>
  </div>
</template>
<script>
  import {postFeedBack} from "@/api/api";
  import EventBus from '@/config/EventBus';

  // import
  export default {
    name: '',
    data() {
      return {
        textarea: '',
        telephone: ''

      }
    },
    created() {

    },
    methods: {
      submitFeedBack() {

        if (!this.textarea.replace(/^\s+|\s+$/g, "")) {
          EventBus.$emit('notice', {
            type: 'message',
            message: '意见反馈不能为空'
          })
          return
        }
        if (this.textarea.length < 10) {
          EventBus.$emit('notice', {
            type: 'message',
            message: '意见反馈不能少于10个字'
          })
          return
        }
        if (!this.telephone.replace(/^\s+|\s+$/g, "")) {
          EventBus.$emit('notice', {
            type: 'message',
            message: '手机号不能未空'
          })
          return
        }
        if (!/^1[0-9]{10}$/.test(this.telephone)) {
          EventBus.$emit('notice', {
            type: 'message',
            message: '手机号格式不正确'
          })
          return
        }

        let params = {
          content: this.textarea,
          telephone: this.telephone
        }
        postFeedBack(params)
          .then((result) => {
            // console.log(result);
            if (result.code == 0) {
              EventBus.$emit('notice', {
                type: 'message',
                message: '提交反馈成功'
              })
              this.textarea = ''
              this.telephone = ''
            } else {
              EventBus.$emit('notice', {
                type: 'message',
                message: result.message
              })
            }

          })
      }
    }
  }
</script>
<style lang="scss" scoped>

  .text-box {
    padding: 20px;
    background: #fff;
    .text-tarea {
      margin-bottom: 10px;
    }
  }
  .small-title{
    margin-top: 10px;
  }
  .op-btn {
    padding-top: 20px;
    text-align: center;
    .el-button {
      width: 100px;
    }
  }

</style>
