(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{373:function(e,t,r){"use strict";r.r(t);r(153);var n={props:{totalPage:{type:Number,default:1}},data:function(){return{currentPage:1,pageTab:[],currentPageTab:0}},methods:{changePage:function(){this.$emit("changePage",this.currentPage)}},mounted:function(){for(var e=[],i=0;i<this.totalPage;i++){i%5==0&&e.push([]),e[parseInt(i/5)].push(i+1)}this.pageTab=e}},c=r(33),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("section",[e.totalPage>1?t("ul",{staticClass:"flex justify-center items-center gap-1 mt-8 select-none"},[t("li",{staticClass:"group px-3 py-2 rounded-full cursor-pointer-[#232D4E]-0-white flex justify-center items-center",class:{"pointer-events-none":1===e.currentPage},on:{click:function(t){1===e.currentPage?e.currentPage=1:e.currentPage-=1,e.currentPage%5==0?e.currentPageTab-=1:e.currentPageTab=e.currentPageTab,e.changePage()}}},[t("fa",{staticClass:"text-lg:text-white",class:{"text-[#a3a3a3]":1===e.currentPage,"text-[#232D4E]":1!==e.currentPage},attrs:{icon:"fa-solid fa-angle-left"}})],1),e._v(" "),e.totalPage<=5?e._l(e.totalPage,(function(r){return t("li",{key:r,staticClass:"h-9 w-9 flex justify-center items-center rounded-full cursor-pointer",class:{"bg-gradient-to-t from-[#5D7A9D] to-[#094194] text-white ring-0 font-bold":e.currentPage===r},on:{click:function(t){e.currentPage=r,e.changePage()}}},[e._v(e._s(r))])})):[t("li",{staticClass:"cursor-pointer px-3 py-2 rounded-full",class:{hidden:0===e.currentPageTab},on:{click:function(t){e.currentPageTab-=1,e.currentPage=e.pageTab[e.currentPageTab][4],e.changePage()}}},[t("fa",{attrs:{icon:"fa-regular fa-ellipsis"}})],1),e._v(" "),e._l(e.pageTab[e.currentPageTab],(function(r){return t("li",{key:r,staticClass:"w-9 h-9 flex justify-center items-center py-2 rounded-full cursor-pointer",class:{"bg-gradient-to-t from-[#5D7A9D] to-[#094194] text-white ring-[#232D4E]":e.currentPage===r},on:{click:function(t){e.currentPage=r,e.changePage()}}},[e._v(e._s(r))])})),e._v(" "),t("li",{staticClass:"cursor-pointer px-3 py-2 rounded-full",class:{hidden:e.currentPageTab===e.pageTab.length-1},on:{click:function(t){e.currentPageTab+=1,e.currentPage=e.pageTab[e.currentPageTab][0],e.changePage()}}},[t("fa",{attrs:{icon:"fa-regular fa-ellipsis"}})],1)],e._v(" "),t("li",{staticClass:"group px-3 py-2 rounded-full cursor-pointer-[#232D4E]-0-white",class:{"pointer-events-none":e.currentPage===e.totalPage},on:{click:function(t){e.currentPage===e.totalPage?e.currentPage=e.totalPage:e.currentPage+=1,e.currentPage%5==1?e.currentPageTab+=1:e.currentPageTab=e.currentPageTab,e.changePage()}}},[t("fa",{staticClass:"text-lg:text-white",class:{"text-[#a3a3a3]":e.currentPage===e.totalPage,"text-[#232D4E]":e.currentPage!==e.totalPage},attrs:{icon:"fa-solid fa-angle-right"}})],1)],2):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);