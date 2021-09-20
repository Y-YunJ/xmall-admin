<template>
    <div class="home_content">
      <div class="container">
        <div class="page_top text_select_no">
          <div class="formBox">
            <span class="input_label">打赏人昵称</span>
            <input class="input" type="text">
            <p class="btn search" v-waves>查询</p>
            <p class="btn reset" v-waves>重置</p>
          </div>
          <div class="formBox">
            <span class="input_label">打赏状态</span>
            <input type="checkbox" class="input" value="待审核">
            <span class="input_label">待审核</span>
            <input type="checkbox" class="input" value="已审核">
            <span class="input_label">已审核</span>
            <input type="checkbox" class="input" value="未确认">
            <span class="input_label" style="margin-right: 20px">未确认</span>
            <span class="input_label">金额</span>
            <input class="input input_number" type="number" placeholder="最低价"/>
            <p class="split">—</p>
            <input class="input input_number" type="number" placeholder="最高价"/>

          </div>
          <div class="formBox">
            <p class="btn click" v-waves>刷新打赏列表</p>
          </div>
        </div>
        <div class="data_count">
          <svg t="1631437410441" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1013" width="18" height="18"><path d="M949.59255638 912.58309442l-258.55141893-258.55141891c27.85719934-30.08806335 50.02283537-64.40904818 66.01069413-102.1621315 18.47613014-43.58765071 27.79999771-89.89237941 27.7999977-137.59854826s-9.32386754-93.98229675-27.7999977-137.59854829c-17.78971047-42.10040802-43.27304172-79.88209216-75.70637235-112.34402365-32.46193148-32.46193148-70.24361557-57.91666189-112.3440236-75.73497313-43.61625155-18.44752934-89.92098021-27.79999771-137.62714913-27.7999977-47.67756807 0-93.98229675 9.35246835-137.59854827 27.7999977-42.10040802 17.78971047-79.88209216 43.27304172-112.31542283 75.70637231-32.46193148 32.46193148-57.91666189 70.24361557-75.73497314 112.34402364-18.44752934 43.58765071-27.79999771 89.89237941-27.79999771 137.5985483s9.35246835 93.98229675 27.79999771 137.59854827c17.81831127 42.07180724 43.27304172 79.85349134 75.73497314 112.31542283 32.43333065 32.46193148 70.24361557 57.91666189 112.31542283 75.70637234 43.58765071 18.47613014 89.89237941 27.79999771 137.59854827 27.79999768 47.70616887 0 94.01089758-9.32386754 137.62714913-27.79999768 23.9388869-10.12469051 46.47633361-22.73765244 67.44073514-37.69588168l261.78331167 261.78331169c7.09300353 7.09300353 16.38827025 10.63950529 25.65493617 10.63950528 9.32386754 0 18.59053345-3.54650176 25.68353694-10.63950528C963.77856345 949.79276213 963.77856345 926.79770231 949.59255638 912.58309442L949.59255638 912.58309442zM431.3742865 695.01665153c-154.81624235 0-280.74565578-125.95801426-280.74565577-280.74565578 0-154.81624235 125.92941344-280.7742566 280.74565577-280.77425661 154.84484316 0 280.80285742 125.95801426 280.80285744 280.77425661C712.17714394 569.05863726 586.21912966 695.01665153 431.3742865 695.01665153L431.3742865 695.01665153zM431.3742865 695.01665153" p-id="1014" fill="#ff7874"></path></svg>
          <span class="input_label" style="margin-left: 20px">查看合计</span>
          <span class="input_label">金额总数:</span>
          <span class="num">{{total}}</span>
          <span class="input_label">元</span>
        </div>
        <xm-table :title="tableTitle"
                  :data-list="tableData"
                  :state="tableState"
                  :state-index="4"
                  :detail="true"
                  :sort="true"
                  :path="detailPath"
        />
      </div>
    </div>
</template>

<script>
  import XmTable from '../xm-table'

  export default {
    name: 'rewardManagePage',
    components: {XmTable},
    data(){
      return{
        tableTitle:['打赏人昵称','金额','打赏时间','留言','状态'],
        tableState:[
          {
            type:'待审核',
            color:'#f9B689'
          },{
            type:'已审核',
            color:'#8BB979'
          },{
            type:'未确认',
            color:'#ccc'
          }],
        tableData:[
          ['口袋','500','2019-05-08','123','待审核'],
          ['vsd','80','2019-09-08','good','已审核'],
          ['bh','66','2019-10-13','','未确认'],
          ['jruj','272','2020-05-03','123','已审核'],
          ['nern','275','2020-07-22','gb','待审核'],
          ['nrtjnr','2','2020-08-24','nhf','已审核'],
          ['wh','476','2021-02-08','','待审核'],
          ['jhrj','165','2021-03-07','dvdddd','未确认'],
          ['rj','7498','2021-06-16','nice','已审核'],
          ['tyjr','165','2022-01-01','3434','已审核'],
        ],
        detailPath: '/',
      }
    },
    computed:{
      total(){
        let res = 0
        for(let i = 0;i<this.tableData.length;i++){
          res+=parseInt(this.tableData[i][1])
        }
        return res
      }
    },
  }
</script>

<style scoped>

</style>
