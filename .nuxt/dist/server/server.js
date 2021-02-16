module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/cart","2":"pages/categories/_category","3":"pages/categories/index","4":"pages/index","5":"pages/policy","6":"pages/products/_product","7":"pages/products/index","8":"pages/thank"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/AppHeader.vue?vue&type=template&id=c93d6ea6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header navik-header header-transparent header-shadow header-transparent-on",attrs:{"id":"header-3"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"navik-header-container\">","</div>",[_vm._ssrNode("<div class=\"callusbtn\"><a href=\"tel:89960501010\"><i class=\"fas fa-phone\"></i></a></div> "),_vm._ssrNode("<div data-mobile-logo=\"@/assets/img/logo.png\" data-sticky-logo=\"@/assets/img/logo.png\" class=\"logo\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":__webpack_require__(21),"alt":"header-logo"}})]),_vm._ssrNode(" <a href=\"tel:89960501010\" class=\"tel-mb\">+7 (996) 050-10-10</a> "),_vm._ssrNode("<div class=\"basket-ico basket-mb\">","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'cart' }}},[_c('span',{staticClass:"ico-holder"},[_c('span',{staticClass:"flaticon-shopping-bag"}),_vm._v(" "),(_vm.qty > 0)?_c('em',{staticClass:"roundpoint"},[_vm._v(_vm._s(_vm.qty))]):_vm._e()])])],1)],2),_vm._ssrNode(" <div"+(_vm._ssrClass("burger-menu",{ menuopen: _vm.isActive }))+"><div class=\"line-menu line-half first-line\"></div> <div class=\"line-menu\"></div> <div class=\"line-menu line-half last-line\"></div></div> "),_vm._ssrNode("<nav"+(_vm._ssrClass("navik-menu menu-caret navik-yellow mb-0",{ navikmenuactive: _vm.isActive }))+">","</nav>",[_c('HeaderList',{on:{"close":function($event){_vm.isActive=!_vm.isActive}}}),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"top-list\">","</ul>",[_vm._ssrNode("<li class=\"nav-btn yellow-color\"><a href=\"tel:89960501010\" class=\"tel-lg\">+7 (996) 050-10-10</a></li> "),_vm._ssrNode("<li class=\"basket-ico ico-30 basket-lg\">","</li>",[_c('nuxt-link',{attrs:{"to":{ name: 'cart' }}},[_c('span',{staticClass:"ico-holder"},[_c('span',{staticClass:"flaticon-shopping-bag"}),_vm._v(" "),(_vm.qty > 0)?_c('em',{staticClass:"roundpoint"},[_vm._v(_vm._s(_vm.qty))]):_vm._e()])])],1)],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/AppHeader.vue?vue&type=template&id=c93d6ea6&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductListHeader.vue?vue&type=template&id=f71d9e56&
var ProductListHeadervue_type_template_id_f71d9e56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"top-list",attrs:{"id":"navik-header-container-top-list"}},_vm._l((_vm.categories),function(category){return _vm._ssrNode("<li"+(_vm._ssrClass(null,{
      current: _vm.$route.params.category === ((category.slug) + "-" + (category.id)),
    }))+">","</li>",[_c('nuxt-link',{attrs:{"to":{
        name: 'categories-category',
        params: { category: ((category.slug) + "-" + (category.id)) },
        hash: '#catalogmenu',
      }}},[_vm._v("\n      "+_vm._s(category.title)+"\n    ")])],1)}),0)}
var ProductListHeadervue_type_template_id_f71d9e56_staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/ProductListHeader.vue?vue&type=template&id=f71d9e56&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductListHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductListHeadervue_type_script_lang_js_ = ({
  name: "ProductsListFilter",
  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.filters.categories
    })
  },
  methods: {
    onclick() {
      this.$emit('close');
    }

  },

  created() {
    if (!this.categories) {
      this.$store.dispatch("filters/fetchCategories");
    }
  }

});
// CONCATENATED MODULE: ./components/products-list/ProductListHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_list_ProductListHeadervue_type_script_lang_js_ = (ProductListHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/ProductListHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(102)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_list_ProductListHeadervue_type_script_lang_js_,
  ProductListHeadervue_type_template_id_f71d9e56_render,
  ProductListHeadervue_type_template_id_f71d9e56_staticRenderFns,
  false,
  injectStyles,
  null,
  "8a7cf432"
  
)

/* harmony default export */ var ProductListHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/AppHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  name: "AppHeader",
  computed: { ...Object(external_vuex_["mapGetters"])({
      qty: "cart/productsQty",
      categories: state => state.filters.categories
    })
  },

  data() {
    return {
      isActive: false
    };
  },

  components: {
    HeaderList: ProductListHeader
  },
  methods: {
    onclick() {
      this.isActive = !this.isActive;
    }

  }
});
// CONCATENATED MODULE: ./components/layouts/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/layouts/AppHeader.vue



function AppHeader_injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var AppHeader_component = Object(componentNormalizer["a" /* default */])(
  layouts_AppHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  AppHeader_injectStyles,
  null,
  "c3d6ce06"
  
)

/* harmony default export */ var AppHeader = __webpack_exports__["default"] = (AppHeader_component.exports);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/AppFooter.vue?vue&type=template&id=52e64e90&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer division",attrs:{"id":"footer-3"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12 text-center\">","</div>",[_vm._ssrNode("<div class=\"footer-logo\">","</div>",[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":__webpack_require__(21),"alt":"footer-logo"}},[])]),_vm._ssrNode(" <div class=\"footer-socials-links\"><ul class=\"foo-socials text-center clearfix w-100 text-center\"><li><a href=\"https://www.instagram.com/holiday_sushi_gel/\" class=\"ico-instagram\"><svg viewBox=\"0 0 512.00096 512.00096\" enable-background=\"new 0 0 24 24\" height=\"24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0\"></path> <path d=\"m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0\"></path> <path d=\"m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0\"></path></svg></a></li></ul></div> <br> <div class=\"footer-copyright\"><p>\n            © 2021 holiday sushi <br><br><small>все права защищены</small></p><br> <a href=\"/policy\" target=\"_blank\">Политика конфиденциальности</a></div>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/AppFooter.vue?vue&type=template&id=52e64e90&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/AppFooter.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ce2350b"
  
)

/* harmony default export */ var AppFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Apisful; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Apisful = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  // We are using apisful.com as a backend for this e-commerce website
  baseURL: 'https://api.apisful.com/v1/collections/',
  headers: {
    // Put your access key here
    'X-Api-Key': 'MKIU0N9EHlQP6D-RjSrwlxHIZ0AKYbw00T2Nb0MjSg8'
  },
  params: {
    per_page: 1000
  },

  validateStatus(status) {
    return status >= 200 && status < 500;
  }

});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@nuxt/ufo");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/Delivery.vue?vue&type=template&id=560e6289&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-fixed wide-100 banner-section division",attrs:{"id":"banner-4"}},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-10 col-xl-8 offset-lg-1 offset-xl-2\"><div class=\"banner-4-txt text-center\"><h3>Закажите доставку роллов и пиццы Holiday Sushi<br>в Геленджике</h3> <p class=\"p-lg\">\n            И вы получите не только гастрономическое, но и эстетическое наслаждение!\n          </p> <a href=\"tel:89960501010\" class=\"btn btn-lg btn-red tra-red-hover\">+7 (996) 050-10-10</a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Delivery.vue?vue&type=template&id=560e6289&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Delivery.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "16847c55"
  
)

/* harmony default export */ var Delivery = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/Sentence.vue?vue&type=template&id=0430b2eb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.products.length)?_c('VueSlickCarousel',{ref:"carousel",attrs:{"arrows":false,"dots":true,"autoplay":true,"autoplaySpeed":3000,"swipe":false}},_vm._l((_vm.products),function(item,id){return _c('div',{key:id,staticClass:"slider"},[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":("" + (item.image))}}),_vm._v(" "),_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":("" + (item.imagemb))}})])}),0):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Sentence.vue?vue&type=template&id=0430b2eb&

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(31);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/Sentence.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // optional style for arrows & dots


