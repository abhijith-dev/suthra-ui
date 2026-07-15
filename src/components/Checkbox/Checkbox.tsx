import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    SharedVisualProps {
  label: ReactNode;
  hint?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      hint,
      error,
      variant = "normal",
      size = "md",
      state = "default",
      className,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = id ?? generatedId;
    const finalState = error ? "error" : state;

    return (
      <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state: finalState })}>
        <label className={cn(styles.row, styles.surface)} htmlFor={checkboxId}>
          <input ref={ref} id={checkboxId} type="checkbox" {...props} />
          <span>{label}</span>
        </label>
        {error ? <p className={styles.error}>{error}</p> : null}
        {!error && hint ? <p className={styles.hint}>{hint}</p> : null}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
