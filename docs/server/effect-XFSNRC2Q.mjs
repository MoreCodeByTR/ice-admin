import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-UAMNIRXN.mjs";

// src/pages/effect/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
import { useEffect } from "react";
var GlobalCount = 1;
var EffectDemo = () => {
  useEffect(() => {
    console.log(GlobalCount, "GlobalCount");
  }, [
    GlobalCount
  ]);
  return /* @__PURE__ */ _jsxDEV("div", {
    children: [
      "effect",
      /* @__PURE__ */ _jsxDEV(CountClick, {}, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 10,
        columnNumber: 5
      }, void 0)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, void 0);
};
var CountClick = () => {
  const addCount = () => {
    GlobalCount += 1;
  };
  return /* @__PURE__ */ _jsxDEV("div", {
    onClick: addCount,
    children: "click"
  }, void 0, false, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, void 0);
};
var effect_default = EffectDemo;
export {
  effect_default as default
};
//# sourceMappingURL=effect-XFSNRC2Q.mjs.map
