<template>
  <div class="navbar">
    <el-row>
      <el-col :span="18">
        <el-menu theme="light" default-active="/" class="el-menu-demo" mode="horizontal" :router="true">
          <el-menu-item :index="item.nav_url" v-for="item in this.$store.state.ResModules.NavBar" :key="item.id">{{item.nav_text}}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        <el-menu theme="light" default-active="/" class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="3" v-if="showUserNameLabel" @click="userLoginAndReg">
            <!--<router-link to="" @click="userLoginAndReg">注册/登录</router-link>-->
            注册/登录
          </el-menu-item>
          <el-menu-item index="3" v-if="!showUserNameLabel">
            <a href="##">当前登录用户：{{this.$store.state.UsersModule.currentUser.UserName}}</a>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .navbar{
    margin-bottom: 20px;
  }
</style>

<script>
  export default{
    created(){
        // alert(this.functions.getVersion());
      this.$store.dispatch('loadData',{url:this.APIConfig.API_NavBar,key:'NavBar'})
    },
    computed:{
      showUserNameLabel(){ // 是否显示用户登录标签
        if(this.$store.state.UsersModule.currentUser.UserName == "guest"){
          return true
        }else {
          return false;
        }
      }
    },
    methods:{
      userLoginAndReg(){
        console.log("userLoginAndReg");
        // 这里以后可以判断是否做登录
        this.$router.push({ path: '/users' })
      }
    }
  }
</script>
