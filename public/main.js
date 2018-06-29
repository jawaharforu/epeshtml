(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js":
/*!***************************************************************!*\
  !*** ./angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js ***!
  \***************************************************************/
/*! exports provided: ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, RippleModule, RippleDirective, WavesModule, WavesDirective, DeepModule, DeepDirective, InputsModule, MdbInputDirective, ActiveModule, ActiveDirective, InputValidateDirective, NavbarModule, BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective, CarouselComponent, CarouselConfig, CarouselModule, ChartsModule, BaseChartDirective, CollapseDirective, CollapseModule, ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective, MDBRootModule, MDBBootstrapModule, ɵb1, ɵa1, ɵe1, ɵc1, ɵg1, ɵh1, ɵd1, ɵf1, ɵi1, ɵj1, ɵl1, ɵk1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleModule", function() { return RippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleDirective", function() { return RippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesModule", function() { return WavesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesDirective", function() { return WavesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepModule", function() { return DeepModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepDirective", function() { return DeepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsModule", function() { return InputsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbInputDirective", function() { return MdbInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModule", function() { return ActiveModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDirective", function() { return ActiveDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidateDirective", function() { return InputValidateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChartDirective", function() { return BaseChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalService", function() { return MDBModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalRef", function() { return MDBModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBRootModule", function() { return MDBRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBootstrapModule", function() { return MDBBootstrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb1", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe1", function() { return SlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc1", function() { return EqualValidatorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg1", function() { return LinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh1", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd1", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf1", function() { return NavbarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi1", function() { return NavlinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj1", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl1", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk1", function() { return PositioningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeepDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function DeepDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    DeepDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    };
    return DeepDirective;
}());
DeepDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDeepDirective]',
            },] },
];
/** @nocollapse */
DeepDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeepModule = /** @class */ (function () {
    function DeepModule() {
    }
    /**
     * @return {?}
     */
    DeepModule.forRoot = function () {
        return { ngModule: DeepModule, providers: [] };
    };
    return DeepModule;
}());
DeepModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [DeepDirective],
                exports: [DeepDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonCheckboxDirective;
}());
ButtonCheckboxDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonCheckboxDirective.propDecorators = {
    "btnCheckboxTrue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "btnCheckboxFalse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ButtonRadioDirective(el) {
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = function () {
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonRadioDirective;
}());
ButtonRadioDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
ButtonRadioDirective.propDecorators = {
    "mdbRadio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "uncheckable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    return ButtonsModule;
}());
ButtonsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RippleDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function RippleDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RippleDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            var /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            var /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var /** @type {?} */ ripple = button.appendChild(tmp);
            var /** @type {?} */ top = yPos + 'px';
            var /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            var /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return RippleDirective;
}());
RippleDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbRippleRadius]'
            },] },
];
/** @nocollapse */
RippleDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
RippleDirective.propDecorators = {
    "click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RippleModule = /** @class */ (function () {
    function RippleModule() {
    }
    /**
     * @return {?}
     */
    RippleModule.forRoot = function () {
        return { ngModule: RippleModule, providers: [] };
    };
    return RippleModule;
}());
RippleModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [RippleDirective],
                exports: [RippleDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActiveDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    function ActiveDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    ActiveDirective.prototype.onClick = function () {
        this.initComponent();
        this.isClicked = true;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.Click = function () {
        this.isClicked = true;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.onBlur = function () {
        this.checkValue();
        this.isClicked = false;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initComponent();
        setTimeout(function () {
            _this.checkValue();
        }, 0);
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.initComponent = function () {
        var /** @type {?} */ inputId;
        var /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel != null) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.checkValue = function () {
        var /** @type {?} */ value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked || value === '' && this.el.nativeElement.placeholder || value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    return ActiveDirective;
}());
ActiveDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbActive]'
            },] },
];
/** @nocollapse */
ActiveDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
ActiveDirective.propDecorators = {
    "mdbActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus', ['$event'],] },],
    "Click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputValidateDirective = /** @class */ (function () {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    function InputValidateDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.value = '';
        this.minLength = '0';
        this.maxLength = '524288';
    }
    /**
     * @return {?}
     */
    InputValidateDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        this.wrongTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.wrongTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.wrongTextContainer, 'text-danger', true);
        var /** @type {?} */ textWrong = this._elRef.nativeElement.getAttribute('data-error');
        this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
        this._renderer.setElementStyle(this.wrongTextContainer, 'visibility', 'hidden');
        this.rightTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.rightTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.rightTextContainer, 'text-success', true);
        var /** @type {?} */ textSuccess = this._elRef.nativeElement.getAttribute('data-success');
        this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
        this._renderer.setElementStyle(this.rightTextContainer, 'visibility', 'hidden');
    };
    /**
     * @return {?}
     */
    InputValidateDirective.prototype.onBlur = function () {
        var /** @type {?} */ inputType = this._elRef.nativeElement.type;
        if (inputType === 'email') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    /*tslint:disable:max-line-length*/
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
            else if (!this.customRegex) {
                /*tslint:disable:max-line-length*/
                var /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
        }
        else if (inputType === 'password') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'text') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'submit') {
            for (var /** @type {?} */ i = 0; i < this._elRef.nativeElement.parentElement.length; i++) {
                if (this._elRef.nativeElement.parentElement[i].value == null || this._elRef.nativeElement.parentElement[i].value === '') {
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-success', false);
                }
                else if (!this._elRef.nativeElement.parentElement[i].value == null) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'tel') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'number') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
    };
    return InputValidateDirective;
}());
InputValidateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbInputValidate]',
            },] },
];
/** @nocollapse */
InputValidateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputValidateDirective.propDecorators = {
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "minLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minLength',] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['maxLength',] },],
    "customRegex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['customRegex',] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActiveModule = /** @class */ (function () {
    function ActiveModule() {
    }
    /**
     * @return {?}
     */
    ActiveModule.forRoot = function () {
        return { ngModule: ActiveModule, providers: [] };
    };
    return ActiveModule;
}());
ActiveModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ActiveDirective, InputValidateDirective],
                exports: [ActiveDirective, InputValidateDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MdbInputDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    function MdbInputDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.minLength = '0';
        this.maxLength = '524288';
        this.mdbValidate = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onfocus = function () {
        try {
            this.renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onBlur = function () {
        try {
            if (this.el.nativeElement.value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
        try {
            // Validation:
            if (this.mdbValidate) {
                var /** @type {?} */ inputType = this.el.nativeElement.type;
                if (inputType === 'email') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            /*tslint:disable:max-line-length*/
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        }
                    }
                    else if (!this.customRegex) {
                        /*tslint:disable:max-line-length*/
                        var /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        }
                    }
                }
                else if (inputType === 'password') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'text') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'submit') {
                    for (var /** @type {?} */ i = 0; i < this.el.nativeElement.parentElement.length; i++) {
                        if (this.el.nativeElement.parentElement[i].value == null || this.el.nativeElement.parentElement[i].value === '') {
                            this.renderer.addClass(this.el.nativeElement.parentElement[i], 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement.parentElement[i], 'counter-success');
                        }
                        else if (!this.el.nativeElement.parentElement[i].value == null) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'tel') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        var /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'number') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        var /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
            }
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onchange = function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnInit = function () {
        if (this.mdbValidate) {
            // Inititalise a new <span> wrong/right elements and render it below the host component.
            // this.wrongTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.wrongTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.wrongTextContainer, 'inputVal');
            this.renderer.addClass(this.wrongTextContainer, 'text-danger');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.wrongTextContainer);
            var /** @type {?} */ textWrong = this.el.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            this.renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            // this.rightTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.rightTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.rightTextContainer, 'inputVal');
            this.renderer.addClass(this.rightTextContainer, 'text-success');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.rightTextContainer);
            var /** @type {?} */ textSuccess = this.el.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            this.renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this.renderer.removeClass(this.elLabel, 'active');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.initComponent = function () {
        var /** @type {?} */ inputId;
        var /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.checkValue = function () {
        var /** @type {?} */ value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) {
                if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model').length !== 0) {
                    this.renderer.addClass(this.elLabel, 'active');
                }
            }
        }
    };
    return MdbInputDirective;
}());
MdbInputDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbInputDirective]'
            },] },
];
/** @nocollapse */
MdbInputDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
MdbInputDirective.propDecorators = {
    "mdbInputDirective": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mdbInputDirective',] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['placeholder',] },],
    "minLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minLength',] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['maxLength',] },],
    "customRegex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['customRegex',] },],
    "mdbValidate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mdbValidate',] },],
    "focusCheckbox": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['focusCheckbox',] },],
    "focusRadio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['focusRadio',] },],
    "onfocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] },],
    "onchange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EqualValidatorDirective = /** @class */ (function () {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = function (c) {
        var /** @type {?} */ setToNullValue = null;
        // self value (e.g. retype password)
        var /** @type {?} */ v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        var /** @type {?} */ e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    return EqualValidatorDirective;
}());
EqualValidatorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidatorDirective; }), multi: true }
                ]
            },] },
];
/** @nocollapse */
EqualValidatorDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['validateEqual',] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['reverse',] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    /**
     * @return {?}
     */
    InputsModule.forRoot = function () {
        return { ngModule: InputsModule, providers: [] };
    };
    return InputsModule;
}());
InputsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [MdbInputDirective, EqualValidatorDirective],
                exports: [MdbInputDirective, EqualValidatorDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = function () {
        this.navbarLinkClicks.next();
    };
    return NavbarService;
}());
NavbarService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = function () {
        var /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = function () {
    };
    return LinksComponent;
}());
LinksComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'links',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
LinksComponent.ctorParameters = function () { return [
    { type: NavbarService, },
]; };
LinksComponent.propDecorators = {
    "links": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], descendants: true },] },],
    "linkClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'logo',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     */
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = function () {
        var /** @type {?} */ isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
            https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.collapse = true;
            if (!_this.containerInside) {
                var /** @type {?} */ childrens = Array.from(_this.container.nativeElement.children);
                childrens.forEach(function (child) {
                    // this.navbar.nativeElement.append(child);
                    _this.renderer.appendChild(_this.navbar.nativeElement, child);
                    _this.container.nativeElement.remove();
                });
            }
            if (_this.el.nativeElement.children.length === 0) {
                _this.el.nativeElement.remove();
            }
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.toggle = function (event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        /**
         * @return {?}
         */
        get: function () {
            // if(!this.containerInside) {
            //  return 'flex';
            // } else {
            return '';
            // }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        var /** @type {?} */ breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{SideClass}}\" #nav> <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container> <ng-content select=\"logo\"></ng-content> <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content> <div *ngIf=\"this.doubleNav == false\"> <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\"> <span class=\"navbar-toggler-icon\"> </span> </button> </div> <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\"> <ng-content select=\"links\"></ng-content> </div> </div> </nav> ",
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: NavbarService, },
]; };
NavbarComponent.propDecorators = {
    "SideClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "containerInside": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "el": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['navbar',] },],
    "mobile": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mobile',] },],
    "navbar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nav',] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] },],
    "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] },],
    "onScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:scroll', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavlinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = function () {
    };
    return NavlinksComponent;
}());
NavlinksComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'navlinks',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
NavlinksComponent.ctorParameters = function () { return [
    { type: NavbarService, },
]; };
NavlinksComponent.propDecorators = {
    "links": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], descendants: true },] },],
    "linkClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                providers: [NavbarService]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    /**
     * @param {?} open
     * @param {?=} close
     */
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var /** @type {?} */ parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var /** @type {?} */ manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    var /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @template T
 */
var ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = /** @type {?} */ (opts.target) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                //  document.querySelector(this.container as string)
                document.querySelector(/** @type {?} */ (this.container))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var /** @type {?} */ viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef_1.rootNodes], viewRef_1);
            }
            var /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var /** @type {?} */ modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers.concat([content]), this._injector);
            var /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var /** @type {?} */ elPosition;
        var /** @type {?} */ parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            var /** @type {?} */ bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var /** @type {?} */ offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var /** @type {?} */ elBcr = element.getBoundingClientRect();
        var /** @type {?} */ viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var /** @type {?} */ elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var /** @type {?} */ hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var /** @type {?} */ shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var /** @type {?} */ shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var /** @type {?} */ targetElBCR = targetElement.getBoundingClientRect();
        var /** @type {?} */ placementPrimary = placement.split(' ')[0] || 'top';
        var /** @type {?} */ placementSecondary = placement.split(' ')[1] || 'center';
        var /** @type {?} */ targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = function (element, prop) { return ((window.getComputedStyle(element)))[prop]; };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = function (element) {
        var /** @type {?} */ offsetParentEl = (element.offsetParent) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return /** @type {?} */ (document.querySelector(element));
        }
        if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
            return element.nativeElement;
        }
        return /** @type {?} */ (element);
    };
    return PositioningService;
}());
PositioningService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    return ComponentLoaderFactory;
}());
ComponentLoaderFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
    { type: PositioningService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    return BsDropdownState;
}());
BsDropdownState.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
BsDropdownState.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    /**
     * @param {?} _state
     */
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return BsDropdownContainerComponent;
}());
BsDropdownContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
            },] },
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = function () { return [
    { type: BsDropdownState, },
]; };
BsDropdownContainerComponent.propDecorators = {
    "display": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
    "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.position',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    return BsDropdownMenuDirective;
}());
BsDropdownMenuDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] },
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = function () { return [
    { type: BsDropdownState, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _element
     */
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    return BsDropdownToggleDirective;
}());
BsDropdownToggleDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle'
            },] },
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = function () { return [
    { type: BsDropdownState, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
BsDropdownToggleDirective.propDecorators = {
    "ariaHaspopup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-haspopup',] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    "onDocumentClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] },],
    "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
    return BsDropdownConfig;
}());
BsDropdownConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || /** @type {?} */ ({});
var document$1 = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function isBs3() {
    return win.__theme === 'bs4';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _config
     * @param {?} _state
     */
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        //const parent = this._elementRef.nativeElement.classList;
        var /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var /** @type {?} */ _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var /** @type {?} */ _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var /** @type {?} */ parent = this._elementRef.nativeElement.classList;
        var /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    return BsDropdownDirective;
}());
BsDropdownDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState]
            },] },
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: ComponentLoaderFactory, },
    { type: BsDropdownConfig, },
    { type: BsDropdownState, },
]; };
BsDropdownDirective.propDecorators = {
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "dropup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.dropup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    return DropdownModule;
}());
DropdownModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var /** @type {?} */ outArray = [];
        var /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = {
            value: /** @type {?} */ (value),
            next: /** @type {?} */ (undefined),
            previous: /** @type {?} */ (undefined)
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                var /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = function (fn) {
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = function (value) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ position = 0;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = function (fn) {
        var /** @type {?} */ current = this.head;
        // let result: T;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = function (fn) {
        var /** @type {?} */ current = this.head;
        // let result: number;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        this.keyboard = false;
    }
    return CarouselConfig;
}());
CarouselConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var Direction = { UNKNOWN: 0, NEXT: 1, PREV: 2, };
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    /**
     * @param {?} config
     * @param {?} el
     */
    function CarouselComponent(config, el) {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        // protected el: ElementRef = null;
        this.el = null;
        this.animationEnd = true;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        /**
         * @return {?}
         */
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        /**
         * @return {?}
         */
        get: function () {
            return this._currentActiveSlide;
        },
        /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         * @return {?}
         */
        get: function () {
            return this._interval;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            var /** @type {?} */ nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var /** @type {?} */ currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    };
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var /** @type {?} */ direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
    };
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var /** @type {?} */ direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
    };
    /**
     * @param {?} goToIndex
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = function (goToIndex) {
        var _this = this;
        //const currentSlide = this._slides.get(this._currentActiveSlide);
        var /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            setTimeout(function () {
                goToSlide.directionNext = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                _this.play();
            }, 100);
        }
    };
    /**
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = function (goToIndex, direction) {
        var _this = this;
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        var /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                setTimeout(function () {
                    goToSlide.directionLeft = true;
                    currentSlide.directionLeft = true;
                }, 100);
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                setTimeout(function () {
                    goToSlide.directionRight = true;
                    currentSlide.directionRight = true;
                }, 100);
            }
            setTimeout(function () {
                goToSlide.directionLeft = false;
                goToSlide.directionNext = false;
                currentSlide.directionLeft = false;
                currentSlide.directionNext = false;
                goToSlide.directionRight = false;
                goToSlide.directionPrev = false;
                currentSlide.directionRight = false;
                currentSlide.directionPrev = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                var /** @type {?} */ directionName;
                if (direction === Direction.NEXT) {
                    directionName = 'Next';
                }
                else if (direction === Direction.PREV) {
                    directionName = 'Prev';
                }
                _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                _this.play();
            }, 700);
        }
    };
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var /** @type {?} */ nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var /** @type {?} */ nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var /** @type {?} */ reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = function () {
        this.el.nativeElement.focus();
    };
    return CarouselComponent;
}());
CarouselComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-carousel',
                template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\"> <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\"> <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a> <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a> </div> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"> <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\"> </li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span  class=\"sr-only\">Previous</span> </a> <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>",
            },] },
];
/** @nocollapse */
CarouselComponent.ctorParameters = function () { return [
    { type: CarouselConfig, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
CarouselComponent.propDecorators = {
    "noWrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "noPause": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isControls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isControls',] },],
    "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['type',] },],
    "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['animation',] },],
    "activeSlideChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "activeSlide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "interval": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "play": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] },],
    "pause": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] },],
    "keyboardControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
    "focus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    /**
     * @param {?} carousel
     * @param {?} el
     */
    function SlideComponent(carousel, el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        this.el = null;
        this.carousel = carousel;
        this.el = el;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return SlideComponent;
}());
SlideComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-slide',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/** @nocollapse */
SlideComponent.ctorParameters = function () { return [
    { type: CarouselComponent, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
SlideComponent.propDecorators = {
    "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "animated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.animated',] },],
    "directionNext": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-next',] },],
    "directionLeft": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-left',] },],
    "directionPrev": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-prev',] },],
    "directionRight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-right',] },],
    "carousel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    return CarouselModule;
}());
CarouselModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BaseChartDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var /** @type {?} */ datasets = this.getDatasets();
        var /** @type {?} */ options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var /** @type {?} */ opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    /**
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var /** @type {?} */ datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((this.data)).map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var /** @type {?} */ newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
BaseChartDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] },
];
/** @nocollapse */
BaseChartDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
BaseChartDirective.propDecorators = {
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "datasets": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "labels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "chartType": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "colors": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "legend": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "chartClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "chartHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    var /** @type {?} */ colorsArr = new Array(count);
    for (var /** @type {?} */ i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    BaseChartDirective
                ],
                exports: [
                    BaseChartDirective
                ],
                imports: []
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseDirective = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    function CollapseDirective(_el, _renderer) {
        this.showBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shownBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hiddenBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.collapsing = false;
        this.animationTime = 500;
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngOnInit = function () {
        this._el.nativeElement.classList.add('show');
        this._el.nativeElement.style.transition = this.animationTime + 'ms ease';
        if (!this.collapse) {
            this._el.nativeElement.classList.remove('show');
            this.hide();
        }
        else {
            this.show();
        }
        this.isExpanded = this.collapse;
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewInit = function () {
        this.maxHeight = this._el.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.resize = function () {
        var /** @type {?} */ container = this._el.nativeElement;
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
    };
    /**
     * allows to manually toggle content visibility
     * @param {?=} event
     * @return {?}
     */
    CollapseDirective.prototype.toggle = function (event) {
        if (!this.collapsing) {
            if (this.isExpanded) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        try {
            if (event.type === 'click') {
                this.maxHeight = event.target.parentElement.nextElementSibling.scrollHeight;
            }
            else if (event.type === 'mouseenter' || event.type === 'mouseleave') {
                this.maxHeight = event.target.nextElementSibling.scrollHeight;
            }
        }
        catch (error) { }
    };
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = function () {
        var _this = this;
        this.collapsing = true;
        this.hideBsCollapse.emit();
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        var /** @type {?} */ container = this._el.nativeElement;
        container.classList.remove('collapse');
        container.classList.remove('show');
        container.classList.add('collapsing');
        this._renderer.setStyle(container, 'height', '0px');
        setTimeout(function () {
            container.classList.remove('collapsing');
            container.classList.add('collapse');
            _this.hiddenBsCollapse.emit();
            _this.collapsing = false;
        }, this.animationTime);
        this.collapsed.emit(this);
    };
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = function () {
        var _this = this;
        if (!this.isExpanded) {
            this.collapsing = true;
            this.showBsCollapse.emit();
            this.isCollapse = false;
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            var /** @type {?} */ container_1 = this._el.nativeElement;
            container_1.classList.remove('collapse');
            container_1.classList.add('collapsing');
            setTimeout(function () {
                _this._renderer.setStyle(container_1, 'height', _this.maxHeight + 'px');
            }, 10);
            setTimeout(function () {
                container_1.classList.remove('collapsing');
                container_1.classList.add('collapse');
                container_1.classList.add('show');
                _this.shownBsCollapse.emit();
                _this.collapsing = false;
            }, this.animationTime - (this.animationTime * 0.5));
            this.expanded.emit(this);
        }
    };
    return CollapseDirective;
}());
CollapseDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
            },] },
];
/** @nocollapse */
CollapseDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
CollapseDirective.propDecorators = {
    "showBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['showBsCollapse',] },],
    "shownBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['shownBsCollapse',] },],
    "hideBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['hideBsCollapse',] },],
    "hiddenBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['hiddenBsCollapse',] },],
    "collapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "expanded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "collapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "animationTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    return CollapseModule;
}());
CollapseModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
ModalOptions.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = function () { };
    return MDBModalRef;
}());
MDBModalRef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var /** @type {?} */ view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isAnimated;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.IN, value);
            if (!isBs3()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.FADE, this.isAnimated);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    return ModalBackdropComponent;
}());
ModalBackdropComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-modal-backdrop',
                template: "",
            },] },
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
ModalBackdropComponent.propDecorators = {
    "classNameBackDrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal-backdrop',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        var /** @type {?} */ transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var /** @type {?} */ callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = function () {
        var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
        otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    return ModalDirective;
}());
ModalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbModal]',
                exportAs: 'mdb-modal'
            },] },
];
/** @nocollapse */
ModalDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: ComponentLoaderFactory, },
]; };
ModalDirective.propDecorators = {
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var msConfig = {
    serviceInstance: new Object()
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.tabindex = -1;
        this.role = 'dialog';
        this.modla = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = msConfig.serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, ClassName.FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.setElementClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, true);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, ClassName.OPEN, true);
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, false);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.setElementClass(document.body, ClassName.OPEN, false);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    };
    return ModalContainerComponent;
}());
ModalContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-modal-container',
                template: "\n  <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
            },] },
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = function () { return [
    { type: ModalOptions, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
ModalContainerComponent.propDecorators = {
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] },],
    "role": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['role',] },],
    "modla": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MDBModalService = /** @class */ (function () {
    /**
     * @param {?} clf
     * @param {?} el
     * @param {?} v
     * @param {?} r
     */
    function MDBModalService(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        this.config = modalConfigDefaults;
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.v, this.r);
        msConfig.serviceInstance = this;
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = function () {
        var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var /** @type {?} */ duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = function (content) {
        var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        var /** @type {?} */ mdbModalRef = new MDBModalRef();
        var /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = function (level) {
        var /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = function () {
        var /** @type {?} */ scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        var /** @type {?} */ loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    return MDBModalService;
}());
MDBModalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
MDBModalService.ctorParameters = function () { return [
    { type: ComponentLoaderFactory, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    return ModalModule;
}());
ModalModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
    return TooltipConfig;
}());
TooltipConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function TooltipContainerComponent(config) {
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    return TooltipContainerComponent;
}());
TooltipContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: "\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
            },] },
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = function () { return [
    { type: TooltipConfig, },
]; };
TooltipContainerComponent.propDecorators = {
    "show": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function OnChange() {
    var /** @type {?} */ sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var /** @type {?} */ _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get: function () { return this[_key]; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     */
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        get: function () { return this._tooltip.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        var /** @type {?} */ showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    return TooltipDirective;
}());
TooltipDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: ComponentLoaderFactory, },
    { type: TooltipConfig, },
]; };
TooltipDirective.propDecorators = {
    "mdbTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "tooltipChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "delay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "fadeDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    OnChange(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    ;
    return TooltipModule;
}());
TooltipModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    return PopoverConfig;
}());
PopoverConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    return PopoverContainerComponent;
}());
PopoverContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-popover-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
            },] },
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = function () { return [
    { type: PopoverConfig, },
]; };
PopoverContainerComponent.propDecorators = {
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "show": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] },],
    "role": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] },],
    "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _config
     * @param {?} cis
     */
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () { return this._popover.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    return PopoverDirective;
}());
PopoverDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] },
];
/** @nocollapse */
PopoverDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: PopoverConfig, },
    { type: ComponentLoaderFactory, },
]; };
PopoverDirective.propDecorators = {
    "mdbPopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    return PopoverModule;
}());
PopoverModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WavesDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            var /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            var /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var /** @type {?} */ ripple = button.appendChild(tmp);
            var /** @type {?} */ top = yPos + 'px';
            var /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            var /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return WavesDirective;
}());
WavesDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbWavesEffect]'
            },] },
];
/** @nocollapse */
WavesDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
WavesDirective.propDecorators = {
    "click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    /**
     * @return {?}
     */
    WavesModule.forRoot = function () {
        return { ngModule: WavesModule, providers: [] };
    };
    return WavesModule;
}());
WavesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [WavesDirective],
                exports: [WavesDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MODULES = [
    DeepModule,
    ButtonsModule,
    RippleModule,
    WavesModule,
    InputsModule,
    ActiveModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    return MDBRootModule;
}());
MDBRootModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    ButtonsModule,
                    DeepModule,
                    RippleModule.forRoot(),
                    WavesModule.forRoot(),
                    InputsModule.forRoot(),
                    ActiveModule.forRoot(),
                    NavbarModule,
                    DropdownModule.forRoot(),
                    CarouselModule.forRoot(),
                    ChartsModule,
                    CollapseModule.forRoot(),
                    ModalModule.forRoot(),
                    TooltipModule.forRoot(),
                    PopoverModule.forRoot(),
                ],
                exports: MODULES,
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            },] },
];
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    return MDBBootstrapModule;
}());
MDBBootstrapModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ exports: MODULES },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=angular-bootstrap-md.es5.js.map


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faqs/faqs.component */ "./src/app/faqs/faqs.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'faqs', component: _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_4__["FaqsComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../angular-bootstrap-md */ "./angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/banner/banner.component */ "./src/app/home/banner/banner.component.ts");
/* harmony import */ var _home_ourfeatures_ourfeatures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/ourfeatures/ourfeatures.component */ "./src/app/home/ourfeatures/ourfeatures.component.ts");
/* harmony import */ var _home_ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/ourproduct/ourproduct.component */ "./src/app/home/ourproduct/ourproduct.component.ts");
/* harmony import */ var _home_voluptatem_voluptatem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/voluptatem/voluptatem.component */ "./src/app/home/voluptatem/voluptatem.component.ts");
/* harmony import */ var _home_ourcustomers_ourcustomers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/ourcustomers/ourcustomers.component */ "./src/app/home/ourcustomers/ourcustomers.component.ts");
/* harmony import */ var _home_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/testimonials/testimonials.component */ "./src/app/home/testimonials/testimonials.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _footer_footer_top_footer_top_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer-top/footer-top.component */ "./src/app/footer/footer-top/footer-top.component.ts");
/* harmony import */ var _footer_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer-bottom/footer-bottom.component */ "./src/app/footer/footer-bottom/footer-bottom.component.ts");
/* harmony import */ var _navheader_navheader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navheader/navheader.component */ "./src/app/navheader/navheader.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/product-banner/product-banner.component */ "./src/app/products/product-banner/product-banner.component.ts");
/* harmony import */ var _products_products_features_products_features_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/products-features/products-features.component */ "./src/app/products/products-features/products-features.component.ts");
/* harmony import */ var _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./faqs/faqs.component */ "./src/app/faqs/faqs.component.ts");
/* harmony import */ var _faqs_faqs_banner_faqs_banner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faqs/faqs-banner/faqs-banner.component */ "./src/app/faqs/faqs-banner/faqs-banner.component.ts");
/* harmony import */ var _faqs_faqs_questions_faqs_questions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faqs/faqs-questions/faqs-questions.component */ "./src/app/faqs/faqs-questions/faqs-questions.component.ts");
/* harmony import */ var _faqs_faqs_category_faqs_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./faqs/faqs-category/faqs-category.component */ "./src/app/faqs/faqs-category/faqs-category.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _registration_registration_banner_registration_banner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./registration/registration-banner/registration-banner.component */ "./src/app/registration/registration-banner/registration-banner.component.ts");
/* harmony import */ var _registration_registration_content_registration_content_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./registration/registration-content/registration-content.component */ "./src/app/registration/registration-content/registration-content.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _home_banner_banner_component__WEBPACK_IMPORTED_MODULE_7__["BannerComponent"],
                _home_ourfeatures_ourfeatures_component__WEBPACK_IMPORTED_MODULE_8__["OurfeaturesComponent"],
                _home_ourproduct_ourproduct_component__WEBPACK_IMPORTED_MODULE_9__["OurproductComponent"],
                _home_voluptatem_voluptatem_component__WEBPACK_IMPORTED_MODULE_10__["VoluptatemComponent"],
                _home_ourcustomers_ourcustomers_component__WEBPACK_IMPORTED_MODULE_11__["OurcustomersComponent"],
                _home_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_12__["TestimonialsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _footer_footer_top_footer_top_component__WEBPACK_IMPORTED_MODULE_14__["FooterTopComponent"],
                _footer_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_15__["FooterBottomComponent"],
                _navheader_navheader_component__WEBPACK_IMPORTED_MODULE_16__["NavheaderComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_18__["ProductsComponent"],
                _products_product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_19__["ProductBannerComponent"],
                _products_products_features_products_features_component__WEBPACK_IMPORTED_MODULE_20__["ProductsFeaturesComponent"],
                _faqs_faqs_component__WEBPACK_IMPORTED_MODULE_21__["FaqsComponent"],
                _faqs_faqs_banner_faqs_banner_component__WEBPACK_IMPORTED_MODULE_22__["FaqsBannerComponent"],
                _faqs_faqs_questions_faqs_questions_component__WEBPACK_IMPORTED_MODULE_23__["FaqsQuestionsComponent"],
                _faqs_faqs_category_faqs_category_component__WEBPACK_IMPORTED_MODULE_24__["FaqsCategoryComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_25__["RegistrationComponent"],
                _registration_registration_banner_registration_banner_component__WEBPACK_IMPORTED_MODULE_26__["RegistrationBannerComponent"],
                _registration_registration_content_registration_content_component__WEBPACK_IMPORTED_MODULE_27__["RegistrationContentComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_28__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/faqs/faqs-banner/faqs-banner.component.html":
/*!*************************************************************!*\
  !*** ./src/app/faqs/faqs-banner/faqs-banner.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ep_banner\">\n  <div class=\"esep_nr\">\n    <div>\n        <img src=\"../../../assets/img/product.jpg\"/>\n    </div>\n    <section id=\"search\" class=\"search_key\">\n      <div class=\"container\">\n        <div class=\"col-sm-12 sed_unde\">\n            <h3>Sed prespiciatis! unde omnis</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima </p>\n            <form><input type=\"text\" class=\"search\" name=\"search\" placeholder=\"Search Keyword....\"></form>\n            <i class=\"fas fa-search\"></i>\n        </div> \n      </div>   \n    </section>\n  </div>\n</section>  "

/***/ }),

/***/ "./src/app/faqs/faqs-banner/faqs-banner.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/faqs/faqs-banner/faqs-banner.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faqs/faqs-banner/faqs-banner.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/faqs/faqs-banner/faqs-banner.component.ts ***!
  \***********************************************************/
/*! exports provided: FaqsBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsBannerComponent", function() { return FaqsBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsBannerComponent = /** @class */ (function () {
    function FaqsBannerComponent() {
    }
    FaqsBannerComponent.prototype.ngOnInit = function () {
    };
    FaqsBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs-banner',
            template: __webpack_require__(/*! ./faqs-banner.component.html */ "./src/app/faqs/faqs-banner/faqs-banner.component.html"),
            styles: [__webpack_require__(/*! ./faqs-banner.component.scss */ "./src/app/faqs/faqs-banner/faqs-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsBannerComponent);
    return FaqsBannerComponent;
}());



/***/ }),

/***/ "./src/app/faqs/faqs-category/faqs-category.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/faqs/faqs-category/faqs-category.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"side_bar_faq\">\n  <div class=\"container\"> \n    <div class=\"col-sm-12 side_list\">\n      <div class=\"col-sm-4\">\n              <ul class=\"caterory_sub\">\n                <li class=\"list_head\">\n                <a href=\"#\">Categories \n                </a>\n              </li>                  \n                        <li  data-toggle=\"collapse\" data-target=\"#products\" class=\"collapsed active first_li\">\n                        <a href=\"faqs#\"><i class=\"fas fa-arrow-circle-right\"></i> Getting Started <span class=\"arrow\"></span></a>\n                      </li>\n                      <ul class=\"sub-menu collapse caterory_sub_menu\" id=\"getting_started\">\n                          <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                          <li><a href=\"#\">General</a></li>\n                          <li><a href=\"#\">Buttons</a></li>\n                          <li><a href=\"#\">Tabs & Accordions</a></li>\n                          <li><a href=\"#\">Typography</a></li>\n                          <li><a href=\"#\">FontAwesome</a></li>\n                          <li><a href=\"#\">Slider</a></li>\n                          <li><a href=\"#\">Panels</a></li>\n                          <li><a href=\"#\">Widgets</a></li>\n                          <li><a href=\"#\">Bootstrap Model</a></li>\n                      </ul>\n\n\n                      <li  data-toggle=\"collapse\" data-target=\"#products1\" class=\"collapsed active\">\n                        <a href=\"#\"><i class=\"fas fa-arrow-circle-right\"></i>Eebera grown in polyhouse <span class=\"arrow\"></span></a>\n                      </li>\n                      <ul class=\"sub-menu collapse caterory_sub_menu\" id=\"products1\">\n                          <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                          <li><a href=\"#\">General</a></li>\n                          <li><a href=\"#\">Buttons</a></li>\n                          <li><a href=\"#\">Tabs & Accordions</a></li>\n                          <li><a href=\"#\">Typography</a></li>\n                          <li><a href=\"#\">FontAwesome</a></li>\n                          <li><a href=\"#\">Slider</a></li>\n                          <li><a href=\"#\">Panels</a></li>\n                          <li><a href=\"#\">Widgets</a></li>\n                          <li><a href=\"#\">Bootstrap Model</a></li>\n                      </ul>\n\n                      <li  data-toggle=\"collapse\" data-target=\"#products2\" class=\"collapsed active\">\n                        <a href=\"#\"><i class=\"fas fa-arrow-circle-right\"></i> Commerical varielies <span class=\"arrow\"></span></a>\n                      </li>\n                      <ul class=\"sub-menu collapse caterory_sub_menu\" id=\"products2\">\n                          <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                          <li><a href=\"#\">General</a></li>\n                          <li><a href=\"#\">Buttons</a></li>\n                          <li><a href=\"#\">Tabs & Accordions</a></li>\n                          <li><a href=\"#\">Typography</a></li>\n                          <li><a href=\"#\">FontAwesome</a></li>\n                          <li><a href=\"#\">Slider</a></li>\n                          <li><a href=\"#\">Panels</a></li>\n                          <li><a href=\"#\">Widgets</a></li>\n                          <li><a href=\"#\">Bootstrap Model</a></li>\n                      </ul>\n\n                      <li  data-toggle=\"collapse\" data-target=\"#products3\" class=\"collapsed active\">\n                        <a href=\"#\"><i class=\"fas fa-arrow-circle-right\"></i> Latest Dendrobium <span class=\"arrow\"></span></a>\n                      </li>\n                      <ul class=\"sub-menu collapse caterory_sub_menu\" id=\"products3\">\n                          <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                          <li><a href=\"#\">General</a></li>\n                          <li><a href=\"#\">Buttons</a></li>\n                          <li><a href=\"#\">Tabs & Accordions</a></li>\n                          <li><a href=\"#\">Typography</a></li>\n                          <li><a href=\"#\">FontAwesome</a></li>\n                          <li><a href=\"#\">Slider</a></li>\n                          <li><a href=\"#\">Panels</a></li>\n                          <li><a href=\"#\">Widgets</a></li>\n                          <li><a href=\"#\">Bootstrap Model</a></li>\n                      </ul>\n\n\n                      <li  data-toggle=\"collapse\" data-target=\"#products4\" class=\"collapsed active\">\n                        <a href=\"#\"><i class=\"fas fa-arrow-circle-right\"></i> Commerically Important <span class=\"arrow\"></span></a>\n                      </li>\n                      <ul class=\"sub-menu collapse caterory_sub_menu\" id=\"products4\">\n                          <li class=\"active\"><a href=\"#\">CSS3 Animation</a></li>\n                          <li><a href=\"#\">General</a></li>\n                          <li><a href=\"#\">Buttons</a></li>\n                          <li><a href=\"#\">Tabs & Accordions</a></li>\n                          <li><a href=\"#\">Typography</a></li>\n                          <li><a href=\"#\">FontAwesome</a></li>\n                          <li><a href=\"#\">Slider</a></li>\n                          <li><a href=\"#\">Panels</a></li>\n                          <li><a href=\"#\">Widgets</a></li>\n                          <li><a href=\"#\">Bootstrap Model</a></li>\n                      </ul>\n          </ul>\n\n      </div>\n      <div class=\"col-sm-8 sub_acc\">\n      <div class=\"col-sm-12\">\n          <h4>Frequently Asked Questions</h4>\n          <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus?</p>    \n      </div>\n      <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"panel panel-default\" *ngFor=\"let faq of FAQS\">\n            <div class=\"panel-heading\" role=\"tab\" id=\"heading{{faq.id}}\">\n                <h4 class=\"panel-title\">\n                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{faq.id}}\" aria-expanded=\"false\" aria-controls=\"collapse{{faq.id}}\">\n                        <i class=\"more-less fal fa-plus\"></i>\n                        {{faq.question}} \n                    </a>\n                </h4>\n            </div>\n            <div id=\"collapse{{faq.id}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading{{faq.id}}\">\n                <div class=\"panel-body\">\n                    {{faq.answer}}\n                </div>\n            </div>\n        </div>     \n    </div><!-- panel-group -->\n          \n      </div>\n    </div>\n  </div> \n</section>"

/***/ }),

