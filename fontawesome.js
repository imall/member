import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faCheck as proFasFaCheck,
  faAngleLeft as proFasFaAngleLeft,
  faAngleRight as proFasFaAngleRight,
  faXmark as proFasFaXmark,
  faQuestion as proFasFaQuestion,
  faCalendarDays as proFasFaCalendarDays,
  faSpinner as proFasFaSpinner,
  faArrowRight as proFasFaArrowRight,
  faTicket as proFasFaTicket
} from '@fortawesome/pro-solid-svg-icons'

import {
  faHouse as proFarFaHouse,
  faHeart as proFarFaHeart,
  faArrowRightFromBracket as proFarFaArrowRightFromBracket,
  faUser as proFarFaUser,
  faSackDollar as proFarFaSackDollar,
  faCircleDollar as proFarFaCircleDollar,
  faTicket as proFarFaTicket,
  faCircleP as proFarFaCircleP,
  faCircleQuestion as proFarFaCircleQuestion,
  faEllipsis as proFarFaEllipsis,
  faCirclePlus as proFarFaCirclePlus,
  faCircleMinus as proFarFaCircleMinus,
  faMagnifyingGlass as proFarFaMagnifyingGlass,
  faCircleInfo as proFarFaCircleInfo,
  faAngleDown as proFarFaAngleDown,
  faBagShopping as proFarFaBagShopping,
  faVolume as proFarFaVolume,
  faEnvelope as proFarFaEnvelope
} from '@fortawesome/pro-regular-svg-icons'

import {
  faPen as proFalFaPen
} from '@fortawesome/pro-light-svg-icons'

library.add(
  proFasFaCheck,
  proFasFaAngleLeft,
  proFasFaAngleRight,
  proFasFaXmark,
  proFasFaQuestion,
  proFasFaCalendarDays,
  proFasFaSpinner,
  proFasFaArrowRight,
  proFasFaTicket,
  proFarFaHouse,
  proFarFaHeart,
  proFarFaArrowRightFromBracket,
  proFarFaUser,
  proFarFaSackDollar,
  proFarFaCircleDollar,
  proFarFaTicket,
  proFarFaCircleP,
  proFarFaCircleQuestion,
  proFarFaEllipsis,
  proFarFaCirclePlus,
  proFarFaCircleMinus,
  proFarFaMagnifyingGlass,
  proFarFaCircleInfo,
  proFarFaAngleDown,
  proFarFaBagShopping,
  proFarFaVolume,
  proFarFaEnvelope,
  proFalFaPen
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
