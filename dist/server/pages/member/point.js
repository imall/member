exports.ids = [26];
exports.modules = {

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/point.vue?vue&type=template&id=92b8bbb8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"fixed left-0 top-0 w-full px-[10%] text-lg bg-white py-4 flex items-center\">", "</div>", [_c('fa', {
    staticClass: "text-2xl",
    attrs: {
      "icon": "fa-solid fa-angle-left"
    },
    on: {
      "click": function ($event) {
        return _vm.$router.push('/member');
      }
    }
  }), _vm._ssrNode(" <h2 class=\"absolute top-1/2 translate-y-[-50%] left-[50%] translate-x-[-50%] text-lg font-bold\">紅利點數</h2>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"text-center mb-5 pb-5 relative after:content-[''] after:w-screen after:h-[1px] after:bg-[#232D4E] after:absolute after:left-[-6%] md:after:left-[-1.5%] after:bottom-0\">", "</div>", [_vm._ssrNode("<div class=\"flex justify-center items-center gap-2\">", "</div>", [_c('fa', {
    staticClass: "text-3xl text-[#FEB401]",
    attrs: {
      "icon": "fa-regular fa-circle-p"
    }
  }), _vm._ssrNode(" <h3 class=\"text-4xl font-bold\">" + _vm._ssrEscape(_vm._s(_vm.showCash)) + "</h3>")], 2), _vm._ssrNode(" <p class=\"text-sm mt-2\">剩餘點數</p>")], 2), _vm._ssrNode(" "), _c('nuxt-child')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/point.vue?vue&type=template&id=92b8bbb8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/point.vue?vue&type=script&lang=js&
/* harmony default export */ var pointvue_type_script_lang_js_ = ({
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
      cash: 560,
      showCash: 0
    };
  },
  mounted() {
    // 跳動金額
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
});
// CONCATENATED MODULE: ./pages/member/point.vue?vue&type=script&lang=js&
 /* harmony default export */ var member_pointvue_type_script_lang_js_ = (pointvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/point.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  member_pointvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1617dee1"
  
)

/* harmony default export */ var point = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=point.js.map