exports.ids = [11];
exports.modules = {

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/insideLogo.85c1f01.svg";

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=6456910e&
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
  }, [_vm._v("\r\n          會員登入\r\n        ")]), _vm._v(" "), _c('div', {
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
              }) : _vm._e(), _vm._v("\r\n                    取得驗證碼\r\n                    "), _vm.getCodeWaitingTimer ? _c('p', [_vm._v("\r\n                      (" + _vm._s(_vm.getCodeWaitingTimer) + ")\r\n                    ")]) : _vm._e()], 1)];
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
        }) : _vm._e(), _vm._v("\r\n                登入\r\n              ")], 1)])];
      }
    }], null, false, 4238627463)
  })], 1)])]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=6456910e&

// EXTERNAL MODULE: ./plugins/cookies.js
var cookies = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&

/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "login",
  data() {
    return {
      member: {
        phone: "",
        verifyCode: ""
      },
      isLogin: false,
      getingCode: false,
      getCodeWaitingTimer: null,
      token: Object(cookies["b" /* getToken */])() || "",
      merchantId: "",
      designerId: ""
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    getVerifyCode() {
      if (!this.member.phone) {
        return this.$swal.fire({
          icon: "warning",
          title: `<h3 class="text-2xl">請輸入手機號碼</h3>`,
          background: "#fff",
          iconColor: "#FEB401",
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
            icon: "success",
            title: `<h3 class="text-2xl">已傳送簡訊至<span class="text-[#FEB401]">${this.member.phone}</span></h3>`,
            background: "#fff",
            iconColor: "#FEB401",
            timer: 1500,
            showConfirmButton: false
          });
        } else {
          clearInterval(timer);
          this.getCodeWaitingTimer = null;
        }
      }).catch(err => {
        clearInterval(timer);
        this.getCodeWaitingTimer = null;
        this.getingCode = false;
        console.log(err);
        this.$swal.fire({
          icon: "error",
          title: `<h3 class="text-2xl">發生錯誤，請稍後再試</h3>`,
          background: "#fff",
          iconColor: "#FEB401",
          timer: 1500,
          showConfirmButton: false
        });
      });
    },
    //帶入網址時，尚未東入時執行
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
          localStorage.setItem("allMerchants", JSON.stringify(res.data.customerVerifySMSWithTKN.merchants));
          localStorage.setItem("isNewCustomer", JSON.stringify(res.data.customerVerifySMSWithTKN.isNewCustomer));
          let isNewCustomerAndNomerchant = JSON.parse(localStorage.getItem("isNewCustomer")) ? true : false;
          localStorage.setItem("isNewCustomerAndNomerchant", isNewCustomerAndNomerchant);

          // 假如有 query string 的話更新使用者的喜好店家
          this.api.updateCustomerCuttentMerchant(this.merchantId).then(async res => {
            if (res.hasError) throw res.errors;
            //如果有連結有帶設計師ID
            if (this.designerId) {
              await this.api.updateCustomerPreferDesigner(this.designerId, this.merchantId).then(async () => {
                await this.api.customerGetCurrentMerchantSetting().then(async res => {
                  if (!res.data.hasError) {
                    const dt = res.data.customerGetCurrentMerchantSetting;
                    this.setLocalStorage(dt);
                    this.isChanging = false;
                    await this.alertLoginSuccess();
                    this.saveDataAndDoRouter();
                  }
                });
              });
            }
            //如果連結沒有設計師ID=>只處理店家
            else {
              await this.api.customerGetCurrentMerchantSetting().then(async res => {
                if (!res.data.hasError) {
                  const dt = res.data.customerGetCurrentMerchantSetting;
                  this.setLocalStorage(dt);
                  this.isChanging = false;
                  await this.alertLoginSuccess();
                  this.saveDataAndDoRouter();
                }
              });
            }
          }).catch(err => {
            this.isLogin = false;
            console.log(err);
          });
        } else {
          this.isLogin = false;
        }
      }).catch(err => {
        this.isLogin = false;
        console.log(err);
      });
    },
    //帶入網址時，已經是登入狀態執行
    updateCurrentMerchantAndDesigner() {
      this.api.updateCustomerCuttentMerchant(this.merchantId).then(async () => {
        if (!this.designerId) {
          await this.ifhasLoginGetCurrentMerchantSetting();
          return;
        }
        await this.api.updateCustomerPreferDesigner(this.designerId, this.merchantId).then(async () => {
          await this.ifhasLoginGetCurrentMerchantSetting();
        });
      }).catch(err => {
        this.isLogin = false;
        console.log(err);
      });
    },
    //登入狀態時必須取得目前資料
    async ifhasLoginGetCurrentMerchantSetting() {
      await this.api.customerGetCurrentMerchantSetting().then(res => {
        if (!res.data.hasError) {
          const dt = res.data.customerGetCurrentMerchantSetting;
          this.setLocalStorage(dt);
          this.saveDataAndDoRouter();
        }
      });
    },
    setLocalStorage(dt) {
      localStorage.setItem("allMerchants", JSON.stringify(dt.consumedMerchants));
      localStorage.setItem("merchant", JSON.stringify(dt.currentMerchant));
      localStorage.setItem("preferDesigner", JSON.stringify(dt.preferDesigner));
    },
    async alertLoginSuccess() {
      await this.$swal.fire({
        icon: "success",
        title: '<h3 class="text-2xl">登入成功</h3>',
        background: "#fff",
        iconColor: "#FEB401",
        timer: 1500,
        showConfirmButton: false
      });
    },
    saveDataAndDoRouter() {
      const merchant = JSON.parse(localStorage.getItem("merchant"));
      const designer = JSON.parse(localStorage.getItem("preferDesigner"));
      const data = {
        merchantId: merchant.id,
        merchantName: merchant.name,
        designerId: designer ? designer.id : "",
        designerName: designer ? designer.name : "",
        designerNickName: designer ? designer.nickName : ""
      };
      this.$store.dispatch("appointmentData/handleSetDesignerAndMerchant", data);
      this.isLogin = false;
      this.$router.push("/member/appointment");
    }
  },
  mounted() {
    this.$store.dispatch("loading/isLoading", true);
    this.merchantId = this.$route.query.merchantId || "";
    this.designerId = this.$route.query.designerId || "";
    if (!this.token) this.$store.dispatch("loading/isLoading", false);else this.updateCurrentMerchantAndDesigner();
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35864466"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map