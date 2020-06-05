
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.ganttchart';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/ganttchart', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].ganttchart = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

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

    var BaseElement = /** @class */ (function () {
        function BaseElement(ref) {
            this.onCreate = new core.EventEmitter();
            this.onReady = new core.EventEmitter();
            this.onAttach = new core.EventEmitter();
            this.onDetach = new core.EventEmitter();
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
            core.Output()
        ], BaseElement.prototype, "onCreate", void 0);
        __decorate([
            core.Output()
        ], BaseElement.prototype, "onReady", void 0);
        __decorate([
            core.Output()
        ], BaseElement.prototype, "onAttach", void 0);
        __decorate([
            core.Output()
        ], BaseElement.prototype, "onDetach", void 0);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "locale", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "localizeFormatFunction", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "messages", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], BaseElement.prototype, "theme", null);
        return BaseElement;
    }());
    var Smart = window.Smart;

    var GanttChartComponent = /** @class */ (function (_super) {
        __extends(GanttChartComponent, _super);
        function GanttChartComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a Task is selected/unselected.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue)
            *   value - The index of the new selected task.
            *   oldValue - The index of the previously selected task.
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when the progress of a task bar starts to change as a result of user interaction. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
            *   index - The index of the task which progress is going to be changed.
            *   progress - The progress of the task before it is changed.
            */
            _this.onProgressChangeStart = new core.EventEmitter();
            /** @description This event is triggered when the progress of a task is changed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	progress)
            *   index - The index of the task which progress is has been changed.
            *   progress - The progress of the task after it was changed.
            */
            _this.onProgressChangeEnd = new core.EventEmitter();
            /** @description This event is triggered when dragging of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
            *   index - The index of the task that is going to be dragged.
            *   dateStart - The start date of the task that is going to be dragged.
            *   dateEnd - The end date of the task that is going to be dragged.
            */
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when dragging of a task finishes.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
            *   index - The index of the task that is was dragged.
            *   dateStart - The start date of the task that is was dragged.
            *   dateEnd - The end date of the task that is was dragged.
            */
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when resizing of a task starts. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
            *   index - The index of the task that is going to be resized.
            *   dateStart - The start date of the task that is going to be resized.
            *   dateEnd - The end date of the task that is going to be resized.
            */
            _this.onResizeStart = new core.EventEmitter();
            /** @description This event is triggered when the resizing of a task finishes.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	dateStart, 	dateEnd)
            *   index - The index of the task that was resized.
            *   dateStart - The start date of the task that was resized.
            *   dateEnd - The end date of the task that was resized.
            */
            _this.onResizeEnd = new core.EventEmitter();
            /** @description This event is triggered when the user starts connecting one task to another. This event allows to cancel the operation by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex)
            *   startIndex - The index of the task that a connection is started from.
            */
            _this.onConnectionStart = new core.EventEmitter();
            /** @description This event is triggered when the user completes a connection between two tasks.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	startIndex, 	endIndex, 	type)
            *   startIndex - The index of the task that a connection is started from.
            *   endIndex - The index of the task that a connection is started from.
            *   type - The type of connection. Fours types are available: <ul><li><b>0</b> - start-to-start</li><li><b>1</b> - end-to-start</li><li><b>2</b> - end-to-end</li><li><b>3</b> - start-to-end</li></ul>
            */
            _this.onConnectionEnd = new core.EventEmitter();
            /** @description This event is triggered when the Timeline has been scrolled to the bottom.
            *  @param event. The custom event. 	*/
            _this.onScrollBottomReached = new core.EventEmitter();
            /** @description This event is triggered when the Timeline has been scrolled to the top.
            *  @param event. The custom event. 	*/
            _this.onScrollTopReached = new core.EventEmitter();
            /** @description This event is triggered just before the window for task editing starts opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
            *   target - The instance of the window that is going to open.
            *   type - The type of window that is going to open. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
            */
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when the window for task editing is opened( visible ).
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered just before the window for task editing starts closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	type)
            *   target - The instance of the window that is going to close.
            *   type - The type of window that is going to close. There are three types of windows inside GanttChart: <ul><li><b>confirm</b> - a confirm window. This type of window is usually used to confirm the deletion of a task.</li><li><b>task</b> - a window used for task editing.</li><li><b>connection</b> - a window used to delete a connection.</li></ul>
            */
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when the window for task editing is closed( hidden )
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when a Project is collapsed.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	label, 	value)
            *   index - The index of the collapsed project.
            *   label - The label of the collapsed project.
            *   value - The value of the collapsed project.
            */
            _this.onCollapse = new core.EventEmitter();
            /** @description This event is triggered when a Project is expanded.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
            *   item - The index of the expanded project.
            *   label - The label of the expanded project.
            *   value - The value of the expanded project.
            */
            _this.onExpand = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        GanttChartComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-gantt-chart');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(GanttChartComponent.prototype, "autoSchedule", {
            /** @description Recalculates the tasks that are connected and re-schedules them according to their connections. If no connections are present, autoScheduling has no effect until a connection is created. Connection types determines the start/end date limits of the tasks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSchedule : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSchedule = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "autoScheduleStrictMode", {
            /** @description Affects the tasks only when autoSchedule is enabled. When set to true, the tasks are strictly scheduled ( according to their connections ) and dragging is not allowed.  Users can set lag to specific connections to determine a delay of overlap of between the two tasks ( interval of time in miliseconds ). Lag one of the attributes of a task connection and should be set in the dataSource where the task connections are defined. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoScheduleStrictMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoScheduleStrictMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "autoScrollStep", {
            /** @description Determines the scroll speed when dragging when autoScroll property is set.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoScrollStep : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoScrollStep = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "dataExport", {
            /** @description Sets the GanttChart's Data Export options. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataExport : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataExport = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "dataSource", {
            /** @description Determines the tasks that will be loaded inside the Timeline. Each item represents an object that should contain the following properties: label - the label of the TaskdateStart - the starting date of the Task. Should be a string representing a valid date.dateEnd - the ending date of the Task. Should be a string representing a valid date.type - determines the type of the task. Whether it's a simple task, a project or a milestone. Each type of task has specific behavior and additional attributes..  Additional properties: connections - an array of objects representing the connection between two tasks. Each connection (object) should have the following properties : target - a number representing the index of the target tasktype - a number representing the type of the connection. Four types of connections are available: 0 - is a connection of type Start-to-Start 1 - is a connection of type End-to-Start 2 - is a connection of type End-to-End3 - is a connection of type Start-to-End lag - a number that determines the delay between two connected auto scheduled tasks. Lag property can be a positive or a negative number. When negative it determines the overlap between two connected tasks. This property is used in conjuction with autoSchedule.duration - determines the duration of a Task in days, hours, minutes, seconds or miliseconds. Very usefull when the the dateEnd of a Task is unknown.minDuration - sets the minimum duration of a task. maxDuration - sets the maximum duration of a task.minDateStart - determines the mininum date that a task can start from. Must be if type string and should represent a valid date.maxDateStart - determines the maximum date that a task can start from. Must be if type string and should represent a valid date.minDateEnd - determines the mininum date that a task can end. Must be if type string and should represent a valid date.maxDateEnd - determines the maximum date that a task can end. Must be if type string and should represent a valid date.progress - a number that determines the progress of a task ( from 0 to 100 ).disableDrag - a boolean property that disables the dragging of a task when set to true.disableResize - a boolean property that disables the resizing of a task when set to true.dragProject - a boolean that determines whether or not the whole project (along with the tasks) can be dragged while dragging the project task. Applicalbe only to Projects.synchronized - a boolean that if set the project task's start/end dates are automatically calculated based on the tasks. By default a synchronized project task can't be dragged alone. Applicable only to Project tasks.expanded - a boolean that determines if a project is expanded or not. If not all of it's sub-tasks are not visible. Only the project task itself is visible. By default no projects are expanded. Applicable only to project tasks.. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "dayFormat", {
            /** @description Determines the format of the dates in the timeline header when they represent days. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dayFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dayFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "dateEnd", {
            /** @description Determines a specific end date for the Timeline. Usefull when the user wants custom ending date for the Timeline. If no date is set the end date of the timeline is automatically determined from the tasks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dateEnd : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dateEnd = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "dateStart", {
            /** @description Determines a specific starting date for the Timeline. Usefull when the user wants custom starting date for the Timeline. If no date is set the start date of the timeline is automatically determined from the tasks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dateStart : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dateStart = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "disabled", {
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
        Object.defineProperty(GanttChartComponent.prototype, "disableAutoScroll", {
            /** @description Disables auto scrolling while dragging/resizing a task bar inside the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableAutoScroll : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableAutoScroll = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "disableTaskDrag", {
            /** @description Disables dragging of tasks in the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableTaskDrag : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableTaskDrag = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "disableTaskProgressChange", {
            /** @description Disables task progress changing in the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableTaskProgressChange : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableTaskProgressChange = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "disableTaskResize", {
            /** @description Disables resizing of tasks in the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableTaskResize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableTaskResize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "disableSelection", {
            /** @description Disables the selection inside the GanttChart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableSelection : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableSelection = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "disableWindowEditor", {
            /** @description Disables the window editor for the GanttChart. */
            get: function () {
                return this.nativeElement ? this.nativeElement.disableWindowEditor : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.disableWindowEditor = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "durationUnit", {
            /** @description Determines in what unit is task duration property measured. */
            get: function () {
                return this.nativeElement ? this.nativeElement.durationUnit : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.durationUnit = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "headerTemplate", {
            /** @description Allows to create a custom header content for the Task Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "hideResourcePanel", {
            /** @description Hides the Resource panel regardless of the resources availability By default the Resource panel is visible if resources are added to the GanttChart. This property allows to hide the Resource panel permanently. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hideResourcePanel : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hideResourcePanel = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "horizontalScrollBarVisibility", {
            /** @description Determines weather or not horizontal scrollbar is shown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "hourFormat", {
            /** @description Determines the format of the dates inside the timeline header when they represent hours. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hourFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hourFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "inverted", {
            /** @description When set the Timeline is positioned on the left side while the Task Tree is positioned on the right. By default it's vice versa. */
            get: function () {
                return this.nativeElement ? this.nativeElement.inverted : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.inverted = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "locale", {
            /** @description  Determines the language of the GanttChart.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.locale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "max", {
            /** @description Detetmines the maximum possible date of the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.max : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.max = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "min", {
            /** @description Detetmines the minimum possible date of the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.min : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.min = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "messages", {
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
        Object.defineProperty(GanttChartComponent.prototype, "monthFormat", {
            /** @description Determines the format of the dates the timeline header when they represent months. */
            get: function () {
                return this.nativeElement ? this.nativeElement.monthFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.monthFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "nonworkingDays", {
            /** @description Determines the nonworking days of the week from 0 to 6, where 0 is the first day of the week and 6 is the last day. Nonworking days will be displayed with colored cells inside the timeline and will be ignored during task range calculations. */
            get: function () {
                return this.nativeElement ? this.nativeElement.nonworkingDays : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.nonworkingDays = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "nonworkingHours", {
            /** @description Determines the nonworking hours of a day. Hours are represented as numbers inside an array. In the timline the cells that represent nonworking days are colored differently from the rest. */
            get: function () {
                return this.nativeElement ? this.nativeElement.nonworkingHours : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.nonworkingHours = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "popupWindowCustomizationFunction", {
            /** @description A function that can be used to completly customize the popup Window that is used to interact width tasks by changing their properties. The function as three arguments: target - the target popup Window that is about to be opened.type - the type of the window. The type determines the purpose of the window. Three possible values: 'task' (task editing), 'confirm' ( confirmation window), 'connection' (used when deleting a connection between tasks). taskIndex - the index of the task that is being edited. It will be undefined if the type of the window is not 'task'. */
            get: function () {
                return this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.popupWindowCustomizationFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resources", {
            /** @description A getter that returns a flat structure as an array of all resources inside the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resources : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resources = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourceColumns", {
            /** @description Deteremines the columns that will be visible in the Resource Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. By default, one column with all resource labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts two arguments - the actual label as string that is going to be inserted and the index of the resource. The function must return a string as the new content. min - controls the min size of the column max - controls the max size of the columnsize - controls the actual size of the column */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourceColumns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourceColumns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourcePanelHeaderTemplate", {
            /** @description Allows to create a custom header content for the Resource Panel. The attribute accepts an HTMLTemplate element, it's id or a function. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourcePanelHeaderTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourcePanelMin", {
            /** @description Determines the min size of the Resource Panel. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourcePanelMin : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourcePanelMin = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourcePanelSize", {
            /** @description Determines the size of the Resource Panel. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourcePanelSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourcePanelSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourcePanelRefreshRate", {
            /** @description Determines the refresh rate of the Resource Panel when dragging/resizing/progress changing a Task from the Timeline. This property allows to customize the interval between resource Tree/Timeline refreshes. By default they refresh immediately after a change. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourcePanelRefreshRate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourcePanelRefreshRate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourceTimelineFormatFunction", {
            /** @description A callback that can be used to customize the content of the resource Timeline cells. The callback accepts three arguments: taskIndexes - an array of task indexes that are assigned to the resource for the current cell.resourceIndex - the index of the resource.cellDate - the date of the current cell. This property is used when resourceTimelineView is set to custom. Depending on the resourceTimelineMode, it should return: string - when the resourceTimelineMode is set to 'diagram'.object - when the resourceTimelineMode is set to 'histogram'. The object should have two attributes: capacity and maxCapacity, in order to be visualized as a histogram.. Another usage of this callback is to customize the timeline resource representation completely if resourceTimelineMode is set to custom. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourceTimelineFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourceTimelineMode", {
            /** @description Determines how the capacity of the resources will be visualized inside the resource timeline. By default, the capacity is measured in hours depending on the view property of the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourceTimelineMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourceTimelineMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "resourceTimelineView", {
            /** @description Determines how the resources will be displayed inside the resource Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.resourceTimelineView : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.resourceTimelineView = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "rightToLeft", {
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
        Object.defineProperty(GanttChartComponent.prototype, "selectedIndexes", {
            /** @description Determines the selected task(s). If empty no tasks are selected. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "snapToNearest", {
            /** @description If set the dateStart/dateEnd of the tasks will be coerced to the nearest timeline cell date ( according to the view ). Affects the dragging operation as well. */
            get: function () {
                return this.nativeElement ? this.nativeElement.snapToNearest : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.snapToNearest = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "sortable", {
            /** @description Determines whether the GanttChart can be sorted or not. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sortable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sortable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "sortMode", {
            /** @description Determines whether the GanttChart can be sorted by one or more columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.sortMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.sortMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "tasks", {
            /** @description A getter that returns a flat structure as an array of all tasks inside the element. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tasks : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tasks = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "taskColumns", {
            /** @description Deteremines the columns that will be visible in the Task Tree. Each entry in the value of this property must be of type Object.  It should contain the label and value keys. The value of label determines the column header label inside the Task Tree. The value of value determines the content of the cells in the column. It should reference a task attribute from the dataSource. By default, one column with all task labels is visible.  Additional properties: formatFunction - a function that allows to customize the content of each record in the column. The function accepts one argument - the actual label as string that is going to be inserted and must return some content. min - controls the min size of the column max - controls the max size of the column size - controls the actual size of the columncustomEditor - a callback that can be used to set a custom editor for the column when editing via the window. It accepts two arguments label - the label of the columnvalue - the value of the column. The callback must return the editor.setCustomEditorValue - a callback that is used to set the value of the custom editor.getCustomEditorValue - a callback that is used to get the value of the custom editor. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskColumns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskColumns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "taskPanelMin", {
            /** @description Determines the min size of the Task Panel. Used when Resource Panel is visible. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskPanelMin : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskPanelMin = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "taskPanelSize", {
            /** @description Determines the size of the Task Panel. Used when Resource Panel is visible. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskPanelSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskPanelSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "timelineMin", {
            /** @description Determines the min width of the timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.timelineMin : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.timelineMin = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "treeMin", {
            /** @description Determines the min width of the task tree. */
            get: function () {
                return this.nativeElement ? this.nativeElement.treeMin : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.treeMin = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "treeSize", {
            /** @description Determines the size(width) of the task tree. */
            get: function () {
                return this.nativeElement ? this.nativeElement.treeSize : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.treeSize = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "timelineHeaderFormatFunction", {
            /** @description A format function for the Header of the Timeline. */
            get: function () {
                return this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.timelineHeaderFormatFunction = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "verticalScrollBarVisibility", {
            /** @description Determines weather or not vertical scrollbar is shown. */
            get: function () {
                return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "view", {
            /** @description Determines the viewing date range of the timeline. Possible values: day - The timeline show the hours of the day.week - the timeline shows the days of the week.month - the timeline shows the days of the month.year - the timeline shows the months of the year.resource - displays the current tasks by grouping them according to the resources they have assigned. The unassigned tasks will be placed in a separate group called 'Unassigned'.  The timeline has a header section that contains the labels of each cell according to the date inside them. The header is splitted in two sections in order to give a more detailed information of the dates. */
            get: function () {
                return this.nativeElement ? this.nativeElement.view : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.view = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "yearFormat", {
            /** @description Determines the format of the dates inside the timeline header when they represent years. */
            get: function () {
                return this.nativeElement ? this.nativeElement.yearFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.yearFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "weekFormat", {
            /** @description Determines the format of the dates inside the timeline header when they represent weeks.  */
            get: function () {
                return this.nativeElement ? this.nativeElement.weekFormat : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.weekFormat = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GanttChartComponent.prototype, "theme", {
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
        Object.defineProperty(GanttChartComponent.prototype, "unfocusable", {
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
        /** @description Adds a task as the last item of a Project.
        * @param {string | number} taskIndex. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
        * @param {string | number} projectIndex. A number that represents the index of a project or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
        */
        GanttChartComponent.prototype.addTaskTo = function (taskIndex, projectIndex) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addTaskTo(taskIndex, projectIndex);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addTaskTo(taskIndex, projectIndex);
                });
            }
        };
        /** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once.
        */
        GanttChartComponent.prototype.beginUpdate = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.beginUpdate();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.beginUpdate();
                });
            }
        };
        /** @description Ends the update operation. This method will resume the rendering and will refresh the GanttChart.
        */
        GanttChartComponent.prototype.endUpdate = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.endUpdate();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.endUpdate();
                });
            }
        };
        /** @description Refereshes the GanttChart after resizing by recalculating the Scrollbars.
        * @param {boolean} fullRefresh?. If set the GanttChart will be re-rendered completely.
        */
        GanttChartComponent.prototype.refresh = function (fullRefresh) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.refresh(fullRefresh);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.refresh(fullRefresh);
                });
            }
        };
        /** @description Removes all connections between tasks.
        */
        GanttChartComponent.prototype.removeAllConnections = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeAllConnections();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeAllConnections();
                });
            }
        };
        /** @description Removes a connection between tasks. The function accepts three arguments(task's start index, end index and connection type) or one connection string argument which describes the connection.
        * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
        * @param {number} taskEndIndex?. The index of the end task.
        * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
        * @returns {any}
      */
        GanttChartComponent.prototype.removeConnection = function (startTaskIndex, taskEndIndex, connectionType) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.removeConnection(startTaskIndex, taskEndIndex, connectionType);
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
        /** @description Removes all connections of a task or between two tasks if the second argument is provided and valid.
        * @param {number} taskStartIndex. The index of the start task.
        * @param {number} taskEndIndex?. The index of the end task.
        * @returns {string}
      */
        GanttChartComponent.prototype.removeTaskConnection = function (taskStartIndex, taskEndIndex) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.removeTaskConnection(taskStartIndex, taskEndIndex);
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
        /** @description Removes all tasks.
        */
        GanttChartComponent.prototype.clearTasks = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearTasks();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearTasks();
                });
            }
        };
        /** @description Removes all resources.
        */
        GanttChartComponent.prototype.clearResources = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearResources();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearResources();
                });
            }
        };
        /** @description Creates a connection between two tasks.
        * @param {number | string} startTaskIndex. The index of the start task or the connection string like '2-3-0.
        * @param {number} taskEndIndex?. The index of the end task.
        * @param {number} connectionType?. The type of the connection. A numeric value from 0 to 3.
        */
        GanttChartComponent.prototype.createConnection = function (startTaskIndex, taskEndIndex, connectionType) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.createConnection(startTaskIndex, taskEndIndex, connectionType);
                });
            }
        };
        /** @description Collapses an expanded project with tasks.
        * @param {string | number} index. The index of a project task that should be collapsed.
        */
        GanttChartComponent.prototype.collapse = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapse(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapse(index);
                });
            }
        };
        /** @description Makes sure a Task is visible by scrolling to it.
        * @param {string | number} item. The index of the target Task. Can be a string representing a Tree index ( similar to jqxTree )
        */
        GanttChartComponent.prototype.ensureVisible = function (item) {
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
        /** @description Expands a collapsed project with tasks.
        * @param {string | number} index. The index of a project task that should be expanded.
        */
        GanttChartComponent.prototype.expand = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expand(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expand(index);
                });
            }
        };
        /** @description Exports the data of Tree of the GanttChart.
        * @param {string} dataFormat. Determines the format of the exported file. Three possible values are available: <ul><li><b>pdf</b></li><li><b>xlsx</b></li><li><b>html</b></li></ul>
        * @param {any} callback?. A callback that allows to format the exported data based on a condition. For additional details, refer ro the Smart Export Documentation.
        */
        GanttChartComponent.prototype.exportData = function (dataFormat, callback) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.exportData(dataFormat, callback);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.exportData(dataFormat, callback);
                });
            }
        };
        /** @description Returns a JSON representation of all tasks inside the element along with their connections and settings.
        * @returns {any[]}
      */
        GanttChartComponent.prototype.getState = function () {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getState();
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
        /** @description Returns the index of a task.
        * @param {HTMLElement} task. A GattChartTask object.
        * @returns {number}
      */
        GanttChartComponent.prototype.getTaskIndex = function (task) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getTaskIndex(task);
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
        /** @description Returns the tree path of a task.
        * @param {GanttChartTask} task. Returns the Tree path of the task as a string.
        * @returns {string}
      */
        GanttChartComponent.prototype.getTaskPath = function (task) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getTaskPath(task);
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
        /** @description Returns the index of a resource.
        * @param {any} resource. A GanttChartResource object.
        * @returns {number}
      */
        GanttChartComponent.prototype.getResourceIndex = function (resource) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.getResourceIndex(resource);
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
        /** @description Unselects all currently selected items inside the GanttChart including Tasks and Resources. It also clears the assignment highlgihters.
        */
        GanttChartComponent.prototype.clearSelection = function () {
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
        /** @description Removes a previously saved state of the element form LocalStorage according to it's id. Requires an id to be set to the element.
        */
        GanttChartComponent.prototype.clearState = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.clearState();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.clearState();
                });
            }
        };
        /** @description Loads a previously saved state of the element or checks LocalStorage for any saved states if no argument is passed to the method.
        * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
        */
        GanttChartComponent.prototype.loadState = function (state) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.loadState(state);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.loadState(state);
                });
            }
        };
        /** @description Saves the current settings of the element to LocalStorage. Requires an id to be set to the element.
        * @param {any[]} state?. An Array containing a valid structure of Gantt Chart tasks.
        */
        GanttChartComponent.prototype.saveState = function (state) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveState(state);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveState(state);
                });
            }
        };
        /** @description Inserts a new task in the timeline.
        * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
        * @param {any} taskObject. An object describing a Gantt Chart task.
        */
        GanttChartComponent.prototype.insertTask = function (index, taskObject) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insertTask(index, taskObject);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insertTask(index, taskObject);
                });
            }
        };
        /** @description Updates a task inside the timeline.
        * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
        * @param {any} taskObject. An object describing a Gantt Chart task. The properties of this object will be applied to the desired task.
        */
        GanttChartComponent.prototype.updateTask = function (index, taskObject) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateTask(index, taskObject);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateTask(index, taskObject);
                });
            }
        };
        /** @description Removes a task from the timeline.
        * @param {string | number} index. A number that represents the index of a task or a string that matches the hierarchical position of the item, e.g. '0' ( following jqxTree syntax).
        */
        GanttChartComponent.prototype.removeTask = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeTask(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeTask(index);
                });
            }
        };
        /** @description Inserts a new resource.
        * @param {string | number} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
        * @param {any} resourceObject?. An object describing a Gantt Chart resource.
        */
        GanttChartComponent.prototype.insertResource = function (resourceId, resourceObject) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.insertResource(resourceId, resourceObject);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.insertResource(resourceId, resourceObject);
                });
            }
        };
        /** @description Updates an existing resource.
        * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
        * @param {any} taskObject. An object describing a Gantt Chart resource. The properties of this object will be applied to the target resource.
        */
        GanttChartComponent.prototype.updateResource = function (resourceId, taskObject) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateResource(resourceId, taskObject);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateResource(resourceId, taskObject);
                });
            }
        };
        /** @description Removes a resource.
        * @param {any} resourceId. A string that represents the id of a resource or it's hierarchical position, e.g. '0' ( following jqxTree syntax), or a number that represents the index of a resource.
        */
        GanttChartComponent.prototype.removeResource = function (resourceId) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeResource(resourceId);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeResource(resourceId);
                });
            }
        };
        /** @description Opens the popup Window for specific task Editing.
        * @param {string | number} index. A string or number that represents the index of a task that is going to be edited.
        */
        GanttChartComponent.prototype.openWindow = function (index) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openWindow(index);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openWindow(index);
                });
            }
        };
        /** @description Closes an opened popup Window. The method will close any opened popup window inside the element.
        */
        GanttChartComponent.prototype.closeWindow = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.closeWindow();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.closeWindow();
                });
            }
        };
        /** @description Prepares the GanttChart for printing by opening the browser's Print Preview.
        */
        GanttChartComponent.prototype.print = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.print();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.print();
                });
            }
        };
        /** @description Sorts the GanttChart tasks/resources if sortable is enabled.
        * @param {any} columns?. An Array of objects which determine which columns to be sorted, the sort order and the type of item to sort: task or resource. If no arguments are provided sorting will be removed. <br /> An object should have the following properties: <ul><li><b>value</b> - a string that represents the value of a <b>taskColumn</b> to sort.</li><li><b>sortOrder</b> - a string that represents the sorting order for the column: 'asc' (asscending sorting) or 'desc' (descending) are possible values. </li><li><b>type</b> - a string that represents the type of item to sort. This property determines which panel will be sorted. Two possible values: 'task', 'resource'.</li></ul>
        */
        GanttChartComponent.prototype.sort = function (columns) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.sort(columns);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.sort(columns);
                });
            }
        };
        Object.defineProperty(GanttChartComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        GanttChartComponent.prototype.ngOnInit = function () {
        };
        GanttChartComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        GanttChartComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        GanttChartComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        GanttChartComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['progressChangeStartHandler'] = function (event) { that.onProgressChangeStart.emit(event); };
            that.nativeElement.addEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
            that.eventHandlers['progressChangeEndHandler'] = function (event) { that.onProgressChangeEnd.emit(event); };
            that.nativeElement.addEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['resizeStartHandler'] = function (event) { that.onResizeStart.emit(event); };
            that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            that.eventHandlers['resizeEndHandler'] = function (event) { that.onResizeEnd.emit(event); };
            that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            that.eventHandlers['connectionStartHandler'] = function (event) { that.onConnectionStart.emit(event); };
            that.nativeElement.addEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
            that.eventHandlers['connectionEndHandler'] = function (event) { that.onConnectionEnd.emit(event); };
            that.nativeElement.addEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
            that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
            that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
            that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['collapseHandler'] = function (event) { that.onCollapse.emit(event); };
            that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);
            that.eventHandlers['expandHandler'] = function (event) { that.onExpand.emit(event); };
            that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);
        };
        /** @description Remove event listeners. */
        GanttChartComponent.prototype.unlisten = function () {
            var that = this;
            if (that.eventHandlers['changeHandler']) {
                that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
            }
            if (that.eventHandlers['progressChangeStartHandler']) {
                that.nativeElement.removeEventListener('progressChangeStart', that.eventHandlers['progressChangeStartHandler']);
            }
            if (that.eventHandlers['progressChangeEndHandler']) {
                that.nativeElement.removeEventListener('progressChangeEnd', that.eventHandlers['progressChangeEndHandler']);
            }
            if (that.eventHandlers['dragStartHandler']) {
                that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            }
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            }
            if (that.eventHandlers['resizeStartHandler']) {
                that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
            }
            if (that.eventHandlers['resizeEndHandler']) {
                that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
            }
            if (that.eventHandlers['connectionStartHandler']) {
                that.nativeElement.removeEventListener('connectionStart', that.eventHandlers['connectionStartHandler']);
            }
            if (that.eventHandlers['connectionEndHandler']) {
                that.nativeElement.removeEventListener('connectionEnd', that.eventHandlers['connectionEndHandler']);
            }
            if (that.eventHandlers['scrollBottomReachedHandler']) {
                that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
            }
            if (that.eventHandlers['scrollTopReachedHandler']) {
                that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['closingHandler']) {
                that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
            }
            if (that.eventHandlers['closeHandler']) {
                that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
            }
            if (that.eventHandlers['collapseHandler']) {
                that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
            }
            if (that.eventHandlers['expandHandler']) {
                that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
            }
        };
        GanttChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "autoSchedule", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "autoScheduleStrictMode", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "autoScrollStep", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "dataExport", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "dayFormat", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "dateEnd", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "dateStart", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disabled", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disableAutoScroll", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disableTaskDrag", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disableTaskProgressChange", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disableTaskResize", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disableSelection", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "disableWindowEditor", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "durationUnit", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "headerTemplate", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "hideResourcePanel", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "horizontalScrollBarVisibility", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "hourFormat", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "inverted", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "max", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "min", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "monthFormat", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "nonworkingDays", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "nonworkingHours", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "popupWindowCustomizationFunction", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resources", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourceColumns", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourcePanelHeaderTemplate", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourcePanelMin", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourcePanelSize", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourcePanelRefreshRate", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourceTimelineFormatFunction", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourceTimelineMode", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "resourceTimelineView", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "rightToLeft", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "selectedIndexes", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "snapToNearest", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "sortable", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "sortMode", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "tasks", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "taskColumns", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "taskPanelMin", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "taskPanelSize", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "timelineMin", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "treeMin", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "treeSize", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "timelineHeaderFormatFunction", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "verticalScrollBarVisibility", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "view", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "yearFormat", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "weekFormat", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "theme", null);
        __decorate([
            core.Input()
        ], GanttChartComponent.prototype, "unfocusable", null);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onProgressChangeStart", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onProgressChangeEnd", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onResizeStart", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onResizeEnd", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onConnectionStart", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onConnectionEnd", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onScrollBottomReached", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onScrollTopReached", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onCollapse", void 0);
        __decorate([
            core.Output()
        ], GanttChartComponent.prototype, "onExpand", void 0);
        GanttChartComponent = __decorate([
            core.Directive({
                selector: 'smart-gantt-chart, [smart-gantt-chart]'
            })
        ], GanttChartComponent);
        return GanttChartComponent;
    }(BaseElement));

    var GanttChartModule = /** @class */ (function () {
        function GanttChartModule() {
        }
        GanttChartModule = __decorate([
            core.NgModule({
                declarations: [GanttChartComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [GanttChartComponent]
            })
        ], GanttChartModule);
        return GanttChartModule;
    }());

    exports.GanttChartComponent = GanttChartComponent;
    exports.GanttChartModule = GanttChartModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-ganttchart.umd.js.map
