
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.dropdownlist';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
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
    useExisting: forwardRef(function () { return DropDownListComponent; }),
    multi: true
};
var DropDownListComponent = /** @class */ (function (_super) {
    __extends(DropDownListComponent, _super);
    function DropDownListComponent(ref) {
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
        /** @description This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
        *  @param event. The custom event. 	*/
        _this.onActionButtonClick = new EventEmitter();
        /** @description This event is triggered when the selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
        *   addedItems - An array of List items that have been selected.
        *   disabled - A flag indicating whether or not the item that caused the change event is disabled.
        *   index - The index of the List item that triggered the event.
        *   label - The label of the List item that triggered the event.
        *   removedItems - An array of List items that have been unselected before the event was fired.
        *   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
        *   value - The value of the List item that triggered the event.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when the drop down list is closed.
        *  @param event. The custom event. 	*/
        _this.onClose = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onClosing = new EventEmitter();
        /** @description This event is triggered when user clicks on the drop down button.
        *  @param event. The custom event. 	*/
        _this.onDropDownButtonClick = new EventEmitter();
        /** @description This event is triggered when an item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
        *   disabled - Indicates whether the List item that was clicked is disabled or not.
        *   index - Indicates the index of the List item that was clicked.
        *   label - The label of the List item that was clicked.
        *   selected - Indicates whether the List item that was clicked is selected or not.
        *   value - The value of the List item that was clicked.
        */
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when the drop down list is opened.
        *  @param event. The custom event. 	*/
        _this.onOpen = new EventEmitter();
        /** @description This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	*/
        _this.onOpening = new EventEmitter();
        /** @description This event is triggered when user starts resizing the drop down.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        _this.onResizeStart = new EventEmitter();
        /** @description This event is triggered when the resizing of the drop down is finished.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	position)
        *   position - An object containing the current left and top positions of the drop down.
        */
        _this.onResizeEnd = new EventEmitter();
        /** @description This event is triggered when the user scrolls to the end of the dropDown list.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when the user scrolls to the start of the dropDown list.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    DropDownListComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-drop-down-list');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(DropDownListComponent.prototype, "animation", {
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
    Object.defineProperty(DropDownListComponent.prototype, "autoCloseDelay", {
        /** @description Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "disabled", {
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
    Object.defineProperty(DropDownListComponent.prototype, "displayLoadingIndicator", {
        /** @description Determines whether an indicator will appear during filtering and remote item loading. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "displayMember", {
        /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownAppendTo", {
        /** @description Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownAppendTo = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownButtonPosition", {
        /** @description Determines the position of the drop down button. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownButtonPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownHeight", {
        /** @description Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMaxHeight", {
        /** @description Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMaxHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMaxWidth", {
        /** @description Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMaxWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMinHeight", {
        /** @description Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMinHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownMinWidth", {
        /** @description Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownMinWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownOpenMode", {
        /** @description Determines how the drop down is going to open. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownOpenMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownOverlay", {
        /** @description If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownOverlay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownPlaceholder", {
        /** @description Determines the placeholder for the drop down list when it's empty. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownPosition", {
        /** @description Determines the position of the drop down when opened. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "dropDownWidth", {
        /** @description Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "filterable", {
        /** @description Determines whether filtering is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "filterInputPlaceholder", {
        /** @description Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "filterMode", {
        /** @description Determines the filtering mode of the drop down list. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "grouped", {
        /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "groupMember", {
        /** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "hint", {
        /** @description Sets additional helper text below the element. The hint is visible only when the element is focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.hint : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hint = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "horizontalScrollBarVisibility", {
        /** @description Determines the visibility of the horizontal Scroll bar inside the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "inputMember", {
        /** @description Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input. */
        get: function () {
            return this.nativeElement ? this.nativeElement.inputMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.inputMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "incrementalSearchDelay", {
        /** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "incrementalSearchMode", {
        /** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search. */
        get: function () {
            return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "itemHeight", {
        /** @description Sets the height for all list items. Used only when virtualization is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "itemMeasureMode", {
        /** @description Determines the item width measuring algorithm. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "items", {
        /** @description A getter that returns an array of all List items inside the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.items : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.items = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "itemTemplate", {
        /** @description The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "label", {
        /** @description Sets a little text label above the element. */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "loadingIndicatorPlaceholder", {
        /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "loadingIndicatorPosition", {
        /** @description Determines the position of the loading indicator. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "locale", {
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
    Object.defineProperty(DropDownListComponent.prototype, "localizeFormatFunction", {
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
    Object.defineProperty(DropDownListComponent.prototype, "messages", {
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
    Object.defineProperty(DropDownListComponent.prototype, "name", {
        /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "opened", {
        /** @description Determines whether the popup is opened or not. */
        get: function () {
            return this.nativeElement ? this.nativeElement.opened : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.opened = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "placeholder", {
        /** @description Determines the element's placeholder, displayed in the element's selection field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "readonly", {
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
    Object.defineProperty(DropDownListComponent.prototype, "rightToLeft", {
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
    Object.defineProperty(DropDownListComponent.prototype, "resizeIndicator", {
        /** @description Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "resizeMode", {
        /** @description Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
        get: function () {
            return this.nativeElement ? this.nativeElement.resizeMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectionDisplayMode", {
        /** @description Determines what will be displayed in the dropDown selection field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionDisplayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectedIndexes", {
        /** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectedValues", {
        /** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedValues : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "selectionMode", {
        /** @description Determines how many items can be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "sorted", {
        /** @description Determines whether the items are sorted alphabetically or not */
        get: function () {
            return this.nativeElement ? this.nativeElement.sorted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sorted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "sortDirection", {
        /** @description Determines sorting direction - ascending(asc) or descending(desc) */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortDirection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "theme", {
        /** @description Determines the theme for the element. Themes define the look of the elements. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "tokenTemplate", {
        /** @description Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.tokenTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "unfocusable", {
        /** @description If is set to true, the element cannot be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "value", {
        /** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "valueMember", {
        /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "verticalScrollBarVisibility", {
        /** @description Determines the visibility of the vertical scroll bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownListComponent.prototype, "virtualized", {
        /** @description Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded. */
        get: function () {
            return this.nativeElement ? this.nativeElement.virtualized : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.virtualized = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    DropDownListComponent.prototype.appendChild = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.appendChild(node);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Removes all items from the drop down list.
    */
    DropDownListComponent.prototype.clearItems = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearItems();
            });
        }
    };
    /** @description Unselects all items.
    */
    DropDownListComponent.prototype.clearSelection = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSelection();
            });
        }
    };
    /** @description Closes the dropDown list.
    */
    DropDownListComponent.prototype.close = function () {
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
    /** @description Ensures the desired item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    DropDownListComponent.prototype.ensureVisible = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(item);
            });
        }
    };
    /** @description Returns an item instance from the dropDown list.
    * @param {string} value. The value of an item from the drop down list.
    * @returns {HTMLElement}
  */
    DropDownListComponent.prototype.getItem = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItem(value);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Inserts a new item at a specified position.
    * @param {number} position. The position where the item must be inserted.
    * @param {any} value. The value of the new item.
    */
    DropDownListComponent.prototype.insert = function (position, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(position, value);
            });
        }
    };
    /** @description Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    DropDownListComponent.prototype.insertBefore = function (node, referenceNode) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.insertBefore(node, referenceNode);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Opens the dropDown list.
    */
    DropDownListComponent.prototype.open = function () {
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
    /** @description Removes an item at a specified position.
    * @param {number} position. The position of the removed item.
    */
    DropDownListComponent.prototype.removeAt = function (position) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAt(position);
            });
        }
    };
    /** @description Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    DropDownListComponent.prototype.removeChild = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.removeChild(node);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Selects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    DropDownListComponent.prototype.select = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(item);
            });
        }
    };
    /** @description Unselects an item from the dropDown list.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    DropDownListComponent.prototype.unselect = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(item);
            });
        }
    };
    /** @description Updates an item from the dropDown list.
    * @param {number} position. The position where the item must be updated.
    * @param {any} value. The value of the updated item.
    */
    DropDownListComponent.prototype.update = function (position, value) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(position, value);
            });
        }
    };
    Object.defineProperty(DropDownListComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    DropDownListComponent.prototype.ngOnInit = function () {
    };
    DropDownListComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    DropDownListComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(DropDownListComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
            if (this.selectedValues && this.selectedValues.length > 0) {
                var value_1 = this.selectedValues.length === 1 ? this.nativeElement.selectedValues[0] : this.nativeElement.selectedValues;
                return value_1;
            }
            return null;
            var value = this.nativeElement.value;
            return value;
        },
        set: function (value) {
            if (this.nativeElement) {
                this.writeValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    DropDownListComponent.prototype.writeValue = function (value) {
        var _this = this;
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.nativeElement.$.listBox.isInitialized = that._initialChange ? false : true;
            that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach(function (currentValue) { return _this.select(currentValue); });
            }
            else {
                that.select(normalizedValue);
            }
            that.nativeElement.$.listBox.isInitialized = true;
            that.nativeElement._applySelection();
            if (that._initialChange === false) {
                if (that.selectedValues && that.selectedValues.length > 1) {
                    that._onChange(that.selectedValues);
                }
                else {
                    that._onChange((that.selectedValues && that.selectedValues.length > 0) ? that.selectedValues[0] : null);
                }
            }
        });
    };
    DropDownListComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DropDownListComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DropDownListComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    DropDownListComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['actionButtonClickHandler'] = function (event) { that.onActionButtonClick.emit(event); };
        that.nativeElement.addEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
        that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
        that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
        that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
        that.eventHandlers['dropDownButtonClickHandler'] = function (event) { that.onDropDownButtonClick.emit(event); };
        that.nativeElement.addEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
        that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
        that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
        that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
        that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
        that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
        that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedValues.length > 0 ? (that.nativeElement.selectedValues.length > 1 ? that.nativeElement.selectedValues : that.nativeElement.selectedValues[0]) : null);
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
    DropDownListComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['actionButtonClickHandler']) {
            that.nativeElement.removeEventListener('actionButtonClick', that.eventHandlers['actionButtonClickHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['closeHandler']) {
            that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
        }
        if (that.eventHandlers['closingHandler']) {
            that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
        }
        if (that.eventHandlers['dropDownButtonClickHandler']) {
            that.nativeElement.removeEventListener('dropDownButtonClick', that.eventHandlers['dropDownButtonClickHandler']);
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['openHandler']) {
            that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
        }
        if (that.eventHandlers['openingHandler']) {
            that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
        }
        if (that.eventHandlers['resizeStartHandler']) {
            that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
        }
        if (that.eventHandlers['resizeEndHandler']) {
            that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
        }
        if (that.eventHandlers['scrollBottomReachedHandler']) {
            that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        }
        if (that.eventHandlers['scrollTopReachedHandler']) {
            that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
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
    DropDownListComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "autoCloseDelay", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "displayLoadingIndicator", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "displayMember", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownAppendTo", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownButtonPosition", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownHeight", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMaxHeight", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMaxWidth", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMinHeight", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownMinWidth", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownOpenMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownOverlay", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownPlaceholder", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownPosition", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "dropDownWidth", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "filterable", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "filterInputPlaceholder", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "filterMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "groupMember", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "hint", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "horizontalScrollBarVisibility", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "inputMember", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "incrementalSearchDelay", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "incrementalSearchMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "itemHeight", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "itemMeasureMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "items", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "label", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "loadingIndicatorPlaceholder", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "loadingIndicatorPosition", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "name", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "opened", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "resizeIndicator", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "resizeMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "selectionDisplayMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "selectedIndexes", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "selectedValues", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "sorted", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "sortDirection", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "tokenTemplate", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "value", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "valueMember", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "verticalScrollBarVisibility", null);
    __decorate([
        Input()
    ], DropDownListComponent.prototype, "virtualized", null);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onActionButtonClick", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onClose", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onClosing", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onDropDownButtonClick", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onOpen", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onOpening", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onResizeStart", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onResizeEnd", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onScrollBottomReached", void 0);
    __decorate([
        Output()
    ], DropDownListComponent.prototype, "onScrollTopReached", void 0);
    DropDownListComponent = __decorate([
        Directive({
            selector: 'smart-drop-down-list, [smart-drop-down-list]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], DropDownListComponent);
    return DropDownListComponent;
}(BaseElement));

var ListItemComponent = /** @class */ (function (_super) {
    __extends(ListItemComponent, _super);
    function ListItemComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-item');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemComponent.prototype, "alternationIndex", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alternationIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "color", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.color : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.color = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "displayMode", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "grouped", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "selected", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selected = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "value", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "details", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.details : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.details = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "group", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.group : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.group = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "hidden", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.hidden : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hidden = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "readonly", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemComponent.prototype.ngOnInit = function () {
    };
    ListItemComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemComponent.prototype.ngOnDestroy = function () { };
    ListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListItemComponent.prototype, "alternationIndex", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "color", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "displayMode", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "selected", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "value", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "label", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "details", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "group", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "hidden", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "readonly", null);
    ListItemComponent = __decorate([
        Directive({
            selector: 'smart-list-item, [smart-list-item]'
        })
    ], ListItemComponent);
    return ListItemComponent;
}(BaseElement));

var ListItemsGroupComponent = /** @class */ (function (_super) {
    __extends(ListItemsGroupComponent, _super);
    function ListItemsGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemsGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-items-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemsGroupComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemsGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemsGroupComponent.prototype.ngOnInit = function () {
    };
    ListItemsGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemsGroupComponent.prototype.ngOnDestroy = function () { };
    ListItemsGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListItemsGroupComponent.prototype, "label", null);
    ListItemsGroupComponent = __decorate([
        Directive({
            selector: 'smart-list-items-group, [smart-list-items-group]'
        })
    ], ListItemsGroupComponent);
    return ListItemsGroupComponent;
}(BaseElement));

var DropDownListModule = /** @class */ (function () {
    function DropDownListModule() {
    }
    DropDownListModule = __decorate([
        NgModule({
            declarations: [DropDownListComponent, ListItemComponent, ListItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [DropDownListComponent, ListItemComponent, ListItemsGroupComponent]
        })
    ], DropDownListModule);
    return DropDownListModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DropDownListComponent, DropDownListModule, ListItemComponent, ListItemsGroupComponent, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-dropdownlist.js.map
