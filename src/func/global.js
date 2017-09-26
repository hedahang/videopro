import functions from './function'
import APIConfig from './../config/APIConfig';

export default{
  //Vue开发插件必须有的方法
  //参考文档:http://cn.vuejs.org/v2/guide/plugins.html
  install(Vue){
    Vue.prototype.functions = functions;
    Vue.prototype.APIConfig = APIConfig;
  }
}
