exports.ids = [2];
exports.modules = {

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Coupon.vue?vue&type=template&id=ab138322&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"w-full bg-white rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] mb-2.5\">", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-12\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("col-span-4 text-white font-bold relative", {
    'bg-[#FEB401]': _vm.type,
    'bg-[#aeaeae]': !_vm.type
  }) + "><div class=\"absolute h-[calc(100%+20px)] w-2.5 top-0 -left-2.5 bg-[#f1f1f1] z-40\"></div> <div class=\"absolute h-2 5 w-2.5 -bottom-2.5 left-0 bg-[#f1f1f1] z-40\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 bg-[#f1f1f1]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[26px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[52px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[78px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[104px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_0px_rgba(0,0,0,0.25)]\"></div> <div class=\"w-full h-full flex justify-center items-center py-2 px-4\"><p class=\"text-2xl text-white font-bold\">" + _vm._ssrEscape(_vm._s(_vm.discount)) + "</p></div></div> "), _vm._ssrNode("<div class=\"col-span-8 p-2\">", "</div>", [_vm._ssrNode("<h4 class=\"font-bold\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4> <span class=\"text-[#666] text-sm\">" + _vm._ssrEscape(_vm._s(_vm.description)) + "</span> <div class=\"w-full border-b border-b-[#DDD]\"></div> <span class=\"text-[#666] text-xs\">" + _vm._ssrEscape("使用期限：" + _vm._s(_vm.time)) + "</span> "), _vm.type ? _vm._ssrNode("<div class=\"flex justify-end items-center gap-1\">", "</div>", [_c('fa', {
    staticClass: "text-xs text-[#57CDFF]",
    attrs: {
      "icon": "fa-regular fa-circle-info"
    }
  }), _vm._ssrNode(" <span class=\"text-xs text-[#57CDFF]\">核銷</span>")], 2) : _vm._ssrNode("<div class=\"block w-full py-2\"></div>")], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Coupon.vue?vue&type=template&id=ab138322&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Coupon.vue?vue&type=script&lang=js&
/* harmony default export */ var Couponvue_type_script_lang_js_ = ({
  name: 'Ticket-index',
  props: {
    id: {
      type: Number,
      default: () => 0
    },
    title: {
      type: String,
      default: () => ''
    },
    time: {
      type: String,
      default: () => ''
    },
    discount: {
      type: String,
      default: () => ''
    },
    description: {
      type: String,
      default: () => ''
    },
    type: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    openReimbursement(id) {
      this.$emit('openReimbursement', id);
    }
  }
});
// CONCATENATED MODULE: ./components/Coupon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Couponvue_type_script_lang_js_ = (Couponvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Coupon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Couponvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39b14fa1"
  
)

/* harmony default export */ var Coupon = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=coupon.js.map