/* harmony default export */ var Sentencevue_type_script_lang_js_ = ({
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/layouts/Sentence.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Sentencevue_type_script_lang_js_ = (Sentencevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Sentence.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(110)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_Sentencevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a63b3178"
  
)

/* harmony default export */ var Sentence = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/About.vue?vue&type=template&id=6842f6f5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section id=\"about-3\" class=\"bg-lightgrey wide-60 about-section division\"><div class=\"container\"><div class=\"row d-flex align-items-center\"><div class=\"col-md-12 col-lg-12 text-center\"><div class=\"about-3-txt mb-40\"><h2 class=\"h2-sm\">О компании Holiday Sushi</h2> <p class=\"p-md\">\n              Доставка еды на дом — всегда целое событие и настоящий праздник.\n              Это отличная возможность устроить ужин, состоящий из любимых\n              блюд, и поддержать ресторанную атмосферу, не выходя из дома или\n              отеля. Хороший вариант как для романтического свидания, так и\n              для семейного торжества или внезапного приема гостей. Компания\n              Holiday Sushi создает праздник вкуса для своих клиентов с\n              декабря 2020 года в городе Геленджике. Наши специалисты\n              обучались у лучших шеф-поваров и проходили практику в лучших\n              ресторанах Москвы и Российской Федерации. Они используют\n              современную профессиональную технику и оборудование для кухни,\n              постоянно экспериментируют, совершенствуют рецепты и увеличивают\n              ассортимент блюд в меню.\n            </p> <h4>Основные принципы доставки еды Holiday Sushi</h4> <ul class=\"txt-list\"><li class=\"list-item\"><p class=\"p-md\">\n                  Секрет идеального вкуса всех наших кулинарных шедевров кроется в процессе их приготовления. Здесь важен каждый этап, поэтому наши суши-мастера и пиццаеллы делают все с нуля, соблюдая принципы японских и итальянских шеф-поваров: уважение, смирение, гигиена. \n                </p></li> <li class=\"list-item\"><p class=\"p-md\">\n                  Мы отбираем только лучшие, качественные и свежайшие ингредиенты. Используем овощи и фрукты, выращенные в экологически чистых условиях. Рыба и море продукты поставляются на нашу кухню через мгновение после того, как их поймали. Каждый день сами разделываем филе, готовим рис до нужной консистенции и делаем соусы.\n                </p></li> <li class=\"list-item\"><p class=\"p-md\">\n                  Наша пицца готовится по знаменитой технологии ресторана L'Antica Pizzeria da Michele в Неаполе — ее края имеют высоту около 2 см и приятно хрустят. Толщина теста в центре пиццы составляет всего 1,5–2 мм, оно влажное и мягкое.\n                </p></li> <li class=\"list-item\"><p>\n                  Мы не используем химических вкусовых добавок, а как японцы и итальянцы, приправляем блюда только солью, перцем, зеленью и традиционными специями, такими как васаби, соевый соус, поэтому они являются низкокалорийными и в то же время легко усваиваемыми. Они сохраняют естественный вкус и аромат.\n                </p></li> <li class=\"list-item\"><p>\n                  Особое внимание уделяется эстетике и форме подачи еды — все элементы продуманы до мелочей, подобраны по цвету и размеру. \n                </p></li></ul></div></div></div></div></section> <section id=\"about-7\" class=\"bg-05 about-section division\"><div class=\"container\"><div class=\"abox-4-wrapper ico-80\"><div class=\"row\"><div class=\"col-md-4 col-lg-4\"><div class=\"abox-4 text-center mb-40 white-color\"><div class=\"abox-4-ico\"><span class=\"flaticon-sushi\"></span></div> <h5 class=\"h5-lg\">\n                Оригинальные японские и итальянские рецепты\n              </h5> <p>\n                Подаем известные блюда в интересных вариантах. Вы откроете для\n                себя новые вкусы и ароматы.\n              </p></div></div> <div class=\"col-md-4 col-lg-4\"><div class=\"abox-4 text-center mb-40 white-color\"><div class=\"abox-4-ico\"><span class=\"flaticon-salad\"></span></div> <h5 class=\"h5-lg\">\n                100% гарантия свежести, качества и безопасности продуктов\n              </h5> <p>\n                Мы гарантируем качество наших блюд, вы можете не волноваться!\n              </p></div></div> <div class=\"col-md-4 col-lg-4\"><div class=\"abox-4 text-center mb-40 white-color\"><div class=\"abox-4-ico\"><span class=\"flaticon-moped\"></span></div> <h5 class=\"h5-lg\">\n                Быстрая доставка за 60 минут после оплаты заказа\n              </h5> <p>\n                Заказы принимаются ежедневно с 10:30 до 00:00. Приготовление\n                блюд начинается после приема заявки и уточнения количества\n              </p></div></div></div></div></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/About.vue?vue&type=template&id=6842f6f5&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/About.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3fba8708"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/Sales.vue?vue&type=template&id=5c7f74aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-scroll banner-section division",attrs:{"id":"banner-2"}},[_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-md-10 offset-md-1\"><div class=\"banner-2-txt text-center white-color\"><h2>Наши акции</h2> <p class=\"p-xl\">10% скидка при доставки еды в день рождения на дом или в офис!</p> <p class=\"p-xl\">Подари любимой романтический ужин на День Святого Валентина. Закажи суши-сет и получи скидку 10%!</p> <p class=\"p-xl\">Счастливые часы.\n2 пиццы по цене 1 при заказе в будние дни \nс 10:30 до 12:00 и с 16:00 до 19:00.\n</p> <a href=\"tel:89960501010\" class=\"btn btn-lg btn-red tra-red-hover\">+7 (996) 050-10-10</a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Sales.vue?vue&type=template&id=5c7f74aa&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Sales.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b030a7b"
  
)

/* harmony default export */ var Sales = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/Contacts.vue?vue&type=template&id=78dd7380&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wide-80 contacts-section division",attrs:{"id":"contacts-5"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-xl-10 offset-xl-1\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"cbox-5\"><h5 class=\"h5-lg\">Местоположение</h5> <p class=\"p-md\">г. Геленджик</p> <p class=\"p-md\">ул. Курзальная - 12</p></div></div> <div class=\"col-md-4\"><div class=\"cbox-5\"><h5 class=\"h5-lg\">Рабочие часы</h5> <p class=\"p-md\">Ежедневно</p> <p class=\"p-md\">с 10:30 до 00:00</p></div></div> <div class=\"col-md-4\"><div class=\"cbox-5\"><h5 class=\"h5-lg\">Телефон:</h5> <p class=\"p-md\"><a href=\"tel:89960501010\">+7 (996) 050-10-10</a></p></div></div></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">","</div>",[_vm._ssrNode("<div id=\"gmap\">","</div>",[_vm._ssrNode("<div class=\"google-map text-center\">","</div>",[_c('iframe',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticStyle:{"border":"0"},attrs:{"data-src":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.116548562125!2d38.072184314914786!3d44.553718701751805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f18a0d28b60a3f%3A0x4e23f4ae200ca835!2z0YPQuy4g0JrRg9GA0LfQsNC70YzQvdCw0Y8sIDEyLCDQk9C10LvQtdC90LTQttC40LosINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTM0NjE!5e0!3m2!1sru!2sru!4v1612986667273!5m2!1sru!2sru","width":"600","height":"450","frameborder":"0","allowfullscreen":"","aria-hidden":"false","tabindex":"0"}},[])])])])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/Contacts.vue?vue&type=template&id=78dd7380&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/Contacts.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b157934"
  
)

/* harmony default export */ var Contacts = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = ({
  async list(filter) {
    const response = await _index__WEBPACK_IMPORTED_MODULE_0__[/* Apisful */ "a"].get('products/', {
      params: {
        filter: JSON.stringify(filter)
      }
    });
    return response.data.results;
  },

  async get(productId) {
    const response = await _index__WEBPACK_IMPORTED_MODULE_0__[/* Apisful */ "a"].get(`products/${productId}/`, {
      params: {
        expand: 'variants'
      }
    });
    return response.data;
  }

});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3990ae42", content, true, context)
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0063099f", content, true, context)
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.5ae3577.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("08d83621", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("43ce1583", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("77167423", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("53e1fde9", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("03b7f021", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-slick-carousel");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
module.exports = __webpack_require__(117);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("1f32c9c8", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(41);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(42);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(43);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(45);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(46);
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(47);
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(48);
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(49);
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(50);
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(51);
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(53);
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(54);
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(55);
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(56);
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(57);
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(58);
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(59);
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(60);
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(63);
var ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(64);
var ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(65);
var ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_25___ = __webpack_require__(67);
var ___CSS_LOADER_URL_IMPORT_26___ = __webpack_require__(68);
var ___CSS_LOADER_URL_IMPORT_27___ = __webpack_require__(69);
var ___CSS_LOADER_URL_IMPORT_28___ = __webpack_require__(70);
var ___CSS_LOADER_URL_IMPORT_29___ = __webpack_require__(71);
var ___CSS_LOADER_URL_IMPORT_30___ = __webpack_require__(72);
var ___CSS_LOADER_URL_IMPORT_31___ = __webpack_require__(73);
var ___CSS_LOADER_URL_IMPORT_32___ = __webpack_require__(74);
var ___CSS_LOADER_URL_IMPORT_33___ = __webpack_require__(75);
var ___CSS_LOADER_URL_IMPORT_34___ = __webpack_require__(76);
var ___CSS_LOADER_URL_IMPORT_35___ = __webpack_require__(77);
var ___CSS_LOADER_URL_IMPORT_36___ = __webpack_require__(78);
var ___CSS_LOADER_URL_IMPORT_37___ = __webpack_require__(79);
var ___CSS_LOADER_URL_IMPORT_38___ = __webpack_require__(80);
var ___CSS_LOADER_URL_IMPORT_39___ = __webpack_require__(81);
var ___CSS_LOADER_URL_IMPORT_40___ = __webpack_require__(82);
var ___CSS_LOADER_URL_IMPORT_41___ = __webpack_require__(83);
var ___CSS_LOADER_URL_IMPORT_42___ = __webpack_require__(84);
var ___CSS_LOADER_URL_IMPORT_43___ = __webpack_require__(85);
var ___CSS_LOADER_URL_IMPORT_44___ = __webpack_require__(86);
var ___CSS_LOADER_URL_IMPORT_45___ = __webpack_require__(87);
var ___CSS_LOADER_URL_IMPORT_46___ = __webpack_require__(88);
var ___CSS_LOADER_URL_IMPORT_47___ = __webpack_require__(89);
var ___CSS_LOADER_URL_IMPORT_48___ = __webpack_require__(90);
var ___CSS_LOADER_URL_IMPORT_49___ = __webpack_require__(91);
var ___CSS_LOADER_URL_IMPORT_50___ = __webpack_require__(92);
var ___CSS_LOADER_URL_IMPORT_51___ = __webpack_require__(93);
var ___CSS_LOADER_URL_IMPORT_52___ = __webpack_require__(94);
var ___CSS_LOADER_URL_IMPORT_53___ = __webpack_require__(95);
var ___CSS_LOADER_URL_IMPORT_54___ = __webpack_require__(96);
var ___CSS_LOADER_URL_IMPORT_55___ = __webpack_require__(97);
var ___CSS_LOADER_URL_IMPORT_56___ = __webpack_require__(98);
var ___CSS_LOADER_URL_IMPORT_57___ = __webpack_require__(99);
var ___CSS_LOADER_URL_IMPORT_58___ = __webpack_require__(100);
var ___CSS_LOADER_URL_IMPORT_59___ = __webpack_require__(101);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald:wght@200;300;400;500;600;700&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lilita+One&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_43___);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_44___);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_45___);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_46___);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_47___);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_48___);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_49___);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_50___);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_51___);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_52___);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_53___);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_54___);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_55___);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_56___);
var ___CSS_LOADER_URL_REPLACEMENT_57___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_57___);
var ___CSS_LOADER_URL_REPLACEMENT_58___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_58___);
var ___CSS_LOADER_URL_REPLACEMENT_59___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_59___);
// Module
exports.push([module.i, "/*!\r\n * Bootstrap v4.5.3 (https://getbootstrap.com/)\r\n * Copyright 2011-2020 The Bootstrap Authors\r\n * Copyright 2011-2020 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(.focus-visible),[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{border-style:none}img,svg{vertical-align:middle}svg{overflow:hidden}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit;text-align:-webkit-match-parent}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer:before{content:\"\\2014\\00A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-1>*{flex:0 0 100%;max-width:100%}.row-cols-2>*{flex:0 0 50%;max-width:50%}.row-cols-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{flex:0 0 25%;max-width:25%}.row-cols-5>*{flex:0 0 20%;max-width:20%}.row-cols-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-sm-1>*{flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-md-1>*{flex:0 0 100%;max-width:100%}.row-cols-md-2>*{flex:0 0 50%;max-width:50%}.row-cols-md-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{flex:0 0 25%;max-width:25%}.row-cols-md-5>*{flex:0 0 20%;max-width:20%}.row-cols-md-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-lg-1>*{flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.row-cols-xl-1>*{flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:hsla(0,0%,100%,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size],textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{border-color:#28a745}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;left:0;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{border-color:#dc3545}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary.focus,.btn-primary:focus,.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success.focus,.btn-success:focus,.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info.focus,.btn-info:focus,.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning.focus,.btn-warning:focus,.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger.focus,.btn-danger:focus,.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light.focus,.btn-light:focus,.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark.focus,.btn-dark:focus,.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3}.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropleft .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;min-width:0;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;z-index:1;display:block;min-height:1.5rem;padding-left:1.5rem;-webkit-print-color-adjust:exact;color-adjust:exact}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label:before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label:before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label:before{pointer-events:none;background-color:#fff;border:1px solid #adb5bd}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label:after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label:after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label:after{background-color:#fff;transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(1.5em + .75rem + 2px)}.custom-file-input{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]:after{content:attr(data-browse)}.custom-file-label{left:0;z-index:1;height:calc(1.5em + .75rem + 2px);font-weight:400;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label:before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label:before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat 50%;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{flex-shrink:0;width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{display:flex;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;grid-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion{overflow-anchor:none}.accordion>.card{overflow:hidden}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card>.card-header{border-radius:0;margin-bottom:-1px}.breadcrumb{flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb,.breadcrumb-item{display:flex}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item:before{padding-right:.5rem;color:#6c757d}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;z-index:2;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{height:1rem;line-height:0;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress,.progress-bar{display:flex;overflow:hidden}.progress-bar{flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0}a.close.disabled{pointer-events:none}.toast{flex-basis:350px;max-width:350px;font-size:.875rem;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:hsla(0,0%,100%,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered:before{display:block;height:calc(100vh - 1rem);height:-webkit-min-content;height:-moz-min-content;height:min-content;content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{flex-direction:column;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable:before{content:none}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered:before{height:calc(100vh - 3.5rem);height:-webkit-min-content;height:-moz-min-content;height:min-content}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}[dir=ltr] .tooltip{text-align:left}[dir=rtl] .tooltip{text-align:right}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}[dir=ltr] .popover{text-align:left}[dir=rtl] .popover{text-align:right}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before{top:0;border-width:0 .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after{top:1px;border-width:0 .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner:after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{transform:rotate(1turn)}}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid;border-right:.25em solid transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.857143%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;-ms-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;-ms-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.stretched-link:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:transparent}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:hsla(0,0%,100%,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;word-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}.container,body{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}@font-face{font-family:\"Flaticon\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\");font-weight:400;font-style:normal}@media screen and (-webkit-min-device-pixel-ratio:0){@font-face{font-family:\"Flaticon\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\")}}[class*=\" flaticon-\"]:after,[class*=\" flaticon-\"]:before,[class^=flaticon-]:after,[class^=flaticon-]:before{font-family:Flaticon;font-size:20px;line-height:1!important;font-style:normal;margin-left:0}.flaticon-pizza-slice:before{content:\"\\f100\"}.flaticon-pizza-slice-1:before{content:\"\\f101\"}.flaticon-pizza:before{content:\"\\f102\"}.flaticon-pizza-1:before{content:\"\\f103\"}.flaticon-pizza-2:before{content:\"\\f104\"}.flaticon-pizza-3:before{content:\"\\f105\"}.flaticon-pizza-shop:before{content:\"\\f106\"}.flaticon-pizza-4:before{content:\"\\f107\"}.flaticon-burger:before{content:\"\\f108\"}.flaticon-vegan-burger:before{content:\"\\f109\"}.flaticon-cheese-burger:before{content:\"\\f10a\"}.flaticon-cheese-burger-1:before{content:\"\\f10b\"}.flaticon-burger-1:before{content:\"\\f10c\"}.flaticon-burger-2:before{content:\"\\f10d\"}.flaticon-sandwich:before{content:\"\\f10e\"}.flaticon-burger-3:before{content:\"\\f10f\"}.flaticon-fries:before{content:\"\\f110\"}.flaticon-burger-4:before{content:\"\\f111\"}.flaticon-doughnut:before{content:\"\\f112\"}.flaticon-fried-chicken:before{content:\"\\f113\"}.flaticon-hot-dog:before{content:\"\\f114\"}.flaticon-pizza-5:before{content:\"\\f115\"}.flaticon-pizza-6:before{content:\"\\f116\"}.flaticon-chinese:before{content:\"\\f117\"}.flaticon-burger-5:before{content:\"\\f118\"}.flaticon-burger-6:before{content:\"\\f119\"}.flaticon-pizzeria:before{content:\"\\f11a\"}.flaticon-drink:before{content:\"\\f11b\"}.flaticon-fried-chicken-1:before{content:\"\\f11c\"}.flaticon-takeaway:before{content:\"\\f11d\"}.flaticon-burrito:before{content:\"\\f11e\"}.flaticon-order:before{content:\"\\f11f\"}.flaticon-onion-rings:before{content:\"\\f120\"}.flaticon-fast-food:before{content:\"\\f121\"}.flaticon-taco:before{content:\"\\f122\"}.flaticon-beer:before{content:\"\\f123\"}.flaticon-fast-food-1:before{content:\"\\f124\"}.flaticon-fast-food-2:before{content:\"\\f125\"}.flaticon-food-stall:before{content:\"\\f126\"}.flaticon-fast-food-3:before{content:\"\\f127\"}.flaticon-fast-food-4:before{content:\"\\f128\"}.flaticon-fast-food-5:before{content:\"\\f129\"}.flaticon-hot-dog-1:before{content:\"\\f12a\"}.flaticon-bucket:before{content:\"\\f12b\"}.flaticon-cheese:before{content:\"\\f12c\"}.flaticon-french-fries:before{content:\"\\f12d\"}.flaticon-sausage:before{content:\"\\f12e\"}.flaticon-burger-7:before{content:\"\\f12f\"}.flaticon-sandwich-1:before{content:\"\\f130\"}.flaticon-pizza-7:before{content:\"\\f131\"}.flaticon-nachos:before{content:\"\\f132\"}.flaticon-burger-8:before{content:\"\\f133\"}.flaticon-coffee-cup:before{content:\"\\f134\"}.flaticon-sausages:before{content:\"\\f135\"}.flaticon-trailer:before{content:\"\\f136\"}.flaticon-burger-9:before{content:\"\\f137\"}.flaticon-beer-1:before{content:\"\\f138\"}.flaticon-pint:before{content:\"\\f139\"}.flaticon-meal:before{content:\"\\f13a\"}.flaticon-drinks:before{content:\"\\f13b\"}.flaticon-drink-1:before{content:\"\\f13c\"}.flaticon-drink-2:before{content:\"\\f13d\"}.flaticon-cocktail:before{content:\"\\f13e\"}.flaticon-cocktail-1:before{content:\"\\f13f\"}.flaticon-wine:before{content:\"\\f140\"}.flaticon-sign:before{content:\"\\f141\"}.flaticon-cheese-1:before{content:\"\\f142\"}.flaticon-tea-pot:before{content:\"\\f143\"}.flaticon-tea-cup:before{content:\"\\f144\"}.flaticon-coffee:before{content:\"\\f145\"}.flaticon-coffee-1:before{content:\"\\f146\"}.flaticon-coffee-machine:before{content:\"\\f147\"}.flaticon-can:before{content:\"\\f148\"}.flaticon-tea-cup-1:before{content:\"\\f149\"}.flaticon-coffee-2:before{content:\"\\f14a\"}.flaticon-coffee-cup-1:before{content:\"\\f14b\"}.flaticon-tea-cup-2:before{content:\"\\f14c\"}.flaticon-salad:before{content:\"\\f14d\"}.flaticon-sandwich-2:before{content:\"\\f14e\"}.flaticon-salad-1:before{content:\"\\f14f\"}.flaticon-restaurants:before{content:\"\\f150\"}.flaticon-beer-2:before{content:\"\\f151\"}.flaticon-orange:before{content:\"\\f152\"}.flaticon-pizza-cutter:before{content:\"\\f153\"}.flaticon-fish:before{content:\"\\f154\"}.flaticon-tea:before{content:\"\\f155\"}.flaticon-steak:before{content:\"\\f156\"}.flaticon-machine:before{content:\"\\f157\"}.flaticon-muffin:before{content:\"\\f158\"}.flaticon-ribs:before{content:\"\\f159\"}.flaticon-sausage-1:before{content:\"\\f15a\"}.flaticon-roast:before{content:\"\\f15b\"}.flaticon-coffee-3:before{content:\"\\f15c\"}.flaticon-van:before{content:\"\\f15d\"}.flaticon-food:before{content:\"\\f15e\"}.flaticon-donut:before{content:\"\\f15f\"}.flaticon-dish:before{content:\"\\f160\"}.flaticon-bowl:before{content:\"\\f161\"}.flaticon-noodles:before{content:\"\\f162\"}.flaticon-steak-1:before{content:\"\\f163\"}.flaticon-rice-bowl:before{content:\"\\f164\"}.flaticon-grill:before{content:\"\\f165\"}.flaticon-fish-1:before{content:\"\\f166\"}.flaticon-beer-3:before{content:\"\\f167\"}.flaticon-food-delivery:before{content:\"\\f168\"}.flaticon-pizza-8:before{content:\"\\f169\"}.flaticon-car:before{content:\"\\f16a\"}.flaticon-pizza-9:before{content:\"\\f16b\"}.flaticon-menu:before{content:\"\\f16c\"}.flaticon-chicken:before{content:\"\\f16d\"}.flaticon-chicken-1:before{content:\"\\f16e\"}.flaticon-dessert:before{content:\"\\f16f\"}.flaticon-dessert-1:before{content:\"\\f170\"}.flaticon-dessert-2:before{content:\"\\f171\"}.flaticon-ice-cream:before{content:\"\\f172\"}.flaticon-moped:before{content:\"\\f173\"}.flaticon-wallet:before{content:\"\\f174\"}.flaticon-piggy-bank:before{content:\"\\f175\"}.flaticon-gift:before{content:\"\\f176\"}.flaticon-email:before{content:\"\\f177\"}.flaticon-contact-book:before{content:\"\\f178\"}.flaticon-email-1:before{content:\"\\f179\"}.flaticon-sign-1:before{content:\"\\f17a\"}.flaticon-working-hours:before{content:\"\\f17b\"}.flaticon-meal-1:before{content:\"\\f17c\"}.flaticon-seafood:before{content:\"\\f17d\"}.flaticon-steak-2:before{content:\"\\f17e\"}.flaticon-lamb:before{content:\"\\f17f\"}.flaticon-roast-1:before{content:\"\\f180\"}.flaticon-chicken-2:before{content:\"\\f181\"}.flaticon-meal-2:before{content:\"\\f182\"}.flaticon-breakfast:before{content:\"\\f183\"}.flaticon-world:before{content:\"\\f184\"}.flaticon-cake:before{content:\"\\f185\"}.flaticon-cafe:before{content:\"\\f186\"}.flaticon-pancakes:before{content:\"\\f187\"}.flaticon-bakery:before{content:\"\\f188\"}.flaticon-open:before{content:\"\\f189\"}.flaticon-fish-2:before{content:\"\\f18a\"}.flaticon-wine-1:before{content:\"\\f18b\"}.flaticon-pasta:before{content:\"\\f18c\"}.flaticon-seasoning:before{content:\"\\f18d\"}.flaticon-terrace:before{content:\"\\f18e\"}.flaticon-fig:before{content:\"\\f18f\"}.flaticon-ice-cream-1:before{content:\"\\f190\"}.flaticon-fried-egg:before{content:\"\\f191\"}.flaticon-dinner:before{content:\"\\f192\"}.flaticon-restaurant:before{content:\"\\f193\"}.flaticon-noodles-1:before{content:\"\\f194\"}.flaticon-meal-3:before{content:\"\\f195\"}.flaticon-cutlery:before{content:\"\\f196\"}.flaticon-maki:before{content:\"\\f197\"}.flaticon-sushi:before{content:\"\\f198\"}.flaticon-sushi-1:before{content:\"\\f199\"}.flaticon-sushi-2:before{content:\"\\f19a\"}.flaticon-barbecue:before{content:\"\\f19b\"}.flaticon-sausage-2:before{content:\"\\f19c\"}.flaticon-shopping-basket:before{content:\"\\f19d\"}.flaticon-shopping-bag:before{content:\"\\f19e\";color:#fff}.flaticon-heart:before{content:\"\\f19f\"}.flaticon-like:before{content:\"\\f1a0\"}.flaticon-maximize:before{content:\"\\f1a1\"}.flaticon-zoom:before{content:\"\\f1a2\"}.flaticon-layers-1:before{content:\"\\f1a3\"}.flaticon-layers:before{content:\"\\f1a4\"}.navik-header{position:relative;z-index:998;font-size:16px;line-height:1.428572;background-color:rgba(165,161,161,.8);-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}.navik-header,.navik-header *,.navik-header:after,.navik-header :after,.navik-header:before,.navik-header :before{box-sizing:border-box}.navik-header ul{margin-bottom:inherit}.navik-header img{max-width:100%;height:auto;vertical-align:top}.navik-header a:active,.navik-header a:focus,.navik-header a:hover{text-decoration:none;outline:none}.navik-header .logo{padding:30px 40px;text-align:center}.navik-header .logo img{max-width:100%;height:auto}.navik-header-container{position:relative}.tel-lg{display:block}.tel-mb{display:none}.basket-lg{display:block}.basket-mb{display:none}@media (max-width:992px){.logo{display:flex;flex-direction:row;align-items:center}.tel-mb{display:block;color:#f7be27;font-size:20px;font-weight:500;margin-left:15px}.basket-lg,.tel-lg{display:none!important}.basket-mb{display:block;margin-left:10px}}.navik-menu>ul{display:none;padding:0 0 20px}.navik-menu ul li{position:relative}.navik-menu ul li>a{padding:14px 15px;font-family:\"Fira Sans\",sans-serif;font-size:15px;color:#212121;text-decoration:none;transition:all .2s ease-in-out}.navik-menu ul li.current-menu>a,.navik-menu ul li:hover>a{color:#26c6da;background-color:#f6f6f6}.navik-menu ul ul li>a{padding:14px 15px 14px 30px;font-size:14px;font-style:italic}.navik-menu ul ul li:hover>a,.navik-menu ul ul li>a{background-color:#efefef}.navik-menu ul ul ul li>a{padding:14px 15px 14px 45px}.navik-menu li>ul{display:none}.dropdown-plus{position:absolute;top:0;right:0;width:50px;height:50px;line-height:50px;cursor:pointer}.dropdown-plus:after,.dropdown-plus:before{position:absolute;top:27px;right:22px;width:15px;height:2px;content:\"\";background-color:#111}.dropdown-plus:after{transform:rotate(90deg)}.dropdown-plus.dropdown-open:after{display:none}.header-shadow-wrapper{position:absolute;top:100%;left:0;z-index:-1;width:100%;height:30px;overflow:hidden}.header-shadow-wrapper:after{position:relative;top:-60px;display:block;width:100%;height:60px;content:\"\";border-radius:50%;box-shadow:0 10px 30px -5px rgba(0,0,0,.1)}.burger-menu{position:absolute;top:33px;right:14px;display:flex;flex-direction:column;justify-content:space-between;width:27px;height:24px;cursor:pointer;transition:transform .33s ease-out}.burger-menu.menuopen{transform:rotate(-45deg)}.line-menu{width:100%;height:4px;background-color:#111;border-radius:2px}.line-menu.line-half{width:50%}.line-menu.first-line{transform-origin:right}.line-menu.first-line,.line-menu.last-line{transition:transform .33s cubic-bezier(.54,-.81,.57,.57)}.line-menu.last-line{align-self:flex-end;transform-origin:left}.menuopen .line-menu.first-line{transform:rotate(-90deg) translateX(3px)}.menuopen .line-menu.last-line{transform:rotate(-90deg) translateX(-3px)}.logoCenter{display:none}.center-menu-1 .navik-menu>ul:first-child{padding:0}.navik-header.header-dark{background-color:#111}.navik-header.header-dark .dropdown-plus:after,.navik-header.header-dark .dropdown-plus:before,.navik-header.header-dark .line-menu{background-color:#fff}.header-dark .navik-menu ul li>a{color:#fff}.header-dark .navik-menu ul li.current-menu>a,.header-dark .navik-menu ul li:hover>a{color:#26c6da;background-color:#313131}.header-dark .navik-menu ul ul li>a{color:#c1c1c1;background-color:#212121}.overlay-dropdown-plus{position:absolute;top:6px;right:30px;width:20px;height:20px;line-height:20px;cursor:pointer;opacity:0}.overlay-dropdown-plus:after,.overlay-dropdown-plus:before{position:absolute;top:9px;right:5px;width:10px;height:2px;content:\"\";background-color:#616161}.overlay-dropdown-plus:after{transform:rotate(90deg)}.overlay-dropdown-plus.overlay-dropdown-open:after{display:none}.navik-header-overlay{position:absolute;top:0;left:0;width:100%;font-size:16px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}.navik-header-overlay .navik-header-container{position:inherit}.navik-header-overlay img{max-width:100%;height:auto;vertical-align:top}.navik-header-overlay a:active,.navik-header-overlay a:focus,.navik-header-overlay a:hover{text-decoration:none;outline:none}.navik-header-overlay .logo{position:absolute;top:30px;left:15px;z-index:2}.navik-header-overlay .burger-menu{position:fixed;top:30px;right:15px;z-index:99999;display:block;flex-direction:inherit;justify-content:inherit;width:50px;height:47px;padding:15px;background:#111;transition:all .2s ease-in-out}.navik-header-overlay .burger-menu:hover{box-shadow:0 0 25px -1px rgba(0,0,0,.4)}.navik-header-overlay .burger-menu>span{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:17px;transition:transform .33s ease-out}.navik-header-overlay .burger-menu.menuopen{transform:rotate(0)}.navik-header-overlay .burger-menu.menuopen>span{transform:rotate(-45deg)}.nav-menu-wrapper,.navik-header-overlay .line-menu{background-color:#fff}.nav-menu-wrapper{position:fixed;top:0;left:0;z-index:9999;width:100%;height:100%;overflow:hidden;overflow-y:auto;visibility:hidden;opacity:0;transition:all .3s ease-in-out}.nav-menu-wrapper.overlay-menuopen{visibility:visible;opacity:1}.navik-menu-overlay{position:relative;display:table;width:100%;height:100%}.navik-menu-overlay>ul{display:table-cell;padding:80px 0 100px;text-align:right;vertical-align:middle}.navik-menu-overlay>ul>li{position:relative;padding:0 65px 0 15px;margin-bottom:12px}.navik-menu-overlay>ul>li:last-child{margin-bottom:0}.navik-menu-overlay>ul>li>.menu-overlay-link a{display:inline-block;font-size:28px;font-weight:800;line-height:1.2em;color:#212121;text-transform:uppercase;transition:color .2s ease-in-out}.navik-menu-overlay>ul>li>ul{display:none;padding:10px 0 20px}.navik-menu-overlay>ul>li>ul>li{position:relative}.navik-menu-overlay>ul>li>ul>li:after{position:absolute;top:3px;left:-18px;width:1px;height:13px;content:\"\";background-color:#d1d1d1;transform:rotate(30deg)}.navik-menu-overlay>ul>li>ul>li:first-child{margin-left:0}.navik-menu-overlay>ul>li>ul>li:first-child:after{display:none}.navik-menu-overlay>ul>li.menuFade>.menu-overlay-link .overlay-dropdown-plus,.navik-menu-overlay>ul>li.menuFade>.menu-overlay-link a,.navik-menu-overlay>ul>li.menuFade>ul{opacity:0}.navik-menu-overlay>ul>li li{display:inline}.navik-menu-overlay>ul>li.menuSlideIn .menu-overlay-link .overlay-dropdown-plus{-webkit-animation-name:menuFadeIn;animation-name:menuFadeIn;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.navik-menu-overlay>ul>li.menuSlideOut .menu-overlay-link .overlay-dropdown-plus{-webkit-animation-name:subMenuFadeOut;animation-name:subMenuFadeOut;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.navik-menu-overlay>ul ul{display:inline}.navik-menu-overlay>ul ul li{margin-left:32px}.navik-menu-overlay>ul ul li a{font-size:14px;font-style:italic;color:#818181;white-space:nowrap;transition:color .2s ease-in-out}.navik-menu-overlay>ul ul li a:hover{color:#26c6da!important}.navik-menu-overlay ul li a{font-family:\"Fira Sans\",sans-serif;text-decoration:none}.navik-menu-overlay.submenu-no-separate>ul>li>ul li:after{display:none!important}.navik-menu-overlay.submenu-no-separate>ul ul li{margin-left:20px}.navik-menu-overlay>ul>li.current-menu>.menu-overlay-link a,.navik-menu-overlay>ul>li>.menu-overlay-link a:hover,.overlay-dropdown-plus:hover+a,.overlay-menu-hover>.menu-overlay-link a{color:#26c6da!important}@-webkit-keyframes menuFadeInLeft{0%{opacity:0;transform:translate3d(-80px,0,0)}to{opacity:1;transform:none}}@keyframes menuFadeInLeft{0%{opacity:0;transform:translate3d(-80px,0,0)}to{opacity:1;transform:none}}@-webkit-keyframes menuFadeIn{0%{opacity:0}to{opacity:1}}@keyframes menuFadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes subMenuFadeOut{0%{opacity:1}to{opacity:0}}@keyframes subMenuFadeOut{0%{opacity:1}to{opacity:0}}.navik-menu-overlay>ul>li.menuSlideIn>.menu-overlay-link a,.navik-menu-overlay>ul>li.menuSlideIn>ul{-webkit-animation-name:menuFadeInLeft;animation-name:menuFadeInLeft;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.navik-menu-overlay>ul>li.menuSlideIn>ul{opacity:1;-webkit-animation-name:menuFadeIn;animation-name:menuFadeIn}}@supports (-ms-accelerator:true){.navik-menu-overlay>ul>li.menuSlideIn>ul{opacity:1;-webkit-animation-name:menuFadeIn;animation-name:menuFadeIn}}.overlay-center-menu .navik-menu-overlay>ul{text-align:center}.overlay-center-menu .navik-menu-overlay>ul>li{padding:0 15px}.overlay-center-menu .navik-menu-overlay>ul>li.menuSlideIn .menu-overlay-link .overlay-dropdown-plus{-webkit-animation-delay:0s;animation-delay:0s}.overlay-center-menu .navik-menu-overlay>ul>li.menuSlideIn>.menu-overlay-link a,.overlay-center-menu .navik-menu-overlay>ul>li.menuSlideIn>ul{-webkit-animation-name:menuFadeIn;animation-name:menuFadeIn}.overlay-center-menu .navik-menu-overlay>ul>li>ul{padding:15px 0 21px}.overlay-center-menu .menu-overlay-link{position:relative;display:inline-block}.overlay-center-menu .overlay-dropdown-plus{right:-30px}.overlay-submenu-close>li{-webkit-animation-name:subMenuFadeOut;animation-name:subMenuFadeOut;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.submenu-vertical>ul ul li{margin-left:0!important}.submenu-vertical>ul>li>ul li{position:relative;display:block;margin-bottom:5px}.submenu-vertical>ul>li>ul li:last-child{margin-bottom:0!important}.submenu-vertical>ul>li>ul li .overlay-dropdown-plus{top:1px;right:-35px}.submenu-vertical>ul>li>ul ul{display:none;padding-top:5px}.submenu-vertical>ul>li>ul>li:after{display:none}.submenu-vertical>ul>li.menuFade>ul{opacity:1}.submenu-vertical>ul>li.menuSlideIn>ul{-webkit-animation-name:none;animation-name:none}.submenu-vertical>ul>li.menuSlideIn ul:not(.overlay-submenu-close) a{display:inline-block;-webkit-animation-name:menuFadeInLeft;animation-name:menuFadeInLeft;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.submenu-vertical>ul>li ul{position:relative;right:-30px;padding-right:30px!important}.submenu-vertical>ul>li ul:not(.overlay-submenu-close) a{opacity:0}.submenu-vertical>ul>li.menuSlideOut li a{-webkit-animation-name:subMenuFadeOut;animation-name:subMenuFadeOut;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.overlay-center-menu .submenu-vertical>ul>li>ul li .overlay-dropdown-plus{right:-30px}.overlay-center-menu .submenu-vertical>ul>li ul{right:0!important;padding-right:0!important}.overlay-center-menu .submenu-vertical>ul>li.menuSlideIn ul:not(.overlay-submenu-close) a{-webkit-animation-name:menuFadeIn;animation-name:menuFadeIn}.menu-social-media{position:absolute;right:0;bottom:24px;width:100%;padding:0 65px;font-size:0;text-align:right}.menu-social-media a{position:relative;display:inline-block;width:30px;height:30px;margin:0 0 6px 6px;border:3px solid #212121;border-radius:50%;transition:opacity .2s ease-in-out}.menu-social-media a:hover{opacity:.8}.menu-social-media a img{position:absolute;top:50%;left:50%;width:auto;height:14px;transform:translate(-50%,-50%)}.overlay-center-menu .menu-social-media{padding:0 15px;text-align:center}.overlay-center-menu .menu-social-media a{margin:0 3px 6px}.menu-slide .navik-menu-overlay>ul{display:block;padding:120px 0 100px;text-align:left}.menu-slide .navik-menu-overlay>ul>li{padding:0 35px 0 30px}.menu-slide .navik-menu-overlay>ul>li>ul{padding-top:25px}.menu-slide .navik-menu-overlay>ul>li>ul ul{display:none;padding-top:5px;padding-left:20px}.menu-slide .navik-menu-overlay>ul>li>ul li{position:relative;margin-bottom:5px;margin-left:0!important}.menu-slide .navik-menu-overlay>ul>li>ul>li:after{display:none}.menu-slide .navik-menu-overlay>ul>li ul .overlay-dropdown-plus{top:-1px;right:-5px}.menu-slide .navik-menu-overlay>ul>li.menuSlideIn>ul{opacity:1;-webkit-animation-name:none;animation-name:none}.menu-slide .navik-menu-overlay>ul>li.menuSlideIn .menu-overlay-link .overlay-dropdown-plus{-webkit-animation-duration:.6s;animation-duration:.6s}.menu-slide .navik-menu-overlay>ul>li li{display:block}.menu-slide .navik-menu-overlay>ul ul li a{position:relative;display:block;padding-left:20px;transition:all .2s ease-in-out}.menu-slide .navik-menu-overlay>ul ul li a:before{position:absolute;top:2px;left:5px;width:1px;height:13px;content:\"\";background-color:#d1d1d1;transform:rotate(30deg)}.menu-slide .navik-menu-overlay>ul ul li a:hover{padding-left:30px}.menu-slide .navik-menu-overlay>ul ul:not(.overlay-submenu-close) a{-webkit-animation-delay:.2s;animation-delay:.2s}.menu-slide .navik-menu-overlay.submenu-no-separate>ul ul li a{padding-left:15px}.menu-slide .navik-menu-overlay.submenu-no-separate>ul ul li a:before{display:none!important}.menu-slide .navik-menu-overlay.submenu-no-separate>ul ul li a:hover{padding-left:25px}.menu-slide .navik-menu-overlay .menu-overlay-link{padding-right:30px}.menu-slide .nav-menu-wrapper{right:0;left:inherit;width:320px;visibility:visible;opacity:1;transform:translateX(100%);transition-duration:.4s}.menu-slide .nav-menu-wrapper.overlay-menuopen{box-shadow:-15px 0 60px -5px rgba(0,0,0,.3);transform:translateX(0)}.menu-slide .menu-social-media{right:inherit;left:0;padding:0 30px;text-align:left}.menu-slide .menu-social-media a{margin:0 6px 6px 0}.slidemenu-bg-overlay{position:fixed;top:0;left:0;z-index:999;width:100%;height:100%;visibility:hidden;background-color:rgba(0,0,0,.6);opacity:0;transition:all .3s ease-in-out;transition-delay:.1s}.overlay-menuopen+.slidemenu-bg-overlay{visibility:visible;opacity:1;transition-delay:0s}@-webkit-keyframes menuFadeInRight{0%{opacity:0;transform:translate3d(40px,0,0)}to{opacity:1;transform:none}}@keyframes menuFadeInRight{0%{opacity:0;transform:translate3d(40px,0,0)}to{opacity:1;transform:none}}.menu-slide .navik-menu-overlay>ul>li.menuSlideIn>.menu-overlay-link a,.menu-slide .navik-menu-overlay>ul>li.menuSlideIn ul:not(.overlay-submenu-close) a{-webkit-animation-name:menuFadeInRight;animation-name:menuFadeInRight;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.header-dark .nav-menu-wrapper{background-color:#111}.header-dark .navik-menu-overlay>ul>li>.menu-overlay-link a{color:#fff}.header-dark .navik-menu-overlay>ul ul li a{color:#a1a1a1}.header-dark .overlay-dropdown-plus:after,.header-dark .overlay-dropdown-plus:before{background-color:#717171}.header-dark .menu-social-media a{border-color:#fff;opacity:.2}.header-dark .menu-social-media a:hover{opacity:1}.navik-header-overlay.header-dark .burger-menu.menuopen{background-color:#000}.header-dark .navik-menu-overlay>ul>li>ul>li:after,.menu-slide.header-dark .navik-menu-overlay>ul ul li a:before{background-color:#515151!important}.header-color-bg .nav-menu-wrapper{background-color:#006aa1}.header-color-bg .navik-menu-overlay>ul>li>.menu-overlay-link a,.header-color-bg .navik-menu-overlay>ul ul li a{color:#fff}.header-color-bg .menu-social-media a{border-color:#fff}.header-color-bg .navik-menu-overlay>ul>li>ul li:after,.header-color-bg .overlay-dropdown-plus:after,.header-color-bg .overlay-dropdown-plus:before,.menu-slide.header-color-bg .navik-menu-overlay>ul ul li a:before{background-color:#fff!important}.header-color-bg .navik-menu-overlay>ul>li.current-menu>.menu-overlay-link a,.header-color-bg .overlay-dropdown-plus:hover+a,.header-color-bg .overlay-menu-hover>.menu-overlay-link a{color:#fff!important}.header-color-bg .navik-menu-overlay>ul>li>.menu-overlay-link a:hover,.header-color-bg .navik-menu-overlay>ul ul li a:hover{color:hsla(0,0%,100%,.8)!important}.header-bg-image .nav-menu-wrapper{background-color:inherit;background-repeat:no-repeat;background-position:50%;background-size:cover}.header-bg-image .navik-menu-overlay>ul>li>.menu-overlay-link a{color:#fff}.header-bg-image .navik-menu-overlay>ul>li>ul>li:after{background-color:hsla(0,0%,100%,.25)!important}.header-bg-image .navik-menu-overlay>ul ul li a{color:hsla(0,0%,100%,.6)}.header-bg-image .overlay-dropdown-plus:after,.header-bg-image .overlay-dropdown-plus:before{background-color:#fff}.header-bg-image .menu-social-media a{border-color:#fff}.header-bg-image .menu-social-media a:hover{opacity:.6}.navik-fixed-sidebar{position:fixed;top:0;z-index:9999999;width:250px;height:100%;overflow-y:auto;background-color:#fff;transition:all .4s ease-in-out}.navik-fixed-sidebar+.burger-menu{position:fixed;top:30px;right:15px;z-index:9999999;display:block;flex-direction:inherit;justify-content:inherit;width:50px;height:47px;padding:15px;background:#111;transition:all .2s ease-in-out}.navik-fixed-sidebar+.burger-menu>span{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:17px;transition:transform .33s ease-out}.navik-fixed-sidebar+.burger-menu .line-menu{background-color:#fff}.navik-fixed-sidebar+.burger-menu.menuopen{transform:rotate(0)}.navik-fixed-sidebar+.burger-menu.menuopen>span{transform:rotate(-45deg)}.navik-fixed-sidebar .navik-header-container{display:flex;flex-wrap:wrap;height:100%;padding:0 28px}.navik-fixed-sidebar .menu-social-media{position:inherit;bottom:inherit;align-self:flex-end;padding:0 0 30px!important;text-align:left}.navik-fixed-sidebar .menu-social-media a{margin:0 6px 6px 0}.navik-fixed-sidebar .menu-social-media a:last-child{margin-right:0}.navik-fixed-sidebar .logo{display:none;padding:70px 0}.body-fixed-sidebar{overflow-x:hidden}.navik-sidebar-left{left:0;box-shadow:2px 0 12px -2px rgba(0,0,0,.15);transform:translateX(-100%)}.navik-sidebar-left.fixed-sidebar-open{transform:translateX(0)}.navik-sidebar-left.fixed-sidebar-open~.navik-side-content{transform:translateX(125px)}.navik-sidebar-left+.burger-menu{top:0;right:inherit;left:0}.navik-sidebar-right{right:0;box-shadow:-2px 0 12px -2px rgba(0,0,0,.15);transform:translateX(100%)}.navik-sidebar-right.fixed-sidebar-open{transform:translateX(0)}.navik-sidebar-right.fixed-sidebar-open~.navik-side-content{transform:translateX(-125px)}.navik-sidebar-right+.burger-menu{top:0;right:0}.fixedsidebar-bg-overlay{position:fixed;top:0;left:0;z-index:999999;width:100%;height:100%;visibility:hidden;background-color:rgba(0,0,0,.6);opacity:0;transition:all .3s ease-in-out}.navik-side-content{transition:all .4s ease-in-out}.navik-side-content>.logo{position:fixed;top:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;width:100%;height:47px;padding:0 50px;text-align:center;background-color:#fff;box-shadow:0 2px 12px -2px rgba(0,0,0,.15)}.navik-side-content>.logo img{width:auto;max-width:inherit;max-height:47px}.fixed-sidebar-open~.fixedsidebar-bg-overlay{visibility:visible;opacity:1}.fixed-menu-wrap{width:100%}.navik-menu-fixed{padding-top:90px}.navik-menu-fixed ul li{position:relative}.navik-menu-fixed ul li a{display:block;padding-right:17px;font-family:\"Fira Sans\",sans-serif;transition:all .2s ease-in-out}.navik-menu-fixed>ul{margin-bottom:40px}.navik-menu-fixed>ul>li{margin-bottom:14px}.navik-menu-fixed>ul>li:last-child{margin-bottom:0}.navik-menu-fixed>ul>li>a{font-size:18px;font-weight:700;color:#212121;text-transform:uppercase}.navik-menu-fixed>ul>li>ul{padding:27px 0 15px}.navik-menu-fixed>ul>li>ul ul{padding-top:6px}.navik-menu-fixed>ul>li>ul>li ul{padding-left:18px}.navik-menu-fixed>ul ul{display:none;opacity:0;transition:opacity .3s ease-in-out}.navik-menu-fixed>ul ul.submenu-collapse{opacity:1}.navik-menu-fixed>ul ul li{margin-bottom:6px}.navik-menu-fixed>ul ul li:last-child{margin-bottom:0}.navik-menu-fixed>ul ul a{position:relative;padding-left:18px;font-size:14px;font-style:italic;color:#818181}.navik-menu-fixed>ul ul a:before{position:absolute;top:3px;left:4px;width:1px;height:12px;content:\"\";background-color:#d1d1d1;transform:rotate(30deg)}.navik-menu-fixed>ul ul a:hover{padding-left:24px}.navik-menu-fixed>ul ul .overlay-dropdown-plus{top:-3px}.navik-menu-fixed .overlay-dropdown-plus{top:-1px;right:-7px;opacity:1}.navik-menu-fixed.submenu-no-separate>ul ul a{padding-left:12px}.navik-menu-fixed.submenu-no-separate>ul ul a:before{display:none!important}.navik-menu-fixed.submenu-no-separate>ul ul a:hover{padding-left:18px}.navik-menu-fixed.submenu-no-separate>ul>li>ul>li ul{padding-left:12px}.navik-menu-fixed>ul>li.current-menu>a,.navik-menu-fixed ul li:hover>a{color:#26c6da!important}.navik-fixed-sidebar.sidebar-dark{background-color:#111}.navik-fixed-sidebar.sidebar-dark .menu-social-media a{border-color:#fff;opacity:.2}.navik-fixed-sidebar.sidebar-dark .menu-social-media a:hover{opacity:1}.sidebar-dark~.navik-side-content>.logo{background-color:#111}.sidebar-dark .navik-menu-fixed>ul>li>a{color:#fff}.sidebar-dark .navik-menu-fixed>ul ul a{color:#a1a1a1}.sidebar-dark .navik-menu-fixed>ul ul a:before{background-color:#515151}.sidebar-dark .overlay-dropdown-plus:after,.sidebar-dark .overlay-dropdown-plus:before{background-color:#717171}.navik-fixed-sidebar.sidebar-color-bg{background-color:#006aa1}.navik-fixed-sidebar.sidebar-color-bg .menu-social-media a{border-color:#fff}.sidebar-color-bg~.navik-side-content>.logo{background-color:#006aa1}.sidebar-color-bg .navik-menu-fixed ul li a:hover{color:hsla(0,0%,100%,.8)!important}.sidebar-color-bg .navik-menu-fixed>ul>li>a,.sidebar-color-bg .navik-menu-fixed>ul ul a{color:#fff!important}.sidebar-color-bg .navik-menu-fixed>ul ul a:before,.sidebar-color-bg .overlay-dropdown-plus:after,.sidebar-color-bg .overlay-dropdown-plus:before{background-color:#fff}.navik-menu .mega-menu-container{padding:15px 30px 0}.navik-menu .mega-menu-container ul li{position:relative}.navik-menu .mega-menu-container ul li a{padding:inherit;font-style:inherit;color:inherit;background-color:inherit}.navik-menu .mega-menu-container ul li:hover a{background-color:inherit}.navik-menu .mega-menu-container li>ul{display:block}.navik-menu .mega-menu>ul .dropdown-plus{display:none}.navik-menu{margin-bottom:20px}.navik-menu .mega-menu-heading{font-size:18px;color:#212121;text-transform:uppercase;margin-bottom:10px}.navik-menu .mega-menu-heading a{color:#212121;text-decoration:none;transition:color .2s ease-in-out}.navik-menu .mega-menu-desc{color:#666;font-size:15px;line-height:1.5}.navik-menu ul.mega-menu-list li a{padding:5px 0;font-size:14px;font-style:italic;color:#818181}.navik-menu ul.mega-menu-list li a:hover{color:#26c6da}.navik-menu ul.mega-menu-list ul{padding-left:15px!important}.navik-menu .mega-menu-thumbnail{margin-bottom:15px}.navik-menu .mega-menu-thumbnail img{width:100%;height:auto}.navik-menu .mega-menu-thumbnail>a{position:relative;display:block}.navik-menu .mega-menu-thumbnail>a:before{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";background-color:transparent;transition:background-color .2s ease-in-out}.navik-menu .mega-menu-thumbnail:hover>a:before{background-color:rgba(0,0,0,.2)}.header-dark .navik-menu .mega-menu-container ul li a{background-color:inherit}.header-dark .navik-menu .mega-menu-heading a{color:#fff}.navik-menu .navik-menu-icon{margin-right:5px;color:#a1a1a1}.navik-menu .mega-menu-heading a .navik-menu-icon,.navik-menu ul li>a .navik-menu-icon{transition:color .2s ease-in-out}.navik-menu .mega-menu-heading a:hover .navik-menu-icon,.navik-menu ul li.current-menu>a .navik-menu-icon,.navik-menu ul li:hover>a .navik-menu-icon{color:#26c6da!important}.header-dark .navik-menu .navik-menu-icon{color:#717171}.navik-menu-overlay .navik-menu-icon{position:relative;top:-2px;margin-right:10px}.navik-menu-overlay>ul ul li a .navik-menu-icon{top:-1px;margin-right:7px}.menu-slide .navik-menu-overlay>ul ul li a .navik-menu-icon,.navik-menu-fixed .navik-menu-icon{margin-right:5px}@media (max-width:767.98px){.body-fixed-sidebar,.navik-header,.navik-header-overlay{width:100%}}@media (max-width:1199.98px){.body-fixed-sidebar,.navik-header,.navik-header-overlay{width:100%}}@media (min-width:768px){.navik-header .logo{float:left;padding:30px 40px 30px 0}.navik-menu{clear:both}.header-shadow-wrapper:after{box-shadow:0 10px 40px -5px rgba(0,0,0,.1)}.overlay-dropdown-plus{top:7px;right:43px;width:24px;height:24px;line-height:24px}.overlay-dropdown-plus:after,.overlay-dropdown-plus:before{top:11px;right:7px}.navik-header-overlay .logo{left:30px}.navik-header-overlay .burger-menu{right:30px}.navik-menu-overlay>ul>li{padding:0 110px 0 30px;margin-bottom:16px}.navik-menu-overlay>ul>li>.menu-overlay-link a{font-size:34px}.navik-menu-overlay>ul>li>ul{padding:13px 0 16px}.navik-menu-overlay>ul>li>ul>li:after{top:1px;left:-23px;height:16px}.navik-menu-overlay>ul ul li{margin-left:42px}.navik-menu-overlay>ul ul li a{font-size:16px}.navik-menu-overlay.submenu-no-separate>ul ul li{margin-left:25px}.overlay-center-menu .navik-menu-overlay>ul>li{padding:0 30px}.overlay-center-menu .navik-menu-overlay>ul>li>ul{padding:18px 0 21px}.overlay-center-menu .menu-social-media{padding:0 40px}.overlay-center-menu .overlay-dropdown-plus,.overlay-center-menu .submenu-vertical>ul>li>ul li .overlay-dropdown-plus{right:-42px}.submenu-vertical>ul>li ul{right:-60px;padding-right:60px!important}.submenu-vertical>ul>li>ul li{margin-bottom:7px}.submenu-vertical>ul>li>ul li .overlay-dropdown-plus{top:-2px;right:-67px}.submenu-vertical>ul>li>ul ul{padding-top:7px}.menu-social-media{bottom:34px;padding:0 110px}.menu-slide .nav-menu-wrapper{width:400px}.menu-slide .navik-menu-overlay>ul{padding:140px 0 100px}.menu-slide .navik-menu-overlay>ul>li{padding:0 60px 0 45px;margin-bottom:14px}.menu-slide .navik-menu-overlay>ul>li>ul{padding:28px 0 16px}.menu-slide .navik-menu-overlay>ul>li>ul li{margin-bottom:7px}.menu-slide .navik-menu-overlay>ul>li>ul ul{padding-top:7px;padding-left:23px}.menu-slide .navik-menu-overlay>ul>li ul .overlay-dropdown-plus{top:-2px;right:-17px}.menu-slide .navik-menu-overlay>ul ul li a{padding-left:23px}.menu-slide .navik-menu-overlay>ul ul li a:hover{padding-left:33px}.menu-slide .navik-menu-overlay>ul ul li a:before{height:15px}.menu-slide .menu-social-media{padding:0 45px}.navik-menu .mega-menu-media{display:table;width:100%}.navik-menu .mega-menu-media-img{display:table-cell;width:120px;vertical-align:top}.navik-menu .mega-menu-media-img .mega-menu-thumbnail{margin-bottom:0}.navik-menu .mega-menu-media-img img{width:100%;height:auto}.navik-menu .mega-menu-media-info{display:table-cell;padding-left:20px;vertical-align:top}.navik-menu-overlay .navik-menu-icon{margin-right:12px}.navik-menu-overlay>ul ul li a .navik-menu-icon{margin-right:8px}.menu-slide .navik-menu-overlay .navik-menu-icon{margin-right:10px}}@media (min-width:1200px){.navik-header-container{height:80px}.navik-header .logo{position:relative;top:50%;padding:0;transform:translateY(-50%)}.navik-header .logo img{width:auto;max-width:inherit;max-height:80px}#header-3 .navik-header .logo img{max-height:68px}.burger-menu{display:none}.navik-menu{float:right;clear:inherit}.navik-menu>ul{display:block!important;padding:0;font-size:0}.navik-menu>ul>li{display:inline-block}.navik-menu>ul>li>a{position:relative;box-sizing:border-box;height:80px;padding:0 14px;line-height:80px;white-space:nowrap}.navik-menu>ul>li:last-child>a{padding:0 0 0 20px}.navik-menu ul li{position:relative}.navik-menu ul li.dropdown_menu>a>span{display:none}.navik-menu ul li.dropdown_menu>a>span:before{position:relative;top:-3px;box-sizing:content-box;display:inline-block;width:4px;height:4px;margin-left:8px;content:\"\";border-style:solid;border-width:2px 2px 0 0;transform:rotate(135deg)}.navik-menu ul ul li.dropdown_menu>a>span:before{top:7px;right:-10px;float:right;margin:0;transform:rotate(45deg)}.navik-menu ul ul li>a{position:relative;padding:9px 25px 7px!important;color:#818181;background-color:transparent}.navik-menu ul ul li:hover>a{padding-left:35px!important;color:#818181;background-color:transparent}.navik-menu ul ul li:hover>a:before{width:10px}.navik-menu li>ul{position:absolute;top:100%;left:0;display:block!important;width:220px;padding:12px 0;visibility:hidden;background-color:#fff;box-shadow:0 12px 30px -2px rgba(0,0,0,.1);opacity:0;transition:all .2s ease-in-out}.navik-menu li>ul ul{top:-27px;left:100%}.navik-menu li:hover>ul{visibility:visible;opacity:1}.navik-menu li.submenu-right>ul{right:0;left:inherit}.navik-menu li.submenu-right>ul ul{left:-100%!important}.navik-menu.menu-caret ul li.dropdown_menu>a>span{display:inline-block}.navik-menu.menu-caret ul ul li.dropdown_menu>a>span{display:inline}.navik-menu.separate-line>ul>li>a{position:relative;padding:0 28px}.navik-menu.separate-line>ul>li>a:before{position:absolute;top:50%;right:0;width:1px;height:20px;content:\"\";background-color:#eee;transform:translateY(-50%)}.navik-menu.separate-line>ul>li:last-child>a{padding:0 0 0 28px}.navik-menu.separate-line>ul>li:last-child>a:before{display:none}.header-dark .navik-menu ul li.dropdown_menu>a>span:before{border-color:#a1a1a1}.header-dark .navik-menu ul ul li>a{color:#a1a1a1;background-color:transparent}.header-dark .navik-menu ul ul li:hover>a{color:#fff;background-color:transparent}.header-dark .navik-menu ul ul li:hover>a .navik-menu-icon{color:#fff!important}.header-dark .navik-menu li>ul{background-color:#111}.header-dark .navik-menu.separate-line>ul>li>a:before{background-color:#333}.center-menu-1 .navik-menu>ul>li:last-child>a,.center-menu-2 .navik-menu>ul>li:last-child>a,.navik-menu.menu-hover-2>ul>li:last-child>a,.navik-menu.menu-hover-3>ul>li:last-child>a,.navik-menu.menu-hover-4>ul>li:last-child>a{padding:0 14px}.center-menu-1 .navik-menu.separate-line>ul>li:last-child>a,.center-menu-2 .navik-menu.separate-line>ul>li:last-child>a,.navik-menu.menu-hover-2.separate-line>ul>li:last-child>a,.navik-menu.menu-hover-3.separate-line>ul>li:last-child>a,.navik-menu.menu-hover-4.separate-line>ul>li:last-child>a{padding:0 28px}.header-dark .navik-menu ul li.current-menu>a,.header-dark .navik-menu ul li:hover>a,.navik-menu ul li.current-menu>a,.navik-menu ul li:hover>a{background-color:inherit}.dropdown-plus{display:none}.navik-header.sticky{position:fixed;width:100%;-webkit-animation-name:stickyTransition;animation-name:stickyTransition;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;box-shadow:0 2px 3px rgba(96,96,96,.1)}.navik-header.sticky .navik-header-container{height:80px}#header-2 .navik-header.sticky .navik-header-container,#header-4 .navik-header.sticky .navik-header-container{height:70px}.navik-header.sticky .navik-menu>ul>li>a{height:80px;line-height:80px}#header-2 .navik-header.sticky .navik-menu>ul>li>a{height:70px;line-height:70px}.navik-header.sticky .logo{padding:5px 40px 5px 0}.navik-header.sticky .logo img{max-height:70px}@-webkit-keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.navik-header.center-menu-1{position:relative}.navik-header.center-menu-1.sticky{position:fixed}.navik-header.center-menu-1.sticky .logo{padding:0}.navik-header.center-menu-1 .navik-header-container>.logo{display:none}.navik-header.center-menu-1 .logoCenter .logo{top:0;float:none;width:inherit;transform:translateY(0)}.navik-header.center-menu-2 .navik-header-container{height:auto}.navik-header.center-menu-2 .logo{top:0;float:none;padding:20px 30px;transform:translateY(0)}.navik-header.center-menu-2 .logo img{width:auto;max-width:inherit;max-height:90px}.navik-header.center-menu-2.sticky .logo{display:none}.navik-header.center-menu-2.sticky .navik-menu{border:none}.logoCenter{display:table-cell!important;text-align:center;vertical-align:middle}.center-menu-1 .navik-menu{display:table!important;float:none;width:100%}.center-menu-1 .navik-menu>ul{display:table-cell!important;vertical-align:top}.center-menu-1 .navik-menu>ul:first-child{padding:0 40px;text-align:right}.center-menu-1 .navik-menu>ul:first-child ul{text-align:left}.center-menu-1 .navik-menu>ul:last-child{padding:0 40px;text-align:left}.center-menu-2 .navik-menu{float:none;text-align:center;border-top:1px solid #e9e9e9}.center-menu-2 .navik-menu li>ul{text-align:left}.center-menu-2 .navik-menu>ul>li>a{height:62px;line-height:62px}.center-menu-2.header-dark .navik-menu{border-color:#333}.navik-header.header-opacity-on,.navik-header.header-transparent-on{position:absolute;width:100%;background-color:transparent}.navik-header.header-opacity-on{background-color:rgba(0,0,0,.3)}.header-opacity-on .header-shadow-wrapper,.header-transparent-on .header-shadow-wrapper{display:none}.header-opacity-on .navik-menu>ul>li>a,.header-transparent-on .navik-menu>ul>li>a{color:#181818}.header-opacity-on .navik-menu>ul>li>a .navik-menu-icon,.header-transparent-on .navik-menu>ul>li>a .navik-menu-icon{color:hsla(0,0%,100%,.85)}.header-opacity-on .navik-menu>ul>li.current-menu>a,.header-opacity-on .navik-menu>ul>li:hover>a,.header-transparent-on .navik-menu>ul>li.current-menu>a,.header-transparent-on .navik-menu>ul>li:hover>a{color:#26c6da}.header-opacity-on .navik-menu>ul>li.dropdown_menu>a>span:before,.header-transparent-on .navik-menu>ul>li.dropdown_menu>a>span:before{border-color:#f7f7f7}.header-transparent-on.center-menu-2 .navik-menu{border-color:hsla(0,0%,100%,.25)}.header-transparent-on .navik-menu.separate-line>ul>li>a:before{background-color:hsla(0,0%,100%,.25)}.header-opacity-on.center-menu-2 .navik-menu{border-color:hsla(0,0%,100%,.2)}.header-opacity-on .navik-menu.separate-line>ul>li>a:before{background-color:hsla(0,0%,100%,.2)}.navik-menu.menu-hover-2>ul>li.current-menu>a,.navik-menu.menu-hover-2>ul>li:hover>a{color:#212121;background-color:#f8f8f8}.navik-menu.menu-hover-2>ul>li.current-menu>a:after,.navik-menu.menu-hover-2>ul>li:hover>a:after{opacity:1}.navik-menu.menu-hover-2>ul>li>a:after,.navik-menu.menu-hover-3>ul>li>a:after{position:absolute;bottom:-3px;left:0;z-index:0;width:100%;height:3px;content:\"\";background-color:#26c6da;opacity:0;transition:all .2s ease-in-out}.navik-menu.menu-hover-3>ul>li.current-menu>a,.navik-menu.menu-hover-3>ul>li:hover>a{color:#212121}.navik-menu.menu-hover-3>ul>li.current-menu>a:after,.navik-menu.menu-hover-3>ul>li:hover>a:after{width:100%;opacity:1}.navik-menu.menu-hover-3>ul>li>a:after{left:50%;width:0;transition:all .3s ease-in-out;transform:translateX(-50%)}.navik-menu.menu-hover-4>ul>li>a>.hover-transition{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;overflow:hidden}.navik-menu.menu-hover-4>ul>li>a>.hover-transition:after{position:relative;top:50%;left:50%;display:block;width:calc(100% + 2px);height:0;content:\"\";background-color:#26c6da;opacity:0;transition:all .2s ease-in-out;transform:translate(-50%,-50%)}.navik-menu.menu-hover-4>ul>li.current-menu>a,.navik-menu.menu-hover-4>ul>li:hover>a{color:#fff}.navik-menu.menu-hover-4>ul>li.current-menu>a>.hover-transition:after,.navik-menu.menu-hover-4>ul>li:hover>a>.hover-transition:after{height:100%;opacity:1;transform:translate(-50%,-50%)}.navik-menu.menu-hover-4>ul>li.current-menu>a .navik-menu-icon,.navik-menu.menu-hover-4>ul>li:hover>a .navik-menu-icon{color:#fff!important}.navik-menu.menu-hover-4>ul>li>ul{transition-delay:0s}.navik-menu.menu-hover-4>ul>li:hover>ul{transition-delay:.13s}.navik-menu.menu-hover-4>ul>li.dropdown_menu.current-menu>a>span:before,.navik-menu.menu-hover-4>ul>li.dropdown_menu:hover>a>span:before{border-color:#fff}.header-dark .navik-menu.menu-hover-2>ul>li.current-menu>a,.header-dark .navik-menu.menu-hover-2>ul>li:hover>a{color:#fff;background-color:#222}.header-dark .navik-menu.menu-hover-3>ul>li.current-menu>a,.header-dark .navik-menu.menu-hover-3>ul>li:hover>a{color:#fff}.header-transparent-on .navik-menu.menu-hover-2>ul>li.current-menu>a,.header-transparent-on .navik-menu.menu-hover-2>ul>li:hover>a{color:#f7f7f7;background-color:hsla(0,0%,100%,.25)}.header-opacity-on .navik-menu.menu-hover-2>ul>li.current-menu>a,.header-opacity-on .navik-menu.menu-hover-2>ul>li:hover>a{color:#f7f7f7;background-color:hsla(0,0%,100%,.2)}.header-opacity-on .navik-menu.menu-hover-3>ul>li.current-menu>a,.header-opacity-on .navik-menu.menu-hover-3>ul>li:hover>a,.header-transparent-on .navik-menu.menu-hover-3>ul>li.current-menu>a,.header-transparent-on .navik-menu.menu-hover-3>ul>li:hover>a{color:#f7f7f7}.header-opacity-on .navik-menu.menu-hover-2>ul>li.current-menu>a .navik-menu-icon,.header-opacity-on .navik-menu.menu-hover-2>ul>li:hover>a .navik-menu-icon,.header-opacity-on .navik-menu.menu-hover-3>ul>li.current-menu>a .navik-menu-icon,.header-opacity-on .navik-menu.menu-hover-3>ul>li:hover>a .navik-menu-icon,.header-transparent-on .navik-menu.menu-hover-2>ul>li.current-menu>a .navik-menu-icon,.header-transparent-on .navik-menu.menu-hover-2>ul>li:hover>a .navik-menu-icon,.header-transparent-on .navik-menu.menu-hover-3>ul>li.current-menu>a .navik-menu-icon,.header-transparent-on .navik-menu.menu-hover-3>ul>li:hover>a .navik-menu-icon{color:hsla(0,0%,100%,.85)!important}.navik-menu.submenu-top-border li>ul{border-top:3px solid #26c6da}.navik-menu.submenu-top-border li>ul ul{top:-30px}.navik-menu.submenu-top-border.submenu-list-border li>ul ul{top:-23px}.navik-menu.submenu-list-border li>ul ul{top:-20px}.navik-menu.submenu-list-border ul ul li>a{padding:15px 35px 14px!important}.navik-menu.submenu-list-border ul ul li:first-child>a{padding:8px 35px 14px!important}.navik-menu.submenu-list-border ul ul li:last-child>a{padding:15px 35px 8px!important}.navik-menu.submenu-list-border ul ul li:last-child:after{display:none}.navik-menu.submenu-list-border ul ul li:after{position:absolute;right:35px;bottom:0;left:35px;height:1px;content:\"\";background-color:#eee}.navik-menu.submenu-list-border ul ul li:hover>a{padding-left:55px!important}.navik-menu.submenu-list-border ul ul li:nth-child(n+2)>a:before{top:24px}.header-dark .navik-menu.submenu-list-border ul ul li:after{background-color:#333}.navik-menu.submenu-flip li>ul{transform-origin:0 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:all .35s ease-in-out;transform:rotateX(-90deg)}.navik-menu.submenu-flip li:hover>ul{transform:rotateX(0deg)}.navik-menu.submenu-flip ul,.navik-menu.submenu-flip ul li{transform-style:preserve-3d;perspective:200px}.navik-menu.submenu-scale li>ul{transform-origin:0 0;transition:all .3s ease;transform:scale(0)}.navik-menu.submenu-scale li.submenu-right ul{transform-origin:100% 0}.navik-menu.submenu-scale li:hover>ul{transform:scale(1)}.overlay-dropdown-plus{right:53px}.navik-header-overlay .navik-header-container{height:auto}.navik-header-overlay .logo{top:50px;left:40px}.navik-header-overlay .burger-menu{top:40px;right:40px}.navik-menu-overlay>ul>li{padding:0 130px 0 40px}.overlay-center-menu .navik-menu-overlay>ul>li{padding:0 40px}.submenu-vertical>ul>li ul{right:-70px;padding-right:70px!important}.submenu-vertical>ul>li>ul li .overlay-dropdown-plus{right:-77px}.menu-slide .navik-menu-overlay>ul>li ul .overlay-dropdown-plus{right:-7px}.menu-social-media{padding:0 130px}.navik-mega-menu.mega-menu-fullwidth .navik-header-container{position:inherit}.navik-mega-menu.mega-menu-fullwidth,.navik-mega-menu .navik-header-container{transform-style:preserve-3d;perspective:200px}.navik-menu .mega-menu-container{padding:15px 15px 0}.mega-menu-box,.mega-menu-box.last-menu-box{margin-bottom:25px}.navik-menu .mega-menu-container ul.mega-menu-list li>a:before{top:13px!important;left:0;display:block}.navik-menu.submenu-flip .mega-menu>ul{perspective:inherit}.navik-menu.submenu-flip .mega-menu-container li>ul{transform:rotateX(0deg)}.navik-menu.submenu-scale .mega-menu-container li>ul{transform:scale(1)}.navik-menu ul li.mega-menu{position:inherit;font-size:medium}.navik-menu li.mega-menu>ul{width:100%;padding:25px 20px 15px}.navik-menu li.mega-menu:hover .mega-menu-container li>ul{visibility:visible;opacity:1}.navik-menu li.mega-menu.submenu-right>ul ul{left:inherit!important}.navik-mega-menu.mega-menu-fullwidth .navik-header-container,.navik-mega-menu .navik-menu.submenu-flip>ul,.navik-mega-menu .navik-menu.submenu-flip ul li.mega-menu{transform-style:unset;perspective:none}.navik-menu.submenu-scale li.mega-menu.submenu-right ul,.navik-menu.submenu-scale li.mega-menu ul{transform-origin:50% 0}.navik-menu .mega-menu-container li ul,.navik-menu.submenu-list-border .mega-menu-container li ul,.navik-menu.submenu-top-border .mega-menu-container li ul{position:relative;top:0!important;left:inherit;width:100%;padding:0;border-top:none;box-shadow:inherit}.navik-menu .mega-menu-container ul li>a:before,.navik-menu.menu-caret .mega-menu-container li.dropdown_menu>a>span,.navik-menu.submenu-list-border .mega-menu-container ul li:after{display:none}.navik-menu .mega-menu-container ul li:hover a,.navik-menu .mega-menu-container ul li a,.navik-menu.submenu-list-border .mega-menu-container ul li:first-child:hover a,.navik-menu.submenu-list-border .mega-menu-container ul li:first-child a,.navik-menu.submenu-list-border .mega-menu-container ul li:hover a,.navik-menu.submenu-list-border .mega-menu-container ul li:last-child:hover a,.navik-menu.submenu-list-border .mega-menu-container ul li:last-child a,.navik-menu.submenu-list-border .mega-menu-container ul li a{padding:inherit!important}.navik-menu .mega-menu-container ul.mega-menu-list li:hover a,.navik-menu .mega-menu-container ul.mega-menu-list li a,.navik-menu.submenu-list-border .mega-menu-container ul.mega-menu-list li:hover a,.navik-menu.submenu-list-border .mega-menu-container ul.mega-menu-list li a{padding:5px 0!important;color:#818181}.navik-menu .mega-menu-container ul.mega-menu-list li a:hover,.navik-menu.submenu-list-border .mega-menu-container ul.mega-menu-list li a:hover{padding-left:20px!important}.header-dark .navik-menu .mega-menu-container ul.mega-menu-list li a{color:#a1a1a1}.header-dark .navik-menu .mega-menu-container ul.mega-menu-list li a:hover{color:#fff}.navik-fixed-sidebar{transition-duration:0s}.navik-fixed-sidebar .logo{display:block}.navik-side-content{width:calc(100% - 250px)}.fixedsidebar-bg-overlay,.navik-fixed-sidebar+.burger-menu,.navik-side-content>.logo{display:none}.navik-sidebar-left,.navik-sidebar-left.fixed-sidebar-open~.navik-side-content,.navik-sidebar-right,.navik-sidebar-right.fixed-sidebar-open~.navik-side-content{transform:translateX(0);transition-duration:0s}.navik-sidebar-left~.fixedsidebar-bg-overlay+.navik-side-content{margin-left:auto}.navik-sidebar-right~.fixedsidebar-bg-overlay+.navik-side-content{margin-right:auto}.navik-menu-fixed{padding-top:0}}html{-webkit-font-smoothing:antialiased;font-size:16px}body{font-family:\"Roboto\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;color:#283034;font-weight:300}@-webkit-viewport{width:device-width}@-moz-viewport{width:device-width}@-ms-viewport{width:device-width}@-o-viewport{width:device-width}@viewport{width:device-width}.wide-100{padding-top:100px;padding-bottom:100px}.wide-90{padding-top:100px;padding-bottom:90px}.wide-80{padding-top:100px;padding-bottom:80px}.wide-70{padding-top:100px;padding-bottom:70px}.wide-60{padding-top:100px;padding-bottom:60px}.wide-50{padding-top:100px;padding-bottom:50px}.wide-40{padding-top:100px;padding-bottom:40px}.wide-30{padding-top:100px;padding-bottom:30px}.wide-20{padding-top:100px;padding-bottom:20px}.mt-100{margin-top:100px}.mt-95{margin-top:95px}.mt-90{margin-top:90px}.mt-85{margin-top:85px}.mt-80{margin-top:80px}.mt-75{margin-top:75px}.mt-70{margin-top:70px}.mt-65{margin-top:65px}.mt-60{margin-top:60px}.mt-55{margin-top:55px}.mt-50{margin-top:50px}.mt-45{margin-top:45px}.mt-40{margin-top:40px}.mt-35{margin-top:35px}.mt-30{margin-top:30px}.mt-25{margin-top:25px}.mt-20{margin-top:20px}.mt-15{margin-top:15px}.mt-10{margin-top:10px}.mt-5{margin-top:5px!important}.mt-0{margin-top:0}.mb-100{margin-bottom:100px}.mb-95{margin-bottom:95px}.mb-90{margin-bottom:90px}.mb-85{margin-bottom:85px}.mb-80{margin-bottom:80px}.mb-75{margin-bottom:75px}.mb-70{margin-bottom:70px}.mb-65{margin-bottom:65px}.mb-60{margin-bottom:60px}.mb-55{margin-bottom:55px}.mb-50{margin-bottom:50px}.mb-45{margin-bottom:45px}.mb-40{margin-bottom:40px}.mb-35{margin-bottom:35px}.mb-30{margin-bottom:30px}.mb-25{margin-bottom:25px}.mb-20{margin-bottom:20px}.mb-15{margin-bottom:15px}.mb-10{margin-bottom:10px}.mb-5{margin-bottom:5px!important}.mb-0{margin-bottom:0}.ml-100{margin-left:100px}.ml-95{margin-left:95px}.ml-90{margin-left:90px}.ml-85{margin-left:85px}.ml-80{margin-left:80px}.ml-75{margin-left:75px}.ml-70{margin-left:70px}.ml-60{margin-left:60px}.ml-55{margin-left:55px}.ml-50{margin-left:50px}.ml-45{margin-left:45px}.ml-40{margin-left:40px}.ml-35{margin-left:35px}.ml-30{margin-left:30px}.ml-25{margin-left:25px}.ml-20{margin-left:20px}.ml-15{margin-left:15px}.ml-10{margin-left:10px}.ml-5{margin-left:5px!important}.mr-100{margin-right:100px}.mr-95{margin-right:95px}.mr-90{margin-right:90px}.mr-85{margin-right:85px}.mr-80{margin-right:80px}.mr-75{margin-right:75px}.mr-70{margin-right:70px}.mr-65{margin-right:65px}.mr-60{margin-right:60px}.mr-55{margin-right:55px}.mr-50{margin-right:50px}.mr-45{margin-right:45px}.mr-40{margin-right:40px}.mr-35{margin-right:35px}.mr-30{margin-right:30px}.mr-25{margin-right:25px}.mr-20{margin-right:20px}.mr-15{margin-right:15px}.mr-10{margin-right:10px}.mr-5{margin-right:5px!important}.pt-100{padding-top:100px}.pt-95{padding-top:95px}.pt-90{padding-top:90px}.pt-85{padding-top:85px}.pt-80{padding-top:80px}.pt-75{padding-top:75px}.pt-70{padding-top:70px}.pt-65{padding-top:65px}.pt-60{padding-top:60px}.pt-55{padding-top:55px}.pt-50{padding-top:50px}.pt-45{padding-top:45px}.pt-40{padding-top:40px}.pt-35{padding-top:35px}.pt-30{padding-top:30px}.pt-25{padding-top:25px}.pt-20{padding-top:20px}.pt-15{padding-top:15px}.pt-10{padding-top:10px}.pt-5{padding-top:5px!important}.pb-100{padding-bottom:100px}.pb-95{padding-bottom:95px}.pb-90{padding-bottom:90px}.pb-85{padding-bottom:85px}.pb-80{padding-bottom:80px}.pb-75{padding-bottom:75px}.pb-70{padding-bottom:70px}.pb-65{padding-bottom:65px}.pb-60{padding-bottom:60px}.pb-55{padding-bottom:55px}.pb-50{padding-bottom:50px}.pb-45{padding-bottom:45px}.pb-40{padding-bottom:40px}.pb-35{padding-bottom:35px}.pb-30{padding-bottom:30px}.pb-25{padding-bottom:25px}.pb-20{padding-bottom:20px}.pb-15{padding-bottom:15px}.pb-10{padding-bottom:10px}.pb-5{padding-bottom:5px!important}.pl-100{padding-left:100px}.pl-95{padding-left:95px}.pl-90{padding-left:90px}.pl-85{padding-left:85px}.pl-80{padding-left:80px}.pl-75{padding-left:75px}.pl-70{padding-left:70px}.pl-65{padding-left:65px}.pl-60{padding-left:60px}.pl-55{padding-left:55px}.pl-50{padding-left:50px}.pl-45{padding-left:45px}.pl-40{padding-left:40px}.pl-35{padding-left:35px}.pl-30{padding-left:30px}.pl-25{padding-left:25px}.pl-20{padding-left:20px}.pl-15{padding-left:15px}.pl-10{padding-left:10px}.pl-5{padding-left:5px!important}.pr-100{padding-right:100px}.pr-95{padding-right:95px}.pr-90{padding-right:90px}.pr-85{padding-right:85px}.pr-80{padding-right:80px}.pr-75{padding-right:75px}.pr-70{padding-right:70px}.pr-65{padding-right:65px}.pr-60{padding-right:60px}.pr-55{padding-right:55px}.pr-50{padding-right:50px}.pr-45{padding-right:45px}.pr-40{padding-right:40px}.pr-35{padding-right:35px}.pr-30{padding-right:30px}.pr-25{padding-right:25px}.pr-20{padding-right:20px}.pr-15{padding-right:15px}.pr-10{padding-right:10px}.pr-5{padding-right:5px!important}.bg-fixed,.bg-scroll{width:100%;background-repeat:no-repeat;background-position:50%;background-size:cover}.bg-scroll{background-attachment:fixed!important}.rel{position:relative!important}.bg-white{background-color:#fff!important}.bg-dark{background-color:#1b1b1b!important}.bg-lightdark{background-color:#363636!important}.bg-tra-dark{background-color:rgba(10,10,10,.4)}.bg-lightgrey{background-color:#f6f9fa}.bg-grey{background-color:#eaeaea}.bg-brown{background-color:#6f5e4d}.bg-coffee{background-color:#642f21}.bg-meat{background-color:#d2322b}.bg-orange{background-color:#ef7f01}.bg-red{background-color:#e3000e}.bg-salmon{background-color:#e84e1d}.bg-silk{background-color:#fbf7e8}.bg-wine{background-color:#831619}.bg-yellow{background-color:#f7be27}.bg-01,.bg-02,.bg-03,.bg-04,.bg-05,.bg-06{width:100%;background-repeat:no-repeat;background-position:50%;background-size:cover;background-attachment:scroll!important}.bg-01{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ")}.bg-01,.bg-02{background-attachment:fixed!important}.bg-03{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ")}.bg-04{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ")}.bg-05{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ")}.bg-05,.bg-06{background-attachment:fixed!important}.bg-06{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ")}.b-top{border-top:1px solid #eee}.b-bottom{border-bottom:1px solid #eee}.b-left{border-left:1px solid #eee}.b-right{border-right:1px solid #eee}h1,h2,h3,h4,h5,h6{font-family:\"Oswald\",sans-serif;line-height:1.3;font-weight:500;text-transform:uppercase;letter-spacing:0}h6.h6-xs{font-size:1.0625rem}h6.h6-sm{font-size:1.125rem}h6.h6-md{font-size:1.15625rem}h6.h6-lg{font-size:1.1875rem}h6.h6-xl{font-size:1.21875rem}h5.h5-xs{font-size:1.25rem}h5.h5-sm{font-size:1.375rem}h5.h5-md{font-size:1.5rem}h5.h5-lg{font-size:1.625rem}h5.h5-xl{font-size:1.75rem}h4.h4-xs{font-size:1.875rem}h4.h4-sm{font-size:2rem}h4.h4-md{font-size:2.125rem}h4.h4-lg{font-size:2.25rem}h4.h4-xl{font-size:2.375rem}h3.h3-xs{font-size:2.5rem}h3.h3-sm{font-size:2.625rem}h3.h3-md{font-size:2.75rem}h3.h3-lg{font-size:2.875rem}h3.h3-xl{font-size:3rem}h2.h2-xs{font-size:3.125rem}h2.h2-sm{font-size:3.25rem}h2.h2-md{font-size:3.375rem}h2.h2-lg{font-size:3.5rem}h2.h2-xl{font-size:3.75rem}p.p-sm{font-size:1rem}p{font-size:1.0625rem}p.p-md{font-size:1.125rem}p.p-lg{font-size:1.1875rem}p.p-xl{font-size:1.25rem}a{transition:all .4s ease-in-out}a,a:hover{color:#333}a,a:focus,a:hover{text-decoration:none}a:focus{outline:none}ul{margin:0;padding:0;list-style:none}ul.txt-list{list-style:disc;margin-left:15px}.txt-list li i{position:relative;font-size:1.05rem;line-height:1.5rem;float:left;margin-right:10px;top:2px}.txt-list li p{overflow:hidden;margin-bottom:10px}.btn{background-color:transparent;font-family:\"Oswald\",sans-serif;color:#fff;font-size:16px;line-height:1;font-weight:500;text-transform:uppercase;letter-spacing:.5px;padding:13px 32px;border:1px solid transparent;border-radius:2px;transition:all .4s ease-in-out}.btn.btn-sm{font-size:15px;padding:13px 26px}.btn.btn-md{font-size:17px;padding:15px 38px}.btn.btn-lg{font-size:20px;padding:15px 42px}.btn-white,.white-color .btn-white{color:#333;background-color:#fff;border-color:#fff!important}.btn-tra-grey,.white-color .btn-tra-grey{color:#333;background-color:transparent;border-color:#ddd!important}.brown-hover:hover,.btn-brown,.scroll .brown-hover:hover,.scroll .btn-brown,.white-color .brown-hover:hover,.white-color .btn-brown{color:#fff!important;background-color:#6f5e4d;border-color:#6f5e4d!important}.btn-red,.red-hover:hover,.scroll .btn-red,.scroll .red-hover:hover,.white-color .btn-red,.white-color .red-hover:hover{color:#fff!important;background-color:#e3000e;border-color:#e3000e!important}.btn-tra-red,.scroll .btn-tra-red,.scroll .tra-red-hover:hover,.tra-red-hover:hover,.white-color .btn-tra-red,.white-color .tra-redhover:hover{color:#e3000e!important;background-color:transparent;border-color:#e3000e!important}.btn-meat,.meat-hover:hover,.scroll .btn-meat,.scroll .meat-hover:hover,.white-color .btn-meat,.white-color .meat-hover:hover{color:#fff!important;background-color:#d2322b;border-color:#d2322b!important}.btn-tra-meat,.scroll .btn-tra-meat,.scroll .tra-meat-hover:hover,.tra-meat-hover:hover,.white-color .btn-tra-meat,.white-color .tra-meathover:hover{color:#d2322b!important;background-color:transparent;border-color:#d2322b!important}.btn-salmon,.salmon-hover:hover,.scroll .btn-salmon,.scroll .salmon-hover:hover,.white-color .btn-salmon,.white-color .salmon-hover:hover{color:#fff!important;background-color:#e84e1d;border-color:#e84e1d!important}.btn-tra-salmon,.scroll .btn-tra-salmon,.scroll .tra-salmon-hover:hover,.tra-salmon-hover:hover,.white-color .btn-tra-salmon,.white-color .tra-salmonhover:hover{color:#e84e1d!important;background-color:transparent;border-color:#e84e1d!important}.btn-yellow,.scroll .btn-yellow,.scroll .yellow-hover:hover,.white-color .btn-yellow,.white-color .yellow-hover:hover,.yellow-hover:hover{color:#333435!important;background-color:#f7be27;border-color:#f7be27!important}.white-color .white-hover:hover,.white-hover:hover{color:#333!important;background-color:#fff;border-color:#fff!important}.tra-white-hover:hover,.white-color .tra-white-hover:hover{color:#fff!important;background-color:transparent;border-color:#fff!important}.scroll .tra-white-hover:hover{color:#333!important;background-color:transparent;border-color:#333!important}.btn.btn-black:focus,.btn:focus{color:#fff;box-shadow:none}.btn-tra-black:focus,.btn.btn-tra-grey:focus{color:#333;box-shadow:none}.video-preview{position:relative;text-align:center}.video-block{position:relative}.video-block,.video-btn{width:100px;height:100px;display:inline-block}.video-btn{position:absolute!important;top:50%;left:50%;margin-top:-50px;margin-left:-50px;text-align:center;color:#fff;border-radius:100%}.video-btn,.video-btn i{line-height:100px!important}.video-btn i{font-size:3rem;margin-left:11px;transition:all .4s ease-in-out}.video-btn:hover i{transform:scale(.9)}.ico-20 [class*=flaticon-]:after,.ico-20 [class*=flaticon-]:before{font-size:1.25rem}.ico-25 [class*=flaticon-]:after,.ico-25 [class*=flaticon-]:before{font-size:1.5625rem}.ico-30 [class*=flaticon-]:after,.ico-30 [class*=flaticon-]:before{font-size:1.875rem}.ico-35 [class*=flaticon-]:after,.ico-35 [class*=flaticon-]:before{font-size:2.1875rem}.ico-40 [class*=flaticon-]:after,.ico-40 [class*=flaticon-]:before{font-size:2.5rem}.ico-45 [class*=flaticon-]:after,.ico-45 [class*=flaticon-]:before{font-size:2.8125rem}.ico-50 [class*=flaticon-]:after,.ico-50 [class*=flaticon-]:before{font-size:3.125rem}.ico-55 [class*=flaticon-]:after,.ico-55 [class*=flaticon-]:before{font-size:3.4375rem}.ico-60 [class*=flaticon-]:after,.ico-60 [class*=flaticon-]:before{font-size:3.75rem}.ico-65 [class*=flaticon-]:after,.ico-65 [class*=flaticon-]:before{font-size:4.0625rem}.ico-70 [class*=flaticon-]:after,.ico-70 [class*=flaticon-]:before{font-size:4.375rem}.ico-75 [class*=flaticon-]:after,.ico-75 [class*=flaticon-]:before{font-size:4.6875rem}.ico-80 [class*=flaticon-]:after,.ico-80 [class*=flaticon-]:before{font-size:5rem}.ico-85 [class*=flaticon-]:after,.ico-85 [class*=flaticon-]:before{font-size:5.3125rem}.ico-90 [class*=flaticon-]:after,.ico-90 [class*=flaticon-]:before{font-size:5.625rem}.ico-95 [class*=flaticon-]:after,.ico-95 [class*=flaticon-]:before{font-size:5.9375rem}.ico-100 [class*=flaticon-]:after,.ico-100 [class*=flaticon-]:before{font-size:6.25rem}.section-title{position:relative}.section-title h2.h2-title{font-size:4.5rem}.section-title p{color:#888;padding:0 18%;margin:12px 0 0}#contacts-4 .section-title p{padding:0 10% 0 0}.txt-300{font-weight:300}.txt-400{font-weight:400}.txt-500{font-weight:500}.txt-700{font-weight:700}.txt-900{font-weight:900}.white-color,.white-color a,.white-color h2,.white-color h3,.white-color h4,.white-color h5,.white-color h6,.white-color i,.white-color li,.white-color p,.white-color span{color:#fff}.grey-color,.grey-color a,.grey-color h2,.grey-color h3,.grey-color h4,.grey-color h5,.grey-color h6,.grey-color i,.grey-color li,.grey-color p,.grey-color span,.lightgrey-color .grey-color,.white-color .grey-color{color:#757575}.lightgrey-color,.lightgrey-color a,.lightgrey-color h2,.lightgrey-color h3,.lightgrey-color h4,.lightgrey-color h5,.lightgrey-color h6,.lightgrey-color i,.lightgrey-color li,.lightgrey-color p,.lightgrey-color span,.white-color .lightgrey-color{color:#ccc}.brown-color,.brown-color a,.brown-color h2,.brown-color h3,.brown-color h4,.brown-color h5,.brown-color h6,.brown-color i,.brown-color li,.brown-color p,.brown-color span,.white-color .brown-color{color:#6f5e4d}.coffee-color,.coffee-color a,.coffee-color h2,.coffee-color h3,.coffee-color h4,.coffee-color h5,.coffee-color h6,.coffee-color i,.coffee-color li,.coffee-color p,.coffee-color span,.white-color .coffee-color{color:#642f21}.green-color,.green-color a,.green-color h2,.green-color h3,.green-color h4,.green-color h5,.green-color h6,.green-color i,.green-color li,.green-color p,.green-color span,.white-color .green-color{color:#94ad10}.meat-color,.meat-color a,.meat-color h2,.meat-color h3,.meat-color h4,.meat-color h5,.meat-color h6,.meat-color i,.meat-color li,.meat-color p,.meat-color span,.white-color .meat-color{color:#d2322b}.orange-color,.orange-color a,.orange-color h2,.orange-color h3,.orange-color h4,.orange-color h5,.orange-color h6,.orange-color i,.orange-color li,.orange-color p,.orange-color span,.white-color .orange-color{color:#ef7f01}.salmon-color,.salmon-color a,.salmon-color h2,.salmon-color h3,.salmon-color h4,.salmon-color h5,.salmon-color h6,.salmon-color i,.salmon-color li,.salmon-color p,.salmon-color span,.white-color .salmon-color{color:#e84e1d}.brown-color .red-color,.red-color,.red-color a,.red-color h2,.red-color h3,.red-color h4,.red-color h5,.red-color h6,.red-color i,.red-color li,.red-color p,.red-color span,.white-color .red-color{color:#e3000e}.white-color .wine-color,.wine-color,.wine-color a,.wine-color h2,.wine-color h3,.wine-color h4,.wine-color h5,.wine-color h6,.wine-color i,.wine-color li,.wine-color p,.wine-color span{color:#831619}.brown-color .yellow-color,.coffee-color .yellow-color,.white-color .yellow-color,.yellow-color,.yellow-color a,.yellow-color h2,.yellow-color h3,.yellow-color h4,.yellow-color h5,.yellow-color h6,.yellow-color i,.yellow-color li,.yellow-color p,.yellow-color span{color:#f7be27}.shadow-txt-white{text-shadow:#fff 3px 3px 0,#fff -3px -3px 0,#fff -3px 3px 0,#fff 3px -3px 0}.shadow-txt-black{text-shadow:#000 3px 3px 0,#000 -3px -3px 0,#000 -3px 3px 0,#000 3px -3px 0}.shadow-txt-yellow{text-shadow:#e1a100 4px 4px 0,#e1a100 -4px -4px 0,#e1a100 -4px 4px 0,#e1a100 4px -4px 0}.item-rating span{position:relative;font-size:.95rem;line-height:1;font-weight:400;margin:0 4px;top:1px}.stars-rating i{color:#f7be27;font-size:.85rem;line-height:1}.stars-rating.stars-lg i{font-size:.925rem}.menu-7-img .item-rating,.pbox-14-img .item-rating{position:absolute;bottom:30px;right:15px}.menu-7-img .item-rating span,.pbox-14-img .item-rating span{font-size:.9rem;top:0}span.item-code{display:block;font-size:1.05rem;line-height:1;font-weight:400;margin-top:10px;margin-bottom:0}#menu-5 .item-code,#menu-6 .item-code,#promo-6 .item-code,#promo-7 .item-code,#promo-8 .item-code{position:absolute;top:15px;left:15px;padding:7px 8px;color:#fff;font-size:.915rem;font-weight:500;text-transform:uppercase;margin-top:0;margin-bottom:0;border-radius:6px}#promo-8 .item-code{top:10px}.like-ico{display:block;position:absolute;width:28px;height:28px;text-align:center;border-radius:100%}.pbox-7 .like-ico{top:30px;right:15px}.menu-6-item .like-ico{top:28px;right:15px}.menu-7-img .like-ico,.pbox-14-img .like-ico{top:14px;right:16px}.like-ico.ico-25 [class*=flaticon-]:after,.like-ico.ico-25 [class*=flaticon-]:before{font-size:1.375rem}.like-ico span{color:#aaa;font-weight:700;transition:all .35s ease-in-out}.like-ico:hover>a span{color:#e84e1d!important}.menu-img-zoom{display:block;position:absolute;width:34px;height:34px;text-align:center;background-color:rgba(20,20,20,.45);border-radius:100%}.menu-img-zoom a{position:relative;line-height:36px;top:2px}.menu-6-img .menu-img-zoom,.pbox-7-img .menu-img-zoom{bottom:15px;left:15px}.menu-img-zoom.ico-25 [class*=flaticon-]:after,.menu-img-zoom.ico-25 [class*=flaticon-]:before{font-size:1.215rem}.menu-img-zoom span{color:hsla(0,0%,100%,.95);transition:all .35s ease-in-out}.add-to-cart{opacity:1;position:absolute;display:inline-block;font-size:.9rem;line-height:1;font-weight:700;padding:8px 14px;border-radius:4px;transition:all .5s ease-in-out}.add-to-cart.bg-meat a,.add-to-cart.bg-red a,.add-to-cart.bg-salmon a{color:#fff}.pbox-7-txt .add-to-cart{right:20px;bottom:0}.menu-6-txt .add-to-cart{right:20px}.pbox-7:hover .add-to-cart{bottom:8px;opacity:1;-moz-opacity:1}.pbox-7:hover #pb-7-2 .add-to-cart{bottom:27px}.menu-6-item:hover .add-to-cart{bottom:28px;opacity:1;-moz-opacity:1}.add-to-cart.ico-10 [class*=flaticon-]:after,.add-to-cart.ico-10 [class*=flaticon-]:before{font-size:.85rem}.add-to-cart span{position:relative;top:-.5px}.add-to-cart.bg-yellow:hover{background-color:#f5b200!important}.add-to-cart.bg-salmon:hover{background-color:#d43a09!important}.add-to-cart.bg-meat:hover{background-color:#bf1810!important}.add-to-cart.bg-red:hover{background-color:#c6020e!important}.price-badge-lg,.price-badge-md,.price-badge-sm{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");position:absolute;top:-20px;right:5px}.red-badge.price-badge-lg,.red-badge.price-badge-md,.red-badge.price-badge-sm{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ")}.orange-badge.price-badge-lg,.orange-badge.price-badge-md,.orange-badge.price-badge-sm{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ")}#promo-3.promo-section .price-badge-sm{top:-10px;right:-15px}#promo-10.promo-section .price-badge-md{top:120px;left:50px;right:0}#promo-11.promo-section .price-badge-lg{top:20px}.price-badge-sm{width:150px;height:146px}.price-badge-md{width:180px;height:176px}.price-badge-lg{width:200px;height:195px}.badge-txt{width:100%;position:absolute;top:50%;transform:translateY(-50%)}.badge-txt h4,.badge-txt h5{line-height:1;font-weight:700;letter-spacing:-1px;margin-bottom:5px}.badge-txt h3{line-height:1;letter-spacing:-1px;margin-bottom:0}.old-price{color:#babbbc!important;text-decoration:line-through;margin-right:6px}.discount-badge{position:absolute;left:-50px;top:100px}.discount-badge img{width:auto;max-width:inherit;max-height:210px}#loader-wrapper{position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999999;background-color:#f5f5f5}#loader{display:block;position:relative;top:50%;transform:translateY(-50%)}.cssload-spinner{height:50px;width:50px;margin:0 auto;position:relative;animation:cssload-invert 1.7s steps(2) infinite;-o-animation:cssload-invert 1.7s infinite steps(2);-ms-animation:cssload-invert 1.7s infinite steps(2);-webkit-animation:cssload-invert 1.7s steps(2) infinite;-moz-animation:cssload-invert 1.7s infinite steps(2)}.cssload-ball{height:100%;width:100%;position:absolute;border-radius:50%;top:0;left:0;background:#e84e1d}.cssload-ball-1{animation:cssload-ball1 1.15s linear infinite alternate;-o-animation:cssload-ball1 1.15s infinite alternate linear;-ms-animation:cssload-ball1 1.15s infinite alternate linear;-webkit-animation:cssload-ball1 1.15s linear infinite alternate;-moz-animation:cssload-ball1 1.15s infinite alternate linear}.cssload-ball-2{animation:cssload-ball2 1.15s linear infinite alternate;-o-animation:cssload-ball2 1.15s infinite alternate linear;-ms-animation:cssload-ball2 1.15s infinite alternate linear;-webkit-animation:cssload-ball2 1.15s linear infinite alternate;-moz-animation:cssload-ball2 1.15s infinite alternate linear}.cssload-ball-3{animation:cssload-ball3 1.15s linear infinite alternate;-o-animation:cssload-ball3 1.15s infinite alternate linear;-ms-animation:cssload-ball3 1.15s infinite alternate linear;-webkit-animation:cssload-ball3 1.15s linear infinite alternate;-moz-animation:cssload-ball3 1.15s infinite alternate linear}.cssload-ball-4{animation:cssload-ball4 1.15s linear infinite alternate;-o-animation:cssload-ball4 1.15s infinite alternate linear;-ms-animation:cssload-ball4 1.15s infinite alternate linear;-webkit-animation:cssload-ball4 1.15s linear infinite alternate;-moz-animation:cssload-ball4 1.15s infinite alternate linear}@keyframes cssload-invert{to{transform:rotate(180deg)}}@-webkit-keyframes cssload-invert{to{-webkit-transform:rotate(180deg)}}@keyframes cssload-ball1{12%{transform:none}26%{transform:translateX(25%) scaleY(.8)}40%{transform:translateX(50%) scale(.8)}60%{transform:translateX(50%) scale(.8)}74%{transform:translate(50%,25%) scale(.6,.8)}88%{transform:translate(50%,50%) scale(.6)}to{transform:translate(50%,50%) scale(.6)}}@-webkit-keyframes cssload-ball1{12%{-webkit-transform:none}26%{-webkit-transform:translateX(25%) scaleY(.8)}40%{-webkit-transform:translateX(50%) scale(.8)}60%{-webkit-transform:translateX(50%) scale(.8)}74%{-webkit-transform:translate(50%,25%) scale(.6,.8)}88%{-webkit-transform:translate(50%,50%) scale(.6)}to{-webkit-transform:translate(50%,50%) scale(.6)}}@keyframes cssload-ball2{12%{transform:none}26%{transform:translateX(25%) scaleY(.8)}40%{transform:translateX(50%) scale(.8)}60%{transform:translateX(50%) scale(.8)}74%{transform:translate(50%,-25%) scale(.6,.8)}88%{transform:translate(50%,-50%) scale(.6)}to{transform:translate(50%,-50%) scale(.6)}}@-webkit-keyframes cssload-ball2{12%{-webkit-transform:none}26%{-webkit-transform:translateX(25%) scaleY(.8)}40%{-webkit-transform:translateX(50%) scale(.8)}60%{-webkit-transform:translateX(50%) scale(.8)}74%{-webkit-transform:translate(50%,-25%) scale(.6,.8)}88%{-webkit-transform:translate(50%,-50%) scale(.6)}to{-webkit-transform:translate(50%,-50%) scale(.6)}}@keyframes cssload-ball3{12%{transform:none}26%{transform:translateX(-25%) scaleY(.8)}40%{transform:translateX(-50%) scale(.8)}60%{transform:translateX(-50%) scale(.8)}74%{transform:translate(-50%,25%) scale(.6,.8)}88%{transform:translate(-50%,50%) scale(.6)}to{transform:translate(-50%,50%) scale(.6)}}@-webkit-keyframes cssload-ball3{12%{-webkit-transform:none}26%{-webkit-transform:translateX(-25%) scaleY(.8)}40%{-webkit-transform:translateX(-50%) scale(.8)}60%{-webkit-transform:translateX(-50%) scale(.8)}74%{-webkit-transform:translate(-50%,25%) scale(.6,.8)}88%{-webkit-transform:translate(-50%,50%) scale(.6)}to{-webkit-transform:translate(-50%,50%) scale(.6)}}@keyframes cssload-ball4{12%{transform:none}26%{transform:translateX(-25%) scaleY(.8)}40%{transform:translateX(-50%) scale(.8)}60%{transform:translateX(-50%) scale(.8)}74%{transform:translate(-50%,-25%) scale(.6,.8)}88%{transform:translate(-50%,-50%) scale(.6)}to{transform:translate(-50%,-50%) scale(.6)}}@-webkit-keyframes cssload-ball4{12%{-webkit-transform:none}26%{-webkit-transform:translateX(-25%) scaleY(.8)}40%{-webkit-transform:translateX(-50%) scale(.8)}60%{-webkit-transform:translateX(-50%) scale(.8)}74%{-webkit-transform:translate(-50%,-25%) scale(.6,.8)}88%{-webkit-transform:translate(-50%,-50%) scale(.6)}to{-webkit-transform:translate(-50%,-50%) scale(.6)}}#header-1.navik-header{padding-top:40px}#header-3.navik-header{padding-top:10px;position:fixed}@media (min-width:992px){#header-3.navik-header{padding-top:10px;padding-bottom:10px;background:rgba(165,161,161,.8)}}.navik-menu ul li>a{display:block;font-family:\"Oswald\",sans-serif;font-size:1.095rem;font-weight:500;text-transform:uppercase;transition:all .15s ease-in-out}#header-3 .navik-menu ul li>a{font-size:18px;padding-left:16px;padding-right:16px}.navbar-dark .navik-menu ul li>a{color:#212121}.navbar-dark .navik-menu>ul>li.dropdown_menu>a>span:before{border-color:#212121}.navik-menu ul li.dropdown_menu>a>span:before{top:-6px}.navik-menu.navik-yellow .mega-menu-heading a:hover,.navik-menu.navik-yellow ul li:hover>a{color:#f7be27}.navik-menu.navik-meat .mega-menu-heading a:hover,.navik-menu.navik-meat ul li:hover>a{color:#d2322b}.navik-menu.navik-red .mega-menu-heading a:hover,.navik-menu.navik-red ul li:hover>a{color:#e3000e}.navik-menu.navik-salmon .mega-menu-heading a:hover,.navik-menu.navik-salmon ul li:hover>a{color:#e84e1d}#header-3 .navik-menu ul li.nav-btn a{position:relative;top:1.5px;font-size:24px;font-weight:700;letter-spacing:-.5px;padding-left:5px;padding-right:5px}#header-3 .navik-menu ul li.nav-btn.yellow-color>a{color:#f7be27}#header-3 .navik-menu ul li.nav-btn.red-color>a{color:#e3000e}#header-3 .navik-menu ul li.nav-btn.salmon-color>a{color:#e84e1d}span.ico-holder{position:relative}.basket-ico em.roundpoint{width:20px;height:20px;background-color:#e3000e;border-radius:50%;color:#fff;font-size:13px;line-height:18px;text-align:center;font-style:normal;position:absolute;top:-10px;right:-5px}.callusbtn{display:none;position:absolute;top:33px;left:14px}.callusbtn a{font-size:22px;line-height:1;padding:0;margin:0}.navik-menu li>ul{-webkit-border-radius:2px;-moz-border-radius:2px;-o-border-radius:2px}.navik-menu ul ul li>a{font-family:\"Roboto\",sans-serif;font-size:15px;font-weight:500;font-style:normal;text-transform:inherit;padding:14px 8px}#header-3 .navik-menu ul ul li>a{font-size:15px}#header-1.navik-header.sticky,#header-3.navik-header.sticky{padding-top:0}.hero-section .container{position:relative;z-index:3}#hero-2 .bg-inner{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");padding-top:180px}.white-overlay-wave{position:absolute;bottom:0;left:0;width:100%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");height:155px}#hero-4{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");padding-top:170px;padding-bottom:90px}#hero-5 .bg-inner{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");padding-top:150px;margin-bottom:60px}#hero-9 .bg-inner{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");padding-top:210px;padding-bottom:140px}#hero-10{position:relative;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");padding-top:140px;padding-bottom:70px}#hero-11{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");padding-top:180px}#hero-11,#hero-12{position:relative;padding-bottom:80px}#hero-12{padding-top:200px}.slider{position:relative;max-width:100%;height:660px}#hero-3 .slider{height:700px}#hero-8 .slider{height:560px}.slider.mt-100{height:550px;margin-top:95px}.slider .slides{margin:0;height:660px}#hero-3 .slider .slides{height:700px}#hero-8 .slider .slides{height:560px}.slider.mt-100 .slides{margin:0;height:550px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:50%}.slider .slides li .caption{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.slider .slides li.active{z-index:2}.center-align{text-align:center}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:30px;margin:0;z-index:98}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;background-color:transparent;height:10px;width:10px;border:2px solid #fff;margin:0 7px;opacity:.5;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#fff;opacity:.65}#hero-1 .caption-txt{padding:0 6%;margin-top:70px}#hero-2 .hero-txt{padding:0 5%}#hero-3 .caption-txt{padding-left:10px;margin-top:50px}#hero-6 .caption-txt{margin-top:50px}.hero-11-txt{margin-left:-20px;padding-right:20px}#hero-1 h2,#hero-2 h2,#hero-3 h2,#hero-6 h2,#hero-9 h2,.hero-4-txt h2{font-family:\"Lilita One\",cursive;font-size:7.25rem;line-height:1.1;letter-spacing:3px;margin-bottom:30px}#hero-2 h2{margin-bottom:40px}#hero-3 h2,#hero-6 h2{font-size:6.5rem;margin-bottom:20px}#hero-3 h3,#hero-6 h3{font-size:3.5rem;line-height:1;font-weight:300;letter-spacing:0;margin-bottom:0}#hero-3 h3 span,#hero-6 h3 span{font-size:4.25rem;font-weight:400;letter-spacing:-1px;position:relative;top:3px;left:5px}.hero-4-txt h2{font-size:7rem;line-height:1;margin-bottom:15px}.hero-4-txt h3{font-size:2.5rem;letter-spacing:3px;margin-bottom:20px}#hero-5 h2,.hero-4-txt h3{font-family:\"Lilita One\",cursive;line-height:1}#hero-5 h2{font-size:17rem;letter-spacing:0;position:relative;opacity:.25;z-index:8;margin-bottom:0}#hero-9 h2{font-size:7rem;opacity:.95;padding:0 5%;margin-bottom:25px}#hero-10 h2{display:inline-block;font-family:\"Lilita One\",cursive;font-size:18rem;letter-spacing:3px;border-bottom:10px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h2,#hero-10 h3{line-height:1;opacity:.85}#hero-10 h3{font-size:4.75rem;font-weight:300;letter-spacing:2px;margin-bottom:70px}#hero-11 h2{font-size:10.5rem;line-height:1;letter-spacing:-1px;margin-bottom:20px}#hero-11 h3{font-size:5.5rem;margin-bottom:5px}#hero-11 h3,#hero-11 h4{line-height:1;font-weight:300;letter-spacing:1px}#hero-11 h4{font-size:3.5rem;margin-bottom:25px}#hero-12 h3{font-size:4.25rem;line-height:1;font-weight:300;letter-spacing:1px;margin-bottom:25px}#hero-12 h2{font-family:\"Lilita One\",cursive;font-size:8.5rem;line-height:1;letter-spacing:3px;margin-bottom:30px}#hero-1 p{font-size:1.75rem;font-weight:400;margin-bottom:0}#hero-1 p span{font-family:\"Oswald\",sans-serif;font-size:2.35rem;line-height:1;font-weight:700;letter-spacing:-.5px;position:relative;top:3px;left:10px}.hero-4-txt p{padding:0 5%;margin-bottom:20px}.hero-9-txt p{font-size:1.35rem;padding:0 15%;margin-bottom:40px}.hero-11-txt p{padding-right:5%;margin-bottom:30px}.hero-12-txt p{padding:0 15%;margin-bottom:65px}.hbox-1-wrapper,.hbox-2-wrapper{padding:0 8%}.hbox-1 h5,.hbox-2 h5{line-height:1;margin-top:25px;letter-spacing:0;margin-bottom:0}.hbox-2 h5,.hbox-2-ico{opacity:.8}.hero-2-img{margin-bottom:-50px}.hero-2-img,.hero-4-img{position:relative}.hero-5-img{margin-top:-90px;margin-bottom:-40px}.hero-5-img,.hero-9-img{position:relative;z-index:9}.hero-9-img{margin-top:-30px;margin-bottom:-60px}.hero-11-img{margin-left:-50%}.hero-11-img img{position:relative;max-width:none;display:inline-block}#about-1{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ")}#about-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");padding-top:100px;padding-bottom:300px}#about-5,#about-6{position:relative;z-index:1;padding-top:120px;padding-bottom:80px}#about-7{padding-top:70px;padding-bottom:30px}.about-2-txt{padding:0 30px}.about-3-txt{padding:0 25px}.about-4-txt{padding:50px 30px 0}.about-5-txt{padding:0 60px 0 15px}.about-6-txt{padding:0 15px 0 60px}.about-1-txt h2{font-size:4.25rem;line-height:1.2;margin-bottom:25px}.about-2-txt h2{margin-bottom:20px}.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:25px}.about-1-txt p,.about-2-txt p{padding:0 5%;margin-bottom:45px}.about-2-txt p{margin-bottom:30px}.about-4-txt p{margin-bottom:40px}.about-4-img p{padding-left:20px;padding-right:30%;margin-top:30px;margin-bottom:0}.abox-1-wrapper{padding:0 5%;margin-bottom:10px}.abox-2-wrapper{margin-top:40px}.abox-3-wrapper{margin-top:50px}.abox-1 h6,.abox-2 h6,.abox-3 h6{line-height:1;margin-top:20px;margin-bottom:0}.abox-3 h6{line-height:1.25}.abox-4 h5{line-height:1;letter-spacing:.5px;margin-top:30px;margin-bottom:20px}.abox-4 p{margin-bottom:0}.about-5-img{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");left:50%}.about-5-img,.about-6-img{background-repeat:no-repeat;background-position:50%;background-size:cover;position:absolute;top:0;bottom:0;width:50%}.about-6-img{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");left:0}#div-01,#div-02,#div-03,#div-04,#div-05{width:100%;height:600px}#div-01{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ")}#div-02{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ")}#div-03{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ")}#div-04{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ")}#div-05{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ")}#pb-1-1{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ")}#pb-1-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ")}#pb-1-3{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ")}#pb-2-1{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ")}#pb-2-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ")}#promo-1 .row{margin-left:-10px;margin-right:-10px}#promo-1 .col-lg-3,#promo-1 .col-lg-6{padding-left:5px;padding-right:5px}#promo-4 .col-lg-5,#promo-4 .col-lg-7,#promo-5 .col-lg-3,#promo-5 .col-lg-6{padding-left:8px;padding-right:8px}#promo-10{margin-top:30px}#promo-11{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ");padding-top:100px;padding-bottom:60px}#promo-12{padding-top:50px}#promo-12 .bg-inner{position:relative;z-index:1}.pbox-1{text-align:center;padding-top:100px;border-radius:6px}.pbox-1-txt{background-image:linear-gradient(bottom,rgba(0,0,0,.8),rgba(0,0,0,.02));padding:70px 0 50px;border-radius:0 0 6px 6px}.pbox-2{text-align:right;padding:80px 35px 50px}.pbox-2,.pbox-5{border-radius:6px}.pbox-5{text-align:center;padding:50px 20px 60px;transition:all .4s ease-in-out}.pbox-5:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.1)}#pb-5-1.pbox-5{padding:40px 80px 50px}.pbox-6-txt{position:relative;min-height:317px}.pb6-content,.pbox-6-txt{width:100%;height:100%;text-align:center}.pb6-content{position:absolute;bottom:0;left:0;z-index:20}.pb6-txt{width:100%;position:absolute;top:50%;transform:translateY(-50%)}#pb-7-1,#pb-7-3{padding:25px 12px 10px}#pb-7-2{padding:10px 12px 30px}#pb-8-1,#pb-8-2,#pb-8-3{padding-right:5px}.pbox-8-txt{padding-left:3px}.pbox-8 .col-lg-6.rel{padding-right:0}.pbox-9-txt{text-align:center;padding:0 30px}.pbox-10-txt{position:relative;margin-right:-140px}.pbox-11-link{background-color:transparent;border:1px solid hsla(0,0%,100%,.5);border-radius:6px;padding:20px;margin-bottom:20px;transition:all .4s ease-in-out}.pbox-11-link:hover{background-color:hsla(0,0%,100%,.2)}.pbox-11-link p{font-size:1rem;line-height:1.2;font-weight:500;margin-top:10px;margin-bottom:0}.promo-12-txt{padding-left:10px}.pbox-13-item{text-align:center;padding:60px 30px;margin-bottom:40px}#pb-13-2 .pbox-13-item{border-radius:6px}.pbox-14-item{margin:0 10px}#pb-14-1.pbox-14-item{padding:60px 50px 45px;margin:0;border-radius:6px}.pbox-14-txt{text-align:center;padding:20px 10px 5px}#pb-14-1 .pbox-14-txt{padding:0}.pbox-1 h3,.pbox-2 h4{line-height:1;margin-bottom:10px}.pbox-5 h4.h4-sm{line-height:1.25;margin-bottom:5px}.pbox-6-txt h4{line-height:1.25;margin-bottom:0}.pbox-7 h4{line-height:1;margin-top:10px;margin-bottom:12px}.pbox-8 h5{line-height:1;margin-bottom:8px}.pbox-9 h2{margin-bottom:30px}.pbox-10-txt h2{font-size:6rem;line-height:1.2;letter-spacing:-1px;opacity:.8;margin-bottom:20px}.pbox-10-txt h4{font-size:1.85rem;line-height:1;font-weight:300;margin-bottom:0}.pbox-10-txt h4 span{font-size:3.25rem;font-weight:700;position:relative;top:8px;left:10px}.pbox-11-txt h3{line-height:1;letter-spacing:-1px;margin-bottom:5px}.pbox-11-txt h2{font-size:5.5rem;line-height:1.1;letter-spacing:-1px;margin-bottom:20px}.promo-12-txt h2{font-size:5.5rem;line-height:1.1;letter-spacing:-.5px;margin-bottom:25px}.promo-12-txt h3{font-size:3.25rem;line-height:1;font-weight:300;letter-spacing:0;margin-bottom:0}.promo-12-txt span{font-size:3.75rem;font-weight:400;letter-spacing:-1px;position:relative;top:3px;left:5px}.pbox-14-txt h6{margin-bottom:10px}.pbox-1-txt p{font-weight:400}.pbox-6-txt p{padding:0 10%;margin-bottom:20px}.pbox-7-txt p{margin-bottom:0}.pbox-8-txt p{font-size:.925rem;margin-bottom:30px}.pbox-9-txt p{font-weight:400;margin-bottom:0}.pbox-10-txt p{padding-right:10%}.pbox-11-txt p{font-weight:400;margin-bottom:25px}.pbox-2 .btn{margin-top:15px}.pbox-13-txt p{margin-bottom:0}.pbox-14-txt p{font-size:1rem;margin-bottom:15px}#pb-14-1 .pbox-14-txt p{font-size:1rem;padding:0 8%;margin-bottom:0}.pbox-14-txt .btn.btn-sm{padding:12px 44px}.pbox-5-price{margin-top:35px}.pbox-6-price{margin-top:6px}.pbox-7-price{margin-top:15px}.pbox-9-price{margin-top:20px}.pbox-6-price h5{line-height:1;margin-bottom:20px}.pbox-7-price h5{line-height:1;letter-spacing:-.5px;margin-bottom:0}.pbox-5-price p,.pbox-9-price p{font-size:1.15rem;letter-spacing:-.5px;margin-bottom:5px}.pbox-9-price p{font-size:1.45rem;font-weight:300}.pbox-5-price p span,.pbox-9-price p span{font-family:\"Oswald\",sans-serif;font-size:1.75rem;line-height:1;font-weight:500;letter-spacing:-.5px;position:relative;top:3px;left:10px}.pbox-9-price p span{font-size:2.25rem;top:3px;left:10px}.pbox-14-price{display:inline-block;padding:7px 12px 10px;margin-top:20px;border-radius:4px}.pbox-14-price h5{line-height:1;font-weight:700;letter-spacing:-.5px;margin-top:0;margin-bottom:1px}.owl-theme .owl-dots,.owl-theme .owl-nav{text-align:center;margin-top:35px}.owl-carousel.owl-theme .owl-nav [class*=owl-]{background:transparent;margin:0 10px;padding:0}.owl-theme .owl-nav img{width:35px;height:18px}.owl-theme .owl-nav button{background-color:transparent;border:none;padding:0 5px}.owl-theme .owl-nav button:focus{outline:0 none;box-shadow:none}.pbox-3,.pbox-3 img,.pbox-4,.pbox-4 img,.pbox-7-img,.pbox-7-img img{overflow:hidden;border-radius:6px}.pbox-6-img,.pbox-6-img img{overflow:hidden}.pbox-8-img,.pbox-8-img img{overflow:hidden;border-radius:6px}.pbox-10-img{position:relative;text-align:center;margin:-60px -60px -60px 60px}.pbox-10-img img{max-width:none;display:inline-block}.pbox-11-img{position:relative;text-align:center}.promo-12-img{margin-top:-50px;position:relative}.promo-12-img img.img-fluid{max-width:none;display:inline-block}.pbox-13-img{padding:0 10px}.pbox-14-img{border:1px solid #e5e5e5;padding:25px 20px 20px;border-radius:6px}#pb-14-1 .pbox-14-img{border:none;padding:0;border-radius:0}.pbox-3:hover img,.pbox-4:hover img{transform:scale(1.06);-ms-transform:scale(1.06);-webkit-transform:scale(1.06);-o-transform:scale(1.06);-moz-transform:scale(1.06)}.pbox-6:hover img,.pbox-7:hover img,.pbox-8:hover img{transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);-o-transform:scale(1.1);-moz-transform:scale(1.1)}#menu-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + ")}#menu-6 .col-lg-3{padding-left:8px;padding-right:8px}.menu-1-txt{padding:0 10px}.menu-2-txt{padding-left:10px}.menu-3-wrapper{padding:0 3%}.menu-3-txt{padding:0 15px}.menu-5-txt{padding:25px}.menu-6-txt{overflow:hidden;padding:25px 20px}.menu-7-txt{text-align:center;padding-top:25px}.menu-1-list li,.menu-2-list li,.menu-4-list li{margin-bottom:40px}.menu-3-list li{margin-bottom:30px}.menu-4-list.common-dishes li{margin-bottom:35px}.menu-1-list li:last-child,.menu-2-list li:last-child,.menu-3-list li:last-child,.menu-4-list li:last-child{margin-bottom:0}.menu-5-item,.menu-6-item{border:1px solid #e5e5e5;border-radius:6px;margin-bottom:30px}.menu-7-item{margin-bottom:50px}.bg-01 .menu-5-item,.bg-01 .menu-6-item,.bg-02 .menu-5-item,.bg-02 .menu-6-item,.bg-04 .menu-5-item,.bg-04 .menu-6-item{border:1px solid #171717}.menu-3-item-data{position:absolute;padding:5px 10px;top:35px;right:0;border-radius:4px;transition:all .4s ease-in-out}.menu-3-item-data h6{font-size:.95rem;line-height:1;margin-bottom:0;transition:all .4s ease-in-out}.menu-3-list li:hover .menu-3-item-data{background-color:#f7be27}.item-data-meat-hover .menu-3-list li:hover .menu-3-item-data{background-color:#d2322b}.item-data-red-hover .menu-3-list li:hover .menu-3-item-data{background-color:#e3000e}.item-data-salmon-hover .menu-3-list li:hover .menu-3-item-data{background-color:#e84e1d}.menu-3-list li:hover .menu-3-item-data h6{color:#151515}.item-data-meat-hover .menu-3-list li:hover .menu-3-item-data h6,.item-data-red-hover .menu-3-list li:hover .menu-3-item-data h6,.item-data-salmon-hover .menu-3-list li:hover .menu-3-item-data h6{color:#fff}.menu-title-wrapper{margin:0 0 3px;display:table}.menu-item-title{width:1%;white-space:nowrap;padding:0 10px 0 0}.menu-item-dots,.menu-item-title{position:relative;display:table-cell}.menu-item-dots{height:3px;width:98%;z-index:1;background-image:radial-gradient(circle closest-side,#878889 99%,transparent 100%);background-position:50% 100%;background-size:5px 2px;background-repeat:repeat-x}.menu-item-price{display:table-cell;width:1%;padding:0 0 0 10px;white-space:nowrap}.menu-item-price h5,.menu-item-price h6,.menu-item-title h5,.menu-item-title h6{line-height:1;letter-spacing:0;margin-bottom:0;transition:all .4s ease-in-out}.menu-3-title{text-align:center;margin-bottom:60px}.menu-item-desc{margin-top:12px}.menu-item-desc p{font-size:.975rem;font-weight:400;margin-bottom:3px}#menu-3 .menu-item-desc p{font-size:1.05rem;font-weight:300;padding-right:15%;margin-bottom:3px}.menu-item-desc span{font-size:.915rem;margin-bottom:0;padding-right:3px}.common-dishes .menu-item-desc span{padding-right:0}.menu-item-desc span:after{content:\"/\";padding-left:7px;position:relative}.common-dishes .menu-item-desc span:after,.menu-item-desc span:last-child:after{content:\" \";padding-left:0}.h5-sm{margin-top:5px;margin-bottom:10px;min-height:64px}@media (max-width:772px){.h5-sm{min-height:auto}}.menu-5-txt p,.menu-7-txt h6{margin-bottom:10px}.menu-5-txt p{font-size:1rem;padding-right:20%}.menu-6-txt p{font-size:.95rem;margin-bottom:15px}.menu-7-txt p{font-size:1rem;margin-bottom:15px}.menu-5-txt span.item-data{display:block;color:#888;font-size:.95rem;line-height:1;font-weight:300;margin-bottom:0}.menu-7-txt .btn.btn-sm{padding:12px 44px}.menu-5-price{position:absolute;top:40px;right:25px;padding:7px 12px 10px}.menu-5-price,.menu-6-price{display:inline-block;border-radius:4px}.menu-6-price{padding:7px 12px}.menu-7-price{display:inline-block;padding:7px 12px 10px;margin-top:20px;border-radius:4px}.menu-5-price h5,.menu-6-price h5,.menu-7-price h5{line-height:1;font-weight:700;letter-spacing:-.5px;margin-top:0;margin-bottom:1px}.menu-5-txt .add-to-basket{right:25px;bottom:20px}.menu-6-txt .add-to-basket{right:16px;bottom:18px}#tabs-nav{margin-bottom:70px}@media (max-width:772px){#tabs-nav{height:420px;overflow-y:scroll;overflow-x:hidden}}.tab-content.current,.tab-content.displayed{display:inherit}.tabs-1 li{display:inline-block;cursor:pointer;background-color:transparent;color:#9f9f9f;padding:0 70px;border-bottom:none;margin:0;transition:all .45s ease-in-out;position:relative;z-index:997}.tabs-1 li h5{line-height:1;font-weight:500;margin-top:15px;margin-bottom:0}@media (max-width:772px){.tabs-1 li h5{line-height:2}}.tabs-1 li.current h5{color:#1b1b1b;font-weight:500}.tabs-1.red-tabs li.current span{color:#e3000e}.tabs-1.brown-tabs li.current span{color:#6f5e4d}.tabs-1.yellow-tabs li.current span{color:#fac122}.tab-content{display:none}.menu-3-img{margin-top:65px;padding:0 3%}.menu-4-img{text-align:center;padding-right:30px;margin-bottom:40px}#m4-bottom .menu-4-img{padding-right:0;padding-left:30px}.menu-5-img,.menu-5-img img,.menu-6-img,.menu-6-img img{overflow:hidden;border-radius:6px 6px 0 0}.menu-7-img{border:1px solid #e5e5e5;padding:25px 20px 20px;border-radius:6px}.menu-5-item:hover img,.menu-6-item:hover img{transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);-o-transform:scale(1.1);-moz-transform:scale(1.1)}#gallery-2{padding-top:100px;padding-bottom:84px}#gallery-1 .gallery-grid{margin-left:5px;margin-right:5px}#gallery-1 .col-lg-3{padding:0 5px;margin-bottom:10px}#gallery-2 .col-lg-3{padding:0 8px;margin-bottom:16px}.hover-overlay{width:100%;height:auto;overflow:hidden;position:relative;text-align:center}.hover-overlay img{max-width:267px;max-height:234px;transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);-o-transform:scale(1);-moz-transform:scale(1);overflow:hidden;transition:transform .4s}@media (min-width:992px){.hover-overlay{height:178px}.hover-overlay img{width:100%}}@media (max-width:772px){.hover-overlay img{max-width:100%;max-height:100%}}.img-meta{width:100%;padding:30px 25px 40px;position:absolute;left:0;bottom:-50px;overflow:hidden;opacity:0;-moz-opacity:0;transition:all .5s ease-in-out}.img-meta h5{line-height:1;text-transform:uppercase;letter-spacing:0}.img-meta1 p,.img-meta h5{margin-bottom:5px}.item-overlay{opacity:0;-moz-opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(10,10,10,.45);transition:all .4s ease-in-out}.gallery-img:hover img{transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);-o-transform:scale(1.1);-moz-transform:scale(1.1)}.gallery-img:hover .item-overlay{opacity:1;-moz-opacity:1}.gallery-img:hover .img-meta{bottom:0;opacity:1;-moz-opacity:1}#gallery-3 .owl-dots{display:none}#reviews-1{padding-top:85px;padding-bottom:70px}#reviews-1.bg-image{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ")}.review-1{text-align:center;margin-bottom:40px}.review-2.b-bottom{padding-bottom:15px;margin-bottom:30px}.review-2-txt{overflow:hidden;padding-left:20px}#reviews-1 img{width:120px;height:120px;display:inline-block;margin:0 auto 20px;border-radius:100%}.review-2-avatar{display:inline-block;float:left}.review-2 img{width:80px;height:80px;display:inline-block;border-radius:100%}.review-1-txt p{font-size:1.7rem;line-height:1.45;font-weight:400;padding:0 12%;margin-bottom:25px}.review-1-txt p.testimonial-autor{font-family:\"Oswald\",sans-serif;font-size:1.1rem;line-height:1;font-weight:500;text-transform:uppercase;letter-spacing:.5px;margin-bottom:35px}.review-info{margin-top:5px;margin-bottom:5px}.review-info h5{display:inline-block;float:left;margin-right:10px}.review-info span{position:relative;color:#999;font-size:1.05rem;font-weight:500;top:2px}.review-rating{margin-bottom:15px}.review-rating i{color:#f7be27;font-size:1.1rem;line-height:1;margin:0 1px}.flex-control-paging li a{background:rgba(90,90,90,.25);width:10px;height:10px;border:2px solid rgba(90,90,90,.02)}.bg-image .flex-control-paging li a{background:transparent;border:2px solid hsla(0,0%,94.1%,.4)}.flex-control-paging li a.flex-active,.flex-control-paging li a:hover{background:rgba(111,94,77,.65);border:2px solid rgba(111,94,77,.2)}.bg-image .flex-control-paging li a.flex-active,.bg-image .flex-control-paging li a:hover{background:hsla(0,0%,100%,.5);border:2px solid hsla(0,0%,100%,.02)}#brands-1{padding-top:30px;padding-bottom:30px}#brands-1 .brand-logo{padding:10px 20px}.brand-logo img{opacity:.7}#brands-1 .owl-dots{display:none}#banner-1{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");padding-top:80px;padding-bottom:70px}#banner-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");padding-top:80px;padding-bottom:80px}#banner-3{margin-top:40px}#banner-4{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");background-position:top}.banner-1-txt{padding:0 5%}.banner-1-txt h2{text-align:center;line-height:1;margin-bottom:30px}.banner-2-txt h2{font-size:6rem;line-height:1.2;padding:0 10%;margin-bottom:40px}.banner-3-txt h4{font-weight:400;letter-spacing:0;margin-bottom:0}.banner-3-txt h2{font-size:4.5rem;font-weight:700;letter-spacing:-1px;margin-bottom:10px}.banner-4-txt h4{line-height:1;font-weight:400;margin-bottom:25px}.banner-4-txt h2{font-size:4.5rem;line-height:1;letter-spacing:0;margin-bottom:25px}.banner-2-txt p{font-size:1.5rem;font-weight:400;margin-bottom:25px}.banner-3-txt p{padding-right:10%;margin-bottom:25px}.banner-4-txt p{padding:0 5%;margin-bottom:30px}.banner-4-txt .btn{font-size:22px;font-weight:700;letter-spacing:-.5px;padding:17px 40px}.store,.stores-badge{display:inline-block}.store{text-align:center;float:left;margin-right:15px}.store:last-child{margin-right:0}img.appstore-original,img.googleplay-original{display:block;width:163px;height:50px}.banner-3-img{text-align:center;margin-top:-40px;margin-left:-30px}.faqs-1-questions{padding:0 3%}.questions-wrapper{padding:0 15px}.question{margin-bottom:30px}.question h5{margin-bottom:10px}.more-questions-btn{margin-top:35px}#newsletter-1 .inner-bg{padding:50px 0 40px;border-radius:6px}.newsletter-txt h3{margin-bottom:8px}.newsletter-txt p{font-weight:400;margin-bottom:25px}.newsletter-section .newsletter-form{padding:0 4%}.newsletter-section .form-control{height:58px;background-color:#fff;border:1px solid #ddd;color:#222;font-size:1.125rem;font-weight:300;padding:0 20px;box-shadow:none;border-radius:2px}.newsletter-section .input-group>.custom-select:not(:last-child),.newsletter-section .input-group>.form-control:not(:last-child){border-top-right-radius:2px;border-bottom-right-radius:2px}.newsletter-section .form-control:focus{border:1px solid #999;outline:0;box-shadow:none}.newsletter-section .form-control::-moz-placeholder{color:#999}.newsletter-section .form-control:-ms-input-placeholder{color:#999}.newsletter-section .form-control::-webkit-input-placeholder{color:#999}.newsletter-section .btn{height:58px;font-size:1.15rem;padding:15px 60px;margin-left:8px;border-radius:2px}.newsletter-section .form-notification{color:#2dcb21;font-size:1.1rem;line-height:1;font-weight:400;margin-top:20px}.newsletter-section .newsletter-form label.error,.newsletter-section .newsletter-form label.valid{color:#f6412d;font-size:1.1rem;font-weight:400;line-height:1;margin-top:20px;margin-bottom:0}.newsletter-section .newsletter-form label.valid{color:#48af4b}.blog-post{text-align:center;margin-bottom:40px}.blog-post-txt{padding:0 8%}.blog-post-txt h5{margin-top:25px;margin-bottom:15px}.bg-dark .blog-post-txt a:hover{color:#fff}.blog-post-txt p{font-size:.975rem;font-weight:400;text-transform:uppercase;margin-bottom:0}.blog-post:hover img{transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);-o-transform:scale(1.1);-moz-transform:scale(1.1)}#blog-listing .blog-post{text-align:left;margin-bottom:40px}#blog-listing .col-lg-4 .blog-post{margin-bottom:0}#blog-listing .blog-post.b-bottom{border-bottom:1px solid #e5e5e5;padding-bottom:40px}#blog-listing .blog-post-txt{padding:0 15px}#blog-listing .col-lg-4{padding-left:10px;padding-right:10px}#blog-listing .col-lg-4 .blog-post-txt{padding:0}#blog-listing .blog-post-txt h4.h4-xs{margin-top:30px;margin-bottom:20px}#blog-listing .blog-post-txt h5.h5-lg{margin-top:25px;margin-bottom:15px}#blog-listing h5.posts-category{border-bottom:1px solid #e5e5e5;padding-bottom:25px;margin-top:70px;margin-bottom:40px}.blog-post-meta{margin-top:15px}.blog-post-meta span{color:#999;font-size:1.15rem;font-weight:500;margin-right:14px}.blog-post-meta span i{color:#bbb;font-weight:600}.single-post-title{padding:0 4%;margin-bottom:35px}.single-post-txt{padding:0 4%}.single-post-txt h5{margin-top:30px;margin-bottom:30px}.post-inner-img{text-align:center;margin-top:50px;margin-bottom:50px}.post-inner-img img{border-radius:6px}.post-inner-img p{margin-top:25px;margin-bottom:0}.post-share-links{padding:0 4%;margin-top:60px}.post-tags-list span a{color:#757575;font-size:1rem;font-weight:400;line-height:1.42857;background-color:#f2f2f2;padding:10px 20px;margin-right:4px;border-radius:6px;transition:all .45s ease-in-out}.post-tags-list span a:hover{color:#666;background-color:#e7e7e7}.post-share-links .share-social-icons{display:inline-block;padding-left:0}.post-share-links .share-social-icons li{width:auto!important;display:inline-block!important;vertical-align:top;clear:none!important;padding:0}.post-share-links .share-social-icons a.share-ico i{color:#555;width:33px;height:33px;font-size:26px;display:block;margin-right:5px}#other-posts{padding-top:60px;padding-bottom:30px}#op-row{padding:0 4%}.other-posts h6{margin-bottom:12px}.next-post a,.prev-post a{font-size:1.0625rem;line-height:1.2}.all-posts a{font-size:2.15rem;line-height:1}.next-post a:hover,.prev-post a:hover{color:#000;text-decoration:underline}.all-posts a:hover{color:#333}.comments-wrapper{padding:0 4%}.post-comments h5{padding-bottom:30px;margin-bottom:80px;border-bottom:1px solid #ddd}.post-comments img{width:75px;height:75px;border-radius:100%}.media-body p{color:#757575}.comment-meta{margin-bottom:10px}.comment-meta h6{font-weight:700;line-height:1.1;margin-bottom:2px}.comment-date{color:#888;font-size:15px;font-weight:400;margin-bottom:5px}.btn-reply{margin-left:3px}.btn-reply a{color:#888;font-size:15px;font-weight:400}.btn-reply a i{font-size:13px;margin-right:1px}.btn-reply a:hover{color:#222}.post-comments hr{margin-top:24px;margin-bottom:40px}.post-comments #leave-comment h5{padding-bottom:0;margin-top:80px;margin-bottom:3px;border:none}.comment-form{position:relative;margin-top:50px}.comment-form p{color:#333;font-size:16px;line-height:1;font-weight:700;margin-bottom:10px;padding-left:5px;display:block}.comment-form .form-control{height:54px;background-color:#fff;border:1px solid #ccc;color:#333;font-size:18px;font-weight:300;padding:0 15px;margin-bottom:22px;border-radius:4px;transition:all .4s ease-in-out}.comment-form .form-control:focus{border-color:#00b2e4;outline:0 none;box-shadow:none}.comment-form textarea{min-height:200px}.comment-form textarea.form-control{padding:20px}.comment-form .btn{margin-top:10px}.comment-form .btn:focus{outline:0 none;box-shadow:none}.comment-form-msg{width:100%!important;display:block;margin-top:10px;padding-left:0}.comment-form .loading{color:#2dcb21;font-size:18px;font-weight:400}.comment-form .error{color:#e74c3c;font-size:14.5px;font-weight:300;margin-bottom:20px}.comment-form .form-control.error{font-size:17px!important}#contacts-1,#contacts-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");padding-top:80px;padding-bottom:50px}#contacts-2{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ")}#contacts-4{position:relative;padding-top:90px;padding-bottom:40px}#contacts-4 .section-title{padding-left:40px}#contacts-5 .section-title{margin-top:60px}.cbox-1{margin-bottom:30px}.cbox-2{margin-bottom:27px}.cbox-3{margin-bottom:37px}.cbox-2-txt{overflow:hidden;padding-left:30px}.cbox-2 span{float:left;text-align:center;margin-top:5px}.cbox-3-txt{margin-top:35px;padding:0 20px}.contacts-info{padding-left:40px}.cbox-5{text-align:center;margin-bottom:40px}.cbox-1 h5,.cbox-4 h5,.cbox-5 h5{line-height:1;margin-bottom:20px}.cbox-2-txt h5{line-height:1;margin-bottom:15px}.cbox-3-txt h5,.cbox-3-txt h6{line-height:1;margin-bottom:10px}.cbox-3-txt h6 span{font-weight:500}.cbox-1 p.p-xl{font-size:1.35rem;line-height:1;margin-bottom:10px}.cbox-1 p.p-md{line-height:1;margin-bottom:0}.cbox-1 p.yellow-color,.cbox-1 p a{font-family:\"Oswald\",sans-serif;font-size:1.85rem;line-height:1;font-weight:700;letter-spacing:-.5px;text-transform:uppercase}.cbox-1 p span{position:relative;top:-5px;margin-right:5px}.cbox-2-txt p{font-size:1.1rem}.cbox-2-txt p,.cbox-3-txt p{font-weight:400;margin-bottom:3px}.cbox-3-txt p{font-size:1.15rem;line-height:1.3}.cbox-4 p{line-height:1;margin-bottom:10px}.cbox-5 p{margin-bottom:3px}.cbox-5 p a{font-weight:700;text-decoration:underline}.contact-form .form-control{height:54px;background-color:#fff;border:1px solid #e0d9c5;box-shadow:0 0 0 0;color:#5f5842;font-size:17px;line-height:1;font-weight:300;padding:0 15px;margin-bottom:22px;border-radius:6px;transition:all .3s ease-in-out}.contact-form textarea{min-height:160px}.contact-form textarea.form-control{padding:20px 15px}.contact-form .form-control::-moz-placeholder{color:#5f5842}.contact-form .form-control:-ms-input-placeholder{color:#5f5842}.contact-form .form-control::-webkit-input-placeholder{color:#5f5842}.contact-form .form-control:focus{outline:0 none;box-shadow:none;border-color:#afa074}input:-webkit-autofill,input:-webkit-autofill:focus,input:-webkit-autofill:hover,select:-webkit-autofill,select:-webkit-autofill:focus,select:-webkit-autofill:hover,textarea:-webkit-autofill,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:hover{border:1px solid green;-webkit-text-fill-color:#555;-webkit-box-shadow:0 0 0 1000px #fff inset;-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}.contact-form-msg{width:100%!important;display:block;margin-top:10px;padding-left:0}.contact-form .loading{color:#2dcb21;font-size:18px;font-weight:400}.contact-form .error{color:#e74c3c;font-size:14.5px;font-weight:300;margin-bottom:20px}.contact-form .form-control.error{font-size:17px!important}.cbox-3:hover img{transform:scale(1.1);-ms-transform:scale(1.1);-webkit-transform:scale(1.1);-o-transform:scale(1.1);-moz-transform:scale(1.1)}.contacts-4-img{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");background-repeat:no-repeat;background-position:50%;background-size:cover;position:absolute;top:0;bottom:0;width:34%;left:0}#booking-1{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + ");margin-top:40px;margin-bottom:40px}#booking-1 .form-holder{padding:50px 40px 45px;margin:-30px 30px;border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.05)}.booking-form{margin-top:20px}.booking-form .col-lg-6,.booking-form .col-md-12{padding:0 8px}#booking-1 .form-holder a,#booking-2 .form-holder a{font-weight:700;letter-spacing:-.5px}#booking-2 .form-holder p{margin-bottom:40px}.booking-form .custom-select,.booking-form .form-control{height:52px;background-color:#fff;border:1px solid #e0d9c5;box-shadow:0 0 0 0;color:#5f5842;font-size:17px;line-height:1;font-weight:300;padding:0 15px;margin-bottom:22px;border-radius:6px;transition:all .3s ease-in-out}.booking-form .custom-select{display:inline-block;width:100%;color:#5f5842;margin-bottom:22px}.bg-color-01 .booking-form .custom-select,.bg-color-01 .booking-form .form-control{background-color:#fff;border:1px solid #e0d9c5;color:#5f5842}.booking-form textarea{min-height:120px}.booking-form textarea.form-control{padding:20px 15px}.booking-form .form-control::-moz-placeholder{color:#5f5842}.booking-form .form-control:-ms-input-placeholder{color:#5f5842}.booking-form .form-control::-webkit-input-placeholder{color:#5f5842}.booking-form .form-control:focus{outline:0 none;box-shadow:none;border-color:#afa074}.booking-form-msg{width:100%!important;display:block;margin-top:10px;padding-left:0}.booking-form .loading{color:#2dcb21;font-size:18px;font-weight:400}.booking-form .error{color:#e74c3c;font-size:14.5px;font-weight:300;margin-bottom:20px}.booking-form .form-control.error{font-size:17px!important}.google-map{position:relative;padding:0 0 40%;height:0;overflow:hidden}.google-map embed,.google-map iframe,.google-map object{position:absolute;top:0;left:0;width:100%;height:100%;border:0}#contacts-5 #gmap{margin-top:30px}.footer{padding-top:20px;padding-bottom:40px}#footer-3.footer{padding-bottom:20px}.footer.bg-dark,.footer.bg-red{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + ");width:100%;background-repeat:no-repeat;background-position:50%;background-size:cover;background-attachment:scroll!important}.footer.bg-dark{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + ")}#footer-1 .footer-contacts{padding-left:30px}#footer-4 .footer-contacts{padding-left:40px}#footer-4 .footer-info{padding-left:10px}.footer-logo{margin-bottom:30px}#footer-4 .footer-logo{margin-bottom:15px}.footer-logo img{width:auto;max-width:inherit;max-height:95px}#footer-3 .footer-logo img{max-height:120px}.footer h5{color:#283034;line-height:1;margin-bottom:25px}.bg-dark.footer h5,.bg-red.footer h5{color:#fff}.footer-contacts p,.footer-info p{margin-bottom:3px}#footer-1 .footer-info p{line-height:1;font-weight:500;margin-bottom:0}#footer-1 .footer-contacts p.p-xl{font-size:1.35rem;font-weight:500;letter-spacing:-.5px;margin-bottom:0}#footer-1 .footer-contacts p.p-lg{font-size:1.25rem;line-height:1;font-weight:500;margin-bottom:0}#footer-1 .footer-contacts p.foo-email{margin-top:15px;margin-bottom:2px}.footer-contacts p span{font-family:\"Oswald\",sans-serif;font-size:1.85rem;line-height:1;font-weight:700;letter-spacing:-.5px;position:relative;top:4px;left:6px}#footer-2 .footer-contacts p span,#footer-4 .footer-contacts p span{left:0}.footer-info p span{padding-left:8px}.footer-links li{width:auto!important;display:block!important;vertical-align:top;clear:none!important;margin:0;padding:0}.footer-links li p{margin-bottom:10px}#footer-3 .footer-socials-links{text-align:center;margin-top:10px;margin-bottom:0}.foo-socials{display:inline-block;padding-left:0;margin:0 auto}.foo-socials li{width:auto!important;display:inline-block!important;vertical-align:top;clear:none!important;margin:0 0 8px;padding:0}.foo-socials a{display:block;width:40px;height:40px;font-size:23px;line-height:1;margin:0 2px}.footer-img img.insta-img{float:left;width:75px;height:75px;margin:4px;border-radius:4px}.bottom-footer{border-top:1px solid #ddd;margin-top:30px;padding-top:40px}#footer-2 .bottom-footer{margin-top:15px}#footer-2.bg-red .bottom-footer{border-top:1px solid hsla(0,0%,100%,.25)}#footer-2.bg-dark .bottom-footer{border-top:1px solid hsla(0,0%,39.2%,.25)}.footer-copyright p{line-height:1;margin-bottom:0}#footer-3 .footer-copyright p{margin-top:10px}.bottom-footer-list li{display:inline-block!important;margin-bottom:0}.bottom-footer-list li i{position:relative;font-size:.875rem;line-height:1;top:-1px;right:3px;transition:all .4s ease-in-out}.bottom-footer-list li p{font-size:1rem;line-height:1;font-weight:300;margin-left:10px;margin-bottom:0}#footer-3 .bottom-footer-list li p{font-size:.915rem;font-weight:700;letter-spacing:1px;text-transform:uppercase}.bottom-footer-list p:after{content:\"|\";padding-left:11px;position:relative;top:-1px}.bottom-footer-list p.last-li:after{content:\" \";padding-left:0}.page-hero-section{width:100%;background-repeat:no-repeat;background-position:50%;background-size:cover;background-attachment:scroll!important;padding-top:170px;padding-bottom:120px}#about-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + ")}#blog-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ")}#booking-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ")}#cart-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ")}#contacts-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ")}#gallery-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ")}#gift-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + ")}#faqs-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + ")}#locations-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + ")}#menu-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + ")}#product-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + ")}#team-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_57___ + ")}#terms-page{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_58___ + ")}.page-hero-section h2{font-size:4rem;margin-bottom:0}#breadcrumb{margin-bottom:14px;text-align:center}.breadcrumb-nav{display:inline-block;margin:0 auto}.breadcrumb{padding:0;margin-bottom:0;background-color:transparent;border-radius:0;width:100%}.breadcrumb-item a{color:#fff;font-size:.925rem;font-weight:500;text-transform:uppercase;text-decoration:underline}@media (max-width:772px){.breadcrumb-item font{font-size:10px!important;line-height:25px}}.breadcrumb-item a:hover{color:#fff}.breadcrumb-item.active{color:#fff;font-size:.925rem;font-weight:700;text-transform:uppercase}.breadcrumb-item+.breadcrumb-item:before{font-size:.925rem;display:inline-block;padding-right:10px;color:#fff;content:\"/\"}.breadcrumb-item+.breadcrumb-item{padding-left:12px}.page-pagination{padding-bottom:100px}.blog-page-pagination{margin-top:80px;padding-top:80px}.page-link{color:#999;font-weight:600;padding:9px 16px;margin:0 3px;background-color:transparent;border-color:transparent;border-radius:3px}.page-item:first-child .page-link{border-top-left-radius:3px;border-bottom-left-radius:3px}.page-item:last-child .page-link{border-top-right-radius:3px;border-bottom-right-radius:3px}.page-item.disabled .page-link{color:#aaa;background-color:transparent;border-color:transparent}.page-item.active .page-link,.page-link:hover{background-color:#f7be27;color:#151515;border-color:#f7be27;box-shadow:0 5px 10px rgba(0,0,0,.05)}.page-link:focus{background-color:transparent;color:#666;border-color:transparent;box-shadow:0 0}.card-box{text-align:center;margin-bottom:40px}.card-box h5{margin-top:25px;margin-bottom:10px}.card-box p{padding:0 5%}.project-title{margin-bottom:15px}.project-title .stars-rating,.project-title h2{margin-bottom:8px}.project-title .stars-rating span{font-size:1.05rem;margin:0 4px;top:1px}.project-title .stars-rating i{font-size:1.05rem}.product-txt ul.txt-list li p{margin-bottom:3px}.product-info h5{margin-bottom:20px}.product-info p{color:#555;font-weight:700;position:relative;margin-bottom:0;padding:11px 0;border-bottom:1px dotted #ccc}.product-info p:last-child{border-bottom:none}.product-info p span{position:absolute;right:15px;bottom:11px;color:#333;font-weight:400}.add-to-cart-btn{display:inline-block;font-size:1.1rem;line-height:1;font-weight:700;padding:13px 32px;margin-top:25px;margin-bottom:25px;border-radius:4px;transition:all .5s ease-in-out}.add-to-cart-btn.bg-yellow:hover{background-color:#f5b200!important}#product-1-data .tab-content{padding:0 4%}#product-1-data .tabs-nav{margin-bottom:50px}.product-preview .tabs-nav{margin-top:50px;margin-bottom:0}#product-1-data .tabs-1 li{display:inline-block;cursor:pointer;background-color:transparent;color:#9f9f9f;padding:15px 50px;border-bottom:none;margin:0;transition:all .45s ease-in-out;position:relative;z-index:912;border-radius:6px}#product-1-data .tabs-1 li h5{line-height:1;font-weight:500;margin:0}#product-1-data .tabs-1 li.current{background-color:#f7be27}.tabs-2 li{opacity:.5;display:inline-block;cursor:pointer;background-color:transparent;padding:15px;border:1px solid #e5e5e5;margin:0 4px;transition:all .45s ease-in-out;position:relative;z-index:912;border-radius:6px}.tabs-2 li img{width:auto;max-width:inherit;max-height:78px}.tabs-2 li.displayed{opacity:1}table{border-collapse:collapse;margin:0;padding:0;width:100%}table tr{border-bottom:1px solid #ccc}table tr.last-tr{border-bottom:none}table td,table th{padding:16px 10px}table td.product-name{padding:16px 10px 16px 0}table th{font-size:1.15em;line-height:1;margin-bottom:0}.td-trash i{position:relative;cursor:pointer;color:#999;font-size:1.5rem;top:-2px;padding-left:25px;transition:all .4s ease-in-out}.td-trash:hover i{color:#151515}.cart-product-img{display:inline-block;float:left}.cart-product-img img{width:auto;max-width:inherit;max-height:60px}.cart-product-desc{overflow:hidden;padding-left:20px}.cart-product-desc h5{position:relative;padding-top:6px;margin-bottom:2px}.cart-product-desc p{margin-bottom:0}.cart-product-price h5,.cart-product-total h5{margin-top:12px}.cart-table .qty{margin-top:6px}.qty{height:43px;font-size:1.3rem;padding:0 3px 0 6px;margin-right:6px;border:none;box-shadow:0 0 0 1px rgba(0,0,0,.16);border-radius:4px}.qty:focus{outline:0}input[type=number]::-webkit-inner-spin-button{opacity:1}@media screen and (max-width:600px){.cart-table table{border:0}.cart-table table thead{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.cart-table table tr{border:1px solid #ddd;border-bottom:none;display:block;margin-bottom:25px}.cart-table table td{border-bottom:1px solid #ddd;display:block;font-size:1.25rem;text-align:right}.cart-table table td,.cart-table table td.product-name,.cart-table table th{padding:16px 30px}.cart-product-price h5,.cart-product-total h5{margin-top:0}.td-trash i{top:0}.cart-table table td:before{content:attr(data-label);float:left;font-weight:700}.cart-table table td.product-name:before{position:relative;top:15px}}.cart-checkout{padding:50px 45px;border-radius:6px}.cart-checkout h5{margin-bottom:20px}.cart-checkout .btn{display:block;width:100%;margin-top:20px}.cart-checkout table td,.cart-checkout table th{padding:20px 0;border-bottom:1px solid #dee2e6}.cart-checkout table .last-tr td,.cart-checkout table .last-tr th{border-bottom:none}.cart-checkout table{font-size:1.25rem;line-height:1;font-weight:700}.discount-form .form-control{height:50px;background-color:#fff;border:1px solid #ddd;color:#222;font-size:1.05rem;font-weight:300;padding:0 14px;box-shadow:none;border-radius:2px}.discount-form .input-group>.custom-select:not(:last-child),.discount-form .input-group>.form-control:not(:last-child){border-top-right-radius:2px;border-bottom-right-radius:2px}.discount-form .form-control:focus{border:1px solid #999;outline:0;box-shadow:none}.discount-form .form-control::-moz-placeholder{color:#999}.discount-form .form-control:-ms-input-placeholder{color:#999}.discount-form .form-control::-webkit-input-placeholder{color:#999}.discount-form .btn{height:50px;font-size:1.05rem;padding:15px 30px;margin-left:8px;border-radius:2px}.team-member{text-align:center;position:relative;z-index:10;margin-bottom:40px}.tm-meta{padding:25px 10px 0}.tm-meta h5{line-height:1;margin-bottom:5px}.tm-meta span{font-size:1.175rem;font-weight:500;display:block}.team-member-photo{position:relative}.team-member-photo img{border-radius:6px}.tm-social ul{width:100%;display:inline-block;padding-left:0;margin-top:14px;position:absolute;right:0;bottom:0;z-index:20;zoom:1;opacity:0;transition:all .2s ease-in-out}.tm-social ul li{width:auto!important;display:inline-block!important;vertical-align:top;clear:none!important;padding:0}.tm-social a{width:40px;height:40px;color:#fff;background-color:rgba(10,10,10,.35);font-size:1.15rem;line-height:40px!important;margin-right:1px;display:block;border-radius:100%;transition:all .4s ease-in-out}.tm-social a.ico-facebook:hover{background-color:#3b5998}.tm-social a.ico-twitter:hover{background-color:#00a9ed}.tm-social a.ico-instagram:hover{background-color:#e44772}.tm-social a.ico-dribbble:hover{background-color:#d92d84}.tm-social a.ico-behance:hover{background-color:#2473f6}.tm-social a.ico-pinterest:hover{background-color:#ac281a}.tm-social a.ico-linkedin:hover{background-color:#015886}.tm-social a.ico-google-plus:hover{background-color:#cd1111}.tm-social a.ico-youtube:hover{background-color:#cd1b20}.tm-social a.ico-tumblr:hover{background-color:#3a5976}.tm-social a.ico-vk:hover{background-color:#3b5998}.team-member:hover .tm-social ul{bottom:6%;opacity:1;-moz-opacity:1}.terms-box{margin-bottom:30px}.terms-box h5{margin-bottom:25px}.terms-box a{font-weight:500}#scrollUp{display:none;width:45px;height:45px;position:fixed;bottom:30px;right:30px;border-radius:6px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_59___ + ");background-repeat:no-repeat;background-position:50% 48%;background-color:rgba(227,0,14,.95);transition:all .4s ease-in-out}#scrollUp:hover{background-color:rgba(10,10,10,.65)}nav a#pull{display:none}.stBlock1{margin:0 20px 25px}.stBlock .btn{width:100%;line-height:1;margin-top:15px}.s_1 img{opacity:1;margin-bottom:15px;transition:all .25s ease-in-out}.s_1 img:hover{opacity:.8}@media (min-width:992px) and (max-width:1199.95px){h6.h6-xs{font-size:.95rem}h6.h6-sm{font-size:1rem}h6.h6-md{font-size:1.028rem}h6.h6-lg{font-size:1.056rem}h6.h6-xl{font-size:1.083rem}h5.h5-xs{font-size:1.11rem}h5.h5-sm{font-size:1.22rem}h5.h5-md{font-size:1.33rem}h5.h5-lg{font-size:1.44rem}h5.h5-xl{font-size:1.56rem}h4.h4-xs{font-size:1.67rem}h4.h4-sm{font-size:1.78rem}h4.h4-md{font-size:1.89rem}h4.h4-lg{font-size:2rem}h4.h4-xl{font-size:2.11rem}h3.h3-xs{font-size:2.2rem}h3.h3-sm{font-size:2.33rem}h3.h3-md{font-size:2.44rem}h3.h3-lg{font-size:2.56rem}h3.h3-xl{font-size:2.67rem}h2.h2-xs{font-size:2.78rem}h2.h2-sm{font-size:2.89rem}h2.h2-md{font-size:3rem}h2.h2-lg{font-size:3.11rem}h2.h2-xl{font-size:3.35rem}p.p-sm{font-size:.95rem}p{font-size:1rem}p.p-md{font-size:1.025rem}p.p-lg{font-size:1.08rem}p.p-xl{font-size:1.14rem}.store{margin-right:8px}img.appstore-original,img.googleplay-original{width:156px;height:48px}.section-title h2.h2-title{font-size:4.15rem}.section-title p{padding:0 15%}span.item-code{font-size:1rem;margin-top:10px}.price-badge-sm{width:140px;height:137px}.price-badge-md{width:160px;height:156px}.price-badge-lg{width:170px;height:166px}.discount-badge{left:-50px;top:100px}.discount-badge img{max-height:180px}.navik-header.sticky{position:fixed;width:100%;-webkit-animation-name:stickyTransition;animation-name:stickyTransition;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;box-shadow:0 2px 3px rgba(96,96,96,.1)}@-webkit-keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}#header-1.navik-header,#header-3.navik-header{padding-top:0}.navik-header .logo{padding:10px 0;float:none}.navik-header .logo img{width:auto;max-width:inherit;max-height:70px}.navik-menu{text-align:center}.navik-menu .mega-menu-container{text-align:left;padding:25px 8px}.navik-menu .mega-menu-container .col-lg-3,.navik-menu .mega-menu-container .col-lg-4{padding-left:8px;padding-right:8px}.mega-menu-media{margin-bottom:20px}.mega-menu-container .col-lg-4 .last-menu-box .mega-menu-media{margin-bottom:0}.navik-menu .mega-menu-desc{font-size:14px}.navik-menu .mega-menu-heading{font-size:18px;margin-bottom:5px}.navik-menu .mega-menu-media-info{padding-left:15px}.navik-menu ul.top-list{margin-top:15px}#header-3 .navik-menu ul li>a,.navik-menu ul li>a{font-size:20px;background-color:hsla(0,0%,62.7%,.05);margin-bottom:7px}.navik-menu ul li.basket-ico>a{margin-bottom:10px}#header-3 .navik-menu ul ul li>a,.navik-menu ul ul li>a{font-size:18px}#header-3 .navik-menu ul li.nav-btn a{top:0;font-size:32px;padding-left:15px;padding-right:15px}.basket-ico em.roundpoint{top:-6px}.callusbtn{display:block}#hero-2 .bg-inner,#hero-4{padding-top:100px}#hero-4{padding-bottom:80px}#hero-5 .bg-inner{padding-top:80px;margin-bottom:60px}#hero-9 .bg-inner{padding-top:100px;padding-bottom:90px}#hero-10{padding-top:80px;padding-bottom:60px}#hero-11{padding-top:90px;padding-bottom:70px}#hero-12{padding-top:100px;padding-bottom:60px}.slider,.slider .slides{height:520px}#hero-3 .slider,#hero-3 .slider .slides,#hero-6 .slider,#hero-6 .slider .slides{height:500px}#hero-8 .slider,#hero-8 .slider .slides{height:460px}#hero-1 .caption-txt{padding:0 6%;margin-top:0}#hero-3 .caption-txt{padding-left:0;margin-top:0}#hero-6 .caption-txt{padding-left:15px;margin-top:0}.hero-11-txt{margin-left:-20px;padding-right:0}#hero-1 h2{font-size:6.5rem;margin-bottom:25px}#hero-2 h2{font-size:6.25rem}#hero-3 h2,#hero-6 h2{font-size:5.25rem;margin-bottom:15px}#hero-3 h3,#hero-6 h3{font-size:2.75rem}#hero-3 h3 span,#hero-6 h3 span{font-size:3.15rem;top:1px}.hero-4-txt h2{font-size:5.5rem}.hero-4-txt h3{font-size:2rem}#hero-5 h2{font-size:15rem}#hero-9 h2{font-size:5.5rem;padding:0 5%;margin-bottom:25px}#hero-10 h2{font-size:15rem;border-bottom:6px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h3{font-size:4.25rem}#hero-11 h2{font-size:9rem;margin-bottom:20px}#hero-11 h3{font-size:4.5rem;margin-bottom:5px}#hero-11 h4{font-size:3rem}#hero-12 h3{font-size:3.75rem;margin-bottom:25px}#hero-12 h2{font-size:7.5rem}#hero-1 p{font-size:1.5rem}#hero-1 p span{font-size:2rem}.hero-4-txt p{padding:0;margin-bottom:20px}.hero-11-txt p{padding-right:0;margin-bottom:30px}.hero-12-txt p{padding:0 10%;margin-bottom:50px}.hbox-1-wrapper{padding:0 4%}.hbox-2-wrapper.ico-90 [class*=flaticon-]:after,.hbox-2-wrapper.ico-90 [class*=flaticon-]:before{font-size:5rem}.hero-5-img{margin-top:-80px;margin-bottom:-40px}.hero-11-img{margin-left:-68%}.hero-11-img img{width:92%}.hbox-1 img{padding:0 5px}#about-5,#about-6{padding-top:100px;padding-bottom:60px}#about-7{padding-top:80px;padding-bottom:40px}.about-2-txt{padding:0 15px}.about-3-txt{padding:0 5px}.about-4-txt{padding:30px 10px 0}.about-5-txt{padding:0 35px 0 0}.about-6-txt{padding:0 0 0 40px}.abox-1-wrapper{padding:0 10%;margin-bottom:0}.abox-2-wrapper{padding-right:5%;margin-top:30px}.abox-3-wrapper{margin-top:35px;padding-right:10px}.about-1-txt h2{font-size:4rem;margin-bottom:20px}.about-2-txt h2{margin-bottom:15px}.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:20px}.about-1-txt p{padding:0 10%;margin-bottom:35px}.about-2-txt p{padding:0;margin-bottom:25px}.about-4-img p{padding-left:0;padding-right:20%;margin-top:30px}.abox-4 p{padding:0 5%}.abox-3-wrapper.ico-70 [class*=flaticon-]:after,.abox-3-wrapper.ico-70 [class*=flaticon-]:before{font-size:65px}#div-01,#div-02,#div-03,#div-04,#div-05{height:420px}.pbox-1{padding-top:15px}.pbox-2{padding:50px 25px}.pbox-5{padding:45px 10px}#pb-5-1.pbox-5{padding:40px 70px 50px}.pbox-5-price{margin-top:20px}.pbox-5-price p{font-size:1.1rem;margin-bottom:5px}.pbox-5-price p span{font-size:1.6rem;top:3px;left:10px}.pbox-6-txt{min-height:266px}.pbox-6-txt p{padding:0 10%;margin-bottom:15px}.pbox-6-price h5{margin-bottom:14px}#pb-7-1,#pb-7-3{padding:25px 5px 10px}#pb-7-2{padding:10px 5px 30px}.pbox-7-txt h4{font-size:1.56rem}.pbox-7-txt p{font-size:.975rem}.pbox-7:hover .add-to-cart{bottom:6px}.pbox-8-txt p{margin-bottom:10px}.pbox-9-txt{padding:0 10px}.pbox-9 h2{margin-bottom:15px}.pbox-9-price{margin-top:15px}.pbox-9-price p span{top:4px}.pbox-10-txt{margin-right:-120px}.pbox-10-txt h2{font-size:4.75rem;margin-bottom:20px}.pbox-10-txt h4{font-size:1.25rem}.pbox-10-txt h4 span{font-size:2.5rem;top:5px;left:10px}.pbox-10-txt p{padding-right:18%}.pbox-10-img{margin:-60px -60px -60px 50px}.pbox-10-img img{width:110%}.pbox-11-txt h2{font-size:4.75rem;margin-bottom:20px}.pbox-11-txt p{font-size:.95rem}.pbox-11-link{padding:12px;margin-bottom:15px}.pbox-11-link p{font-size:.95rem}#promo-11.promo-section .price-badge-lg{top:0}.promo-12-txt h2{font-size:4.75rem;margin-bottom:25px}.promo-12-txt h3{font-size:3rem}.promo-12-txt span{font-size:3.25rem}.promo-12-img{margin-left:40px}.pbox-13-item{padding:50px 20px}.pbox-14-item{margin:0 8px}.pbox-14-txt{padding:20px 0 5px}#pb-14-1 .pbox-14-txt p{font-size:1rem;padding:0}#menu-7 .col-lg-3,#menu-8 .col-lg-3{padding-left:8px;padding-right:8px}.menu-3-wrapper{padding:0}.menu-1-txt,.menu-3-txt{padding:0 5px}.menu-2-txt{padding-left:5px}.menu-5-txt{padding:25px 16px 30px}.menu-6-txt{padding:25px 13px 20px}.menu-title-wrapper h5{font-size:1.3rem}.menu-3-item-data h6{font-size:.915rem}#menu-3 .menu-item-desc p{font-size:1rem}.menu-5-txt p{padding-right:5%;margin-bottom:10px}.menu-6-txt p{font-size:.875rem;margin-bottom:15px}.menu-7-txt p{font-size:.95rem}.menu-5-price{top:35px;right:18px}.menu-6-txt .add-to-cart{right:10px;bottom:0}.menu-6-item:hover .add-to-cart{bottom:20px}.menu-3-img{padding:0 5px}.menu-7-img .item-rating{bottom:25px;right:15px}.tabs-1 li{padding:0 50px}#gallery-1 .img-meta,#gallery-2 .img-meta{padding:30px 20px 25px}#reviews-1 img{width:110px;height:110px}.review-1-txt p{font-size:1.45rem;padding:0 10%}.banner-1-txt{padding:0}.banner-2-txt h2{font-size:5rem;padding:0 10%}.banner-2-txt p{font-size:1.25rem;padding:0 5%;margin-bottom:18px}.banner-3-txt h2{font-size:3.85rem}.banner-3-txt p{padding-right:10%}.banner-4-txt h2{font-size:4rem}.banner-4-txt p{padding:0 10%}.banner-4-txt .btn{font-size:18px;padding:15px 45px}.faqs-1-questions,.questions-wrapper{padding:0}#newsletter-1 .inner-bg{padding:50px 0 40px}.newsletter-section .newsletter-form{padding:0 8%}.newsletter-section .btn,.newsletter-section .form-control{height:56px}#blog-1 .col-lg-4{padding-left:8px;padding-right:8px}.blog-post-txt{padding:0}.blog-post-txt p{font-size:.95rem}#op-row,.comments-wrapper,.post-share-links,.single-post-title,.single-post-txt{padding:0}.post-share-links .share-social-icons a.share-ico i{font-size:22px}.all-posts a{font-size:2rem}#contacts-1,#contacts-2{padding-top:60px;padding-bottom:30px}#contacts-3 .col-lg-4{padding-left:8px;padding-right:8px}#contacts-4 .section-title,.contacts-info{padding-left:0}.cbox-1 p.yellow-color,.cbox-1 p a{font-size:1.65rem}.cbox-2-txt{padding-left:20px}.cbox-2.ico-65 [class*=flaticon-]:after,.cbox-2.ico-65 [class*=flaticon-]:before{font-size:60px}.cbox-2-txt p{font-size:1rem}.contacts-4-img{width:30%}#booking-1 .form-holder{padding:45px 30px 40px;margin:-30px 10px}.google-map{padding:0 0 38%}#footer-1 .footer-contacts,#footer-4 .footer-contacts,#footer-4 .footer-info{padding-left:0}#footer-3 .footer-logo img{max-height:100px}.footer-img img.insta-img{width:85px;height:85px;margin:3px}.foo-email.mt-15{margin-top:0}#footer-1 p.p-lg.foo-email{margin-top:5px;margin-bottom:5px}#footer-1 .footer-contacts p.p-lg,#footer-1 .footer-contacts p.p-xl{font-size:1.15rem}.footer-contacts p span{font-size:1.65rem}.page-hero-section{padding-top:120px;padding-bottom:100px}.cart-table .qty{margin-top:0}.cart-product-desc h6{font-size:1.3rem}.cart-checkout{padding:40px 35px}.cart-checkout .btn{padding-left:0;padding-right:0}.cart-checkout .table{font-size:1.15rem}.tm-meta{padding:20px 0 0}}@media (min-width:768px) and (max-width:991.95px){.wide-100{padding-top:80px;padding-bottom:80px}.wide-90{padding-top:80px;padding-bottom:70px}.wide-80{padding-top:80px;padding-bottom:60px}.wide-70{padding-top:80px;padding-bottom:50px}.wide-60{padding-top:80px;padding-bottom:40px}.wide-50{padding-top:80px;padding-bottom:30px}.wide-40{padding-top:80px;padding-bottom:20px}.wide-30{padding-top:80px;padding-bottom:10px}.wide-20{padding-bottom:0}.pt-100,.wide-20{padding-top:80px}.pb-100{padding-bottom:80px}.pt-80{padding-top:60px}.pb-80{padding-bottom:60px}.pt-60{padding-top:40px}.pb-60{padding-bottom:40px}.pb-50{padding-bottom:30px}.bg-01,.bg-02,.bg-03,.bg-04,.bg-05,.bg-scroll{background-attachment:scroll!important}h6.h6-xs{font-size:1rem}h6.h6-sm{font-size:1.05rem}h6.h6-md{font-size:1.1rem}h6.h6-lg{font-size:1.15rem}h5.h5-xs,h6.h6-xl{font-size:1.2rem}h5.h5-sm{font-size:1.3rem}h5.h5-md{font-size:1.35rem}h5.h5-lg{font-size:1.4rem}h5.h5-xl{font-size:1.5rem}h4.h4-xs{font-size:1.6rem}h4.h4-sm{font-size:1.7rem}h4.h4-md{font-size:1.6rem}h4.h4-lg{font-size:1.7rem}h4.h4-xl{font-size:1.8rem}h3.h3-xs{font-size:1.9rem}h3.h3-sm{font-size:2rem}h3.h3-md{font-size:2.1rem}h3.h3-lg{font-size:2.2rem}h3.h3-xl{font-size:2.3rem}h2.h2-xs{font-size:2.4rem}h2.h2-sm{font-size:2.5rem}h2.h2-md{font-size:2.6rem}h2.h2-lg{font-size:2.7rem}h2.h2-xl{font-size:2.8rem}p.p-sm{font-size:.95rem}p{font-size:1rem}p.p-md{font-size:1.025rem}p.p-lg{font-size:1.08rem}p.p-xl{font-size:1.125rem}.btn,.btn.btn-lg,.btn.btn-md{font-size:16px}.btn.btn-sm{font-size:15px;padding:12px 24px}.btn.btn-lg,.btn.btn-md{padding:14px 34px}.section-title h2.h2-title{font-size:3.85rem}.section-title h2.h2-xl{font-size:3.15rem}.section-title p{padding:0 12%}.like-ico.ico-20 [class*=flaticon-]:after,.like-ico.ico-20 [class*=flaticon-]:before{font-size:1.5rem}.like-ico.ico-25 [class*=flaticon-]:after,.like-ico.ico-25 [class*=flaticon-]:before{font-size:1.6rem}.price-badge-sm{width:130px;height:127px}.price-badge-md{width:150px;height:146px}.price-badge-lg{width:160px;height:156px}#hero-2 .badge-txt{top:50%}.discount-badge{left:20px;top:25px}.discount-badge img{max-height:180px}.navik-header.sticky{position:fixed;width:100%;-webkit-animation-name:stickyTransition;animation-name:stickyTransition;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;box-shadow:0 2px 3px rgba(96,96,96,.1)}@-webkit-keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}#header-1.navik-header,#header-3.navik-header{padding-top:0}.navik-header .logo{padding:10px 0;float:none}.navik-header .logo img{width:auto;max-width:inherit;max-height:70px}.navik-menu{text-align:center}.navik-menu ul.top-list{margin-top:15px}#header-3 .navik-menu ul li>a,.navik-menu ul li>a{font-size:20px;background-color:hsla(0,0%,62.7%,.05);margin-bottom:7px}.navik-menu ul li.basket-ico>a{margin-bottom:10px}#header-3 .navik-menu ul ul li>a,.navik-menu ul ul li>a{font-size:18px}.navik-menu .mega-menu-container{text-align:left;padding:25px 0 0;height:450px;overflow:scroll;overflow-x:hidden}.mega-menu-box,.mega-menu-box.last-menu-box{margin-bottom:25px}.navik-menu .mega-menu-desc{font-size:15px}.navik-menu .mega-menu-heading{font-size:20px;margin-bottom:5px}.navik-menu .mega-menu-media-info{padding-left:15px}#header-3 .navik-menu ul li.nav-btn a{top:0;font-size:32px;padding-left:15px;padding-right:15px}.basket-ico em.roundpoint{top:-6px}.callusbtn{display:block}#hero-2 .bg-inner,#hero-4{padding-top:80px}#hero-4{padding-bottom:80px}#hero-5 .bg-inner{padding-top:50px;margin-bottom:50px}#hero-9 .bg-inner{padding-top:90px;padding-bottom:80px}#hero-10{padding-top:60px}#hero-10,#hero-11{padding-bottom:50px}#hero-11{padding-top:70px}#hero-12{padding-top:80px;padding-bottom:40px}.slider,.slider .slides{height:440px}#hero-3 .slider,#hero-3 .slider .slides,#hero-6 .slider,#hero-6 .slider .slides{height:400px}#hero-8 .slider,#hero-8 .slider .slides{height:390px}.slider .indicators{bottom:20px}#hero-1 .caption-txt{padding:0 5%;margin-top:-5px}#hero-3 .caption-txt,#hero-6 .caption-txt{padding-left:0;margin-top:0}.hero-11-txt{margin-top:-20px;margin-left:0;padding-right:0}#hero-1 h2{margin-bottom:25px}#hero-1 h2,#hero-2 h2{font-size:5.25rem}#hero-3 h2,#hero-6 h2{font-size:4rem;margin-bottom:10px}#hero-3 h3,#hero-6 h3{font-size:2.15rem}#hero-3 h3 span,#hero-6 h3 span{font-size:2.75rem}.hero-4-txt h2{font-size:4rem}.hero-4-txt h3{font-size:1.75rem;margin-bottom:15px}#hero-5 h2{font-size:12rem}#hero-9 h2{font-size:4.75rem;padding:0;margin-bottom:20px}#hero-10 h2{font-size:13rem;border-bottom:4px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h3{font-size:3.5rem}#hero-11 h2{font-size:7.5rem;margin-bottom:20px}#hero-11 h3{font-size:3.75rem;margin-bottom:5px}#hero-11 h4{font-size:2.15rem;margin-bottom:20px}#hero-12 h3{font-size:2.75rem;margin-bottom:20px}#hero-12 h2{font-size:6.25rem;margin-bottom:20px}#hero-1 p{font-size:1.4rem}#hero-1 p span{font-size:1.9rem}.hero-4-txt p{padding:0;margin-bottom:25px}.hero-9-txt p{font-size:1.15rem;padding:0 5%;margin-bottom:30px}.hero-11-txt p{padding-right:0;margin-bottom:25px}.hero-12-txt p{padding:0 5%;margin-bottom:50px}.hbox-1-wrapper,.hbox-2-wrapper{padding:0 3%}.hbox-2-wrapper.ico-90 [class*=flaticon-]:after,.hbox-2-wrapper.ico-90 [class*=flaticon-]:before{font-size:4.75rem}.hero-4-img{margin-left:-25px}.hero-5-img{margin-top:-60px;margin-bottom:-30px}.hero-11-img{margin-left:-100%}.hero-11-img img{width:100%}#about-2{padding-top:80px;padding-bottom:300px}#about-5,#about-6,#about-7{padding-top:80px;padding-bottom:40px}.about-2-txt{padding:0 15px}.about-3-txt,.about-4-txt{padding:0}.about-5-txt{padding:0 5px 0 0}.about-6-txt{padding:0 0 0 5px}.abox-1-wrapper{padding:0 3%;margin-bottom:0}.abox-2-wrapper{padding-right:3%;margin-top:30px}.about-1-txt h2{font-size:3.85rem}.about-1-txt h2,.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:20px}.about-1-txt p{padding:0 5%;margin-bottom:35px}.about-2-txt p{padding:0 5%;margin-bottom:25px}.about-4-img p{padding-left:0;padding-right:0;margin-top:30px}.abox-1-wrapper.ico-75 [class*=flaticon-]:after,.abox-1-wrapper.ico-75 [class*=flaticon-]:before,.abox-2-wrapper.ico-70 [class*=flaticon-]:after,.abox-2-wrapper.ico-70 [class*=flaticon-]:before{font-size:65px;line-height:1!important}.abox-3-wrapper.ico-70 [class*=flaticon-]:after,.abox-3-wrapper.ico-70 [class*=flaticon-]:before{font-size:60px;line-height:1!important}.about-3-img{position:relative;left:-75%}.about-3-img img{max-width:none;width:170%;display:inline-block}.about-5-img{width:40%;left:60%}.about-6-img{width:40%}#div-01,#div-02,#div-03,#div-04,#div-05{height:390px}#promo-2 .col-md-6,#promo-3 .col-md-6,#promo-4 .col-md-4{padding-left:8px;padding-right:8px}.pbox-1{padding-top:30px}.pbox-1-txt p{font-size:1.025rem}.pbox-2{padding:50px 20px 40px}.pbox-3.mb-30{margin-bottom:16px}#pb-5-1.pbox-5{margin-bottom:20px}#pb-5-2.pbox-5,#pb-5-3.pbox-5{border:1px solid #e5e5e5;padding:45px 25px}#pb-5-1.pbox-5 h4,.pbox-5-txt h4{font-size:1.8rem;padding:0 12%}#pb-5-1 .price-badge-sm{width:170px;height:166px}#pb-5-1 .badge-txt h5{font-size:1.75rem}#pb-5-1 .badge-txt h4{font-size:2.05rem}.pbox-5-price p{font-size:1.25rem}.pbox-5-price p span{font-size:1.75rem;top:3px;left:10px}.pbox-6-txt{min-height:296px}.pbox-6-txt h4{font-size:1.8rem}.pbox-6-txt p{padding:0 15%;margin-bottom:20px}.pbox-6-price h5{font-size:1.65rem}#promo-7{padding-bottom:50px}.pbox-7-img{float:left}.pbox-7-img,.pbox-7-txt{display:inline-block;width:50%}#pb-7-1,#pb-7-2,#pb-7-3{padding:40px 20px 40px 30px}.pbox-7{margin-bottom:30px}.pbox-7-txt h4{font-size:1.8rem}.pbox-7-price h5{font-size:1.65rem}.pbox-7-txt .add-to-cart{opacity:1;position:relative;right:0;bottom:0;font-size:1rem;padding:10px 17px;margin-top:25px}.pbox-7:hover #pb-7-2 .add-to-cart,.pbox-7:hover .add-to-cart{bottom:0}.pbox-7-txt .add-to-cart.ico-10 [class*=flaticon-]:after,.pbox-7-txt .add-to-cart.ico-10 [class*=flaticon-]:before{font-size:.95rem}#promo-8 .col-md-4{padding-left:8px;padding-right:8px}#pb-8-1,#pb-8-2,#pb-8-3{padding-right:15px}.pbox-8-txt{text-align:center;padding:20px 0 0}.pbox-8 .col-lg-6.rel{padding-right:15px}.pbox-8 h5{font-size:1.65rem;margin-bottom:10px}.pbox-8-txt p{font-size:1.0625rem;padding:0 5%;margin-bottom:10px}.pbox-8-price h5{font-size:1.65rem}.pbox-9-txt{padding:30px 10% 0}.pbox-9 h2{margin-bottom:15px}.pbox-9-price{margin-top:15px}.pbox-9-price p{font-size:1.45rem}.pbox-9-price p span{font-size:2.15rem;top:3px;left:10px}#promo-9 .m-row{display:flex;flex-flow:wrap}#promo-9 .m-bottom,#promo-9 .m-top{width:100%}#promo-9 .m-bottom{order:1}#promo-9 .m-top{order:0}.pbox-10-txt{margin-right:-80px}.pbox-10-txt h2{font-size:4.5rem}.pbox-10-txt h4{font-size:1.35rem}.pbox-10-txt h4 span{font-size:2.25rem;top:4px}.pbox-10-txt p{padding-right:5%}.pbox-10-img{margin:-60px -60px -60px 40px}.pbox-10-img img{width:160%}#promo-11{padding-top:80px;padding-bottom:60px}.pbox-11-txt h2{font-size:4.5rem;margin-bottom:15px}.pbox-11-txt p{font-weight:300;margin-bottom:20px}#promo-11 .col-lg-2{width:52%}.pbox-11-link{width:45%;float:left;padding:10px;margin-left:8px;margin-right:8px}#promo-12{margin-top:0;overflow:hidden}.promo-12-txt{text-align:center;padding-top:80px;padding-left:0}.promo-12-txt h2{font-size:4.25rem;margin-bottom:10px}.promo-12-txt h3{font-size:2.5rem}.promo-12-txt span{font-size:3rem}.promo-12-img{margin-top:30px;margin-bottom:-170px;position:relative;overflow:hidden}.promo-12-img img.img-fluid{max-width:100%;display:inline-block}#promo-13 .col-md-4{padding-left:4px;padding-right:4px}.pbox-13-item{padding:40px 15px}.pbox-14-item{margin:0 8px}#pb-14-1.pbox-14-item{padding:60px;margin:0 8px 20px}.pbox-14-txt{padding:20px 20px 5px}.pbox-14-txt h5{font-size:1.5rem}#pb-14-1 .pbox-14-txt h5{font-size:1.8rem}#pb-14-1 .pbox-14-txt p{font-size:1rem;padding:0}.pbox-14-price h5{font-size:1.35rem}#pb-14-1 .price-badge-sm{width:170px;height:166px}#pb-14-1 .badge-txt h5{font-size:1.75rem}#pb-14-1 .badge-txt h4{font-size:2.05rem}#menu-4{padding-bottom:20px}#menu-6 .col-lg-3{padding-left:15px;padding-right:15px}.menu-3-wrapper{padding:0}.menu-1-txt,.menu-2-txt{padding-left:0}.menu-3-txt{padding:0}#m4-bottom{margin-top:-70px}.menu-1-list li.resp-lst:last-child{margin-bottom:40px}.menu-3-list li.resp-lst:last-child{margin-bottom:30px}.menu-item-price h5,.menu-item-price h6,.menu-item-title h5,.menu-item-title h6{font-size:1.5rem}.menu-3-item-data{top:38px}.menu-3-item-data h6{font-size:.95rem}.menu-item-desc p{font-size:1.025rem;margin-bottom:5px}#menu-3 .menu-item-desc p{font-size:1.025rem;padding-right:10%}.menu-item-desc span{font-size:1rem}.menu-5-txt{padding:25px 20px 35px}.menu-5-txt h5,.menu-6-txt h5,.menu-7-txt h5{font-size:1.5rem;margin-top:5px;margin-bottom:10px}.menu-5-price h5,.menu-6-price h5,.menu-7-price h5{font-size:1.35rem;line-height:1;margin-top:0;margin-bottom:1px}.menu-5-txt p{padding-right:0;margin-bottom:10px}.menu-5-txt p,.menu-5-txt span.item-data,.menu-6-txt p,.menu-7-txt p,.menu-item-desc p,.menu-item-desc span{font-size:1rem}.menu-7-txt p{padding:0 8%}.menu-6-item .like-ico{top:28px;right:20px}.menu-6-txt .add-to-cart{right:20px;bottom:20px}.menu-6-item:hover .add-to-cart{bottom:30px}.menu-7-img .like-ico,.pbox-14-img .like-ico{top:20px;right:24px}.menu-7-img .item-rating{bottom:30px;right:25px}.menu-7-txt .btn.btn-sm{padding:14px 48px}#tabs-nav{margin-bottom:50px}.tabs-1 li{padding:0 35px}.menu-3-img{padding:0}.menu-4-img{padding-right:0}#m4-top .menu-4-img{position:relative;margin-left:-175%;margin-bottom:0}#m4-bottom .menu-4-img{position:relative;margin-left:20px}#m4-bottom .menu-4-img img,#m4-top .menu-4-img img{max-width:none;display:inline-block}#gallery-2{padding-top:80px;padding-bottom:64px}#reviews-1{padding-top:80px;padding-bottom:70px}#reviews-1 img{width:100px;height:100px}.review-1-txt p{font-size:1.4rem;padding:0 1%}.banner-1-txt{padding:0}.banner-2-txt h2{font-size:4.25rem;padding:0;margin-bottom:30px}.banner-2-txt p{font-size:1.2rem;padding:0 5%;margin-bottom:15px}.banner-3-txt h2{font-size:3.5rem}.banner-3-txt p{padding:0;margin-bottom:25px}.banner-3-img img{max-width:none;width:160%;display:inline-block;margin-left:-20px}.banner-4-txt h2{font-size:4rem;line-height:1.15;margin-bottom:15px}.banner-4-txt h4{margin-bottom:14px}.banner-4-txt p{padding:0 10%;margin-bottom:25px}.banner-4-txt .btn{font-size:19px;padding:16px 40px}.faqs-1-questions,.questions-wrapper{padding:0}.more-questions-btn{margin-top:20px}#newsletter-1.mb-20{margin-bottom:0}#newsletter-1 .inner-bg{padding:50px 0 40px}.newsletter-section .newsletter-form{padding:0 3%}.newsletter-section .btn,.newsletter-section .form-control{height:56px}.blog-post-txt{padding:0 3%}#blog-listing .col-lg-4 #sp-2-1.blog-post,#blog-listing .col-lg-4 #sp-2-2.blog-post{margin-bottom:40px}#op-row,.comments-wrapper,.post-share-links,.single-post-title,.single-post-txt{padding:0}.post-share-links .share-social-icons a.share-ico i{font-size:22px}.all-posts a{font-size:2rem}.single-post-title{padding:0;margin-bottom:25px}.single-post-txt h5{margin-top:25px;margin-bottom:25px}.post-inner-img{margin-top:40px;margin-bottom:40px}#contacts-4{padding-top:80px;padding-bottom:20px}#contacts-4 .section-title,.contacts-info{padding-left:0}#contacts-4 .section-title{text-align:center;padding:0}#contacts-4 .section-title p{padding:0 12%}#contacts-5 .section-title{margin-top:50px}.cbox-1{padding-left:5%}.cbox-1 p.p-xl{font-size:1.2rem}.cbox-1 p.yellow-color,.cbox-1 p a{font-size:1.65rem}.cbox-2-txt{text-align:center;padding-left:0}.cbox-2 h5{font-size:1.5rem;margin-top:25px}.cbox-2 span{display:block;float:none}.cbox-2-txt p{font-size:1rem;margin-bottom:3px}.cbox-3 h5{font-size:1.5rem}.cbox-3 h6{font-size:1.35rem}.cbox-5 h5{font-size:1.5rem}.contacts-4-img{display:none}.google-map{padding:0 0 50%}#contacts-5 #gmap{margin-top:20px}#footer-1 .footer-contacts,#footer-4 .footer-contacts,#footer-4 .footer-info{padding-left:0}#footer-3 .footer-logo img{max-height:100px}.footer h5{font-size:1.4rem}#footer-3 .footer-socials-links{margin-top:50px;margin-bottom:20px}.foo-socials a{width:40px;height:40px;font-size:26px;margin:0 3px}.footer-img img.insta-img{width:100px;height:100px;margin:4px}.footer-contacts p,.footer-info p{margin-bottom:5px}.foo-email.mt-15{margin-top:0}#footer-1 p.p-lg.foo-email{margin-top:5px;margin-bottom:5px}#footer-1 .footer-contacts p.p-lg,#footer-1 .footer-contacts p.p-xl{font-size:1.2rem}#footer-2 .footer-contacts,#footer-2 .footer-info p,#footer-2 .footer-socials-links{padding:0 10%}.footer-contacts p span{font-size:1.75rem}.page-hero-section{padding-top:80px;padding-bottom:90px}.page-hero-section h2{font-size:3.25rem}.page-pagination{padding-bottom:80px}.blog-page-pagination{margin-top:80px;padding-top:80px}.product-description{margin-top:50px}#product-1-data .tab-content{padding:0}table th{font-size:1.05rem}.cart-product-desc1 h5{font-size:1.3rem}.product-price-total h5,.product-price h5{font-size:1.5rem}.cart-table .qty{margin-top:-2px}.cart-checkout{padding:50px}.cart-checkout h5{font-size:1.75rem}.discount-coupon.pt-15{padding-top:0}.cart-checkout{margin-top:70px}.cart-checkout .btn{font-size:1.15rem;padding:18px 20px}.tm-meta h5{font-size:1.5rem}.tm-meta span{font-size:1.25rem}.tm-social a{width:50px;height:50px;font-size:1.35rem;line-height:50px!important}}@media (max-width:767px){.wide-100{padding-top:80px;padding-bottom:80px}.wide-90{padding-top:80px;padding-bottom:70px}.wide-80{padding-top:80px;padding-bottom:60px}.wide-70{padding-top:80px;padding-bottom:50px}.wide-60{padding-top:80px;padding-bottom:40px}.wide-50{padding-top:80px;padding-bottom:30px}.wide-40{padding-top:80px;padding-bottom:20px}.wide-30{padding-top:80px;padding-bottom:10px}.wide-20{padding-bottom:0}.pt-100,.wide-20{padding-top:80px}.pb-100{padding-bottom:80px}.pt-80{padding-top:60px}.pb-80{padding-bottom:60px}.pt-60{padding-top:40px}.pb-60{padding-bottom:40px}.pb-50{padding-bottom:30px}.bg-01,.bg-02,.bg-03,.bg-04,.bg-05,.bg-scroll{background-attachment:scroll!important}.navik-header.sticky{position:fixed;width:100%;-webkit-animation-name:stickyTransition;animation-name:stickyTransition;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;box-shadow:0 2px 3px rgba(96,96,96,.1)}@-webkit-keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes stickyTransition{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}#header-1.navik-header,#header-3.navik-header{padding-top:0}.navik-header .logo{padding:10px 0;float:none}.navik-header .logo img{width:auto;max-width:inherit;max-height:70px}.navik-menu{text-align:center}.navik-menu ul.top-list{margin-top:15px}#header-3 .navik-menu ul li>a,.navik-menu ul li>a{font-size:20px;background-color:hsla(0,0%,62.7%,.05);margin-bottom:7px}.navik-menu ul li.basket-ico>a{margin-bottom:10px}#header-3 .navik-menu ul ul li>a,.navik-menu ul ul li>a{font-size:18px}#header-3 .navik-menu ul li.nav-btn a{top:0;font-size:32px;padding-left:15px;padding-right:15px}.basket-ico em.roundpoint{top:-6px}.callusbtn{display:block}.navik-menu .mega-menu-container{padding:20px 8px 0;height:320px;overflow:scroll;overflow-x:hidden}.mega-menu-box{margin-bottom:20px;padding-bottom:20px;border-bottom:1px dashed #ccc}.navik-menu .mega-menu-desc{font-size:16px}.navik-menu .mega-menu-heading{font-size:18px;margin-bottom:5px}.mega-menu-thumbnail{display:none}.menu-1-list li.resp-lst:last-child,.menu-3-list li.resp-lst:last-child{margin-bottom:40px}#op-row,.comments-wrapper,.post-share-links,.single-post-title,.single-post-txt{padding:0}#blog-listing .col-lg-4 #sp-2-1.blog-post,#blog-listing .col-lg-4 #sp-2-2.blog-post{margin-bottom:40px}#blog-listing .col-lg-4{padding-left:15px;padding-right:15px}.single-post-title{padding:0;margin-bottom:25px}.single-post-txt h5{margin-top:25px;margin-bottom:25px}.post-inner-img{margin-top:40px}.blog-post-img.top-img,.post-inner-img{margin-bottom:40px}.contacts-4-img{display:none}#booking-2{padding-bottom:70px}.page-pagination{padding-bottom:80px}.blog-page-pagination{margin-top:80px;padding-top:80px}.product-description{margin-top:50px}#product-1-data .tab-content{padding:0}.cart-checkout{margin-top:60px}}@media (min-width:480px) and (max-width:767.95px){.m-row{display:flex;flex-flow:wrap}.m-bottom,.m-top{width:100%}.m-bottom{order:1}.m-top{order:0}h6.h6-xs{font-size:1rem}h6.h6-sm{font-size:1.05rem}h6.h6-md{font-size:1.1rem}h6.h6-lg{font-size:1.15rem}h6.h6-xl{font-size:1.2rem}h5.h5-xs{font-size:1.4rem}h5.h5-md,h5.h5-sm{font-size:1.5rem}h4.h4-sm,h4.h4-xs,h5.h5-lg,h5.h5-xl{font-size:1.6rem}h4.h4-md{font-size:1.65rem}h4.h4-lg{font-size:1.7rem}h4.h4-xl{font-size:1.8rem}h3.h3-xs{font-size:1.9rem}h3.h3-sm{font-size:1.95rem}h3.h3-md{font-size:2rem}h3.h3-lg{font-size:2.05rem}h3.h3-xl{font-size:2.1rem}h2.h2-xs{font-size:2.15rem}h2.h2-sm{font-size:2.25rem}h2.h2-md{font-size:2.35rem}h2.h2-lg{font-size:2.45rem}h2.h2-xl{font-size:2.55rem}p.p-sm{font-size:1rem}p{font-size:1.0625rem}p.p-md{font-size:1.093rem}p.p-lg{font-size:1.1rem}p.p-xl{font-size:1.125rem}.btn,.btn.btn-lg,.btn.btn-md{font-size:16px}.btn.btn-sm{font-size:15px;padding:12px 24px}.btn.btn-lg,.btn.btn-md{padding:14px 34px}.section-title h2.h2-title{font-size:3.5rem}.section-title h2.h2-xl{font-size:3rem}.section-title p{padding:0}.like-ico.ico-20 [class*=flaticon-]:after,.like-ico.ico-20 [class*=flaticon-]:before{font-size:1.5rem}.like-ico.ico-25 [class*=flaticon-]:after,.like-ico.ico-25 [class*=flaticon-]:before{font-size:1.6rem}.price-badge-sm{width:130px;height:127px}.price-badge-md{width:150px;height:146px}.price-badge-lg{width:160px;height:156px}#hero-2 .badge-txt{top:50%}.discount-badge{left:20px;top:25px}.discount-badge img{max-height:170px}#hero-2 .bg-inner,#hero-4{padding-top:80px}#hero-4{padding-bottom:80px}#hero-5 .bg-inner{padding-top:50px;margin-bottom:30px}#hero-9 .bg-inner{padding-top:80px;padding-bottom:80px}#hero-10{padding-top:60px;padding-bottom:50px}#hero-11{padding-top:80px;padding-bottom:80px}#hero-12{padding-top:80px;padding-bottom:50px}.slider,.slider .slides{height:380px}#hero-3 .slider,#hero-3 .slider .slides,#hero-6 .slider,#hero-6 .slider .slides{height:360px}#hero-8 .slider,#hero-8 .slider .slides{height:320px}#hero-1 .caption-txt{padding:0;margin-top:-10px}#hero-3 .caption-txt,#hero-6 .caption-txt{padding-left:0;margin-top:0}.hero-4-txt{padding:0 5%;margin-top:30px}.hero-11-txt{text-align:center;margin-top:35px;margin-left:0;padding-right:0}#hero-1 h2{margin-bottom:20px}#hero-1 h2,#hero-2 h2{font-size:4.25rem}#hero-3 h2,#hero-6 h2{font-size:3.25rem;margin-bottom:10px}#hero-3 h3,#hero-6 h3{font-size:2.15rem}#hero-3 h3 span,#hero-6 h3 span{font-size:2.5rem;top:0}.hero-4-txt h2{font-size:4.5rem}.hero-4-txt h3{font-size:2rem;margin-bottom:15px}#hero-5 h2{font-size:9rem}#hero-9 h2{font-size:3.75rem;padding:0;margin-bottom:20px}#hero-10 h2{font-size:12rem;border-bottom:4px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h3{font-size:3.15rem;margin-bottom:60px}#hero-11 h2{font-size:7.5rem;margin-bottom:20px}#hero-11 h3{font-size:3.25rem;margin-bottom:5px}#hero-11 h4{font-size:2rem;margin-bottom:20px}#hero-12 h3{font-size:2.5rem;margin-bottom:20px}#hero-12 h2{font-size:5.25rem;margin-bottom:15px}#hero-1 p{font-size:1.35rem}#hero-1 p span{font-size:1.85rem}.hero-4-txt p{padding:0 5%;margin-bottom:25px}.hero-9-txt p{font-size:1.0625rem;padding:0 5%;margin-bottom:30px}.hero-11-txt p{padding:0 10%;margin-bottom:25px}.hero-12-txt p{padding:0 4%;margin-bottom:50px}.hbox-1-wrapper,.hbox-2-wrapper{padding:0}.hbox-2-wrapper.ico-90 [class*=flaticon-]:after,.hbox-2-wrapper.ico-90 [class*=flaticon-]:before{font-size:4.25rem}.hero-5-img{margin-top:-40px;margin-bottom:-20px}.hero-4-img{padding:0 5%}.hero-11-img{margin-left:-10%}.hero-11-img img{max-width:100%;display:block}#about-2{padding-top:80px;padding-bottom:300px}#about-5,#about-6{padding-top:80px;padding-bottom:0}#about-7{padding-top:80px;padding-bottom:40px}.about-2-txt,.about-3-txt,.about-4-txt{padding:0}.about-5-txt{padding:0;margin-bottom:40px}.about-6-txt{padding:0;margin-bottom:80px}.abox-1-wrapper{padding:0;margin-bottom:10px}.abox-2-wrapper{margin-top:30px}.about-1-txt h2{font-size:3.25rem}.about-1-txt h2,.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:20px}.about-1-txt p{padding:0 4%;margin-bottom:35px}.about-2-txt p{padding:0 3%;margin-bottom:25px}.about-4-img p{padding-left:0;padding-right:0;margin-top:30px}.about-3-img{margin:0 5% 30px}.about-5-img,.about-6-img{background-position:50%;position:relative;left:0;height:360px;width:auto!important;margin:0}#div-01,#div-02,#div-03,#div-04,#div-05{height:350px}#pb-1-1,#pb-1-2{margin-bottom:30px}#promo-1 .row{margin-left:5px;margin-right:5px}#promo-1 .col-lg-3,#promo-1 .col-lg-6{padding-left:15px;padding-right:15px}.pbox-1{padding-top:0}.pbox-1-txt{padding:50px 0}.pbox-1-txt h3{font-size:2.25rem}.pbox-2{padding:50px 30px 30px}#pb-2-1{margin-bottom:30px}.pbox-2-txt h4{font-size:2rem}.pbox-3-last{margin-top:30px}.pbox-4{margin-bottom:30px}.pbox-4.pbox-4-last{margin-bottom:0}#pb-5-1.pbox-5{padding:50px 35px;margin-bottom:20px}#pb-5-2.pbox-5,#pb-5-3.pbox-5{border:1px solid #e5e5e5;padding:50px 15px}#pb-5-1.pbox-5 h4,.pbox-5-txt h4{font-size:1.85rem;padding:0}#pb-5-1 .price-badge-sm{width:170px;height:166px}#pb-5-1 .badge-txt h5{font-size:1.75rem}#pb-5-1 .badge-txt h4{font-size:2.05rem}.pbox-5-price p{font-size:1.15rem}.pbox-5-price p span{font-size:1.7rem;top:3px;left:10px}.pbox-6-txt{min-height:300px}.pbox-6-txt h4{font-size:1.85rem}.pbox-6-txt p{padding:0 15%;margin-bottom:20px}.pbox-6-price h5{font-size:1.7rem}#promo-7{padding-bottom:40px}.pbox-7{margin-bottom:40px}#pb-7-1,#pb-7-2,#pb-7-3{padding:30px 15px 0}.pbox-7-price h5,.pbox-7-txt h4{font-size:1.85rem}.pbox-7-txt .add-to-cart{right:20px;bottom:-10px;font-size:1rem;padding:10px 17px}.pbox-7:hover #pb-7-2 .add-to-cart,.pbox-7:hover .add-to-cart{bottom:-4px}.pbox-7-txt .add-to-cart.ico-10 [class*=flaticon-]:after,.pbox-7-txt .add-to-cart.ico-10 [class*=flaticon-]:before{font-size:.95rem}#pb-8-1,#pb-8-2,#pb-8-3{padding-right:15px}.pbox-8-txt{text-align:center;padding:30px 0 0}.pbox-8 .col-lg-6.rel{padding-right:15px}.pbox-8{margin-bottom:30px}.pbox-8.pbox-8-last{margin-bottom:0}.pbox-8 h5{font-size:1.85rem;margin-bottom:10px}.pbox-8-txt p{font-size:1.0625rem;padding:0;margin-bottom:10px}.pbox-8-price h5{font-size:1.85rem}.pbox-9-txt{padding:30px 0 0}.pbox-9 h2{margin-bottom:10px}.pbox-9-price{margin-top:10px}.pbox-9-price p{font-size:1.65rem}.pbox-9-price p span{font-size:2.15rem;top:3px;left:10px}#promo-10{margin-top:0;margin-bottom:0;overflow:hidden}.pbox-10-txt{text-align:center;padding-top:80px;margin:0 0 40px}.pbox-10-txt h2{font-size:4.75rem}.pbox-10-txt h4{font-size:1.5rem}.pbox-10-txt h4 span{font-size:2.5rem;top:4px}.pbox-10-txt p{padding:0}.pbox-10-img{margin:0 0 -200px;position:relative;overflow:hidden}.pbox-10-img img{max-width:100%;display:inline-block}#promo-10.promo-section .price-badge-md{top:40px;left:50px}.pbox-11-txt{text-align:center}.pbox-11-txt h2{font-size:3.75rem;margin-bottom:15px}.pbox-11-txt p{font-weight:300;padding:0 10%;margin-bottom:20px}#promo-11{padding-top:80px;padding-bottom:60px}#promo-11 .col-lg-2{width:70%;margin:0 15%}.pbox-11-link{width:45%;float:left;padding:10px;margin-left:8px;margin-right:8px}.pbox-11-img{margin-bottom:25px}#promo-12{padding-top:0;overflow:hidden}.promo-12-txt{text-align:center;padding-top:80px;padding-left:0}.promo-12-txt h2{font-size:3.75rem;margin-bottom:10px}.promo-12-txt h3{font-size:2.15rem}.promo-12-txt span{font-size:2.75rem}.promo-12-img{margin-top:30px;margin-bottom:-100px;position:relative;overflow:hidden}.promo-12-img img.img-fluid{max-width:100%;display:inline-block}.pbox-13-item{padding:60px 30px}#pb-13-1.pbox-13-item{padding:20px 30px}#pb-13-3.pbox-13-item{padding:20px 30px 0}.pbox-14-item{margin:0 5px}#pb-14-1.pbox-14-item{padding:50px 35px;margin:0 5px 20px}.pbox-14-item h5{font-size:1.65rem}#pb-14-1 .pbox-14-txt p,.pbox-14-item p{font-size:1.0625rem;padding:0}.pbox-14-price h5{font-size:1.5rem}.pbox-14-txt .btn.btn-sm{font-size:15px;padding:14px 48px}#pb-14-1 .price-badge-sm{width:170px;height:166px}#pb-14-1 .badge-txt h5{font-size:1.75rem}#pb-14-1 .badge-txt h4{font-size:2.05rem}.pbox-14-img{padding:25px 35px 20px}#menu-5 .col-lg-4,#menu-7 .col-lg-3,#menu-8 .col-lg-3{padding-left:8px;padding-right:8px}.menu-1-txt,.menu-3-txt,.menu-3-wrapper{padding:0}.menu-2-txt{padding-left:0}.menu-item-title{margin-bottom:10px}.menu-item-price h5,.menu-item-price h6,.menu-item-title h5,.menu-item-title h6{font-size:1.5rem}.menu-item-desc p{font-size:1.0625rem;margin-bottom:5px}.menu-item-desc span{font-size:1rem}.menu-3-title{margin-bottom:50px}.menu-3-item-data{top:40px}.menu-5-txt{padding:25px 16px 50px}.menu-6-txt{padding:25px 16px}.menu-5-txt h5,.menu-6-txt h5,.menu-7-txt h5{font-size:1.5rem;margin-top:5px;margin-bottom:10px}.menu-5-price h5,.menu-6-price h5,.menu-7-price h5{font-size:1.4rem;line-height:1;margin-top:0;margin-bottom:1px}.menu-5-txt p{font-size:.95rem;padding-right:0;margin-bottom:10px}.menu-5-txt span.item-data{font-size:1rem}.menu-item-desc p,.menu-item-desc span{font-size:1.0625rem}#menu-3 .menu-item-desc p{font-size:1.0625rem;padding-right:12%}.menu-5-price{top:-20px;right:20px}.menu-7-img .like-ico,.pbox-14-img .like-ico{top:15px;right:19px}.menu-7-txt .btn.btn-sm{font-size:16px;padding:14px 48px}.menu-7-img .item-rating,.pbox-14-img .item-rating{bottom:30px;right:20px}#tabs-nav{margin-bottom:50px}.tabs-1 li{padding:0 25px}.tabs-1 li h5{font-size:1.4rem}.tabs-1.co-55 [class*=flaticon-]:after,.tabs-1.ico-55 [class*=flaticon-]:before{font-size:45px;line-height:1!important}.menu-3-img{padding:0;margin-top:40px}.menu-3-img.mb-60{margin-bottom:50px}.menu-4-img{display:none}#gallery-2{padding-top:80px;padding-bottom:64px}#reviews-1{padding-top:80px;padding-bottom:70px}.review-info span{font-size:1.125rem;top:2px}#reviews-1 img{width:100px;height:100px}.review-1-txt p{font-size:1.3rem;padding:0}.review-1-txt p.testimonial-autor{font-size:1.25rem}.banner-1-txt{padding:0}.banner-1-txt h2{font-size:3.5rem}.banner-2-txt h2{font-size:4rem;padding:0;margin-bottom:30px}.banner-2-txt p{font-size:1.2rem;padding:0;margin-bottom:15px}#banner-3{text-align:center;padding-top:80px;margin-top:0}.banner-3-txt h2{font-size:3.75rem}.banner-3-txt p{padding:0;margin-bottom:25px}.banner-3-img{margin-top:30px;margin-left:0}.banner-4-txt h2{font-size:3.5rem;line-height:1.15;margin-bottom:15px}.banner-4-txt h4{margin-bottom:14px}.banner-4-txt p{padding:0 5%;margin-bottom:25px}.banner-4-txt .btn{font-size:19px;padding:16px 40px}.faqs-1-questions,.questions-wrapper{padding:0}.question h5{font-size:1.4rem}.more-questions-btn{margin-top:20px}#newsletter-1.mb-20{margin-bottom:0}#newsletter-1 .inner-bg{padding:50px 0 40px}.newsletter-txt h3{font-size:2.15rem}.newsletter-txt p{padding:0 15%}.newsletter-section .newsletter-form{padding:0 10%}.newsletter-form .form-control{text-align:center;font-size:1.125rem;margin-right:0;margin-bottom:15px}.newsletter-form .form-control,.newsletter-section .btn,.newsletter-section .input-group-btn{display:block;width:100%!important}.newsletter-section .btn{font-size:1.125rem;margin-left:0}.blog-post-txt{padding:0}.post-share-links{margin-top:50px}.post-share-list.text-right{text-align:left!important;margin-top:35px;margin-left:8px}.post-share-links .share-social-icons a.share-ico i{width:33px;height:33px;font-size:25px;margin-right:6px}.post-tags-list span a{font-size:1rem;padding:8px 16px}.next-post,.prev-post{text-align:center}.next-post h6,.prev-post h6{font-size:1.5rem}.all-posts a{font-size:2.25rem}#contacts-4{padding-top:80px;padding-bottom:20px}#contacts-4 .section-title,.contacts-info{padding-left:0}.contacts-info{text-align:center}#contacts-4 .form-holder,#contacts-5 .form-holder{margin-left:12px;margin-right:12px}#contacts-4 .section-title{text-align:center;padding:0}#contacts-4 .section-title p{padding:0}#contacts-5 .section-title{margin-top:45px}.cbox-1{padding-left:5%}.cbox-1 p.p-xl{font-size:1.2rem}.cbox-1 p.yellow-color,.cbox-1 p a{font-size:1.65rem}.cbox-2 h5{font-size:1.5rem}.cbox-3 h5{font-size:1.75rem}.cbox-3 h6{font-size:1.45rem}.cbox-5 h5{font-size:1.75rem}#booking-1 .form-holder{padding:45px 30px 40px;margin:-30px 10px}#booking-2 .form-holder{margin-left:12px;margin-right:12px}.google-map{padding:0 0 50%}#contacts-5 #gmap{margin-top:10px}#footer-1 .footer-contacts,#footer-4 .footer-contacts,#footer-4 .footer-info{padding-left:0}#footer-3 .footer-logo img{max-height:100px}.footer h5{font-size:1.4rem}#footer-3 .footer-socials-links{margin-top:50px;margin-bottom:20px}.foo-socials a{width:40px;height:40px;font-size:28px;margin:0 3px}.footer-img img.insta-img{width:100px;height:100px;margin:4px}.footer-contacts p,.footer-info p{margin-bottom:5px}.foo-email.mt-15{margin-top:0}#footer-1 p.p-lg.foo-email{margin-top:5px;margin-bottom:5px}#footer-1 .footer-contacts p.p-lg,#footer-1 .footer-contacts p.p-xl{font-size:1.25rem}.footer-contacts p span{font-size:1.75rem}.bottom-footer-list li{padding-bottom:4px}#footer-3 .bottom-footer-list li{padding-bottom:7px}.bottom-footer-list.text-right{text-align:left!important}#footer-4 .footer-copyright{margin-bottom:10px}#footer-3 .footer-copyright p{margin-top:20px}.bottom-footer-list li i{font-size:.95rem}.bottom-footer-list li p{font-size:1.0625rem;line-height:1.5}.bottom-footer-list li p.first-list-link{margin-left:0}#footer-3 .bottom-footer-list li p{font-size:1rem;line-height:1.5}.page-hero-section{padding-top:130px;padding-bottom:80px}.page-hero-section h2{font-size:3.1rem}.cards-01-img.mb-100{margin-bottom:70px}.card-box img{padding:0 5%}.card-box h5{font-size:2rem}.card-box p{font-size:1.0625rem;padding:0 15%}.cart-table.mb-70{margin-bottom:40px}.cart-product-desc h6{font-size:1.3rem}.cart-product-desc{padding-left:0}.discount-coupon.pt-15{padding-top:0}.discount-form{margin-bottom:50px}.discount-coupon .col-lg-5.text-right{text-align:center!important}.cart-checkout .btn{padding:16px 30px;font-size:1.15rem}.tm-meta h5{font-size:1.5rem}.tm-meta span{font-size:1.25rem}.tm-social a{width:50px;height:50px;font-size:1.35rem;line-height:50px!important}#scrollUp{bottom:20px;right:20px}}@media (min-width:414px) and (max-width:479.95px){#stlChanger{display:none}.m-row{display:flex;flex-flow:wrap}.m-bottom,.m-top{width:100%}.m-bottom{order:1}.m-top{order:0}h6.h6-xs{font-size:1rem}h6.h6-sm{font-size:1.05rem}h6.h6-md{font-size:1.1rem}h6.h6-lg{font-size:1.15rem}h6.h6-xl{font-size:1.2rem}h5.h5-xs{font-size:1.4rem}h5.h5-md,h5.h5-sm{font-size:1.5rem}h4.h4-md,h4.h4-sm,h4.h4-xs,h5.h5-lg,h5.h5-xl{font-size:1.6rem}h4.h4-lg{font-size:1.65rem}h4.h4-xl{font-size:1.7rem}h3.h3-xs{font-size:1.75rem}h3.h3-sm{font-size:1.8rem}h3.h3-md{font-size:1.9rem}h3.h3-lg{font-size:2rem}h2.h2-xs,h3.h3-xl{font-size:2.1rem}h2.h2-sm{font-size:2.2rem}h2.h2-md{font-size:2.3rem}h2.h2-lg{font-size:2.4rem}h2.h2-xl{font-size:2.5rem}p.p-sm{font-size:1rem}p{font-size:1.0625rem}p.p-lg,p.p-md,p.p-xl{font-size:1.1rem}.btn,.btn.btn-lg,.btn.btn-md{font-size:16px}.btn.btn-sm{font-size:15px;padding:12px 24px}.btn.btn-lg,.btn.btn-md{padding:14px 34px}.section-title.mb-60{margin-bottom:45px}.section-title h2.h2-title{font-size:2.75rem}.section-title p{padding:0 5%}.stars-rating i{font-size:.95rem}.stars-rating.stars-lg i{font-size:1.05rem}.menu-7-img .item-rating,.pbox-14-img .item-rating{bottom:35px;right:20px}.like-ico.ico-20 [class*=flaticon-]:after,.like-ico.ico-20 [class*=flaticon-]:before,.like-ico.ico-25 [class*=flaticon-]:after,.like-ico.ico-25 [class*=flaticon-]:before{font-size:1.75rem}.menu-6-item .like-ico{top:32px;right:22px}.menu-7-img .like-ico,.pbox-14-img .like-ico{top:25px;right:25px}.add-to-cart{font-size:1rem;padding:10px 17px}.add-to-cart.ico-10 [class*=flaticon-]:after,.add-to-cart.ico-10 [class*=flaticon-]:before{font-size:.95rem}.price-badge-sm{width:115px;height:112px}.price-badge-md{width:135px;height:132px}.price-badge-lg{width:155px;height:151px}#hero-2 .badge-txt{top:50%}.discount-badge{left:10px;top:5px}.discount-badge img{max-height:140px}.navik-menu .mega-menu-container{padding:20px 0 0;height:320px;overflow:scroll;overflow-x:hidden}.mega-menu-desc{padding-left:14%;padding-right:14%}.callusbtn{top:35px;left:6px}.callusbtn a{font-size:20px}.burger-menu{width:23px;height:20px;top:35px;right:6px}#hero-2 .bg-inner,#hero-4{padding-top:80px}#hero-4{padding-bottom:80px}#hero-5 .bg-inner{padding-top:50px;margin-bottom:30px}#hero-9 .bg-inner{padding-top:80px;padding-bottom:80px}#hero-10{padding-top:60px;padding-bottom:50px}#hero-11{padding-top:80px;padding-bottom:80px}#hero-12{padding-top:80px;padding-bottom:50px}.slider,.slider .slides{height:350px}#hero-3 .slider,#hero-3 .slider .slides,#hero-6 .slider,#hero-6 .slider .slides{height:330px}#hero-3 .slider .slides li img,#hero-6 .slider .slides li img{background-position:0}#hero-3 .slider .slides li#slide-2 img{background-position:100%}#hero-8 .slider,#hero-8 .slider .slides{height:280px}#hero-1 .caption-txt{padding:0;margin-top:-10px}#hero-3 .caption-txt{padding-left:0;margin-top:-15px}.hero-4-txt{padding:0;margin-top:30px}#hero-3 .caption-txt,#hero-6 .caption-txt{text-align:center;padding-left:0;margin-top:-20px}.hero-11-txt{text-align:center;margin-top:35px;margin-left:0;padding-right:0}#hero-1 h2{letter-spacing:2px;margin-bottom:15px}#hero-1 h2,#hero-2 h2{font-size:3.15rem}#hero-3 h2,#hero-6 h2{font-size:4rem;margin-bottom:10px}#hero-3 h3,#hero-6 h3{font-size:2.15rem}#hero-3 h3 span,#hero-6 h3 span{font-size:2.5rem;top:0}.hero-4-txt h2{font-size:4.75rem}.hero-4-txt h3{font-size:1.85rem;margin-bottom:15px}#hero-5 h2{font-size:7rem}#hero-9 h2{font-size:3.25rem;padding:0;margin-bottom:20px}#hero-10 h2{font-size:10rem;border-bottom:3px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h3{font-size:2.75rem;margin-bottom:60px}#hero-11 h2{font-size:7rem;margin-bottom:20px}#hero-11 h3{font-size:3rem;margin-bottom:5px}#hero-11 h4{font-size:2rem;margin-bottom:20px}#hero-12 h3{font-size:2.15rem;margin-bottom:20px}#hero-12 h2{font-size:6.5rem;margin-bottom:15px}#hero-1 p{font-size:1.25rem}#hero-1 p span{font-size:1.75rem}.hero-4-txt p{padding:0;margin-bottom:25px}.hero-9-txt p{font-size:1.0625rem;padding:0;margin-bottom:30px}.hero-11-txt p{padding:0;margin-bottom:25px}.hero-12-txt p{padding:0;margin-bottom:40px}.hbox-1-wrapper,.hbox-2-wrapper{padding:0 3%}.hbox-1-wrapper .col-sm-3,.hbox-2-wrapper .col-sm-3{width:25%;float:left;padding-left:8px;padding-right:8px}.hbox-1 h5,.hbox-2 h5{font-size:1.15rem;margin-top:20px}.hbox-2-wrapper.ico-90 [class*=flaticon-]:after,.hbox-2-wrapper.ico-90 [class*=flaticon-]:before{font-size:3.65rem}.hero-4-img,.hero-5-img{padding:0 5%}.hero-5-img{margin-top:-30px;margin-bottom:-20px}.hero-11-img{margin-left:-10%}.hero-11-img img{max-width:100%;display:block}#about-2{padding-top:80px;padding-bottom:300px}#about-5,#about-6{padding-top:80px;padding-bottom:0}#about-3,#about-7{padding-bottom:40px}#about-7{padding-top:80px}.about-2-txt,.about-4-txt{padding:0}.about-3-txt{padding:0;margin-bottom:0}.about-5-txt{padding:0;margin-bottom:40px}.about-6-txt{padding:0;margin-bottom:80px}.abox-1-wrapper{padding:0;margin-bottom:10px}.abox-2-wrapper{margin-top:30px}.abox-1-wrapper .col-sm-4,.abox-2-wrapper .col-sm-3,.abox-3-wrapper .col-sm-3{width:50%;float:left}.abox-2{margin-bottom:40px}.abox-4{padding:0 5%}.about-1-txt h2{font-size:3.5rem;padding:0 5%}.about-1-txt h2,.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:20px}.about-1-txt p{padding:0 3%;margin-bottom:35px}.about-2-txt p{padding:0 3%;margin-bottom:25px}.about-4-img p{padding-left:0;padding-right:0;margin-top:30px}.about-3-img{margin:0 0 30px}.about-5-img,.about-6-img{background-position:50%;position:relative;left:0;height:360px;width:auto!important;margin:0}#div-01,#div-02,#div-03,#div-04,#div-05{height:300px}#pb-1-1,#pb-1-2{margin-bottom:30px}#promo-1 .row{margin-left:0;margin-right:0}#promo-1 .col-lg-3,#promo-1 .col-lg-6{padding-left:0;padding-right:0}.pbox-1{padding-top:0}.pbox-1-txt{padding:50px 0}.pbox-1-txt h3{font-size:2.2rem}.pbox-2{padding:40px 25px}#pb-2-1{margin-bottom:30px}.pbox-2-txt h4{font-size:2rem}.pbox-3-last{margin-top:30px}.pbox-4{margin-bottom:30px}.pbox-4.pbox-4-last{margin-bottom:0}#pb-5-1.pbox-5,#pb-5-2.pbox-5{padding:50px 35px;margin-bottom:20px}#pb-5-2.pbox-5,#pb-5-3.pbox-5{border:1px solid #e5e5e5}#pb-5-3.pbox-5{padding:50px 35px}#pb-5-1.pbox-5 h4,.pbox-5-txt h4{font-size:2rem;padding:0 10%}#pb-5-1 .price-badge-sm{width:140px;height:137px}#pb-5-1 .badge-txt h5{font-size:1.5rem}#pb-5-1 .badge-txt h4{font-size:1.85rem}.pbox-5-price p{font-size:1.25rem}.pbox-5-price p span{font-size:1.85rem;top:3px;left:10px}.pbox-6-txt{min-height:300px}.pbox-6-price h5,.pbox-6-txt h4{font-size:1.7rem}#promo-7{padding-bottom:40px}.pbox-7{margin-bottom:40px}#pb-7-1,#pb-7-2,#pb-7-3{padding:30px 15px 0}.pbox-7-txt h4{font-size:1.7rem}.pbox-7-price{margin-top:20px}.pbox-7-price h5{font-size:1.7rem}.pbox-7-txt .add-to-cart{right:20px;bottom:-12px;font-size:1rem;padding:10px 17px}.pbox-7:hover #pb-7-2 .add-to-cart,.pbox-7:hover .add-to-cart{bottom:-6px}#pb-8-1,#pb-8-2,#pb-8-3{padding-right:15px}.pbox-8-txt{text-align:center;padding:30px 0 0}.pbox-8 .col-lg-6.rel{padding-right:15px}.pbox-8{margin-bottom:30px}.pbox-8.pbox-8-last{margin-bottom:0}.pbox-8 h5{font-size:1.7rem;margin-bottom:10px}.pbox-8-txt p{font-size:1.0625rem;padding:0;margin-bottom:10px}.pbox-8-price h5{font-size:1.7rem}.pbox-9-txt{padding:30px 15px 0}.pbox-9 h2{margin-bottom:10px}.pbox-9-price{margin-top:10px}.pbox-9-price p{font-size:1.5rem}.pbox-9-price p span{font-size:1.95rem;top:3px;left:10px}#promo-10{margin-top:0;margin-bottom:0;overflow:hidden}.pbox-10-txt{text-align:center;padding-top:80px;margin:0 0 40px}.pbox-10-txt h2{font-size:4rem}.pbox-10-txt h4{font-size:1.25rem}.pbox-10-txt h4 span{font-size:2.15rem;top:4px}.pbox-10-txt p{padding:0}.pbox-10-img{margin:0 0 -200px;position:relative;overflow:hidden}.pbox-10-img img{max-width:100%;display:inline-block}#promo-10.promo-section .price-badge-md{top:10px;left:20px}.pbox-11-txt{text-align:center}.pbox-11-txt h2{font-size:3.35rem;margin-bottom:15px}.pbox-11-txt p{font-weight:300;padding:0 5%;margin-bottom:20px}#promo-11{padding-top:80px;padding-bottom:60px}#promo-11 .col-lg-2{width:80%;margin:0 10%}.pbox-11-link{width:44%;float:left;padding:10px;margin-left:8px;margin-right:8px}.pbox-11-img{margin-bottom:25px}#promo-11.promo-section .price-badge-lg{top:-10px}#promo-12{padding-top:0;overflow:hidden}.promo-12-txt{text-align:center;padding-top:80px;padding-left:0}.promo-12-txt h2{font-size:3.35rem;margin-bottom:10px}.promo-12-txt h3{font-size:2.15rem}.promo-12-txt span{font-size:2.75rem}.promo-12-img{margin-top:30px;margin-bottom:-50px;position:relative;overflow:hidden}.promo-12-img img.img-fluid{max-width:100%;display:inline-block}.pbox-13-item{padding:60px 30px}#pb-13-1.pbox-13-item{padding:20px 30px}#pb-13-3.pbox-13-item{padding:20px 30px 0}.pbox-14-item{margin:0 5px}.pbox-14-txt{padding:20px 10% 5px}#pb-14-1 .pbox-14-txt{padding:0}#pb-14-1.pbox-14-item{padding:50px 25px;margin:0 5px 20px}.pbox-14-item h5{font-size:1.7rem}#pb-14-1 .pbox-14-txt p,.pbox-14-item p{font-size:1.0625rem;padding:0}.pbox-14-price h5{font-size:1.7rem}.pbox-14-txt .btn.btn-sm{font-size:16px;padding:15px 48px}#pb-14-1 .price-badge-sm{width:140px;height:137px}#pb-14-1 .badge-txt h5{font-size:1.5rem}#pb-14-1 .badge-txt h4{font-size:1.85rem}#menu-6 .col-lg-3{padding-left:15px;padding-right:15px}.menu-3-wrapper{padding:0}.menu-1-item,.menu-2-item{text-align:center;padding-bottom:30px;border-bottom:1px dashed #666}.menu-3-item,.menu-4-item{text-align:center;padding-bottom:30px;border-bottom:1px dashed #ccc}.menu-1-item:last-child,.menu-2-item:last-child,.menu-3-item:last-child,.menu-4-item:last-child{padding-bottom:0;border-bottom:none}.menu-1-list li.resp-lst:last-child,.menu-2-list li.resp-lst:last-child,.menu-3-list li.resp-lst:last-child,.menu-4-list li.resp-lst:last-child{padding-bottom:30px;border-bottom:1px dashed #ccc;margin-bottom:40px}.menu-item-title{display:block;width:100%;margin-bottom:13px;padding:0}.menu-title-wrapper{margin:0;display:block}.menu-item-dots{display:none}.menu-item-price{display:inline-block;width:auto;padding:0;margin-bottom:0;margin-right:10px}.menu-3-title{margin-bottom:50px}.menu-item-price h5,.menu-item-price h6,.menu-item-title h5,.menu-item-title h6{font-size:1.7rem}.menu-item-desc p{font-size:1.0625rem;padding:0 10%;margin-bottom:10px}#menu-3 .menu-item-desc p{font-size:1.0625rem;padding:0}#menu-4 .menu-item-desc p{padding:0 5%}.menu-item-desc span{font-size:1rem}.menu-3-item-data{position:relative;display:inline-block;top:0;right:0;margin-top:0;padding:8px 18px}.menu-3-item-data h6{font-size:1.25rem}.menu-1-txt,.menu-3-txt{padding:0}.menu-2-txt{padding-left:0}.menu-5-txt p{font-size:1.0625rem;padding-right:12%;margin-bottom:10px}.menu-5-txt span.item-data{font-size:1rem}.menu-6-txt h5,.menu-7-txt h5{font-size:1.7rem}.menu-6-txt p,.menu-7-txt p{font-size:1.0625rem}.menu-7-txt p{padding:0 10%}.menu-7-txt .btn.btn-sm{font-size:17px;padding:15px 48px}.menu-6-price h5,.menu-7-price h5{font-size:1.7rem}#tabs-nav{margin-bottom:40px}.tabs-1 li{display:block;background-color:#f5f5f5;padding:11px 30px;margin-bottom:10px}.tabs-1 li.current{background-color:transparent}.tabs-1 li span{position:relative;right:10px}.tabs-1.co-55 [class*=flaticon-]:after,.tabs-1.ico-55 [class*=flaticon-]:before{font-size:45px;line-height:1!important}.tabs-1 li h5{display:inline-block;font-size:1.4rem;position:relative;top:-4px;margin-top:0}.menu-3-img{padding:0;margin-top:40px}.menu-3-img.mb-60{margin-bottom:50px}.menu-4-img{display:none}#reviews-1{padding-top:80px;padding-bottom:70px}#reviews-1 img{width:100px;height:100px}.review-1-txt p{padding:0}.review-1-txt p,.review-1-txt p.testimonial-autor{font-size:1.3rem}.review-2-txt{overflow:hidden;padding-left:0}.review-2-avatar{float:none;margin-bottom:20px}.review-2 img{width:100px;height:100px}.review-info{margin-top:5px;margin-bottom:15px}.review-info h5{display:block;float:none;margin-right:0;margin-bottom:5px}.review-info span{display:block;font-size:1.15rem;top:0}#gallery-1 .col-lg-3,#gallery-2 .col-lg-3{padding:0 15px}.banner-1-txt{padding:0}.banner-1-txt h2{font-size:2.5rem}.banner-2-txt h2{font-size:4rem;padding:0;margin-bottom:30px}.banner-2-txt p{font-size:1.2rem;padding:0 5%;margin-bottom:15px}#banner-3{text-align:center;padding-top:80px;margin-top:0}.banner-3-txt h2{font-size:3rem}.banner-3-txt p{padding:0;margin-bottom:25px}.banner-3-img{margin-top:30px;margin-left:0}.banner-4-txt h2{font-size:3.5rem;line-height:1.15;margin-bottom:15px}.banner-4-txt h4{margin-bottom:14px}.banner-4-txt p{padding:0 5%;margin-bottom:25px}.banner-4-txt .btn{font-size:19px;padding:16px 40px}.faqs-1-questions,.questions-wrapper{padding:0}.question h5{margin-bottom:1.4rem}#newsletter-1.mb-20{margin-bottom:0}#newsletter-1 .inner-bg{padding:45px 0 35px}.newsletter-txt p{padding:0 10%}.newsletter-section .newsletter-form{padding:0 8%}.newsletter-form .form-control{text-align:center;height:56px;font-size:1.125rem;margin-right:0;margin-bottom:15px}.newsletter-form .form-control,.newsletter-section .btn,.newsletter-section .input-group-btn{display:block;width:100%!important}.newsletter-section .btn{height:56px;font-size:1.125rem;margin-left:0}.blog-post-txt{padding:0 3%}.post-share-links{margin-top:50px}.post-share-list.text-right{text-align:left!important;margin-top:35px;margin-left:8px}.post-share-links .share-social-icons a.share-ico i{width:33px;height:33px;font-size:25px;margin-right:6px}.post-tags-list span a{font-size:1rem;padding:8px 16px}.next-post,.prev-post{text-align:center}.next-post h6,.prev-post h6{font-size:1.5rem}.all-posts a{font-size:2.25rem}#contacts-4{padding-top:80px;padding-bottom:20px}#contacts-4 .section-title,.contacts-info{padding-left:0}.contacts-info{text-align:center}#contacts-4 .form-holder,#contacts-5 .form-holder{margin-left:12px;margin-right:12px}#contacts-4 .section-title{text-align:center;padding:0}#contacts-4 .section-title p{padding:0 5%}#contacts-5 .section-title{margin-top:45px}.cbox-2 h5{font-size:1.5rem}.cbox-3 h5{font-size:1.75rem}.cbox-3 h6{font-size:1.45rem}.cbox-5 h5{font-size:1.75rem}#booking-1 .form-holder{padding:45px 40px 40px;margin:-30px 0}#booking-2 .form-holder{margin-left:12px;margin-right:12px}#booking-2 .form-holder p{padding:0 15%}.google-map{padding:0 0 60%}#contacts-5 #gmap{margin-top:10px}#footer-1 .footer-contacts,#footer-4 .footer-contacts,#footer-4 .footer-info{padding-left:0}#footer-3 .footer-logo img{max-height:100px}.footer h5{font-size:1.4rem}#footer-3 .footer-socials-links{margin-top:50px;margin-bottom:20px}.foo-socials a{width:40px;height:40px;font-size:26px;margin:0 3px}.footer-img img.insta-img{width:100px;height:100px;margin:4px}.footer-contacts p,.footer-info p{margin-bottom:5px}.foo-email.mt-15{margin-top:0}#footer-1 p.p-lg.foo-email{margin-top:5px;margin-bottom:5px}#footer-1 .footer-contacts p.p-lg,#footer-1 .footer-contacts p.p-xl{font-size:1.25rem}#footer-2 .footer-contacts,#footer-2 .footer-info p,#footer-2 .footer-socials-links{padding:0 10%}.footer-contacts p span{font-size:1.75rem}#footer-4 .footer-copyright{margin-bottom:15px}#footer-3 .footer-copyright p{margin-top:20px}.bottom-footer-list li{padding-bottom:4px}#footer-3 .bottom-footer-list li{padding-bottom:7px}.bottom-footer-list.text-right{text-align:left!important}.bottom-footer-list li i{font-size:.95rem}.bottom-footer-list li p{font-size:1.0625rem;margin-left:7px;line-height:1.5}.bottom-footer-list li p.first-list-link{margin-left:0}#footer-3 .bottom-footer-list li p{font-size:1rem;line-height:1.5}.bottom-footer-list p:after{padding-left:8px}.page-hero-section{padding-top:120px;padding-bottom:80px}.page-hero-section h2{font-size:2.6rem}#breadcrumb{margin-bottom:10px}.cards-01-img.mb-100{margin-bottom:70px}.card-box img{padding:0 5%}.card-box h5{font-size:1.75rem}.card-box p{font-size:1.0625rem;padding:0 5%}#product-1-data .tabs-nav{margin-bottom:30px}#product-1-data .tabs-1 li{padding:14px 40px;margin-bottom:10px}#product-1-data .tabs-1 li h5{top:0}.tabs-2 li{padding:10px;margin:0 3px}.tabs-2 li img{max-height:65px}.discount-coupon.pt-15{padding-top:0}.discount-form{margin-bottom:50px}.discount-coupon .col-lg-5.text-right{text-align:center!important}.cart-table.mb-70{margin-bottom:40px}.cart-product-desc h6{font-size:1.15rem}.cart-product-img{display:none}.cart-product-desc{padding-left:0}.cart-table table td,.cart-table table td.product-name,.cart-table table th{padding:16px 18px}.tm-meta h5{font-size:1.75rem}.tm-meta span{font-size:1.25rem}.tm-social a{width:54px;height:54px;font-size:1.45rem;line-height:54px!important}#scrollUp{bottom:20px;right:20px}}@media (min-width:321px) and (max-width:413.95px){#stlChanger{display:none}.m-row{display:flex;flex-flow:wrap}.m-bottom,.m-top{width:100%}.m-bottom{order:1}.m-top{order:0}h6.h6-xs{font-size:1.1rem}h6.h6-sm{font-size:1.15rem}h6.h6-lg,h6.h6-md,h6.h6-xl{font-size:1.2rem}h5.h5-xs{font-size:1.4rem}h5.h5-md,h5.h5-sm{font-size:1.5rem}h4.h4-md,h4.h4-sm,h4.h4-xs,h5.h5-lg,h5.h5-xl{font-size:1.6rem}h4.h4-lg,h4.h4-xl{font-size:1.65rem}h3.h3-xs{font-size:1.7rem}h3.h3-sm{font-size:1.75rem}h3.h3-md{font-size:1.8rem}h3.h3-lg{font-size:1.85rem}h2.h2-xs,h3.h3-xl{font-size:1.9rem}h2.h2-sm{font-size:2rem}h2.h2-md{font-size:2.1rem}h2.h2-lg{font-size:2.2rem}h2.h2-xl{font-size:2.3rem}p.p-sm{font-size:1rem}p{font-size:1.0625rem}p.p-lg,p.p-md,p.p-xl{font-size:1.1rem}.btn,.btn.btn-lg,.btn.btn-md{font-size:16px}.btn.btn-sm{font-size:15px;padding:12px 24px}.btn.btn-lg,.btn.btn-md{padding:14px 34px}.store{margin-right:8px}img.appstore-original,img.googleplay-original{width:156px;height:48px}.section-title.mb-60{margin-bottom:45px}.section-title h2.h2-title{font-size:2.5rem}.section-title p{padding:0 5%}.stars-rating i{font-size:.95rem}.stars-rating.stars-lg i{font-size:1.05rem}.menu-7-img .item-rating,.pbox-14-img .item-rating{bottom:32px;right:20px}.like-ico.ico-20 [class*=flaticon-]:after,.like-ico.ico-20 [class*=flaticon-]:before,.like-ico.ico-25 [class*=flaticon-]:after,.like-ico.ico-25 [class*=flaticon-]:before{font-size:1.75rem}.menu-6-item .like-ico{top:32px;right:22px}.menu-7-img .like-ico,.pbox-14-img .like-ico{top:20px;right:20px}.add-to-cart{font-size:1rem;padding:10px 17px}.add-to-cart.ico-10 [class*=flaticon-]:after,.add-to-cart.ico-10 [class*=flaticon-]:before{font-size:.95rem}.price-badge-sm{width:115px;height:112px}.price-badge-md{width:135px;height:132px}.price-badge-lg{width:155px;height:151px}#hero-2 .badge-txt{top:50%}.discount-badge{left:10px;top:5px}.discount-badge img{max-height:140px}.navik-menu .mega-menu-container{padding:20px 0;height:320px;overflow:scroll;overflow-x:hidden}.mega-menu-desc{padding-left:10%;padding-right:10%}.callusbtn{top:35px;left:6px}.callusbtn a{font-size:20px}.burger-menu{width:23px;height:20px;top:35px;right:6px}#hero-2 .bg-inner,#hero-4{padding-top:80px}#hero-4{padding-bottom:80px}#hero-5 .bg-inner{padding-top:60px;margin-bottom:30px}#hero-9 .bg-inner{padding-top:80px;padding-bottom:80px}#hero-10{padding-top:60px;padding-bottom:40px}#hero-11{padding-top:80px;padding-bottom:80px}#hero-12{padding-top:80px;padding-bottom:40px}#hero-3 .slider,#hero-3 .slider .slides,#hero-6 .slider,#hero-6 .slider .slides,.slider,.slider .slides{height:320px}#hero-3 .slider .slides li img,#hero-6 .slider .slides li img{background-position:0}#hero-3 .slider .slides li#slide-2 img{background-position:100%}#hero-8 .slider,#hero-8 .slider .slides{height:270px}.slider .indicators{bottom:18px}#hero-1 .caption-txt{padding:0;margin-top:-15px}#hero-3 .caption-txt{padding-left:0;margin-top:-15px}.hero-4-txt{padding:0;margin-top:30px}#hero-3 .caption-txt,#hero-6 .caption-txt{text-align:center;padding-left:0;margin-top:-20px}.hero-11-txt{text-align:center;margin-top:35px;margin-left:0;padding-right:0}#hero-1 h2{margin-bottom:10px}#hero-1 h2,#hero-2 h2{font-size:2.75rem;letter-spacing:2px}#hero-3 h2,#hero-6 h2{font-size:3.25rem;margin-bottom:10px}#hero-3 h3,#hero-6 h3{font-size:2rem}#hero-3 h3 span,#hero-6 h3 span{font-size:2.25rem;top:0}.hero-4-txt h2{font-size:4rem}.hero-4-txt h3{font-size:1.5rem;margin-bottom:15px}#hero-5 h2{font-size:6.25rem}#hero-9 h2{font-size:2.75rem;padding:0;letter-spacing:2px;margin-bottom:20px}#hero-10 h2{font-size:8.5rem;border-bottom:3px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h3{font-size:2.25rem;margin-bottom:60px}#hero-11 h2{font-size:6.5rem;margin-bottom:20px}#hero-11 h3{font-size:2.75rem;margin-bottom:5px}#hero-11 h4{font-size:2rem;margin-bottom:20px}#hero-12 h3{font-size:1.85rem;margin-bottom:20px}#hero-12 h2{font-size:4rem;margin-bottom:15px}#hero-1 p{font-size:1.2rem}#hero-1 p span{display:block;font-size:1.5rem;left:0;top:3px}.hero-4-txt p{padding:0 3%;margin-bottom:25px}.hero-9-txt p{font-size:1.1rem;padding:0 3%;margin-bottom:30px}.hero-11-txt p{padding:0 3%;margin-bottom:25px}.hero-12-txt p{padding:0 3%;margin-bottom:40px}.hbox-1-wrapper,.hbox-2-wrapper{padding:0 2%}.hbox-1-wrapper .col-sm-3,.hbox-2-wrapper .col-sm-3{width:25%;float:left;padding-left:5px;padding-right:5px}.hbox-1 h5,.hbox-2 h5{font-size:1.15rem;margin-top:20px}.hbox-2-wrapper.ico-90 [class*=flaticon-]:after,.hbox-2-wrapper.ico-90 [class*=flaticon-]:before{font-size:3.5rem}.hero-4-img,.hero-5-img{padding:0 5%}.hero-5-img{margin-top:-30px;margin-bottom:-20px}.hero-11-img{margin-left:-10%}.hero-11-img img{max-width:100%;display:block}#about-2{padding-top:80px;padding-bottom:300px}#about-5,#about-6{padding-top:80px;padding-bottom:0}#about-3,#about-7{padding-bottom:40px}#about-7{padding-top:80px}.about-2-txt,.about-4-txt{padding:0}.about-3-txt{padding:0;margin-bottom:0}.about-5-txt{padding:0;margin-bottom:40px}.about-6-txt{padding:0;margin-bottom:80px}.abox-1-wrapper{padding:0;margin-bottom:10px}.abox-2-wrapper{margin-top:30px}.abox-1-wrapper .col-sm-4,.abox-2-wrapper .col-sm-3,.abox-3-wrapper .col-sm-3{width:50%;float:left}.abox-2{margin-bottom:40px}.abox-4{padding:0}.about-1-txt h2{font-size:3.25rem;padding:0}.about-1-txt h2,.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:20px}.about-1-txt p{padding:0;margin-bottom:35px}.about-2-txt p{padding:0;margin-bottom:25px}.about-4-img p{padding-left:0;padding-right:0;margin-top:30px}.about-3-img{margin:0 0 30px}.about-5-img,.about-6-img{background-position:50%;position:relative;left:0;height:330px;width:auto!important;margin:0}#div-01,#div-02,#div-03,#div-04,#div-05{height:280px}#pb-1-1,#pb-1-2{margin-bottom:30px}#promo-1 .row{margin-left:0;margin-right:0}#promo-1 .col-lg-3,#promo-1 .col-lg-6{padding-left:0;padding-right:0}.pbox-1{padding-top:0}.pbox-1-txt{padding:50px 0}.pbox-1-txt h3{font-size:2rem}.pbox-2{padding:50px 25px 30px}#pb-2-1{margin-bottom:30px}.pbox-2-txt h4{font-size:1.85rem}.pbox-3-last{margin-top:30px}.pbox-4{margin-bottom:30px}.pbox-4.pbox-4-last{margin-bottom:0}#pb-5-1.pbox-5,#pb-5-2.pbox-5{padding:50px 25px;margin-bottom:20px}#pb-5-2.pbox-5,#pb-5-3.pbox-5{border:1px solid #e5e5e5}#pb-5-3.pbox-5{padding:50px 25px}#pb-5-1.pbox-5 h4,.pbox-5-txt h4{font-size:1.85rem;padding:0 10%}.pbox-5-price p{font-size:1.25rem}.pbox-5-price p span{font-size:1.75rem;top:3px;left:10px}.pbox-6-txt{min-height:300px}.pbox-6-price h5,.pbox-6-txt h4{font-size:1.7rem}#promo-7{padding-bottom:40px}.pbox-7{margin-bottom:40px}#pb-7-1,#pb-7-2,#pb-7-3{padding:30px 0 0}.pbox-7-txt h4{font-size:1.7rem}.pbox-7-price{margin-top:20px}.pbox-7-price h5{font-size:1.7rem}.pbox-7-txt .add-to-cart{right:20px;bottom:-12px;font-size:1rem;padding:10px 17px}.pbox-7:hover #pb-7-2 .add-to-cart,.pbox-7:hover .add-to-cart{bottom:-6px}#pb-8-1,#pb-8-2,#pb-8-3{padding-right:15px}.pbox-8-txt{text-align:center;padding:30px 0 0}.pbox-8 .col-lg-6.rel{padding-right:15px}.pbox-8{margin-bottom:30px}.pbox-8.pbox-8-last{margin-bottom:0}.pbox-8 h5{font-size:1.7rem;margin-bottom:10px}.pbox-8-txt p{font-size:1.0625rem;padding:0;margin-bottom:10px}.pbox-8-price h5{font-size:1.7rem}.pbox-9-txt{padding:30px 5px 0}.pbox-9 h2{margin-bottom:15px}.pbox-9-price{margin-top:15px}.pbox-9-price p{font-size:1.5rem}.pbox-9-price p span{font-size:1.85rem;top:3px;left:10px}#promo-10{margin-top:0;margin-bottom:0;overflow:hidden}.pbox-10-txt{text-align:center;padding-top:80px;margin:0 0 40px}.pbox-10-txt h2{font-size:3.65rem}.pbox-10-txt h4{font-size:1.25rem}.pbox-10-txt h4 span{font-size:2rem;top:4px}.pbox-10-txt p{padding:0}.pbox-10-img{margin:0 0 -100px;position:relative;overflow:hidden}.pbox-10-img img{max-width:100%;display:inline-block}#promo-10.promo-section .price-badge-md{top:10px;left:20px}.pbox-11-txt{text-align:center}.pbox-11-txt h2{font-size:3.5rem;margin-bottom:15px}.pbox-11-txt p{font-weight:300;padding:0 5%;margin-bottom:20px}#promo-11{padding-top:80px;padding-bottom:60px}#promo-11 .col-lg-2{width:96%;margin:0 2%}.pbox-11-link{width:46%;float:left;padding:10px;margin-left:4px;margin-right:4px}.pbox-11-img{margin-bottom:25px}#promo-11.promo-section .price-badge-lg{top:-10px}#promo-12{margin-top:0;padding-top:0;overflow:hidden}.promo-12-txt{text-align:center;padding-top:80px;padding-left:0}.promo-12-txt h2{font-size:3.5rem;margin-bottom:10px}.promo-12-txt h3{font-size:2rem}.promo-12-txt span{font-size:2.5rem}.promo-12-img{margin-top:30px;margin-bottom:-50px;position:relative;overflow:hidden}.promo-12-img img.img-fluid{max-width:100%;display:inline-block}.pbox-13-item{padding:60px 30px}#pb-13-1.pbox-13-item{padding:20px 30px}#pb-13-3.pbox-13-item{padding:20px 30px 0}.pbox-14-item{margin:0 5px}.pbox-14-txt{padding:20px 0 5px}#pb-14-1 .pbox-14-txt{padding:0}#pb-14-1.pbox-14-item{padding:50px 20px 40px;margin:0 5px 20px}.pbox-14-item h5,.pbox-14-price h5{font-size:1.7rem}#pb-14-1 .pbox-14-txt p,.pbox-14-item p{font-size:1.0625rem;padding:0}.pbox-14-txt .btn.btn-sm{font-size:16px;padding:15px 48px}#menu-6 .col-lg-3{padding-left:15px;padding-right:15px}.menu-3-wrapper{padding:0}.menu-1-item,.menu-2-item{text-align:center;padding-bottom:30px;border-bottom:1px dashed #666}.menu-3-item,.menu-4-item{text-align:center;padding-bottom:30px;border-bottom:1px dashed #ccc}.menu-1-item:last-child,.menu-2-item:last-child,.menu-3-item:last-child,.menu-4-item:last-child{padding-bottom:0;border-bottom:none}.menu-1-list li.resp-lst:last-child,.menu-2-list li.resp-lst:last-child,.menu-3-list li.resp-lst:last-child,.menu-4-list li.resp-lst:last-child{padding-bottom:30px;border-bottom:1px dashed #ccc;margin-bottom:40px}.menu-item-title{display:block;width:100%;margin-bottom:8px;padding:0}.menu-title-wrapper{margin:0;display:block}.menu-item-dots{display:none}.menu-item-price{display:inline-block;width:auto;padding:0;margin-bottom:0;margin-right:10px}.menu-3-title{margin-bottom:50px}.menu-3-item-data{position:relative;display:inline-block;top:0;right:0;margin-top:8px;padding:8px 18px}.menu-3-item-data h6{font-size:1.25rem}.menu-item-desc p{font-size:1.0625rem;padding:0 5%;margin-bottom:10px}#menu-3 .menu-item-desc p{font-size:1.0625rem;padding:0}.menu-item-desc span{font-size:1rem}.menu-1-txt,.menu-3-txt{padding:0}.menu-2-txt{padding-left:0}.menu-5-txt,.menu-6-txt{padding:25px 16px}.menu-5-txt p{font-size:1.0625rem;padding-right:12%;margin-bottom:10px}.menu-5-txt span.item-data{font-size:1rem}.menu-6-txt h5,.menu-7-txt h5{font-size:1.7rem}.menu-6-txt p,.menu-7-txt p{font-size:1.0625rem}.menu-7-txt p{padding:0 10%}.menu-7-txt .btn.btn-sm{font-size:17px;padding:15px 48px}.menu-6-price h5,.menu-7-price h5{font-size:1.7rem}#tabs-nav{margin-bottom:40px}.tabs-1 li{display:block;background-color:#f5f5f5;padding:11px 30px;margin-bottom:10px}.tabs-1 li.current{background-color:transparent}.tabs-1 li span{position:relative;right:10px}.tabs-1.co-55 [class*=flaticon-]:after,.tabs-1.ico-55 [class*=flaticon-]:before{font-size:45px;line-height:1!important}.tabs-1 li h5{display:inline-block;font-size:1.4rem;position:relative;top:-4px;margin-top:0}.menu-3-img{padding:0;margin-top:40px}.menu-3-img.mb-60{margin-bottom:50px}.menu-4-img{display:none}#reviews-1{padding-top:80px;padding-bottom:70px}#reviews-1 img{width:100px;height:100px}.review-1-txt p{padding:0}.review-1-txt p,.review-1-txt p.testimonial-autor{font-size:1.3rem}.review-2-txt{overflow:hidden;padding-left:0}.review-2-avatar{float:none;margin-bottom:20px}.review-2 img{width:90px;height:90px}.review-info{margin-top:5px;margin-bottom:15px}.review-info h5{display:block;float:none;margin-right:0;margin-bottom:5px}.review-info span{display:block;font-size:1.15rem;top:0}#gallery-1 .col-lg-3,#gallery-2 .col-lg-3{padding:0 15px}.banner-1-txt{padding:0}.banner-1-txt h2{font-size:2.5rem}.banner-2-txt h2{font-size:4rem;padding:0;margin-bottom:30px}.banner-2-txt p{font-size:1.2rem;padding:0 5%;margin-bottom:15px}#banner-3{text-align:center;padding-top:80px;margin-top:0}.banner-3-txt h2{font-size:3rem}.banner-3-txt p{padding:0;margin-bottom:25px}.banner-3-img{margin-top:30px;margin-left:0}.banner-4-txt h2{font-size:3.5rem;line-height:1.15;margin-bottom:15px}.banner-4-txt h4{margin-bottom:14px}.banner-4-txt p{padding:0 5%;margin-bottom:25px}.banner-4-txt .btn{font-size:19px;padding:16px 40px}.faqs-1-questions,.questions-wrapper{padding:0}.question h5{margin-bottom:1.4rem}#newsletter-1.mb-20{margin-bottom:0}#newsletter-1 .inner-bg{padding:40px 25px 30px}.newsletter-txt h3{font-size:2.15rem}.newsletter-section .newsletter-form,.newsletter-txt p{padding:0}.newsletter-form .form-control{text-align:center;height:56px;font-size:1.125rem;margin-right:0;margin-bottom:15px}.newsletter-form .form-control,.newsletter-section .btn,.newsletter-section .input-group-btn{display:block;width:100%!important}.newsletter-section .btn{height:56px;font-size:1.125rem;margin-left:0}.blog-post-txt{padding:0 3%}.post-share-links{margin-top:50px}.post-share-list.text-right{text-align:left!important;margin-top:35px;margin-left:8px}.post-share-links .share-social-icons a.share-ico i{width:33px;height:33px;font-size:25px;margin-right:6px}.post-tags-list span a{font-size:1rem;padding:8px 16px}.next-post,.prev-post{text-align:center}.next-post h6,.prev-post h6{font-size:1.45rem}.all-posts a{font-size:2.25rem}#contacts-4{padding-top:80px;padding-bottom:20px}#contacts-4 .section-title,.contacts-info{padding-left:0}.contacts-info{text-align:center}#contacts-4 .form-holder,#contacts-5 .form-holder{margin-left:8px;margin-right:8px}#contacts-4 .section-title{text-align:center;padding:0}#contacts-4 .section-title p{padding:0 5%}#contacts-5 .section-title{margin-top:45px}.cbox-2 h5{font-size:1.5rem}.cbox-3 h5{font-size:1.75rem}.cbox-3 h6{font-size:1.45rem}.cbox-5 h5{font-size:1.75rem}#booking-1 .form-holder{padding:45px 30px 40px;margin:-30px 0}#booking-2 .form-holder{margin-left:8px;margin-right:8px}#booking-2 .form-holder p{padding:0 15%}.google-map{padding:0 0 70%}#contacts-5 #gmap{margin-top:10px}#footer-1 .footer-contacts,#footer-4 .footer-contacts,#footer-4 .footer-info{padding-left:0}#footer-3 .footer-logo img{max-height:100px}.footer h5{font-size:1.4rem}#footer-3 .footer-socials-links{margin-top:50px;margin-bottom:20px}.foo-socials a{width:40px;height:40px;font-size:26px;margin:0 3px}.footer-img img.insta-img{width:100px;height:100px;margin:4px}.footer-contacts p,.footer-info p{margin-bottom:5px}.foo-email.mt-15{margin-top:0}#footer-1 p.p-lg.foo-email{margin-top:5px;margin-bottom:5px}#footer-1 .footer-contacts p.p-lg,#footer-1 .footer-contacts p.p-xl{font-size:1.25rem}#footer-2 .footer-contacts,#footer-2 .footer-info p,#footer-2 .footer-socials-links{padding:0 10%}.footer-contacts p span{font-size:1.75rem}#footer-4 .footer-copyright{margin-bottom:15px}#footer-3 .footer-copyright p{margin-top:20px}.bottom-footer-list li{padding-bottom:4px}#footer-3 .bottom-footer-list li{padding-bottom:7px}.bottom-footer-list.text-right{text-align:left!important}.bottom-footer-list li i{font-size:.95rem}.bottom-footer-list li p{font-size:1.0625rem;margin-left:7px;line-height:1.5}.bottom-footer-list li p.first-list-link{margin-left:0}#footer-3 .bottom-footer-list li p{font-size:1rem;line-height:1.5}.bottom-footer-list p:after{padding-left:8px}.page-hero-section{padding-top:110px;padding-bottom:80px}.page-hero-section h2{font-size:2.35rem}#breadcrumb{margin-bottom:10px}.cards-01-img.mb-100{margin-bottom:70px}.card-box img{padding:0 5%}.card-box h5{font-size:1.75rem}.card-box p{font-size:1.0625rem;padding:0 5%}#scrollUp{bottom:20px;right:20px}#product-1-data .tabs-nav{margin-bottom:30px}#product-1-data .tabs-1 li{padding:14px 40px;margin-bottom:10px}#product-1-data .tabs-1 li h5{top:0}.tabs-2 li{padding:10px;margin:0 3px}.tabs-2 li img{max-height:65px}.cart-table.mb-70{margin-bottom:40px}.cart-product-desc h5{font-size:1.25rem}.cart-product-img{width:100%}.cart-product-img img{width:100%;max-height:100%}.cart-product-desc{padding-left:0}.cart-product-desc p{padding-left:10%}.cart-table table td,.cart-table table td.product-name,.cart-table table th{padding:16px 18px}.cart-table table td{font-size:1.125rem}.cart-table table td:first-child{display:inline-block}.discount-form .form-control{text-align:center;height:56px;font-size:1.125rem;margin-right:0;margin-bottom:15px}.discount-form .btn,.discount-form .form-control,.discount-form .input-group-btn{display:block;width:100%!important}.discount-form .btn{height:56px;font-size:1.125rem;margin-left:0;margin-bottom:50px}.discount-coupon .col-lg-5.text-right{text-align:center}.discount-coupon .col-lg-5.text-right .btn{display:block;width:100%!important;height:56px;padding:16px 30px;font-size:1.125rem}.tm-meta h5{font-size:1.65rem}.tm-meta span{font-size:1.25rem}.tm-social a{width:54px;height:54px;font-size:1.45rem;line-height:54px!important}}@media (max-width:320.95px){#stlChanger{display:none}.m-row{display:flex;flex-flow:wrap}.m-bottom,.m-top{width:100%}.m-bottom{order:1}.m-top{order:0}h6.h6-xs{font-size:1rem}h6.h6-md,h6.h6-sm{font-size:1.1rem}h6.h6-lg{font-size:1.15rem}h6.h6-xl{font-size:1.2rem}h5.h5-xs{font-size:1.3rem}h5.h5-md,h5.h5-sm{font-size:1.4rem}h5.h5-lg,h5.h5-xl{font-size:1.5rem}h4.h4-sm,h4.h4-xs{font-size:1.4rem}h4.h4-lg,h4.h4-md{font-size:1.45rem}h3.h3-xs,h4.h4-xl{font-size:1.5rem}h3.h3-sm{font-size:1.55rem}h3.h3-md{font-size:1.6rem}h3.h3-lg{font-size:1.65rem}h2.h2-xs,h3.h3-xl{font-size:1.7rem}h2.h2-sm{font-size:1.8rem}h2.h2-md{font-size:1.9rem}h2.h2-lg{font-size:2rem}h2.h2-xl{font-size:2.1rem}p,p.p-sm{font-size:1rem}p.p-lg,p.p-md{font-size:1.05rem}p.p-xl{font-size:1.1rem}.btn,.btn.btn-lg,.btn.btn-md{font-size:16px}.btn.btn-sm{font-size:15px;padding:12px 24px}.btn.btn-lg,.btn.btn-md{padding:14px 34px}.store{display:block;float:none;margin:0 10px 10px}img.appstore-original,img.googleplay-original{width:150px;height:46px}.section-title.mb-60{margin-bottom:45px}.section-title h2.h2-title{font-size:2.25rem}.section-title p{padding:0 6%}.stars-rating i,span.item-code{font-size:.95rem}.stars-rating.stars-lg i{font-size:1.05rem}.menu-7-img .item-rating,.pbox-14-img .item-rating{bottom:35px;right:20px}.like-ico.ico-20 [class*=flaticon-]:after,.like-ico.ico-20 [class*=flaticon-]:before,.like-ico.ico-25 [class*=flaticon-]:after,.like-ico.ico-25 [class*=flaticon-]:before{font-size:1.75rem}.menu-6-item .like-ico{top:32px;right:22px}.menu-7-img .like-ico,.pbox-14-img .like-ico{top:20px;right:20px}.add-to-cart{font-size:1rem;padding:10px 17px}.add-to-cart.ico-10 [class*=flaticon-]:after,.add-to-cart.ico-10 [class*=flaticon-]:before{font-size:.95rem}.price-badge-sm{width:105px;height:102px}.price-badge-md{width:125px;height:122px}.price-badge-lg{width:145px;height:141px}#hero-2 .badge-txt{top:50%}.discount-badge{left:10px;top:-5px}.discount-badge img{max-height:130px}.navik-menu .mega-menu-container{padding:20px 0;height:320px;overflow:scroll;overflow-x:hidden}.mega-menu-desc{padding-left:10%;padding-right:10%}.callusbtn{top:35px;left:6px}.callusbtn a{font-size:20px}.burger-menu{width:23px;height:20px;top:35px;right:6px}#hero-2 .bg-inner,#hero-4{padding-top:80px}#hero-4{padding-bottom:80px}#hero-5 .bg-inner{padding-top:60px;margin-bottom:30px}#hero-9 .bg-inner{padding-top:80px;padding-bottom:80px}#hero-10,#hero-12{padding-top:80px;padding-bottom:40px}#hero-11{padding-top:80px;padding-bottom:80px}.slider,.slider .slides{height:320px}#hero-3 .slider,#hero-3 .slider .slides,#hero-6 .slider,#hero-6 .slider .slides{height:310px}#hero-3 .slider .slides li img,#hero-6 .slider .slides li img{background-position:0}#hero-3 .slider .slides li#slide-2 img{background-position:100%}#hero-8 .slider,#hero-8 .slider .slides{height:270px}.slider .indicators{bottom:18px}#hero-1 .caption-txt{padding:0;margin-top:-10px}#hero-3 .caption-txt{padding-left:0;margin-top:-15px}.hero-4-txt{padding:0;margin-top:30px}#hero-3 .caption-txt,#hero-6 .caption-txt{text-align:center;padding-left:0;margin-top:-20px}.hero-11-txt{text-align:center;margin-top:35px;margin-left:0;padding-right:0}#hero-1 h2{margin-bottom:10px}#hero-1 h2,#hero-2 h2{font-size:2.25rem;letter-spacing:2px}#hero-3 h2,#hero-6 h2{font-size:2.95rem;margin-bottom:10px}#hero-3 h3,#hero-6 h3{font-size:1.85rem}#hero-3 h3 span,#hero-6 h3 span{font-size:2.1rem;top:0}.hero-4-txt h2{font-size:3.5rem}.hero-4-txt h3{font-size:1.25rem;margin-bottom:15px}#hero-5 h2{font-size:5.5rem}#hero-9 h2{font-size:2.25rem;padding:0;letter-spacing:2px;margin-bottom:20px}#hero-10 h2{font-size:8rem;border-bottom:3px solid #fff;padding-bottom:25px;margin-bottom:35px}#hero-10 h3{font-size:2rem;margin-bottom:60px}#hero-11 h2{font-size:6rem;margin-bottom:15px}#hero-11 h3{font-size:2.25rem;margin-bottom:5px}#hero-11 h4{font-size:1.75rem;margin-bottom:20px}#hero-12 h3{font-size:1.85rem;margin-bottom:20px}#hero-12 h2{font-size:5.5rem;margin-bottom:15px}#hero-1 p{font-size:1.2rem}#hero-1 p span{display:block;font-size:1.5rem;left:0;top:3px}.hero-4-txt p{padding:0 3%;margin-bottom:25px}.hero-9-txt p{font-size:1.05rem;padding:0;margin-bottom:30px}.hero-11-txt p{padding:0;margin-bottom:25px}.hero-12-txt p{padding:0;margin-bottom:40px}.hbox-1-wrapper,.hbox-2-wrapper{padding:0 5%}.hbox-1-wrapper .col-sm-3,.hbox-2-wrapper .col-sm-3{width:50%;float:left;padding-left:5px;padding-right:5px}.hbox-1 h5,.hbox-2 h5{font-size:1.25rem;margin-top:20px}.hbox-2-wrapper.ico-90 [class*=flaticon-]:after,.hbox-2-wrapper.ico-90 [class*=flaticon-]:before{font-size:3.75rem}.hero-4-img{padding:0 2%}.hero-5-img{padding:0 5%;margin-top:-20px;margin-bottom:-20px}.hero-11-img{margin-left:-10%}.hero-11-img img{max-width:100%;display:block}#about-2{padding-top:80px;padding-bottom:300px}#about-5,#about-6{padding-top:80px;padding-bottom:0}#about-3,#about-7{padding-bottom:40px}#about-7{padding-top:80px}.about-2-txt,.about-4-txt{padding:0}.about-3-txt{padding:0;margin-bottom:0}.about-5-txt{padding:0;margin-bottom:40px}.about-6-txt{padding:0;margin-bottom:80px}.abox-1-wrapper{padding:0;margin-bottom:10px}.abox-2-wrapper{margin-top:30px}.abox-1-wrapper .col-sm-4,.abox-2-wrapper .col-sm-3,.abox-3-wrapper .col-sm-3{width:50%;float:left}.abox-2{margin-bottom:40px}.abox-4{padding:0 3%}.about-1-txt h2{font-size:2.85rem;padding:0}.about-1-txt h2,.about-3-txt h2,.about-4-txt h2,.about-5-txt h2,.about-6-txt h2{margin-bottom:20px}.about-1-txt p{padding:0;margin-bottom:35px}.about-2-txt p{padding:0;margin-bottom:25px}.about-4-img p{padding-left:0;padding-right:0;margin-top:30px}.about-3-img{margin:0 0 30px}.about-5-img,.about-6-img{background-position:50%;position:relative;left:0;height:330px;width:auto!important;margin:0}#div-01,#div-02,#div-03,#div-04,#div-05{height:250px}#pb-1-1,#pb-1-2{margin-bottom:30px}#promo-1 .row{margin-left:0;margin-right:0}#promo-1 .col-lg-3,#promo-1 .col-lg-6{padding-left:0;padding-right:0}.pbox-1{padding-top:0}.pbox-1-txt{padding:50px 0}.pbox-1-txt h3{font-size:1.8rem}.pbox-2{padding:50px 25px 30px}#pb-2-1{margin-bottom:30px}.pbox-2-txt h4{font-size:1.65rem}.pbox-3-last{margin-top:30px}.pbox-4{margin-bottom:30px}.pbox-4.pbox-4-last{margin-bottom:0}#pb-5-1.pbox-5,#pb-5-2.pbox-5{padding:50px 25px;margin-bottom:20px}#pb-5-2.pbox-5,#pb-5-3.pbox-5{border:1px solid #e5e5e5}#pb-5-3.pbox-5{padding:50px 25px}#pb-5-1.pbox-5 h4,.pbox-5-txt h4{font-size:1.75rem;padding:0 10%}.pbox-5-price p{font-size:1.25rem}.pbox-5-price p span{font-size:1.6rem;top:3px;left:10px}.pbox-6-txt{min-height:280px}.pbox-6-txt p{padding:0 5%}.pbox-6-txt h4{font-size:1.7rem}.pbox-7-price{margin-top:15px}.pbox-6-price h5{font-size:1.7rem}#promo-7{padding-bottom:40px}.pbox-7{margin-bottom:40px}#pb-7-1,#pb-7-2,#pb-7-3{padding:30px 0 0}.pbox-7-price h5,.pbox-7-txt h4{font-size:1.7rem}.pbox-7-txt .add-to-cart{opacity:1;position:relative;right:0;bottom:0;margin-top:20px}.pbox-7:hover #pb-7-2 .add-to-cart,.pbox-7:hover .add-to-cart{bottom:0}#pb-8-1,#pb-8-2,#pb-8-3{padding-right:15px}.pbox-8-txt{text-align:center;padding:30px 0 0}.pbox-8 .col-lg-6.rel{padding-right:15px}.pbox-8{margin-bottom:30px}.pbox-8.pbox-8-last{margin-bottom:0}.pbox-8 h5{font-size:1.7rem;margin-bottom:10px}.pbox-8-txt p{font-size:1rem;padding:0 10%;margin-bottom:10px}.pbox-8-price h5{font-size:1.7rem}.pbox-9-txt{padding:30px 5px 0}.pbox-9 h2{margin-bottom:15px}.pbox-9-price{margin-top:15px}.pbox-9-price p{font-size:1.5rem}.pbox-9-price p span{font-size:1.85rem;top:3px;left:10px}#promo-10{margin-top:0;margin-bottom:0;overflow:hidden}.pbox-10-txt{text-align:center;padding-top:80px;margin:0 0 40px}.pbox-10-txt h2{font-size:3.15rem}.pbox-10-txt h4{font-size:1.15rem}.pbox-10-txt h4 span{font-size:1.75rem;top:2px}.pbox-10-txt p{padding:0}.pbox-10-img{margin:0 0 -100px;position:relative;overflow:hidden}.pbox-10-img img{max-width:100%;display:inline-block}#promo-10.promo-section .price-badge-md{top:10px;left:20px}.pbox-11-txt{text-align:center}.pbox-11-txt h2{font-size:3.15rem;margin-bottom:15px}.pbox-11-txt p{font-weight:300;padding:0 5%;margin-bottom:20px}#promo-11{padding-top:80px;padding-bottom:60px}#promo-11 .col-lg-2{width:100%;margin:0}.pbox-11-link{width:46%;float:left;padding:10px;margin-left:5px;margin-right:5px}.pbox-11-img{margin-bottom:25px}#promo-11.promo-section .price-badge-lg{top:-10px}#promo-12{padding-top:0;overflow:hidden}.promo-12-txt{text-align:center;padding-top:80px;padding-left:0}.promo-12-txt h2{font-size:3.15rem;margin-bottom:10px}.promo-12-txt h3{font-size:1.75rem}.promo-12-txt span{font-size:2.25rem;top:2px}.promo-12-img{margin-top:30px;margin-bottom:-20px;position:relative;overflow:hidden}.promo-12-img img.img-fluid{max-width:100%;display:inline-block}.pbox-13-item{padding:60px 30px}#pb-13-1.pbox-13-item{padding:20px 30px}#pb-13-3.pbox-13-item{padding:20px 30px 0}.pbox-14-item{margin:0 5px}.pbox-14-txt{padding:20px 5% 5px}#pb-14-1 .pbox-14-txt{padding:0}#pb-14-1.pbox-14-item{padding:50px 20px 40px;margin:0 5px 20px}.pbox-14-item h5,.pbox-14-price h5{font-size:1.7rem}#pb-14-1 .pbox-14-txt p,.pbox-14-item p{font-size:1.0625rem;padding:0}.pbox-14-txt .btn.btn-sm{font-size:16px;padding:15px 48px}#menu-6 .col-lg-3{padding-left:15px;padding-right:15px}.menu-3-wrapper{padding:0}.menu-1-item,.menu-2-item{text-align:center;padding-bottom:30px;border-bottom:1px dashed #666}.menu-3-item,.menu-4-item{text-align:center;padding-bottom:30px;border-bottom:1px dashed #ccc}.menu-1-item:last-child,.menu-2-item:last-child,.menu-3-item:last-child,.menu-4-item:last-child{padding-bottom:0;border-bottom:none}.menu-1-list li.resp-lst:last-child,.menu-2-list li.resp-lst:last-child,.menu-3-list li.resp-lst:last-child,.menu-4-list li.resp-lst:last-child{padding-bottom:30px;border-bottom:1px dashed #ccc;margin-bottom:40px}.menu-item-title{display:block;width:100%;margin-bottom:10px;padding:0}.menu-title-wrapper{margin:0;display:block}.menu-item-dots{display:none}.menu-item-price{display:inline-block;width:auto;padding:0;margin-bottom:0;margin-right:10px}.menu-3-title{margin-bottom:50px}.menu-3-item-data{position:relative;display:inline-block;top:0;right:0;margin-top:8px;padding:8px 18px}.menu-3-item-data h6{font-size:1.25rem}.menu-item-desc p{margin-bottom:10px}#menu-3 .menu-item-desc p,.menu-item-desc p{font-size:1.0625rem;padding:0}.menu-item-desc span{font-size:1rem}.menu-1-txt,.menu-3-txt{padding:0}.menu-2-txt{padding-left:0}.menu-5-txt,.menu-6-txt{padding:25px 16px}.menu-5-txt p{font-size:1.0625rem;padding-right:12%;margin-bottom:10px}.menu-5-txt span.item-data{font-size:1rem}.menu-6-txt h5,.menu-7-txt h5{font-size:1.7rem}.menu-6-txt p,.menu-7-txt p{font-size:1.0625rem}.menu-7-txt p{padding:0 5%}.menu-7-txt .btn.btn-sm{font-size:17px;padding:15px 48px}.menu-6-price h5,.menu-7-price h5{font-size:1.7rem}#tabs-nav{margin-bottom:40px}.tabs-1 li{display:block;background-color:#f5f5f5;padding:11px 30px;margin-bottom:10px}.tabs-1 li.current{background-color:transparent}.tabs-1 li span{position:relative;right:10px}.tabs-1.co-55 [class*=flaticon-]:after,.tabs-1.ico-55 [class*=flaticon-]:before{font-size:45px;line-height:1!important}.tabs-1 li h5{display:inline-block;font-size:1.4rem;position:relative;top:-4px;margin-top:0}.menu-3-img{padding:0;margin-top:40px}.menu-3-img.mb-60{margin-bottom:50px}.menu-4-img{display:none}#reviews-1{padding-top:80px;padding-bottom:70px}#reviews-1 img{width:100px;height:100px}.review-1-txt p{font-size:1.175rem;padding:0}.review-1-txt p.testimonial-autor{font-size:1.3rem}.review-2-txt{overflow:hidden;padding-left:0}.review-2-avatar{float:none;margin-bottom:20px}.review-2 img{width:100px;height:100px}.review-info{margin-top:5px;margin-bottom:15px}.review-info h5{display:block;float:none;margin-right:0;margin-bottom:5px}.review-info span{display:block;font-size:1.15rem;top:0}#gallery-1 .col-lg-3,#gallery-2 .col-lg-3{padding:0 15px}.banner-1-txt{padding:0}.banner-1-txt h2{font-size:2.5rem}.banner-2-txt h2{font-size:3.5rem;padding:0;margin-bottom:30px}.banner-2-txt p{font-size:1.125rem;padding:0 5%;margin-bottom:15px}#banner-3{text-align:center;padding-top:80px;margin-top:0}.banner-3-txt h2{font-size:2.6rem}.banner-3-txt p{padding:0;margin-bottom:25px}.banner-3-img{margin-top:30px;margin-left:0}.stores-badge{text-align:center}.banner-4-txt h2{font-size:3.25rem;line-height:1.15;margin-bottom:15px}.banner-4-txt h4{margin-bottom:14px}.banner-4-txt p{padding:0;margin-bottom:25px}.banner-4-txt .btn{font-size:18px;padding:16px 40px}.faqs-1-questions,.questions-wrapper{padding:0}.question h5{margin-bottom:1.3rem}#newsletter-1.mb-20{margin-bottom:0}#newsletter-1 .inner-bg{padding:40px 15px 30px}.newsletter-txt h3{font-size:2.15rem}.newsletter-section .newsletter-form,.newsletter-txt p{padding:0}.newsletter-form .form-control{text-align:center;height:56px;font-size:1.125rem;margin-right:0;margin-bottom:15px}.newsletter-form .form-control,.newsletter-section .btn,.newsletter-section .input-group-btn{display:block;width:100%!important}.newsletter-section .btn{height:56px;font-size:1.125rem;margin-left:0}.blog-post-txt{padding:0}.post-share-links{margin-top:50px}.post-share-list.text-right{text-align:left!important;margin-top:35px;margin-left:8px}.post-share-links .share-social-icons a.share-ico i{width:33px;height:33px;font-size:25px;margin-right:6px}.post-tags-list span a{font-size:1rem;padding:8px 16px}.next-post,.prev-post{text-align:center}.next-post h6,.prev-post h6{font-size:1.45rem}.all-posts a{font-size:2.25rem}#contacts-4{padding-top:80px;padding-bottom:20px}#contacts-4 .section-title,.contacts-info{padding-left:0}.contacts-info{text-align:center}#contacts-4 .form-holder,#contacts-5 .form-holder{margin-left:8px;margin-right:8px}#contacts-4 .section-title{text-align:center;padding:0}#contacts-4 .section-title p{padding:0 6%}#contacts-5 .section-title{margin-top:45px}.cbox-2-txt{text-align:center;padding-left:0}.cbox-2 h5{font-size:1.5rem;margin-top:25px}.cbox-2 span{display:block;float:none}.cbox-3 h5{font-size:1.75rem}.cbox-3 h6{font-size:1.45rem}.cbox-5 h5{font-size:1.75rem}#booking-1 .form-holder{padding:35px 30px 30px;margin:-30px 0}#booking-2 .form-holder{margin-left:8px;margin-right:8px}#booking-2 .form-holder p{padding:0 5%}.google-map{padding:0 0 70%}#contacts-5 #gmap{margin-top:10px}#footer-1 .footer-contacts,#footer-4 .footer-contacts,#footer-4 .footer-info{padding-left:0}#footer-3 .footer-logo img{max-height:100px}.footer h5{font-size:1.4rem}#footer-3 .footer-socials-links{margin-top:50px;margin-bottom:20px}.foo-socials a{width:40px;height:40px;font-size:24px;margin:0 3px}.footer-img img.insta-img{width:88px;height:88px;margin:4px}.footer-contacts p,.footer-info p{margin-bottom:5px}.foo-email.mt-15{margin-top:0}#footer-1 p.p-lg.foo-email{margin-top:5px;margin-bottom:5px}#footer-1 .footer-contacts p.p-lg,#footer-1 .footer-contacts p.p-xl{font-size:1.175rem}#footer-2 .footer-contacts,#footer-2 .footer-info p,#footer-2 .footer-socials-links{padding:0 10%}.footer-contacts p span{font-size:1.65rem}#footer-4 .footer-copyright{margin-bottom:15px}#footer-3 .footer-copyright p{margin-top:20px}.bottom-footer-list li{padding-bottom:4px}#footer-3 .bottom-footer-list li{padding-bottom:7px}.bottom-footer-list.text-right{text-align:left!important}.bottom-footer-list li i{font-size:.925rem}.bottom-footer-list li p{font-size:1rem;margin-left:4px;line-height:1.5}.bottom-footer-list li p.first-list-link{margin-left:0}#footer-3 .bottom-footer-list li p{font-size:.925rem;line-height:1.5}.bottom-footer-list p:after{padding-left:5px}.page-hero-section{padding-top:110px;padding-bottom:80px}.page-hero-section h2{font-size:2.25rem}#breadcrumb{margin-bottom:10px}.cards-01-img.mb-100{margin-bottom:70px}.card-box img{padding:0 3%}.card-box h5{font-size:1.65rem}.card-box p{font-size:1.0625rem;padding:0}#scrollUp{bottom:20px;right:20px}#product-1-data .tabs-nav{margin-bottom:30px}#product-1-data .tabs-1 li{padding:14px 40px;margin-bottom:10px}#product-1-data .tabs-1 li h5{top:0}.tabs-2 li{padding:8px;margin:0 2px}.tabs-2 li img{max-height:55px}.project-title .stars-rating span{font-size:1rem;margin:0 2px}.project-title .stars-rating i{font-size:1rem}.cart-table.mb-70{margin-bottom:40px}.cart-product-desc h5{font-size:1.15rem}.cart-product-img{display:none}.cart-product-desc{padding-left:0}.cart-product-desc p{padding-left:10%}.cart-table table td,.cart-table table td.product-name,.cart-table table th{padding:16px 18px}.cart-table table td{font-size:1.125rem}.cart-checkout{padding:35px 20px}.discount-form .form-control{text-align:center;height:56px;font-size:1.125rem;margin-right:0;margin-bottom:15px}.discount-form .btn,.discount-form .form-control,.discount-form .input-group-btn{display:block;width:100%!important}.discount-form .btn{height:56px;font-size:1.125rem;margin-left:0;margin-bottom:50px}.discount-coupon .col-lg-5.text-right{text-align:center}.discount-coupon .col-lg-5.text-right .btn{display:block;width:100%!important;height:56px;padding:16px 30px;font-size:1.125rem}.tm-meta h5{font-size:1.65rem}.tm-meta span{font-size:1.25rem}.tm-social a{width:54px;height:54px;font-size:1.45rem;line-height:54px!important}}.nuxt-link-active .h5-sm{color:#f7be27!important}#navik-header-container-top-list li>a{padding-left:7px!important;line-height:40px!important;height:40px!important;padding-right:7px!important}@media (min-width:772px){.navik-header-container,.navik-menu{display:flex}}@media (max-width:772px){#navik-header-container-top-list{height:70vh;overflow-y:scroll}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Flaticon.e7d76df.eot";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Flaticon-1.e7d76df.eot";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Flaticon.6fdcd84.woff2";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Flaticon.01e502a.woff";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Flaticon.049fd00.ttf";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Flaticon.63c9154.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-01.0294ddd.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-03.d024bc1.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-04.ea1155e.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-05.7bbb9d1.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-06.8272f4e.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/price-badge-yellow.77d5623.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/price-badge-red.3ab9d1d.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/price-badge-orange.f1c45d8.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-2.3008419.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/white-overlay-wave.671be30.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-4.740a601.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-5.7bbb9d1.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-9.bc346a1.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-10.78ae970.jpg";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero-11.772766b.jpg";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-1.a4449eb.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-2.d5333c1.jpg";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-5.d3e412f.jpg";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-6.1afbf28.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/divider-01.a26c468.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/divider-02.0ab867c.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/divider-03.3331a68.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/divider-04.40e8d24.jpg";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/divider-05.6d433ec.jpg";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pb-1-1.d52a789.jpg";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pb-1-2.9a45fdd.jpg";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pb-1-3.19b42b7.jpg";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pb-2-1.15b7845.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pb-2-2.ed4963f.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/promo-11.1c07791.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/menu-2.be09349.jpg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reviews.239ac74.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-1.3a1440e.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-2.6322873.jpg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner-4.411881e.jpg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-1.d9a371e.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-2.ddb5420.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/booking.bfe89d5.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-red.d2c9846.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/footer-dark.2017d8a.jpg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-page.2bd4117.jpg";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/blog-page.e4c4922.jpg";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/booking-page.bcb87f9.jpg";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cart-page.6075345.jpg";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contacts-page.642773f.jpg";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gallery-page.45d226f.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gift-page.3725026.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/faqs-page.f246e14.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/locations-page.5af34ef.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/menu-page.d78bea8.jpg";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/menu-3-2-img-1.6fec93c.jpg";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/team-page.aa8aeda.jpg";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/terms-page.1dbab6d.jpg";

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAQAAAAzbkVEAAAA0klEQVR42tXQTStEARSH8bO10mwUyWvxEaaEheIDWFnKmpSVLOx8CRtkcxs1O99AXiaLUUrNWrEnjTvm/my47tVd2XmW5zync84/ooAJiQuLUY1xCbipVIw48821ud/tYYnUD1fq5emGnq47z160PeIyV4xqSnFgTdurHeve8kXZpIYuTtTU3evZiLDnQ6ZlIZx6x5HpCMs6+jYj1OxL9bXCsSeHxiJyYSsiwqBdD5ph1qqhr2sKQoQBS2bKz5aEqrD+hbCiI7P9dyGbcu7WfLH2CWKo5NcRCMhpAAAAAElFTkSuQmCC"

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductListHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductListHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductListHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductListHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductListHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".categoryimg{max-height:55px}@media (min-width:772px){#navik-header-container-top-list{flex:0 0 70%!important;max-width:70%!important;padding-left:30px}#navik-header-container-top-list li a{font-size:16px!important;line-height:auto!important;height:auto!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AppHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AppHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AppHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AppHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_AppHeader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".navikmenuactive .top-list{display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("20c2c1c7", content, true)

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".slick-track[data-v-e4caeaf8]{position:relative;top:0;left:0;display:block;transform:translateZ(0)}.slick-track.slick-center[data-v-e4caeaf8]{margin-left:auto;margin-right:auto}.slick-track[data-v-e4caeaf8]:after,.slick-track[data-v-e4caeaf8]:before{display:table;content:\"\"}.slick-track[data-v-e4caeaf8]:after{clear:both}.slick-loading .slick-track[data-v-e4caeaf8]{visibility:hidden}.slick-slide[data-v-e4caeaf8]{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide[data-v-e4caeaf8]{float:right}.slick-slide img[data-v-e4caeaf8]{display:block}.slick-slide.slick-loading img[data-v-e4caeaf8]{display:none}.slick-slide.dragging img[data-v-e4caeaf8]{pointer-events:none}.slick-initialized .slick-slide[data-v-e4caeaf8]{display:block}.slick-loading .slick-slide[data-v-e4caeaf8]{visibility:hidden}.slick-vertical .slick-slide[data-v-e4caeaf8]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[data-v-21137603]{display:none}.slick-slider[data-v-3d1a4f76]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[data-v-3d1a4f76]{position:relative;display:block;overflow:hidden;margin:0;padding:0;transform:translateZ(0)}.slick-list[data-v-3d1a4f76]:focus{outline:none}.slick-list.dragging[data-v-3d1a4f76]{cursor:pointer;cursor:hand}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("46f7ed82", content, true)

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";@font-face{font-family:\"slick\";src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAATsAA0AAAAAB2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE0AAAABoAAAAcdIcYB0dERUYAAAS0AAAAHAAAAB4AJwANT1MvMgAAAZwAAABRAAAAYFAQ/45jbWFwAAACAAAAAFcAAAFiIhFFt2dhc3AAAASsAAAACAAAAAj//wADZ2x5ZgAAAmgAAAE1AAACLD+btmBoZWFkAAABMAAAAC8AAAA2AAEx+2hoZWEAAAFgAAAAHAAAACQD5QIFaG10eAAAAfAAAAAQAAAAFgZKAEpsb2NhAAACWAAAABAAAAAQATYBoG1heHAAAAF8AAAAHQAAACAASwBHbmFtZQAAA6AAAADcAAABbgUngcJwb3N0AAAEfAAAAC4AAABFOXjBpHjaY2BkYGAA4vMGfuHx/DZfGbiZGEDgfGFFPZxWZVBlvM14G8jlYABLAwAT1QnNAHjaY2BkYGC8zcDAoMfEAAJANiMDKmABADBkAe942mNgZGBgYGdwYWBiAAEQycgAEnMA8xkACcgAkwAAAHjaY2BmYmCcwMDKwMDow5jGwMDgDqW/MkgytDAwMDGwcjKAQQNQCZBSYICCgDTXFAYHhkTFSYwP/j9g0GO8/f82A0QNA+NtsBIFBkYANHMN4wAAAHjaY2KAACYIVoVAAALCAJt42mNgYGBmgGAZBkYGEIgB8hjBfBYGByDNw8DBwARkMzAkKigpTlCc9P8/WB0S7/+i+4/uld4rgZoAB4xsDHAhRiYgwcSApoCBcsBMBTNYGGgGAEdEDyUAAAAAAAAAAAAAZgCKANABFnjadZBdToNAEMd3CrtAl5TQLtS0LCoN0A8SGkBI+mAfPET75B1896HppfQcvnII4w3cLYpW6k4ymdn9z8xvBwEKUQg11OgBIXAYWUEQR1uIZoFGpLGxKy3PqrIq8+waXIfJ+5mQSSvkvXwRqqocu1D39QMl2JgvN9zzhsyk1GRDz+OBfzMioCqx0rtdLYo0SiZTZttsOkmidBkveKibFF4Oep9SI46bqk3Twhp4iihUemrMWFPy2NRbthfqKkHi/PxlJLITZdAiSj6ouZ+tn9eZz78DuD9LZYB6bZ8rlCAUVuVdkULjxV4sIEysIc/KSyPmnJDdjhCOdQ0fCTliTX/tjH3ysWao+71qaNjHQjcQwrcuyl+WLZQthCMotJP/h+Xjazz+hfTeRWmG4zOiSyif/q1OtAAAAHjabY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV42mNgYkAGjAzogB0sysTgwtDOyMTIzJlYVJRfnpOaVsIFZhVlpmeUAABuKQkSAAAAAAAB//8AAnjaY2BkYGDgAWIxIGZiYARCNiBmAfMYAAPgADV42mNgYGBkAIKrS9Q5QPT5wop6GA0APf8GGAAA) format(\"woff\")}.slick-next,.slick-prev{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;transform:translateY(-50%);cursor:pointer;border:none}.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover{color:transparent;outline:none;background:transparent}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-family:\"slick\";font-size:20px;line-height:1;opacity:.75;color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:\"←\"}[dir=rtl] .slick-prev:before{content:\"→\"}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}.slick-next:before{content:\"→\"}[dir=rtl] .slick-next:before{content:\"←\"}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;margin:0 5px;padding:0}.slick-dots li,.slick-dots li button{width:20px;height:20px;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;padding:5px;color:transparent;border:0;outline:none;background:transparent}.slick-dots li button:focus,.slick-dots li button:hover{outline:none}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:\"slick\";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"•\";text-align:center;opacity:.25;color:#000;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-dots li.slick-active button:before{opacity:.75;color:#000}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Sentence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Sentence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Sentence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Sentence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_Sentence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".slider{height:100vh}.slider img{width:100%}.slider img:first-child{display:block}.slider img:last-child{display:none}.salmon-color{padding-top:60px}@media (max-width:772px){.slider{height:100vh;padding-top:80px}.slider img:first-child{display:none}.slider img:last-child{display:block}.salmon-color{padding-top:120px}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_policy_vue_vue_type_style_index_0_id_8b258334_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_policy_vue_vue_type_style_index_0_id_8b258334_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_policy_vue_vue_type_style_index_0_id_8b258334_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_policy_vue_vue_type_style_index_0_id_8b258334_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_policy_vue_vue_type_style_index_0_id_8b258334_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".menu-section[data-v-8b258334]{padding-top:150px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_single_vue_vue_type_style_index_0_id_73faec5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_single_vue_vue_type_style_index_0_id_73faec5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_single_vue_vue_type_style_index_0_id_73faec5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_single_vue_vue_type_style_index_0_id_73faec5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_single_vue_vue_type_style_index_0_id_73faec5a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".menu-section[data-v-73faec5a]{padding-top:150px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(28);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "@nuxt/ufo"
var ufo_ = __webpack_require__(8);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(29);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data));
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(30);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(17);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(11);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _2dda3f4a = () => interopDefault(__webpack_require__.e(/* import() | pages/cart */ 1).then(__webpack_require__.bind(null, 161)));

const _ecf7da08 = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/index */ 3).then(__webpack_require__.bind(null, 159)));

const _490ff3dc = () => interopDefault(__webpack_require__.e(/* import() | pages/policy */ 5).then(__webpack_require__.bind(null, 162)));

const _a5af8398 = () => interopDefault(__webpack_require__.e(/* import() | pages/products/index */ 7).then(__webpack_require__.bind(null, 160)));

const _9a55b5a0 = () => interopDefault(__webpack_require__.e(/* import() | pages/thank */ 8).then(__webpack_require__.bind(null, 163)));

const _6e82fbf2 = () => interopDefault(__webpack_require__.e(/* import() | pages/categories/_category */ 2).then(__webpack_require__.bind(null, 164)));

const _214cb384 = () => interopDefault(__webpack_require__.e(/* import() | pages/products/_product */ 6).then(__webpack_require__.bind(null, 165)));

const _5339b318 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 166))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
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
};

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = Object(ufo_["decode"])(obj[key]);
    }
  }
}

