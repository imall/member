exports.ids = [29,3,5];
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

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/setting/edit.vue?vue&type=template&id=fdbce290&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode("<h4 class=\"text-lg mb-3\">選擇登入店家</h4> "), _vm._ssrNode("<div class=\"w-full bg-white border border-[#aeaeae] rounded-md overflow-hidden relative\">", "</div>", [_vm._ssrNode("<input type=\"text\" placeholder=\"搜尋關鍵字\"" + _vm._ssrAttr("value", _vm.searchInput) + " class=\"appearance-none bg-white w-full rounded-md py-1 px-3 text-[#666] focus:border-0 focus:outline-none\"> "), _c('fa', {
    staticClass: "absolute right-5 top-1/2 -translate-y-1/2",
    attrs: {
      "icon": "fa-regular fa-magnifying-glass"
    }
  })], 2), _vm._ssrNode(" "), _vm.isShowDefault && _vm.defaultMerchant.id ? _vm._ssrNode("<div class=\"mt-4\">", "</div>", [_c('MemberGlobalCard', {
    attrs: {
      "py": 'py-4',
      "px": 'px-4',
      "data-aos": "fade-up",
      "data-aos-delay": "100",
      "data-aos-once": "true",
      "data-aos-duration": "300",
      "data-aos-anchor": "#firstPos"
    }
  }, [_c('div', {
    staticClass: "grid grid-cols-12 items-center w-full",
    on: {
      "click": function ($event) {
        _vm.searchDesigner(_vm.defaultMerchant.id), _vm.selectStore(_vm.defaultMerchant);
      }
    }
  }, [_c('div', {
    staticClass: "col-span-5 relative"
  }, [_c('div', {
    staticClass: "w-5 h-5 rounded-full border-2 border-[#4ADE80] flex justify-center items-center duration-300 scale-0",
    class: {
      'scale-100': _vm.isSelectedStore(_vm.defaultMerchant.id)
    }
  }, [_c('fa', {
    staticClass: "text-[#4ADE80] text-xs",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1), _vm._v(" "), _c('h4', {
    staticClass: "text-lg line-clamp-1 duration-300 absolute left-0 top-1/2 -translate-y-1/2",
    class: {
      'left-8': _vm.isSelectedStore(_vm.defaultMerchant.id)
    }
  }, [_vm._v("\n            " + _vm._s(_vm.defaultMerchant.name) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-span-7"
  }, [_c('p', {
    staticClass: "text-sm line-clamp-1"
  }, [_vm._v(_vm._s(_vm.defaultMerchant.address))])])])])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.merchants.length > 0 && !_vm.merchantsIsNull ? _vm._ssrNode("<div class=\"w-full mt-4\">", "</div>", _vm._l(_vm.merchants, function (item, idx) {
    return _c('MemberGlobalCard', {
      key: item.id,
      attrs: {
        "py": 'py-4',
        "px": 'px-4',
        "data-aos": "fade-up",
        "data-aos-delay": idx * 100,
        "data-aos-once": "true",
        "data-aos-duration": "300",
        "data-aos-anchor": "#firstPos"
      }
    }, [_c('div', {
      staticClass: "grid grid-cols-12 items-center w-full",
      on: {
        "click": function ($event) {
          _vm.searchDesigner(item.id), _vm.selectStore(item);
        }
      }
    }, [_c('div', {
      staticClass: "col-span-5 relative"
    }, [_c('div', {
      staticClass: "w-5 h-5 rounded-full border-2 border-[#4ADE80] flex justify-center items-center duration-300 scale-0",
      class: {
        'scale-100': _vm.isSelectedStore(item.id)
      }
    }, [_c('fa', {
      staticClass: "text-[#4ADE80] text-xs",
      attrs: {
        "icon": "fa-solid fa-check"
      }
    })], 1), _vm._v(" "), _c('h4', {
      staticClass: "text-lg line-clamp-1 duration-300 absolute left-0 top-1/2 -translate-y-1/2",
      class: {
        'left-8': _vm.isSelectedStore(item.id)
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n          ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-span-7"
    }, [_c('p', {
      staticClass: "text-sm line-clamp-1"
    }, [_vm._v(_vm._s(item.address))])])])]);
  }), 1) : _vm._e(), _vm._ssrNode(" " + (_vm.merchantsIsNull && !_vm.isShowDefault ? "<div class=\"mt-6 text-center text-sm text-slate-500\">\n    查無門市\n  </div>" : "<!---->") + " "), _c('ItemLoading'), _vm._ssrNode(" <h4 data-aos=\"fade-up\" data-aos-delay=\"100\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-lg mt-12\">\n    選擇喜好設計師\n  </h4> "), _vm._ssrNode("<ul data-aos=\"fade-up\" data-aos-delay=\"100\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\"" + _vm._ssrClass("pl-7 pr-4 gap-4 mt-4 bg-white rounded-lg border border-[#aeaeae] shadow-[0px_2px_2px_rgba(0,0,0,0.25)] min-h-[96px]", {
    'pt-4': _vm.designers.length === 0
  }) + ">", "</ul>", [_vm._ssrNode((_vm.searchingDesigners ? "<div class=\"min-h-[150px] w-full flex items-center justify-center\"><div class=\"border-4 border-t-[#232D4E] rounded-full w-10 h-10 animate-spin-slow\"></div></div>" : "<!---->") + " " + (_vm.designers.length === 0 && !_vm.searchingDesigners ? "<span class=\"text-[#aeaeae] text-sm\">查無資料</span>" : "<!---->") + " "), _vm._l(_vm.designers, function (item, idx) {
    return _vm._ssrNode("<li data-aos=\"fade\"" + _vm._ssrAttr("data-aos-delay", 100 + idx * 50) + " data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"my-4\">", "</li>", [_vm._ssrNode("<div class=\"flex items-center justify-between\">", "</div>", [_vm._ssrNode("<div class=\"flex items-center gap-4\"><img" + _vm._ssrAttr("src", item.avatar) + _vm._ssrAttr("alt", item.name) + " class=\"w-12 h-12 rounded-full object-cover object-center select-none pointer-events-none\"> <h4 class=\"text-sm line-clamp-1\">" + _vm._ssrEscape("\n            " + _vm._s(item.name) + "\n            ") + (item.nickName ? "<span>" + _vm._ssrEscape("(" + _vm._s(item.nickName) + ")") + "</span>" : "<!---->") + "</h4></div> "), _vm._ssrNode("<div" + _vm._ssrClass("flex items-center gap-4 duration-300", {
      'scale-100': _vm.favoriteInfo.designer === item.id,
      'scale-0': _vm.favoriteInfo.designer !== item.id
    }) + ">", "</div>", [_vm._ssrNode("<p class=\"text-[#4ADE80] text-sm\">已選</p> "), _vm._ssrNode("<div class=\"w-8 h-8 border-2 border-[#4ADE80] flex justify-center items-center rounded-full\">", "</div>", [_c('fa', {
      staticClass: "text-sm text-[#4ADE80]",
      attrs: {
        "icon": "fa-solid fa-check"
      }
    })], 1)], 2)], 2)]);
  })], 2), _vm._ssrNode(" "), _vm._ssrNode("<button" + _vm._ssrClass("fixed bottom-24 left-[5%] w-[90%] py-2.5 shadow-md rounded-md duration-300 mt-5 flex items-center justify-center gap-2 z-10", {
    'bg-[#bebebe] pointer-events-none': _vm.isChanging || !_vm.favoriteInfo.id,
    'bg-[#232D4E]': !_vm.isChanging
  }) + ">", "</button>", [_vm.isChanging ? _c('fa', {
    staticClass: "animate-spin text-white",
    attrs: {
      "icon": "fa-solid fa-spinner"
    }
  }) : _vm._e(), _vm._ssrNode(" <p class=\"text-lg text-white\">儲存設定</p>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/setting/edit.vue?vue&type=template&id=fdbce290&

// EXTERNAL MODULE: ./utils/cancelToken.js
var cancelToken = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/setting/edit.vue?vue&type=script&lang=js&

/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: "setting-edit",
  data() {
    return {
      designers: [],
      favoriteInfo: {
        id: "",
        name: "",
        designer: ""
      },
      defaultMerchant: {},
      merchants: [],
      merchantsIsNull: true,
      searchInput: "",
      isShowDefault: true,
      searchingDesigners: false,
      isChanging: false
    };
  },
  methods: {
    // 搜尋門市 // 延遲請求
    searchMerchants() {
      let lastTimeVal = this.searchInput;
      setTimeout(() => {
        if (lastTimeVal === this.searchInput) {
          Object(cancelToken["c" /* cancelAllPending */])();
          this.merchants = [];
          this.merchantsIsNull = false;
          this.isShowDefault = false;
          this.$store.dispatch("itemLoading/isLoading", true);
          const input = this.searchInput.trim();
          if (!input) {
            this.isShowDefault = true;
            this.$store.dispatch("itemLoading/isLoading", false);
            return;
          }
          this.api.getAllMerchants(input).then(res => {
            if (res.data.getAllMerchants.length === 0) this.merchantsIsNull = true;
            this.merchants = res.data.getAllMerchants;
            this.$store.dispatch("itemLoading/isLoading", false);
          }).catch(err => {
            console.log(err);
          });
        }
      }, 500);
    },
    // 搜尋門市可預約設計師
    searchDesigner(id) {
      if (this.favoriteInfo.id === id) return;
      Object(cancelToken["c" /* cancelAllPending */])();
      this.searchingDesigners = true;
      this.designers = [];
      this.api.customerGetMerchantDesigners(id).then(res => {
        this.designers = res.data.customerGetMerchantDesigners;
        this.searchingDesigners = false;
      }).catch(err => {
        console.log(err);
      });
    },
    // 選擇門市
    selectStore(item) {
      if (this.favoriteInfo.id === item.id) return;
      this.favoriteInfo.designer = "";
      this.favoriteInfo.id = item.id;
      this.favoriteInfo.name = item.name;
    },
    // 選擇設計師
    selectDesigner(id) {
      this.favoriteInfo.designer = id;
    },
    // 判斷選取到的門市
    isSelectedStore(id) {
      if (this.favoriteInfo.id === id) {
        return true;
      } else {
        return false;
      }
    },
    // 修改偏好
    // 變更完設定後要再打一隻取得 defaultMarchant 的api (customerGetCurrentMerchantSetting)，否則第一次沒有店家的會員不能跳頁面
    saveFavorite() {
      this.isChanging = true;
      let sameMerchant = this.favoriteInfo.id == this.defaultMerchant.id;

      //沒選設計師、沒更新店家
      if (!this.favoriteInfo.designer && sameMerchant) {
        //直接取得目前設定
        this.customerGetCurrentMerchantSetting();
      }

      //沒選設計師、更新店家
      if (!this.favoriteInfo.designer && !sameMerchant) {
        //更新店家設定
        this.api.updateCustomerCuttentMerchant(this.favoriteInfo.id).then(res => {
          if (res.data.hasError) throw res.errors;
          this.customerGetCurrentMerchantSetting();
        }).catch(err => {
          console.log(err);
        });
      }

      //選設計師、更新店家
      if (this.favoriteInfo.designer && !sameMerchant) {
        //先更新店家
        this.api.updateCustomerCuttentMerchant(this.favoriteInfo.id).then(res => {
          if (res.data.hasError) throw res.errors;
          // 再更新設計師
          this.api.updateCustomerPreferDesigner(this.favoriteInfo.designer, this.favoriteInfo.id).then(() => {
            this.customerGetCurrentMerchantSetting();
          }).catch(err => {
            console.log(err);
          });
        }).catch(err => {
          console.log(err);
        });
      }

      //選設計師、沒更新店家
      if (this.favoriteInfo.designer && sameMerchant) {
        this.api.updateCustomerPreferDesigner(this.favoriteInfo.designer, this.favoriteInfo.id).then(() => {
          this.customerGetCurrentMerchantSetting();
        }).catch(err => {
          console.log(err);
        });
      }
    },
    // 取得預設門市、設計師、所有門市
    customerGetCurrentMerchantSetting() {
      //取得是否新客且無店家
      let isNewCustomerAndNomerchant = JSON.parse(localStorage.getItem("isNewCustomerAndNomerchant"));
      window.localStorage.clear();
      this.api.customerGetCurrentMerchantSetting().then(res => {
        if (!res.data.hasError) {
          let resData = res.data.customerGetCurrentMerchantSetting;
          localStorage.setItem("allMerchants", JSON.stringify(resData.consumedMerchants));
          localStorage.setItem("merchant", JSON.stringify(resData.currentMerchant));
          localStorage.setItem("preferDesigner", JSON.stringify(resData.preferDesigner));
          this.isChanging = false;
          this.$swal.fire({
            icon: "success",
            title: '<h3 class="text-2xl">已儲存偏好設定</h3>',
            background: "#fff",
            iconColor: "#FEB401",
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            if (isNewCustomerAndNomerchant) {
              this.$router.push("/member/appointment");
            } else {
              this.$router.push("/member/setting");
            }
          });
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    // 取得門市設計師資料
    let merchant = JSON.parse(window.localStorage.getItem("merchant")) || {};
    if (merchant !== null && merchant !== void 0 && merchant.id) this.searchDesigner(merchant === null || merchant === void 0 ? void 0 : merchant.id);

    // 取得預設門市資料
    this.defaultMerchant = merchant;
    // 選擇門市
    this.selectStore(this.defaultMerchant);
  }
});
// CONCATENATED MODULE: ./pages/member/setting/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var setting_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/setting/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  setting_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a288ea56"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberGlobalCard: __webpack_require__(43).default,ItemLoading: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=edit.js.map