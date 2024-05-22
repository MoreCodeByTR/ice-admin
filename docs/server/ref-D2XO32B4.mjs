import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-UAMNIRXN.mjs";

// src/pages/ref/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
import { Button } from "../../node_modules/.cache/deps/antd.mjs";
import { useRef } from "react";
console.log(11111);
var RefDemo = () => {
  const inputRef = useRef(null);
  return /* @__PURE__ */ _jsxDEV("div", {
    children: [
      /* @__PURE__ */ _jsxDEV("input", {
        ref: inputRef,
        onChange: () => {
          console.log(inputRef.current.value);
        }
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/ref/index.tsx",
        lineNumber: 9,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ _jsxDEV(Button, {
        onClick: () => {
          console.time();
          inputRef.current.focus();
          console.timeEnd();
        },
        children: "focus"
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/ref/index.tsx",
        lineNumber: 15,
        columnNumber: 5
      }, void 0)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/ref/index.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, void 0);
};
var ref_default = RefDemo;
export {
  ref_default as default
};
//# sourceMappingURL=ref-D2XO32B4.mjs.map
