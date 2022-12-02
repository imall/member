exports.ids = [21,2,8];
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

/***/ }),

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

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/coupon/index.vue?vue&type=template&id=a9c0b4ec&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "w-full max-w-[768px] mx-auto",
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode("<div class=\"fixed left-0 top-0 w-full px-[10%] text-lg bg-white py-4 flex items-center\">", "</div>", [_c('fa', {
    staticClass: "text-2xl",
    attrs: {
      "icon": "fa-solid fa-angle-left"
    },
    on: {
      "click": function ($event) {
        return _vm.$router.push('/member');
      }
    }
  }), _vm._ssrNode(" <h2 class=\"absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] text-lg font-bold\">我的優惠券</h2>")], 2), _vm._ssrNode(" <div class=\"flex justify-center gap-5 text-sm\">" + _vm._ssrList(_vm.tabMenu, function (item) {
    return "<button" + _vm._ssrClass("rounded-xl py-2 px-12 bg-white border border-[#232D4E] shadow-[0_5px_5px_rgba(0,0,0,0.2)] duration-300", {
      'bg-[#232D4E] text-white shadow-none': _vm.selectedTab === item.label
    }) + ">" + _vm._ssrEscape(_vm._s(item.label)) + "</button>";
  }) + "</div> "), _vm._ssrNode("<div class=\"mt-5\">", "</div>", _vm._l(_vm.filterCoupons, function (item, idx) {
    return _c('Coupon', {
      key: item.id,
      attrs: {
        "id": item.id,
        "title": item.title,
        "discount": item.discount,
        "description": item.description,
        "time": item.time,
        "type": item.type,
        "data-aos": "zoom-in",
        "data-aos-duration": "300",
        "data-aos-once": "true",
        "data-aos-anchor": "#firstPos",
        "data-aos-delay": 100 + idx * 100
      },
      on: {
        "openReimbursement": function ($event) {
          return _vm.handleOpenReimbursement($event);
        }
      }
    });
  }), 1), _vm._ssrNode(" "), _c('Reimbursement', {
    attrs: {
      "showModal": _vm.isShow
    },
    on: {
      "cancelModal": function ($event) {
        return _vm.cancelModal($event);
      }
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/coupon/index.vue?vue&type=template&id=a9c0b4ec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/coupon/index.vue?vue&type=script&lang=js&
/* harmony default export */ var couponvue_type_script_lang_js_ = ({
  name: 'coupon-index',
  head() {
    return {
      meta: [{
        name: 'theme-color',
        content: '#ffffff'
      }]
    };
  },
  data() {
    return {
      coupons: [{
        id: 1,
        title: '生日禮券',
        discount: '85折',
        description: '全品項85折',
        time: '2023/12/31',
        type: true
      }, {
        id: 2,
        title: '入會禮',
        discount: '9折',
        description: '全品項9折',
        time: '2023/12/31',
        type: true
      }, {
        id: 3,
        title: '周年慶8折優惠',
        discount: '8折',
        description: '全品項8折',
        time: '2023/12/31',
        type: true
      }, {
        id: 4,
        title: '生日禮券',
        discount: '75折',
        description: '全品項75折',
        time: '2023/12/31',
        type: true
      }, {
        id: 5,
        title: '生日禮券',
        discount: '75折',
        description: '全品項75折',
        time: '2023/12/31',
        type: false
      }],
      tabMenu: [{
        id: 1,
        label: '可使用'
      }, {
        id: 2,
        label: '已使用'
      }],
      selectedTab: '可使用',
      isShow: false
    };
  },
  computed: {
    filterCoupons() {
      if (this.selectedTab === '可使用') {
        return this.coupons.filter(item => item.type);
      } else {
        return this.coupons.filter(item => !item.type);
      }
    }
  },
  methods: {
    handleOpenReimbursement(id) {
      this.isShow = true;
    },
    cancelModal(e) {
      e.stopPropagation();
      const classList = Array.from(e.target.classList);
      const isCancel = classList.includes('cancel');
      if (isCancel || e.target.nodeName === 'path') this.isShow = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/member/coupon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_couponvue_type_script_lang_js_ = (couponvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/coupon/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_couponvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16ccb95b"
  
)

/* harmony default export */ var coupon = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Coupon: __webpack_require__(50).default,Reimbursement: __webpack_require__(51).default})


/***/ })

};;
//# sourceMappingURL=index.js.map