import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-UAMNIRXN.mjs";

// src/pages/effect/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
import { useEffect, useState } from "react";
var GlobalCount = {
  value: 1
};
var EffectDemo = () => {
  console.log("11111");
  const [count, setCount] = useState(0);
  const addCount = () => {
    GlobalCount.value += 1;
    setCount(GlobalCount.value);
  };
  useEffect(() => {
    console.log(GlobalCount.value, "GlobalCount");
  }, [
    GlobalCount.value
  ]);
  return /* @__PURE__ */ _jsxDEV("div", {
    children: [
      /* @__PURE__ */ _jsxDEV("div", {
        children: "effect"
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ _jsxDEV("div", {
        onClick: addCount,
        children: [
          "click",
          GlobalCount.value
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, void 0)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, void 0);
};
var effect_default = EffectDemo;
export {
  effect_default as default
};
//# sourceMappingURL=effect-MDONU5W6.mjs.map
