import { createRequire } from 'module';const require = createRequire(import.meta.url);

// .ice/index.ts
import { Link, Outlet, useParams, useSearchParams, useLocation, useNavigate } from "@ice/runtime/router";
import { defineAppConfig, useAppData, useData, useConfig, Meta, Title, Links, Scripts, Data, Main, history, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime";
import __ice__cjsImport3__ice_pluginAuth_runtime from "../../node_modules/.cache/deps/@ice_plugin-auth_runtime.js";
var withAuth = __ice__cjsImport3__ice_pluginAuth_runtime["withAuth"];
var useAuth = __ice__cjsImport3__ice_pluginAuth_runtime["useAuth"];
function definePageConfig(pageConfig) {
  return pageConfig;
}

export {
  Link,
  defineAppConfig,
  Meta,
  Title,
  Links,
  Scripts,
  Main,
  history,
  useAuth,
  definePageConfig
};
//# sourceMappingURL=chunk-JOJIRBNH.mjs.map
