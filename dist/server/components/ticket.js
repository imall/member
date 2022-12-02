exports.ids = [9];
exports.modules = {

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ticket.vue?vue&type=template&id=5c8ef2c8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"w-full bg-white rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] mb-2.5\">", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-12\">", "</div>", [_vm._ssrNode("<div class=\"col-span-4 text-white font-bold relative bg-[#FEB401]\"><div class=\"absolute h-[calc(100%+20px)] w-2.5 top-0 -left-2.5 bg-[#f1f1f1] z-40\"></div> <div class=\"absolute h-2 5 w-2.5 -bottom-2.5 left-0 bg-[#f1f1f1] z-40\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 bg-[#f1f1f1]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[26px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[52px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[78px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[104px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_0px_rgba(0,0,0,0.25)]\"></div> <div class=\"w-full h-full flex justify-center items-center py-2 pl-4 flex-nowrap gap-1\"><p class=\"text-xs mt-1\">NT$</p> <p class=\"text-lg\">" + _vm._ssrEscape(_vm._s(_vm.price) + "/次") + "</p></div></div> "), _vm._ssrNode("<div class=\"col-span-8 py-2 px-1\">", "</div>", [_vm._ssrNode("<h4 class=\"font-bold line-clamp-1\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4> <span class=\"text-[#666] text-sm\">" + _vm._ssrEscape("可用次數：" + _vm._s(_vm.canUse - _vm.used) + "/" + _vm._s(_vm.canUse) + " (總金額:" + _vm._s(_vm.totalPrice) + ")") + "</span> <div class=\"w-full border-b border-b-[#DDD]\"></div> "), _vm._ssrNode("<p class=\"text-[#666] text-xs mt-2\">", "</p>", [_vm._ssrNode("購買日期："), _c('span', {
    directives: [{
      name: "formatDate",
      rawName: "v-formatDate",
      value: 'date',
      expression: "'date'"
    }]
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.time)))])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex justify-end items-center gap-1\">", "</div>", [_c('fa', {
    staticClass: "text-xs text-[#57CDFF]",
    attrs: {
      "icon": "fa-regular fa-circle-info"
    },
    on: {
      "click": function ($event) {
        return _vm.openRecord(_vm.idx);
      }
    }
  }), _vm._ssrNode(" <span class=\"text-xs text-[#57CDFF]\">使用紀錄</span>")], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Ticket.vue?vue&type=template&id=5c8ef2c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ticket.vue?vue&type=script&lang=js&
/* harmony default export */ var Ticketvue_type_script_lang_js_ = ({
  name: 'Ticket-index',
  props: {
    id: {
      type: String,
      default: () => 0
    },
    idx: {
      type: Number,
      default: () => 0
    },
    title: {
      type: String,
      default: () => ''
    },
    price: {
      type: Number,
      default: () => 0
    },
    totalPrice: {
      type: Number,
      default: () => 0
    },
    canUse: {
      type: Number,
      default: () => 0
    },
    used: {
      type: Number,
      default: () => 0
    },
    time: {
      type: Number,
      default: () => 0
    }
  },
  methods: {
    openRecord(idx) {
      this.$emit('openRecord', idx);
    }
  }
});
// CONCATENATED MODULE: ./components/Ticket.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Ticketvue_type_script_lang_js_ = (Ticketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Ticket.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Ticketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dc3200f2"
  
)

/* harmony default export */ var Ticket = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ticket.js.map