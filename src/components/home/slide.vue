<template>
    <ul class="home_slide">
      <li v-for="(item,index) in titleList" :style="selectedIndex===index?selectStyle:{}"
          @click="select(index)"
      >
        <svg t="1631289687672" :fill="selectedIndex===index?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1455" width="16" height="16"><path d="M947.2 422.4L572.8 115.2c-32-25.6-86.4-25.6-118.4 0L76.8 425.6c-12.8 6.4-16 22.4-9.6 35.2 3.2 12.8 16 19.2 28.8 19.2h32v364.8C128 892.8 163.2 928 211.2 928H416c19.2 0 32-12.8 32-32v-147.2c0-22.4 35.2-44.8 64-44.8 28.8 0 67.2 22.4 67.2 44.8V896c0 19.2 12.8 32 32 32h208c48 0 80-32 80-83.2V480h32c12.8 0 25.6-9.6 28.8-22.4 3.2-12.8 0-25.6-12.8-35.2z"  p-id="1456"></path></svg>
        <span>{{item}}</span>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'slide',
    data(){
      return{
        titleList:['首页','全部产品','产品分类','用户管理','全部订单','打赏信息','我的账户'],
      }
    },
    methods:{
      select(index){
        this.$store.commit('changSlide',index)
        this.$session.save('slideIndex',index)
      }
    },
    computed:{
      selectStyle(){
        return{
          'cursor': 'default',
          'background-color': '#d9dbe8',
          'border-color': '#ff7874',
      }
        },
      selectedIndex(){
        return this.$store.state.slideIndex
      }
    },
    watch:{
      selectedIndex:function (val) {
        switch (val) {
          case 0:this.$router.push('/');break;
          case 1:this.$router.push('/productPage');break;
          case 2:this.$router.push('/classificationPage');break;
          case 3:this.$router.push('/userManagePage');break;
          case 4:this.$router.push('/orderManagePage');break;
          case 5:this.$router.push('/rewardManagePage');break;
          case 6:this.$router.push('/accountPage');break;
          default:this.$router.push('/homePage');break;
        }
      }
    },
    mounted(){
      this.$store.commit('changSlide',this.$session.fetch('slideIndex'))
    }
  }
</script>

<style scoped>
  .home_slide{
    position: fixed;
    top: 57px;
    left: 0;
    width: 200px;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f6fb;
    border-right: 1px solid #e9ebef;
    list-style: none;
    z-index: 1000;
  }
  .home_slide li{
    width: 100%;
    padding: 10px 50px 10px 20px;
    border-left: 5px solid transparent;
    cursor: pointer;
    text-align: left;
    height:40px;
  }
  .home_slide li:hover{
    background-color: rgba(217,219,232,0.5);
  }
  .home_slide_icon{
    margin-right: 8px;
    position: relative;
    top:3px;
  }
  .home_slide span{
    font-size: 14px;
    color: #8a8ba8;
    line-height: 20px;
  }
</style>
