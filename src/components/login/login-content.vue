<template>
    <div class="login_content">
      <div class="head">
        <p>xmall 管理后台</p>
      </div>
      <div class="content">
        <img class="user_img" alt="用户头像" src="../../assets/img/login/user128.png">
        <form action="">
          <input class="login_input" type="text" v-model="acc" placeholder="用户名">
          <input class="login_input" type="password" v-model="pas" placeholder="密码">
          <span class="error_msg">用户名或密码错误</span>
          <button class="login_btn" @click.prevent="loginHandle">登录</button>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'login-content',
    data(){
      return{
        acc:'',
        pas:'',
      }
    },
    methods:{
      loginHandle(){
        this.$session.save('login','true')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .login_content{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 360px;
    height: 550px;
  }
  .login_content .head{
    width: 100%;
    height: 100px;
  }
  .login_content .head p{
    margin: 0;
    line-height: 100px;
    height: 100%;
    text-align: center;
    font-size: 30px;
    color: white;
    font-family: "Trebuchet MS", cursive;
  }
  .login_content .content{
    width: 100%;
    padding: 50px;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
  }
  .content .user_img{
    width: 84px;
    height: 84px;
    border-radius: 84px;
    display: block;
    margin: 0 auto 40px;
  }
  .content .login_input{
    height: 38px;
    margin: 20px 0;
    background-color: #9F9FA1;
    border: 1px solid #9F9FA1;
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1em;
    color: #555;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0 ,0 ,0 ,0.08);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  .content .login_input:focus{
    background-color: #fff;
  }
  .content .login_btn{
    width: 100%;
    height: 38px;
    display: block;
    outline: none;
    color: #fff;
    background-color: #d9534f;
    border: 1px solid #d43f3a;
    border-radius: 4px;
  }
  .content .login_btn:hover{
    color: #fff;
    background-color: #c9302c;
    border-color: #ac2925;
  }
  .content .error_msg{
    display: inline-block;
    min-width: 10px;
    min-height: 20px;
    float: right;
    position: relative;
    color: #c33;
    /*opacity: 0;*/
    /*left: 20px;*/
    bottom: 10px;
  }
  input::-webkit-input-placeholder{
    color:#333;
    font-size: 14px;
  }
</style>
