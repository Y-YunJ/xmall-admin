<template>
  <div class="home_main">
    <home-head/>
    <slide/>
    <home-title/>
    <router-view/>
    <div class="dialog-bg" v-show="dialogShow"></div>
    <div class="dialog" :style="dialogShow === true?{'top':0}:{}">
      <div class="dialog-header">提示</div>
      <div class="dialog-body">{{dialogMess}}</div>
      <div class="dialog-footer">
        <button type="button" class="btn click" v-waves @click="dialogHandle">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import homeHead from '@/components/home/head'
  import slide from '@/components/home/slide'
  import homeTitle from '@/components/home/title'

  export default {
    name: 'Home',
    data(){
      return{
        
      }
    },
    components: {
      homeHead,
      slide,
      homeTitle,
    },
    computed:{
      dialogMess(){
        return this.$store.state.dialogState.text
      },
      dialogShow(){
        return this.$store.state.dialogState.show
      }
    },
    methods:{
      dialogHandle(){
        this.$store.commit('disActiveDialog')
      }
    }
  }
</script>

<style scoped>
  .home_main{
    width: 100%;
    height: 100%;
    min-width: 1000px;
  }
  .dialog-bg{
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .dialog{
    height: 174px;
    background-color: #fff;
    position: fixed;
    top:-500px;
    left: 0;
    right: 0;
    z-index: 1100;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    transition: top .3s ease-out;
  }
  .dialog-header{
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 18px;
    line-height: 25px;
  }
  .dialog-body{
    padding: 15px;
    line-height: 25px;
  }
  .dialog-footer{
    padding: 15px;
    text-align: right;
    border-top: 1px solid #e5e5e5;
  }
  @media (min-width: 768px){
    .dialog {
      width: 600px;
      margin: 30px auto;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    }
  }
</style>
