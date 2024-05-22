import { createRequire } from 'module';const require = createRequire(import.meta.url);

// src/pages/formily/VerifyCode.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
import { useState } from "react";
import { Input, Button } from "../../node_modules/.cache/deps/antd.mjs";
var VerifyCode = ({ value, onChange, readyPost, phoneNumber, ...props }) => {
  const [lastTime, setLastTime] = useState(0);
  const counting = (time = 20) => {
    if (time < 0)
      return;
    setLastTime(time);
    setTimeout(() => {
      counting(time - 1);
    }, 1e3);
  };
  return /* @__PURE__ */ _jsxDEV("div", {
    style: {
      display: "inline-flex",
      width: "100%",
      alignItems: "center"
    },
    children: [
      /* @__PURE__ */ _jsxDEV(Input, {
        ...props,
        style: {
          marginRight: 5,
          ...props.style
        },
        value,
        onChange
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/VerifyCode.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ _jsxDEV("div", {
        style: {
          flexShrink: 0,
          color: "#999",
          width: 100,
          height: 35,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          lastTime === 0 && /* @__PURE__ */ _jsxDEV(Button, {
            disabled: !readyPost,
            block: true,
            onClick: () => {
              if (phoneNumber) {
                console.log(`post code by phone number ${phoneNumber}`);
              }
              counting();
            },
            children: "\u53D1\u9001\u9A8C\u8BC1\u7801"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/VerifyCode.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, void 0),
          lastTime > 0 && /* @__PURE__ */ _jsxDEV("span", {
            children: [
              "\u5269\u4F59",
              lastTime,
              "\u79D2"
            ]
          }, void 0, true, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/VerifyCode.tsx",
            lineNumber: 59,
            columnNumber: 28
          }, void 0)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/VerifyCode.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, void 0)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/VerifyCode.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, void 0);
};

export {
  VerifyCode
};
//# sourceMappingURL=chunk-PTWVN6YC.mjs.map
