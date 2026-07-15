import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./TimePicker.module.css";

export interface TimePickerProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    SharedVisualProps {
  label?: string;
}

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, className, variant = "normal", size = "md", state = "default", id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
        {label ? (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        ) : null}
        <input ref={ref} id={inputId} type="time" className={styles.control} {...props} />
      </div>
    );
  }
);

TimePicker.displayName = "TimePicker";
