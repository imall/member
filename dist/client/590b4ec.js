(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{356:function(t,e,c){"use strict";c.r(e);c(21),c(59);var n={name:"appointment-check",data:function(){return{checkInfo:{},isLoading:!0}},methods:{forMatDate:function(t){return t<10?"0"+t:t}},mounted:function(){var t=this,e=JSON.parse(window.localStorage.getItem("bookingData"));this.$store.dispatch("appointmentData/handleClearData"),setTimeout((function(){e?(t.checkInfo=e,t.isLoading=!1,window.localStorage.removeItem("bookingData")):t.$router.push("/member/appointment")}),300)}},o=c(33),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.isLoading?t._e():e("section",[e("div",{staticClass:"w-full flex items-center justify-center gap-2 mt-5"},[e("div",{staticClass:"w-4 h-4 rounded-full border border-[#4ADE80] flex justify-center items-center"},[e("fa",{staticClass:"text-[#4ADE80] text-xs",attrs:{icon:"fa-solid fa-check"}})],1),t._v(" "),e("p",{pre:!0,attrs:{class:"text-sm"}},[t._v("預約明細")])]),t._v(" "),e("div",{staticClass:"w-full bg-white rounded-md shadow-md p-3 mt-3"},[e("div",{staticClass:"grid grid-cols-12 text-sm gap-3 mt-3"},[e("div",{pre:!0,attrs:{class:"col-span-3"}},[t._v("日期")]),t._v(" "),e("div",{directives:[{name:"formatDate",rawName:"v-formatDate",value:"time",expression:"'time'"}],staticClass:"col-span-9"},[t._v(t._s(t.checkInfo.date))]),t._v(" "),e("div",{pre:!0,attrs:{class:"col-span-3"}},[t._v("狀態")]),t._v(" "),e("div",{staticClass:"col-span-9 flex items-center gap-2",class:{"text-[#FEB401]":"待確認"===t.checkInfo.status,"text-[#4ADE80]":"待確認"!==t.checkInfo.status}},[t._v(t._s(t.checkInfo.status)),"待確認"===t.checkInfo.status?e("p",{staticClass:"text-[#666] text-[12px]"},[t._v("(待設計師確認後才算預約完成)")]):t._e()]),t._v(" "),e("div",{pre:!0,attrs:{class:"col-span-3"}},[t._v("設計師")]),t._v(" "),t.checkInfo.designer?e("div",{staticClass:"col-span-9"},[t._v(t._s(t.checkInfo.designer.name))]):e("div",{staticClass:"col-span-9"},[t._v("不指定")]),t._v(" "),t.checkInfo.remarkForCustomer?e("div",{staticClass:"col-span-3"},[t._v("備註")]):t._e(),t._v(" "),t.checkInfo.remarkForCustomer?e("div",{staticClass:"col-span-9"},[t._v(t._s(t.checkInfo.remarkForCustomer))]):t._e()]),t._v(" "),t._m(0)])])}),[function(){var t=this;return(0,t._self._c)("button",{staticClass:"w-full py-2 text-white bg-[#232D4E] mt-5",on:{click:function(e){return t.$router.push("/member/appointmentRecord")}}},[t._v("查看我的預約紀錄")])}],!1,null,null,null);e.default=component.exports}}]);