import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/components/dropDown.tsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--48703a39.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--48703a39.js"; const useState = __vite__cjsImport3_react["useState"];
const DropdownMenu = () => {
  _s();
  const [isDotsMenuOpen, setIsDotsMenuOpen] = useState(false);
  const [isHorizontalMenuOpen, setIsHorizontalMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          id: "dropdownMenuIconButton",
          onClick: () => setIsDotsMenuOpen(!isDotsMenuOpen),
          className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          type: "button",
          children: /* @__PURE__ */ jsxDEV(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 4 15",
              children: /* @__PURE__ */ jsxDEV("path", { d: "M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 24,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
              lineNumber: 17,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      ),
      isDotsMenuOpen && /* @__PURE__ */ jsxDEV(
        "div",
        {
          id: "dropdownDots",
          className: "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
          children: [
            /* @__PURE__ */ jsxDEV("ul", { className: "py-2 text-sm text-gray-700 dark:text-gray-200", children: [
              /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: "Dashboard"
                },
                void 0,
                false,
                {
                  fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                  lineNumber: 35,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 34,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: "Settings"
                },
                void 0,
                false,
                {
                  fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                  lineNumber: 43,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 42,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: "Earnings"
                },
                void 0,
                false,
                {
                  fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                  lineNumber: 51,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 50,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "py-2", children: /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#",
                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                children: "Separated link"
              },
              void 0,
              false,
              {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 60,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
              lineNumber: 59,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          id: "dropdownMenuIconHorizontalButton",
          onClick: () => setIsHorizontalMenuOpen(!isHorizontalMenuOpen),
          className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
          type: "button",
          children: /* @__PURE__ */ jsxDEV(
            "svg",
            {
              className: "w-5 h-5",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 16 3",
              children: /* @__PURE__ */ jsxDEV("path", { d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 86,
                columnNumber: 13
              }, this)
            },
            void 0,
            false,
            {
              fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
              lineNumber: 79,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
          lineNumber: 73,
          columnNumber: 9
        },
        this
      ),
      isHorizontalMenuOpen && /* @__PURE__ */ jsxDEV(
        "div",
        {
          id: "dropdownDotsHorizontal",
          className: "absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
          children: [
            /* @__PURE__ */ jsxDEV("ul", { className: "py-2 text-sm text-gray-700 dark:text-gray-200", children: [
              /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: "Dashboard"
                },
                void 0,
                false,
                {
                  fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                  lineNumber: 97,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 96,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: "Settings"
                },
                void 0,
                false,
                {
                  fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                  lineNumber: 105,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 104,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                  children: "Earnings"
                },
                void 0,
                false,
                {
                  fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                  lineNumber: 113,
                  columnNumber: 17
                },
                this
              ) }, void 0, false, {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 112,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
              lineNumber: 95,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "py-2", children: /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#",
                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                children: "Separated link"
              },
              void 0,
              false,
              {
                fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
                lineNumber: 122,
                columnNumber: 15
              },
              this
            ) }, void 0, false, {
              fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
              lineNumber: 121,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
          lineNumber: 91,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
_s(DropdownMenu, "8O5UGM7mKjiBnJsncKzcPyYYak4=");
_c = DropdownMenu;
export default DropdownMenu;
var _c;
$RefreshReg$(_c, "DropdownMenu");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/vivek/Documents/GitHub/aiMCQGoogleformSolver/src/components/dropDown.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
