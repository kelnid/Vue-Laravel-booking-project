"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_room_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/room/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/room/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Edit",
  data: function data() {
    return {
      name: null,
      bed: null,
      area: null,
      price: null,
      image: null,
      hotel_id: null,
      hotels: []
    };
  },
  mounted: function mounted() {
    this.getHotels();
    this.getRoom();
  },
  methods: {
    getHotels: function getHotels() {
      var _this = this;

      axios.get('/api/hotels').then(function (res) {
        _this.hotels = res.data;
      });
    },
    getRoom: function getRoom() {
      var _this2 = this;

      axios.get("/api/rooms/show/".concat(this.$route.params.id)).then(function (res) {
        _this2.name = res.data.name;
        _this2.bed = res.data.bed;
        _this2.area = res.data.area;
        _this2.price = res.data.price;
        _this2.hotel_id = res.data.hotel_id;
      });
    },
    addFile: function addFile(event) {
      this.image = event.target.files[0];
      console.log(this.image);
    },
    updateRoom: function updateRoom() {
      var _this3 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var formData = new FormData();
          formData.append('_method', 'PATCH');
          formData.append('name', _this3.name);
          formData.append('bed', _this3.bed);
          formData.append('area', _this3.area);
          formData.append('price', _this3.price);
          formData.append('hotel_id', _this3.hotel_id);

          if (_this3.image) {
            formData.append('image', _this3.image);
          }

          axios.post("/api/rooms/".concat(_this3.$route.params.id), formData).then(function (res) {
            _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
              name: 'room.show',
              params: {
                id: _this3.$route.params.id
              }
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/room/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/room/Edit.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_8e5c43ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=8e5c43ba&scoped=true& */ "./resources/js/components/room/Edit.vue?vue&type=template&id=8e5c43ba&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/room/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_8e5c43ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_8e5c43ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8e5c43ba",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/room/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/room/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/room/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/room/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/room/Edit.vue?vue&type=template&id=8e5c43ba&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/room/Edit.vue?vue&type=template&id=8e5c43ba&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8e5c43ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8e5c43ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8e5c43ba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=8e5c43ba&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/room/Edit.vue?vue&type=template&id=8e5c43ba&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/room/Edit.vue?vue&type=template&id=8e5c43ba&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/room/Edit.vue?vue&type=template&id=8e5c43ba&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-header"),
      _vm._v(" "),
      _c("div", { staticClass: "container pt-5 w-25" }, [
        _c("div", { staticClass: "mb-3 shadow" }, [
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|min:3",
                expression: "'required|min:3'",
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "name" },
            domProps: { value: _vm.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3 shadow" }, [
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|min:3",
                expression: "'required|min:3'",
              },
              {
                name: "model",
                rawName: "v-model",
                value: _vm.bed,
                expression: "bed",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text", name: "bed" },
            domProps: { value: _vm.bed },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.bed = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3 shadow" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.area,
                expression: "area",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "number" },
            domProps: { value: _vm.area },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.area = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3 shadow" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.price,
                expression: "price",
              },
            ],
            staticClass: "form-control",
            attrs: { type: "text" },
            domProps: { value: _vm.price },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.price = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3" }, [
          _c("input", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "image",
                expression: "'image'",
              },
            ],
            staticClass: "form-control",
            attrs: {
              "data-vv-as": "image",
              type: "file",
              name: "image",
              id: "image",
            },
            on: { change: _vm.addFile },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.hotel_id,
                  expression: "hotel_id",
                },
              ],
              staticClass: "form-select",
              staticStyle: { width: "280px" },
              attrs: { name: "county_id" },
              on: {
                change: function ($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function (o) {
                      return o.selected
                    })
                    .map(function (o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.hotel_id = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
              },
            },
            [
              _vm._l(_vm.hotels, function (hotel) {
                return [
                  _c("option", { domProps: { value: hotel.id } }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(hotel.name) +
                        "\n                        "
                    ),
                  ]),
                ]
              }),
            ],
            2
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mb-3" }, [
          _c(
            "button",
            {
              staticClass: " btn btn-primary",
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.updateRoom($event)
                },
              },
            },
            [_vm._v("Обновить")]
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);