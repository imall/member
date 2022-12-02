exports.ids = [15];
exports.modules = {

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/check.vue?vue&type=template&id=61a0bcdb&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.isLoading ? _c('section', [_vm._ssrNode("<div class=\"w-full flex items-center justify-center gap-2 mt-5\">", "</div>", [_vm._ssrNode("<div class=\"w-4 h-4 rounded-full border border-[#4ADE80] flex justify-center items-center\">", "</div>", [_c('fa', {
    staticClass: "text-[#4ADE80] text-xs",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1), _vm._ssrNode(" <p class=\"text-sm\">預約明細</p>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"w-full bg-white rounded-md shadow-md p-3 mt-3\">", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-12 text-sm gap-3 mt-3\">", "</div>", [_vm._ssrNode("<div class=\"col-span-3\">日期</div> "), _c('div', {
    directives: [{
      name: "formatDate",
      rawName: "v-formatDate",
      value: 'time',
      expression: "'time'"
    }],
    staticClass: "col-span-9"
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.checkInfo.date)))]), _vm._ssrNode(" <div class=\"col-span-3\">狀態</div> <div" + _vm._ssrClass("col-span-9 flex items-center gap-2", {
    'text-[#FEB401]': _vm.checkInfo.status === '待確認',
    'text-[#4ADE80]': _vm.checkInfo.status !== '待確認'
  }) + ">" + _vm._ssrEscape(_vm._s(_vm.checkInfo.status)) + (_vm.checkInfo.status === '待確認' ? "<p class=\"text-[#666] text-[12px]\">(待設計師確認後才算預約完成)</p>" : "<!---->") + "</div> <div class=\"col-span-3\">設計師</div> " + (_vm.checkInfo.designer ? "<div class=\"col-span-9\">" + _vm._ssrEscape(_vm._s(_vm.checkInfo.designer.name)) + "</div>" : "<div class=\"col-span-9\">不指定</div>") + " " + (_vm.checkInfo.remarkForCustomer ? "<div class=\"col-span-3\">備註</div>" : "<!---->") + " " + (_vm.checkInfo.remarkForCustomer ? "<div class=\"col-span-9\">" + _vm._ssrEscape(_vm._s(_vm.checkInfo.remarkForCustomer)) + "</div>" : "<!---->"))], 2), _vm._ssrNode(" <button class=\"w-full py-2 text-white bg-[#232D4E] mt-5\">查看我的預約紀錄</button>")], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/appointment/check.vue?vue&type=template&id=61a0bcdb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/check.vue?vue&type=script&lang=js&
/* harmony default export */ var checkvue_type_script_lang_js_ = ({
  name: 'appointment-check',
  data() {
    return {
      checkInfo: {},
      isLoading: true
    };
  },
  methods: {
    forMatDate(obj) {
      if (obj < 10) return '0' + obj;
      return obj;
    }
  },
  mounted() {
    const info = JSON.parse(window.localStorage.getItem('bookingData'));
    this.$store.dispatch('appointmentData/handleClearData');
    setTimeout(() => {
      if (info) {
        this.checkInfo = info;
        this.isLoading = false;
        window.localStorage.removeItem('bookingData');
      } else this.$router.push('/member/appointment');
    }, 300);
  }
});
// CONCATENATED MODULE: ./pages/member/appointment/check.vue?vue&type=script&lang=js&
 /* harmony default export */ var appointment_checkvue_type_script_lang_js_ = (checkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/appointment/check.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  appointment_checkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ddaecdc"
  
)

/* harmony default export */ var check = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=check.js.map