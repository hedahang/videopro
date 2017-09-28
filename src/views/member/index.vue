<template>
  <div>
    <navbar></navbar>
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
</style>

<script>
  // 引入elmenetui的导航组件
  import navbar from "./navbar.vue";
  import memberMenu from './menu.vue';

  export default{
    components:{
      memberMenu:memberMenu, //加入组件
      navbar:navbar
    }
  }
</script>
