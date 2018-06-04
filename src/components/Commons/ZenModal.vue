<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="C">
        <slot>默认模态框内容</slot>
      <i class="modal-close" @click="$emit('fireclose')">x</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "zen-modal",
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>

  .modal{
    position: fixed;
    left: 0;
    top: 0;
    background: RGBA(0,0,0,0.4);
    width: 100%;
    height: 100%;
    z-index: 1001;
  }
  .C{
    position:absolute;
    padding: 30px;
    background: #fff;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -150px;
    width: 500px;
    height: 300px;
    z-index: 1003;
    .modal-close{
      position:absolute;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      width: 30px;
      height: 30px;
      line-height: 30px;
      right: 10px;
      top: 0px;
      color: #ccc;
      font-size: 30px;
    }

    img{
      width:100%;
      height: 100%;
    }
  }

</style>

