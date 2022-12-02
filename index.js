import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_49b76ac8 from 'nuxt_plugin_plugin_49b76ac8' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_10efeb32 from 'nuxt_plugin_cookieuniversalnuxt_10efeb32' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_workbox_70e30a1b from 'nuxt_plugin_workbox_70e30a1b' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_8b4898ca from 'nuxt_plugin_metaplugin_8b4898ca' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_81f94de2 from 'nuxt_plugin_iconplugin_81f94de2' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_ff3c6e82 from 'nuxt_plugin_axios_ff3c6e82' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_fontawesome_35e7d0c1 from 'nuxt_plugin_fontawesome_35e7d0c1' // Source: .\\fontawesome.js (mode: 'all')
import nuxt_plugin_api_785206da from 'nuxt_plugin_api_785206da' // Source: ..\\plugins\\api.js (mode: 'all')
import nuxt_plugin_auth_7f7561ce from 'nuxt_plugin_auth_7f7561ce' // Source: ..\\plugins\\auth.js (mode: 'all')
import nuxt_plugin_cookies_2c3cf8fe from 'nuxt_plugin_cookies_2c3cf8fe' // Source: ..\\plugins\\cookies.js (mode: 'all')
import nuxt_plugin_importServiceWorker_3b73a182 from 'nuxt_plugin_importServiceWorker_3b73a182' // Source: ..\\plugins\\importServiceWorker.js (mode: 'client')
import nuxt_plugin_veevalidate_1a0c1998 from 'nuxt_plugin_veevalidate_1a0c1998' // Source: ..\\plugins\\vee-validate.js (mode: 'client')
import nuxt_plugin_twelementpath_74e79dac from 'nuxt_plugin_twelementpath_74e79dac' // Source: ..\\plugins\\tw-element-path (mode: 'client')
import nuxt_plugin_aos_5e4622cf from 'nuxt_plugin_aos_5e4622cf' // Source: ..\\plugins\\aos (mode: 'client')
import nuxt_plugin_sweetalert_110dd1ee from 'nuxt_plugin_sweetalert_110dd1ee' // Source: ..\\plugins\\sweet-alert (mode: 'client')
import nuxt_plugin_vcalendar_299c62ab from 'nuxt_plugin_vcalendar_299c62ab' // Source: ..\\plugins\\v-calendar (mode: 'client')
import nuxt_plugin_index_6e5fb624 from 'nuxt_plugin_index_6e5fb624' // Source: ..\\directives\\index (mode: 'all')
import nuxt_plugin_permisstion_04b41cf7 from 'nuxt_plugin_permisstion_04b41cf7' // Source: ..\\plugins\\permisstion (mode: 'client')
import nuxt_plugin_ga_5d03ba60 from 'nuxt_plugin_ga_5d03ba60' // Source: ..\\plugins\\ga (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"fade","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"BeautyOS 會員","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=0"},{"hid":"description","name":"description","content":"客戶預約系統"},{"name":"format-detection","content":"telephone=no"},{"name":"mobile-web-app-capable","content":"yes"},{"name":"apple-touch-fullscreen","content":"yes"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"google","content":"notranslate"}],"script":[{"async":true,"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-SRS53HF281"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ficon.png"},{"rel":"apple-touch-icon","sizes":"128x128","href":"\u002Ficon.png"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_49b76ac8 === 'function') {
    await nuxt_plugin_plugin_49b76ac8(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_10efeb32 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_10efeb32(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_70e30a1b === 'function') {
    await nuxt_plugin_workbox_70e30a1b(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_8b4898ca === 'function') {
    await nuxt_plugin_metaplugin_8b4898ca(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_81f94de2 === 'function') {
    await nuxt_plugin_iconplugin_81f94de2(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_ff3c6e82 === 'function') {
    await nuxt_plugin_axios_ff3c6e82(app.context, inject)
  }

  if (typeof nuxt_plugin_fontawesome_35e7d0c1 === 'function') {
    await nuxt_plugin_fontawesome_35e7d0c1(app.context, inject)
  }

  if (typeof nuxt_plugin_api_785206da === 'function') {
    await nuxt_plugin_api_785206da(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_7f7561ce === 'function') {
    await nuxt_plugin_auth_7f7561ce(app.context, inject)
  }

  if (typeof nuxt_plugin_cookies_2c3cf8fe === 'function') {
    await nuxt_plugin_cookies_2c3cf8fe(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_importServiceWorker_3b73a182 === 'function') {
    await nuxt_plugin_importServiceWorker_3b73a182(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_veevalidate_1a0c1998 === 'function') {
    await nuxt_plugin_veevalidate_1a0c1998(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_twelementpath_74e79dac === 'function') {
    await nuxt_plugin_twelementpath_74e79dac(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_5e4622cf === 'function') {
    await nuxt_plugin_aos_5e4622cf(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sweetalert_110dd1ee === 'function') {
    await nuxt_plugin_sweetalert_110dd1ee(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vcalendar_299c62ab === 'function') {
    await nuxt_plugin_vcalendar_299c62ab(app.context, inject)
  }

  if (typeof nuxt_plugin_index_6e5fb624 === 'function') {
    await nuxt_plugin_index_6e5fb624(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_permisstion_04b41cf7 === 'function') {
    await nuxt_plugin_permisstion_04b41cf7(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_ga_5d03ba60 === 'function') {
    await nuxt_plugin_ga_5d03ba60(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
