exports.ids = [8];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Reimbursement.vue?vue&type=template&id=389abae6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.showModal ? _c('div', {
    staticClass: "fixed w-screen h-screen bg-black opacity-25 top-0 left-0 z-40"
  }) : _vm._e()]), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.showModal ? _c('div', {
    staticClass: "fixed w-full h-full top-0 left-0 px-[5%] flex justify-center items-center z-40 cancel shadow-[0px_2px_2px_rgba(0,0,0,0.25)]",
    on: {
      "click": function ($event) {
        return _vm.cancelModalEmit($event);
      }
    }
  }, [_c('div', {
    staticClass: "w-full max-w-[768px] max-h-[80vh] overflow-y-auto bg-white rounded-md p-5 relative z-[-1]",
    attrs: {
      "data-aos": "flip-left",
      "data-aos-duration": "400"
    }
  }, [_vm.showCancelBtn ? _c('button', {
    staticClass: "absolute right-5 top-5 cancel",
    on: {
      "click": function ($event) {
        return _vm.cancelModalEmit($event);
      }
    }
  }, [_c('fa', {
    staticClass: "text-3xl cancel",
    attrs: {
      "icon": "fa-solid fa-xmark"
    },
    on: {
      "click": function ($event) {
        return _vm.cancelModalEmit($event);
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col items-center mt-5"
  }, [_c('h2', {
    staticClass: "mb-5"
  }, [_vm._v("核銷")]), _vm._v(" "), _c('input', {
    staticClass: "border border-[#aeaeae] rounded-xl placeholder:text-[#aeaeae] w-[90%] mb-7 px-2 py-2.5",
    attrs: {
      "type": "text",
      "placeholder": "請輸入核銷密碼"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "py-2.5 px-14 bg-[#232D4E] rounded-lg text-white font-bold",
    attrs: {
      "data-mdb-ripple": "true",
      "data-mdb-ripple-color": "light"
    }
  }, [_vm._v("確認")])])])]) : _vm._e()])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Reimbursement.vue?vue&type=template&id=389abae6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Reimbursement.vue?vue&type=script&lang=js&
/* harmony default export */ var Reimbursementvue_type_script_lang_js_ = ({
  name: 'Modal',
  props: {
    showModal: {
      type: Boolean,
      default: () => false
    },
    showCancelBtn: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    cancelModalEmit(e) {
      this.$emit('cancelModal', e);
    }
  }
});
// CONCATENATED MODULE: ./components/Reimbursement.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Reimbursementvue_type_script_lang_js_ = (Reimbursementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Reimbursement.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Reimbursementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c3cb2e6"
  
)

/* harmony default export */ var Reimbursement = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=reimbursement.js.map