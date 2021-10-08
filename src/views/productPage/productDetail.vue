<template>
    <div class="home_content">
      <div class="container">
        <div class="detailBox">
          <div class="detail_info">
            <span class="input_label detail_label">产品类型</span>
            <button class="input button drop_margin" @click="showDrop">
              <span class="input_inner">{{productBaseInfo.type || '家电'}}</span>
              <p class="input_tri"></p>
              <div class="drop_content" v-show="dropShow">
                <ul class="drop_inner">
                  <li v-for="(item,index) in titleList" :key="index" @click="selectItem(item)">{{item}}</li>
                </ul>
              </div>
            </button>
            <span class="input_label detail_label">产品状态</span>
            <input type="radio" :checked="productBaseInfo.state === 0" @click="radioHandle(0)">
            <span class="input_label">销售中</span>
            <input type="radio" :checked="productBaseInfo.state === 1" @click="radioHandle(1)">
            <span class="input_label">停售中</span>
            <input type="radio" :checked="productBaseInfo.state === 2" @click="radioHandle(2)">
            <span class="input_label">促销中</span>
          </div>
        </div>
        <div class="detailBox">
          <div class="detail_title">基本信息</div>
          <div class="detail_info">
            <span class="input_label detail_label">产品编号</span>
            <span class="detail_value">{{productBaseInfo.id}}</span>
            <span class="input_label detail_label">上架日期</span>
            <span class="detail_value">{{productBaseInfo.date}}</span>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">产品名称</span>
            <input class="input detail_value" type="text" v-model="productBaseInfo.name"/>
            <span class="input_label detail_label">产品标题</span>
            <input class="input detail_value" type="text" v-model="productBaseInfo.title"/>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">产品原价(元)</span>
            <input class="input input_number detail_value" type="number" v-model="productBaseInfo.oriPrice"/>
            <span class="input_label detail_label">产品促销价(元)</span>
            <input class="input input_number detail_value" type="number" v-model="productBaseInfo.curPrice"/>
          </div>
        </div>
        <div class="detailBox">
          <div class="detail_title">详情图片</div>
          <ul class="detail_picList">
            <li v-for="item in img" :key="item.id">
              <img :src="item.url" alt="">
            </li>
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
          <div class="detail_title">属性值信息</div>
          <div class="propertyBox">
            <div class="detail_info" v-for="(item,index) in selectProperty.itemList" :key="index">
              <span class="input_label detail_property">{{item}}</span>
              <input class="input" type="text" v-model="productDetailInfo[index]">
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
    name: 'productDetail',
    data(){
      return{
        dropShow:false,
        productProperty:[],
        selectProperty:Object,
        dataUrl:'productProperty',
        titleList:[
          "家电",
          "手机/电话卡",
          "智能",
          "搭配",
          "配件",
          "周边",
        ],
        img:[
          {'id':0,'url':require("../../assets/img/productDetail/1.jpg")},
          {'id':1,'url':require("../../assets/img/productDetail/2.jpg")},
          {'id':2,'url':require("../../assets/img/productDetail/3.jpg")},
          {'id':3,'url':require("../../assets/img/productDetail/4.jpg")},
          {'id':4,'url':require("../../assets/img/productDetail/5.jpg")},
          {'id':5,'url':require("../../assets/img/productDetail/6.jpg")},
          {'id':6,'url':require("../../assets/img/productDetail/7.jpg")},
          {'id':7,'url':require("../../assets/img/productDetail/8.jpg")},
          {'id':8,'url':require("../../assets/img/productDetail/9.jpg")},
          {'id':9,'url':require("../../assets/img/productDetail/10.jpg")},
          {'id':10,'url':require("../../assets/img/productDetail/11.jpg")},
        ],
        productBaseInfo:{
          type:'家电',
          state:0,
          id:1,
          date:'2018-04-24 10:36:23',
          name:'米家集尘扫拖机器人',
          title:'自动倒垃圾，45天手不沾尘',
          oriPrice:2999,
          curPrice:1999,
        },
        productDetailInfo:[],
      }
    },
    computed:{

    },
    methods:{
      showDrop(){
        this.dropShow = !this.dropShow
      },
      selectItem(item){
        this.productBaseInfo.type = item
      },
      radioHandle(index){
        this.productBaseInfo.state = index
      },
      isAdd(){
        if(this.$route.meta.hasOwnProperty('isAdd')){
          this.img = []
          for(let i = 0;i < this.productDetailInfo.length;i++){
            this.productDetailInfo[i] = ' '
          }
          this.productBaseInfo = {
            type:'家电',
            state:0,
            id:'系统自动生成',
            date:'系统自动生成',
            name:'',
            title:'',
            oriPrice:'',
            curPrice:'',
          }
        }
      },
      fetchData(){
        axios({
          method:'get',
          url:this.dataUrl,
        }).then((response) =>{
          this.productProperty = response.data.datas
          this.selectProperty = this.productProperty[0]
          this.productDetailInfo = this.selectProperty.itemData
          this.isAdd()
        }).catch((error) => {
          console.log(error)
        })
      },
      saveHandle(){
        this.$store.commit('activeDialog','保存成功')
      },
      cancelHandle(){}
    },
    watch:{
      productBaseInfo:{
        handler(val) {
          let res = this.productProperty
          this.selectProperty = res.filter((item) =>{
            return item.itemName === val.type
          })[0]
          if(!this.$route.meta.hasOwnProperty('isAdd')){
            this.productDetailInfo = this.selectProperty.itemData
          }
        },
        deep:true
      }
    },
    created(){
      this.fetchData()
    },
  }
</script>

<style scoped>

</style>
