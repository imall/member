exports.ids = [31,6,9];
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

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ticket.vue?vue&type=template&id=5c8ef2c8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"w-full bg-white rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] mb-2.5\">", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-12\">", "</div>", [_vm._ssrNode("<div class=\"col-span-4 text-white font-bold relative bg-[#FEB401]\"><div class=\"absolute h-[calc(100%+20px)] w-2.5 top-0 -left-2.5 bg-[#f1f1f1] z-40\"></div> <div class=\"absolute h-2 5 w-2.5 -bottom-2.5 left-0 bg-[#f1f1f1] z-40\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 bg-[#f1f1f1]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[26px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[52px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[78px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_1px_rgba(0,0,0,0.25)]\"></div> <div class=\"absolute w-5 h-5 rounded-full -left-2.5 -top-2.5 translate-y-[104px] bg-[#f1f1f1] shadow-[inset_-1px_1px_2px_0px_rgba(0,0,0,0.25)]\"></div> <div class=\"w-full h-full flex justify-center items-center py-2 pl-4 flex-nowrap gap-1\"><p class=\"text-xs mt-1\">NT$</p> <p class=\"text-lg\">" + _vm._ssrEscape(_vm._s(_vm.price) + "/次") + "</p></div></div> "), _vm._ssrNode("<div class=\"col-span-8 py-2 px-1\">", "</div>", [_vm._ssrNode("<h4 class=\"font-bold line-clamp-1\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h4> <span class=\"text-[#666] text-sm\">" + _vm._ssrEscape("可用次數：" + _vm._s(_vm.canUse - _vm.used) + "/" + _vm._s(_vm.canUse) + " (總金額:" + _vm._s(_vm.totalPrice) + ")") + "</span> <div class=\"w-full border-b border-b-[#DDD]\"></div> "), _vm._ssrNode("<p class=\"text-[#666] text-xs mt-2\">", "</p>", [_vm._ssrNode("購買日期："), _c('span', {
    directives: [{
      name: "formatDate",
      rawName: "v-formatDate",
      value: 'date',
      expression: "'date'"
    }]
  }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.time)))])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex justify-end items-center gap-1\">", "</div>", [_c('fa', {
    staticClass: "text-xs text-[#57CDFF]",
    attrs: {
      "icon": "fa-regular fa-circle-info"
    },
    on: {
      "click": function ($event) {
        return _vm.openRecord(_vm.idx);
      }
    }
  }), _vm._ssrNode(" <span class=\"text-xs text-[#57CDFF]\">使用紀錄</span>")], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Ticket.vue?vue&type=template&id=5c8ef2c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Ticket.vue?vue&type=script&lang=js&
/* harmony default export */ var Ticketvue_type_script_lang_js_ = ({
  name: 'Ticket-index',
  props: {
    id: {
      type: String,
      default: () => 0
    },
    idx: {
      type: Number,
      default: () => 0
    },
    title: {
      type: String,
      default: () => ''
    },
    price: {
      type: Number,
      default: () => 0
    },
    totalPrice: {
      type: Number,
      default: () => 0
    },
    canUse: {
      type: Number,
      default: () => 0
    },
    used: {
      type: Number,
      default: () => 0
    },
    time: {
      type: Number,
      default: () => 0
    }
  },
  methods: {
    openRecord(idx) {
      this.$emit('openRecord', idx);
    }
  }
});
// CONCATENATED MODULE: ./components/Ticket.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Ticketvue_type_script_lang_js_ = (Ticketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Ticket.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Ticketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dc3200f2"
  
)

