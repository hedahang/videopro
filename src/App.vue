<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  // 引入elmenetui的导航组件
  import navbar from "./views/member/navbar.vue";

  export default {
    name: 'app',
    //加载组件
    components:{navbar}
  }
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
