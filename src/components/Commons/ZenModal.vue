<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="C">
        <slot>默认模态框内容</slot>
    </div>
    <button class="modal-close" @click="$emit('fireclose')">xxx</button>
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
    left: 50%;
    top: 50%;
    width: 500px;
    height: 300px;
    z-index: 1003;

    img{
      width:100%;
      height: 100%;
    }
  }

</style>
