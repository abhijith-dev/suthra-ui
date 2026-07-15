import { useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { visualDataAttrs } from "../_shared/common";
import type { SharedVisualProps } from "../_shared/common.types";
import styles from "./ToggleButton.module.css";

export interface ToggleButtonProps extends SharedVisualProps {
  children: ReactNode;
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function ToggleButton({
  children,
  pressed,
  defaultPressed,
  onPressedChange,
  disabled,
  variant = "normal",
  size = "md",
  state = "default",
  className
}: ToggleButtonProps) {
  const [internalPressed, setInternalPressed] = useState(Boolean(defaultPressed));
  const isControlled = typeof pressed === "boolean";
  const current = isControlled ? pressed : internalPressed;

  return (
    <button
      type="button"
      aria-pressed={current}
      disabled={disabled}
      className={cn(styles.root, styles.inline, className)}
      {...visualDataAttrs({ variant, size, state: current ? "success" : state })}
      onClick={() => {
        const next = !current;
        if (!isControlled) {
          setInternalPressed(next);
        }
        onPressedChange?.(next);
      }}
    >
      <span className={cn(styles.surface, styles.clickable)}>{children}</span>
    </button>
  );
}
