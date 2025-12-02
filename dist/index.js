'use strict';

var chunkVYNEUGE3_js = require('./chunk-VYNEUGE3.js');
var React12 = require('react');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var lucideReact = require('lucide-react');
var jsxRuntime = require('react/jsx-runtime');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var reactSlot = require('@radix-ui/react-slot');
var reactDayPicker = require('react-day-picker');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var DialogPrimitive = require('@radix-ui/react-dialog');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var reactHookForm = require('react-hook-form');
var LabelPrimitive = require('@radix-ui/react-label');
var PopoverPrimitive = require('@radix-ui/react-popover');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SelectPrimitive = require('@radix-ui/react-select');
var SliderPrimitive = require('@radix-ui/react-slider');
var SwitchPrimitives = require('@radix-ui/react-switch');
var TabsPrimitive = require('@radix-ui/react-tabs');
var ToastPrimitives = require('@radix-ui/react-toast');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var Link = require('next/link');
var navigation = require('next/navigation');
var nextThemes = require('next-themes');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React12__namespace = /*#__PURE__*/_interopNamespace(React12);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var DialogPrimitive__namespace = /*#__PURE__*/_interopNamespace(DialogPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespace(SliderPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespace(SwitchPrimitives);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var ToastPrimitives__namespace = /*#__PURE__*/_interopNamespace(ToastPrimitives);
var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespace(TooltipPrimitive);
var Link__default = /*#__PURE__*/_interopDefault(Link);

// node_modules/tailwindcss/lib/util/createPlugin.js
var require_createPlugin = chunkVYNEUGE3_js.__commonJS({
  "node_modules/tailwindcss/lib/util/createPlugin.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function createPlugin(plugin, config) {
      return {
        handler: plugin,
        config
      };
    }
    createPlugin.withOptions = function(pluginFunction, configFunction = () => ({})) {
      const optionsFunction = function(options) {
        return {
          __options: options,
          handler: pluginFunction(options),
          config: configFunction(options)
        };
      };
      optionsFunction.__isOptionsFunction = true;
      optionsFunction.__pluginFunction = pluginFunction;
      optionsFunction.__configFunction = configFunction;
      return optionsFunction;
    };
    var _default = createPlugin;
  }
});