/* harmony default export */ var Ticket = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/ticket/index.vue?vue&type=template&id=5208c137&
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
  }), _vm._ssrNode(" <h2 class=\"absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] text-lg font-bold\">我的卡券</h2>")], 2), _vm._ssrNode(" "), _vm.merchants.length > 0 && !_vm.isLoading ? _vm._ssrNode("<div data-aos=\"zoom-in\" data-aos-duration=\"300\" data-aos-once=\"true\">", "</div>", [_vm._ssrNode("<div class=\"w-full relative mb-5\">", "</div>", [_vm.merchants.length > 0 ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectStore,
      expression: "selectStore"
    }],
    staticClass: "w-full p-3 text-center rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] bg-white appearance-none",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectStore = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.getCoupons();
      }]
    }
  }, _vm._l(_vm.merchants, function (item) {
    return _c('option', {
      key: item.id,
      domProps: {
        "value": item.id
      }
    }, [_vm._v(_vm._s(item.name))]);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _c('fa', {
    staticClass: "absolute right-5 top-1/2 -translate-y-1/2",
    attrs: {
      "icon": "fa-regular fa-angle-down"
    }
  })], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.tickets.length > 0 && !_vm.isLoading ? _vm._ssrNode("<div id=\"position\">", "</div>", _vm._l(_vm.tickets, function (item, idx) {
    return _c('Ticket', {
      key: item.couponId + idx,
      attrs: {
        "id": item.couponId,
        "idx": idx,
        "title": item.couponName,
        "canUse": item.totalCount,
        "used": item.usedCount,
        "price": item.singleCouponPrice,
        "totalPrice": item.singleCouponPrice * item.totalCount,
        "time": item.boughtDate,
        "data-aos": "zoom-in",
        "data-aos-delay": 100 + idx * 100,
        "data-aos-duration": "300",
        "data-aos-once": "true",
        "data-aos-anchor": "#position"
      },
      on: {
        "openRecord": function ($event) {
          return _vm.handleOpenRecord($event);
        }
      }
    });
  }), 1) : _vm._e(), _vm._ssrNode(" " + (_vm.tickets.length === 0 && !_vm.isLoading ? "<ul data-aos=\"fade-up\" data-aos-once=\"true\" data-aos-duration=\"500\" data-aos-delay=\"150\" class=\"bg-white rounded-lg min-h-[211px] shadow-md pt-10\"><li class=\"text-center text-sm text-[#aeaeae]\"><p>目前無資料</p></li></ul>" : "<!---->") + " "), _c('Modal', {
    attrs: {
      "showModal": _vm.showRecord
    },
    on: {
      "cancelModal": _vm.cancelModal
    }
  }, [_c('h3', {
    staticClass: "text-center font-bold mt-10"
  }, [_vm._v(_vm._s(_vm.cacheRecord.couponName))]), _vm._v(" "), _vm.cacheRecord.usedCount && _vm.cacheRecord.usageRecord.length > 0 ? _c('table', {
    staticClass: "w-full text-left mt-5 text-sm"
  }, [_c('thead', {
    pre: true
  }, [_c('tr', [_c('th', {
    pre: true,
    attrs: {
      "class": "text-center"
    }
  }, [_vm._v("項次")]), _vm._v(" "), _c('th', [_vm._v("使用日期")]), _vm._v(" "), _c('th', {
    pre: true,
    attrs: {
      "class": "text-center"
    }
  }, [_vm._v("使用張數")])])]), _vm._v(" "), _c('tbody', _vm._l(_vm.cacheRecord.usageRecord, function (item, idx) {
    return _c('tr', {
      key: item.usedDate
    }, [_c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(idx + 1))]), _vm._v(" "), _c('td', [_c('p', {
      directives: [{
        name: "formatDate",
        rawName: "v-formatDate",
        value: 'time',
        expression: "'time'"
      }]
    }, [_vm._v(_vm._s(item.usedDate))])]), _vm._v(" "), _c('td', {
      staticClass: "text-center"
    }, [_vm._v(_vm._s(item.usageCount))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.cacheRecord.usedCount && _vm.cacheRecord.usageRecord.length > 0 ? _c('div', {
    staticClass: "mt-10"
  }, [_c('div', {
    staticClass: "grid grid-cols-12 w-full gap-2 text-sm"
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "col-span-9 text-right"
    }
  }, [_vm._v("可用次數 :")]), _vm._v(" "), _c('div', {
    staticClass: "col-span-3"
  }, [_vm._v(_vm._s(_vm.cacheRecord.remainingCount) + "/" + _vm._s(_vm.cacheRecord.totalCount))]), _vm._v(" "), _c('div', {
    pre: true,
    attrs: {
      "class": "col-span-9 text-right"
    }
  }, [_vm._v("總金額 :")]), _vm._v(" "), _c('div', {
    staticClass: "col-span-3"
  }, [_vm._v("$" + _vm._s(_vm.cacheRecord.singleCouponPrice * _vm.cacheRecord.totalCount))])])]) : _c('div', [_c('p', {
    staticClass: "text-[#bebebe] text-center my-5 text-sm"
  }, [_vm._v("此卡券尚無使用紀錄")])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/ticket/index.vue?vue&type=template&id=5208c137&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/ticket/index.vue?vue&type=script&lang=js&
/* harmony default export */ var ticketvue_type_script_lang_js_ = ({
  name: 'member-ticket',
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
      tickets: [],
      merchants: JSON.parse(window.localStorage.getItem('allMerchants')) || [],
      selectStore: '',
      showRecord: false,
      cacheRecord: {}
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    handleOpenRecord(idx) {
      this.cacheRecord = this.tickets.find((item, index) => idx === index);
      this.showRecord = true;
    },
    cancelModal(e) {
      e.stopPropagation();
      const classList = Array.from(e.target.classList);
      const isCancel = classList.includes('cancel');
      if (isCancel || e.target.nodeName === 'path') this.showRecord = false;
    },
    getCoupons() {
      this.tickets = [];
      this.$store.dispatch('loading/isLoading', true);
      const id = this.selectStore ? this.selectStore : '';
      this.api.customerCouponBalanceReport(id).then(res => {
        this.tickets = res.data.customerCouponBalanceReport.length > 0 ? res.data.customerCouponBalanceReport[0].data : [];
        this.$store.dispatch('loading/isLoading', false);
      }).catch(err => {
        console.log(err);
      });
    }
  },
  mounted() {
    const merchant = JSON.parse(window.localStorage.getItem('merchant'));
    if (this.merchants[0]) {
      this.selectStore = this.merchants[0].id ? this.merchants[0].id : merchant === null || merchant === void 0 ? void 0 : merchant.id;
      this.getCoupons();
    }
  }
});
// CONCATENATED MODULE: ./pages/member/ticket/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_ticketvue_type_script_lang_js_ = (ticketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/ticket/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_ticketvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c6c7367e"
  
)

/* harmony default export */ var ticket = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Ticket: __webpack_require__(52).default,Modal: __webpack_require__(46).default})


/***/ })

};;
//# sourceMappingURL=index.js.map