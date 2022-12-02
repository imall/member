exports.ids = [18];
exports.modules = {

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/selectService.vue?vue&type=template&id=7a17e540&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.isGlobalLoading ? _c('section', {
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode("<div class=\"w-full p-4 flex gap-4 border border-[#aeaeae] bg-white rounded-lg mt-3\">", "</div>", [_vm._ssrNode("<div class=\"w-6 h-6 flex justify-center items-center border-2 border-[#4ADE80] rounded-full\">", "</div>", [_c('fa', {
    staticClass: "text-[#4ADE80]",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1), _vm._ssrNode(" <div class=\"flex flex-col gap-2\"><p class=\"text-sm line-clamp-1\">" + _vm._ssrEscape("\n        已選設計師：" + _vm._s(_vm.selectDesigner) + "\n        ") + (_vm.selectDesignerNickName && _vm.selectDesignerNickName !== 1 ? "<span>" + _vm._ssrEscape("(" + _vm._s(_vm.selectDesignerNickName) + ")") + "</span>" : "<!---->") + "</p> <p class=\"text-sm\">" + _vm._ssrEscape("已選時段 : " + _vm._s(_vm.selectTime)) + "</p></div>")], 2), _vm._ssrNode(" " + (_vm.checkHasServiceItem ? "<h4 class=\"text-[#666] font-bold mt-4 mb-2\">\n    選擇服務項目\n  </h4>" : "<!---->") + " " + (_vm.checkHasServiceItem ? "<p class=\"text-xs text-[#aeaeae] mb-2.5\">\n    價目僅供參考，實際價錢以設計師現場報價為準\n  </p>" : "<!---->") + " "), _vm.checkHasServiceItem ? _vm._ssrNode("<div class=\"w-full px-2.5 pb-5 rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] bg-white border border-[#aeaeae]\">", "</div>", [_vm._ssrNode("<ul class=\"flex relative overflow-x-auto overflow-y-hidden\"><li class=\"text-center text-lg flex-none border-b border-b-black service__tab-all\"><button type=\"button\" data-mdb-ripple=\"true\" data-mdb-ripple-color=\"#3c4d86\" class=\"w-full h-full px-4 pb-4 pt-5\">\n          全部\n        </button></li> " + _vm._ssrList(_vm.serviceItem, function (tab, idx) {
    return "<li" + _vm._ssrClass("text-center text-lg flex-none border-b border-b-black", [`service__tab-${idx + 1}`]) + "><button type=\"button\" data-mdb-ripple=\"true\" data-mdb-ripple-color=\"#3c4d86\" class=\"w-full h-full px-4 pb-4 pt-5\">" + _vm._ssrEscape("\n          " + _vm._s(tab.name) + "\n        ") + "</button></li>";
  }) + " <div class=\"absolute bottom-[-1px] left-0 h-1 bg-black duration-300\"" + _vm._ssrStyle(null, _vm.switchTabStyle, null) + "></div></ul> "), _vm.filterServiceList.length > 0 ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<ul class=\"mt-6\"><li class=\"px-2 pb-3 border-b border-b-[#aeaeae]\"><div class=\"flex justify-between\"><div class=\"col-span-10\"><p class=\"text-sm\">服務/產品名稱</p></div> <div class=\"col-span-2\"><p class=\"text-sm\">售價</p></div></div></li></ul> "), _c('transition-group', {
    attrs: {
      "tag": "ul",
      "name": "fade"
    }
  }, _vm._l(_vm.filterServiceList, function (list) {
    return _c('li', {
      key: list.id,
      staticClass: "px-2 py-3 border-b border-b-[#aeaeae]",
      on: {
        "click": function ($event) {
          return _vm.selectServiceFn(list);
        }
      }
    }, [_c('div', {
      staticClass: "flex justify-between"
    }, [_c('div', {
      staticClass: "col-span-10 relative"
    }, [_c('fa', {
      staticClass: "absolute left-0 top-1/2 -translate-y-1/2 duration-300 scale-0",
      class: {
        'scale-100': !_vm.isSelectedService(list.id)
      },
      attrs: {
        "icon": "fa-regular fa-circle-plus"
      }
    }), _vm._v(" "), _c('fa', {
      staticClass: "text-[#FEB401] absolute left-0 top-1/2 -translate-y-1/2 duration-300 scale-0",
      class: {
        'scale-100': _vm.isSelectedService(list.id)
      },
      attrs: {
        "icon": "fa-regular fa-circle-minus"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "text-sm duration-300 translate-x-6 line-clamp-1",
      class: {
        'text-[#FEB401]': _vm.isSelectedService(list.id)
      }
    }, [_vm._v("\n                " + _vm._s(list.name) + "\n              ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "col-span-2"
    }, [_c('p', {
      staticClass: "text-sm duration-300",
      class: {
        'text-[#FEB401]': _vm.isSelectedService(list.id)
      }
    }, [_vm._v("\n                $" + _vm._s(list.lowestPrice) + "up\n              ")])])])]);
  }), 0)], 2) : _vm._ssrNode("<p class=\"text-center text-stone-500 text-sm mt-5\">\n      該類別暫無服務項目\n    </p>")], 2) : _vm._e(), _vm._ssrNode(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.selectService.length > 0 ? _c('div', [_c('h4', {
    pre: true,
    attrs: {
      "class": "text-[#666] font-bold mt-4 mb-3"
    }
  }, [_vm._v("已選項目 :")]), _vm._v(" "), _c('transition-group', {
    staticClass: "flex flex-wrap items-center gap-5 mb-10",
    attrs: {
      "tag": "ul",
      "name": "fade"
    }
  }, _vm._l(_vm.selectService, function (item) {
    return _c('li', {
      key: item.id,
      staticClass: "bg-[#FEB401] py-2 px-3 text-sm text-white rounded-xl relative"
    }, [_c('div', {
      staticClass: "absolute -right-2 -top-2 w-4 h-4 rounded-full bg-[#aeaeae] flex justify-center items-center",
      on: {
        "click": function ($event) {
          return _vm.cancelService(item);
        }
      }
    }, [_c('fa', {
      staticClass: "text-white text-sm",
      attrs: {
        "icon": "fa-solid fa-xmark"
      }
    })], 1), _vm._v("\n          " + _vm._s(item.name) + "\n        ")]);
  }), 0)], 1) : _vm._e()]), _vm._ssrNode(" <h4 class=\"text-[#666] font-bold mt-4 mb-2\">備註</h4> <textarea rows=\"4\" placeholder=\"其他需求 ? 留言給設計師吧 !\" class=\"w-full p-3 rounded-md shadow-[0px_2px_2px_rgba(0,0,0,0.25)] border border-[#aeaeae]\">" + _vm._ssrEscape(_vm._s(_vm.remarkForCustomer)) + "</textarea> <h4 class=\"text-[#666] font-bold mt-4 mb-2\">\n    您是從哪裡得知我們的？\n  </h4> "), _vm._ssrNode("<div class=\"w-full relative\">", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectReference,
      expression: "selectReference"
    }],
    staticClass: "appearance-none w-full py-2.5 px-4 rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] bg-white",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selectReference = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "selected": "",
      "disabled": ""
    }
  }, [_vm._v("請選擇")]), _vm._v(" "), _vm._l(_vm.customerReference, function (item) {
    return _c('option', {
      key: item,
      domProps: {
        "value": item
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")]);
  })], 2), _vm._ssrNode(" "), _c('fa', {
    staticClass: "absolute right-5 top-1/2 -translate-y-1/2",
    attrs: {
      "icon": "fa-regular fa-angle-down"
    }
  })], 2), _vm._ssrNode(" "), _vm.designerId !== 1 ? _vm._ssrNode("<button" + _vm._ssrClass("fixed bottom-24 left-[5%] w-[90%] py-2.5 text-white text-lg rounded-md mt-10 duration-300 z-0", {
    'bg-[#232D4E]': !_vm.isLoading,
    'bg-[#bebebe] pointer-events-none': _vm.isLoading
  }) + ">", "</button>", [_vm.isLoading ? _c('fa', {
    staticClass: "animate-spin",
    attrs: {
      "icon": "fa-solid fa-spinner"
    }
  }) : _vm._e(), _vm._ssrNode("\n    送出預約\n  ")], 2) : _vm._ssrNode("<button" + _vm._ssrClass("fixed bottom-24 left-[5%] w-[90%] py-2.5 text-white text-lg rounded-md mt-10 duration-300 z-0", {
    'bg-[#232D4E]': !_vm.isLoading,
    'bg-[#bebebe] pointer-events-none': _vm.isLoading
  }) + ">", "</button>", [_vm.isLoading ? _c('fa', {
    staticClass: "animate-spin",
    attrs: {
      "icon": "fa-solid fa-spinner"
    }
  }) : _vm._e(), _vm._ssrNode("\n    送出預約\n  ")], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/appointment/selectService.vue?vue&type=template&id=7a17e540&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/selectService.vue?vue&type=script&lang=js&
/* harmony default export */ var selectServicevue_type_script_lang_js_ = ({
  name: "appointment-selectService",
  data() {
    return {
      serviceItem: [],
      selectTab: "all",
      selectTabId: "",
      selectService: [],
      remarkForCustomer: "",
      isLoading: false,
      customerReference: [],
      selectReference: "",
      checkHasServiceItem: false
    };
  },
  computed: {
    designerId() {
      return this.$store.state.appointmentData.designerId;
    },
    selectDesigner() {
      return this.$store.state.appointmentData.designerName;
    },
    selectDesignerNickName() {
      return this.$store.state.appointmentData.designerNickName;
    },
    selectTime() {
      return this.$store.state.appointmentData.time;
    },
    // 計算 tab 選擇到時的底部動畫寬度以及位置
    switchTabStyle() {
      switch (this.selectTab) {
        case "all":
          return `left: 0px; width: 68px;`;
        default:
          const selectIdx = this.selectTab;
          let tabWidth = document.querySelector(`.service__tab-${selectIdx}`).clientWidth;
          let offsetLeft = document.querySelector(`.service__tab-${selectIdx}`).offsetLeft;
          return `left: ${offsetLeft}px; width: ${tabWidth}px;`;
      }
    },
    // 過濾服務類別項目
    filterServiceList() {
      switch (this.selectTabId) {
        case "":
          let allList = [];
          this.serviceItem.forEach(item => {
            item.bookingItem.forEach(bookingItem => allList.push(bookingItem));
          });
          return allList;
        default:
          const list = this.serviceItem.find(item => item.id === this.selectTabId);
          return list.bookingItem;
      }
    },
    isGlobalLoading() {
      return this.$store.state.loading.isLoading;
    }
  },
  methods: {
    // 選擇服務
    selectServiceFn(item) {
      const isSelected = this.selectService.map(mapItem => mapItem.id).includes(item.id);
      if (isSelected) {
        this.selectService = this.selectService.filter(filterItem => filterItem.id !== item.id);
      } else {
        this.selectService.push(item);
      }
    },
    // 判斷服務是否選擇
    isSelectedService(id) {
      return this.selectService.map(item => item.id).includes(id);
    },
    // 取消選擇服務
    cancelService(item) {
      this.selectService = this.selectService.filter(filterItem => filterItem.id !== item.id);
    },
    // 判斷 vuex 裡所有欄位有沒有值
    async checkAppointmentData() {
      const data = Object.values(this.$store.state.appointmentData);
      return await data.every(item => item);
    },
    // 預約
    handleBooking() {
      if (this.isLoading) return;

      // 組合字串用
      let str = "";
      if (this.selectService.length > 0) {
        this.selectService.forEach((item, idx) => {
          if (idx !== this.selectService.length - 1) {
            str += `${item.name}、`;
          } else {
            str += `${item.name} `;
          }
        });
      }
      this.isLoading = true;
      let cellphone = this.$store.state.indexCache.userInfo.cellphone;
      let name = this.$store.state.indexCache.userInfo.name;
      if (!cellphone || !name) {
        this.api.getCustomerPersonalData("name cellphone").then(res => {
          this.$store.dispatch("indexCache/handleSetUserInfo", res.data.getCustomerPersonalData);
          cellphone = this.$store.state.indexCache.userInfo.cellphone;
          name = this.$store.state.indexCache.userInfo.name;
          const input = {
            designerId: this.$store.state.appointmentData.designerId,
            dateTime: this.$store.state.appointmentData.timestamp,
            cellphone: this.$store.state.indexCache.userInfo.cellphone,
            merchantId: this.$store.state.appointmentData.merchantId,
            name: this.$store.state.indexCache.userInfo.name,
            reference: this.selectReference,
            remarkForCustomer: str += this.remarkForCustomer
          };
          this.api.bookingV2(input).then(res => {
            if (!res.hasOwnProperty("errors")) {
              window.localStorage.setItem("bookingData", JSON.stringify(res.data.bookingV2));
              console.log(res.data);
              console.log(res.data.bookingV2);
              this.$swal.fire({
                icon: "success",
                title: `<h3 class="text-2xl">預約成功</h3>`,
                background: "#fff",
                iconColor: "#FEB401",
                timer: 1500,
                showConfirmButton: false
              }).then(() => {
                this.isLoading = false;
                this.$router.push("/member/appointment/check");
              });
            } else {
              this.$router.push("/member/appointment/selectDate");
            }
          }).catch(err => {
            console.log(err);
          });
        }).catch(err => {
          console.log(err);
        });
      } else {
        const input = {
          designerId: this.$store.state.appointmentData.designerId,
          dateTime: this.$store.state.appointmentData.timestamp,
          cellphone: cellphone,
          merchantId: this.$store.state.appointmentData.merchantId,
          name: name,
          reference: this.customerReference,
          remarkForCustomer: str += this.remarkForCustomer
        };
        this.api.bookingV2(input).then(res => {
          if (!res.hasOwnProperty("errors")) {
            window.localStorage.setItem("bookingData", JSON.stringify(res.data.bookingV2));
            this.$swal.fire({
              icon: "success",
              title: `<h3 class="text-2xl">預約成功</h3>`,
              background: "#fff",
              iconColor: "#FEB401",
              timer: 1500,
              showConfirmButton: false
            }).then(() => {
              this.isLoading = false;
              this.$router.push("/member/appointment/check");
            });
          } else {
            this.$router.push("/member/appointment/selectDate");
          }
        }).catch(err => {
          console.log(err);
        });
      }
    },
    // 預約(不指定)
    handleNonDesignationBooking() {
      if (this.isLoading) return;
      this.isLoading = true;
      let cellphone = this.$store.state.indexCache.userInfo.cellphone;
      let name = this.$store.state.indexCache.userInfo.name;
      if (!cellphone || !name) {
        this.api.getCustomerPersonalData("name cellphone").then(res => {
          this.$store.dispatch("indexCache/handleSetUserInfo", res.data.getCustomerPersonalData);
          cellphone = this.$store.state.indexCache.userInfo.cellphone;
          name = this.$store.state.indexCache.userInfo.name;
          const input = {
            bookingDate: this.$store.state.appointmentData.timestamp,
            cellphone: this.$store.state.indexCache.userInfo.cellphone,
            customerName: this.$store.state.indexCache.userInfo.name,
            storeId: this.$store.state.appointmentData.merchantId,
            remarkForCustomer: this.remarkForCustomer
          };
          this.api.nonDesignationBooking(input).then(res => {
            if (!res.data.hasErro) {
              window.localStorage.setItem("bookingData", JSON.stringify(res.data.nonDesignationBooking));
              this.$swal.fire({
                icon: "success",
                title: `<h3 class="text-2xl">預約成功</h3>`,
                background: "#fff",
                iconColor: "#FEB401",
                timer: 1500,
                showConfirmButton: false
              }).then(() => {
                this.isLoading = false;
                this.$router.push("/member/appointment/check");
              });
            }
          }).catch(err => {
            console.log(err);
          });
        }).catch(err => {
          console.log(err);
        });
      } else {
        const input = {
          bookingDate: this.$store.state.appointmentData.timestamp,
          cellphone: this.$store.state.indexCache.userInfo.cellphone,
          customerName: this.$store.state.indexCache.userInfo.name,
          storeId: this.$store.state.appointmentData.merchantId,
          remarkForCustomer: this.remarkForCustomer
        };
        this.api.nonDesignationBooking(input).then(res => {
          window.localStorage.setItem("bookingData", JSON.stringify(res.data.nonDesignationBooking));
          this.$swal.fire({
            icon: "success",
            title: `<h3 class="text-2xl">預約成功</h3>`,
            background: "#fff",
            iconColor: "#FEB401",
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            this.isLoading = false;
            this.$router.push("/member/appointment/check");
          });
        }).catch(err => {
          console.log(err);
        });
      }
    },
    // 取得設計師服務項目
    getBookingItemCategoryForCustomer() {
      const input = {
        storeId: this.$store.state.appointmentData.merchantId,
        designerId: this.$store.state.appointmentData.designerId
      };
      this.api.getBookingItemCategoryForCustomer(input).then(res => {
        if (!res.data.hasError) {
          // 排序服務類別
          res.data.getBookingItemCategoryForCustomer = res.data.getBookingItemCategoryForCustomer.sort((a, b) => {
            return a["sort"] - b["sort"];
          });
          this.serviceItem = res.data.getBookingItemCategoryForCustomer;
          let count = 0;
          this.serviceItem.forEach(item => {
            // 排序服務項目
            item.bookingItem.sort((a, b) => a["sort"] - b["sort"]);
            if ((item === null || item === void 0 ? void 0 : item.bookingItem.length) !== 0) count++;
          });
          if (count) this.checkHasServiceItem = true;
        }
        this.$store.dispatch("loading/isLoading", false);
      }).catch(err => {
        console.log(err);
      });
    },
    // 取得客戶來源選項
    getCustomerReference() {
      this.api.getCustomerReference().then(res => {
        if (!res.data.hasError) {
          this.customerReference = res.data.getCustomerReference;
        }
        const designerId = this.$store.state.appointmentData.designerId;
        if (designerId === 1) this.$store.dispatch("loading/isLoading", false);
      }).catch(err => {
        console.log(err);
      });
    }
  },
  async mounted() {
    const isNull = await this.checkAppointmentData();
    if (!isNull) this.$router.push("/member/appointment");else {
      this.$store.dispatch("loading/isLoading", true);
      const designerId = this.$store.state.appointmentData.designerId;
      if (designerId !== 1) {
        this.getBookingItemCategoryForCustomer();
      }
      this.getCustomerReference();
    }
  }
});
// CONCATENATED MODULE: ./pages/member/appointment/selectService.vue?vue&type=script&lang=js&
 /* harmony default export */ var appointment_selectServicevue_type_script_lang_js_ = (selectServicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/appointment/selectService.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  appointment_selectServicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "76ec1d26"
  
)

/* harmony default export */ var selectService = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=selectService.js.map