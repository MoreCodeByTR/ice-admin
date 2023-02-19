import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __export
} from "./chunk-UAMNIRXN.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "development";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "3003";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// .ice/runtimeModules.ts
var statics = [];
var commons = [];

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});

// .ice/index.ts
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig, useAppData, useData, useConfig, Meta, Title, Links, Scripts, Data, Main, history, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";

// src/app.ts
var app_default = defineAppConfig(() => ({}));

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
            href: "/favicon.ico"
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
          /* @__PURE__ */ _jsxDEV(Meta, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Title, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Links, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 13,
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
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ _jsxDEV(Scripts, {}, void 0, false, {
            fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "/Users/morecode/Desktop/projects/ice-app/src/document.tsx",
        lineNumber: 15,
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
var virtual_assets_manifest_default = { publicPath: "/", entries: { main: ["js/framework.js", "js/vendors-node_modules_ice_bundles_compiled_pmmmwh_react-refresh-webpack-plugin_lib_runtime_Ref-ac983f.js", "css/main.css", "js/main.js"] }, pages: { "404-index": ["css/p_404-index.css", "js/p_404-index.js"], index: ["css/p_index.css", "js/p_index.js"] }, assets: {} };

// .ice/routes.ts
var routes_default = [
  {
    path: "404",
    load: () => import(
      /* webpackChunkName: "p_404-index" */
      "./404-TY4XYKGK.mjs"
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
      "./pages-HKV7F6G4.mjs"
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
var routes_config_default = {};

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
