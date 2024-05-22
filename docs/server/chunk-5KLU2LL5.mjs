import { createRequire } from 'module';const require = createRequire(import.meta.url);

// .ice/type-defines.ts
function definePageConfig(pageConfig) {
  if (typeof pageConfig !== "function") {
    return () => pageConfig;
  } else {
    return pageConfig;
  }
}

// .ice/index.ts
import { Link, NavLink, Outlet, useParams, useSearchParams, useLocation, useData, useConfig, useNavigate, useNavigation, useRevalidator } from "@ice/runtime/router";
import { defineAppConfig, useAppData, history, useActive, KeepAliveOutlet, useMounted, ClientOnly, withSuspense, useSuspenseData, usePublicAppContext as useAppContext, Await, usePageLifecycle, unstable_useDocumentData, dynamic, Meta, Title, Links, Scripts, FirstChunkCache, Data, Main, usePageAssets } from "@ice/runtime";
import { defineDataLoader, defineServerDataLoader, defineStaticDataLoader } from "@ice/runtime/data-loader";
import { withAuth, useAuth } from "../../node_modules/.cache/deps/@ice_plugin-auth_runtime.mjs";

export {
  definePageConfig,
  Link,
  defineAppConfig,
  history,
  Meta,
  Title,
  Links,
  Scripts,
  Main,
  useAuth
};
//# sourceMappingURL=chunk-5KLU2LL5.mjs.map
