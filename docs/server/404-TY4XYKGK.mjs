import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __commonJS,
  __toESM
} from "./chunk-UAMNIRXN.mjs";

// style-handler-namespace:/Users/morecode/Desktop/projects/ice-app/src/pages/404/index.module.css
var require_index_module = __commonJS({
  "style-handler-namespace:/Users/morecode/Desktop/projects/ice-app/src/pages/404/index.module.css"(exports, module) {
    module.exports = {
      "app": "app--Y5vYJq1p",
      "link": "link--MEs1g5k_",
      "button": "button--csZaJViM"
    };
  }
});

// src/pages/404/index.tsx
var import_index_module = __toESM(require_index_module());
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
import { useState } from "react";
function Home() {
  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);
  return /* @__PURE__ */ _jsxDEV("div", {
    className: import_index_module.default.app,
    children: "404 \u9875\u9762"
  }, void 0, false, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/404/index.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
export {
  Home as default
};
//# sourceMappingURL=404-TY4XYKGK.mjs.map
