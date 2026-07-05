import { forwardRef, useId } from "react";

import { cn } from "../../lib/cn";
import {
  inputElementPositionVariants,
  inputFieldVariants
} from "./Input.variants";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "normal",
      size = "md",
      state = "default",
      label,
      hint,
      error,
      leftElement,
      rightElement,
      isLoading = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const effectiveState = error ? "error" : state;
    const resolvedRightElement = isLoading ? (
      <span className={styles.spinner} aria-hidden="true" />
    ) : (
      rightElement
    );
    const hasLeft = Boolean(leftElement);
    const hasRight = Boolean(resolvedRightElement);

    return (
      <div
        className={cn(styles.wrapper, className)}
        data-variant={variant}
        data-size={size}
        data-state={effectiveState}
      >
        {label ? (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        ) : null}

        <div className={styles.inputWrapper}>
          {leftElement ? (
            <span className={inputElementPositionVariants({ side: "left" })}>
              {leftElement}
            </span>
          ) : null}

          <input
            ref={ref}
            id={inputId}
            className={inputFieldVariants({ hasLeft, hasRight })}
            aria-invalid={effectiveState === "error" || undefined}
            {...props}
          />

          {resolvedRightElement ? (
            <span className={inputElementPositionVariants({ side: "right" })}>
              {resolvedRightElement}
            </span>
          ) : null}
        </div>

        {error ? <p className={styles.error}>{error}</p> : null}
        {!error && hint ? <p className={styles.hint}>{hint}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