function createRouter() {
  const router = new external_vue_router_default.a(routerOptions);
  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(ufo_["normalizeURL"])(to);
    }

    const r = resolve(to, current, append);

    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query);
    }

    return r;
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d47117be"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "8fdc25d6"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/style.min.css
var style_min = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/default.vue?vue&type=template&id=50904412&
var defaultvue_type_template_id_50904412_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"page\" class=\"page\">","</div>",[_c('Sentence',{attrs:{"products":_vm.products}}),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('About'),_vm._ssrNode(" "),_c('Sales'),_vm._ssrNode(" "),_c('Contacts'),_vm._ssrNode(" "),_c('Delivery')],2),_vm._ssrNode(" "),_c('AppFooter')],2)}
var defaultvue_type_template_id_50904412_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=50904412&

// EXTERNAL MODULE: ./components/layouts/AppHeader.vue + 9 modules
var AppHeader = __webpack_require__(5);

// EXTERNAL MODULE: ./components/layouts/AppFooter.vue + 2 modules
var AppFooter = __webpack_require__(6);

// EXTERNAL MODULE: ./components/layouts/About.vue + 2 modules
var About = __webpack_require__(14);

// EXTERNAL MODULE: ./components/layouts/Sales.vue + 2 modules
var Sales = __webpack_require__(15);

