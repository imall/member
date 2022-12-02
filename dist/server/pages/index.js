exports.ids = [10];
exports.modules = {

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insideLogo.85c1f01.svg";

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=22fdbbae&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [!_vm.isLoading ? _c('client-only', [_c('header', {
    pre: true,
    attrs: {
      "class": "w-full pb-4 fixed top-5 left-0 z-10"
    }
  }, [_c('div', {
    pre: true,
    attrs: {
      "class": "w-[90%] mx-auto"
    }
  }, [_c('h1', [_c('img', {
    pre: true,
    attrs: {
      "src": __webpack_require__(45),
      "alt": "bos客戶預約系統"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col w-full px-[10%] h-[100vh] overflow-x-hidden overflow-y-hidden gap-10 justify-center items-center bg-[#f1f1f1]"
  }, [_c('h2', {
    pre: true,
    attrs: {
      "data-aos": "fade-up",
      "data-aos-once": "true",
      "data-aos-delay": "100",
      "data-aos-duration": "700",
      "class": "text-black text-lg"
    }
  }, [_vm._v("\n        會員登入\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-col w-full max-w-[450px] justify-start",
    attrs: {
      "data-aos": "fade-up",
      "data-aos-once": "true",
      "data-aos-delay": "250",
      "data-aos-duration": "700"
    }
  }, [_c('ValidationObserver', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        handleSubmit
      }) {
        return [_c('form', {
          on: {
            "submit": function ($event) {
              $event.preventDefault();
              return handleSubmit(_vm.login);
            }
          }
        }, [_c('label', {
          pre: true,
          attrs: {
            "for": "phoneInput",
            "class": "text-black text-sm"
          }
        }, [_vm._v("手機：")]), _vm._v(" "), _c('div', {
          staticClass: "form-group relative mb-10 mt-2"
        }, [_c('ValidationProvider', {
          staticClass: "w-full",
          attrs: {
            "name": "手機",
            "rules": "required|onlyNumber"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.member.phone,
                  expression: "member.phone"
                }],
                ref: "phoneRef",
                staticClass: "w-full p-2.5 rounded-xl focus:outline-none border border-[#aeaeae]",
                class: {
                  'ring-2 ring-[#ff4444]': errors.length > 0
                },
                attrs: {
                  "onpaste": "return false",
                  "maxlength": "10",
                  "id": "phoneInput",
                  "type": "tel"
                },
                domProps: {
                  "value": _vm.member.phone
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.member, "phone", $event.target.value);
                  }
                }
              }), _vm._v(" "), errors.length > 0 ? _c('span', {
                staticClass: "absolute left-3 md:left-10 -bottom-5 text-red-500 text-xs font-bold"
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e()];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('label', {
          pre: true,
          attrs: {
            "for": "verifyInput",
            "class": "text-black text-sm sm:text-black"
          }
        }, [_vm._v("驗證碼：")]), _vm._v(" "), _c('div', {
          staticClass: "form-group relative mt-2"
        }, [_c('ValidationProvider', {
          staticClass: "w-full",
          attrs: {
            "name": "驗證碼",
            "rules": "required|onlyNumber"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.member.verifyCode,
                  expression: "member.verifyCode"
                }],
                staticClass: "w-full p-2.5 rounded-xl focus:outline-none border border-[#aeaeae]",
                class: {
                  'ring-2 ring-[#ff4444]': errors.length > 0
                },
                attrs: {
                  "minlength": "5",
                  "maxlength": "5",
                  "id": "verifyInput",
                  "type": "tel"
                },
                domProps: {
                  "value": _vm.member.verifyCode
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.member, "verifyCode", $event.target.value);
                  }
                }
              }), _vm._v(" "), errors.length > 0 ? _c('span', {
                staticClass: "absolute left-3 md:left-10 -bottom-5 text-red-500 text-xs font-bold"
              }, [_vm._v(_vm._s(errors[0]))]) : _vm._e(), _vm._v(" "), _c('button', {
                staticClass: "absolute right-0 bottom-0 h-full p-2.5 text-white text-sm rounded-[0_12px_12px_0] flex items-center gap-1",
                class: {
                  'bg-[#FEB401]': !_vm.getCodeWaitingTimer,
                  'bg-[#bebebe]': _vm.getCodeWaitingTimer || _vm.getingCode
                },
                attrs: {
                  "type": "button",
                  "disabled": _vm.getCodeWaitingTimer || _vm.getingCode
                },
                on: {
                  "click": _vm.getVerifyCode
                }
              }, [_vm.getingCode ? _c('fa', {
                staticClass: "animate-spin-slow",
                attrs: {
                  "icon": "fa-solid fa-spinner"
                }
              }) : _vm._e(), _vm._v("\n                  取得驗證碼\n                  "), _vm.getCodeWaitingTimer ? _c('p', [_vm._v("(" + _vm._s(_vm.getCodeWaitingTimer) + ")")]) : _vm._e()], 1)];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('button', {
          staticClass: "w-full py-3 text-white text-sm mt-10 bg-[#2f3549] rounded-xl shadow-md flex justify-center items-center gap-3 duration-300",
          class: {
            'bg-[#555555]': _vm.isLogin
          },
          attrs: {
            "disabled": _vm.isLogin,
            "type": "submit"
          }
        }, [_vm.isLogin ? _c('fa', {
          staticClass: "animate-spin-slow",
          attrs: {
            "icon": "fa-solid fa-spinner"
          }
        }) : _vm._e(), _vm._v("\n              登入\n            ")], 1)])];
      }
    }], null, false, 3128292716)
  })], 1)])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=22fdbbae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',
  head() {
    return {
      meta: [{
        name: 'theme-color',
        content: '#f1f1f1'
      }]
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  data() {
    return {
      member: {
        phone: '',
        verifyCode: ''
      },
      isLogin: false,
      getingCode: false,
      getCodeWaitingTimer: null
    };
  },
  methods: {
    getVerifyCode() {
      if (!this.member.phone) {
        return this.$swal.fire({
          icon: 'warning',
          title: `<h3 class="text-2xl">請輸入手機號碼</h3>`,
          background: '#fff',
          iconColor: '#FEB401',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          setTimeout(() => {
            const phoneRef = this.$refs.phoneRef;
            phoneRef.focus();
          }, 300);
        });
      }
      this.getingCode = true;
      this.$api.customerLoginSMSWithTKN(this.member.phone).then(res => {
        this.getingCode = false;
        this.getCodeWaitingTimer = 60;
        const timer = setInterval(() => {
          if (this.getCodeWaitingTimer <= 1) {
            clearInterval(timer);
            this.getCodeWaitingTimer = null;
          } else {
            this.getCodeWaitingTimer--;
          }
        }, 1000);
        if (!res.hasError) {
          this.$swal.fire({
            icon: 'success',
            title: `<h3 class="text-2xl">已傳送簡訊至<span class="text-[#FEB401]">${this.member.phone}</span></h3>`,
            background: '#fff',
            iconColor: '#FEB401',
            timer: 1500,
            showConfirmButton: false
          });
        } else {
          clearInterval(timer);
          this.getCodeWaitingTimer = null;
        }
      }).catch(err => {
        clearInterval(timer);
        console.log(err);
        this.getCodeWaitingTimer = null;
        this.getingCode = false;
        this.$swal.fire({
          icon: 'error',
          title: `<h3 class="text-2xl">發生錯誤，請稍後再試</h3>`,
          background: '#fff',
          iconColor: '#FEB401',
          timer: 1500,
          showConfirmButton: false
        });
      });
    },
    login() {
      if (this.isLogin) return;
      this.isLogin = true;
      const input = {
        cellphone: this.member.phone,
        code: this.member.verifyCode
      };
      const needKey = `
        token,
        name,
        cellphone,
        isNewCustomer
        merchants{
          id,
          name,
          address,
          availableBookingTime{
            time
          }
        },
        currentMerchant{
          id,
          name,
          address,
          shopURL,
          rankingURL,
          availableBookingTime{
            time
          }
        }
      `;
      this.$api.customerVerifySMSWithTKN(input, needKey).then(res => {
        if (!res.hasError) {
          this.$cookieMethods.setToken(res.data.customerVerifySMSWithTKN.token);
          localStorage.setItem('allMerchants', JSON.stringify(res.data.customerVerifySMSWithTKN.merchants));
          localStorage.setItem("isNewCustomer", JSON.stringify(res.data.customerVerifySMSWithTKN.isNewCustomer));
          let isNewCustomerAndNomerchant = JSON.parse(localStorage.getItem("isNewCustomer")) ? true : false;
          localStorage.setItem("isNewCustomerAndNomerchant", isNewCustomerAndNomerchant);
          this.customerGetCurrentMerchantSetting();
        } else {
          this.isLogin = false;
        }
      }).catch(err => {
        this.isLogin = false;
        console.log(err);
      });
    },
    customerGetCurrentMerchantSetting() {
      this.api.customerGetCurrentMerchantSetting().then(res => {
        if (!res.data.hasError) {
          const responseData = res.data.customerGetCurrentMerchantSetting;
          localStorage.setItem('allMerchants', JSON.stringify(responseData.consumedMerchants));
          localStorage.setItem('merchant', JSON.stringify(responseData.currentMerchant));
          localStorage.setItem('preferDesigner', JSON.stringify(responseData.preferDesigner));
          this.$swal.fire({
            icon: 'success',
            title: `<h3 class="text-2xl">登入成功</h3>`,
            background: '#fff',
            iconColor: '#FEB401',
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            this.$router.push('/member');
          });
        }
        this.isLogin = false;
      }).catch(err => {
        this.isLogin = false;
        console.log(err);
      });
    }
  },
  mounted() {
    document.body.addEventListener('dblclick', e => {
      e.preventDefault();
      e.stopPropagation();
    });
    window.addEventListener('load', function () {
      if ('serviceWorker' in window.navigator) {
        window.navigator.serviceWorker.register('sw.js').then(() => {
          console.log('Service Worker 設定完成');
        }).catch(() => {
          console.log('Service Worker 設定失敗');
        });
      }
    });
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6bdea14f"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map