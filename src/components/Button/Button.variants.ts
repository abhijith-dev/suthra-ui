import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-xl border text-sm font-semibold",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50"
  ].join(" "),
  {
    variants: {
      variant: {
        normal: "bg-white text-slate-900 border-slate-200 shadow-sm hover:shadow-md transition-all duration-200",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 shadow-glass-sm hover:bg-white/20 text-white transition-all duration-200",
        modern:
          "bg-slate-950 text-white border-slate-700 transition-[background-color,border-color,box-shadow,color,transform] duration-100 ease-linear focus-visible:ring-blue-400"
      },
      intent: {
        primary: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
        secondary: "bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200",
        danger: "bg-red-600 text-white border-red-600 hover:bg-red-700",
        ghost: "bg-transparent border-transparent hover:bg-slate-100",
        outline: "bg-transparent border-slate-400 text-slate-900 hover:bg-slate-50"
      },
      size: {
        xs: "h-7 px-2.5 text-xs",
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
        xl: "h-12 px-6 text-base"
      }
    },
    compoundVariants: [
      {
        variant: "modern",
        intent: "primary",
        className: "shadow-glow-primary"
      },
      {
        variant: "glass",
        intent: "primary",
        className: "text-white border-white/30"
      }
    ],
    defaultVariants: {
      variant: "normal",
      intent: "primary",
      size: "md"
    }
  }
);
