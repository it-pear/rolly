exports.ids = [2];
exports.modules = {

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3eebecb3", content, true, context)
};

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/HeaderSingle.vue?vue&type=template&id=7a52895b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-hero-section division",attrs:{"id":"product-page"}},[_vm._ssrNode("<div class=\"container\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div class=\"col-lg-10 offset-lg-1\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div class=\"hero-txt text-center white-color\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div id=\"breadcrumb\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div class=\"col\" data-v-7a52895b>","</div>",[_vm._ssrNode("<div class=\"breadcrumb-nav\" data-v-7a52895b>","</div>",[_vm._ssrNode("<nav aria-label=\"панировочные сухари\" data-v-7a52895b>","</nav>",[_vm._ssrNode("<ol class=\"breadcrumb\" data-v-7a52895b>","</ol>",[_vm._ssrNode("<li class=\"breadcrumb-item\" data-v-7a52895b>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('font',{staticStyle:{"vertical-align":"inherit"}},[_c('font',{staticStyle:{"vertical-align":"inherit"}},[_vm._v("Меню")])],1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<li aria-current=\"page\" class=\"breadcrumb-item active\" data-v-7a52895b>","</li>",[_c('font',{staticStyle:{"vertical-align":"inherit"}},[_c('font',{staticStyle:{"vertical-align":"inherit"}},[_vm._v(_vm._s(_vm.product.title))])],1)],1)],2)])])])])]),_vm._ssrNode(" "),_vm._ssrNode("<h2 class=\"h2-xl\" data-v-7a52895b>","</h2>",[_c('font',{staticStyle:{"vertical-align":"inherit"}},[_c('font',{staticStyle:{"vertical-align":"inherit"}},[_vm._v(_vm._s(_vm.product.title))])],1)],1)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layouts/HeaderSingle.vue?vue&type=template&id=7a52895b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/layouts/HeaderSingle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HeaderSinglevue_type_script_lang_js_ = ({
  props: {
    product: {}
  }
});
// CONCATENATED MODULE: ./components/layouts/HeaderSingle.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_HeaderSinglevue_type_script_lang_js_ = (HeaderSinglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layouts/HeaderSingle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_HeaderSinglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a52895b",
  "38f34096"
  
)

