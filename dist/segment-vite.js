import { jsx as s, jsxs as i, Fragment as x } from "react/jsx-runtime";
import { useState as g } from "react";
const f = ({
  children: e,
  variant: a = "pr",
  icon: c = !1,
  material: l = !1,
  circle: t = !1,
  block: r = !1,
  inverted: n = !1,
  disabled: o = !1,
  size: p,
  dataIcon: m,
  ...h
}) => {
  const d = "spx-btn", b = c ? `${d}--icon` : "", N = l ? `${d}--material` : "", u = t ? `${d}--circle` : "", v = r ? `${d}--block` : "", _ = n ? `${d}--${a}--inverted` : "", $ = p ? `${d}--${p}` : "";
  return /* @__PURE__ */ s(
    "button",
    {
      className: `
        spx-btn spx-btn--${a}
        ${_}
        ${b}
        ${N}
        ${u}
        ${v}
        ${$}
      `,
      "data-icon": m,
      disabled: o,
      ...h,
      children: e
    }
  );
}, y = ({ children: e, ...a }) => /* @__PURE__ */ s(
  "form",
  {
    className: "spx-form",
    ...a,
    children: e
  }
), B = ({
  label: e,
  id: a,
  type: c = "text",
  defaultValue: l = "",
  hasError: t = !1,
  searchAction: r,
  ...n
}) => {
  const o = t ? "has-error" : "";
  return /* @__PURE__ */ i(x, { children: [
    /* @__PURE__ */ s("label", { className: "spx-label", htmlFor: a, children: e }),
    c === "search" ? /* @__PURE__ */ s(x, { children: /* @__PURE__ */ i("div", { className: "spx-search", children: [
      /* @__PURE__ */ s(
        "input",
        {
          className: `spx-input ${o}`,
          type: c,
          id: a,
          defaultValue: l,
          ...n
        }
      ),
      /* @__PURE__ */ s(
        f,
        {
          circle: !0,
          dataIcon: "search",
          type: "button",
          onClick: r
        }
      )
    ] }) }) : /* @__PURE__ */ s(
      "input",
      {
        className: `spx-input ${o}`,
        type: c,
        id: a,
        defaultValue: l,
        ...n
      }
    )
  ] });
}, F = ({
  label: e,
  id: a,
  defaultValue: c = "",
  hasError: l = !1,
  cols: t = "30",
  rows: r = "10",
  ...n
}) => /* @__PURE__ */ i(x, { children: [
  /* @__PURE__ */ s("label", { className: "spx-label", htmlFor: a, children: e }),
  /* @__PURE__ */ s(
    "textarea",
    {
      className: `spx-textarea ${l ? "has-error" : ""}`,
      id: a,
      cols: t,
      rows: r,
      defaultValue: c,
      ...n
    }
  )
] }), T = ({
  label: e,
  id: a,
  checked: c = !1,
  disabled: l = !1,
  ...t
}) => /* @__PURE__ */ i(
  "label",
  {
    className: "spx-checkbox",
    htmlFor: a,
    ...t,
    children: [
      /* @__PURE__ */ s(
        "input",
        {
          type: "checkbox",
          name: "checkbox",
          defaultChecked: c,
          disabled: l,
          id: a
        }
      ),
      /* @__PURE__ */ s("div", { className: "spx-checkbox__box", "data-icon": "check" }),
      /* @__PURE__ */ s("div", { className: "spx-checkbox__material" }),
      e
    ]
  }
), S = ({
  progress: e = "0",
  title: a,
  ...c
}) => {
  const l = {
    width: `${e}%`
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: `spx-progress ${a ? "spx-progress--title" : ""}`,
      "data-title": e,
      ...c,
      children: /* @__PURE__ */ s("div", { style: l })
    }
  );
}, A = ({
  label: e,
  name: a = "radio",
  value: c = "default",
  id: l,
  checked: t,
  disabled: r,
  ...n
}) => /* @__PURE__ */ i(
  "label",
  {
    className: "spx-radio",
    htmlFor: l,
    ...n,
    children: [
      /* @__PURE__ */ s(
        "input",
        {
          type: "radio",
          name: a,
          id: l,
          disabled: r,
          defaultChecked: t,
          value: c
        }
      ),
      /* @__PURE__ */ s("div", { className: "spx-radio__dot" }),
      e
    ]
  }
), I = ({
  checked: e,
  disabled: a,
  ...c
}) => /* @__PURE__ */ i(
  "label",
  {
    className: `spx-tgl ${a ? "spx-is-disabled" : ""}`,
    ...c,
    children: [
      /* @__PURE__ */ s(
        "input",
        {
          className: "spx-tgl-input",
          type: "checkbox",
          defaultChecked: e,
          disabled: a
        }
      ),
      /* @__PURE__ */ s("div", { className: "spx-tgl-btn" })
    ]
  }
), w = ({
  value: e = "0",
  min: a = "0",
  max: c = "100",
  step: l = "1",
  disabled: t,
  ...r
}) => /* @__PURE__ */ s("div", { className: `spx-range-slider ${t ? "spx-is-disabled" : ""}`, "data-id": "RangeSliderWrap", children: /* @__PURE__ */ s(
  "input",
  {
    type: "range",
    defaultValue: e,
    min: a,
    max: c,
    step: l,
    disabled: t,
    ...r
  }
) }), R = ({
  title: e,
  secondary: a,
  isOpen: c = !1,
  disabled: l = !1,
  children: t,
  ...r
}) => {
  const [n, o] = g(c);
  return /* @__PURE__ */ i("div", { className: `spx-ac ${n ? "is-active" : ""}`, ...r, children: [
    /* @__PURE__ */ i("div", { className: "spx-ac__pane", children: [
      /* @__PURE__ */ s("div", { className: "spx-ac-title", "data-id": "accordionTitle", children: e }),
      /* @__PURE__ */ s("div", { className: "spx-ac-secondary", "data-id": "accordionSec", children: a }),
      /* @__PURE__ */ s("div", { className: "spx-ac-action", children: /* @__PURE__ */ s(
        "button",
        {
          className: "spx-btn",
          "data-icon": "keyboard_arrow_down",
          onClick: () => o(!n),
          disabled: l,
          "data-id": "AccordionToggleBtn"
        }
      ) })
    ] }),
    /* @__PURE__ */ s("div", { className: "spx-ac__content", children: t })
  ] });
}, j = ({
  title: e,
  baseAction: a,
  baseIcon: c = "check",
  actions: l,
  ...t
}) => /* @__PURE__ */ i("div", { className: "spx-apanel", ...t, children: [
  a && /* @__PURE__ */ s("div", { className: "spx-apanel__core", children: /* @__PURE__ */ s(
    "button",
    {
      className: "spx-btn spx-btn--sm spx-btn--pr--inverted spx-btn--circle",
      "data-icon": c,
      onClick: a,
      "data-id": "BaseActionBtn"
    }
  ) }),
  /* @__PURE__ */ s("div", { className: "spx-apanel__title", children: e }),
  l && /* @__PURE__ */ s("div", { className: "spx-apanel__actions", children: /* @__PURE__ */ s("div", { className: "spx-panel-actions", children: l }) })
] }), D = ({ ...e }) => /* @__PURE__ */ i("div", { className: "spx-loading", ...e, children: [
  /* @__PURE__ */ s("div", { className: "spx-loading__dots" }),
  /* @__PURE__ */ s("div", { className: "spx-loading__dots" }),
  /* @__PURE__ */ s("div", { className: "spx-loading__dots" })
] });
export {
  R as Accordion,
  j as ActionPanel,
  f as Button,
  T as Checkbox,
  y as Form,
  B as Input,
  D as Loading,
  S as ProgressBar,
  A as Radio,
  w as RangeSlider,
  F as TextArea,
  I as Toggle
};
