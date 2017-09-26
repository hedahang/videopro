<template>
  <div>
    <el-menu theme="light" default-active="/" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item :index="item.nav_url" v-for="item in this.$store.state.ResModules.NavBar" :key="item.id">{{item.nav_text}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default{
    created(){
        // alert(this.functions.getVersion());
      this.$store.dispatch('loadData',{url:this.APIConfig.API_NavBar,key:'NavBar'})
    }
  }
</script>