/* harmony default export */ var HeaderSingle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_HeaderSingle_vue_vue_type_style_index_0_id_7a52895b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_HeaderSingle_vue_vue_type_style_index_0_id_7a52895b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_HeaderSingle_vue_vue_type_style_index_0_id_7a52895b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_HeaderSingle_vue_vue_type_style_index_0_id_7a52895b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_HeaderSingle_vue_vue_type_style_index_0_id_7a52895b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".page-hero-section[data-v-7a52895b]{position:relative}.page-hero-section[data-v-7a52895b]:before{content:\"\";width:100%;height:100%;position:absolute;z-index:0;top:0;left:0;background-color:rgba(0,0,0,.4)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("56d42605", content, true, context)
};

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductListCard.vue?vue&type=template&id=00da2d79&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-6 col-lg-3"},[_c('nuxt-link',{attrs:{"to":{
      name: 'products-product',
      params: { product: ((_vm.product.slug) + "-" + (_vm.product.id)) },
    }}},[_c('div',{staticClass:"menu-6-item bg-white"},[_c('div',{staticClass:"menu-6-img rel"},[_c('div',{staticClass:"hover-overlay"},[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{"data-src":_vm.product.images[0],"alt":_vm.product.title}}),_vm._v(" "),_c('span',{staticClass:"item-code bg-tra-dark"}),_vm._v(" "),_c('div',{staticClass:"menu-img-zoom ico-25"},[_c('a',{staticClass:"image-link",attrs:{"href":"images/menu/roll-11-1.jpg"}},[_c('span',{staticClass:"flaticon-zoom"})])])])]),_vm._v(" "),_c('div',{staticClass:"menu-6-txt rel"},[_c('div',{staticClass:"item-rating"},[_c('div',{staticClass:"stars-rating stars-lg"},[_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star"}),_vm._v(" "),_c('i',{staticClass:"fas fa-star-half-alt"})])]),_vm._v(" "),_c('h5',{staticClass:"h5-sm"},[_vm._v(_vm._s(_vm.product.title))]),_vm._v(" "),_c('div',{staticClass:"menu-6-price bg-salmon"},[_c('h5',{staticClass:"h5-xs white-color"},[_vm._v(_vm._s(_vm.product.price)+" ₽")])]),_vm._v(" "),_c('div',{staticClass:"add-to-cart bg-yellow ico-10"},[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.addToCartInlist($event)}}},[_c('span',{staticClass:"flaticon-shopping-bag"}),_vm._v(" Добавить")])])])])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/ProductListCard.vue?vue&type=template&id=00da2d79&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductListCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProductListCardvue_type_script_lang_js_ = ({
  name: "ProductsListCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCartInlist() {
      this.$store.commit("cart/addProduct", {
        product: this.product,
        color: this.selectedColor,
        size: this.selectedSize,
        price: this.product.price
      }); // alert('Товар добавлен в корзину')
    }

  }
});
// CONCATENATED MODULE: ./components/products-list/ProductListCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_list_ProductListCardvue_type_script_lang_js_ = (ProductListCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/ProductListCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_list_ProductListCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c800d6a"
  
)

/* harmony default export */ var ProductListCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductsListFilter.vue?vue&type=template&id=d32ed2da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"tabs-nav"}},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12 text-center\">","</div>",[_vm._ssrNode("<ul class=\"tabs-1 ico-55 red-tabs clearfix\">","</ul>",_vm._l((_vm.categories),function(category){return _vm._ssrNode("<li"+(_vm._ssrClass("tab-link",{ 'current': _vm.$route.params.category === ((category.slug) + "-" + (category.id)) }))+">","</li>",[_c('nuxt-link',{attrs:{"to":{name: 'categories-category', params: { category: ((category.slug) + "-" + (category.id)) }, hash: '#catalogmenu' }}},[_c('img',{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"categoryimg",attrs:{"data-src":("" + (category.img)),"alt":""}}),_vm._v(" "),_c('h5',{staticClass:"h5-sm"},[_vm._v("\n              "+_vm._s(category.title)+"\n            ")])])],1)}),0)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/ProductsListFilter.vue?vue&type=template&id=d32ed2da&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductsListFilter.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ProductsListFiltervue_type_script_lang_js_ = ({
  name: 'ProductsListFilter',
  computed: { ...Object(external_vuex_["mapState"])({
      categories: state => state.filters.categories
    })
  },

  created() {
    if (!this.categories) {
      this.$store.dispatch('filters/fetchCategories');
    }
  }

});
// CONCATENATED MODULE: ./components/products-list/ProductsListFilter.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_list_ProductsListFiltervue_type_script_lang_js_ = (ProductsListFiltervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/ProductsListFilter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(128)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_list_ProductsListFiltervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "496f913d"
  
)

/* harmony default export */ var ProductsListFilter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsListFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsListFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsListFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsListFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsListFilter_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".categoryimg{max-height:55px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1e163716", content, true, context)
};

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/CommonProductsListPage.vue?vue&type=template&id=302c7df2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wide-70 menu-section division",attrs:{"id":"menu-6"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-10 offset-lg-1\"><div class=\"section-title mb-60 text-center\"><h2 class=\"h2-xl\">Наше меню</h2></div></div></div> <div id=\"catalogmenu\"></div> "),_c('products-list-filter'),_vm._ssrNode(" "),_c('products-list',{attrs:{"loading":_vm.productsLoading,"products":_vm.products}}),_vm._ssrNode(" "),_c('ProductPagination')],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/CommonProductsListPage.vue?vue&type=template&id=302c7df2&

// EXTERNAL MODULE: ./components/products-list/ProductsList.vue + 4 modules
var ProductsList = __webpack_require__(141);

// EXTERNAL MODULE: ./components/products-list/ProductsListFilter.vue + 4 modules
var ProductsListFilter = __webpack_require__(126);

// EXTERNAL MODULE: ./components/products-list/ProductPagination.vue + 2 modules
var ProductPagination = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/CommonProductsListPage.vue?vue&type=script&lang=js&
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



