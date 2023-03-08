import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Links,
  Main,
  Meta,
  Scripts,
  Title,
  defineAppConfig
} from "./chunk-JOJIRBNH.mjs";
import {
  __export
} from "./chunk-UAMNIRXN.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "development";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "3002";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// .ice/runtimeModules.ts
import __ice__cjsImport0__ice_pluginAuth_runtime from "../../node_modules/.cache/deps/@ice_plugin-auth_runtime.js";
var module0 = __ice__cjsImport0__ice_pluginAuth_runtime.__esModule ? __ice__cjsImport0__ice_pluginAuth_runtime.default : __ice__cjsImport0__ice_pluginAuth_runtime;
var statics = [];
var commons = [
  module0
];

// src/app.ts
var app_exports = {};
__export(app_exports, {
  authConfig: () => authConfig,
  default: () => app_default
});
import __ice__cjsImport1__ice_pluginAuth_types from "../../node_modules/.cache/deps/@ice_plugin-auth_types.js";
var defineAuthConfig = __ice__cjsImport1__ice_pluginAuth_types["defineAuthConfig"];
var app_default = defineAppConfig(() => ({
  // Set your configs here.
  router: {
    basename: "/ice-admin/"
  }
}));
var authConfig = defineAuthConfig((data) => {
  return {
    initialAuth: {
      admin: true
    }
  };
});

// src/document.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/jsx-dev-runtime";
function Document() {
  return /* @__PURE__ */ _jsxDEV("html", {
    children: [
      /* @__PURE__ */ _jsxDEV("head", {
        children: [
          /* @__PURE__ */ _jsxDEV("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 7,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "description",
            content: "ice.js 3 lite scaffold"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("link", {
            rel: "icon",
            href: "/ice-admin/favicon.ico"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV("title", {
            children: "ice \u540E\u53F0"
          }, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Meta, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Title, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Links, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ _jsxDEV("body", {
        children: [
          /* @__PURE__ */ _jsxDEV(Main, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Scripts, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// asset-manifest:virtual:assets-manifest.json
var virtual_assets_manifest_default = { publicPath: "/", entries: { main: ["js/framework.js", "js/vendors-node_modules_ice_bundles_compiled_pmmmwh_react-refresh-webpack-plugin_lib_runtime_Ref-da35be.js", "css/main.css", "js/main.js"] }, pages: { "blog-index": ["js/p_blog-index.js"], "404-index": ["css/p_404-index.css", "js/p_404-index.js"], index: ["css/p_index.css", "js/p_index.js"] }, assets: { "src/assets/logo.jpeg": "b9b4fb0e" } };

// .ice/routes.ts
var routes_default = [
  {
    path: "blog",
    load: () => import(
      /* webpackChunkName: "p_blog-index" */
      "./blog-AFSJJAMH.mjs"
    ),
    componentName: "blog-index",
    index: true,
    id: "blog/index",
    exact: true,
    exports: [
      "default",
      "pageConfig"
    ]
  },
  {
    path: "404",
    load: () => import(
      /* webpackChunkName: "p_404-index" */
      "./404-4H7FVKKE.mjs"
    ),
    componentName: "404-index",
    index: true,
    id: "404/index",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "",
    load: () => import(
      /* webpackChunkName: "p_index" */
      "./pages-PNHUWTW7.mjs"
    ),
    componentName: "index",
    index: true,
    id: "index",
    exact: true,
    exports: [
      "default"
    ]
  }
];

// .ice/routes-config.bundle.mjs
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig as defineAppConfig2, useAppData, useData, useConfig, Meta as Meta2, Title as Title2, Links as Links2, Scripts as Scripts2, Data, Main as Main2, history, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";
import * as React2 from "react";
import * as React from "react";
import { createContext, useContext } from "react";
var Context = createContext(null);
Context.displayName = "AuthContext";
var AuthProvider = Context.Provider;
function definePageConfig(pageConfig2) {
  return pageConfig2;
}
var pageConfig = definePageConfig(() => {
  return {
    title: "Index",
    auth: [
      "admin"
    ]
  };
});
var routes_config_default = {
  "blog/index": pageConfig
};

// .ice/entry.server.ts
var runtimeModules = {
  commons,
  statics
};
var getRouterBasename = () => {
  var _a, _b, _c;
  const appConfig = runtime.getAppConfig(app_exports);
  return (_c = (_b = (_a = appConfig == null ? void 0 : appConfig.router) == null ? void 0 : _a.basename) != null ? _b : "/") != null ? _c : "";
};
var setRuntimeEnv = (renderMode) => {
  if (renderMode === "SSG") {
    process.env.ICE_CORE_SSG = "true";
  } else {
    process.env.ICE_CORE_SSR = "true";
  }
};
async function renderToHTML2(requestContext, options = {}) {
  const { renderMode = "SSR" } = options;
  setRuntimeEnv(renderMode);
  const mergedOptions = mergeOptions(options);
  return await runtime.renderToHTML(requestContext, mergedOptions);
}
async function renderToResponse2(requestContext, options = {}) {
  const { renderMode = "SSR" } = options;
  setRuntimeEnv(renderMode);
  const mergedOptions = mergeOptions(options);
  runtime.renderToResponse(requestContext, mergedOptions);
}
function mergeOptions(options) {
  const { documentOnly, renderMode = "SSR", basename, serverOnlyBasename, routePath, disableFallback, distType } = options;
  return {
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    routes: routes_default,
    runtimeModules,
    Document,
    serverOnlyBasename,
    basename: basename || getRouterBasename(),
    documentOnly,
    renderMode,
    routePath,
    disableFallback,
    routesConfig: routes_config_default,
    distType
  };
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
//# sourceMappingURL=index.mjs.map