/***/ "./src/app/faqs/faqs-category/faqs-category.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/faqs/faqs-category/faqs-category.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faqs/faqs-category/faqs-category.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/faqs/faqs-category/faqs-category.component.ts ***!
  \***************************************************************/
/*! exports provided: FaqsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsCategoryComponent", function() { return FaqsCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsCategoryComponent = /** @class */ (function () {
    function FaqsCategoryComponent() {
        this.FAQS = [
            { id: 1, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 2, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 3, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 4, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 5, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 6, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 7, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 8, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 9, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' },
            { id: 10, question: 'Anim pariatur cliche reprehenderi?', answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.  shoreditch et. Nihil anim keffiye helvetica.' }
        ];
    }
    FaqsCategoryComponent.prototype.ngOnInit = function () {
    };
    FaqsCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs-category',
            template: __webpack_require__(/*! ./faqs-category.component.html */ "./src/app/faqs/faqs-category/faqs-category.component.html"),
            styles: [__webpack_require__(/*! ./faqs-category.component.scss */ "./src/app/faqs/faqs-category/faqs-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsCategoryComponent);
    return FaqsCategoryComponent;
}());



/***/ }),

/***/ "./src/app/faqs/faqs-questions/faqs-questions.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/faqs/faqs-questions/faqs-questions.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  faqs-questions works!\n</p>\n"

/***/ }),

