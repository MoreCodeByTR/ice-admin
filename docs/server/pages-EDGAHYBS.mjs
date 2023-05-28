import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  history
} from "./chunk-JOJIRBNH.mjs";
import {
  __commonJS,
  __toESM
} from "./chunk-UAMNIRXN.mjs";

// style-handler-namespace:/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.module.css"(exports, module) {
    module.exports = {
      "app": "app--v_RBfH2U",
      "link": "link--QxCvGvWf",
      "button": "button--o8efZyyR"
    };
  }
});

// src/pages/index.tsx
import { jsxDEV as _jsxDEV2 } from "@ice/runtime/jsx-dev-runtime";
import { useEffect } from "react";

// src/components/HomePage/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
import { useState } from "react";

// src/assets/logo.jpeg
var logo_default = "/assets/logo.b9b4fb0e.jpeg";

// src/components/HomePage/index.tsx
var import_index_module = __toESM(require_index_module());
function HomePage() {
  const [count, setCount] = useState(1);
  const [testUrl, setTestUrl] = useState("");
  const loadImg = () => {
    setTestUrl("https://avatars.githubusercontent2.com/u/51108500?s=40&v=4");
  };
  const loadScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://passport.feishu.cn/accounts/auth_login/qr/polling?_r84813=1684659748107";
    document.head.appendChild(script);
  };
  const updateCount = () => {
    loadScript();
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
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("p", {
            children: "Hello ice.js 3"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("main", {
        children: [
          testUrl && /* @__PURE__ */ _jsxDEV("img", {
            src: testUrl
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
            lineNumber: 41,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ _jsxDEV("button", {
            className: import_index_module.default.button,
            type: "button",
            onClick: updateCount,
            children: [
              "\u{1F44D}\u{1F3FB} ",
              count
            ]
          }, void 0, true, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
            lineNumber: 42,
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
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
                lineNumber: 46,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ _jsxDEV("a", {
                onClick: jumpToBlog,
                rel: "noopener noreferrer",
                className: import_index_module.default.link,
                children: "blog"
              }, void 0, false, {
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
                lineNumber: 53,
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
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
                lineNumber: 61,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/components/HomePage/index.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// src/pages/index.tsx
function Home() {
  useEffect(() => {
    window.addEventListener("error", (e) => {
      const { target } = e;
      if (!(target instanceof HTMLElement))
        return;
      if (target) {
        const { nodeName } = target;
        if (nodeName === "SCRIPT") {
          let r = confirm("\u6587\u4EF6\u52A0\u8F7D\u9519\u8BEF\uFF0C\u8BF7\u5237\u65B0\u9875\u9762");
          if (r == true) {
            console.log(e);
          }
        }
      }
    }, true);
  }, []);
  return /* @__PURE__ */ _jsxDEV2(HomePage, {}, void 0, false, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=pages-EDGAHYBS.mjs.map
