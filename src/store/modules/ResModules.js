import Vue from "vue";

const state = {
  NavBar:[] //导航栏
}
const mutations = {
  //设置数据的方法
  setData(state,{key,data}){
    state[key] = data;
  }
}
const actions = {
  //加载远程数据的方法
  loadData(context,{url,key}){ //params是一个对象参数,里面包含url
    Vue.http.get(url).then((rs)=>{
      //alert(rs.body);
      context.commit('setData',{key:key,data:rs.body});
    },(rs)=>{
      console.log('获取数据失败');
    });
  }
}
const getters = {
  navForVideoClass:state=>{
    return state.NavBar.filter(item=>{
      return item.nav_text != '首页';
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
