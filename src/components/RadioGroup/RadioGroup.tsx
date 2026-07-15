import { useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./RadioGroup.module.css";

export interface RadioGroupOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends SharedVisualProps {
  name: string;
  value?: string;
  defaultValue?: string;
  options: RadioGroupOption[];
  onValueChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({
  name,
  value,
  defaultValue,
  options,
  onValueChange,
  variant = "normal",
  size = "md",
  state = "default",
  className
}: RadioGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const isControlled = typeof value === "string";
  const currentValue = isControlled ? value : internalValue;

  return (
    <div className={cn(styles.root, className)} {...visualDataAttrs({ variant, size, state })}>
      {options.map((option) => (
        <label key={option.value} className={cn(styles.row, styles.surface)}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={currentValue === option.value}
            disabled={option.disabled}
            onChange={() => {
              if (!isControlled) {
                setInternalValue(option.value);
              }
              onValueChange?.(option.value);
            }}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
