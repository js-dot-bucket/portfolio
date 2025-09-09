import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const favicon = "/client/assets/pic-DtmvVNpR.png";
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }), /* @__PURE__ */ jsx("link", {
        rel: "icon",
        type: "image/png",
        href: favicon
      }), /* @__PURE__ */ jsx("link", {
        rel: "stylesheet",
        href: "/client/assets/root-C48aqKvj.css"
      }), /* @__PURE__ */ jsx("link", {
        rel: "stylesheet",
        href: "/client/assets/home-DjtAlgMb.css"
      })]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(Update, {}), /* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
});
function Update() {
  return /* @__PURE__ */ jsx("div", {
    className: "update",
    children: /* @__PURE__ */ jsx("p", {
      children: " New Blog about Xor in any website threw new column attack just added check it out! "
    })
  });
}
function Navbar() {
  return /* @__PURE__ */ jsx("navbar", {
    children: /* @__PURE__ */ jsxs("ul", {
      children: [/* @__PURE__ */ jsx("li", {
        children: "Home"
      }), /* @__PURE__ */ jsx("li", {
        children: "Research"
      }), /* @__PURE__ */ jsx("li", {
        className: "underline",
        children: "Hire Me"
      })]
    })
  });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", {
    children: /* @__PURE__ */ jsx("p", {
      children: "*This website follows a rolling release model"
    })
  });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
const profile = "/client/assets/pic-DtmvVNpR.png";
const _index = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx("div", {
    className: "homePage",
    children: /* @__PURE__ */ jsxs("div", {
      className: "container",
      children: [/* @__PURE__ */ jsx("p", {
        className: "heroText",
        children: "~/shubham"
      }), /* @__PURE__ */ jsx("p", {
        className: "heroPara",
        children: "I’m passionate about exploring technology especially the web. I research, experiment, and break things (on purpose) to understand how they work."
      }), /* @__PURE__ */ jsx("p", {
        className: "heroPara",
        children: "This is where I document everything I learn raw insights, deep dives, and the occasional rant. If it’s tech and it sparks curiosity, you’ll find it here."
      }), /* @__PURE__ */ jsxs("div", {
        className: "columnBox",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "box1",
          children: [/* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "How to find xor in any website ..."
            }), /* @__PURE__ */ jsx("li", {
              children: "How to find xor in any website ..."
            }), /* @__PURE__ */ jsx("li", {
              children: "How to find xor in any website ..."
            }), /* @__PURE__ */ jsx("li", {
              children: "How to find xor in any website ..."
            }), /* @__PURE__ */ jsx("li", {
              children: "How to find xor in any website ..."
            })]
          }), /* @__PURE__ */ jsx("button", {
            children: "Explore more blogs → "
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "box2",
          children: [/* @__PURE__ */ jsx("div", {
            className: "placeholder"
          }), /* @__PURE__ */ jsx("div", {
            className: "bgPlaceholder",
            children: /* @__PURE__ */ jsx("img", {
              src: profile,
              height: "290px",
              alt: "profile image"
            })
          })]
        })]
      })]
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/client/assets/entry.client-DXH7VKyf.js", "imports": ["/client/assets/chunk-PVWAREVJ-BdaTYYtC.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/client/assets/root-BdkWEuL-.js", "imports": ["/client/assets/chunk-PVWAREVJ-BdaTYYtC.js"], "css": ["/client/assets/root-C48aqKvj.css", "/client/assets/home-DjtAlgMb.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/client/assets/_index-9IzXVtex.js", "imports": ["/client/assets/chunk-PVWAREVJ-BdaTYYtC.js"], "css": ["/client/assets/home-DjtAlgMb.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/client/assets/manifest-e7813706.js", "version": "e7813706", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/client/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
