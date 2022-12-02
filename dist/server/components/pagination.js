exports.ids = [7];
exports.modules = {

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=template&id=5071033f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm.totalPage > 1 ? _vm._ssrNode("<ul class=\"flex justify-center items-center gap-1 mt-8 select-none\">", "</ul>", [_vm._ssrNode("<li" + _vm._ssrClass("group px-3 py-2 rounded-full cursor-pointer-[#232D4E]-0-white flex justify-center items-center", {
    'pointer-events-none': _vm.currentPage === 1
  }) + ">", "</li>", [_c('fa', {
    staticClass: "text-lg:text-white",
    class: {
      'text-[#a3a3a3]': _vm.currentPage === 1,
      'text-[#232D4E]': _vm.currentPage !== 1
    },
    attrs: {
      "icon": "fa-solid fa-angle-left"
    }
  })], 1), _vm._ssrNode(" "), _vm.totalPage <= 5 ? [_vm._ssrNode(_vm._ssrList(_vm.totalPage, function (page) {
    return "<li" + _vm._ssrClass("h-9 w-9 flex justify-center items-center rounded-full cursor-pointer", {
      'bg-gradient-to-t from-[#5D7A9D] to-[#094194] text-white ring-0 font-bold': _vm.currentPage === page
    }) + ">" + _vm._ssrEscape(_vm._s(page)) + "</li>";
  }))] : [_vm._ssrNode("<li" + _vm._ssrClass("cursor-pointer px-3 py-2 rounded-full", {
    'hidden': _vm.currentPageTab === 0
  }) + ">", "</li>", [_c('fa', {
    attrs: {
      "icon": "fa-regular fa-ellipsis"
    }
  })], 1), _vm._ssrNode(" " + _vm._ssrList(_vm.pageTab[_vm.currentPageTab], function (page) {
    return "<li" + _vm._ssrClass("w-9 h-9 flex justify-center items-center py-2 rounded-full cursor-pointer", {
      'bg-gradient-to-t from-[#5D7A9D] to-[#094194] text-white ring-[#232D4E]': _vm.currentPage === page
    }) + ">" + _vm._ssrEscape(_vm._s(page)) + "</li>";
  }) + " "), _vm._ssrNode("<li" + _vm._ssrClass("cursor-pointer px-3 py-2 rounded-full", {
    'hidden': _vm.currentPageTab === _vm.pageTab.length - 1
  }) + ">", "</li>", [_c('fa', {
    attrs: {
      "icon": "fa-regular fa-ellipsis"
    }
  })], 1)], _vm._ssrNode(" "), _vm._ssrNode("<li" + _vm._ssrClass("group px-3 py-2 rounded-full cursor-pointer-[#232D4E]-0-white", {
    'pointer-events-none': _vm.currentPage === _vm.totalPage
  }) + ">", "</li>", [_c('fa', {
    staticClass: "text-lg:text-white",
    class: {
      'text-[#a3a3a3]': _vm.currentPage === _vm.totalPage,
      'text-[#232D4E]': _vm.currentPage !== _vm.totalPage
    },
    attrs: {
      "icon": "fa-solid fa-angle-right"
    }
  })], 1)], 2) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=template&id=5071033f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pagination.vue?vue&type=script&lang=js&
/* harmony default export */ var Paginationvue_type_script_lang_js_ = ({
  props: {
    totalPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentPage: 1,
      pageTab: [],
      currentPageTab: 0
    };
  },
  methods: {
    changePage() {
      this.$emit('changePage', this.currentPage);
    }
  },
  mounted() {
    let arr = [];
    for (let i = 0; i < this.totalPage; i++) {
      if (i % 5 === 0) {
        arr.push([]);
      }
      const page = parseInt(i / 5);
      arr[page].push(i + 1);
    }
    this.pageTab = arr;
  }
});
// CONCATENATED MODULE: ./components/Pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginationvue_type_script_lang_js_ = (Paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Pagination.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Paginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ce62b95"
  
)

/* harmony default export */ var Pagination = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=pagination.js.map