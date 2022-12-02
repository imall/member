exports.ids = [13];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/addValue.vue?vue&type=template&id=7b3e4cd8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
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
  }), _vm._ssrNode(" <h2 class=\"absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] text-lg font-bold\">入金紀錄</h2>")], 2), _vm._ssrNode(" "), _vm.merchants.length > 0 && !_vm.isLoading ? _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-anchor=\"#firstPos\" class=\"text-center mb-5 pb-5 relative after:content-[''] after:w-screen after:h-[1px] after:bg-[#232D4E] after:absolute after:left-[-6%] md:after:left-[-1.5%] after:bottom-0\">", "</div>", [_vm._ssrNode("<div class=\"w-full relative mb-5\">", "</div>", [_vm.merchants.length > 0 ? _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectMerchantId,
      expression: "selectMerchantId"
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
        _vm.selectMerchantId = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, function ($event) {
        return _vm.getWalletRecords();
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
  })], 2), _vm._ssrNode(" <h3 class=\"text-4xl text-[#FEB401] font-bold\">" + _vm._ssrEscape("$" + _vm._s(_vm.showCash)) + "</h3> <p class=\"text-sm mt-2\">剩餘入金</p>")], 2) : _vm._e(), _vm._ssrNode(" "), _vm.addValueRecords.length > 0 && !_vm.isLoading ? _vm._ssrNode("<ul data-aos=\"fade-up\" data-aos-duration=\"400\" data-aos-once=\"true\" data-aos-delay=\"200\" data-aos-anchor=\"#firstPos\" class=\"bg-white rounded-xl shadow-md text-sm\">", "</ul>", _vm._l(_vm.addValueRecords, function (item, idx) {
    return _vm._ssrNode("<li data-aos=\"fade\"" + _vm._ssrAttr("data-aos-delay", 500 + idx * 100) + " data-aos-once=\"true\" data-aos-duration=\"400\" data-aos-anchor=\"#firstPos\"" + _vm._ssrClass("px-6 py-5 border-b border-[#aeaeae]", {
      'border-b-0': idx + 1 === _vm.addValueRecords.length
    }) + ">", "</li>", [_vm._ssrNode("<div class=\"grid grid-cols-12 gap-4\">", "</div>", [_vm._ssrNode("<div class=\"col-span-5\"><p>日期</p></div> "), _vm._ssrNode("<div class=\"col-span-7\">", "</div>", [_c('p', {
      directives: [{
        name: "formatDate",
        rawName: "v-formatDate",
        value: 'time',
        expression: "'time'"
      }]
    }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(item.date)))])]), _vm._ssrNode(" <div class=\"col-span-5\"><p>類別</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.type)) + "</p></div> " + (item.type === '使用' ? "<div class=\"col-span-5\"><p>訂單編號</p></div>" : "<!---->") + " " + (item.type === '使用' ? "<div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.orderNo)) + "</p></div>" : "<!---->") + " <div class=\"col-span-5\"><p>金額</p></div> <div" + _vm._ssrClass("col-span-7 flex gap-1", {
      'text-[#16A34A]': item.type === '存入',
      'text-[#F43F5E]': item.type !== '存入'
    }) + ">" + (item.type === '存入' ? "<span>+</span>" : "<span>-</span>") + " <span>" + _vm._ssrEscape("$" + _vm._s(item.price)) + "</span></div> <div class=\"col-span-5\"><p>設計師</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.designerName)) + "</p></div> " + (item.payType ? "<div class=\"col-span-5\"><p>付款方式</p></div>" : "<!---->") + " " + (item.payType ? "<div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.payType)) + "</p></div>" : "<!---->"))], 2)]);
  }), 0) : _vm._e(), _vm._ssrNode(" " + (_vm.addValueRecords.length === 0 && !_vm.isLoading ? "<ul data-aos=\"fade-up\" data-aos-once=\"true\" data-aos-duration=\"500\" data-aos-delay=\"150\" class=\"bg-white rounded-lg min-h-[211px] shadow-md pt-10\"><li class=\"text-center text-sm text-[#aeaeae]\"><p>目前無資料</p></li></ul>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/addValue.vue?vue&type=template&id=7b3e4cd8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/addValue.vue?vue&type=script&lang=js&
/* harmony default export */ var addValuevue_type_script_lang_js_ = ({
  name: 'addValue-index',
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
      cash: 0,
      showCash: 0,
      merchants: JSON.parse(window.localStorage.getItem('allMerchants')) || [],
      selectMerchantId: '',
      addValueRecords: []
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    // 取得入金列表
    getWalletRecords() {
      this.$store.dispatch('loading/isLoading', true);
      this.cash = 0;
      const id = this.selectMerchantId ? this.selectMerchantId : '';
      this.api.customerWalletRecords(id).then(res => {
        this.cash = res.data.customerWalletRecords.remainWallet;
        this.addValueRecords = res.data.customerWalletRecords.walletRecord;
        this.$store.dispatch('loading/isLoading', false);
        this.cashAnimation();
      }).catch(err => {
        console.log(err);
      });
    },
    cashAnimation() {
      if (this.cash >= 60) {
        const range = parseInt(this.cash / 60);
        const counterCash = setInterval(() => {
          this.showCash += range;
          if (this.showCash >= this.cash) {
            this.showCash = this.cash - 10;
            clearInterval(counterCash);
            const newCounterCash = setInterval(() => {
              this.showCash += 1;
              if (this.showCash === this.cash - 2) {
                setTimeout(() => {
                  this.showCash += 1;
                  setTimeout(() => {
                    this.showCash += 1;
                  }, 500);
                }, 300);
                clearInterval(newCounterCash);
              }
            }, 100);
          }
        }, 10);
      } else if (this.cash >= 10 && this.cash < 60) {
        const range = parseInt(this.cash / 1);
        const counterCash = setInterval(() => {
          this.showCash += range;
          if (this.showCash >= this.cash) {
            this.showCash = this.cash - 10;
            clearInterval(counterCash);
            const newCounterCash = setInterval(() => {
              this.showCash += 1;
              if (this.showCash === this.cash - 2) {
                setTimeout(() => {
                  this.showCash += 1;
                  setTimeout(() => {
                    this.showCash += 1;
                  }, 600);
                }, 300);
                clearInterval(newCounterCash);
              }
            }, 100);
          }
        }, 10);
      } else {
        if (this.cash <= 1) {
          this.showCash = this.cash;
          return;
        }
        const counterCash = setInterval(() => {
          this.showCash += 1;
          if (this.showCash === this.cash - 1) {
            clearInterval(counterCash);
            setTimeout(() => {
              this.showCash += 1;
            }, 500);
          }
        }, 100);
      }
    }
  },
  mounted() {
    var _this$merchants$, _this$merchants$2;
    const merchant = JSON.parse(window.localStorage.getItem('merchant'));
    this.selectMerchantId = (_this$merchants$ = this.merchants[0]) !== null && _this$merchants$ !== void 0 && _this$merchants$.id ? (_this$merchants$2 = this.merchants[0]) === null || _this$merchants$2 === void 0 ? void 0 : _this$merchants$2.id : merchant === null || merchant === void 0 ? void 0 : merchant.id;
    this.getWalletRecords();
  }
});
// CONCATENATED MODULE: ./pages/member/addValue.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_addValuevue_type_script_lang_js_ = (addValuevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/addValue.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_addValuevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d3bbaae2"
  
)

/* harmony default export */ var addValue = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=addValue.js.map