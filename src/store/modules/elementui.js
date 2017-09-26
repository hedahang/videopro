import Vue from "vue";

const state = {
  hot:[],
}
const mutations = {
  //写个方法给hot数组设置数据
  setHot(state, data){
    state.hot = data;
  }
}
const actions = {
  //写个方法,做http请求
  getHot(content){
    //loading效果
    let loading = Vue.prototype.$loading({text:"玩命加载中..."});

    Vue.http.get("http://localhost:3000/hot",{},{emulateJSON:true})
      .then(
        function (res) { //请求成功的回调函数
          setTimeout(function(){  // 模拟网速很卡
            //先结束loading效果
            loading.close();
            //调用设置hot数据的方法,把请求成功的数据给hot数组
            content.commit("setHot",res.body);
          },2000)
        },function(){}
      );
  }
}
const getters = {

}

export default {
  state,
  getters,
  mutations,
  actions,
}
