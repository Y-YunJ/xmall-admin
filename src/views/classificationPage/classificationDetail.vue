<template>
  <div class="home_content">
    <div class="container">
      <div class="detailBox">
        <div class="detail_info">
          <span class="input_label detail_label">分类编号</span>
          <span class="detail_value">1</span>
        </div>
        <div class="detail_info">
          <span class="input_label detail_label">分类名称</span>
          <input class="input" type="text" :value="cftName">
        </div>
      </div>
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
      <div class="detail_tools">
        <p class="btn search">保存</p>
        <p class="btn reset">取消</p>
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
        dataUrl:'productProperty',
        selectProperty:Object,
      }
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
    }
  }
</script>

<style scoped>

</style>