// node_modules/tailwindcss/lib/public/create-plugin.js
var require_create_plugin = chunkVYNEUGE3_js.__commonJS({
  "node_modules/tailwindcss/lib/public/create-plugin.js"(exports$1) {
    Object.defineProperty(exports$1, "__esModule", {
      value: true
    });
    Object.defineProperty(exports$1, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _createPlugin = /* @__PURE__ */ _interop_require_default(require_createPlugin());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _createPlugin.default;
  }
});

// node_modules/tailwindcss/plugin.js
var require_plugin = chunkVYNEUGE3_js.__commonJS({
  "node_modules/tailwindcss/plugin.js"(exports$1, module) {
    var createPlugin = require_create_plugin();
    module.exports = (createPlugin.__esModule ? createPlugin : { default: createPlugin }).default;
  }
});

// node_modules/tailwindcss-animate/index.js
var require_tailwindcss_animate = chunkVYNEUGE3_js.__commonJS({
  "node_modules/tailwindcss-animate/index.js"(exports$1, module) {
    var plugin = require_plugin();
    function filterDefault(values) {
      return Object.fromEntries(
        Object.entries(values).filter(([key]) => key !== "DEFAULT")
      );
    }
    module.exports = plugin(
      ({ addUtilities, matchUtilities, theme }) => {
        addUtilities({
          "@keyframes enter": theme("keyframes.enter"),
          "@keyframes exit": theme("keyframes.exit"),
          ".animate-in": {
            animationName: "enter",
            animationDuration: theme("animationDuration.DEFAULT"),
            "--tw-enter-opacity": "initial",
            "--tw-enter-scale": "initial",
            "--tw-enter-rotate": "initial",
            "--tw-enter-translate-x": "initial",
            "--tw-enter-translate-y": "initial"
          },
          ".animate-out": {
            animationName: "exit",
            animationDuration: theme("animationDuration.DEFAULT"),
            "--tw-exit-opacity": "initial",
            "--tw-exit-scale": "initial",
            "--tw-exit-rotate": "initial",
            "--tw-exit-translate-x": "initial",
            "--tw-exit-translate-y": "initial"
          }
        });
        matchUtilities(
          {
            "fade-in": (value) => ({ "--tw-enter-opacity": value }),
            "fade-out": (value) => ({ "--tw-exit-opacity": value })
          },
          { values: theme("animationOpacity") }
        );
        matchUtilities(
          {
            "zoom-in": (value) => ({ "--tw-enter-scale": value }),
            "zoom-out": (value) => ({ "--tw-exit-scale": value })
          },
          { values: theme("animationScale") }
        );
        matchUtilities(
          {
            "spin-in": (value) => ({ "--tw-enter-rotate": value }),
            "spin-out": (value) => ({ "--tw-exit-rotate": value })
          },
          { values: theme("animationRotate") }
        );
        matchUtilities(
          {
            "slide-in-from-top": (value) => ({
              "--tw-enter-translate-y": `-${value}`
            }),
            "slide-in-from-bottom": (value) => ({
              "--tw-enter-translate-y": value
            }),
            "slide-in-from-left": (value) => ({
              "--tw-enter-translate-x": `-${value}`
            }),
            "slide-in-from-right": (value) => ({
              "--tw-enter-translate-x": value
            }),
            "slide-out-to-top": (value) => ({
              "--tw-exit-translate-y": `-${value}`
            }),
            "slide-out-to-bottom": (value) => ({
              "--tw-exit-translate-y": value
            }),
            "slide-out-to-left": (value) => ({
              "--tw-exit-translate-x": `-${value}`
            }),
            "slide-out-to-right": (value) => ({
              "--tw-exit-translate-x": value
            })
          },
          { values: theme("animationTranslate") }
        );
        matchUtilities(
          { duration: (value) => ({ animationDuration: value }) },
          { values: filterDefault(theme("animationDuration")) }
        );
        matchUtilities(
          { delay: (value) => ({ animationDelay: value }) },
          { values: theme("animationDelay") }
        );
        matchUtilities(
          { ease: (value) => ({ animationTimingFunction: value }) },
          { values: filterDefault(theme("animationTimingFunction")) }
        );
        addUtilities({
          ".running": { animationPlayState: "running" },
          ".paused": { animationPlayState: "paused" }
        });
        matchUtilities(
          { "fill-mode": (value) => ({ animationFillMode: value }) },
          { values: theme("animationFillMode") }
        );
        matchUtilities(
          { direction: (value) => ({ animationDirection: value }) },
          { values: theme("animationDirection") }
        );
        matchUtilities(
          { repeat: (value) => ({ animationIterationCount: value }) },
          { values: theme("animationRepeat") }
        );
      },
      {
        theme: {
          extend: {
            animationDelay: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({}, theme("transitionDelay")),
            animationDuration: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({
              0: "0ms"
            }, theme("transitionDuration")),
            animationTimingFunction: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({}, theme("transitionTimingFunction")),
            animationFillMode: {
              none: "none",
              forwards: "forwards",
              backwards: "backwards",
              both: "both"
            },
            animationDirection: {
              normal: "normal",
              reverse: "reverse",
              alternate: "alternate",
              "alternate-reverse": "alternate-reverse"
            },
            animationOpacity: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({
              DEFAULT: 0
            }, theme("opacity")),
            animationTranslate: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({
              DEFAULT: "100%"
            }, theme("translate")),
            animationScale: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({
              DEFAULT: 0
            }, theme("scale")),
            animationRotate: ({ theme }) => chunkVYNEUGE3_js.__spreadValues({
              DEFAULT: "30deg"
            }, theme("rotate")),
            animationRepeat: {
              0: "0",
              1: "1",
              infinite: "infinite"
            },
            keyframes: {
              enter: {
                from: {
                  opacity: "var(--tw-enter-opacity, 1)",
                  transform: "translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))"
                }
              },
              exit: {
                to: {
                  opacity: "var(--tw-exit-opacity, 1)",
                  transform: "translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))"
                }
              }
            }
          }
        }
      }
    );
  }
});
var Accordion = AccordionPrimitive__namespace.Root;
var AccordionItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Item,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("border-b", className)
    }, props)
  );
});
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex", children: /* @__PURE__ */ jsxRuntime.jsxs(
    AccordionPrimitive__namespace.Trigger,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    })
  ) });
});
AccordionTrigger.displayName = AccordionPrimitive__namespace.Trigger.displayName;
var AccordionContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Content,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: chunkVYNEUGE3_js.cn("pb-4 pt-0", className), children })
    })
  );
});
AccordionContent.displayName = AccordionPrimitive__namespace.Content.displayName;
var Alert = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      role: "alert",
      className: chunkVYNEUGE3_js.cn(chunkVYNEUGE3_js.alertVariants({ variant }), className)
    }, props)
  );
});
Alert.displayName = "Alert";
var AlertTitle = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "h5",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("mb-1 font-medium leading-none tracking-tight", className)
    }, props)
  );
});
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-sm [&_p]:leading-relaxed", className)
    }, props)
  );
});
AlertDescription.displayName = "AlertDescription";
var Avatar = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Root,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
});
Avatar.displayName = AvatarPrimitive__namespace.Root.displayName;
var AvatarImage = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Image,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("aspect-square h-full w-full", className)
    }, props)
  );
});
AvatarImage.displayName = AvatarPrimitive__namespace.Image.displayName;
var AvatarFallback = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Fallback,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className
      )
    }, props)
  );
});
AvatarFallback.displayName = AvatarPrimitive__namespace.Fallback.displayName;
function Badge(_a) {
  var _b = _a, { className, variant } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkVYNEUGE3_js.__spreadValues({ className: chunkVYNEUGE3_js.cn(chunkVYNEUGE3_js.badgeVariants({ variant }), className) }, props));
}
var Breadcrumb = React12__namespace.forwardRef((_a, ref) => {
  var props = chunkVYNEUGE3_js.__objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("nav", chunkVYNEUGE3_js.__spreadValues({ ref, "aria-label": "breadcrumb" }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )
    }, props)
  );
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { asChild, className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["asChild", "className"]);
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("transition-colors hover:text-foreground", className)
    }, props)
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: chunkVYNEUGE3_js.cn("font-normal text-foreground", className)
    }, props)
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = (_a) => {
  var _b = _a, {
    children,
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: chunkVYNEUGE3_js.cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)
    }, props), {
      children: children != null ? children : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, {})
    })
  );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      role: "presentation",
      "aria-hidden": "true",
      className: chunkVYNEUGE3_js.cn("flex h-9 w-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontal, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
      ]
    })
  );
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
var Button = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false, loading = false, children, disabled } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "variant", "size", "asChild", "loading", "children", "disabled"]);
    const Comp = asChild ? reactSlot.Slot : "button";
    return /* @__PURE__ */ jsxRuntime.jsxs(
      Comp,
      chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
        className: chunkVYNEUGE3_js.cn(chunkVYNEUGE3_js.buttonVariants({ variant, size, className })),
        ref,
        disabled: loading || disabled
      }, props), {
        children: [
          loading && /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
          children
        ]
      })
    );
  }
);
Button.displayName = "Button";
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    formatters,
    components
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays",
    "captionLayout",
    "buttonVariant",
    "formatters",
    "components"
  ]);
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    chunkVYNEUGE3_js.__spreadValues({
      showOutsideDays,
      className: chunkVYNEUGE3_js.cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: chunkVYNEUGE3_js.__spreadValues({
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" })
      }, formatters),
      classNames: chunkVYNEUGE3_js.__spreadValues({
        root: chunkVYNEUGE3_js.cn("w-fit", defaultClassNames.root),
        months: chunkVYNEUGE3_js.cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: chunkVYNEUGE3_js.cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: chunkVYNEUGE3_js.cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: chunkVYNEUGE3_js.cn(
          chunkVYNEUGE3_js.buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: chunkVYNEUGE3_js.cn(
          chunkVYNEUGE3_js.buttonVariants({ variant: buttonVariant }),
          "h-[--cell-size] w-[--cell-size] select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: chunkVYNEUGE3_js.cn(
          "flex h-[--cell-size] w-full items-center justify-center px-[--cell-size]",
          defaultClassNames.month_caption
        ),
        dropdowns: chunkVYNEUGE3_js.cn(
          "flex h-[--cell-size] w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: chunkVYNEUGE3_js.cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root
        ),
        dropdown: chunkVYNEUGE3_js.cn(
          "bg-popover absolute inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: chunkVYNEUGE3_js.cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: chunkVYNEUGE3_js.cn("flex", defaultClassNames.weekdays),
        weekday: chunkVYNEUGE3_js.cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday
        ),
        week: chunkVYNEUGE3_js.cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: chunkVYNEUGE3_js.cn(
          "w-[--cell-size] select-none",
          defaultClassNames.week_number_header
        ),
        week_number: chunkVYNEUGE3_js.cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number
        ),
        day: chunkVYNEUGE3_js.cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day
        ),
        range_start: chunkVYNEUGE3_js.cn(
          "bg-accent rounded-l-md",
          defaultClassNames.range_start
        ),
        range_middle: chunkVYNEUGE3_js.cn("rounded-none", defaultClassNames.range_middle),
        range_end: chunkVYNEUGE3_js.cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: chunkVYNEUGE3_js.cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: chunkVYNEUGE3_js.cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: chunkVYNEUGE3_js.cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: chunkVYNEUGE3_js.cn("invisible", defaultClassNames.hidden)
      }, classNames),
      components: chunkVYNEUGE3_js.__spreadValues({
        Root: (_a2) => {
          var _b2 = _a2, { className: className2, rootRef } = _b2, props2 = chunkVYNEUGE3_js.__objRest(_b2, ["className", "rootRef"]);
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            chunkVYNEUGE3_js.__spreadValues({
              "data-slot": "calendar",
              ref: rootRef,
              className: chunkVYNEUGE3_js.cn(className2)
            }, props2)
          );
        },
        Chevron: (_c) => {
          var _d = _c, { className: className2, orientation } = _d, props2 = chunkVYNEUGE3_js.__objRest(_d, ["className", "orientation"]);
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, chunkVYNEUGE3_js.__spreadValues({ className: chunkVYNEUGE3_js.cn("size-4", className2) }, props2));
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronRightIcon,
              chunkVYNEUGE3_js.__spreadValues({
                className: chunkVYNEUGE3_js.cn("size-4", className2)
              }, props2)
            );
          }
          return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, chunkVYNEUGE3_js.__spreadValues({ className: chunkVYNEUGE3_js.cn("size-4", className2) }, props2));
        },
        DayButton: CalendarDayButton,
        WeekNumber: (_e) => {
          var _f = _e, { children } = _f, props2 = chunkVYNEUGE3_js.__objRest(_f, ["children"]);
          return /* @__PURE__ */ jsxRuntime.jsx("td", chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, props2), { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-[--cell-size] items-center justify-center text-center", children }) }));
        }
      }, components)
    }, props)
  );
}
function CalendarDayButton(_a) {
  var _b = _a, {
    className,
    day,
    modifiers
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className",
    "day",
    "modifiers"
  ]);
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = React12__namespace.useRef(null);
  React12__namespace.useEffect(() => {
    var _a2;
    if (modifiers.focused) (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: chunkVYNEUGE3_js.cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-[--cell-size] flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )
    }, props)
  );
}
var Card = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )
    }, props)
  );
});
Card.displayName = "Card";
var CardHeader = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("flex flex-col space-y-1.5 p-6", className)
    }, props)
  );
});
CardHeader.displayName = "CardHeader";
var CardTitle = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
CardTitle.displayName = "CardTitle";
var CardDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
CardDescription.displayName = "CardDescription";
var CardContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkVYNEUGE3_js.__spreadValues({ ref, className: chunkVYNEUGE3_js.cn("p-6 pt-0", className) }, props));
});
CardContent.displayName = "CardContent";
var CardFooter = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("flex items-center p-6 pt-0", className)
    }, props)
  );
});
CardFooter.displayName = "CardFooter";
var Checkbox = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Indicator,
        {
          className: chunkVYNEUGE3_js.cn("grid place-content-center text-current"),
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" })
        }
      )
    })
  );
});
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;
var Dialog = DialogPrimitive__namespace.Root;
var DialogTrigger = DialogPrimitive__namespace.Trigger;
var DialogPortal = DialogPrimitive__namespace.Portal;
var DialogClose = DialogPrimitive__namespace.Close;
var DialogOverlay = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var DialogContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
        ref,
        className: chunkVYNEUGE3_js.cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
});
DialogContent.displayName = DialogPrimitive__namespace.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      )
    }, props)
  );
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var DialogDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive__namespace.Description.displayName;
var DropdownMenu = DropdownMenuPrimitive__namespace.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive__namespace.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive__namespace.Group;
var DropdownMenuPortal = DropdownMenuPrimitive__namespace.Portal;
var DropdownMenuSub = DropdownMenuPrimitive__namespace.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive__namespace.RadioGroup;
var DropdownMenuSubTrigger = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "inset", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "ml-auto" })
      ]
    })
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive__namespace.SubTrigger.displayName;
var DropdownMenuSubContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )
    }, props)
  );
});
DropdownMenuSubContent.displayName = DropdownMenuPrimitive__namespace.SubContent.displayName;
var DropdownMenuContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      sideOffset,
      className: chunkVYNEUGE3_js.cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className
      )
    }, props)
  ) });
});
DropdownMenuContent.displayName = DropdownMenuPrimitive__namespace.Content.displayName;
var DropdownMenuItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive__namespace.Item.displayName;
var DropdownMenuCheckboxItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, checked } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children", "checked"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive__namespace.CheckboxItem.displayName;
var DropdownMenuRadioItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-2 w-2 fill-current" }) }) }),
        children
      ]
    })
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive__namespace.RadioItem.displayName;
var DropdownMenuLabel = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, inset } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "inset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "pl-8",
        className
      )
    }, props)
  );
});
DropdownMenuLabel.displayName = DropdownMenuPrimitive__namespace.Label.displayName;
var DropdownMenuSeparator = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
DropdownMenuSeparator.displayName = DropdownMenuPrimitive__namespace.Separator.displayName;
var DropdownMenuShortcut = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn("ml-auto text-xs tracking-widest opacity-60", className)
    }, props)
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var Label2 = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    LabelPrimitive__namespace.Root,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(chunkVYNEUGE3_js.labelVariants(), className)
    }, props)
  );
});
Label2.displayName = LabelPrimitive__namespace.Root.displayName;
var Form = reactHookForm.FormProvider;
var FormFieldContext = React12__namespace.createContext(null);
var FormField = (_a) => {
  var props = chunkVYNEUGE3_js.__objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, chunkVYNEUGE3_js.__spreadValues({}, props)) });
};
var useFormField = () => {
  const fieldContext = React12__namespace.useContext(FormFieldContext);
  const itemContext = React12__namespace.useContext(FormItemContext);
  const { getFieldState, formState } = reactHookForm.useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }
  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;
  return chunkVYNEUGE3_js.__spreadValues({
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`
  }, fieldState);
};
var FormItemContext = React12__namespace.createContext(null);
var FormItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  const id = React12__namespace.useId();
  return /* @__PURE__ */ jsxRuntime.jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxRuntime.jsx("div", chunkVYNEUGE3_js.__spreadValues({ ref, className: chunkVYNEUGE3_js.cn("space-y-2", className) }, props)) });
});
FormItem.displayName = "FormItem";
var FormLabel = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    Label2,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(error && "text-destructive", className),
      htmlFor: formItemId
    }, props)
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React12__namespace.forwardRef((_a, ref) => {
  var props = chunkVYNEUGE3_js.__objRest(_a, []);
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactSlot.Slot,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error
    }, props)
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      id: formDescriptionId,
      className: chunkVYNEUGE3_js.cn("text-[0.8rem] text-muted-foreground", className)
    }, props)
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  var _a2;
  const { error, formMessageId } = useFormField();
  const body = error ? String((_a2 = error == null ? void 0 : error.message) != null ? _a2 : "") : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "p",
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      id: formMessageId,
      className: chunkVYNEUGE3_js.cn("text-[0.8rem] font-medium text-destructive", className)
    }, props), {
      children: body
    })
  );
});
FormMessage.displayName = "FormMessage";
var Input = React12__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type, startIcon, endIcon } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "type", "startIcon", "endIcon"]);
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative w-full min-w-0", children: [
      startIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: startIcon }),
      /* @__PURE__ */ jsxRuntime.jsx(
        "input",
        chunkVYNEUGE3_js.__spreadValues({
          type,
          className: chunkVYNEUGE3_js.cn(
            "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            startIcon && "pl-10",
            endIcon && "pr-10",
            className
          ),
          ref
        }, props)
      ),
      endIcon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: endIcon })
    ] });
  }
);
Input.displayName = "Input";
var Popover = PopoverPrimitive__namespace.Root;
var PopoverTrigger = PopoverPrimitive__namespace.Trigger;
var PopoverAnchor = PopoverPrimitive__namespace.Anchor;
var PopoverContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, align = "center", sideOffset = 4 } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "align", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverPrimitive__namespace.Content,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      align,
      sideOffset,
      className: chunkVYNEUGE3_js.cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]",
        className
      )
    }, props)
  ) });
});
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;
var RadioGroup2 = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn("grid gap-2", className)
    }, props), {
      ref
    })
  );
});
RadioGroup2.displayName = RadioGroupPrimitive__namespace.Root.displayName;
var RadioGroupItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(RadioGroupPrimitive__namespace.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    })
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive__namespace.Item.displayName;
var Select = SelectPrimitive__namespace.Root;
var SelectGroup = SelectPrimitive__namespace.Group;
var SelectValue = SelectPrimitive__namespace.Value;
var SelectTrigger = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Trigger,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
      ]
    })
  );
});
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
var SelectScrollUpButton = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollUpButton,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" })
    })
  );
});
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
var SelectScrollDownButton = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollDownButton,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" })
    })
  );
});
SelectScrollDownButton.displayName = SelectPrimitive__namespace.ScrollDownButton.displayName;
var SelectContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children, position = "popper" } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children", "position"]);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Content,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectPrimitive__namespace.Viewport,
          {
            className: chunkVYNEUGE3_js.cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
});
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
var SelectLabel = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Label,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("px-2 py-1.5 text-sm font-semibold", className)
    }, props)
  );
});
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
var SelectItem = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Item,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
      ]
    })
  );
});
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
var SelectSeparator = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Separator,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("-mx-1 my-1 h-px bg-muted", className)
    }, props)
  );
});
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;
var Sheet = DialogPrimitive__namespace.Root;
var SheetTrigger = DialogPrimitive__namespace.Trigger;
var SheetClose = DialogPrimitive__namespace.Close;
var SheetPortal = DialogPrimitive__namespace.Portal;
var SheetOverlay = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Overlay,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props), {
      ref
    })
  );
});
SheetOverlay.displayName = DialogPrimitive__namespace.Overlay.displayName;
var SheetContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { side = "right", className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["side", "className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      DialogPrimitive__namespace.Content,
      chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
        ref,
        className: chunkVYNEUGE3_js.cn(chunkVYNEUGE3_js.sheetVariants({ side }), className)
      }, props), {
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(DialogPrimitive__namespace.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] }),
          children
        ]
      })
    )
  ] });
});
SheetContent.displayName = DialogPrimitive__namespace.Content.displayName;
var SheetHeader = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )
    }, props)
  );
};
SheetHeader.displayName = "SheetHeader";
var SheetFooter = (_a) => {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )
    }, props)
  );
};
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Title,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-lg font-semibold text-foreground", className)
    }, props)
  );
});
SheetTitle.displayName = DialogPrimitive__namespace.Title.displayName;
var SheetDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DialogPrimitive__namespace.Description,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
SheetDescription.displayName = DialogPrimitive__namespace.Description.displayName;
function Skeleton(_a) {
  var _b = _a, {
    className
  } = _b, props = chunkVYNEUGE3_js.__objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn("animate-pulse rounded-md bg-primary/10", className)
    }, props)
  );
}
var Slider = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SliderPrimitive__namespace.Root,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-primary" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SliderPrimitive__namespace.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })
      ]
    })
  );
});
Slider.displayName = SliderPrimitive__namespace.Root.displayName;
var Switch = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SwitchPrimitives__namespace.Root,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        className
      )
    }, props), {
      ref,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        SwitchPrimitives__namespace.Thumb,
        {
          className: chunkVYNEUGE3_js.cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    })
  );
});
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;
var Table = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntime.jsx(
    "table",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("w-full caption-bottom text-sm", className)
    }, props)
  ) });
});
Table.displayName = "Table";
var TableHeader = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx("thead", chunkVYNEUGE3_js.__spreadValues({ ref, className: chunkVYNEUGE3_js.cn("[&_tr]:border-b", className) }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tbody",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
});
TableBody.displayName = "TableBody";
var TableFooter = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tfoot",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
});
TableFooter.displayName = "TableFooter";
var TableRow = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )
    }, props)
  );
});
TableRow.displayName = "TableRow";
var TableHead = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
});
TableHead.displayName = "TableHead";
var TableCell = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
});
TableCell.displayName = "TableCell";
var TableCaption = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "caption",
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("mt-4 text-sm text-muted-foreground", className)
    }, props)
  );
});
TableCaption.displayName = "TableCaption";
var Tabs = TabsPrimitive__namespace.Root;
var TabsList = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.List,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
        className
      )
    }, props)
  );
});
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
var TabsTrigger = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
        className
      )
    }, props)
  );
});
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
var TabsContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Content,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;
var Textarea = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    chunkVYNEUGE3_js.__spreadValues({
      className: chunkVYNEUGE3_js.cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref
    }, props)
  );
});
Textarea.displayName = "Textarea";
var ToastProvider = ToastPrimitives__namespace.Provider;
var ToastViewport = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Viewport,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )
    }, props)
  );
});
ToastViewport.displayName = ToastPrimitives__namespace.Viewport.displayName;
var Toast = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Root,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(chunkVYNEUGE3_js.toastVariants({ variant }), className)
    }, props)
  );
});
Toast.displayName = ToastPrimitives__namespace.Root.displayName;
var ToastAction = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Action,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )
    }, props)
  );
});
ToastAction.displayName = ToastPrimitives__namespace.Action.displayName;
var ToastClose = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Close,
    chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn(
        "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
        className
      ),
      "toast-close": ""
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "h-4 w-4" })
    })
  );
});
ToastClose.displayName = ToastPrimitives__namespace.Close.displayName;
var ToastTitle = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Title,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-sm font-semibold [&+div]:text-xs", className)
    }, props)
  );
});
ToastTitle.displayName = ToastPrimitives__namespace.Title.displayName;
var ToastDescription = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    ToastPrimitives__namespace.Description,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      className: chunkVYNEUGE3_js.cn("text-sm opacity-90", className)
    }, props)
  );
});
ToastDescription.displayName = ToastPrimitives__namespace.Description.displayName;
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, state), {
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      });
    case "UPDATE_TOAST":
      return chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? chunkVYNEUGE3_js.__spreadValues(chunkVYNEUGE3_js.__spreadValues({}, t), action.toast) : t
        )
      });
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, state), {
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, t), {
            open: false
          }) : t
        )
      });
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, state), {
          toasts: []
        });
      }
      return chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, state), {
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      });
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast(_a) {
  var props = chunkVYNEUGE3_js.__objRest(_a, []);
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, props2), { id })
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, props), {
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    })
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React12__namespace.useState(memoryState);
  React12__namespace.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, state), {
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  });
}
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastProvider, { children: [
    toasts.map(function(_a) {
      var _b = _a, { id, title, description, action } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["id", "title", "description", "action"]);
      return /* @__PURE__ */ jsxRuntime.jsxs(Toast, chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, props), { children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsxRuntime.jsx(ToastClose, {})
      ] }), id);
    }),
    /* @__PURE__ */ jsxRuntime.jsx(ToastViewport, {})
  ] });
}
var TooltipProvider = TooltipPrimitive__namespace.Provider;
var Tooltip = TooltipPrimitive__namespace.Root;
var TooltipTrigger = TooltipPrimitive__namespace.Trigger;
var TooltipContent = React12__namespace.forwardRef((_a, ref) => {
  var _b = _a, { className, sideOffset = 4 } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "sideOffset"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipPrimitive__namespace.Content,
    chunkVYNEUGE3_js.__spreadValues({
      ref,
      sideOffset,
      className: chunkVYNEUGE3_js.cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
});
TooltipContent.displayName = TooltipPrimitive__namespace.Content.displayName;
var navItems = [
  {
    title: "Foundations",
    href: "/foundations",
    icon: lucideReact.Palette
  },
  {
    title: "Playground",
    href: "/playground",
    icon: lucideReact.Play
  },
  {
    title: "Layout",
    href: "/layout-examples",
    icon: lucideReact.Layout
  },
  {
    title: "Forms",
    href: "/forms",
    icon: lucideReact.FormInput
  },
  {
    title: "Data Display",
    href: "/data-display",
    icon: lucideReact.Database
  },
  {
    title: "Data Tables",
    href: "/data-tables",
    icon: lucideReact.Table
  },
  {
    title: "Dashboards & Charts",
    href: "/dashboards",
    icon: lucideReact.BarChart3
  },
  {
    title: "Navigation & Overlays",
    href: "/navigation",
    icon: lucideReact.Navigation
  },
  {
    title: "Feedback & States",
    href: "/feedback",
    icon: lucideReact.MessageSquare
  },
  {
    title: "Utilities",
    href: "/utilities",
    icon: lucideReact.Wrench
  },
  {
    title: "Documentation",
    href: "/docs",
    icon: lucideReact.BookOpen
  }
];
function Sidebar() {
  const pathname = navigation.usePathname();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-full w-64 flex-col border-r bg-card text-card-foreground", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-14 items-center border-b px-6", children: /* @__PURE__ */ jsxRuntime.jsxs(Link__default.default, { href: "/", className: "flex items-center gap-2 font-semibold", children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LayoutDashboard, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Origins UI" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "grid items-start px-4 text-sm font-medium", children: navItems.map((item, index) => /* @__PURE__ */ jsxRuntime.jsxs(
      Link__default.default,
      {
        href: item.href,
        className: chunkVYNEUGE3_js.cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
          pathname === item.href ? "bg-muted text-primary" : "text-muted-foreground"
        ),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(item.icon, { className: "h-4 w-4" }),
          item.title
        ]
      },
      index
    )) }) })
  ] });
}
function ModeToggle() {
  const { setTheme } = nextThemes.useTheme();
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}
function MobileSidebar() {
  const pathname = navigation.usePathname();
  const [open, setOpen] = React12.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(Button, { variant: "ghost", size: "icon", className: "md:hidden", children: [
      /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Menu, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle menu" })
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(SheetContent, { side: "left", className: "w-64 p-0", children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-full flex-col bg-card text-card-foreground", children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex h-14 items-center border-b px-6", children: /* @__PURE__ */ jsxRuntime.jsxs(Link__default.default, { href: "/", className: "flex items-center gap-2 font-semibold", onClick: () => setOpen(false), children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.LayoutDashboard, { className: "h-6 w-6 text-primary" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "Origins UI" })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1 overflow-y-auto py-4", children: /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "grid items-start px-4 text-sm font-medium", children: navItems.map((item, index) => /* @__PURE__ */ jsxRuntime.jsxs(
        Link__default.default,
        {
          href: item.href,
          onClick: () => setOpen(false),
          className: chunkVYNEUGE3_js.cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
            pathname === item.href ? "bg-muted text-primary" : "text-muted-foreground"
          ),
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(item.icon, { className: "h-4 w-4" }),
            item.title
          ]
        },
        index
      )) }) })
    ] }) })
  ] });
}
function Topbar() {
  return /* @__PURE__ */ jsxRuntime.jsxs("header", { className: "flex h-14 items-center gap-4 border-b bg-background px-6", children: [
    /* @__PURE__ */ jsxRuntime.jsx(MobileSidebar, {}),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-lg font-semibold", children: "Origins Tools UI Kit" }) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(ModeToggle, {}),
      /* @__PURE__ */ jsxRuntime.jsxs(Avatar, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn" }),
        /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { children: "CN" })
      ] })
    ] })
  ] });
}
function AppShell({ children }) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex h-screen overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "hidden md:flex", children: /* @__PURE__ */ jsxRuntime.jsx(Sidebar, {}) }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Topbar, {}),
      /* @__PURE__ */ jsxRuntime.jsx("main", { className: "flex-1 overflow-y-auto bg-muted/10 p-6", children })
    ] })
  ] });
}
function PageContainer(_a) {
  var _b = _a, { className, children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsx("div", chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({ className: chunkVYNEUGE3_js.cn("container mx-auto max-w-7xl space-y-8", className) }, props), { children }));
}
function PageHeader(_a) {
  var _b = _a, { title, description, actions, className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["title", "description", "actions", "className"]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({ className: chunkVYNEUGE3_js.cn("flex flex-col gap-4 md:flex-row md:items-center md:justify-between", className) }, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "space-y-1.5", children: [
      /* @__PURE__ */ jsxRuntime.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-muted-foreground", children: description })
    ] }),
    actions && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center gap-2", children: actions })
  ] }));
}
function PageSection(_a) {
  var _b = _a, { title, description, children, className } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["title", "description", "children", "className"]);
  if (!title) {
    return /* @__PURE__ */ jsxRuntime.jsx(Card, chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({ className }, props), { children: /* @__PURE__ */ jsxRuntime.jsx(CardContent, { className: "p-6", children }) }));
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Card, chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({ className }, props), { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(CardTitle, { children: title }),
      description && /* @__PURE__ */ jsxRuntime.jsx(CardDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(CardContent, { children })
  ] }));
}
var ThemeContext = React12.createContext(void 0);
function ThemeProviderWrapper({ children }) {
  const [theme, setTheme] = React12.useState("neo-saas");
  const [radius, setRadius] = React12.useState(0.5);
  const [font, setFont] = React12.useState("inter");
  const [primaryColor, setPrimaryColor] = React12.useState("221 83% 53%");
  const [mounted, setMounted] = React12.useState(false);
  React12.useEffect(() => {
    const savedTheme = localStorage.getItem("origins-ui-theme");
    const savedRadius = localStorage.getItem("origins-ui-radius");
    const savedFont = localStorage.getItem("origins-ui-font");
    const savedPrimary = localStorage.getItem("origins-ui-primary");
    if (savedTheme) setTheme(savedTheme);
    if (savedRadius) setRadius(parseFloat(savedRadius));
    if (savedFont) setFont(savedFont);
    if (savedPrimary) setPrimaryColor(savedPrimary);
    setMounted(true);
  }, []);
  React12.useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.setProperty("--radius", `${radius}rem`);
    document.documentElement.setAttribute("data-font", font);
    if (primaryColor) {
      const [h, s, l] = primaryColor.split(" ");
      document.documentElement.style.setProperty("--primary", primaryColor);
      document.documentElement.style.setProperty("--ring", primaryColor);
    } else {
      document.documentElement.style.removeProperty("--primary");
      document.documentElement.style.removeProperty("--ring");
    }
    localStorage.setItem("origins-ui-theme", theme);
    localStorage.setItem("origins-ui-radius", radius.toString());
    localStorage.setItem("origins-ui-font", font);
    localStorage.setItem("origins-ui-primary", primaryColor);
  }, [theme, radius, font, primaryColor, mounted]);
  return /* @__PURE__ */ jsxRuntime.jsx(ThemeContext.Provider, { value: { theme, setTheme, radius, setRadius, font, setFont, primaryColor, setPrimaryColor }, children });
}
function useThemeContext() {
  const context = React12.useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useThemeContext must be used within a ThemeProviderWrapper");
  }
  return context;
}
function ThemeProvider(_a) {
  var _b = _a, { children } = _b, props = chunkVYNEUGE3_js.__objRest(_b, ["children"]);
  return /* @__PURE__ */ jsxRuntime.jsx(nextThemes.ThemeProvider, chunkVYNEUGE3_js.__spreadProps(chunkVYNEUGE3_js.__spreadValues({}, props), { children }));
}

// tailwind.preset.ts
var originsPreset = {
  darkMode: ["class"],
  content: [],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          500: "hsl(var(--primary))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          500: "hsl(var(--secondary))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          500: "hsl(var(--muted))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          500: "hsl(var(--accent))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0"
          },
          to: {
            height: "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)"
          },
          to: {
            height: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require_tailwindcss_animate()]
};

Object.defineProperty(exports, "alertVariants", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.alertVariants; }
});
Object.defineProperty(exports, "badgeVariants", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.badgeVariants; }
});
Object.defineProperty(exports, "buttonVariants", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.buttonVariants; }
});
Object.defineProperty(exports, "cn", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.cn; }
});
Object.defineProperty(exports, "labelVariants", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.labelVariants; }
});
Object.defineProperty(exports, "sheetVariants", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.sheetVariants; }
});
Object.defineProperty(exports, "toastVariants", {
  enumerable: true,
  get: function () { return chunkVYNEUGE3_js.toastVariants; }
});
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
exports.AppShell = AppShell;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
exports.Card = Card;
exports.CardContent = CardContent;
exports.CardDescription = CardDescription;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardTitle = CardTitle;
exports.Checkbox = Checkbox;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.Input = Input;
exports.Label = Label2;
exports.PageContainer = PageContainer;
exports.PageHeader = PageHeader;
exports.PageSection = PageSection;
exports.Popover = Popover;
exports.PopoverAnchor = PopoverAnchor;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.RadioGroup = RadioGroup2;
exports.RadioGroupItem = RadioGroupItem;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetContent = SheetContent;
exports.SheetDescription = SheetDescription;
exports.SheetFooter = SheetFooter;
exports.SheetHeader = SheetHeader;
exports.SheetOverlay = SheetOverlay;
exports.SheetPortal = SheetPortal;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Switch = Switch;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Textarea = Textarea;
exports.ThemeProvider = ThemeProvider;
exports.ThemeProviderWrapper = ThemeProviderWrapper;
exports.Toast = Toast;
exports.ToastAction = ToastAction;
exports.ToastClose = ToastClose;
exports.ToastDescription = ToastDescription;
exports.ToastProvider = ToastProvider;
exports.ToastTitle = ToastTitle;
exports.ToastViewport = ToastViewport;
exports.Toaster = Toaster;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.Topbar = Topbar;
exports.originsPreset = originsPreset;
exports.useFormField = useFormField;
exports.useThemeContext = useThemeContext;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map