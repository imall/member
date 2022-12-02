exports.ids = [19,3,5];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MemberGlobalCard.vue?vue&type=template&id=6a336cc0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div" + _vm._ssrClass("w-full bg-white rounded-md relative", [_vm.height, _vm.px, _vm.py, _vm.mx, _vm.my, _vm.customCss, {
    'shadow-[0px_0px_4px_1px_#F1FF99]': _vm.isEdit,
    'shadow-[0px_2px_2px_rgba(0,0,0,0.25)]': !_vm.isEdit
  }]) + ">", "</div>", [_vm._t("default")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MemberGlobalCard.vue?vue&type=template&id=6a336cc0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MemberGlobalCard.vue?vue&type=script&lang=js&
/* harmony default export */ var MemberGlobalCardvue_type_script_lang_js_ = ({
  props: {
    isEdit: {
      type: Boolean,
      default: () => false
    },
    height: {
      type: String,
      default: () => 'min-h-[40px]'
    },
    py: {
      type: String,
      default: () => 'py-3'
    },
    px: {
      type: String,
      default: () => 'px-3'
    },
    my: {
      type: String,
      default: () => 'mb-2.5'
    },
    mx: {
      type: String,
      default: () => ''
    },
    customCss: {
      type: String,
      default: () => ''
    }
  },
  name: 'MemberGlobalCard'
});
// CONCATENATED MODULE: ./components/MemberGlobalCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MemberGlobalCardvue_type_script_lang_js_ = (MemberGlobalCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MemberGlobalCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MemberGlobalCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74a7f870"
  
)

/* harmony default export */ var MemberGlobalCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ItemLoading.vue?vue&type=template&id=1ef402b5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.isLoading ? _c('div', {
    staticClass: "w-full min-h-[100px] flex items-center justify-center pointer-events-none z-50"
  }, [_c('div', {
    staticClass: "border-[5px] border-[#e2e2e2] border-t-[5px] border-t-[#232D4E] rounded-full w-10 h-10 animate-spin-slow"
  })]) : _vm._e()])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ItemLoading.vue?vue&type=template&id=1ef402b5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ItemLoading.vue?vue&type=script&lang=js&
/* harmony default export */ var ItemLoadingvue_type_script_lang_js_ = ({
  computed: {
    isLoading() {
      return this.$store.state.itemLoading.isLoading;
    }
  }
});
// CONCATENATED MODULE: ./components/ItemLoading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ItemLoadingvue_type_script_lang_js_ = (ItemLoadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ItemLoading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ItemLoadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02dd56be"
  
)

