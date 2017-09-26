import Vue from "vue";

const state = {
  UserForm:{truename:"", age:"", birthday:""},
  CheckRules:{
    truename:[
      {required:true, message:"请输入活动名称", trigger:'blur'},
      {min:3, max:5, message:"必须3-5个字符", trigger:'blur'}
    ],
    age:[{validator:(rule,value,callback)=>{
      if(/^\d+$/.test(value) == false){
        callback(new Error("年龄只能输入数字"));
      }else{
        callback();
      }
    }, trigger:'blur'}]
  },
}
const mutations = {

}
const actions = {
  setUserInfo(context,routerConfig){
    // 路由跳转
    //routerConfig 引入全局路由
    routerConfig.routerConfig.push({name:"news"});
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
