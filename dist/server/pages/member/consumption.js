exports.ids = [20,3];
exports.modules = {

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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/consumption.vue?vue&type=template&id=d7ccd992&
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
  }), _vm._ssrNode(" <h2 class=\"absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] text-lg font-bold\">服務記錄</h2>")], 2), _vm._ssrNode(" "), _vm.orders.length > 0 && !_vm.isLoading ? _vm._ssrNode("<ul id=\"orderList\" data-aos=\"fade-up\" data-aos-duration=\"300\" data-aos-once=\"true\" class=\"rounded-md shadow-md bg-white mt-3 text-sm\">", "</ul>", _vm._l(_vm.orders, function (item, idx) {
    return _vm._ssrNode("<li data-aos=\"fade\" data-aos-delay=\"200\" data-aos-once=\"true\" data-aos-duration=\"400\" data-aos-anchor=\"#firstPos\"" + _vm._ssrClass("py-4 px-6", {
      'border-b border-[#aeaeae]': idx + 1 !== _vm.orders.length
    }) + ">", "</li>", [_vm._ssrNode("<div class=\"grid grid-cols-12 items-center gap-4\">", "</div>", [_vm._ssrNode("<div class=\"col-span-5\"><p>帳單編號</p></div> <div class=\"col-span-7\"><p>" + _vm._ssrEscape(_vm._s(item.no)) + "</p></div> <div class=\"col-span-5\"><p>帳單時間</p></div> "), _vm._ssrNode("<div class=\"col-span-7\">", "</div>", [_c('p', {
      directives: [{
        name: "formatDate",
        rawName: "v-formatDate",
        value: 'time',
        expression: "'time'"
      }]
    }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(item.date)))])]), _vm._ssrNode(" <div class=\"col-span-5\"><p>設計師</p></div> <div class=\"col-span-7\">" + (item.designer ? "<p class=\"line-clamp-1\">" + _vm._ssrEscape(_vm._s(item.designer.name) + " ") + (item.designer.nickName ? "<span>" + _vm._ssrEscape("(" + _vm._s(item.designer.nickName) + ")") + "</span>" : "<!---->") + "</p>" : "<p>不指定</p>") + "</div> <div class=\"col-span-5\"><p>指定</p></div> <div class=\"col-span-7\">" + (item.isDesignate ? "<p>Y</p>" : "<p>N</p>") + "</div> <div class=\"col-span-5\"><p>服務消費</p></div> <div class=\"col-span-7 flex items-center gap-2\"><p class=\"text-[#FEB401] text-lg font-bold\">" + _vm._ssrEscape("$" + _vm._s(item.serviceFakeTotal)) + "</p></div> <div class=\"col-span-5\"><p>店販消費</p></div> <div class=\"col-span-7 flex items-center gap-2\"><p class=\"text-[#FEB401] text-lg font-bold\">" + _vm._ssrEscape("$" + _vm._s(item.productFakeTotal)) + "</p></div> <div class=\"col-span-5\"><p>預收卡販賣</p></div> <div class=\"col-span-7 flex items-center gap-2\"><p class=\"text-[#FEB401] text-lg font-bold\">" + _vm._ssrEscape("$" + _vm._s(item.ticketSellIntoPerformance + item.ticketSellNotIntoPerformance)) + "</p></div> <div class=\"col-span-5\"><p>預收卡使用</p></div> <div class=\"col-span-7 flex items-center gap-2\"><p class=\"text-[#FEB401] text-lg font-bold\">" + _vm._ssrEscape("$" + _vm._s(item.useTicketTotal)) + "</p></div> <div class=\"col-span-5\"><p>會員卡販賣</p></div> <div class=\"col-span-7 flex items-center gap-2\"><p class=\"text-[#FEB401] text-lg font-bold\">" + _vm._ssrEscape("$" + _vm._s(item.membershipFakeTotal)) + "</p></div> <div class=\"col-span-5\"><p>實際支付現金</p></div> <div class=\"col-span-7 flex items-center gap-2\"><p class=\"text-[#FEB401] text-lg font-bold\">" + _vm._ssrEscape("$" + _vm._s(item.businessCash)) + "</p></div>")], 2)]);
  }), 0) : _vm._e(), _vm._ssrNode(" "), _c('ItemLoading'), _vm._ssrNode(" " + (_vm.orders.length === 0 && !_vm.isLoading ? "<ul data-aos=\"zoom-in\" data-aos-duration=\"300\" class=\"rounded-md min-h-[200px] shadow-md bg-white mt-3 text-sm flex items-center justify-center\"><li><p>目前尚無紀錄</p></li></ul>" : "<!---->"))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/consumption.vue?vue&type=template&id=d7ccd992&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/consumption.vue?vue&type=script&lang=js&
/* harmony default export */ var consumptionvue_type_script_lang_js_ = ({
  name: 'member-consumption',
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
      orders: [],
      totalPage: 0,
      currentPage: 0,
      isGetting: false,
      isEnd: false
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    // 取得紀錄
    getRecords() {
      this.$store.dispatch('loading/isLoading', true);
      this.$api.getCustomerConsumptionRecords(this.currentPage).then(res => {
        this.totalPage = Math.ceil(res.data.getCustomerConsumptionRecords.totalCount / 20);
        if (this.totalPage <= 1) this.isEnd = true;
        if (this.totalPage > 1) {
          const container = document.querySelector('.member__container');
          container.addEventListener('scroll', this.scrollGetRecords);
        }
        this.orders = res.data.getCustomerConsumptionRecords.orders;
        this.$store.dispatch('loading/isLoading', false);
      }).catch(err => {
        console.log(err);
      });
    },
    // 滾動取得紀錄
    async scrollGetRecords() {
      const orderList = document.querySelector('#orderList');
      const triggerDistance = 200;
      const distance = orderList.getBoundingClientRect().bottom - window.innerHeight;
      if (!this.isGetting && !this.isEnd && distance < triggerDistance) {
        this.$store.dispatch('itemLoading/isLoading', true);
        this.isGetting = true;
        this.isEnd = false;
        this.currentPage++;
        if (this.currentPage === this.totalPage - 1) {
          this.isEnd = true;
          const container = document.querySelector('.member__container');
          container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', this.scrollGetRecords);
        }
        await this.$api.getCustomerConsumptionRecords(this.currentPage).then(res => {
          res.data.getCustomerConsumptionRecords.orders.forEach(item => {
            const date = new Date(item.date);
            const dateFormat = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            item['dateFormat'] = dateFormat;
          });
          // 使用 concat 測試
          this.orders = this.orders.concat(res.data.getCustomerConsumptionRecords.orders);
          this.isGetting = false;
          this.$store.dispatch('itemLoading/isLoading', false);
        }).catch(err => {
          this.isGetting = false;
          console.log(err);
        });
      }
    }
  },
  mounted() {
    this.getRecords();
  },
  beforeDestroy() {
    const vm = this;
    const container = document.querySelector('.member__container');
    if (container) {
      container === null || container === void 0 ? void 0 : container.removeEventListener('scroll', vm.scrollGetRecords);
    }
  }
});
// CONCATENATED MODULE: ./pages/member/consumption.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_consumptionvue_type_script_lang_js_ = (consumptionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/consumption.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_consumptionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "93cc5ea8"
  
)

/* harmony default export */ var consumption = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ItemLoading: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=consumption.js.map