/* harmony default export */ var CommonProductsListPagevue_type_script_lang_js_ = ({
  name: 'CommonProductsListPage',
  components: {
    ProductsListFilter: ProductsListFilter["default"],
    ProductsList: ProductsList["default"],
    ProductPagination: ProductPagination["default"]
  },
  props: {
    loadProducts: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      products: [],
      productsLoading: false
    };
  },

  async created() {
    this.productsLoading = true;
    this.products = await this.loadProducts();
    this.productsLoading = false;
  }

});
// CONCATENATED MODULE: ./components/products-list/CommonProductsListPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_list_CommonProductsListPagevue_type_script_lang_js_ = (CommonProductsListPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/CommonProductsListPage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_list_CommonProductsListPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7fa6da5f"
  
)

/* harmony default export */ var CommonProductsListPage = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductsListFilter: __webpack_require__(126).default,ProductsList: __webpack_require__(141).default,ProductPagination: __webpack_require__(142).default})


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductsList.vue?vue&type=template&id=b26c140a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},_vm._l((_vm.products),function(product){return _c('products-list-card',{key:product.id,attrs:{"product":product}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/ProductsList.vue?vue&type=template&id=b26c140a&scoped=true&

// EXTERNAL MODULE: ./components/products-list/ProductListCard.vue + 4 modules
var ProductListCard = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductsList.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ProductsListvue_type_script_lang_js_ = ({
  name: 'ProductsList',
  components: {
    ProductsListCard: ProductListCard["a" /* default */]
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/products-list/ProductsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_list_ProductsListvue_type_script_lang_js_ = (ProductsListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/ProductsList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(153)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_list_ProductsListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b26c140a",
  "e32c1936"
  
)

/* harmony default export */ var ProductsList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/ProductPagination.vue?vue&type=template&id=07446f62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-color-01 page-pagination division"},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/ProductPagination.vue?vue&type=template&id=07446f62&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/ProductPagination.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6648a594"
  
)

/* harmony default export */ var ProductPagination = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsList_vue_vue_type_style_index_0_id_b26c140a_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsList_vue_vue_type_style_index_0_id_b26c140a_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsList_vue_vue_type_style_index_0_id_b26c140a_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsList_vue_vue_type_style_index_0_id_b26c140a_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_12_ProductsList_vue_vue_type_style_index_0_id_b26c140a_scoped_true_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".products-list[data-v-b26c140a]{display:flex;flex-wrap:wrap;margin:-1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/categories/_category.vue?vue&type=template&id=7a40038b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('HeaderSingle',{attrs:{"product":_vm.product}}),_vm._ssrNode(" "),_c('common-products-list-page',{attrs:{"load-products":_vm.loadProducts}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/categories/_category.vue?vue&type=template&id=7a40038b&

// EXTERNAL MODULE: ./components/products-list/CommonProductsListPage.vue + 4 modules
var CommonProductsListPage = __webpack_require__(137);

// EXTERNAL MODULE: ./api/product.js
var product = __webpack_require__(18);

// EXTERNAL MODULE: ./components/layouts/HeaderSingle.vue + 4 modules
var HeaderSingle = __webpack_require__(121);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/categories/_category.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var _categoryvue_type_script_lang_js_ = ({
  layout: 'single',
  components: {
    CommonProductsListPage: CommonProductsListPage["default"],
    HeaderSingle: HeaderSingle["default"]
  },

  data() {
    return {
      product: {
        title: 'Каталог'
      }
    };
  },

  computed: {
    categoryId() {
      return this.$route.params.category.split('-').slice(-1).pop();
    }

  },
  methods: {
    async loadProducts() {
      const filter = {
        category: this.categoryId
      };
      return await product["a" /* default */].list(filter);
    }

  }
});
// CONCATENATED MODULE: ./pages/categories/_category.vue?vue&type=script&lang=js&
 /* harmony default export */ var categories_categoryvue_type_script_lang_js_ = (_categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/categories/_category.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  categories_categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5c4cbf9d"
  
)

/* harmony default export */ var _category = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSingle: __webpack_require__(121).default,CommonProductsListPage: __webpack_require__(137).default})


/***/ })

};;
//# sourceMappingURL=_category.js.map