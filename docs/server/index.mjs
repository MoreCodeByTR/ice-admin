import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  Links,
  Main,
  Meta,
  Scripts,
  Title,
  defineAppConfig
} from "./chunk-5KLU2LL5.mjs";
import {
  __export
} from "./chunk-UAMNIRXN.mjs";

// .ice/env.server.ts
process.env.ICE_CORE_MODE = "development";
process.env.ICE_CORE_ROUTER = "true";
process.env.ICE_CORE_ERROR_BOUNDARY = "false";
process.env.ICE_CORE_INITIAL_DATA = "true";
process.env.ICE_CORE_DEV_PORT = "undefined";
process.env.ICE_CORE_REMOVE_ROUTES_CONFIG = "false";
process.env.ICE_CORE_REMOVE_DATA_LOADER = "false";

// .ice/entry.server.ts
import * as runtime from "@ice/runtime/server";

// .ice/runtime-modules.ts
import module0 from "../../node_modules/.cache/deps/@ice_plugin-auth_runtime.mjs";
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
import { defineAuthConfig } from "../../node_modules/.cache/deps/@ice_plugin-auth_types.mjs";
var app_default = defineAppConfig(() => ({
  // Set your configs here.
  router: {
    basename: "/ice-admin/"
  }
}));
var authConfig = defineAuthConfig(() => {
  return {
    initialAuth: {
      admin: true
    }
  };
});

// src/document.tsx
import { jsxDEV as _jsxDEV } from "@ice/runtime/react/jsx-dev-runtime";
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
var virtual_assets_manifest_default = { publicPath: "/", entries: { main: ["js/framework.js", "js/vendors-node_modules_ice_bundles_compiled_pmmmwh_react-refresh-webpack-plugin_lib_runtime_Ref-7d0e67.js", "css/main.css", "js/main.js"] }, pages: { "404-index": ["css/p_404-index.css", "js/p_404-index.js"], "formily-verifycode": ["js/vendors-node_modules_antd_es_index_js.js", "js/p_formily-verifycode.js"], "formily-index": ["js/vendors-node_modules_antd_es_index_js.js", "js/vendors-node_modules_formily_antd-v5_esm_index_js-node_modules_swc_helpers_esm__object_withou-1c1a84.js", "js/p_formily-index.js"], "effect-index": ["js/vendors-node_modules_antd_es_index_js.js", "js/p_effect-index.js"], "three-index": ["js/fb7d5399.js", "js/p_three-index.js"], "blog-index": ["js/p_blog-index.js"], "ref-index": ["js/vendors-node_modules_antd_es_index_js.js", "js/p_ref-index.js"], index: ["css/p_index.css", "js/p_index.js"] }, assets: { "src/assets/logo.jpeg": "b9b4fb0e" } };

// .ice/routes.tsx
import { jsxDEV as _jsxDEV2 } from "@ice/runtime/react/jsx-dev-runtime";
import { createRouteLoader, WrapRouteComponent, RouteErrorComponent } from "@ice/runtime";
var createRoutes = ({ requestContext, renderMode }) => [
  {
    path: "404",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_404-index" */
        "./404-ECEQ5NYF.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "404",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "404",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 26,
      columnNumber: 19
    }, void 0),
    componentName: "404-index",
    index: true,
    id: "404",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "formily/VerifyCode",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_formily-verifycode" */
        "./VerifyCode-2WLBZNRU.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "formily/VerifyCode",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "formily/VerifyCode",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 51,
      columnNumber: 19
    }, void 0),
    componentName: "formily-verifycode",
    index: void 0,
    id: "formily/VerifyCode",
    exact: true,
    exports: [
      "VerifyCode"
    ]
  },
  {
    path: "formily",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_formily-index" */
        "./formily-ESERNSMS.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "formily",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "formily",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 76,
      columnNumber: 19
    }, void 0),
    componentName: "formily-index",
    index: true,
    id: "formily",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "effect",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_effect-index" */
        "./effect-5OMPNHOA.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "effect",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "effect",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 101,
      columnNumber: 19
    }, void 0),
    componentName: "effect-index",
    index: true,
    id: "effect",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "three",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_three-index" */
        "./three-6FGB6IPS.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "three",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "three",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 126,
      columnNumber: 19
    }, void 0),
    componentName: "three-index",
    index: true,
    id: "three",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "blog",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_blog-index" */
        "./blog-LFSUERAU.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "blog",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "blog",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 151,
      columnNumber: 19
    }, void 0),
    componentName: "blog-index",
    index: true,
    id: "blog",
    exact: true,
    exports: [
      "default",
      "pageConfig"
    ]
  },
  {
    path: "ref",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_ref-index" */
        "./ref-D2XO32B4.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "ref",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "ref",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 176,
      columnNumber: 19
    }, void 0),
    componentName: "ref-index",
    index: true,
    id: "ref",
    exact: true,
    exports: [
      "default"
    ]
  },
  {
    path: "",
    async lazy() {
      const componentModule = await import(
        /* webpackChunkName: "p_index" */
        "./pages-DAUUCY5M.mjs"
      );
      return {
        ...componentModule,
        Component: () => WrapRouteComponent({
          routeId: "/",
          isLayout: false,
          routeExports: componentModule
        }),
        loader: createRouteLoader({
          routeId: "/",
          requestContext,
          renderMode,
          module: componentModule
        })
      };
    },
    errorElement: /* @__PURE__ */ _jsxDEV2(RouteErrorComponent, {}, void 0, false, {
      fileName: "/Users/morecode/Desktop/projects/ice-app/.ice/routes.tsx",
      lineNumber: 201,
      columnNumber: 19
    }, void 0),
    componentName: "index",
    index: true,
    id: "/",
    exact: true,
    exports: [
      "default"
    ]
  }
];
var routes_default = createRoutes;

// .ice/routes-config.bundle.mjs
function definePageConfig(pageConfig2) {
  if (typeof pageConfig2 !== "function") {
    return () => pageConfig2;
  } else {
    return pageConfig2;
  }
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
  "blog": pageConfig
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
  return runtime.renderToResponse(requestContext, mergedOptions);
}
function mergeOptions(options) {
  const { renderMode = "SSR", basename, publicPath } = options;
  if (publicPath) {
    virtual_assets_manifest_default.publicPath = publicPath;
  }
  return {
    ...options,
    app: app_exports,
    assetsManifest: virtual_assets_manifest_default,
    createRoutes: routes_default,
    runtimeModules,
    documentDataLoader: void 0,
    Document,
    basename: basename || getRouterBasename(),
    renderMode,
    routesConfig: routes_config_default,
    runtimeOptions: {}
  };
}
export {
  renderToHTML2 as renderToHTML,
  renderToResponse2 as renderToResponse
};
//# sourceMappingURL=index.mjs.map
