<template>
    <div class="bf">
        <left-bar class="bf-left"></left-bar>  
        <router-view class="bf-main"></router-view>
    </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped>
.bf{
	position: relative;
}
.bf-main {
	width: 100%;
	margin-left:300px; 
	height: 100%;
	box-sizing: border-box;
	padding-left:20x;
	padding-top:32px;
}
.bf-left {
	position: absolute;
	left:0;
	top:0;
}

</style>
