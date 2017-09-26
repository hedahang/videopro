<template>
  <div>
    <el-dialog title="图片预览" v-model="isShowPic" size="small">
      <span>
        <img :src="video.v_pic.url" style="max-width: 100%;max-height: 100%">
      </span>
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>

    <el-form :model="video"  label-width="100px" class="demo-ruleForm">
      <el-col :span="12">
        <el-form-item label="视频标题" prop="v_title">
          <el-input v-model="video.v_title" placeholder="请输入视频标题"></el-input>
        </el-form-item>
        <el-form-item label="视频分类" prop="v_class">
          <el-select v-model="video.v_class" placeholder="请选择">
            <el-option
              v-for="item in this.$store.getters.navForVideoClass"
              :label="item.nav_text"
              :value="item.nav_id"
              :key="item.id"
            >
              {{item.nav_text}}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="视频封面" prop="v_pic">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="标签" prop="v_tags">
          <input-tag :tags="video.v_tags" placeholder="输入标签后回车"></input-tag>
        </el-form-item>
        <el-form-item label="视频上传">
          <div id="videoContainer">
            <el-button id="selectVideo" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
          </div>
        </el-form-item>
      </el-col>
      <el-col :span="12"></el-col>

    </el-form>
  </div>
</template>

<style>
  .vue-input-tag-wrapper .new-tag{
    width: 92px !important;
  }
</style>

<script>
  //引入组件
  import InputTag from 'vue-input-tag';

  export default{
    data(){
      return {
        video:{
          v_title:'',
          v_class:2,
          v_pic:{name:'',url:''},
          v_tags:[],
        },
        isShowPic: false,
      }
    },
    methods: {
      handleRemove(file, fileList) {
        //移除图片
//        console.log(file, fileList);
        this.video.v_pic.url = '';
        this.video.v_pic.name = '';
      },
      handlePreview(file) {
        //预览图片
//        console.log(file);
        this.video.v_pic.url = file.url;
        this.video.v_pic.name = file.name;
        this.isShowPic = true;
      },
      handleSuccess(res, file){
        //响应成功
        console.log(file);
        if(file.status == "success"){
          //保存后端返回来的数据
          this.video.v_pic.url = file.url;
          this.video.v_pic.name = file.name;
          this.video.v_pic.id = file.uid;
        }else{
          alert('上传失败,,请稍后再试');
        }
      },
      testBtn(){
        console.log(this.video.v_tags);
      }
    },
    components:{
      'input-tag':InputTag, //注册组件
    }
  }
</script>
