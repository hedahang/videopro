<template>
  <div>
    <el-form :model="UserModel" :rules="rules" ref="users" label-width="100px">
      <h3>用户登录</h3>
      <el-form-item label="用户名" prop="user_name">
        <el-input v-model="UserModel.user_name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="user_pass">
        <el-input v-model="UserModel.user_pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('users')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        UserModel: {
          user_name: '',
          user_pass: ''
        },
        rules: {
          user_name: [
            { required: true, message: '用户名必填', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          user_pass:[
            {required:true,message:'密码必填',trigger:'blur'},
            {min:6,max:16,message:'长度在6到16个字符',trigger:'blur'}
          ],
        }
      }
    },
    methods:{
      login(formName){
        // 这个验证是element-ui框架提供的方法
        this.$refs[formName].validate(function (flag) {
          if(flag){
//            localStorage.setItem("currentUser",this.UserModel.user_name);
            this.$store.dispatch("userLogin",
              {"user_name":this.UserModel.user_name,
                "user_pass":this.UserModel.user_pass,
                "callback":function(that){
                  var Router = this.$router
                  Router.push({ path: '/member' })
                }.bind(this)
              })
          }else{

          }
        }.bind(this));
      }
    }
  }
</script>
