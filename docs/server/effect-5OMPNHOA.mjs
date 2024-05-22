import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-UAMNIRXN.mjs";

// src/pages/effect/index.tsx
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "@ice/runtime/react/jsx-dev-runtime";
import { Button, Modal } from "../../node_modules/.cache/deps/antd.mjs";
import { useEffect, useState } from "react";
var GlobalCount = {
  value: 1
};
var EffectDemo = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(() => 10);
  const onHidden = () => {
    setShow(false);
  };
  const onShow = () => {
    setShow(true);
  };
  const update = () => {
    setCount((val) => {
      return val + 1;
    });
  };
  return /* @__PURE__ */ _jsxDEV("div", {
    children: [
      /* @__PURE__ */ _jsxDEV("div", {
        children: "effect"
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ _jsxDEV(CountClick, {
        open: show,
        onClose: onHidden
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ _jsxDEV(Button, {
        type: "primary",
        onClick: onShow,
        children: "show"
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ _jsxDEV(Button, {
        type: "primary",
        onClick: update,
        children: "update parent"
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, void 0)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, void 0);
};
var CountClick = (props) => {
  const { open, onClose } = props;
  const [count, setCount] = useState(0);
  console.log("child render");
  useEffect(() => {
    console.log("CountClick mounted");
    return () => {
      console.log("unmount");
    };
  }, []);
  const addCount = () => {
    GlobalCount.value += 1;
    setCount(GlobalCount.value);
  };
  return /* @__PURE__ */ _jsxDEV(Modal, {
    open,
    width: 600,
    onCancel: onClose,
    children: [
      /* @__PURE__ */ _jsxDEV("div", {
        onClick: addCount,
        children: [
          "click",
          GlobalCount.value
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, void 0),
      ";",
      /* @__PURE__ */ _jsxDEV(ModalChild, {}, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, void 0)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/effect/index.tsx",
    lineNumber: 53,
    columnNumber: 11
  }, void 0);
};
var ModalChild = () => {
  useEffect(() => {
    return () => {
      console.log("ModalChild destoryed");
    };
  }, []);
  return /* @__PURE__ */ _jsxDEV(_Fragment, {
    children: "child"
  }, void 0, false);
};
var effect_default = EffectDemo;
export {
  effect_default as default
};
//# sourceMappingURL=effect-5OMPNHOA.mjs.map
