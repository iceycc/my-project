<template>
  <div class="id-card-box">
    <!--图片预览框-->
    <div class="pre-img" @click="show">
      <b v-if="!preImgUrl">{{img_name}}</b>
      <img :src="preImgUrl" alt="">
    </div>
    <!--文件上传框-->
    <div class="upload">
      <i class="iconfont icon-jiahao"></i>
      <input type="file" name="file" class="upload-input" @change="changeUrl($event)">
    </div>
    <!--提示文字-->
    <div class="info-text">
    <p>{{info_text}}</p> <br>
    <slot></slot>
    </div>
    <!--实例图片-->
    <div class="show-img">
      <img :src="slsrc" alt="">
    </div>
    <!---->
    <zen-modal @fireclose="showModal = false" v-if="showModal">
      <img :src="preImgUrl" alt="">
    </zen-modal>
  </div>

</template>

<script>
  import ZenModal from '@/components/Commons/ZenModal.vue'
  import EventBus from '@/config/EventBus';
  import {postImg} from '@/api/api'


  export default {
    name: "id-card-box",
    props: ['img_name', 'info_text', 'info_key','defaultUrl','info_key_img','slsrc','msg_text'],
    components: {
      'zen-modal': ZenModal
    },
    data() {
      return {
        value: '',
        imgInfo: {},
        preImgUrl: '',
        showModal: false
      }
    },
    created(){
      this.preImgUrl =this.defaultUrl || ''
    },
    mounted() {
    },

    methods: {

      // 图片预览及获取url
      changeUrl($event) {
        // 1 获取当前上传图片文件
        let file = $event.target.files[0]
        // 2 创建img对象
        var img = new Image()
        // 3 得到bolb 对象路径 可当成普通的文件路径一样使用 复制给src
        this.preImgUrl = window.URL.createObjectURL(file)

        this.postImgHandle(file)


      },
      postImgHandle(file) {
        // console.log(file);
        let params = new FormData()
        params.append('file', file)
        let config = {
          headers:{'Content-Type':'multipart/form-data;'},
          transformRequest: [function (data) {
              return data;
          }],
        }; //添加请求头
        postImg(params,config)
          .then((result) => {
            // // console.log(result);
            // 绑定
            this.$emit('changeUrl', {
              fileId:result.data.name,
              prop: this.info_key.split('.')[1] || 'nothing',
              propImg:this.info_key_img.split('.')[1] || 'nothing'
            })
          })
      },
      show() {
        // console.log(1111)
        if(this.preImgUrl!= ''){
          this.showModal = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .id-card-box {
    width: 100%;
    height: 90px;
    border: 1px solid #aeaeae;
    display: flex;
    line-height: 0;
    .pre-img {
      position: relative;
      cursor: pointer;
      width: 160px;
      height: 90px;
      background: #ddd;
      margin-right: 10px;
      b {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 20px;
        line-height: 100px;
        color: #aeaeae;
        text-align: center;
      }
      img {
        width: 100%;
        height: 100%;
      }

    }
    .upload {
      position: relative;
      width: 90px;
      height: 90px;
      background: #ddd;
      overflow: hidden;
      cursor: pointer;
      i::before {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        font-size: 80px;
        line-height: 100px;
        text-align: center;
        color: #ccc;
      }
      .upload-input {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0;
        /*visibility: hidden;*/
      }
    }
    .info-text {
      position: relative;
      flex: 1;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      text-align: center;
      padding-top:40px ;
    }
    .text-msg{

    }
    .show-img {
      width: 160px;
      height: 88px;
      background: #ddd;
      border:1px solid #ccc;
      text-align: center;
      line-height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }

  }


</style>
