<template>
  <div class="nav_left">
    <el-row>
      <el-col :span="6">
        <memberMenu></memberMenu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .nav_left{
    margin-top: 15px;
  }
</style>

<script>
  import memberMenu from './menu.vue';
  export default{
    components:{
      memberMenu:memberMenu, //加入组件
    }
  }
</script>
