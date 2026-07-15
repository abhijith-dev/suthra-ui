import { forwardRef, useState, type InputHTMLAttributes } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Slider.module.css";

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    SharedVisualProps {
  label?: string;
  showValue?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      label,
      showValue = true,
      min = 0,
      max = 100,
      value,
      defaultValue,
      variant = "normal",
      size = "md",
      state = "default",
      className,
      ...props
    },
    ref
  ) => {
    const initialValue = Number(defaultValue ?? min);
    const [internalValue, setInternalValue] = useState(initialValue);
    const current = typeof value === "number" ? value : internalValue;

    return (
      <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
        {label ? <label className={styles.label}>{label}</label> : null}
        <div className={styles.row}>
          <input
            ref={ref}
            type="range"
            className={styles.control}
            min={min}
            max={max}
            value={current}
            onChange={(event) => {
              setInternalValue(Number(event.target.value));
              props.onChange?.(event);
            }}
            {...props}
          />
          {showValue ? <span className={styles.hint}>{current}</span> : null}
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";
