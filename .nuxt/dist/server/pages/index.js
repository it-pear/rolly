exports.ids = [4];
exports.modules = {

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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/CommonProductsListIndex.vue?vue&type=template&id=1d3cdcf9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"wide-70 menu-section division",attrs:{"id":"menu-6"}},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-10 offset-lg-1\"><div class=\"section-title mb-60 text-center\"><h2 class=\"h2-xl\">Наше меню</h2></div></div></div> <div id=\"catalogmenu\"></div> "),_c('products-list-filter'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._l((_vm.filteredPosts.slice(0, 8)),function(product){return _c('products-list-card',{key:product.id,attrs:{"product":product}})}),_vm._ssrNode(" "),_vm._l((_vm.filteredPoststwo.slice(0, 3)),function(product){return _c('products-list-card',{key:product.id,attrs:{"product":product}})})],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/products-list/CommonProductsListIndex.vue?vue&type=template&id=1d3cdcf9&

// EXTERNAL MODULE: ./components/products-list/ProductListCard.vue + 4 modules
var ProductListCard = __webpack_require__(125);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./components/products-list/CommonProductsListIndex.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CommonProductsListIndexvue_type_script_lang_js_ = ({
  name: "CommonProductsListPage",
  components: {
    ProductsListCard: ProductListCard["a" /* default */]
  },

  data() {
    return {
      products: [],
      productsLoading: false
    };
  },

  props: {
    loadProducts: {
      type: Function,
      required: true
    },
    cateoryProduc: String
  },
  computed: {
    filteredPosts() {
      return this.products.filter(p => p.category == "5xAZjoE");
    },

    filteredPoststwo() {
      return this.products.filter(p => p.category == "QxlgyWB");
    }

  },

  async created() {
    this.productsLoading = false;
    this.products = await this.loadProducts();
  }

});
// CONCATENATED MODULE: ./components/products-list/CommonProductsListIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_list_CommonProductsListIndexvue_type_script_lang_js_ = (CommonProductsListIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/products-list/CommonProductsListIndex.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_list_CommonProductsListIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "130414b2"
  
)

/* harmony default export */ var CommonProductsListIndex = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductsListFilter: __webpack_require__(126).default})


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/index.vue?vue&type=template&id=5c090524&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CommonProductsListIndex',{attrs:{"load-products":_vm.loadProducts}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5c090524&

// EXTERNAL MODULE: ./components/products-list/CommonProductsListIndex.vue + 4 modules
var CommonProductsListIndex = __webpack_require__(140);

// EXTERNAL MODULE: ./api/product.js
var product = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--12!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var string_replace_loader_ref_12_pagesvue_type_script_lang_js_ = ({
  components: {
    CommonProductsListIndex: CommonProductsListIndex["default"]
  },
  methods: {
    async loadProducts() {
      return await product["a" /* default */].list();
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (string_replace_loader_ref_12_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "062416fc"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonProductsListIndex: __webpack_require__(140).default})


/***/ })

};;
//# sourceMappingURL=index.js.map