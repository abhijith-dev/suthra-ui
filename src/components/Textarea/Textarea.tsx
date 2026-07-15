import { forwardRef, useId, type TextareaHTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Textarea.module.css";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    SharedVisualProps {
  label?: string;
  hint?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
    const textareaId = id ?? generatedId;
    const finalState = error ? "error" : state;

    return (
      <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state: finalState })}>
        {label ? (
          <label className={styles.label} htmlFor={textareaId}>
            {label}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          className={styles.control}
          aria-invalid={finalState === "error" || undefined}
          {...props}
        />
        {error ? <p className={styles.error}>{error}</p> : null}
        {!error && hint ? <p className={styles.hint}>{hint}</p> : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
