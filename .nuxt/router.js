import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _068779e0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _eccd87b4 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _57e9a9de = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _0b31f39e = () => interopDefault(import('..\\pages\\categories\\_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _1c2cbb58 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _df98697c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _068779e0,
    name: "cart"
  }, {
    path: "/categories",
    component: _eccd87b4,
    name: "categories"
  }, {
    path: "/products",
    component: _57e9a9de,
    name: "products"
  }, {
    path: "/categories/:category",
    component: _0b31f39e,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _1c2cbb58,
    name: "products-product"
  }, {
    path: "/",
    component: _df98697c,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
