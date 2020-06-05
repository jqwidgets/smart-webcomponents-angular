
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.datetimepicker';

import { __decorate, __extends } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Output()
    ], BaseElement.prototype, "onCreate", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onReady", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onAttach", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onDetach", void 0);
    __decorate([
        Input()
    ], BaseElement.prototype, "locale", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "messages", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "theme", null);
    return BaseElement;
}());
var Smart = window.Smart;

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = /** @class */ (function (_super) {
    __extends(DateTimePickerComponent, _super);
    function DateTimePickerComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        _this._onChange = function () { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        _this._onTouched = function () { };
        /** @description This event is triggered when the value is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
        *   oldValue - The old value before it was changed presented as a DateTime object.
        *   value - The new value presented as a DateTime object.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the calendar pop-up is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the calendar pop-up is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when the calendar pop-up is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the calendar pop-up is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    DateTimePickerComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-date-time-picker');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(DateTimePickerComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "animationSettings", {
        /** @description Applies new animation settings to the calendar pop-up when it is enabled. Properties:startSpeed - Determines the initial speed of the animation.easeThreshold - Determines the point at which the animation starts to slow down - the "ease effect".step - Determines the step ( scrolling interval ) at which the animation will run. stepEaseSize - Coefficient that is used to calculated the new step once the threshold has been passed. resetThreshold - Determines the threshold for animation reset. When it's reached the animation will start over. */
        get: function () {
            return this.nativeElement ? this.nativeElement.animationSettings : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animationSettings = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "autoClose", {
        /** @description Determines whether the calendar button pop-up will be closed automatically when date or time is selected through it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoClose : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoClose = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "autoCloseDelay", {
        /** @description Determines the delay before the calendar pop-up is automatically closed. Applicable only when autoClose is set to true. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "calendarButton", {
        /** @description Determines whether the calendar button is visible or not. The calendar button is used to open the Calendar popup to select a date. */
        get: function () {
            return this.nativeElement ? this.nativeElement.calendarButton : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.calendarButton = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "calendarButtonPosition", {
        /** @description Determines the position of the calendar button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.calendarButtonPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.calendarButtonPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "calendarMode", {
        /** @description Determines the header mode of the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.calendarMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.calendarMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "dayNameFormat", {
        /** @description Sets or gets the format of calendar pop-up's day names. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dayNameFormat : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dayNameFormat = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "disabled", {
        /** @description Enables or disables the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "disableAutoNavigation", {
        /** @description Disables auto navigation of the calendar pop-up when the user clicks on a date that's not from month in view. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disableAutoNavigation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disableAutoNavigation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "displayKind", {
        /** @description Determines the time zone to display the value in. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayKind : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayKind = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "displayModeView", {
        /** @description Determines the type of the month/year view in the calendar pop-up when calendarMode is set to Default. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayModeView : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayModeView = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "dropDownAppendTo", {
        /** @description Sets custom container to append the pop-up to. By default, it is in the DateTimePicker. The value of the property can be an HTML element or the id of an HTML element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "dropDownDisplayMode", {
        /** @description Sets or gets the pop-up display mode (what components appear in it, and its behaviour). */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownDisplayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownDisplayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "dropDownOverlay", {
        /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "dropDownPosition", {
        /** @description Determines the pop-up position when opened. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "editMode", {
        /** @description Determines how the the value can be edited inside the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "enableMouseWheelAction", {
        /** @description Determines whether the value can be incremented/decremented with the mouse wheel when the mouse is over the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "firstDayOfWeek", {
        /** @description Determines the first day of the week of the calendar pop-up. From 0(Sunday) to 6(Saturday) */
        get: function () {
            return this.nativeElement ? this.nativeElement.firstDayOfWeek : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.firstDayOfWeek = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "footerTemplate", {
        /** @description Sets or gets the footer template of the calendar pop-up. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, a default template is applied. */
        get: function () {
            return this.nativeElement ? this.nativeElement.footerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.footerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "formatString", {
        /** @description Determines the pattern that is used to display the value in. */
        get: function () {
            return this.nativeElement ? this.nativeElement.formatString : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.formatString = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "headerTemplate", {
        /** @description Sets custom header template for the calendar pop-up. Accepts the id of an HTMLTemplateElement or a reference ot it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "hideDayNames", {
        /** @description Hides the names of the weekdays in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideDayNames : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideDayNames = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "hideOtherMonthDays", {
        /** @description Determines if dates from other months are visible or not in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideOtherMonthDays : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideOtherMonthDays = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "hideTooltipArrow", {
        /** @description Hides the arrow of the tooltip in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hideTooltipArrow : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hideTooltipArrow = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "hint", {
        /** @description Sets additional helper text below the element that appears only when the element is focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "importantDates", {
        /** @description Sets dates, displayed as important in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.importantDates : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.importantDates = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "importantDatesTemplate", {
        /** @description Sets a template for the important dates of the calendar pop-up. Accepts the id of or a reference to an HTMLTemplateElement. */
        get: function () {
            return this.nativeElement ? this.nativeElement.importantDatesTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.importantDatesTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "interval", {
        /** @description Sets or gets the increment/decrement interval when a date/time segment inside the input has not been highlighted. The default interval is 1 second. If a numeric value is passed, it represents milliseconds. */
        get: function () {
            return this.nativeElement ? this.nativeElement.interval : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.interval = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "label", {
        /** @description Sets a label above the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "locale", {
        /** @description Sets or gets the locale that determines what language is used to localize the labels inside the DateTimePicker. */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "max", {
        /** @description Sets or gets the maximum allowed value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.max : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.max = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "min", {
        /** @description Sets or gets the minimum allowed value. */
        get: function () {
            return this.nativeElement ? this.nativeElement.min : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.min = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "name", {
        /** @description Sets or gets the element's name, which is used as a reference when the data is submitted in a form. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "nullable", {
        /** @description Enables or disables the setting of the value property to be null or empty string. If the property is enabled and the value in the input is deleted, the value will be set to null and the placeholder will be displayed. Otherwise, the current date and time will be set. */
        get: function () {
            return this.nativeElement ? this.nativeElement.nullable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.nullable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "opened", {
        /** @description Sets or gets whether the calendar pop-up is opened. */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "placeholder", {
        /** @description Sets or gets the placeholder text to be shown in the input when value is null. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "readonly", {
        /** @description Disables user interaction with the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "restrictedDates", {
        /** @description Sets or gets an array of dates (DateTime or Date objects) that cannot be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.restrictedDates : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.restrictedDates = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "spinButtons", {
        /** @description Sets or gets whether the spin buttons are displayed. Spin buttons are used to increment/decrement the date/time. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtons : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtons = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "spinButtonsDelay", {
        /** @description Sets the delay between repeats of the spin buttons in miliseconds. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "spinButtonsInitialDelay", {
        /** @description Sets a delay before the first repeat iteration of spin buttons in miliseconds. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsInitialDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "spinButtonsPosition", {
        /** @description Sets or gets the position of the spin buttons. */
        get: function () {
            return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.spinButtonsPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "theme", {
        /** @description Sets or gets the element's visual theme.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "tooltip", {
        /** @description Enables/Disabled the tooltip for the important dates in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltip : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltip = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "tooltipDelay", {
        /** @description Sets the delay of the calendar pop-up's tooltip before it appears. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "tooltipPosition", {
        /** @description Sets the position of the tooltip in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "tooltipTemplate", {
        /** @description Sets a template for the content of the calendar pop-up's tooltip. Accepts the id of or a reference to an HTMLTemplateElement. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "unfocusable", {
        /** @description Sets or gets if the element can be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "validation", {
        /** @description Determines the validation mechanism for the value by min/max. */
        get: function () {
            return this.nativeElement ? this.nativeElement.validation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.validation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "value", {
        /** @description Sets or gets the value. The value represents the current date/time that is set to the element as a DateTime object. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "weekNumbers", {
        /** @description Enables/Disabled week numbering in the calendar pop-up.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.weekNumbers : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.weekNumbers = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "weeks", {
        /** @description Determines the number of visible weeks in the calendar pop-up. */
        get: function () {
            return this.nativeElement ? this.nativeElement.weeks : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.weeks = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "yearCutoff", {
        /** @description Determines the first year of a 100 year span within which 2-digit years fall. The default value, 1926, would interpret the 2-digit year values 26-99 as 1926 to 1999 and values 00-25 as being 2000 to 2025. */
        get: function () {
            return this.nativeElement ? this.nativeElement.yearCutoff : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.yearCutoff = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Closes the calendar pop-up.
    */
    DateTimePickerComponent.prototype.close = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.close();
            });
        }
    };
    /** @description Focuses the input.
    */
    DateTimePickerComponent.prototype.focus = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.focus();
            });
        }
    };
    /** @description Opens the calendar pop-up.
    */
    DateTimePickerComponent.prototype.open = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.open();
            });
        }
    };
    /** @description Selects the text inside the input.
    */
    DateTimePickerComponent.prototype.select = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select();
            });
        }
    };
    Object.defineProperty(DateTimePickerComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerComponent.prototype.ngOnInit = function () {
    };
    DateTimePickerComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    DateTimePickerComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(DateTimePickerComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
            var value = this.nativeElement.value;
            return value ? value.toDate() : null;
        },
        set: function (value) {
            if (this.nativeElement) {
                this.writeValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DateTimePickerComponent.prototype.writeValue = function (value) {
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.nativeElement.isInitialized = that._initialChange ? false : true;
            that.value = value;
            that.nativeElement.isInitialized = true;
            if (that._initialChange === false) {
                that._onChange(value);
            }
        });
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DateTimePickerComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    DateTimePickerComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.value ? that.nativeElement.value.toDate() : null);
        };
        that.eventHandlers['blurModelHandler'] = function (event) {
            that._onTouched();
        };
        that.nativeElement.whenRendered(function () {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = function (event) {
                    setTimeout(function () { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    };
    /** @description Remove event listeners. */
    DateTimePickerComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    };
    DateTimePickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "animationSettings", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "autoClose", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "autoCloseDelay", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "calendarButton", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "calendarButtonPosition", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "calendarMode", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "dayNameFormat", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "disableAutoNavigation", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "displayKind", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "displayModeView", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "dropDownAppendTo", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "dropDownDisplayMode", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "dropDownOverlay", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "dropDownPosition", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "editMode", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "enableMouseWheelAction", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "firstDayOfWeek", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "footerTemplate", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "formatString", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "headerTemplate", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "hideDayNames", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "hideOtherMonthDays", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "hideTooltipArrow", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "importantDates", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "importantDatesTemplate", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "interval", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "max", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "min", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "nullable", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "restrictedDates", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "spinButtons", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "spinButtonsDelay", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "spinButtonsInitialDelay", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "spinButtonsPosition", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "tooltip", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "tooltipDelay", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "tooltipPosition", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "tooltipTemplate", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "validation", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "weekNumbers", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "weeks", null);
    __decorate([
        Input()
    ], DateTimePickerComponent.prototype, "yearCutoff", null);
    __decorate([
        Output()
    ], DateTimePickerComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DateTimePickerComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], DateTimePickerComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], DateTimePickerComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], DateTimePickerComponent.prototype, "onOpening", void 0);
    DateTimePickerComponent = __decorate([
        Directive({
            selector: 'smart-date-time-picker, [smart-date-time-picker]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
}(BaseElement));

var DateTimePickerModule = /** @class */ (function () {
    function DateTimePickerModule() {
    }
    DateTimePickerModule = __decorate([
        NgModule({
            declarations: [DateTimePickerComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [DateTimePickerComponent]
        })
    ], DateTimePickerModule);
    return DateTimePickerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DateTimePickerComponent, DateTimePickerModule, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-datetimepicker.js.map
