const state = {
  newslists:{},
  newsdetail:[
    {newsid:"101",agree:99,pubtime:"2016-10-29",title:"探索之路Store  ",desc:"是手机团队的探索之路","isdeleted":false},
    {newsid:"102",agree:92,pubtime:"2016-10-28",title:"系统之战Store  ",desc:"如何支持业务解决","isdeleted":false},
    {newsid:"103",agree:93,pubtime:"2016-10-27",title:"大文件存储Store  ",desc:"背后的你不得不知的技术","isdeleted":true},
    {newsid:"104",agree:98,pubtime:"2016-10-26",title:"飞天进化Store  ",desc:"阿里巴巴技术委员会","isdeleted":false},
  ],
}
const mutations = {
  showUserName(state){
    alert(state.user_name);
  },
  setAgree(state,newsid){
    state.newsdetail.forEach(function(val){
      if(val.newsid == newsid){
        val.agree++
      }
    })
  }
}
const actions = {
  agree(context,newsid){
    // 处理业务
    // 调用上面setAgree方法更新点赞数
    context.commit("setAgree",newsid.newsid);
  }
}
const getters = {
  getNews(state){
    return state.newsdetail.filter(function(news){
      return !news.isdeleted;
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
