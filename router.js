import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d6f590e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _4b563e45 = () => interopDefault(import('..\\pages\\member.vue' /* webpackChunkName: "pages/member" */))
const _1a6922c6 = () => interopDefault(import('..\\pages\\member\\index.vue' /* webpackChunkName: "pages/member/index" */))
const _00f852d5 = () => interopDefault(import('..\\pages\\member\\addValue.vue' /* webpackChunkName: "pages/member/addValue" */))
const _1e8b7eac = () => interopDefault(import('..\\pages\\member\\appointment.vue' /* webpackChunkName: "pages/member/appointment" */))
const _19d03ed0 = () => interopDefault(import('..\\pages\\member\\appointment\\index.vue' /* webpackChunkName: "pages/member/appointment/index" */))
const _3afb91ce = () => interopDefault(import('..\\pages\\member\\appointment\\check.vue' /* webpackChunkName: "pages/member/appointment/check" */))
const _f4703218 = () => interopDefault(import('..\\pages\\member\\appointment\\selectDate.vue' /* webpackChunkName: "pages/member/appointment/selectDate" */))
const _dd10f742 = () => interopDefault(import('..\\pages\\member\\appointment\\selectService.vue' /* webpackChunkName: "pages/member/appointment/selectService" */))
const _8c00b9ca = () => interopDefault(import('..\\pages\\member\\appointmentRecord.vue' /* webpackChunkName: "pages/member/appointmentRecord" */))
const _65d27aa6 = () => interopDefault(import('..\\pages\\member\\consumption.vue' /* webpackChunkName: "pages/member/consumption" */))
const _5149b792 = () => interopDefault(import('..\\pages\\member\\coupon\\index.vue' /* webpackChunkName: "pages/member/coupon/index" */))
const _7f47f1b3 = () => interopDefault(import('..\\pages\\member\\info.vue' /* webpackChunkName: "pages/member/info" */))
const _9a48b922 = () => interopDefault(import('..\\pages\\member\\info\\index.vue' /* webpackChunkName: "pages/member/info/index" */))
const _45b6d5fd = () => interopDefault(import('..\\pages\\member\\info\\edit.vue' /* webpackChunkName: "pages/member/info/edit" */))
const _ffa3e74a = () => interopDefault(import('..\\pages\\member\\point.vue' /* webpackChunkName: "pages/member/point" */))
const _0d89bbc7 = () => interopDefault(import('..\\pages\\member\\point\\index.vue' /* webpackChunkName: "pages/member/point/index" */))
const _5542245b = () => interopDefault(import('..\\pages\\member\\setting.vue' /* webpackChunkName: "pages/member/setting" */))
const _362aa3c7 = () => interopDefault(import('..\\pages\\member\\setting\\index.vue' /* webpackChunkName: "pages/member/setting/index" */))
const _324b2ab6 = () => interopDefault(import('..\\pages\\member\\setting\\edit.vue' /* webpackChunkName: "pages/member/setting/edit" */))
const _0b80e591 = () => interopDefault(import('..\\pages\\member\\ticket\\index.vue' /* webpackChunkName: "pages/member/ticket/index" */))
const _98709412 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _7d6f590e,
    name: "login"
  }, {
    path: "/member",
    component: _4b563e45,
    children: [{
      path: "",
      component: _1a6922c6,
      name: "member"
    }, {
      path: "addValue",
      component: _00f852d5,
      name: "member-addValue"
    }, {
      path: "appointment",
      component: _1e8b7eac,
      children: [{
        path: "",
        component: _19d03ed0,
        name: "member-appointment"
      }, {
        path: "check",
        component: _3afb91ce,
        name: "member-appointment-check"
      }, {
        path: "selectDate",
        component: _f4703218,
        name: "member-appointment-selectDate"
      }, {
        path: "selectService",
        component: _dd10f742,
        name: "member-appointment-selectService"
      }]
    }, {
      path: "appointmentRecord",
      component: _8c00b9ca,
      name: "member-appointmentRecord"
    }, {
      path: "consumption",
      component: _65d27aa6,
      name: "member-consumption"
    }, {
      path: "coupon",
      component: _5149b792,
      name: "member-coupon"
    }, {
      path: "info",
      component: _7f47f1b3,
      children: [{
        path: "",
        component: _9a48b922,
        name: "member-info"
      }, {
        path: "edit",
        component: _45b6d5fd,
        name: "member-info-edit"
      }]
    }, {
      path: "point",
      component: _ffa3e74a,
      children: [{
        path: "",
        component: _0d89bbc7,
        name: "member-point"
      }]
    }, {
      path: "setting",
      component: _5542245b,
      children: [{
        path: "",
        component: _362aa3c7,
        name: "member-setting"
      }, {
        path: "edit",
        component: _324b2ab6,
        name: "member-setting-edit"
      }]
    }, {
      path: "ticket",
      component: _0b80e591,
      name: "member-ticket"
    }]
  }, {
    path: "/",
    component: _98709412,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
