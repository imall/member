exports.ids = [16,5];
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

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/index.vue?vue&type=template&id=4893e2d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"flex flex-col fixed top-14 left-0 md:left-1/2 md:-translate-x-1/2 w-full max-w-[768px] px-[5%] h-[calc(100%-124px)] pb-20 overflow-y-auto\">", "</div>", [_vm._ssrNode("<h4 class=\"text-lg text-[#232D4E] mb-2.5 mt-7\">門市</h4> "), _vm._ssrNode("<div class=\"w-full\">", "</div>", [_c('MemberGlobalCard', {
    attrs: {
      "py": 'py-4',
      "px": 'px-4',
      "customCss": 'shadow-none border border-[#aeaeae]'
    }
  }, [_c('div', {
    staticClass: "grid grid-cols-12 gap-2 items-center w-full"
  }, [_c('div', {
    staticClass: "col-span-5 relative"
  }, [_c('div', {
    staticClass: "w-5 h-5 rounded-full border-2 border-[#4ADE80] flex justify-center items-center",
    attrs: {
      "data-aos": "zoom-in",
      "data-aos-once": "true",
      "data-aos-duration": "500",
      "data-aos-anchor": "#firstPos"
    }
  }, [_c('fa', {
    staticClass: "text-[#4ADE80] text-xs",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1), _vm._v(" "), _c('h4', {
    staticClass: "text-lg line-clamp-1 duration-300 absolute left-8 top-1/2 -translate-y-1/2"
  }, [_vm._v(_vm._s(_vm.userSelect.merchantName))])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-7"
  }, [_c('p', {
    staticClass: "line-clamp-1 text-sm"
  }, [_vm._v(_vm._s(_vm.storeAddress))])])])])], 1), _vm._ssrNode(" <h4 class=\"text-lg text-[#232D4E] mb-2.5 mt-9\">選擇設計師<sup class=\"text-red-500\"> *</sup></h4> "), _c('MemberGlobalCard', {
    attrs: {
      "px": 'px-3',
      "py": 'py-6',
      "customCss": 'w-full border border-[#aeaeae]',
      "data-aos": "fade-up",
      "data-aos-deration": "1000",
      "data-aos-delay": "300",
      "data-aos-once": "true",
      "data-aos-anchor": "#firstPos"
    }
  }, [_c('div', {
    staticClass: "flex flex-col gap-4"
  }, [!_vm.searchingDesigners ? _c('ul', {
    staticClass: "flex flex-col gap-4 px-4"
  }, [_vm.defaultDesigner ? _c('p', {
    staticClass: "text-[#666] text-xs mb-2 relative overflow-hidden after:content-[''] after:w-full after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-16 after:top-1/2 after:-translate-y-1/2"
  }, [_vm._v("喜好設計師")]) : _vm._e(), _vm._v(" "), _vm.defaultDesigner.id ? _c('li', {
    attrs: {
      "data-aos": "fade",
      "data-aos-delay": 200,
      "data-aos-duration": "300",
      "data-aos-once": "true",
      "data-aos-anchor": "#firstPos"
    },
    on: {
      "click": function ($event) {
        return _vm.selectDesigner(_vm.defaultDesigner);
      }
    }
  }, [_c('div', {
    staticClass: "flex items-center justify-between"
  }, [_c('div', {
    staticClass: "flex items-center gap-4"
  }, [_c('img', {
    staticClass: "w-12 h-12 rounded-full object-cover object-center select-none pointer-events-none",
    attrs: {
      "src": _vm.defaultDesigner.avatar,
      "alt": _vm.defaultDesigner.name
    }
  }), _vm._v(" "), _c('h4', {
    staticClass: "text-sm line-clamp-1"
  }, [_vm._v(_vm._s(_vm.defaultDesigner.name) + " "), _vm.defaultDesigner.nickName ? _c('span', [_vm._v("(" + _vm._s(_vm.defaultDesigner.nickName) + ")")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center gap-4 duration-300 scale-0",
    class: {
      'scale-100': _vm.isSelectDesigner(_vm.defaultDesigner.id)
    }
  }, [_c('p', {
    staticClass: "text-[#4ADE80] text-sm"
  }, [_vm._v("已選")]), _vm._v(" "), _c('div', {
    staticClass: "w-8 h-8 border-2 border-[#4ADE80] flex justify-center items-center rounded-full"
  }, [_c('fa', {
    staticClass: "text-sm text-[#4ADE80]",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), _vm.defaultDesigner ? _c('p', {
    staticClass: "text-[#666] text-xs mt-2 relative overflow-hidden after:content-[''] after:w-full after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-16 after:top-1/2 after:-translate-y-1/2"
  }, [_vm._v("其他設計師")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.filterNonfavoriteDesigners, function (item, idx) {
    return _c('li', {
      key: item.id,
      attrs: {
        "data-aos": "fade",
        "data-aos-delay": 200 + idx * 50,
        "data-aos-duration": "300",
        "data-aos-once": "true",
        "data-aos-anchor": "#firstPos"
      },
      on: {
        "click": function ($event) {
          return _vm.selectDesigner(item);
        }
      }
    }, [_c('div', {
      staticClass: "flex items-center justify-between"
    }, [_c('div', {
      staticClass: "flex items-center gap-4"
    }, [item.name !== '不指定' ? _c('img', {
      staticClass: "w-12 h-12 rounded-full object-cover object-center select-none pointer-events-none",
      attrs: {
        "src": item.avatar,
        "alt": item.name
      }
    }) : _c('div', {
      staticClass: "w-12 h-12 rounded-full bg-[#c4c4c4] flex justify-center items-center"
    }, [_c('fa', {
      staticClass: "text-white text-lg",
      attrs: {
        "icon": "fa-solid fa-question"
      }
    })], 1), _vm._v(" "), _c('h4', {
      staticClass: "text-sm line-clamp-1"
    }, [_vm._v(_vm._s(item.name) + " "), item.nickName ? _c('span', [_vm._v("(" + _vm._s(item.nickName) + ")")]) : _vm._e()])]), _vm._v(" "), _c('div', {
      staticClass: "flex items-center gap-4 duration-300 scale-0",
      class: {
        'scale-100': _vm.isSelectDesigner(item.id)
      }
    }, [_c('p', {
      staticClass: "text-[#4ADE80] text-sm"
    }, [_vm._v("已選")]), _vm._v(" "), _c('div', {
      staticClass: "w-8 h-8 border-2 border-[#4ADE80] flex justify-center items-center rounded-full"
    }, [_c('fa', {
      staticClass: "text-sm text-[#4ADE80]",
      attrs: {
        "icon": "fa-solid fa-check"
      }
    })], 1)])])]);
  }), _vm._v(" "), _c('li', {
    attrs: {
      "data-aos": "fade",
      "data-aos-delay": 200 + _vm.designers.length * 50,
      "data-aos-duration": "300",
      "data-aos-once": "true",
      "data-aos-anchor": "#firstPos"
    },
    on: {
      "click": function ($event) {
        return _vm.selectDesigner({
          name: '不指定',
          id: 1
        });
      }
    }
  }, [_c('div', {
    staticClass: "flex items-center justify-between"
  }, [_c('div', {
    staticClass: "flex items-center gap-4"
  }, [_c('div', {
    staticClass: "w-12 h-12 rounded-full bg-[#c4c4c4] flex justify-center items-center"
  }, [_c('fa', {
    staticClass: "text-white text-lg",
    attrs: {
      "icon": "fa-solid fa-question"
    }
  })], 1), _vm._v(" "), _c('h4', {
    staticClass: "text-sm"
  }, [_vm._v("不指定")])]), _vm._v(" "), _c('div', {
    staticClass: "flex items-center gap-4 duration-300 scale-0",
    class: {
      'scale-100': _vm.isSelectDesigner(1)
    }
  }, [_c('p', {
    staticClass: "text-[#4ADE80] text-sm"
  }, [_vm._v("已選")]), _vm._v(" "), _c('div', {
    staticClass: "w-8 h-8 border-2 border-[#4ADE80] flex justify-center items-center rounded-full"
  }, [_c('fa', {
    staticClass: "text-sm text-[#4ADE80]",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1)])])])], 2) : _c('div', {
    staticClass: "min-h-[150px] w-full flex items-center justify-center"
  }, [_c('div', {
    staticClass: "border-4 border-t-[#232D4E] rounded-full w-10 h-10 animate-spin-slow"
  })])])])], 2), _vm._ssrNode(" "), _vm._ssrNode("<button" + _vm._ssrClass("w-[90%] mx-auto py-2.5 mt-5 shadow-md rounded-md duration-300 flex justify-center items-center gap-4 z-0 fixed bottom-24 left-1/2 -translate-x-1/2", {
    'bg-[#aeaeae] pointer-events-none': !_vm.userSelect.designerId,
    'bg-[#232D4E]': _vm.userSelect.designerId
  }) + ">", "</button>", [_vm._ssrNode("<p class=\"text-lg text-white\">選擇時段</p> "), _c('fa', {
    staticClass: "text-white",
    attrs: {
      "icon": "fa-solid fa-angle-right"
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/appointment/index.vue?vue&type=template&id=4893e2d2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/index.vue?vue&type=script&lang=js&
/* harmony default export */ var appointmentvue_type_script_lang_js_ = ({
  name: 'appointment-index',
  data() {
    return {
      designers: [],
      searchingDesigners: false,
      storeAddress: '',
      userSelect: {
        merchantId: '',
        merchantName: '',
        designerId: '',
        designerName: '',
        designerNickName: ''
      },
      defaultDesigner: {}
    };
  },
  computed: {
    filterNonfavoriteDesigners() {
      if (this.defaultDesigner.id) return this.designers.filter(item => item.id !== this.defaultDesigner.id);
      return this.designers;
    }
  },
  methods: {
    // 搜尋設計師
    searchDesigner(id) {
      this.searchingDesigners = true;
      this.designers = [];
      this.api.customerGetMerchantDesigners(id).then(res => {
        if (!res.data.hasError) {
          this.designers = res.data.customerGetMerchantDesigners;
          this.searchingDesigners = false;
        }
      }).catch(err => {
        console.log(err);
      });
    },
    // 選擇設計師
    selectDesigner(item) {
      this.userSelect.designerId = item.id;
      this.userSelect.designerName = item.name;
      this.userSelect.designerNickName = item.nickName ? item.nickName : 1;
    },
    isSelectDesigner(id) {
      if (this.userSelect.designerId === id) return true;
      return false;
    },
    toSelectDate() {
      const data = {
        merchantId: this.userSelect.merchantId,
        merchantName: this.userSelect.merchantName,
        designerId: this.userSelect.designerId,
        designerName: this.userSelect.designerName,
        designerNickName: this.userSelect.designerNickName
      };
      this.$store.dispatch('appointmentData/handleSetDesignerAndMerchant', data);
      this.$router.push('/member/appointment/selectDate');
    }
  },
  mounted() {
    const merchant = JSON.parse(window.localStorage.getItem('merchant'));
    let id = (merchant === null || merchant === void 0 ? void 0 : merchant.id) || '';
    this.searchDesigner(id);
    this.userSelect.merchantName = merchant.name || '';
    this.userSelect.merchantId = merchant.id || '';
    this.storeAddress = merchant.address || '';
    this.defaultDesigner = JSON.parse(window.localStorage.getItem('preferDesigner')) || '';
    if (this.defaultDesigner) this.selectDesigner(this.defaultDesigner);
  }
});
// CONCATENATED MODULE: ./pages/member/appointment/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_appointmentvue_type_script_lang_js_ = (appointmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/appointment/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_appointmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05f73ba6"
  
)

/* harmony default export */ var appointment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberGlobalCard: __webpack_require__(43).default})


/***/ })

};;
//# sourceMappingURL=index.js.map