exports.ids = [27];
exports.modules = {

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/point/index.vue?vue&type=template&id=1d4f1b4b&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "w-full max-w-[768px] mx-auto",
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode(_vm.getPointRecords.length > 0 ? "<ul data-aos=\"fade-up\" data-aos-duration=\"400\" data-aos-once=\"true\" class=\"bg-white rounded-lg shadow-md text-sm\">" + _vm._ssrList(_vm.getPointRecords, function (item, idx) {
    return "<li data-aos=\"fade\"" + _vm._ssrAttr("data-aos-delay", 300 + idx * 100) + " data-aos-once=\"true\" data-aos-duration=\"400\" data-aos-anchor=\"#firstPos\"" + _vm._ssrClass("px-6 py-5 border-b border-[#aeaeae]", {
      'border-b-0': idx + 1 === _vm.getPointRecords.length
    }) + "><div class=\"grid grid-cols-12 gap-4\"><div class=\"col-span-5\"><p>日期</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.time)) + "</p></div> <div class=\"col-span-5\"><p>紅利名稱</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.title)) + "</p></div> <div class=\"col-span-5\"><p>獲得點數</p></div> <div class=\"col-span-7\">" + (item.type === 1 ? "<p class=\"text-[#16A34A]\">" + _vm._ssrEscape("+ " + _vm._s(item.point) + " P") + "</p>" : "<p class=\"text-[#F43F5E]\">" + _vm._ssrEscape("- " + _vm._s(item.point) + " P") + "</p>") + "</div> <div class=\"col-span-5\"><p>設計師</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.designer)) + "</p></div> <div class=\"col-span-5\"><p>備註</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.note)) + "</p></div></div></li>";
  }) + "</ul>" : "<ul data-aos=\"fade-up\" data-aos-once=\"true\" data-aos-duration=\"500\" data-aos-delay=\"150\" class=\"bg-white rounded-lg min-h-[211px] shadow-md pt-10\"><li class=\"text-center text-sm text-[#aeaeae]\"><p>目前無資料</p></li></ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/point/index.vue?vue&type=template&id=1d4f1b4b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/point/index.vue?vue&type=script&lang=js&
/* harmony default export */ var pointvue_type_script_lang_js_ = ({
  name: 'addValue-record',
  data() {
    return {
      getPointRecords: [{
        id: 1,
        time: '2022/03/25',
        title: '首次新客',
        point: 150,
        designer: 'Alex',
        note: '',
        type: 1
      }, {
        id: 2,
        time: '2022/03/14',
        title: '首次新客',
        point: 300,
        designer: 'Alex',
        note: '',
        type: 2
      }, {
        id: 3,
        time: '2022/03/02',
        title: '首次新客',
        point: 150,
        designer: 'Alex',
        note: '',
        type: 2
      }, {
        id: 4,
        time: '2022/02/25',
        title: '首次新客',
        point: 250,
        designer: 'Alex',
        note: '',
        type: 1
      }, {
        id: 5,
        time: '2022/01/25',
        title: '首次新客',
        point: 50,
        designer: 'Alex',
        note: '',
        type: 1
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/member/point/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_pointvue_type_script_lang_js_ = (pointvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/point/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_pointvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1348db17"
  
)

/* harmony default export */ var point = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map