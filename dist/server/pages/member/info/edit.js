exports.ids = [24,5];
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/info/edit.vue?vue&type=template&id=58cc0a17&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.isLoading ? _c('section', {
    staticClass: "pb-14",
    attrs: {
      "id": "firstPos"
    }
  }, [_c('MemberGlobalCard', {
    attrs: {
      "py": 'py-5',
      "px": 'px-5',
      "data-aos": "fade-up",
      "data-aos-duration": "300",
      "data-aos-once": "true",
      "data-aos-anchor": "#firstPos"
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
              return handleSubmit(_vm.customerSelfUpdate);
            }
          }
        }, [_c('div', {
          staticClass: "grid grid-cols-12 items-center text-sm gap-2.5"
        }, [_c('ValidationProvider', {
          staticClass: "col-span-12",
          attrs: {
            "name": "姓名",
            "rules": "required|max:20"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "grid grid-cols-12 items-center"
              }, [_c('div', {
                pre: true,
                attrs: {
                  "class": "col-span-3"
                }
              }, [_c('label', {
                pre: true,
                attrs: {
                  "for": "nameInput"
                }
              }, [_c('p', [_vm._v("姓名"), _c('sup', {
                pre: true,
                attrs: {
                  "class": "ml-1",
                  "style": "color:red"
                }
              }, [_vm._v("*")])])])]), _vm._v(" "), _c('div', {
                staticClass: "col-span-8 relative"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.memberInfo.name,
                  expression: "memberInfo.name"
                }],
                staticClass: "p-2.5 border border-[#aeaeae] rounded-lg w-full",
                class: {
                  'ring-2 ring-[#ff4444]': errors.length > 0
                },
                attrs: {
                  "id": "nameInput",
                  "type": "text",
                  "maxlength": "20"
                },
                domProps: {
                  "value": _vm.memberInfo.name
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.memberInfo, "name", $event.target.value);
                  }
                }
              })])])];
            }
          }], null, true)
        }), _vm._v(" "), _c('ValidationProvider', {
          staticClass: "col-span-12",
          attrs: {
            "name": "手機",
            "rules": "required|onlyNumber"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "grid grid-cols-12 items-center"
              }, [_c('div', {
                pre: true,
                attrs: {
                  "class": "col-span-3"
                }
              }, [_c('label', {
                pre: true,
                attrs: {
                  "for": "phoneInput"
                }
              }, [_c('p', [_vm._v("電話")])])]), _vm._v(" "), _c('div', {
                staticClass: "col-span-8 relative"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.memberInfo.cellphone,
                  expression: "memberInfo.cellphone"
                }],
                staticClass: "p-2.5 border border-[#aeaeae] rounded-lg w-full",
                class: {
                  'ring-2 ring-[#ff4444]': errors.length > 0
                },
                attrs: {
                  "disabled": "",
                  "id": "phoneInput",
                  "type": "tel",
                  "maxlength": "10"
                },
                domProps: {
                  "value": _vm.memberInfo.cellphone
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.memberInfo, "cellphone", $event.target.value);
                  }
                }
              })])])];
            }
          }], null, true)
        }), _vm._v(" "), _c('div', {
          pre: true,
          attrs: {
            "class": "col-span-3"
          }
        }, [_c('p', [_vm._v("暱稱")])]), _vm._v(" "), _c('div', {
          staticClass: "col-span-8"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.memberInfo.nickName,
            expression: "memberInfo.nickName"
          }],
          staticClass: "p-2.5 border border-[#aeaeae] rounded-lg w-full focus:outline-2 focus:outline-[#232D4E]",
          attrs: {
            "type": "text"
          },
          domProps: {
            "value": _vm.memberInfo.nickName
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.memberInfo, "nickName", $event.target.value);
            }
          }
        })]), _vm._v(" "), _c('div', {
          pre: true,
          attrs: {
            "class": "col-span-3 py-3"
          }
        }, [_c('p', [_vm._v("性別"), _c('sup', {
          pre: true,
          attrs: {
            "class": "ml-1",
            "style": "color:red"
          }
        }, [_vm._v("*")])])]), _vm._v(" "), _c('div', {
          staticClass: "col-span-8"
        }, [_c('ValidationProvider', {
          attrs: {
            "rules": "oneOf:MALE,FEMALE",
            "name": _vm.memberInfo.gender
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "flex items-center gap-7"
              }, [_c('div', {
                staticClass: "flex items-center gap-2"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.memberInfo.gender,
                  expression: "memberInfo.gender"
                }],
                staticClass: "hidden",
                attrs: {
                  "type": "radio",
                  "id": "genderMale",
                  "value": "MALE"
                },
                domProps: {
                  "checked": _vm._q(_vm.memberInfo.gender, "MALE")
                },
                on: {
                  "change": function ($event) {
                    return _vm.$set(_vm.memberInfo, "gender", "MALE");
                  }
                }
              }), _vm._v(" "), _c('label', {
                staticClass: "w-[13px] h-[13px] rounded-full border border-[#aeaeae] p-[1px] relative after:content-[''] after:absolute after:w-[90%] after:h-[90%] after:left-[50%] after:translate-x-[-50%] after:top-[5%] after:rounded-full after:duration-300 after:scale-0",
                class: {
                  'after:border-[3px] after:border-[#232D4E] after:scale-100': _vm.memberInfo.gender === 'MALE'
                },
                attrs: {
                  "for": "genderMale"
                }
              }), _vm._v(" "), _c('label', {
                attrs: {
                  "for": "genderMale"
                }
              }, [_vm._v("男")])]), _vm._v(" "), _c('div', {
                staticClass: "flex items-center gap-2"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.memberInfo.gender,
                  expression: "memberInfo.gender"
                }],
                staticClass: "hidden",
                attrs: {
                  "type": "radio",
                  "id": "genderFemale",
                  "value": "FEMALE"
                },
                domProps: {
                  "checked": _vm._q(_vm.memberInfo.gender, "FEMALE")
                },
                on: {
                  "change": function ($event) {
                    return _vm.$set(_vm.memberInfo, "gender", "FEMALE");
                  }
                }
              }), _vm._v(" "), _c('label', {
                staticClass: "w-[13px] h-[13px] rounded-full border border-[#aeaeae] p-[1px] relative after:content-[''] after:absolute after:w-[90%] after:h-[90%] after:left-[50%] after:translate-x-[-50%] after:top-[5%] after:rounded-full after:duration-300 after:scale-0",
                class: {
                  'after:border-[3px] after:border-[#232D4E] after:scale-100': _vm.memberInfo.gender === 'FEMALE'
                },
                attrs: {
                  "for": "genderFemale"
                }
              }), _vm._v(" "), _c('label', {
                attrs: {
                  "for": "genderFemale"
                }
              }, [_vm._v("女")])]), _vm._v(" "), errors.length > 0 ? _c('span', {
                staticClass: "text-red-500 font-bold"
              }, [_vm._v("請輸入性別")]) : _vm._e()])];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c('ValidationProvider', {
          staticClass: "col-span-12",
          attrs: {
            "name": "email",
            "rules": "email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('div', {
                staticClass: "grid grid-cols-12 items-center"
              }, [_c('div', {
                pre: true,
                attrs: {
                  "class": "col-span-3"
                }
              }, [_c('label', {
                pre: true,
                attrs: {
                  "for": "emailInput"
                }
              }, [_c('p', [_vm._v("Email")])])]), _vm._v(" "), _c('div', {
                staticClass: "col-span-8 relative"
              }, [_c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.memberInfo.email,
                  expression: "memberInfo.email"
                }],
                staticClass: "p-2.5 border border-[#aeaeae] rounded-lg w-full",
                class: {
                  'ring-2 ring-[#ff4444]': errors.length > 0
                },
                attrs: {
                  "id": "emailInput",
                  "type": "email"
                },
                domProps: {
                  "value": _vm.memberInfo.email
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.$set(_vm.memberInfo, "email", $event.target.value);
                  }
                }
              })])])];
            }
          }], null, true)
        }), _vm._v(" "), _c('div', {
          pre: true,
          attrs: {
            "class": "col-span-3"
          }
        }, [_c('p', [_vm._v("Line ID")])]), _vm._v(" "), _c('div', {
          staticClass: "col-span-8"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.memberInfo.lineId,
            expression: "memberInfo.lineId"
          }],
          staticClass: "p-2.5 border border-[#aeaeae] rounded-lg w-full",
          attrs: {
            "type": "text"
          },
          domProps: {
            "value": _vm.memberInfo.lineId
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.memberInfo, "lineId", $event.target.value);
            }
          }
        })]), _vm._v(" "), _c('div', {
          pre: true,
          attrs: {
            "class": "col-span-3"
          }
        }, [_c('p', [_vm._v("生日")])]), _vm._v(" "), _c('div', {
          staticClass: "col-span-8"
        }, [_c('v-date-picker', {
          attrs: {
            "locale": "zh-TW",
            "first-day-of-week": 2,
            "mode": "date"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              inputEvents,
              inputValue
            }) {
              return [_c('p', _vm._g({
                staticClass: "flex w-full p-3 justify-between items-center gap-3 border border-[#aeaeae] rounded-lg"
              }, inputEvents), [_c('span', {
                directives: [{
                  name: "formatDate",
                  rawName: "v-formatDate",
                  value: 'date',
                  expression: "'date'"
                }]
              }, [_vm._v(_vm._s(inputValue))]), _vm._v(" "), _c('fa', {
                staticClass: "text-base",
                attrs: {
                  "icon": "fa-solid fa-calendar-days"
                }
              })], 1)];
            }
          }], null, true),
          model: {
            value: _vm.memberInfo.birthday,
            callback: function ($$v) {
              _vm.$set(_vm.memberInfo, "birthday", $$v);
            },
            expression: "memberInfo.birthday"
          }
        })], 1), _vm._v(" "), _c('div', {
          pre: true,
          attrs: {
            "class": "col-span-3"
          }
        }, [_c('p', [_vm._v("地址")])]), _vm._v(" "), _c('div', {
          staticClass: "col-span-8"
        }, [_c('input', {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.memberInfo.address,
            expression: "memberInfo.address"
          }],
          staticClass: "p-2.5 border border-[#aeaeae] rounded-lg w-full focus:outline-2 focus:outline-[#232D4E]",
          attrs: {
            "type": "text"
          },
          domProps: {
            "value": _vm.memberInfo.address
          },
          on: {
            "input": function ($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.memberInfo, "address", $event.target.value);
            }
          }
        })])], 1), _vm._v(" "), _vm._m(0)])];
      }
    }], null, false, 3179619232)
  })], 1)], 1) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "w-full py-2.5 rounded-lg text-white text-lg bg-[#232D4E] absolute left-0 -bottom-16",
    attrs: {
      "type": "submit",
      "data-mdb-ripple": "true",
      "data-mdb-ripple-color": "light",
      "data-aos": "fade-up",
      "data-aos-duration": "300",
      "data-aos-once": "true",
      "data-aos-anchor": "#firstPos",
      "data-aos-delay": "200"
    }
  }, [_vm._v("\n          儲存修改\n        ")]);
}];

