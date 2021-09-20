<template>
    <div class="home_head text_select_no">
      <div class="head_left">
        <svg t="1631273424871" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18533" width="32" height="32"><path d="M146.6 212c11.9-75.9 77.2-131.9 154.1-131.9h422.7c76.8 0 142.2 56 154.1 131.9L958 727.9c17.7 113.5-70 216-184.9 216H250.9C136 943.9 48.3 841.4 66 727.9L146.6 212z m242.3-4.7c0-25.8-20.9-46.8-46.8-46.8-25.8 0-46.8 20.9-46.8 46.8v45.8c0 109 99.6 186.4 207.9 186.4h17.4c108.3 0 207.9-77.4 207.9-186.4v-45.8c0-25.8-20.9-46.8-46.8-46.8-25.8 0-46.8 20.9-46.8 46.8v45.8c0 45.2-44.7 92.8-114.4 92.8h-17.4c-69.7 0-114.4-47.6-114.4-92.8v-45.8z" p-id="18534" fill="#ff6700"></path></svg>
        <span class="head_txt">小米商城数据管理后台</span>
      </div>
      <div class="head_right">
        <i class="head_icon">
          <svg t="1631274746758" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="983" width="32" height="32"><path d="M512 83.2c-247.04 0-448 200.96-448 448 0 246.976 200.96 448 448 448 246.976 0 448-201.024 448-448C960 284.16 758.976 83.2 512 83.2zM512 147.2c212.032 0 384 172.032 384 384 0 85.632-28.352 164.352-75.712 228.224-46.592-73.152-117.824-128.896-202.496-154.176 49.536-33.92 82.176-90.816 82.176-155.264 0-103.68-84.288-188.032-188.032-188.032-103.68 0-188.032 84.352-188.032 188.032 0 65.024 33.216 122.368 83.52 156.096-84.608 26.048-155.712 82.432-201.664 156.16C157.184 697.92 128 618.048 128 531.2 128 319.168 299.968 147.2 512 147.2zM388.032 449.984c0-68.352 55.616-124.032 124.032-124.032s124.032 55.616 124.032 124.032S580.352 574.016 512 574.016 388.032 518.4 388.032 449.984zM251.008 812.288c50.56-93.952 149.056-158.336 262.976-158.336 112.96 0 210.752 63.168 261.888 155.712C707.008 874.944 614.336 915.2 512 915.2 411.072 915.2 319.552 875.968 251.008 812.288z" p-id="984" fill="#8a8a8a"></path></svg>
        </i>
        <span class="nick_name" @click="dropToggle">Json</span>
        <b class="triangle" @click="dropToggle"></b>
      </div>
      <transition>
        <ul class="head_drop" v-show="dropShow">
          <li class="manage" @click="route">账号管理</li>
          <li class="logout" @click="quit">注销登录</li>
        </ul>
      </transition>
    </div>
</template>

<script>
  export default {
    name: 'homeHead',
    data(){
      return{
        dropShow:false,
      }
    },
    methods:{
      dropToggle(){
        this.dropShow = !this.dropShow
      },
      quit(){
        this.$session.clear()
        this.$router.push('/login')
      },
      route(){
        this.$router.push('/accountPage')
        this.$store.commit('changSlide',6)
        this.$session.save('slideIndex',6)
      }
    },
  }
</script>

<style scoped>
  @keyframes fold {
    from{height: 100px}
    to{height: 0}
  }
  @keyframes unfold {
    from{height: 0}
    to{height: 100px}
  }
  .v-enter-active{
    animation: unfold .3s;
    overflow: hidden;
  }
  .v-leave-active{
    animation: fold .3s;
    overflow: hidden;
  }
.home_head{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1000px;
  height: 57px;
  background-color: #f5f6fb;
  padding: 12px 35px;
  border-bottom: 1px solid #e9ebef;
  z-index: 1000;
}
.home_head .head_left{
  float: left;
  height: 100%;
}
.home_head .head_left .head_txt{
  display: inline-block;
  font-size: 16px;
  position: relative;
  bottom:8px;
}
.home_head .head_right{
  float: right;
  height: 100%;
  position: relative;
}
.home_head .head_right .head_icon{
  display: inline-block;
  margin:0 6px;
}
.home_head .head_right .nick_name{
  font-size: 14px;
  color: #8a8a8a;
  margin-right: 5px;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  position: relative;
  bottom: 10px;
}
.home_head .head_right .triangle{
  position: relative;
  bottom: 7px;
  display: inline-block;
  cursor: pointer;
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: #8a8a8a transparent transparent transparent;
}
.home_head .head_drop{
  z-index: 1000;
  position: absolute;
  top: 57px;
  right: 30px;
  padding: 0;
  box-shadow: 0 0 10px #ddd;
  background-color: red;
  width: 110px;
}
.home_head .head_drop li{
    min-width: 110px;
    list-style: none;
    color: #666;
    padding: 15px;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
}
.home_head .head_drop li:hover{
  background-color: #ff6700;
  color:#fff;
}
</style>
