<template>
  <div>
      <h3 class="ai-title">准备好材料,入住更方便</h3>
      <div class="ai-main">
          <div ai-box>
              <div class="small-box">
                 <h3 class="title">身份证照片</h3> 
                 <div class="info">证件照(正反面) 需清晰可辨认,不得使用复印件</div>
                 <div class="pic">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                 </div>
              </div>
              <div class="small-box">
                 <h3 class="title">身份证照片</h3> 
                 <div class="info">证件照(正反面) 需清晰可辨认,不得使用复印件</div>
                 <div class="pic">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                 </div>
              </div>
              <div class="small-box">
                 <h3 class="title">身份证照片</h3> 
                 <div class="info">证件照(正反面) 需清晰可辨认,不得使用复印件</div>
                 <div class="pic">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                 </div>
              </div>

          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "apply-info",
  data() {
    return {
      imageUrl: ''
    };
  },
  methods:{
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
        console.log(1)
      }
  }
};
</script>
<style lang='less'>
.ai-title {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  margin-top:10px;

}
.ai-main {
  // height: 100px;
  background: #fff;
  .small-box{
    display:flex;
    border-bottom:1px solid #ccc;
    margin-top:3px;
    transition:all 0.3s;
    &:hover{
      box-shadow: 10px 10px 5px #ccc;
    }
  }
  .title{


    text-align:center;
    line-height:178px;
    flex:1
  }
  .info{
    text-align:center;
    line-height:178px;
    flex:2
        
  }
  .pic{
    // display:inline-block;
    // vertical-align: middle;
    flex:1
      
  }

}



// 图片预览style
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
