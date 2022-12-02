exports.ids = [6];
exports.modules = {

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal.vue?vue&type=template&id=ea0ebd22&
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
  })], 1) : _vm._e(), _vm._v(" "), _vm.isMemberRules ? _c('div', {
    staticClass: "flex justify-center items-center gap-1.5 mb-5 mt-10"
  }, [_c('fa', {
    staticClass: "text-xl",
    attrs: {
      "icon": "fa-regular fa-circle-question"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-lg font-bold"
  }, [_vm._v("會籍說明")])], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]) : _vm._e()])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Modal.vue?vue&type=template&id=ea0ebd22&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal.vue?vue&type=script&lang=js&
/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'Modal',
  props: {
    showModal: {
      type: Boolean,
      default: () => false
    },
    isMemberRules: {
      type: Boolean,
      default: () => false
    },
    showCancelBtn: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    cancelModalEmit(e) {
      this.$emit('cancelModal', e);
    }
  }
});
// CONCATENATED MODULE: ./components/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Modal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35e582fc"
  
)

/* harmony default export */ var Modal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modal.js.map