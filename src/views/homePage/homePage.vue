<template>
<!--首页展示页-->
    <div class="home_content">
      <div class="container">
        <div class="dateBtnBox">
          <p class="btn click" v-waves>最近一周</p>
          <div class="dateBox btn">
            <input type="date" title="开始日期" min="2021-09-05" max="2021-09-05" value="2021-09-05">
            <span class="split">—</span>
            <input type="date" title="结束日期" min="2018-01-01" max="2021-09-11" value="2021-09-11">
          </div>
          <p class="btn search" v-waves>查询</p>
        </div>
        <div class="statisticBox">
          <router-link to=" " class="item">
            <p class="itemTitle">
              <span class="lt">上架产品数量</span>
              <span class="rt">(单位：件)</span>
            </p>
            <span class="itemNum">84</span>
            <div class="itemBar" style="background-color: #f89e9e"></div>
          </router-link>
          <router-link to=" " class="item">
            <p class="itemTitle">
              <span class="lt">注册用户数量</span>
              <span class="rt">(单位：人)</span>
            </p>
            <span class="itemNum">109</span>
            <div class="itemBar" style="background-color: #9ea7f5"></div>
          </router-link>
          <router-link to=" " class="item">
            <p class="itemTitle">
              <span class="lt">成交订单数量</span>
              <span class="rt">(单位：件)</span>
            </p>
            <span class="itemNum">185</span>
            <div class="itemBar" style="background-color: #ffdea4"></div>
          </router-link>
        </div>
        <div class="chartBox" id="chartBox">
        </div>
      </div>
    </div>
</template>

