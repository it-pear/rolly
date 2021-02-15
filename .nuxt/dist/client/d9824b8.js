(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(t,e,r){var content=r(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("56d42605",content,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";var c={name:"ProductsListCard",props:{product:{type:Object,required:!0}},methods:{addToCartInlist:function(){this.$store.commit("cart/addProduct",{product:this.product,color:this.selectedColor,size:this.selectedSize,price:this.product.price})}}},n=r(3),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-sm-6 col-lg-3"},[r("nuxt-link",{attrs:{to:{name:"products-product",params:{product:t.product.slug+"-"+t.product.id}}}},[r("div",{staticClass:"menu-6-item bg-white"},[r("div",{staticClass:"menu-6-img rel"},[r("div",{staticClass:"hover-overlay"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img-fluid",attrs:{"data-src":t.product.images[0],alt:t.product.title}}),t._v(" "),r("span",{staticClass:"item-code bg-tra-dark"}),t._v(" "),r("div",{staticClass:"menu-img-zoom ico-25"},[r("a",{staticClass:"image-link",attrs:{href:"images/menu/roll-11-1.jpg"}},[r("span",{staticClass:"flaticon-zoom"})])])])]),t._v(" "),r("div",{staticClass:"menu-6-txt rel"},[r("div",{staticClass:"item-rating"},[r("div",{staticClass:"stars-rating stars-lg"},[r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star"}),t._v(" "),r("i",{staticClass:"fas fa-star-half-alt"})])]),t._v(" "),r("h5",{staticClass:"h5-sm"},[t._v(t._s(t.product.title))]),t._v(" "),r("div",{staticClass:"menu-6-price bg-salmon"},[r("h5",{staticClass:"h5-xs white-color"},[t._v(t._s(t.product.price)+" ₽")])]),t._v(" "),r("div",{staticClass:"add-to-cart bg-yellow ico-10"},[r("a",{on:{click:function(e){return e.preventDefault(),t.addToCartInlist(e)}}},[r("span",{staticClass:"flaticon-shopping-bag"}),t._v(" Добавить")])])])])])],1)}),[],!1,null,null,null);e.a=component.exports},306:function(t,e,r){"use strict";r.r(e);r(47),r(12),r(13),r(8),r(38);var c=r(16),n=r(29);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ProductsListFilter",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({categories:function(t){return t.filters.categories}})),created:function(){this.categories||this.$store.dispatch("filters/fetchCategories")}},d=(r(308),r(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tabs-nav"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 text-center"},[r("ul",{staticClass:"tabs-1 ico-55 red-tabs clearfix"},t._l(t.categories,(function(e){return r("li",{key:e.id,staticClass:"tab-link",class:{current:t.$route.params.category===e.slug+"-"+e.id}},[r("nuxt-link",{attrs:{to:{name:"categories-category",params:{category:e.slug+"-"+e.id},hash:"#catalogmenu"}}},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"categoryimg",attrs:{"data-src":""+e.img,alt:""}}),t._v(" "),r("h5",{staticClass:"h5-sm"},[t._v("\n              "+t._s(e.title)+"\n            ")])])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,r){"use strict";r(304)},309:function(t,e,r){(e=r(19)(!1)).push([t.i,".categoryimg{max-height:55px}",""]),t.exports=e},320:function(t,e,r){"use strict";r.r(e);r(21);var c=r(2),n={name:"CommonProductsListPage",components:{ProductsListCard:r(305).a},data:function(){return{products:[],productsLoading:!1}},props:{loadProducts:{type:Function,required:!0},cateoryProduc:String},computed:{filteredPosts:function(){return this.products.filter((function(p){return"5xAZjoE"==p.category}))},filteredPoststwo:function(){return this.products.filter((function(p){return"QxlgyWB"==p.category}))}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.productsLoading=!1,e.next=3,t.loadProducts();case 3:t.products=e.sent;case 4:case"end":return e.stop()}}),e)})))()}},o=r(3),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"wide-70 menu-section division",attrs:{id:"menu-6"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{attrs:{id:"catalogmenu"}}),t._v(" "),r("products-list-filter"),t._v(" "),r("div",{staticClass:"row"},[t._l(t.filteredPosts.slice(0,8),(function(t){return r("products-list-card",{key:t.id,attrs:{product:t}})})),t._v(" "),t._l(t.filteredPoststwo.slice(0,3),(function(t){return r("products-list-card",{key:t.id,attrs:{product:t}})}))],2)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 offset-lg-1"},[e("div",{staticClass:"section-title mb-60 text-center"},[e("h2",{staticClass:"h2-xl"},[this._v("Наше меню")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsListFilter:r(306).default})},346:function(t,e,r){"use strict";r.r(e);r(21);var c=r(2),n=r(320),o=r(99),l={components:{CommonProductsListIndex:n.default},methods:{loadProducts:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.list();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}}},d=r(3),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CommonProductsListIndex",{attrs:{"load-products":this.loadProducts}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonProductsListIndex:r(320).default})}}]);