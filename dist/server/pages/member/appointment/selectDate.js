exports.ids = [17,1];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Calendar.vue?vue&type=template&id=02db6c71&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_vm._ssrNode("<div class=\"w-full bg-white p-4 rounded-lg border border-[#aeaeae] shadow-[0px_2px_2px_rgba(0,0,0,0.25)]\">", "</div>", [_vm._ssrNode("<div class=\"flex justify-between items-center\">", "</div>", [_c('fa', {
    staticClass: "p-4",
    attrs: {
      "icon": "fa-solid fa-angle-left"
    },
    on: {
      "click": function ($event) {
        _vm.month === 0 ? _vm.changeMonth(false) : _vm.month--, _vm.changeMonthAnimation();
      }
    }
  }), _vm._ssrNode(" <div class=\"flex items-end gap-2\"><p class=\"font-bold\">" + _vm._ssrEscape(_vm._s(_vm.year - 1911) + "年") + "</p> <p class=\"text-2xl font-bold\">" + _vm._ssrEscape(_vm._s(_vm.month + 1) + "月") + "</p></div> "), _c('fa', {
    staticClass: "p-4",
    attrs: {
      "icon": "fa-solid fa-angle-right"
    },
    on: {
      "click": function ($event) {
        _vm.month === 11 ? _vm.changeMonth(true) : _vm.month++, _vm.changeMonthAnimation();
      }
    }
  })], 2), _vm._ssrNode(" <div class=\"grid grid-cols-7 text-center\"><div class=\"col-span-1 py-2\">日</div> <div class=\"col-span-1 py-2\">一</div> <div class=\"col-span-1 py-2\">二</div> <div class=\"col-span-1 py-2\">三</div> <div class=\"col-span-1 py-2\">四</div> <div class=\"col-span-1 py-2\">五</div> <div class=\"col-span-1 py-2\">六</div></div> "), _vm.designerId !== 1 ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode((_vm.isShow && !_vm.isGettingDate ? "<div class=\"grid grid-cols-7 text-center\">" + _vm._ssrList(_vm.monthFirstDay, function (push) {
    return "<div class=\"col-span-1 py-2\"></div>";
  }) + " " + _vm._ssrList(_vm.monthInDays, function (day) {
    return "<div" + _vm._ssrClass("col-span-1 py-2 rounded-full duration-300 relative z-10 after:content-[''] after:z-[-1] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-10 after:h-10 after:scale-0 after:bg-[#FEB401] after:rounded-full after:duration-300", {
      'text-[#aeaeae] pointer-events-none': _vm.filterOldDate(day) || _vm.filterDayOffDate(day),
      'text-[#FEB401]': _vm.isToday(day),
      'after:scale-100 text-[#fff]': _vm.filterSelectedDate(day)
    }) + ">" + _vm._ssrEscape("\n          " + _vm._s(day) + "\n        ") + "</div>";
  }) + "</div>" : "<!---->") + " " + (_vm.isGettingDate ? "<div class=\"w-full min-h-[150px] flex items-center justify-center\"><div class=\"border-4 border-t-[#232D4E] rounded-full w-10 h-10 animate-spin-slow\"></div></div>" : "<!---->"))], 2) : _vm._ssrNode("<div>", "</div>", [_c('transition', [_vm.isShow && !_vm.isGettingDate ? _c('div', {
    staticClass: "grid grid-cols-7 text-center"
  }, [_vm._l(_vm.monthFirstDay, function (push) {
    return _c('div', {
      key: push + 'pushDay',
      staticClass: "col-span-1 py-2"
    });
  }), _vm._v(" "), _vm._l(_vm.monthInDays, function (day) {
    return _c('div', {
      key: day + 'day',
      staticClass: "col-span-1 py-2 rounded-full duration-300 relative z-10 after:content-[''] after:z-[-1] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-10 after:h-10 after:scale-0 after:bg-[#FEB401] after:rounded-full after:duration-300",
      class: {
        'text-[#aeaeae] pointer-events-none': _vm.filterOldDate(day) || _vm.filterDayOffDate(day),
        'text-[#FEB401]': _vm.isToday(day),
        'after:scale-100 text-[#fff]': _vm.filterSelectedDate(day)
      },
      on: {
        "click": function ($event) {
          return _vm.handleSelectDate(day);
        }
      }
    }, [_vm._v("\n            " + _vm._s(day) + "\n          ")]);
  })], 2) : _vm._e()])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Calendar.vue?vue&type=template&id=02db6c71&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Calendar.vue?vue&type=script&lang=js&
/* harmony default export */ var Calendarvue_type_script_lang_js_ = ({
  props: {
    disabledDate: {
      type: Array,
      default: () => []
    },
    filterOldDay: {
      type: Boolean,
      default: () => false
    },
    isGettingDate: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      date: new Date().getDate(),
      selectDate: '',
      isShow: true
    };
  },
  computed: {
    monthInDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    monthFirstDay() {
      return new Date(this.year, this.month, 1).getDay();
    },
    designerId() {
      return this.$store.state.appointmentData.designerId;
    }
  },
  methods: {
    // 過濾已過日期
    filterOldDate(date) {
      const toDay = new Date();
      if (new Date(this.year, this.month, date) < new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate())) return true;
      return false;
    },
    // 過濾休假日期
    filterDayOffDate(date) {
      const newDate = new Date(this.year, this.month, date).getTime();
      return this.disabledDate.find(item => item === newDate);
    },
    // 切換月份
    changeMonth(bool) {
      if (!bool) {
        this.year--;
        this.month = 11;
      } else {
        this.year++;
        this.month = 0;
      }
    },
    // 切換月份動畫
    changeMonthAnimation() {
      this.isShow = false;
      setTimeout(() => {
        this.isShow = true;
      }, 300);
      this.$emit('changeMonth', new Date(this.year, this.month));
    },
    // 過濾今天日期
    isToday(date) {
      const toDay = new Date();
      if (new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate()).getTime() === new Date(this.year, this.month, date).getTime()) return true;
      return false;
    },
    // 過濾選擇到的日期
    filterSelectedDate(date) {
      if (new Date(this.year, this.month, date).getTime() === this.selectDate) return true;
      return false;
    },
    // 選擇日期
    handleSelectDate(date) {
      this.selectDate = new Date(this.year, this.month, date).getTime();
      this.$emit('selectDate', this.selectDate);
    }
  },
  mounted() {
    if (!this.disabledDate.find(item => item === new Date(this.year, this.month, this.date).getTime())) {
      this.selectDate = new Date(this.year, this.month, this.date).getTime();
      this.$emit('selectDate', this.selectDate);
    }
  }
});
// CONCATENATED MODULE: ./components/Calendar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Calendar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Calendarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5663b9f9"
  
)

