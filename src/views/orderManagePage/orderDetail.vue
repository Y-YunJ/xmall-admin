<template>
    <div class="home_content">
      <div class="container">
        <div class="detailBox">
          <div class="detail_info">
            <span class="input_label detail_label">订单号</span>
            <span class="detail_value">2018050123494601</span>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">所属用户</span>
            <span class="detail_mark">MRY</span>
          </div>
        </div>
        <div class="detailBox">
          <div class="detail_title">基本信息</div>
          <div class="detail_info">
            <span class="detail_label input_label">收货人姓名</span>
            <span class="detail_value">张三</span>
          </div>
          <div class="detail_info">
            <span class="detail_label input_label">收货地址</span>
            <span class="detail_value"> 陕西省 西安市 雁塔区 西大新区</span>
          </div>
          <div class="detail_info">
            <span class="detail_label input_label">邮政编码</span>
            <span class="detail_value">710000</span>
          </div>
          <div class="detail_info">
            <span class="detail_label input_label">联系方式</span>
            <span class="detail_value">15931596322</span>
          </div>
        </div>
        <div class="detailBox process_long">
          <div class="detail_title">订单状态</div>
          <div class="process_bar">
            <div class="process_point point_1" :class="process === 1?'point_select':''">
              <span>1</span>
              <div class="info">等待买家付款</div>
            </div>
            <div class="process_point point_2" :class="process === 2?'point_select':''">
              <span>2</span>
              <div class="info">等待卖家发货</div>
            </div>
            <div class="process_point point_3" :class="process === 3?'point_select':''">
              <span>3</span>
              <div class="info">等待买家确认</div>
            </div>
            <div class="process_point point_4" :class="process === 4?'point_select':''">
              <span>4</span>
              <div class="info">订单交易完成</div>
            </div>
          </div>
        </div>
        <div class="detailBox">
          <div class="detail_title">订单项信息</div>
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
        <div class="detailBox_last">
          <div class="detail_title">流程时间</div>
          <div class="detail_info">
            <span class="input_label detail_label">支付日期</span>
            <span class="detail_value"> 2018-05-01 23:49:46</span>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">发货日期</span>
            <span class="detail_value"> 2018-05-03 16:19:47</span>
          </div>
          <div class="detail_info">
            <span class="input_label detail_label">确认日期</span>
            <span class="detail_value"> 2018-05-13 22:08:08</span>
          </div>
        </div>
        <div class="detail_tools">
          <p class="btn reset">取消</p>
        </div>
      </div>
    </div>
</template>

<script>
  import XmTable from '../xm-table'
  export default {
    name: 'orderDetail',
    components:{
      XmTable,
    },
    data(){
      return{
        process:4,
        tableTitle:['产品图片','产品名称','单价','数量','价格','备注'],
        tableData:[
          ['1.jpg','吸尘器','288','1','288','预购'],
        ],
        detailPath: '/productDetail',
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
  .process_bar{
    width: 600px;
    height: 2px;
    background-color: #ccc;
    border-radius: 5px;
    position: relative;
    margin: 30px 0 0 50px;
  }
  .process_point{
    position: absolute;
    width: 1.4em;
    height: 1.4em;
    line-height: 1.4em;
    text-align: center;
    border-radius: 50%;
    background: #ccc;
    top: -0.7em;
  }
  .point_1{
    left: 0;
  }
  .point_2{
    left: 33%;
  }
  .point_3{
    left: 66%;
  }
  .point_4{
    left: 100%;
  }
  .process_point span{
    position: relative;
    top: 1px;
    color: white;
  }
  .process_point .info{
    font-size: 12px;
    width: 6em;
    margin-left: -25px;
    /*color: #666;*/
    margin-top: 3px;
    color: inherit;
  }
  .process_long{
    height: 130px;
   }
  .point_select{
    background-color: #ff7874 !important;
    color: #ff7874 !important;
  }
</style>