// EXTERNAL MODULE: ./components/layouts/Contacts.vue + 2 modules
var Contacts = __webpack_require__(16);

// EXTERNAL MODULE: ./components/layouts/Delivery.vue + 2 modules
var Delivery = __webpack_require__(10);

// EXTERNAL MODULE: ./components/layouts/Sentence.vue + 4 modules
var Sentence = __webpack_require__(13);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(7);

// CONCATENATED MODULE: ./api/banners.js

/* harmony default export */ var banners = ({
  async list() {
    const response = await api["a" /* Apisful */].get('banners/');
    return response.data.results;
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    AppHeader: AppHeader["default"],
    AppFooter: AppFooter["default"],
    About: About["default"],
    Sales: Sales["default"],
    Contacts: Contacts["default"],
    Delivery: Delivery["default"],
    Sentence: Sentence["default"]
  },
  methods: {
    async loadProducts() {
      return await banners.list();
    }

  },

  // props: {
  //   loadProducts: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  async created() {
    this.products = await this.loadProducts();
  },

  data() {
    return {
      products: [],
      required: true
    };
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_50904412_render,
  defaultvue_type_template_id_50904412_staticRenderFns,
  false,
  null,
  null,
  "21cd5bb6"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {AppHeader: __webpack_require__(5).default,Sentence: __webpack_require__(13).default,About: __webpack_require__(14).default,Sales: __webpack_require__(15).default,Contacts: __webpack_require__(16).default,Delivery: __webpack_require__(10).default,AppFooter: __webpack_require__(6).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/policy.vue?vue&type=template&id=8b258334&scoped=true&
var policyvue_type_template_id_8b258334_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"page\" class=\"page\" data-v-8b258334>","</div>",[_c('Nuxt')],1),_vm._ssrNode(" "),_c('AppFooter')],2)}
var policyvue_type_template_id_8b258334_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/policy.vue?vue&type=template&id=8b258334&scoped=true&

