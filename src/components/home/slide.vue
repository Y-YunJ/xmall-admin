<template>
    <ul class="home_slide">
      <li @click="select(0)" :style="selectedIndex===0?selectStyle:{}">
        <router-link to="/" class="link">
          <svg t="1631289687672" :fill="selectedIndex===0?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1455" width="16" height="16"><path d="M947.2 422.4L572.8 115.2c-32-25.6-86.4-25.6-118.4 0L76.8 425.6c-12.8 6.4-16 22.4-9.6 35.2 3.2 12.8 16 19.2 28.8 19.2h32v364.8C128 892.8 163.2 928 211.2 928H416c19.2 0 32-12.8 32-32v-147.2c0-22.4 35.2-44.8 64-44.8 28.8 0 67.2 22.4 67.2 44.8V896c0 19.2 12.8 32 32 32h208c48 0 80-32 80-83.2V480h32c12.8 0 25.6-9.6 28.8-22.4 3.2-12.8 0-25.6-12.8-35.2z"  p-id="1456"></path></svg>
          <span class="text_select_no">首页</span>
        </router-link>
      </li>
      <li @click="select(1)" :style="selectedIndex===1?selectStyle:{}">
        <router-link to="/productPage" class="link">
          <svg t="1633658111694" :fill="selectedIndex===1?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1013" width="16" height="16"><path d="M372.375 93.154q25.492 0 43.615 17.653t18.123 43.114V398.9q0 25.49-18.123 43.614t-43.615 18.124h-244.98q-25.491 0-43.113-18.124T66.629 398.9V153.92q0-25.491 17.653-43.113t43.113-17.653h244.98z m0 489.927q25.492 0 43.615 17.653t18.123 43.114v245.951q0 25.492-18.123 43.114t-43.615 17.653h-244.98q-25.491 0-43.113-17.653t-17.653-43.114V643.848q0-25.492 17.653-43.114t43.113-17.653h244.98z m490.899 0q25.492 0 43.113 17.653t17.653 43.114v245.951q0 25.492-17.653 43.114t-43.113 17.653h-244.98q-25.491 0-43.615-17.653t-18.123-43.114V643.848q0-25.492 18.123-43.114t43.616-17.653h244.979zM999.48 200.922q19.597 19.598 19.597 46.061t-19.597 45.09L817.213 474.34q-19.597 19.597-45.56 19.597t-45.559-19.597L543.826 292.072Q525.2 273.447 525.2 246.983t18.625-46.06l182.268-182.27Q745.691 0.03 771.654 0.03t45.559 18.625z" p-id="1014"></path></svg>
          <span class="text_select_no">全部产品</span>
        </router-link>
      </li>
      <li @click="select(2)" :style="selectedIndex===2?selectStyle:{}">
        <router-link to="/classificationPage" class="link">
          <svg t="1633658288731" :fill="selectedIndex===2?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1247" width="16" height="16"><path d="M905.6 316.8c0-16-16-32-32-32H768c-6.4-124.8-115.2-224-246.4-224h-19.2C371.2 64 262.4 163.2 256 288H150.4c-16 0-32 12.8-32 32l-19.2 524.8v3.2c3.2 64 54.4 112 115.2 112h595.2c60.8 0 112-48 118.4-112v-3.2l-22.4-528zM502.4 128h19.2c96 0 176 70.4 182.4 160H320c6.4-89.6 86.4-160 182.4-160zM288 480c-19.2 0-32-12.8-32-32v-64c0-19.2 12.8-32 32-32s32 12.8 32 32v64c0 16-16 32-32 32z m412.8 108.8l-89.6 192c-3.2 12.8-12.8 19.2-25.6 19.2h-3.2c-9.6 0-19.2-3.2-25.6-12.8L444.8 640l-64 140.8c-6.4 16-25.6 22.4-41.6 16-16-6.4-22.4-25.6-16-41.6l86.4-188.8c3.2-9.6 16-16 25.6-19.2 12.8 0 22.4 3.2 28.8 12.8l112 150.4 67.2-144c6.4-16 25.6-22.4 41.6-16 19.2 3.2 25.6 22.4 16 38.4zM768 448c0 19.2-12.8 32-32 32s-32-12.8-32-32v-64c0-19.2 12.8-32 32-32s32 12.8 32 32v64z" p-id="1248"></path></svg>
          <span class="text_select_no">产品分类</span>
        </router-link>
      </li>
      <li @click="select(3)" :style="selectedIndex===3?selectStyle:{}">
        <router-link to="/userManagePage" class="link">
          <svg t="1633658379621" :fill="selectedIndex===3?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1439" width="16" height="16"><path d="M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z" p-id="1440"></path></svg>
          <span class="text_select_no">用户管理</span>
        </router-link>
      </li>
      <li @click="select(4)" :style="selectedIndex===4?selectStyle:{}">
        <router-link to="/orderManagePage" class="link">
          <svg t="1633658445026" :fill="selectedIndex===4?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1631" width="16" height="16"><path d="M853.318872 128.024909h-177.06146a41.121054 41.121054 0 0 1-40.549361-32.014802 127.732529 127.732529 0 0 0-247.461358 0 41.121054 41.121054 0 0 1-40.549362 32.014802H170.635871A62.845385 62.845385 0 0 0 106.687936 191.972845v768.028584a62.845385 62.845385 0 0 0 63.988771 63.988771h682.60133a62.845385 62.845385 0 0 0 63.98877-63.988771V191.972845a62.845385 62.845385 0 0 0-63.98877-63.988771z m-383.850951 0h85.345583a20.172593 20.172593 0 0 1 21.315979 21.315979 20.172593 20.172593 0 0 1-21.315979 21.315978h-85.345583a20.172593 20.172593 0 0 1-21.315979-21.315978 20.172593 20.172593 0 0 1 21.193473-21.315979z m127.97754 661.326188H256.144796a21.315978 21.315978 0 0 1 0-42.672792h341.300665a21.315978 21.315978 0 0 1 0 42.672792z m85.345584-191.925476H256.02229a21.315978 21.315978 0 0 1 0-42.672792h426.646249a21.315978 21.315978 0 0 1 0 42.672792z m85.345584-191.925476H256.02229a21.315978 21.315978 0 0 1 0-42.672792h511.950998a21.315978 21.315978 0 0 1 0 42.672792z" p-id="1632"></path></svg>
          <span class="text_select_no">全部订单</span>
        </router-link>
      </li>
      <li @click="select(5)" :style="selectedIndex===5?selectStyle:{}">
        <router-link to="/rewardManagePage" class="link">
          <svg t="1633658630596" :fill="selectedIndex===5?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1865" width="16" height="16"><path d="M512 64C264.96 64 64 264.96 64 512s200.96 448 448 448 448-200.96 448-448S759.04 64 512 64zM640.768 576c17.696 0 32 14.304 32 32s-14.304 32-32 32L544 640l0 95.136c0 17.696-14.304 32-32 32s-32-14.304-32-32L480 640l-95.104 0c-17.696 0-32-14.304-32-32s14.304-32 32-32L480 576l0-64-95.104 0c-17.696 0-32-14.304-32-32s14.304-32 32-32L480 448l0-19.776-118.432-118.624c-12.544-12.48-12.064-32.736 0.416-45.248 12.512-12.576 32.704-12.512 45.216-0.064l107.584 107.36 101.632-106.784c12.288-12.832 32.416-13.216 45.152-1.12 12.8 12.192 13.056 32.48 0.864 45.248L544 432.864 544 448l96.768 0c17.696 0 32 14.304 32 32s-14.304 32-32 32L544 512l0 64L640.768 576z" p-id="1866"></path></svg>
          <span class="text_select_no">打赏信息</span>
        </router-link>
      </li>
      <li @click="select(6)" :style="selectedIndex===6?selectStyle:{}">
        <router-link to="/accountPage" class="link">
          <svg t="1633658708864" :fill="selectedIndex===6?'#8a8ba8':'#cdd0cf'" class="home_slide_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2057" width="16" height="16"><path d="M881 512c0-52.4 32.9-96.8 79-114.5-11-43.2-28-83.9-50.2-121.3C864.6 296.3 810 288.1 773 251c-37-37-45.2-91.7-25.1-136.8C710.4 92 669.7 75 626.5 64c-17.8 46.1-62.2 79-114.5 79-52.4 0-96.8-32.9-114.5-79-43.2 11-83.9 28-121.3 50.2 20.1 45.2 11.9 99.8-25.1 136.8-37 37-91.7 45.2-136.8 25.2C92 313.6 75 354.3 64 397.5c46.1 17.8 79 62.2 79 114.5 0 52.4-32.9 96.8-79 114.5 11 43.2 28 83.9 50.2 121.3C159.4 727.7 214 735.9 251 773c37 37 45.2 91.7 25.1 136.8C313.6 932 354.3 949 397.5 960c17.8-46.1 62.2-79 114.5-79 52.4 0 96.8 32.9 114.5 79 43.2-11 83.9-28 121.3-50.2-20.1-45.2-11.9-99.8 25.1-136.8 37-37 91.7-45.2 136.8-25.2C932 710.4 949 669.7 960 626.5c-46.1-17.7-79-62.1-79-114.5zM512 635c-67.9 0-123-55.1-123-123s55.1-123 123-123 123 55.1 123 123-55.1 123-123 123z" p-id="2058"></path></svg>
          <span class="text_select_no">我的账户</span>
        </router-link>
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'slide',
    data(){
      return{
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
      $route:function (val) {
        if(val.hasOwnProperty('meta') && val.meta.hasOwnProperty('index')){
          this.$store.commit('changSlide',val.meta.index)
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
    border-left: 5px solid transparent;
    cursor: pointer;
    text-align: left;
    height:40px;
  }
  .home_slide li a{
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 10px 50px 10px 20px;
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
