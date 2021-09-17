<template>
    <div class="home_title text_select_no">{{title}}</div>
</template>

<script>
  export default {
    name: 'homeTitle',
    computed:{
      title(){
        return this.$route.meta.name || this.$store.state.title
      },
    },
  }
</script>

<style scoped>
.home_title{
  position: fixed;
  top: 57px;
  left: 200px;
  width: 100%;
  height: 40px;
  background-color: #FDFDFF;
  padding: 10px 50px 10px 20px;
  border-bottom: 1px solid #e9ebef;
  z-index: 50;
  text-align: left;
}
</style>
