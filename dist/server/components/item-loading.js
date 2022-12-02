exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=item-loading.js.map