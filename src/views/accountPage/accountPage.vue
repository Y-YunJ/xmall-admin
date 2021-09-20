<template>
    <div class="home_content">
      <div class="container">
        <div class="detailBox">
          <div class="detail_title">基本信息</div>
          <div class="detail_info">
            <span class="input_label detail_label">管理员编号</span>
            <span class="detail_value">{{manageNum}}</span>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">管理员账号</span>
            <span class="detail_value">{{manageAccount}}</span>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">管理员头像</span>
            <svg t="1631524436562" class="bigIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1013" width="84" height="84"><path d="M512 83.2c-247.04 0-448 200.96-448 448 0 246.976 200.96 448 448 448 246.976 0 448-201.024 448-448C960 284.16 758.976 83.2 512 83.2zM512 147.2c212.032 0 384 172.032 384 384 0 85.632-28.352 164.352-75.712 228.224-46.592-73.152-117.824-128.896-202.496-154.176 49.536-33.92 82.176-90.816 82.176-155.264 0-103.68-84.288-188.032-188.032-188.032-103.68 0-188.032 84.352-188.032 188.032 0 65.024 33.216 122.368 83.52 156.096-84.608 26.048-155.712 82.432-201.664 156.16C157.184 697.92 128 618.048 128 531.2 128 319.168 299.968 147.2 512 147.2zM388.032 449.984c0-68.352 55.616-124.032 124.032-124.032s124.032 55.616 124.032 124.032S580.352 574.016 512 574.016 388.032 518.4 388.032 449.984zM251.008 812.288c50.56-93.952 149.056-158.336 262.976-158.336 112.96 0 210.752 63.168 261.888 155.712C707.008 874.944 614.336 915.2 512 915.2 411.072 915.2 319.552 875.968 251.008 812.288z" p-id="1014" fill="#8a8a8a"></path></svg>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">管理员昵称</span>
            <input class="input" type="text" v-model="nickName">
          </div>
        </div>
        <div class="detailBox">
          <div class="detail_title">管理员操作</div>
          <div class="detail_info">
            <a class="input_label detail_label" @click="showToggle">修改密码</a>
          </div>
          <div class="detail_info">
            <a class="input_label detail_label" @click="quit">退出当前账号</a>
          </div>
        </div>
        <transition>
          <div class="detailBox" v-show="show">
            <div class="detail_title">修改密码</div>
            <div class="detail_info">
              <span class="input_label detail_label">当前密码</span>
              <input class="input" type="password">
            </div>
            <div class="detail_info">
              <span class="input_label detail_label">新密码</span>
              <input class="input" type="password" maxlength="20">
            </div>
            <div class="detail_info">
              <span class="input_label detail_label">确认密码</span>
              <input class="input" type="password">
            </div>
          </div>
        </transition>
        <div class="detail_tools">
          <p class="btn search" v-waves>保存</p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'accountPage',
    data(){
      return{
        manageNum:3,
        manageAccount:'411775814',
        nickName:'Json',
        show:false,
      }
    },
    methods:{
      showToggle(){
        this.show = !this.show
      },
      quit(){
        this.$session.clear()
        this.$router.push('/login')
      },
    },
  }
</script>

<style scoped>
  @keyframes fold {
    from{height: 850px}
    to{height: 0}
  }
  @keyframes unfold {
    from{height: 0}
    to{height: 850px}
  }
  .v-enter-active{
    animation: unfold .5s cubic-bezier(0.645,0.045,0.355,1);
    overflow: hidden;
  }
  .v-leave-active{
    animation: fold .5s cubic-bezier(0.645,0.045,0.355,1);
    overflow: hidden;
  }
  .detail_info a{
    color: #337ab7;
  }
  .detail_info a:hover{
    color:#23527c;
    text-decoration: underline;
  }
</style>
