"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_auth_Registration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Registration.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Registration.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Registration",
  data: function data() {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      role_id: 2,
      showErrors: []
    };
  },
  methods: {
    registration: function registration() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          axios.get('/sanctum/csrf-cookie').then(function (res) {
            axios.post('/api/register', {
              email: _this.email,
              password: _this.password,
              name: _this.name,
              role_id: _this.role_id,
              password_confirmation: _this.password_confirmation
            }).then(function (res) {
              localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
              localStorage.setItem('role_id', JSON.stringify(res.data.role_id));
              localStorage.setItem('user_id', JSON.stringify(res.data.id));

              _this.$router.push({
                name: 'country.index'
              });
            })["catch"](function (error) {
              _this.showErrors = error.response.data.errors;
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/auth/Registration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/auth/Registration.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registration_vue_vue_type_template_id_6ebae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration.vue?vue&type=template&id=6ebae1b6&scoped=true& */ "./resources/js/components/auth/Registration.vue?vue&type=template&id=6ebae1b6&scoped=true&");
/* harmony import */ var _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Registration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration_vue_vue_type_template_id_6ebae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registration_vue_vue_type_template_id_6ebae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6ebae1b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Registration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Registration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Registration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Registration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Registration.vue?vue&type=template&id=6ebae1b6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/auth/Registration.vue?vue&type=template&id=6ebae1b6&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_6ebae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_6ebae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration_vue_vue_type_template_id_6ebae1b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registration.vue?vue&type=template&id=6ebae1b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Registration.vue?vue&type=template&id=6ebae1b6&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Registration.vue?vue&type=template&id=6ebae1b6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/auth/Registration.vue?vue&type=template&id=6ebae1b6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "pt-5 container w-25" },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.name,
                expression: "name",
                modifiers: { trim: true },
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|min:5",
                expression: "'required|min:5'",
              },
            ],
            staticClass: "form-control mb-3",
            attrs: { type: "text", name: "name", placeholder: "Имя" },
            domProps: { value: _vm.name },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value.trim()
              },
              blur: function ($event) {
                return _vm.$forceUpdate()
              },
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("name"),
                  expression: "errors.has('name')",
                },
              ],
              staticClass: "help-block alert alert-danger",
            },
            [_vm._v(_vm._s(_vm.errors.first("name")))]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email",
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|email",
                expression: "'required|email'",
              },
            ],
            staticClass: "form-control mb-3",
            attrs: { placeholder: "email", name: "email", type: "email" },
            domProps: { value: _vm.email },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("email"),
                  expression: "errors.has('email')",
                },
              ],
              staticClass: "help-block alert alert-danger",
            },
            [_vm._v(_vm._s(_vm.errors.first("email")))]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.password,
                expression: "password",
                modifiers: { trim: true },
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|min:8",
                expression: "'required|min:8'",
              },
            ],
            ref: "password",
            staticClass: "form-control mb-3",
            class: { "is-danger": _vm.errors.has("password") },
            attrs: {
              name: "password",
              type: "password",
              placeholder: "Пароль",
            },
            domProps: { value: _vm.password },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value.trim()
              },
              blur: function ($event) {
                return _vm.$forceUpdate()
              },
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("password"),
                  expression: "errors.has('password')",
                },
              ],
              staticClass: "help-block alert alert-danger",
            },
            [_vm._v(_vm._s(_vm.errors.first("password")))]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.trim",
                value: _vm.password_confirmation,
                expression: "password_confirmation",
                modifiers: { trim: true },
              },
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|confirmed:password",
                expression: "'required|confirmed:password'",
              },
            ],
            staticClass: "form-control mb-3",
            class: { "is-danger": _vm.errors.has("password_confirmation") },
            attrs: {
              name: "password_confirmation",
              type: "password",
              placeholder: "Подтвердите пароль",
              "data-vv-as": "password",
            },
            domProps: { value: _vm.password_confirmation },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password_confirmation = $event.target.value.trim()
              },
              blur: function ($event) {
                return _vm.$forceUpdate()
              },
            },
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.errors.has("password_confirmation"),
                  expression: "errors.has('password_confirmation')",
                },
              ],
              staticClass: "help-block alert alert-danger",
            },
            [_vm._v(_vm._s(_vm.errors.first("password_confirmation")))]
          ),
          _vm._v(" "),
          _vm._l(_vm.showErrors.email, function (error) {
            return [
              _c("div", { staticClass: "help-block alert alert-danger" }, [
                _vm._v(_vm._s(error)),
              ]),
            ]
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-outline-primary",
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.registration($event)
                },
              },
            },
            [_vm._v("Зарегистрироваться")]
          ),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);