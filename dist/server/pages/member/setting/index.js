exports.ids = [30,5];
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/setting/index.vue?vue&type=template&id=6cea6b70&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.isLoading ? _c('section', {
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode("<div class=\"flex flex-col fixed top-20 left-0 md:left-1/2 md:-translate-x-1/2 w-full max-w-[768px] px-[5%] h-[calc(100%-202px)] overflow-y-auto overflow-x-hidden\">", "</div>", [_vm._ssrNode("<h3 data-aos=\"fade\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-duration=\"500\" data-aos-anchor=\"#firstPos\" class=\"text-lg my-4\">目前登入店家</h3> "), _c('MemberGlobalCard', {
    attrs: {
      "py": 'py-3',
      "px": 'px-5',
      "data-aos": "fade",
      "data-aos-once": "true",
      "data-aos-delay": "200",
      "data-aos-duration": "500",
      "data-aos-anchor": "#firstPos"
    }
  }, [_c('div', {
    staticClass: "grid grid-cols-12 items-center gap-2"
  }, [_c('div', {
    staticClass: "col-span-4"
  }, [_c('h4', {
    staticClass: "text-base line-clamp-1"
  }, [_vm._v(_vm._s(_vm.defaultMerchant.name))])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-7"
  }, [_c('p', {
    staticClass: "text-sm line-clamp-1"
  }, [_vm._v(_vm._s(_vm.defaultMerchant.address))])])])]), _vm._ssrNode(" <h3 class=\"text-lg mt-7 mb-4\" data-aos=\"fade\" data-aos-once=\"true\" data-aos-delay=\"300\" data-aos-duration=\"500\" data-aos-anchor=\"#firstPos\">喜好設計師</h3> "), _c('MemberGlobalCard', {
    attrs: {
      "py": 'py-5',
      "px": 'px-5',
      "data-aos": "fade-up",
      "data-aos-once": "true",
      "data-aos-delay": "400",
      "data-aos-duration": "500",
      "data-aos-anchor": "#firstPos"
    }
  }, [_c('ul', {
    staticClass: "flex flex-col gap-4",
    attrs: {
      "data-aos": "fade",
      "data-aos-once": "true",
      "data-aos-delay": "700",
      "data-aos-duration": "500",
      "data-aos-anchor": "#firstPos"
    }
  }, [_vm.defaultDesigner.name && _vm.defaultDesigner.avatar ? _c('li', [_c('div', {
    staticClass: "flex items-center gap-4"
  }, [_c('img', {
    staticClass: "h-12 w-12 rounded-full object-cover select-none pointer-events-none",
    attrs: {
      "src": _vm.defaultDesigner.avatar,
      "alt": _vm.defaultDesigner.name
    }
  }), _vm._v(" "), _c('h4', {
    staticClass: "text-sm line-clamp-1"
  }, [_vm._v(_vm._s(_vm.defaultDesigner.name) + " "), _vm.defaultDesigner.nickName ? _c('span', [_vm._v("(" + _vm._s(_vm.defaultDesigner.nickName) + ")")]) : _vm._e()])])]) : _c('li', [_c('p', {
    staticClass: "text-[#bebebe] text-center my-5"
  }, [_vm._v("暫無喜好設計師")])])])]), _vm._ssrNode(" <button data-mdb-ripple=\"true\" data-mdb-ripple-color=\"light\" data-aos=\"zoom-in\" data-aos-once=\"true\" data-aos-delay=\"900\" data-aos-duration=\"300\" data-aos-anchor=\"#firstPos\" class=\"text-white rounded-md bg-[#232D4E] py-2.5 w-full mt-auto\"><p class=\"text-lg\">修改偏好</p></button>")], 2)]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/setting/index.vue?vue&type=template&id=6cea6b70&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/setting/index.vue?vue&type=script&lang=js&
/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  name: 'setting-index',
  data() {
    return {
      favoriteInfo: {
        designers: {
          id: 1,
          label: 'Nina',
          imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        }
      },
      defaultMerchant: {},
      defaultDesigner: {}
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    // 取得喜好門市、設計師、所有門市
    customerGetCurrentMerchantSetting() {
      this.api.customerGetCurrentMerchantSetting().then(res => {
        if (!res.data.hasError) {
          this.defaultMerchant = res.data.customerGetCurrentMerchantSetting.currentMerchant;
          this.defaultDesigner = res.data.customerGetCurrentMerchantSetting.preferDesigner || '';
        }
        window.localStorage.setItem('allMerchants', JSON.stringify(res.data.customerGetCurrentMerchantSetting.consumedMerchants));
        window.localStorage.setItem('merchant', JSON.stringify(res.data.customerGetCurrentMerchantSetting.currentMerchant));
        if (res.data.customerGetCurrentMerchantSetting.preferDesigner) {
          window.localStorage.setItem('preferDesigner', JSON.stringify(res.data.customerGetCurrentMerchantSetting.preferDesigner));
        }
        this.$store.dispatch('loading/isLoading', false);
      }).catch(err => {
        console.log(err);
      });
    }
  },
  async mounted() {
    this.$store.dispatch('loading/isLoading', true);
    await this.customerGetCurrentMerchantSetting();
  }
});
// CONCATENATED MODULE: ./pages/member/setting/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/setting/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6a6d8997"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberGlobalCard: __webpack_require__(43).default})


/***/ })

};;
//# sourceMappingURL=index.js.map