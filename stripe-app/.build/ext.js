var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __toCommonJS = /* @__PURE__ */ ((cache) => {
    return (module, temp) => {
      return cache && cache.get(module) || (temp = __reExport(__markAsModule({}), module, 1), cache && cache.set(module, temp), temp);
    };
  })(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@sail/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TailorDateField = exports.List = exports.ListItem = exports.Tooltip = exports.TextField = exports.TextArea = exports.TabPanels = exports.TabList = exports.Tabs = exports.TabPanel = exports.Tab = exports.TableHeaderCell = exports.TableCell = exports.TableFooter = exports.TableRow = exports.TableBody = exports.TableHead = exports.Table = exports.Switch = exports.Spinner = exports.Select = exports.Radio = exports.Notice = exports.Menu = exports.MenuGroup = exports.MenuItem = exports.Link = exports.Icon = exports.FormFieldGroup = exports.Divider = exports.ChipList = exports.Chip = exports.Checkbox = exports.ButtonGroup = exports.Button = exports.Banner = exports.Badge = exports.AccordionItem = exports.Accordion = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Accordion = (0, react_1.createRemoteReactComponent)("Accordion");
      exports.AccordionItem = (0, react_1.createRemoteReactComponent)("AccordionItem", {
        fragmentProps: ["title", "subtitle", "media", "actions"]
      });
      exports.Badge = (0, react_1.createRemoteReactComponent)("Badge");
      exports.Banner = (0, react_1.createRemoteReactComponent)("Banner", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.ButtonGroup = (0, react_1.createRemoteReactComponent)("ButtonGroup", {
        fragmentProps: ["menuTrigger"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Chip = (0, react_1.createRemoteReactComponent)("Chip");
      exports.ChipList = (0, react_1.createRemoteReactComponent)("ChipList");
      exports.Divider = (0, react_1.createRemoteReactComponent)("Divider");
      exports.FormFieldGroup = (0, react_1.createRemoteReactComponent)("FormFieldGroup");
      exports.Icon = (0, react_1.createRemoteReactComponent)("Icon");
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.MenuItem = (0, react_1.createRemoteReactComponent)("MenuItem");
      exports.MenuGroup = (0, react_1.createRemoteReactComponent)("MenuGroup", {
        fragmentProps: ["title"]
      });
      exports.Menu = (0, react_1.createRemoteReactComponent)("Menu", {
        fragmentProps: ["trigger"]
      });
      exports.Notice = (0, react_1.createRemoteReactComponent)("Notice", {
        fragmentProps: ["description", "title", "actions"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Spinner = (0, react_1.createRemoteReactComponent)("Spinner");
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Table = (0, react_1.createRemoteReactComponent)("Table");
      exports.TableHead = (0, react_1.createRemoteReactComponent)("TableHead");
      exports.TableBody = (0, react_1.createRemoteReactComponent)("TableBody");
      exports.TableRow = (0, react_1.createRemoteReactComponent)("TableRow");
      exports.TableFooter = (0, react_1.createRemoteReactComponent)("TableFooter");
      exports.TableCell = (0, react_1.createRemoteReactComponent)("TableCell");
      exports.TableHeaderCell = (0, react_1.createRemoteReactComponent)("TableHeaderCell");
      exports.Tab = (0, react_1.createRemoteReactComponent)("Tab");
      exports.TabPanel = (0, react_1.createRemoteReactComponent)("TabPanel");
      exports.Tabs = (0, react_1.createRemoteReactComponent)("Tabs");
      exports.TabList = (0, react_1.createRemoteReactComponent)("TabList");
      exports.TabPanels = (0, react_1.createRemoteReactComponent)("TabPanels");
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.Tooltip = (0, react_1.createRemoteReactComponent)("Tooltip", {
        fragmentProps: ["trigger"]
      });
      exports.ListItem = (0, react_1.createRemoteReactComponent)("ListItem", {
        fragmentProps: ["value", "title", "secondaryTitle", "icon", "image"]
      });
      exports.List = (0, react_1.createRemoteReactComponent)("List");
      exports.TailorDateField = (0, react_1.createRemoteReactComponent)("TailorDateField", {
        fragmentProps: ["label"]
      });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js
  var require_tailor_dashboard_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/@stripe-internal/tailor-dashboard-components/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SettingsView = exports.Img = exports.FocusView = exports.ContextView = exports.Sparkline = exports.LineChart = exports.BarChart = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.BarChart = (0, react_1.createRemoteReactComponent)("BarChart");
      exports.LineChart = (0, react_1.createRemoteReactComponent)("LineChart");
      exports.Sparkline = (0, react_1.createRemoteReactComponent)("Sparkline");
      exports.ContextView = (0, react_1.createRemoteReactComponent)("ContextView", {
        fragmentProps: [
          "actions",
          "banner",
          "primaryAction",
          "secondaryAction",
          "footerContent"
        ]
      });
      exports.FocusView = (0, react_1.createRemoteReactComponent)("FocusView", {
        fragmentProps: ["primaryAction", "secondaryAction", "footerContent"]
      });
      exports.Img = (0, react_1.createRemoteReactComponent)("Img");
      exports.SettingsView = (0, react_1.createRemoteReactComponent)("SettingsView");
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/manual_components.js
  var require_manual_components = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/manual_components.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DateField = exports.Icon = exports.Button = exports.Link = exports.Checkbox = exports.Switch = exports.Radio = exports.Select = exports.TextArea = exports.TextField = exports.Inline = exports.Box = void 0;
      var react_1 = __require("@remote-ui/react");
      exports.Box = (0, react_1.createRemoteReactComponent)("Box");
      exports.Inline = (0, react_1.createRemoteReactComponent)("Inline");
      exports.TextField = (0, react_1.createRemoteReactComponent)("TextField", {
        fragmentProps: ["label"]
      });
      exports.TextArea = (0, react_1.createRemoteReactComponent)("TextArea", {
        fragmentProps: ["label"]
      });
      exports.Select = (0, react_1.createRemoteReactComponent)("Select", {
        fragmentProps: ["label"]
      });
      exports.Radio = (0, react_1.createRemoteReactComponent)("Radio", {
        fragmentProps: ["label"]
      });
      exports.Switch = (0, react_1.createRemoteReactComponent)("Switch", {
        fragmentProps: ["label"]
      });
      exports.Checkbox = (0, react_1.createRemoteReactComponent)("Checkbox", {
        fragmentProps: ["label"]
      });
      exports.Link = (0, react_1.createRemoteReactComponent)("Link");
      exports.Button = (0, react_1.createRemoteReactComponent)("Button");
      exports.Icon = (0, react_1.createRemoteReactComponent)("Icon");
      exports.DateField = (0, react_1.createRemoteReactComponent)("DateField", {
        fragmentProps: ["label"]
      });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui2 = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TextField = exports.TextArea = exports.Switch = exports.Select = exports.Radio = exports.Link = exports.Inline = exports.Icon = exports.DateField = exports.Checkbox = exports.Button = exports.Box = exports.Tooltip = exports.Tabs = exports.TableRow = exports.TableHeaderCell = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = exports.Table = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Tab = exports.Spinner = exports.MenuItem = exports.MenuGroup = exports.Menu = exports.ListItem = exports.List = exports.FormFieldGroup = exports.Divider = exports.ChipList = exports.Chip = exports.ButtonGroup = exports.Banner = exports.Badge = exports.AccordionItem = exports.Accordion = void 0;
      var ui_1 = require_ui();
      Object.defineProperty(exports, "Accordion", { enumerable: true, get: function() {
        return ui_1.Accordion;
      } });
      Object.defineProperty(exports, "AccordionItem", { enumerable: true, get: function() {
        return ui_1.AccordionItem;
      } });
      Object.defineProperty(exports, "Badge", { enumerable: true, get: function() {
        return ui_1.Badge;
      } });
      Object.defineProperty(exports, "Banner", { enumerable: true, get: function() {
        return ui_1.Banner;
      } });
      Object.defineProperty(exports, "ButtonGroup", { enumerable: true, get: function() {
        return ui_1.ButtonGroup;
      } });
      Object.defineProperty(exports, "Chip", { enumerable: true, get: function() {
        return ui_1.Chip;
      } });
      Object.defineProperty(exports, "ChipList", { enumerable: true, get: function() {
        return ui_1.ChipList;
      } });
      Object.defineProperty(exports, "Divider", { enumerable: true, get: function() {
        return ui_1.Divider;
      } });
      Object.defineProperty(exports, "FormFieldGroup", { enumerable: true, get: function() {
        return ui_1.FormFieldGroup;
      } });
      Object.defineProperty(exports, "List", { enumerable: true, get: function() {
        return ui_1.List;
      } });
      Object.defineProperty(exports, "ListItem", { enumerable: true, get: function() {
        return ui_1.ListItem;
      } });
      Object.defineProperty(exports, "Menu", { enumerable: true, get: function() {
        return ui_1.Menu;
      } });
      Object.defineProperty(exports, "MenuGroup", { enumerable: true, get: function() {
        return ui_1.MenuGroup;
      } });
      Object.defineProperty(exports, "MenuItem", { enumerable: true, get: function() {
        return ui_1.MenuItem;
      } });
      Object.defineProperty(exports, "Spinner", { enumerable: true, get: function() {
        return ui_1.Spinner;
      } });
      Object.defineProperty(exports, "Tab", { enumerable: true, get: function() {
        return ui_1.Tab;
      } });
      Object.defineProperty(exports, "TabList", { enumerable: true, get: function() {
        return ui_1.TabList;
      } });
      Object.defineProperty(exports, "TabPanel", { enumerable: true, get: function() {
        return ui_1.TabPanel;
      } });
      Object.defineProperty(exports, "TabPanels", { enumerable: true, get: function() {
        return ui_1.TabPanels;
      } });
      Object.defineProperty(exports, "Table", { enumerable: true, get: function() {
        return ui_1.Table;
      } });
      Object.defineProperty(exports, "TableBody", { enumerable: true, get: function() {
        return ui_1.TableBody;
      } });
      Object.defineProperty(exports, "TableCell", { enumerable: true, get: function() {
        return ui_1.TableCell;
      } });
      Object.defineProperty(exports, "TableFooter", { enumerable: true, get: function() {
        return ui_1.TableFooter;
      } });
      Object.defineProperty(exports, "TableHead", { enumerable: true, get: function() {
        return ui_1.TableHead;
      } });
      Object.defineProperty(exports, "TableHeaderCell", { enumerable: true, get: function() {
        return ui_1.TableHeaderCell;
      } });
      Object.defineProperty(exports, "TableRow", { enumerable: true, get: function() {
        return ui_1.TableRow;
      } });
      Object.defineProperty(exports, "Tabs", { enumerable: true, get: function() {
        return ui_1.Tabs;
      } });
      Object.defineProperty(exports, "Tooltip", { enumerable: true, get: function() {
        return ui_1.Tooltip;
      } });
      __exportStar(require_tailor_dashboard_components(), exports);
      var manual_components_1 = require_manual_components();
      Object.defineProperty(exports, "Box", { enumerable: true, get: function() {
        return manual_components_1.Box;
      } });
      Object.defineProperty(exports, "Button", { enumerable: true, get: function() {
        return manual_components_1.Button;
      } });
      Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function() {
        return manual_components_1.Checkbox;
      } });
      Object.defineProperty(exports, "DateField", { enumerable: true, get: function() {
        return manual_components_1.DateField;
      } });
      Object.defineProperty(exports, "Icon", { enumerable: true, get: function() {
        return manual_components_1.Icon;
      } });
      Object.defineProperty(exports, "Inline", { enumerable: true, get: function() {
        return manual_components_1.Inline;
      } });
      Object.defineProperty(exports, "Link", { enumerable: true, get: function() {
        return manual_components_1.Link;
      } });
      Object.defineProperty(exports, "Radio", { enumerable: true, get: function() {
        return manual_components_1.Radio;
      } });
      Object.defineProperty(exports, "Select", { enumerable: true, get: function() {
        return manual_components_1.Select;
      } });
      Object.defineProperty(exports, "Switch", { enumerable: true, get: function() {
        return manual_components_1.Switch;
      } });
      Object.defineProperty(exports, "TextArea", { enumerable: true, get: function() {
        return manual_components_1.TextArea;
      } });
      Object.defineProperty(exports, "TextField", { enumerable: true, get: function() {
        return manual_components_1.TextField;
      } });
    }
  });

  // node_modules/axios/lib/helpers/bind.js
  var require_bind = __commonJS({
    "node_modules/axios/lib/helpers/bind.js"(exports, module) {
      "use strict";
      module.exports = function bind(fn, thisArg) {
        return function wrap() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          return fn.apply(thisArg, args);
        };
      };
    }
  });

  // node_modules/axios/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/axios/lib/utils.js"(exports, module) {
      "use strict";
      var bind = require_bind();
      var toString = Object.prototype.toString;
      var kindOf = function(cache) {
        return function(thing) {
          var str = toString.call(thing);
          return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        };
      }(/* @__PURE__ */ Object.create(null));
      function kindOfTest(type) {
        type = type.toLowerCase();
        return function isKindOf(thing) {
          return kindOf(thing) === type;
        };
      }
      function isArray(val) {
        return Array.isArray(val);
      }
      function isUndefined(val) {
        return typeof val === "undefined";
      }
      function isBuffer(val) {
        return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
      }
      var isArrayBuffer = kindOfTest("ArrayBuffer");
      function isArrayBufferView(val) {
        var result;
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          result = ArrayBuffer.isView(val);
        } else {
          result = val && val.buffer && isArrayBuffer(val.buffer);
        }
        return result;
      }
      function isString(val) {
        return typeof val === "string";
      }
      function isNumber(val) {
        return typeof val === "number";
      }
      function isObject(val) {
        return val !== null && typeof val === "object";
      }
      function isPlainObject(val) {
        if (kindOf(val) !== "object") {
          return false;
        }
        var prototype = Object.getPrototypeOf(val);
        return prototype === null || prototype === Object.prototype;
      }
      var isDate = kindOfTest("Date");
      var isFile = kindOfTest("File");
      var isBlob = kindOfTest("Blob");
      var isFileList = kindOfTest("FileList");
      function isFunction(val) {
        return toString.call(val) === "[object Function]";
      }
      function isStream(val) {
        return isObject(val) && isFunction(val.pipe);
      }
      function isFormData(thing) {
        var pattern = "[object FormData]";
        return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
      }
      var isURLSearchParams = kindOfTest("URLSearchParams");
      function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
      }
      function isStandardBrowserEnv() {
        if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
          return false;
        }
        return typeof window !== "undefined" && typeof document !== "undefined";
      }
      function forEach(obj, fn) {
        if (obj === null || typeof obj === "undefined") {
          return;
        }
        if (typeof obj !== "object") {
          obj = [obj];
        }
        if (isArray(obj)) {
          for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              fn.call(null, obj[key], key, obj);
            }
          }
        }
      }
      function merge() {
        var result = {};
        function assignValue(val, key) {
          if (isPlainObject(result[key]) && isPlainObject(val)) {
            result[key] = merge(result[key], val);
          } else if (isPlainObject(val)) {
            result[key] = merge({}, val);
          } else if (isArray(val)) {
            result[key] = val.slice();
          } else {
            result[key] = val;
          }
        }
        for (var i = 0, l = arguments.length; i < l; i++) {
          forEach(arguments[i], assignValue);
        }
        return result;
      }
      function extend(a, b, thisArg) {
        forEach(b, function assignValue(val, key) {
          if (thisArg && typeof val === "function") {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        });
        return a;
      }
      function stripBOM(content) {
        if (content.charCodeAt(0) === 65279) {
          content = content.slice(1);
        }
        return content;
      }
      function inherits(constructor, superConstructor, props, descriptors) {
        constructor.prototype = Object.create(superConstructor.prototype, descriptors);
        constructor.prototype.constructor = constructor;
        props && Object.assign(constructor.prototype, props);
      }
      function toFlatObject(sourceObj, destObj, filter) {
        var props;
        var i;
        var prop;
        var merged = {};
        destObj = destObj || {};
        do {
          props = Object.getOwnPropertyNames(sourceObj);
          i = props.length;
          while (i-- > 0) {
            prop = props[i];
            if (!merged[prop]) {
              destObj[prop] = sourceObj[prop];
              merged[prop] = true;
            }
          }
          sourceObj = Object.getPrototypeOf(sourceObj);
        } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
        return destObj;
      }
      function endsWith(str, searchString, position) {
        str = String(str);
        if (position === void 0 || position > str.length) {
          position = str.length;
        }
        position -= searchString.length;
        var lastIndex = str.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
      }
      function toArray(thing) {
        if (!thing)
          return null;
        var i = thing.length;
        if (isUndefined(i))
          return null;
        var arr = new Array(i);
        while (i-- > 0) {
          arr[i] = thing[i];
        }
        return arr;
      }
      var isTypedArray = function(TypedArray) {
        return function(thing) {
          return TypedArray && thing instanceof TypedArray;
        };
      }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
      module.exports = {
        isArray,
        isArrayBuffer,
        isBuffer,
        isFormData,
        isArrayBufferView,
        isString,
        isNumber,
        isObject,
        isPlainObject,
        isUndefined,
        isDate,
        isFile,
        isBlob,
        isFunction,
        isStream,
        isURLSearchParams,
        isStandardBrowserEnv,
        forEach,
        merge,
        extend,
        trim,
        stripBOM,
        inherits,
        toFlatObject,
        kindOf,
        kindOfTest,
        endsWith,
        toArray,
        isTypedArray,
        isFileList
      };
    }
  });

  // node_modules/axios/lib/helpers/buildURL.js
  var require_buildURL = __commonJS({
    "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function encode(val) {
        return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      module.exports = function buildURL(url, params, paramsSerializer) {
        if (!params) {
          return url;
        }
        var serializedParams;
        if (paramsSerializer) {
          serializedParams = paramsSerializer(params);
        } else if (utils.isURLSearchParams(params)) {
          serializedParams = params.toString();
        } else {
          var parts = [];
          utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") {
              return;
            }
            if (utils.isArray(val)) {
              key = key + "[]";
            } else {
              val = [val];
            }
            utils.forEach(val, function parseValue(v) {
              if (utils.isDate(v)) {
                v = v.toISOString();
              } else if (utils.isObject(v)) {
                v = JSON.stringify(v);
              }
              parts.push(encode(key) + "=" + encode(v));
            });
          });
          serializedParams = parts.join("&");
        }
        if (serializedParams) {
          var hashmarkIndex = url.indexOf("#");
          if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
          }
          url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
        }
        return url;
      };
    }
  });

  // node_modules/axios/lib/core/InterceptorManager.js
  var require_InterceptorManager = __commonJS({
    "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function InterceptorManager() {
        this.handlers = [];
      }
      InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
      };
      InterceptorManager.prototype.eject = function eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      };
      InterceptorManager.prototype.forEach = function forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h) {
          if (h !== null) {
            fn(h);
          }
        });
      };
      module.exports = InterceptorManager;
    }
  });

  // node_modules/axios/lib/helpers/normalizeHeaderName.js
  var require_normalizeHeaderName = __commonJS({
    "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function normalizeHeaderName(headers, normalizedName) {
        utils.forEach(headers, function processHeader(value, name) {
          if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
          }
        });
      };
    }
  });

  // node_modules/axios/lib/core/AxiosError.js
  var require_AxiosError = __commonJS({
    "node_modules/axios/lib/core/AxiosError.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function AxiosError(message, code, config, request, response) {
        Error.call(this);
        this.message = message;
        this.name = "AxiosError";
        code && (this.code = code);
        config && (this.config = config);
        request && (this.request = request);
        response && (this.response = response);
      }
      utils.inherits(AxiosError, Error, {
        toJSON: function toJSON() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      var prototype = AxiosError.prototype;
      var descriptors = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED"
      ].forEach(function(code) {
        descriptors[code] = { value: code };
      });
      Object.defineProperties(AxiosError, descriptors);
      Object.defineProperty(prototype, "isAxiosError", { value: true });
      AxiosError.from = function(error, code, config, request, response, customProps) {
        var axiosError = Object.create(prototype);
        utils.toFlatObject(error, axiosError, function filter(obj) {
          return obj !== Error.prototype;
        });
        AxiosError.call(axiosError, error.message, code, config, request, response);
        axiosError.name = error.name;
        customProps && Object.assign(axiosError, customProps);
        return axiosError;
      };
      module.exports = AxiosError;
    }
  });

  // node_modules/axios/lib/defaults/transitional.js
  var require_transitional = __commonJS({
    "node_modules/axios/lib/defaults/transitional.js"(exports, module) {
      "use strict";
      module.exports = {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      };
    }
  });

  // node_modules/axios/lib/helpers/toFormData.js
  var require_toFormData = __commonJS({
    "node_modules/axios/lib/helpers/toFormData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      function toFormData(obj, formData) {
        formData = formData || new FormData();
        var stack = [];
        function convertValue(value) {
          if (value === null)
            return "";
          if (utils.isDate(value)) {
            return value.toISOString();
          }
          if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
            return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
          }
          return value;
        }
        function build(data, parentKey) {
          if (utils.isPlainObject(data) || utils.isArray(data)) {
            if (stack.indexOf(data) !== -1) {
              throw Error("Circular reference detected in " + parentKey);
            }
            stack.push(data);
            utils.forEach(data, function each(value, key) {
              if (utils.isUndefined(value))
                return;
              var fullKey = parentKey ? parentKey + "." + key : key;
              var arr;
              if (value && !parentKey && typeof value === "object") {
                if (utils.endsWith(key, "{}")) {
                  value = JSON.stringify(value);
                } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                  arr.forEach(function(el) {
                    !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                  });
                  return;
                }
              }
              build(value, fullKey);
            });
            stack.pop();
          } else {
            formData.append(parentKey, convertValue(data));
          }
        }
        build(obj);
        return formData;
      }
      module.exports = toFormData;
    }
  });

  // node_modules/axios/lib/core/settle.js
  var require_settle = __commonJS({
    "node_modules/axios/lib/core/settle.js"(exports, module) {
      "use strict";
      var AxiosError = require_AxiosError();
      module.exports = function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;
        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(new AxiosError("Request failed with status code " + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
        }
      };
    }
  });

  // node_modules/axios/lib/helpers/cookies.js
  var require_cookies = __commonJS({
    "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }() : function nonStandardBrowserEnv() {
        return {
          write: function write() {
          },
          read: function read() {
            return null;
          },
          remove: function remove() {
          }
        };
      }();
    }
  });

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  var require_isAbsoluteURL = __commonJS({
    "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
      "use strict";
      module.exports = function isAbsoluteURL(url) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
      };
    }
  });

  // node_modules/axios/lib/helpers/combineURLs.js
  var require_combineURLs = __commonJS({
    "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
      "use strict";
      module.exports = function combineURLs(baseURL, relativeURL) {
        return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
      };
    }
  });

  // node_modules/axios/lib/core/buildFullPath.js
  var require_buildFullPath = __commonJS({
    "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
      "use strict";
      var isAbsoluteURL = require_isAbsoluteURL();
      var combineURLs = require_combineURLs();
      module.exports = function buildFullPath(baseURL, requestedURL) {
        if (baseURL && !isAbsoluteURL(requestedURL)) {
          return combineURLs(baseURL, requestedURL);
        }
        return requestedURL;
      };
    }
  });

  // node_modules/axios/lib/helpers/parseHeaders.js
  var require_parseHeaders = __commonJS({
    "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var ignoreDuplicateOf = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
      module.exports = function parseHeaders(headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
          return parsed;
        }
        utils.forEach(headers.split("\n"), function parser(line) {
          i = line.indexOf(":");
          key = utils.trim(line.substr(0, i)).toLowerCase();
          val = utils.trim(line.substr(i + 1));
          if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
              return;
            }
            if (key === "set-cookie") {
              parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            } else {
              parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }
          }
        });
        return parsed;
      };
    }
  });

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var require_isURLSameOrigin = __commonJS({
    "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin(requestURL) {
          var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }() : function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      }();
    }
  });

  // node_modules/axios/lib/cancel/CanceledError.js
  var require_CanceledError = __commonJS({
    "node_modules/axios/lib/cancel/CanceledError.js"(exports, module) {
      "use strict";
      var AxiosError = require_AxiosError();
      var utils = require_utils();
      function CanceledError(message) {
        AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
        this.name = "CanceledError";
      }
      utils.inherits(CanceledError, AxiosError, {
        __CANCEL__: true
      });
      module.exports = CanceledError;
    }
  });

  // node_modules/axios/lib/helpers/parseProtocol.js
  var require_parseProtocol = __commonJS({
    "node_modules/axios/lib/helpers/parseProtocol.js"(exports, module) {
      "use strict";
      module.exports = function parseProtocol(url) {
        var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
        return match && match[1] || "";
      };
    }
  });

  // node_modules/axios/lib/adapters/xhr.js
  var require_xhr = __commonJS({
    "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var settle = require_settle();
      var cookies = require_cookies();
      var buildURL = require_buildURL();
      var buildFullPath = require_buildFullPath();
      var parseHeaders = require_parseHeaders();
      var isURLSameOrigin = require_isURLSameOrigin();
      var transitionalDefaults = require_transitional();
      var AxiosError = require_AxiosError();
      var CanceledError = require_CanceledError();
      var parseProtocol = require_parseProtocol();
      module.exports = function xhrAdapter(config) {
        return new Promise(function dispatchXhrRequest(resolve, reject) {
          var requestData = config.data;
          var requestHeaders = config.headers;
          var responseType = config.responseType;
          var onCanceled;
          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
            delete requestHeaders["Content-Type"];
          }
          var request = new XMLHttpRequest();
          if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
          }
          var fullPath = buildFullPath(config.baseURL, config.url);
          request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
          request.timeout = config.timeout;
          function onloadend() {
            if (!request) {
              return;
            }
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request
            };
            settle(function _resolve(value) {
              resolve(value);
              done();
            }, function _reject(err) {
              reject(err);
              done();
            }, response);
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
            request = null;
          };
          request.onerror = function handleError() {
            reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
            request = null;
          };
          if (utils.isStandardBrowserEnv()) {
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
            if (xsrfValue) {
              requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
          }
          if ("setRequestHeader" in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
              if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                delete requestHeaders[key];
              } else {
                request.setRequestHeader(key, val);
              }
            });
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener("progress", config.onDownloadProgress);
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener("progress", config.onUploadProgress);
          }
          if (config.cancelToken || config.signal) {
            onCanceled = function(cancel) {
              if (!request) {
                return;
              }
              reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
            }
          }
          if (!requestData) {
            requestData = null;
          }
          var protocol = parseProtocol(fullPath);
          if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
            reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
            return;
          }
          request.send(requestData);
        });
      };
    }
  });

  // node_modules/axios/lib/helpers/null.js
  var require_null = __commonJS({
    "node_modules/axios/lib/helpers/null.js"(exports, module) {
      module.exports = null;
    }
  });

  // node_modules/axios/lib/defaults/index.js
  var require_defaults = __commonJS({
    "node_modules/axios/lib/defaults/index.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var normalizeHeaderName = require_normalizeHeaderName();
      var AxiosError = require_AxiosError();
      var transitionalDefaults = require_transitional();
      var toFormData = require_toFormData();
      var DEFAULT_CONTENT_TYPE = {
        "Content-Type": "application/x-www-form-urlencoded"
      };
      function setContentTypeIfUnset(headers, value) {
        if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
          headers["Content-Type"] = value;
        }
      }
      function getDefaultAdapter() {
        var adapter;
        if (typeof XMLHttpRequest !== "undefined") {
          adapter = require_xhr();
        } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
          adapter = require_xhr();
        }
        return adapter;
      }
      function stringifySafely(rawValue, parser, encoder) {
        if (utils.isString(rawValue)) {
          try {
            (parser || JSON.parse)(rawValue);
            return utils.trim(rawValue);
          } catch (e) {
            if (e.name !== "SyntaxError") {
              throw e;
            }
          }
        }
        return (encoder || JSON.stringify)(rawValue);
      }
      var defaults = {
        transitional: transitionalDefaults,
        adapter: getDefaultAdapter(),
        transformRequest: [function transformRequest(data, headers) {
          normalizeHeaderName(headers, "Accept");
          normalizeHeaderName(headers, "Content-Type");
          if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
            return data.toString();
          }
          var isObjectPayload = utils.isObject(data);
          var contentType = headers && headers["Content-Type"];
          var isFileList;
          if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
            var _FormData = this.env && this.env.FormData;
            return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData());
          } else if (isObjectPayload || contentType === "application/json") {
            setContentTypeIfUnset(headers, "application/json");
            return stringifySafely(data);
          }
          return data;
        }],
        transformResponse: [function transformResponse(data) {
          var transitional = this.transitional || defaults.transitional;
          var silentJSONParsing = transitional && transitional.silentJSONParsing;
          var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
          var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
          if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                }
                throw e;
              }
            }
          }
          return data;
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
          FormData: require_null()
        },
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        },
        headers: {
          common: {
            "Accept": "application/json, text/plain, */*"
          }
        }
      };
      utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
        defaults.headers[method] = {};
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
      });
      module.exports = defaults;
    }
  });

  // node_modules/axios/lib/core/transformData.js
  var require_transformData = __commonJS({
    "node_modules/axios/lib/core/transformData.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var defaults = require_defaults();
      module.exports = function transformData(data, headers, fns) {
        var context = this || defaults;
        utils.forEach(fns, function transform(fn) {
          data = fn.call(context, data, headers);
        });
        return data;
      };
    }
  });

  // node_modules/axios/lib/cancel/isCancel.js
  var require_isCancel = __commonJS({
    "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
      "use strict";
      module.exports = function isCancel(value) {
        return !!(value && value.__CANCEL__);
      };
    }
  });

  // node_modules/axios/lib/core/dispatchRequest.js
  var require_dispatchRequest = __commonJS({
    "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var transformData = require_transformData();
      var isCancel = require_isCancel();
      var defaults = require_defaults();
      var CanceledError = require_CanceledError();
      function throwIfCancellationRequested(config) {
        if (config.cancelToken) {
          config.cancelToken.throwIfRequested();
        }
        if (config.signal && config.signal.aborted) {
          throw new CanceledError();
        }
      }
      module.exports = function dispatchRequest(config) {
        throwIfCancellationRequested(config);
        config.headers = config.headers || {};
        config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
        config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
        utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
          delete config.headers[method];
        });
        var adapter = config.adapter || defaults.adapter;
        return adapter(config).then(function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
          return response;
        }, function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
            }
          }
          return Promise.reject(reason);
        });
      };
    }
  });

  // node_modules/axios/lib/core/mergeConfig.js
  var require_mergeConfig = __commonJS({
    "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function mergeConfig(config1, config2) {
        config2 = config2 || {};
        var config = {};
        function getMergedValue(target, source) {
          if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
            return utils.merge(target, source);
          } else if (utils.isPlainObject(source)) {
            return utils.merge({}, source);
          } else if (utils.isArray(source)) {
            return source.slice();
          }
          return source;
        }
        function mergeDeepProperties(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function valueFromConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          }
        }
        function defaultToConfig2(prop) {
          if (!utils.isUndefined(config2[prop])) {
            return getMergedValue(void 0, config2[prop]);
          } else if (!utils.isUndefined(config1[prop])) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        function mergeDirectKeys(prop) {
          if (prop in config2) {
            return getMergedValue(config1[prop], config2[prop]);
          } else if (prop in config1) {
            return getMergedValue(void 0, config1[prop]);
          }
        }
        var mergeMap = {
          "url": valueFromConfig2,
          "method": valueFromConfig2,
          "data": valueFromConfig2,
          "baseURL": defaultToConfig2,
          "transformRequest": defaultToConfig2,
          "transformResponse": defaultToConfig2,
          "paramsSerializer": defaultToConfig2,
          "timeout": defaultToConfig2,
          "timeoutMessage": defaultToConfig2,
          "withCredentials": defaultToConfig2,
          "adapter": defaultToConfig2,
          "responseType": defaultToConfig2,
          "xsrfCookieName": defaultToConfig2,
          "xsrfHeaderName": defaultToConfig2,
          "onUploadProgress": defaultToConfig2,
          "onDownloadProgress": defaultToConfig2,
          "decompress": defaultToConfig2,
          "maxContentLength": defaultToConfig2,
          "maxBodyLength": defaultToConfig2,
          "beforeRedirect": defaultToConfig2,
          "transport": defaultToConfig2,
          "httpAgent": defaultToConfig2,
          "httpsAgent": defaultToConfig2,
          "cancelToken": defaultToConfig2,
          "socketPath": defaultToConfig2,
          "responseEncoding": defaultToConfig2,
          "validateStatus": mergeDirectKeys
        };
        utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
          var merge = mergeMap[prop] || mergeDeepProperties;
          var configValue = merge(prop);
          utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
        });
        return config;
      };
    }
  });

  // node_modules/axios/lib/env/data.js
  var require_data = __commonJS({
    "node_modules/axios/lib/env/data.js"(exports, module) {
      module.exports = {
        "version": "0.27.2"
      };
    }
  });

  // node_modules/axios/lib/helpers/validator.js
  var require_validator = __commonJS({
    "node_modules/axios/lib/helpers/validator.js"(exports, module) {
      "use strict";
      var VERSION = require_data().version;
      var AxiosError = require_AxiosError();
      var validators = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
        validators[type] = function validator(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      });
      var deprecatedWarnings = {};
      validators.transitional = function transitional(validator, version, message) {
        function formatMessage(opt, desc) {
          return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
        }
        return function(value, opt, opts) {
          if (validator === false) {
            throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
          }
          if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
          }
          return validator ? validator(value, opt, opts) : true;
        };
      };
      function assertOptions(options, schema, allowUnknown) {
        if (typeof options !== "object") {
          throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
        }
        var keys = Object.keys(options);
        var i = keys.length;
        while (i-- > 0) {
          var opt = keys[i];
          var validator = schema[opt];
          if (validator) {
            var value = options[opt];
            var result = value === void 0 || validator(value, opt, options);
            if (result !== true) {
              throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
            }
            continue;
          }
          if (allowUnknown !== true) {
            throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
          }
        }
      }
      module.exports = {
        assertOptions,
        validators
      };
    }
  });

  // node_modules/axios/lib/core/Axios.js
  var require_Axios = __commonJS({
    "node_modules/axios/lib/core/Axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var buildURL = require_buildURL();
      var InterceptorManager = require_InterceptorManager();
      var dispatchRequest = require_dispatchRequest();
      var mergeConfig = require_mergeConfig();
      var buildFullPath = require_buildFullPath();
      var validator = require_validator();
      var validators = validator.validators;
      function Axios(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager(),
          response: new InterceptorManager()
        };
      }
      Axios.prototype.request = function request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        if (config.method) {
          config.method = config.method.toLowerCase();
        } else if (this.defaults.method) {
          config.method = this.defaults.method.toLowerCase();
        } else {
          config.method = "get";
        }
        var transitional = config.transitional;
        if (transitional !== void 0) {
          validator.assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
          }, false);
        }
        var requestInterceptorChain = [];
        var synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
          if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
            return;
          }
          synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
          requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        var responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
          responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        var promise;
        if (!synchronousRequestInterceptors) {
          var chain = [dispatchRequest, void 0];
          Array.prototype.unshift.apply(chain, requestInterceptorChain);
          chain = chain.concat(responseInterceptorChain);
          promise = Promise.resolve(config);
          while (chain.length) {
            promise = promise.then(chain.shift(), chain.shift());
          }
          return promise;
        }
        var newConfig = config;
        while (requestInterceptorChain.length) {
          var onFulfilled = requestInterceptorChain.shift();
          var onRejected = requestInterceptorChain.shift();
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected(error);
            break;
          }
        }
        try {
          promise = dispatchRequest(newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        while (responseInterceptorChain.length) {
          promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
        }
        return promise;
      };
      Axios.prototype.getUri = function getUri(config) {
        config = mergeConfig(this.defaults, config);
        var fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      };
      utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
        Axios.prototype[method] = function(url, config) {
          return this.request(mergeConfig(config || {}, {
            method,
            url,
            data: (config || {}).data
          }));
        };
      });
      utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              headers: isForm ? {
                "Content-Type": "multipart/form-data"
              } : {},
              url,
              data
            }));
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      });
      module.exports = Axios;
    }
  });

  // node_modules/axios/lib/cancel/CancelToken.js
  var require_CancelToken = __commonJS({
    "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
      "use strict";
      var CanceledError = require_CanceledError();
      function CancelToken(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        var resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
          resolvePromise = resolve;
        });
        var token = this;
        this.promise.then(function(cancel) {
          if (!token._listeners)
            return;
          var i;
          var l = token._listeners.length;
          for (i = 0; i < l; i++) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = function(onfulfilled) {
          var _resolve;
          var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message) {
          if (token.reason) {
            return;
          }
          token.reason = new CanceledError(message);
          resolvePromise(token.reason);
        });
      }
      CancelToken.prototype.throwIfRequested = function throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      };
      CancelToken.prototype.subscribe = function subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      };
      CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        var index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      };
      CancelToken.source = function source() {
        var cancel;
        var token = new CancelToken(function executor(c) {
          cancel = c;
        });
        return {
          token,
          cancel
        };
      };
      module.exports = CancelToken;
    }
  });

  // node_modules/axios/lib/helpers/spread.js
  var require_spread = __commonJS({
    "node_modules/axios/lib/helpers/spread.js"(exports, module) {
      "use strict";
      module.exports = function spread(callback) {
        return function wrap(arr) {
          return callback.apply(null, arr);
        };
      };
    }
  });

  // node_modules/axios/lib/helpers/isAxiosError.js
  var require_isAxiosError = __commonJS({
    "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      module.exports = function isAxiosError(payload) {
        return utils.isObject(payload) && payload.isAxiosError === true;
      };
    }
  });

  // node_modules/axios/lib/axios.js
  var require_axios = __commonJS({
    "node_modules/axios/lib/axios.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var bind = require_bind();
      var Axios = require_Axios();
      var mergeConfig = require_mergeConfig();
      var defaults = require_defaults();
      function createInstance(defaultConfig) {
        var context = new Axios(defaultConfig);
        var instance = bind(Axios.prototype.request, context);
        utils.extend(instance, Axios.prototype, context);
        utils.extend(instance, context);
        instance.create = function create(instanceConfig) {
          return createInstance(mergeConfig(defaultConfig, instanceConfig));
        };
        return instance;
      }
      var axios2 = createInstance(defaults);
      axios2.Axios = Axios;
      axios2.CanceledError = require_CanceledError();
      axios2.CancelToken = require_CancelToken();
      axios2.isCancel = require_isCancel();
      axios2.VERSION = require_data().version;
      axios2.toFormData = require_toFormData();
      axios2.AxiosError = require_AxiosError();
      axios2.Cancel = axios2.CanceledError;
      axios2.all = function all(promises) {
        return Promise.all(promises);
      };
      axios2.spread = require_spread();
      axios2.isAxiosError = require_isAxiosError();
      module.exports = axios2;
      module.exports.default = axios2;
    }
  });

  // node_modules/axios/index.js
  var require_axios2 = __commonJS({
    "node_modules/axios/index.js"(exports, module) {
      module.exports = require_axios();
    }
  });

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.UI_VERSION = exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "8.1.0";
      exports.UI_VERSION = "31.4.1";
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    CustomerDetailView: () => CustomerDetailView_default,
    HomeOverviewView: () => HomeOverviewView_default,
    default: () => manifest_default
  });

  // src/views/CustomerDetailView.tsx
  var import_ui3 = __toESM(require_ui2());
  var import_react2 = __require("react");

  // src/api/index.ts
  var import_axios = __toESM(require_axios2());
  function addNoteAPI(_0) {
    return __async(this, arguments, function* ({ customerId, message, agentId }) {
      const response = yield import_axios.default.post("http://localhost:3000/note", { agentId, customerId, message });
      return response.data;
    });
  }
  function getAllNotesAPI() {
    return __async(this, null, function* () {
      const response = yield import_axios.default.get("http://localhost:3000/notes");
      return response.data;
    });
  }
  function getNotesForCustomerAPI(_0) {
    return __async(this, arguments, function* ({ customerId }) {
      const response = yield import_axios.default.get(`http://localhost:3000/notes/${customerId}`);
      return response.data;
    });
  }

  // src/components/AddNoteView/index.tsx
  var import_ui = __toESM(require_ui2());
  var import_react = __require("react");
  var AddNoteView = ({
    isOpen,
    customerId,
    agentId,
    onSuccessAction,
    onCancelAction
  }) => {
    const [message, setMessage] = (0, import_react.useState)("");
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_ui.FocusView, {
      title: "Add a new note",
      shown: isOpen,
      onClose: () => {
        onCancelAction();
      },
      primaryAction: /* @__PURE__ */ React.createElement(import_ui.Button, {
        type: "primary",
        onPress: () => __async(void 0, null, function* () {
          yield addNoteAPI({ customerId, agentId, message });
          setMessage("");
          onSuccessAction();
        })
      }, "Save note"),
      secondaryAction: /* @__PURE__ */ React.createElement(import_ui.Button, {
        onPress: () => {
          onCancelAction();
        }
      }, "Cancel")
    }, /* @__PURE__ */ React.createElement(import_ui.TextArea, {
      label: "Message",
      placeholder: "Looking for more enterprise features like SEO...",
      value: message,
      autoFocus: true,
      onChange: (e) => {
        setMessage(e.target.value);
      }
    })));
  };
  var AddNoteView_default = AddNoteView;

  // src/components/Notes/index.tsx
  var import_ui2 = __toESM(require_ui2());
  var Notes = ({ notes }) => {
    if (!notes || notes.length === 0) {
      return /* @__PURE__ */ React.createElement(import_ui2.Box, {
        css: { marginTop: "medium" }
      }, /* @__PURE__ */ React.createElement(import_ui2.Inline, null, "No notes found"));
    }
    return /* @__PURE__ */ React.createElement(import_ui2.Box, {
      css: { marginTop: "medium" }
    }, notes.map((note, i) => {
      return /* @__PURE__ */ React.createElement(import_ui2.List, {
        key: `messages_${i}`,
        "aria-label": "List of recent messages"
      }, /* @__PURE__ */ React.createElement(import_ui2.ListItem, {
        title: /* @__PURE__ */ React.createElement(import_ui2.Box, null, "Note #", note.id),
        secondaryTitle: /* @__PURE__ */ React.createElement(import_ui2.Box, {
          css: { stack: "y" }
        }, /* @__PURE__ */ React.createElement(import_ui2.Inline, null, new Date().toLocaleDateString("en-US")), /* @__PURE__ */ React.createElement(import_ui2.Inline, null, note.message)),
        value: /* @__PURE__ */ React.createElement(import_ui2.Box, {
          css: { marginRight: "xsmall" }
        }, /* @__PURE__ */ React.createElement(import_ui2.Link, {
          href: `https://dashboard.stripe.com/test/customers/${note.customerId}`
        }, "View \u2192"))
      }));
    }));
  };
  var Notes_default = Notes;

  // src/views/brand_icon.svg
  var brand_icon_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjIxOCA5LjEwMjg1QzI0LjQwMDggOC45OTQyMiAyNC41NTc3IDguODQ4ODcgMjQuNjgyIDguNjc3OTdMMTcuNTE1NSA0LjQxODA5QzE2LjU3NzcgMy44NjA2NCAxNS40MjIzIDMuODYwNjQgMTQuNDg0NSA0LjQxODA5TDcuMzE3OTggOC42Nzc5N0M3LjQ0MjI5IDguODQ4ODcgNy41OTkyNCA4Ljk5NDIyIDcuNzgxOTkgOS4xMDI4NUwxNS4yNTA5IDEzLjU0MjVDMTUuNzE2MyAxMy44MTkyIDE2LjI4MzcgMTMuODE5MiAxNi43NDkxIDEzLjU0MjVMMjQuMjE4IDkuMTAyODVaIiBmaWxsPSIjNkE3MzgzIi8+CjxwYXRoIGQ9Ik0yNi41IDExLjU2MDNDMjYuNSAxMS40MjE1IDI2LjQ5MSAxMS4yODQxIDI2LjQ3MzYgMTEuMTQ4NkMyNi4yNTI5IDExLjM0NzkgMjYuMDExMyAxMS41MjY4IDI1Ljc1MDkgMTEuNjgxN0wxOC4yODIgMTYuMTIxM0MxNi44NzE4IDE2Ljk1OTYgMTUuMTI4MiAxNi45NTk2IDEzLjcxOCAxNi4xMjEzTDYuMjQ5MSAxMS42ODE3QzUuOTg4NjYgMTEuNTI2OCA1Ljc0NzEgMTEuMzQ3OSA1LjUyNjQ0IDExLjE0ODZDNS41MDg5NSAxMS4yODQxIDUuNSAxMS40MjE1IDUuNSAxMS41NjAzVjIwLjQzOTdDNS41IDIxLjU1NDYgNi4wNzc3MiAyMi41ODQ4IDcuMDE1NTQgMjMuMTQyM0wxNC40ODQ1IDI3LjU4MTlDMTUuNDIyMyAyOC4xMzk0IDE2LjU3NzcgMjguMTM5NCAxNy41MTU1IDI3LjU4MTlMMjQuOTg0NSAyMy4xNDIzQzI1LjkyMjMgMjIuNTg0OCAyNi41IDIxLjU1NDYgMjYuNSAyMC40Mzk3VjExLjU2MDNaIiBmaWxsPSIjNkE3MzgzIi8+Cjwvc3ZnPgo=";

  // src/views/CustomerDetailView.tsx
  var CustomerDetailView = ({
    userContext,
    environment
  }) => {
    var _a;
    const customerId = (_a = environment == null ? void 0 : environment.objectContext) == null ? void 0 : _a.id;
    const agentId = (userContext == null ? void 0 : userContext.account.id) || "";
    const agentName = (userContext == null ? void 0 : userContext.account.name) || "";
    const [notes, setNotes] = (0, import_react2.useState)(null);
    const [showAddNoteView, setShowAddNoteView] = (0, import_react2.useState)(false);
    const [showAddNoteSuccessMessage, setShowAddNoteSuccessMessage] = (0, import_react2.useState)(false);
    const getNotes = () => {
      if (!customerId) {
        return;
      }
      getNotesForCustomerAPI({ customerId }).then((res) => {
        if (!res.data.error) {
          setNotes(res.data.notes);
        }
      });
    };
    (0, import_react2.useEffect)(() => {
      getNotes();
    }, [customerId]);
    console.log(notes);
    return /* @__PURE__ */ React.createElement(import_ui3.ContextView, {
      title: "All Notes",
      description: customerId,
      brandColor: "#F6F8FA",
      brandIcon: brand_icon_default,
      actions: /* @__PURE__ */ React.createElement(import_ui3.Button, {
        type: "primary",
        css: { width: "fill", alignX: "center" },
        onPress: () => {
          setShowAddNoteView(true);
        }
      }, /* @__PURE__ */ React.createElement(import_ui3.Box, {
        css: { stack: "x", gap: "small", alignY: "center" }
      }, /* @__PURE__ */ React.createElement(import_ui3.Icon, {
        name: "addCircle",
        size: "xsmall"
      }), /* @__PURE__ */ React.createElement(import_ui3.Inline, null, "Add note")))
    }, showAddNoteSuccessMessage && /* @__PURE__ */ React.createElement(import_ui3.Box, {
      css: { marginBottom: "small" }
    }, /* @__PURE__ */ React.createElement(import_ui3.Banner, {
      type: "default",
      onDismiss: () => setShowAddNoteSuccessMessage(false),
      title: "Added new note"
    })), /* @__PURE__ */ React.createElement(AddNoteView_default, {
      isOpen: showAddNoteView,
      customerId,
      agentId,
      onSuccessAction: () => {
        setShowAddNoteView(false);
        setShowAddNoteSuccessMessage(true);
        getNotes();
      },
      onCancelAction: () => {
        setShowAddNoteView(false);
      }
    }), /* @__PURE__ */ React.createElement(import_ui3.Box, {
      css: { stack: "y" }
    }, /* @__PURE__ */ React.createElement(import_ui3.Box, {
      css: {}
    }, /* @__PURE__ */ React.createElement(import_ui3.Inline, {
      css: {
        font: "heading",
        color: "primary",
        fontWeight: "semibold",
        paddingY: "medium"
      }
    }, "View All Notes"), /* @__PURE__ */ React.createElement(Notes_default, {
      notes
    }))));
  };
  var CustomerDetailView_default = CustomerDetailView;

  // src/views/HomeOverviewView.tsx
  var import_ui4 = __toESM(require_ui2());
  var import_react3 = __require("react");
  var HomeOverviewView = ({
    userContext,
    environment
  }) => {
    const agentName = userContext == null ? void 0 : userContext.account.name;
    const [notes, setNotes] = (0, import_react3.useState)(null);
    const getAllNotes = () => {
      getAllNotesAPI().then((res) => {
        if (!res.data.error) {
          setNotes(res.data.notes);
        }
      });
    };
    (0, import_react3.useEffect)(() => {
      getAllNotes();
    }, []);
    console.log(notes);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_ui4.ContextView, {
      title: "Overview"
    }, /* @__PURE__ */ React.createElement(import_ui4.Box, {
      css: { stack: "y" }
    }, /* @__PURE__ */ React.createElement(import_ui4.Inline, {
      css: {
        color: "primary",
        fontWeight: "semibold"
      }
    }, "View All Notes"), /* @__PURE__ */ React.createElement(Notes_default, {
      notes
    }))));
  };
  var HomeOverviewView_default = HomeOverviewView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2022-07-30 18:17:53.184242 -0400 EDT m=+0.015670251";
  var manifest_default = {
    "id": "com.saasbase.stripe-app-fe",
    "version": "0.0.1",
    "name": "CRM Buddy",
    "icon": "",
    "permissions": [],
    "app_backend": {
      "webhooks": null
    },
    "ui_extension": {
      "views": [
        {
          "viewport": "stripe.dashboard.customer.detail",
          "component": "CustomerDetailView"
        },
        {
          "viewport": "stripe.dashboard.home.overview",
          "component": "HomeOverviewView"
        }
      ],
      "actions": [],
      "content_security_policy": {
        "connect-src": null,
        "image-src": null,
        "purpose": ""
      }
    },
    "post_install_action": null
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zRXJyb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy90cmFuc2l0aW9uYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3RvRm9ybURhdGEuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbGVkRXJyb3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlUHJvdG9jb2wuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL251bGwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2Vudi9kYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy92YWxpZGF0b3IuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQXhpb3NFcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdmVyc2lvbi50cyIsICJtYW5pZmVzdC5qcyIsICIuLi9zcmMvdmlld3MvQ3VzdG9tZXJEZXRhaWxWaWV3LnRzeCIsICIuLi9zcmMvYXBpL2luZGV4LnRzIiwgIi4uL3NyYy9jb21wb25lbnRzL0FkZE5vdGVWaWV3L2luZGV4LnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9Ob3Rlcy9pbmRleC50c3giLCAiLi4vc3JjL3ZpZXdzL0hvbWVPdmVydmlld1ZpZXcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogW251bGwsIG51bGwsIG51bGwsIG51bGwsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG52YXIga2luZE9mID0gKGZ1bmN0aW9uKGNhY2hlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiBmdW5jdGlvbih0aGluZykge1xuICAgIHZhciBzdHIgPSB0b1N0cmluZy5jYWxsKHRoaW5nKTtcbiAgICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG4gIH07XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcblxuZnVuY3Rpb24ga2luZE9mVGVzdCh0eXBlKSB7XG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBmdW5jdGlvbiBpc0tpbmRPZih0aGluZykge1xuICAgIHJldHVybiBraW5kT2YodGhpbmcpID09PSB0eXBlO1xuICB9O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbnZhciBpc0FycmF5QnVmZmVyID0ga2luZE9mVGVzdCgnQXJyYXlCdWZmZXInKTtcblxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmIChpc0FycmF5QnVmZmVyKHZhbC5idWZmZXIpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmIChraW5kT2YodmFsKSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xudmFyIGlzRGF0ZSA9IGtpbmRPZlRlc3QoJ0RhdGUnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbnZhciBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG52YXIgaXNCbG9iID0ga2luZE9mVGVzdCgnQmxvYicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZUxpc3RcbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbnZhciBpc0ZpbGVMaXN0ID0ga2luZE9mVGVzdCgnRmlsZUxpc3QnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRoaW5nIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodGhpbmcpIHtcbiAgdmFyIHBhdHRlcm4gPSAnW29iamVjdCBGb3JtRGF0YV0nO1xuICByZXR1cm4gdGhpbmcgJiYgKFxuICAgICh0eXBlb2YgRm9ybURhdGEgPT09ICdmdW5jdGlvbicgJiYgdGhpbmcgaW5zdGFuY2VvZiBGb3JtRGF0YSkgfHxcbiAgICB0b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gcGF0dGVybiB8fFxuICAgIChpc0Z1bmN0aW9uKHRoaW5nLnRvU3RyaW5nKSAmJiB0aGluZy50b1N0cmluZygpID09PSBwYXR0ZXJuKVxuICApO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG52YXIgaXNVUkxTZWFyY2hQYXJhbXMgPSBraW5kT2ZUZXN0KCdVUkxTZWFyY2hQYXJhbXMnKTtcblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnRyaW0gPyBzdHIudHJpbSgpIDogc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW3Byb3BzXVxuICogQHBhcmFtIHtvYmplY3R9IFtkZXNjcmlwdG9yc11cbiAqL1xuXG5mdW5jdGlvbiBpbmhlcml0cyhjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgY29uc3RydWN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIHByb3BzICYmIE9iamVjdC5hc3NpZ24oY29uc3RydWN0b3IucHJvdG90eXBlLCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSBvYmplY3Qgd2l0aCBkZWVwIHByb3RvdHlwZSBjaGFpbiB0byBhIGZsYXQgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlT2JqIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVzdE9ial1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmaWx0ZXJdXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHRvRmxhdE9iamVjdChzb3VyY2VPYmosIGRlc3RPYmosIGZpbHRlcikge1xuICB2YXIgcHJvcHM7XG4gIHZhciBpO1xuICB2YXIgcHJvcDtcbiAgdmFyIG1lcmdlZCA9IHt9O1xuXG4gIGRlc3RPYmogPSBkZXN0T2JqIHx8IHt9O1xuXG4gIGRvIHtcbiAgICBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZU9iaik7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tID4gMCkge1xuICAgICAgcHJvcCA9IHByb3BzW2ldO1xuICAgICAgaWYgKCFtZXJnZWRbcHJvcF0pIHtcbiAgICAgICAgZGVzdE9ialtwcm9wXSA9IHNvdXJjZU9ialtwcm9wXTtcbiAgICAgICAgbWVyZ2VkW3Byb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlT2JqID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZU9iaik7XG4gIH0gd2hpbGUgKHNvdXJjZU9iaiAmJiAoIWZpbHRlciB8fCBmaWx0ZXIoc291cmNlT2JqLCBkZXN0T2JqKSkgJiYgc291cmNlT2JqICE9PSBPYmplY3QucHJvdG90eXBlKTtcblxuICByZXR1cm4gZGVzdE9iajtcbn1cblxuLypcbiAqIGRldGVybWluZXMgd2hldGhlciBhIHN0cmluZyBlbmRzIHdpdGggdGhlIGNoYXJhY3RlcnMgb2YgYSBzcGVjaWZpZWQgc3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdHIubGVuZ3RoKSB7XG4gICAgcG9zaXRpb24gPSBzdHIubGVuZ3RoO1xuICB9XG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gIHZhciBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgbmV3IGFycmF5IGZyb20gYXJyYXkgbGlrZSBvYmplY3RcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5mdW5jdGlvbiB0b0FycmF5KHRoaW5nKSB7XG4gIGlmICghdGhpbmcpIHJldHVybiBudWxsO1xuICB2YXIgaSA9IHRoaW5nLmxlbmd0aDtcbiAgaWYgKGlzVW5kZWZpbmVkKGkpKSByZXR1cm4gbnVsbDtcbiAgdmFyIGFyciA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBhcnJbaV0gPSB0aGluZ1tpXTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xudmFyIGlzVHlwZWRBcnJheSA9IChmdW5jdGlvbihUeXBlZEFycmF5KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiBmdW5jdGlvbih0aGluZykge1xuICAgIHJldHVybiBUeXBlZEFycmF5ICYmIHRoaW5nIGluc3RhbmNlb2YgVHlwZWRBcnJheTtcbiAgfTtcbn0pKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVWludDhBcnJheSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NLFxuICBpbmhlcml0czogaW5oZXJpdHMsXG4gIHRvRmxhdE9iamVjdDogdG9GbGF0T2JqZWN0LFxuICBraW5kT2Y6IGtpbmRPZixcbiAga2luZE9mVGVzdDoga2luZE9mVGVzdCxcbiAgZW5kc1dpdGg6IGVuZHNXaXRoLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBpc1R5cGVkQXJyYXk6IGlzVHlwZWRBcnJheSxcbiAgaXNGaWxlTGlzdDogaXNGaWxlTGlzdFxufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWQsXG4gICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xuZnVuY3Rpb24gQXhpb3NFcnJvcihtZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIEVycm9yLmNhbGwodGhpcyk7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubmFtZSA9ICdBeGlvc0Vycm9yJztcbiAgY29kZSAmJiAodGhpcy5jb2RlID0gY29kZSk7XG4gIGNvbmZpZyAmJiAodGhpcy5jb25maWcgPSBjb25maWcpO1xuICByZXF1ZXN0ICYmICh0aGlzLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgcmVzcG9uc2UgJiYgKHRoaXMucmVzcG9uc2UgPSByZXNwb25zZSk7XG59XG5cbnV0aWxzLmluaGVyaXRzKEF4aW9zRXJyb3IsIEVycm9yLCB7XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfVxufSk7XG5cbnZhciBwcm90b3R5cGUgPSBBeGlvc0Vycm9yLnByb3RvdHlwZTtcbnZhciBkZXNjcmlwdG9ycyA9IHt9O1xuXG5bXG4gICdFUlJfQkFEX09QVElPTl9WQUxVRScsXG4gICdFUlJfQkFEX09QVElPTicsXG4gICdFQ09OTkFCT1JURUQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VSUl9ORVRXT1JLJyxcbiAgJ0VSUl9GUl9UT09fTUFOWV9SRURJUkVDVFMnLFxuICAnRVJSX0RFUFJFQ0FURUQnLFxuICAnRVJSX0JBRF9SRVNQT05TRScsXG4gICdFUlJfQkFEX1JFUVVFU1QnLFxuICAnRVJSX0NBTkNFTEVEJ1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbl0uZm9yRWFjaChmdW5jdGlvbihjb2RlKSB7XG4gIGRlc2NyaXB0b3JzW2NvZGVdID0ge3ZhbHVlOiBjb2RlfTtcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhBeGlvc0Vycm9yLCBkZXNjcmlwdG9ycyk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCAnaXNBeGlvc0Vycm9yJywge3ZhbHVlOiB0cnVlfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5BeGlvc0Vycm9yLmZyb20gPSBmdW5jdGlvbihlcnJvciwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSwgY3VzdG9tUHJvcHMpIHtcbiAgdmFyIGF4aW9zRXJyb3IgPSBPYmplY3QuY3JlYXRlKHByb3RvdHlwZSk7XG5cbiAgdXRpbHMudG9GbGF0T2JqZWN0KGVycm9yLCBheGlvc0Vycm9yLCBmdW5jdGlvbiBmaWx0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAhPT0gRXJyb3IucHJvdG90eXBlO1xuICB9KTtcblxuICBBeGlvc0Vycm9yLmNhbGwoYXhpb3NFcnJvciwgZXJyb3IubWVzc2FnZSwgY29kZSwgY29uZmlnLCByZXF1ZXN0LCByZXNwb25zZSk7XG5cbiAgYXhpb3NFcnJvci5uYW1lID0gZXJyb3IubmFtZTtcblxuICBjdXN0b21Qcm9wcyAmJiBPYmplY3QuYXNzaWduKGF4aW9zRXJyb3IsIGN1c3RvbVByb3BzKTtcblxuICByZXR1cm4gYXhpb3NFcnJvcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3NFcnJvcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzaWxlbnRKU09OUGFyc2luZzogdHJ1ZSxcbiAgZm9yY2VkSlNPTlBhcnNpbmc6IHRydWUsXG4gIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBvYmplY3QgdG8gRm9ybURhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7P09iamVjdH0gW2Zvcm1EYXRhXVxuICogQHJldHVybnMge09iamVjdH1cbiAqKi9cblxuZnVuY3Rpb24gdG9Gb3JtRGF0YShvYmosIGZvcm1EYXRhKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBmb3JtRGF0YSA9IGZvcm1EYXRhIHx8IG5ldyBGb3JtRGF0YSgpO1xuXG4gIHZhciBzdGFjayA9IFtdO1xuXG4gIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuICcnO1xuXG4gICAgaWYgKHV0aWxzLmlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyKHZhbHVlKSB8fCB1dGlscy5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgPyBuZXcgQmxvYihbdmFsdWVdKSA6IEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZChkYXRhLCBwYXJlbnRLZXkpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChkYXRhKSB8fCB1dGlscy5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBpZiAoc3RhY2suaW5kZXhPZihkYXRhKSAhPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0NpcmN1bGFyIHJlZmVyZW5jZSBkZXRlY3RlZCBpbiAnICsgcGFyZW50S2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucHVzaChkYXRhKTtcblxuICAgICAgdXRpbHMuZm9yRWFjaChkYXRhLCBmdW5jdGlvbiBlYWNoKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSkgcmV0dXJuO1xuICAgICAgICB2YXIgZnVsbEtleSA9IHBhcmVudEtleSA/IHBhcmVudEtleSArICcuJyArIGtleSA6IGtleTtcbiAgICAgICAgdmFyIGFycjtcblxuICAgICAgICBpZiAodmFsdWUgJiYgIXBhcmVudEtleSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKHV0aWxzLmVuZHNXaXRoKGtleSwgJ3t9JykpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh1dGlscy5lbmRzV2l0aChrZXksICdbXScpICYmIChhcnIgPSB1dGlscy50b0FycmF5KHZhbHVlKSkpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgICAhdXRpbHMuaXNVbmRlZmluZWQoZWwpICYmIGZvcm1EYXRhLmFwcGVuZChmdWxsS2V5LCBjb252ZXJ0VmFsdWUoZWwpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJ1aWxkKHZhbHVlLCBmdWxsS2V5KTtcbiAgICAgIH0pO1xuXG4gICAgICBzdGFjay5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHBhcmVudEtleSwgY29udmVydFZhbHVlKGRhdGEpKTtcbiAgICB9XG4gIH1cblxuICBidWlsZChvYmopO1xuXG4gIHJldHVybiBmb3JtRGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0Zvcm1EYXRhO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEF4aW9zRXJyb3IgPSByZXF1aXJlKCcuL0F4aW9zRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIFtBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFXVtNYXRoLmZsb29yKHJlc3BvbnNlLnN0YXR1cyAvIDEwMCkgLSA0XSxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkK1xcLS5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIEF4aW9zRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL0F4aW9zRXJyb3InKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsZWRFcnJvcmAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWxlZEVycm9yKG1lc3NhZ2UpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVxLW51bGwsZXFlcWVxXG4gIEF4aW9zRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlID09IG51bGwgPyAnY2FuY2VsZWQnIDogbWVzc2FnZSwgQXhpb3NFcnJvci5FUlJfQ0FOQ0VMRUQpO1xuICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG59XG5cbnV0aWxzLmluaGVyaXRzKENhbmNlbGVkRXJyb3IsIEF4aW9zRXJyb3IsIHtcbiAgX19DQU5DRUxfXzogdHJ1ZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsZWRFcnJvcjtcbiIsICIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VQcm90b2NvbCh1cmwpIHtcbiAgdmFyIG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSkoOj9cXC9cXC98OikvLmV4ZWModXJsKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciB0cmFuc2l0aW9uYWxEZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzL3RyYW5zaXRpb25hbCcpO1xudmFyIEF4aW9zRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL0F4aW9zRXJyb3InKTtcbnZhciBDYW5jZWxlZEVycm9yID0gcmVxdWlyZSgnLi4vY2FuY2VsL0NhbmNlbGVkRXJyb3InKTtcbnZhciBwYXJzZVByb3RvY29sID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZVByb3RvY29sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgICB2YXIgcmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB2YXIgb25DYW5jZWxlZDtcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgICBjb25maWcuY2FuY2VsVG9rZW4udW5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkgJiYgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWRlbmQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhcmVzcG9uc2VUeXBlIHx8IHJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnIHx8ICByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShmdW5jdGlvbiBfcmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfSwgZnVuY3Rpb24gX3JlamVjdChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCdvbmxvYWRlbmQnIGluIHJlcXVlc3QpIHtcbiAgICAgIC8vIFVzZSBvbmxvYWRlbmQgaWYgYXZhaWxhYmxlXG4gICAgICByZXF1ZXN0Lm9ubG9hZGVuZCA9IG9ubG9hZGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZSB0byBlbXVsYXRlIG9ubG9hZGVuZFxuICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlYWR5c3RhdGUgaGFuZGxlciBpcyBjYWxsaW5nIGJlZm9yZSBvbmVycm9yIG9yIG9udGltZW91dCBoYW5kbGVycyxcbiAgICAgICAgLy8gc28gd2Ugc2hvdWxkIGNhbGwgb25sb2FkZW5kIG9uIHRoZSBuZXh0ICd0aWNrJ1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZGVuZCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyA6ICd0aW1lb3V0IGV4Y2VlZGVkJztcbiAgICAgIHZhciB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsIHx8IHRyYW5zaXRpb25hbERlZmF1bHRzO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcihcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSxcbiAgICAgICAgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAocmVzcG9uc2VUeXBlICYmIHJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbiB8fCBjb25maWcuc2lnbmFsKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgb25DYW5jZWxlZCA9IGZ1bmN0aW9uKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCFjYW5jZWwgfHwgKGNhbmNlbCAmJiBjYW5jZWwudHlwZSkgPyBuZXcgQ2FuY2VsZWRFcnJvcigpIDogY2FuY2VsKTtcbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiAmJiBjb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKG9uQ2FuY2VsZWQpO1xuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogY29uZmlnLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKGZ1bGxQYXRoKTtcblxuICAgIGlmIChwcm90b2NvbCAmJiBbICdodHRwJywgJ2h0dHBzJywgJ2ZpbGUnIF0uaW5kZXhPZihwcm90b2NvbCkgPT09IC0xKSB7XG4gICAgICByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCArICc6JywgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc3RyaWN0XG5tb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcbnZhciBBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi4vY29yZS9BeGlvc0Vycm9yJyk7XG52YXIgdHJhbnNpdGlvbmFsRGVmYXVsdHMgPSByZXF1aXJlKCcuL3RyYW5zaXRpb25hbCcpO1xudmFyIHRvRm9ybURhdGEgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3RvRm9ybURhdGEnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVNhZmVseShyYXdWYWx1ZSwgcGFyc2VyLCBlbmNvZGVyKSB7XG4gIGlmICh1dGlscy5pc1N0cmluZyhyYXdWYWx1ZSkpIHtcbiAgICB0cnkge1xuICAgICAgKHBhcnNlciB8fCBKU09OLnBhcnNlKShyYXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdXRpbHMudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoZW5jb2RlciB8fCBKU09OLnN0cmluZ2lmeSkocmF3VmFsdWUpO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG5cbiAgdHJhbnNpdGlvbmFsOiB0cmFuc2l0aW9uYWxEZWZhdWx0cyxcblxuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICB2YXIgaXNPYmplY3RQYXlsb2FkID0gdXRpbHMuaXNPYmplY3QoZGF0YSk7XG4gICAgdmFyIGNvbnRlbnRUeXBlID0gaGVhZGVycyAmJiBoZWFkZXJzWydDb250ZW50LVR5cGUnXTtcblxuICAgIHZhciBpc0ZpbGVMaXN0O1xuXG4gICAgaWYgKChpc0ZpbGVMaXN0ID0gdXRpbHMuaXNGaWxlTGlzdChkYXRhKSkgfHwgKGlzT2JqZWN0UGF5bG9hZCAmJiBjb250ZW50VHlwZSA9PT0gJ211bHRpcGFydC9mb3JtLWRhdGEnKSkge1xuICAgICAgdmFyIF9Gb3JtRGF0YSA9IHRoaXMuZW52ICYmIHRoaXMuZW52LkZvcm1EYXRhO1xuICAgICAgcmV0dXJuIHRvRm9ybURhdGEoaXNGaWxlTGlzdCA/IHsnZmlsZXNbXSc6IGRhdGF9IDogZGF0YSwgX0Zvcm1EYXRhICYmIG5ldyBfRm9ybURhdGEoKSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdFBheWxvYWQgfHwgY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9qc29uJykge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICB2YXIgdHJhbnNpdGlvbmFsID0gdGhpcy50cmFuc2l0aW9uYWwgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIHZhciBzaWxlbnRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuc2lsZW50SlNPTlBhcnNpbmc7XG4gICAgdmFyIGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICB2YXIgc3RyaWN0SlNPTlBhcnNpbmcgPSAhc2lsZW50SlNPTlBhcnNpbmcgJiYgdGhpcy5yZXNwb25zZVR5cGUgPT09ICdqc29uJztcblxuICAgIGlmIChzdHJpY3RKU09OUGFyc2luZyB8fCAoZm9yY2VkSlNPTlBhcnNpbmcgJiYgdXRpbHMuaXNTdHJpbmcoZGF0YSkgJiYgZGF0YS5sZW5ndGgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgdGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIGVudjoge1xuICAgIEZvcm1EYXRhOiByZXF1aXJlKCcuL2Vudi9Gb3JtRGF0YScpXG4gIH0sXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcblxuICBoZWFkZXJzOiB7XG4gICAgY29tbW9uOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgICB9XG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgdmFyIGNvbnRleHQgPSB0aGlzIHx8IGRlZmF1bHRzO1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbi5jYWxsKGNvbnRleHQsIGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIENhbmNlbGVkRXJyb3IgPSByZXF1aXJlKCcuLi9jYW5jZWwvQ2FuY2VsZWRFcnJvcicpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxuXG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgIGNvbmZpZyxcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YS5jYWxsKFxuICAgICAgY29uZmlnLFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKHByb3ApIHtcbiAgICBpZiAocHJvcCBpbiBjb25maWcyKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtZXJnZU1hcCA9IHtcbiAgICAndXJsJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnbWV0aG9kJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnZGF0YSc6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgJ2Jhc2VVUkwnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc2Zvcm1SZXF1ZXN0JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndHJhbnNmb3JtUmVzcG9uc2UnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdwYXJhbXNTZXJpYWxpemVyJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndGltZW91dCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RpbWVvdXRNZXNzYWdlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnd2l0aENyZWRlbnRpYWxzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnYWRhcHRlcic6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3Jlc3BvbnNlVHlwZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3hzcmZDb29raWVOYW1lJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAneHNyZkhlYWRlck5hbWUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdvblVwbG9hZFByb2dyZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnb25Eb3dubG9hZFByb2dyZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnZGVjb21wcmVzcyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdtYXhCb2R5TGVuZ3RoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnYmVmb3JlUmVkaXJlY3QnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc3BvcnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwQWdlbnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwc0FnZW50JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnY2FuY2VsVG9rZW4nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdzb2NrZXRQYXRoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VFbmNvZGluZyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJzogbWVyZ2VEaXJlY3RLZXlzXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChPYmplY3Qua2V5cyhjb25maWcxKS5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIHZhciBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgdmFyIGNvbmZpZ1ZhbHVlID0gbWVyZ2UocHJvcCk7XG4gICAgKHV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZ1ZhbHVlKSAmJiBtZXJnZSAhPT0gbWVyZ2VEaXJlY3RLZXlzKSB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4yNy4yXCJcbn07IiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFZFUlNJT04gPSByZXF1aXJlKCcuLi9lbnYvZGF0YScpLnZlcnNpb247XG52YXIgQXhpb3NFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvQXhpb3NFcnJvcicpO1xuXG52YXIgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goZnVuY3Rpb24odHlwZSwgaSkge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxudmFyIGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3B0LCBvcHRzKSB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSksXG4gICAgICAgIEF4aW9zRXJyb3IuRVJSX0RFUFJFQ0FURURcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgIWRlcHJlY2F0ZWRXYXJuaW5nc1tvcHRdKSB7XG4gICAgICBkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSA9IHRydWU7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBmb3JtYXRNZXNzYWdlKFxuICAgICAgICAgIG9wdCxcbiAgICAgICAgICAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgc2luY2UgdicgKyB2ZXJzaW9uICsgJyBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZWFyIGZ1dHVyZSdcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9yID8gdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdHMpIDogdHJ1ZTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXNzZXJ0IG9iamVjdCdzIHByb3BlcnRpZXMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICovXG5cbmZ1bmN0aW9uIGFzc2VydE9wdGlvbnMob3B0aW9ucywgc2NoZW1hLCBhbGxvd1Vua25vd24pIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0JywgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gIH1cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICB2YXIgb3B0ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9uICcgKyBvcHQgKyAnIG11c3QgYmUgJyArIHJlc3VsdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFsbG93VW5rbm93biAhPT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1Vua25vd24gb3B0aW9uICcgKyBvcHQsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04pO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXNzZXJ0T3B0aW9uczogYXNzZXJ0T3B0aW9ucyxcbiAgdmFsaWRhdG9yczogdmFsaWRhdG9yc1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4vYnVpbGRGdWxsUGF0aCcpO1xudmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvdmFsaWRhdG9yJyk7XG5cbnZhciB2YWxpZGF0b3JzID0gdmFsaWRhdG9yLnZhbGlkYXRvcnM7XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnT3JVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWdPclVybCB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWw7XG5cbiAgaWYgKHRyYW5zaXRpb25hbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICBzaWxlbnRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgIGZvcmNlZEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKVxuICAgIH0sIGZhbHNlKTtcbiAgfVxuXG4gIC8vIGZpbHRlciBvdXQgc2tpcHBlZCBpbnRlcmNlcHRvcnNcbiAgdmFyIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHZhciBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSB0cnVlO1xuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBpZiAodHlwZW9mIGludGVyY2VwdG9yLnJ1bldoZW4gPT09ICdmdW5jdGlvbicgJiYgaW50ZXJjZXB0b3IucnVuV2hlbihjb25maWcpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcblxuICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdmFyIHByb21pc2U7XG5cbiAgaWYgKCFzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMpIHtcbiAgICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuXG4gICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoY2hhaW4sIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluKTtcbiAgICBjaGFpbiA9IGNoYWluLmNvbmNhdChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuXG4gICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuXG4gIHZhciBuZXdDb25maWcgPSBjb25maWc7XG4gIHdoaWxlIChyZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICB2YXIgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpO1xuICAgIHZhciBvblJlamVjdGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB0cnkge1xuICAgICAgbmV3Q29uZmlnID0gb25GdWxmaWxsZWQobmV3Q29uZmlnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgb25SZWplY3RlZChlcnJvcik7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIHByb21pc2UgPSBkaXNwYXRjaFJlcXVlc3QobmV3Q29uZmlnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG5cbiAgd2hpbGUgKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5zaGlmdCgpLCByZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHZhciBmdWxsUGF0aCA9IGJ1aWxkRnVsbFBhdGgoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICByZXR1cm4gYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IChjb25maWcgfHwge30pLmRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUVFBNZXRob2QoaXNGb3JtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGh0dHBNZXRob2QodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiBpc0Zvcm0gPyB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9IDoge30sXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KSk7XG4gICAgfTtcbiAgfVxuXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZ2VuZXJhdGVIVFRQTWV0aG9kKCk7XG5cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZCArICdGb3JtJ10gPSBnZW5lcmF0ZUhUVFBNZXRob2QodHJ1ZSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWxlZEVycm9yID0gcmVxdWlyZSgnLi9DYW5jZWxlZEVycm9yJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcblxuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbihmdW5jdGlvbihjYW5jZWwpIHtcbiAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgIHZhciBpO1xuICAgIHZhciBsID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgfVxuICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbiA9IGZ1bmN0aW9uKG9uZnVsZmlsbGVkKSB7XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsZWRFcnJvcihtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsZWRFcnJvcmAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBTdWJzY3JpYmUgdG8gdGhlIGNhbmNlbCBzaWduYWxcbiAqL1xuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IFtsaXN0ZW5lcl07XG4gIH1cbn07XG5cbi8qKlxuICogVW5zdWJzY3JpYmUgZnJvbSB0aGUgY2FuY2VsIHNpZ25hbFxuICovXG5cbkNhbmNlbFRva2VuLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGlmICghdGhpcy5fbGlzdGVuZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmRleCA9IHRoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRoaXMuX2xpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHBheWxvYWQpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsZWRFcnJvcicpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuYXhpb3MuVkVSU0lPTiA9IHJlcXVpcmUoJy4vZW52L2RhdGEnKS52ZXJzaW9uO1xuYXhpb3MudG9Gb3JtRGF0YSA9IHJlcXVpcmUoJy4vaGVscGVycy90b0Zvcm1EYXRhJyk7XG5cbi8vIEV4cG9zZSBBeGlvc0Vycm9yIGNsYXNzXG5heGlvcy5BeGlvc0Vycm9yID0gcmVxdWlyZSgnLi4vbGliL2NvcmUvQXhpb3NFcnJvcicpO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsICJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwgbnVsbCwgIlxuXG5pbXBvcnQgQ3VzdG9tZXJEZXRhaWxWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9DdXN0b21lckRldGFpbFZpZXcnO1xuXG5pbXBvcnQgSG9tZU92ZXJ2aWV3VmlldyBmcm9tICcuLi9zcmMvdmlld3MvSG9tZU92ZXJ2aWV3Vmlldyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMi0wNy0zMCAxODoxNzo1My4xODQyNDIgLTA0MDAgRURUIG09KzAuMDE1NjcwMjUxJ1xuXG5leHBvcnQge1xuXHRcblx0Q3VzdG9tZXJEZXRhaWxWaWV3LFxuXHRcblx0SG9tZU92ZXJ2aWV3Vmlldyxcblx0XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBcImlkXCI6IFwiY29tLnNhYXNiYXNlLnN0cmlwZS1hcHAtZmVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcbiAgXCJuYW1lXCI6IFwiQ1JNIEJ1ZGR5XCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtdLFxuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IG51bGxcbiAgfSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5jdXN0b21lci5kZXRhaWxcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJDdXN0b21lckRldGFpbFZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkhvbWVPdmVydmlld1ZpZXdcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhY3Rpb25zXCI6IFtdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBudWxsLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjogbnVsbFxufVxuIiwgImltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQge1xuICBCYW5uZXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250ZXh0VmlldyxcbiAgSWNvbixcbiAgSW5saW5lLFxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXROb3Rlc0ZvckN1c3RvbWVyQVBJIH0gZnJvbSBcIi4uL2FwaVwiO1xuaW1wb3J0IEFkZE5vdGVWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZE5vdGVWaWV3XCI7XG5pbXBvcnQgTm90ZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90ZXNcIjtcbmltcG9ydCB7IEFQSVJlc3BvbnNlLCBOb3RlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQnJhbmRJY29uIGZyb20gXCIuL2JyYW5kX2ljb24uc3ZnXCI7XG5cbmNvbnN0IEN1c3RvbWVyRGV0YWlsVmlldyA9ICh7XG4gIHVzZXJDb250ZXh0LFxuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBjdXN0b21lcklkID0gZW52aXJvbm1lbnQ/Lm9iamVjdENvbnRleHQ/LmlkO1xuXG4gIGNvbnN0IGFnZW50SWQgPSB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCB8fCBcIlwiOyAvL3RvZG9cbiAgY29uc3QgYWdlbnROYW1lID0gdXNlckNvbnRleHQ/LmFjY291bnQubmFtZSB8fCBcIlwiOyAvL3RvZG9cblxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPE5vdGVbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvd0FkZE5vdGVWaWV3LCBzZXRTaG93QWRkTm90ZVZpZXddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0FkZE5vdGVTdWNjZXNzTWVzc2FnZSwgc2V0U2hvd0FkZE5vdGVTdWNjZXNzTWVzc2FnZV0gPVxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IHtcbiAgICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZXROb3Rlc0ZvckN1c3RvbWVyQVBJKHsgY3VzdG9tZXJJZCB9KS50aGVuKChyZXM6IEFQSVJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgIHNldE5vdGVzKHJlcy5kYXRhLm5vdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGVzKCk7XG4gIH0sIFtjdXN0b21lcklkXSk7XG5cbiAgY29uc29sZS5sb2cobm90ZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIkFsbCBOb3Rlc1wiXG4gICAgICBkZXNjcmlwdGlvbj17Y3VzdG9tZXJJZH1cbiAgICAgIGJyYW5kQ29sb3I9XCIjRjZGOEZBXCJcbiAgICAgIGJyYW5kSWNvbj17QnJhbmRJY29ufVxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgY3NzPXt7IHdpZHRoOiBcImZpbGxcIiwgYWxpZ25YOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0FkZE5vdGVWaWV3KHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ4XCIsIGdhcDogXCJzbWFsbFwiLCBhbGlnblk6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiYWRkQ2lyY2xlXCIgc2l6ZT1cInhzbWFsbFwiIC8+XG4gICAgICAgICAgICA8SW5saW5lPkFkZCBub3RlPC9JbmxpbmU+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtzaG93QWRkTm90ZVN1Y2Nlc3NNZXNzYWdlICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiBcInNtYWxsXCIgfX0+XG4gICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRTaG93QWRkTm90ZVN1Y2Nlc3NNZXNzYWdlKGZhbHNlKX1cbiAgICAgICAgICAgIHRpdGxlPVwiQWRkZWQgbmV3IG5vdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEFkZE5vdGVWaWV3XG4gICAgICAgIGlzT3Blbj17c2hvd0FkZE5vdGVWaWV3fVxuICAgICAgICBjdXN0b21lcklkPXtjdXN0b21lcklkIGFzIHN0cmluZ31cbiAgICAgICAgYWdlbnRJZD17YWdlbnRJZH1cbiAgICAgICAgb25TdWNjZXNzQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0FkZE5vdGVWaWV3KGZhbHNlKTtcbiAgICAgICAgICBzZXRTaG93QWRkTm90ZVN1Y2Nlc3NNZXNzYWdlKHRydWUpO1xuICAgICAgICAgIGdldE5vdGVzKCk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0FkZE5vdGVWaWV3KGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiB9fT5cbiAgICAgICAgPEJveCBjc3M9e3t9fT5cbiAgICAgICAgICA8SW5saW5lXG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgZm9udDogXCJoZWFkaW5nXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJzZW1pYm9sZFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nWTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBBbGwgTm90ZXNcbiAgICAgICAgICA8L0lubGluZT5cblxuICAgICAgICAgIDxOb3RlcyBub3Rlcz17bm90ZXN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRGV0YWlsVmlldztcbiIsICJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBUElSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG4vLyBjb25zdCBub3RlczogTm90ZVtdID0gW3tcbi8vICAgaWQ6IDEsXG4vLyAgIGFnZW50SWQ6IFwiYWNjX1wiLFxuLy8gICBjdXN0b21lcklkOiBcImN1c19Ma3g4QU96WjNqczJOMVwiLFxuLy8gICBtZXNzYWdlOiBcIk5lZWRzIFNTTyBhdXRoIGludGVncmF0aW9uXCIsXG4vLyAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuLy8gfSwge1xuLy8gICBpZDogMixcbi8vICAgYWdlbnRJZDogXCJhY2NfXCIsXG4vLyAgIGN1c3RvbWVySWQ6IFwiY3VzX0xrc1pXUnFBQXhhbDIyXCIsXG4vLyAgIG1lc3NhZ2U6IFwiQ2FsbCBzY2hlZHVsZWQgZm9yIEF1ZyA1dGhcIixcbi8vICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4vLyB9XVxuXG4vLyBjb25zdCBnZW5lcmF0ZVJhbmRvbUlkID0gKCk6IG51bWJlciA9PiB7XG4vLyAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTm90ZUFQSSh7IGN1c3RvbWVySWQsIG1lc3NhZ2UsIGFnZW50SWQgfTogeyBjdXN0b21lcklkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgYWdlbnRJZDogc3RyaW5nIH0pOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4vLyAgIGNvbnN0IG5ld05vdGU6IE5vdGUgPSB7IGlkOiBnZW5lcmF0ZVJhbmRvbUlkKCksIGFnZW50SWQsIGN1c3RvbWVySWQsIG1lc3NhZ2UsIGNyZWF0ZWRBdDogbmV3IERhdGUoKSB9XG4vLyAgIG5vdGVzLnB1c2gobmV3Tm90ZSlcblxuLy8gICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSB7IGVycm9yOiBmYWxzZSwgZGF0YToge30gfVxuLy8gICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxuLy8gfVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTm90ZXNBUEkoKTogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuLy8gICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSB7IGVycm9yOiBmYWxzZSwgZGF0YTogeyBub3RlcyB9IH1cbi8vICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4vLyB9XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3Rlc0ZvckN1c3RvbWVyQVBJKHsgY3VzdG9tZXJJZCB9OiB7IGN1c3RvbWVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuLy8gICBjb25zdCBub3Rlc0ZvckN1c3RvbWVyID0gbm90ZXMuZmlsdGVyKChyZWNvcmQ6IE5vdGUpID0+IHJlY29yZC5jdXN0b21lcklkID09PSBjdXN0b21lcklkKVxuLy8gICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSB7IGVycm9yOiBmYWxzZSwgZGF0YTogeyBub3Rlczogbm90ZXNGb3JDdXN0b21lciB9IH1cblxuLy8gICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbi8vIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZE5vdGVBUEkoeyBjdXN0b21lcklkLCBtZXNzYWdlLCBhZ2VudElkIH06IHsgY3VzdG9tZXJJZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGFnZW50SWQ6IHN0cmluZyB9KSB7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL25vdGVcIiwgeyBhZ2VudElkLCBjdXN0b21lcklkLCBtZXNzYWdlIH0pXG5cbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxOb3Rlc0FQSSgpOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL25vdGVzXCIpXG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Tm90ZXNGb3JDdXN0b21lckFQSSh7IGN1c3RvbWVySWQgfTogeyBjdXN0b21lcklkOiBzdHJpbmcgfSk6IFByb21pc2U8QVBJUmVzcG9uc2U+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ub3Rlcy8ke2N1c3RvbWVySWR9YClcblxuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0iLCAiaW1wb3J0IHsgQnV0dG9uLCBGb2N1c1ZpZXcsIFRleHRBcmVhIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aVwiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhZGROb3RlQVBJIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xuXG5pbnRlcmZhY2UgQWRkTm90ZVZpZXdQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgY3VzdG9tZXJJZDogc3RyaW5nO1xuICBhZ2VudElkOiBzdHJpbmc7XG4gIG9uU3VjY2Vzc0FjdGlvbjogKCkgPT4gdm9pZDtcbiAgb25DYW5jZWxBY3Rpb246ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFkZE5vdGVWaWV3OiBGdW5jdGlvbkNvbXBvbmVudDxBZGROb3RlVmlld1Byb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgY3VzdG9tZXJJZCxcbiAgYWdlbnRJZCxcbiAgb25TdWNjZXNzQWN0aW9uLFxuICBvbkNhbmNlbEFjdGlvbixcbn06IEFkZE5vdGVWaWV3UHJvcHMpID0+IHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9jdXNWaWV3XG4gICAgICAgIHRpdGxlPVwiQWRkIGEgbmV3IG5vdGVcIlxuICAgICAgICBzaG93bj17aXNPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgb25DYW5jZWxBY3Rpb24oKTtcbiAgICAgICAgfX1cbiAgICAgICAgcHJpbWFyeUFjdGlvbj17XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25QcmVzcz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBhd2FpdCBhZGROb3RlQVBJKHsgY3VzdG9tZXJJZCwgYWdlbnRJZCwgbWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICAgICAgICAgICAgb25TdWNjZXNzQWN0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNhdmUgbm90ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIHNlY29uZGFyeUFjdGlvbj17XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNhbmNlbEFjdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9va2luZyBmb3IgbW9yZSBlbnRlcnByaXNlIGZlYXR1cmVzIGxpa2UgU0VPLi4uXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZvY3VzVmlldz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE5vdGVWaWV3O1xuIiwgImltcG9ydCB7IEJveCwgSW5saW5lLCBMaW5rLCBMaXN0LCBMaXN0SXRlbSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB7IE5vdGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIE5vdGVzUHJvcHMge1xuICBub3RlczogTm90ZVtdIHwgbnVsbDtcbn1cblxuY29uc3QgTm90ZXMgPSAoeyBub3RlcyB9OiBOb3Rlc1Byb3BzKSA9PiB7XG4gIGlmICghbm90ZXMgfHwgbm90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogXCJtZWRpdW1cIiB9fT5cbiAgICAgICAgPElubGluZT5ObyBub3RlcyBmb3VuZDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiBcIm1lZGl1bVwiIH19PlxuICAgICAge25vdGVzLm1hcCgobm90ZTogTm90ZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpc3Qga2V5PXtgbWVzc2FnZXNfJHtpfWB9IGFyaWEtbGFiZWw9XCJMaXN0IG9mIHJlY2VudCBtZXNzYWdlc1wiPlxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIHRpdGxlPXs8Qm94Pk5vdGUgI3tub3RlLmlkfTwvQm94Pn1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9e1xuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmU+e25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIil9PC9JbmxpbmU+XG4gICAgICAgICAgICAgICAgICA8SW5saW5lPntub3RlLm1lc3NhZ2V9PC9JbmxpbmU+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblJpZ2h0OiBcInhzbWFsbFwiIH19PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vdGVzdC9jdXN0b21lcnMvJHtub3RlLmN1c3RvbWVySWR9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBcdTIxOTJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVzO1xuIiwgImltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyBCb3gsIENvbnRleHRWaWV3LCBJbmxpbmUgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBbGxOb3Rlc0FQSSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCBOb3RlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3Rlc1wiO1xuaW1wb3J0IHsgQVBJUmVzcG9uc2UsIE5vdGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgSG9tZU92ZXJ2aWV3VmlldyA9ICh7XG4gIHVzZXJDb250ZXh0LFxuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBhZ2VudE5hbWUgPSB1c2VyQ29udGV4dD8uYWNjb3VudC5uYW1lIGFzIHN0cmluZztcblxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPE5vdGVbXSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGdldEFsbE5vdGVzID0gKCkgPT4ge1xuICAgIGdldEFsbE5vdGVzQVBJKCkudGhlbigocmVzOiBBUElSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXMuZGF0YS5lcnJvcikge1xuICAgICAgICBzZXROb3RlcyhyZXMuZGF0YS5ub3Rlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxOb3RlcygpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKG5vdGVzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiT3ZlcnZpZXdcIj5cbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiIH19PlxuICAgICAgICAgIDxJbmxpbmVcbiAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwic2VtaWJvbGRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBBbGwgTm90ZXNcbiAgICAgICAgICA8L0lubGluZT5cblxuICAgICAgICAgIDxOb3RlcyBub3Rlcz17bm90ZXN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVPdmVydmlld1ZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7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TUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsaUJBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUVBLGFBQUEsZUFBQSxTQUFBLGVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUVBLGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFlBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFdBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxLQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLGtCQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFHQSxhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFLQSxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFFQSxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxTQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxlQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBSUEsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7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
