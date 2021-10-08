<template>
  <div class="home_content">
    <div class="container">
      <div class="detailBox">
        <div class="detail_info">
          <span class="input_label detail_label">分类编号</span>
          <span class="detail_value">{{cftNum}}</span>
        </div>
        <div class="detail_info">
          <span class="input_label detail_label">分类名称</span>
          <input class="input" type="text" :value="cftName">
        </div>
      </div>
      <div v-if="!isAdd">
        <div class="detailBox">
          <div class="detail_title">分类图片</div>
          <ul class="detail_picList">
            <li>
              <img class="longPic" src="../../assets/img/classificationDetail/rec1.png">
            </li>
          </ul>
        </div>
        <div class="detailBox_last">
          <div class="detail_title">属性列表</div>
          <div class="propertyBox">
            <div class="detail_info" v-for="(item,index) in selectProperty.itemList" :key="index">
              <input class="input" type="text" :value="item">
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="detailBox">
          <div class="detail_title">分类图片</div>
          <ul class="detail_picList">
            <li class="detail_fileUpLoad">
              <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1528" width="40" height="40">
                <path d="M0 512C0 229.230208 229.805588 0 512 0 794.769792 0 1024 229.805588 1024 512 1024 794.769792 794.194412 1024 512 1024 229.230208 1024 0 794.194412 0 512Z" p-id="1529" fill="#FF7874"></path>
                <path d="M753.301333 490.666667l-219.946667 0L533.354667 270.741333c0-11.776-9.557333-21.333333-21.354667-21.333333-11.776 0-21.333333 9.536-21.333333 21.333333L490.666667 490.666667 270.72 490.666667c-11.776 0-21.333333 9.557333-21.333333 21.333333 0 11.797333 9.557333 21.354667 21.333333 21.354667L490.666667 533.354667l0 219.904c0 11.861333 9.536 21.376 21.333333 21.376 11.797333 0 21.354667-9.578667 21.354667-21.333333l0-219.946667 219.946667 0c11.754667 0 21.333333-9.557333 21.333333-21.354667C774.634667 500.224 765.077333 490.666667 753.301333 490.666667z" p-id="1530" fill="#FFFFFF"></path>
              </svg>
              <span>点击上传</span>
              <input type="file" accept="img/*">
            </li>
          </ul>
        </div>
        <div class="detailBox_last">
          <div class="detail_title">属性列表</div>
          <div class="propertyBox">
            <div class="detail_info_empty" v-for="item in propertyNum" :key="item">
              <input class="input" type="text">
            </div>
            <div class="detail_info_empty" @click="addHandle">
              <span class="btn add" style="width: 150px">添加</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_tools">
        <p class="btn search" v-waves @click="saveHandle">保存</p>
        <p class="btn reset" v-waves @click="cancelHandle">取消</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'classificationDetail',
    data(){
      return{
        cftName:'家电',
        cftNum:1,
        dataUrl:'productProperty',
        selectProperty:Object,
        propertyNum:1,
      }
    },
    computed:{
      isAdd(){
        return this.$route.meta.hasOwnProperty('isAdd')
      }
    },
    methods:{
      addHandle(){
        this.propertyNum++;
      },
      saveHandle(){
        this.$store.commit('activeDialog','保存成功')
      },
      cancelHandle(){}
    },
    created(){
      axios({
        method:'get',
        url:this.dataUrl,
      }).then((response) =>{
        let res = response.data.datas
        let that = this
        this.selectProperty = res.filter((item) => {
          return that.cftName === item.itemName
        })[0]
      }).catch((error) => {
        console.log(error)
      })
      if(this.isAdd){
        this.cftName = ''
        this.cftNum = '系统指定'
      }
    }
  }
</script>

<style scoped>

</style>
