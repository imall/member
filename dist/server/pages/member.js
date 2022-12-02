exports.ids = [12];
exports.modules = {

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member.vue?vue&type=template&id=8e8ebefe&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "member__container absolute h-[calc(100%-122px)] w-full mt-14 pt-4 px-5 pb-8 overflow-y-auto overflow-x-hidden bg-[#f1f1f1]"
  }, [_c('client-only', [_c('nuxt-child')], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member.vue?vue&type=template&id=8e8ebefe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member.vue?vue&type=script&lang=js&
/* harmony default export */ var membervue_type_script_lang_js_ = ({
  name: 'member',
  mounted() {
    document.body.addEventListener('dblclick', e => {
      e.preventDefault();
      e.stopPropagation();
    });
    const vm = this;
    const notToHomeList = ['member-info'];
    window.addEventListener('popstate', () => {
      if (notToHomeList.includes(vm.$route.name)) vm.$router.push('/member');
    });
  }
});
// CONCATENATED MODULE: ./pages/member.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_membervue_type_script_lang_js_ = (membervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_membervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d3c68426"
  
)

/* harmony default export */ var member = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=member.js.map