// EXTERNAL MODULE: ./api/product.js
var product = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/policy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var policyvue_type_script_lang_js_ = ({
  components: {
    AppHeader: AppHeader["default"],
    AppFooter: AppFooter["default"]
  }
});
// CONCATENATED MODULE: ./layouts/policy.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_policyvue_type_script_lang_js_ = (policyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/policy.vue



function policy_injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var policy_component = Object(componentNormalizer["a" /* default */])(
  layouts_policyvue_type_script_lang_js_,
  policyvue_type_template_id_8b258334_scoped_true_render,
  policyvue_type_template_id_8b258334_scoped_true_staticRenderFns,
  false,
  policy_injectStyles,
  "8b258334",
  "60d933cd"
  
)

/* harmony default export */ var policy = (policy_component.exports);

/* nuxt-component-imports */
installComponents(policy_component, {AppHeader: __webpack_require__(5).default,AppFooter: __webpack_require__(6).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/single.vue?vue&type=template&id=73faec5a&scoped=true&
var singlevue_type_template_id_73faec5a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AppHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"page\" class=\"page\" data-v-73faec5a>","</div>",[_c('Nuxt'),_vm._ssrNode(" "),_c('Delivery')],2),_vm._ssrNode(" "),_c('AppFooter')],2)}
var singlevue_type_template_id_73faec5a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/single.vue?vue&type=template&id=73faec5a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./layouts/single.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var singlevue_type_script_lang_js_ = ({
  components: {
    AppHeader: AppHeader["default"],
    AppFooter: AppFooter["default"],
    Delivery: Delivery["default"]
  }
});
// CONCATENATED MODULE: ./layouts/single.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_singlevue_type_script_lang_js_ = (singlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/single.vue



