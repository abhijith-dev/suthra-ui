import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./FormField.module.css";

export interface FormFieldProps extends SharedVisualProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  hint,
  error,
  children,
  className,
  variant = "normal",
  size = "md",
  state = "default"
}: FormFieldProps) {
  const finalState = error ? "error" : state;

  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state: finalState })}>
      {label ? <div className={styles.label}>{label}</div> : null}
      {children}
      {error ? <p className={styles.error}>{error}</p> : null}
      {!error && hint ? <p className={styles.hint}>{hint}</p> : null}
    </div>
  );
}
