import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  history
} from "./chunk-JOJIRBNH.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-UAMNIRXN.mjs";

// style-handler-namespace:/Users/morecode/Desktop/projects/ice-app/src/pages/index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:/Users/morecode/Desktop/projects/ice-app/src/pages/index.module.css"(exports, module) {
    module.exports = {
      "app": "app--_BV2jd92",
      "link": "link--GXZrnhvn",
      "button": "button--uajBsZ3U"
    };
  }
});

// src/pages/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
import { useState } from "react";

// src/assets/logo.jpeg
var logo_default = "/assets/logo.b9b4fb0e.jpeg";

// src/pages/index.tsx
var import_index_module = __toESM(require_index_module());
function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => {
    setCount((c) => c + 1);
  };
  const jumpToAnotherPage = () => {
    var _a;
    (_a = history) == null ? void 0 : _a.push("/ice-admin/404/");
  };
  const jumpToBlog = () => {
    var _a;
    (_a = history) == null ? void 0 : _a.push("/ice-admin/blog/");
  };
  return /* @__PURE__ */ _jsxDEV("div", {
    className: import_index_module.default.app,
    children: [
      /* @__PURE__ */ _jsxDEV("header", {
        children: [
          /* @__PURE__ */ _jsxDEV("img", {
            src: logo_default,
            alt: "logo"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("p", {
            children: "Hello ice.js 3"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("main", {
        children: [
          /* @__PURE__ */ _jsxDEV("button", {
            className: import_index_module.default.button,
            type: "button",
            onClick: updateCount,
            children: [
              "\u{1F44D}\u{1F3FB} ",
              count
            ]
          }, void 0, true, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("p", {
            children: [
              /* @__PURE__ */ _jsxDEV("a", {
                onClick: jumpToAnotherPage,
                rel: "noopener noreferrer",
                className: import_index_module.default.link,
                children: "\u9875\u9762\u8DF3\u8F6C"
              }, void 0, false, {
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
                lineNumber: 32,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ _jsxDEV("a", {
                onClick: jumpToBlog,
                rel: "noopener noreferrer",
                className: import_index_module.default.link,
                children: "blog"
              }, void 0, false, {
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
                lineNumber: 39,
                columnNumber: 11
              }, this),
              " | ",
              /* @__PURE__ */ _jsxDEV("a", {
                href: "https://v3.ice.work/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: import_index_module.default.link,
                children: "\u5B66\u4E60 ice.js"
              }, void 0, false, {
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
                lineNumber: 47,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=pages-PNHUWTW7.mjs.map
