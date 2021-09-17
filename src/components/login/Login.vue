<template>
  <div class="login_main" :class="bacImgClass">
    <login-nav @changeImg="imgHandle"/>
    <login-content />
    <div class="login_foot">
      <span>
        © 2020 XQ Team Mulan PSL v1
      </span>
      <span> ⋅ </span>
      <span>陕ICP备19018406号</span>
    </div>
  </div>
</template>

<script>
  import loginNav from '@/components/login/login-nav'
  import loginContent from '@/components/login/login-content'

  export default {
    name: 'Login',
    components: {
      loginNav,
      loginContent
    },
    data(){
      return{
        mark:1,
      }
    },
    computed:{
      bacImgClass(){
        switch (this.mark) {
          case 1:return 'bacImg1';
          case 2:return 'bacImg2';
          case 3:return 'bacImg3';
          case 4:return 'bacImg4';
          case 5:return 'bacImg5';
          default:return '';
        }
      }
    },
    methods:{
      imgHandle(index){
        this.mark = index + 1
      }
    },
  }
</script>

<style scoped>
  .login_main{
    position: relative;
    min-width: 1000px;
    min-height: 753px;
    background-repeat: no-repeat;
  }
  .login_foot{
    position: absolute;
    bottom: 0;
    background-color: rgba(0,0,0,0.4);
    overflow: hidden;
    text-align: center;
    padding: 10px 6px 0px 6px;
    height: 33px;
    font-size: 0.7rem !important;
    color: #FFF;
    letter-spacing: 0.8px;
    font-family: Arial, sans-serif !important;
    z-index: 99;
    width: 100%;
  }
  .bacImg1{
    background-image: url("../../assets/img/login/background-1.jpg");
  }
  .bacImg2{
    background-image: url("../../assets/img/login/background-2.jpg");
  }
  .bacImg3{
    background-image: url("../../assets/img/login/background-3.jpg");
  }
  .bacImg4{
    background-image: url("../../assets/img/login/background-4.jpg");
  }
  .bacImg5{
    background-image: url("../../assets/img/login/background-5.jpg");
  }
</style>
