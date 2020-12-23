
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.kanban';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('smart-webcomponents-angular/kanban', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['smart-webcomponents-angular'] = global['smart-webcomponents-angular'] || {}, global['smart-webcomponents-angular'].kanban = {}), global.ng.core));
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

    var KanbanComponent = /** @class */ (function (_super) {
        __extends(KanbanComponent, _super);
        function KanbanComponent(ref) {
            var _this = _super.call(this, ref) || this;
            _this.eventHandlers = [];
            /** @description This event is triggered when a task has been updated.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	task, 	value)
            *   oldValue - The old data of the task
            *   task - The HTML element of the task whose data has been changed
            *   value - The new data of the task
            */
            _this.onChange = new core.EventEmitter();
            /** @description This event is triggered when the edit/prompt dialog is closed.
            *  @param event. The custom event. 	*/
            _this.onClose = new core.EventEmitter();
            /** @description This event is triggered when the edit/prompt dialog is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	*/
            _this.onClosing = new core.EventEmitter();
            /** @description This event is triggered when a task is dropped somewhere in the DOM. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer, 	target)
            *   container - the Kanban the dragged task(s) is dropped to
            *   data - an object with additional drag details
            *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
            *   items - an array with all dragged tasks
            *   originalEvent - the original, browser, event that initiates the drag operation
            *   previousContainer - the Kanban the dragged item(s) is dragged from
            *   target - the element the dragged tasks are dropped to
            */
            _this.onDragEnd = new core.EventEmitter();
            /** @description This event is triggered when the user is dragging a task.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	items, 	originalEvent)
            *   data - an object with additional drag details
            *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
            *   items - an array with all dragged tasks
            *   originalEvent - the original, browser, event that initiates the drag operation
            */
            _this.onDragging = new core.EventEmitter();
            /** @description This event is triggered when the user starts dragging task(s). The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	items, 	originalEvent, 	previousContainer)
            *   container - the Kanban the dragged task(s) is dragged from
            *   data - an object with additional drag details
            *   item - the task that is dragged; if multiple tasks are dragged, this is the task that has been clicked when initiating the drag operation
            *   items - an array with all dragged tasks
            *   originalEvent - the original, browser, event that initiates the drag operation
            *   previousContainer - the Kanban the dragged item(s) is dragged from
            */
            _this.onDragStart = new core.EventEmitter();
            /** @description This event is triggered when a filter has been applied.
            *  @param event. The custom event. 	*/
            _this.onFilter = new core.EventEmitter();
            /** @description This event is triggered when the edit/prompt dialog is opened.
            *  @param event. The custom event. 	*/
            _this.onOpen = new core.EventEmitter();
            /** @description This event is triggered when the edit/prompt dialog is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
            *  @param event. The custom event. 	Custom event was created with: event.detail(	comment, 	purpose, 	task)
            *   comment - The comment that is about to be removed (if applicable).
            *   purpose - The purpose of the dialog to be opened - <em>'edit'</em> or <em>'prompt'</em>.
            *   task - The task that is about to be edited or removed (if applicable).
            */
            _this.onOpening = new core.EventEmitter();
            /** @description This event is triggered when sorting has been applied.
            *  @param event. The custom event. 	*/
            _this.onSort = new core.EventEmitter();
            _this.nativeElement = ref.nativeElement;
            return _this;
        }
        /** @description Creates the component on demand.
         * @param properties An optional object of properties, which will be added to the template binded ones.
         */
        KanbanComponent.prototype.createComponent = function (properties) {
            if (properties === void 0) { properties = {}; }
            this.nativeElement = document.createElement('smart-kanban');
            for (var propertyName in properties) {
                this.nativeElement[propertyName] = properties[propertyName];
            }
            return this.nativeElement;
        };
        Object.defineProperty(KanbanComponent.prototype, "addNewButton", {
            /** @description Toggles the visibility of the column buttons for adding tasks. A particular button can be disabled by setting addNewButton in the column's definition to false. */
            get: function () {
                return this.nativeElement ? this.nativeElement.addNewButton : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "addNewColumn", {
            /** @description Sets or gets whether a column with a button for adding new status columns to the Kanban will be displayed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.addNewColumn : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.addNewColumn = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "allowDrag", {
            /** @description Allows the dragging of tasks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrag : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "allowDrop", {
            /** @description Allows the dropping of tasks. */
            get: function () {
                return this.nativeElement ? this.nativeElement.allowDrop : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "animation", {
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
        Object.defineProperty(KanbanComponent.prototype, "autoLoadState", {
            /** @description Enables or disables auto load state from the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is loaded. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "autoSaveState", {
            /** @description Enables or disables auto save state to the browser's localStorage. Information about tasks and their position and selected state, filtering, sorting, collapsed columns, as well as the values of the properties taskActions, taskComments, taskDue, taskPriority, taskProgress, taskTags, and taskUserIcon is saved. */
            get: function () {
                return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "collapsible", {
            /** @description Allows collapsing the card content. */
            get: function () {
                return this.nativeElement ? this.nativeElement.collapsible : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.collapsible = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "columns", {
            /** @description Describes the columns properties. */
            get: function () {
                return this.nativeElement ? this.nativeElement.columns : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.columns = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "currentUser", {
            /** @description Sets or gets the id of the current user. Has to correspond to the id of an item from the users property/array. Depending on the current user, different privileges are enabled. If no current user is set, privileges depend on the element's properties. */
            get: function () {
                return this.nativeElement ? this.nativeElement.currentUser : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.currentUser = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "dataSource", {
            /** @description Determines the data source to be visualized in the kanban board. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSource : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSource = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "dataSourceMap", {
            /** @description Determines the the relation (mapping) between the Kanban's default fields (keywords) and the data fields from the data source. Not necessary if both match. Only some of the default mapping can be overwritten. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dataSourceMap : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dataSourceMap = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "dragOffset", {
            /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging tasks. The first member of the array is the horizontal offset and the second one - the vertical offset. If set to 'auto', the offset is based on the mouse position when the dragging started. */
            get: function () {
                return this.nativeElement ? this.nativeElement.dragOffset : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "editable", {
            /** @description Sets or gets whether tasks can be edited (including the assigning of users to tasks). */
            get: function () {
                return this.nativeElement ? this.nativeElement.editable : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.editable = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "formatStringDate", {
            /** @description Sets or gets the format string of the "Due date" label and the "Start date" and "Due date" editors. */
            get: function () {
                return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "formatStringTime", {
            /** @description Sets or gets the format string of comments time stamp. */
            get: function () {
                return this.nativeElement ? this.nativeElement.formatStringTime : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.formatStringTime = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "headerPosition", {
            /** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
            get: function () {
                return this.nativeElement ? this.nativeElement.headerPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "hierarchy", {
            /** @description Sets or gets the way column hierarchy is represented. */
            get: function () {
                return this.nativeElement ? this.nativeElement.hierarchy : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.hierarchy = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "locale", {
            /** @description Sets or gets the locale. Used in conjunction with the property messages. */
            get: function () {
                return this.nativeElement ? this.nativeElement.locale : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.locale = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "messages", {
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
        Object.defineProperty(KanbanComponent.prototype, "selectionMode", {
            /** @description Determines selection mode. */
            get: function () {
                return this.nativeElement ? this.nativeElement.selectionMode : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "swimlanes", {
            /** @description Describes the swimlanes in the kanban board. Sub-columns are not applicable when swimlanes are present. */
            get: function () {
                return this.nativeElement ? this.nativeElement.swimlanes : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.swimlanes = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "swimlanesFrom", {
            /** @description Sets or gets the index of the column at which to start the swimlanes. */
            get: function () {
                return this.nativeElement ? this.nativeElement.swimlanesFrom : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.swimlanesFrom = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "swimlanesTo", {
            /** @description Sets or gets the index of the column at which to end the swimlanes. By default, swimlanes end at the last column. */
            get: function () {
                return this.nativeElement ? this.nativeElement.swimlanesTo : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.swimlanesTo = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "tags", {
            /** @description Sets or gets the allowed tags. If no tags are listed, all tags from the data source are allowed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.tags : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.tags = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskActions", {
            /** @description Toggles the visibility of the task actions icon. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskActions : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskActions = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskComments", {
            /** @description Toggles the visibility of the task comments icon. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskComments : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskComments = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskDue", {
            /** @description Toggles the visibility of the task due icon. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskDue : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskDue = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskPosition", {
            /** @description Sets or gets whether tasks can be shown in all levels of column hierarchy or only on leaf columns. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskPosition : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskPosition = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskPriority", {
            /** @description Toggles the visibility of the task priority icon (shown when priority is low or high). */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskPriority : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskPriority = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskProgress", {
            /** @description Toggles the visibility of task progress bar and the completed sub-tasks label. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskProgress : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskProgress = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskTags", {
            /** @description Toggles the visibility of task tags. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskTags : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskTags = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "taskUserIcon", {
            /** @description Toggles the visibility of the task user icon. */
            get: function () {
                return this.nativeElement ? this.nativeElement.taskUserIcon : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.taskUserIcon = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "textTemplate", {
            /** @description Sets or gets a template to be applied to task text. Can be a string beginning with # and referencing the id of a template element on the page. Can also be a function that modifies the task text or the template itself. Finally, it can also be a string that will be parsed. */
            get: function () {
                return this.nativeElement ? this.nativeElement.textTemplate : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.textTemplate = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "userList", {
            /** @description Determines whether the user list (as defined by the users property) will be shown when clicking the user icon. Only applicable if editable privileges are enabled. */
            get: function () {
                return this.nativeElement ? this.nativeElement.userList : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.userList = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KanbanComponent.prototype, "users", {
            /** @description Determines the users Kanban tasks can be assigned to and their characteristics and privileges. */
            get: function () {
                return this.nativeElement ? this.nativeElement.users : undefined;
            },
            set: function (value) {
                this.nativeElement ? this.nativeElement.users = value : undefined;
            },
            enumerable: true,
            configurable: true
        });
        /** @description Adds filtering
        * @param {string[]} filters. Filter information
        * @param {string} operator?. Logical operator between the filters of different fields
        */
        KanbanComponent.prototype.addFilter = function (filters, operator) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addFilter(filters, operator);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addFilter(filters, operator);
                });
            }
        };
        /** @description Adds sorting
        * @param {[] | string} dataFields. The data field(s) to sort by
        * @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
        */
        KanbanComponent.prototype.addSort = function (dataFields, orderBy) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addSort(dataFields, orderBy);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addSort(dataFields, orderBy);
                });
            }
        };
        /** @description Adds a task to a Kanban column. If no data is specified, an empty task is added to the first column.
        * @param {any} data?. An object containing the new task's data
        */
        KanbanComponent.prototype.addTask = function (data) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.addTask(data);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.addTask(data);
                });
            }
        };
        /** @description Begins an edit operation
        * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
        */
        KanbanComponent.prototype.beginEdit = function (task) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.beginEdit(task);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.beginEdit(task);
                });
            }
        };
        /** @description Ends the current edit operation and discards changes
        */
        KanbanComponent.prototype.cancelEdit = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.cancelEdit();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.cancelEdit();
                });
            }
        };
        /** @description Closes any open header panel (drop down)
        */
        KanbanComponent.prototype.closePanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.closePanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.closePanel();
                });
            }
        };
        /** @description Collapses a Kanban column.
        * @param {number | string} column. The index or dataField of the column to collapse
        */
        KanbanComponent.prototype.collapse = function (column) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.collapse(column);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.collapse(column);
                });
            }
        };
        /** @description Creates a copy of a task in the same column.
        * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
        */
        KanbanComponent.prototype.copyTask = function (task) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.copyTask(task);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.copyTask(task);
                });
            }
        };
        /** @description Ends the current edit operation and saves changes
        */
        KanbanComponent.prototype.endEdit = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.endEdit();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.endEdit();
                });
            }
        };
        /** @description Makes sure a task is visible by scrolling to it. If succcessful, the method returns the HTML element of the task.
        * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
        * @returns {HTMLElement}
      */
        KanbanComponent.prototype.ensureVisible = function (task) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.ensureVisible(task);
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
        /** @description Expands a Kanban column.
        * @param {number | string} column. The index or dataField of the column to expand
        */
        KanbanComponent.prototype.expand = function (column) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expand(column);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expand(column);
                });
            }
        };
        /** @description Expands all Kanban columns.
        */
        KanbanComponent.prototype.expandAll = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.expandAll();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.expandAll();
                });
            }
        };
        /** @description Exports the Kanban's data.
        * @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
        * @param {string} fileName?. The name of the file to export to
        * @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
        * @returns {any}
      */
        KanbanComponent.prototype.exportData = function (dataFormat, fileName, callback) {
            return __awaiter(this, void 0, void 0, function () {
                var getResultOnRender, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            getResultOnRender = function () {
                                return new Promise(function (resolve) {
                                    _this.nativeElement.whenRendered(function () {
                                        var result = _this.nativeElement.exportData(dataFormat, fileName, callback);
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
        /** @description Gets the Kanban's state.
        * @returns {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }}
      */
        KanbanComponent.prototype.getState = function () {
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
        /** @description Loads the Kanban's state.
        * @param {{ collapsed: {}, dataSource: [], filtering: { filters: [], operator: string }, selection: { selected: [], selectionStart?: number | string, selectionInColumn: string, swimlane: string }, sorting: { dataFields: [], dataTypes: [], orderBy: [] }, tabs: [], visibility: { taskActions: boolean, taskComments: boolean, taskDue: boolean, taskPriority: boolean, taskProgress: boolean, taskTags: boolean, taskUserIcon: boolean } }} state?. An object returned by one of the methods getState or saveState. If not passed, gets saved state from the browser's localStorage.
        */
        KanbanComponent.prototype.loadState = function (state) {
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
        /** @description Moves a task to a different column.
        * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
        * @param {string} newStatus. The new status of the task (its new column's dataField)
        */
        KanbanComponent.prototype.moveTask = function (task, newStatus) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.moveTask(task, newStatus);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.moveTask(task, newStatus);
                });
            }
        };
        /** @description Opens the "Customize tasks" header panel (drop down)
        */
        KanbanComponent.prototype.openCustomizePanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openCustomizePanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openCustomizePanel();
                });
            }
        };
        /** @description Opens the "Filter" header panel (drop down)
        */
        KanbanComponent.prototype.openFilterPanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openFilterPanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openFilterPanel();
                });
            }
        };
        /** @description Opens the "Sort" header panel (drop down)
        */
        KanbanComponent.prototype.openSortPanel = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.openSortPanel();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.openSortPanel();
                });
            }
        };
        /** @description Removes filtering
        */
        KanbanComponent.prototype.removeFilter = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeFilter();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeFilter();
                });
            }
        };
        /** @description Removes sorting
        */
        KanbanComponent.prototype.removeSort = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeSort();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeSort();
                });
            }
        };
        /** @description Removes a task.
        * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
        * @param {boolean} prompt?. Whether or not to prompt the user before removing the task
        */
        KanbanComponent.prototype.removeTask = function (task, prompt) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.removeTask(task, prompt);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.removeTask(task, prompt);
                });
            }
        };
        /** @description Saves the Kanban's state to the browser's localStorage.
        */
        KanbanComponent.prototype.saveState = function () {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.saveState();
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.saveState();
                });
            }
        };
        /** @description Updates a task.
        * @param {number | string | HTMLElement} task. The task's id or corresponding HTMLElement
        * @param {{}} newData. The new data to visualize in the task.
        */
        KanbanComponent.prototype.updateTask = function (task, newData) {
            var _this = this;
            if (this.nativeElement.isRendered) {
                this.nativeElement.updateTask(task, newData);
            }
            else {
                this.nativeElement.whenRendered(function () {
                    _this.nativeElement.updateTask(task, newData);
                });
            }
        };
        Object.defineProperty(KanbanComponent.prototype, "isRendered", {
            get: function () {
                return this.nativeElement ? this.nativeElement.isRendered : false;
            },
            enumerable: true,
            configurable: true
        });
        KanbanComponent.prototype.ngOnInit = function () {
        };
        KanbanComponent.prototype.ngAfterViewInit = function () {
            var that = this;
            that.onCreate.emit(that.nativeElement);
            Smart.Render();
            this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
            this.listen();
        };
        KanbanComponent.prototype.ngOnDestroy = function () {
            this.unlisten();
        };
        KanbanComponent.prototype.ngOnChanges = function (changes) {
            if (this.nativeElement && this.nativeElement.isRendered) {
                for (var propName in changes) {
                    if (changes.hasOwnProperty(propName)) {
                        this.nativeElement[propName] = changes[propName].currentValue;
                    }
                }
            }
        };
        /** @description Add event listeners. */
        KanbanComponent.prototype.listen = function () {
            var that = this;
            that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
            that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
            that.eventHandlers['closeHandler'] = function (event) { that.onClose.emit(event); };
            that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);
            that.eventHandlers['closingHandler'] = function (event) { that.onClosing.emit(event); };
            that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);
            that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
            that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
            that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
            that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
            that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            that.eventHandlers['filterHandler'] = function (event) { that.onFilter.emit(event); };
            that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);
            that.eventHandlers['openHandler'] = function (event) { that.onOpen.emit(event); };
            that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);
            that.eventHandlers['openingHandler'] = function (event) { that.onOpening.emit(event); };
            that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);
            that.eventHandlers['sortHandler'] = function (event) { that.onSort.emit(event); };
            that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);
        };
        /** @description Remove event listeners. */
        KanbanComponent.prototype.unlisten = function () {
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
            if (that.eventHandlers['dragEndHandler']) {
                that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
            }
            if (that.eventHandlers['draggingHandler']) {
                that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
            }
            if (that.eventHandlers['dragStartHandler']) {
                that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
            }
            if (that.eventHandlers['filterHandler']) {
                that.nativeElement.onfilterHandler = null;
            }
            if (that.eventHandlers['openHandler']) {
                that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
            }
            if (that.eventHandlers['openingHandler']) {
                that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
            }
            if (that.eventHandlers['sortHandler']) {
                that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
            }
        };
        KanbanComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "addNewButton", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "addNewColumn", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "allowDrag", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "allowDrop", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "animation", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "autoLoadState", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "autoSaveState", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "collapsible", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "columns", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "currentUser", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "dataSource", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "dataSourceMap", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "dragOffset", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "editable", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "formatStringDate", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "formatStringTime", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "headerPosition", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "hierarchy", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "locale", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "messages", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "selectionMode", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "swimlanes", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "swimlanesFrom", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "swimlanesTo", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "tags", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskActions", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskComments", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskDue", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskPosition", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskPriority", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskProgress", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskTags", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "taskUserIcon", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "textTemplate", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "userList", null);
        __decorate([
            core.Input()
        ], KanbanComponent.prototype, "users", null);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onChange", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onClose", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onClosing", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onDragEnd", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onDragging", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onDragStart", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onFilter", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onOpen", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onOpening", void 0);
        __decorate([
            core.Output()
        ], KanbanComponent.prototype, "onSort", void 0);
        KanbanComponent = __decorate([
            core.Directive({
                selector: 'smart-kanban, [smart-kanban]'
            })
        ], KanbanComponent);
        return KanbanComponent;
    }(BaseElement));

    var KanbanModule = /** @class */ (function () {
        function KanbanModule() {
        }
        KanbanModule = __decorate([
            core.NgModule({
                declarations: [KanbanComponent],
                schemas: [core.CUSTOM_ELEMENTS_SCHEMA],
                exports: [KanbanComponent]
            })
        ], KanbanModule);
        return KanbanModule;
    }());

    exports.KanbanComponent = KanbanComponent;
    exports.KanbanModule = KanbanModule;
    exports.Smart = Smart;
    exports.ɵa = BaseElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=smart-webcomponents-angular-kanban.umd.js.map