/* harmony default export */ var Calendar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/selectDate.vue?vue&type=template&id=10d4686a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.isLoading ? _c('section', {
    attrs: {
      "id": "firstPos"
    }
  }, [_vm._ssrNode("<div data-aos=\"fade\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-anchor=\"#firstPos\" class=\"w-full p-4 flex items-center gap-4 border border-[#aeaeae] bg-white rounded-lg mt-3\">", "</div>", [_vm._ssrNode("<div class=\"w-6 h-6 flex justify-center items-center border-2 border-[#4ADE80] rounded-full\">", "</div>", [_c('fa', {
    staticClass: "text-[#4ADE80]",
    attrs: {
      "icon": "fa-solid fa-check"
    }
  })], 1), _vm._ssrNode(" <h4 class=\"text-sm line-clamp-1\">" + _vm._ssrEscape("已選設計師：" + _vm._s(_vm.selectDesigner) + " ") + (_vm.selectDesignerNickName && _vm.selectDesignerNickName !== 1 ? "<span>" + _vm._ssrEscape("(" + _vm._s(_vm.selectDesignerNickName) + ")") + "</span>" : "<!---->") + "</h4>")], 2), _vm._ssrNode(" <h4 data-aos=\"fade\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" ata-aos-anchor=\"#firstPos\" class=\"text-sm text-[#666] font-bold mt-6 mb-2\">選擇日期<sup class=\"text-red-500\"> *</sup></h4> "), _vm._ssrNode("<div data-aos=\"fade\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-anchor=\"#firstPos\" class=\"w-full\">", "</div>", [_c('Calendar', {
    attrs: {
      "filterOldDay": true,
      "disabledDate": _vm.disabledDate,
      "isGettingDate": _vm.isGettingDate
    },
    on: {
      "selectDate": function ($event) {
        return _vm.selectDate($event);
      },
      "changeMonth": function ($event) {
        return _vm.changeMonth($event);
      }
    }
  })], 1), _vm._ssrNode(" <div data-aos=\"fade\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" ata-aos-anchor=\"#firstPos\"><h4 class=\"text-sm text-[#666] font-bold mt-6 mb-2\">選擇時段<sup class=\"text-red-500\"> *</sup></h4></div> " + (_vm.userSelect.date && _vm.bookingTimes ? "<div data-aos=\"fade\" data-aos-duration=\"400\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"flex gap-2.5 mb-2.5\"><button" + _vm._ssrClass("text-sm py-2.5 w-full border border-[#aeaeae] rounded-md duration-300", {
    'bg-[#FEB401] text-white': _vm.selectRange === '早上',
    'bg-white': _vm.selectRange !== '早上'
  }) + ">早上</button> <button" + _vm._ssrClass("text-sm py-2.5 w-full border border-[#aeaeae] rounded-md duration-300", {
    'bg-[#FEB401] text-white': _vm.selectRange === '下午',
    'bg-white': _vm.selectRange !== '下午'
  }) + ">下午</button> <button" + _vm._ssrClass("text-sm py-2.5 w-full border border-[#aeaeae] rounded-md duration-300", {
    'bg-[#FEB401] text-white': _vm.selectRange === '晚上',
    'bg-white': _vm.selectRange !== '晚上'
  }) + ">晚上</button></div>" : "<!---->") + " "), _vm.bookingTimes && _vm.isDesignation !== 1 ? _vm._ssrNode("<ul data-aos=\"fade\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-anchor=\"#firstPos\" class=\"p-2.5 border border-[#aeaeae] rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] bg-white\">", "</ul>", [_vm._l(_vm.filterTimeRange, function (item, idx) {
    return _vm._ssrNode("<li data-aos=\"flip-up\" data-aos-duration=\"300\"" + _vm._ssrAttr("data-aos-delay", idx * 50) + " data-aos-once=\"true\" data-aos-anchor=\"#firstPos\"" + _vm._ssrClass("py-2.5 border-b-2 border-dotted border-b-[#aeaeae]", {
      'border-none': idx + 1 === _vm.filterTimeRange.length,
      'pointer-events-none': _vm.filterOldTimes(item.time)
    }) + ">", "</li>", [_vm._ssrNode("<div class=\"flex items-center justify-between\">", "</div>", [_vm._ssrNode("<div class=\"flex items-center gap-4\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("h-3 w-3 rounded-full flex justify-center items-center duration-300", {
      'bg-[#FEB401]': !item.isAppointment,
      'bg-[#aeaeae]': item.isAppointment || _vm.filterOldTimes(item.time),
      'bg-[#fff] border border-[#FEB401]': _vm.userSelect.time === item.time
    }) + ">", "</div>", [_c('fa', {
      staticClass: "text-[8px] text-[#FEB401] duration-700 scale-0",
      class: {
        'scale-100': _vm.userSelect.time === item.time
      },
      attrs: {
        "icon": "fa-solid fa-check"
      }
    })], 1), _vm._ssrNode(" "), _c('p', {
      directives: [{
        name: "formatDate",
        rawName: "v-formatDate",
        value: 'onlyTime',
        expression: "'onlyTime'"
      }],
      staticClass: "text-sm font-bold duration-300",
      class: {
        'text-[#AEAEAE] pointer-events-none': item.status !== '可預約',
        'text-[#3F3F46]': item.status === '可預約' && _vm.userSelect.time !== item.time,
        'text-[#FEB401]': _vm.userSelect.time === item.time,
        'text-[#bebebe]': _vm.filterOldTimes(item.time)
      }
    }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(item.time)))])], 2), _vm._ssrNode(" " + (item.status === '可預約' && _vm.userSelect.time !== item.time && !_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#3F3F46]\">尚可預約</p>" : "<!---->") + " " + (item.status !== '可預約' && _vm.userSelect.time !== item.time && !_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#aeaeae]\">預約已滿</p>" : "<!---->") + " " + (item.status === '可預約' && _vm.userSelect.time === item.time && !_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#FEB401]\">已選</p>" : "<!---->") + " " + (_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#bebebe]\">不可預約</p>" : "<!---->"))], 2)]);
  }), _vm._ssrNode(" " + (_vm.filterTimeRange.length === 0 && _vm.userSelect.date ? "<li class=\"text-center text-[#555] text-sm\">此區間尚無時段可選</li>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" "), _vm.bookingTimes && _vm.isDesignation === 1 ? _vm._ssrNode("<ul data-aos=\"fade\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-delay=\"100\" data-aos-anchor=\"#firstPos\" class=\"p-2.5 border border-[#aeaeae] rounded-lg shadow-[0px_2px_2px_rgba(0,0,0,0.25)] bg-white\">", "</ul>", [_vm._l(_vm.filterTimeRange, function (item, idx) {
    return _vm._ssrNode("<li data-aos=\"flip-up\" data-aos-duration=\"300\"" + _vm._ssrAttr("data-aos-delay", idx * 50) + " data-aos-once=\"true\" data-aos-anchor=\"#firstPos\"" + _vm._ssrClass("py-2.5 border-b-2 border-dotted border-b-[#aeaeae]", {
      'border-none': idx + 1 === _vm.filterTimeRange.length,
      'pointer-events-none': _vm.filterOldTimes(item.time)
    }) + ">", "</li>", [_vm._ssrNode("<div class=\"flex items-center justify-between\">", "</div>", [_vm._ssrNode("<div class=\"flex items-center gap-4\">", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("h-3 w-3 rounded-full flex justify-center items-center duration-300", {
      'bg-[#FEB401]': !item.isAppointment,
      'bg-[#aeaeae]': item.isAppointment || _vm.filterOldTimes(item.time),
      'bg-[#fff] border border-[#FEB401]': _vm.userSelect.time === item.time
    }) + ">", "</div>", [_c('fa', {
      staticClass: "text-[8px] text-[#FEB401] duration-700 scale-0",
      class: {
        'scale-100': _vm.userSelect.time === item.time
      },
      attrs: {
        "icon": "fa-solid fa-check"
      }
    })], 1), _vm._ssrNode(" "), _c('p', {
      directives: [{
        name: "formatDate",
        rawName: "v-formatDate",
        value: 'onlyTime',
        expression: "'onlyTime'"
      }],
      staticClass: "text-sm font-bold duration-300",
      class: {
        'text-[#3F3F46]': _vm.userSelect.time !== item.time,
        'text-[#FEB401]': _vm.userSelect.time === item.time,
        'text-[#bebebe]': _vm.filterOldTimes(item.time)
      }
    }, [_vm._ssrNode(_vm._ssrEscape(_vm._s(item.time)))])], 2), _vm._ssrNode(" " + (_vm.userSelect.time !== item.time && !_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#3F3F46]\">尚可預約</p>" : "<!---->") + " " + (_vm.userSelect.time === item.time && !_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#FEB401]\">已選</p>" : "<!---->") + " " + (_vm.filterOldTimes(item.time) ? "<p data-aos=\"flip-up\" data-aos-duration=\"300\" data-aos-once=\"true\" data-aos-anchor=\"#firstPos\" class=\"text-sm text-[#bebebe]\">不可預約</p>" : "<!---->"))], 2)]);
  }), _vm._ssrNode(" " + (_vm.filterTimeRange.length === 0 && _vm.userSelect.date ? "<li class=\"text-center text-[#555] text-sm\">此區間尚無時段可選</li>" : "<!---->"))], 2) : _vm._e(), _vm._ssrNode(" " + (!_vm.bookingTimes ? "<p class=\"text-sm text-[#aeaeae]\">請先選擇日期</p>" : "<!---->") + " "), _vm._ssrNode("<button" + _vm._ssrAttr("disabled", !_vm.userSelect.time || !_vm.userSelect.date) + " data-mdb-ripple=\"true\" data-mdb-ripple-color=\"light\"" + _vm._ssrClass("fixed bottom-24 left-[5%] w-[90%] mt-5 py-2.5 shadow-md rounded-md duration-300 flex items-center justify-center gap-4 z-0", {
    'bg-[#aeaeae]': !_vm.userSelect.time || !_vm.userSelect.date,
    'bg-[#232D4E]': _vm.userSelect.time && _vm.userSelect.date
  }) + ">", "</button>", [_vm._ssrNode("<p class=\"text-lg text-white\">選擇服務項目</p> "), _c('fa', {
    staticClass: "text-white",
    attrs: {
      "icon": "fa-solid fa-angle-right"
    }
  })], 2)], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/member/appointment/selectDate.vue?vue&type=template&id=10d4686a&

// EXTERNAL MODULE: ./utils/cancelToken.js
var cancelToken = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/member/appointment/selectDate.vue?vue&type=script&lang=js&

/* harmony default export */ var selectDatevue_type_script_lang_js_ = ({
  name: "appointment-selectDate",
  data() {
    return {
      disabledDate: [],
      userSelect: {
        date: '',
        time: ''
      },
      isGettingDate: false,
      bookingDate: [],
      bookingTimes: [],
      selectRange: '早上',
      morningRange: [],
      afterNoonRange: [],
      nightRange: []
    };
  },
  computed: {
    // 判斷是否為指定
    isDesignation() {
      return this.$store.state.appointmentData.designerId;
    },
    isLoading() {
      return this.$store.state.loading.isLoading;
    },
    selectDesigner() {
      return this.$store.state.appointmentData.designerName;
    },
    selectDesignerNickName() {
      return this.$store.state.appointmentData.designerNickName;
    },
    // 過濾選擇時段
    filterTimeRange() {
      switch (this.selectRange) {
        case '早上':
          return this.morningRange;
        case '下午':
          return this.afterNoonRange;
        case '晚上':
          return this.nightRange;
      }
    }
  },
  methods: {
    // 取得月份的第一天和最後一天
    getMonthRange(year, month) {
      const firstDate = new Date(year, month, 1).getTime();
      const lastDate = new Date(year, month + 1, 1).getTime();
      return `${firstDate}, ${lastDate}`;
    },
    // 取得設計師可預約日期
    getDesignerBookingTimesWithRange(input) {
      if (!this.$store.state.appointmentData.merchantId || !this.$store.state.appointmentData.designerId) {
        this.$store.dispatch('loading/isLoading', false);
        this.$router.push('/member/appointment');
        return;
      }
      this.disabledDate = [];
      this.api.getDesignerBookingTimesWithRange(input).then(res => {
        res.data.getDesignerBookingTimesWithRange.forEach(item => {
          if (item.isRegularHoliday) this.disabledDate.push(item.date);else this.bookingDate.push(item);
        });
        this.$store.dispatch('loading/isLoading', false);
        this.isGettingDate = false;
      }).catch(err => {
        console.log(err);
      });
    },
    // 變更月份
    changeMonth(date) {
      const designerId = this.$store.state.appointmentData.designerId;
      if (designerId !== 1) {
        this.isGettingDate = true;
        const monthRange = this.getMonthRange(date.getFullYear(), date.getMonth());
        const splitDate = monthRange.split(',');
        const input = {
          designerId: this.$store.state.appointmentData.designerId,
          storeId: this.$store.state.appointmentData.merchantId,
          dateRange: {
            startDate: splitDate[0],
            endDate: splitDate[1]
          }
        };
        this.getDesignerBookingTimesWithRange(input);
      }
    },
    // 選擇預約時段
    selectTime(item) {
      if (item.status !== '可預約') return;
      this.userSelect.time = item.time;
    },
    // 選擇日期
    selectDate(date) {
      this.morningRange = [];
      this.afterNoonRange = [];
      this.nightRange = [];
      const designerId = this.$store.state.appointmentData.designerId;

      // 假如為指定
      if (designerId !== 1) {
        this.userSelect.date = date;
        this.bookingTimes = [];
        const targetDate = this.bookingDate.find(item => item.date === date);
        this.bookingTimes = targetDate === null || targetDate === void 0 ? void 0 : targetDate.bookingTimes;
        if (this.bookingTimes) {
          this.bookingTimes.forEach(item => {
            const hours = new Date(item.time).getHours();
            if (hours < 13) this.morningRange.push(item);
            if (hours >= 13 && hours < 18) this.afterNoonRange.push(item);
            if (hours >= 18) this.nightRange.push(item);
          });
        }
      }
      // 假如為不指定
      else {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = newDate.getMonth();
        const monthDate = newDate.getDate();
        this.userSelect.date = date;
        this.bookingTimes = [];
        const merchant = JSON.parse(window.localStorage.getItem('merchant'));
        merchant.availableBookingTime.time.forEach(item => {
          const splitTime = item.split(':');
          const bookingTimestamp = new Date(year, month, monthDate, splitTime[0], splitTime[1]).getTime();
          const data = {
            time: bookingTimestamp,
            status: '可預約'
          };
          if (splitTime[0] < 13) {
            this.morningRange.push(data);
          }
          if (splitTime[0] >= 13 && splitTime[0] < 18) {
            this.afterNoonRange.push(data);
          }
          if (splitTime[0] >= 18) {
            this.nightRange.push(data);
          }
        });
      }
    },
    // format日期
    forMatDate(obj) {
      if (obj < 10) return '0' + obj;
      return obj;
    },
    // 前往選擇服務項目頁面
    toSelectService() {
      const time = new Date(this.userSelect.time);
      const year = time.getFullYear();
      const month = this.forMatDate(time.getMonth() + 1);
      const date = this.forMatDate(time.getDate());
      const hours = this.forMatDate(time.getHours());
      const min = this.forMatDate(time.getMinutes());
      const data = {
        time: `${year}/${month}/${date} ${hours}:${min}`,
        timestamp: this.userSelect.time
      };
      this.$store.dispatch('appointmentData/handleSetTime', data);
      this.$router.push('/member/appointment/selectService');
    },
    // 過濾可預約時間是否為30分鐘以內
    filterOldTimes(time) {
      const newDate = Date.now();
      if (newDate + 1800000 >= time) return true;
      return false;
    }
  },
  async mounted() {
    const designerId = this.$store.state.appointmentData.designerId;

    // 假如為指定
    if (designerId !== 1) {
      this.isGettingDate = true;
      this.$store.dispatch('loading/isLoading', true);
      if (!this.$store.state.appointmentData.merchantId || !this.$store.state.appointmentData.designerId) this.$router.push('/member/appointment');
      const date = new Date(Date.now());
      const monthRange = await this.getMonthRange(date.getFullYear(), date.getMonth());
      const splitDate = monthRange.split(',');
      const input = {
        designerId: this.$store.state.appointmentData.designerId,
        storeId: this.$store.state.appointmentData.merchantId,
        dateRange: {
          startDate: splitDate[0],
          endDate: splitDate[1]
        }
      };
      this.getDesignerBookingTimesWithRange(input);
    }
  }
});
// CONCATENATED MODULE: ./pages/member/appointment/selectDate.vue?vue&type=script&lang=js&
 /* harmony default export */ var appointment_selectDatevue_type_script_lang_js_ = (selectDatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/member/appointment/selectDate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  appointment_selectDatevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71a576b4"
  
)

/* harmony default export */ var selectDate = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Calendar: __webpack_require__(49).default})


/***/ })

};;
//# sourceMappingURL=selectDate.js.map