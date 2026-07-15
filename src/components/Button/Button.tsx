import { forwardRef } from "react";

import { cn } from "../../lib/cn";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";
import "./Button.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      intent,
      size,
      radius = "md",
      fullWidth = false,
      elevated = false,
      animated = true,
      disabled,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          buttonVariants({ variant, intent, size }),
          fullWidth && "button-full-width",
          elevated && "button-elevated",
          animated && "button-animated",
          radius === "sm" && "button-radius-sm",
          radius === "md" && "button-radius-md",
          radius === "lg" && "button-radius-lg",
          radius === "pill" && "button-radius-pill",
          isDisabled && "button-disabled",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="button-spinner"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="button-spinner-track"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="button-spinner-head"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
