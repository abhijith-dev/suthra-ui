import { useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./Switch.module.css";

export interface SwitchProps extends SharedVisualProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch({
  checked,
  defaultChecked,
  disabled,
  label,
  onCheckedChange,
  variant = "normal",
  size = "md",
  state = "default",
  className
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(Boolean(defaultChecked));
  const isControlled = typeof checked === "boolean";
  const current = isControlled ? checked : internalChecked;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={current}
      disabled={disabled}
      className={cn(styles.root, styles.inline, className)}
      {...visualDataAttrs({ variant, size, state: current ? "success" : state })}
      onClick={() => {
        const next = !current;
        if (!isControlled) {
          setInternalChecked(next);
        }
        onCheckedChange?.(next);
      }}
    >
      <span className={cn(styles.surface, styles.row, styles.clickable)}>
        <span>{current ? "On" : "Off"}</span>
        {label ? <span>{label}</span> : null}
      </span>
    </button>
  );
}
