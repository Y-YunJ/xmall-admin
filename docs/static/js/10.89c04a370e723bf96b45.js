webpackJsonp([10],{ARlK:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"orderManagePage",components:{XmTable:s("umef").a},data:function(){return{tableTitle:["订单号","邮政编码","收货人","联系方式","订单状态"],tableState:[{type:"等待买家付款",color:"#C7B390"},{type:"等待卖家发货",color:"#f9B689"},{type:"等待买家确认",color:"#70ABF4"},{type:"交易成功",color:"#8BB979"},{type:"交易关闭",color:"#ccc"}],tableData:[["2020030520353001","253000","里斯","11634952642","等待买家付款"],["2020030520353001","253000","里斯","11634952642","等待买家付款"],["2020030520353001","253000","里斯","11634952642","等待买家确认"],["2020030520353001","253000","里斯","11634952642","等待买家付款"],["2020030520353001","253000","里斯","11634952642","交易关闭"],["2020030520353001","253000","里斯","11634952642","等待卖家发货"],["2020030520353001","253000","里斯","11634952642","等待买家付款"],["2020030520353001","253000","里斯","11634952642","交易成功"],["2020030520353001","253000","里斯","11634952642","等待买家付款"],["2020030520353001","253000","里斯","11634952642","等待买家付款"]],detailPath:"/orderDetail"}},computed:{total:function(){return this.tableData.length}}},l={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home_content"},[s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"data_count"},[s("svg",{staticClass:"icon",attrs:{t:"1631437410441",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1013",width:"18",height:"18"}},[s("path",{attrs:{d:"M949.59255638 912.58309442l-258.55141893-258.55141891c27.85719934-30.08806335 50.02283537-64.40904818 66.01069413-102.1621315 18.47613014-43.58765071 27.79999771-89.89237941 27.7999977-137.59854826s-9.32386754-93.98229675-27.7999977-137.59854829c-17.78971047-42.10040802-43.27304172-79.88209216-75.70637235-112.34402365-32.46193148-32.46193148-70.24361557-57.91666189-112.3440236-75.73497313-43.61625155-18.44752934-89.92098021-27.79999771-137.62714913-27.7999977-47.67756807 0-93.98229675 9.35246835-137.59854827 27.7999977-42.10040802 17.78971047-79.88209216 43.27304172-112.31542283 75.70637231-32.46193148 32.46193148-57.91666189 70.24361557-75.73497314 112.34402364-18.44752934 43.58765071-27.79999771 89.89237941-27.79999771 137.5985483s9.35246835 93.98229675 27.79999771 137.59854827c17.81831127 42.07180724 43.27304172 79.85349134 75.73497314 112.31542283 32.43333065 32.46193148 70.24361557 57.91666189 112.31542283 75.70637234 43.58765071 18.47613014 89.89237941 27.79999771 137.59854827 27.79999768 47.70616887 0 94.01089758-9.32386754 137.62714913-27.79999768 23.9388869-10.12469051 46.47633361-22.73765244 67.44073514-37.69588168l261.78331167 261.78331169c7.09300353 7.09300353 16.38827025 10.63950529 25.65493617 10.63950528 9.32386754 0 18.59053345-3.54650176 25.68353694-10.63950528C963.77856345 949.79276213 963.77856345 926.79770231 949.59255638 912.58309442L949.59255638 912.58309442zM431.3742865 695.01665153c-154.81624235 0-280.74565578-125.95801426-280.74565577-280.74565578 0-154.81624235 125.92941344-280.7742566 280.74565577-280.77425661 154.84484316 0 280.80285742 125.95801426 280.80285744 280.77425661C712.17714394 569.05863726 586.21912966 695.01665153 431.3742865 695.01665153L431.3742865 695.01665153zM431.3742865 695.01665153","p-id":"1014",fill:"#ff7874"}})]),t._v(" "),s("span",{staticClass:"input_label",staticStyle:{"margin-left":"20px"}},[t._v("查看合计")]),t._v(" "),s("span",{staticClass:"input_label"},[t._v("订单总数:")]),t._v(" "),s("span",{staticClass:"num"},[t._v(t._s(t.total))]),t._v(" "),s("span",{staticClass:"input_label"},[t._v("个")])]),t._v(" "),s("xm-table",{attrs:{title:t.tableTitle,"data-list":t.tableData,state:t.tableState,"state-index":4,detail:!0,sort:!0,path:t.detailPath}})],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page_top text_select_no"},[s("div",{staticClass:"formBox"},[s("span",{staticClass:"input_label"},[t._v("订单号")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"text"}}),t._v(" "),s("span",{staticClass:"input_label"},[t._v("邮政编码")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"text"}}),t._v(" "),s("p",{staticClass:"btn search"},[t._v("查询")]),t._v(" "),s("p",{staticClass:"btn reset"},[t._v("重置")])]),t._v(" "),s("div",{staticClass:"formBox"},[s("span",{staticClass:"input_label"},[t._v("订单状态")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"checkbox",value:"待付款"}}),t._v(" "),s("span",{staticClass:"input_label"},[t._v("待付款")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"checkbox",value:"待发货"}}),t._v(" "),s("span",{staticClass:"input_label"},[t._v("待发货")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"checkbox",value:"待确认"}}),t._v(" "),s("span",{staticClass:"input_label"},[t._v("待确认")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"checkbox",value:"交易成功"}}),t._v(" "),s("span",{staticClass:"input_label"},[t._v("交易成功")]),t._v(" "),s("input",{staticClass:"input",attrs:{type:"checkbox",value:"交易关闭"}}),t._v(" "),s("span",{staticClass:"input_label"},[t._v("交易关闭")])]),t._v(" "),s("div",{staticClass:"formBox"},[s("p",{staticClass:"btn click"},[t._v("刷新订单列表")])])])}]};var i=s("VU/8")(e,l,!1,function(t){s("sK2k")},"data-v-4dd115f3",null);a.default=i.exports},sK2k:function(t,a){}});
//# sourceMappingURL=10.89c04a370e723bf96b45.js.map