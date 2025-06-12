import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useForm, Link, Head } from "@inertiajs/react";
import * as React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { u as useTheme } from "./ThemeContext-C-RmmmK-.js";
const SvgEye = (props) => /* @__PURE__ */ React.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0002 13.8619C7.23361 13.8619 4.86803 12.1372 3.92328 9.70241C4.86804 7.26761 7.23361 5.54297 10.0002 5.54297C12.7667 5.54297 15.1323 7.26762 16.0771 9.70243C15.1323 12.1372 12.7667 13.8619 10.0002 13.8619ZM10.0002 4.04297C6.48191 4.04297 3.49489 6.30917 2.4155 9.4593C2.3615 9.61687 2.3615 9.78794 2.41549 9.94552C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C13.5184 15.3619 16.5055 13.0957 17.5849 9.94555C17.6389 9.78797 17.6389 9.6169 17.5849 9.45932C16.5055 6.30919 13.5184 4.04297 10.0002 4.04297ZM9.99151 7.84413C8.96527 7.84413 8.13333 8.67606 8.13333 9.70231C8.13333 10.7286 8.96527 11.5605 9.99151 11.5605H10.0064C11.0326 11.5605 11.8646 10.7286 11.8646 9.70231C11.8646 8.67606 11.0326 7.84413 10.0064 7.84413H9.99151Z" }));
const SvgEyeClose = (props) => /* @__PURE__ */ React.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.63803 3.57709C4.34513 3.2842 3.87026 3.2842 3.57737 3.57709C3.28447 3.86999 3.28447 4.34486 3.57737 4.63775L4.85323 5.91362C3.74609 6.84199 2.89363 8.06395 2.4155 9.45936C2.3615 9.61694 2.3615 9.78801 2.41549 9.94558C3.49488 13.0957 6.48191 15.3619 10.0002 15.3619C11.255 15.3619 12.4422 15.0737 13.4994 14.5598L15.3625 16.4229C15.6554 16.7158 16.1302 16.7158 16.4231 16.4229C16.716 16.13 16.716 15.6551 16.4231 15.3622L4.63803 3.57709ZM12.3608 13.4212L10.4475 11.5079C10.3061 11.5423 10.1584 11.5606 10.0064 11.5606H9.99151C8.96527 11.5606 8.13333 10.7286 8.13333 9.70237C8.13333 9.5461 8.15262 9.39434 8.18895 9.24933L5.91885 6.97923C5.03505 7.69015 4.34057 8.62704 3.92328 9.70247C4.86803 12.1373 7.23361 13.8619 10.0002 13.8619C10.8326 13.8619 11.6287 13.7058 12.3608 13.4212ZM16.0771 9.70249C15.7843 10.4569 15.3552 11.1432 14.8199 11.7311L15.8813 12.7925C16.6329 11.9813 17.2187 11.0143 17.5849 9.94561C17.6389 9.78803 17.6389 9.61696 17.5849 9.45938C16.5055 6.30925 13.5184 4.04303 10.0002 4.04303C9.13525 4.04303 8.30244 4.17999 7.52218 4.43338L8.75139 5.66259C9.1556 5.58413 9.57311 5.54303 10.0002 5.54303C12.7667 5.54303 15.1323 7.26768 16.0771 9.70249Z" }));
const SvgChevronLeft = (props) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 20 20", fill: "none", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M12.7083 5L7.5 10.2083L12.7083 15.4167", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }));
const Label = ({ htmlFor, children, className }) => {
  return /* @__PURE__ */ jsx(
    "label",
    {
      htmlFor,
      className: clsx(
        twMerge(
          "mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400",
          className
        )
      ),
      children
    }
  );
};
const Input = ({
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  className = "",
  min,
  max,
  step,
  disabled = false,
  success = false,
  error = false,
  hint
}) => {
  let inputClasses = ` h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${className}`;
  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 opacity-40 bg-gray-100 cursor-not-allowed dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 opacity-40`;
  } else if (error) {
    inputClasses += `  border-error-500 focus:border-error-300 focus:ring-error-500/20 dark:text-error-400 dark:border-error-500 dark:focus:border-error-800`;
  } else if (success) {
    inputClasses += `  border-success-500 focus:border-success-300 focus:ring-success-500/20 dark:text-success-400 dark:border-success-500 dark:focus:border-success-800`;
  } else {
    inputClasses += ` bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800`;
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        id,
        name,
        placeholder,
        value,
        onChange,
        min,
        max,
        step,
        disabled,
        className: inputClasses
      }
    ),
    hint && /* @__PURE__ */ jsx(
      "p",
      {
        className: `mt-1.5 text-xs ${error ? "text-error-500" : success ? "text-success-500" : "text-gray-500"}`,
        children: hint
      }
    )
  ] });
};
const Checkbox = ({
  label,
  checked,
  id,
  onChange,
  className = "",
  disabled = false
}) => {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: `flex items-center space-x-3 group cursor-pointer ${disabled ? "cursor-not-allowed opacity-60" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-5 h-5", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id,
              type: "checkbox",
              className: `w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60 
          ${className}`,
              checked,
              onChange: (e) => onChange(e.target.checked),
              disabled
            }
          ),
          checked && /* @__PURE__ */ jsx(
            "svg",
            {
              className: "absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2",
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
                  stroke: "white",
                  strokeWidth: "1.94437",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          ),
          disabled && /* @__PURE__ */ jsx(
            "svg",
            {
              className: "absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2",
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
                  stroke: "#E4E7EC",
                  strokeWidth: "2.33333",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            }
          )
        ] }),
        label && /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-800 dark:text-gray-200", children: label })
      ]
    }
  );
};
const Button = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false
}) => {
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm"
  };
  const variantClasses = {
    primary: "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
    outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `inline-flex items-center justify-center gap-2 rounded-lg transition ${className} ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-50" : ""}`,
      onClick,
      disabled,
      children: [
        startIcon && /* @__PURE__ */ jsx("span", { className: "flex items-center", children: startIcon }),
        children,
        endIcon && /* @__PURE__ */ jsx("span", { className: "flex items-center", children: endIcon })
      ]
    }
  );
};
function SignInForm({
  status,
  canResetPassword
}) {
  const { data, setData, post, processing, errors, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const disableButton = processing || !data.email || !data.password;
  const handleLogin = (event) => {
    event.preventDefault();
    post("/auth/signin", {
      onSuccess: () => {
        reset();
        setIsChecked(false);
      },
      onError: () => {
        alert("Login failed. Please check your credentials.");
      }
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-md pt-10 mx-auto", children: /* @__PURE__ */ jsxs(
      Link,
      {
        href: "/",
        className: "inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
        children: [
          /* @__PURE__ */ jsx(SvgChevronLeft, { className: "size-5" }),
          "Back to dashboard"
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center flex-1 w-full max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5 sm:mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md", children: "Sign In" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Enter your email and password to sign in!" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5", children: [
          /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10", children: [
            /* @__PURE__ */ jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z",
                      fill: "#4285F4"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z",
                      fill: "#34A853"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z",
                      fill: "#FBBC05"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z",
                      fill: "#EB4335"
                    }
                  )
                ]
              }
            ),
            "Sign in with Google"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10", children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                width: "21",
                className: "fill-current",
                height: "20",
                viewBox: "0 0 21 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("path", { d: "M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" })
              }
            ),
            "Sign in with X"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative py-3 sm:py-5", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-gray-200 dark:border-gray-800" }) }),
          /* @__PURE__ */ jsx("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsx("span", { className: "p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2", children: "Or" }) })
        ] }),
        /* @__PURE__ */ jsx("form", { onSubmit: (e) => handleLogin(e), children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              "Email",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-error-500", children: "*" }),
              " "
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "email",
                placeholder: "info@gmail.com",
                value: data.email,
                onChange: (e) => {
                  setData("email", e.target.value);
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(Label, { children: [
              "Password",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-error-500", children: "*" }),
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "password",
                  type: showPassword ? "text" : "password",
                  placeholder: "Enter your password",
                  value: data.password,
                  onChange: (e) => {
                    setData(
                      "password",
                      e.target.value
                    );
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  onClick: () => setShowPassword(!showPassword),
                  className: "absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2",
                  children: showPassword ? /* @__PURE__ */ jsx(SvgEye, { className: "fill-gray-500 dark:fill-gray-400 size-5" }) : /* @__PURE__ */ jsx(SvgEyeClose, { className: "fill-gray-500 dark:fill-gray-400 size-5" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(
                Checkbox,
                {
                  checked: isChecked,
                  onChange: setIsChecked
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "block font-normal text-gray-700 text-theme-sm dark:text-gray-400", children: "Keep me logged in" })
            ] }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/auth/reset-password",
                className: "text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400",
                children: "Forgot password?"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
            Button,
            {
              className: "w-full",
              size: "sm",
              disabled: disableButton,
              children: "Sign in"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start", children: [
          "Don't have an account? ",
          "",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/auth/signup",
              className: "text-brand-500 hover:text-brand-600 dark:text-brand-400",
              children: "Sign Up"
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}
function GridShape() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]", children: /* @__PURE__ */ jsx("img", { src: "../images/shape/grid-01.svg", alt: "grid" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]", children: /* @__PURE__ */ jsx("img", { src: "../images/shape/grid-01.svg", alt: "grid" }) })
  ] });
}
const ThemeTogglerTwo = () => {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => toggleTheme(theme === "dark" ? "light" : "dark"),
      className: "inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-brand-500 hover:bg-brand-600",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "hidden dark:block",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.99998 1.5415C10.4142 1.5415 10.75 1.87729 10.75 2.2915V3.5415C10.75 3.95572 10.4142 4.2915 9.99998 4.2915C9.58577 4.2915 9.24998 3.95572 9.24998 3.5415V2.2915C9.24998 1.87729 9.58577 1.5415 9.99998 1.5415ZM10.0009 6.79327C8.22978 6.79327 6.79402 8.22904 6.79402 10.0001C6.79402 11.7712 8.22978 13.207 10.0009 13.207C11.772 13.207 13.2078 11.7712 13.2078 10.0001C13.2078 8.22904 11.772 6.79327 10.0009 6.79327ZM5.29402 10.0001C5.29402 7.40061 7.40135 5.29327 10.0009 5.29327C12.6004 5.29327 14.7078 7.40061 14.7078 10.0001C14.7078 12.5997 12.6004 14.707 10.0009 14.707C7.40135 14.707 5.29402 12.5997 5.29402 10.0001ZM15.9813 5.08035C16.2742 4.78746 16.2742 4.31258 15.9813 4.01969C15.6884 3.7268 15.2135 3.7268 14.9207 4.01969L14.0368 4.90357C13.7439 5.19647 13.7439 5.67134 14.0368 5.96423C14.3297 6.25713 14.8045 6.25713 15.0974 5.96423L15.9813 5.08035ZM18.4577 10.0001C18.4577 10.4143 18.1219 10.7501 17.7077 10.7501H16.4577C16.0435 10.7501 15.7077 10.4143 15.7077 10.0001C15.7077 9.58592 16.0435 9.25013 16.4577 9.25013H17.7077C18.1219 9.25013 18.4577 9.58592 18.4577 10.0001ZM14.9207 15.9806C15.2135 16.2735 15.6884 16.2735 15.9813 15.9806C16.2742 15.6877 16.2742 15.2128 15.9813 14.9199L15.0974 14.036C14.8045 13.7431 14.3297 13.7431 14.0368 14.036C13.7439 14.3289 13.7439 14.8038 14.0368 15.0967L14.9207 15.9806ZM9.99998 15.7088C10.4142 15.7088 10.75 16.0445 10.75 16.4588V17.7088C10.75 18.123 10.4142 18.4588 9.99998 18.4588C9.58577 18.4588 9.24998 18.123 9.24998 17.7088V16.4588C9.24998 16.0445 9.58577 15.7088 9.99998 15.7088ZM5.96356 15.0972C6.25646 14.8043 6.25646 14.3295 5.96356 14.0366C5.67067 13.7437 5.1958 13.7437 4.9029 14.0366L4.01902 14.9204C3.72613 15.2133 3.72613 15.6882 4.01902 15.9811C4.31191 16.274 4.78679 16.274 5.07968 15.9811L5.96356 15.0972ZM4.29224 10.0001C4.29224 10.4143 3.95645 10.7501 3.54224 10.7501H2.29224C1.87802 10.7501 1.54224 10.4143 1.54224 10.0001C1.54224 9.58592 1.87802 9.25013 2.29224 9.25013H3.54224C3.95645 9.25013 4.29224 9.58592 4.29224 10.0001ZM4.9029 5.9637C5.1958 6.25659 5.67067 6.25659 5.96356 5.9637C6.25646 5.6708 6.25646 5.19593 5.96356 4.90303L5.07968 4.01915C4.78679 3.72626 4.31191 3.72626 4.01902 4.01915C3.72613 4.31204 3.72613 4.78692 4.01902 5.07981L4.9029 5.9637Z",
                fill: "currentColor"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "dark:hidden",
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M17.4547 11.97L18.1799 12.1611C18.265 11.8383 18.1265 11.4982 17.8401 11.3266C17.5538 11.1551 17.1885 11.1934 16.944 11.4207L17.4547 11.97ZM8.0306 2.5459L8.57989 3.05657C8.80718 2.81209 8.84554 2.44682 8.67398 2.16046C8.50243 1.8741 8.16227 1.73559 7.83948 1.82066L8.0306 2.5459ZM12.9154 13.0035C9.64678 13.0035 6.99707 10.3538 6.99707 7.08524H5.49707C5.49707 11.1823 8.81835 14.5035 12.9154 14.5035V13.0035ZM16.944 11.4207C15.8869 12.4035 14.4721 13.0035 12.9154 13.0035V14.5035C14.8657 14.5035 16.6418 13.7499 17.9654 12.5193L16.944 11.4207ZM16.7295 11.7789C15.9437 14.7607 13.2277 16.9586 10.0003 16.9586V18.4586C13.9257 18.4586 17.2249 15.7853 18.1799 12.1611L16.7295 11.7789ZM10.0003 16.9586C6.15734 16.9586 3.04199 13.8433 3.04199 10.0003H1.54199C1.54199 14.6717 5.32892 18.4586 10.0003 18.4586V16.9586ZM3.04199 10.0003C3.04199 6.77289 5.23988 4.05695 8.22173 3.27114L7.83948 1.82066C4.21532 2.77574 1.54199 6.07486 1.54199 10.0003H3.04199ZM6.99707 7.08524C6.99707 5.52854 7.5971 4.11366 8.57989 3.05657L7.48132 2.03522C6.25073 3.35885 5.49707 5.13487 5.49707 7.08524H6.99707Z",
                fill: "currentColor"
              }
            )
          }
        )
      ]
    }
  );
};
function AuthLayout({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0", children: [
    children,
    /* @__PURE__ */ jsx("div", { className: "items-center w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 hidden", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center z-1", children: [
      /* @__PURE__ */ jsx(GridShape, {}),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center max-w-xs", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", className: "block mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            width: 231,
            height: 48,
            src: "../images/logo/auth-logo.svg",
            alt: "Logo"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-gray-400 dark:text-white/60", children: "Free and Open-Source Tailwind CSS Admin Dashboard Template" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed z-50 hidden bottom-6 right-6 sm:block", children: /* @__PURE__ */ jsx(ThemeTogglerTwo, {}) })
  ] }) });
}
function Login() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "Signin" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Access your account to manage appointments, prescriptions, and more." })
    ] }),
    /* @__PURE__ */ jsx(AuthLayout, { children: /* @__PURE__ */ jsx(SignInForm, { canResetPassword: true, status: "heh" }) })
  ] });
}
export {
  Login as default
};