<script>
  import 'echarts/lib/chart/line'
  import * as echarts from 'echarts'
  export  default {
    name: 'homePage',
    data(){
      return{
        chart:null,
      }
    },
    methods:{
      drawLine(){
        this.chart.setOption({
          title:{
            text:'商城订单交易额',
            textStyle:{
              color:'#333',
              fontSize:18,
              fontWeight:'bold'
            },
            left:'left',
            top:'top',
          },
          tooltip:{
            trigger:'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          toolbox:{
            feature:{
              saveAsImage: {},
              dataView: {}
            },
            right: 15
          },
          legend:{
            data:['总交易额', '交易完成', '等待买家确认', '等待卖家发货', '等待买家付款']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['09/05','09/06','09/07','09/08','09/09','09/10','09/11',]
          },
          yAxis: {
            type: "value",
            splitLine:{show: false}
          },
          series:[
            {
              name:'总交易额',
              type:'line',
              label: {
                show: true,
                position: 'top',
                fontSize : 14,
                color : '#f89e9e'
            },
              data: [12,45,96,84,2,65,55],
              areaStyle: {},
              itemStyle: {
               //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                    offset: 0, color: '#f89e9e' // 0% 处的颜色
                  }, {
                    offset: 0.4, color: '#fccfcf' // 40% 处的颜色
                  }, {
                    offset: 1, color: '#fff' // 100% 处的颜色
                  }]
                ), //背景渐变色
            },
              lineStyle: {        // 系列级个性化折线样式
                width: 2,
                type: 'solid',
                color: "#f89e9e" //折线的颜色
              },
              emphasis: {
                color: '#f89e9e',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'dotted',
                  color: "f89e9e"
                }
              }
            },
            {
              name: '交易完成',
              type: 'line',
              data: [16,59,79,61,96,23,5],
              areaStyle: {},
              itemStyle: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                      offset: 0, color: '#9ea7f5' // 0% 处的颜色
                    }, {
                      offset: 0.4, color: '#aecaf9' // 40% 处的颜色
                    }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                    }]
                  ), //背景渐变色
              },
              lineStyle: {        // 系列级个性化折线样式
                width: 2,
                type: 'solid',
                color: "#9ea7f5" //折线的颜色
              },
              emphasis: {
                color: '#9ea7f5',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'dotted',
                  color: "9ea7f5"
                }
              }
            },
            {
              name: '等待买家确认',
              type: 'line',
              data: [27,49,46,46,92,64,32],
              areaStyle: {},
              itemStyle: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                      offset: 0, color: '#ffdea4' // 0% 处的颜色
                    }, {
                      offset: 0.4, color: '#ffffc6' // 40% 处的颜色
                    }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                    }]
                  ), //背景渐变色
              },
              lineStyle: {        // 系列级个性化折线样式
                width: 2,
                type: 'solid',
                color: "#ffdea4" //折线的颜色
              },
              emphasis: {
                color: '#ffdea4',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'dotted',
                  color: "ffdea4"
                }
              }
            },
            {
              name: '等待卖家发货',
              type: 'line',
              data: [73,24,25,63,44,34,63],
              areaStyle: {},
              itemStyle: {
                 //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                      offset: 0, color: '#b8ffb7' // 0% 处的颜色
                    }, {
                      offset: 0.4, color: '#daffd9' // 40% 处的颜色
                    }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                    }]
                  ), //背景渐变色
              },
              lineStyle: {        // 系列级个性化折线样式
                width: 2,
                type: 'solid',
                color: "#b8ffb7" //折线的颜色
              },
              emphasis: {
                color: '#b8ffb7',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'dotted',
                  color: "b8ffb7"
                }
              }
            },
            {
              name: '等待买家付款',
              type: 'line',
              data: [27,25,63,68,36,86,83],
              areaStyle: {},
              itemStyle: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                      offset: 0, color: '#dfbdd6' // 0% 处的颜色
                    }, {
                      offset: 0.4, color: '#efdee8' // 40% 处的颜色
                    }, {
                      offset: 1, color: '#fff' // 100% 处的颜色
                    }]
                  ), //背景渐变色
              },
              lineStyle: {        // 系列级个性化折线样式
                width: 2,
                type: 'solid',
                color: "#dfbdd6" //折线的颜色
              },
              emphasis: {
                color: '#dfbdd6',
                lineStyle: {        // 系列级个性化折线样式
                  width: 2,
                  type: 'dotted',
                  color: "dfbdd6"
                }
              }
            }
          ],
        })
      }
    },
    mounted() {
      this.chart = echarts.init(document.getElementById('chartBox'));
      let that = this
      this.$nextTick(function () {
        that.drawLine()
        // let resizeTimer = null;
        // window.onresize = function() {
        //   if (resizeTimer) clearTimeout(resizeTimer);
        //   resizeTimer = setTimeout(function() {
        //     that.drawLine();
        //   }, 100);
        // }
      })
    },
  }
</script>

<style scoped>
  .lt{
    float:left;
  }
  .rt{
    float: right;
  }
  .dateBtnBox{
    width: 100%;
    text-align: left;
    margin-bottom: 40px;
  }
  .dateBox input{
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .dateBox .split{
    color: #999;
    padding: 0 10px;
  }
  .statisticBox{
    width: 100%;
    margin-bottom: 30px;
    padding: 0 20px;
    text-align: left;
  }
  .statisticBox .item{
    width: 35%;
    display: inline-block;
    padding: 0 40px;
    cursor: pointer;
    border-right: 1px solid #d9dbe8;
  }
  .statisticBox .item:first-child{
    width: 31.5%;
    padding-left: 0;
  }
  .statisticBox .item:last-child{
    width: 31.5%;
    padding-right: 0;
    border-right: none;
  }
  .statisticBox .item .itemTitle{
    height: 20px;
    text-indent: 3px;
    margin: 0 0 15px;
    font-weight: bold;
    font-size: 14px;
    color: #666;
  }
  .statisticBox .item .itemNum{
    font-size: 28px;
    font-weight: bold;
    color: #666;
  }
  .statisticBox .item .itemBar{
    width: 100%;
    height: 6px;
    border-radius: 10px;
    margin-top: 15px;
  }
  .chartBox{
    width: 100%;
    height: 500px;
    user-select: none;
    position: relative;
    border: 1px solid #eee;
    padding: 20px;
  }
</style>
