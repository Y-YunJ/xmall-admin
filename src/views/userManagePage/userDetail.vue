<template>
    <div class="home_content">
      <div class="container">
        <div class="detailBox">
          <div class="detail_info">
            <div class="input_label detail_label">用户编号</div>
            <span class="detail_value">1</span>
          </div>
          <div class="detail_info">
            <div class="input_label detail_label">用户名</div>
            <span class="detail_value">a21</span>
          </div>
        </div>
        <div class="detailBox">
          <div class="detail_title">基本信息</div>
          <div class="detail_info">
            <span class="input_label detail_label">用户头像</span>
            <img class="bigIcon" src="../../assets/img/userDetail/light.png" alt="">
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">用户昵称</span>
            <span class="detail_mark">MRY</span>
          </div>
          <div class="detail_info">
            <div class="input_label detail_label">用户姓名</div>
            <span class="detail_value">张三</span>
          </div>
          <div class="detail_info">
            <div class="input_label detail_label">性别</div>
            <span class="detail_value">男</span>
          </div>
          <div class="detail_info">
            <div class="input_label detail_label">出生日期</div>
            <span class="detail_value">2013-12-01</span>
          </div>
          <div class="detail_info">
            <div class="input_label detail_label">国籍</div>
            <span class="detail_value">中国</span>
          </div>
          <div class="detail_info">
            <div class="input_label detail_label">所在地区</div>
            <span class="detail_value">陕西省 西安市 未央区</span>
          </div>
        </div>
        <div class="detailBox_last">
          <div class="detail_title">购物车信息</div>
          <xm-table :title="tableTitle"
                      :data-list="tableData"
                      :state="[]"
                      :detail="true"
                      :sort="false"
                      :state-index="-1"
                      :img="true"
                      :path="detailPath"
          >
          </xm-table>
        </div>
        <div class="detail_tools">
          <p class="btn reset" v-waves>取消</p>
        </div>
      </div>
    </div>
</template>

<script>
  import XmTable from '../xm-table'

  export default {
    name: 'userDetail',
    components:{
      XmTable,
    },
    data(){
      return{
        tableTitle:['产品图片','产品名称','单价','数量','价格','备注'],
        tableData:[
          ['1.jpg','吸尘器','288','1','288','预购'],
          ['2.jpg','吸尘器','288','1','288','预购'],
          ['3.jpg','吸尘器','288','1','288','预购'],
          ['4.jpg','吸尘器','288','1','288','预购'],
          ['5.jpg','吸尘器','288','1','288','预购'],
          ['6.jpg','吸尘器','288','1','288','预购'],
          ['7.jpg','吸尘器','288','1','288','预购'],
          ['8.jpg','吸尘器','288','1','288','预购'],
          ['9.jpg','吸尘器','288','1','288','预购'],
          ['10.jpg','吸尘器','288','1','288','预购'],
        ],
        detailPath: '/productDetail',
      }
    },
  }
</script>

<style scoped>
.bigIcon{
  width: 84px;
  height: 84px;
  border-radius: 5px;
}
</style>
