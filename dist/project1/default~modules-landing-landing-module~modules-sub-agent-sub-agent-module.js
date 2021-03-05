(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-landing-landing-module~modules-sub-agent-sub-agent-module"],{

/***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js ***!
  \*****************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    /** @type {?} */
    var hasWindow = window && !!window.document && window.document.documentElement;
    /** @type {?} */
    var container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        /** @type {?} */
        var containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    /** @type {?} */
    var rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
/** @type {?} */
var HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
var AxisResolver = /** @class */ (function () {
    /**
     * @param {?=} vertical
     */
    function AxisResolver(vertical) {
        if (vertical === void 0) { vertical = true; }
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    AxisResolver.prototype.clientHeightKey = function () {
        return this.propsMap.clientHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetHeightKey = function () {
        return this.propsMap.offsetHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollHeightKey = function () {
        return this.propsMap.scrollHeight;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.pageYOffsetKey = function () {
        return this.propsMap.pageYOffset;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.offsetTopKey = function () {
        return this.propsMap.offsetTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.scrollTopKey = function () {
        return this.propsMap.scrollTop;
    };
    /**
     * @return {?}
     */
    AxisResolver.prototype.topKey = function () {
        return this.propsMap.top;
    };
    return AxisResolver;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @record
 */
/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    if (alwaysCallback && shouldFireScrollEvent) {
        return true;
    }
    if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
    }
    return false;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver(_a) {
    var windowElement = _a.windowElement, axis = _a.axis;
    return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    /** @type {?} */
    var container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign({}, resolver, { container: container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    /** @type {?} */
    var isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    /** @type {?} */
    var height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
    var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
    // scrolled until now / current y point
    /** @type {?} */
    var scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    /** @type {?} */
    var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    /** @type {?} */
    var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: isWindow };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    var axis = resolver.axis, container = resolver.container;
    // perhaps use container.offsetTop instead of 'scrollTop'
    /** @type {?} */
    var scrolled = container[axis.scrollTopKey()];
    /** @type {?} */
    var totalToScroll = container[axis.scrollHeightKey()];
    return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: false };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement(_a) {
    var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
    var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        var docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    /** @type {?} */
    var topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    /** @type {?} */
    var pageYOffset = axis.pageYOffsetKey();
    /** @type {?} */
    var scrollTop = axis.scrollTopKey();
    /** @type {?} */
    var offsetTop = axis.offsetTopKey();
    if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    /** @type {?} */
    var remaining;
    /** @type {?} */
    var containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    /** @type {?} */
    var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        /** @type {?} */
        var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
    }
    /** @type {?} */
    var shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    /** @type {?} */
    var scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scrollState
 * @return {?}
 */
/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */
/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */
/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollState = /** @class */ (function () {
    /**
     * @param {?} __0
     */
    function ScrollState(_a) {
        var totalToScroll = _a.totalToScroll;
        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
            down: 0,
            up: 0
        };
        this.totalToScroll = totalToScroll;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    ScrollState.prototype.updateScrollPosition = function (position) {
        return (this.lastScrollPosition = position);
    };
    /**
     * @param {?} totalToScroll
     * @return {?}
     */
    ScrollState.prototype.updateTotalToScroll = function (totalToScroll) {
        if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
        }
    };
    /**
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    ScrollState.prototype.updateScroll = function (scrolledUntilNow, totalToScroll) {
        this.updateScrollPosition(scrolledUntilNow);
        this.updateTotalToScroll(totalToScroll);
    };
    /**
     * @param {?} scroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    ScrollState.prototype.updateTriggeredFlag = function (scroll, isScrollingDown) {
        if (isScrollingDown) {
            this.triggered.down = scroll;
        }
        else {
            this.triggered.up = scroll;
        }
    };
    /**
     * @param {?} totalToScroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    ScrollState.prototype.isTriggeredScroll = function (totalToScroll, isScrollingDown) {
        return isScrollingDown
            ? this.triggered.down === totalToScroll
            : this.triggered.up === totalToScroll;
    };
    return ScrollState;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
    /** @type {?} */
    var resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    /** @type {?} */
    var scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver)
    });
    /** @type {?} */
    var options = {
        container: resolver.container,
        throttle: config.throttle
    };
    /** @type {?} */
    var distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var stats = _a.stats;
        return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
        var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
        var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    /** @type {?} */
    var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
    return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
    };
}
/** @type {?} */
var InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP'
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition: currentScrollPosition
        }
    };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfiniteScrollDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} zone
     */
    function InfiniteScrollDirective(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
        var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
        /** @type {?} */
        var containerChanged = inputPropChanged(infiniteScrollContainer);
        /** @type {?} */
        var disabledChanged = inputPropChanged(infiniteScrollDisabled);
        /** @type {?} */
        var distanceChanged = inputPropChanged(infiniteScrollDistance);
        /** @type {?} */
        var shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setup = function () {
        var _this = this;
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
                _this.disposeScroller = createScroller({
                    fromRoot: _this.fromRoot,
                    alwaysCallback: _this.alwaysCallback,
                    disable: _this.infiniteScrollDisabled,
                    downDistance: _this.infiniteScrollDistance,
                    element: _this.element,
                    horizontal: _this.horizontal,
                    scrollContainer: _this.infiniteScrollContainer,
                    scrollWindow: _this.scrollWindow,
                    throttle: _this.infiniteScrollThrottle,
                    upDistance: _this.infiniteScrollUpDistance
                }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
            });
        }
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
        var type = _a.type, payload = _a.payload;
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = function () {
        this.destroyScroller();
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.destroyScroller = function () {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    };
    return InfiniteScrollDirective;
}());
InfiniteScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            },] },
];
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
]; };
InfiniteScrollDirective.propDecorators = {
    scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfiniteScrollModule = /** @class */ (function () {
    function InfiniteScrollModule() {
    }
    return InfiniteScrollModule;
}());
InfiniteScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-infinite-scroll.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js ***!
  \*********************************************************************/
/*! exports provided: CarouselComponent, CarouselModule, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, SlidesOutputData, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselSlideDirective", function() { return CarouselSlideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlRouterLinkDirective", function() { return OwlRouterLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlRouterLinkWithHrefDirective", function() { return OwlRouterLinkWithHrefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesOutputData", function() { return SlidesOutputData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NavigationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CarouselService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return OwlLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return AutoplayService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return WINDOW_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return BrowserDocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return documentFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return browserDocumentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return documentProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return DOCUMENT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return LazyLoadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return AnimateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return AutoHeightService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return HashService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ResizeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return StageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");









var ResizeService = /** @class */ (function () {
    function ResizeService(eventManager) {
        this.eventManager = eventManager;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
        this.eventManager.addGlobalEventListener('window', 'onload', this.onLoaded.bind(this));
    }
    Object.defineProperty(ResizeService.prototype, "onResize$", {
        /**
         * Makes resizeSubject become Observable
         * @returns Observable of resizeSubject
         */
        get: function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handler of 'resize' event. Passes data throw resizeSubject
     * @param event Event Object of 'resize' event
     */
    ResizeService.prototype.onResize = function (event) {
        this.resizeSubject.next(event.target);
    };
    /**
     * Handler of 'onload' event. Defines the width of window
     * @param event Event Object of 'onload' event
     */
    ResizeService.prototype.onLoaded = function (event) {
        this.windowWidth = event.target;
    };
    ResizeService.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["EventManager"] }
    ]; };
    ResizeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ResizeService);
    return ResizeService;
}());

/**
 * Defaults value of options
 */
var OwlCarouselOConfig = /** @class */ (function () {
    function OwlCarouselOConfig() {
        this.items = 3;
        this.skip_validateItems = false;
        this.loop = false;
        this.center = false;
        this.rewind = false;
        this.mouseDrag = true;
        this.touchDrag = true;
        this.pullDrag = true;
        this.freeDrag = false;
        this.margin = 0;
        this.stagePadding = 0;
        this.merge = false;
        this.mergeFit = true;
        this.autoWidth = false;
        this.startPosition = 0;
        this.rtl = false;
        this.smartSpeed = 250;
        this.fluidSpeed = false;
        this.dragEndSpeed = false;
        this.responsive = {};
        this.responsiveRefreshRate = 200;
        // defaults to Navigation
        this.nav = false;
        this.navText = ['prev', 'next'];
        this.navSpeed = false;
        this.slideBy = 1; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        this.dots = true;
        this.dotsEach = false;
        this.dotsData = false;
        this.dotsSpeed = false;
        // defaults to Autoplay
        this.autoplay = false;
        this.autoplayTimeout = 5000;
        this.autoplayHoverPause = false;
        this.autoplaySpeed = false;
        // defaults to LazyLoading
        this.lazyLoad = false;
        this.lazyLoadEager = 0;
        // defaults to Animate
        this.slideTransition = '';
        this.animateOut = false;
        this.animateIn = false;
        // defaults to AutoHeight
        this.autoHeight = false;
        // defaults to Hash
        this.URLhashListener = false;
    }
    return OwlCarouselOConfig;
}());
/**
 * we can't read types from OwlOptions in javascript because of props have undefined value and types of those props are used for validating inputs
 * class below is copy of OwlOptions but its all props have string value showing certain type;
 * this is class is being used just in method _validateOptions() of CarouselService;
 */
var OwlOptionsMockedTypes = /** @class */ (function () {
    function OwlOptionsMockedTypes() {
        this.items = 'number';
        this.skip_validateItems = 'boolean';
        this.loop = 'boolean';
        this.center = 'boolean';
        this.rewind = 'boolean';
        this.mouseDrag = 'boolean';
        this.touchDrag = 'boolean';
        this.pullDrag = 'boolean';
        this.freeDrag = 'boolean';
        this.margin = 'number';
        this.stagePadding = 'number';
        this.merge = 'boolean';
        this.mergeFit = 'boolean';
        this.autoWidth = 'boolean';
        this.startPosition = 'number|string';
        this.rtl = 'boolean';
        this.smartSpeed = 'number';
        this.fluidSpeed = 'boolean';
        this.dragEndSpeed = 'number|boolean';
        this.responsive = {};
        this.responsiveRefreshRate = 'number';
        // defaults to Navigation
        this.nav = 'boolean';
        this.navText = 'string[]';
        this.navSpeed = 'number|boolean';
        this.slideBy = 'number|string'; // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
        this.dots = 'boolean';
        this.dotsEach = 'number|boolean';
        this.dotsData = 'boolean';
        this.dotsSpeed = 'number|boolean';
        // defaults to Autoplay
        this.autoplay = 'boolean';
        this.autoplayTimeout = 'number';
        this.autoplayHoverPause = 'boolean';
        this.autoplaySpeed = 'number|boolean';
        // defaults to LazyLoading
        this.lazyLoad = 'boolean';
        this.lazyLoadEager = 'number';
        // defaults to Animate
        this.slideTransition = 'string';
        this.animateOut = 'string|boolean';
        this.animateIn = 'string|boolean';
        // defaults to AutoHeight
        this.autoHeight = 'boolean';
        // defaults to Hash
        this.URLhashListener = "boolean";
    }
    return OwlOptionsMockedTypes;
}());

var OwlLogger = /** @class */ (function () {
    function OwlLogger(errorHandler) {
        this.errorHandler = errorHandler;
    }
    OwlLogger.prototype.log = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            console.log.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([value], rest));
        }
    };
    OwlLogger.prototype.error = function (error) {
        this.errorHandler.handleError(error);
    };
    OwlLogger.prototype.warn = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([value], rest));
    };
    OwlLogger.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"] }
    ]; };
    OwlLogger = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OwlLogger);
    return OwlLogger;
}());

/**
 * Current state information and their tags.
 */
var States = /** @class */ (function () {
    function States() {
    }
    return States;
}());
/**
 * Enumeration for types.
 * @enum {String}
 */
var Type;
(function (Type) {
    Type["Event"] = "event";
    Type["State"] = "state";
})(Type || (Type = {}));
;
/**
 * Enumeration for width.
 * @enum {String}
 */
var Width;
(function (Width) {
    Width["Default"] = "default";
    Width["Inner"] = "inner";
    Width["Outer"] = "outer";
})(Width || (Width = {}));
;
/**
 * Model for coords of .owl-stage
 */
var Coords = /** @class */ (function () {
    function Coords() {
    }
    return Coords;
}());
/**
 * Model for all current data of carousel
 */
var CarouselCurrentData = /** @class */ (function () {
    function CarouselCurrentData() {
    }
    return CarouselCurrentData;
}());
var CarouselService = /** @class */ (function () {
    function CarouselService(logger) {
        var _this = this;
        this.logger = logger;
        /**
       * Subject for passing data needed for managing View
       */
        this._viewSettingsShipper$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the carousel got initializes
       */
        this._initializedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the carousel's settings start changinf
       */
        this._changeSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the carousel's settings have changed
       */
        this._changedSettingsCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the carousel starts translating or moving
       */
        this._translateCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the carousel stopped translating or moving
       */
        this._translatedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
       */
        this._resizeCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
       */
        this._resizedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the refresh of carousel starts
       */
        this._refreshCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the refresh of carousel is ended
       */
        this._refreshedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the dragging of carousel starts
       */
        this._dragCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
       * Subject for notification when the dragging of carousel is ended
       */
        this._draggedCarousel$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Current settings for the carousel.
         */
        this.settings = {
            items: 0
        };
        /**
       * Initial data for setting classes to element .owl-carousel
       */
        this.owlDOMData = {
            rtl: false,
            isResponsive: false,
            isRefreshed: false,
            isLoaded: false,
            isLoading: false,
            isMouseDragable: false,
            isGrab: false,
            isTouchDragable: false
        };
        /**
       * Initial data of .owl-stage
       */
        this.stageData = {
            transform: 'translate3d(0px,0px,0px)',
            transition: '0s',
            width: 0,
            paddingL: 0,
            paddingR: 0
        };
        /**
         * All real items.
         */
        this._items = []; // is equal to this.slides
        /**
       * Array with width of every slide.
       */
        this._widths = [];
        /**
       * Currently suppressed events to prevent them from beeing retriggered.
       */
        this._supress = {};
        /**
         * References to the running plugins of this carousel.
         */
        this._plugins = {};
        /**
       * Absolute current position.
       */
        this._current = null;
        /**
       * All cloned items.
       */
        this._clones = [];
        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         */
        this._mergers = [];
        /**
       * Animation speed in milliseconds.
       */
        this._speed = null;
        /**
       * Coordinates of all items in pixel.
       * @todo The name of this member is missleading.
       */
        this._coordinates = [];
        /**
       * Current breakpoint.
       * @todo Real media queries would be nice.
       */
        this._breakpoint = null;
        /**
         * Prefix for id of cloned slides
         */
        this.clonedIdPrefix = 'cloned-';
        /**
         * Current options set by the caller including defaults.
         */
        this._options = {};
        /**
         * Invalidated parts within the update process.
         */
        this._invalidated = {};
        /**
         * Current state information and their tags.
         */
        this._states = {
            current: {},
            tags: {
                initializing: ['busy'],
                animating: ['busy'],
                dragging: ['interacting']
            }
        };
        /**
         * Ordered list of workers for the update process.
       */
        this._pipe = [
            // {
            //   filter: ['width', 'settings'],
            //   run: () => {
            //     this._width = this.carouselWindowWidth;
            //   }
            // },
            {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    cache.current = _this._items && _this._items[_this.relative(_this._current)].id;
                }
            },
            // {
            //   filter: ['items', 'settings'],
            //   run: function() {
            //     // this.$stage.children('.cloned').remove();
            //   }
            // },
            {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    var margin = _this.settings.margin || '', grid = !_this.settings.autoWidth, rtl = _this.settings.rtl, css = {
                        'margin-left': rtl ? margin : '',
                        'margin-right': rtl ? '' : margin
                    };
                    if (!grid) {
                        _this.slidesData.forEach(function (slide) {
                            slide.marginL = css['margin-left'];
                            slide.marginR = css['margin-right'];
                        });
                    }
                    cache.css = css;
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    var width = +(_this.width() / _this.settings.items).toFixed(3) - _this.settings.margin, grid = !_this.settings.autoWidth, widths = [];
                    var merge = null, iterator = _this._items.length;
                    cache.items = {
                        merge: false,
                        width: width
                    };
                    while (iterator--) {
                        merge = _this._mergers[iterator];
                        merge = _this.settings.mergeFit && Math.min(merge, _this.settings.items) || merge;
                        cache.items.merge = merge > 1 || cache.items.merge;
                        widths[iterator] = !grid ? _this._items[iterator].width ? _this._items[iterator].width : width : width * merge;
                    }
                    _this._widths = widths;
                    _this.slidesData.forEach(function (slide, i) {
                        slide.width = _this._widths[i];
                        slide.marginR = cache.css['margin-right'];
                        slide.marginL = cache.css['margin-left'];
                    });
                }
            }, {
                filter: ['items', 'settings'],
                run: function () {
                    var clones = [], items = _this._items, settings = _this.settings, 
                    // TODO: Should be computed from number of min width items in stage
                    view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
                    var append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
                    repeat /= 2;
                    while (repeat--) {
                        // Switch to only using appended clones
                        clones.push(_this.normalize(clones.length / 2, true));
                        append.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.slidesData[clones[clones.length - 1]]));
                        clones.push(_this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                        prepend.unshift(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.slidesData[clones[clones.length - 1]]));
                    }
                    _this._clones = clones;
                    append = append.map(function (slide) {
                        slide.id = "" + _this.clonedIdPrefix + slide.id;
                        slide.isActive = false;
                        slide.isCloned = true;
                        return slide;
                    });
                    prepend = prepend.map(function (slide) {
                        slide.id = "" + _this.clonedIdPrefix + slide.id;
                        slide.isActive = false;
                        slide.isCloned = true;
                        return slide;
                    });
                    _this.slidesData = prepend.concat(_this.slidesData).concat(append);
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: function () {
                    var rtl = _this.settings.rtl ? 1 : -1, size = _this._clones.length + _this._items.length, coordinates = [];
                    var iterator = -1, previous = 0, current = 0;
                    while (++iterator < size) {
                        previous = coordinates[iterator - 1] || 0;
                        current = _this._widths[_this.relative(iterator)] + _this.settings.margin;
                        coordinates.push(previous + current * rtl);
                    }
                    _this._coordinates = coordinates;
                }
            }, {
                filter: ['width', 'items', 'settings'],
                run: function () {
                    var padding = _this.settings.stagePadding, coordinates = _this._coordinates, css = {
                        'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                        'padding-left': padding || '',
                        'padding-right': padding || ''
                    };
                    _this.stageData.width = css.width; // use this property in *ngIf directive for .owl-stage element
                    _this.stageData.paddingL = css['padding-left'];
                    _this.stageData.paddingR = css['padding-right'];
                }
            }, {
                //   filter: [ 'width', 'items', 'settings' ],
                //   run: cache => {
                // 		// this method sets the width for every slide, but I set it in different way earlier
                // 		const grid = !this.settings.autoWidth,
                // 		items = this.$stage.children(); // use this.slidesData
                //     let iterator = this._coordinates.length;
                //     if (grid && cache.items.merge) {
                //       while (iterator--) {
                //         cache.css.width = this._widths[this.relative(iterator)];
                //         items.eq(iterator).css(cache.css);
                //       }
                //     } else if (grid) {
                //       cache.css.width = cache.items.width;
                //       items.css(cache.css);
                //     }
                //   }
                // }, {
                //   filter: [ 'items' ],
                //   run: function() {
                //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
                //   }
                // }, {
                filter: ['width', 'items', 'settings'],
                run: function (cache) {
                    var current = cache.current ? _this.slidesData.findIndex(function (slide) { return slide.id === cache.current; }) : 0;
                    current = Math.max(_this.minimum(), Math.min(_this.maximum(), current));
                    _this.reset(current);
                }
            }, {
                filter: ['position'],
                run: function () {
                    _this.animate(_this.coordinates(_this._current));
                }
            }, {
                filter: ['width', 'position', 'items', 'settings'],
                run: function () {
                    var rtl = _this.settings.rtl ? 1 : -1, padding = _this.settings.stagePadding * 2, matches = [];
                    var begin, end, inner, outer, i, n;
                    begin = _this.coordinates(_this.current());
                    if (typeof begin === 'number') {
                        begin += padding;
                    }
                    else {
                        begin = 0;
                    }
                    end = begin + _this.width() * rtl;
                    if (rtl === -1 && _this.settings.center) {
                        var result = _this._coordinates.filter(function (element) {
                            return _this.settings.items % 2 === 1 ? element >= begin : element > begin;
                        });
                        begin = result.length ? result[result.length - 1] : begin;
                    }
                    for (i = 0, n = _this._coordinates.length; i < n; i++) {
                        inner = Math.ceil(_this._coordinates[i - 1] || 0);
                        outer = Math.ceil(Math.abs(_this._coordinates[i]) + padding * rtl);
                        if ((_this._op(inner, '<=', begin) && (_this._op(inner, '>', end)))
                            || (_this._op(outer, '<', begin) && _this._op(outer, '>', end))) {
                            matches.push(i);
                        }
                    }
                    _this.slidesData.forEach(function (slide) {
                        slide.isActive = false;
                        return slide;
                    });
                    matches.forEach(function (item) {
                        _this.slidesData[item].isActive = true;
                    });
                    if (_this.settings.center) {
                        _this.slidesData.forEach(function (slide) {
                            slide.isCentered = false;
                            return slide;
                        });
                        _this.slidesData[_this.current()].isCentered = true;
                    }
                }
            }
        ];
    }
    Object.defineProperty(CarouselService.prototype, "invalidated", {
        // Is needed for tests
        get: function () {
            return this._invalidated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselService.prototype, "states", {
        // is needed for tests
        get: function () {
            return this._states;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Makes _viewSettingsShipper$ Subject become Observable
     * @returns Observable of _viewSettingsShipper$ Subject
     */
    CarouselService.prototype.getViewCurSettings = function () {
        return this._viewSettingsShipper$.asObservable();
    };
    /**
     * Makes _initializedCarousel$ Subject become Observable
     * @returns Observable of _initializedCarousel$ Subject
     */
    CarouselService.prototype.getInitializedState = function () {
        return this._initializedCarousel$.asObservable();
    };
    /**
     * Makes _changeSettingsCarousel$ Subject become Observable
     * @returns Observable of _changeSettingsCarousel$ Subject
     */
    CarouselService.prototype.getChangeState = function () {
        return this._changeSettingsCarousel$.asObservable();
    };
    /**
     * Makes _changedSettingsCarousel$ Subject become Observable
     * @returns Observable of _changedSettingsCarousel$ Subject
     */
    CarouselService.prototype.getChangedState = function () {
        return this._changedSettingsCarousel$.asObservable();
    };
    /**
     * Makes _translateCarousel$ Subject become Observable
     * @returns Observable of _translateCarousel$ Subject
     */
    CarouselService.prototype.getTranslateState = function () {
        return this._translateCarousel$.asObservable();
    };
    /**
     * Makes _translatedCarousel$ Subject become Observable
     * @returns Observable of _translatedCarousel$ Subject
     */
    CarouselService.prototype.getTranslatedState = function () {
        return this._translatedCarousel$.asObservable();
    };
    /**
     * Makes _resizeCarousel$ Subject become Observable
     * @returns Observable of _resizeCarousel$ Subject
     */
    CarouselService.prototype.getResizeState = function () {
        return this._resizeCarousel$.asObservable();
    };
    /**
     * Makes _resizedCarousel$ Subject become Observable
     * @returns Observable of _resizedCarousel$ Subject
     */
    CarouselService.prototype.getResizedState = function () {
        return this._resizedCarousel$.asObservable();
    };
    /**
     * Makes _refreshCarousel$ Subject become Observable
     * @returns Observable of _refreshCarousel$ Subject
     */
    CarouselService.prototype.getRefreshState = function () {
        return this._refreshCarousel$.asObservable();
    };
    /**
     * Makes _refreshedCarousel$ Subject become Observable
     * @returns Observable of _refreshedCarousel$ Subject
     */
    CarouselService.prototype.getRefreshedState = function () {
        return this._refreshedCarousel$.asObservable();
    };
    /**
     * Makes _dragCarousel$ Subject become Observable
     * @returns Observable of _dragCarousel$ Subject
     */
    CarouselService.prototype.getDragState = function () {
        return this._dragCarousel$.asObservable();
    };
    /**
     * Makes _draggedCarousel$ Subject become Observable
     * @returns Observable of _draggedCarousel$ Subject
     */
    CarouselService.prototype.getDraggedState = function () {
        return this._draggedCarousel$.asObservable();
    };
    /**
     * Setups custom options expanding default options
     * @param options custom options
     */
    CarouselService.prototype.setOptions = function (options) {
        var configOptions = new OwlCarouselOConfig();
        var checkedOptions = this._validateOptions(options, configOptions);
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, configOptions, checkedOptions);
    };
    /**
     * Checks whether user's option are set properly. Cheking is based on typings;
     * @param options options set by user
     * @param configOptions default options
     * @returns checked and modified (if it's needed) user's options
     *
     * Notes:
     * 	- if user set option with wrong type, it'll be written in console
     */
    CarouselService.prototype._validateOptions = function (options, configOptions) {
        var _this = this;
        var checkedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options);
        var mockedTypes = new OwlOptionsMockedTypes();
        var setRightOption = function (type, key) {
            _this.logger.log("options." + key + " must be type of " + type + "; " + key + "=" + options[key] + " skipped to defaults: " + key + "=" + configOptions[key]);
            return configOptions[key];
        };
        var _loop_1 = function (key) {
            if (checkedOptions.hasOwnProperty(key)) {
                // condition could be shortened but it gets harder for understanding
                if (mockedTypes[key] === 'number') {
                    if (this_1._isNumeric(checkedOptions[key])) {
                        checkedOptions[key] = +checkedOptions[key];
                        checkedOptions[key] = key === 'items' ? this_1._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
                    }
                    else {
                        checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }
                }
                else if (mockedTypes[key] === 'boolean' && typeof checkedOptions[key] !== 'boolean') {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'number|boolean' && !this_1._isNumberOrBoolean(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'number|string' && !this_1._isNumberOrString(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'string|boolean' && !this_1._isStringOrBoolean(checkedOptions[key])) {
                    checkedOptions[key] = setRightOption(mockedTypes[key], key);
                }
                else if (mockedTypes[key] === 'string[]') {
                    if (Array.isArray(checkedOptions[key])) {
                        var isString_1 = false;
                        checkedOptions[key].forEach(function (element) {
                            isString_1 = typeof element === 'string' ? true : false;
                        });
                        if (!isString_1) {
                            checkedOptions[key] = setRightOption(mockedTypes[key], key);
                        }
                        ;
                    }
                    else {
                        checkedOptions[key] = setRightOption(mockedTypes[key], key);
                    }
                }
            }
        };
        var this_1 = this;
        for (var key in checkedOptions) {
            _loop_1(key);
        }
        return checkedOptions;
    };
    /**
     * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
     * @param items option items set by user
     * @param skip_validateItems option `skip_validateItems` set by user
     * @returns right number of items
     */
    CarouselService.prototype._validateItems = function (items, skip_validateItems) {
        var result = items;
        if (items > this._items.length) {
            if (skip_validateItems) {
                this.logger.log('The option \'items\' in your options is bigger than the number of slides. The navigation got disabled');
            }
            else {
                result = this._items.length;
                this.logger.log('The option \'items\' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled');
            }
        }
        else {
            if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
                this.logger.log('Option \'items\' in your options is equal to the number of slides. So the navigation got disabled');
            }
        }
        return result;
    };
    /**
     * Set current width of carousel
     * @param width width of carousel Window
     */
    CarouselService.prototype.setCarouselWidth = function (width) {
        this._width = width;
    };
    /**
       * Setups the current settings.
       * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
       * @todo Support for media queries by using `matchMedia` would be nice.
       * @param carouselWidth width of carousel
       * @param slides array of slides
       * @param options options set by user
       */
    CarouselService.prototype.setup = function (carouselWidth, slides, options) {
        this.setCarouselWidth(carouselWidth);
        this.setItems(slides);
        this._defineSlidesData();
        this.setOptions(options);
        this.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._options);
        this.setOptionsForViewport();
        this._trigger('change', { property: { name: 'settings', value: this.settings } });
        this.invalidate('settings'); // must be call of this function;
        this._trigger('changed', { property: { name: 'settings', value: this.settings } });
    };
    /**
     * Set options for current viewport
     */
    CarouselService.prototype.setOptionsForViewport = function () {
        var _this = this;
        var viewport = this._width, overwrites = this._options.responsive;
        var match = -1;
        if (!Object.keys(overwrites).length) {
            return;
        }
        if (!viewport) {
            this.settings.items = 1;
            return;
        }
        for (var key in overwrites) {
            if (overwrites.hasOwnProperty(key)) {
                if (+key <= viewport && +key > match) {
                    match = Number(key);
                }
            }
        }
        this.settings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._options, overwrites[match], { items: (overwrites[match] && overwrites[match].items) ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items });
        // if (typeof this.settings.stagePadding === 'function') {
        // 	this.settings.stagePadding = this.settings.stagePadding();
        // }
        delete this.settings.responsive;
        this.owlDOMData.isResponsive = true;
        this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
        this.owlDOMData.isTouchDragable = this.settings.touchDrag;
        var mergers = [];
        this._items.forEach(function (item) {
            var mergeN = _this.settings.merge ? item.dataMerge : 1;
            mergers.push(mergeN);
        });
        this._mergers = mergers;
        this._breakpoint = match;
        this.invalidate('settings');
    };
    /**
     * Initializes the carousel.
     * @param slides array of CarouselSlideDirective
     */
    CarouselService.prototype.initialize = function (slides) {
        var _this = this;
        this.enter('initializing');
        // this.trigger('initialize');
        this.owlDOMData.rtl = this.settings.rtl;
        if (this._mergers.length) {
            this._mergers = [];
        }
        slides.forEach(function (item) {
            var mergeN = _this.settings.merge ? item.dataMerge : 1;
            _this._mergers.push(mergeN);
        });
        this._clones = [];
        this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
        this.invalidate('items');
        this.refresh();
        this.owlDOMData.isLoaded = true;
        this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
        this.owlDOMData.isTouchDragable = this.settings.touchDrag;
        this.sendChanges();
        this.leave('initializing');
        this._trigger('initialized');
    };
    ;
    /**
     * Sends all data needed for View
     */
    CarouselService.prototype.sendChanges = function () {
        this._viewSettingsShipper$.next({
            owlDOMData: this.owlDOMData,
            stageData: this.stageData,
            slidesData: this.slidesData,
            navData: this.navData,
            dotsData: this.dotsData
        });
    };
    /**
       * Updates option logic if necessery
       */
    CarouselService.prototype._optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = 0;
            this.settings.merge = false;
        }
    };
    /**
     * Updates the view
     */
    CarouselService.prototype.update = function () {
        var _this = this;
        var i = 0;
        var n = this._pipe.length, filter = function (item) { return _this._invalidated[item]; }, cache = {};
        while (i < n) {
            var filteredPipe = this._pipe[i].filter.filter(filter);
            if (this._invalidated.all || filteredPipe.length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }
        this.slidesData.forEach(function (slide) { return slide.classes = _this.setCurSlideClasses(slide); });
        this.sendChanges();
        this._invalidated = {};
        if (!this.is('valid')) {
            this.enter('valid');
        }
    };
    /**
       * Gets the width of the view.
       * @param [dimension=Width.Default] The dimension to return
       * @returns The width of the view in pixel.
       */
    CarouselService.prototype.width = function (dimension) {
        dimension = dimension || Width.Default;
        switch (dimension) {
            case Width.Inner:
            case Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };
    /**
       * Refreshes the carousel primarily for adaptive purposes.
       */
    CarouselService.prototype.refresh = function () {
        this.enter('refreshing');
        this._trigger('refresh');
        this._defineSlidesData();
        this.setOptionsForViewport();
        this._optionsLogic();
        // this.$element.addClass(this.options.refreshClass);
        this.update();
        // this.$element.removeClass(this.options.refreshClass);
        this.leave('refreshing');
        this._trigger('refreshed');
    };
    /**
       * Checks window `resize` event.
       * @param curWidth width of .owl-carousel
       */
    CarouselService.prototype.onResize = function (curWidth) {
        if (!this._items.length) {
            return false;
        }
        this.setCarouselWidth(curWidth);
        this.enter('resizing');
        // if (this.trigger('resize').isDefaultPrevented()) {
        // 	this.leave('resizing');
        // 	return false;
        // }
        this._trigger('resize');
        this.invalidate('width');
        this.refresh();
        this.leave('resizing');
        this._trigger('resized');
    };
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    CarouselService.prototype.prepareDragging = function (event) {
        var stage = null, transformArr;
        // could be 5 commented lines below; However there's stage transform in stageData and in updates after each move of stage
        // stage = getComputedStyle(this.el.nativeElement).transform.replace(/.*\(|\)| /g, '').split(',');
        // stage = {
        //   x: stage[stage.length === 16 ? 12 : 4],
        //   y: stage[stage.length === 16 ? 13 : 5]
        // };
        transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, '').split(',');
        stage = {
            x: +transformArr[0],
            y: +transformArr[1]
        };
        if (this.is('animating')) {
            this.invalidate('position');
        }
        if (event.type === 'mousedown') {
            this.owlDOMData.isGrab = true;
        }
        this.speed(0);
        return stage;
    };
    /**
     * Enters into a 'dragging' state
     */
    CarouselService.prototype.enterDragging = function () {
        this.enter('dragging');
        this._trigger('drag');
    };
    /**
       * Defines new coords for .owl-stage while dragging it
       * @todo #261
       * @param event the event arguments.
       * @param dragData initial data got after starting dragging
       * @returns coords or false
       */
    CarouselService.prototype.defineNewCoordsDrag = function (event, dragData) {
        var minimum = null, maximum = null, pull = null;
        var delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
        if (!this.is('dragging')) {
            return false;
        }
        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = +this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        }
        else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }
        return stage;
    };
    /**
       * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
       * @todo #261
       * @todo Threshold for click event
       * @param event the event arguments.
       * @param dragObj the object with dragging settings and states
       * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
       */
    CarouselService.prototype.finishDragging = function (event, dragObj, clickAttacher) {
        var directions = ['right', 'left'], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
        var currentSlideI, current, newCurrent;
        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
            currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
            current = this.current();
            newCurrent = this.current(currentSlideI === -1 ? undefined : currentSlideI);
            if (current !== newCurrent) {
                this.invalidate('position');
                this.update();
            }
            dragObj.direction = direction;
            if (Math.abs(delta.x) > 3 || new Date().getTime() - dragObj.time > 300) {
                clickAttacher();
            }
        }
        if (!this.is('dragging')) {
            return;
        }
        this.leave('dragging');
        this._trigger('dragged');
    };
    /**
       * Gets absolute position of the closest item for a coordinate.
       * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
       * @param coordinate The coordinate in pixel.
       * @param direction The direction to check for the closest item. Ether `left` or `right`.
       * @returns The absolute position of the closest item.
       */
    CarouselService.prototype.closest = function (coordinate, direction) {
        var pull = 30, width = this.width();
        var coordinates = this.coordinates(), position = -1;
        if (this.settings.center) {
            coordinates = coordinates.map(function (item) {
                if (item === 0) {
                    item += 0.000001;
                }
                return item;
            });
        }
        // option 'freeDrag' doesn't have realization and using it here creates problem:
        // variable 'position' stays unchanged (it equals -1 at the begging) and thus method returns -1
        // Returning value is consumed by method current(), which taking -1 as argument calculates the index of new current slide
        // In case of having 5 slides ans 'loop=false; calling 'current(-1)' sets props '_current' as 4. Just last slide remains visible instead of 3 last slides.
        // if (!this.settings.freeDrag) {
        // check closest item
        for (var i = 0; i < coordinates.length; i++) {
            if (direction === 'left' && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
                // on a right pull, check on previous index
                // to do so, subtract width from value and set position = index + 1
            }
            else if (direction === 'right' && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
                position = i + 1;
            }
            else if (this._op(coordinate, '<', coordinates[i])
                && this._op(coordinate, '>', coordinates[i + 1] || coordinates[i] - width)) {
                position = direction === 'left' ? i + 1 : i;
            }
            else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
                position = i;
            }
            if (position !== -1) {
                break;
            }
            ;
        }
        // }
        if (!this.settings.loop) {
            // non loop boundries
            if (this._op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            }
            else if (this._op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }
        return position;
    };
    /**
       * Animates the stage.
       * @todo #270
       * @param coordinate The coordinate in pixels.
       */
    CarouselService.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;
        if (this.is('animating')) {
            this.onTransitionEnd();
        }
        if (animate) {
            this.enter('animating');
            this._trigger('translate');
        }
        this.stageData.transform = 'translate3d(' + coordinate + 'px,0px,0px)';
        this.stageData.transition = (this.speed() / 1000) + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '');
        // also there was transition by means of JQuery.animate or css-changing property left
    };
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param state The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */
    CarouselService.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };
    ;
    /**
       * Sets the absolute position of the current item.
       * @param position The new absolute position or nothing to leave it unchanged.
       * @returns The absolute position of the current item.
       */
    CarouselService.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }
        if (this._items.length === 0) {
            return undefined;
        }
        position = this.normalize(position);
        if (this._current !== position) {
            var event_1 = this._trigger('change', { property: { name: 'position', value: position } });
            // if (event.data !== undefined) {
            // 	position = this.normalize(event.data);
            // }
            this._current = position;
            this.invalidate('position');
            this._trigger('changed', { property: { name: 'position', value: this._current } });
        }
        return this._current;
    };
    /**
       * Invalidates the given part of the update routine.
       * @param part The part to invalidate.
       * @returns The invalidated parts.
       */
    CarouselService.prototype.invalidate = function (part) {
        if (typeof part === 'string') {
            this._invalidated[part] = true;
            if (this.is('valid')) {
                this.leave('valid');
            }
        }
        return Object.keys(this._invalidated);
    };
    ;
    /**
     * Resets the absolute position of the current item.
     * @param position the absolute position of the new item.
     */
    CarouselService.prototype.reset = function (position) {
        position = this.normalize(position);
        if (position === undefined) {
            return;
        }
        this._speed = 0;
        this._current = position;
        this._suppress(['translate', 'translated']);
        this.animate(this.coordinates(position));
        this._release(['translate', 'translated']);
    };
    /**
       * Normalizes an absolute or a relative position of an item.
       * @param position The absolute or relative position to normalize.
       * @param relative Whether the given position is relative or not.
       * @returns The normalized position.
       */
    CarouselService.prototype.normalize = function (position, relative) {
        var n = this._items.length, m = relative ? 0 : this._clones.length;
        if (!this._isNumeric(position) || n < 1) {
            position = undefined;
        }
        else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }
        return position;
    };
    /**
       * Converts an absolute position of an item into a relative one.
       * @param position The absolute position to convert.
       * @returns The converted position.
       */
    CarouselService.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };
    /**
       * Gets the maximum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of maximum position
       */
    CarouselService.prototype.maximum = function (relative) {
        if (relative === void 0) { relative = false; }
        var settings = this.settings;
        var maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        }
        else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this.slidesData[--iterator].width;
            elementWidth = this._width;
            while (iterator--) {
                // it could be use this._items instead of this.slidesData;
                reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        }
        else if (settings.center) {
            maximum = this._items.length - 1;
        }
        else {
            maximum = this._items.length - settings.items;
        }
        if (relative) {
            maximum -= this._clones.length / 2;
        }
        return Math.max(maximum, 0);
    };
    /**
       * Gets the minimum position for the current item.
       * @param relative Whether to return an absolute position or a relative position.
       * @returns number of minimum position
       */
    CarouselService.prototype.minimum = function (relative) {
        if (relative === void 0) { relative = false; }
        return relative ? 0 : this._clones.length / 2;
    };
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */
    CarouselService.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }
        position = this.normalize(position, true);
        return [this._items[position]];
    };
    /**
       * Gets an item at the specified relative position.
       * @param position The relative position of the item.
       * @returns The item at the given position or all items if no position was given.
       */
    CarouselService.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }
        position = this.normalize(position, true);
        return this._mergers[position];
    };
    /**
       * Gets the absolute positions of clones for an item.
       * @param position The relative position of the item.
       * @returns The absolute positions of clones for the item or all if no position was given.
       */
    CarouselService.prototype.clones = function (position) {
        var odd = this._clones.length / 2, even = odd + this._items.length, map = function (index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2; };
        if (position === undefined) {
            return this._clones.map(function (v, i) { return map(i); });
        }
        return this._clones.map(function (v, i) { return v === position ? map(i) : null; }).filter(function (item) { return item; });
    };
    /**
       * Sets the current animation speed.
       * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
       * @returns The current animation speed in milliseconds.
       */
    CarouselService.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }
        return this._speed;
    };
    /**
       * Gets the coordinate of an item.
       * @todo The name of this method is missleanding.
       * @param position The absolute position of the item within `minimum()` and `maximum()`.
       * @returns The coordinate of the item in pixel or all coordinates.
       */
    CarouselService.prototype.coordinates = function (position) {
        var _this = this;
        var multiplier = 1, newPosition = position - 1, coordinate, result;
        if (position === undefined) {
            result = this._coordinates.map(function (item, index) {
                return _this.coordinates(index);
            });
            return result;
        }
        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        }
        else {
            coordinate = this._coordinates[newPosition] || 0;
        }
        coordinate = Math.ceil(coordinate);
        return coordinate;
    };
    /**
       * Calculates the speed for a translation.
       * @param from The absolute position of the start item.
       * @param to The absolute position of the target item.
       * @param factor [factor=undefined] - The time factor in milliseconds.
       * @returns The time in milliseconds for the translation.
       */
    CarouselService.prototype._duration = function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((+factor || this.settings.smartSpeed));
    };
    /**
       * Slides to the specified item.
       * @param position The position of the item.
       * @param speed The time in milliseconds for the transition.
       */
    CarouselService.prototype.to = function (position, speed) {
        var _this = this;
        var current = this.current(), revert = null, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
        var direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }
            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;
            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                delayForLoop = 30;
                this.reset(current);
                this.sendChanges();
            }
        }
        else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        }
        else {
            position = Math.max(minimum, Math.min(maximum, position));
        }
        setTimeout(function () {
            _this.speed(_this._duration(current, position, speed));
            _this.current(position);
            _this.update();
        }, delayForLoop);
    };
    /**
       * Slides to the next item.
       * @param speed The time in milliseconds for the transition.
       */
    CarouselService.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };
    /**
       * Slides to the previous item.
       * @param speed The time in milliseconds for the transition.
       */
    CarouselService.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };
    /**
       * Handles the end of an animation.
       * @param event - The event arguments.
       */
    CarouselService.prototype.onTransitionEnd = function (event) {
        // if css2 animation then event object is undefined
        if (event !== undefined) {
            // event.stopPropagation();
            // // Catch only owl-stage transitionEnd event
            // if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)	) {
            // 	return false;
            // }
            return false;
        }
        this.leave('animating');
        this._trigger('translated');
    };
    /**
       * Gets viewport width.
       * @returns - The width in pixel.
       */
    CarouselService.prototype._viewport = function () {
        var width;
        if (this._width) {
            width = this._width;
        }
        else {
            this.logger.log('Can not detect viewport width.');
        }
        return width;
    };
    /**
       * Sets _items
       * @param content The list of slides put into CarouselSlideDirectives.
       */
    CarouselService.prototype.setItems = function (content) {
        this._items = content;
    };
    /**
     * Sets slidesData using this._items
     */
    CarouselService.prototype._defineSlidesData = function () {
        // Maybe creating and using loadMap would be better in LazyLoadService.
        // Hovewer in that case when 'resize' event fires, prop 'load' of all slides will get 'false' and such state of prop will be seen by View during its updating. Accordingly the code will remove slides's content from DOM even if it was loaded before.
        // Thus it would be needed to add that content into DOM again.
        // In order to avoid additional removing/adding loaded slides's content we use loadMap here and set restore state of prop 'load' before the View will get it.
        var loadMap;
        if (this.slidesData && this.slidesData.length) {
            loadMap = new Map();
            this.slidesData.forEach(function (item) {
                if (item.load) {
                    loadMap.set(item.id, item.load);
                }
            });
        }
        this.slidesData = this._items.map(function (slide) {
            return {
                id: "" + slide.id,
                isActive: false,
                tplRef: slide.tplRef,
                dataMerge: slide.dataMerge,
                width: 0,
                isCloned: false,
                load: loadMap ? loadMap.get(slide.id) : false,
                hashFragment: slide.dataHash
            };
        });
    };
    /**
     * Sets current classes for slide
     * @param slide Slide of carousel
     * @returns object with names of css-classes which are keys and true/false values
     */
    CarouselService.prototype.setCurSlideClasses = function (slide) {
        // CSS classes: added/removed per current state of component properties
        var currentClasses = {
            'active': slide.isActive,
            'center': slide.isCentered,
            'cloned': slide.isCloned,
            'animated': slide.isAnimated,
            'owl-animated-in': slide.isDefAnimatedIn,
            'owl-animated-out': slide.isDefAnimatedOut
        };
        if (this.settings.animateIn) {
            currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
        }
        if (this.settings.animateOut) {
            currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
        }
        return currentClasses;
    };
    /**
       * Operators to calculate right-to-left and left-to-right.
       * @param a - The left side operand.
       * @param o - The operator.
       * @param b - The right side operand.
       * @returns true/false meaning right-to-left or left-to-right
       */
    CarouselService.prototype._op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };
    /**
       * Triggers a public event.
       * @todo Remove `status`, `relatedTarget` should be used instead.
       * @param name The event name.
       * @param data The event data.
       * @param namespace The event namespace.
       * @param state The state which is associated with the event.
       * @param enter Indicates if the call enters the specified state or not.
       */
    CarouselService.prototype._trigger = function (name, data, namespace, state, enter) {
        switch (name) {
            case 'initialized':
                this._initializedCarousel$.next(name);
                break;
            case 'change':
                this._changeSettingsCarousel$.next(data);
                break;
            case 'changed':
                this._changedSettingsCarousel$.next(data);
                break;
            case 'drag':
                this._dragCarousel$.next(name);
                break;
            case 'dragged':
                this._draggedCarousel$.next(name);
                break;
            case 'resize':
                this._resizeCarousel$.next(name);
                break;
            case 'resized':
                this._resizedCarousel$.next(name);
                break;
            case 'refresh':
                this._refreshCarousel$.next(name);
                break;
            case 'refreshed':
                this._refreshedCarousel$.next(name);
                break;
            case 'translate':
                this._translateCarousel$.next(name);
                break;
            case 'translated':
                this._translatedCarousel$.next(name);
                break;
            default:
                break;
        }
    };
    /**
     * Enters a state.
     * @param name - The state name.
     */
    CarouselService.prototype.enter = function (name) {
        var _this = this;
        [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this._states.current[stateName] === undefined) {
                _this._states.current[stateName] = 0;
            }
            _this._states.current[stateName]++;
        });
    };
    ;
    /**
       * Leaves a state.
       * @param name - The state name.
       */
    CarouselService.prototype.leave = function (name) {
        var _this = this;
        [name].concat(this._states.tags[name] || []).forEach(function (stateName) {
            if (_this._states.current[stateName] === 0 || !!_this._states.current[stateName]) {
                _this._states.current[stateName]--;
            }
        });
    };
    ;
    /**
       * Registers an event or state.
       * @param object - The event or state to register.
       */
    CarouselService.prototype.register = function (object) {
        var _this = this;
        if (object.type === Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            }
            else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }
            this._states.tags[object.name] = this._states.tags[object.name].filter(function (tag, i) {
                return _this._states.tags[object.name].indexOf(tag) === i;
            });
        }
    };
    /**
       * Suppresses events.
       * @param events The events to suppress.
       */
    CarouselService.prototype._suppress = function (events) {
        var _this = this;
        events.forEach(function (event) {
            _this._supress[event] = true;
        });
    };
    /**
       * Releases suppressed events.
       * @param events The events to release.
       */
    CarouselService.prototype._release = function (events) {
        var _this = this;
        events.forEach(function (event) {
            delete _this._supress[event];
        });
    };
    /**
       * Gets unified pointer coordinates from event.
       * @todo #261
       * @param event The `mousedown` or `touchstart` event.
       * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
       */
    CarouselService.prototype.pointer = function (event) {
        var result = { x: null, y: null };
        event = event.originalEvent || event || window.event;
        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
            event.changedTouches[0] : event;
        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        }
        else {
            result.x = event.clientX;
            result.y = event.clientY;
        }
        return result;
    };
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param number The input to be tested
       * @returns An indication if the input is a Number or can be coerced to a Number
       */
    CarouselService.prototype._isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };
    /**
     * Determines whether value is number or boolean type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
     */
    CarouselService.prototype._isNumberOrBoolean = function (value) {
        return this._isNumeric(value) || typeof value === 'boolean';
    };
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */
    CarouselService.prototype._isNumberOrString = function (value) {
        return this._isNumeric(value) || typeof value === 'string';
    };
    /**
     * Determines whether value is number or string type
     * @param value The input to be tested
     * @returns An indication if the input is a Number or can be coerced to a Number, or String
     */
    CarouselService.prototype._isStringOrBoolean = function (value) {
        return typeof value === 'string' || typeof value === 'boolean';
    };
    /**
       * Gets the difference of two vectors.
       * @todo #261
       * @param first The first vector.
       * @param second- The second vector.
       * @returns The difference.
       */
    CarouselService.prototype.difference = function (first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };
    CarouselService.ctorParameters = function () { return [
        { type: OwlLogger }
    ]; };
    CarouselService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CarouselService);
    return CarouselService;
}());

var NavigationService = /** @class */ (function () {
    function NavigationService(carouselService) {
        this.carouselService = carouselService;
        /**
         * Indicates whether the plugin is initialized or not.
         */
        this._initialized = false;
        /**
         * The current paging indexes.
         */
        this._pages = [];
        /**
         * Data for navigation elements of the user interface.
         */
        this._navData = {
            disabled: false,
            prev: {
                disabled: false,
                htmlText: ''
            },
            next: {
                disabled: false,
                htmlText: ''
            },
        };
        /**
         * Data for dot elements of the user interface.
         */
        this._dotsData = {
            disabled: false,
            dots: []
        };
        this.spyDataStreams();
    }
    NavigationService.prototype.ngOnDestroy = function () {
        this.navSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    NavigationService.prototype.spyDataStreams = function () {
        var _this = this;
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (state) {
            _this.initialize();
            _this._updateNavPages();
            _this.draw();
            _this.update();
            _this.carouselService.sendChanges();
        }));
        // mostly changes in carouselService and carousel at all causes carouselService.to(). It moves stage right-left by its code and calling needed functions
        // Thus this method by calling carouselService.current(position) notifies about changes
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (data) { return data.property.name === 'position'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this.update();
            // should be the call of the function written at the end of comment
            // but the method carouselServive.to() has setTimeout(f, 0) which contains carouselServive.update() which calls sendChanges() method.
            // carouselService.navData and carouselService.dotsData update earlier than carouselServive.update() gets called
            // updates of carouselService.navData and carouselService.dotsData are being happening withing carouselService.current(position) method which calls next() of _changedSettingsCarousel$
            // carouselService.current(position) is being calling earlier than carouselServive.update();
            // this.carouselService.sendChanges();
        }));
        var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this._updateNavPages();
            _this.draw();
            _this.update();
            _this.carouselService.sendChanges();
        }));
        var navMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
        this.navSubscription = navMerge$.subscribe(function () { });
    };
    /**
       * Initializes the layout of the plugin and extends the carousel.
       */
    NavigationService.prototype.initialize = function () {
        this._navData.disabled = true;
        this._navData.prev.htmlText = this.carouselService.settings.navText[0];
        this._navData.next.htmlText = this.carouselService.settings.navText[1];
        this._dotsData.disabled = true;
        this.carouselService.navData = this._navData;
        this.carouselService.dotsData = this._dotsData;
    };
    /**
     * Calculates internal states and updates prop _pages
     */
    NavigationService.prototype._updateNavPages = function () {
        var i, j, k;
        var lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
        var size = settings.center || settings.autoWidth || settings.dotsData
            ? 1 : settings.dotsEach || settings.items;
        size = +size;
        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(+settings.slideBy, settings.items);
        }
        if (settings.dots || settings.slideBy === 'page') {
            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this.carouselService.mergers(this.carouselService.relative(i));
            }
        }
        this._pages = pages;
    };
    /**
       * Draws the user interface.
       * @todo The option `dotsData` wont work.
       */
    NavigationService.prototype.draw = function () {
        var _this = this;
        var difference;
        var settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
        this._navData.disabled = !settings.nav || disabled;
        this._dotsData.disabled = !settings.dots || disabled;
        if (settings.dots) {
            difference = this._pages.length - this._dotsData.dots.length;
            if (settings.dotsData && difference !== 0) {
                this._dotsData.dots = [];
                items.forEach(function (item) {
                    _this._dotsData.dots.push({
                        active: false,
                        id: "dot-" + item.id,
                        innerContent: item.dotContent,
                        showInnerContent: true
                    });
                });
            }
            else if (difference > 0) {
                var startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
                for (var i = 0; i < difference; i++) {
                    this._dotsData.dots.push({
                        active: false,
                        id: "dot-" + (i + startI),
                        innerContent: '',
                        showInnerContent: false
                    });
                }
            }
            else if (difference < 0) {
                this._dotsData.dots.splice(difference, Math.abs(difference));
            }
        }
        this.carouselService.navData = this._navData;
        this.carouselService.dotsData = this._dotsData;
    };
    ;
    /**
     * Updates navigation buttons's and dots's states
     */
    NavigationService.prototype.update = function () {
        this._updateNavButtons();
        this._updateDots();
    };
    /**
     * Changes state of nav buttons (disabled, enabled)
     */
    NavigationService.prototype._updateNavButtons = function () {
        var settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
        if (settings.nav) {
            this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
            this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
        }
        this.carouselService.navData = this._navData;
    };
    /**
     * Changes active dot if page becomes changed
     */
    NavigationService.prototype._updateDots = function () {
        var curActiveDotI;
        if (!this.carouselService.settings.dots) {
            return;
        }
        this._dotsData.dots.forEach(function (item) {
            if (item.active === true) {
                item.active = false;
            }
        });
        curActiveDotI = this._current();
        if (this._dotsData.dots.length) {
            this._dotsData.dots[curActiveDotI].active = true;
        }
        this.carouselService.dotsData = this._dotsData;
    };
    /**
       * Gets the current page position of the carousel.
       * @returns the current page position of the carousel
       */
    NavigationService.prototype._current = function () {
        var current = this.carouselService.relative(this.carouselService.current());
        var finalCurrent;
        var pages = this._pages.filter(function (page, index) {
            return page.start <= current && page.end >= current;
        }).pop();
        finalCurrent = this._pages.findIndex(function (page) {
            return page.start === pages.start && page.end === pages.end;
        });
        return finalCurrent;
    };
    ;
    /**
       * Gets the current succesor/predecessor position.
     * @param sussessor position of slide
       * @returns the current succesor/predecessor position
       */
    NavigationService.prototype._getPosition = function (successor) {
        var position, length;
        var settings = this.carouselService.settings;
        if (settings.slideBy === 'page') {
            position = this._current();
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        }
        else {
            position = this.carouselService.relative(this.carouselService.current());
            length = this.carouselService.items().length;
            successor ? position += +settings.slideBy : position -= +settings.slideBy;
        }
        return position;
    };
    ;
    /**
       * Slides to the next item or page.
       * @param speed The time in milliseconds for the transition.
       */
    NavigationService.prototype.next = function (speed) {
        this.carouselService.to(this._getPosition(true), speed);
    };
    ;
    /**
     * Slides to the previous item or page.
     * @param speed The time in milliseconds for the transition.
     */
    NavigationService.prototype.prev = function (speed) {
        this.carouselService.to(this._getPosition(false), speed);
    };
    ;
    /**
     * Slides to the specified item or page.
     * @param position - The position of the item or page.
     * @param speed - The time in milliseconds for the transition.
     * @param standard - Whether to use the standard behaviour or not. Default meaning false
     */
    NavigationService.prototype.to = function (position, speed, standard) {
        var length;
        if (!standard && this._pages.length) {
            length = this._pages.length;
            this.carouselService.to(this._pages[((position % length) + length) % length].start, speed);
        }
        else {
            this.carouselService.to(position, speed);
        }
    };
    ;
    /**
     * Moves carousel after user's clicking on any dots
     */
    NavigationService.prototype.moveByDot = function (dotId) {
        var index = this._dotsData.dots.findIndex(function (dot) { return dotId === dot.id; });
        this.to(index, this.carouselService.settings.dotsSpeed);
    };
    /**
     * rewinds carousel to slide with needed id
     * @param id id of slide
     */
    NavigationService.prototype.toSlideById = function (id) {
        var position = this.carouselService.slidesData.findIndex(function (slide) { return slide.id === id && slide.isCloned === false; });
        if (position === -1 || position === this.carouselService.current()) {
            return;
        }
        this.carouselService.to(this.carouselService.relative(position), false);
    };
    NavigationService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NavigationService);
    return NavigationService;
}());

// import { Injectable } from '@angular/core';
/**
 * Create a new injection token for injecting the window into a component.
 */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
/**
 * Define abstract class for obtaining reference to the global window object.
 */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
/**
 * Define class that implements the abstract class and returns the native window object.
 */
var BrowserWindowRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        /**
         * @returns window object
         */
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));
/**
 * Create an factory function that returns the native window object.
 * @param browserWindowRef Native window object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    var obj = {
        setTimeout: function (func, time) { },
        clearTimeout: function (a) { }
    };
    return obj;
}
/**
 * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
 */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/**
 * Create an injectable provider that uses the windowFactory function for returning the native window object.
 */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
};
/**
 * Create an array of providers.
 */
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];

/**
 * Create a new injection token for injecting the Document into a component.
 */
var DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('DocumentToken');
/**
 * Define abstract class for obtaining reference to the global Document object.
 */
var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    Object.defineProperty(DocumentRef.prototype, "nativeDocument", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: true,
        configurable: true
    });
    return DocumentRef;
}());
/**
 * Define class that implements the abstract class and returns the native Document object.
 */
var BrowserDocumentRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserDocumentRef, _super);
    function BrowserDocumentRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserDocumentRef.prototype, "nativeDocument", {
        /**
         * @returns Document object
         */
        get: function () {
            return document;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserDocumentRef;
}(DocumentRef));
/**
 * Create an factory function that returns the native Document object.
 * @param browserDocumentRef Native Document object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */
function documentFactory(browserDocumentRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
        return browserDocumentRef.nativeDocument;
    }
    var doc = {
        hidden: false,
        visibilityState: 'visible'
    };
    return doc;
}
/**
 * Create a injectable provider for the DocumentRef token that uses the BrowserDocumentRef class.
 */
var browserDocumentProvider = {
    provide: DocumentRef,
    useClass: BrowserDocumentRef
};
/**
 * Create an injectable provider that uses the DocumentFactory function for returning the native Document object.
 */
var documentProvider = {
    provide: DOCUMENT,
    useFactory: documentFactory,
    deps: [DocumentRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
};
/**
 * Create an array of providers.
 */
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];

var AutoplayService = /** @class */ (function () {
    function AutoplayService(carouselService, winRef, docRef) {
        this.carouselService = carouselService;
        /**
         * The autoplay timeout.
         */
        this._timeout = null;
        /**
         * Indicates whenever the autoplay is paused.
         */
        this._paused = false;
        this.winRef = winRef;
        this.docRef = docRef;
        this.spyDataStreams();
    }
    AutoplayService.prototype.ngOnDestroy = function () {
        this.autoplaySubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    AutoplayService.prototype.spyDataStreams = function () {
        var _this = this;
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this.carouselService.settings.autoplay) {
                _this.play();
            }
        }));
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this._handleChangeObservable(data);
        }));
        var resized$ = this.carouselService.getResizedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            if (_this.carouselService.settings.autoplay) {
                _this.play();
            }
            else {
                _this.stop();
            }
        }));
        // original Autoplay Plugin has listeners on play.owl.core and stop.owl.core events.
        // They are triggered by Video Plugin
        var autoplayMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, resized$);
        this.autoplaySubscription = autoplayMerge$.subscribe(function () { });
    };
    /**
       * Starts the autoplay.
       * @param timeout The interval before the next animation starts.
       * @param speed The animation speed for the animations.
       */
    AutoplayService.prototype.play = function (timeout, speed) {
        if (this._paused) {
            this._paused = false;
            this._setAutoPlayInterval(1);
        }
        if (this.carouselService.is('rotating')) {
            return;
        }
        this.carouselService.enter('rotating');
        this._setAutoPlayInterval();
    };
    ;
    /**
       * Gets a new timeout
       * @param timeout - The interval before the next animation starts.
       * @param speed - The animation speed for the animations.
       * @return
       */
    AutoplayService.prototype._getNextTimeout = function (timeout, speed) {
        var _this = this;
        if (this._timeout) {
            this.winRef.clearTimeout(this._timeout);
        }
        this._isArtificialAutoplayTimeout = timeout ? true : false;
        return this.winRef.setTimeout(function () {
            if (_this._paused || _this.carouselService.is('busy') || _this.carouselService.is('interacting') || _this.docRef.hidden) {
                return;
            }
            _this.carouselService.next(speed || _this.carouselService.settings.autoplaySpeed);
        }, timeout || this.carouselService.settings.autoplayTimeout);
    };
    ;
    /**
       * Sets autoplay in motion.
       */
    AutoplayService.prototype._setAutoPlayInterval = function (timeout) {
        this._timeout = this._getNextTimeout(timeout);
    };
    ;
    /**
     * Stops the autoplay.
     */
    AutoplayService.prototype.stop = function () {
        if (!this.carouselService.is('rotating')) {
            return;
        }
        this._paused = true;
        this.winRef.clearTimeout(this._timeout);
        this.carouselService.leave('rotating');
    };
    ;
    /**
       * Stops the autoplay.
       */
    AutoplayService.prototype.pause = function () {
        if (!this.carouselService.is('rotating')) {
            return;
        }
        this._paused = true;
    };
    ;
    /**
     * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
     * @param data object with current position of carousel and type of change
     */
    AutoplayService.prototype._handleChangeObservable = function (data) {
        if (data.property.name === 'settings') {
            if (this.carouselService.settings.autoplay) {
                this.play();
            }
            else {
                this.stop();
            }
        }
        else if (data.property.name === 'position') {
            //console.log('play?', e);
            if (this.carouselService.settings.autoplay) {
                this._setAutoPlayInterval();
            }
        }
    };
    /**
     * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
     */
    AutoplayService.prototype._playAfterTranslated = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('translated').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (data) { return _this.carouselService.getTranslatedState(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () { return _this._isArtificialAutoplayTimeout; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this._setAutoPlayInterval(); })).subscribe(function () { });
    };
    /**
     * Starts pausing
     */
    AutoplayService.prototype.startPausing = function () {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.pause();
        }
    };
    /**
     * Starts playing after mouse leaves carousel
     */
    AutoplayService.prototype.startPlayingMouseLeave = function () {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();
            this._playAfterTranslated();
        }
    };
    /**
     * Starts playing after touch ends
     */
    AutoplayService.prototype.startPlayingTouchEnd = function () {
        if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is('rotating')) {
            this.play();
            this._playAfterTranslated();
        }
    };
    AutoplayService.ctorParameters = function () { return [
        { type: CarouselService },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [WINDOW,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DOCUMENT,] }] }
    ]; };
    AutoplayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(WINDOW)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))
    ], AutoplayService);
    return AutoplayService;
}());

var LazyLoadService = /** @class */ (function () {
    function LazyLoadService(carouselService) {
        this.carouselService = carouselService;
        this.spyDataStreams();
    }
    LazyLoadService.prototype.ngOnDestroy = function () {
        this.lazyLoadSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    LazyLoadService.prototype.spyDataStreams = function () {
        var _this = this;
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            var isLazyLoad = _this.carouselService.settings && !_this.carouselService.settings.lazyLoad;
            _this.carouselService.slidesData.forEach(function (item) { return item.load = isLazyLoad ? true : false; });
        }));
        var changeSettings$ = this.carouselService.getChangeState();
        var resizedCarousel$ = this.carouselService.getResizedState();
        var lazyLoadMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this._defineLazyLoadSlides(data); }));
        this.lazyLoadSubscription = lazyLoadMerge$.subscribe(function () { });
    };
    LazyLoadService.prototype._defineLazyLoadSlides = function (data) {
        var _this = this;
        if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
            return;
        }
        if ((data.property && data.property.name === 'position') || data === 'initialized' || data === "resized") {
            var settings = this.carouselService.settings, clones = this.carouselService.clones().length;
            var n = (settings.center && Math.ceil(settings.items / 2) || settings.items), i = ((settings.center && n * -1) || 0), position = (data.property && data.property.value !== undefined ? data.property.value : this.carouselService.current()) + i;
            // load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option
            if (settings.lazyLoadEager > 0) {
                n += settings.lazyLoadEager;
                // If the carousel is looping also preload images that are to the "left"
                if (settings.loop) {
                    position -= settings.lazyLoadEager;
                    n++;
                }
            }
            while (i++ < n) {
                this._load(clones / 2 + this.carouselService.relative(position));
                if (clones) {
                    this.carouselService.clones(this.carouselService.relative(position)).forEach(function (value) { return _this._load(value); });
                }
                position++;
            }
        }
    };
    /**
       * Loads all resources of an item at the specified position.
       * @param position - The absolute position of the item.
       */
    LazyLoadService.prototype._load = function (position) {
        if (this.carouselService.slidesData[position].load) {
            return;
        }
        this.carouselService.slidesData[position].load = true;
    };
    LazyLoadService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    LazyLoadService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LazyLoadService);
    return LazyLoadService;
}());

var AnimateService = /** @class */ (function () {
    function AnimateService(carouselService) {
        this.carouselService = carouselService;
        /**
         * s
         */
        this.swapping = true;
        /**
         * active slide before translating
         */
        this.previous = undefined;
        /**
         * new active slide after translating
         */
        this.next = undefined;
        this.spyDataStreams();
    }
    AnimateService.prototype.ngOnDestroy = function () {
        this.animateSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    AnimateService.prototype.spyDataStreams = function () {
        var _this = this;
        var changeSettings$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (data.property.name === 'position') {
                _this.previous = _this.carouselService.current();
                _this.next = data.property.value;
            }
        }));
        var dragCarousel$ = this.carouselService.getDragState();
        var draggedCarousel$ = this.carouselService.getDraggedState();
        var translatedCarousel$ = this.carouselService.getTranslatedState();
        var dragTranslatedMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) { return _this.swapping = data === 'translated'; }));
        var translateCarousel$ = this.carouselService.getTranslateState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this.swapping && (_this.carouselService._options.animateOut || _this.carouselService._options.animateIn)) {
                _this._swap();
            }
        }));
        var animateMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
        this.animateSubscription = animateMerge$.subscribe(function () { });
    };
    /**
       * Toggles the animation classes whenever an translations starts.
       * @returns
       */
    AnimateService.prototype._swap = function () {
        if (this.carouselService.settings.items !== 1) {
            return;
        }
        // if (!$.support.animation || !$.support.transition) {
        // 	return;
        // }
        this.carouselService.speed(0);
        var left;
        var previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
        if (this.carouselService.current() === this.previous) {
            return;
        }
        if (outgoing) {
            left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
            this.carouselService.slidesData.forEach(function (slide) {
                if (slide.id === previous.id) {
                    slide.left = left + "px";
                    slide.isAnimated = true;
                    slide.isDefAnimatedOut = true;
                    slide.isCustomAnimatedOut = true;
                }
            });
        }
        if (incoming) {
            this.carouselService.slidesData.forEach(function (slide) {
                if (slide.id === next.id) {
                    slide.isAnimated = true;
                    slide.isDefAnimatedIn = true;
                    slide.isCustomAnimatedIn = true;
                }
            });
        }
    };
    ;
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    AnimateService.prototype.clear = function (id) {
        var _this = this;
        this.carouselService.slidesData.forEach(function (slide) {
            if (slide.id === id) {
                slide.left = '';
                slide.isAnimated = false;
                slide.isDefAnimatedOut = false;
                slide.isCustomAnimatedOut = false;
                slide.isDefAnimatedIn = false;
                slide.isCustomAnimatedIn = false;
                slide.classes = _this.carouselService.setCurSlideClasses(slide);
            }
        });
        this.carouselService.onTransitionEnd();
    };
    ;
    AnimateService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    AnimateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AnimateService);
    return AnimateService;
}());

var AutoHeightService = /** @class */ (function () {
    function AutoHeightService(carouselService) {
        this.carouselService = carouselService;
        this.spyDataStreams();
    }
    AutoHeightService.prototype.ngOnDestroy = function () {
        this.autoHeightSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    AutoHeightService.prototype.spyDataStreams = function () {
        var _this = this;
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this.carouselService.settings.autoHeight) {
                _this.update();
            }
            else {
                _this.carouselService.slidesData.forEach(function (slide) { return slide.heightState = 'full'; });
            }
        }));
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this.carouselService.settings.autoHeight && data.property.name === 'position') {
                _this.update();
            }
        }));
        var refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this.carouselService.settings.autoHeight) {
                _this.update();
            }
        }));
        var autoHeight$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$, refreshedCarousel$);
        this.autoHeightSubscription = autoHeight$.subscribe(function () { });
    };
    /**
     * Updates the prop 'heightState' of slides
     */
    AutoHeightService.prototype.update = function () {
        var items = this.carouselService.settings.items;
        var start = this.carouselService.current(), end = start + items;
        if (this.carouselService.settings.center) {
            start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
            end = items % 2 === 1 ? start + items : start + items + 1;
        }
        this.carouselService.slidesData.forEach(function (slide, i) {
            slide.heightState = (i >= start && i < end) ? 'full' : 'nulled';
        });
    };
    AutoHeightService.ctorParameters = function () { return [
        { type: CarouselService }
    ]; };
    AutoHeightService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AutoHeightService);
    return AutoHeightService;
}());

var HashService = /** @class */ (function () {
    function HashService(carouselService, route, router) {
        this.carouselService = carouselService;
        this.route = route;
        this.router = router;
        this.spyDataStreams();
        if (!this.route) {
            this.route = {
                fragment: Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('no route').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            };
        }
        ;
        if (!this.router) {
            this.router = {
                navigate: function (commands, extras) { return; }
            };
        }
    }
    HashService.prototype.ngOnDestroy = function () {
        this.hashSubscription.unsubscribe();
    };
    /**
     * Defines Observables which service must observe
     */
    HashService.prototype.spyDataStreams = function () {
        var _this = this;
        var initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.listenToRoute(); }));
        var changedSettings$ = this.carouselService.getChangedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            if (_this.carouselService.settings.URLhashListener && data.property.name === 'position') {
                var newCurSlide = _this.carouselService.current();
                var newCurFragment = _this.carouselService.slidesData[newCurSlide].hashFragment;
                if (!newCurFragment || newCurFragment === _this.currentHashFragment) {
                    return;
                }
                _this.router.navigate(['./'], { fragment: newCurFragment, relativeTo: _this.route });
            }
        }));
        var hashFragment$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(initializedCarousel$, changedSettings$);
        this.hashSubscription = hashFragment$.subscribe(function () { });
    };
    /**
     * rewinds carousel to slide which has the same hashFragment as fragment of current url
     * @param fragment fragment of url
     */
    HashService.prototype.rewind = function (fragment) {
        var position = this.carouselService.slidesData.findIndex(function (slide) { return slide.hashFragment === fragment && slide.isCloned === false; });
        if (position === -1 || position === this.carouselService.current()) {
            return;
        }
        this.carouselService.to(this.carouselService.relative(position), false);
    };
    /**
     * Initiate listening to ActivatedRoute.fragment
     */
    HashService.prototype.listenToRoute = function () {
        var _this = this;
        var count = this.carouselService.settings.startPosition === 'URLHash' ? 0 : 2;
        this.route.fragment.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(count))
            .subscribe(function (fragment) {
            _this.currentHashFragment = fragment;
            _this.rewind(fragment);
        });
    };
    HashService.ctorParameters = function () { return [
        { type: CarouselService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
    ]; };
    HashService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], HashService);
    return HashService;
}());

var nextId = 0;
var CarouselSlideDirective = /** @class */ (function () {
    function CarouselSlideDirective(tplRef) {
        this.tplRef = tplRef;
        /**
         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
         * Will be auto-generated if not provided.
         */
        this.id = "owl-slide-" + nextId++;
        /**
         * Defines how much widths of common slide will current slide have
         * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
         */
        this._dataMerge = 1;
        /**
         * Width of slide
         */
        this.width = 0;
        /**
         * Inner content of dot for certain slide; can be html-markup
         */
        this.dotContent = '';
        /**
         * Hash (fragment) of url which corresponds to certain slide
         */
        this.dataHash = '';
    }
    Object.defineProperty(CarouselSlideDirective.prototype, "dataMerge", {
        get: function () { return this._dataMerge; },
        set: function (data) {
            this._dataMerge = this.isNumeric(data) ? data : 1;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
       * Determines if the input is a Number or something that can be coerced to a Number
       * @param - The input to be tested
       * @returns - An indication if the input is a Number or can be coerced to a Number
       */
    CarouselSlideDirective.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };
    CarouselSlideDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CarouselSlideDirective.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CarouselSlideDirective.prototype, "dataMerge", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CarouselSlideDirective.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CarouselSlideDirective.prototype, "dotContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CarouselSlideDirective.prototype, "dataHash", void 0);
    CarouselSlideDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'ng-template[carouselSlide]' })
    ], CarouselSlideDirective);
    return CarouselSlideDirective;
}());
/**
 * Data which will be passed out after ending of transition of carousel
 */
var SlidesOutputData = /** @class */ (function () {
    function SlidesOutputData() {
    }
    return SlidesOutputData;
}());
;
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
        this.el = el;
        this.resizeService = resizeService;
        this.carouselService = carouselService;
        this.navigationService = navigationService;
        this.autoplayService = autoplayService;
        this.lazyLoadService = lazyLoadService;
        this.animateService = animateService;
        this.autoHeightService = autoHeightService;
        this.hashService = hashService;
        this.logger = logger;
        this.changeDetectorRef = changeDetectorRef;
        this.translated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           *  Data of every slide
           */
        this.slidesData = [];
        /**
         * Shows whether carousel is loaded of not.
         */
        this.carouselLoaded = false;
        this.docRef = docRef;
    }
    CarouselComponent.prototype.onVisibilityChange = function (ev) {
        if (!this.carouselService.settings.autoplay)
            return;
        switch (this.docRef.visibilityState) {
            case 'visible':
                this.autoplayService.play();
                break;
            case 'hidden':
                this.autoplayService.stop();
                break;
            default:
                break;
        }
    };
    ;
    CarouselComponent.prototype.ngOnInit = function () {
        this.spyDataStreams();
        this.carouselWindowWidth = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
    };
    CarouselComponent.prototype.ngAfterContentChecked = function () {
    };
    // ngAfterContentChecked() END
    CarouselComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.slides.toArray().length) {
            this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
            this.carouselService.initialize(this.slides.toArray());
            this._winResizeWatcher();
        }
        else {
            this.logger.log("There are no slides to show. So the carousel won't be rendered");
        }
        this._slidesChangesSubscription = this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slides) {
            if (slides.toArray().length) {
                // this.carouselService.setItems(slides.toArray());
                _this.carouselService.setup(_this.carouselWindowWidth, slides.toArray(), _this.options);
                _this.carouselService.initialize(slides.toArray());
            }
            else {
                _this.carouselLoaded = false;
                _this.logger.log("There are no slides to show. So the carousel won't be re-rendered");
            }
        })).subscribe(function () { });
    };
    CarouselComponent.prototype.ngOnDestroy = function () {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
        if (this._slidesChangesSubscription) {
            this._slidesChangesSubscription.unsubscribe();
        }
        if (this._allObservSubscription) {
            this._allObservSubscription.unsubscribe();
        }
    };
    /**
     * Joins the observable login in one place: sets values to some observables, merges this observables and
     * subcribes to merge func
     */
    CarouselComponent.prototype.spyDataStreams = function () {
        var _this = this;
        this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            _this.owlDOMData = data.owlDOMData;
            _this.stageData = data.stageData;
            _this.slidesData = data.slidesData;
            if (!_this.carouselLoaded) {
                _this.carouselLoaded = true;
            }
            _this.navData = data.navData;
            _this.dotsData = data.dotsData;
            _this.changeDetectorRef.markForCheck();
        }));
        this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.initialized.emit(_this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.translated.emit(_this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._changeCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.change.emit(_this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._changedCarousel$ = this.carouselService.getChangeState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (value) {
            var changedPosition = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () { return value.property.name === 'position'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this.slidesData); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["skip"])(value.property.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(_this.carouselService.settings.items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slide) {
                var clonedIdPrefix = _this.carouselService.clonedIdPrefix;
                var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, slide, { id: id, isActive: true });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (slides) {
                return {
                    slides: slides,
                    startPosition: _this.carouselService.relative(value.property.value)
                };
            }));
            // const changedSetting: Observable<SlidesOutputData> = of(value).pipe(
            //   filter(() => value.property.name === 'settings'),
            //   map(() => {
            //     return {
            //       slides: [],
            //       startPosition: this.carouselService.relative(value.property.value)
            //     }
            //   })
            // )
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(changedPosition);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (slidesData) {
            _this.gatherTranslatedData();
            _this.changed.emit(slidesData.slides.length ? slidesData : _this.slidesOutputData);
            // console.log(this.slidesOutputData);
            // this.slidesOutputData = {};
        }));
        this._draggingCarousel$ = this.carouselService.getDragState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.gatherTranslatedData();
            _this.dragging.emit({ dragging: true, data: _this.slidesOutputData });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.carouselService.getDraggedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return !!_this.carouselService.is('animating'); })); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (anim) {
            if (anim) {
                return _this.carouselService.getTranslatedState().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('not animating');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () {
            _this.dragging.emit({ dragging: false, data: _this.slidesOutputData });
        }));
        this._carouselMerge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
        this._allObservSubscription = this._carouselMerge$.subscribe(function () { });
    };
    /**
     * Init subscription to resize event and attaches handler for this event
     */
    CarouselComponent.prototype._winResizeWatcher = function () {
        var _this = this;
        if (Object.keys(this.carouselService._options.responsive).length) {
            this.resizeSubscription = this.resizeService.onResize$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function () { return _this.carouselWindowWidth !== _this.el.nativeElement.querySelector('.owl-carousel').clientWidth; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(this.carouselService.settings.responsiveRefreshRate))
                .subscribe(function () {
                _this.carouselService.onResize(_this.el.nativeElement.querySelector('.owl-carousel').clientWidth);
                _this.carouselWindowWidth = _this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            });
        }
    };
    /**
     * Handler for transitioend event
     */
    CarouselComponent.prototype.onTransitionEnd = function () {
        this.carouselService.onTransitionEnd();
    };
    /**
     * Handler for click event, attached to next button
     */
    CarouselComponent.prototype.next = function () {
        if (!this.carouselLoaded)
            return;
        this.navigationService.next(this.carouselService.settings.navSpeed);
    };
    /**
     * Handler for click event, attached to prev button
     */
    CarouselComponent.prototype.prev = function () {
        if (!this.carouselLoaded)
            return;
        this.navigationService.prev(this.carouselService.settings.navSpeed);
    };
    /**
     * Handler for click event, attached to dots
     */
    CarouselComponent.prototype.moveByDot = function (dotId) {
        if (!this.carouselLoaded)
            return;
        this.navigationService.moveByDot(dotId);
    };
    /**
     * rewinds carousel to slide with needed id
     * @param id fragment of url
     */
    CarouselComponent.prototype.to = function (id) {
        // if (!this.carouselLoaded || ((this.navData && this.navData.disabled) && (this.dotsData && this.dotsData.disabled))) return;
        if (!this.carouselLoaded)
            return;
        this.navigationService.toSlideById(id);
    };
    /**
     * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
     */
    CarouselComponent.prototype.gatherTranslatedData = function () {
        var startPosition;
        var clonedIdPrefix = this.carouselService.clonedIdPrefix;
        var activeSlides = this.slidesData
            .filter(function (slide) { return slide.isActive === true; })
            .map(function (slide) {
            var id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
            return {
                id: id,
                width: slide.width,
                marginL: slide.marginL,
                marginR: slide.marginR,
                center: slide.isCentered
            };
        });
        startPosition = this.carouselService.relative(this.carouselService.current());
        this.slidesOutputData = {
            startPosition: startPosition,
            slides: activeSlides
        };
    };
    /**
     * Starts pausing
     */
    CarouselComponent.prototype.startPausing = function () {
        this.autoplayService.startPausing();
    };
    /**
     * Starts playing after mouse leaves carousel
     */
    CarouselComponent.prototype.startPlayML = function () {
        this.autoplayService.startPlayingMouseLeave();
    };
    /**
     * Starts playing after touch ends
     */
    CarouselComponent.prototype.startPlayTE = function () {
        this.autoplayService.startPlayingTouchEnd();
    };
    CarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: ResizeService },
        { type: CarouselService },
        { type: NavigationService },
        { type: AutoplayService },
        { type: LazyLoadService },
        { type: AnimateService },
        { type: AutoHeightService },
        { type: HashService },
        { type: OwlLogger },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DOCUMENT,] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CarouselSlideDirective)
    ], CarouselComponent.prototype, "slides", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CarouselComponent.prototype, "translated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CarouselComponent.prototype, "dragging", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CarouselComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CarouselComponent.prototype, "changed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], CarouselComponent.prototype, "initialized", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CarouselComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:visibilitychange', ['$event'])
    ], CarouselComponent.prototype, "onVisibilityChange", null);
    CarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'owl-carousel-o',
            template: "\n    <div class=\"owl-carousel owl-theme\" #owlCarousel\n      [ngClass]=\"{'owl-rtl': owlDOMData?.rtl,\n                  'owl-loaded': owlDOMData?.isLoaded,\n                  'owl-responsive': owlDOMData?.isResponsive,\n                  'owl-drag': owlDOMData?.isMouseDragable,\n                  'owl-grab': owlDOMData?.isGrab}\"\n      (mouseover)=\"startPausing()\"\n      (mouseleave)=\"startPlayML()\"\n      (touchstart)=\"startPausing()\"\n      (touchend)=\"startPlayTE()\">\n\n      <div *ngIf=\"carouselLoaded\" class=\"owl-stage-outer\">\n        <owl-stage [owlDraggable]=\"{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}\"\n                    [stageData]=\"stageData\"\n                    [slidesData]=\"slidesData\"></owl-stage>\n      </div> <!-- /.owl-stage-outer -->\n      <ng-container *ngIf=\"slides.toArray().length\">\n        <div class=\"owl-nav\" [ngClass]=\"{'disabled': navData?.disabled}\">\n          <div class=\"owl-prev\" [ngClass]=\"{'disabled': navData?.prev?.disabled}\" (click)=\"prev()\" [innerHTML]=\"navData?.prev?.htmlText\"></div>\n          <div class=\"owl-next\" [ngClass]=\"{'disabled': navData?.next?.disabled}\" (click)=\"next()\" [innerHTML]=\"navData?.next?.htmlText\"></div>\n        </div> <!-- /.owl-nav -->\n        <div class=\"owl-dots\" [ngClass]=\"{'disabled': dotsData?.disabled}\">\n          <div *ngFor=\"let dot of dotsData?.dots\" class=\"owl-dot\" [ngClass]=\"{'active': dot.active, 'owl-dot-text': dot.showInnerContent}\" (click)=\"moveByDot(dot.id)\">\n            <span [innerHTML]=\"dot.innerContent\"></span>\n          </div>\n        </div> <!-- /.owl-dots -->\n      </ng-container>\n    </div> <!-- /.owl-carousel owl-loaded -->\n  ",
            providers: [
                NavigationService,
                AutoplayService,
                CarouselService,
                LazyLoadService,
                AnimateService,
                AutoHeightService,
                HashService
            ],
            styles: [".owl-theme { display: block; }"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(11, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DOCUMENT))
    ], CarouselComponent);
    return CarouselComponent;
}());

var StageComponent = /** @class */ (function () {
    function StageComponent(zone, el, renderer, carouselService, animateService) {
        var _this = this;
        this.zone = zone;
        this.el = el;
        this.renderer = renderer;
        this.carouselService = carouselService;
        this.animateService = animateService;
        /**
         * Object with data needed for dragging
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null,
            active: false,
            moving: false
        };
        /**
         * Subject for notification when the carousel's rebuilding caused by resize event starts
         */
        this._oneDragMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Passes this to _oneMouseTouchMove();
         */
        this.bindOneMouseTouchMove = function (ev) {
            _this._oneMouseTouchMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */
        this.bindOnDragMove = function (ev) {
            _this._onDragMove(ev);
        };
        /**
         * Passes this to _onDragMove();
         */
        this.bindOnDragEnd = function (ev) {
            // this.zone.run(() => {
            _this._onDragEnd(ev);
            // });
        };
        /**
         * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
         */
        this._oneClickHandler = function () {
            _this.listenerOneClick = _this.renderer.listen(_this._drag.target, 'click', function () { return false; });
            _this.listenerOneClick();
        };
    }
    StageComponent.prototype.onMouseDown = function (event) {
        if (this.owlDraggable.isMouseDragable) {
            this._onDragStart(event);
        }
    };
    StageComponent.prototype.onTouchStart = function (event) {
        if (this.owlDraggable.isTouchDragable) {
            this._onDragStart(event);
        }
    };
    StageComponent.prototype.onTouchCancel = function (event) {
        this._onDragEnd(event);
    };
    StageComponent.prototype.onDragStart = function () {
        if (this.owlDraggable.isMouseDragable) {
            return false;
        }
    };
    StageComponent.prototype.onSelectStart = function () {
        if (this.owlDraggable.isMouseDragable) {
            return false;
        }
    };
    StageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._oneMoveSubsription = this._oneDragMove$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function () {
            _this._sendChanges();
        });
    };
    StageComponent.prototype.ngOnDestroy = function () {
        this._oneMoveSubsription.unsubscribe();
    };
    /**
       * Handles `touchstart` and `mousedown` events.
       * @todo Horizontal swipe threshold as option
       * @todo #261
       * @param event - The event arguments.
       */
    StageComponent.prototype._onDragStart = function (event) {
        var _this = this;
        var stage = null;
        if (event.which === 3) {
            return;
        }
        stage = this._prepareDragging(event);
        this._drag.time = new Date().getTime();
        this._drag.target = event.target;
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this._pointer(event);
        this.listenerMouseUp = this.renderer.listen(document, 'mouseup', this.bindOnDragEnd);
        this.listenerTouchEnd = this.renderer.listen(document, 'touchend', this.bindOnDragEnd);
        this.zone.runOutsideAngular(function () {
            _this.listenerOneMouseMove = _this.renderer.listen(document, 'mousemove', _this.bindOneMouseTouchMove);
            _this.listenerOneTouchMove = _this.renderer.listen(document, 'touchmove', _this.bindOneMouseTouchMove);
        });
    };
    /**
     * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
     * @param event event objech of mouse or touch event
     */
    StageComponent.prototype._oneMouseTouchMove = function (event) {
        var delta = this._difference(this._drag.pointer, this._pointer(event));
        if (this.listenerATag) {
            this.listenerATag();
        }
        if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is('valid')) {
            return;
        }
        if ((Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y)) && this._is('valid')) {
            return;
        }
        this.listenerOneMouseMove();
        this.listenerOneTouchMove();
        this._drag.moving = true;
        this.blockClickAnchorInDragging(event);
        this.listenerMouseMove = this.renderer.listen(document, 'mousemove', this.bindOnDragMove);
        this.listenerTouchMove = this.renderer.listen(document, 'touchmove', this.bindOnDragMove);
        event.preventDefault();
        this._enterDragging();
        this._oneDragMove$.next(event);
        // this._sendChanges();
    };
    /**
     * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
     * @param event event object
     */
    StageComponent.prototype.blockClickAnchorInDragging = function (event) {
        var target = event.target;
        while (target && !(target instanceof HTMLAnchorElement)) {
            target = target.parentElement;
        }
        if (target instanceof HTMLAnchorElement) {
            this.listenerATag = this.renderer.listen(target, 'click', function () { return false; });
        }
    };
    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @param event - The event arguments.
     */
    StageComponent.prototype._onDragMove = function (event) {
        var stage;
        var stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
        if (stageOrExit === false) {
            return;
        }
        stage = stageOrExit;
        event.preventDefault();
        this._drag.stage.current = stage;
        this._animate(stage.x - this._drag.stage.start.x);
    };
    ;
    /**
     * Moves .owl-stage left-right
     * @param coordinate coordinate to be set to .owl-stage
     */
    StageComponent.prototype._animate = function (coordinate) {
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "translate3d(" + coordinate + "px,0px,0px");
        this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', '0s');
    };
    /**
       * Handles the `touchend` and `mouseup` events.
       * @todo #261
       * @todo Threshold for click event
       * @param event - The event arguments.
       */
    StageComponent.prototype._onDragEnd = function (event) {
        this.carouselService.owlDOMData.isGrab = false;
        this.listenerOneMouseMove();
        this.listenerOneTouchMove();
        if (this._drag.moving) {
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transform', "");
            this.renderer.setStyle(this.el.nativeElement.children[0], 'transition', this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1000 + 's');
            this._finishDragging(event);
            this.listenerMouseMove();
            this.listenerTouchMove();
        }
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null,
            active: false,
            moving: false
        };
        // this.carouselService.trigger('dragged');
        this.listenerMouseUp();
        this.listenerTouchEnd();
    };
    ;
    /**
       * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
       * @param event - The event arguments.
       * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
       */
    StageComponent.prototype._prepareDragging = function (event) {
        return this.carouselService.prepareDragging(event);
    };
    /**
     * Finishes dragging
     * @param event object event of 'mouseUp' of 'touchend' events
     */
    StageComponent.prototype._finishDragging = function (event) {
        this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
    };
    /**
       * Gets unified pointer coordinates from event.
       * @param event The `mousedown` or `touchstart` event.
       * @returns Contains `x` and `y` coordinates of current pointer position.
       */
    StageComponent.prototype._pointer = function (event) {
        return this.carouselService.pointer(event);
    };
    /**
       * Gets the difference of two vectors.
       * @param first The first vector.
       * @param second- The second vector.
       * @returns The difference.
       */
    StageComponent.prototype._difference = function (firstC, second) {
        return this.carouselService.difference(firstC, second);
    };
    /**
       * Checks whether the carousel is in a specific state or not.
       * @param specificState The state to check.
       * @returns The flag which indicates if the carousel is busy.
       */
    StageComponent.prototype._is = function (specificState) {
        return this.carouselService.is(specificState);
    };
    /**
    * Enters a state.
    * @param name The state name.
    */
    StageComponent.prototype._enter = function (name) {
        this.carouselService.enter(name);
    };
    /**
       * Sends all data needed for View.
       */
    StageComponent.prototype._sendChanges = function () {
        this.carouselService.sendChanges();
    };
    /**
     * Handler for transitioend event
     */
    StageComponent.prototype.onTransitionEnd = function () {
        this.carouselService.onTransitionEnd();
    };
    /**
       * Enters into a 'dragging' state
       */
    StageComponent.prototype._enterDragging = function () {
        this.carouselService.enterDragging();
    };
    /**
     * Handles the end of 'animationend' event
     * @param id Id of slides
     */
    StageComponent.prototype.clear = function (id) {
        this.animateService.clear(id);
    };
    StageComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: CarouselService },
        { type: AnimateService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StageComponent.prototype, "owlDraggable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StageComponent.prototype, "stageData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StageComponent.prototype, "slidesData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown', ['$event'])
    ], StageComponent.prototype, "onMouseDown", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart', ['$event'])
    ], StageComponent.prototype, "onTouchStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchcancel', ['$event'])
    ], StageComponent.prototype, "onTouchCancel", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart')
    ], StageComponent.prototype, "onDragStart", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('selectstart')
    ], StageComponent.prototype, "onSelectStart", null);
    StageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'owl-stage',
            template: "\n    <div>\n      <div class=\"owl-stage\" [ngStyle]=\"{'width': stageData.width + 'px',\n                                        'transform': stageData.transform,\n                                        'transition': stageData.transition,\n                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',\n                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }\"\n          (transitionend)=\"onTransitionEnd()\">\n        <ng-container *ngFor=\"let slide of slidesData; let i = index\">\n          <div class=\"owl-item\" [ngClass]=\"slide.classes\"\n                                [ngStyle]=\"{'width': slide.width + 'px',\n                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',\n                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',\n                                            'left': slide.left}\"\n                                (animationend)=\"clear(slide.id)\"\n                                [@autoHeight]=\"slide.heightState\">\n            <ng-template *ngIf=\"slide.load\" [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n          </div><!-- /.owl-item -->\n        </ng-container>\n      </div><!-- /.owl-stage -->\n    </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('autoHeight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('nulled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('full => nulled', [
                        // style({height: '*'}),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms 350ms')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('nulled => full', [
                        // style({height: 0}),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])(350)
                    ]),
                ])
            ]
        })
    ], StageComponent);
    return StageComponent;
}());

var OwlRouterLinkDirective = /** @class */ (function () {
    function OwlRouterLinkDirective(router, route, tabIndex, renderer, el) {
        this.router = router;
        this.route = route;
        this.stopLink = false;
        this.commands = [];
        if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
    }
    Object.defineProperty(OwlRouterLinkDirective.prototype, "owlRouterLink", {
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlRouterLinkDirective.prototype, "preserveQueryParams", {
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */
        set: function (value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    OwlRouterLinkDirective.prototype.onClick = function () {
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        if (this.stopLink) {
            return false;
        }
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(OwlRouterLinkDirective.prototype, "urlTree", {
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    OwlRouterLinkDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
    ], OwlRouterLinkDirective.prototype, "onClick", null);
    OwlRouterLinkDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: ':not(a)[owlRouterLink]' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('tabindex'))
    ], OwlRouterLinkDirective);
    return OwlRouterLinkDirective;
}());
/**
 * @description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
var OwlRouterLinkWithHrefDirective = /** @class */ (function () {
    function OwlRouterLinkWithHrefDirective(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.stopLink = false;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", {
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", {
        set: function (value) {
            if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && console && console.warn) {
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    OwlRouterLinkWithHrefDirective.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    OwlRouterLinkWithHrefDirective.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    OwlRouterLinkWithHrefDirective.prototype.onClick = function (button, ctrlKey, metaKey, shiftKey) {
        if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target !== '_self') {
            return true;
        }
        if (this.stopLink) {
            return false;
        }
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    OwlRouterLinkWithHrefDirective.prototype.updateTargetUrlAndHref = function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(OwlRouterLinkWithHrefDirective.prototype, "urlTree", {
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    OwlRouterLinkWithHrefDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.target'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "queryParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "fragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "queryParamsHandling", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "preserveFragment", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "skipLocationChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "replaceUrl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "stopLink", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "href", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "owlRouterLink", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OwlRouterLinkWithHrefDirective.prototype, "preserveQueryParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])
    ], OwlRouterLinkWithHrefDirective.prototype, "onClick", null);
    OwlRouterLinkWithHrefDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'a[owlRouterLink]' })
    ], OwlRouterLinkWithHrefDirective);
    return OwlRouterLinkWithHrefDirective;
}());
function attrBoolValue(s) {
    return s === '' || !!s;
}

var routes = [];
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    CarouselModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
            exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
            providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
        })
    ], CarouselModule);
    return CarouselModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-owl-carousel-o.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [style.display]=\"showHotelDetails ? 'block' : 'none'\" class=\"viewHtl\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" *ngIf=\"selectedHotel\">\n        <div class=\"boxradus_hotel pt-0\">\n            <div class=\"bg-white p8\">\n                <div class=\"container d-flex justify-content-between\">\n                    <div *ngIf=\"selectedHotel.meta_data\">\n                        <h2 class=\"fs22 mb-0\">\n                            {{selectedHotel?.name | titlecase}}\n                            <span class=\"pl-1\">\n                                <ngb-rating [(rate)]=\"selectedHotel.meta_data.rating\" [readonly]=\"readonly\" [max]=5>\n                                    <ng-template let-fill=\"fill\" let-index=\"index\">\n                                        <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 2\">&#9733;</span>\n                                    </ng-template>\n                                </ngb-rating>\n                            </span>\n                        </h2>\n                    </div>\n                    <div class=\"d-flex my-auto backbutton cursor-pointer\" (click)=\"hideHotelDetailsPupup()\">\n                        <i class=\"uparrow icns icon_size_20 trnsfer\"></i>\n                        <span class=\"blue_text fs14 \">Back to Search</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row container filterbox mx-auto bg-white mt-2 pl-0 pr-0\">\n                    <div class=\"col-md-7 col-12 row\">\n                        <div *ngIf=\"selectedHotel?.has_special_deal\" class=\"hotelRibbon\">\n                            <span class=\"hotelRibbon3\">\n                                {{'Has special deal' | translate}}\n                            </span>\n                        </div>\n                        <div class=\"hotel_photo_gallery cursor-pointer\" (click)=\"viewAllImagePopup()\">\n                            <div class=\"firstimg\" *ngIf=\"hotelPics[0]\">\n                                <img [src]='hotelPics[0]' alt=\"\">\n                            </div>\n                            <div class=\"secongimg\" *ngIf=\"hotelPics[1]\">\n                                <img [src]='hotelPics[1]' alt=\"\">\n                            </div>\n                            <div class=\"thirdimg\" *ngIf=\"hotelPics[2]\">\n                                <img [src]='hotelPics[2]' alt=\"\">\n                            </div>\n                            <div class=\"forthimg position-relative\" *ngIf=\"hotelPics[3]\">\n                                <div class=\"allimagesgallery\">\n                                    <i class=\"galleryplusicon icon_size_20 icns\"></i>\n                                    <div class=\"text-white\">View All ({{noOfImages}})</div>\n                                </div>\n                                <img [src]='hotelPics[3]' alt=\"\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-5 col-12 pr-0\">\n                        <div class=\"pt25\">\n                            <div class=\"d-flex justify-content-between p-2 brdr_bottom\">\n                                <div>\n                                    <div class=\"d-inline-flex\">\n                                        <i class=\"colendericon icon_h16_w12 icns\"></i>\n                                        <div class=\"fs13 fw400 pl-1 pr-1\">CHECKIN</div>\n                                        <i class=\"downarrow icon_h16_w12 icns\"></i>\n                                    </div>\n                                    <h6 class=\"fs22 fw400 mb-0\">{{selectedHotel?.check_in_time | date:'mediumDate'}}</h6>\n                                    <p class=\"fs14 fw400 clr52\">{{selectedHotel?.check_in_time | date:'EEEE'}}</p>\n                                </div>\n                                <div class=\"text-center mt-2\">\n                                    <i class=\"icon_size_20 icns nighticon\"></i>\n                                    <h5 class=\"clr52 fs14\">{{noOfDays}} {{'Night(s)' | translate}}</h5>\n                                </div>\n                                <div>\n                                    <div class=\"d-inline-flex\">\n                                        <i class=\"colendericon icon_h16_w12 icns\"></i>\n                                        <div class=\"fs13 fw400 pl-1 pr-1\">CHECKOUT</div>\n                                        <i class=\"downarrow icon_h16_w12 icns\"></i>\n                                    </div>\n                                    <h6 class=\"fs22 fw400 mb-0\">{{selectedHotel?.check_out_time | date:'mediumDate'}}</h6>\n                                    <p class=\"fs14 fw400 clr52\">{{selectedHotel?.check_out_time | date:'EEEE'}}</p>\n                                </div>\n                            </div>\n                            <div class=\"p-2 roomsGuests mt-2\">\n                                <label>{{'ROOMS & GUESTS' | translate}}</label>\n                                <h6 class=\"date\">{{selectedRoomCount}}\n                                    <span>{{'Room' | translate}} </span> {{totalTravellers}}\n                                    <span>{{'Guest' | translate}} </span>\n                                </h6>\n                            </div> \n                            <div class=\"p-2\">\n                                <div class=\"d-inline-flex\">\n                                    <i class=\"locationicon icns icon_size_15\"></i>\n                                    <div class=\"pl-2\">\n                                        <div class=\"fs13 fw400\">{{'ADDRESS' | translate}}</div>\n                                        <div class=\"fs13 clr52\">{{selectedHotel?.meta_data?.address}}</div>\n                                    </div>\n                                </div>\n                                <div >\n                                    <div class=\"mt-2 d-inline-flex\">\n                                        <div *ngIf=\"selectedHotel.meta_data.phone\" class=\"d-inline-flex pr-3\">\n                                            <div class=\"pr-2\"><i class=\"Phoneicon icns icon_size_15\"></i></div>\n                                            <div class=\"fs12 clr52\">{{selectedHotel?.meta_data?.phone}}</div>\n                                        </div>\n                                        <div *ngIf=\"selectedHotel.meta_data.email\" class=\"d-inline-flex\">\n                                            <div class=\"pr-2\"><i class=\"mailicon icns icon_size_15\"></i></div>\n                                            <div class=\"fs12 clr52\">{{selectedHotel?.meta_data?.email}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"hotel-tabs  mt-3 mb-3 container\">\n                <nav id=\"navTab\">\n                    <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                        <a class=\"nav-item nav-link active\" id=\"nav-manage-tab\" data-toggle=\"tab\" href=\"#selectRoom\"\n                            role=\"tab\" aria-selected=\"false\">{{'Room Type' | translate}}</a>\n                        <div class=\"spacer\"></div>\n                        <a class=\"nav-item nav-link\" id=\"nav-package-tab\" data-toggle=\"tab\" href=\"#roomAmenities\"\n                            role=\"tab\" aria-selected=\"false\">{{'More Details' | translate}}</a>\n                        <div class=\"spacer\"></div>\n                        <a class=\"nav-item nav-link\" id=\"nav-package-tab\" data-toggle=\"tab\" href=\"#roomPolicy\"\n                            role=\"tab\" aria-selected=\"false\">{{'Policy' | translate}}</a>\n                    </div>\n                </nav>\n                <div class=\"tab-content p-0 mr-0 ml-0 mb-5\">\n                    <div id=\"selectRoom\" class=\"tab-pane in active\">\n                        <section class=\"roomSelectWrap\">\n                            <div class=\"roomInfoWrap\">\n                                <div class=\"roomInfo-title textright\">{{'Occupancy' | translate}}</div>\n                                <div class=\"roomTypeNPrice-title textright\">{{'Room Type' | translate}}</div>\n                                <div class=\"roomPriceWrap-title textright\">{{'Price' | translate}}</div>\n                                <div *ngIf=\"!isGrouped\">\n                                    <div class=\"item\" *ngFor=\"let item2 of selectedRoomGroups;let i = index \">\n                                        <div class=\"roomInfo textright\">\n                                            <label class=\"room\">\n                                                <i class=\"holidayme hme-hotels2 fa fa-bed\" aria-hidden=\"true\"></i>\n                                                {{'Room' | translate}}&nbsp;{{i+1}}\n                                            </label>\n                                        </div>\n                                        <div class=\"roomTypeNPrice\" *ngFor=\"let room of item2.rooms; let j= index;\">\n                                            <ul class=\"roomType pr0\">\n                                                <li class=\"roomtypeName media\">\n                                                    <div class=\"roomRibbon\" *ngIf=\"room?.has_special_deal\">\n                                                        <span class=\"roomRibbon6\">\n                                                            <p>{{'Special Deal' | translate}}</p>\n                                                            <p>{{room?.deal_description}}</p>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"media-left\"><img class=\"roomImg\"\n                                                            src=\"/assets/images/hotel_bed_thumb.jpeg\" alt=\"\"></div>\n                                                    <div class=\"media-body divAmenities textright pr10\">\n                                                        <strong> <span class=\"pl-0 room_type_sec\">{{room?.name}}</span>\n                                                        </strong>\n                                                        <p class=\"people_count_in_room floatnone\">1 {{'Room for' |\n                                                            translate}} {{room?.adult_number}} {{'Adult(s)' |\n                                                            translate}}</p>\n                                                        <p class=\"pl-1 people_count_in_room floatnone\"\n                                                            *ngIf=\"room.child_number > 0\">& {{room?.child_number}}\n                                                            {{'Child(s)' | translate}}</p>\n\n                                                        <div *ngFor=\"let item of room.board_types\">\n                                                            <span class=\"pl-0 room_type_sec\">{{item?.type}}</span>\n                                                        </div>\n                                                        <div class=\"row col-md-12 p-0 m-0\">\n                                                            <div class=\"pr-1 m-0\"\n                                                                *ngFor=\"let feature of room.features;let v = index;\">\n                                                                <div *ngIf=\"v < 10\">\n                                                                    <p class=\"orange\">{{feature?.name}},</p>\n                                                                </div>\n\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <a class=\"roomview\" (click)=\"showRoomDetailsPopUp(room);\"><i\n                                                            class=\"fa fa-plus\" aria-hidden=\"true\"></i> {{'more' |\n                                                        translate}}</a>\n                                                </li>\n                                                <li class=\"roomRate\"><label><span class=\"pull-left\" id=\"room_radio22\">\n                                                            <input class=\"my_radio\" type=\"radio\" name=\"madeena_{{i}}\"\n                                                                [checked]=\"room.isRoomSelectionChecked\"\n                                                                (click)=\"roomSelectionCheckboxChecked(i,j)\"></span></label>\n                                                    <strong class=\"customTooltip\"><span class=\"roomratePrice \"\n                                                            data-room-price=\"139\"\n                                                            data-room-currency=\"SAR\">{{room?.currency}}\n                                                            {{room?.amount | number:'.2-2'}}\n                                                            <span class=\"customtooltiptext\">\n                                                                <div class=\"container mb-2\">\n                                                                    <p class=\"pt-2 fare_summary_heading textright\">\n                                                                        {{'Fare Summary' | translate}} </p>\n                                                                    <div *ngFor=\"let item of selectedRoomGroups\">\n                                                                        <div *ngFor=\"let room of item.rooms\">\n                                                                            <div class=\"col-md-12 p-0 m-0 row pb-2\"\n                                                                                *ngIf=\"room.insertedRmCount > 0\">\n                                                                                <div class=\"col-md-12 textAlign textright\"\n                                                                                    *ngFor=\"let fare of room.fare_summary\">\n                                                                                    <span>{{fare?.name}} : </span>\n                                                                                    <span>{{fare?.amount}}</span>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <p class=\" pt-2 pr-5 hotel_price_total textright\">\n                                                                        {{'You Pay' | translate}} {{totalRoomPrice |\n                                                                        number:'.2-2'}}</p>\n                                                                </div>\n                                                            </span>\n                                                        </span></strong>\n                                                    <small class=\"nonRefundable\">\n                                                        <span *ngIf=\"room.is_refundable\" class=\"green\">\n                                                            {{room?.is_refundable}}</span>\n                                                    </small>\n                                                </li>\n\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"isGrouped\">\n                                    <div class=\"item\" *ngFor=\"let item2 of selectedRoomGroups;let i = index \">\n                                        <div class=\"roomInfo textright\">\n                                            <label class=\"room\">\n                                                <i class=\"holidayme hme-hotels2 fa fa-bed\" aria-hidden=\"true\"></i>\n                                                {{'ROOM GROUP' | translate}}&nbsp;{{i+1}}\n                                            </label>\n                                        </div>\n                                        <div class=\"roomTypeNPrice\" *ngFor=\"let room of item2.rooms; let j= index;\">\n                                            <ul class=\"roomType pr0\">\n                                                <li class=\"roomtypeName media\">\n                                                    <div class=\"roomRibbon\" *ngIf=\"room?.has_special_deal\">\n                                                        <span class=\"roomRibbon6\">\n                                                            <p>{{'Special Deal' | translate}}</p>\n                                                            <p>{{room?.deal_description}}</p>\n                                                        </span>\n                                                    </div>\n                                                    <div class=\"media-left\"><img class=\"roomImg\"\n                                                            src=\"/assets/images/hotel_bed_thumb.jpeg\" alt=\"\"></div>\n                                                    <div class=\"media-body divAmenities textright pr10\">\n                                                        <strong> <span class=\"pl-0 room_type_sec\">{{room?.name}} x\n                                                                {{room?.available_count}}</span> </strong>\n                                                        <p class=\"people_count_in_room floatnone\"> 1 {{'Room for' |\n                                                            translate}} {{room?.adult_number}} {{'Adult(s)' |\n                                                            translate}}</p>\n                                                        <p class=\"pl-1 people_count_in_room floatnone\"\n                                                            *ngIf=\"room.child_number > 0\">& {{room?.child_number}}\n                                                            {{'Child(s)' | translate}}</p>\n\n                                                        <div *ngFor=\"let item of room.board_types\">\n                                                            <span class=\"pl-0 room_type_sec\">{{item?.type}}</span>\n\n                                                        </div>\n                                                        <div class=\"row col-md-12 p-0 m-0\">\n                                                            <div class=\"pr-1 m-0\"\n                                                                *ngFor=\"let feature of room.features;let v = index;\">\n                                                                <div *ngIf=\"v < 10\">\n                                                                    <p class=\"orange\">\n                                                                        {{feature?.name_icon}},</p>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <a class=\"roomview\" (click)=\"showRoomDetailsPopUp(room)\"><i\n                                                            class=\"fa fa-plus\" aria-hidden=\"true\"></i> {{'more' |\n                                                        translate}}</a>\n                                                </li>\n                                                <li class=\"roomRate\" *ngIf=\"j < 1\">\n                                                    <label><span class=\"pull-left\" id=\"room_radio\">\n                                                            <input class=\"my_radio\" type=\"radio\" name=\"grouped\"\n                                                                (click)=\"isGroupedRadioClicked(i,j)\">\n                                                        </span>\n                                                    </label>\n                                                    <strong class=\"customTooltip\"><span class=\"roomratePrice\"\n                                                            data-room-price=\"139\"\n                                                            data-room-currency=\"SAR\">{{selectedHotel?.currency}}\n                                                            {{room?.insertedAmount}}\n                                                            <span class=\"customtooltiptext\">\n                                                                <div class=\"container mb-2\">\n                                                                    <p class=\"pt-2 fare_summary_heading textright\">\n                                                                        {{'Fare Summary' | translate}} </p>\n                                                                    <div *ngFor=\"let item of selectedRoomGroups\">\n                                                                        <div *ngFor=\"let room of item.rooms\">\n                                                                            <div class=\"col-md-12 p-0 m-0 row pb-2\"\n                                                                                *ngIf=\"room.insertedRmCount > 0\">\n                                                                                <div class=\"col-md-12 textAlign textright\"\n                                                                                    *ngFor=\"let fare of room.fare_summary\">\n                                                                                    <span>{{fare?.name}} : </span>\n                                                                                    <span>{{fare?.amount |\n                                                                                        number:'.2-2'}}</span>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <p class=\" pt-2 pr-5 hotel_price_total textright\">\n                                                                        {{'You Pay' | translate}} {{totalRoomPrice |\n                                                                        number:'.2-2'}}</p>\n                                                                </div>\n                                                            </span>\n                                                        </span></strong>\n                                                    <small class=\"nonRefundable\">\n                                                        <span *ngIf=\"room.is_refundable\" class=\"green\">\n                                                            {{room?.is_refundable}}</span>\n                                                    </small>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <aside class=\"roomPriceWrap\">\n                                <div class=\"roominfo-title textright\">{{'Price for' | translate}} {{selectedRoomCount}}\n                                    {{'Room for' | translate}} {{noOfDays}} nights</div>\n                                <div class=\"stickyPrice\">\n                                    <span class=\"title PriceWrapTitle\">{{selectedRoomCount}} {{'Room Selected' |\n                                        translate}}</span>\n                                    <strong><span class=\"PriceWrapPrice\">{{selectedHotel?.currency }} {{totalRoomPrice |\n                                            number:'.2-2'}} </span></strong>\n                                    <small>{{'Price for' | translate}} {{selectedRoomCount}} {{'Room for' | translate}}\n                                        {{noOfDays}} {{'Nights' | translate}}</small>\n                                    <span class=\"vat\">{{'VAT & Taxes Included' | translate}}</span>\n                                    <button class=\"btn booknow hotel-save\" (click)=\"bookHotel()\"\n                                        [disabled]=\"!makkaSelectActivate\">{{'Select' | translate}}</button>\n                                    <div class=\"detail\">\n                                        <br>\n                                    </div>\n                                </div>\n                            </aside>\n                        </section>\n                    </div>\n                    <div id=\"roomAmenities\" class=\"tab-pane fade \" *ngIf=\"selectedHotel?.meta_data\">\n                        <div class=\"col-md-12 textright p-0\">\n                            <h1 *ngIf=\"selectedHotel?.meta_data?.description\" class=\"amntStyle\">{{'Details' |\n                                translate}}</h1>\n                            <p>{{selectedHotel?.meta_data?.description}}</p>\n\n                            <h1 *ngIf=\"selectedHotel?.extensions?.length > 0\" class=\"amntStyle\">Extensions</h1>\n                            <p *ngFor=\"let extension of selectedHotel?.extensions\">{{extension?.value}}</p>\n\n                            <h1 *ngIf=\"selectedHotel?.meta_data?.remark\" class=\"amntStyle\">{{'Remarks' | translate}}\n                            </h1>\n                            <div style=\"font-size: 12px;\" [innerHTML]=\"selectedHotel?.meta_data?.remark\"></div>\n                        </div>\n                        <div *ngIf=\"selectedHotel?.meta_data.amenities.length == 0\">\n                            {{'No Amenities' | translate}}\n                        </div>\n                        <div *ngIf=\"selectedHotel?.meta_data.amenities.length > 0\" class=\"textright\">\n                            <h1 class=\"amntStyle\">\">{{'Amenities' | translate}}</h1>\n                            <br>\n                            <div class=\"d-flex flex-row\" *ngFor=\"let item of selectedHotel?.meta_data.amenities\"\n                                class=\"amenityborder\">\n                                <p><i class=\"fa fa-star\" aria-hidden=\"true\"></i>{{item?.name}}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div id=\"roomPolicy\" class=\"tab-pane fade \">\n                        <div class=\"inner-policy_div textright\" *ngFor=\"let policy of selectedHotel?.policies\">\n                            <p>{{policy?.description}}</p>\n                        </div>\n                        <div class=\"noDataPresent\"\n                            *ngIf=\"selectedHotel?.policies && selectedHotel?.policies.length == 0\">\n                            {{'No Policies Found'\n                            | translate}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"selectedRoomDetails\">\n    <app-room-details-popup [setViewData]=\"selectedRoomInfo\"></app-room-details-popup>\n</div>\n<div *ngIf=\"roomImageGallery\">\n    <app-hotel-image-popup [imagecollection]=\"hotelPics\"></app-hotel-image-popup>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [style.display]=\"showHotelImages ? 'block' : 'none'\" class=\"viewiHotelmages\"  tabindex=\"-1\" role=\"dialog\"\n        aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"d-flex justify-content-end mtb20\">\n                <div class=\"htlimgpopupclose\" (click)=\"closeHtlImgPopup()\">\n                    <img src=\"assets/images/close.svg\" alt=\"\">\n                </div>\n            </div>\n            \n            <div *ngFor=\"let img of imagecollection; index as i\">\n                <span *ngIf=\"imageshow==i\">\n                    <img [src]=\"img\" class=\"mainimageshow imgmoving\" alt=\"\">\n                </span>\n                \n            </div>\n        </div>\n        <div>\n            \n        </div>\n        <div class=\"positionofbottom\" id=\"galleryImageCollection\">\n            <div>\n                <owl-carousel-o [options]=\"customOptions\">\n\n                    <ng-container *ngFor=\"let slide of imagecollection;index as i\">\n                      <ng-template carouselSlide>\n                        <div class=\"d-flex justify-content-center\">\n                            <img [src]=\"slide\" alt=\"\" [class.borderseslctimg]=\"imageshow==i\"  class=\"listingimages\" alt=\"\" (click)=\"imageshow=i\">\n                        </div>\n                      </ng-template>\n                    </ng-container>\n                \n                </owl-carousel-o>\n            </div>\n        </div>\n        \n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animationdiv minhight100\">\n    <div class=\"bg-white p-2\">\n        <div class=\"container d-flex justify-content-between\">\n            <div class=\"lines shine m-1 width40 wdth100\"></div>\n            <div class=\"lines shine m-1 width40 wdth100\"></div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"filterbox row ml-0 mr-0 mt-3 bg-white\">\n            <div class=\"col-md-7 pl-0 pr-0\">\n                <div class=\"hotel_photo_gallery\">\n                    <div class=\"firstimg \">\n                        <div class=\"shine w-100 h-100\"></div>\n                    </div>\n                    <div class=\"secongimg\">\n                        <div class=\"shine w-100 h-100\"></div>\n                    </div>\n                    <div class=\"thirdimg\">\n                        <div class=\"shine w-100 h-100\"></div>\n                    </div>\n                    <div class=\"forthimg\">\n                        <div class=\"shine w-100 h-100\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"d-flex justify-content-between mt-3\">\n                    <div class=\"w-25\">\n                        <div class=\"w-100 shine lines\"></div>\n                        <div class=\"w-100 shine lines\"></div>\n                        <div class=\"w-100 shine lines\"></div>\n                    </div>\n                    <div class=\"text-center w-25 mt-2\">\n                        <i class=\"icon_size_20 icns nighticon\"></i>\n                        <div class=\"w-100 shine lines\"></div>\n                    </div>\n                    <div class=\"w-25\">\n                        <div class=\"w-100 shine lines\"></div>\n                        <div class=\"w-100 shine lines\"></div>\n                        <div class=\"w-100 shine lines\"></div>\n                    </div>\n                </div>\n                <div class=\"mt-3 w-75\">\n                    <div class=\"w-100 shine lines\"></div>\n                </div>\n                <div class=\"mt-3 w-50\">\n                    <div class=\"w-100 shine lines\"></div>\n                    <div class=\"w-100 shine lines\"></div>\n                    <div class=\"w-100 shine lines\"></div>\n                </div>\n            </div>\n        </div>\n        <div>\n            <div class=\"hotel-tabs  mt-3 mb-3\">\n                <nav id=\"navTab\">\n                    <div class=\"nav nav-tabs nav-fill\" id=\"nav-tab\" role=\"tablist\">\n                        <a class=\"nav-item nav-link active\" id=\"nav-manage-tab\" data-toggle=\"tab\" href=\"#selectRoom\"\n                            role=\"tab\" aria-selected=\"false\">{{'Room Type' | translate}}</a>\n                        <div class=\"spacer\"></div>\n                        <a class=\"nav-item nav-link\" id=\"nav-package-tab\" data-toggle=\"tab\" href=\"#roomAmenities\"\n                            role=\"tab\" aria-selected=\"false\">{{'More Details' | translate}}</a>\n                        <div class=\"spacer\"></div>\n                        <a class=\"nav-item nav-link\" id=\"nav-package-tab\" data-toggle=\"tab\" href=\"#roomPolicy\"\n                            role=\"tab\" aria-selected=\"false\">{{'Policy' | translate}}</a>\n                    </div>\n                </nav>\n                <div class=\"tab-content p-0 mr-0 ml-0 mb-5\">\n                    <div id=\"selectRoom\" class=\"tab-pane in active\">\n                        <div class=\"p-3\">\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                        </div>\n                    </div>\n                    <div id=\"roomAmenities\" class=\"tab-pane fade \">\n                        <div class=\"p-3\">\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                        </div>\n                    </div>\n                    <div id=\"roomPolicy\" class=\"tab-pane fade \">\n                        <div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                            <div class=\"w-100 shine lines\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/loader/loader.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/loader/loader.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animationdiv\">\n    <div class=\"htl-top\">\n        <div class=\"container d-flex justify-content-between pdngcont\">\n            <div class=\"lines shine m-1 width40\"></div>\n            <div class=\"lines shine m-1 width40\"></div>\n        </div>\n    </div>\n    <div class=\"d-flex justify-content-between filter border_box_shadow\">\n        <div class=\"shine lines width20\"></div>\n        <div class=\"shine lines width20\"></div>\n        <div class=\"shine lines width20\"></div>\n        <div class=\"shine lines width20\"></div>\n    </div>\n    <div *ngFor=\"let item of freeArray\">\n        <div  class=\"displyflex box border_box_shadow\">\n            <div class=\"photo m-2 shine wdth100\"></div>\n            <div>\n                <div class=\"lines shine m-1 width40 wdth100\"></div><br>\n                <div class=\"lines shine m-1 width40 wdth100\"></div><br>\n                <div class=\"lines shine m-1 width40 wdth100\"></div><br>\n                <div class=\"lines shine m-1 width40 wdth100\"></div>\n            </div>\n            <div class=\"ml-auto phonenone\">\n                <div class=\"lines shine m-1 width21\"></div><br>\n                <div class=\"lines shine m-1 width21\"></div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animationdiv\">\n    <div class=\"mt140 mb-5\">\n        <div class=\"hotel_filter_section filterbox col-md-12 row mrhntopphone ml-0 mr-0 animationdiv\">\n            <div class=\"col-md-3 p-0 ml-0 mr-0 fliter-arrow my-auto\">\n                <div class=\"\">\n                    <i class=\"fa fa-filter pl-2\" aria-hidden=\"true\"></i>\n                    {{'Filters' | translate}}\n                </div>\n            </div>\n            <div class=\"col-md-3 col-8  my-auto \">\n                <span class=\"pr-2\">{{'Haram Distance' | translate}}</span>\n                <span class=\"fliter-arrow\">\n                    <div *ngIf=\"!isHotelListSortedByHaramDistance\">\n                        <button (click)=\"sortHotelList('asnd',null,'hararamDistance')\"><i class=\"fa fa-angle-down\"></i></button>\n                    </div>\n                    <div *ngIf=\"isHotelListSortedByHaramDistance\">\n                        <button (click)=\"sortHotelList(null,'dsnd','hararamDistance')\"><i\n                                class=\"fa fa-angle-up\"></i></button>\n                    </div>\n                </span>\n            </div>\n            <div class=\"col-md-3  my-auto  col-4\">\n                <span class=\"pr-2\">{{'Price' | translate}}</span>\n                <span class=\"fliter-arrow\">\n                    <div *ngIf=\"!isHotelsSortedByPrice\">\n                        <button (click)=\"sortHotelList('asnd',null,'price')\"><i class=\"fa fa-angle-down\"></i></button>\n                    </div>\n                    <div *ngIf=\"isHotelsSortedByPrice\">\n                        <button (click)=\"sortHotelList(null,'dsnd','price')\"><i class=\"fa fa-angle-up\"></i></button>\n                    </div>\n                </span>\n            </div>\n            <div class=\"col-md-3 text-right pr-0\">\n                <input class=\"haram_filter fs13\" type=\"text\" name=\"search\" autocomplete=\"off\"\n                    placeholder=\"Search By Hotel Name\">\n            </div>\n        </div>\n        <div class=\"padding_hotel1\" *ngFor=\"let item of hotelsList | filterBy: userFilter;let i = index\">\n            <div class=\"uitk-card uitk-grid border_box_shadow\">\n                <div class=\"link-container uitk-grid\">\n                    <div class=\"row w-100 m-0\">\n                        <div class=\"col-md-4 col-12 pr-0 pl-0\">\n                            <section class=\"uitk-cell uitk-card-media\">\n                                <div *ngIf=\"item.has_special_deal\" class=\"hotelRibbon\">\n                                    <span class=\"hotelRibbon3\">\n                                        {{'Has special deal' | translate}}\n                                    </span>\n                                </div>\n                                <header class=\"title\">\n                                    <div class=\"listing-photo-gallery title__media-container\">\n                                        <span>\n                                            <section class=\"uitk-cell uitk-card-media title__media-container\">\n                                                <div class=\"photo-gallery noimghotel\" *ngIf=\"item.image_path\">\n                                                    <img src=\"{{item.image_path}}\" alt=\"\">\n                                                </div>\n                                            </section>\n                                        </span>\n                                    </div>\n                                </header>\n                            </section>\n                        </div>\n                        <div class=\"col-md-8 col-12 pr-0\">\n                            <div class=\"uitk-card-content row\">\n                                <div class=\"result-details-left col-md-8 col-12\">\n                                    <div class=\"d-flex flex-column \">\n                                        <div class=\"d-inline-flex\">\n                                            <div>\n                                                <h3 class=\"hotel_name\" title=\"{{item?.name}}\">{{item?.name | titlecase }}</h3>\n                                            </div>\n                                            <div class=\"pl-1\">\n                                                <ngb-rating [(rate)]=\"item.rating\" [readonly]=\"readonly\" [max]=5>\n                                                    <ng-template let-fill=\"fill\" let-index=\"index\">\n                                                        <span class=\"star\" [class.filled]=\"fill === 100\"\n                                                            [class.bad]=\"index < 2\">&#9733;</span>\n                                                    </ng-template>\n                                                </ngb-rating>\n                                            </div>\n                                        </div>\n                                        <div class=\"d-inline-flex pb5\" *ngIf=\"item.haram_distance\">\n                                            <div class=\"pr-2\"><i class=\"makkahharam icns icon_size_15\"></i></div>\n                                            <div class=\"fs13 clr52 fw400\"><strong class=\"clr01 fs14 fw500\">HARAM</strong> {{item?.haram_distance}} km</div>\n                                        </div>\n                                        <div class=\"d-inline-flex pb5\" *ngIf=\"item.address\">\n                                            <div class=\"pr-2\"><i class=\"locationicon icns icon_size_15\"></i></div>\n                                            <div class=\"fs12 clr52\">{{item?.address}}</div>\n                                        </div>\n                                        <div class=\"d-inline-flex pb5\" >\n                                            <div *ngIf=\"item.phone\" class=\"d-inline-flex pr-3\">\n                                                <div class=\"pr-2\"><i class=\"Phoneicon icns icon_size_15\"></i></div>\n                                                <div class=\"fs12 clr52\">{{item?.phone}}</div>\n                                            </div>\n                                            <div *ngIf=\"item.email\" class=\"d-inline-flex\">\n                                                <div class=\"pr-2\"><i class=\"mailicon icns icon_size_15\"></i></div>\n                                                <div class=\"fs12 clr52\">{{item?.email}}</div>\n                                            </div>\n                                        </div>\n                                        <div *ngIf=\"item.description\">\n                                            <div class=\"pb5 fs13 clr52 desptn divexpandanimation\" id=\"descrptionLess{{i}}\">{{item?.description}}</div>\n                                            <div class=\"readmorenavigate fs13\" id=\"readMoreBttn{{i}}\" (click)=\"readMore($event,i)\">+ Read More</div>\n                                            <div class=\"readmorenavigate fs13 dsplynone\" id=\"readLessBttn{{i}}\" (click)=\"readLess($event,i)\">- Read Less</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"d-flex align-items-end flex-column result-details-right pr-0 col-md-4 col-12\">\n                                    <div class=\"text-center\">\n                                        <h3 class=\"hotel_prise\">{{item?.currency_code}} {{item?.amount | number:'.2-2'}}\n                                        </h3>\n                                        <button class=\"searchbutton pull-right m-0\" id=\"showHotelSelect{{i}}\" \n                                            (click)=\"showHotelDetailsPopUp(item)\">{{'Select Room' | translate}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div [style.display]=\"showDetailsShimmer ? 'block' : 'none'\" class=\"viewHtlShimmer\" tabindex=\"-1\" role=\"dialog\"\n    aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"bg_body w-100\">\n        <app-loader-hotel-popup></app-loader-hotel-popup>\n    </div>\n</div>\n<app-hotel-details-popup (handleNotif)=\"childEvent($event)\" *ngIf = \"showHotelDetails\" [hotelInfo]=\"hotelInfo\" [hotelData]=\"hotelData\"></app-hotel-details-popup>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-12 review_detaiols_div outer-payment-div pl-0 pr-0\" id=\"tripMakkahHotel\" *ngIf=\"tripHotel\">\n    <div class=\"change_button_availability\" id=\"changemakkaHotel\" (click)=\"changemakkaHotel()\">\n        <button type=\"button\">{{'Not available now. Please change' | translate}}</button>\n    </div>\n    <div class=\"top-section  textright\">\n        <div class=\"row\">\n            <h2 class=\"flight-name pl-3\">\n                <span class=\"departure-Section\">{{city}}</span>\n            </h2>\n            <div class=\"ml-auto mr-2 \" id=\"toggleTopBtn1\">\n                <div class=\"arrowPosition\">\n                    <div *ngIf=\"!makka\">\n                        <button (click)=\"toggleMakkaUp()\"><i class=\"fa fa-angle-up\"></i></button>\n                    </div>\n                    <div *ngIf=\"makka\">\n                        <button (click)=\"toggleMakkaDown()\"><i class=\"fa fa-angle-down\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"makka\">\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div style=\"display: flex;\">\n                        <span class=\"hotelName\">{{tripHotel?.hotel?.name}}</span>\n                        <div style=\"padding-left: 10px;\">\n                            <ngb-rating [(rate)]=\"tripMakkahHotelrating\" [readonly]=\"readonly\" [max]=5>\n                                <ng-template let-fill=\"fill\" let-index=\"index\">\n                                    <span class=\"star\" [class.filled]=\"fill === 100\"\n                                        [class.bad]=\"index < 2\">&#9733;</span>\n                                </ng-template>\n                            </ngb-rating>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2 departure refund-txt-color\">\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"departure fare_rule_txt\"><button class=\"policies_bttn\" data-toggle=\"modal\"\n                            [attr.data-target]=\"'#hotelPolicy'+ tripHotel.hotel.id\">{{'Policies'\n                            | translate}} <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></button></div>\n                </div>\n                <div class=\"modal\" id=\"hotelPolicy{{tripHotel.hotel.id}}\">\n                    <div class=\"modal-dialog\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\" style=\"border-bottom: none;padding-bottom: 0px;\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n                            <div class=\"modal-body mb-4\">\n                                <div\n                                    *ngIf=\"tripHotel?.room_variations[0]?.room?.cancellation_policy?.rules.length < 1  && !tripHotel?.cancellation_policy?.description\">\n                                    {{'No Policies Found' | translate}}\n                                </div>\n                                <div *ngIf=\"tripHotel?.hotel?.policies?.length > 0\">\n                                    <h6 class=\"mt-1 ml-3\" style=\"margin-left: 10px;\">\n                                        {{'Policies' | translate}}</h6>\n                                    <div class=\"col-md-12 row m-0 mb-1\">\n                                        <div class=\"col-md-12 pl-0 m-0\"\n                                            *ngFor=\"let item of tripHotel.hotel.policies\">\n                                            <div class=\"col-md-12 p-0   mb-1\">\n                                                <h6>{{item?.policy_type}}</h6>\n                                                <div>\n                                                    <li style=\"font-size: 12px;\" [innerHTML]=\"item?.name\"></li>\n                                                </div>\n                                                <p> {{item?.description}}</p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngFor=\"let item of tripHotel?.room_variations\">\n                                    <div class=\"col-md-12 row m-0 \">\n                                        <div class=\"col-md-12 p-0 m-0 row\">\n                                            <h6 class=\" pt-2\">\n                                                {{item?.room?.cancellation_policy?.title}}\n                                            </h6>\n                                            <p *ngIf=\"!tripHotel?.room_variations[0]?.room?.cancellation_policy?.is_refundable\"\n                                                style=\"color: #d33a2f;padding-left: 10px;padding-top: 10px;\">\n                                                {{'Non Refundable' | translate}} </p>\n                                        </div>\n                                        <div class=\"pb-2 m-0\">\n                                            <p>{{item?.room?.cancellation_policy?.description}}\n                                            </p>\n                                        </div>\n                                        <div class=\"col-md-12 pl-0 m-0\"\n                                            *ngFor=\"let item1 of item.room?.cancellation_policy?.rules;let i = index\">\n                                            <div class=\"col-md-12 p-0  pb-1\">\n                                                <div>\n                                                    <li style=\"font-size: 12px;\" [innerHTML]=\"item1?.description\">\n                                                    </li>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"tripHotel?.cancellation_policy\">\n                                    <div class=\"col-md-12 row m-0 \">\n                                        <div class=\"col-md-12 p-0 m-0 row\">\n                                            <h6 class=\" pt-2\">\n                                                {{tripHotel?.cancellation_policy?.title}}\n                                            </h6>\n                                        </div>\n                                        <div class=\"pb-2 m-0\">\n                                            <p>{{tripHotel?.cancellation_policy?.description}}\n                                            </p>\n                                        </div>\n                                        <div class=\"col-md-12 pl-0 m-0\"\n                                            *ngFor=\"let item1 of tripHotel?.cancellation_policy?.rules;\">\n                                            <div class=\"col-md-12 p-0  pb-1\">\n                                                <div>\n                                                    <li style=\"font-size: 12px;\" [innerHTML]=\"item1?.description\">\n                                                    </li>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2 customTooltip txtAlgn\">\n                    <h2 class=\"current_price htlprz\">\n                        {{tripHotel?.room_variations[0]?.currency}}\n                        {{tripHotel?.prices_summary?.total_price +\n                        tripHotel?.prices_summary?.gds_fee +\n                        tripHotel?.prices_summary?.ota_fee | number:'.2-2'}}</h2>\n                    <span class=\"customtooltiptext\">\n                        <div class=\"container mb-2\">\n                            <p class=\"pt-2 fare_summary_heading\"> {{'Fare Summary' |\n                                translate}}</p>\n                            <div class=\"col-md-12 p-0 m-0 row pb-2\">\n                                <div class=\"col-md-12 textAlign \">\n                                    <span>{{'GDS Fee' | translate}} :\n                                        {{tripHotel?.prices_summary?.gds_fee}}</span><br>\n                                    <span>{{'OTA Fee' | translate}} :\n                                        {{tripHotel?.prices_summary?.ota_fee}}</span>\n                                </div>\n                            </div>\n                            <p class=\" pt-2 pr-5 hotel_price_total\">{{'You Pay' |\n                                translate}} {{tripHotel?.prices_summary?.total_price}}\n                            </p>\n                        </div>\n                    </span>\n                </div>\n                <div class=\"col-md-1\" id=\"normalMakkaToggleBtn\">\n                    <div class=\"arrowPosition\">\n                        <div *ngIf=\"!makkaHtl\">\n                            <button (click)=\"makkaHtl=!makkaHtl\"><i class=\"fa fa-angle-up\"></i></button>\n                        </div>\n                        <div *ngIf=\"makkaHtl\">\n                            <button (click)=\"makkaHtl=!makkaHtl\"><i class=\"fa fa-angle-down\"></i></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"!makkaHtl\">\n                <div class=\"row col-md-12 pl-0 pr-0 m-0 pt-2 pb-2 content-section textright\" *ngIf=\"tripHotel\">\n                    <div class=\"col-md-3\">\n                        <img class=\"hotelimageriview\" src=\"{{tripHotel?.hotel?.images[0]?.image_url}}\" alt=\"\">\n                    </div>\n                    <div class=\"col-md-9\">\n                        <div class=\"row detail_review\">\n                            <div class=\"col-md-4 pb-3\">\n                                <p><strong>{{'Check In' | translate}} : </strong>\n                                    {{tripHotel?.check_in_time | date: 'short'}}</p>\n                            </div>\n                            <div class=\"col-md-4 pb-3\">\n                                <p><strong>{{'Check Out' | translate}} : </strong>\n                                    {{tripHotel?.check_out_time | date: 'short'}}</p>\n                            </div>\n                            <div class=\"col-md-4 pb-3\">\n                                <p><strong>{{'Phone Number' | translate}} : </strong>\n                                    {{tripHotel?.hotel?.phone_number}}</p>\n                            </div>\n                            <div class=\"col-md-4 pb-3\">\n                                <p><strong>{{'Email' | translate}} : </strong>\n                                    {{tripHotel?.hotel?.email}}</p>\n                            </div>\n                            <div class=\"col-md-4 pb-3\">\n                                <p><strong>{{'Total Room' | translate}} : </strong>\n                                    {{tripHotel?.room_variations.length}}</p>\n                            </div>\n                            <div class=\"col-md-4 pb-3\">\n                                <p><strong>{{'Haram Distance' | translate}} : </strong>\n                                    {{tripHotel?.hotel?.distance}} KM</p>\n                            </div>\n                            <div class=\"col-md-12 pb-3\">\n                                <p><strong>{{'Address' | translate}} :\n                                    </strong>{{tripHotel?.hotel?.address}} </p>\n                            </div>\n                            <div class=\"col-md-12 pb-3\">\n                                <p>{{tripHotel?.free_cancellation_time}} </p>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row col-md-12 pl-0 pr-0 m-0 pt-2 w-100 content-section\">\n                    <div class=\"col-md-12 \">\n                        <ul class=\"pLeft listStyle\">\n                            <li class=\"pb-1\" *ngFor=\"let room of tripHotel?.room_variations\">\n                                <div class=\" algn justify-content-between roomtype\">\n                                    <div class=\"normaltext\">{{room?.title}}</div>\n                                    <div class=\"departure refund-txt-color\" *ngIf=\"room.room.is_refundable\">\n                                        {{room?.room?.is_refundable}}\n                                    </div>\n\n                                    <div><strong>{{room?.max_guests}}</strong> {{'GUESTS' |\n                                        translate}}</div>\n                                    <div class=\"normaltext\" style=\"padding-right: 150px;\">\n                                        {{room?.currency}} {{room?.room?.amount}}</div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [style.display]=\"selectedRoomDetails ? 'block' : 'none'\" class=\"modal\" id=\"roomDetailsPopup\" tabindex=\"-1\"\n    role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"popupmoving container mt135\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{setViewData?.name | titlecase}}</h5>\n                <button type=\"button\" class=\"close m0p0\" (click)=\"hideRoomDetailsPopUp()\">\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-12\">\n                        <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                            <ol class=\"carousel-indicators\">\n                                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                            </ol>\n                            <ngb-carousel #carousel [interval]=\"1000\">\n                                <ng-template ngbSlide *ngFor=\"let img of selectedHotel?.meta_data?.images; index as i\">\n                                    <a href=\"\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">\n                                        <div class=\"picsum-img-wrapper\">\n                                            <img [src]=\"img.image_url\" alt=\"My image {{i + 1}} description\">\n                                        </div>\n                                    </a>\n                                </ng-template>\n                            </ngb-carousel>\n                            <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\"\n                                data-slide=\"prev\">\n                                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                <span class=\"sr-only\">{{'Previous' | translate}}</span>\n                            </a>\n                            <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\"\n                                data-slide=\"next\">\n                                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                <span class=\"sr-only\">{{'Next' | translate}}</span>\n                            </a>\n                        </div>\n                    </div>\n                    <div *ngIf=\"setViewData\" class=\"textright pr10\">\n                        <div class=\"col-12\">\n                            <h4>{{selectedHotel?.currency}} {{setViewData?.amount}}</h4>\n                        </div>\n                        <h6 style=\"padding-top: 10px; padding-left: 15px;\">{{'Includes' | translate}}</h6>\n                        <div class=\"col-12 row\" *ngIf=\"setViewData?.features &&  setViewData.features?.length\">\n                            <div class=\"col-3\" style=\"list-style-type: square;\"\n                                *ngFor=\"let item of setViewData.features\">\n                                <span>{{item?.name}},</span>\n                            </div>\n                        </div>\n                    </div>\n                    <p class=\"col-md-12 textright pr10\">{{setViewData?.description}}</p>\n                    <div class=\"col-md-12 textright pr10\" style=\"font-size: 12px;\" [innerHTML]=\"setViewData?.details\">\n                    </div>\n                    <p *ngFor=\"let extension of setViewData?.extensions\" class=\"textright pr10\">\n                        {{extension?.value}}\n                    </p>\n                    <div *ngFor=\"let group of selectedHotel?.room_groups\">\n                        <p class=\"col-md-12 textright pr10\" *ngFor=\"let extension of group.extensions\">\n                            {{extension?.value}}\n                        </p>\n                    </div>\n                    <div *ngIf=\"setViewData?.cancellation_policy\">\n                        <div class=\"col-md-12 row m-0 textright pr10\">\n                            <div class=\"col-md-12 p-0 m-0 row\">\n                                <h6 class=\" pt-2\">{{setViewData?.cancellation_policy?.title}}</h6>\n                                <p *ngIf=\"!setViewData?.cancellation_policy?.is_refundable\"\n                                    style=\"color: #d33a2f;padding-left: 10px;padding-top: 10px;\">{{'Non Refundable' |\n                                    translate}} </p>\n                            </div>\n                            <div class=\"pb-2 m-0\">\n                                <p>{{setViewData?.cancellation_policy?.description}}</p>\n                            </div>\n                            <div class=\"col-md-12 pl-0 m-0\"\n                                *ngFor=\"let item of setViewData.cancellation_policy.rules;let i = index\">\n                                <div class=\"col-md-12 p-0  pb-1\">\n                                    <div>\n                                        <li style=\"font-size: 12px;\" [innerHTML]=\"item?.description\"></li>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/transport/transport.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/transport/transport.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\n    <div class=\"col-md-12 pt-4\" *ngFor=\"let item of transportList;let i = index\">\n       <div class=\"slideItem\" *ngIf=\"item.vehicle_types.length > 0\">\n          <div class=\"makeFlex column itemCard soCardHeight pb-2\">\n             <div class=\"makeFlex cardInnerInfo\">\n                <div\n                   class=\"itemThumb makeFlex column hrtlCenter appendRight20 mb-0\">\n                   <div class=\"itemImgWrap makeRelative\" *ngIf=\"!item.image\">\n                      <img src=\"/assets/images/no_image.jpg\">\n                   </div>\n                   <div class=\"itemImgWrap makeRelative\" *ngIf=\"item.image\">\n                      <img src=\"{{item.image}}\">\n                   </div>\n                </div>\n                <div class=\"itemDesc latoBlack\">\n                   <div class=\"col-md-12 pr-0 m-0 pl-0\"\n                      style=\"display: inline-block;\">\n                      <div class=\"pull-left mb-3\">\n                         <p class=\"blackText font18 lineHeight22 mb-1\"\n                            *ngFor=\"let code of companyList\"\n                            style=\"font-weight: 500;\">\n                            <span *ngIf=\"code.item_id == item.company_code\">\n                            {{code?.item_text}}\n                            </span>\n                         </p>\n                         <span class=\"redBdr appendBottom10\"></span>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-md-12 pl-0 pr-0\"\n                *ngFor=\"let vehicle of item.vehicle_types; let index = index\">\n                <div\n                   class=\"row col-md-12 pr-0 m-0 pl-2 pt-2 pb-2 mt-2 transport-card-container\">\n                   <div class=\"col-md-4 pl-0 cover-img-vehicle\"\n                      *ngIf=\"!vehicle.image\">\n                      <img src=\"/assets/images/no_image.jpg\">\n                   </div>\n                   <div class=\"col-md-4 pl-0 cover-img-vehicle\"\n                      *ngIf=\"vehicle.image\">\n                      <img src=\"{{vehicle.image}}\">\n                   </div>\n                   <div\n                      class=\"row col-md-8 pl-2 pr-2 pb-3 pt-2  mr-0 ml-0 textright\">\n                      <div class=\"col-md-4 pl-0 \">\n                         <div class=\"row mt-2 pl-2\">\n                            <p class=\"trnprt-value-text font16 bold\"\n                               *ngIf=\"vehicle.vehicle_type_code[0] == '1'\">\n                               {{'Sedan Car' | translate }}\n                            </p>\n                            <p class=\"trnprt-value-text font16 bold\"\n                               *ngIf=\"vehicle.vehicle_type_code[0] == '2'\">\n                               {{'SUV Car' | translate}}\n                            </p>\n                            <p class=\"trnprt-value-text font16 bold\"\n                               *ngIf=\"vehicle.vehicle_type_code[0] == '3'\">\n                               {{'Bus' | translate}}\n                            </p>\n                         </div>\n                         <div class=\"row mt-2 pl-1 categoryStar\">\n                            <span *ngFor=\"let a of dropdownList\"><span\n                               class=\"trnprt-value-text vip\"\n                               *ngIf=\"vehicle.categories[0].category_code == a.item_id\"><i\n                               class=\"fa fa-star\"\n                               aria-hidden=\"true\"></i>\n                            {{a?.item_text}}</span></span>\n                         </div>\n                         <div class=\"row mt-1 pl-1\">\n                            <i class=\"fas fa-couch trnprt-icon\"></i>\n                            <p class=\"trnprt-value-text\">\n                               {{vehicle?.categories[0]?.capacity}} {{'Seater' |\n                               translate}}(s)\n                            </p>\n                         </div>\n                         <div class=\"row mt-1 pl-1\">\n                            <i class=\"fa fa-car car-icon\"\n                               aria-hidden=\"true\"></i>\n                            <p class=\"trnprt-value-text\">{{'Booked Vehicle' |\n                               translate}} ({{vehicle?.vehicleCapacityCount}})\n                            </p>\n                         </div>\n                         <div class=\"row mt-1 pl-1 hidden\">\n                            <i id=\"bag-icon\"\n                               class=\"fas fa-suitcase-rolling trnprt-icon\"></i>\n                            <p class=\"trnprt-value-text\">4\n                               {{'Bag(s)' | translate}}\n                            </p>\n                         </div>\n                         <div class=\"modal\" id=\"moreInfoPopup{{i}}{{index}}\">\n                            <div class=\"modal-dialog\">\n                               <div class=\"modal-content w85\">\n                                  <div class=\"modal-header\">\n                                     <h4 class=\"modal-title\">{{'More Info' |\n                                        translate}}\n                                     </h4>\n                                     <button type=\"button\" class=\"close m0p0\"\n                                        data-dismiss=\"modal\">&times;</button>\n                                  </div>\n                                  <div class=\"modal-body mb-4 p0\">\n                                     <nav id=\"navTab\">\n                                        <div class=\"nav nav-tabs nav-fill\"\n                                           id=\"nav-tab\" role=\"tablist\">\n                                           <a class=\"nav-item nav-link active\"\n                                              id=\"nav-manage-tab\"\n                                              data-toggle=\"tab\"\n                                              href=\"#Companyinfo{{i}}{{index}}\"\n                                              role=\"tab\"\n                                              aria-selected=\"false\">{{'Company\n                                           Info' | translate}}</a>\n                                           <div class=\"spacer\"></div>\n                                           <a class=\"nav-item nav-link\"\n                                              id=\"nav-manage-tab\"\n                                              data-toggle=\"tab\"\n                                              href=\"#termsandcondition_{{i}}{{index}}\"\n                                              role=\"tab\"\n                                              aria-selected=\"false\">{{'Terms\n                                           & Condition' |\n                                           translate}}</a>\n                                           <div class=\"spacer\"></div>\n                                           <a class=\"nav-item nav-link\"\n                                              id=\"nav-package-tab\"\n                                              data-toggle=\"tab\"\n                                              href=\"#cancellationTab_{{i}}{{index}}\"\n                                              role=\"tab\"\n                                              aria-selected=\"false\">{{'Cancellation\n                                           Policy' | translate}}</a>\n                                           <div class=\"spacer\"></div>\n                                           <a class=\"nav-item nav-link\"\n                                              id=\"nav-package-tab\"\n                                              data-toggle=\"tab\"\n                                              href=\"#policyTab_{{i}}{{index}}\"\n                                              role=\"tab\"\n                                              aria-selected=\"false\">{{'Policy'\n                                           | translate}}</a>\n                                        </div>\n                                     </nav>\n                                     <div class=\"tab-content p-0 mr-0 ml-0 \">\n                                        <div id=\"Companyinfo{{i}}{{index}}\"\n                                           class=\"tab-pane in active\">\n                                           <div class=\"container p-3\">\n                                              <div\n                                                 *ngFor=\"let company of companylistall\">\n                                                 <div\n                                                    *ngIf=\"company.code == item.company_code\">\n                                                    <table\n                                                       class=\"table table-striped textright\">\n                                                       <tbody>\n                                                          <tr>\n                                                             <td>{{'Name'\n                                                                |\n                                                                translate}}\n                                                             </td>\n                                                             <td>:\n                                                             </td>\n                                                             <td>{{company?.name}}\n                                                             </td>\n                                                          </tr>\n                                                          <tr>\n                                                             <td>{{'Description'\n                                                                |\n                                                                translate}}\n                                                             </td>\n                                                             <td>:\n                                                             </td>\n                                                             <td>{{company?.description}}\n                                                             </td>\n                                                          </tr>\n                                                          <tr>\n                                                             <td>{{'Address'\n                                                                |\n                                                                translate}}\n                                                             </td>\n                                                             <td>:\n                                                             </td>\n                                                             <td>{{company?.address}}\n                                                             </td>\n                                                          </tr>\n                                                          <tr>\n                                                             <td>{{'Phone\n                                                                Number'\n                                                                |\n                                                                translate\n                                                                }}\n                                                             </td>\n                                                             <td>:\n                                                             </td>\n                                                             <td>{{company?.phone_number}}\n                                                             </td>\n                                                          </tr>\n                                                          <tr>\n                                                             <td>{{'Email'\n                                                                |\n                                                                translate}}\n                                                             </td>\n                                                             <td>:\n                                                             </td>\n                                                             <td>{{company?.email}}\n                                                             </td>\n                                                          </tr>\n                                                          <tr>\n                                                             <td>{{'City'\n                                                                |\n                                                                translate}}\n                                                             </td>\n                                                             <td>:\n                                                             </td>\n                                                             <td>{{company?.city}}\n                                                             </td>\n                                                          </tr>\n                                                       </tbody>\n                                                    </table>\n                                                 </div>\n                                              </div>\n                                           </div>\n                                        </div>\n                                        <div id=\"termsandcondition_{{i}}{{index}}\"\n                                           class=\"tab-pane fade mt-2 container p-3\">\n                                           <div class=\"container\">\n                                              <p\n                                                 *ngIf=\"vehicle.terms_and_conditions\">\n                                                 {{vehicle?.terms_and_conditions}}\n                                              </p>\n                                              <p\n                                                 *ngIf=\"item.terms_and_conditions\">\n                                                 {{item?.terms_and_conditions}}\n                                              </p>\n                                              <p\n                                                 *ngIf=\"item.terms_and_conditions &&  vehicle.terms_and_conditions\">\n                                                 {{'No Terms and\n                                                 Condition Found' |\n                                                 translate}}\n                                              </p>\n                                           </div>\n                                        </div>\n                                        <div class=\"container p-3 \"\n                                           id=\"cancellationTab_{{i}}{{index}}\"\n                                           class=\"tab-pane fade mt-2\">\n                                           <div class=\"container\">\n                                              <div\n                                                 *ngIf=\" item?.cancellation_policy\">\n                                                 <div\n                                                    class=\"col-md-12 row m-0 \">\n                                                    <div\n                                                       class=\"col-md-12 p-0 m-0 row\">\n                                                       <h6\n                                                          class=\" pt-2\">\n                                                          {{item?.cancellation_policy?.title}}\n                                                       </h6>\n                                                       <p *ngIf=\"!item?.cancellation_policy?.is_refundable\"\n                                                          style=\"color: #d33a2f;padding-left: 10px;padding-top: 10px;\">\n                                                          {{'Non\n                                                          Refundable'\n                                                          |\n                                                          translate}}\n                                                       </p>\n                                                    </div>\n                                                    <div\n                                                       class=\"pb-2 m-0\">\n                                                       <p>{{item?.cancellation_policy?.description}}\n                                                       </p>\n                                                    </div>\n                                                    <div class=\"col-md-12 pl-0 m-0\"\n                                                       *ngFor=\"let item1 of item.cancellation_policy.rules;let i = index\">\n                                                       <div\n                                                          class=\"col-md-12 p-0  pb-1\">\n                                                          <div>\n                                                             <li style=\"font-size: 12px;\"\n                                                                [innerHTML]=\"item1?.description\">\n                                                             </li>\n                                                          </div>\n                                                       </div>\n                                                    </div>\n                                                 </div>\n                                              </div>\n                                              <p\n                                                 *ngIf=\"!item.cancellation_policy.description\">\n                                                 {{'No Cancellation\n                                                 Policy Found' |\n                                                 translate}}\n                                              </p>\n                                           </div>\n                                        </div>\n                                        <div class=\"container p-3 \"\n                                           id=\"policyTab_{{i}}{{index}}\"\n                                           class=\"tab-pane fade mt-2\">\n                                           <div class=\"container\">\n                                              <div *ngFor=\"let policy of item.policies\"\n                                                 class=\"col-md-6 cancellationBox textright\">\n                                                 <h6>\n                                                    {{policy?.name}}\n                                                 </h6>\n                                                 <ul\n                                                    style=\"list-style-type: circle;\">\n                                                    <li\n                                                       *ngIf=\"policy.policy_type\">\n                                                       {{'Policy Type'\n                                                       | translate}} :\n                                                       {{policy?.policy_type}}\n                                                    </li>\n                                                    <li\n                                                       *ngIf=\"policy.description\">\n                                                       {{'Description'\n                                                       | translate}} :\n                                                       {{policy?.description}}\n                                                    </li>\n                                                    <li\n                                                       *ngIf=\"policy.policy_charge_value\">\n                                                       {{'Policy harge'\n                                                       | translate}} :\n                                                       {{policy?.policy_charge_value}}\n                                                       {{policy?.policy_charge_type}}\n                                                    </li>\n                                                    <li\n                                                       *ngIf=\"policy.policy_name\">\n                                                       {{'Policy Name'\n                                                       | translate}} :\n                                                       {{policy?.policy_name}}\n                                                    </li>\n                                                 </ul>\n                                              </div>\n                                              <p\n                                                 *ngIf=\"item.policies.length == 0\">\n                                                 {{'No Policies Found' |\n                                                 translate}}\n                                              </p>\n                                           </div>\n                                        </div>\n                                     </div>\n                                  </div>\n                               </div>\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"col-md-3 second-row-txt\">\n                         <p class=\"black-small-text\">{{'Pax Count' | translate}}:\n                            {{vehicle?.vehiclePaxCount}}\n                         </p>\n                         <p class=\"black-small-text mt-1\">{{'Model' |\n                            translate}}: {{vehicle?.categories[0]?.model}}\n                         </p>\n                         <p class=\"black-small-text mt-1 hidden\">Complete Ac ,\n                            Push back seates etc\n                         </p>\n                      </div>\n                      <div class=\"col-md-5\">\n                         <div class=\"row d-flex justify-content-end\">\n                            <p id=\"trnsprt-price\" class=\"customTooltip\">\n                               {{vehicle?.categories[0]?.fare_summary[2]?.currency}}\n                               {{(vehicle?.categories[0]?.fare_summary[2]?.amount\n                               + vehicle?.transport_amount) | number:'1.2-2'}}\n                               <span class=\"customtooltiptext\">\n                            <div class=\"container mb-2\">\n                            <p\n                               class=\"pt-2 fare_summary_heading  textright\">\n                            {{'Fare Summary' | translate}} </p>\n                            <div>\n                            <div>\n                            <div\n                               class=\"col-md-12 p-0 m-0 row pb-2 \">\n                            <div class=\"col-md-12 textAlign textright\"\n                               *ngFor=\"let price of vehicle.categories[0].fare_summary\">\n                            <span>{{price?.name}} :\n                            </span><span>{{price?.currency}}\n                            {{price?.amount |\n                            number:'.2-2'}}</span>\n                            </div>\n                            </div>\n                            </div>\n                            </div>\n                            </div>\n                            </span>\n                            </p>\n                         </div>\n                         <div class=\"row d-flex justify-content-end\">\n                            <p style=\"font-size: 10px;color:#113554;\">({{'Per\n                               Vehicle' | translate}})\n                            </p>\n                         </div>\n                         <div class=\"col-md-12 pl-0 pr-0 mt-3 \">\n                            <div\n                               class=\"row d-flex justify-content-end pr-0 mt-3\">\n                               <div class=\"pull-right\"\n                                  *ngIf=\"vehicle.categories[0].out_of_stock\">\n                                  <button class=\"book-tansport-bttn\"\n                                     style=\"background-color: darkgray;\"\n                                     type=\"button\">{{'BOOK' |\n                                  translate}}</button>\n                                  <p\n                                     style=\"font-size: 17px;color: red;font-weight: bold;padding-top: 5px;\">\n                                     {{'Out Of Stock' | translate}}\n                                  </p>\n                               </div>\n                               <div class=\"pull-right\"\n                                  *ngIf=\"!vehicle.categories[0].out_of_stock\">\n                                  <button class=\"book-tansport-bttn\"\n                                     (click)=\"bookTransport(item.company_code,item.vehicle_types[index])\"\n                                     type=\"button\">{{'BOOK' |\n                                  translate}}</button>\n                               </div>\n                            </div>\n                         </div>\n                      </div>\n                      <div class=\"col-md-12 row m-0 second-row-txt pl-1\">\n                         <div class=\"col-md-12 pl-0\"\n                            *ngIf=\"vehicle.categories[0].additional_services.length > 0\">\n                            <p class=\"black-small-text additional-service-text\">\n                               {{'Additional Services' | translate}}\n                            </p>\n                         </div>\n                         <section\n                            class=\"col-md-4 pl-0 example-section additional_service_section\"\n                            *ngFor=\"let service of vehicle.categories[0].additional_services;let serviceIndex=index\">\n                            <span>\n                               <mat-checkbox\n                                  value=\"{{service.fare_summary[2].amount}}\"\n                                  (change)=\"addServiceAmout(i,service.fare_summary[2].amount,$event,index,service)\"\n                                  class=\"example-margin serviceSelect\"><span\n                                  *ngFor=\"let a of data\"><span\n                                  *ngIf=\"service.additional_service_code == a.item_id\">{{a?.item_text}}</span></span>\n                                  - {{service?.fare_summary[2]?.currency}}\n                                  {{service?.fare_summary[2]?.amount}}\n                               </mat-checkbox>\n                            </span>\n                            <span class=\"mt-1 ml-1\" data-toggle=\"modal\"\n                               [attr.data-target]=\"'#additionalServicePopup'+i+index+serviceIndex\">\n                            <img class=\"info_img\"\n                               src=\"/assets/images/ic_info.svg\" alt=\"\">\n                            </span>\n                            <div class=\"modal\"\n                               id=\"additionalServicePopup{{i}}{{index}}{{serviceIndex}}\">\n                               <div class=\"modal-dialog\">\n                                  <div class=\"modal-content\">\n                                     <div class=\"modal-header\">\n                                        <h4 class=\"modal-title\"><span\n                                           *ngFor=\"let a of data\"><span\n                                           *ngIf=\"service.additional_service_code == a.item_id\">{{a?.item_text}}</span></span>\n                                        </h4>\n                                        <button type=\"button\" class=\"close\"\n                                           data-dismiss=\"modal\">&times;</button>\n                                     </div>\n                                     <div class=\"modal-body mb-4\">\n                                        <p> {{service?.description}}</p>\n                                        <p\n                                           class=\"mt-3 mb-2 font16 additional-service-text\">\n                                           {{'Price' | translate}}\n                                        </p>\n                                        <p *ngFor=\"let price of service.fare_summary\"\n                                           class=\"additional-service-text\">\n                                           {{price?.name}} :\n                                           {{price?.currency}}\n                                           {{price?.amount | number:'.2-2'}}\n                                        </p>\n                                     </div>\n                                  </div>\n                               </div>\n                            </div>\n                         </section>\n                         <div class=\"col-md-12 row m-0 pl-0 pr-0\">\n                            <div\n                               class=\"row d-flex justify-content-start mt-3 tandctext col-md-6 col-6 ml-0 pl-0 pr-0\">\n                               <p class=\"darkGreyText font10 more-info-bttn\"\n                                  style=\"cursor: default;\"> {{'T&C Apply' |\n                                  translate}}\n                               </p>\n                            </div>\n                            <div\n                               class=\"row d-flex justify-content-end mt-3 tandctext col-md-6 col-6 ml-0 pl-0 pr-0\">\n                               <p class=\"darkGreyText font10 more-info-bttn\"\n                                  data-toggle=\"modal\"\n                                  [attr.data-target]=\"'#moreInfoPopup'+ i + index\">\n                                  {{'More Info' | translate}}\n                               </p>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"makeFlex hrtlCenter mt-2\">\n                <span class=\"darkGreyText font10 tcApplyText appendRight20\"> {{'T&C\n                Apply' | translate}} </span>\n             </div>\n          </div>\n       </div>\n    </div>\n </div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/create-trip.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/create-trip.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid topofcomponent position-relative pl-0 pr-0\" id=\"subAgencyCreateTrip\">\n    <div class=\"bgbluestepper\"></div>\n    <div class=\"progressbar\" *ngIf=\"showShimmer\">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n    <div class=\"container\">\n        <div>\n            <mat-horizontal-stepper #stepper>\n                <mat-step label=\"{{'Makkah Hotel' | translate}}\" *ngIf=\"steps.includes('1')\" state=\"apartment\">\n                    <div *ngIf=\"showShimmer\"><app-loader></app-loader></div>\n                    <div *ngIf=\"hotelsList && hotelsList.length > 0\">\n                        <div class=\"headerdiv\">\n                            <div class=\"container d-flex justify-content-between\">\n                                <div class=\"pl4\">\n                                    <h3 class=\"fs22 mb-0\">Hotels in Makkah</h3>\n                                    <p class=\"blue_text\">\n                                        <span class=\"clr52\">No of Days In Makkah </span> {{noOfDaysInMakkah}}\n                                        <span class=\"crossbarsamll phonehide\"></span>\n                                        <span class=\"phonehide\"><span class=\"clr52 \">No of Guest </span>{{travellersCount}}</span>\n                                        <span class=\"crossbarsamll phonehide \"></span>\n                                        <span class=\"phonehide\"><span class=\"clr52 \">Start </span>{{makkahCheckInDate | date:'MMM-dd'}}</span>\n                                        <span class=\"phonehide ml-2\"><span class=\"clr52 \">End </span>{{makkahCheckOutDate | date:'MMM-dd'}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"d-flex my-auto backbutton cursor-pointer\" (click)=\"backToHomePage();\">\n                                    <i class=\"uparrow icns icon_size_20 trnsfer\"></i>\n                                    <span class=\"blue_text fs14 phonehide\">Back to Home Page</span>\n                                </div>\n                            </div>\n                        </div>\n                        <app-makka-hotel (notifyGrandparent)=\"createTripHandle(event)\" [hotelsList]=\"hotelsList\"></app-makka-hotel>\n                     </div>\n                </mat-step>\n                <mat-step label=\"{{'Madeena Hotel' | translate}}\" *ngIf=\"steps.includes('2')\" state=\"apartment\">\n                    <div *ngIf=\"showShimmer\"><app-loader></app-loader></div>\n                    <div *ngIf=\"hotelsList && hotelsList.length > 0\">\n                        <div class=\"headerdiv\">\n                            <div class=\"container d-flex justify-content-between\">\n                                <div class=\"pl4\">\n                                    <h3 class=\"fs22 mb-0\">Hotels in Madinah</h3>\n                                    <p class=\"blue_text\">\n                                        <span class=\"clr52\">No of Days In Madinah </span>{{noOfDaysInMadeena}}\n                                        <span class=\"crossbarsamll phonehide\"></span>\n                                        <span class=\"phonehide\"><span class=\"clr52 \">No of Guest </span>{{travellersCount}}</span>\n                                        <span class=\"crossbarsamll phonehide \"></span>\n                                        <span class=\"phonehide\"><span class=\"clr52 \">Start </span>{{madeenaCheckInDate | date:'MMM-dd'}}</span>\n                                        <span class=\"phonehide ml-2\"><span class=\"clr52 \">End </span>{{madeenaCheckOutDate | date:'MMM-dd'}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"d-flex my-auto backbutton cursor-pointer\" (click)=\"backToHomePage();\">\n                                    <i class=\"uparrow icns icon_size_20 trnsfer\"></i>\n                                    <span class=\"blue_text fs14 phonehide\">Back to Home Page</span>\n                                </div>\n                            </div>\n                        </div>\n                        <app-makka-hotel (notifyGrandparent)=\"createTripHandle(event)\" [hotelsList]=\"hotelsList\"></app-makka-hotel>\n                     </div>\n                </mat-step>\n                <mat-step label=\"{{'Transport' | translate}}\" *ngIf=\"steps.includes('3')\" state=\"directions_bus\">\n                    <div class=\"pr-0 pl-0 pt-1 mt80\">\n                        <div class=\"headerdiv\">\n                            <div class=\"container d-flex justify-content-between\">\n                                <div class=\"pl4\">\n                                    <h3 class=\"fs22 mb-0\">Transport</h3>\n                                    <p class=\"blue_text\">\n                                        <span class=\"phonehide\"><span class=\"clr52 \">No of Guest </span>{{travellersCount}}</span>\n                                        <span class=\"crossbarsamll phonehide \"></span>\n                                        <span class=\"phonehide \"><span class=\"clr52 \">Start </span>{{transportStartDate | date:'MMM-dd'}}</span>\n                                    </p>\n                                </div>\n                                <div class=\"d-flex my-auto backbutton cursor-pointer\" (click)=\"backToHomePage();\">\n                                    <i class=\"uparrow icns icon_size_20 trnsfer\"></i>\n                                    <span class=\"blue_text fs14 phonehide\">Back to Home Page</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div>\n                            <div class=\"mt60\">\n                                <div class=\"col-md-12  row m-0 justify-content-between filterstyle p015\">\n                                    <div id=\"routeSection\" class=\"col-md-5 mb-0 pl-0\">\n                                        <ng-multiselect-dropdown [placeholder]=\"'Route' | translate\" [data]=\"routeList\"\n                                            [settings]=\"dropdownSettings\" (onSelect)=\"onRouteSelect($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\" (onDeSelect)=\"clearTransport($event)\">\n                                        </ng-multiselect-dropdown>\n                                    </div>\n                                    <div id=\"vehicleSection\" class=\"col-md-5 mb-0 pl-0 mt3\">\n                                        <ng-multiselect-dropdown [placeholder]=\"'Vehicle Type'| translate\"\n                                            [data]=\"vehicleTypeList\" [(ngModel)]=\"vehicleTypeItems\"\n                                            [settings]=\"dropdownSettings\" (onSelect)=\"onVehicleSelect($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\" (onDeSelect)=\"clearTransport($event)\">\n                                        </ng-multiselect-dropdown>\n                                    </div>\n                                    <div id=\"transportSearchSection\" class=\"col-md-2 pr-0 pl-0 mt3 w95\">\n                                        <button (click)=transportSearch() [disabled]=\"!disableBtn\"\n                                            class=\"searchButton searchButtonarabic\" type=\"button\">{{'Search' |\n                                            translate}} <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"filter-outer-div row ml-0 mr-0 mt-2\" *ngIf=\"filtershow\">\n                                    <div class=\"pt-2 pl-3 pr20\">\n                                        <i class=\"fa fa-filter\" aria-hidden=\"true\"></i>\n                                    </div>\n                                    <div id=\"categorySectionTransport\" class=\"mr-2 mb-0 pl-3 pb-2\">\n                                        <ng-multiselect-dropdown [placeholder]=\"'Category'| translate\"\n                                            [data]=\"dropdownList\" [settings]=\"settings\"\n                                            (onSelect)=\"onCategorySelect($event)\"\n                                            (onDeSelect)=\"onCategoryDeselect($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\"\n                                            (onDeSelectAll)=\"onCategoryDeSelectAll($event)\">\n                                        </ng-multiselect-dropdown>\n\n                                    </div>\n                                    <div id=\"additionalServiceSectionTransport\" class=\"mr-2 mb-0 pl-3 pb-2\"\n                                        *ngIf=\"loadContent\">\n                                        <ng-multiselect-dropdown [placeholder]=\"'Additional Services'| translate\"\n                                            [data]=\"data\" [settings]=\"settings\"\n                                            (onDeSelect)=\"onadditionalItemDeselect($event)\"\n                                            (onSelect)=\"onadditionalItemSelect($event)\"\n                                            (onSelectAll)=\"onadditionalSelectAll($event)\"\n                                            (onDeSelectAll)=\"onadditionalDeSelectAll($event)\">\n                                        </ng-multiselect-dropdown>\n                                    </div>\n                                </div>\n                               <app-transport (notifyGrandparent)=\"createTripHandle(event)\" [transportList]=\"transportList\"></app-transport>\n                            </div>\n                        </div>\n                    </div>\n                </mat-step>\n                <mat-step label=\"{{'Payment' | translate}}\" state=\"payment\">\n                    <form [formGroup]=\"paymentForm\">\n                        <div class=\"col-md-12 p-0 mt80\">\n                            <div class=\"col-md-12\" *ngIf=\"tripMakkahHotel || tripMadeenaHotel\">\n                                <h3 class=\"flight-heading textright\">{{'Review your hotel details'\n                                    | translate}}</h3>\n                            </div>\n                            <app-payment-hotel [tripHotel]=\"tripMakkahHotel\" [city1]=\"Makkah\"></app-payment-hotel>\n                            <app-payment-hotel [tripHotel]=\"tripMadeenaHotel\" [city2]=\"Medinah\"></app-payment-hotel>\n                            <div *ngIf=\"tripTransport\">\n                                <div class=\"col-md-12\">\n                                    <h3 class=\"flight-heading textright\">{{'Review your Transport details' | translate}}\n                                    </h3>\n                                </div>\n                                <div class=\"col-md-12 review_detaiols_div outer-payment-div pl-0 pr-0\"\n                                    id=\"tripTransport\">\n                                    <div class=\"change_button_availability\" id=\"changeTransport\"\n                                        (click)=\"changeTransport()\">\n                                        <button type=\"button\">{{'Not available now. Please change' |\n                                            translate}}</button>\n                                    </div>\n                                    <div class=\"top-section pb-4 textright\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-4 row pr-0\">\n                                                <div style=\"display: flex;\" class=\"pl-3\" id=\"trnspt\">\n                                                    <span class=\"hotelName\">Transport</span>\n                                                </div>\n                                                <div class=\"ml-auto mr-1 \" id=\"toggleTopBtn3\">\n                                                    <div class=\"arrowPosition\">\n                                                        <div *ngIf=\"!trnsprt\">\n                                                            <button (click)=\"toggleTransportUp()\"><i\n                                                                    class=\"fa fa-angle-up\"></i></button>\n                                                        </div>\n                                                        <div *ngIf=\"trnsprt\">\n                                                            <button (click)=\"toggleTransportDown()\"><i\n                                                                    class=\"fa fa-angle-down\"></i></button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div style=\"display: flex;\" class=\"pl-3\" id=\"trnsptNormal\">\n                                                    <span class=\"hotelName\">{{tripTransport?.company?.name}}</span>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 departure refund-txt-color\">\n                                            </div>\n                                            <div class=\"col-md-3\" id=\"transportPolicy\">\n                                                <div class=\"departure fare_rule_txt\"><button class=\"policies_bttn\"\n                                                        data-toggle=\"modal\"\n                                                        [attr.data-target]=\"'#transportPolicy'+ tripTransport.id\">{{'Policies'\n                                                        | translate}} <i class=\"fa fa-info-circle\"\n                                                            aria-hidden=\"true\"></i></button></div>\n                                            </div>\n                                            <div class=\"modal\" id=\"transportPolicy{{tripTransport.id}}\">\n                                                <div class=\"modal-dialog\">\n                                                    <div class=\"modal-content\">\n                                                        <div class=\"modal-header\"\n                                                            style=\"border-bottom: none;padding-bottom: 0px;\">\n                                                            <h6 class=\"modal-title\">{{'Policies' | translate}}</h6>\n                                                            <button type=\"button\" class=\"close m0p0\"\n                                                                data-dismiss=\"modal\">&times;</button>\n                                                        </div>\n                                                        <div class=\"modal-body mb-4\">\n                                                            <div class=\"container p-3 paymentpage_policies\">\n                                                                <div *ngFor=\"let policy of selectedTransport.policies\">\n                                                                    <p class=\"pb-1\">\n                                                                        <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                                                                        {{policy?.description}}\n                                                                    </p>\n                                                                </div>\n                                                                <div *ngIf=\" selectedTransport?.cancellation_policy\">\n                                                                    <div class=\"col-md-12 row m-0 \">\n                                                                        <div class=\"col-md-12 p-0 m-0\">\n                                                                            <h6 class=\" pt-2\">\n                                                                                {{selectedTransport?.cancellation_policy?.title}}\n                                                                            </h6>\n                                                                        </div>\n                                                                        <div class=\"pb-2 m-0\">\n                                                                            <p>{{selectedTransport?.cancellation_policy?.description}}\n                                                                            </p>\n                                                                        </div>\n                                                                        <div class=\"col-md-6 pl-0 m-0\"\n                                                                            *ngFor=\"let item1 of selectedTransport?.cancellation_policy.rules;let i = index\">\n                                                                            <div class=\"col-md-12 p-0  pb-1\">\n                                                                                <div>\n                                                                                    <li style=\"font-size: 12px;\"\n                                                                                        [innerHTML]=\"item1?.description\">\n                                                                                    </li>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                                <p *ngIf=\"!selectedTransport.policies[0]\"\n                                                                    class=\"centerText\">\n                                                                    {{'No Policies Found' | translate}}\n                                                                </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-md-2 customTooltip txtAlgn\" id=\"transportRate\">\n                                                <h2 class=\"current_price htlprz\">\n                                                    {{tripTransport?.trip_vehicles[0]?.currency}}\n                                                    {{tripTransport?.prices_summary?.total_price +\n                                                    tripTransport?.prices_summary?.gds_fee +\n                                                    tripTransport?.prices_summary?.ota_fee | number:'.2-2'}}</h2>\n                                                <span class=\"customtooltiptext\">\n                                                    <div class=\"container mb-2\">\n                                                        <p class=\"pt-2 fare_summary_heading\">{{'Fare Summary' |\n                                                            translate}} </p>\n                                                        <div class=\"col-md-12 p-0 m-0 row pb-2\">\n                                                            <div class=\"col-md-12 textAlign \">\n                                                                <span>{{'GDS Fee' | translate}} :\n                                                                    {{tripTransport?.prices_summary?.gds_fee}}</span><br>\n                                                                <span>{{'OTA Fee' | translate}} :\n                                                                    {{tripTransport?.prices_summary?.ota_fee}}</span>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\" pt-2 pr-5 hotel_price_total\">{{'You Pay' |\n                                                            translate}} {{tripTransport?.prices_summary?.total_price}}\n                                                        </p>\n                                                    </div>\n                                                </span>\n                                            </div>\n                                            <div class=\"col-md-1\" id=\"normalTransportToggleBtn\">\n                                                <div class=\"arrowPosition\">\n                                                    <div *ngIf=\"!makkatransport\">\n                                                        <button (click)=\"makkatransport=!makkatransport\"><i\n                                                                class=\"fa fa-angle-up\"></i></button>\n                                                    </div>\n                                                    <div *ngIf=\"makkatransport\">\n                                                        <button (click)=\"makkatransport=!makkatransport\"><i\n                                                                class=\"fa fa-angle-down\"></i></button>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div id=\"transport\">\n                                                <div *ngIf=\"!makkatransport\">\n                                                    <div>\n                                                        <div\n                                                            class=\"row col-md-12 pl-0 pr-0 m-0 pt-2 pb-2 content-section textright\">\n                                                            <div class=\"col-md-3\"\n                                                                *ngIf=\"tripTransport.selected_transportation.vehicle_types[0].image\">\n                                                                <img class=\"\" style=\"width: 200px;height: 105px;\"\n                                                                    src=\"{{tripTransport.selected_transportation.vehicle_types[0].image}}\"\n                                                                    alt=\"\">\n                                                            </div>\n                                                            <div class=\"col-md-3\"\n                                                                *ngIf=\"!tripTransport.selected_transportation.vehicle_types[0].image\">\n                                                                <img class=\"\" style=\"width: 200px;height: 105px;\"\n                                                                    src=\"/assets/images/no_image.jpg\" alt=\"\">\n                                                            </div>\n                                                            <div class=\"col-md-6\">\n                                                                <div class=\"row detail_review\">\n                                                                    <div class=\"col-md-4 pb-3\">\n                                                                        <p><strong>{{'Category' | translate}} :\n                                                                            </strong>\n                                                                            {{tripTransport?.categories[0]?.name}} </p>\n                                                                    </div>\n                                                                    <div class=\"col-md-4 pb-3\">\n                                                                        <p><strong>{{'Vehicle Type' | translate}} :\n                                                                            </strong>\n                                                                            {{tripTransport?.vehicle_types[0]?.name}}</p>\n\n                                                                    </div>\n                                                                    <div class=\"col-md-4 pb-3\">\n                                                                        <p><strong>{{'Model' | translate}} : </strong>\n                                                                            {{selectedTransport?.vehicle_types[0]?.categories[0]?.model}}\n                                                                        </p>\n                                                                    </div>\n                                                                    <div class=\"col-md-4 pb-3\">\n                                                                        <p><strong>{{'No. of vehicle' | translate}} :\n                                                                            </strong>\n                                                                            {{tripTransport?.trip_vehicles[0]?.booked_quantity}}\n                                                                        </p>\n                                                                    </div>\n                                                                    <div class=\"col-md-4 pb-3\">\n                                                                        <p><strong>{{'Phone Number' | translate}} :\n                                                                            </strong>\n                                                                            {{tripTransport?.company?.phone_number}}</p>\n                                                                    </div>\n                                                                    <div class=\"col-md-8 pb-3\">\n                                                                        <p><strong>{{'Email' | translate}} : </strong>\n                                                                            {{tripTransport?.company?.email}}</p>\n                                                                    </div>\n                                                                    <div class=\"col-md-4 pb-3\">\n                                                                        <p><strong>{{'Bag Capacity' | translate}} :\n                                                                            </strong>\n                                                                            {{tripTransport?.vehicle_types[0]?.bags_capacity}}\n                                                                        </p>\n                                                                    </div>\n                                                                    <div class=\"col-md-12 pb-3\">\n                                                                        <p><strong>{{'Route' | translate}} : </strong>\n                                                                            {{tripTransport?.route?.name}}</p>\n                                                                    </div>\n                                                                    <div class=\"col-md-12 pb-3\">\n                                                                        <p><strong>{{'Address' | translate}} : </strong>\n                                                                            {{tripTransport?.company?.address}}</p>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"col-md-3\"\n                                                                *ngIf=\"selectedTransport.vehicle_types[0].categories[0].additional_services[0]\">\n                                                                <p style=\"color: red;\" class=\"pl-3\">{{'Additional\n                                                                    Services' | translate}}</p>\n                                                                <ul style=\"list-style-type: circle;\">\n                                                                    <li\n                                                                        *ngFor=\"let a of selectedTransport.vehicle_types[0].categories[0].additional_services\">\n                                                                        {{a?.description}}</li>\n                                                                </ul>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 review_detaiols_div outer-payment-div pl-0 pr-0\" *ngIf=\"tripService\">\n                                <div class=\"change_button_availability\" id=\"changeService\">\n                                    <button type=\"button\">{{'Not available now. Please change' | translate}}</button>\n                                </div>\n                                <div class=\"top-section pb-3 mt-1\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <div style=\"display: flex;\">\n                                                <span class=\"hotelName\">{{tripService.company.name}}</span>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-2 departure refund-txt-color\">\n                                        </div>\n                                        <div class=\"col-md-3\">\n                                            <div class=\"departure fare_rule_txt\"><button class=\"policies_bttn\"\n                                                    data-toggle=\"modal\"\n                                                    [attr.data-target]=\"'#groundPolicy'+ tripService.id\">{{'Policies' |\n                                                    translate}} <i class=\"fa fa-info-circle\"\n                                                        aria-hidden=\"true\"></i></button></div>\n                                        </div>\n                                        <div class=\"modal\" id=\"groundPolicy{{tripService.id}}\">\n                                            <div class=\"modal-dialog\">\n                                                <div class=\"modal-content\">\n                                                    <div class=\"modal-header\"\n                                                        style=\"border-bottom: none;padding-bottom: 0px;\">\n                                                        <h6 class=\"modal-title\">{{'Policies' | translate}}</h6>\n                                                        <button type=\"button\" class=\"close\"\n                                                            data-dismiss=\"modal\">&times;</button>\n                                                    </div>\n                                                    <div class=\"modal-body mb-4\">\n                                                        <div class=\"container p-3 paymentpage_policies\">\n                                                            <div\n                                                                *ngFor=\"let policy of tripService.selected_service.policies\">\n                                                                <p class=\"pb-1\">\n                                                                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                                                                    {{policy?.description}}\n                                                                </p>\n                                                            </div>\n                                                            <div\n                                                                *ngIf=\" tripService?.selected_service?.cancellation_policy\">\n                                                                <div class=\"col-md-12 row m-0 \">\n                                                                    <div class=\"col-md-12 p-0 m-0\">\n                                                                        <h6 class=\" pt-2\">\n                                                                            {{tripService?.selected_service?.cancellation_policy?.title}}\n                                                                        </h6>\n                                                                    </div>\n                                                                    <div class=\"pb-2 m-0\">\n                                                                        <p>{{tripService?.selected_service?.cancellation_policy?.description}}\n                                                                        </p>\n                                                                    </div>\n                                                                    <div class=\"col-md-6 pl-0 m-0\"\n                                                                        *ngFor=\"let item1 of tripService?.selected_service?.cancellation_policy?.rules;let i = index\">\n                                                                        <div class=\"col-md-12 p-0  pb-1\">\n                                                                            <div>\n                                                                                <li style=\"font-size: 12px;\"\n                                                                                    [innerHTML]=\"item1?.description\">\n                                                                                </li>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <p *ngIf=\"tripService.selected_service.policies.length == 0\"\n                                                                class=\"centerText\">\n                                                                {{'No Policies Found' | translate}}\n                                                            </p>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-2 customTooltip\" style=\"text-align: right;\">\n                                            <h2 class=\"htlprz\">{{tripService?.currency}}\n                                                {{tripService?.prices_summary?.total_price}}</h2>\n                                            <span class=\"customtooltiptext\">\n                                                <div class=\"container mb-2\">\n                                                    <p class=\"pt-2 fare_summary_heading\">{{'Fare Summary' | translate}}\n                                                    </p>\n                                                    <div class=\"col-md-12 p-0 m-0 row pb-2\">\n                                                        <div class=\"col-md-12 textAlign \">\n                                                            <span>{{'GDS Fee' | translate}} :\n                                                                {{tripService?.prices_summary?.gds_fee}}</span><br>\n                                                            <span>{{'OTA Fee' | translate}} :\n                                                                {{tripService?.prices_summary?.ota_fee}}</span>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\" pt-2 pr-5 hotel_price_total\">{{'You Pay' | translate}}\n                                                        {{tripService?.prices_summary?.total_price}}</p>\n                                                </div>\n                                            </span>\n                                        </div>\n                                        <div class=\"col-md-1\">\n                                            <div class=\"arrowPosition\">\n                                                <div *ngIf=\"!grountService\">\n                                                    <button (click)=\"grountService=!grountService\"><i\n                                                            class=\"fa fa-angle-up\"></i></button>\n                                                </div>\n                                                <div *ngIf=\"grountService\">\n                                                    <button (click)=\"grountService=!grountService\"><i\n                                                            class=\"fa fa-angle-down\"></i></button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div *ngIf=\"!grountService\">\n                                    <div class=\"row col-md-12 pl-0 pr-0 m-0 pt-2 pb-2 content-section\">\n                                        <div class=\"col-md-3\" *ngIf=\"tripService.company.images[0]\">\n                                            <div class=\"groundserviceimg\">\n                                                <img style=\"height: 100px;\" src=\"{{tripService.company.images[0]}}\"\n                                                    alt=\"\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\" *ngIf=\"!tripService.company.images[0]\">\n                                            <img class=\"\" style=\"width: 200px;height: 105px;\"\n                                                src=\"/assets/images/no_image.jpg\" alt=\"\">\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <div class=\"row detail_review\">\n                                                <div class=\"col-md-4 pb-3\">\n                                                    <p><strong>{{'Category' | translate}}Category :\n                                                        </strong>{{tripService?.category?.name}} </p>\n                                                </div>\n                                                <div class=\"col-md-4 pb-3\">\n                                                    <p><strong>{{'Nationality' | translate}} :\n                                                        </strong>{{tripService?.nationality}} </p>\n                                                </div>\n                                                <div class=\"col-md-4 pb-3\">\n                                                    <p><strong>{{'Arrival Date' | translate}} : </strong>{{arrivalDate |\n                                                        date:'shortDate'}} </p>\n                                                </div>\n                                                <div class=\"col-md-6 pb-3\">\n                                                    <p><strong>{{'Phine Number' | translate}} :\n                                                        </strong>{{tripService?.company?.phone_number}} </p>\n                                                </div>\n                                                <div class=\"col-md-6 pb-3\">\n                                                    <p><strong>{{'Email' | translate}} :\n                                                        </strong>{{tripService?.company?.email}} </p>\n                                                </div>\n                                                <div class=\"col-md-12 pb-3\">\n                                                    <p><strong>{{'Address' | translate}} :\n                                                        </strong>{{tripService?.company?.address}} </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3\" *ngIf=\"tripService.additional_services[0]\">\n                                            <p style=\"color: red;\" class=\"pl-3\">{{'Additional Services' | translate}}\n                                            </p>\n                                            <ul>\n                                                <li *ngFor=\"let service of tripService.additional_services\"\n                                                    style=\"list-style-type: circle;\">\n                                                    <span>{{service?.description}}</span>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 outer-payment-div pl-0 pr-0\" *ngIf=\"tripVisaData\">\n                                <div class=\"top-section pb-4\">\n                                    <span class=\"hotelName\">{{tripVisaData?.title}}</span>\n                                    <span class=\"vehicle-price\">{{tripVisaData?.currency}}\n                                        {{tripVisaData?.total_price}}</span>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <h3 class=\"flight-heading textright\">{{'Traveller Details' | translate}}</h3>\n                            </div>\n                            <div class=\"col-md-12 outer-payment-div pl-0 pr-0 pb-0\">\n                                <div class=\"top-section pb-4\">\n                                    <span class=\"traveller-notice\">{{'Please make sure you enter the Name as per your\n                                        Government photo id.' | translate}}\n                                    </span>\n                                </div>\n                                <div class=\"travellers-detail\" *ngIf=\"rooms\">\n                                    <mat-accordion>\n                                        <mat-expansion-panel [expanded]=\"step === 0\">\n                                            <mat-expansion-panel-header>\n                                                <mat-panel-title>\n                                                    <div class=\"roomvice\">\n                                                        <h3 class=\"hotelName\">{{'Contact Info' | translate}} </h3>\n                                                    </div>\n                                                </mat-panel-title>\n                                            </mat-expansion-panel-header>\n                                            <div formArrayName=\"roomAdultsArray\">\n                                                <div *ngFor=\"let x of roomAdultsArray.controls;let adultIndex = index\">\n                                                    <div [formGroupName]=\"adultIndex\">\n                                                        <div class=\"d-flex justify-content-between\"></div>\n                                                        <div class=\"m-0 pl-0 pr-0 content-section\">\n                                                            <div class=\"col-md-12 row \">\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <input formControlName=\"firstName\"\n                                                                            id=\"firstName{{adultIndex}}\" matInput\n                                                                            placeholder=\"{{'First Name'| translate}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <input id=\"lastName{{adultIndex}}\" matInput\n                                                                            placeholder=\"{{'Last Name'| translate}}\"\n                                                                            formControlName=\"lastName\">\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <mat-select\n                                                                            placeholder=\"{{'Gender'| translate}}\"\n                                                                            value=\"\" id=\"gender{{adultIndex}}\"\n                                                                            formControlName=\"gender\">\n                                                                            <mat-option value=\"MALE\">MALE</mat-option>\n                                                                            <mat-option value=\"FEMALE\">FEMALE\n                                                                            </mat-option>\n                                                                        </mat-select>\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <input matInput [matDatepicker]=\"picker\"\n                                                                            placeholder=\"{{'Date of Birth'| translate}}\"\n                                                                            id=\"dob{{adultIndex}}\"\n                                                                            formControlName=\"dob\">\n                                                                        <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                                                                        </mat-datepicker-toggle>\n                                                                        <mat-datepicker #picker>\n                                                                        </mat-datepicker>\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <input id=\"passportNo{{adultIndex}}\" matInput\n                                                                            placeholder=\"{{'Passport Number' | translate}}\"\n                                                                            formControlName=\"passportNo\">\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <input id=\"ped{{adultIndex}}\" matInput\n                                                                            [matDatepicker]=\"picker2\"\n                                                                            placeholder=\"{{'Passport expiry date'| translate}}\"\n                                                                            formControlName=\"ped\">\n                                                                        <mat-datepicker-toggle matSuffix\n                                                                            [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                        <mat-datepicker #picker2></mat-datepicker>\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <mat-select [(value)]=\"selectedNationality\"\n                                                                            placeholder=\"{{'Nationality'| translate}}\"\n                                                                            id=\"nationality{{adultIndex}}\">\n                                                                            <mat-option\n                                                                                *ngFor=\"let n of nationalityList\"\n                                                                                value=\"{{n.item_id}}\">{{n?.item_text}}\n                                                                            </mat-option>\n                                                                        </mat-select>\n                                                                    </mat-form-field>\n                                                                </div>\n                                                                <div class=\"col-md-3 pt-2\">\n                                                                    <mat-form-field>\n                                                                        <mat-select [(value)]=\"selectedCountry\"\n                                                                            placeholder=\"{{'Country of Residence'| translate}}\"\n                                                                            id=\"cor{{adultIndex}}\">\n                                                                            <mat-option *ngFor=\"let n of countryList\"\n                                                                                value=\"{{n.item_id}}\">{{n?.item_text}}\n                                                                            </mat-option>\n                                                                        </mat-select>\n                                                                    </mat-form-field>\n                                                                </div>\n                                                            </div>\n                                                            <div *ngIf=\"mainTraveller[adultIndex]\">\n                                                                <div class=\"col-md-12 row \">\n                                                                    <div class=\"col-md-3 pt-2\">\n                                                                        <mat-form-field appearance=\"outline\"\n                                                                            id=\"phoneNumberSelect\" style=\"width: 34%;\">\n                                                                            <select matNativeControl\n                                                                                name=\"phn_country_code\"\n                                                                                [(value)]=\"phoneCode\" placeholder=\"\"\n                                                                                id=\"phn_country_code{{adultIndex}}\">\n                                                                                <option *ngFor=\"let n of phoneCodeList\"\n                                                                                    value=\"{{n.item_id}}\">{{n.item_id}}\n                                                                                </option>\n                                                                            </select>\n                                                                        </mat-form-field>\n                                                                        <mat-form-field appearance=\"outline\"\n                                                                            id=\"phoneNumberSelect\" style=\"width: 66%;\">\n\n                                                                            <input matInput id=\"mobile{{adultIndex}}\"\n                                                                                placeholder=\"{{'Phone Number'| translate}}\"\n                                                                                numberOnly\n                                                                                formControlName=\"phone_number\">\n                                                                        </mat-form-field>\n                                                                    </div>\n                                                                    <div class=\"col-md-3 pt-2\">\n                                                                        <mat-form-field>\n                                                                            <input matInput id=\"email{{adultIndex}}\"\n                                                                                placeholder=\"{{'Email'| translate}}\"\n                                                                                formControlName=\"email\">\n\n                                                                        </mat-form-field>\n                                                                    </div>\n                                                                    <div class=\"col-md-3 pt-2\">\n                                                                        <mat-form-field>\n                                                                            <input matInput id=\"address{{adultIndex}}\"\n                                                                                placeholder=\"{{'Address' | translate}}\"\n                                                                                formControlName=\"address\">\n                                                                        </mat-form-field>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </mat-expansion-panel>\n                                    </mat-accordion>\n                                </div>\n                                <div class=\"d-flex flex-row-reverse mrgin\" *ngIf=\"travelersError\">\n                                    <div class=\"col-md-12\" *ngFor=\"let error of travelersError\">\n                                        {{'Error in' | translate}} {{error.traveller.first_name}}\n                                        {{error?.traveller?.last_name}} {{'details Found' | translate}} -\n                                        {{'Message' | translate}}: {{error?.status?.message}}\n                                    </div>\n                                </div>\n                                <div class=\"d-flex flex-row mrgin mt-2 mb-2 mr-4 ml-4\">\n                                    <div *ngIf=\"reference_no\" class=\"mr-auto mt-2\"><span\n                                            style=\"color: #d33a2f;font-size: 15px;\">{{'Booking Reference No' |\n                                            translate}} :{{reference_no}} </span></div>\n                                    <div class=\"text-align-end\"><button type=\"submit\" id=\"payBtn\" class=\"bttnprimary\"\n                                            data-toggle=\"modal\" data-target=\"#ibanPopup\" (click)=\"startTimer()\">{{'PAY'\n                                            | translate}}</button> </div>\n                                </div>\n                                <div class=\"d-flex flex-row m-2\">\n                                    <div class=\"p-2 ml-auto\"></div>\n                                    <div><button (click)=\"bookTrip()\" type=\"submit\" id=\"continueBooking\"\n                                            class=\"bttnprimary\">{{'BOOK & CONTINUE' | translate}}</button> </div>\n                                    <div class=\"p-2\"></div>\n                                </div>\n                                <div style=\"height: 100px;background:#eaeaea;\"></div>\n                            </div>\n                        </div>\n                    </form>\n                </mat-step>\n            </mat-horizontal-stepper>\n        </div>\n    </div>\n</div>\n\n<div [style.display]=\"additionalServiceCount ? 'block' : 'none'\" class=\"modal\" id=\"additionalServiceCount\" tabindex=\"-1\"\n    role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\"></h5>\n                <button type=\"button\" (click)=\"hidecountpopup();\" class=\"close\">\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div *ngIf=\"setDataForAddServiceCountPopUP?.additional_service_code == '1'\">\n                            <h6>{{'No of Umrah Guidance Needed' | translate }} :</h6>\n                        </div>\n                        <div *ngIf=\"setDataForAddServiceCountPopUP?.additional_service_code == '2'\">\n                            <h6>{{'No of Wheel Chair Needed' | translate }} :</h6>\n                        </div>\n                        <div *ngIf=\"setDataForAddServiceCountPopUP?.additional_service_code == '3'\">\n                            <h6>{{'No of Wheel Chair with Assistant Needed' | translate }} :</h6>\n                        </div>\n                        <div *ngIf=\"setDataForAddServiceCountPopUP?.additional_service_code == '4'\">\n                            <h6>{{'No of Male Companion Needed' | translate }} :</h6>\n                        </div>\n                        <div *ngIf=\"setDataForAddServiceCountPopUP?.additional_service_code == '5'\">\n                            <h6>{{'No of Female Companion Needed' | translate }} :</h6>\n                        </div>\n                        <div *ngIf=\"setDataForAddServiceCountPopUP?.additional_service_code == '6'\">\n                            <h6>{{'No of Baby Sitter Needed' | translate }} :</h6>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <mat-form-field>\n                            <mat-label>{{'Select' | translate}}</mat-label>\n                            <select matNativeControl [(ngModel)]=\"addSrvCount\" name=\"service\">\n                                <option\n                                    *ngFor=\"let k of [].constructor(setDataForAddServiceCountPopUP?.quantity) | slice:0:50; let p = index;\"\n                                    value=\"{{p+1}}\">{{p+1}}</option>\n                            </select>\n                        </mat-form-field>\n                        <button (click)=\"saveSelectedAddSrvCount(setDataForAddServiceCountPopUP);\"\n                            class=\"okbutton\">{{'Submit'|translate}}</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal\" id=\"ibanPopup\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">{{'IBAN Payment' | translate}}</h4>\n                <button id=\"ibanClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modal-body\" style=\"font-size: 12px;\">\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-12 pb-1\"><strong style=\"color: red;\">*</strong> {{'IBAN Accound Number' |\n                            translate}}:</div>\n                        <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" id=\"acc_no\" [(ngModel)]=\"accNo\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"col-md-12 pb-1\"><strong style=\"color: red;\">*</strong> {{'Authe Code' | translate}}:\n                        </div>\n                        <div class=\"col-md-12\"><input type=\"text\" class=\"form-control\" id=\"auth_code\"\n                                [(ngModel)]=\"authCode\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <p>OTP will expire in {{timeLeft}}</p>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"onSubmitButtonClicked()\"\n                    data-dismiss=\"modal\">{{'Submit'|translate}}</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v9.17.2
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.opacity = '';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.opacity = '';
    elem.style.display = 'none';
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render confirm button

    renderButton(confirmButton, 'confirm', params); // render Cancel Button

    renderButton(cancelButton, 'cancel', params);

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, cancelButton, params);
    } else {
      removeClass([confirmButton, cancelButton], swalClasses.styled);
      confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
      cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
    }

    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    }
  };

  function handleButtonsStyling(confirmButton, cancelButton, params) {
    addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyCustomClass(getIcon(), params, 'icon');
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      adjustSuccessIconBackgoundColor(); // Custom class

      applyCustomClass(icon, params, 'icon'); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.onRender === 'function') {
      params.onRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    show(actions);
    show(confirmButton, 'inline-block');
    addClass([popup, actions], swalClasses.loading);
    confirmButton.disabled = true;
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    onRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    onDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'footer', 'hideClass', 'html', 'icon', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'text', 'title', 'titleText'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDepreation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);

    if (!innerParams.showConfirmButton) {
      hide(domCache.confirmButton);

      if (!innerParams.showCancelButton) {
        hide(domCache.actions);
      }
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
    if (isToast$$1) {
      triggerOnAfterCloseAndDispose(instance, onAfterClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams);

    if (typeof resolveValue !== 'undefined') {
      resolveValue.isDismissed = typeof resolveValue.dismiss !== 'undefined';
      resolveValue.isConfirmed = typeof resolveValue.dismiss === 'undefined';
    } else {
      resolveValue = {
        isDismissed: true,
        isConfirmed: false
      };
    } // Resolve Swal promise


    swalPromiseResolve(resolveValue || {});
  }

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose;

    if (onClose !== null && typeof onClose === 'function') {
      onClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), onAfterClose);
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
    setTimeout(function () {
      if (typeof onAfterClose === 'function') {
        onAfterClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {Array} params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup);
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setScrollingVisibility(container, popup);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      });
    }

    removeClass(container, swalClasses['no-transition']);
  };

  function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  }

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    show(popup); // Animate popup right after showing it

    addClass(popup, params.showClass.popup);
    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if (arrowKeys.indexOf(e.key) !== -1) {
      handleArrows(); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows() {
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
      cancelButton.focus(); // and vice versa
    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
      confirmButton.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      cancelButton: getCancelButton(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      return domCache.cancelButton.focus();
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      return domCache.confirmButton.focus();
    }

    setFocus(innerParams, -1, 1);
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy();
    }

    disposeSwal(this);
  }

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '9.17.2';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./src/app/adapters/sub-agent/create-trip-adapter.ts":
/*!***********************************************************!*\
  !*** ./src/app/adapters/sub-agent/create-trip-adapter.ts ***!
  \***********************************************************/
/*! exports provided: CreateTripAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripAdapter", function() { return CreateTripAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CreateTripAdapter = /** @class */ (function () {
    function CreateTripAdapter(helperService, appStore) {
        this.helperService = helperService;
        this.appStore = appStore;
    }
    /**
     * method for creating hotel search request
     */
    CreateTripAdapter.prototype.hotelSearchRequest = function (city, userDetails) {
        var rooms = this.appStore.roomArray;
        if (rooms && rooms.length > 0) {
            rooms.forEach(function (item, i) {
                item.seq_no = i.toString();
                delete item.id;
                delete item.pax_info_str;
            });
        }
        if (city == "MAKKA") {
            var body = {
                check_in_date: this.helperService.dateFormaterMdy(userDetails.makkahCheckinDate),
                check_out_date: this.helperService.dateFormaterMdy(userDetails.makkahCheckoutDate),
                sub_pcc_code: userDetails.subPcc_makkah,
                special_code: userDetails.specialCodeMakkah,
                rooms: rooms,
                location: city,
            };
        }
        if (city == "MADEENA") {
            var body = {
                check_in_date: this.helperService.dateFormaterMdy(userDetails.madeenaCheckinDate),
                check_out_date: this.helperService.dateFormaterMdy(userDetails.madeenaCheckoutDate),
                sub_pcc_code: userDetails.subPcc_medinah,
                special_code: userDetails.specialCodeMedinah,
                rooms: rooms,
                location: city,
            };
        }
        return body;
    };
    /**
     * Method for creating  hotel details request
     */
    CreateTripAdapter.prototype.selectedHotelInfoRequest = function (selectedLanguage, selectedHotelInfo, search) {
        if (selectedHotelInfo.city == "Makkah") {
            search = this.appStore.makkahSearchId;
        }
        if (selectedHotelInfo.city == "Madina" || selectedHotelInfo.city == "Madinah" || selectedHotelInfo.city == "Medinah") {
            search = this.appStore.madinahSearchId;
        }
        var body = {
            search: search,
            lang: selectedLanguage,
            providers: selectedHotelInfo.providers,
            hotel_name: selectedHotelInfo.name,
            umrah_hotel_code: selectedHotelInfo.umrah_hotel_code,
            location_code: selectedHotelInfo.location_code,
        };
        return body;
    };
    /**
     *Method for creating  hotel booking request
     */
    CreateTripAdapter.prototype.bookHotelRequest = function (isGrouped, selectedRoomGroups, selectedHotel, selectedHotelInfo) {
        var roomVariations = {};
        var roomVariationArray = [];
        if (!isGrouped) {
            for (var i = 0; i < selectedRoomGroups.length; i++) {
                for (var j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
                    if (selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
                        roomVariations = {};
                        var name_1 = "";
                        if (selectedRoomGroups[i].rooms[j].name == null) {
                            name_1 = "sample";
                        }
                        if (selectedRoomGroups[i].rooms[j].name && selectedRoomGroups[i].rooms[j].name.length > 24) {
                            name_1 = selectedHotel.name.substring(0, 20);
                        }
                        if (selectedRoomGroups[i].rooms[j].name && selectedRoomGroups[i].rooms[j].name.length < 24) {
                            name_1 = selectedRoomGroups[i].rooms[j].name;
                        }
                        roomVariations.currency = selectedHotel.currency,
                            roomVariations.available_rooms = selectedRoomGroups[i].rooms[j].available_count;
                        roomVariations.total_rooms = selectedRoomGroups[i].rooms[j].max_rooms,
                            roomVariations.max_guests = selectedRoomGroups[i].rooms[j].pax_info[0].quantity,
                            roomVariations.title = name_1,
                            roomVariations.per_room_price = selectedRoomGroups[i].rooms[j].amount,
                            roomVariations.custom_pax_info = selectedRoomGroups[i].pax_info_str;
                        roomVariations.room_type = selectedRoomGroups[i].rooms[j].room_type,
                            roomVariations.description = selectedRoomGroups[i].rooms[j].description,
                            roomVariations.room_group_id = selectedRoomGroups[i].rooms[j].room_group_id,
                            roomVariations.room_id = selectedRoomGroups[i].rooms[j].room_id,
                            roomVariations.room_group_obj = selectedRoomGroups[i].rooms[j].room_group_obj;
                        roomVariationArray.push(roomVariations);
                    }
                }
            }
        }
        if (isGrouped) {
            for (var i = 0; i < selectedRoomGroups.length; i++) {
                if (selectedRoomGroups[i].isRoomSelectionChecked) {
                    for (var j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
                        roomVariations = {};
                        var name_2 = "";
                        if (selectedRoomGroups[i].rooms[j].name == null) {
                            name_2 = "sample";
                        }
                        if (selectedRoomGroups[i].rooms[j].name && selectedRoomGroups[i].rooms[j].name.length > 24) {
                            name_2 = selectedHotel.name.substring(0, 20);
                        }
                        if (selectedRoomGroups[i].rooms[j].name && selectedRoomGroups[i].rooms[j].name.length < 24) {
                            name_2 = selectedRoomGroups[i].rooms[j].name;
                        }
                        roomVariations.currency = selectedHotel.currency,
                            roomVariations.available_rooms = selectedRoomGroups[i].rooms[j].available_count;
                        roomVariations.total_rooms = selectedRoomGroups[i].rooms[j].max_rooms,
                            roomVariations.max_guests = selectedRoomGroups[i].rooms[j].pax_info[0].quantity,
                            roomVariations.title = name_2,
                            roomVariations.per_room_price = selectedRoomGroups[i].rooms[j].amount,
                            roomVariations.custom_pax_info = selectedRoomGroups[i].rooms[j].pax_info_str;
                        roomVariations.room_type = selectedRoomGroups[i].rooms[j].room_type,
                            roomVariations.description = selectedRoomGroups[i].rooms[j].description,
                            roomVariations.room_group_id = selectedRoomGroups[i].rooms[j].room_group_id,
                            roomVariations.room_id = selectedRoomGroups[i].rooms[j].room_id,
                            roomVariations.room_group_obj = selectedRoomGroups[i].rooms[j].room_group_obj;
                        roomVariationArray.push(roomVariations);
                    }
                }
            }
        }
        var latitude = +selectedHotel.meta_data.latitude;
        var longitute = +selectedHotel.meta_data.longitude;
        var name = "";
        if (selectedHotel.name.length > 24) {
            name = selectedHotel.name.substring(0, 24);
        }
        if (selectedHotel.name.length < 24) {
            name = selectedHotel.name;
        }
        var body = {};
        if (selectedHotelInfo.city == "Makkah") {
            body = {
                start_date: this.helperService.dateFormaterYMd(selectedHotel.check_in_time),
                end_date: this.helperService.dateFormaterYMd(selectedHotel.check_out_time),
                arr_date_time_stamp: this.helperService.dateTimeStringToTimeStampConverter(selectedHotel.check_in_time),
                adults: this.appStore.adultCount,
                children: this.appStore.childCount,
                country_of_residence: "IN",
                nationality: "IN",
                makkah_trip_hotel: {
                    search: this.appStore.makkahSearchId,
                    lang: "en-US",
                    hotel: {
                        name: name ? name : "sample",
                        description: selectedHotel.description,
                        address: selectedHotel.meta_data.address,
                        longitute: longitute.toFixed(6),
                        latitude: latitude.toFixed(6),
                        phone_number: selectedHotel.meta_data.phone ? selectedHotel.meta_data.phone : "1232323232",
                        email: selectedHotel.meta_data.email,
                        state: selectedHotel.meta_data.state ? selectedHotel.meta_data.state : "MAKKA",
                        city: selectedHotel.meta_data.city,
                        instructions: "",
                        distance: selectedHotel.haram_distance,
                        user_review: selectedHotel.meta_data.rating ? selectedHotel.meta_data.rating : 3.4,
                        provider: selectedHotel.provider,
                        vendor: selectedHotel.vendor,
                        code: selectedHotel.code,
                        umrah_code: selectedHotel.umrah_hotel_code,
                        images: selectedHotel.meta_data.images,
                        amenities: selectedHotel.meta_data.amenities,
                        policies: selectedHotel.policies,
                    },
                    room_variations: roomVariationArray,
                    check_in_time: selectedHotel.check_in_time,
                    check_out_time: selectedHotel.check_out_time,
                    other_data: selectedHotel.other_data,
                },
            };
        }
        if (selectedHotelInfo.city == "Madina" || selectedHotelInfo.city == "Madinah" ||
            selectedHotelInfo.city == "Medina") {
            body = {
                start_date: this.helperService.dateFormaterYMd(selectedHotel.check_in_time),
                end_date: this.helperService.dateFormaterYMd(selectedHotel.check_out_time),
                arr_date_time_stamp: this.helperService.dateTimeStringToTimeStampConverter(selectedHotel.check_in_time),
                adults: this.appStore.adultCount,
                children: this.appStore.childCount,
                country_of_residence: "IN",
                nationality: "IN",
                medinah_trip_hotel: {
                    search: this.appStore.madinahSearchId,
                    lang: "en-US",
                    hotel: {
                        name: name ? name : "sample",
                        description: selectedHotel.description,
                        address: selectedHotel.meta_data.address,
                        longitute: longitute.toFixed(6),
                        latitude: latitude.toFixed(6),
                        phone_number: selectedHotel.meta_data.phone ? selectedHotel.meta_data.phone : "1232323232",
                        email: selectedHotel.meta_data.email,
                        state: selectedHotel.meta_data.state ? selectedHotel.meta_data.state : "MADEENA",
                        city: selectedHotel.meta_data.city,
                        instructions: "",
                        distance: selectedHotel.haram_distance,
                        user_review: selectedHotel.meta_data.rating ? selectedHotel.meta_data.rating : 3.4,
                        provider: selectedHotel.provider,
                        vendor: selectedHotel.vendor,
                        code: selectedHotel.code,
                        umrah_code: selectedHotel.umrah_hotel_code,
                        images: selectedHotel.meta_data.images,
                        amenities: selectedHotel.meta_data.amenities,
                        policies: selectedHotel.policies,
                    },
                    room_variations: roomVariationArray,
                    check_in_time: selectedHotel.check_in_time,
                    check_out_time: selectedHotel.check_out_time,
                    other_data: selectedHotel.other_data,
                },
            };
        }
        return body;
    };
    return CreateTripAdapter;
}());



/***/ }),

/***/ "./src/app/common/services/auth-services.ts":
/*!**************************************************!*\
  !*** ./src/app/common/services/auth-services.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    /**
     * this method is used for checking login or not
     */
    AuthService.prototype.isLoggedIn = function () {
        return (localStorage.getItem('accesstoken') ? true : false);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/services/helper-service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/helper-service.ts ***!
  \***************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var HelperService = /** @class */ (function () {
    function HelperService(datepipe) {
        this.datepipe = datepipe;
    }
    /*
    * this method for changing date format to "MM/dd/yyyy"
    */
    HelperService.prototype.dateFormaterMdy = function (date) {
        var latest_date = this.datepipe.transform(date, "MM/dd/yyyy");
        return latest_date;
    };
    /*
    * this method for changing date format to "MM/dd/yyyy,hh:mm a"
    */
    HelperService.prototype.dateFormaterMdyHma = function (date) {
        var latest_date = this.datepipe.transform(date, "MM/dd/yyyy,hh:mm a");
        return latest_date;
    };
    /*
    * this method for changing date format to "yyyy-MM-dd"
    */
    HelperService.prototype.dateFormaterYMd = function (date) {
        var latest_date = this.datepipe.transform(date, "yyyy-MM-dd");
        return latest_date;
    };
    /*
    * this method for changing date time string to time stamp
    */
    HelperService.prototype.dateTimeStringToTimeStampConverter = function (date) {
        var date1 = Date.parse(date);
        return Math.ceil(date1 / 1000);
    };
    /*
   * this method for finding days between two dates
   */
    HelperService.prototype.noOfDaysBetweenTwoDates = function (firstDate, secondDate) {
        var a, b, c, d, noOfDays;
        a = this.dateFormaterMdy(firstDate);
        b = this.dateFormaterMdy(secondDate);
        c = new Date(a.split("/")[2], a.split("/")[0] - 1, a.split("/")[1]);
        d = new Date(b.split("/")[2], b.split("/")[0] - 1, b.split("/")[1]);
        return noOfDays = Math.round(Math.abs((c - d) / (24 * 60 * 60 * 1000)));
    };
    /*
    * this method for removing duplicate items
    */
    HelperService.prototype.onlyUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    /*
    * this method for increase date by number
    */
    HelperService.prototype.incrementDate = function (date, days) {
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    };
    HelperService.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
    ]; };
    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/common/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.showSuccess = function (message) {
        this.toastr.success(message);
    };
    NotificationService.prototype.showError = function (message) {
        this.toastr.error(message);
    };
    NotificationService.prototype.showWarning = function (message) {
        this.toastr.warning(message);
    };
    NotificationService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .ovaralldiv9 {\n    padding: 0 !important;\n    height: 200px !important;\n  }\n\n  .hotelimgegallery {\n    padding: 7px 0 7px 0 !important;\n    display: flex;\n  }\n\n  .smallwidthh {\n    width: 30% !important;\n    margin: 0 6px;\n  }\n}\n.viewHtl {\n  position: fixed;\n  top: 132px;\n  left: 0;\n  background: rgba(3, 3, 3, 0.5);\n  z-index: 9;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n.viewHtl .modal-dialog {\n  max-width: 100%;\n  margin: 0;\n  border-radius: 0px;\n  background-color: #eaeaea;\n}\n.hight85 {\n  height: 85px;\n}\n.hight20 {\n  height: 20px;\n}\n.orange {\n  color: #ea6708;\n}\n.green {\n  color: green;\n}\n.amntStyle {\n  text-decoration: underline;\n  font-size: 15px;\n}\n.boxradus_hotel .regNo {\n  font-size: 16px;\n  color: #8597f0;\n}\n.boxradus_hotel .pdng {\n  padding-top: 50px;\n}\n.boxradus_hotel .txtalign {\n  text-align: end;\n}\n.boxradus_hotel .hotel-name {\n  font-size: 26px;\n  color: #595d6e;\n  line-height: 44px;\n  max-height: 39px;\n}\n.boxradus_hotel .star {\n  display: block;\n  margin: 6px 0 8px 0;\n}\n.boxradus_hotel .prize {\n  font-size: 24px;\n  font-weight: 700;\n  color: #d32f2f;\n}\n.boxradus_hotel .text {\n  font-size: 14px;\n  font-weight: 500;\n}\n.boxradus_hotel strong {\n  color: #d32f2f;\n  font-weight: 600;\n  font-size: 18px;\n}\n.boxradus_hotel .hotel-name {\n  font-size: 26px;\n  color: #595d6e;\n  line-height: 44px;\n  max-height: 39px;\n}\n@media all and (max-width: 767px) {\n  .carousel-container #carousel-thumbs img {\n    border-width: 3px;\n  }\n}\n@media all and (min-width: 576px) {\n  .carousel-container #carousel-thumbs {\n    position: absolute;\n  }\n}\n@media all and (max-width: 576px) {\n  .carousel-container #carousel-thumbs {\n    background: #ccccce;\n  }\n}\n.uitk-cell {\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n}\n.checkin, .checkout {\n  width: calc(50% - 85px);\n  cursor: pointer;\n  padding: 15px;\n  position: relative;\n  transition: all 0.5s ease-in 0.1s;\n  min-height: 88px;\n}\n.openPopup {\n  color: #055290;\n  font-size: 12px;\n  font-weight: 500;\n  display: block;\n  white-space: nowrap;\n}\n.nights {\n  width: 100px;\n  text-align: center;\n  margin: 23px 30px 0 0;\n  flex-direction: row;\n  box-sizing: border-box;\n  place-content: center;\n  align-items: center;\n  padding: 0;\n  border-top: 1px dashed #000;\n}\n.roomsGuests {\n  padding: 15px;\n  position: relative;\n  transition: all 0.5s ease-in 0.1s;\n  width: 100%;\n}\n.roomsGuests label {\n  font-size: 12px;\n  font-weight: 500;\n  color: #363636;\n  text-transform: uppercase;\n  display: block;\n  white-space: nowrap;\n}\n.roomsGuests h6 {\n  font-size: 19px;\n  font-weight: 700;\n  margin: 0;\n  color: #000;\n}\n.roomsGuests span[_ngcontent-serverApp-c6] {\n  font-weight: 400;\n  font-size: 14px;\n  color: #525252;\n}\n.hotel-tabs .nav-item {\n  background: #eaeaed;\n  border: 1px solid #cecfd5;\n  color: #0087cc;\n  display: block;\n  font-weight: 600;\n  padding: 10px 0;\n  text-align: center;\n  text-decoration: none;\n}\n.hotel-tabs .nav-item:hover {\n  color: #ff7b29;\n}\n.hotel-tabs .nav-item.active {\n  background: #fff;\n  border-bottom-color: transparent;\n  color: #2db34a;\n  cursor: default;\n}\n.hotel-tabs .tab-content {\n  border: 1px solid #cecfd5;\n  border-radius: 0 0 6px 6px;\n  clear: both;\n  padding: 24px 30px;\n  position: relative;\n  top: -1px;\n}\n.holidayme {\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n#roomPolicy .noDataPresent, #roomPolicy2 .noDataPresent,\n#roomCancellationPolicy2 .noDataPresent,\n#roomCancellationPolicy .noDataPresent {\n  font-size: 24px;\n  text-align: center;\n}\n#roomPolicy .inner-policy_div, #roomPolicy2 .inner-policy_div,\n#roomCancellationPolicy2 .inner-policy_div,\n#roomCancellationPolicy .inner-policy_div {\n  background: #fff;\n  margin: 18px 78px;\n  padding: 7px 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n#roomPolicy .noDataPresent, #roomPolicy2 .noDataPresent,\n#roomCancellationPolicy2 .noDataPresent,\n#roomCancellationPolicy .noDataPresent {\n  font-size: 24px;\n  text-align: center;\n}\n#roomPolicy .inner-policy_div, #roomPolicy2 .inner-policy_div,\n#roomCancellationPolicy2 .inner-policy_div,\n#roomCancellationPolicy .inner-policy_div {\n  background: #fff;\n  margin: 18px 78px;\n  padding: 7px 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n#roomAmenities, #roomAmenities2 {\n  padding: 33px 65px;\n  font-size: 24px;\n  max-height: 300px;\n  overflow-y: scroll;\n}\n#roomAmenities .amenityborder, #roomAmenities2 .amenityborder {\n  border-radius: 3px;\n  margin: 0 5px 5px 0;\n  padding: 3px;\n}\nsmall.nonRefundable span {\n  color: #f00 !important;\n  font-size: 12px;\n}\n.back_arrow_icon {\n  background: url(\"/assets/images/back-arrow.svg\") no-repeat 10% center;\n  background-size: cover;\n  width: 25px;\n  height: 25px;\n}\n.back-to-search {\n  border: none;\n  padding-left: 0;\n  background: none;\n  outline: none;\n}\n.back-to-search:hover {\n  background: none;\n  color: #d32f2f;\n  outline: none;\n}\n.trnsfer {\n  transform: rotate(275deg);\n}\n.boxradus_hotel {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-clip: padding-box;\n  outline: 0;\n  height: calc(100vh - 97px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.boxradus_hotel .tab-content {\n  border: none !important;\n}\n.boxradus_hotel .tab-content .tab-pane.active {\n  border: 2px solid #d32f2f;\n}\n.ovaralldiv9 {\n  height: 330px;\n  width: 100%;\n  padding: 13px;\n}\n.ovaralldiv9 img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.hotelimgegallery {\n  padding: 13px 0 13px 0;\n}\n.smallwidthh {\n  height: 100px;\n  width: 100%;\n}\n.smallwidthh img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.fsubimg {\n  padding: 0 0 2px 0;\n}\n.ssubimg {\n  padding: 2px 0;\n}\n.tsubimg {\n  padding: 2px 0 0 0;\n  position: relative;\n}\n.viewallimages {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  bottom: 0px;\n  top: 0;\n  background-color: #0000008a;\n  text-align: center;\n}\n.viewallimages img {\n  height: 20px;\n  width: 20px;\n  margin-top: 25px;\n}\n.viewallimages p {\n  color: white;\n  font-size: 14px;\n}\n.hotel_photo_gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n  height: 340px;\n  padding: 10px;\n}\n.hotel_photo_gallery img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.hotel_photo_gallery .firstimg {\n  grid-column: 1/3;\n  grid-row: 1/4;\n}\n.hotel_photo_gallery .secongimg {\n  grid-column: 3/4;\n  grid-row: 1;\n}\n.hotel_photo_gallery .thirdimg {\n  grid-column: 3/4;\n  grid-row: 2;\n}\n.hotel_photo_gallery .forthimg {\n  grid-column: 3/4;\n  grid-row: 3;\n}\n.viewHtlShimmer {\n  position: fixed;\n  top: 132px;\n  left: 0;\n  z-index: 9;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvaG90ZWwtZGV0YWlscy1wb3B1cC9ob3RlbC1kZXRhaWxzLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1Yi1hZ2VudC9jcmVhdGUtdHJpcC9jb21wb25lbnRzL2hvdGVsLWRldGFpbHMtcG9wdXAvaG90ZWwtZGV0YWlscy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSx3QkFBQTtFQ0NGOztFRENBO0lBQ0UsK0JBQUE7SUFDQSxhQUFBO0VDRUY7O0VEQUE7SUFDRSxxQkFBQTtJQUNBLGFBQUE7RUNHRjtBQUNGO0FEREE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNHRjtBREZFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSUo7QURBQTtFQUNDLFlBQUE7QUNHRDtBREFBO0VBQ0UsWUFBQTtBQ0dGO0FEQUM7RUFDQyxjQUFBO0FDR0Y7QUREQztFQUNDLFlBQUE7QUNJRjtBREZDO0VBQ0MsMEJBQUE7RUFDQSxlQUFBO0FDS0Y7QURGQztFQUNDLGVBQUE7RUFDQSxjQUFBO0FDS0Y7QURIQTtFQUNFLGlCQUFBO0FDTUY7QURKQTtFQUNFLGVBQUE7QUNPRjtBRExBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUUY7QURMQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ1FGO0FETkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0Y7QURQQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1VGO0FEUkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDV0Y7QURSQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1dGO0FEUkE7RUFDRTtJQUNFLGlCQUFBO0VDV0Y7QUFDRjtBRFRBO0VBQ0U7SUFDRSxrQkFBQTtFQ1dGO0FBQ0Y7QURUQTtFQUNFO0lBQ0UsbUJBQUE7RUNXRjtBQUNGO0FEUkE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1VGO0FEUEE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDVUY7QURQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNVRjtBRFBBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQ1VGO0FEUEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNVRjtBRFRFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDV0o7QURURTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDV0o7QURURTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNXSjtBRE5FO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1NKO0FEUEU7RUFDRSxjQUFBO0FDU0o7QURQRTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1NKO0FEUEU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDU0o7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNRRjtBREZFOzs7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNPSjtBRExFOzs7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDU0o7QURGRTs7O0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDT0o7QURMRTs7O0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1NKO0FETEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUUY7QURQRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDU0o7QURKRTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ09KO0FESEE7RUFDRSxxRUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNNRjtBREhBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNNRjtBRExFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ09KO0FESEE7RUFDRSx5QkFBQTtBQ01GO0FESkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ09GO0FETkU7RUFDRSx1QkFBQTtBQ1FKO0FEUEk7RUFDRSx5QkFBQTtBQ1NOO0FETEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNRRjtBRFBFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtLQUFBLGdCQUFBO0FDU0o7QUROQTtFQUNFLHNCQUFBO0FDU0Y7QURQQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDVUY7QURURTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBQ1dKO0FEUkE7RUFDRSxrQkFBQTtBQ1dGO0FEVEE7RUFDRSxjQUFBO0FDWUY7QURWQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNhRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNjRjtBRGJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ2VKO0FEYkU7RUFDRSxZQUFBO0VBQ0YsZUFBQTtBQ2VGO0FEWkE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ2VGO0FEZEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7QUNnQko7QURkRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ2dCSjtBRGRFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDZ0JKO0FEZEU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNnQko7QURkRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ2dCSjtBRFhBO0VBQ0UsZUFBQTtFQUNFLFVBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWItYWdlbnQvY3JlYXRlLXRyaXAvY29tcG9uZW50cy9ob3RlbC1kZXRhaWxzLXBvcHVwL2hvdGVsLWRldGFpbHMtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vdmFyYWxsZGl2OXtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5ob3RlbGltZ2VnYWxsZXJ5IHtcbiAgICBwYWRkaW5nOiA3cHggMCA3cHggMCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnNtYWxsd2lkdGhoe1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgNnB4O1xuICB9XG59XG4udmlld0h0bCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMzJweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAzLCAzLCAwLjUpO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICB9XG59XG5cbi5oaWdodDg1e1xuIGhlaWdodDogODVweDtcbn1cblxuLmhpZ2h0MjB7XG4gIGhlaWdodDogMjBweDtcbiB9XG5cbiAub3Jhbmdle1xuICBjb2xvcjogI2VhNjcwODtcbiB9XG4gLmdyZWVue1xuICBjb2xvcjogZ3JlZW47XG4gfVxuIC5hbW50U3R5bGV7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE1cHg7XG4gfVxuXG4gLmJveHJhZHVzX2hvdGVsIC5yZWdObyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4NTk3ZjA7XG59XG4uYm94cmFkdXNfaG90ZWwgLnBkbmcge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5ib3hyYWR1c19ob3RlbCAudHh0YWxpZ24ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG4uYm94cmFkdXNfaG90ZWwgLmhvdGVsLW5hbWUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjNTk1ZDZlO1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgbWF4LWhlaWdodDogMzlweDtcbn1cblxuLmJveHJhZHVzX2hvdGVsIC5zdGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNnB4IDAgOHB4IDA7XG59XG4uYm94cmFkdXNfaG90ZWwgLnByaXplIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2QzMmYyZjtcbn1cbi5ib3hyYWR1c19ob3RlbCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5ib3hyYWR1c19ob3RlbCBzdHJvbmcge1xuICBjb2xvcjogI2QzMmYyZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYm94cmFkdXNfaG90ZWwgLmhvdGVsLW5hbWUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjNTk1ZDZlO1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgbWF4LWhlaWdodDogMzlweDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcm91c2VsLWNvbnRhaW5lciAjY2Fyb3VzZWwtdGh1bWJzIGltZyB7XG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJvdXNlbC1jb250YWluZXIgI2Nhcm91c2VsLXRodW1icyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY2Fyb3VzZWwtY29udGFpbmVyICNjYXJvdXNlbC10aHVtYnMge1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2U7XG4gIH1cbn1cblxuLnVpdGstY2VsbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNoZWNraW4sLmNoZWNrb3V0IHtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gODVweCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4gLjFzO1xuICBtaW4taGVpZ2h0OiA4OHB4O1xufVxuXG4ub3BlblBvcHVwe1xuICBjb2xvcjogIzA1NTI5MDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm5pZ2h0cyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIzcHggMzBweCAwIDA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjMDAwO1xufVxuXG4ucm9vbXNHdWVzdHN7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluIC4xcztcbiAgd2lkdGg6IDEwMCU7XG4gIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgaDZ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICB9XG4gIHNwYW5bX25nY29udGVudC1zZXJ2ZXJBcHAtYzZdIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzUyNTI1MjtcbiAgfVxufVxuXG4uaG90ZWwtdGFic3tcbiAgLm5hdi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNmZDU7XG4gICAgY29sb3I6ICMwMDg3Y2M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAubmF2LWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiAjZmY3YjI5O1xuICB9XG4gIC5uYXYtaXRlbS5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzJkYjM0YTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgLnRhYi1jb250ZW50e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNmZDU7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgcGFkZGluZzogMjRweCAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xcHg7XG4gIH1cbn1cblxuLmhvbGlkYXltZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbiNyb29tUG9saWN5LCNyb29tUG9saWN5MixcbiNyb29tQ2FuY2VsbGF0aW9uUG9saWN5MixcbiNyb29tQ2FuY2VsbGF0aW9uUG9saWN5e1xuICAubm9EYXRhUHJlc2VudHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbm5lci1wb2xpY3lfZGl2e1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAxOHB4IDc4cHg7XG4gICAgcGFkZGluZzogN3B4IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbn1cblxuI3Jvb21Qb2xpY3ksI3Jvb21Qb2xpY3kyLFxuI3Jvb21DYW5jZWxsYXRpb25Qb2xpY3kyLFxuI3Jvb21DYW5jZWxsYXRpb25Qb2xpY3l7XG4gIC5ub0RhdGFQcmVzZW50e1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLXBvbGljeV9kaXZ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDE4cHggNzhweDtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuXG4jcm9vbUFtZW5pdGllcywjcm9vbUFtZW5pdGllczJ7XG4gIHBhZGRpbmc6IDMzcHggNjVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAuYW1lbml0eWJvcmRlcntcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cbn1cblxuc21hbGwubm9uUmVmdW5kYWJsZSB7XG4gIHNwYW57XG4gICAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLmJhY2tfYXJyb3dfaWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2stYXJyb3cuc3ZnXCIpIG5vLXJlcGVhdCAxMCUgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYmFjay10by1zZWFyY2gge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogI2QzMmYyZjtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi50cm5zZmVye1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzVkZWcpO1xufVxuLmJveHJhZHVzX2hvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIG91dGxpbmU6IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk3cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC50YWItY29udGVudHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAudGFiLXBhbmUuYWN0aXZle1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2QzMmYyZjtcbiAgICB9XG4gIH1cbn1cbi5vdmFyYWxsZGl2OXtcbiAgaGVpZ2h0OiAzMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGltZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgfVxufVxuLmhvdGVsaW1nZWdhbGxlcnl7XG4gIHBhZGRpbmc6IDEzcHggMCAxM3B4IDA7XG59XG4uc21hbGx3aWR0aGh7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBpbWd7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gIH1cbn1cbi5mc3ViaW1ne1xuICBwYWRkaW5nOiAwIDAgMnB4IDA7XG59XG4uc3N1YmltZ3tcbiAgcGFkZGluZzogMnB4IDA7XG59XG4udHN1YmltZ3tcbiAgcGFkZGluZzogMnB4IDAgMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udmlld2FsbGltYWdlc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwcHg7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDhhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxuICBwe1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uaG90ZWxfcGhvdG9fZ2FsbGVyeXtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgaW1ne1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBmaWxsO1xuICB9XG4gIC5maXJzdGltZ3tcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDEvNDtcbiAgfVxuICAuc2Vjb25naW1ne1xuICAgIGdyaWQtY29sdW1uOiAzLyA0O1xuICAgIGdyaWQtcm93OiAxO1xuICB9XG4gIC50aGlyZGltZ3tcbiAgICBncmlkLWNvbHVtbjogMy8gNDtcbiAgICBncmlkLXJvdzogMjtcbiAgfVxuICAuZm9ydGhpbWd7XG4gICAgZ3JpZC1jb2x1bW46IDMvIDQ7XG4gICAgZ3JpZC1yb3c6IDM7XG4gIH1cbn1cblxuLy9cbi52aWV3SHRsU2hpbW1lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTMycHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3V0bGluZTogMDtcbn0iLCJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vdmFyYWxsZGl2OSB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ob3RlbGltZ2VnYWxsZXJ5IHtcbiAgICBwYWRkaW5nOiA3cHggMCA3cHggMCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuc21hbGx3aWR0aGgge1xuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgNnB4O1xuICB9XG59XG4udmlld0h0bCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMzJweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgzLCAzLCAzLCAwLjUpO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xufVxuLnZpZXdIdGwgLm1vZGFsLWRpYWxvZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XG59XG5cbi5oaWdodDg1IHtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuXG4uaGlnaHQyMCB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLm9yYW5nZSB7XG4gIGNvbG9yOiAjZWE2NzA4O1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5hbW50U3R5bGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYm94cmFkdXNfaG90ZWwgLnJlZ05vIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzg1OTdmMDtcbn1cblxuLmJveHJhZHVzX2hvdGVsIC5wZG5nIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5ib3hyYWR1c19ob3RlbCAudHh0YWxpZ24ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5ib3hyYWR1c19ob3RlbCAuaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICM1OTVkNmU7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBtYXgtaGVpZ2h0OiAzOXB4O1xufVxuXG4uYm94cmFkdXNfaG90ZWwgLnN0YXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA2cHggMCA4cHggMDtcbn1cblxuLmJveHJhZHVzX2hvdGVsIC5wcml6ZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNkMzJmMmY7XG59XG5cbi5ib3hyYWR1c19ob3RlbCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmJveHJhZHVzX2hvdGVsIHN0cm9uZyB7XG4gIGNvbG9yOiAjZDMyZjJmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib3hyYWR1c19ob3RlbCAuaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICM1OTVkNmU7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBtYXgtaGVpZ2h0OiAzOXB4O1xufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2Fyb3VzZWwtY29udGFpbmVyICNjYXJvdXNlbC10aHVtYnMgaW1nIHtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmNhcm91c2VsLWNvbnRhaW5lciAjY2Fyb3VzZWwtdGh1bWJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jYXJvdXNlbC1jb250YWluZXIgI2Nhcm91c2VsLXRodW1icyB7XG4gICAgYmFja2dyb3VuZDogI2NjY2NjZTtcbiAgfVxufVxuLnVpdGstY2VsbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNoZWNraW4sIC5jaGVja291dCB7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDg1cHgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbiAwLjFzO1xuICBtaW4taGVpZ2h0OiA4OHB4O1xufVxuXG4ub3BlblBvcHVwIHtcbiAgY29sb3I6ICMwNTUyOTA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5uaWdodHMge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAyM3B4IDMwcHggMCAwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzAwMDtcbn1cblxuLnJvb21zR3Vlc3RzIHtcbiAgcGFkZGluZzogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluIDAuMXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvb21zR3Vlc3RzIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzM2MzYzNjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucm9vbXNHdWVzdHMgaDYge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG59XG4ucm9vbXNHdWVzdHMgc3Bhbltfbmdjb250ZW50LXNlcnZlckFwcC1jNl0ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNTI1MjUyO1xufVxuXG4uaG90ZWwtdGFicyAubmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VjZmQ1O1xuICBjb2xvcjogIzAwODdjYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaG90ZWwtdGFicyAubmF2LWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2ZmN2IyOTtcbn1cbi5ob3RlbC10YWJzIC5uYXYtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyZGIzNGE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5ob3RlbC10YWJzIC50YWItY29udGVudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWNmZDU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZzogMjRweCAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbn1cblxuLmhvbGlkYXltZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbiNyb29tUG9saWN5IC5ub0RhdGFQcmVzZW50LCAjcm9vbVBvbGljeTIgLm5vRGF0YVByZXNlbnQsXG4jcm9vbUNhbmNlbGxhdGlvblBvbGljeTIgLm5vRGF0YVByZXNlbnQsXG4jcm9vbUNhbmNlbGxhdGlvblBvbGljeSAubm9EYXRhUHJlc2VudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3Jvb21Qb2xpY3kgLmlubmVyLXBvbGljeV9kaXYsICNyb29tUG9saWN5MiAuaW5uZXItcG9saWN5X2RpdixcbiNyb29tQ2FuY2VsbGF0aW9uUG9saWN5MiAuaW5uZXItcG9saWN5X2RpdixcbiNyb29tQ2FuY2VsbGF0aW9uUG9saWN5IC5pbm5lci1wb2xpY3lfZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAxOHB4IDc4cHg7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNyb29tUG9saWN5IC5ub0RhdGFQcmVzZW50LCAjcm9vbVBvbGljeTIgLm5vRGF0YVByZXNlbnQsXG4jcm9vbUNhbmNlbGxhdGlvblBvbGljeTIgLm5vRGF0YVByZXNlbnQsXG4jcm9vbUNhbmNlbGxhdGlvblBvbGljeSAubm9EYXRhUHJlc2VudCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3Jvb21Qb2xpY3kgLmlubmVyLXBvbGljeV9kaXYsICNyb29tUG9saWN5MiAuaW5uZXItcG9saWN5X2RpdixcbiNyb29tQ2FuY2VsbGF0aW9uUG9saWN5MiAuaW5uZXItcG9saWN5X2RpdixcbiNyb29tQ2FuY2VsbGF0aW9uUG9saWN5IC5pbm5lci1wb2xpY3lfZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAxOHB4IDc4cHg7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNyb29tQW1lbml0aWVzLCAjcm9vbUFtZW5pdGllczIge1xuICBwYWRkaW5nOiAzM3B4IDY1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbiNyb29tQW1lbml0aWVzIC5hbWVuaXR5Ym9yZGVyLCAjcm9vbUFtZW5pdGllczIgLmFtZW5pdHlib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMCA1cHggNXB4IDA7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuc21hbGwubm9uUmVmdW5kYWJsZSBzcGFuIHtcbiAgY29sb3I6ICNmMDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYmFja19hcnJvd19pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFjay1hcnJvdy5zdmdcIikgbm8tcmVwZWF0IDEwJSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5iYWNrLXRvLXNlYXJjaCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJhY2stdG8tc2VhcmNoOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNkMzJmMmY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi50cm5zZmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjc1ZGVnKTtcbn1cblxuLmJveHJhZHVzX2hvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIG91dGxpbmU6IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk3cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uYm94cmFkdXNfaG90ZWwgLnRhYi1jb250ZW50IHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYm94cmFkdXNfaG90ZWwgLnRhYi1jb250ZW50IC50YWItcGFuZS5hY3RpdmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDMyZjJmO1xufVxuXG4ub3ZhcmFsbGRpdjkge1xuICBoZWlnaHQ6IDMzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTNweDtcbn1cbi5vdmFyYWxsZGl2OSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuXG4uaG90ZWxpbWdlZ2FsbGVyeSB7XG4gIHBhZGRpbmc6IDEzcHggMCAxM3B4IDA7XG59XG5cbi5zbWFsbHdpZHRoaCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNtYWxsd2lkdGhoIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG59XG5cbi5mc3ViaW1nIHtcbiAgcGFkZGluZzogMCAwIDJweCAwO1xufVxuXG4uc3N1YmltZyB7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4udHN1YmltZyB7XG4gIHBhZGRpbmc6IDJweCAwIDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmlld2FsbGltYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMHB4O1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4YTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnZpZXdhbGxpbWFnZXMgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi52aWV3YWxsaW1hZ2VzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhvdGVsX3Bob3RvX2dhbGxlcnkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xuICBoZWlnaHQ6IDM0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmhvdGVsX3Bob3RvX2dhbGxlcnkgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbn1cbi5ob3RlbF9waG90b19nYWxsZXJ5IC5maXJzdGltZyB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGdyaWQtcm93OiAxLzQ7XG59XG4uaG90ZWxfcGhvdG9fZ2FsbGVyeSAuc2Vjb25naW1nIHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDE7XG59XG4uaG90ZWxfcGhvdG9fZ2FsbGVyeSAudGhpcmRpbWcge1xuICBncmlkLWNvbHVtbjogMy80O1xuICBncmlkLXJvdzogMjtcbn1cbi5ob3RlbF9waG90b19nYWxsZXJ5IC5mb3J0aGltZyB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiAzO1xufVxuXG4udmlld0h0bFNoaW1tZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTMycHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: HotelDetailsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailsPopupComponent", function() { return HotelDetailsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_adapters_sub_agent_create_trip_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/adapters/sub-agent/create-trip-adapter */ "./src/app/adapters/sub-agent/create-trip-adapter.ts");
/* harmony import */ var src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/helper-service */ "./src/app/common/services/helper-service.ts");
/* harmony import */ var src_app_helpers_sub_agent_create_trip_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/sub-agent/create-trip-helpers */ "./src/app/helpers/sub-agent/create-trip-helpers.ts");
/* harmony import */ var src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/stores/app.store */ "./src/app/stores/app.store.ts");
/* harmony import */ var _create_trip_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../create-trip-api-service */ "./src/app/components/sub-agent/create-trip/create-trip-api-service.ts");









var HotelDetailsPopupComponent = /** @class */ (function () {
    function HotelDetailsPopupComponent(commonService, helperService, appStore, notifyService, translate) {
        this.commonService = commonService;
        this.helperService = helperService;
        this.appStore = appStore;
        this.notifyService = notifyService;
        this.translate = translate;
        this.showHotelDetails = false;
        this.totalRoomPrice = 0;
        this.search = "";
        this.selectedRoomDetails = false;
        this.createTripAdapter = new src_app_adapters_sub_agent_create_trip_adapter__WEBPACK_IMPORTED_MODULE_3__["CreateTripAdapter"](this.helperService, this.appStore);
        this.createTripSupport = new src_app_helpers_sub_agent_create_trip_helpers__WEBPACK_IMPORTED_MODULE_5__["CreateTripHelper"](this.helperService);
        this.handleNotif = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /*
     * this method for notify parent component
     */
    HotelDetailsPopupComponent.prototype.onNotify = function () {
        this.handleNotif.emit("notify parent");
    };
    HotelDetailsPopupComponent.prototype.ngOnInit = function () {
    };
    HotelDetailsPopupComponent.prototype.ngOnChanges = function () {
        this.a = true;
        this.totalTravellers = this.appStore.adultCount + this.appStore.childCount;
        this.selectedHotel = this.hotelData;
        this.rooms = this.appStore.roomArray;
        /*
         * this method for fetching selected hotel details
         */
        this.setData();
    };
    /*
       * this method for setting dom data
       */
    HotelDetailsPopupComponent.prototype.setData = function () {
        var x = this.createTripSupport.setDataForHotelDeatils(this.hotelData, this.hotelInfo, this.rooms);
        if (x && x.roomGroups.length > 0) {
            this.a = false;
            this.appStore.showHotelDetailsShimmer = false;
            this.showHotelDetailsShimmer = false;
            this.showHotelDetails = true;
            this.selectedRoomGroups = x.roomGroups;
            this.makkaSelectActivate = x.isSelectBtnActive;
            this.noOfDays = x.diffDays;
            this.hotelPics = x.hotelPics;
            this.isGrouped = x.isGrouped;
            this.noOfImages = this.hotelPics.length;
            if (x.roomPrice > 0) {
                this.totalRoomPrice = x.roomPrice;
            }
        }
    };
    /*
     * this method for hide hotel popup
     */
    HotelDetailsPopupComponent.prototype.hideHotelDetailsPupup = function () {
        this.showHotelDetails = false;
        this.appStore.showHotelDetails = false;
    };
    /*
     * this method for booking hotel
     */
    HotelDetailsPopupComponent.prototype.bookHotel = function () {
        var _this = this;
        this.showHotelDetails = false;
        this.appStore.stepperIndex += 1;
        this.makkahticked = true;
        this.makkahloader = false;
        this.makkahticked = true;
        this.madeendetailshow = true;
        this.showHotelDetailsShimmer = false;
        if (!this.appStore.customeTripId) {
            this.commonService.saveSelectedHotel(this.createTripAdapter.bookHotelRequest(this.isGrouped, this.selectedRoomGroups, this.hotelData, this.hotelInfo)).subscribe(function (data) {
                _this.appStore.customeTripId = data.id;
                _this.onNotify();
            });
        }
        if (this.appStore.customeTripId) {
            this.commonService.updateCustomTrip(this.appStore.customeTripId, this.createTripAdapter.bookHotelRequest(this.isGrouped, this.selectedRoomGroups, this.hotelData, this.hotelInfo)).subscribe(function (data) {
                _this.appStore.customeTripId = data.id;
                _this.onNotify();
            });
        }
    };
    /*
     * this method for selecting room
     */
    HotelDetailsPopupComponent.prototype.roomSelectionCheckboxChecked = function (i, j) {
        if (this.selectedRoomGroups[i].rooms.length > 0) {
            for (var k = 0; k < this.selectedRoomGroups[i].rooms.length; k++) {
                if (this.selectedRoomGroups[i].rooms[k].isRoomSelectionChecked) {
                    this.selectedRoomGroups[i].rooms[k].isRoomSelectionChecked = !this
                        .selectedRoomGroups[i].rooms[k].isRoomSelectionChecked;
                    this.totalRoomPrice =
                        this.totalRoomPrice - this.selectedRoomGroups[i].rooms[k].amount;
                }
            }
        }
        if (!this.selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
            this.selectedRoomGroups[i].rooms[j].isRoomSelectionChecked = !this
                .selectedRoomGroups[i].rooms[j].isRoomSelectionChecked;
            this.totalRoomPrice =
                this.totalRoomPrice + this.selectedRoomGroups[i].rooms[j].amount;
            this.makkaSelectActivate = true;
        }
    };
    /*
     * this method for selecting room if it is grouped
     */
    HotelDetailsPopupComponent.prototype.isGroupedRadioClicked = function (i, j) {
        this.selectedRoomCount = 0;
        this.totalRoomPrice = 0;
        for (var k = 0; k < this.selectedRoomGroups.length; k++) {
            this.selectedRoomGroups[k].isRoomSelectionChecked = false;
        }
        this.totalRoomPrice = this.selectedRoomGroups[i].rooms[j].insertedAmount;
        this.selectedRoomGroups[i].isRoomSelectionChecked = true;
        this.selectedRoomCount = this.rooms.length;
        this.makkaSelectActivate = true;
    };
    /*
     * this method for show room details popup
     */
    HotelDetailsPopupComponent.prototype.showRoomDetailsPopUp = function (room) {
        this.selectedRoomInfo = room;
        this.selectedRoomDetails = !this.selectedRoomDetails;
    };
    HotelDetailsPopupComponent.prototype.viewAllImagePopup = function () {
        this.roomImageGallery = !this.roomImageGallery;
    };
    HotelDetailsPopupComponent.ctorParameters = function () { return [
        { type: _create_trip_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
        { type: src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
        { type: src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_7__["AppStore"] },
        { type: src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotelDetailsPopupComponent.prototype, "hotelInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotelDetailsPopupComponent.prototype, "hotelData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HotelDetailsPopupComponent.prototype, "handleNotif", void 0);
    HotelDetailsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-hotel-details-popup",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hotel-details-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.html")).default,
            providers: [src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hotel-details-popup.component.scss */ "./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.scss")).default]
        })
    ], HotelDetailsPopupComponent);
    return HotelDetailsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".viewiHotelmages {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(3, 3, 3, 0.9);\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n.viewiHotelmages .modal-dialog {\n  max-width: 100%;\n  margin: 0;\n  border-radius: 0px;\n  pointer-events: auto;\n}\n.viewiHotelmages .mt80 {\n  margin-top: 80px;\n}\n.viewiHotelmages .htlimgpopupclose {\n  margin-right: 20px;\n  cursor: pointer;\n}\n.viewiHotelmages .htlimgpopupclose img {\n  height: 32px;\n}\n.viewiHotelmages .mainimageshow {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  height: 50vh;\n}\n.viewiHotelmages .slideimagespop {\n  height: 100px;\n  width: 200px;\n}\n.viewiHotelmages .mrgntop80 {\n  margin-top: 2%;\n}\n.viewiHotelmages .borderseslctimg {\n  border: 2px solid red;\n}\n.positionofbottom {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n}\n.listingimages {\n  height: 100px;\n  cursor: pointer;\n  max-width: 185px !important;\n}\n.mtb20 {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvaG90ZWwtaW1hZ2UtcG9wdXAvaG90ZWwtaW1hZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvaG90ZWwtaW1hZ2UtcG9wdXAvaG90ZWwtaW1hZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0o7QURBSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0VOO0FEQUk7RUFDRSxnQkFBQTtBQ0VOO0FEQUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFTjtBRERNO0VBQ0UsWUFBQTtBQ0dSO0FEQUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFTjtBREFJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNFTjtBREFJO0VBQ0UsY0FBQTtBQ0VOO0FEQUk7RUFDRSxxQkFBQTtBQ0VOO0FERUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRUo7QURBRTtFQUNFLGNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvaG90ZWwtaW1hZ2UtcG9wdXAvaG90ZWwtaW1hZ2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlld2lIb3RlbG1hZ2Vze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiKDMgMyAzIC8gOTAlKTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3V0bGluZTogMDtcbiAgICAubW9kYWwtZGlhbG9ne1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICAgIC5tdDgwe1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICB9XG4gICAgLmh0bGltZ3BvcHVwY2xvc2V7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1haW5pbWFnZXNob3d7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgIH1cbiAgICAuc2xpZGVpbWFnZXNwb3B7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgIH1cbiAgICAubXJnbnRvcDgwe1xuICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgfVxuICAgIC5ib3JkZXJzZXNsY3RpbWd7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIFxuICAgIH1cbiAgfVxuICAucG9zaXRpb25vZmJvdHRvbXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDUwcHg7XG4gIH1cbiAgLmxpc3RpbmdpbWFnZXN7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxODVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5tdGIyMHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxuIiwiLnZpZXdpSG90ZWxtYWdlcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDMsIDMsIDAuOSk7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogMDtcbn1cbi52aWV3aUhvdGVsbWFnZXMgLm1vZGFsLWRpYWxvZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnZpZXdpSG90ZWxtYWdlcyAubXQ4MCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4udmlld2lIb3RlbG1hZ2VzIC5odGxpbWdwb3B1cGNsb3NlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udmlld2lIb3RlbG1hZ2VzIC5odGxpbWdwb3B1cGNsb3NlIGltZyB7XG4gIGhlaWdodDogMzJweDtcbn1cbi52aWV3aUhvdGVsbWFnZXMgLm1haW5pbWFnZXNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLnZpZXdpSG90ZWxtYWdlcyAuc2xpZGVpbWFnZXNwb3Age1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG4udmlld2lIb3RlbG1hZ2VzIC5tcmdudG9wODAge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cbi52aWV3aUhvdGVsbWFnZXMgLmJvcmRlcnNlc2xjdGltZyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLnBvc2l0aW9ub2Zib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDUwcHg7XG59XG5cbi5saXN0aW5naW1hZ2VzIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDE4NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tdGIyMCB7XG4gIG1hcmdpbjogMjBweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: HotelImagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelImagePopupComponent", function() { return HotelImagePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelImagePopupComponent = /** @class */ (function () {
    function HotelImagePopupComponent() {
        this.customOptions = {
            loop: true,
            autoWidth: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['&#8249;', '&#8250;'],
            responsive: {
                0: {
                    items: 3
                },
                400: {
                    items: 4
                },
                740: {
                    items: 6
                },
                940: {
                    items: 10
                }
            },
            nav: true
        };
    }
    HotelImagePopupComponent.prototype.ngOnInit = function () {
        this.showHotelImages = true;
        this.hotelRating = 4;
        this.imageshow = 0;
    };
    HotelImagePopupComponent.prototype.closeHtlImgPopup = function () {
        this.showHotelImages = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HotelImagePopupComponent.prototype, "imagecollection", void 0);
    HotelImagePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-image-popup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hotel-image-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hotel-image-popup.component.scss */ "./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.scss")).default]
        })
    ], HotelImagePopupComponent);
    return HotelImagePopupComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .displyflex {\n    display: block !important;\n  }\n\n  .phonenone {\n    display: none !important;\n  }\n\n  .wdth100 {\n    width: 96% !important;\n  }\n\n  .box {\n    height: auto !important;\n  }\n\n  .photo {\n    height: 150px;\n  }\n}\n.shine {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #dee4ea 40%, #f6f7f8 100%);\n  background-repeat: no-repeat;\n  background-size: 440px;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer;\n  -webkit-animation-timing-function: linear;\n}\n.box {\n  height: 200px;\n  background: white;\n  border-radius: 4px;\n  margin: 10px;\n  padding: 10px;\n}\n.filter {\n  margin-top: 148px !important;\n  height: 50px;\n  background: white;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 10px;\n}\n.htl-top {\n  height: 58px;\n  background: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 77px;\n}\n.pdngcont {\n  padding: 10px 16px;\n}\n.lines {\n  height: 30px;\n}\n.mt80 {\n  margin-top: 80px;\n}\n.width20 {\n  width: 15%;\n}\n.width40 {\n  width: 400px;\n}\n.width21 {\n  width: 200px;\n}\n.height140 {\n  height: 140px;\n}\n.photo {\n  display: block !important;\n  width: 300px;\n}\n.width35 {\n  width: 35%;\n}\n.width50 {\n  width: 50%;\n}\n.displyflex {\n  display: flex;\n}\n@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n.minhight100 {\n  min-height: 100vh;\n}\n.hotel_photo_gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n  height: 340px;\n  padding: 10px;\n}\n.hotel_photo_gallery img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.hotel_photo_gallery .firstimg {\n  grid-column: 1/3;\n  grid-row: 1/4;\n}\n.hotel_photo_gallery .secongimg {\n  grid-column: 3/4;\n  grid-row: 1;\n}\n.hotel_photo_gallery .thirdimg {\n  grid-column: 3/4;\n  grid-row: 2;\n}\n.hotel_photo_gallery .forthimg {\n  grid-column: 3/4;\n  grid-row: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvbG9hZGVyLWhvdGVsLXBvcHVwL2xvYWRlci1ob3RlbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdWItYWdlbnQvY3JlYXRlLXRyaXAvY29tcG9uZW50cy9sb2FkZXItaG90ZWwtcG9wdXAvbG9hZGVyLWhvdGVsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSx5QkFBQTtFQ0NKOztFRENFO0lBQ0Usd0JBQUE7RUNFSjs7RURBRTtJQUNFLHFCQUFBO0VDR0o7O0VEREU7SUFDRSx1QkFBQTtFQ0lKOztFREZFO0lBQ0UsYUFBQTtFQ0tKO0FBQ0Y7QURIRTtFQUNFLG1CQUFBO0VBQ0EsK0ZBQUE7RUFPQSw0QkFBQTtFQUNBLHNCQUFBO0VBRUEsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtBQ0ZKO0FES0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRko7QURLRTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNGTDtBRElFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNETjtBREdFO0VBQ0Usa0JBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtBQ0NKO0FEQ0U7RUFDRSxnQkFBQTtBQ0VKO0FEQ0U7RUFDRSxVQUFBO0FDRUo7QURDRTtFQUNFLFlBQUE7QUNFSjtBREFFO0VBQ0UsWUFBQTtBQ0dKO0FEQUU7RUFDRSxhQUFBO0FDR0o7QURERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKO0FERkU7RUFDRSxVQUFBO0FDS0o7QURIRTtFQUNFLFVBQUE7QUNNSjtBREpFO0VBQ0UsYUFBQTtBQ09KO0FESkU7RUFDRTtJQUNFLDZCQUFBO0VDT0o7RURKRTtJQUNFLDRCQUFBO0VDTUo7QUFDRjtBREpFO0VBQ0UsaUJBQUE7QUNNSjtBREpFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNPSjtBRE5JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtLQUFBLGdCQUFBO0FDUU47QUROSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ1FOO0FETkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNRTjtBRE5JO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDUU47QUROSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ1FOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWItYWdlbnQvY3JlYXRlLXRyaXAvY29tcG9uZW50cy9sb2FkZXItaG90ZWwtcG9wdXAvbG9hZGVyLWhvdGVsLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5kaXNwbHlmbGV4e1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBob25lbm9uZXtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLndkdGgxMDB7XG4gICAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5ib3h7XG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnBob3Rve1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gIH1cbiAgLnNoaW5lIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmN2Y4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgI2Y2ZjdmOCAwJSxcbiAgICAgICNlZGVlZjEgMjAlLFxuICAgICAgI2RlZTRlYSA0MCUsXG4gICAgICAjZjZmN2Y4IDEwMCVcbiAgICApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA0NDBweDtcbiAgXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbiAgXG4gIC5ib3gge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIFxuICAuZmlsdGVye1xuICAgIG1hcmdpbi10b3A6IDE0OHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5odGwtdG9we1xuICAgIGhlaWdodDogNThweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDc3cHg7XG4gIH1cbiAgLnBkbmdjb250e1xuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgfVxuICAubGluZXMge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAubXQ4MHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICB9XG4gIFxuICAud2lkdGgyMCB7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxuICBcbiAgLndpZHRoNDAge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxuICAud2lkdGgyMXtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgXG4gIC5oZWlnaHQxNDAge1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cbiAgLnBob3RvIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAud2lkdGgzNSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxuICAud2lkdGg1MCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuZGlzcGx5ZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDY4cHggMDtcbiAgICB9XG4gIFxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgICB9XG4gIH1cbiAgLm1pbmhpZ2h0MTAwe1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5ob3RlbF9waG90b19nYWxsZXJ5e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICB9XG4gICAgLmZpcnN0aW1ne1xuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgICAgZ3JpZC1yb3c6IDEvNDtcbiAgICB9XG4gICAgLnNlY29uZ2ltZ3tcbiAgICAgIGdyaWQtY29sdW1uOiAzLyA0O1xuICAgICAgZ3JpZC1yb3c6IDE7XG4gICAgfVxuICAgIC50aGlyZGltZ3tcbiAgICAgIGdyaWQtY29sdW1uOiAzLyA0O1xuICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgfVxuICAgIC5mb3J0aGltZ3tcbiAgICAgIGdyaWQtY29sdW1uOiAzLyA0O1xuICAgICAgZ3JpZC1yb3c6IDM7XG4gICAgfVxuICB9IiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGlzcGx5ZmxleCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waG9uZW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC53ZHRoMTAwIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYm94IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waG90byB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuLnNoaW5lIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjZmN2Y4IDAlLCAjZWRlZWYxIDIwJSwgI2RlZTRlYSA0MCUsICNmNmY3ZjggMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDQwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLmJveCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbHRlciB7XG4gIG1hcmdpbi10b3A6IDE0OHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmh0bC10b3Age1xuICBoZWlnaHQ6IDU4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDc3cHg7XG59XG5cbi5wZG5nY29udCB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbn1cblxuLmxpbmVzIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubXQ4MCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi53aWR0aDIwIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLndpZHRoNDAge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi53aWR0aDIxIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaGVpZ2h0MTQwIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cblxuLnBob3RvIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ud2lkdGgzNSB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi53aWR0aDUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmRpc3BseWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn1cbi5taW5oaWdodDEwMCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaG90ZWxfcGhvdG9fZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMTBweDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gIGhlaWdodDogMzQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaG90ZWxfcGhvdG9fZ2FsbGVyeSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuLmhvdGVsX3Bob3RvX2dhbGxlcnkgLmZpcnN0aW1nIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDEvNDtcbn1cbi5ob3RlbF9waG90b19nYWxsZXJ5IC5zZWNvbmdpbWcge1xuICBncmlkLWNvbHVtbjogMy80O1xuICBncmlkLXJvdzogMTtcbn1cbi5ob3RlbF9waG90b19nYWxsZXJ5IC50aGlyZGltZyB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiAyO1xufVxuLmhvdGVsX3Bob3RvX2dhbGxlcnkgLmZvcnRoaW1nIHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDM7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: LoaderHotelPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderHotelPopupComponent", function() { return LoaderHotelPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderHotelPopupComponent = /** @class */ (function () {
    function LoaderHotelPopupComponent() {
        this.freeArray = ["1", "2", "3", "4"];
    }
    LoaderHotelPopupComponent.prototype.ngOnInit = function () {
    };
    LoaderHotelPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader-hotel-popup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader-hotel-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader-hotel-popup.component.scss */ "./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.scss")).default]
        })
    ], LoaderHotelPopupComponent);
    return LoaderHotelPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/loader/loader.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/loader/loader.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .displyflex {\n    display: block !important;\n  }\n\n  .phonenone {\n    display: none !important;\n  }\n\n  .wdth100 {\n    width: 96% !important;\n  }\n\n  .box {\n    height: auto !important;\n  }\n\n  .photo {\n    height: 150px;\n  }\n}\n.shine {\n  background: #f6f7f8;\n  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #dee4ea 40%, #f6f7f8 100%);\n  background-repeat: no-repeat;\n  background-size: 440px 160px;\n  -webkit-animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-name: placeholderShimmer;\n  -webkit-animation-timing-function: linear;\n}\n.box {\n  height: 200px;\n  background: white;\n  border-radius: 4px;\n  margin: 10px;\n  padding: 10px;\n}\n.filter {\n  margin-top: 148px !important;\n  height: 50px;\n  background: white;\n  border-radius: 5px;\n  margin-top: 10px;\n  padding: 10px;\n}\n.htl-top {\n  height: 58px;\n  background: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 77px;\n}\n.pdngcont {\n  padding: 10px 16px;\n}\n.lines {\n  height: 30px;\n}\n.mt80 {\n  margin-top: 80px;\n}\n.width20 {\n  width: 15%;\n}\n.width40 {\n  width: 400px;\n}\n.width21 {\n  width: 200px;\n}\n.height140 {\n  height: 140px;\n}\n.photo {\n  display: block !important;\n  width: 300px;\n}\n.width35 {\n  width: 35%;\n}\n.width50 {\n  width: 50%;\n}\n.displyflex {\n  display: flex;\n}\n@-webkit-keyframes placeholderShimmer {\n  0% {\n    background-position: -468px 0;\n  }\n  100% {\n    background-position: 468px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdWItYWdlbnQvY3JlYXRlLXRyaXAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx5QkFBQTtFQ0NGOztFRENBO0lBQ0Usd0JBQUE7RUNFRjs7RURBQTtJQUNFLHFCQUFBO0VDR0Y7O0VEREE7SUFDRSx1QkFBQTtFQ0lGOztFREZBO0lBQ0UsYUFBQTtFQ0tGO0FBQ0Y7QURIQTtFQUNFLG1CQUFBO0VBQ0EsK0ZBQUE7RUFPQSw0QkFBQTtFQUNBLDRCQUFBO0VBRUEsOEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSx5Q0FBQTtBQ0ZGO0FES0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRkY7QURLQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNGSDtBRElBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNESjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREVBO0VBQ0UsWUFBQTtBQ0NGO0FEQ0E7RUFDRSxnQkFBQTtBQ0VGO0FEQ0E7RUFDRSxVQUFBO0FDRUY7QURDQTtFQUNFLFlBQUE7QUNFRjtBREFBO0VBQ0UsWUFBQTtBQ0dGO0FEQUE7RUFDRSxhQUFBO0FDR0Y7QUREQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0lGO0FERkE7RUFDRSxVQUFBO0FDS0Y7QURIQTtFQUNFLFVBQUE7QUNNRjtBREpBO0VBQ0UsYUFBQTtBQ09GO0FESkE7RUFDRTtJQUNFLDZCQUFBO0VDT0Y7RURKQTtJQUNFLDRCQUFBO0VDTUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRpc3BseWZsZXh7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAucGhvbmVub25le1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAud2R0aDEwMHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJveHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAucGhvdG97XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuLnNoaW5lIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIHJpZ2h0LFxuICAgICNmNmY3ZjggMCUsXG4gICAgI2VkZWVmMSAyMCUsXG4gICAgI2RlZTRlYSA0MCUsXG4gICAgI2Y2ZjdmOCAxMDAlXG4gICk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDQwcHggMTYwcHg7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBwbGFjZWhvbGRlclNoaW1tZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG4uYm94IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZmlsdGVye1xuICBtYXJnaW4tdG9wOiAxNDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICBwYWRkaW5nOiAxMHB4O1xufVxuLmh0bC10b3B7XG4gIGhlaWdodDogNThweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNzdweDtcbn1cbi5wZG5nY29udHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xufVxuLmxpbmVzIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLm10ODB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi53aWR0aDIwIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLndpZHRoNDAge1xuICB3aWR0aDogNDAwcHg7XG59XG4ud2lkdGgyMXtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaGVpZ2h0MTQwIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi5waG90byB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi53aWR0aDM1IHtcbiAgd2lkdGg6IDM1JTtcbn1cbi53aWR0aDUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5kaXNwbHlmbGV4e1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDY4cHggMDtcbiAgfVxufVxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGlzcGx5ZmxleCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waG9uZW5vbmUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC53ZHRoMTAwIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYm94IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waG90byB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxufVxuLnNoaW5lIHtcbiAgYmFja2dyb3VuZDogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjZmN2Y4IDAlLCAjZWRlZWYxIDIwJSwgI2RlZTRlYSA0MCUsICNmNmY3ZjggMTAwJSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNDQwcHggMTYwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhY2Vob2xkZXJTaGltbWVyO1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLmJveCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpbHRlciB7XG4gIG1hcmdpbi10b3A6IDE0OHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmh0bC10b3Age1xuICBoZWlnaHQ6IDU4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDc3cHg7XG59XG5cbi5wZG5nY29udCB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbn1cblxuLmxpbmVzIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubXQ4MCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi53aWR0aDIwIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLndpZHRoNDAge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi53aWR0aDIxIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uaGVpZ2h0MTQwIHtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cblxuLnBob3RvIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ud2lkdGgzNSB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi53aWR0aDUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmRpc3BseWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcGxhY2Vob2xkZXJTaGltbWVyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/loader/loader.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/loader/loader.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.freeArray = ["1", "2", "3", "4"];
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/loader/loader.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/sub-agent/create-trip/components/loader/loader.component.scss")).default]
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (max-width: 768px) {\n  .phonedisplay {\n    display: inline-block !important;\n  }\n\n  .phonehide {\n    display: none !important;\n  }\n\n  .mat-step-text-label {\n    display: none !important;\n  }\n\n  .hotel_name {\n    white-space: normal !important;\n  }\n\n  .mrhntopphone {\n    margin-top: 190px;\n  }\n}\n.phonedisplay {\n  display: none;\n}\n.pl4 {\n  padding-left: 4px;\n}\n.backbutton {\n  padding: 4px;\n  border-radius: 15px;\n  border: 1px solid #a2c9f5;\n}\n.filter_section_outer,\n.hotel_filter_section {\n  border-radius: 5px;\n  background: #fff;\n  padding: 10px;\n}\n.fliter-arrow div {\n  display: inline;\n}\n.fliter-arrow button {\n  border: none;\n  background: none;\n  outline: none;\n}\n.fliter-arrow button i {\n  color: #d32f2f;\n}\n.haram_filter {\n  padding: 4px 17px;\n  border-radius: 4px;\n  border: 1px solid #d3d3d3;\n  outline: none;\n}\n.padding_hotel1 {\n  padding: 10px;\n}\n.uitk-card {\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  width: 100%;\n}\n.uitk-grid {\n  flex: 1 0 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.link-container {\n  position: relative;\n  width: 100%;\n}\n.uitk-card section {\n  position: relative;\n}\n.uitk-card-media {\n  border-bottom-left-radius: 0.5rem;\n  flex-basis: 20%;\n  display: flex;\n  border-top-left-radius: 0.5rem;\n  flex-grow: 1;\n  overflow: hidden;\n  padding: 5px 9px 5px 5px;\n}\n.uitk-card-media .title {\n  width: 100%;\n}\n.title__media-container {\n  height: 100%;\n}\n.listing-photo-gallery {\n  position: relative;\n}\n.noimghotel {\n  background: url(\"/assets/images/no_image.jpg\") no-repeat 73% center;\n  background-size: cover;\n  width: 100%;\n}\n.photo-gallery {\n  height: 200px;\n  position: relative;\n  width: 300px;\n}\n.photo-gallery img {\n  height: 100%;\n  width: 100%;\n}\n.uitk-card-content {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 65%;\n  min-width: 0;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  width: 100%;\n  display: flex;\n  padding: 0.75rem;\n}\n.result-details-left {\n  width: 70%;\n  float: left;\n  padding-right: 10px;\n}\n.hotel_name {\n  color: #000;\n  line-height: 25px;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: calc(22 / 18);\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.desptn {\n  display: inline-block;\n  width: 100%;\n  white-space: inherit;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n.readmorenavigate {\n  color: #0e82d4;\n  padding: 3px;\n  cursor: pointer;\n}\n.dsplynone {\n  display: none;\n}\n.result-details-right {\n  height: 100%;\n  padding-right: 20px;\n  width: 30%;\n  float: left;\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  margin-top: 20px;\n}\n.hotel_prise {\n  font-weight: 600;\n  font-size: 20px;\n  padding-right: 0px;\n}\n.divexpandanimation {\n  max-height: 34px;\n  transition: max-height 0.5s ease-out;\n}\n.viewHtlShimmer {\n  position: fixed;\n  top: 132px;\n  left: 0;\n  z-index: 9;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvbWFra2EtaG90ZWwvbWFra2EtaG90ZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvbWFra2EtaG90ZWwvbWFra2EtaG90ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGdDQUFBO0VDQ0Y7O0VEQ0E7SUFDRSx3QkFBQTtFQ0VGOztFREFBO0lBQ0Usd0JBQUE7RUNHRjs7RUREQTtJQUNFLDhCQUFBO0VDSUY7O0VERkE7SUFDRSxpQkFBQTtFQ0tGO0FBQ0Y7QURIQTtFQUNFLGFBQUE7QUNLRjtBREZBO0VBQ0UsaUJBQUE7QUNLRjtBREhBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNNRjtBREpBOztFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDT0Y7QURKRTtFQUNFLGVBQUE7QUNPSjtBRExFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ09KO0FETkk7RUFDRSxjQUFBO0FDUU47QURKQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNPRjtBRExBO0VBQ0UsYUFBQTtBQ1FGO0FETkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDU0Y7QURQQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDVUY7QURSQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ1dGO0FEVEE7RUFDRSxrQkFBQTtBQ1lGO0FEVkE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ2FGO0FEWEE7RUFDRSxXQUFBO0FDY0Y7QURaQTtFQUNFLFlBQUE7QUNlRjtBRGJBO0VBQ0Usa0JBQUE7QUNnQkY7QURkQTtFQUNFLG1FQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDaUJGO0FEZkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDa0JGO0FEaEJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNtQkY7QURqQkE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ29CRjtBRGxCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNxQkY7QURuQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3NCRjtBRHBCQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ3VCRjtBRHJCQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ3dCRjtBRHRCQTtFQUNFLGFBQUE7QUN5QkY7QUR2QkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUMwQkY7QUR4QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzJCRjtBRHpCQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7QUM0QkY7QUQxQkE7RUFDRSxlQUFBO0VBQ0UsVUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDNkJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdWItYWdlbnQvY3JlYXRlLXRyaXAvY29tcG9uZW50cy9tYWtrYS1ob3RlbC9tYWtrYS1ob3RlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBob25lZGlzcGxheXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAucGhvbmVoaWRle1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAubWF0LXN0ZXAtdGV4dC1sYWJlbHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhvdGVsX25hbWV7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG4gIC5tcmhudG9wcGhvbmV7XG4gICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gIH1cbn1cbi5waG9uZWRpc3BsYXl7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wbDR7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmJhY2tidXR0b257XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYzlmNTtcbn1cbi5maWx0ZXJfc2VjdGlvbl9vdXRlcixcbi5ob3RlbF9maWx0ZXJfc2VjdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mbGl0ZXItYXJyb3cge1xuICBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaSB7XG4gICAgICBjb2xvcjogI2QzMmYyZjtcbiAgICB9XG4gIH1cbn1cbi5oYXJhbV9maWx0ZXIge1xuICBwYWRkaW5nOiA0cHggMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBhZGRpbmdfaG90ZWwxe1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnVpdGstY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi51aXRrLWdyaWQge1xuICBmbGV4OiAxIDAgMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmxpbmstY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi51aXRrLWNhcmQgc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51aXRrLWNhcmQtbWVkaWF7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgZmxleC1iYXNpczogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4IDlweCA1cHggNXB4O1xufVxuLnVpdGstY2FyZC1tZWRpYSAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi50aXRsZV9fbWVkaWEtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmxpc3RpbmctcGhvdG8tZ2FsbGVyeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ub2ltZ2hvdGVse1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9ub19pbWFnZS5qcGdcIikgbm8tcmVwZWF0IDczJSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBob3RvLWdhbGxlcnkge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5waG90by1nYWxsZXJ5IGltZ3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi51aXRrLWNhcmQtY29udGVudHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1iYXNpczogNjUlO1xuICBtaW4td2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG59XG4ucmVzdWx0LWRldGFpbHMtbGVmdCB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmhvdGVsX25hbWUge1xuICBjb2xvcjogIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMjIgLyAxOCk7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG59XG4uZGVzcHRue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5yZWFkbW9yZW5hdmlnYXRle1xuICBjb2xvcjogIzBlODJkNDtcbiAgcGFkZGluZzogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHNwbHlub25le1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJlc3VsdC1kZXRhaWxzLXJpZ2h0e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhvdGVsX3ByaXNle1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5kaXZleHBhbmRhbmltYXRpb257XG4gIG1heC1oZWlnaHQ6IDM0cHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLW91dDtcbn1cbi52aWV3SHRsU2hpbW1lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTMycHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3V0bGluZTogMDtcbn1cblxuXG5cblxuXG5cblxuIiwiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGhvbmVkaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5waG9uZWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtc3RlcC10ZXh0LWxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaG90ZWxfbmFtZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1yaG50b3BwaG9uZSB7XG4gICAgbWFyZ2luLXRvcDogMTkwcHg7XG4gIH1cbn1cbi5waG9uZWRpc3BsYXkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucGw0IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTJjOWY1O1xufVxuXG4uZmlsdGVyX3NlY3Rpb25fb3V0ZXIsXG4uaG90ZWxfZmlsdGVyX3NlY3Rpb24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5mbGl0ZXItYXJyb3cgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmZsaXRlci1hcnJvdyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZmxpdGVyLWFycm93IGJ1dHRvbiBpIHtcbiAgY29sb3I6ICNkMzJmMmY7XG59XG5cbi5oYXJhbV9maWx0ZXIge1xuICBwYWRkaW5nOiA0cHggMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucGFkZGluZ19ob3RlbDEge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udWl0ay1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udWl0ay1ncmlkIHtcbiAgZmxleDogMSAwIDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxpbmstY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVpdGstY2FyZCBzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udWl0ay1jYXJkLW1lZGlhIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHggOXB4IDVweCA1cHg7XG59XG5cbi51aXRrLWNhcmQtbWVkaWEgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZV9fbWVkaWEtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlzdGluZy1waG90by1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm9pbWdob3RlbCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL25vX2ltYWdlLmpwZ1wiKSBuby1yZXBlYXQgNzMlIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5waG90by1nYWxsZXJ5IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5waG90by1nYWxsZXJ5IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51aXRrLWNhcmQtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtYmFzaXM6IDY1JTtcbiAgbWluLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuXG4ucmVzdWx0LWRldGFpbHMtbGVmdCB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uaG90ZWxfbmFtZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogY2FsYygyMiAvIDE4KTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kZXNwdG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnJlYWRtb3JlbmF2aWdhdGUge1xuICBjb2xvcjogIzBlODJkNDtcbiAgcGFkZGluZzogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kc3BseW5vbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmVzdWx0LWRldGFpbHMtcmlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaG90ZWxfcHJpc2Uge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmRpdmV4cGFuZGFuaW1hdGlvbiB7XG4gIG1heC1oZWlnaHQ6IDM0cHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLW91dDtcbn1cblxuLnZpZXdIdGxTaGltbWVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEzMnB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5O1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MakkaHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakkaHotelComponent", function() { return MakkaHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_adapters_sub_agent_create_trip_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/adapters/sub-agent/create-trip-adapter */ "./src/app/adapters/sub-agent/create-trip-adapter.ts");
/* harmony import */ var src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/services/helper-service */ "./src/app/common/services/helper-service.ts");
/* harmony import */ var src_app_helpers_sub_agent_create_trip_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/helpers/sub-agent/create-trip-helpers */ "./src/app/helpers/sub-agent/create-trip-helpers.ts");
/* harmony import */ var src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/stores/app.store */ "./src/app/stores/app.store.ts");
/* harmony import */ var _create_trip_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../create-trip-api-service */ "./src/app/components/sub-agent/create-trip/create-trip-api-service.ts");












var MakkaHotelComponent = /** @class */ (function () {
    function MakkaHotelComponent(commonService, notifyService, translateService, appStore, datepipe, router, helperService) {
        this.commonService = commonService;
        this.notifyService = notifyService;
        this.translateService = translateService;
        this.appStore = appStore;
        this.datepipe = datepipe;
        this.router = router;
        this.helperService = helperService;
        this.selectedCurrency = "SAR";
        this.isHotelsSortedByPrice = false;
        this.createTripAdapter = new src_app_adapters_sub_agent_create_trip_adapter__WEBPACK_IMPORTED_MODULE_5__["CreateTripAdapter"](this.helperService, this.appStore);
        this.createTripSupport = new src_app_helpers_sub_agent_create_trip_helpers__WEBPACK_IMPORTED_MODULE_7__["CreateTripHelper"](this.helperService);
        this.search = "";
        this.notifyGrandparent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    MakkaHotelComponent.prototype.childEvent = function (event) {
        this.notifyGrandparent.emit('event');
    };
    MakkaHotelComponent.prototype.ngOnInit = function () {
    };
    /*
   * this method for sorting hotel list according to price,haram distance
   */
    MakkaHotelComponent.prototype.sortHotelList = function (asnd, dsnd, base) {
        if (asnd && base == "price") {
            this.hotelsList.sort(function (a, b) { return a.amount - b.amount; });
            this.isHotelsSortedByPrice = true;
        }
        if (dsnd && base == "price") {
            this.hotelsList.reverse();
            this.isHotelsSortedByPrice = false;
        }
        if (asnd && base == "hararamDistance") {
            this.hotelsList.sort(function (a, b) { return a.haram_distance - b.haram_distance; });
            this.isHotelListSortedByHaramDistance = true;
        }
        if (dsnd && "hararamDistance") {
            this.hotelsList.reverse();
            this.isHotelListSortedByHaramDistance = false;
        }
    };
    /*
  * this method for showing hotelDetails PopUp
  */
    MakkaHotelComponent.prototype.showHotelDetailsPopUp = function (item) {
        this.showDetailsShimmer = true;
        this.hotelInfo = item;
        this.appStore.showHotelDetails = true;
        this.appStore.showHotelDetailsShimmer = true;
        this.showHotelDetailsShimmer = true;
        this.selectedRoomCount = 0;
        this.selectedTravellersCount = 0;
        this.totalRoomPrice = 0;
        this.fetchSelectedHotelInfo(item);
    };
    /*
     * this method for setting lang and currency
     */
    MakkaHotelComponent.prototype.setDefaultLangAndCurrency = function () {
        if (typeof this.selectedCurrency == "undefined") {
            this.selectedCurrency = "SAR";
        }
        if (typeof this.selectedLanguage == "undefined") {
            var lang = this.selectedLanguage = "en-US";
        }
    };
    /*
     * this method for fetching selected hotel details
     */
    MakkaHotelComponent.prototype.fetchSelectedHotelInfo = function (item) {
        var _this = this;
        this.setDefaultLangAndCurrency();
        this.commonService.getSelectedHotelInfo(this.createTripAdapter.selectedHotelInfoRequest(this.selectedLanguage, item, this.search), this.selectedCurrency, this.selectedLanguage).subscribe(function (data) {
            _this.hotelData = data;
            _this.showHotelDetails = true;
            _this.showDetailsShimmer = false;
        }, function (error) {
            _this.showDetailsShimmer = false;
            _this.notifyService.showWarning(_this.translateService.instant("No details availabe"));
        });
    };
    /*
    * this method for navigate to first page
    */
    MakkaHotelComponent.prototype.backToHomePage = function () {
        this.router.navigate(["/firstpage"]);
    };
    /**
    * this method for checking model status
    */
    MakkaHotelComponent.prototype.ngDoCheck = function () {
        if (this.appStore.showHotelDetails) {
            this.showHotelDetails = true;
        }
        else if (!this.appStore.showHotelDetails) {
            this.showHotelDetails = false;
        }
        if (this.appStore.showHotelDetailsShimmer) {
            this.showHotelDetailsShimmer = true;
        }
        if (!this.appStore.showHotelDetailsShimmer) {
            this.showHotelDetailsShimmer = false;
        }
        //alert(this.showHotelDetailsShimmer)
        if (this.hotelsList.length > 0) {
            this.appStore.showShimmer = false;
        }
    };
    MakkaHotelComponent.prototype.readMore = function (event, i) {
        document.getElementById("readLessBttn" + i).style.display = "inline-block";
        document.getElementById("readMoreBttn" + i).style.display = "none";
        event.target.previousElementSibling.style.maxHeight = event.target.previousElementSibling.scrollHeight + "px";
    };
    MakkaHotelComponent.prototype.readLess = function (event, i) {
        document.getElementById("readLessBttn" + i).style.display = "none";
        document.getElementById("readMoreBttn" + i).style.display = "inline-block";
        event.target.previousElementSibling.previousElementSibling.style.maxHeight = null;
    };
    MakkaHotelComponent.ctorParameters = function () { return [
        { type: _create_trip_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
        { type: src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_9__["AppStore"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], MakkaHotelComponent.prototype, "hotelsList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], MakkaHotelComponent.prototype, "notifyGrandparent", void 0);
    MakkaHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-makka-hotel",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./makka-hotel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./makka-hotel.component.scss */ "./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.scss")).default]
        })
    ], MakkaHotelComponent);
    return MakkaHotelComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvcGF5bWVudC1ob3RlbC9wYXltZW50LWhvdGVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PaymentHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHotelComponent", function() { return PaymentHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentHotelComponent = /** @class */ (function () {
    function PaymentHotelComponent() {
    }
    PaymentHotelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentHotelComponent.prototype, "tripHotel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentHotelComponent.prototype, "city1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaymentHotelComponent.prototype, "city2", void 0);
    PaymentHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-hotel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-hotel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-hotel.component.scss */ "./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.scss")).default]
        })
    ], PaymentHotelComponent);
    return PaymentHotelComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvcm9vbS1kZXRhaWxzLXBvcHVwL3Jvb20tZGV0YWlscy1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RoomDetailsPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailsPopupComponent", function() { return RoomDetailsPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoomDetailsPopupComponent = /** @class */ (function () {
    function RoomDetailsPopupComponent() {
    }
    RoomDetailsPopupComponent.prototype.ngOnInit = function () {
        this.selectedRoomDetails = true;
    };
    /*
   * this method for hide room details popup
   */
    RoomDetailsPopupComponent.prototype.hideRoomDetailsPopUp = function () {
        this.selectedRoomDetails = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RoomDetailsPopupComponent.prototype, "setViewData", void 0);
    RoomDetailsPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-details-popup',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./room-details-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./room-details-popup.component.scss */ "./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.scss")).default]
        })
    ], RoomDetailsPopupComponent);
    return RoomDetailsPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/transport/transport.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/transport/transport.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".makeFlex.hrtlCenter {\n  align-items: center;\n  -moz-box-align: center;\n  display: flex;\n}\n\n.slideItem {\n  padding: 0px 10px 10px 0;\n  border: none;\n  outline: none;\n  width: 100%;\n  display: inline-block;\n}\n\n.itemCard {\n  border-radius: 6px;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);\n  background-color: #ffffff;\n  margin: 5px 10px 5px 2px;\n  padding: 0 15px 15px;\n}\n\n.makeFlex.column {\n  flex-direction: column;\n}\n\n.cardInnerInfo {\n  height: 1auto;\n}\n\n.slideItem .itemThumb {\n  width: 120px;\n  margin-top: -20px;\n}\n\n.makeFlex.hrtlCenter {\n  align-items: center;\n  -moz-box-align: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhYmVlbC9EZXNrdG9wL25ldy11bXJhaC9zcmMvYXBwL2NvbXBvbmVudHMvc3ViLWFnZW50L2NyZWF0ZS10cmlwL2NvbXBvbmVudHMvdHJhbnNwb3J0L3RyYW5zcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zdWItYWdlbnQvY3JlYXRlLXRyaXAvY29tcG9uZW50cy90cmFuc3BvcnQvdHJhbnNwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDR0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1Yi1hZ2VudC9jcmVhdGUtdHJpcC9jb21wb25lbnRzL3RyYW5zcG9ydC90cmFuc3BvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFrZUZsZXguaHJ0bENlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbGlkZUl0ZW0ge1xuICBwYWRkaW5nOiAwcHggMTBweCAxMHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLml0ZW1DYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogNXB4IDEwcHggNXB4IDJweDtcbiAgcGFkZGluZzogMCAxNXB4IDE1cHg7XG59XG5cbi5tYWtlRmxleC5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbn1cblxuLmNhcmRJbm5lckluZm8ge1xuICBoZWlnaHQ6IDFhdXRvO1xufVxuXG4uc2xpZGVJdGVtIC5pdGVtVGh1bWIge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4ubWFrZUZsZXguaHJ0bENlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59IiwiLm1ha2VGbGV4LmhydGxDZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2xpZGVJdGVtIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMTBweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pdGVtQ2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDVweCAxMHB4IDVweCAycHg7XG4gIHBhZGRpbmc6IDAgMTVweCAxNXB4O1xufVxuXG4ubWFrZUZsZXguY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG59XG5cbi5jYXJkSW5uZXJJbmZvIHtcbiAgaGVpZ2h0OiAxYXV0bztcbn1cblxuLnNsaWRlSXRlbSAuaXRlbVRodW1iIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLm1ha2VGbGV4LmhydGxDZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/components/transport/transport.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/components/transport/transport.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TransportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportComponent", function() { return TransportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/helper-service */ "./src/app/common/services/helper-service.ts");
/* harmony import */ var src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/stores/app.store */ "./src/app/stores/app.store.ts");
/* harmony import */ var _create_trip_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../create-trip-api-service */ "./src/app/components/sub-agent/create-trip/create-trip-api-service.ts");







var TransportComponent = /** @class */ (function () {
    function TransportComponent(healperService, notifyService, commonService, translateService, appStore) {
        this.healperService = healperService;
        this.notifyService = notifyService;
        this.commonService = commonService;
        this.translateService = translateService;
        this.appStore = appStore;
        this.notifyGrandparent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TransportComponent.prototype.onNotify = function () {
        this.notifyGrandparent.emit("notify parent");
    };
    TransportComponent.prototype.ngOnInit = function () { };
    /**
     * This method is for booking vehicles
     */
    TransportComponent.prototype.bookTransport = function (company_code, vehicle) {
        var _this = this;
        var start_date_formatted = this.healperService.dateFormaterMdy(this.appStore.userDetails.makkahCheckinDate)
            ? this.healperService.dateFormaterYMd(this.appStore.userDetails.makkahCheckinDate)
            : this.healperService.dateFormaterYMd(this.appStore.userDetails.transportStartDate);
        var end_date_formatted = this.appStore.stepsArray.includes("2")
            ? this.healperService.dateFormaterYMd(this.appStore.userDetails.madeenaCheckoutDate)
            : this.healperService.dateFormaterYMd(this.appStore.userDetails.makkahCheckoutDate);
        var arrayList = [];
        var travellerCount = this.appStore.adultCount + this.appStore.childCount;
        var firstcategory = [];
        var secondcategory = [];
        var thirdcategory = [];
        var code = vehicle.vehicle_type_code[0];
        if (code == "1") {
            var x = [vehicle];
            x.forEach(function (x, index) {
                var category = {
                    code: x.categories[0].category_code,
                    additional_services: x.categories[0].additional_services
                        .filter(function (a) { return a.selected == true; })
                        .map(function (a) { return a.additional_service_code; }),
                    quantity: Math.ceil(travellerCount / x.categories[0].capacity),
                    pax_per_vehicle: Math.ceil(travellerCount /
                        Math.ceil(travellerCount / x.categories[0].capacity)),
                };
                firstcategory.push(category);
                _this.vehicleName =
                    "Sedan Car - (" +
                        Math.ceil(travellerCount / x.categories[0].capacity) +
                        ")";
            });
            var q = {
                code: "1",
                categories: firstcategory,
            };
            arrayList.push(q);
            this.vehicleName = "Sedan Car - (" + Math.ceil((this.appStore.adultCount + this.appStore.childCount) / this.appStore.vehicleMax) + ")";
        }
        if (code == "2") {
            var x = [vehicle];
            x.forEach(function (x, index) {
                var category = {
                    code: x.categories[0].category_code,
                    additional_services: x.categories[0].additional_services
                        .filter(function (a) { return a.selected == true; })
                        .map(function (a) { return a.additional_service_code; }),
                    quantity: Math.ceil(travellerCount / x.categories[0].capacity),
                    pax_per_vehicle: Math.ceil(travellerCount /
                        Math.ceil(travellerCount / x.categories[0].capacity)),
                };
                secondcategory.push(category);
                _this.vehicleName = "SUV Car - (" + Math.ceil((_this.appStore.adultCount + _this.appStore.childCount) / x.categories[0].capacity) + ")";
            });
            var q = {
                code: "2",
                categories: secondcategory,
            };
            arrayList.push(q);
        }
        if (code == "3") {
            var x = [vehicle];
            x.forEach(function (x, index) {
                var category = {
                    code: x.categories[0].category_code,
                    additional_services: x.categories[0].additional_services
                        .filter(function (a) { return a.selected == true; })
                        .map(function (a) { return a.additional_service_code; }),
                    quantity: Math.ceil(travellerCount / x.categories[0].capacity),
                    pax_per_vehicle: Math.ceil(travellerCount /
                        Math.ceil(travellerCount / x.categories[0].capacity)),
                };
                thirdcategory.push(category);
                _this.vehicleName =
                    "Bus - (" +
                        Math.ceil((_this.appStore.adultCount + _this.appStore.childCount) / x.categories[0].capacity) +
                        ")";
            });
            var q = {
                code: "3",
                categories: thirdcategory,
            };
            arrayList.push(q);
        }
        if (this.appStore.customeTripId) {
            var x = {
                start_date: start_date_formatted,
                end_date: end_date_formatted
                    ? end_date_formatted
                    : start_date_formatted,
                trip_transportation: {
                    search: this.appStore.transportSearchId,
                    lang: "en-US",
                    company_code: company_code,
                    vehicle_types: arrayList,
                },
            };
            this.commonService.updateCustomTrip(this.appStore.customeTripId, x).subscribe(function (data) {
                //this.getTripData();
                if (_this.appStore.customeTripBookingId) {
                    _this.appStore.stepperIndex += 1;
                    _this.onNotify();
                    (document.getElementById("changeTransport")).style.display = "none";
                }
                else {
                    _this.appStore.stepperIndex += 1;
                    _this.onNotify();
                }
            }, function (error) {
                _this.notifyService.showWarning(_this.translateService.instant("No Vehicle Available"));
            });
        }
        else {
            var x = {
                max_passengers: this.appStore.userDetails.travellersCount,
                booked_count: this.appStore.userDetails.travellersCount,
                start_date: start_date_formatted,
                end_date: end_date_formatted
                    ? end_date_formatted
                    : start_date_formatted,
                trip_transportation: {
                    search: this.appStore.transportSearchId,
                    lang: "en-US",
                    company_code: company_code,
                    vehicle_types: arrayList,
                },
            };
            this.commonService.bookCustomTrip(x).subscribe(function (data) {
                _this.appStore.customeTripId = data.id;
                //this.stepper.next();
                _this.appStore.stepperIndex += 1;
                _this.onNotify();
                // this.getTripData();
                if (_this.appStore.customeTripBookingId) {
                    // this.stepper.next();
                    console.log("STEP index", _this.appStore.stepperIndex);
                    _this.onNotify();
                    (document.getElementById("changeTransport")).style.display = "none";
                }
                else {
                    //this.stepper.next();
                    _this.appStore.stepperIndex += 1;
                    _this.onNotify();
                }
            }, function (error) {
                _this.notifyService.showWarning(_this.translateService.instant("No Vehicle Available"));
            });
        }
    };
    TransportComponent.ctorParameters = function () { return [
        { type: src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
        { type: src_app_common_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _create_trip_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: src_app_stores_app_store__WEBPACK_IMPORTED_MODULE_5__["AppStore"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TransportComponent.prototype, "transportList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TransportComponent.prototype, "notifyGrandparent", void 0);
    TransportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-transport",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/components/transport/transport.component.html")).default,
            providers: [src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _create_trip_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transport.component.scss */ "./src/app/components/sub-agent/create-trip/components/transport/transport.component.scss")).default]
        })
    ], TransportComponent);
    return TransportComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/create-trip-api-service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/create-trip-api-service.ts ***!
  \*****************************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var BASE_URL = "https://b2b.betatest.akbarumrah.com/apis/";
var BASE_URL2 = "https://b2ctest.akbarumrah.com/apis/";
var ApiService = /** @class */ (function () {
    function ApiService(http, _httpClient, router, https) {
        this.http = http;
        this._httpClient = _httpClient;
        this.router = router;
        this.https = https;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accesstoken"),
            }),
        };
        this.options = {
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("accesstoken"),
            }),
        };
    }
    ApiService.prototype.getTransportationList = function (accessToken) {
        return this.http
            .get(BASE_URL + "ground_transports/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCountries = function () {
        return this.http
            .get(BASE_URL + "countries/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getAccountDateHistory = function (fromdate, todate) {
        return this.http
            .get(BASE_URL +
            "account/account_statement/?from_date=" +
            fromdate +
            "&to_date=" +
            todate, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSelectedTransportation = function (id) {
        return this.http
            .get(BASE_URL + "ground_transports/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.updateTransportation = function (id, data) {
        return this.http
            .put(BASE_URL + "ground_transports/" + id + "/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSelectHotel = function (id) {
        return this.http
            .get(BASE_URL + "hotels/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.updateHotel = function (id, data) {
        return this.http
            .put(BASE_URL + "hotels/" + id + "/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.createTrip = function (data, id) {
        return this.http
            .put(BASE_URL + "packages/" + id + "/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getAirportListSrc = function (airport) {
        return this.https.get(BASE_URL +
            "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
            airport, this.httpOptions);
    };
    ApiService.prototype.getairlineslist = function (airline) {
        return this.https.get(BASE_URL + "airlines/autocomplete/?search=" + airline, this.httpOptions);
    };
    ApiService.prototype.getPackageDetails = function (id) {
        return this.http
            .get(BASE_URL + "trips/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.createOtp = function (data) {
        return this.http
            .post(BASE_URL + "login/generate_otp/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.verifyOtp = function (data) {
        return this.http
            .post(BASE_URL + "login/verify_otp/?", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.generateOtp = function (data) {
        return this.http
            .post(BASE_URL + "login/join/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.searchTransport = function (data) {
        return this.http
            .post(BASE_URL + "ground_transports/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.initHotelSearch = function (data) {
        return this.http
            .post(BASE_URL + "hotels/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getVehicleList = function () {
        return this.http
            .get(BASE_URL + "vehicles/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getAirportListD = function () {
        return this.https.get(BASE_URL + "airports/autocomplete/?airport_type=DESTINATION", this.httpOptions);
    };
    ApiService.prototype.getAirportListA = function (airport) {
        return this.https.get(BASE_URL +
            "airports/autocomplete/?airport_type=DESTINATION&airport_type=BOARDING&search=" +
            airport, this.httpOptions);
    };
    ApiService.prototype.getDestinationAirport = function () {
        return this.https.get(BASE_URL + "airports/autocomplete/?airport_type=BOARDING", this.httpOptions);
    };
    ApiService.prototype.getHotelList = function (id, currency, lang) {
        return this.http
            .get(BASE_URL +
            "hotels/?search_id=" +
            id +
            "&currency=" +
            currency +
            "&lang=" +
            lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getRoutes = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/routes/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getVehicles = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/vehicle_types/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCategories = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/categories/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getAdditionalServices = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/additional_services/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getserviceAdditionalServices = function () {
        return this.http
            .get(BASE_URL + "ground_services/additional_services/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCompanies = function (lang) {
        return this.http
            .get(BASE_URL + "ground_transports/companies/?lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.searchTransportList = function (id, currency, lang) {
        return this.http
            .get(BASE_URL +
            "ground_transports/?search_id=" +
            id +
            "&currency=" +
            currency +
            "&lang=" +
            lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSelectedHotelInfo = function (data, currency, lang) {
        return this.http
            .post(BASE_URL + "hotels/details/?currency=" + currency + "&lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.updateCustomTrip = function (id, data) {
        return this.http
            .put(BASE_URL + "custom_trips/" + id + "/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.bookCustomTrip = function (data) {
        return this.http
            .post(BASE_URL + "custom_trips/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.searchGroundservice = function (data) {
        return this.http
            .post(BASE_URL + "ground_services/search/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.searchGroundserviceList = function (id, currency, lang) {
        return this.http
            .get(BASE_URL +
            "ground_services/?search_id=" +
            id +
            "&currency=" +
            currency +
            "&lang=" +
            lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getNationality = function (data, lang) {
        return this.http
            .get(BASE_URL + "nationalities/?search=" + data + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCountry = function (data, lang) {
        return this.http
            .get(BASE_URL + "countries/?search=" + data + "&lang=" + lang, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getTrip = function (id) {
        return this.http
            .get(BASE_URL + "custom_trips/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.bookTrip = function (data, id) {
        return this.http
            .post(BASE_URL + "custom_trips/" + id + "/booking/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.saveSelectedHotel = function (data) {
        return this.http
            .post(BASE_URL + "custom_trips/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.bookingPayment = function (data) {
        return this.http
            .post(BASE_URL + "payments/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.checkAvailability = function (id) {
        return this.http
            .get(BASE_URL + "b2b_trip_booking/" + id + "/check_availability/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCurrencies = function () {
        return this.http
            .get(BASE_URL + "currencies", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getPaymentDetails = function (id) {
        return this.http
            .get(BASE_URL + "bookings/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getCheckCancellation = function (id) {
        return this.http
            .get(BASE_URL + "custom_trip_booking/" + id + "/check_cancellation/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getConfirmCancellation = function (id, data) {
        return this.http
            .post(BASE_URL + "custom_trip_booking/" + id + "/confirm_cancellation/", data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.sendNotification = function (id) {
        return this.http
            .get(BASE_URL + "bookings/" + id + "/resend_notification/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getInvoice = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                Authorization: "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/invoice_template/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: "text/html" });
        });
    };
    ApiService.prototype.getVoucher = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                Authorization: "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/voucher_template/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: "text/html" });
        });
    };
    ApiService.prototype.getInvoicePdf = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                Authorization: "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/invoice/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: "application/pdf" });
        });
    };
    ApiService.prototype.getVoucherPdf = function (id) {
        var bookingOptions = {
            responseType: _angular_http__WEBPACK_IMPORTED_MODULE_3__["ResponseContentType"].Blob,
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                Authorization: "Bearer Guest",
            }),
        };
        return this.http
            .get(BASE_URL + "bookings/" + id + "/voucher/", bookingOptions)
            .map(function (res) {
            return new Blob([res.blob()], { type: "application/pdf" });
        });
    };
    ApiService.prototype.getLanguages = function () {
        return this.http
            .get(BASE_URL + "languages/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.signup = function (body) {
        return this.http
            .post(BASE_URL + "agencies/signup/", body)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getSavedData = function (id) {
        return this.http
            .get(BASE_URL + "packages/" + id + "/", this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.getOtp = function (data) {
        return this.http
            .post(BASE_URL + "staff/forgot_password/", data)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.changePassword = function (data) {
        return this.http
            .post(BASE_URL + "staff/change_password/", data)
            .map(function (res) { return res.json(); });
    };
    //b2capis/ using apis..........starts
    ApiService.prototype.pilotHotelSearch = function (data, lang) {
        return this.http
            .post(BASE_URL + "b2capis/hotels/search/?lang=" + lang, data, this.options)
            .map(function (res) { return res.json(); });
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/create-trip-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/create-trip-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CreateTripRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripRoutingModule", function() { return CreateTripRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_trip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-trip.component */ "./src/app/components/sub-agent/create-trip/create-trip.component.ts");




var routes = [{
        path: '',
        component: _create_trip_component__WEBPACK_IMPORTED_MODULE_3__["CreateTripComponent"],
    }];
var CreateTripRoutingModule = /** @class */ (function () {
    function CreateTripRoutingModule() {
    }
    CreateTripRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CreateTripRoutingModule);
    return CreateTripRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/create-trip.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/create-trip.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/create-trip.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/create-trip.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateTripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripComponent", function() { return CreateTripComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stores_app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../stores/app.store */ "./src/app/stores/app.store.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/services/notification.service */ "./src/app/common/services/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/services/helper-service */ "./src/app/common/services/helper-service.ts");
/* harmony import */ var _components_makka_hotel_makka_hotel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/makka-hotel/makka-hotel.component */ "./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.ts");
/* harmony import */ var src_app_common_services_auth_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/services/auth-services */ "./src/app/common/services/auth-services.ts");
/* harmony import */ var _create_trip_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-trip-api-service */ "./src/app/components/sub-agent/create-trip/create-trip-api-service.ts");
/* harmony import */ var src_app_adapters_sub_agent_create_trip_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/adapters/sub-agent/create-trip-adapter */ "./src/app/adapters/sub-agent/create-trip-adapter.ts");


















var CreateTripComponent = /** @class */ (function () {
    function CreateTripComponent(router, formBuilder, renderer2, common, spinner, datepipe, http, appStore, translateService, fb, toastr, notifyService, route, helperService, authService) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.renderer2 = renderer2;
        this.common = common;
        this.spinner = spinner;
        this.datepipe = datepipe;
        this.http = http;
        this.appStore = appStore;
        this.translateService = translateService;
        this.fb = fb;
        this.toastr = toastr;
        this.notifyService = notifyService;
        this.route = route;
        this.helperService = helperService;
        this.authService = authService;
        this.showtransportsearch = true;
        this.additionalServiceCount = false;
        this.filtershowgt = false;
        this.filtershow = false;
        this.roomdetails = false;
        this.step = 0;
        this.imageshow = 0;
        this.time = { hour: 13, minute: 30 };
        this.meridian = true;
        this.hotelPics = [];
        this.hotelPics1 = [];
        this.hotelPics2 = [];
        this.moreimages = false;
        this.onwrdFlight = false;
        this.rtrnFlight = false;
        this.makkaHtl = false;
        this.makkatransport = false;
        this.madnaHtl = false;
        this.grountService = false;
        this.totalRoomPrice = 0;
        this.selectedTravellersCount = 0;
        this.selectedRoomCount = 0;
        this.noOfDaysInMadeena = 0;
        this.makkahloader = true;
        this.makkahticked = false;
        this.madeendetailshow = false;
        this.madeenaloader = false;
        this.madeenaticked = false;
        this.stageArray = [];
        this.setDataForAddServiceCountPopUP = {};
        this.addSrvCount = 0;
        this.showPayButton = false;
        this.makka = true;
        this.medinah = true;
        this.trnsprt = true;
        this.city = "";
        this.showElement = true;
        this.createTripAdapter = new src_app_adapters_sub_agent_create_trip_adapter__WEBPACK_IMPORTED_MODULE_17__["CreateTripAdapter"](this.helperService, this.appStore);
        this.IsHidden = true;
        this.dropdownList = [];
        this.dropdownserviceList = [];
        this.serviceData = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.vehicleTypeList = [];
        this.vehicleTypeItems = [];
        this.routeList = [];
        this.companyList = [];
        this.countryList = [];
        this.nationalityList = [];
        this.showSkipButtonDiv = false;
        this.categoryIds = [];
        this.categoryServiceIds = [];
        this.imageObjectArray = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.makkaHotelsList = [];
        this.madinaHotelsList = [];
        this.transportList = [];
        this.transportListData = [];
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.toggle = [];
        this.toggle2 = [];
        this.disableBtn = false;
        this.count = 1;
        this.showAddButton = true;
        this.showMadenaTransportVehicleList = false;
        this.submitted = false;
        this.today = new Date().toJSON().split("T")[0];
        this.roomCount = 0;
        this.countadult = 1;
        this.countchild = 0;
        this.countinfa = 0;
        this.rooms = [];
        this.currentRate = 3.5;
        this.toairport = false;
        this.infantCount = 0;
        this.adultCount = 1;
        this.childCount = 0;
        this.steps = [];
        this.timeLeft = 30;
        this.userFilter = { name: '' };
        this.loadContent = false;
        this.name = "Cricketers";
        this.data = [];
        this.settings = {};
        this.images = [
            "assets/images/mekka.jpg",
            "assets/images/namaz.jpg",
            "assets/images/mecca_great_mosque_600.png",
        ];
        this.route.queryParams.subscribe(function (params) {
            _this.steps = ((params.steps || "1,2,3").split(","));
        });
        this.renderer2.listen("window", "click", function (e) {
            if ((_this.menuPopup && _this.menuPopup.nativeElement.contains(e.target)) ||
                (_this.menuIcon && _this.menuIcon.nativeElement.contains(e.target))) {
                // Clicked inside plus preventing click on icon
            }
            else {
                // Clicked outside
            }
        });
        this.renderer2.listen("window", "click", function (e) {
            if ((_this.menuPopupTo &&
                _this.menuPopupTo.nativeElement.contains(e.target)) ||
                (_this.menuIconTo && _this.menuIconTo.nativeElement.contains(e.target))) {
                // Clicked inside plus preventing click on icon
            }
            else {
                // Clicked outside
                _this.toairport = false;
            }
        });
        this.renderer2.listen("window", "click", function (e) {
            if ((_this.menuPopupClass &&
                _this.menuPopupClass.nativeElement.contains(e.target)) ||
                (_this.menuIconClass &&
                    _this.menuIconClass.nativeElement.contains(e.target))) {
                // Clicked inside plus preventing click on icon
            }
            else {
                // Clicked outside
                _this.displayTabtravel = false;
            }
        });
        this.paymentForm = this.formBuilder.group({
            roomAdultsArray: this.formBuilder.array([]),
            roomChildrenArray: this.formBuilder.array([])
        });
    }
    CreateTripComponent_1 = CreateTripComponent;
    CreateTripComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    CreateTripComponent.prototype.formatLabel = function (value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + "k";
        }
        return value;
    };
    CreateTripComponent.prototype.toggleMakkaUp = function () {
        document.getElementById("makka").style.display = "none";
        this.makka = !this.makka;
    };
    CreateTripComponent.prototype.toggleMakkaDown = function () {
        document.getElementById("makka").style.display = "block";
        this.makka = !this.makka;
    };
    CreateTripComponent.prototype.toggleMedinahDown = function () {
        document.getElementById("medinah").style.display = "block";
        this.medinah = !this.medinah;
    };
    CreateTripComponent.prototype.toggleMedinahUp = function () {
        document.getElementById("medinah").style.display = "none";
        this.medinah = !this.medinah;
    };
    CreateTripComponent.prototype.toggleTransportUp = function () {
        document.getElementById("transport").style.display = "none";
        document.getElementById("transportRate").style.display = "none";
        document.getElementById("transportPolicy").style.display = "none";
        document.getElementById("trnsptNormal").style.display = "none";
        this.trnsprt = !this.trnsprt;
    };
    CreateTripComponent.prototype.toggleTransportDown = function () {
        document.getElementById("transport").style.display = "block";
        document.getElementById("transportPolicy").style.display = "block";
        document.getElementById("transportRate").style.display = "block";
        document.getElementById("trnsptNormal").style.display = "block";
        this.trnsprt = !this.trnsprt;
    };
    CreateTripComponent.prototype.ngAfterViewChecked = function () {
        this.selectedCurrency = this.appStore.currencyCode;
        this.selectedLanguage = this.appStore.langCode;
        this.translateService.use(this.appStore.langCode);
        if (this.appStore.langCode == "ar-AE") {
            document.getElementById("body").classList.add('mirror_css');
        }
        else {
            document.getElementById("body").classList.remove('mirror_css');
        }
        if (this.selectedCountry) {
            var selectedResidenceText_1 = (document.getElementById("cor0").getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML;
            this.phoneCode = this.phoneCodeList.filter(function (x) { return x.item_text == selectedResidenceText_1; })[0].item_id;
        }
    };
    CreateTripComponent.prototype.saveSelectedAddSrvCount = function (item) {
        this.additionalServiceCount = false;
        this.setDataForAddServiceCountPopUP = {};
        this.setDataForAddServiceCountPopUP = item;
        this.setDataForAddServiceCountPopUP.selectedQuantity = this.addSrvCount;
    };
    CreateTripComponent.prototype.hidecountpopup = function () {
        this.additionalServiceCount = false;
    };
    CreateTripComponent.prototype.clearPreviosDataForFreshSearch = function () {
        this.userFilter.name = "";
        this.noOfDaysInMadeena = 0;
        this.selecteddaysmakkah = 0;
        this.arrivalDate = null;
        this.diffDays = 0;
        this.selectedHotel = [];
        this.selectedRoomGroups = [];
        this.makkaHotelsList = [];
        this.madinaHotelsList = [];
        this.makkahticked = false;
        this.madeenaticked = false;
        this.madeendetailshow = false;
        this.mdate = null;
        this.stageArray = [];
    };
    CreateTripComponent.prototype.move = function (index) {
        this.stepper.selectedIndex = index;
    };
    CreateTripComponent.prototype.transportSearch = function () {
        var _this = this;
        this.filtershow = true;
        this.vehicleCount = Math.ceil((this.userDetails.travallersCount) / this.vehicleMax);
        var date = this.helperService.dateFormaterMdy(this.userDetails.transportStartDate);
        this.spinner.show();
        var filrerData = {
            "search_id": this.searchTransportId,
            "lang": this.selectedLanguage,
            "route": this.routeId,
            "vehicle_type": this.vehicleId,
            "category": this.categoryId,
            "no_of_travellers": this.countadult + this.countchild,
            "quantity": Math.ceil((this.countadult + this.countchild) / this.vehicleMax),
            "travel_date": date.split("/")[2] + "-" + date.split("/")[0] + "-" + date.split("/")[1]
        };
        this.common.searchTransport(filrerData).subscribe(function (data) {
            _this.searchTransportId = data.search_id;
            _this.appStore.transportSearchId = data.search_id;
            _this.common.searchTransportList(_this.searchTransportId, _this.selectedCurrency, _this.selectedLanguage).subscribe(function (response) {
                _this.spinner.hide();
                if ((response && response.transportations && response.transportations.length == 0) || (response && response.transportations && response.transportations.filter(function (x) { return x.vehicle_types.length > 0; }) == 0)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        text: _this.translateService.instant('Sorry, we could not find transport for this route'),
                        icon: "warning",
                        confirmButtonText: _this.translateService.instant('Modify search and try again'),
                    });
                }
                else {
                    _this.transportList = response.transportations.sort(function (n1, n2) { return n1.vehicle_types.map(function (x) { return x.categories[0].fare_summary[2].amount; }) - n2.vehicle_types.map(function (x) { return x.categories[0].fare_summary[2].amount; }); });
                    _this.transportListData = response.transportations.sort(function (n1, n2) { return n1.vehicle_types.map(function (x) { return x.categories[0].fare_summary[2].amount; }) - n2.vehicle_types.map(function (x) { return x.categories[0].fare_summary[2].amount; }); });
                }
                for (var i = 0; i < _this.transportList.length; i++) {
                    for (var j = 0; j < _this.transportList[i].vehicle_types.length; j++) {
                        _this.transportList[i].vehicle_types[j].toggle = false;
                        _this.transportList[i].vehicle_types[j].count = 1;
                        _this.transportList[i].totalCount = 1;
                        _this.transportList[i].vehicle_types[j].transport_amount = 0;
                        _this.transportList[i].vehicle_types[j].vehicleCapacityCount = Math.ceil((_this.countadult + _this.countchild) / _this.transportList[i].vehicle_types[j].categories[0].capacity);
                        _this.transportList[i].vehicle_types[j].vehiclePaxCount = Math.ceil((_this.countadult + _this.countchild) / (Math.ceil((_this.countadult + _this.countchild) / _this.transportList[i].vehicle_types[j].categories[0].capacity)));
                    }
                }
                for (var i = 0; i < _this.transportList.length; i++) {
                    for (var j = 0; j < _this.transportList[i].vehicle_types.length; j++) {
                        var totalCount = _this.countadult + _this.countchild + _this.countinfa;
                        var vehicle = _this.transportList[i].vehicle_types[j].vehicle_type_code[0];
                        _this.transportList[i].vehicle_types[j].toggle_vehicle = false;
                        _this.transportList[i].totalCount = 1;
                    }
                }
            });
        });
    };
    CreateTripComponent.prototype.toggleSection = function (i, index) {
        this.transportList[i].vehicle_types[index].toggle = true;
    };
    CreateTripComponent.prototype.showMainFilter = function () {
        this.moreFilterArrow = !this.moreFilterArrow;
    };
    CreateTripComponent.prototype.showRefundableFilter = function () {
        this.refundableFilterArrow = !this.refundableFilterArrow;
    };
    CreateTripComponent.prototype.closeFilterPoup = function () {
        this.moreFilterArrow = !this.moreFilterArrow;
    };
    CreateTripComponent.prototype.add = function (i, index) {
        if (this.transportList[i].vehicle_types[index].count < this.transportList[i].vehicle_types[index].categories[0].capacity) {
            this.transportList[i].vehicle_types[index].count = this.transportList[i].vehicle_types[index].count + 1;
            this.transportList[i].totalCount = this.transportList[i].vehicle_types[index].count;
        }
        else {
            this.notifyService.showWarning(this.translateService.instant("maximum number of adult reached"));
        }
    };
    CreateTripComponent.prototype.minus = function (i, index) {
        if (this.transportList[i].vehicle_types[index].count > 1) {
            this.transportList[i].vehicle_types[index].count = this.transportList[i].vehicle_types[index].count - 1;
            this.transportList[i].totalCount = this.transportList[i].vehicle_types[index].count;
        }
    };
    CreateTripComponent.prototype.togglevehicleSection = function (i, index) {
        this.transportList[i].vehicle_types[index].toggle_vehicle = true;
    };
    CreateTripComponent.prototype.addadult = function () {
        this.countadult = this.countadult + 1;
    };
    CreateTripComponent.prototype.minusadult = function () {
        if (this.countadult > 1) {
            this.countadult = this.countadult - 1;
        }
    };
    CreateTripComponent.prototype.addchild = function () {
        this.countchild = this.countchild + 1;
    };
    CreateTripComponent.prototype.travelersB = function () {
        this.displayTabtravel = !this.displayTabtravel;
    };
    CreateTripComponent.prototype.travelersButton = function () {
        this.rooms = [];
        var adultsperroom = 5;
        var adults = this.countadult;
        var children = this.countchild;
        var nofrooms = Math.ceil(this.countadult / adultsperroom);
        var childrenperroom = 4;
        var extrachildrenroom = children % nofrooms;
        var index = 0;
        while (nofrooms > 0) {
            var tempRoom = {
                id: index,
                adults: 1,
                children: 0,
                child_ages: [],
                pax_info_str: null,
                seq_no: ""
            };
            if (adults > 0) {
                if (adults < adultsperroom) {
                    tempRoom.adults = adults;
                }
                else {
                    tempRoom.adults = adultsperroom;
                }
                adults -= adultsperroom;
            }
            if (children > 0) {
                if (children < childrenperroom) {
                    tempRoom.children = children;
                }
                else {
                    tempRoom.children = childrenperroom;
                }
                children -= childrenperroom;
                if (extrachildrenroom > 0 && extrachildrenroom == nofrooms) {
                    tempRoom.children += 1;
                    extrachildrenroom -= 1;
                    children -= 1;
                }
            }
            index += 1;
            nofrooms -= 1;
            this.rooms.push(tempRoom);
        }
    };
    CreateTripComponent.prototype.showTrasportCount = function () {
        this.displayVehicleCount = !this.displayVehicleCount;
    };
    CreateTripComponent.prototype.showPersonCount = function () {
        this.displayPersonCount = !this.displayPersonCount;
    };
    CreateTripComponent.prototype.addrooms = function () {
        var tempRoom = {
            id: this.rooms.length + 1,
            adults: 1,
            children: 0,
            child_ages: [],
            pax_info_str: null,
            seq_no: ""
        };
        this.rooms.push(tempRoom);
    };
    CreateTripComponent.prototype.removerooms = function (i) {
        this.rooms.splice(i, 1);
    };
    CreateTripComponent.prototype.minusadultroom = function (id) {
        var _this = this;
        this.rooms.forEach(function (value, index) {
            if (value.id == id) {
                if (_this.rooms[index].adults > 1) {
                    _this.rooms[index].adults = value.adults - 1;
                }
            }
        });
    };
    CreateTripComponent.prototype.showroomselection = function () {
        this.gettripDays();
        this.showModalroom = true;
        var totalCount = this.countadult + this.countchild;
        if (totalCount < 5) {
            this.vehicleTypeItems = [{ item_id: "1", item_text: "Sedan Car" }];
            this.vehicleId = 1;
            this.vehicleMax = 4;
            this.appStore.vehicleMax = 4;
        }
        else if (totalCount < 7 && totalCount > 5) {
            this.vehicleTypeItems = [{ item_id: "2", item_text: "SUV Car" }];
            this.vehicleId = 2;
            this.vehicleMax = 7;
            this.appStore.vehicleMax = 7;
        }
        else if (totalCount > 7) {
            this.vehicleTypeItems = [{ item_id: "3", item_text: "Bus" }];
            this.vehicleId = 3;
            this.vehicleMax = 60;
            this.appStore.vehicleMax = 60;
        }
        document.getElementById("flightArrivalDate").style.display = "none";
    };
    CreateTripComponent.prototype.gettripDays = function () {
        this.onwerdArivalTime = this.datepipe.transform(this.onwerdArivalTime, "MM/dd/yyyy");
        this.returnDepartTime = this.datepipe.transform(this.returnDepartTime, "MM/dd/yyyy");
        this.firstDate = new Date(this.onwerdArivalTime.split("/")[2], this.onwerdArivalTime.split("/")[0] - 1, this.onwerdArivalTime.split("/")[1]);
        this.secondDate = new Date(this.returnDepartTime.split("/")[2], this.returnDepartTime.split("/")[0] - 1, this.returnDepartTime.split("/")[1]);
        this.diffDays = Math.round(Math.abs((this.firstDate - this.secondDate) / (24 * 60 * 60 * 1000)));
    };
    CreateTripComponent.prototype.minuschild = function () {
        if (this.countchild > 0) {
            this.countchild = this.countchild - 1;
        }
    };
    CreateTripComponent.prototype.addinfa = function () {
        this.countinfa = this.countinfa + 1;
    };
    CreateTripComponent.prototype.addInfant = function () {
        this.infantCount = this.infantCount + 1;
    };
    CreateTripComponent.prototype.minusInfant = function () {
        if (this.infantCount > 0) {
            this.infantCount = this.infantCount - 1;
        }
    };
    CreateTripComponent.prototype.addAdult = function () {
        this.adultCount = this.adultCount + 1;
    };
    CreateTripComponent.prototype.minusAdult = function () {
        if (this.adultCount > 0) {
            this.adultCount = this.adultCount - 1;
        }
    };
    CreateTripComponent.prototype.minusChild = function () {
        if (this.childCount > 0) {
            this.childCount = this.childCount - 1;
        }
    };
    CreateTripComponent.prototype.addChild = function () {
        this.childCount = this.childCount + 1;
    };
    CreateTripComponent.prototype.minusinfa = function () {
        if (this.countinfa > 0) {
            this.countinfa = this.countinfa - 1;
        }
    };
    CreateTripComponent.prototype.madenaVehicleDisplay = function () {
        this.showMadenaTransportVehicleList = true;
    };
    CreateTripComponent.prototype.hide = function () {
        this.showModal = false;
    };
    CreateTripComponent.prototype.setTravellerPopup = function () {
        this.showModalroom = true;
    };
    CreateTripComponent.prototype.toggleButton = function () {
        this.displayTab = !this.displayTab;
        this.changeButton = !this.changeButton;
    };
    CreateTripComponent.prototype.hideroomselection = function () {
        this.showModalroom = false;
    };
    CreateTripComponent.prototype.hideroomselectionPopup = function () {
        this.showModalroom = false;
    };
    CreateTripComponent.prototype.mainTraveller = function (i) {
        var _this = this;
        this.rooms.forEach(function (value) {
            for (var j = 0; j < value.adults; j++) {
                _this.mainTraveller[j] = false;
            }
        });
        this.mainTraveller[i] = true;
    };
    CreateTripComponent.prototype.continuePayment = function () {
        this.getTripData();
        this.move(4);
    };
    CreateTripComponent.prototype.getTripData = function () {
        var _this = this;
        this.common.getTrip(this.appStore.customeTripId).subscribe(function (data) {
            _this.tripData = data;
            if (_this.tripData) {
                if (_this.tripData.makkah_trip_hotel) {
                    _this.tripMakkahHotel = _this.tripData.makkah_trip_hotel;
                    _this.hotelMakkahFare = _this.tripData.makkah_trip_hotel.room_variations.map(function (x) { return x.room.amount; }).reduce(function (a, b) { return a + b; }, 0);
                    _this.tripMakkahHotelrating = _this.tripData.makkah_trip_hotel.hotel.user_review / 2;
                }
                if (_this.tripData.medinah_trip_hotel) {
                    _this.tripMadeenaHotel = _this.tripData.medinah_trip_hotel;
                    _this.hotelMadeenaFare = _this.tripData.medinah_trip_hotel.room_variations.map(function (x) { return x.room.amount; }).reduce(function (a, b) { return a + b; }, 0);
                }
                if (_this.tripData.trip_transportation) {
                    _this.tripTransport = _this.tripData.trip_transportation;
                    _this.transportFare = _this.tripData.trip_transportation.trip_vehicles[0].price_per_vehicle;
                    _this.selectedTransport = _this.tripData.trip_transportation.selected_transportation;
                }
                if (_this.tripData.trip_visa) {
                    _this.tripVisaData = _this.tripData.trip_visa;
                }
            }
        });
    };
    CreateTripComponent.prototype.bookTrip = function () {
        var _this = this;
        this.submitted = true;
        var travellers = [];
        this.roomAdultsArray.controls.forEach(function (adult, j) {
            if (_this.mainTraveller[j]) {
                var x = {
                    "title": "Mr",
                    "first_name": document.getElementById("firstName" + j).value,
                    "last_name": document.getElementById("lastName" + j).value,
                    "email": document.getElementById("email" + j).value,
                    "phone_number": document.getElementById("mobile" + j).value,
                    "address": document.getElementById("address" + j).value,
                    "country_code": _this.selectedCountry,
                    "phn_country_code": document.getElementById("phn_country_code" + j).value,
                };
                var q = {
                    "title": "Mr",
                    "first_name": document.getElementById("firstName" + j).value,
                    "last_name": document.getElementById("lastName" + j).value,
                    "dob": _this.datepipe.transform(document.getElementById("dob" + j).value, 'yyyy-MM-dd'),
                    "gender": (document.getElementById("gender" + j).getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML,
                    "nationality": _this.selectedNationality,
                    "passport_no": document.getElementById("passportNo" + j).value,
                    "room_reference": 0 + "_" + _this.rooms[0].adults + "ADT_" + _this.rooms[0].children + "CHD_" + _this.rooms[0].child_ages.sort().join("_") + "",
                    "passport_expiry_date": _this.datepipe.transform(document.getElementById("ped" + j).value, 'yyyy-MM-dd'),
                    "contactinfo": x,
                    "country_of_residence": _this.selectedCountry
                };
                travellers.push(q);
            }
            else {
                var q = {
                    "first_name": document.getElementById("firstName" + j).value,
                    "last_name": document.getElementById("lastName" + j).value,
                    "dob": _this.datepipe.transform(document.getElementById("dob" + j).value, 'yyyy-MM-dd'),
                    "gender": (document.getElementById("gender" + j).getElementsByClassName("mat-select-value-text")[0].getElementsByClassName("ng-star-inserted")[0]).innerHTML,
                    "nationality": _this.selectedNationality,
                    "passport_no": document.getElementById("passportNo" + j).value,
                    "room_reference": 0 + "_" + _this.rooms[0].adults + "ADT_" + _this.rooms[0].children + "CHD_" + _this.rooms[0].child_ages.sort().join("_") + "",
                    "passport_expiry_date": _this.datepipe.transform(document.getElementById("ped" + j).value, 'yyyy-MM-dd'),
                    "country_of_residence": _this.selectedCountry
                };
                travellers.push(q);
            }
        });
        var body = { travellers: travellers };
        this.common.bookTrip(body, this.appStore.customeTripId).subscribe(function (data) {
            _this.bookingId = data.id;
            localStorage.setItem("reference_no", data.reference_no);
            _this.spinner.show();
            _this.common.checkAvailability(data.id).subscribe(function (response) {
                _this.spinner.hide();
                if (response.makkah_trip_hotel) {
                    if (response.makkah_trip_hotel.success) {
                        document.getElementById("changemakkaHotel").style.backgroundColor = "unset";
                        document.getElementById("changemakkaHotel").style.display = "none";
                    }
                    else {
                        document.getElementById("changemakkaHotel").style.backgroundColor = "#0000005c";
                        document.getElementById("changemakkaHotel").style.display = "block";
                        window.scrollTo(0, 0);
                    }
                }
                if (response.medinah_trip_hotel) {
                    if (response.medinah_trip_hotel.success) {
                        document.getElementById("changemadinahHotel").style.backgroundColor = "unset";
                        document.getElementById("changemadinahHotel").style.display = "none";
                    }
                    else {
                        document.getElementById("changemadinahHotel").style.backgroundColor = "#0000005c";
                        document.getElementById("changemadinahHotel").style.display = "block";
                        window.scrollTo(0, 0);
                    }
                }
                if (response.trip_transportation) {
                    if (response.trip_transportation.success) {
                        document.getElementById("changeTransport").style.backgroundColor = "unset";
                        document.getElementById("changeTransport").style.display = "none";
                    }
                    else {
                        document.getElementById("changeTransport").style.backgroundColor = "#0000005c";
                        document.getElementById("changeTransport").style.display = "block";
                        window.scrollTo(0, 0);
                    }
                }
                _this.spinner.hide();
                if ((response.makkah_trip_hotel && response.makkah_trip_hotel.success == false) || (response.medinah_trip_hotel && response.medinah_trip_hotel.success == false) || (response.trip_transportation && response.trip_transportation.success == false) || response.refetch_trip == true) {
                    document.getElementById("payBtn").style.display = "none";
                    document.getElementById("continueBooking").style.display = "block";
                }
                else {
                    document.getElementById("payBtn").style.display = "block";
                    document.getElementById("continueBooking").style.display = "none";
                }
                if (response.refetch_trip == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        text: _this.translateService.instant('Price has been changed'),
                        icon: "warning",
                        confirmButtonText: _this.translateService.instant('OK'),
                    });
                    _this.getTripData();
                }
            });
        });
    };
    CreateTripComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else if (_this.timeLeft == 0) {
                document.getElementById("ibanClose").click();
                _this.timeLeft = 30;
                clearInterval(_this.interval);
            }
        }, 1000);
    };
    CreateTripComponent.prototype.onSubmitButtonClicked = function () {
        var _this = this;
        // "account_no": "SA1790941327111000000002" ,
        //"auth_code": "5NMABO6U2RH2ZR5B"
        var w = {
            "booking_id": this.bookingId,
            "account_no": this.accNo,
            "auth_code": this.authCode,
        };
        if (this.accNo && this.authCode) {
            this.spinner.show();
            this.common.bookingPayment(w).subscribe(function (response) {
                _this.spinner.hide();
                if (response.status == "Success") {
                    _this.router.navigate(['/payment/' + _this.bookingId + '/success']);
                }
                else {
                    _this.notifyService.showWarning(response.errors[0]);
                }
            }, function (error) {
                _this.spinner.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    icon: 'error',
                    title: _this.translateService.instant('Oops...'),
                    text: _this.translateService.instant('Account Does Not Exist'),
                });
            });
        }
        else {
            this.notifyService.showWarning(this.translateService.instant("Payment Credentials Missing"));
        }
    };
    CreateTripComponent.prototype.changemakkaHotel = function () {
        this.move(0);
        //this.moveToMakkaTab();
        document.getElementById("changemakkaHotel").style.backgroundColor = "unset";
        document.getElementById("payBtn").style.display = "none";
        document.getElementById("continueBooking").style.display = "block";
    };
    CreateTripComponent.prototype.changemadinahHotel = function () {
        if (this.steps.length > 2) {
            this.move(1);
        }
        else {
            this.move(0);
        }
        //this.moveToMadeenaTab();
        document.getElementById("changemadinahHotel").style.backgroundColor = "unset";
        document.getElementById("payBtn").style.display = "none";
        document.getElementById("continueBooking").style.display = "block";
    };
    CreateTripComponent.prototype.changeTransport = function () {
        if (this.steps.length > 2) {
            this.move(2);
        }
        else {
            this.move(0);
        }
        document.getElementById("changeTransport").style.backgroundColor = "unset";
        document.getElementById("payBtn").style.display = "none";
        document.getElementById("continueBooking").style.display = "block";
    };
    CreateTripComponent.prototype.ngOnInit = function () {
        if (!this.authService.isLoggedIn) {
            this.notifyService.showWarning(this.translateService.instant("Please Login"));
            this.router.navigate(['/login']);
        }
        if (!this.appStore.showShimmer) {
            this.appStore.showShimmer = true, this.showShimmer = true;
        }
        this.rooms = [];
        this.fetchNessoryApisForTransport();
        this.userDetails = CreateTripComponent_1.UserObjectData;
        this.appStore.userDetails = CreateTripComponent_1.UserObjectData;
        if (typeof (this.userDetails) == 'undefined') {
            this.router.navigate(['/firstpage']);
        }
        if (this.userDetails) {
            this.totalTravellers = this.userDetails.travallersCount;
        }
        this.noOfDaysInMakkah = this.appStore.noOfDaysInMakkah;
        this.makkahCheckInDate = this.userDetails.makkahCheckinDate;
        this.makkahCheckOutDate = this.userDetails.makkahCheckoutDate;
        this.transportStartDate = this.userDetails.transportStartDate;
        this.travellersCount = this.appStore.totalTravellers;
        this.rooms = CreateTripComponent_1.RoomData;
        this.appStore.roomArray = CreateTripComponent_1.RoomData;
        this.appStore.stepperIndex = 0;
        this.selectedCurrency = "SAR";
        this.multiSelectDropDownSettings();
        this.setForm();
        this.callCorrespongingSteppers();
        this.setdataForUserDetailsAtLastPage();
    };
    CreateTripComponent.prototype.multiSelectDropDownSettings = function () {
        this.dropdownSettings = {
            singleSelection: true,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 1,
            allowSearchFilter: true,
        };
        this.settings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "Unselect ALL",
            allowSearchFilter: true,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 2,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No Services",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
        };
    };
    CreateTripComponent.prototype.setdataForUserDetailsAtLastPage = function () {
        this.roomAdultsArray.clear();
        this.roomChildrenArray.clear();
        this.rooms = [];
        if (this.roomDetails && this.roomDetails.length > 0) {
            this.rooms = this.roomDetails;
        }
        else {
            var transportRoom = [{ adults: 1, children: 0, child_ages: ["0"], seq_no: "0", id: 1, pax_info_str: "1" }];
            this.rooms = transportRoom;
        }
        for (var index = 0; index < 1; index++) {
            this.roomAdultsArray.push(this.addroomAdult(0));
            this.mainTraveller[0] = true;
        }
    };
    CreateTripComponent.prototype.fetchNessoryApisForTransport = function () {
        var _this = this;
        this.selectedLanguage = this.appStore.langCode;
        this.common.getVehicles(this.selectedLanguage).subscribe(function (data) {
            _this.vehicleTypeList = data.vehicle_types.map(function (x) { return ({ item_text: x.name, item_id: x.code }); });
        });
        this.common.getRoutes(this.selectedLanguage).subscribe(function (data) {
            _this.routeList = data.routes.map(function (x) { return ({ item_text: x.name, item_id: x.code }); });
            console.log(_this.routeList);
        });
        this.common.getCategories(this.selectedLanguage).subscribe(function (data) {
            _this.dropdownList = data.categories.map(function (x) { return ({ item_text: x.name, item_id: x.code }); });
        });
        this.common.getAdditionalServices(this.selectedLanguage).subscribe(function (data) {
            _this.data = data.additional_services.map(function (x) { return ({ item_text: x.name, item_id: x.code }); });
        });
        this.common.getCompanies(this.selectedLanguage).subscribe(function (data) {
            _this.companyList = data.companies.map(function (x) { return ({ item_text: x.name, item_id: x.code }); });
            _this.companylistall = data.companies;
        });
        this.common.getCountry("", this.selectedLanguage).subscribe(function (data) {
            _this.nationalityList = data.map(function (x) { return ({ item_text: x.name, item_id: x.short_iso_code }); });
        });
        this.common.getNationality("", this.selectedLanguage).subscribe(function (data) {
            _this.phoneCodeList = data.map(function (x) { return ({ item_text: x.name, item_id: x.code }); });
        });
        this.common.getCountry("", this.selectedLanguage).subscribe(function (data) {
            _this.countryList = data.map(function (x) { return ({ item_text: x.name, item_id: x.short_iso_code }); });
        });
    };
    CreateTripComponent.prototype.callCorrespongingSteppers = function () {
        if (this.steps.includes("1")) {
            this.makkahloader = true;
            this.hotelSearch("MAKKA");
        }
        if (!this.steps.includes("1") && this.steps.includes("2")) {
            this.madeenaloader = true;
            this.hotelSearch("MADEENA");
        }
    };
    Object.defineProperty(CreateTripComponent.prototype, "roomAdultsArray", {
        get: function () {
            return this.paymentForm.get("roomAdultsArray");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateTripComponent.prototype, "roomChildrenArray", {
        get: function () {
            return this.paymentForm.get("roomChildrenArray");
        },
        enumerable: true,
        configurable: true
    });
    CreateTripComponent.prototype.addroomAdult = function (id) {
        return this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            passportNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ped: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            Residence: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            room_id: id
        });
    };
    CreateTripComponent.prototype.addroomChild = function (id) {
        return this.formBuilder.group({
            firstNameChild: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastNameChild: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            childGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            childDob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            childPassportNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            childPed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            room_id: id
        });
    };
    Object.defineProperty(CreateTripComponent.prototype, "f1", {
        get: function () { return this.paymentForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTripComponent.prototype.onSubmit = function () {
    };
    CreateTripComponent.prototype.setForm = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.data, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.loadContent = true;
    };
    Object.defineProperty(CreateTripComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateTripComponent.prototype.save = function () {
        console.log(this.form.value);
    };
    CreateTripComponent.prototype.onFilterChange = function (item) {
        console.log(item);
    };
    CreateTripComponent.prototype.onDropDownClose = function (item) {
        console.log(item);
    };
    CreateTripComponent.prototype.onItemSelect = function (item) {
        var q = [];
        this.transportListData.forEach(function (value, index) {
            var a = value.vehicle_types.map(function (x) { return x.categories[0].additional_services.map(function (a) { return a.additional_service_code.includes(item.item_id); }); });
            a.forEach(function (y) {
                if (y == [true]) {
                    q.push(value);
                }
            });
        });
        this.transportList = q;
    };
    CreateTripComponent.prototype.onRouteSelect = function (item) {
        this.routeId = item.item_id;
        this.disableBtn = true;
    };
    CreateTripComponent.prototype.onCategorySelect = function (item) {
        var _this = this;
        this.categoryId = item.item_id;
        this.categoryIds.push(this.categoryId);
        console.log(this.categoryIds);
        var q = [];
        this.categoryId = item.item_id;
        this.transportListData.forEach(function (value, index) {
            _this.categoryIds.forEach(function (id) {
                var a = value.vehicle_types.map(function (x) { return x.categories[0].category_code == id; });
                console.log(a);
                if (a[0]) {
                    q.push(value);
                    console.log(q);
                }
            });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
    };
    CreateTripComponent.prototype.onCategoryDeselect = function (item) {
        var _this = this;
        var index = this.categoryIds.indexOf(item.item_id);
        if (index > -1) {
            this.categoryIds.splice(index, 1);
        }
        console.log(this.categoryIds);
        var q = [];
        this.categoryId = item.item_id;
        this.transportListData.forEach(function (value, index) {
            _this.categoryIds.forEach(function (id) {
                var a = value.vehicle_types.map(function (x) { return x.categories[0].category_code == id; });
                console.log(a);
                if (a[0]) {
                    q.push(value);
                    console.log(q);
                }
            });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
    };
    CreateTripComponent.prototype.onadditionalDeSelectAll = function (items) {
        this.transportList = this.transportListData;
    };
    CreateTripComponent.prototype.onCategoryDeSelectAll = function (items) {
        this.transportList = this.transportListData;
    };
    CreateTripComponent.prototype.onadditionalItemSelect = function (item) {
        var _this = this;
        this.additionl_serviceId = [];
        var id = item.item_id;
        console.log(id);
        this.additionl_serviceId.push(id);
        console.log(this.additionl_serviceId);
        var q = [];
        this.transportListData.forEach(function (value, index) {
            _this.additionl_serviceId.forEach(function (id) {
                console.log(value.vehicle_types);
                var a = value.vehicle_types.map(function (x) { return x.categories[0].additional_services.map(function (c) { return c.additional_service_code; }) == id; });
                console.log(a);
                if (a[0]) {
                    q.push(value);
                    console.log(q);
                }
            });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
    };
    CreateTripComponent.prototype.onadditionalItemDeselect = function (item) {
        var _this = this;
        var index = this.additionl_serviceId.indexOf(item.item_id);
        if (index > -1) {
            this.additionl_serviceId.splice(index, 1);
        }
        console.log(this.additionl_serviceId);
        var q = [];
        this.transportListData.forEach(function (value, index) {
            _this.additionl_serviceId.forEach(function (id) {
                var a = value.vehicle_types.map(function (x) { return x.categories[0].additional_services.map(function (c) { return c.additional_service_code; }) == id; });
                console.log(a);
                if (a[0]) {
                    q.push(value);
                    console.log(q);
                }
            });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
    };
    CreateTripComponent.prototype.onadditionalsericeSelectAll = function (items) {
        var _this = this;
        this.additionlserviceId = items.map(function (x) { return x.item_id; });
        var q = [];
        this.transportListData.forEach(function (value, index) {
            _this.additionlserviceId.forEach(function (id) {
                console.log(value.vehicle_types);
                var a = value.vehicle_types.map(function (x) { return x.categories[0].additional_services.map(function (c) { return c.additional_service_code; }) == id; });
                console.log(a);
                if (a[0]) {
                    q.push(value);
                    console.log(q);
                }
            });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
    };
    CreateTripComponent.prototype.onadditionalSelectAll = function (items) {
        var _this = this;
        this.additionl_serviceId = items.map(function (x) { return x.item_id; });
        var q = [];
        this.transportListData.forEach(function (value, index) {
            _this.additionl_serviceId.forEach(function (id) {
                console.log(value.vehicle_types);
                var a = value.vehicle_types.map(function (x) { return x.categories[0].additional_services.map(function (c) { return c.additional_service_code; }) == id; });
                console.log(a);
                if (a[0]) {
                    q.push(value);
                    console.log(q);
                }
            });
        });
        this.transportList = q.filter(this.helperService.onlyUnique);
    };
    CreateTripComponent.prototype.onVehicleSelect = function (item) {
        console.log(item);
        this.vehicleId = item.item_id;
        if (this.vehicleId == 1) {
            this.vehicleMax = 4;
        }
        if (this.vehicleId == 2) {
            this.vehicleMax = 7;
        }
        if (this.vehicleId == 3) {
            this.vehicleMax = 60;
        }
        this.disableBtn = true;
    };
    CreateTripComponent.prototype.onDeSelect = function (item) {
        console.log(item);
    };
    CreateTripComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    CreateTripComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    CreateTripComponent.prototype.onNationalityDeselect = function (item) {
        this.countryCode = null;
        this.searchServiceButtonActive = false;
    };
    CreateTripComponent.prototype.onCountryDeselect = function (item) {
        this.countryCode = null;
        this.searchServiceButtonActive = false;
    };
    CreateTripComponent.prototype.onCountrySelect = function (item) {
        this.countryCode = item.item_id;
        this.selectedCountry = item.item_id;
        if (this.nationalityCode && this.countryCode) {
            this.searchServiceButtonActive = true;
        }
    };
    CreateTripComponent.prototype.clearTransport = function (item) {
        this.transportList = [];
        this.disableBtn = false;
    };
    CreateTripComponent.prototype.setRoomAllocationPopup = function () {
        var _this = this;
        document.getElementById("flightArrivalDate").style.display = "block";
        var totalCount = this.countadult + this.countchild;
        console.log(totalCount);
        if (totalCount < 5) {
            this.vehicleTypeItems = [{ item_id: "1", item_text: "Sedan Car" }];
            this.vehicleId = 1;
            this.vehicleMax = 4;
        }
        else if (totalCount < 7 && totalCount > 5) {
            this.vehicleTypeItems = [{ item_id: "2", item_text: "SUV Car" }];
            this.vehicleId = 2;
            this.vehicleMax = 7;
        }
        else if (totalCount > 7) {
            this.vehicleTypeItems = [{ item_id: "3", item_text: "Bus" }];
            this.vehicleId = 3;
            this.vehicleMax = 60;
        }
        this.showElement = true;
        setTimeout(function () {
            _this.showElement = false;
        }, 5000);
        this.travelersButton();
        this.showModalroom = true;
        this.IsHidden = true;
    };
    CreateTripComponent.prototype.returnToPaymentPage = function () {
        if (this.steps.includes("1") && this.steps.includes("2") && this.steps.includes("3")) {
            this.move(3);
        }
        else {
            this.stepper.next();
        }
    };
    CreateTripComponent.prototype.moveToCorrespondingStage = function (n) {
        var largest = 0;
        if (this.stageArray.length > 0) {
            this.stageArray = this.stageArray.filter(this.helperService.onlyUnique);
        }
        this.stageArray.forEach(function (element) {
            if (element > largest) {
                largest = element;
            }
        });
        if (largest > n) {
            this.move(largest);
        }
        else {
            this.move(n);
        }
    };
    CreateTripComponent.prototype.moveToPaymentPage = function () {
        if (this.steps.includes("1") && this.steps.includes("2") && this.steps.includes("3")) {
            this.move(3);
        }
        else {
            this.stepper.next();
        }
    };
    /*
  * this method for call back from hotel-details-popup component
  */
    CreateTripComponent.prototype.createTripHandle = function (event) {
        this.move(this.appStore.stepperIndex);
        this.getTripData();
        if (this.steps.includes("2") && this.appStore.stepperIndex == 1) {
            this.hotelSearch("MADEENA");
        }
    };
    /*
   * this method for fetching hotel list
   */
    CreateTripComponent.prototype.hotelSearch = function (city) {
        var _this = this;
        this.common.pilotHotelSearch(this.createTripAdapter.hotelSearchRequest(city, this.userDetails), this.appStore.langCode).subscribe(function (data) {
            var response = data;
            _this.hotelsList = data.results;
            if (typeof response.search_id != "undefined") {
                if (city == "MAKKA") {
                    _this.appStore.makkahSearchId = response.search_id;
                }
                if (city == "MADEENA") {
                    _this.appStore.madinahSearchId = response.search_id;
                    _this.noOfDaysInMadeena = _this.appStore.noOfDaysInMadeena;
                    _this.travellersCount = _this.appStore.totalTravellers;
                    _this.madeenaCheckInDate = _this.userDetails.madeenaCheckinDate;
                    _this.madeenaCheckOutDate = _this.userDetails.madeenaCheckoutDate;
                }
                _this.common.getHotelList(response.search_id, _this.selectedCurrency, "en-US")
                    .subscribe(function (data) {
                    _this.hotelsList = data;
                    if (_this.hotelsList.length == 0) {
                        _this.notifyService.showWarning(_this.translateService.instant("No hotel(s) availabe plz change date"));
                    }
                }, function (error) { _this.notifyService.showWarning(_this.translateService.instant("Server busy try later")); });
            }
        }, function (error) { _this.notifyService.showWarning(_this.translateService.instant("Server busy try later")); });
    };
    /*
   * this method for for polling loader status
   */
    CreateTripComponent.prototype.ngDoCheck = function () {
        if (!this.appStore.showShimmer) {
            this.showShimmer = false;
        }
    };
    /**
     * Method for navigate to home page
     */
    CreateTripComponent.prototype.backToHomePage = function () {
        this.router.navigate(['/firstpage']);
    };
    CreateTripComponent.prototype.searchTransportList = function () {
        this.showtransportsearch = false;
    };
    var CreateTripComponent_1;
    CreateTripComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _create_trip_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] },
        { type: _stores_app_store__WEBPACK_IMPORTED_MODULE_6__["AppStore"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] },
        { type: _common_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"] },
        { type: src_app_common_services_auth_services__WEBPACK_IMPORTED_MODULE_15__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menuIconClass", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CreateTripComponent.prototype, "menuIconClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menuPopupClass", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CreateTripComponent.prototype, "menuPopupClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menuIcon", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CreateTripComponent.prototype, "menuIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menuPopup", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CreateTripComponent.prototype, "menuPopup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menuIconTo", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CreateTripComponent.prototype, "menuIconTo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("menuPopupTo", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CreateTripComponent.prototype, "menuPopupTo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_components_makka_hotel_makka_hotel_component__WEBPACK_IMPORTED_MODULE_14__["MakkaHotelComponent"], { static: false })
    ], CreateTripComponent.prototype, "child", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("stepper", { static: true })
    ], CreateTripComponent.prototype, "stepper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("multiSelect", { static: true })
    ], CreateTripComponent.prototype, "multiSelect", void 0);
    CreateTripComponent = CreateTripComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-trip",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-trip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sub-agent/create-trip/create-trip.component.html")).default,
            providers: [
                {
                    provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["MAT_STEPPER_GLOBAL_OPTIONS"],
                    useValue: { displayDefaultIndicatorType: false },
                },
                _create_trip_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"],
                src_app_common_services_helper_service__WEBPACK_IMPORTED_MODULE_13__["HelperService"],
                src_app_common_services_auth_services__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
            ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-trip.component.scss */ "./src/app/components/sub-agent/create-trip/create-trip.component.scss")).default]
        })
    ], CreateTripComponent);
    return CreateTripComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-agent/create-trip/create-trip.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/sub-agent/create-trip/create-trip.module.ts ***!
  \************************************************************************/
/*! exports provided: TranslatorFactory, CreateTripModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorFactory", function() { return TranslatorFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripModule", function() { return CreateTripModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var mydatepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mydatepicker */ "./node_modules/mydatepicker/index.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ "./node_modules/@syncfusion/ej2-angular-calendars/@syncfusion/ej2-angular-calendars.es5.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var mobx_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! mobx-angular */ "./node_modules/mobx-angular/dist/mobx-angular.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_trip_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./create-trip-routing.module */ "./src/app/components/sub-agent/create-trip/create-trip-routing.module.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _create_trip_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./create-trip.component */ "./src/app/components/sub-agent/create-trip/create-trip.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _components_makka_hotel_makka_hotel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/makka-hotel/makka-hotel.component */ "./src/app/components/sub-agent/create-trip/components/makka-hotel/makka-hotel.component.ts");
/* harmony import */ var _components_hotel_details_popup_hotel_details_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/hotel-details-popup/hotel-details-popup.component */ "./src/app/components/sub-agent/create-trip/components/hotel-details-popup/hotel-details-popup.component.ts");
/* harmony import */ var _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/transport/transport.component */ "./src/app/components/sub-agent/create-trip/components/transport/transport.component.ts");
/* harmony import */ var _components_payment_hotel_payment_hotel_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/payment-hotel/payment-hotel.component */ "./src/app/components/sub-agent/create-trip/components/payment-hotel/payment-hotel.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/sub-agent/create-trip/components/loader/loader.component.ts");
/* harmony import */ var _components_room_details_popup_room_details_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/room-details-popup/room-details-popup.component */ "./src/app/components/sub-agent/create-trip/components/room-details-popup/room-details-popup.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _components_loader_hotel_popup_loader_hotel_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/loader-hotel-popup/loader-hotel-popup.component */ "./src/app/components/sub-agent/create-trip/components/loader-hotel-popup/loader-hotel-popup.component.ts");
/* harmony import */ var _components_hotel_image_popup_hotel_image_popup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/hotel-image-popup/hotel-image-popup.component */ "./src/app/components/sub-agent/create-trip/components/hotel-image-popup/hotel-image-popup.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
































/* Initializing and Exporting the Translate Loader as Factory */
function TranslatorFactory(httpClient) { return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json'); }










var CreateTripModule = /** @class */ (function () {
    function CreateTripModule(translateService) {
        this.translateService = translateService;
        translateService.setDefaultLang('en'); /* Setting up the Translate Json to English - `en` */
    }
    CreateTripModule.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateService"] }
    ]; };
    CreateTripModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _create_trip_component__WEBPACK_IMPORTED_MODULE_27__["CreateTripComponent"],
                _components_makka_hotel_makka_hotel_component__WEBPACK_IMPORTED_MODULE_30__["MakkaHotelComponent"],
                _components_hotel_details_popup_hotel_details_popup_component__WEBPACK_IMPORTED_MODULE_31__["HotelDetailsPopupComponent"],
                _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_32__["TransportComponent"],
                _components_payment_hotel_payment_hotel_component__WEBPACK_IMPORTED_MODULE_33__["PaymentHotelComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_34__["LoaderComponent"],
                _components_room_details_popup_room_details_popup_component__WEBPACK_IMPORTED_MODULE_35__["RoomDetailsPopupComponent"],
                _components_loader_hotel_popup_loader_hotel_popup_component__WEBPACK_IMPORTED_MODULE_37__["LoaderHotelPopupComponent"],
                _components_hotel_image_popup_hotel_image_popup_component__WEBPACK_IMPORTED_MODULE_38__["HotelImagePopupComponent"]
            ],
            imports: [
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                mydatepicker__WEBPACK_IMPORTED_MODULE_8__["MyDatePickerModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
                ng_image_slider__WEBPACK_IMPORTED_MODULE_9__["NgImageSliderModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_11__["DateRangePickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSliderModule"],
                _create_trip_routing_module__WEBPACK_IMPORTED_MODULE_18__["CreateTripRoutingModule"],
                mobx_angular__WEBPACK_IMPORTED_MODULE_16__["MobxAngularModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OwlNativeDateTimeModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_23__["MatTabsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_39__["CarouselModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                        useFactory: TranslatorFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    },
                    isolate: true
                })
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            ],
        })
    ], CreateTripModule);
    return CreateTripModule;
}());



/***/ }),

/***/ "./src/app/helpers/sub-agent/create-trip-helpers.ts":
/*!**********************************************************!*\
  !*** ./src/app/helpers/sub-agent/create-trip-helpers.ts ***!
  \**********************************************************/
/*! exports provided: CreateTripHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTripHelper", function() { return CreateTripHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_models_custome_trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/custome_trip */ "./src/app/models/custome_trip.ts");


var CreateTripHelper = /** @class */ (function () {
    function CreateTripHelper(helperService) {
        this.helperService = helperService;
    }
    /**
     * Method for setting hotel details  to details popup
     * @param data  response
     * @param selectedHotelInfo hotel info
     * @param rooms  room details
     */
    CreateTripHelper.prototype.setDataForHotelDeatils = function (data, selectedHotelInfo, rooms) {
        var selectedHotel = data;
        var isGrouped;
        var selectedRoomGroups = [];
        var container = new src_app_models_custome_trip__WEBPACK_IMPORTED_MODULE_1__["TripRoom"]();
        var totalRoomPrice = 0;
        selectedHotel = data;
        var makkaHotelName = selectedHotel.name;
        container.diffDays = this.helperService.noOfDaysBetweenTwoDates(selectedHotel.check_in_time, selectedHotel.check_out_time);
        for (var i = 0; i < selectedHotel.room_groups.length; ++i) {
            for (var j = 0; j < selectedHotel.room_groups[i].rooms.length; ++j) {
                selectedHotel.room_groups[i].rooms[j].insertedState =
                    selectedHotelInfo.city == "Makkah" ? "MAKKA" : "MADEENA";
                selectedHotel.room_groups[i].rooms[j].isRoomSelectionChecked = false;
                selectedHotel.room_groups[i].rooms[j].insertedAmount =
                    selectedHotel.room_groups[i].amount
                        ? selectedHotel.room_groups[i].amount
                        : 0;
            }
        }
        var hotelPics = [];
        selectedHotel.meta_data.images.forEach(function (el) { hotelPics.push(el.image_url); });
        container.hotelPics = hotelPics;
        if (!selectedHotel.room_groups[0].is_grouped) {
            container.isGrouped = false;
            isGrouped = false;
        }
        if (selectedHotel.room_groups[0].is_grouped) {
            container.isGrouped = true;
            isGrouped = true;
        }
        if (isGrouped) {
            var grouped = [];
            selectedHotel.room_groups.forEach(function (element) {
                if (element.is_grouped) {
                    element.isRoomSelectionChecked = false;
                    grouped.push(element);
                }
            });
            rooms.forEach(function (element) {
                if (element.child_ages) {
                    element.pax_info_str =
                        element.adults +
                            "ADT_" +
                            element.children +
                            "CHD_" +
                            element.child_ages.sort().join("_");
                }
                else {
                    element.pax_info_str =
                        element.adults + "ADT_" + element.children + "CHD_";
                }
            });
            grouped.forEach(function (x) {
                x.insertedAvailableCount = x.rooms
                    .map(function (room) { return room.available_count; })
                    .reduce(function (a, b) { return a + b; }, 0);
            });
            rooms.forEach(function (el) {
                grouped.forEach(function (elmt) {
                    if (elmt.insertedAvailableCount == rooms.length) {
                        elmt.rooms.forEach(function (element) {
                            if (el.pax_info_str == element.pax_info_str) {
                                selectedRoomGroups.push(elmt);
                            }
                        });
                    }
                });
            });
            selectedRoomGroups.forEach(function (x) {
                x.rooms.forEach(function (room) {
                    room.adult_number = room.pax_info
                        .filter(function (x) { return x.type == "ADT"; })
                        .map(function (a) { return a.quantity; })
                        .reduce(function (a, b) { return a + b; }, 0);
                    room.child_number = room.pax_info
                        .filter(function (x) { return x.type == "CHD"; })
                        .map(function (a) { return a.quantity; })
                        .reduce(function (a, b) { return a + b; }, 0);
                });
            });
            selectedRoomGroups = selectedRoomGroups.filter(this.helperService.onlyUnique);
            container.roomGroups = selectedRoomGroups;
        }
        if (!isGrouped) {
            container.isSelectBtnActive = true;
            var roomGroups = [];
            for (var i = 0; i < selectedHotel.room_groups.length; i++) {
                if (!selectedHotel.room_groups[i].is_grouped) {
                    roomGroups.push(selectedHotel.room_groups[i]);
                }
            }
            for (var i = 0; i < rooms.length; i++) {
                if (rooms[i].child_ages) {
                    rooms[i].pax_info_str =
                        rooms[i].adults +
                            "ADT_" +
                            rooms[i].children +
                            "CHD_" +
                            rooms[i].child_ages.sort().join("_");
                }
                else {
                    rooms[i].pax_info_str =
                        rooms[i].adults + "ADT_" + rooms[i].children + "CHD_";
                }
            }
            for (var i = 0; i < rooms.length; i++) {
                for (var j = 0; j < roomGroups.length; j++) {
                    if (rooms[i].pax_info_str == roomGroups[j].pax_info_str) {
                        selectedRoomGroups.push(roomGroups[j]);
                    }
                }
            }
            for (var i = 0; i < selectedRoomGroups.length; i++) {
                for (var j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
                    selectedRoomGroups[i].rooms[0].isRoomSelectionChecked = true;
                }
            }
            for (var i = 0; i < selectedRoomGroups.length; i++) {
                for (var j = 0; j < selectedRoomGroups[i].rooms.length; j++) {
                    if (selectedRoomGroups[i].rooms[j].isRoomSelectionChecked) {
                        totalRoomPrice =
                            totalRoomPrice +
                                selectedRoomGroups[i].rooms[j].amount;
                    }
                }
            }
            container.roomCount = rooms.length;
            container.roomPrice = totalRoomPrice;
            selectedRoomGroups.forEach(function (x) {
                x.rooms.forEach(function (room) {
                    room.adult_number = room.pax_info
                        .filter(function (x) { return x.type == "ADT"; })
                        .map(function (a) { return a.quantity; })
                        .reduce(function (a, b) { return a + b; }, 0);
                    room.child_number = room.pax_info
                        .filter(function (x) { return x.type == "CHD"; })
                        .map(function (a) { return a.quantity; })
                        .reduce(function (a, b) { return a + b; }, 0);
                });
            });
            container.roomGroups = selectedRoomGroups;
        }
        return container;
    };
    return CreateTripHelper;
}());



/***/ }),

/***/ "./src/app/models/custome_trip.ts":
/*!****************************************!*\
  !*** ./src/app/models/custome_trip.ts ***!
  \****************************************/
/*! exports provided: OnwardFlight, ReturnFlight, TripFlight, Trip, TripRoom, ImageObject, CustomeTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnwardFlight", function() { return OnwardFlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnFlight", function() { return ReturnFlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripFlight", function() { return TripFlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trip", function() { return Trip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripRoom", function() { return TripRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObject", function() { return ImageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomeTrip", function() { return CustomeTrip; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var OnwardFlight = /** @class */ (function () {
    function OnwardFlight() {
    }
    return OnwardFlight;
}());

var ReturnFlight = /** @class */ (function () {
    function ReturnFlight() {
    }
    return ReturnFlight;
}());

var TripFlight = /** @class */ (function () {
    function TripFlight() {
    }
    return TripFlight;
}());

var Trip = /** @class */ (function () {
    function Trip() {
    }
    return Trip;
}());

var TripRoom = /** @class */ (function () {
    function TripRoom() {
    }
    return TripRoom;
}());

var ImageObject = /** @class */ (function () {
    function ImageObject() {
    }
    return ImageObject;
}());

var CustomeTrip = /** @class */ (function () {
    function CustomeTrip() {
    }
    return CustomeTrip;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-landing-landing-module~modules-sub-agent-sub-agent-module.js.map