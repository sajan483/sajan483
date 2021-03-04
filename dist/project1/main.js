(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-hedder></app-hedder>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\" *ngIf=\"router.url !== '/login' && router.url !== '/signup'\">\n  <div class=\"container flexbetween\">\n    <div>\n      <a>Copyright &copy; 2020 www.akbartravels.com. All Right Received</a>\n    </div>\n    <div>\n      <span >Powered By - Benzy Infotech</span>\n    </div>\n  </div>\n</div> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/hedder/hedder.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/hedder/hedder.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light positionfixed\" *ngIf=\"router.url !== '/login' && router.url !== '/signup'\">\n  <div class=\"collapse navbar-collapse container\">\n    <a class=\"navbar-brand cursor-pointer\" ><img class=\"logohight\" src=\"/assets/images/agent-logo.png\" alt=\"\"></a>\n    <form class=\"form-inline my-2 my-lg-0\">\n\n      <div class=\"dropdown\" *ngIf=\"branchActive\">\n        <div class=\"d-flex cursor-pointer hidemobile\">\n          <div class=\"pr-2\">\n            <p class=\"mb-0 wlcmtext\">Welcome <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></p>\n            <p class=\"mb-0 f15\">Branch Name Here</p>\n          </div>\n          <i class=\"userpic icns icon_size_40\"></i>\n        </div>\n        <div class=\"dinsplaymobile hidesystem mr-3\">\n          <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"dropdown-content animationdivfast\">\n          <a (click)=\"navigatepage('/firstpage');\">\n            <div class=\"d-flex padngover mt-2\">\n              <i class=\"icns createpackages icon_size_25\"></i>\n              <p class=\"f15 my-auto pl15\" [class.clrred]=\"router.url === '/firstpage'\">Create Package</p>\n            </div>\n          </a>\n          <a (click)=\"navigatepage('/history');\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns historyicon icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\" [class.clrred]=\"router.url === '/history'\" >history</p>\n            </div>\n          </a>\n          <a (click)=\"navigatepage('/profilepage');\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns myprofile icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\" [class.clrred]=\"router.url === '/profilepage'\">My Profile</p>\n            </div>\n          </a>\n          <a class=\"bgred\" (click)=\"logout();\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns logouticon icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\">Logout</p>\n            </div>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"dropdown\" *ngIf=\"agencyActive\">\n        <div class=\"d-flex cursor-pointer hidemobile\">\n          <div class=\"pr-2\">\n            <p class=\"mb-0 wlcmtext\">welcome <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></p>\n            <p class=\"mb-0 f15\">Agency Name Here</p>\n          </div>\n          <i class=\"userpic icns icon_size_40\"></i>\n        </div>\n        <div class=\"dinsplaymobile hidesystem mr-3\">\n          <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"dropdown-content animationdivfast\">\n          <a class=\"\" (click)=\"navigatepage('/trip');\">\n            <div class=\"d-flex padngover mt-2\">\n              <i class=\"icns createpackages icon_size_25\"></i>\n              <p class=\"f15 my-auto pl15\" [class.clrred]=\"router.url === '/trip'\">Create New Package</p>\n            </div>\n          </a>\n          <a (click)=\"navigatepage('/branches');\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns menubranches icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\" [class.clrred]=\"router.url === '/branches'\">Branches</p>\n            </div>\n          </a>\n          <a (click)=\"navigatepage('/liststaff');\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns staffmanagment icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\" [class.clrred]=\"router.url === '/liststaff'\">Staff Mangement</p>\n            </div>\n          </a>\n          <a (click)=\"navigatepage('/bank_details');\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns accountdetailsicon icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\" [class.clrred]=\"router.url === '/bank_details'\">Account Details</p>\n            </div>\n          </a>\n          <a (click)=\"navigateagencyprofile();\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns myprofile icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\" [class.clrred]=\"router.url === '/Agency_profile/1'\">My Profile</p>\n            </div>\n          </a>\n          <a class=\"bgred\" (click)=\"logout();\">\n            <div class=\"d-flex padngover\">\n              <i class=\"icns logouticon icon_size_20\"></i>\n              <p class=\"f15 my-auto pl20\">Logout</p>\n            </div>\n          </a>\n        </div>\n      </div>\n\n    </form>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var myPath = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: "",
        loadChildren: function () {
            return Promise.all(/*! import() | modules-landing-landing-module */[__webpack_require__.e("default~modules-landing-landing-module~modules-sub-agent-sub-agent-module"), __webpack_require__.e("modules-landing-landing-module")]).then(__webpack_require__.bind(null, /*! ./modules/landing/landing.module */ "./src/app/modules/landing/landing.module.ts")).then(function (m) { return m.LandingModule; });
        },
    },
    {
        path: "subagent",
        loadChildren: function () {
            return Promise.all(/*! import() | modules-sub-agent-sub-agent-module */[__webpack_require__.e("default~modules-landing-landing-module~modules-sub-agent-sub-agent-module"), __webpack_require__.e("modules-sub-agent-sub-agent-module")]).then(__webpack_require__.bind(null, /*! ./modules/sub-agent/sub-agent.module */ "./src/app/modules/sub-agent/sub-agent.module.ts")).then(function (m) { return m.SubAgentModule; });
        },
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(myPath)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'umrah';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: TranslatorFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorFactory", function() { return TranslatorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_components_hedder_hedder_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/components/hedder/hedder.component */ "./src/app/common/components/hedder/hedder.component.ts");
/* harmony import */ var _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/components/footer/footer.component */ "./src/app/common/components/footer/footer.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
































function TranslatorFactory(httpClient) { return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json'); }



var AppModule = /** @class */ (function () {
    function AppModule(translateService) {
        this.translateService = translateService;
        translateService.addLangs(["en-US", "ar-AE"]);
        translateService.setDefaultLang('en'); /* Setting up the Translate Json to English - `en` */
    }
    AppModule.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateService"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _common_components_hedder_hedder_component__WEBPACK_IMPORTED_MODULE_8__["HedderComponent"],
                _common_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                ngx_chips__WEBPACK_IMPORTED_MODULE_30__["TagInputModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_16__["MyDatePickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_21__["DateRangePickerModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_22__["NgMultiSelectDropDownModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_27__["NgxSpinnerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterPipeModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_30__["TagInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"],
                ng_image_slider__WEBPACK_IMPORTED_MODULE_32__["NgImageSliderModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                    preventDuplicates: true, maxOpened: 1
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                        useFactory: TranslatorFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    },
                    isolate: false
                }),
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  position: fixed;\n  font-size: 15px;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #eaeaea;\n  color: #022543;\n  text-align: left;\n  padding: 12px 36px;\n  font-family: Roboto;\n  font-weight: 300;\n  line-height: 1.09;\n  z-index: 1030;\n}\n\n@media only screen and (max-width: 768px) {\n  .footer {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRyxlQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDQUg7O0FERUE7RUFDRztJQUNHLHdCQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb290ZXJ7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICBmb250LXNpemU6IDE1cHg7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNlYWVhZWE7XG4gICBjb2xvcjojMDIyNTQzO1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHBhZGRpbmc6IDEycHggMzZweDtcbiAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICBmb250LXdlaWdodDogMzAwO1xuICAgbGluZS1oZWlnaHQ6IDEuMDk7XG4gICB6LWluZGV4OiAxMDMwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgLmZvb3RlcntcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgIH1cbn1cbiIsIi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgY29sb3I6ICMwMjI1NDM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDEycHggMzZweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMDk7XG4gIHotaW5kZXg6IDEwMzA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3RlciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/common/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/footer/footer.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/common/components/footer/footer.component.scss")).default]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/components/hedder/hedder.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/common/components/hedder/hedder.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .hidemobile {\n    display: none !important;\n  }\n\n  .dinsplaymobile {\n    display: block !important;\n  }\n}\n.positionfixed {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: #eaeaea;\n  z-index: 99;\n}\n.navbar {\n  padding: 0;\n}\n.logohight {\n  height: 50px;\n}\n.hidesystem {\n  display: none;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n.dropdown p {\n  margin-bottom: 0;\n}\n.dropdown .wlcmtext {\n  font-size: 18px;\n  font-weight: 500;\n  height: 20px;\n}\n.dropdown .f15 {\n  font-size: 15px;\n  font-weight: 500;\n}\n.dropdown .bgred {\n  background-color: #c6392d;\n  border-radius: 0 0 15px 15px;\n  color: #ffffff;\n}\n.bgred:hover {\n  background-color: #c6392d !important;\n  color: #ffffff !important;\n}\n.dropdown-content {\n  transition: height 2s;\n  display: none;\n  right: 0;\n  min-width: 200px;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  position: absolute;\n  background-color: #f9f9f9;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 99;\n  border-radius: 15px;\n}\n.dropdown-content a {\n  cursor: pointer;\n}\n.padngover {\n  padding: 10px;\n  border-bottom: 1px solid #d6d6d6;\n}\n.dropdown-content a {\n  color: black;\n  padding: 0 10px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content a:hover {\n  background-color: #f1f1f1;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.clrred {\n  color: #c6392d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2hlZGRlci9oZWRkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2hlZGRlci9oZWRkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNJLHdCQUFBO0VDQ0o7O0VEQ0E7SUFDRSx5QkFBQTtFQ0VGO0FBQ0Y7QURBQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNFRjtBREFBO0VBQ0UsVUFBQTtBQ0dGO0FEREE7RUFDRSxZQUFBO0FDSUY7QURGQTtFQUNFLGFBQUE7QUNLRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0lGO0FESEU7RUFDRSxnQkFBQTtBQ0tKO0FESEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDS0o7QURIRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0tKO0FESEU7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQ0tKO0FERkE7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FDS0Y7QURGQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0tGO0FESkU7RUFDRSxlQUFBO0FDTUo7QURIQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQ01GO0FESkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ09GO0FESkE7RUFBMkIseUJBQUE7QUNRM0I7QUROQTtFQUNFLGNBQUE7QUNTRjtBRFBBO0VBQ0UsY0FBQTtBQ1VGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvaGVkZGVyL2hlZGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpZGVtb2JpbGV7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmRpbnNwbGF5bW9iaWxle1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5wb3NpdGlvbmZpeGVke1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG4gIHotaW5kZXg6IDk5O1xufVxuLm5hdmJhcntcbiAgcGFkZGluZzogMDtcbn1cbi5sb2dvaGlnaHR7XG4gIGhlaWdodDogNTBweDtcbn1cbi5oaWRlc3lzdGVte1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwe1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLndsY210ZXh0e1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuICAuZjE1e1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5iZ3JlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzYzOTJkO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbn1cbi5iZ3JlZDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogICNjNjM5MmQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBhe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnBhZG5nb3ZlcntcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQ2ZDY7XG59XG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjF9XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNscnJlZHtcbiAgY29sb3I6ICNjNjM5MmQ7XG59IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGlkZW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRpbnNwbGF5bW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4ucG9zaXRpb25maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nb2hpZ2h0IHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaGlkZXN5c3RlbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRyb3Bkb3duIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmRyb3Bkb3duIC53bGNtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmRyb3Bkb3duIC5mMTUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZHJvcGRvd24gLmJncmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MzkyZDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iZ3JlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNjM5MmQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMnM7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDk5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZG5nb3ZlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZkNmQ2O1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNscnJlZCB7XG4gIGNvbG9yOiAjYzYzOTJkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/common/components/hedder/hedder.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common/components/hedder/hedder.component.ts ***!
  \**************************************************************/
/*! exports provided: HedderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HedderComponent", function() { return HedderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stores/app.store */ "./src/app/stores/app.store.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _services_common_api_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/common-api-services */ "./src/app/common/services/common-api-services.ts");







var HedderComponent = /** @class */ (function () {
    function HedderComponent(router, appStore, translate, common, cookie) {
        this.router = router;
        this.appStore = appStore;
        this.translate = translate;
        this.common = common;
        this.cookie = cookie;
        this.activeArabic = false;
        this.showNavBar = false;
    }
    HedderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.common.getLanguages().subscribe(function (data) {
            console.log(data.results);
            _this.languageList = data.results;
            var first = localStorage.getItem("userLanguage")
                ? localStorage.getItem("userLanguage")
                : "en-US";
            _this.languageList.sort(function (x, y) {
                return x == first ? -1 : y == first ? 1 : 0;
            });
            if (localStorage.getItem("userLanguage")) {
                _this.appStore.langCode = localStorage.getItem("userLanguage");
            }
            else {
                _this.appStore.langCode = "en-US";
            }
            _this.translate.use(_this.appStore.langCode);
        });
    };
    HedderComponent.prototype.logout = function () {
        localStorage.clear();
        this.agencyActive = false;
        this.branchActive = false;
        this.appStore.currentUser = "";
        this.router.navigate(["/login"]);
    };
    HedderComponent.prototype.clearCoockies = function () {
        this.cookie.set("userName", null);
        this.cookie.set("password", null);
    };
    HedderComponent.prototype.changeLangValue = function () {
        this.appStore.langCode = (document.getElementById("langConverter")).value;
        this.translate.use(this.appStore.langCode);
        localStorage.setItem("userLanguage", document.getElementById("langConverter").value);
        if (this.appStore.langCode == "ar-AE") {
            this.activeArabic = true;
            document.getElementById("body").classList.add("mirror_css");
        }
        else {
            this.activeArabic = false;
            document.getElementById("body").classList.remove("mirror_css");
        }
    };
    HedderComponent.prototype.ngDoCheck = function () {
        if (localStorage.getItem("currentUser") == "agency") {
            this.agencyActive = true;
        }
        if (localStorage.getItem("currentUser") == "branch") {
            this.branchActive = true;
        }
    };
    HedderComponent.prototype.navigatepage = function (link) {
        this.router.navigate([link]);
    };
    HedderComponent.prototype.navigateagencyprofile = function () {
        this.router.navigate(["Agency_profile", localStorage.getItem("empId")]);
    };
    HedderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_3__["AppStore"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _services_common_api_services__WEBPACK_IMPORTED_MODULE_6__["CommonApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    HedderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-hedder",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hedder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/hedder/hedder.component.html")).default,
            providers: [_services_common_api_services__WEBPACK_IMPORTED_MODULE_6__["CommonApiService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hedder.component.scss */ "./src/app/common/components/hedder/hedder.component.scss")).default]
        })
    ], HedderComponent);
    return HedderComponent;
}());



/***/ }),

/***/ "./src/app/common/services/common-api-services.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/common-api-services.ts ***!
  \********************************************************/
/*! exports provided: CommonApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonApiService", function() { return CommonApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var BASE_URL = 'https://b2b.betatest.akbarumrah.com/apis/';
var BASE_URL2 = 'https://b2ctest.akbarumrah.com/apis/';
// const BASE_URL='http://umrah.fortelogic.in/'
var CommonApiService = /** @class */ (function () {
    function CommonApiService(http, _httpClient, router, https) {
        this.http = http;
        this._httpClient = _httpClient;
        this.router = router;
        this.https = https;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")
            }),
        };
        this.options = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")
            })
        };
        this.optionsForForm = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")
            })
        };
        this.options2 = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer c94a5a8852f96bbb34a87e580c474367185d7291'
            })
        };
    }
    CommonApiService.prototype.getBranchess = function (accessToken) {
        return this.http.get(BASE_URL + 'branches/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getTripLists = function (accessToken, pageNumber) {
        return this.http.get(BASE_URL + 'trips/?page=' + pageNumber, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAirportList = function () {
        return this.http.get(BASE_URL + 'airports/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAirportListsearch = function (airport) {
        return this.https.get(BASE_URL +
            "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
            airport, this.httpOptions);
    };
    CommonApiService.prototype.getAgencies = function () {
        return this.http.get(BASE_URL + 'agencies/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getTransportationList = function (accessToken) {
        return this.http.get(BASE_URL + 'ground_transports/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getCountries = function () {
        return this.http.get(BASE_URL + "countries/", this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getFlights = function (accessToken) {
        return this.http.get(BASE_URL + 'flights/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAccountHistory = function () {
        return this.http.get(BASE_URL + 'account/account_statement/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAccountDateHistory = function (fromdate, todate) {
        return this.http.get(BASE_URL + 'account/account_statement/?from_date=' + fromdate + '&to_date=' + todate, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAccountbalance = function () {
        return this.http.get(BASE_URL + 'account/balance_enquiry', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPaginatedFlightList = function (pageNumber) {
        return this.http.get(BASE_URL + 'flights/?boarding_airport=&destination_airport=&departure_timestamp=&page=' + pageNumber, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPaginatedStaffList = function (pageNumber, lang) {
        return this.http.get(BASE_URL + 'staff/?search=&role=&page=' + pageNumber + '&lang=' + lang, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPaginatedHotelList = function (pageNumber) {
        return this.http.get(BASE_URL + 'hotels/?page=' + pageNumber, this.options).map(function (res) { return res.json(); });
    };
    // getPaginatedbranchList(pageNumber: number) {
    //   return this.http.get(BASE_URL + 'branches/?page=' + pageNumber, this.options).map(res => res.json());
    // }
    CommonApiService.prototype.getPaginatedbranchList = function (lang) {
        return this.http.get(BASE_URL + 'branches/?lang=' + lang, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPaginatedhistoryList = function (pageNumber) {
        return this.http.get(BASE_URL + 'bookings/?page=' + pageNumber, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPaginatedAirportList = function (pageNumber) {
        return this.http.get(BASE_URL + 'airports/?airport_type=DESTINATION&airport_type=BOARDING&page=' + pageNumber, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSelectedFlight = function (id) {
        return this.http.get(BASE_URL + 'flights/' + id + '/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getTripList = function (id) {
        return this.http.get(BASE_URL + 'trips/' + id + '/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updateFlight = function (id, data) {
        return this.http.put(BASE_URL + 'flights/' + id + '/', data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSelectedBranch = function (id) {
        return this.http.get(BASE_URL + 'branches/' + id + '/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSelectedAirport = function (id) {
        return this.http.get(BASE_URL + 'airports/' + id + '/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updateBranch = function (id, data) {
        return this.http.put(BASE_URL + 'branches/' + id + '/', data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getTransportPaginationList = function (pageNumber) {
        return this.http.get(BASE_URL + 'ground_transports/?page=' + pageNumber, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSelectedTransportation = function (id) {
        return this.http.get(BASE_URL + 'ground_transports/' + id + '/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updateTransportation = function (id, data) {
        return this.http.put(BASE_URL + 'ground_transports/' + id + '/', data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSelectHotel = function (id) {
        return this.http.get(BASE_URL + 'hotels/' + id + '/', this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updateHotel = function (id, data) {
        return this.http.put(BASE_URL + 'hotels/' + id + '/', data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updateAirport = function (id, data) {
        return this.http.put(BASE_URL + 'airports/' + id + '/', data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.createAirport = function (data) {
        return this.http.post(BASE_URL + 'airports/', data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.createTrip = function (data, id) {
        return this.http.put(BASE_URL + "packages/" + id + "/", data, this.options).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAirportListSrc = function (airport) {
        return this.https.get(BASE_URL + "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" + airport, this.httpOptions);
    };
    CommonApiService.prototype.getairlineslist = function (airline) {
        return this.https.get(BASE_URL + "airlines/autocomplete/?search=" + airline, this.httpOptions);
    };
    CommonApiService.prototype.searchSSRFlights = function (data) {
        return this.http
            .post(BASE_URL + "flights/flight_ssr/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.searchINFOFlights = function (data) {
        return this.http
            .post(BASE_URL + "flights/flight_info/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getHotelsList = function (pageNumber) {
        return this.http
            .get(BASE_URL + "hotels/?page=" + pageNumber, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPackageDetails = function (id) {
        return this.http
            .get(BASE_URL + "trips/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.createOtp = function (data) {
        return this.http
            .post(BASE_URL + "login/generate_otp/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.verifyOtp = function (data) {
        return this.http
            .post(BASE_URL + "login/verify_otp/?", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.generateOtp = function (data) {
        return this.http
            .post(BASE_URL + "login/join/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    //b2capis/ using apis..........starts
    CommonApiService.prototype.searchFlights = function (data) {
        return this.http
            .post(BASE_URL2 + "flights/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSpecialFare = function (id) {
        return this.http
            .get(BASE_URL + "b2capis/flights/special_fare_ids/?rsid=" + id, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getFareRules = function (data) {
        return this.http
            .post(BASE_URL + "b2capis/flights/fare_rules/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getReturnFlights = function (data) {
        return this.http
            .post(BASE_URL + "b2capis/flights/return_flights/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getFlightPricingInfo = function (id) {
        return this.http
            .get(BASE_URL + "b2bapis/trips/" + id + "/flight_pricing/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getFlightDetails = function (data) {
        return this.http
            .post(BASE_URL + "b2bapis/flights/flight_info/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSSR = function (data) {
        return this.http
            .post(BASE_URL + "b2capis/flights/flight_ssr/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.pilotHotelSearch = function (data, lang) {
        return this.http
            .post(BASE_URL + "b2capis/hotels/search/?lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.searchTransport = function (data) {
        return this.http
            .post(BASE_URL + "ground_transports/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    // Agency package apis starts 
    CommonApiService.prototype.agencyHotelSearch = function (data, lang) {
        return this.http
            .post(BASE_URL + "packages/hotels/search/?lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPackageHotelInfo = function (data, currency, lang) {
        return this.http
            .post(BASE_URL + "packages/hotels/details/?currency=" + currency + "&lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPackageFlight = function (data, currency, lang) {
        return this.http
            .post(BASE_URL + "packages/?currency=" + currency + "&lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updatePackageAPI = function (data, currency, lang, id) {
        return this.http
            .put(BASE_URL + "packages/" + id + "/?currency=" + currency + "&lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.forDataPackageAPI = function (param, currency, lang, id) {
        console.log("PARAM", param);
        var formData = new FormData();
        param.forEach(function (item, index) {
            if (item.title) {
                formData.append("[itinerary_set][" + index + "][title]", item.title);
            }
            if (item.from_date) {
                formData.append("[itinerary_set][" + index + "][from_date]", item.from_date);
            }
            if (item.details) {
                formData.append("[itinerary_set][" + index + "][details]", item.details);
            }
            if (item.attachments) {
                item.attachments.map(function (x) { return x.file; }).forEach(function (photo, i) {
                    formData.append("[itinerary_set][" + index + "][attachments][" + i + "][file]", photo);
                });
            }
        });
        return this.http
            .put(BASE_URL + "packages/" + id + "/?currency=" + currency + "&lang=" + lang, formData, this.optionsForForm);
    };
    // b2capis/ using apis ........ end
    CommonApiService.prototype.initHotelSearch = function (data) {
        return this.http
            .post(BASE_URL + "hotels/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.createTripFlight = function (data) {
        return this.http
            .post(BASE_URL + "custom_trips/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getVisaTypes = function () {
        return this.http
            .get(BASE_URL + "visa_types/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getVehicleList = function () {
        return this.http
            .get(BASE_URL + "vehicles/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAirportListD = function () {
        return this.https.get(BASE_URL + "airports/autocomplete/?airport_type=DESTINATION", this.httpOptions);
    };
    CommonApiService.prototype.getAirportListA = function (airport) {
        return this.https.get(BASE_URL +
            "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
            airport, this.httpOptions);
    };
    CommonApiService.prototype.getDestinationAirport = function () {
        return this.https.get(BASE_URL +
            "airports/autocomplete/?airport_type=BOARDING", this.httpOptions);
    };
    CommonApiService.prototype.getHotelList = function (id, currency, lang) {
        return this.http
            .get(BASE_URL + "hotels/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getRoutes = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/routes/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getVehicles = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/vehicle_types/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getCategories = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/categories/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPackageCategories = function (lang) {
        return this.http
            .get(BASE_URL + "packages/categories/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getserviceCategories = function (lang) {
        return this.http
            .get(BASE_URL + "ground_services/categories/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAdditionalServices = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/additional_services/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getserviceAdditionalServices = function () {
        return this.http
            .get(BASE_URL + "ground_services/additional_services/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getCompanies = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/companies/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.searchTransportList = function (id, currency, lang) {
        return this.http
            .get(BASE_URL + "ground_transports/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSelectedHotelInfo = function (data, currency, lang) {
        return this.http
            .post(BASE_URL + "hotels/details/?currency=" + currency + "&lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.updateCustomTrip = function (id, data) {
        return this.http
            .put(BASE_URL + "custom_trips/" + id + "/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.bookCustomTrip = function (data) {
        return this.http
            .post(BASE_URL + "custom_trips/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.searchGroundservice = function (data) {
        return this.http
            .post(BASE_URL + "ground_services/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.searchGroundserviceList = function (id, currency, lang) {
        return this.http
            .get(BASE_URL + "ground_services/?search_id=" + id + "&currency=" + currency + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getNationality = function (data, lang) {
        return this.http
            .get(BASE_URL + "nationalities/?search=" + data + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getCountry = function (data, lang) {
        return this.http
            .get(BASE_URL + "countries/?search=" + data + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getTrip = function (id) {
        return this.http
            .get(BASE_URL + "custom_trips/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.bookTrip = function (data, id) {
        return this.http
            .post(BASE_URL + "custom_trips/" + id + "/booking/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.saveSelectedHotel = function (data) {
        return this.http
            .post(BASE_URL + "custom_trips/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.saveSelectedMadeenaHotel = function (data) {
        return this.http
            .post(BASE_URL + "custom_trips/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.bookingPayment = function (data) {
        return this.http
            .post(BASE_URL + "payments/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.checkAvailability = function (id) {
        return this.http
            .get(BASE_URL + "b2b_trip_booking/" + id + "/check_availability/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getCurrencies = function () {
        return this.http
            .get(BASE_URL + "currencies", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getPaymentDetails = function (id) {
        return this.http
            .get(BASE_URL + "bookings/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getVisaDetails = function (id) {
        return this.http
            .get(BASE_URL + "custom_trip_booking/" + id + "/update_mutamer_info/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getTravllerVisa = function (id) {
        return this.http
            .get(BASE_URL + "custom_trip_booking/" + id + "/get_visa_status/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getCheckCancellation = function (id) {
        return this.http
            .get(BASE_URL + "custom_trip_booking/" + id + "/check_cancellation/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getStaffDetails = function () {
        return this.http
            .get(BASE_URL + "staff/profile/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getConfirmCancellation = function (id, data) {
        return this.http
            .post(BASE_URL + "custom_trip_booking/" + id + "/confirm_cancellation/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.sendNotification = function (id) {
        return this.http
            .get(BASE_URL + "bookings/" + id + "/resend_notification/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getInvoice = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                "Authorization": "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/invoice_template/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: 'text/html' });
        });
    };
    CommonApiService.prototype.getVoucher = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                "Authorization": "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/voucher_template/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: 'text/html' });
        });
    };
    CommonApiService.prototype.getInvoicePdf = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                "Authorization": "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/invoice/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: 'application/pdf' });
        });
    };
    CommonApiService.prototype.getVoucherPdf = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                "Authorization": "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/voucher/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: 'application/pdf' });
        });
    };
    CommonApiService.prototype.getLanguages = function () {
        return this.http
            .get(BASE_URL + "languages/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.signup = function (body) {
        return this.http
            .post(BASE_URL + "agencies/signup/", body)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getAgencyApprovedDetails = function (id) {
        return this.http
            .get(BASE_URL + "agencies/" + id + "/approval_details/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.otaUpgrade = function (passportFile, contractsign, bankLetter, body, id) {
        var formData = new FormData();
        formData.append('passport', passportFile);
        formData.append('contract', contractsign);
        formData.append('bank_letter', bankLetter);
        formData.append('signatory_name', body.signatiureName);
        formData.append('passport_number', body.passportNo);
        formData.append('iata_license', body.iataLicence);
        formData.append('mobile', body.mobileNo);
        formData.append('commercial_regno', body.commercialreg);
        formData.append('request_text', body.reqstText);
        console.log(formData);
        return this.http
            .post(BASE_URL + "agencies/" + id + "/approval_request/", formData)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getSavedData = function (id) {
        return this.http
            .get(BASE_URL + "packages/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.getOtp = function (data) {
        return this.http.post(BASE_URL + 'staff/forgot_password/', data).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.changePassword = function (data) {
        return this.http.post(BASE_URL + 'staff/change_password/', data).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.branchCreation = function (data) {
        return this.http.post(BASE_URL + 'branches/', data).map(function (res) { return res.json(); });
    };
    CommonApiService.prototype.sample = function () {
        return this.http.get('http://13.234.228.171/clubAdminApis/ticketFilter', this.options2).map(function (res) { return res.json(); });
    };
    CommonApiService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    CommonApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommonApiService);
    return CommonApiService;
}());



/***/ }),

/***/ "./src/app/stores/app.store.ts":
/*!*************************************!*\
  !*** ./src/app/stores/app.store.ts ***!
  \*************************************/
/*! exports provided: AppStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");



var AppStore = /** @class */ (function () {
    function AppStore() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "currencyCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "adultCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "childCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "infantCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "totalTravellers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "stepperIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "langCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "stepsArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "roomArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "userDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "customeTripId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "customeTripBookingId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "transportSearchId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "vehicleMax", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "showRoomAlPopup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "showHotelDetails", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "showShimmer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "makkahSearchId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "madinahSearchId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "showHotelDetailsShimmer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "noOfDaysInMakkah", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        mobx_angular__WEBPACK_IMPORTED_MODULE_2__["observable"]
    ], AppStore.prototype, "noOfDaysInMadeena", void 0);
    AppStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppStore);
    return AppStore;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    slctcntry: 'India'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sabeel/Desktop/new-umrah/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map