import { forwardRef } from "react";

import { cn } from "../../lib/cn";
import { buttonVariants } from "./Button.variants";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      intent,
      size,
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
          isDisabled && "pointer-events-none",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="size-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-90"
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