function single_injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var single_component = Object(componentNormalizer["a" /* default */])(
  layouts_singlevue_type_script_lang_js_,
  singlevue_type_template_id_73faec5a_scoped_true_render,
  singlevue_type_template_id_73faec5a_scoped_true_staticRenderFns,
  false,
  single_injectStyles,
  "73faec5a",
  "385297e3"
  
)

/* harmony default export */ var single = (single_component.exports);

/* nuxt-component-imports */
installComponents(single_component, {AppHeader: __webpack_require__(5).default,Delivery: __webpack_require__(10).default,AppFooter: __webpack_require__(6).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_policy": sanitizeComponent(policy),
  "_single": sanitizeComponent(single)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(118), 'cart.js');
  resolveStoreModules(__webpack_require__(119), 'filters.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(27);

// CONCATENATED MODULE: ./.nuxt/v-lazy-load.js


__webpack_require__(116);

let v_lazy_load_options = {
  "images": true,
  "videos": true,
  "audios": true,
  "iframes": true,
  "native": false,
  "polyfill": true,
  "directiveOnly": false,
  "loadingClass": "isLoading",
  "loadedClass": "isLoaded",
  "appendClass": "lazyLoad",
  "observerConfig": {},
  "globalName": "nuxt"
};
let observer = null;
let attributes = ['src', 'poster', 'srcset'];
let elementsMap = {
  img: 'images',
  video: 'videos',
  audio: 'audios',
  iframe: 'iframes',
  picture: 'images'
};

const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const setAttributes = (el, defaultImage = false) => {
  let elementTagName = el.tagName.toLowerCase();

  if (elementTagName !== 'svg') {
    let media = el.children && el.children.length > 0 ? [...el.children, el] : [el];
    media.forEach(el => {
      for (let attribute of attributes) {
        if (el.dataset[attribute]) {
          el[attribute] = defaultImage ? v_lazy_load_options.defaultImage : el.dataset[attribute];
          if (!defaultImage) el.removeAttribute(`data-${attribute}`);
        }

        if (el.load) el.load();

        if (elementTagName === 'audio' && el.getAttribute('data-lazy-controls') === 'true') {
          el.removeAttribute('controls');
          el.removeAttribute('data-lazy-controls');
        }
      }
    });
  }
};

const setBackground = el => {
  el.style.backgroundImage = `url(${el.getAttribute('lazy-background')})`;
  el.removeAttribute('lazy-background');
  if (v_lazy_load_options.loadedClass !== false) el.classList.add(v_lazy_load_options.loadedClass);
};

const setClasses = (el, type) => {
  let elementTagName = el.tagName.toLowerCase();

  if (['img', 'video'].includes(elementTagName)) {
    let eventName = elementTagName === 'img' ? 'load' : 'loadeddata';

    if (v_lazy_load_options.loadingClass !== false && type === 'loading') {
      el.classList.add(v_lazy_load_options.loadingClass);
      el.addEventListener(eventName, () => {
        el.classList.remove(v_lazy_load_options.loadingClass);
      });
    } else if (v_lazy_load_options.loadedClass !== false && type === 'loaded') {
      el.addEventListener(eventName, () => {
        el.classList.add(v_lazy_load_options.loadedClass);
      });
    }
  } else if (type === 'loaded' && v_lazy_load_options.loadedClass !== false) {
    el.classList.add(v_lazy_load_options.loadedClass);
  }
};

const removeNotLazy = el => {
  el.removeAttribute('data-no-lazy');
  el.removeAttribute('data-not-lazy');
};

if (false) {}

const vLazyLoad = external_vue_default.a.directive('lazy-load', {
  inserted(el, {
    value,
    def
  }) {
    def.set(el, value);
  },

  update(el, {
    value,
    def
  }, vNode, oldVnode) {
    for (let attribute of attributes) {
      if (oldVnode.data.attrs[`data-${attribute}`] !== vNode.data.attrs[`data-${attribute}`]) {
        def.set(el, value);
        break;
      }
    }
  },

  set(el, value) {
    if (v_lazy_load_options.native === true) {
      if (v_lazy_load_options.appendClass) el.classList.add(v_lazy_load_options.appendClass);

      if (['notLazy', 'noLazy'].every(d => el.dataset[d] === undefined)) {
        el.setAttribute('loading', 'lazy');
        removeNotLazy(el);

        if (v_lazy_load_options.loadedClass) {
          el.addEventListener('load', () => {
            el.classList.add(v_lazy_load_options.loadedClass);
          });
        }
      }
    } else {
      if (v_lazy_load_options.defaultImage) setAttributes(el, true);

      if (false) {}
    }
  }

});
const vLazyBackground = external_vue_default.a.directive('lazy-background', {
  inserted(el, {
    def
  }) {
    def.set(el);
  },

  update(el, {
    def
  }, vNode, oldVnode) {
    def.set(el, vNode.data.attrs['lazy-background'] !== oldVnode.data.attrs['lazy-background']);
  },

  set(el, hasBackgroundChanged = false) {
    if (false) {}
  }

});
external_vue_default.a.use(vLazyLoad);
external_vue_default.a.use(vLazyBackground);

const lazyLoadMedia = el => {
  el.removeAttribute('data-manual-lazy');
  if (v_lazy_load_options.appendClass !== false) el.classList.add(v_lazy_load_options.appendClass);
  if (el.getAttribute('lazy-background')) setBackground(el);else {
    setAttributes(el);
    setClasses(el, 'loading');
    setClasses(el, 'loaded');
  }
};

const lazyLoadInject = e => {
  if (e.target) {
    let media = e.target.querySelectorAll('[data-manual-lazy]');
    [...media].forEach(m => lazyLoadMedia(m));
  } else lazyLoadMedia(e);
}; // IE Polyfill


if (!Array.from && v_lazy_load_options.polyfill) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function (value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);

      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      }

      A.length = len;
      return A;
    };
  }();
}

