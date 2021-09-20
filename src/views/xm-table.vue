<template>
  <div class="table_container">
    <table class="table_list">
      <thead v-if="sort" class="text_select_no">
        <tr>
          <th>
            <input type="checkbox" class="input">
          </th>
          <th class="title" v-for="(item,index) in title" :key="index"
              @click="select(index)"
          >
            <span>{{item}}</span>
            <div class="orderByBox" :style="index === selectItem?showBtn:{}">
              <span class="orderByDesc" :style="orderBy?{}:descSelectStyle"></span>
              <span class="orderByAsc" :style="orderBy?ascSelectStyle:{}"></span>
            </div>
          </th>
          <th class="title" v-if="detail">
            <span>操作</span>
          </th>
        </tr>
      </thead>
      <thead v-else class="text_select_no">
          <tr>
          <th>
            <input type="checkbox" class="input">
          </th>
          <th class="title" v-for="(item,index) in title" :key="index"
              @click="select(index)"
          >
            <span>{{item}}</span>
          </th>
          <th class="title" v-if="detail">
            <span>操作</span>
          </th>
        </tr>
      </thead>
      <tbody v-if="img">
      <tr v-for="(proItem,proIndex) in fillData" :key="proIndex">
        <td>
          <input type="checkbox" class="input">
        </td>
        <td v-for="(subItem,subIndex) in proItem" :key="subIndex" :style="subIndex===stateIndex?getStateStyle(subItem):{}">
          <img v-if="subIndex === 0" :src="getImg(subItem)" alt="" class="td_img">
          <p v-else>{{subItem}}</p>
        </td>
        <td>
          <a class="detail" @click="goDetailPage">详情</a>
        </td>
      </tr>
      </tbody>
      <tbody v-else-if="stateIndex>-1 && detail">
        <tr v-for="(proItem,proIndex) in fillData" :key="proIndex">
          <td><input type="checkbox" class="input"></td>
          <td v-for="(subItem,subIndex) in proItem" :key="subIndex" :style="subIndex===stateIndex?getStateStyle(subItem):{}">{{subItem}}</td>
          <td><a class="detail" @click="goDetailPage">详情</a></td>
        </tr>
      </tbody>
      <tbody v-else-if="stateIndex>-1 && !detail">
        <tr v-for="(proItem,proIndex) in fillData" :key="proIndex">
          <td>
          <input type="checkbox" class="input">
        </td>
          <td v-for="(subItem,subIndex) in proItem" :key="subIndex" :style="subIndex===stateIndex?getStateStyle(subItem):{}">{{subItem}}</td>
      </tr>
      </tbody>
      <tbody v-else-if="stateIndex<0 && detail">
      <tr v-for="(proItem,proIndex) in fillData" :key="proIndex">
        <td>
          <input type="checkbox" class="input">
        </td>
        <td v-for="(subItem,subIndex) in proItem" :key="subIndex">{{subItem}}</td>
        <td>
          <a class="detail" @click="goDetailPage">详情</a>
        </td>
      </tr>
      </tbody>
      <tbody v-else>
      <tr v-for="(proItem,proIndex) in fillData" :key="proIndex">
        <td>
          <input type="checkbox" class="input">
        </td>
        <td v-for="(subItem,subIndex) in proItem" :key="subIndex">{{subItem}}</td>
      </tr>
      </tbody>
    </table>
    <div class="table_page">
      <ul class="text_select_no">
        <li :class="preDisable?'disabled':''" @click="firstPage"><span>«</span></li>
        <li :class="preDisable?'disabled':''" @click="prePage"><span>‹</span></li>
        <li :class="pageThis === pageFirstIndex?'page_select':''" @click="selectPage(0)">
          <span>{{pageFirstIndex}}</span>
        </li>
        <li v-if="totalPage>1" :class="pageThis === pageFirstIndex+1?'page_select':''" @click="selectPage(1)">
          <span>{{pageFirstIndex+1}}</span>
        </li>
        <li v-if="totalPage>2" :class="pageThis === pageFirstIndex+2?'page_select':''" @click="selectPage(2)">
          <span>{{pageFirstIndex+2}}</span>
        </li>
        <li :class="nextDisable?'disabled':''" @click="nextPage"><span>›</span></li>
        <li :class="nextDisable?'disabled':''" @click="lastPage"><span>»</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'xm-table',
    props:[
      'title',//单元格标题
      'dataList',//单元格数据
      'state',//状态栏参数
      'stateIndex',//状态栏下标
      'detail',//是否使用详情
      'sort',//是否开启排序
      'img',//首项是否为图片
      'path',//详情页跳转路径对象
    ],
    data(){
      return{
        selectItem:Number,//选中的标题
        orderBy:0,//0:desc,1:asc
        pageFirstIndex:1,
        pageThis:1,
      }
    },
    computed:{
      descSelectStyle(){
        return{
          'border-bottom-color': '#666666'
        }
      },
      ascSelectStyle(){
        return{
          'border-top-color': '#666666'
        }
      },
      showBtn(){
        return{
          opacity:1
        }
      },
      totalPage(){
        if(this.dataList.length%10===0){
          return this.dataList.length/10
        }else{
          return parseInt(this.dataList.length/10+'') +1
        }
      },
      preDisable(){
        return this.pageThis === 1
      },
      nextDisable(){
        return this.pageThis === this.totalPage
      },
      fillData(){
        if(this.pageThis*10>this.dataList.length){
          return this.dataList.slice((this.pageThis-1)*10)
        }else{
          return this.dataList.slice((this.pageThis-1)*10,this.pageThis*10)
        }
      }
    },
    methods:{
      select(index){
        this.selectItem = index
        this.orderBy = !this.orderBy
      },
      getStateStyle(txt){
        for(let i = 0;i<this.state.length;i++){
          if(this.state[i].type === txt){
            return{ color:this.state[i].color}
          }
        }
      },
      getImg(name){
        return require('../assets/img/userDetail/'+ name)
      },
      prePage(){
        if(!this.preDisable){
          if(this.pageThis === this.pageFirstIndex){
            this.pageFirstIndex--;
            this.pageThis--;
          }else{
            this.pageThis--
          }
        }
      },
      nextPage(){
        if(!this.nextDisable){
          if(this.pageThis === this.pageFirstIndex+2){
            this.pageFirstIndex++;
            this.pageThis++;
          }else{
            this.pageThis++;
          }
        }
      },
      firstPage(){
        if(!this.preDisable){
          this.pageFirstIndex = 1
          this.pageThis = 1
        }
      },
      lastPage(){
        if(!this.nextDisable){
          this.pageFirstIndex = this.totalPage-2
          this.pageThis = this.totalPage
        }
      },
      selectPage(add){
        this.pageThis = this.pageFirstIndex+add
      },
      goDetailPage(){
        this.$router.push(this.path)
      },
    },
  }
