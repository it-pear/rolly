import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2dda3f4a = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _ecf7da08 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _490ff3dc = () => interopDefault(import('..\\pages\\policy.vue' /* webpackChunkName: "pages/policy" */))
const _a5af8398 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _9a55b5a0 = () => interopDefault(import('..\\pages\\thank.vue' /* webpackChunkName: "pages/thank" */))
const _6e82fbf2 = () => interopDefault(import('..\\pages\\categories\\_category.vue' /* webpackChunkName: "pages/categories/_category" */))
const _214cb384 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages/products/_product" */))
const _5339b318 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2dda3f4a,
    name: "cart"
  }, {
    path: "/categories",
    component: _ecf7da08,
    name: "categories"
  }, {
    path: "/policy",
    component: _490ff3dc,
    name: "policy"
  }, {
    path: "/products",
    component: _a5af8398,
    name: "products"
  }, {
    path: "/thank",
    component: _9a55b5a0,
    name: "thank"
  }, {
    path: "/categories/:category",
    component: _6e82fbf2,
    name: "categories-category"
  }, {
    path: "/products/:product",
    component: _214cb384,
    name: "products-product"
  }, {
    path: "/",
    component: _5339b318,
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
