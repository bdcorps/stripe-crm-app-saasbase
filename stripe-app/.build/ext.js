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
  var notes = [{
    id: 1,
    agentId: "acc_",
    customerId: "cus_Lkx8AOzZ3js2N1",
    message: "Needs SSO auth integration",
    createdAt: new Date()
  }, {
    id: 2,
    agentId: "acc_",
    customerId: "cus_LksZWRqAAxal22",
    message: "Call scheduled for Aug 5th",
    createdAt: new Date()
  }];
  var generateRandomId = () => {
    return Math.floor(Math.random() * 100);
  };
  function addNoteAPI(_0) {
    return __async(this, arguments, function* ({ customerId, message, agentId }) {
      const newNote = { id: generateRandomId(), agentId, customerId, message, createdAt: new Date() };
      notes.push(newNote);
      const response = { error: false, data: {} };
      return Promise.resolve(response);
    });
  }
  function getAllNotesAPI() {
    return __async(this, null, function* () {
      const response = { error: false, data: { notes } };
      return Promise.resolve(response);
    });
  }
  function getNotesForCustomerAPI(_0) {
    return __async(this, arguments, function* ({ customerId }) {
      const notesForCustomer = notes.filter((record) => record.customerId === customerId);
      const response = { error: false, data: { notes: notesForCustomer } };
      return Promise.resolve(response);
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
  var Notes = ({ notes: notes2 }) => {
    if (!notes2 || notes2.length === 0) {
      return /* @__PURE__ */ React.createElement(import_ui2.Box, {
        css: { marginTop: "medium" }
      }, /* @__PURE__ */ React.createElement(import_ui2.Inline, null, "No notes found"));
    }
    return /* @__PURE__ */ React.createElement(import_ui2.Box, {
      css: { marginTop: "medium" }
    }, notes2.map((note, i) => {
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
    const [notes2, setNotes] = (0, import_react2.useState)(null);
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
    console.log(notes2);
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
      notes: notes2
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
    const [notes2, setNotes] = (0, import_react3.useState)(null);
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
      notes: notes2
    }))));
  };
  var HomeOverviewView_default = HomeOverviewView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2022-07-17 17:16:05.481579 -0400 EDT m=+0.016380876";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL0BzYWlsL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91aS9Ac3RyaXBlLWludGVybmFsL3RhaWxvci1kYXNoYm9hcmQtY29tcG9uZW50cy9pbmRleC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdWkvbWFudWFsX2NvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy92ZXJzaW9uLnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9DdXN0b21lckRldGFpbFZpZXcudHN4IiwgIi4uL3NyYy9hcGkvaW5kZXgudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvQWRkTm90ZVZpZXcvaW5kZXgudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL05vdGVzL2luZGV4LnRzeCIsICIuLi9zcmMvdmlld3MvSG9tZU92ZXJ2aWV3Vmlldy50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlxuXG5pbXBvcnQgQ3VzdG9tZXJEZXRhaWxWaWV3IGZyb20gJy4uL3NyYy92aWV3cy9DdXN0b21lckRldGFpbFZpZXcnO1xuXG5pbXBvcnQgSG9tZU92ZXJ2aWV3VmlldyBmcm9tICcuLi9zcmMvdmlld3MvSG9tZU92ZXJ2aWV3Vmlldyc7XG5cblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyMi0wNy0xNyAxNzoxNjowNS40ODE1NzkgLTA0MDAgRURUIG09KzAuMDE2MzgwODc2J1xuXG5leHBvcnQge1xuXHRcblx0Q3VzdG9tZXJEZXRhaWxWaWV3LFxuXHRcblx0SG9tZU92ZXJ2aWV3Vmlldyxcblx0XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICBcImlkXCI6IFwiY29tLnNhYXNiYXNlLnN0cmlwZS1hcHAtZmVcIixcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4wLjFcIixcbiAgXCJuYW1lXCI6IFwiQ1JNIEJ1ZGR5XCIsXG4gIFwiaWNvblwiOiBcIlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtdLFxuICBcImFwcF9iYWNrZW5kXCI6IHtcbiAgICBcIndlYmhvb2tzXCI6IG51bGxcbiAgfSxcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5jdXN0b21lci5kZXRhaWxcIixcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJDdXN0b21lckRldGFpbFZpZXdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQuaG9tZS5vdmVydmlld1wiLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkhvbWVPdmVydmlld1ZpZXdcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJhY3Rpb25zXCI6IFtdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBudWxsLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIlwiXG4gICAgfVxuICB9LFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjogbnVsbFxufVxuIiwgImltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQge1xuICBCYW5uZXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBDb250ZXh0VmlldyxcbiAgSWNvbixcbiAgSW5saW5lLFxufSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXROb3Rlc0ZvckN1c3RvbWVyQVBJIH0gZnJvbSBcIi4uL2FwaVwiO1xuaW1wb3J0IEFkZE5vdGVWaWV3IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZE5vdGVWaWV3XCI7XG5pbXBvcnQgTm90ZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90ZXNcIjtcbmltcG9ydCB7IEFQSVJlc3BvbnNlLCBOb3RlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgQnJhbmRJY29uIGZyb20gXCIuL2JyYW5kX2ljb24uc3ZnXCI7XG5cbmNvbnN0IEN1c3RvbWVyRGV0YWlsVmlldyA9ICh7XG4gIHVzZXJDb250ZXh0LFxuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBjdXN0b21lcklkID0gZW52aXJvbm1lbnQ/Lm9iamVjdENvbnRleHQ/LmlkO1xuXG4gIGNvbnN0IGFnZW50SWQgPSB1c2VyQ29udGV4dD8uYWNjb3VudC5pZCB8fCBcIlwiOyAvL3RvZG9cbiAgY29uc3QgYWdlbnROYW1lID0gdXNlckNvbnRleHQ/LmFjY291bnQubmFtZSB8fCBcIlwiOyAvL3RvZG9cblxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPE5vdGVbXSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvd0FkZE5vdGVWaWV3LCBzZXRTaG93QWRkTm90ZVZpZXddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0FkZE5vdGVTdWNjZXNzTWVzc2FnZSwgc2V0U2hvd0FkZE5vdGVTdWNjZXNzTWVzc2FnZV0gPVxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBnZXROb3RlcyA9ICgpID0+IHtcbiAgICBpZiAoIWN1c3RvbWVySWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZXROb3Rlc0ZvckN1c3RvbWVyQVBJKHsgY3VzdG9tZXJJZCB9KS50aGVuKChyZXM6IEFQSVJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlcy5kYXRhLmVycm9yKSB7XG4gICAgICAgIHNldE5vdGVzKHJlcy5kYXRhLm5vdGVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE5vdGVzKCk7XG4gIH0sIFtjdXN0b21lcklkXSk7XG5cbiAgY29uc29sZS5sb2cobm90ZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHRWaWV3XG4gICAgICB0aXRsZT1cIkFsbCBOb3Rlc1wiXG4gICAgICBkZXNjcmlwdGlvbj17Y3VzdG9tZXJJZH1cbiAgICAgIGJyYW5kQ29sb3I9XCIjRjZGOEZBXCJcbiAgICAgIGJyYW5kSWNvbj17QnJhbmRJY29ufVxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgY3NzPXt7IHdpZHRoOiBcImZpbGxcIiwgYWxpZ25YOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0FkZE5vdGVWaWV3KHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogXCJ4XCIsIGdhcDogXCJzbWFsbFwiLCBhbGlnblk6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiYWRkQ2lyY2xlXCIgc2l6ZT1cInhzbWFsbFwiIC8+XG4gICAgICAgICAgICA8SW5saW5lPkFkZCBub3RlPC9JbmxpbmU+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgfVxuICAgID5cbiAgICAgIHtzaG93QWRkTm90ZVN1Y2Nlc3NNZXNzYWdlICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luQm90dG9tOiBcInNtYWxsXCIgfX0+XG4gICAgICAgICAgPEJhbm5lclxuICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRTaG93QWRkTm90ZVN1Y2Nlc3NNZXNzYWdlKGZhbHNlKX1cbiAgICAgICAgICAgIHRpdGxlPVwiQWRkZWQgbmV3IG5vdGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEFkZE5vdGVWaWV3XG4gICAgICAgIGlzT3Blbj17c2hvd0FkZE5vdGVWaWV3fVxuICAgICAgICBjdXN0b21lcklkPXtjdXN0b21lcklkIGFzIHN0cmluZ31cbiAgICAgICAgYWdlbnRJZD17YWdlbnRJZH1cbiAgICAgICAgb25TdWNjZXNzQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0FkZE5vdGVWaWV3KGZhbHNlKTtcbiAgICAgICAgICBzZXRTaG93QWRkTm90ZVN1Y2Nlc3NNZXNzYWdlKHRydWUpO1xuICAgICAgICAgIGdldE5vdGVzKCk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0FkZE5vdGVWaWV3KGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiB9fT5cbiAgICAgICAgPEJveCBjc3M9e3t9fT5cbiAgICAgICAgICA8SW5saW5lXG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgZm9udDogXCJoZWFkaW5nXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJzZW1pYm9sZFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nWTogXCJtZWRpdW1cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBBbGwgTm90ZXNcbiAgICAgICAgICA8L0lubGluZT5cblxuICAgICAgICAgIDxOb3RlcyBub3Rlcz17bm90ZXN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Db250ZXh0Vmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRGV0YWlsVmlldztcbiIsICJpbXBvcnQgeyBBUElSZXNwb25zZSwgTm90ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBub3RlczogTm90ZVtdID0gW3tcbiAgaWQ6IDEsXG4gIGFnZW50SWQ6IFwiYWNjX1wiLFxuICBjdXN0b21lcklkOiBcImN1c19Ma3g4QU96WjNqczJOMVwiLFxuICBtZXNzYWdlOiBcIk5lZWRzIFNTTyBhdXRoIGludGVncmF0aW9uXCIsXG4gIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxufSwge1xuICBpZDogMixcbiAgYWdlbnRJZDogXCJhY2NfXCIsXG4gIGN1c3RvbWVySWQ6IFwiY3VzX0xrc1pXUnFBQXhhbDIyXCIsXG4gIG1lc3NhZ2U6IFwiQ2FsbCBzY2hlZHVsZWQgZm9yIEF1ZyA1dGhcIixcbiAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG59XVxuXG5jb25zdCBnZW5lcmF0ZVJhbmRvbUlkID0gKCk6IG51bWJlciA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTm90ZUFQSSh7IGN1c3RvbWVySWQsIG1lc3NhZ2UsIGFnZW50SWQgfTogeyBjdXN0b21lcklkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgYWdlbnRJZDogc3RyaW5nIH0pOiBQcm9taXNlPEFQSVJlc3BvbnNlPiB7XG4gIGNvbnN0IG5ld05vdGU6IE5vdGUgPSB7IGlkOiBnZW5lcmF0ZVJhbmRvbUlkKCksIGFnZW50SWQsIGN1c3RvbWVySWQsIG1lc3NhZ2UsIGNyZWF0ZWRBdDogbmV3IERhdGUoKSB9XG4gIG5vdGVzLnB1c2gobmV3Tm90ZSlcblxuICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSB7IGVycm9yOiBmYWxzZSwgZGF0YToge30gfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTm90ZXNBUEkoKTogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSB7IGVycm9yOiBmYWxzZSwgZGF0YTogeyBub3RlcyB9IH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROb3Rlc0ZvckN1c3RvbWVyQVBJKHsgY3VzdG9tZXJJZCB9OiB7IGN1c3RvbWVySWQ6IHN0cmluZyB9KTogUHJvbWlzZTxBUElSZXNwb25zZT4ge1xuICBjb25zdCBub3Rlc0ZvckN1c3RvbWVyID0gbm90ZXMuZmlsdGVyKChyZWNvcmQ6IE5vdGUpID0+IHJlY29yZC5jdXN0b21lcklkID09PSBjdXN0b21lcklkKVxuICBjb25zdCByZXNwb25zZTogQVBJUmVzcG9uc2UgPSB7IGVycm9yOiBmYWxzZSwgZGF0YTogeyBub3Rlczogbm90ZXNGb3JDdXN0b21lciB9IH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbn0iLCAiaW1wb3J0IHsgQnV0dG9uLCBGb2N1c1ZpZXcsIFRleHRBcmVhIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aVwiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhZGROb3RlQVBJIH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xuXG5pbnRlcmZhY2UgQWRkTm90ZVZpZXdQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgY3VzdG9tZXJJZDogc3RyaW5nO1xuICBhZ2VudElkOiBzdHJpbmc7XG4gIG9uU3VjY2Vzc0FjdGlvbjogKCkgPT4gdm9pZDtcbiAgb25DYW5jZWxBY3Rpb246ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFkZE5vdGVWaWV3OiBGdW5jdGlvbkNvbXBvbmVudDxBZGROb3RlVmlld1Byb3BzPiA9ICh7XG4gIGlzT3BlbixcbiAgY3VzdG9tZXJJZCxcbiAgYWdlbnRJZCxcbiAgb25TdWNjZXNzQWN0aW9uLFxuICBvbkNhbmNlbEFjdGlvbixcbn06IEFkZE5vdGVWaWV3UHJvcHMpID0+IHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9jdXNWaWV3XG4gICAgICAgIHRpdGxlPVwiQWRkIGEgbmV3IG5vdGVcIlxuICAgICAgICBzaG93bj17aXNPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgb25DYW5jZWxBY3Rpb24oKTtcbiAgICAgICAgfX1cbiAgICAgICAgcHJpbWFyeUFjdGlvbj17XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25QcmVzcz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBhd2FpdCBhZGROb3RlQVBJKHsgY3VzdG9tZXJJZCwgYWdlbnRJZCwgbWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgICAgICAgICAgICAgb25TdWNjZXNzQWN0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNhdmUgbm90ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIHNlY29uZGFyeUFjdGlvbj17XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNhbmNlbEFjdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9va2luZyBmb3IgbW9yZSBlbnRlcnByaXNlIGZlYXR1cmVzIGxpa2UgU0VPLi4uXCJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZvY3VzVmlldz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE5vdGVWaWV3O1xuIiwgImltcG9ydCB7IEJveCwgSW5saW5lLCBMaW5rLCBMaXN0LCBMaXN0SXRlbSB9IGZyb20gXCJAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWlcIjtcbmltcG9ydCB7IE5vdGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIE5vdGVzUHJvcHMge1xuICBub3RlczogTm90ZVtdIHwgbnVsbDtcbn1cblxuY29uc3QgTm90ZXMgPSAoeyBub3RlcyB9OiBOb3Rlc1Byb3BzKSA9PiB7XG4gIGlmICghbm90ZXMgfHwgbm90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogXCJtZWRpdW1cIiB9fT5cbiAgICAgICAgPElubGluZT5ObyBub3RlcyBmb3VuZDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiBcIm1lZGl1bVwiIH19PlxuICAgICAge25vdGVzLm1hcCgobm90ZTogTm90ZSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpc3Qga2V5PXtgbWVzc2FnZXNfJHtpfWB9IGFyaWEtbGFiZWw9XCJMaXN0IG9mIHJlY2VudCBtZXNzYWdlc1wiPlxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIHRpdGxlPXs8Qm94Pk5vdGUgI3tub3RlLmlkfTwvQm94Pn1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9e1xuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiBcInlcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmU+e25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIil9PC9JbmxpbmU+XG4gICAgICAgICAgICAgICAgICA8SW5saW5lPntub3RlLm1lc3NhZ2V9PC9JbmxpbmU+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblJpZ2h0OiBcInhzbWFsbFwiIH19PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vdGVzdC9jdXN0b21lcnMvJHtub3RlLmN1c3RvbWVySWR9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBcdTIxOTJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVzO1xuIiwgImltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSBcIkBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0XCI7XG5pbXBvcnQgeyBCb3gsIENvbnRleHRWaWV3LCBJbmxpbmUgfSBmcm9tIFwiQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBbGxOb3Rlc0FQSSB9IGZyb20gXCIuLi9hcGlcIjtcbmltcG9ydCBOb3RlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob3Rlc1wiO1xuaW1wb3J0IHsgQVBJUmVzcG9uc2UsIE5vdGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgSG9tZU92ZXJ2aWV3VmlldyA9ICh7XG4gIHVzZXJDb250ZXh0LFxuICBlbnZpcm9ubWVudCxcbn06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xuICBjb25zdCBhZ2VudE5hbWUgPSB1c2VyQ29udGV4dD8uYWNjb3VudC5uYW1lIGFzIHN0cmluZztcblxuICBjb25zdCBbbm90ZXMsIHNldE5vdGVzXSA9IHVzZVN0YXRlPE5vdGVbXSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGdldEFsbE5vdGVzID0gKCkgPT4ge1xuICAgIGdldEFsbE5vdGVzQVBJKCkudGhlbigocmVzOiBBUElSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXMuZGF0YS5lcnJvcikge1xuICAgICAgICBzZXROb3RlcyhyZXMuZGF0YS5ub3Rlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxOb3RlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiT3ZlcnZpZXdcIj5cbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6IFwieVwiIH19PlxuICAgICAgICAgIDxJbmxpbmVcbiAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwic2VtaWJvbGRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlldyBBbGwgTm90ZXNcbiAgICAgICAgICA8L0lubGluZT5cblxuICAgICAgICAgIDxOb3RlcyBub3Rlcz17bm90ZXN9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250ZXh0Vmlldz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVPdmVydmlld1ZpZXc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFVBQUEsVUFBQSxVQUFBO0FBRWEsY0FBQSxZQUFZLElBQUEsUUFBQSw0QkFHdkI7QUFHVyxjQUFBLGdCQUFnQixJQUFBLFFBQUEsNEJBRzNCLGlCQUFpQjtRQUNqQixlQUFlLENBQUMsU0FBUyxZQUFZLFNBQVM7O0FBSW5DLGNBQUEsUUFBUSxJQUFBLFFBQUEsNEJBQWdEO0FBR3hELGNBQUEsU0FBUyxJQUFBLFFBQUEsNEJBQ3BCLFVBQ0E7UUFDRSxlQUFlLENBQUMsZUFBZSxTQUFTOztBQUsvQixjQUFBLFNBQVMsSUFBQSxRQUFBLDRCQUNwQjtBQUlXLGNBQUEsY0FBYyxJQUFBLFFBQUEsNEJBR3pCLGVBQWU7UUFDZixlQUFlLENBQUM7O0FBSUwsY0FBQSxXQUFXLElBQUEsUUFBQSw0QkFDdEIsWUFDQTtRQUNFLGVBQWUsQ0FBQzs7QUFLUCxjQUFBLE9BQU8sSUFBQSxRQUFBLDRCQUE4QztBQUdyRCxjQUFBLFdBQVcsSUFBQSxRQUFBLDRCQUN0QjtBQUlXLGNBQUEsVUFBVSxJQUFBLFFBQUEsNEJBQ3JCO0FBSVcsY0FBQSxpQkFBaUIsSUFBQSxRQUFBLDRCQUc1QjtBQUdXLGNBQUEsT0FBTyxJQUFBLFFBQUEsNEJBQThDO0FBR3JELGNBQUEsT0FBTyxJQUFBLFFBQUEsNEJBQThDO0FBR3JELGNBQUEsV0FBVyxJQUFBLFFBQUEs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LGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxRQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFLQSxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFFQSxhQUFBLGVBQUEsU0FBQSxPQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxXQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxTQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxlQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxhQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsS0FBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxtQkFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsWUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBSUEsYUFBQSxlQUFBLFNBQUEsV0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLEtBQUE7O0FBRUYsbUJBQUEsdUNBQUE7QUFDQSxVQUFBLHNCQUFBO0FBQ0UsYUFBQSxlQUFBLFNBQUEsT0FBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFVBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxZQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsYUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFFBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtBQUFBLGVBQUEsb0JBQUE7O0FBQ0EsYUFBQSxlQUFBLFNBQUEsUUFBQSxFQUFBLFlBQUEsTUFBQSxLQUFBLFdBQUE7QUFBQSxlQUFBLG9CQUFBOztBQUNBLGFBQUEsZUFBQSxTQUFBLFNBQUEsRUFBQSxZQUFBLE1BQUEsS0FBQSxXQUFBO0FBQUEsZUFBQSxvQkFBQTs7QUFDQSxhQUFBLGVBQUEsU0FBQSxVQUFBLEVBQUEsWUFBQSxNQUFBLEtBQUEsV0FBQTtB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
