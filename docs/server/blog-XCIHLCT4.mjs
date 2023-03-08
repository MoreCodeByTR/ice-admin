import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Link,
  definePageConfig,
  useAuth
} from "./chunk-JOJIRBNH.mjs";
import "./chunk-UAMNIRXN.mjs";

// src/pages/blog/index.tsx
import { jsxDEV as _jsxDEV2, Fragment as _Fragment2 } from "@ice/runtime/jsx-dev-runtime";

// src/components/CustomAuth.tsx
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "@ice/runtime/jsx-dev-runtime";
function CustomAuth({ children, authKey, fallback }) {
  const [auth] = useAuth();
  const hasAuth = auth[authKey];
  if (hasAuth) {
    return children;
  } else {
    return fallback || /* @__PURE__ */ _jsxDEV(_Fragment, {
      children: "No Auth3"
    }, void 0, false);
  }
}
var CustomAuth_default = CustomAuth;

// src/pages/blog/index.tsx
function Index() {
  const [, setAuth] = useAuth();
  return /* @__PURE__ */ _jsxDEV2(_Fragment2, {
    children: [
      /* @__PURE__ */ _jsxDEV2("ul", {
        style: {
          listStyleType: "none"
        },
        children: /* @__PURE__ */ _jsxDEV2("li", {
          children: /* @__PURE__ */ _jsxDEV2(Link, {
            to: "blog",
            children: "Blog"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/blog/index.tsx",
            lineNumber: 10,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/blog/index.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/blog/index.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV2("h1", {
        children: "Index"
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/blog/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV2(CustomAuth_default, {
        authKey: "guest",
        fallback: /* @__PURE__ */ _jsxDEV2(_Fragment2, {
          children: [
            /* @__PURE__ */ _jsxDEV2("div", {
              onClick: () => setAuth({
                guest: true
              }),
              children: "Set Guest Auth"
            }, void 0, false, void 0, void 0),
            "No Auth"
          ]
        }, void 0, true),
        children: "I am ice.js. My auth is guest."
      }, void 0, false, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/pages/blog/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true);
}
var pageConfig = definePageConfig(() => {
  return {
    title: "Index",
    auth: [
      "admin"
    ]
  };
});
export {
  Index as default,
  pageConfig
};
//# sourceMappingURL=blog-XCIHLCT4.mjs.map
