import { forwardRef, useId, type SelectHTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Select.module.css";

export type SelectOption = { label: string; value: string };

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    SharedVisualProps {
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      hint,
      error,
      options,
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
    const selectId = id ?? generatedId;
    const finalState = error ? "error" : state;

    return (
      <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state: finalState })}>
        {label ? (
          <label className={styles.label} htmlFor={selectId}>
            {label}
          </label>
        ) : null}
        <select
          ref={ref}
          id={selectId}
          className={styles.control}
          aria-invalid={finalState === "error" || undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? <p className={styles.error}>{error}</p> : null}
        {!error && hint ? <p className={styles.hint}>{hint}</p> : null}
      </div>
    );
  }
);

Select.displayName = "Select";
