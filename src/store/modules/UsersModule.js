import Vue from "vue";

const state = {
  currentUser:{
    get UserName(){
      return localStorage.getItem("currentUser_name");
    },
    get UserToken(){
      return localStorage.getItem("currentUser_token");
    }
  }
}
const mutations = {
  setUser(state,{user_name,user_token,callback}){
    // 在这里把用户名和token保存起来
    localStorage.setItem("currentUser_name",user_name);
    localStorage.setItem("currentUser_token",user_token);

    // 保存之后，执行回到函数
    callback();
  }
}
const actions = {
  userLogin(context,{user_name,user_pass,callback}){
    // 发送get请求做权限认证(真实开发建议用post的方式)
    //let url = "http://localhost:3000/token?client_appid="+user_name+"&client_appkey="+user_pass;
    let url = "http://localhost:3000/token";
    //console.log(url);

    Vue.http.get(url)
      .then((res)=>{
        if (res!=null && res.body!=undefined && "access-token" in res.body){
          var token = res.body["access-token"];
          if (token != ""){
            // 后端API验证通过
            // 调用上面mutations里定义的方法
            context.commit("setUser",{"user_name":user_name,"user_token":token,callback});
          }
        }else{
          alert("用户名密码错误");
        }
      },(res)=>{
        alert("请求失败进入这里")
      });
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