/* harmony default export */ var ItemLoading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(15).default
module.exports.__inject__ = function (context) {
  add("09539e34", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointmentRecord_vue_vue_type_style_index_0_id_ed8b9690_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointmentRecord_vue_vue_type_style_index_0_id_ed8b9690_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointmentRecord_vue_vue_type_style_index_0_id_ed8b9690_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointmentRecord_vue_vue_type_style_index_0_id_ed8b9690_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_appointmentRecord_vue_vue_type_style_index_0_id_ed8b9690_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(14);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".question{width:30px;height:30px;line-height:30px;text-align:center;font-weight:700;border-radius:50%;position:absolute;border:2px solid #000;color:#000;top:10px;right:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointmentRecord.vue?vue&type=template&id=ed8b9690&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "w-full max-w-[768px] mx-auto",
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode("<div class=\"fixed left-0 top-0 w-full px-[10%] text-lg bg-white py-4 flex items-center\">", "</div>", [_c('fa', {
    staticClass: "text-2xl",
    attrs: {
      "icon": "fa-solid fa-angle-left"
    },
    on: {
      "click": function ($event) {
        return _vm.$router.go(-1);
      }
    }
  }), _vm._ssrNode(" <h2 class=\"absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] text-lg font-bold\">\n      預約記錄\n    </h2>")], 2), _vm._ssrNode(" <div class=\"flex justify-center gap-5 text-sm mt-3 mb-4 px-4\"><button" + _vm._ssrClass("rounded-xl py-2 w-1/2 bg-white border border-[#232D4E] shadow-[0_5px_5px_rgba(0,0,0,0.2)] duration-300", {
    'bg-[#232D4E] text-white shadow-none': _vm.selectTab === '未完成'
  }) + ">\n      未完成\n    </button> <button" + _vm._ssrClass("rounded-xl py-2 w-1/2 bg-white border border-[#232D4E] shadow-[0_5px_5px_rgba(0,0,0,0.2)] duration-300", {
    'bg-[#232D4E] text-white shadow-none': _vm.selectTab === '已結束'
  }) + ">\n      已結束\n    </button></div> "), _vm.appointmentRecord.length > 0 ? _vm._ssrNode("<div id=\"orderList\">", "</div>", [_vm._l(_vm.appointmentRecord, function (item) {
    return _c('MemberGlobalCard', {
      key: item.id,
      attrs: {
        "data-aos": "zoom-in",
        "data-aos-anchor": "#firstPos",
        "data-aos-once": "true",
        "data-aos-duration": "300",
        "isEdit": item.isEdit
      }
    }, [_c('div', {
      staticClass: "grid grid-cols-4 gap-3"
    }, [_c('div', {
      pre: true,
      attrs: {
        "class": "col-span-1"
      }
    }, [_c('p', {
      pre: true,
      attrs: {
        "class": "text-sm mt-1"
      }
    }, [_vm._v("預約日期")])]), _vm._v(" "), _c('div', {
      staticClass: "col-span-3"
    }, [_c('p', {
      directives: [{
        name: "formatDate",
        rawName: "v-formatDate",
        value: 'time',
        expression: "'time'"
      }],
      staticClass: "text-lg font-bold"
    }, [_vm._v("\n            " + _vm._s(item.date) + "\n          ")])]), _vm._v(" "), _c('div', {
      pre: true,
      attrs: {
        "class": "col-span-1"
      }
    }, [_c('p', {
      pre: true,
      attrs: {
        "class": "text-sm"
      }
    }, [_vm._v("狀態")])]), _vm._v(" "), _c('div', {
      staticClass: "col-span-3 flex items-center gap-2",
      class: {
        'text-[#FEB401]': item.status === '未完成',
        'text-[#16A34A]': item.status === '預約成功' || item.status === '已完成',
        'text-[#F43F5E]': item.status === '設計師已拒絕' || item.status === '設計師已取消'
      }
    }, [item.status !== '設計師已取消' ? _c('p', [_vm._v(_vm._s(item.status))]) : _vm._e(), _vm._v(" "), item.status === '設計師已取消' ? _c('span', [_vm._v("已取消")]) : _vm._e(), item.status === '未完成' ? _c('span', {
      staticClass: "text-xs text-[#666]"
    }, [_vm._v("(待設計師確認後才算預約完成)")]) : _vm._e()]), _vm._v(" "), _c('div', {
      pre: true,
      attrs: {
        "class": "col-span-1"
      }
    }, [_c('p', {
      pre: true,
      attrs: {
        "class": "text-sm"
      }
    }, [_vm._v("設計師")])]), _vm._v(" "), _c('div', {
      staticClass: "col-span-3"
    }, [item.designer ? _c('p', {
      staticClass: "text-sm line-clamp-1"
    }, [_vm._v("\n            " + _vm._s(item.designer.name) + "\n            "), item.designer.nickName ? _c('span', [_vm._v("(" + _vm._s(item.designer.nickName) + ")")]) : _vm._e()]) : _c('p', {
      staticClass: "text-sm"
    }, [_vm._v("不指定")])]), _vm._v(" "), item.remarkForCustomer ? _c('div', {
      staticClass: "col-span-1"
    }, [_c('p', {
      staticClass: "text-sm"
    }, [_vm._v("備註")])]) : _vm._e(), _vm._v(" "), item.remarkForCustomer ? _c('div', {
      staticClass: "col-span-3"
    }, [_c('p', {
      staticClass: "text-sm"
    }, [_vm._v(_vm._s(item.remarkForCustomer))])]) : _vm._e(), _vm._v(" "), item.messageForCustomer ? _c('div', {
      staticClass: "col-span-1"
    }, [_c('p', {
      staticClass: "text-sm"
    }, [_vm._v("設計師留言")])]) : _vm._e(), _vm._v(" "), item.messageForCustomer ? _c('div', {
      staticClass: "col-span-3"
    }, [_c('p', {
      staticClass: "text-sm"
    }, [_vm._v(_vm._s(item.messageForCustomer))])]) : _vm._e(), _vm._v(" "), item.isEdit ? _c('div', {
      staticClass: "col-span-1"
    }, [_c('div', {
      staticClass: "flex items-center gap-1 mt-5"
    }, [_c('fa', {
      staticClass: "text-[#aeaeae] text-xs",
      attrs: {
        "icon": "fa-light fa-pen"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "text-[#aeaeae] text-xs"
    }, [_vm._v("已修改")])], 1)]) : _vm._e()]), _vm._v(" "), item.status === '設計師已取消' || item.status === '設計師已拒絕' || item.status === '已完成' ? _c('button', {
      staticClass: "w-full mt-4 py-2 text-white text-sm bg-[#FEB401]",
      attrs: {
        "data-mdb-ripple": "true",
        "data-mdb-ripple-color": "light"
      },
      on: {
        "click": function ($event) {
          return _vm.$router.push('/member/appointment');
        }
      }
    }, [_c('p', {
      staticClass: "text-sm"
    }, [_vm._v("重新預約")])]) : _c('button', {
      staticClass: "w-full mt-4 py-2 text-white text-sm flex items-center justify-center gap-2",
      class: {
        hidden: _vm.isHidden(item),
        'bg-[#F43F5E]': _vm.isCancel !== item.id,
        'bg-[#bebebe]': _vm.isCancel === item.id
      },
      on: {
        "click": function ($event) {
          return _vm.cancelReservation(item.id, item.date, item.designer);
        }
      }
    }, [_vm.isCancel === item.id ? _c('fa', {
      staticClass: "animate-spin",
      attrs: {
        "icon": "fa-solid fa-spinner"
      }
    }) : _vm._e(), _vm._v(" "), _c('p', {
      staticClass: "text-sm"
    }, [_vm._v("取消預約")])], 1), _vm._v(" "), _c('button', {
      staticClass: "question",
      on: {
        "click": function ($event) {
          return _vm.getQuestionAnswer(item.id);
        }
      }
    }, [_vm._v("？")])]);
  }), _vm._ssrNode(" "), _c('ItemLoading')], 2) : _vm._e(), _vm._ssrNode(" "), _vm.appointmentRecord.length === 0 && !_vm.isLoading ? _vm._ssrNode("<div>", "</div>", [_c('MemberGlobalCard', {
    attrs: {
      "customCss": 'min-h-[200px] flex items-center justify-center',
      "data-aos": "zoom-in",
      "data-aos-once": "true",
      "data-aos-duration": "300"
    }
  }, [_c('p', {
    staticClass: "text-[#555]"
  }, [_vm._v("目前尚無紀錄")])])], 1) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/appointmentRecord.vue?vue&type=template&id=ed8b9690&

// EXTERNAL MODULE: ./utils/cancelToken.js
var cancelToken = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointmentRecord.vue?vue&type=script&lang=js&

/* harmony default export */ var appointmentRecordvue_type_script_lang_js_ = ({
  name: "member-appointmentRecord",
  head() {
    return {
      meta: [{
        name: "theme-color",
        content: "#ffffff"
      }]
    };
  },
  data() {
    return {
      appointmentRecord: [],
      selectTab: "未完成",
      currentPage: 0,
      totalPage: 0,
      isGetting: false,
      isEnd: false,
      getting: "",
      isCancel: ""
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    // 取得未完成紀錄
    async getNotDoneOrders() {
      if (this.getting === "notDoneOrders") return;
      this.getting = "notDoneOrders";
      Object(cancelToken["b" /* cacelPendingForBookingRecords */])();
      this.$store.dispatch("loading/isLoading", true);
      this.appointmentRecord = [];
      this.isEnd = false;
      this.currentPage = 0;
      const needKey = "id, no, date, designer{name, nickName}, status, remarkForCustomer, messageForCustomer,troubleShooting";
      await this.api.getNotDoneCustomerReservationRecords(needKey, this.currentPage).then(res => {
        this.appointmentRecord = res.data.getCustomerReservationRecords.orders;
        // 計算總頁數
        this.totalPage = Math.ceil(res.data.getCustomerReservationRecords.totalCount / 20);
        // 判斷是否可滾動加載
        if (this.totalPage <= 1) this.isEnd = true;
        if (this.totalPage > 1) {
          const container = document.querySelector(".member__container");
          container.addEventListener("scroll", this.scrollGetOrders);
        }
        console.log(this.appointmentRecord);
        this.getting = "";
        this.$store.dispatch("loading/isLoading", false);
      }).catch(err => {
        this.getting = "";
        console.log(err);
      });
    },
    // 取得完成紀錄
    async getDoneOrders() {
      if (this.getting === "dontOrders") return;
      this.getting = "dontOrders";
      Object(cancelToken["b" /* cacelPendingForBookingRecords */])();
      this.$store.dispatch("loading/isLoading", true);
      this.appointmentRecord = [];
      this.isEnd = false;
      this.currentPage = 0;
      const needKey = "id, no, date, designer{name, nickName}, status, remarkForCustomer";
      await this.api.getDoneCustomerReservationRecords(needKey, this.currentPage).then(res => {
        this.appointmentRecord = res.data.getCustomerReservationRecords.orders;
        this.totalPage = Math.ceil(res.data.getCustomerReservationRecords.totalCount / 20);
        if (this.totalPage <= 1) this.isEnd = true;
        if (this.totalPage > 1) {
          const container = document.querySelector(".member__container");
          container.addEventListener("scroll", this.scrollGetOrders);
        }
        this.getting = "";
        this.$store.dispatch("loading/isLoading", false);
      }).catch(err => {
        this.getting = "";
        console.log(err);
      });
    },
    // 滾動加載
    scrollGetOrders() {
      const orderList = document.querySelector("#orderList");
      const triggerDistance = 200;
      const distance = orderList.getBoundingClientRect().bottom - window.innerHeight;
      if (!this.isGetting && !this.isEnd && distance < triggerDistance) {
        this.$store.dispatch("itemLoading/isLoading", true);
        this.isGetting = true;
        this.isEnd = false;
        this.currentPage++;
        if (this.currentPage === this.totalPage - 1) {
          this.isEnd = true;
          const container = document.querySelector(".member__container");
          container === null || container === void 0 ? void 0 : container.removeEventListener("scroll", this.scrollGetOrders);
        }
        const needKey = "id, no, date, designer{name, nickName}, status, remarkForCustomer";
        switch (this.selectTab) {
          case "未完成":
            this.api.getNotDoneCustomerReservationRecords(needKey, this.currentPage).then(res => {
              this.appointmentRecord = this.appointmentRecord.concat(res.data.getCustomerReservationRecords.orders);
              // 計算總頁數
              this.totalPage = Math.ceil(res.data.getCustomerReservationRecords.totalCount / 20);
              // 判斷是否可滾動加載
              if (this.totalPage <= 1) this.isEnd = true;
              this.isGetting = false;
              this.$store.dispatch("itemLoading/isLoading", false);
            }).catch(err => {
              this.isGetting = false;
              console.log(err);
            });
            break;
          case "已結束":
            this.api.getDoneCustomerReservationRecords(needKey, this.currentPage).then(res => {
              this.appointmentRecord = this.appointmentRecord.concat(res.data.getCustomerReservationRecords.orders);
              // 計算總頁數
              this.totalPage = Math.ceil(res.data.getCustomerReservationRecords.totalCount / 20);
              // 判斷是否可滾動加載
              if (this.totalPage <= 1) this.isEnd = true;
              this.isGetting = false;
              this.$store.dispatch("itemLoading/isLoading", false);
            }).catch(err => {
              this.isGetting = false;
              console.log(err);
            });
            break;
        }
      }
    },
    // 判斷隱藏取消預約按鈕
    isHidden(item) {
      const toDay = Date.now();
      if (item.date < toDay && (item.status === "預約成功" || item.status === "未完成")) return true;
      return false;
    },
    // 取消預約
    cancelReservation(orderId, timestamp, designerName) {
      const newDate = new Date(timestamp);
      const year = newDate.getFullYear();
      const month = this.formatDate(newDate.getMonth() + 1);
      const date = this.formatDate(newDate.getDate());
      const hours = this.formatDate(newDate.getHours());
      const min = this.formatDate(newDate.getMinutes());
      const name = designerName !== null && designerName !== void 0 && designerName.name ? designerName === null || designerName === void 0 ? void 0 : designerName.name : "不指定";
      this.$swal.fire({
        html: `<p class="text-lg">確定要取消<br>
        <span class="text-[#FEB401] font-bold">${year}/${month}/${date} ${hours}:${min} ${name}</span> 
        的預約嗎？
        </p>`,
        showCancelButton: true,
        confirmButtonText: "取消預約",
        confirmButtonColor: "#232D4E",
        cancelButtonText: "取消"
      }).then(result => {
        if (result.isConfirmed) {
          this.isCancel = orderId;
          this.api.customerCancelReservation(orderId).then(res => {
            console.log(res);
            this.isCancel = "";
            if (!res.hasOwnProperty('errors')) {
              this.appointmentRecord = this.appointmentRecord.filter(item => item.id !== orderId);
              this.$swal.fire({
                icon: "success",
                title: `<h3 class="text-2xl">取消預約成功</h3>`,
                background: "#fff",
                iconColor: "#FEB401",
                timer: 1500,
                showConfirmButton: false
              });
            } else {
              this.$swal.fire({
                icon: "error",
                html: res.errors[0].message,
                background: "#fff",
                iconColor: '#F43F5E',
                showConfirmButton: true
              });
            }
          }).catch(err => {
            this.isCancel = "";
            console.log(err);
          });
        }
      });
    },
    getQuestionAnswer(id) {
      let goalarray = this.appointmentRecord.filter(item => {
        return item.id === id;
      });
      let troubleShooting = goalarray ? goalarray[0].troubleShooting : "";
      this.$swal.fire({
        html: troubleShooting,
        background: "#fff",
        iconColor: "#232D4E",
        showConfirmButton: true
      });
    },
    // 轉換日期
    formatDate(obj) {
      if (obj < 10) return `0${obj}`;
      return obj;
    }
  },
  mounted() {
    this.getNotDoneOrders();
  },
  beforeDestroy() {
    const vm = this;
    const container = document.querySelector(".member__container");
    if (container) {
      container === null || container === void 0 ? void 0 : container.removeEventListener("scroll", vm.scrollGetOrders);
    }
  }
});
// CONCATENATED MODULE: ./pages/member/appointmentRecord.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_appointmentRecordvue_type_script_lang_js_ = (appointmentRecordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/appointmentRecord.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_appointmentRecordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0e53dca1"
  
)

/* harmony default export */ var appointmentRecord = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberGlobalCard: __webpack_require__(43).default,ItemLoading: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=appointmentRecord.js.map