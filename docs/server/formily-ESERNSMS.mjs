import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  VerifyCode
} from "./chunk-PTWVN6YC.mjs";
import "./chunk-UAMNIRXN.mjs";

// src/pages/formily/index.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
import React from "react";
import { createForm } from "../../node_modules/.cache/deps/@formily_core.mjs";
import { createSchemaField } from "../../node_modules/.cache/deps/@formily_react.mjs";
import { Form, FormItem, Input, Password, Submit } from "../../node_modules/.cache/deps/@formily_antd-v5.mjs";
import { Tabs, Card } from "../../node_modules/.cache/deps/antd.mjs";
import * as ICONS from "../../node_modules/.cache/deps/@ant-design_icons.mjs";
var normalForm = createForm({
  validateFirst: true
});
var phoneForm = createForm({
  validateFirst: true
});
var SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
    VerifyCode
  },
  scope: {
    icon(name) {
      return /* @__PURE__ */ React.createElement(ICONS[name]);
    }
  }
});
var normalSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      title: "\u7528\u6237\u540D",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        prefix: "{{icon('UserOutlined')}}"
      }
    },
    password: {
      type: "string",
      title: "\u5BC6\u7801",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "Password",
      "x-component-props": {
        prefix: "{{icon('LockOutlined')}}"
      }
    }
  }
};
var phoneSchema = {
  type: "object",
  properties: {
    phone: {
      type: "string",
      title: "\u624B\u673A\u53F7",
      required: true,
      "x-validator": "phone",
      "x-decorator": "FormItem",
      "x-component": "Input",
      "x-component-props": {
        prefix: "{{icon('PhoneOutlined')}}"
      }
    },
    verifyCode: {
      type: "string",
      title: "\u9A8C\u8BC1\u7801",
      required: true,
      "x-decorator": "FormItem",
      "x-component": "VerifyCode",
      "x-component-props": {
        prefix: "{{icon('LockOutlined')}}"
      },
      "x-reactions": [
        {
          dependencies: [
            ".phone#value",
            ".phone#valid"
          ],
          fulfill: {
            state: {
              "component[1].readyPost": "{{$deps[0] && $deps[1]}}",
              "component[1].phoneNumber": "{{$deps[0]}}"
            }
          }
        }
      ]
    }
  }
};
var formily_default = () => {
  return /* @__PURE__ */ _jsxDEV("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      background: "#eee",
      padding: "40px 0"
    },
    children: /* @__PURE__ */ _jsxDEV(Card, {
      style: {
        width: 400
      },
      children: [
        /* @__PURE__ */ _jsxDEV(Tabs, {
          style: {
            overflow: "visible",
            marginTop: -10
          },
          children: [
            /* @__PURE__ */ _jsxDEV(Tabs.TabPane, {
              tab: "\u8D26\u5BC6\u767B\u5F55",
              children: /* @__PURE__ */ _jsxDEV(Form, {
                form: normalForm,
                layout: "vertical",
                size: "large",
                onAutoSubmit: console.log,
                onAutoSubmitFailed: console.log,
                children: [
                  /* @__PURE__ */ _jsxDEV(SchemaField, {
                    schema: normalSchema
                  }, void 0, false, {
                    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
                    lineNumber: 115,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ _jsxDEV(Submit, {
                    block: true,
                    size: "large",
                    children: "\u767B\u5F55"
                  }, void 0, false, {
                    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
                    lineNumber: 116,
                    columnNumber: 15
                  }, void 0)
                ]
              }, void 0, true, {
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
                lineNumber: 108,
                columnNumber: 13
              }, void 0)
            }, "1", false, {
              fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
              lineNumber: 107,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ _jsxDEV(Tabs.TabPane, {
              tab: "\u624B\u673A\u767B\u5F55",
              children: /* @__PURE__ */ _jsxDEV(Form, {
                form: phoneForm,
                layout: "vertical",
                size: "large",
                onAutoSubmit: console.log,
                children: [
                  /* @__PURE__ */ _jsxDEV(SchemaField, {
                    schema: phoneSchema
                  }, void 0, false, {
                    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
                    lineNumber: 128,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ _jsxDEV(Submit, {
                    block: true,
                    size: "large",
                    children: "\u767B\u5F55"
                  }, void 0, false, {
                    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
                    lineNumber: 129,
                    columnNumber: 15
                  }, void 0)
                ]
              }, void 0, true, {
                fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
                lineNumber: 122,
                columnNumber: 13
              }, void 0)
            }, "2", false, {
              fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
              lineNumber: 121,
              columnNumber: 11
            }, void 0)
          ]
        }, void 0, true, {
          fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ _jsxDEV("div", {
          style: {
            display: "flex",
            justifyContent: "space-between"
          },
          children: [
            /* @__PURE__ */ _jsxDEV("a", {
              href: "#\u65B0\u7528\u6237\u6CE8\u518C",
              children: "\u65B0\u7528\u6237\u6CE8\u518C"
            }, void 0, false, {
              fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
              lineNumber: 141,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ _jsxDEV("a", {
              href: "#\u5FD8\u8BB0\u5BC6\u7801",
              children: "\u5FD8\u8BB0\u5BC6\u7801?"
            }, void 0, false, {
              fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
              lineNumber: 142,
              columnNumber: 11
            }, void 0)
          ]
        }, void 0, true, {
          fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
          lineNumber: 135,
          columnNumber: 9
        }, void 0)
      ]
    }, void 0, true, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, void 0)
  }, void 0, false, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/formily/index.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, void 0);
};
export {
  formily_default as default
};
//# sourceMappingURL=formily-ESERNSMS.mjs.map
