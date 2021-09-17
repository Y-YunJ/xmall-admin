<template>
    <div class="login_nav">
      <span class="login_txt text_select_no">{{date}}</span>
      <span class="login_txt text_select_no">{{time}}</span>
      <p class="login_txt text_select_no" @click="showPic">换肤</p>
      <ul class="panel text_select_no" id="panel">
          <li v-for="(item,index) in img" :key="item.id" @click="getImaHandle(index)">
            <img :src="item.url" alt="">
          </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'login-nav',
    data(){
      return{
        timer: null,
        date:'',
        time:'',
        img:[
          {'id':0,'url':require("../../assets/img/login/background-mini-1.jpg")},
          {'id':1,'url':require("../../assets/img/login/background-mini-2.jpg")},
          {'id':2,'url':require("../../assets/img/login/background-mini-3.jpg")},
          {'id':3,'url':require("../../assets/img/login/background-mini-4.jpg")},
          {'id':4,'url':require("../../assets/img/login/background-mini-5.jpg")},
        ],
        show:false,
      }
    },
    computed:{

    },
    methods:{
      timeResolve(date){
        this.date = date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
        this.time = date.toLocaleTimeString()
      },
      showPic(){
        this.show=!this.show
        if(this.show){
          this.$vAnimate.slideDown('panel',0.3,140)
        }else{
          this.$vAnimate.slideUp('panel',0.3,0)
        }
      },
      getImaHandle(index){
        this.$emit('changeImg',index)
      }
    },
    created(){
      let that = this
      this.timer = setInterval(function () {
        let date = new Date()
        that.timeResolve(date)
      },1000)
    }
  }
</script>

<style scoped>
  .login_nav{
    width: 100%;
    height: 30px;
    background-color: rgba(0,0,0,0.4);
  }
  .login_nav p{
    display: inline-block;
  }
  .login_nav p:hover{
    text-decoration: underline;
  }
  .login_nav .panel{
    display: none;
    width: 100%;
    /*padding: 20px;*/
    margin-bottom: 0;
    background-color: rgba(0,0,0,0.4);
    border-radius: 0 0 5px 5px;
    position: absolute;
    z-index: 100;
    overflow: hidden;
  }
  .login_nav li{
    display: inline-block;
    padding: 10px;
    margin: 20px 0;
  }
  .login_nav li:first-child{
    margin-left: 20px;
  }
  .login_nav li img{
    width: 128px;
    height: 80px;
    cursor: pointer;
    border-radius: 0 0 5px 5px;
    transition: box-shadow ease-in-out .15s;
  }
  .login_nav li img:hover{
    box-shadow: 0 0 8px rgba(102 ,175 ,255 ,0.8);
  }
  .login_txt{
    padding-left: 10px;
    color: rgba(255,255,255,0.8);
    line-height: 30px;
  }
  @keyframes fold {
    from{height: 140px}
    to{height: 0}
  }
  @keyframes unfold {
    from{height: 0}
    to{height: 140px}
  }
  .v-enter-active{
    animation: unfold .5s linear;
    overflow: hidden;
  }
  .v-leave-active{
    animation: fold .5s linear;
    overflow: hidden;
  }
</style>