</script>
<style scoped>
  .table_container{
    position: relative;
    /*min-height: 500px;*/
  }
  .table_list{
    width: 100%;
    font-size: 14px;
    margin-bottom: 20px;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
    cursor: pointer;
  }
  .table_list thead{
    background-color: #f5f6fb;
  }
  .table_list tr{
    border-bottom: 1px solid #F2F2F4;
    cursor: pointer;
    height: 42px;
  }
  .table_list tr th{
    padding: 12px 15px;
    color: #333333;
    white-space: nowrap;
  }
  .table_list tr th:first-child{
    width: 50px
  }
  .table_list td{
    padding: 10px 15px;
    color: #666666;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .td_img{
    width: 42px;
    height: 42px;
    vertical-align:middle;
  }
  .title:hover{
    background-color: rgb(235,235,235);
  }
  .table_list .detail{
    font-weight: normal ;
    color: #ff7874 ;
  }
  .table_list .detail:hover{
    text-decoration: underline;
  }
  .orderByBox{
    opacity: 0;
    display: inline-block;
  }
  .orderByDesc{
    display: inline-block;
    position: relative;
    bottom: 6px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: #999999;
  }
  .orderByAsc{
    display: inline-block;
    position: relative;
    top: 4px;
    right: 12px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-top-color: #999999;
  }
  .table_page{
    width: 100%;
    margin: 20px 0;
    text-align: center;
  }
  .table_page ul{
    margin-left: -20px;
    display: inline-block;
    height: 32px;
    margin-bottom: 0;
    padding: 0;
  }
  .table_page li{
    width: 32px;
    height: 32px;
    float: left;
    list-style: none;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 0 3px;
    box-shadow: 0 0 2px #ddd;
  }
  .table_page li:hover{
    background-color: #eee;
    text-decoration: none;
  }
  .table_page li span{
    display: inline-block;
    text-decoration: none;
    width: 100%;
    height: 100%;
    line-height: 30px;
    /*color: #666;*/
    cursor: pointer;
    color: inherit;
  }
  .table_page li.disabled span{
    color: #dddddd;
    cursor: default;
  }
  .page_select{
    background-color: #ff7874 !important;
    color: #fff !important;
  }
</style>