/* harmony default export */ var v_lazy_load = ((context, inject) => {
  inject('lazyLoad', lazyLoadInject);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(9);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(32);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:8000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "x-forwarded-host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./plugins/filters.js

external_vue_default.a.filter('formatPrice', value => {
  if (!value) {
    return value;
  } else {
    return `$${value.toFixed(2)}`;
  }
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\templates.plugin.4b44560a.js (mode: 'client')

 // Source: .\\yandex-metrika.plugin.48cb7a71.js (mode: 'client')

 // Source: .\\v-lazy-load.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: ..\\plugins\\filters.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "holidaysushi.ru",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "href": "https:\u002F\u002Fmc.yandex.ru\u002Fmetrika\u002Ftag.js",
        "rel": "preload",
        "as": "script"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


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
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof v_lazy_load === 'function') {
    await v_lazy_load(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/filters.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js








 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (decodeURI(opts.path) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(ufo_["normalizeURL"])(opts.path)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ cart_state; });
__webpack_require__.d(__webpack_exports__, "getters", function() { return /* binding */ cart_getters; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(7);

// CONCATENATED MODULE: ./api/order.js

/* harmony default export */ var order = ({
  async create(productIds, description, customerName, customerEmail) {
    const response = await api["a" /* Apisful */].post('orders/', {
      products: productIds,
      description,
      customer_name: customerName,
      customer_email: customerEmail
    });

    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  }

});
// CONCATENATED MODULE: ./store/cart.js


const cart_state = () => ({
  products: {}
});
const cart_getters = {
  productsList: state => {
    return Object.values(state.products);
  },
  productsQty: state => {
    let qty = 0;

    for (const product of Object.values(state.products)) {
      qty += product.qty;
    }

    return qty;
  },
  totalPrice: state => {
    let price = 0;

    for (const product of Object.values(state.products)) {
      price += product.price * product.qty;
    }

    return price;
  }
};
const mutations = {
  addProduct(state, {
    product,
    color,
    size,
    price
  }) {
    const key = product.id + color + size + price;

    if (state.products[key]) {// increment
    } else {
      // add new
      external_vue_default.a.set(state.products, key, {
        key,
        product,
        price,
        color,
        size,
        qty: 1
      });
    }
  },

  changeProductQty(state, {
    productKey,
    step
  }) {
    if (step < 0 && state.products[productKey].qty < 2) {
      // qty can't be less than 1
      return false;
    }

    external_vue_default.a.set(state.products[productKey], 'qty', state.products[productKey].qty + step);
  },

  removeProduct(state, {
    productKey
  }) {
    external_vue_default.a.delete(state.products, productKey);
  },

  clear(state) {
    external_vue_default.a.set(state, 'products', {});
  }

};
const actions = {
  async submit({
    commit,
    getters
  }, {
    fullName,
    email
  }) {
    const productIds = [];
    let description = '';

    for (const cartProduct of getters.productsList) {
      productIds.push(cartProduct.product.id);
      description += `${cartProduct.product.title}`;

      if (cartProduct.product.variants && cartProduct.product.variants.length > 0) {
        description += ` (color: ${cartProduct.color}, size: ${cartProduct.size})`;
      }

      const piece = cartProduct.qty > 1 ? 'pieces' : 'piece';
      description += ` - ${cartProduct.qty} ${piece} <br>`;
    }

    const success = await order.create(productIds, description, fullName, email);

    if (success) {
      commit('clear');
    }

    return success;
  }

};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "state", function() { return /* binding */ state; });
__webpack_require__.d(__webpack_exports__, "mutations", function() { return /* binding */ mutations; });
__webpack_require__.d(__webpack_exports__, "actions", function() { return /* binding */ actions; });

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__(7);

// CONCATENATED MODULE: ./api/category.js

/* harmony default export */ var category = ({
  async list() {
    const response = await api["a" /* Apisful */].get('categories/');
    return response.data.results;
  }

});
// CONCATENATED MODULE: ./store/filters.js

const state = () => ({
  categories: null
});
const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  }

};
const actions = {
  async fetchCategories({
    commit
  }) {
    commit('setCategories', await category.list());
  }

};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map