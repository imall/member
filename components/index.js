export const Calendar = () => import('../..\\components\\Calendar.vue' /* webpackChunkName: "components/calendar" */).then(c => wrapFunctional(c.default || c))
export const Coupon = () => import('../..\\components\\Coupon.vue' /* webpackChunkName: "components/coupon" */).then(c => wrapFunctional(c.default || c))
export const ItemLoading = () => import('../..\\components\\ItemLoading.vue' /* webpackChunkName: "components/item-loading" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../..\\components\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const MemberGlobalCard = () => import('../..\\components\\MemberGlobalCard.vue' /* webpackChunkName: "components/member-global-card" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const Navigation = () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const Pagination = () => import('../..\\components\\Pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const Reimbursement = () => import('../..\\components\\Reimbursement.vue' /* webpackChunkName: "components/reimbursement" */).then(c => wrapFunctional(c.default || c))
export const SmallLoading = () => import('../..\\components\\SmallLoading.vue' /* webpackChunkName: "components/small-loading" */).then(c => wrapFunctional(c.default || c))
export const Ticket = () => import('../..\\components\\Ticket.vue' /* webpackChunkName: "components/ticket" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
