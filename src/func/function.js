export default{
  getVersion(){
    return '1.0';
  },
  needLogin(){
    self.location = "users/login";
  }
}
