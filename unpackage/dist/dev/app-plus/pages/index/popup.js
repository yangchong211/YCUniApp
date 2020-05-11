"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!****************************************************************************************!*\
  !*** /Users/yangchong/Documents/HBuilderProjects/YCUniApp/main.js?{"type":"appStyle"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 2 */
/*!****************************************************************************************************!*\
  !*** /Users/yangchong/Documents/HBuilderProjects/YCUniApp/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX 2.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX 2.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX 2.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX 2.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX 2.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_2_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangchong/Documents/HBuilderProjects/YCUniApp/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal"
    }
  ],
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26rpx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-page-head": {
    "paddingTop": "35rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "35rpx",
    "textAlign": "center"
  },
  "uni-page-head-title": {
    "display": "inline-block",
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "fontSize": "30rpx",
    "height": "88rpx",
    "lineHeight": "88rpx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottom": "2rpx solid #D8D8D8"
  },
  "uni-page-body": {
    "width": 100,
    "flexGrow": 1,
    "overflowX": "hidden"
  },
  "uni-padding-wrap": {
    "width": "690rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200rpx",
    "paddingRight": "100rpx",
    "paddingBottom": "200rpx",
    "paddingLeft": "100rpx"
  },
  "uni-title": {
    "fontSize": "30rpx",
    "fontWeight": "500",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28rpx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24rpx"
  },
  "uni-common-mb": {
    "marginBottom": "30rpx"
  },
  "uni-common-pb": {
    "paddingBottom": "30rpx"
  },
  "uni-common-pl": {
    "paddingLeft": "30rpx"
  },
  "uni-common-mt": {
    "marginTop": "30rpx"
  },
  "uni-bg-red": {
    "background": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "background": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "background": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80rpx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60rpx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48rpx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36rpx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24rpx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210rpx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20rpx"
  },
  "uni-input": {
    "height": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "lineHeight": "50rpx",
    "fontSize": "28rpx",
    "background": "#FFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80rpx",
    "lineHeight": "80rpx",
    "textAlign": "center",
    "paddingBottom": "30rpx"
  },
  "uni-badge": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-default": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "background": "#fff",
    "borderRadius": "8rpx",
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0,
    "position": "relative",
    "boxShadow": "0 2rpx 4rpx rgba(0, 0, 0, .3)"
  },
  "uni-card-content": {
    "fontSize": "30rpx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36rpx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2rpx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-card-media-body": {
    "height": "84rpx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36rpx",
    "fontSize": "34rpx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30rpx",
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc",
    "position::before": "absolute",
    "zIndex::before": 10,
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position::after": "absolute",
    "zIndex::after": 3,
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "30rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-left": {
    "whiteSpace": "nowrap",
    "fontSize": "28rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "0rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30rpx",
    "paddingTop": "22rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "lineHeight": "48rpx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50rpx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-media-list-body": {
    "height": "84rpx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36rpx",
    "fontSize": "30rpx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30rpx",
    "fontSize": "26rpx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "background": "#f2f2f2",
    "width": "750rpx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTop": "2rpx solid #eee"
  },
  "uni-grid-9-item": {
    "width": "250rpx",
    "height": "200rpx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottom": "2rpx solid",
    "borderRight": "2rpx solid",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRight": "none"
  },
  "uni-grid-9-image": {
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-grid-9-text": {
    "width": "250rpx",
    "lineHeight": "4rpx",
    "height": "40rpx",
    "textAlign": "center",
    "fontSize": "30rpx"
  },
  "uni-grid-9-item-hover": {
    "background": "rgba(0, 0, 0, 0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16rpx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__img": {
    "display": "block",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "208rpx",
    "height": "208rpx",
    "border": "2rpx solid #D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4rpx",
    "height:before": "79rpx",
    "width:after": "79rpx",
    "height:after": "4rpx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "color": "#8f8f94",
    "fontSize": "28rpx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40rpx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40rpx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "background": "#fff"
  },
  "feedback-textare": {
    "height": "200rpx",
    "fontSize": "34rpx",
    "lineHeight": "50rpx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "feedback-input": {
    "fontSize": "34rpx",
    "height": "50rpx",
    "minHeight": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "lineHeight": "50rpx"
  },
  "feedback-uploader": {
    "paddingTop": "22rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "20rpx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40rpx",
    "marginLeft": "6rpx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20rpx"
  },
  "feedback-submit": {
    "background": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "border": 0,
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2rpx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28rpx",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "background": "#FFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100rpx",
    "height": "100rpx",
    "borderBottom": "1px solid #c8c7cc"
  },
  "swiper-tab-list": {
    "fontSize": "30rpx",
    "width": "150rpx",
    "display": "inline-block",
    "textAlign": "center",
    "color": "#555555"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0
  },
  "uni-comment": {
    "paddingTop": "5rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70rpx",
    "height": "70rpx",
    "borderRadius": 100,
    "marginRight": "20rpx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28rpx",
    "paddingTop": "8rpx",
    "paddingRight": 0,
    "paddingBottom": "8rpx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "background": "#FFF",
    "fontSize": "24rpx",
    "lineHeight": "28rpx",
    "paddingTop": "5rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "30rpx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": 0,
    "paddingBottom": "12rpx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50rpx",
    "marginRight": "20rpx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330rpx",
    "width": "330rpx",
    "marginTop": "12rpx",
    "marginRight": 0,
    "marginBottom": "12rpx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330rpx",
    "width": "330rpx"
  },
  "uni-product-title": {
    "width": "300rpx",
    "wordBreak": "break-all",
    "display": "-webkit-box",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10rpx",
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10rpx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10rpx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "borderRadius": "5rpx"
  },
  "uni-timeline": {
    "marginTop": "35rpx",
    "marginRight": 0,
    "marginBottom": "35rpx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20rpx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15rpx",
    "width::before": "1rpx",
    "height::before": 100,
    "content::before": "''",
    "background::before": "inherit",
    "position::before::after": "absolute",
    "left::before::after": "15rpx",
    "width::before::after": "1rpx",
    "height::before::after": 100,
    "content::before::after": "''",
    "background::before::after": "inherit",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "uni-divider": {
    "height": "110rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "uni-divider__content": {
    "fontSize": "28rpx",
    "color": "#999999",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "position": "relative",
    "zIndex": 101,
    "background": "#F4F5F6"
  },
  "uni-divider__line": {
    "backgroundColor": "#CCCCCC",
    "height": "1",
    "width": 100,
    "position": "absolute",
    "zIndex": 100,
    "top": 50,
    "left": 0,
    "transform": "translateY(50%)"
  }
}

/***/ }),
/* 4 */
/*!*****************************************************************************************************!*\
  !*** /Users/yangchong/Documents/HBuilderProjects/YCUniApp/main.js?{"page":"pages%2Findex%2Fpopup"} ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module './pages/index/popup.nvue?mpType=page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

        
        
        
        !(function webpackMissingModule() { var e = new Error("Cannot find module './pages/index/popup.nvue?mpType=page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).mpType = 'page'
        !(function webpackMissingModule() { var e = new Error("Cannot find module './pages/index/popup.nvue?mpType=page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).route = 'pages/index/popup'
        !(function webpackMissingModule() { var e = new Error("Cannot find module './pages/index/popup.nvue?mpType=page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).el = '#root'
        new Vue(!(function webpackMissingModule() { var e = new Error("Cannot find module './pages/index/popup.nvue?mpType=page'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
        

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8vVXNlcnMveWFuZ2Nob25nL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL1lDVW5pQXBwL21haW4uanM/ZjFmZCIsIndlYnBhY2s6Ly8vL1VzZXJzL3lhbmdjaG9uZy9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9ZQ1VuaUFwcC9BcHAudnVlP2ZlZTUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy95YW5nY2hvbmcvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvWUNVbmlBcHAvQXBwLnZ1ZT9lOTJhIiwid2VicGFjazovLy8vVXNlcnMveWFuZ2Nob25nL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL1lDVW5pQXBwL21haW4uanM/YzQ5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDOzs7Ozs7Ozs7Ozs7QUNEOUc7QUFBQTtBQUFBO0FBQUE7QUFBZzZCLENBQWdCLDA1QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBcDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHVDQSxRQUE4QjtBQUM5QixRQUE4RDtBQUM5RCxRQUFRLDhKQUFHO0FBQ1gsUUFBUSw4SkFBRztBQUNYLFFBQVEsOEpBQUc7QUFDWCxnQkFBZ0IsOEpBQUciLCJmaWxlIjoicGFnZXMvaW5kZXgvcG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclggMi5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWCAyLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWCAyLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWCAyLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWCAyLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYIDIuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclggMi5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclggMi5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclggMi5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclggMi5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJARk9OVC1GQUNFXCI6IFtcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgICBcImZvbnRTdHlsZVwiOiBcIm5vcm1hbFwiXG4gICAgfVxuICBdLFxuICBcInVuaS1mbGV4XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktZmxleC1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLWNvbHVtblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktbGlua1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM1NzZCOTVcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZycHhcIlxuICB9LFxuICBcInVuaS1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktaW5saW5lLWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1wYWdlLWhlYWRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjM1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjM1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjM1cnB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1wYWdlLWhlYWQtdGl0bGVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiODhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiI0JFQkVCRVwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMnJweCBzb2xpZCAjRDhEOEQ4XCJcbiAgfSxcbiAgXCJ1bmktcGFnZS1ib2R5XCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImZsZXhHcm93XCI6IDEsXG4gICAgXCJvdmVyZmxvd1hcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInVuaS1wYWRkaW5nLXdyYXBcIjoge1xuICAgIFwid2lkdGhcIjogXCI2OTBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktd29yZFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMDBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMDBycHhcIlxuICB9LFxuICBcInVuaS10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNTAwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjVcbiAgfSxcbiAgXCJ1bmktdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCJcbiAgfSxcbiAgXCJ1bmktdGV4dC1ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2NjY2NjY1wiXG4gIH0sXG4gIFwidW5pLXRleHQtc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiXG4gIH0sXG4gIFwidW5pLWNvbW1vbi1tYlwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWNvbW1vbi1wYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInVuaS1jb21tb24tcGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWNvbW1vbi1tdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWJnLXJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0Y3NjI2MFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ1bmktYmctZ3JlZW5cIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwOUJCMDdcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidW5pLWJnLWJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidW5pLWgxXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiODBycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcInVuaS1oMlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjYwcnB4XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCJ1bmktaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0OHJweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwidW5pLWg0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZycHhcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcInVuaS1oNVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZjhmOTRcIlxuICB9LFxuICBcInVuaS1oNlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZjhmOTRcIlxuICB9LFxuICBcInVuaS1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJ1bmktZWxsaXBzaXNcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIixcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJ1bmktYnRuLXZcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInVuaS1mb3JtLWl0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJ1bmktbGFiZWxcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMTBycHhcIixcbiAgICBcIndvcmRXcmFwXCI6IFwiYnJlYWstd29yZFwiLFxuICAgIFwid29yZEJyZWFrXCI6IFwiYnJlYWstYWxsXCIsXG4gICAgXCJ0ZXh0SW5kZW50XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1pbnB1dFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjI1cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImJhY2tncm91bmRcIjogXCIjRkZGXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJ1bmktbG9hZG1vcmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI4MHJweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInVuaS1iYWRnZVwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNlwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjNcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNlwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4xNSlcIlxuICB9LFxuICBcInVuaS1iYWRnZS1kZWZhdWx0XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTJcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMSxcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiM1wiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjE1KVwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YWZmXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtZ3JlZW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNGNkOTY0XCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2Utc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0Y2Q5NjRcIlxuICB9LFxuICBcInVuaS1iYWRnZS13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwYWQ0ZVwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXllbGxvd1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGFkNGVcIlxuICB9LFxuICBcInVuaS1iYWRnZS1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGQ1MjRkXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RkNTI0ZFwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLXB1cnBsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4YTZkZTlcIlxuICB9LFxuICBcInVuaS1iYWRnZS1yb3lhbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4YTZkZTlcIlxuICB9LFxuICBcInVuaS1jb2xsYXBzZS1jb250ZW50XCI6IHtcbiAgICBcImhlaWdodFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInVuaS1jYXJkXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCIjZmZmXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJib3hTaGFkb3dcIjogXCIwIDJycHggNHJweCByZ2JhKDAsIDAsIDAsIC4zKVwiXG4gIH0sXG4gIFwidW5pLWNhcmQtY29udGVudFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktY2FyZC1jb250ZW50LWlubmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtZm9vdGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzZkNmQ3MlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmVcIjogMCxcbiAgICBcInJpZ2h0OmJlZm9yZVwiOiAwLFxuICAgIFwibGVmdDpiZWZvcmVcIjogMCxcbiAgICBcImhlaWdodDpiZWZvcmVcIjogXCIycnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YmVmb3JlXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjYzhjN2NjXCJcbiAgfSxcbiAgXCJ1bmktY2FyZC1oZWFkZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNnJweFwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmU6YWZ0ZXJcIjogMCxcbiAgICBcInJpZ2h0OmJlZm9yZTphZnRlclwiOiAwLFxuICAgIFwibGVmdDpiZWZvcmU6YWZ0ZXJcIjogMCxcbiAgICBcImhlaWdodDpiZWZvcmU6YWZ0ZXJcIjogXCIycnB4XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YmVmb3JlOmFmdGVyXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZTphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJib3R0b206YWZ0ZXJcIjogMFxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtbWVkaWEtbG9nb1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4NHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI4NHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtbWVkaWEtYm9keVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4NHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcInVuaS1jYXJkLW1lZGlhLXRleHQtdG9wXCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogXCIzNnJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNHJweFwiXG4gIH0sXG4gIFwidW5pLWNhcmQtbWVkaWEtdGV4dC1ib3R0b21cIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZjhmOTRcIlxuICB9LFxuICBcInVuaS1jYXJkLWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJ1bmktbGlzdFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiekluZGV4OmFmdGVyXCI6IDEwLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogMCxcbiAgICBcImJvdHRvbTphZnRlclwiOiAwLFxuICAgIFwibGVmdDphZnRlclwiOiAwLFxuICAgIFwiaGVpZ2h0OmFmdGVyXCI6IFwiMVwiLFxuICAgIFwiY29udGVudDphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6YWZ0ZXJcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjo6YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInpJbmRleDo6YmVmb3JlXCI6IDEwLFxuICAgIFwicmlnaHQ6OmJlZm9yZVwiOiAwLFxuICAgIFwidG9wOjpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6OmJlZm9yZVwiOiAwLFxuICAgIFwiaGVpZ2h0OjpiZWZvcmVcIjogXCIxXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOjpiZWZvcmVcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm06OmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjo6YmVmb3JlXCI6IFwiI2M4YzdjY1wiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiekluZGV4OjphZnRlclwiOiAzLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlclwiOiBcIjMwcnB4XCIsXG4gICAgXCJoZWlnaHQ6OmFmdGVyXCI6IFwiMVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCInJ1wiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOjphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXJcIjogXCJzY2FsZVkoLjUpXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6OmFmdGVyXCI6IFwiI2M4YzdjY1wiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1ob3ZlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZWVlZWVlXCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLXBkXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1sZWZ0XCI6IHtcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLWRiXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS1saXN0LWNlbGwtcmlnaHRcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwidW5pLWxpc3QtY2VsbC1kaXZpZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmN2Y3ZjdcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxNXJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicG9zaXRpb246OmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDo6YmVmb3JlXCI6IDAsXG4gICAgXCJ0b3A6OmJlZm9yZVwiOiAwLFxuICAgIFwibGVmdDo6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZVwiOiBcIjFcIixcbiAgICBcImNvbnRlbnQ6OmJlZm9yZVwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06OmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcInRyYW5zZm9ybTo6YmVmb3JlXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOjpiZWZvcmVcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlclwiOiBcIjBycHhcIixcbiAgICBcImhlaWdodDo6YWZ0ZXJcIjogXCIxXCIsXG4gICAgXCJjb250ZW50OjphZnRlclwiOiBcIicnXCIsXG4gICAgXCJXZWJraXRUcmFuc2Zvcm06OmFmdGVyXCI6IFwic2NhbGVZKC41KVwiLFxuICAgIFwidHJhbnNmb3JtOjphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjo6YWZ0ZXJcIjogXCIjYzhjN2NjXCJcbiAgfSxcbiAgXCJ1bmktbGlzdC1jZWxsLW5hdmlnYXRlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzZycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjQ4cnB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktbmF2aWdhdGUtYmFkZ2VcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInVuaS10cmlwbGV4LXJvd1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktdHJpcGxleC1yaWdodFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogMTYsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidW5pLXRyaXBsZXgtbGVmdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogODRcbiAgfSxcbiAgXCJ1bmktbWVkaWEtbGlzdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjJycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJ1bmktcHVsbC1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcInVuaS1tZWRpYS1saXN0LWxvZ29cIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODRycHhcIixcbiAgICBcIndpZHRoXCI6IFwiODRycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1tZWRpYS1saXN0LWJvZHlcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiODRycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLW1lZGlhLWxpc3QtdGV4dC10b3BcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM2cnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktbWVkaWEtbGlzdC10ZXh0LWJvdHRvbVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzhmOGY5NFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2YyZjJmMlwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImJvcmRlclRvcFwiOiBcIjJycHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMnJweCBzb2xpZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogXCIycnB4IHNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlZWVlZWVcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIlxuICB9LFxuICBcIm5vLWJvcmRlci1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFwiOiBcIm5vbmVcIlxuICB9LFxuICBcInVuaS1ncmlkLTktaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS10ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMjUwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwidW5pLWdyaWQtOS1pdGVtLWhvdmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJyZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInVuaS11cGxvYWRlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXItaGVhZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXItaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNCMkIyQjJcIlxuICB9LFxuICBcInVuaS11cGxvYWRlci1ib2R5XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2cnB4XCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXJfX2ZpbGVzXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcInVuaS11cGxvYWRlcl9fZmlsZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMTBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIxMHJweFwiXG4gIH0sXG4gIFwidW5pLXVwbG9hZGVyX19pbWdcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjIxMHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjEwcnB4XCJcbiAgfSxcbiAgXCJ1bmktdXBsb2FkZXJfX2lucHV0LWJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMDhycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjIwOHJweFwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMnJweCBzb2xpZCAjRDlEOUQ5XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmVcIjogNTAsXG4gICAgXCJsZWZ0OmJlZm9yZVwiOiA1MCxcbiAgICBcIldlYmtpdFRyYW5zZm9ybTpiZWZvcmVcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmVcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjRDlEOUQ5XCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwicG9zaXRpb246YmVmb3JlOmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDpiZWZvcmU6YWZ0ZXJcIjogNTAsXG4gICAgXCJsZWZ0OmJlZm9yZTphZnRlclwiOiA1MCxcbiAgICBcIldlYmtpdFRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcInRyYW5zZm9ybTpiZWZvcmU6YWZ0ZXJcIjogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmU6YWZ0ZXJcIjogXCIjRDlEOUQ5XCIsXG4gICAgXCJ3aWR0aDpiZWZvcmVcIjogXCI0cnB4XCIsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiNzlycHhcIixcbiAgICBcIndpZHRoOmFmdGVyXCI6IFwiNzlycHhcIixcbiAgICBcImhlaWdodDphZnRlclwiOiBcIjRycHhcIixcbiAgICBcImJvcmRlckNvbG9yOmFjdGl2ZVwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphY3RpdmU6YmVmb3JlXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yOmFjdGl2ZTpiZWZvcmU6YWN0aXZlOmFmdGVyXCI6IFwiIzk5OTk5OVwiXG4gIH0sXG4gIFwidW5pLXVwbG9hZGVyX19pbnB1dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXhcIjogMSxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcImZlZWRiYWNrLXRpdGxlXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOGY4Zjk0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1xdWlja1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwiZm9udEZhbWlseTphZnRlclwiOiBcInVuaWljb25zXCIsXG4gICAgXCJmb250U2l6ZTphZnRlclwiOiBcIjQwcnB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiJ1xcXFxlNTgxJ1wiLFxuICAgIFwicG9zaXRpb246YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwicmlnaHQ6YWZ0ZXJcIjogMCxcbiAgICBcInRvcDphZnRlclwiOiA1MCxcbiAgICBcImNvbG9yOmFmdGVyXCI6IFwiI2JiYmJiYlwiLFxuICAgIFwiV2Via2l0VHJhbnNmb3JtOmFmdGVyXCI6IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgIFwidHJhbnNmb3JtOmFmdGVyXCI6IFwidHJhbnNsYXRlWSgtNTAlKVwiXG4gIH0sXG4gIFwiZmVlZGJhY2stYm9keVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI2ZmZlwiXG4gIH0sXG4gIFwiZmVlZGJhY2stdGV4dGFyZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIyMDBycHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzRycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiZmVlZGJhY2staW5wdXRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwiZmVlZGJhY2stdXBsb2FkZXJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdGFyXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgIFwiZm9udFNpemVcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjZycHhcIixcbiAgICBcImNvbnRlbnQ6YWZ0ZXJcIjogXCInXFxcXGU0MDgnXCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdGFyLXZpZXdcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmZWVkYmFjay1zdWJtaXRcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcIiMwMDdBRkZcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1pbnB1dC1ncm91cFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJib3JkZXJcIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IDAsXG4gICAgXCJyaWdodDpiZWZvcmVcIjogMCxcbiAgICBcImxlZnQ6YmVmb3JlXCI6IDAsXG4gICAgXCJoZWlnaHQ6YmVmb3JlXCI6IFwiMnJweFwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjpiZWZvcmVcIjogXCIjYzhjN2NjXCIsXG4gICAgXCJwb3NpdGlvbjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodDphZnRlclwiOiAwLFxuICAgIFwiYm90dG9tOmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OmFmdGVyXCI6IDAsXG4gICAgXCJoZWlnaHQ6YWZ0ZXJcIjogXCIycnB4XCIsXG4gICAgXCJjb250ZW50OmFmdGVyXCI6IFwiJydcIixcbiAgICBcInRyYW5zZm9ybTphZnRlclwiOiBcInNjYWxlWSguNSlcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjphZnRlclwiOiBcIiNjOGM3Y2NcIlxuICB9LFxuICBcInVuaS1pbnB1dC1yb3dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMnJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJ1bmktdGV4dGFyZWFcIjoge1xuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcIiNGRkZcIlxuICB9LFxuICBcInVuaS10YWItYmFyXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiaGVpZ2h0XCI6IDEwMFxuICB9LFxuICBcInVuaS1zd2lwZXItdGFiXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNjOGM3Y2NcIlxuICB9LFxuICBcInN3aXBlci10YWItbGlzdFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE1MHJweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiM1NTU1NTVcIlxuICB9LFxuICBcInVuaS10YWItYmFyLWxvYWRpbmdcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInVuaS1jb21tZW50XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhHcm93XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJ1bmktY29tbWVudC1saXN0XCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwibm93cmFwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIlxuICB9LFxuICBcInVuaS1jb21tZW50LWZhY2VcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MHJweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzBycHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtYm9keVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJ1bmktY29tbWVudC10b3BcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcInVuaS1jb21tZW50LWRhdGVcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjM4cnB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4R3Jvd1wiOiAxXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtY29udGVudFwiOiB7XG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI4cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI4cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwidW5pLWNvbW1lbnQtcmVwbGF5LWJ0blwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0ZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI4cnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIzMHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJ1bmktc3dpcGVyLW1zZ1wiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTJycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiZmxleFdyYXBcIjogXCJub3dyYXBcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCJcbiAgfSxcbiAgXCJ1bmktc3dpcGVyLW1zZy1pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0LWxpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLXByb2R1Y3RcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiaW1hZ2Utdmlld1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzMzBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMwcnB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMnJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEycnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1pbWFnZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIzMzBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMwcnB4XCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC10aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjMwMHJweFwiLFxuICAgIFwid29yZEJyZWFrXCI6IFwiYnJlYWstYWxsXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiLXdlYmtpdC1ib3hcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuNSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCIsXG4gICAgXCJXZWJraXRCb3hPcmllbnRcIjogXCJ2ZXJ0aWNhbFwiLFxuICAgIFwiV2Via2l0TGluZUNsYW1wXCI6IDJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1wcmljZVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjUsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ1bmktcHJvZHVjdC1wcmljZS1vcmlnaW5hbFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNlODAwODBcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0LXByaWNlLWZhdm91clwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4ODg4ODhcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibGluZS10aHJvdWdoXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInVuaS1wcm9kdWN0LXRpcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJyaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmYzMzMzXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJ1bmktdGltZWxpbmVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzVycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzNXJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInVuaS10aW1lbGluZS1pdGVtXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJ1bmktdGltZWxpbmUtaXRlbS1kaXZpZGVyXCI6IHtcbiAgICBcInBvc2l0aW9uOjpiZWZvcmVcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdDo6YmVmb3JlXCI6IFwiMTVycHhcIixcbiAgICBcIndpZHRoOjpiZWZvcmVcIjogXCIxcnB4XCIsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZVwiOiAxMDAsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCInJ1wiLFxuICAgIFwiYmFja2dyb3VuZDo6YmVmb3JlXCI6IFwiaW5oZXJpdFwiLFxuICAgIFwicG9zaXRpb246OmJlZm9yZTo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdDo6YmVmb3JlOjphZnRlclwiOiBcIjE1cnB4XCIsXG4gICAgXCJ3aWR0aDo6YmVmb3JlOjphZnRlclwiOiBcIjFycHhcIixcbiAgICBcImhlaWdodDo6YmVmb3JlOjphZnRlclwiOiAxMDAsXG4gICAgXCJjb250ZW50OjpiZWZvcmU6OmFmdGVyXCI6IFwiJydcIixcbiAgICBcImJhY2tncm91bmQ6OmJlZm9yZTo6YWZ0ZXJcIjogXCJpbmhlcml0XCIsXG4gICAgXCJib3R0b206OmJlZm9yZVwiOiAxMDAsXG4gICAgXCJ0b3A6OmFmdGVyXCI6IDEwMFxuICB9LFxuICBcInVuaS1pY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJ1bmlpY29uc1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcIldlYmtpdEZvbnRTbW9vdGhpbmdcIjogXCJhbnRpYWxpYXNlZFwiXG4gIH0sXG4gIFwidW5pLWljb24tY29udGFjdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMCdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvbmFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWNvbnRhY3QtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMTMwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGVyc29uLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTEzMSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBlcnNvbmFkZC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUxMzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1waG9uZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWVtYWlsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjAxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hhdGJ1YmJsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWNoYXRib3hlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIwMydcIlxuICB9LFxuICBcInVuaS1pY29uLXBob25lLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWVtYWlsLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNoYXRidWJibGUtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjMyJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hhdGJveGVzLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTIzMydcIlxuICB9LFxuICBcInVuaS1pY29uLXdlaWJvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24td2VpeGluXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYxJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGVuZ3lvdXF1YW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyNjInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGF0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMjYzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tcXFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUyNjQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi12aWRlb2NhbVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNhbWVyYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLW1pY1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWxvY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlMzAzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbWljLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTMzMidcIlxuICB9LFxuICBcInVuaS1pY29uLXNwZWVjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZTpiZWZvcmVcIjogXCInXFxcXGUzMzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sb2NhdGlvbi1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzMzMnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1taWNvZmZcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGUzNjAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1pbWFnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTM2MydcIlxuICB9LFxuICBcInVuaS1pY29uLW1hcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTM2NCdcIlxuICB9LFxuICBcInVuaS1pY29uLWNvbXBvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi10cmFzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLXVwbG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwMidcIlxuICB9LFxuICBcInVuaS1pY29uLWRvd25sb2FkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDAzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWRvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tdW5kb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwNidcIlxuICB9LFxuICBcInVuaS1pY29uLXJlZnJlc2hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MDcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zdGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDA4J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGx1c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQwOSdcIlxuICB9LFxuICBcInVuaS1pY29uLW1pbnVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDEwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2lyY2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDExJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2hlY2tib3hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlNDExJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2xvc2UtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2xlYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmU6YmVmb3JlXCI6IFwiJ1xcXFxlNDM0J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcmVmcmVzaC1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0MzcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zdGFyLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQzOCdcIlxuICB9LFxuICBcInVuaS1pY29uLXBsdXMtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDM5J1wiXG4gIH0sXG4gIFwidW5pLWljb24tbWludXMtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDQwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tY2lyY2xlLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MSdcIlxuICB9LFxuICBcInVuaS1pY29uLWNoZWNrYm94LWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ0MidcIlxuICB9LFxuICBcInVuaS1pY29uLWNsb3NlZW1wdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWZyZXNoZW1wdHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1yZWxvYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zdGFyaGFsZlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ2MydcIlxuICB9LFxuICBcInVuaS1pY29uLXNwaW5uZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NjQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zcGlubmVyLWN5Y2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tc2VhcmNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY2J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcGx1c2VtcHR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNDY4J1wiXG4gIH0sXG4gIFwidW5pLWljb24tZm9yd2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ3MCdcIlxuICB9LFxuICBcInVuaS1pY29uLWJhY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU0NzEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sZWZ0LW5hdlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZTpiZWZvcmVcIjogXCInXFxcXGU0NzEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1jaGVja21hcmtlbXB0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTQ3MidcIlxuICB9LFxuICBcInVuaS1pY29uLWhvbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1uYXZpZ2F0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwMSdcIlxuICB9LFxuICBcInVuaS1pY29uLWdlYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1wYXBlcnBsYW5lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTAzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24taW5mb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwNCdcIlxuICB9LFxuICBcInVuaS1pY29uLWhlbHBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDUnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1sb2NrZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MDYnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTA3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tZmxhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUwOCdcIlxuICB9LFxuICBcInVuaS1pY29uLWhvbWUtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTMwJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tZ2Vhci1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MzInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1pbmZvLWZpbGxlZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTUzNCdcIlxuICB9LFxuICBcInVuaS1pY29uLWhlbHAtZmlsbGVkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTM1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tbW9yZS1maWxsZWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1MzcnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zZXR0aW5nc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2MCdcIlxuICB9LFxuICBcInVuaS1pY29uLWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1NjInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1iYXJzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTYzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tbG9vcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2NSdcIlxuICB9LFxuICBcInVuaS1pY29uLXBhcGVyY2xpcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2NydcIlxuICB9LFxuICBcInVuaS1pY29uLWV5ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU2OCdcIlxuICB9LFxuICBcInVuaS1pY29uLWFycm93dXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODAnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd2Rvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODEnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd2xlZnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODInXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd3JpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTgzJ1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3d0aGludXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODQnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1hcnJvd3RoaW5kb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg1J1wiXG4gIH0sXG4gIFwidW5pLWljb24tYXJyb3d0aGlubGVmdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIidcXFxcZTU4NidcIlxuICB9LFxuICBcInVuaS1pY29uLWFycm93dGhpbnJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiJ1xcXFxlNTg3J1wiXG4gIH0sXG4gIFwidW5pLWljb24tcHVsbGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCInXFxcXGU1ODgnXCJcbiAgfSxcbiAgXCJ1bmktaWNvbi1zY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjEyXFxcIlwiXG4gIH0sXG4gIFwidW5pLWRpdmlkZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTEwcnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInVuaS1kaXZpZGVyX19jb250ZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInpJbmRleFwiOiAxMDEsXG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0Y0RjVGNlwiXG4gIH0sXG4gIFwidW5pLWRpdmlkZXJfX2xpbmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMVwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiekluZGV4XCI6IDEwMCxcbiAgICBcInRvcFwiOiA1MCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoNTAlKVwiXG4gIH1cbn0iLCJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L3BvcHVwLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L3BvcHVwJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9