// CONCATENATED MODULE: ./pages/member/info/edit.vue?vue&type=template&id=58cc0a17&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/info/edit.vue?vue&type=script&lang=js&
/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: "member-info-edit",
  data() {
    return {
      attributes: {
        content: "#FEB401"
      },
      memberInfo: {}
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    getCustomerPersonalData() {
      this.$store.dispatch("loading/isLoading", true);
      const needKey = "name, cellphone, nickName, gender, email, lineId, birthday, address";
      this.api.getCustomerPersonalData(needKey).then(res => {
        this.memberInfo = res.data.getCustomerPersonalData;
        this.$store.dispatch("loading/isLoading", false);
      }).catch(err => {
        console.log(err);
      });
    },
    async customerSelfUpdate() {
      this.$store.dispatch("loading/isLoading", true);
      const isNewCustomer = JSON.parse(localStorage.getItem("isNewCustomer"));
      const merchant = JSON.parse(localStorage.getItem("merchant"));
      const merchantId = merchant ? merchant.id : null;
      const inputData = {
        name: this.memberInfo.name,
        nickName: this.memberInfo.nickName,
        gender: this.memberInfo.gender,
        email: this.memberInfo.email ? this.memberInfo.email : "",
        lineId: this.memberInfo.lineId ? this.memberInfo.lineId : "",
        birthday: this.memberInfo.birthday ? new Date(this.memberInfo.birthday).getTime() : null,
        address: this.memberInfo.address ? this.memberInfo.address : ""
      };
      let resp = await this.api.customerSelfUpdate(inputData, "category");
      if (resp.hasError) return;
      if (isNewCustomer && merchantId) {
        await this.api.applyCustomerPersoanlDataToMerchant({
          merchantId: merchantId
        });
      }
      this.$swal.fire({
        icon: "success",
        title: `<h3 class="text-2xl">編輯成功</h3>`,
        background: "#fff",
        iconColor: "#FEB401",
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        if (merchantId) this.$router.push("/member/appointment");else this.$router.push("/member/info");
      });
      if (isNewCustomer) localStorage.setItem("isNewCustomer", false);
    }
  },
  mounted() {
    this.getCustomerPersonalData();
  }
});
// CONCATENATED MODULE: ./pages/member/info/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var info_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/info/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  info_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8233ed6e"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MemberGlobalCard: __webpack_require__(43).default})


/***/ })

};;
//# sourceMappingURL=edit.js.map