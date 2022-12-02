exports.ids = [25,5,6];
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

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/info/index.vue?vue&type=template&id=25962e38&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "firstPos"
    }
  }, [!_vm.itemIsLoading ? _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-anchor=\"#firstPos\" class=\"w-full max-w-[500px] mb-3 mx-auto relative rounded-lg overflow-hidden aspect-video\">", "</div>", [_vm._ssrNode((!_vm.memberCard.membershipImage ? "<img src=\"/images/member/card-bg.webp\" class=\"w-full h-full shadow-md object-cover object-center\">" : "<img" + _vm._ssrAttr("src", _vm.memberCard.membershipImage) + " class=\"w-full h-full shadow-md object-cover object-center\">") + " " + (_vm.memberCard.merchantname ? "<span class=\"absolute left-3 bottom-3 text-base tracking-widest font-serif\"" + _vm._ssrStyle(null, `color: ${_vm.memberCard.membershipTextCoclor}`, null) + ">" + _vm._ssrEscape(_vm._s(_vm.memberCard.merchantname)) + "</span>" : "<!---->") + " " + (!_vm.memberCard.merchantname && _vm.merchant.name ? "<span class=\"absolute left-3 bottom-3 text-base tracking-widest font-serif text-white\">" + _vm._ssrEscape(_vm._s(_vm.merchant.name)) + "</span>" : "<!---->") + " "), _vm._ssrNode("<div class=\"absolute right-3 bottom-3 flex items-center gap-1.5\">", "</div>", [_vm.memberCard.membershipTextCoclor ? _vm._ssrNode("<div class=\"flex items-center\"" + _vm._ssrStyle(null, `color: ${_vm.memberCard.membershipTextCoclor}`, null) + ">", "</div>", [_c('fa', {
    staticClass: "text-lg font-bold",
    attrs: {
      "icon": "fa-regular fa-circle-question"
    }
  })], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.memberCard.membershipTextCoclor ? "<span class=\"text-base tracking-widest font-serif\"" + _vm._ssrStyle(null, `color: ${_vm.memberCard.membershipTextCoclor}`, null) + ">會籍說明</span>" : "<!---->"))], 2)], 2) : _vm._e(), _vm._ssrNode(" "), !_vm.isLoading && !_vm.itemIsLoading ? _c('MemberGlobalCard', {
    attrs: {
      "data-aos": "fade-up",
      "data-aos-duration": "300",
      "data-aos-once": "true",
      "data-aos-delay": "200",
      "data-aos-anchor": "#firstPos"
    }
  }, [_c('ul', {
    staticClass: "text-sm"
  }, [_c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("姓名")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', [_vm._v(_vm._s(_vm.memberInfo.name))])])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("電話")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', [_vm._v(_vm._s(_vm.memberInfo.cellphone))])])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("暱稱")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', [_vm._v(_vm._s(_vm.memberInfo.nickName))])])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("性別")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_vm.memberInfo.gender === 'MALE' ? _c('p', [_vm._v("男")]) : _vm._e(), _vm._v(" "), _vm.memberInfo.gender === 'FEMALE' ? _c('p', [_vm._v("女")]) : _vm._e()])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("Email")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', [_vm._v(_vm._s(_vm.memberInfo.email))])])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("Line ID")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', [_vm._v(_vm._s(_vm.memberInfo.lineId))])])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2 relative after:content-[''] after:w-[calc(100%+24px)] after:h-[1px] after:bg-[#aeaeae] after:absolute after:left-[-12px] after:bottom-0"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("生日")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', {
    directives: [{
      name: "formatDate",
      rawName: "v-formatDate",
      value: 'date',
      expression: "'date'"
    }]
  }, [_vm._v(_vm._s(_vm.memberInfo.birthday))])])])]), _vm._v(" "), _c('li', {
    staticClass: "py-2"
  }, [_c('div', {
    staticClass: "grid grid-cols-12"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-3"
    }
  }, [_c('p', [_vm._v("地址")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-9"
  }, [_c('p', [_vm._v(_vm._s(_vm.memberInfo.address))])])])])])]) : _vm._e(), _vm._ssrNode(" " + (!_vm.isLoading && !_vm.itemIsLoading ? "<button data-mdb-ripple=\"true\" data-mdb-ripple-color=\"light\" data-aos=\"fade-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"300\" data-aos-anchor=\"#firstPos\" class=\"w-full py-2.5 rounded-lg text-white text-lg bg-[#232D4E]\">修改個人資料</button>" : "<!---->") + " "), _c('Modal', {
    attrs: {
      "showModal": _vm.showMemberRules,
      "isMemberRules": true
    },
    on: {
      "cancelModal": function ($event) {
        return _vm.cancelModal($event);
      }
    }
  }, [_vm.memberCard.isHtml ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.memberCard.membershipComment)
    }
  }) : _c('p', [_vm._v(_vm._s(_vm.memberCard.membershipComment))])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/info/index.vue?vue&type=template&id=25962e38&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/info/index.vue?vue&type=script&lang=js&
/* harmony default export */ var infovue_type_script_lang_js_ = ({
  name: 'member-info',
  data() {
    return {
      memberCard: {},
      memberInfo: {},
      showMemberRules: false,
      merchant: JSON.parse(window.localStorage.getItem('merchant')) || {
        id: ''
      }
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    },
    itemIsLoading() {
      return this.$store.state.itemLoading.isLoading;
    }
  },
  methods: {
    // 開啟會籍說明
    openMemberRules() {
      this.showMemberRules = true;
    },
    // 關閉會籍說明
    cancelModal(e) {
      e.stopPropagation();
      const classList = Array.from(e.target.classList);
      const isCancel = classList.includes('cancel');
      if (isCancel || e.target.nodeName === 'path') this.showMemberRules = false;
    },
    // 取得用戶資料
    getCustomerPersonalData() {
      this.$store.dispatch('loading/isLoading', true);
      const needKey = 'name, cellphone, nickName, gender, email, lineId, birthday, address';
      this.api.getCustomerPersonalData(needKey).then(res => {
        this.memberInfo = res.data.getCustomerPersonalData;
        this.$store.dispatch('indexCache/handleSetUserInfo', res.data.getCustomerPersonalData);
        this.$store.dispatch('loading/isLoading', false);
      }).catch(err => {
        console.log(err);
      });
    },
    // 取得會員卡片
    customerMembershipRecord() {
      var _this$merchant;
      this.$store.dispatch('itemLoading/isLoading', true);
      this.api.customerMembershipRecord((_this$merchant = this.merchant) === null || _this$merchant === void 0 ? void 0 : _this$merchant.id).then(res => {
        // 判斷是否為 html 格式
        if (res.data.customerMembershipRecord.unExpired[0]) {
          if (res.data.customerMembershipRecord.unExpired[0].membershipComment.indexOf('<p') === -1 && res.data.customerMembershipRecord.unExpired[0].membershipComment.indexOf('<img') === -1) {
            res.data.customerMembershipRecord.unExpired[0]['isHtml'] = false;
          } else {
            res.data.customerMembershipRecord.unExpired[0]['isHtml'] = true;
          }
          this.memberCard = res.data.customerMembershipRecord.unExpired[0];
        }
        this.$store.dispatch('itemLoading/isLoading', false);
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getCustomerPersonalData();
    this.customerMembershipRecord();
  }
});
// CONCATENATED MODULE: ./pages/member/info/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_infovue_type_script_lang_js_ = (infovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/info/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_infovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5f92d9a3"
  
)

/* harmony default export */ var info = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberGlobalCard: __webpack_require__(43).default,Modal: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=index.js.map