/***/ "./src/app/faqs/faqs-questions/faqs-questions.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/faqs/faqs-questions/faqs-questions.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faqs/faqs-questions/faqs-questions.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/faqs/faqs-questions/faqs-questions.component.ts ***!
  \*****************************************************************/
/*! exports provided: FaqsQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsQuestionsComponent", function() { return FaqsQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsQuestionsComponent = /** @class */ (function () {
    function FaqsQuestionsComponent() {
    }
    FaqsQuestionsComponent.prototype.ngOnInit = function () {
    };
    FaqsQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs-questions',
            template: __webpack_require__(/*! ./faqs-questions.component.html */ "./src/app/faqs/faqs-questions/faqs-questions.component.html"),
            styles: [__webpack_require__(/*! ./faqs-questions.component.scss */ "./src/app/faqs/faqs-questions/faqs-questions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsQuestionsComponent);
    return FaqsQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/faqs/faqs.component.html":
/*!******************************************!*\
  !*** ./src/app/faqs/faqs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navheader></app-navheader>\n<app-faqs-banner></app-faqs-banner>\n<app-faqs-category></app-faqs-category>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faqs/faqs.component.scss":
/*!******************************************!*\
  !*** ./src/app/faqs/faqs.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/faqs/faqs.component.ts":
/*!****************************************!*\
  !*** ./src/app/faqs/faqs.component.ts ***!
  \****************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqsComponent = /** @class */ (function () {
    function FaqsComponent() {
    }
    FaqsComponent.prototype.ngOnInit = function () {
    };
    FaqsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faqs',
            template: __webpack_require__(/*! ./faqs.component.html */ "./src/app/faqs/faqs.component.html"),
            styles: [__webpack_require__(/*! ./faqs.component.scss */ "./src/app/faqs/faqs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqsComponent);
    return FaqsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer-bottom/footer-bottom.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/footer/footer-bottom/footer-bottom.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\t<div id=\"copy-right\">\n\t<div class=\"container\">\n\t    <div class=\"col-sm-12 cpy_ryt\">\n\t        <div class=\"col-sm-6\">\n\t            <p>@2018 360 EPES. All rights reserved</p>\n\t        </div>\n\t        <div class=\"col-sm-6 cpy-ryt-hlf\">\n\t            <p><a href=\"#\">Privacy Policy | Terms of Service | Security & Compliance | Sitemap</a></p>\n\t        </div>\n\t    </div>\n\t</div>  \n</div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer-bottom/footer-bottom.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/footer/footer-bottom/footer-bottom.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer-bottom/footer-bottom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/footer/footer-bottom/footer-bottom.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBottomComponent", function() { return FooterBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBottomComponent = /** @class */ (function () {
    function FooterBottomComponent() {
    }
    FooterBottomComponent.prototype.ngOnInit = function () {
    };
    FooterBottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-bottom',
            template: __webpack_require__(/*! ./footer-bottom.component.html */ "./src/app/footer/footer-bottom/footer-bottom.component.html"),
            styles: [__webpack_require__(/*! ./footer-bottom.component.scss */ "./src/app/footer/footer-bottom/footer-bottom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterBottomComponent);
    return FooterBottomComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer-top/footer-top.component.html":
/*!*************************************************************!*\
  !*** ./src/app/footer/footer-top/footer-top.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\t<div class=\"container\">\n    <div class=\"col-sm-12 footer-head\">\n        <div class=\"col-sm-4 footer_log\">\n             <img src=\"../../../assets/img/epes-logo.png\" alt=\"wait\">\n        </div>\n        <div class=\"col-sm-2\">\n            <h5>PRODUCTS</h5>\n        </div>\n        <div class=\"col-sm-2\">\n            <h5>COMPANY</h5>\n        </div>\n        <div class=\"col-sm-4\">\n            <h5>CONTACT DETAILS</h5>\n        </div>\n    </div>\n \n    <div class=\"col-sm-12 details\">\n        <div class=\"col-sm-4 img-dtl detail\">\n            <p>\n                360 you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive \"\n            </p>\n        </div>\n        <div class=\"col-sm-2 product-dtl detail\">\n            <ul>\n                <li><a href=\"#\">EPES 360</a></li>\n                <li><a href=\"#\">Features</a></li>\n                <li><a href=\"#\">Pricing</a></li>\n            </ul>\n        </div>\n        <div class=\"col-sm-2 company-detail detail\">\n            <ul>\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Careers</a></li>\n                <li><a href=\"#\">Partner with Us</a></li>\n                <li><a href=\"#\">Contact Us</a></li>\n                <li><a href=\"#\">Help Desk</a></li>\n                <li><a href=\"#\">Blog</a></li>\n            </ul>\n        </div>\n        <div class=\"col-sm-4 contact detail\">\n            <div class=\"col-sm-12 contact-info\">\n                <div class=\"col-sm-6\">\n                    <p>For sales</p>\n                    <ul class=\"bt-contact-info\">\n                        <li><i class=\"fa fa-map-marker\"></i>&nbsp; Address: 123 Main Street,</li>\n                        <li><i class=\"fa fa-phone\"></i>&nbsp; (800) 0123 4567 890</li>\n                        <li><i class=\"fa fa-envelope\"></i>&nbsp; Support@My.website.com</li>\n                    </ul>\n                   \n                </div>\n                <div class=\"col-sm-6\">\n                     <p>For Support</p>\n                     <ul class=\"bt-contact-info\">\n                        <li><i class=\"fa fa-phone\"></i>&nbsp; (800) 0123 4567 890</li>\n                         <li><i class=\"fa fa-envelope\"></i>&nbsp; Support@My.website.com</li>\n                     </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer-top/footer-top.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/footer/footer-top/footer-top.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer-top/footer-top.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/footer/footer-top/footer-top.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTopComponent", function() { return FooterTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterTopComponent = /** @class */ (function () {
    //private logo = require("../../../assets/img/epes-logo.png");
    function FooterTopComponent() {
    }
    FooterTopComponent.prototype.ngOnInit = function () {
    };
    FooterTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-top',
            template: __webpack_require__(/*! ./footer-top.component.html */ "./src/app/footer/footer-top/footer-top.component.html"),
            styles: [__webpack_require__(/*! ./footer-top.component.scss */ "./src/app/footer/footer-top/footer-top.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterTopComponent);
    return FooterTopComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\t<app-footer-top></app-footer-top>\n\t<app-footer-bottom></app-footer-bottom>\t\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/banner/banner.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/banner/banner.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-example-1z\" class=\"carousel carousel-fade slide\" data-ride=\"carousel\">\r\n    <div class=\"\" role=\"listbox\">\r\n        <section id=\"home_ep_banner\">\r\n            <div class=\"view esep_nr\"> \r\n                <video class=\"video-intro\" autoplay loop>\r\n                    <source src=\"{{ video }}\" type=\"video/mp4\" />\r\n                </video>     \r\n            </div>\r\n            <div class=\"mask rgba-black-light d-flex justify-content-left align-items-left\">\r\n                    <div class=\"white-text mx-5 wow fadeIn\">\r\n                        <section id=\"hed1\">\r\n                            <div class=\"container detls\">\r\n                                <h2>Sed perspiciatis \" unde omnis</h2>\r\n                                <h3><strong>Lorem</strong> Ipsum perspiciatis </h3>\r\n                                <p>Tempora, placeat ratione porro voluptate odit minima.</p>\r\n                                <a [routerLink]=\"['/registration']\" class=\"nav-link waves-light\" mdbWavesEffect>Register Now</a>\r\n                            </div>\r\n                        </section>\r\n                    </div>\r\n                </div>            \r\n        </section>\r\n    </div>    \r\n</div>\r\n<section id=\"video\" class=\"container\">\r\n        <div class=\"container\">\r\n            <div class=\"bt-video-popup wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-5\"><div class=\"vc_column-inner \"><div class=\"wpb_wrapper\">\r\n                <div class=\"wpb_single_image wpb_content_element vc_align_left  vc_custom_1475744126573  bt-full-width\">\r\n                    <figure class=\"wpb_wrapper vc_figure\">\r\n                    <div class=\"vc_single_image-wrapper   vc_box_border_grey\"><img width=\"526\" height=\"435\" src=\"http://theme.bearsthemes.com/wordpress/consulta/wp-content/uploads/2016/08/bg_play_button-min.jpg\" class=\"vc_single_image-img attachment-full\" alt=\"\" srcset=\"http://theme.bearsthemes.com/wordpress/consulta/wp-content/uploads/2016/08/bg_play_button-min.jpg 526w, http://theme.bearsthemes.com/wordpress/consulta/wp-content/uploads/2016/08/bg_play_button-min-300x248.jpg 300w\" sizes=\"(max-width: 526px) 100vw, 526px\"></div></figure></div><a id=\"bears-element-1473152363583-2d928318-1776\" class=\"html5lightbox bs-btn bs-button-layout-bears_button--popup-video \" href=\"https://player.vimeo.com/video/1084537\" title=\"Consulta Video\">\r\n                <i class=\"fa fa-play-circle\"></i>\r\n                </a></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/banner/banner.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/banner/banner.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/banner/banner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/banner/banner.component.ts ***!
  \*************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    /* title = "Sed perspiciatis \" unde omnis";
     description = "<strong>Lorem</strong> Ipsum perspiciatis";
     sample_text = "Tempora, placeat ratione porro voluptate odit minima.";*/
    function BannerComponent() {
        this.video = "../../../assets/img/file.mp4";
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/home/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/home/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navheader></app-navheader>\n<app-banner></app-banner>\n<app-ourfeatures></app-ourfeatures>\n<app-ourproduct></app-ourproduct>\n\n<section>\n\t<div class=\"col-md-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<app-voluptatem></app-voluptatem>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section> \n<section>\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"row\">\n\t\t<div class=\"col-md-6 col-sm-12 full-width\">\n\t\t\t<app-ourcustomers></app-ourcustomers>\n\t\t</div>\n\t\t<div class=\"col-md-6 col-sm-12 full-width\">\n\t\t\t<app-testimonials></app-testimonials>\n\t\t</div>\n\t</div>\n</div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/ourcustomers/ourcustomers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/ourcustomers/ourcustomers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"our_customers\">\n    <div class=\"container-fluid\">\n\t    <div class=\"col-sm-12 our_testimoials\">\n\t        <div class=\"our_testi\">\n\t            <h3>{{title}}</h3>\n\t            <p class=\"\">{{description}}</p>\n\t        </div>\n\t    </div>\n\t</div>\n</section> "

/***/ }),

/***/ "./src/app/home/ourcustomers/ourcustomers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/ourcustomers/ourcustomers.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/ourcustomers/ourcustomers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/ourcustomers/ourcustomers.component.ts ***!
  \*************************************************************/
/*! exports provided: OurcustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurcustomersComponent", function() { return OurcustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurcustomersComponent = /** @class */ (function () {
    function OurcustomersComponent() {
        this.title = "Our Customers";
        this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus.";
    }
    OurcustomersComponent.prototype.ngOnInit = function () {
    };
    OurcustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourcustomers',
            template: __webpack_require__(/*! ./ourcustomers.component.html */ "./src/app/home/ourcustomers/ourcustomers.component.html"),
            styles: [__webpack_require__(/*! ./ourcustomers.component.scss */ "./src/app/home/ourcustomers/ourcustomers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurcustomersComponent);
    return OurcustomersComponent;
}());



/***/ }),

/***/ "./src/app/home/ourfeatures/ourfeatures.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/ourfeatures/ourfeatures.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"our_features\" class=\"our_pf\">\n  <div class=\"container\">\n      <p>{{header_pre_title}}</p>\n      <h3>{{header_title}}</h3>\n      <p class=\"feaie_dtl\">{{header_description}}</p>\n  </div>\n</section>\n<section id=\"featr_pic1\">\n<div class=\"container\">\n  <div class=\"col-sm-12 feature_imgs\"> \n      <div class=\"col-sm-4\">\n         <img src=\"{{ourfeature_image1}}\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n              <div class=\"middle\">\n              <div class=\"text\">{{ourfeature_text1}}</div>\n          </div>\n      </div>   \n\n      <div class=\"col-sm-4\">\n         <img src=\"{{ourfeature_image2}}\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n              <div class=\"middle\">\n              <div class=\"text\">{{ourfeature_text2}}</div>\n          </div>\n      </div> \n\n      <div class=\"col-sm-4\">\n         <img src=\"{{ourfeature_image3}}\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n              <div class=\"middle\">\n              <div class=\"text\">{{ourfeature_text3}}</div>\n          </div>\n      </div> \n\n  </div>\n  <div class=\"col-sm-12 feature_imgs2\">\n      <div class=\"col-sm-4\">\n         <img src=\"{{ourfeature_image4}}\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n              <div class=\"middle\">\n              <div class=\"text\">{{ourfeature_text4}}</div>\n          </div>\n      </div>   \n\n      <div class=\"col-sm-4\">\n         <img src=\"{{ourfeature_image5}}\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n              <div class=\"middle\">\n              <div class=\"text\">{{ourfeature_text5}}</div>\n          </div>\n      </div> \n\n      <div class=\"col-sm-4\">\n         <img src=\"{{ourfeature_image6}}\" alt=\"Avatar\" class=\"image\" style=\"width:100%\">\n              <div class=\"middle\">\n              <div class=\"text\">{{ourfeature_text6}}</div>\n          </div>\n      </div>\n    </div>\n</div>\n</section>\n<section id=\"see_all_feature\">\n    <div class=\"col-sm-12\">\n        <a href=\"#\">See All Features</a>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/home/ourfeatures/ourfeatures.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/ourfeatures/ourfeatures.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/ourfeatures/ourfeatures.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/ourfeatures/ourfeatures.component.ts ***!
  \***********************************************************/
/*! exports provided: OurfeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurfeaturesComponent", function() { return OurfeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurfeaturesComponent = /** @class */ (function () {
    function OurfeaturesComponent() {
        this.header_pre_title = "Lorem ipsum Do?";
        this.header_title = "Our Features";
        this.header_description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora";
        this.ourfeature_text1 = "ORGANIZATION SETUP";
        this.ourfeature_text2 = "ORGANOGRAM";
        this.ourfeature_text3 = "DATA MAPPING";
        this.ourfeature_text4 = "MULTIPLE ASSESSMENTS";
        this.ourfeature_text5 = "GAP ANALYSIS";
        this.ourfeature_text6 = "TOLERANCE INSIGHT";
        this.ourfeature_image1 = "../../../assets/img/organisation.png";
        this.ourfeature_image2 = "../../../assets/img/organogram.png";
        this.ourfeature_image3 = "../../../assets/img/mapping.png";
        this.ourfeature_image4 = "../../../assets/img/assesment.png";
        this.ourfeature_image5 = "../../../assets/img/tollerence.png";
        this.ourfeature_image6 = "../../../assets/img/gap-=analysis.png";
    }
    OurfeaturesComponent.prototype.ngOnInit = function () {
    };
    OurfeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourfeatures',
            template: __webpack_require__(/*! ./ourfeatures.component.html */ "./src/app/home/ourfeatures/ourfeatures.component.html"),
            styles: [__webpack_require__(/*! ./ourfeatures.component.scss */ "./src/app/home/ourfeatures/ourfeatures.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurfeaturesComponent);
    return OurfeaturesComponent;
}());



/***/ }),

/***/ "./src/app/home/ourproduct/ourproduct.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/ourproduct/ourproduct.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"our_prd_fet\" class=\"container our_pf\">\r\n    <div class=\"container\">\r\n        <div class=\"container\">\r\n            <p>{{header_pre_text}}</p>\r\n            <h3>{{header_text}}</h3>\r\n            <p class=\"feaie_dtl\">{{header_description}}</p>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section id=\"accordian\" class=\"container our_pf_accor\" >\r\n    <!--Accordion wrapper-->\r\n        <div class=\"row\" >\r\n            <div *ngFor=\"let product of our_product\" class=\"col-sm-4 product_fet {{product.themeclass}}\" >\r\n                <div class=\"col-sm-12\"> \r\n                    <h5>{{product.title}}</h5>\r\n                </div>   \r\n                <P> <span>{{product.priceperannum}}/</span>MO</P> \r\n                <p>(up to {{product.numberofemployee}} EMPOLYEE)</p>\r\n                <span> + </span>\r\n                <P> <span>{{product.pricepermonth}}/</span>MO</P>\r\n                <p class=\"per_ad\">PER ADDITIONAL EMPLOYEE</p>\r\n                <div class=\"col-sm-12 fold_pge\">\r\n                    <a href=\"#\">Buy Now</a>\r\n                    <h5>ALL FOUNDATION FEATURES 1</h5> \r\n                    <ul *ngFor=\"let service of list_of_services\">\r\n                        <li>{{service}}</li>\r\n                        <!--<li>ADVANCED REPORTS</li>\r\n                        <li>NOTIFICATIONS</li>\r\n                        <li>PRIORITY SUPPORT ASSISTANCE</li> -->\r\n                    </ul>\r\n                </div>\r\n            </div>          \r\n        </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/ourproduct/ourproduct.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/ourproduct/ourproduct.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/ourproduct/ourproduct.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/ourproduct/ourproduct.component.ts ***!
  \*********************************************************/
/*! exports provided: OurproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurproductComponent", function() { return OurproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurproductComponent = /** @class */ (function () {
    function OurproductComponent() {
        this.header_pre_text = "Awesome placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora";
        this.header_text = "Our Product Features";
        this.header_description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora";
        this.our_product = [
            {
                id: 1,
                title: "FOUNDATION",
                priceperannum: 4999,
                numberofemployee: 100,
                pricepermonth: 30,
                themeclass: "product_bg1"
            },
            {
                id: 2,
                title: "STRENGTH",
                priceperannum: 6999,
                numberofemployee: 100,
                pricepermonth: 60,
                themeclass: "product_bg2"
            },
            {
                id: 3,
                title: "GROWTH",
                priceperannum: 9999,
                numberofemployee: 100,
                pricepermonth: 90,
                themeclass: "product_bg3"
            }
        ];
        this.list_of_services = ["ADVANCED ANALYSIS", "ADVANCED REPORTS", "NOTIFICATIONS", "PRIORITY SUPPORT ASSISTANCE"];
    }
    OurproductComponent.prototype.ngOnInit = function () {
    };
    OurproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourproduct',
            template: __webpack_require__(/*! ./ourproduct.component.html */ "./src/app/home/ourproduct/ourproduct.component.html"),
            styles: [__webpack_require__(/*! ./ourproduct.component.scss */ "./src/app/home/ourproduct/ourproduct.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurproductComponent);
    return OurproductComponent;
}());



/***/ }),

/***/ "./src/app/home/testimonials/testimonials.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/testimonials/testimonials.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimoials\">\n    <div class=\"container-fluid\">\n    <div class=\"col-sm-12 our_testimoials\">\n        <div class=\"our_testi2\" >\n            <h3>Testimonials</h3>\n            \n            <div class=\"col-sm-12 carousel\" >\n                <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\" >\n                <div class=\"carousel-inner col-sm-12 crl-content\" role=\"listbox\">\n                    <div class=\"carousel-item active\">\n                            <p>\n                                    \"When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive \n        \n                                    <br> \n                                    When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive \"\n                                </p> \n                    </div>\n                    <div class=\"carousel-item\">\n                        <p>\n                            \"When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive \n\n                            <br> \n                            When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive \"\n                        </p>\n                    </div>\n                    <div class=\"carousel-item\">\n                        <p>\n                            \"When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.\n\n                            <br>\n                            When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive\" \n                        </p>\n                    </div>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n                </a>\n                </div>\n            </div>\n\n            \n        </div>\n       </div> \n    </div>\n    \n</section>\n"

/***/ }),

/***/ "./src/app/home/testimonials/testimonials.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/testimonials/testimonials.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/testimonials/testimonials.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/testimonials/testimonials.component.ts ***!
  \*************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
        this.test = [
            {
                id: 1,
                title: "Testimonial1",
                body: "When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.<br/>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive"
            },
            {
                id: 2,
                title: "Testimonial2",
                body: "When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.<br/>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive"
            },
            {
                id: 3,
                title: "Testimonial3",
                body: "When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive our best rate by booking via a third party on line, such as Booking.<br/>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you. We cannot guarantee that you'll receive"
            }
        ];
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/home/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/home/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/home/voluptatem/voluptatem.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/voluptatem/voluptatem.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"voluptatem\" class=\"accusantium our_pf1\">\n    <div class=\"container\">\n    \t<div class=\"vp_adjust\">\n\t        <p>Lorem ipsum Do</p>\n\t        <h3>Voluptatem Accusantium</h3>\n    \t\t<div class=\"col-sm-12 icons\">\n                <div class=\"col-sm-4\">\n                        <div class=\"img1\">\n                            <img src=\"../../../assets/img/icon-1.png\">\n                        </div>\n                        <span>85+</span>\n                        <p>Companies</p>\n                </div>\n\n                <div class=\"col-sm-4\">\n                    <div class=\"img2\">\n                            <img src=\"../../../assets/img/icon-2.png\">\n                        </div>\n                        <span>254</span>\n                        <p>Assessments Completed</p>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"img3\">\n                            <img src=\"../../../assets/img/icon-3.png\">\n                        </div>\n                        <span>100%</span>\n                        <p>Customer Satisfaction</p>\n                </div>\n            </div>       \n        </div>        \n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/voluptatem/voluptatem.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/voluptatem/voluptatem.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/voluptatem/voluptatem.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/voluptatem/voluptatem.component.ts ***!
  \*********************************************************/
/*! exports provided: VoluptatemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoluptatemComponent", function() { return VoluptatemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoluptatemComponent = /** @class */ (function () {
    //private icon1 = require("../../../assets/img/icon-1.png");
    //private icon2 = require("../../../assets/img/icon-2.png");
    //private icon3 = require("../../../assets/img/icon-3.png");
    //private bgimg = require("../../../assets/img/product-features.jpg");
    function VoluptatemComponent() {
    }
    VoluptatemComponent.prototype.ngOnInit = function () {
    };
    VoluptatemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voluptatem',
            template: __webpack_require__(/*! ./voluptatem.component.html */ "./src/app/home/voluptatem/voluptatem.component.html"),
            styles: [__webpack_require__(/*! ./voluptatem.component.scss */ "./src/app/home/voluptatem/voluptatem.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VoluptatemComponent);
    return VoluptatemComponent;
}());



/***/ }),

/***/ "./src/app/navheader/navheader.component.html":
/*!****************************************************!*\
  !*** ./src/app/navheader/navheader.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-light bg-faded nav_bd_poll_voted\">\n    <logo>\n        <a class=\"navbar-brand\" [routerLink]=\"['']\">\n            <img src=\"../../assets/img/epes-logo.png\" />\n        </a>\n    </logo>\n    <links>\n    \t<ul class=\"navbar-nav mr-auto\">\n    \t\t<li class=\"nav-item\">\n                <a [routerLink]=\"['/products']\" class=\"nav-link waves-light\" mdbWavesEffect>Products<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['']\" class=\"nav-link waves-light\" mdbWavesEffect>Company</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/faqs']\" class=\"nav-link waves-light\" mdbWavesEffect>Customer Experience</a>\n            </li>\n        \t<li class=\"nav-item\">\n                <a [routerLink]=\"['']\" class=\"nav-link waves-light\" mdbWavesEffect>Support & Services</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['']\" class=\"nav-link waves-light\" mdbWavesEffect>Resources</a>\n            </li>\n            <li class=\"nav-item login_all_poll\" >\n                <a [routerLink]=\"['/registration']\" class=\"nav-link\" href=\"#\">Register/<span>Login</span></a>\n            </li> \n    \t</ul>\n    </links>\n</mdb-navbar>"

/***/ }),

/***/ "./src/app/navheader/navheader.component.scss":
/*!****************************************************!*\
  !*** ./src/app/navheader/navheader.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navheader/navheader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/navheader/navheader.component.ts ***!
  \**************************************************/
/*! exports provided: NavheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavheaderComponent", function() { return NavheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavheaderComponent = /** @class */ (function () {
    function NavheaderComponent() {
        this.nav = [
            { id: 1, name: "Products", routing: "products" },
            { id: 2, name: "Company", routing: "" },
            { id: 3, name: "Customer Experience", routing: "faqs" },
            { id: 4, name: "Support & Services", routing: "" },
            { id: 5, name: "Resources", routing: "" },
        ];
    }
    NavheaderComponent.prototype.ngOnInit = function () {
    };
    NavheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navheader',
            template: __webpack_require__(/*! ./navheader.component.html */ "./src/app/navheader/navheader.component.html"),
            styles: [__webpack_require__(/*! ./navheader.component.scss */ "./src/app/navheader/navheader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavheaderComponent);
    return NavheaderComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-light bg-faded nav_bd_poll_voted payment-blackmenu\">\n    <logo>\n        <a class=\"navbar-brand\" [routerLink]=\"['']\">\n            <img src=\"../../assets/img/epes-logo.png\" />\n        </a>\n    </logo>\n    <links>\n    \t<ul class=\"navbar-nav mr-auto\">\n    \t\t<li class=\"nav-item\">\n                <a [routerLink]=\"['/products']\" class=\"nav-link waves-light\" mdbWavesEffect>Products<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['']\" class=\"nav-link waves-light\" mdbWavesEffect>Company</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/faqs']\" class=\"nav-link waves-light\" mdbWavesEffect>Customer Experience</a>\n            </li>\n        \t<li class=\"nav-item\">\n                <a [routerLink]=\"['']\" class=\"nav-link waves-light\" mdbWavesEffect>Support & Services</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['']\" class=\"nav-link waves-light\" mdbWavesEffect>Resources</a>\n            </li>\n            <li class=\"nav-item login_all_poll\" >\n                <a [routerLink]=\"['/registration']\" class=\"nav-link\" href=\"#\">Register/<span>Login</span></a>\n            </li> \n    \t</ul>\n    </links>\n</mdb-navbar>\n\n<div class=\"container\">\n  <h2 class=\"title_payment\">Payment</h2>\n  <p class=\"paymt-disc\">Essoltmn voluptate velit esse cillum dolore eu fugiat</p>\n  <div class=\"row\">\n\n      \n  <div class=\" col-md-6 order-md-2 summery-sec\">\n    <p class=\"summery-dic\">You'll be doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi doloremque laudantium</p>\n    <h4 class=\"summury-title\">Order Summary</h4>\n    <div class=\"row\">\n      <div class=\"col-6 label-text \">Produxts:</div>\n      <div class=\"col-6 dymanic-value\">EPES 360</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 label-text\">Number of Users:</div>\n      <div class=\"col-6 dymanic-value\">100</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 label-text\">Licensing mdel:</div>\n      <div class=\"col-6 dymanic-value\">Subscriptiond</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 label-text\">Package:</div>\n      <div class=\"col-6 dymanic-value\">Foundatoin</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 label-text\">Drarion, Years</div>\n      <div class=\"col-6 dymanic-value\"></div>\n    </div>\n    <div class=\"summery-footer\">\n      <div class=\"title_totleamount\">Total Cost:</div>\n      <div class=\"totleamount\">25600</div>\n      <p class=\"\">You'll be doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>\n    </div>\n  </div>\n  \n \n\n  <div class=\"col-md-6  order-md-1 \">\n      <div class=\"form_wrapper\">\n        \n        <h2 class=\"form_title\">Please Fill Out All <span>Fielda</span></h2>\n        <form class=\"payment-form\">\n          <input class=\"form-control\" id=\"full_name\" placeholder=\"Full Name*\" type=\"text\">\n          <input class=\"form-control\" id=\"email\" placeholder=\"Email*\" type=\"email\">\n          <input class=\"form-control\" id=\"phone\" placeholder=\"Phone*\" type=\"text\">\n          <textarea class=\"form-control\" id=\"address\" placeholder=\"Address\" ></textarea>\n          <select class=\"form-control\" id=\"State\" >\n            <option>State</option>\n          </select>\n          <select  class=\"form-control\" id=\"Country\" >\n            <option>Country</option>\n          </select>\n        </form>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n\n<div class=\"container\"\n><div class=\"col-md-2\">\n  <h2 class=\"sidebar_title\">EPES 360</h2>\n  <h4 class=\"sidebar_dic\">Accusantium doloremque</h4>\n  <buttom class=\"video-btn\">Watch video</buttom>\n  <div class=\"sidebar_menu_title\">Features</div>\n  <ul class=\"nav nav-pills nav-stacked sidebar_menu\">\n    <li class=\"active\"><a href=\"#tab_a\" data-toggle=\"pill\">Contact Management</a></li>\n    <li><a href=\"#Contact_Management\" data-toggle=\"pill\">Oppertunity Management</a></li>\n    <li><a href=\"#Lead_Management\" data-toggle=\"pill\">Lead Management</a></li>\n    <li><a href=\"#Reports_Dashboards\" data-toggle=\"pill\">Reports & Dashboards</a></li>\n    <li><a href=\"#Mobile\" data-toggle=\"pill\">Mobile</a></li>\n    <li><a href=\"#Email_Integration\" data-toggle=\"pill\">Email Integration</a></li>\n    <li><a href=\"#Sales_Forecasting\" data-toggle=\"pill\">Sales Forecasting</a></li>\n    <li><a href=\"#Forkflow_Approvals\" data-toggle=\"pill\">Forkflow and  Approvals</a></li>\n    <li><a href=\"#Files_Share\" data-toggle=\"pill\">Files Aync and Share</a></li>\n    <li><a href=\"#Sales_Collaboration\" data-toggle=\"pill\">Sales Collaboration</a></li>\n  </ul>\n</div>\n  <div class=\"tab-content col-md-10\">\n          <div class=\"tab-pane active\" id=\"tab_a\">\n               <h4>Pane A</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\n          </div>\n          <div class=\"tab-pane\" id=\"tab_b\">\n               <h4>Pane B</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\n          </div>\n          <div class=\"tab-pane\" id=\"tab_c\">\n               <h4>Pane C</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\n          </div>\n          <div class=\"tab-pane\" id=\"tab_d\">\n               <h4>Pane D</h4>\n              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>\n          </div>\n  </div><!-- tab content -->\n  <div class=\"clearfix\"></div>\n  </div><!-- end of container -->\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/payment/payment.component.scss":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1024px; }\n\n.nav-link {\n  color: #000 !important;\n  transition: 0.35s; }\n\nh2.title_payment {\n  font-weight: normal;\n  padding-top: 30px;\n  color: gray;\n  font-size: 35px; }\n\np.paymt-disc {\n  font-size: 15px;\n  font-weight: 500;\n  color: gray; }\n\n.pull-right {\n  float: right !important; }\n\n.form_wrapper {\n  padding: 30px;\n  background: lightgray;\n  margin-bottom: 100px;\n  max-width: 400px;\n  position: relative; }\n\n.form_wrapper::before {\n  z-index: 1;\n  content: '';\n  width: 0;\n  height: 0;\n  border-top: 230px solid #4db859;\n  border-right: 280px solid transparent;\n  left: 0px;\n  top: 0;\n  position: absolute; }\n\n.form_wrapper::after {\n  z-index: 1;\n  content: '';\n  width: 0;\n  height: 0;\n  border-bottom: 150px solid #4db859;\n  border-left: 150px solid transparent;\n  right: 0px;\n  bottom: 0px;\n  position: absolute; }\n\nh2.form_title, .payment-form {\n  position: relative;\n  z-index: 9; }\n\nh2.form_title {\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 200; }\n\nh2.form_title span {\n  font-weight: 600;\n  display: block; }\n\n.payment-form .form-control {\n  background: #fff;\n  border-radius: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n  height: 37px;\n  font-weight: 400;\n  opacity: .9; }\n\n.summery-sec {\n  box-shadow: -5px 0px 4px 0px #dbd0db;\n  padding: 30px;\n  margin-bottom: 15px;\n  max-height: 420px; }\n\np.summery-dic {\n  font-size: 15px; }\n\nh4.summury-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: gray; }\n\n.col-md-6.col-xs-6.label-text {\n  font-size: 14px; }\n\n.col-md-6.col-xs-6.dymanic-value {\n  font-weight: 500;\n  font-size: 15px; }\n\n.summery-sec .row {\n  margin-bottom: 10px; }\n\n.summery-footer {\n  border-top: 1px solid #ccc;\n  margin-top: 20px;\n  padding-top: 20px; }\n\n.title_totleamount {\n  font-size: 15px;\n  color: #000;\n  font-weight: 500;\n  float: left;\n  margin-right: 15px; }\n\n.totleamount {\n  margin-left: 5px;\n  font-size: 20px;\n  float: left;\n  color: #fdb828;\n  font-weight: 600;\n  margin-top: -5px; }\n\n.summery-footer p {\n  clear: both;\n  font-size: 14px;\n  padding-top: 10px; }\n\n@media only screen and (max-width: 768px) {\n  h2.title_payment {\n    margin-top: 70px; } }\n\n@media only screen and (max-width: 767px) {\n  h2.title_payment {\n    font-size: 25px; }\n  p.paymt-disc, p.summery-dic {\n    font-size: 13px; } }\n\n@media only screen and (max-width: 320px) {\n  .summery-sec {\n    max-height: 460px; } }\n\nul.nav.nav-pills.nav-stacked {\n  float: left;\n  display: block; }\n\n.tab-content.col-md-10 {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/products/product-banner/product-banner.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-banner/product-banner.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ep_banner\">\n  <div class=\"esep_nr\">\n    <div>\n        <img src=\"../../../assets/img/product.jpg\"/>\n    </div>\n    <section id=\"banner_title\">\n        <div class=\"container\">\n          <div class=\"col-sm-12 bnr_ttl\">\n                <h3>Lorem Ipsum perspiciatis</h3>\n                <p>Lorem ipsum dolor sit amet, consect</p>\n          </div> \n        </div>   \n    </section>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/products/product-banner/product-banner.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/products/product-banner/product-banner.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/product-banner/product-banner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products/product-banner/product-banner.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBannerComponent", function() { return ProductBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductBannerComponent = /** @class */ (function () {
    function ProductBannerComponent() {
    }
    ProductBannerComponent.prototype.ngOnInit = function () {
    };
    ProductBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-banner',
            template: __webpack_require__(/*! ./product-banner.component.html */ "./src/app/products/product-banner/product-banner.component.html"),
            styles: [__webpack_require__(/*! ./product-banner.component.scss */ "./src/app/products/product-banner/product-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductBannerComponent);
    return ProductBannerComponent;
}());



/***/ }),

/***/ "./src/app/products/products-features/products-features.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/products/products-features/products-features.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"our_prd_fet\" class=\"our_pf product_f\">\n\n  <div class=\"container\">\n     <div class=\"container\">\n         <p>Awesome placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora</p>\n         <h3>Our Product Features</h3>\n         <p class=\"feaie_dtl\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora</p>\n     </div>\n </div>\n \n</section>\n\n<section id=\"accordian_pf\" class=\"our_pf_accor\">\n<!--Accordion wrapper-->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 our_prd_fet product_fet product_feature hover1\" *ngFor=\"let products of product\">\n        <div class=\"col-sm-12 page2 head\"> \n            <h5>{{products.title}}</h5>\n         </div>   \n         <div class=\"col-sm-12 rates\">    \n            <p>₹ <span>{{products.priceperannum}}/</span>Month</p>\n            <p>(up to {{products.numberofemployees}} EMPOLYEE)</p>\n            <span> + </span>\n           <p>₹ <span>{{products.pricepermonth}}/</span>Month</p>\n            <p class=\"per_ad\">PER ADDITIONAL EMPLOYEE</p>\n           </div> \n             <div class=\"col-sm-12 fold_pge_pf\">\n           \n            <h5 class=\"sub_head1\">All Foundation Features 1</h5>\n            <ul>\n                <li>Company Setup</li>\n                <li>Organogram</li>\n                <li>Job Discription</li>\n                <li>Multiple Assessment</li>\n                <li>Company Setup</li>\n                <li>Organogram</li>\n                <li>Job Discription</li>\n\n            </ul>\n\n            <div class=\"bye_nw\">\n                 <a href=\"#\" class=\"buy1\">Buy Now</a>\n             </div>\n            </div>\n        </div>\n\n        <!--<div class=\"col-sm-4 product_fet product_feature hover2\">\n        <div class=\"col-sm-12 page2 head2\"> \n            <h5>Strength</h5>\n        </div>\n        <div class=\"col-sm-12 rates\">    \n            <p>₹ <span>6999/</span>Month</p>\n            <p>(up to 100 EMPOLYEE)</p>\n            <span> + </span>\n           <p>₹ <span>60/</span>Month</p>\n            <p class=\"per_ad\">PER ADDITIONAL EMPLOYEE</p>\n         </div>   \n        <div class=\"col-sm-12 fold_pge_pf\">\n            \n            <h5 class=\"sub_head2\">All Foundation Features 1</h5>\n            <ul>\n                <li>Job Discription</li>\n                <li>Multiple Assessment</li>\n                <li>Company Setup</li>\n                <li>Organogram</li>\n                <li>Job Discription</li>\n\n            </ul>\n           <div class=\"bye_nw\">\n                 <a href=\"#\" class=\"buy2\">Buy Now</a>\n             </div>\n        </div>\n\n\n        </div>\n\n        <div class=\"col-sm-4 product_fet product_feature hover3\">\n         <div class=\"col-sm-12 page2 head3\"> \n            <h5>Growth</h5>\n         </div> \n         <div class=\"col-sm-12 rates\">    \n            <p>₹ <span>9999/</span>Month</p>\n            <p>(up to 100 EMPOLYEE)</p>\n            <span> + </span>\n           <p>₹ <span>90/</span>Month</p>\n            <p class=\"per_ad\"> PER ADDITIONAL EMPLOYEE</p>\n          </div>  \n             <div class=\"col-sm-12 fold_pge_pf\">\n           \n            <h5 class=\"sub_head3\">All Foundation Features 1</h5>\n            <ul>\n                <li>Job Discription</li>\n                <li>Multiple Assessment</li>\n                <li>Company Setup</li>\n                <li>Organogram</li>\n             \n\n            </ul>\n            <div class=\"bye_nw\">\n                 <a href=\"#\" class=\"buy3\">Buy Now</a>\n             </div>\n            </div>\n        </div>-->\n        \n    </div>\n    <div  class=\"col-sm-12 note\">\n        <p>*Minimum Commitment of 3 months required </p>\n    </div>\n</div>\n\n</section>\n\n<section id=\"product_tour\">\n<div class=\"container\">\n    <div class=\"col-sm-12 orange_btn\">\n        <a href=\"#\">Product Tour</a>\n    </div>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/products/products-features/products-features.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/products/products-features/products-features.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products-features/products-features.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/products/products-features/products-features.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductsFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsFeaturesComponent", function() { return ProductsFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsFeaturesComponent = /** @class */ (function () {
    function ProductsFeaturesComponent() {
        this.product = [
            {
                id: 1,
                title: 'Foundation',
                priceperannum: 4999,
                numberofemployee: 100,
                pricepermonth: 30,
            },
            {
                id: 2,
                title: 'Strength',
                priceperannum: 6999,
                numberofemployee: 100,
                pricepermonth: 60,
            },
            {
                id: 3,
                title: 'Growth',
                priceperannum: 9999,
                numberofemployee: 100,
                pricepermonth: 90,
            }
        ];
    }
    ProductsFeaturesComponent.prototype.ngOnInit = function () {
    };
    ProductsFeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-features',
            template: __webpack_require__(/*! ./products-features.component.html */ "./src/app/products/products-features/products-features.component.html"),
            styles: [__webpack_require__(/*! ./products-features.component.scss */ "./src/app/products/products-features/products-features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsFeaturesComponent);
    return ProductsFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navheader></app-navheader>\n<app-product-banner></app-product-banner>\n<app-products-features></app-products-features>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration-banner/registration-banner.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/registration/registration-banner/registration-banner.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"back_img\">\n  <img src=\"../../../assets/img/crop1.png\" > \n</section>\n\n<section id=\"hed1\" class=\"regtitle\">\n  <div class=\"container detls\">\n      <h2>Sed perspiciatis \" unde omnis</h2>\n      <h3><strong>Lorem</strong> Ipsum perspiciatis </h3>\n      <p>Tempora, placeat ratione porro voluptate odit minima.</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/registration/registration-banner/registration-banner.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/registration/registration-banner/registration-banner.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration-banner/registration-banner.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/registration/registration-banner/registration-banner.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RegistrationBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationBannerComponent", function() { return RegistrationBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationBannerComponent = /** @class */ (function () {
    function RegistrationBannerComponent() {
    }
    RegistrationBannerComponent.prototype.ngOnInit = function () {
    };
    RegistrationBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-banner',
            template: __webpack_require__(/*! ./registration-banner.component.html */ "./src/app/registration/registration-banner/registration-banner.component.html"),
            styles: [__webpack_require__(/*! ./registration-banner.component.scss */ "./src/app/registration/registration-banner/registration-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationBannerComponent);
    return RegistrationBannerComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration-content/registration-content.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/registration/registration-content/registration-content.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"customer\">\n  <div class=\"container\">\n      <!-- Content here -->\n      <div class=\"row\">\n        <div class=\"col-sm-8 main_head\">\n          <h3><span>EPES360</span> - Enterprise Edition</h3>\n          <h3>Experience what over 2 Million customer</h3>\n          <h3>choose <span>EPES360</span></h3>\n          <img src=\"{{content_image}}\" class=\"img-responsive\" > \n\n          <div class=\"row\">\n              <div class=\"col-sm-6 sub_titels\" *ngFor=\"let content1 of registration_content1\">\n                <div class=\"col-sm-2 {{classmyclass}}\">\n                  <i class=\"far {{ content1.fa_name }}\"></i>\n                </div>\n                <div class=\"col-sm-10\">\n                    <h3>{{content1.title}}</h3>\n                    <p>{{content1.description}}</p>\n                </div>\n              </div>\n              <!--<div class=\"col-sm-6 sub_titels\">\n                <div class=\"col-sm-2\">\n                  <i class=\"far fa-globe\"></i>\n                </div>\n                <div class=\"col-sm-10\">\n                        <h3>Accusantinum dloremqu</h3>\n                        <p>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel  </p>\n                </div>\n              </div>-->\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6 sub_titels\" *ngFor=\"let content2 of registration_content2\">\n              <div class=\"col-sm-2 {{classmyclass}}\">\n                      <i class=\"far {{content2.fa_name}}\"></i>\n              </div>\n              <div class=\"col-sm-10\">\n                      <h3>{{content2.title}}</h3>\n                      <p>{{content2.description}}</p>\n              </div>\n            </div>\n            <!--<div class=\"col-sm-6 sub_titels\">\n              <div class=\"col-sm-2\">\n                <i class=\"far fa-calculator\"></i>\n              </div>\n              <div class=\"col-sm-10\">\n                <h3>Accusantinum dloremqu</h3>\n                <p>When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel website the We cannot </p>\n              </div>\n            </div>-->\n          </div>\n          <div class=\"callus col-sm-12\">\n            <p>Providing you book directly through the hotel?</p>\n            <p>Call Us at {{contact_us}}</p>\n          </div>\n        </div>\n        <div class=\"col-sm-4 form_detail\">\n          <h3>Start your</h3>\n          <h3>Product Tour</h3>\n          <p>Please fill out all fields</p>\n          <form class=\"reg_form\">\n            <input type=\"text\" id=\"first_name\" class=\"form-control\" placeholder=\"First Name\">\n            <input type=\"text\" id=\"last_name\" class=\"form-control\" placeholder=\"Last Name\">\n            <!-- <input type=\"text\" id=\"job_title\" class=\"form-control\" placeholder=\"Job title\"> -->\n            <select class=\"mdb-select\" >\n              <!-- <option value=\"\" disabled selected>Job title</option> -->\n              <option *ngFor=\"let job of select_list_job\" [value]=\"job.id\">{{job.label}}</option>\n              <!--<option value=\"1\">Option 1</option>\n              <option value=\"2\">Option 2</option>\n              <option value=\"3\">Option 3</option>\n              <option value=\"4\">Option 4</option>\n              <option value=\"5\">Option 5</option>-->\n            </select>\n            <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\">\n            <input type=\"text\" id=\"Phone\" class=\"form-control\" placeholder=\"Phone\"> \n            <input type=\"text\" id=\"Company\" class=\"form-control\" placeholder=\"Company\">\n            <!--  <input type=\"text\" id=\"Employees\" class=\"form-control\" placeholder=\"Employees\"> -->\n            <select class=\"\">\n              <option *ngFor=\"let employee of select_list_employee\" [value]=\"employee.id\">{{employee.label}}</option>\n              <!--<option value=\"1\">Option 1</option>\n              <option value=\"2\">Option 2</option>\n              <option value=\"3\">Option 3</option>\n              <option value=\"4\">Option 4</option>\n              <option value=\"5\">Option 5</option>-->\n            </select>\n          \n            <!--   <input type=\"text\" id=\"Country\" class=\"form-control\" placeholder=\"Country\"> -->\n            <select class=\"\">\n              <option *ngFor=\"let country of select_list_country\" [value]=\"country.id\">{{country.label}}</option>\n              <!--<option value=\"1\">Option 1</option>\n              <option value=\"2\">Option 2</option>\n              <option value=\"3\">Option 3</option>\n              <option value=\"4\">Option 4</option>\n              <option value=\"5\">Option 5</option>-->\n            </select>\n\n            <input type=\"checkbox\" id=\"checkbox\" class=\"form-control\"><span>I agree to the <a href=\"#\">master subscription Agreement</a></span>\n            <div class=\"text-center mt-4 sub_btn\">\n                <button class=\"btn btn-unique\" type=\"submit\">Start Product Tour</button>\n            </div>\n          </form>\n<!-- Default form register -->\n        </div>\n      </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/registration/registration-content/registration-content.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/registration/registration-content/registration-content.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration-content/registration-content.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/registration/registration-content/registration-content.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RegistrationContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationContentComponent", function() { return RegistrationContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationContentComponent = /** @class */ (function () {
    function RegistrationContentComponent() {
        this.content_image = "../../../assets/img/360 EPES.png";
        this.registration_content1 = [
            {
                id: 1,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-gavel'
            },
            {
                id: 2,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-globe'
            }
        ];
        this.registration_content2 = [
            {
                id: 1,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-share-alt'
            },
            {
                id: 2,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-calculator'
            }
        ];
        this.classmyclass = "col-my-1";
        this.select_list_job = [
            { id: 0, label: "Find Job" },
            { id: 1, label: "Option 1" },
            { id: 2, label: "Option 2" },
            { id: 3, label: "Option 3" },
            { id: 4, label: "Option 4" },
            { id: 5, label: "Option 5" }
        ];
        this.select_list_employee = [
            { id: 0, label: "Employee" },
            { id: 1, label: "Option 1" },
            { id: 2, label: "Option 2" },
            { id: 3, label: "Option 3" },
            { id: 4, label: "Option 4" },
            { id: 5, label: "Option 5" }
        ];
        this.select_list_country = [
            { id: 0, label: "Country" },
            { id: 1, label: "Option 1" },
            { id: 2, label: "Option 2" },
            { id: 3, label: "Option 3" },
            { id: 4, label: "Option 4" },
            { id: 5, label: "Option 5" }
        ];
        this.contact_us = "0088 3325 5545";
    }
    RegistrationContentComponent.prototype.ngOnInit = function () {
    };
    RegistrationContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-content',
            template: __webpack_require__(/*! ./registration-content.component.html */ "./src/app/registration/registration-content/registration-content.component.html"),
            styles: [__webpack_require__(/*! ./registration-content.component.scss */ "./src/app/registration/registration-content/registration-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationContentComponent);
    return RegistrationContentComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navheader></app-navheader>\n<app-registration-banner></app-registration-banner>\n<app-registration-content></app-registration-content>   \n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\CODE\gitdeploje\epeshtml\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map