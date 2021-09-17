<template>
  <div class="home_main">
    <home-head/>
    <slide/>
    <home-title/>
    <router-view/>
  </div>
</template>

<script>
  import homeHead from '@/components/home/head'
  import slide from '@/components/home/slide'
  import homeTitle from '@/components/home/title'

  export default {
    name: 'Home',
    components: {
      homeHead,
      slide,
      homeTitle,
    },
    methods:{
      reLoadHandle(){
        this.$router.push('/')
      }
    },
    // beforeRouteUpdate(to,from,next){
    //   this.$store.commit('changeTitle',to.meta.name)
    //   next()
    // },
    mounted () {
      window.addEventListener('load',this.reLoadHandle)
    },
    destroyed(){
      window.removeEventListener('load',this.reLoadHandle)
    },
  }
</script>

<style scoped>
.home_main{
  width: 100%;
  height: 100%;
  min-width: 1000px;
}
</style>
