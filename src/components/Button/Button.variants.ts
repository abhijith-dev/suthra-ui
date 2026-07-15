import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "button-base",
  {
    variants: {
      variant: {
        normal: "button-normal",
        glass: "button-glass",
        dark: "button-dark"
      },
      intent: {
        primary: "button-intent-primary",
        secondary: "button-intent-secondary",
        danger: "button-intent-danger",
        ghost: "button-intent-ghost",
        outline: "button-intent-outline"
      },
      size: {
        xs: "button-size-xs",
        sm: "button-size-sm",
        md: "button-size-md",
        lg: "button-size-lg",
        xl: "button-size-xl"
      }
    },
    compoundVariants: [
      {
        variant: "dark",
        intent: "primary",
        className: "button-dark-primary"
      },
      {
        variant: "glass",
        intent: "primary",
        className: "button-glass-primary"
      }
    ],
    defaultVariants: {
      variant: "normal",
      intent: "primary",
      size: "md"
    }
  }
);
